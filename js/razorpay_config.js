/* Elite Classes — Dynamic Razorpay Payment & Support Fee Gateway */

(function (window) {
    'use strict';

    const RazorpayGateway = {
        _scriptLoadingPromise: null,

        // Ensure Razorpay Checkout script is loaded
        loadCheckoutScript() {
            if (window.Razorpay) {
                return Promise.resolve(true);
            }
            if (this._scriptLoadingPromise) {
                return this._scriptLoadingPromise;
            }

            this._scriptLoadingPromise = new Promise((resolve, reject) => {
                const existingScript = document.querySelector('script[src*="checkout.razorpay.com"]');
                if (existingScript) {
                    if (window.Razorpay) {
                        resolve(true);
                        return;
                    }
                    existingScript.addEventListener('load', () => resolve(true));
                    existingScript.addEventListener('error', () => reject(new Error('Failed to load Razorpay Checkout SDK')));
                    setTimeout(() => {
                        if (window.Razorpay) resolve(true);
                        else reject(new Error('Razorpay SDK loading timeout'));
                    }, 2500);
                    return;
                }

                const script = document.createElement('script');
                script.src = 'https://checkout.razorpay.com/v1/checkout.js';
                script.async = true;
                script.onload = () => {
                    console.log('[RazorpayGateway] SDK loaded successfully');
                    resolve(true);
                };
                script.onerror = () => {
                    console.error('[RazorpayGateway] Failed to load Razorpay Checkout SDK');
                    reject(new Error('Failed to load Razorpay Checkout SDK. Check your internet connection.'));
                };
                document.head.appendChild(script);
            });

            return this._scriptLoadingPromise;
        },

        // Fetch runtime payment & support fee settings from DBService or localStorage
        async getActiveConfig() {
            let cfg = null;
            if (typeof DBService !== 'undefined' && typeof DBService.getPaymentConfig === 'function') {
                try {
                    cfg = await DBService.getPaymentConfig();
                } catch (e) {
                    console.warn('[RazorpayGateway] DB config fallback:', e);
                }
            }

            let storedKey = '';
            try {
                storedKey = localStorage.getItem('ec_razorpay_key_id') || '';
                if (storedKey && (storedKey === 'rzp_test_placeholder' || storedKey.toLowerCase().includes('placeholder'))) {
                    localStorage.removeItem('ec_razorpay_key_id');
                    storedKey = '';
                }
            } catch (e) {}

            const LIVE_DEFAULT_KEY = 'rzp_live_ThjCyikI4P88f5';

            if (!cfg) {
                cfg = {
                    razorpay_key_id: storedKey || LIVE_DEFAULT_KEY,
                    razorpay_enabled: localStorage.getItem('ec_razorpay_enabled') !== 'false',
                    donation_purpose: localStorage.getItem('ec_donation_purpose') || 'Platform Maintenance & Educational Support Fee',
                    admin_upi_id: localStorage.getItem('ec_admin_upi_id') || '9911519237@upi'
                };
            }

            if (!cfg.razorpay_key_id || cfg.razorpay_key_id.toLowerCase().includes('placeholder')) {
                cfg.razorpay_key_id = LIVE_DEFAULT_KEY;
            }

            return {
                ...cfg,
                keyId: cfg.razorpay_key_id,
                enabled: cfg.razorpay_enabled !== false
            };
        },

        // Launch Razorpay support fee checkout popup
        async openCheckout(params = {}) {
            const {
                amount = 299,
                candidateName = '',
                candidatePhone = '',
                candidateEmail = '',
                planName = 'Civil Services Annual Pass',
                curriculum = 'Civil Services (UPSC & State PCS)',
                trackingCode = 'EC-TS-CIVIL',
                onSuccess,
                onFailure,
                onDismiss
            } = params;

            const config = await this.getActiveConfig();
            const rawKey = (config.razorpay_key_id || '').trim();

            // If key is a placeholder or not yet provided, offer sandbox simulation
            const isPlaceholderKey = !rawKey || rawKey === 'rzp_test_placeholder' || rawKey.toLowerCase().includes('placeholder');

            if (isPlaceholderKey) {
                const proceedWithSimulation = window.confirm(
                    `[Sandbox Evaluation Mode]\n\n` +
                    `Razorpay Key ID is currently set to placeholder ('${rawKey}').\n\n` +
                    `Would you like to simulate a successful ₹${amount} Support Fee payment and verify instant 365-day pass activation?\n\n` +
                    `(To connect real payments, paste your Razorpay Key ID in Admin Portal Settings!)`
                );

                if (proceedWithSimulation) {
                    const mockPaymentId = 'pay_sim_' + Math.random().toString(36).substring(2, 12).toUpperCase();
                    if (typeof onSuccess === 'function') {
                        onSuccess({
                            razorpay_payment_id: mockPaymentId,
                            is_simulated: true,
                            amount: amount
                        });
                    }
                    return;
                } else {
                    if (typeof onDismiss === 'function') onDismiss();
                    return;
                }
            }

            // Load real Razorpay SDK
            try {
                await this.loadCheckoutScript();
            } catch (err) {
                if (typeof onFailure === 'function') {
                    onFailure(err);
                } else {
                    alert('Could not initialize payment gateway: ' + err.message);
                }
                return;
            }

            if (!window.Razorpay) {
                const err = new Error('Razorpay SDK is not available.');
                if (typeof onFailure === 'function') onFailure(err);
                return;
            }

            const cleanPhone = (candidatePhone || '').replace(/\D/g, '');
            const amountInPaise = Math.round(Number(amount) * 100);

            let logoImage = undefined;
            if (typeof window !== 'undefined' && window.location && window.location.origin) {
                logoImage = window.location.origin + '/eliteLogo_crest.png';
            }

            const options = {
                key: rawKey,
                amount: amountInPaise,
                currency: 'INR',
                name: 'Elite Classes',
                description: config.donation_purpose || 'Platform Maintenance & Educational Support Fee',
                image: logoImage,
                prefill: {
                    name: candidateName || '',
                    contact: cleanPhone ? '+91' + cleanPhone.slice(-10) : '',
                    email: candidateEmail || ''
                },
                notes: {
                    purpose: 'Student Educational Support Fee & Server Maintenance',
                    curriculum: curriculum,
                    plan: planName,
                    tracking_code: trackingCode
                },
                theme: {
                    color: '#047857' // Deep emerald theme
                },
                handler: function (response) {
                    console.log('[RazorpayGateway] Payment capture success:', response);
                    if (typeof onSuccess === 'function') {
                        onSuccess(response);
                    }
                },
                modal: {
                    ondismiss: function () {
                        console.log('[RazorpayGateway] Checkout modal dismissed');
                        if (typeof onDismiss === 'function') {
                            onDismiss();
                        }
                    }
                }
            };

            try {
                const rzpInstance = new window.Razorpay(options);
                rzpInstance.on('payment.failed', function (response) {
                    console.error('[RazorpayGateway] Payment failed:', response.error);
                    if (typeof onFailure === 'function') {
                        onFailure(response.error);
                    }
                });
                rzpInstance.open();
            } catch (initErr) {
                console.error('[RazorpayGateway] Exception initializing Checkout:', initErr);
                if (typeof onFailure === 'function') {
                    onFailure(initErr);
                }
            }
        },

        // Backwards compatibility alias
        openDonationCheckout(params = {}) {
            return this.openCheckout(params);
        }
    };

    // Export globally and for Node.js test environments
    window.RazorpayGateway = RazorpayGateway;
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { RazorpayGateway };
    }
})(typeof window !== 'undefined' ? window : global);
