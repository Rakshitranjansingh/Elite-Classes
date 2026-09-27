/**
 * Elite Classes — UPSC Course & Test Engine Security Suite
 * Enterprise-grade anti-leak, candidate forensics, and tamper defense:
 * 1. Dynamic SVG Vector Watermark with Student ID, Name, Phone & Timestamp
 * 2. MutationObserver Tamper Defender against DOM deletion / style tampering
 * 3. Content Copy, Right-Click, Print & Save Prevention
 * 4. DevTools Keyboard Shortcut & DPI-Aware Dimension Inspection Detection
 * 5. Private Closure Answer Vault for Assessment Memory Sanitization
 */

const UPSCSecurity = (function() {
    let watermarkObserver = null;
    const _secretAnswerVault = new Map();

    function getActiveStudent() {
        try {
            const raw = localStorage.getItem('ec_active_student');
            if (raw) return JSON.parse(raw);
        } catch(e) {}
        return {
            id: localStorage.getItem('ec_student_id') || 'ASPIRANT_' + Math.random().toString(36).substring(2, 8).toUpperCase(),
            name: 'UPSC Aspirant',
            phone: ''
        };
    }

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function renderWatermark(customLabel) {
        let overlay = document.getElementById('upsc-watermark-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'upsc-watermark-overlay';
            overlay.style.cssText = 'position:fixed; top:0; left:0; width:100vw; height:100vh; pointer-events:none; z-index:99999; opacity:0.045; overflow:hidden;';
            document.body.appendChild(overlay);
        }

        const student = getActiveStudent();
        const studentId = student.id || student.roll_number || 'ST_USER';
        const studentName = student.name || 'Student';
        const phone = student.phone ? ` • ${student.phone}` : '';
        const label = (customLabel || 'UPSC CSE CIVIL SERVICES').toUpperCase();
        const nowStr = new Date().toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

        overlay.innerHTML = `
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="position:fixed; top:0; left:0; width:100vw; height:100vh; pointer-events:none;">
                <defs>
                    <pattern id="upsc-wm-pattern" width="460" height="260" patternUnits="userSpaceOnUse" patternTransform="rotate(-26)">
                        <text x="20" y="40" font-family="'Plus Jakarta Sans', -apple-system, sans-serif" font-size="13" font-weight="900" fill="#0f172a" letter-spacing="1">ELITE CLASSES • UPSC CIVIL SERVICES</text>
                        <text x="45" y="105" font-family="'Plus Jakarta Sans', -apple-system, sans-serif" font-size="12" font-weight="800" fill="#4338ca">${escapeHtml(studentName.toUpperCase())} • ${escapeHtml(studentId.toUpperCase())}${escapeHtml(phone)}</text>
                        <text x="30" y="170" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#334155">${escapeHtml(label)} • ${nowStr}</text>
                        <text x="50" y="230" font-family="'Plus Jakarta Sans', -apple-system, sans-serif" font-size="10.5" font-weight="700" fill="#64748b">AUTHENTIC DIGITAL COPY • LEAKS TRACEABLE</text>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#upsc-wm-pattern)" />
            </svg>
        `;
    }

    function setupWatermarkProtection(customLabel) {
        if (watermarkObserver) watermarkObserver.disconnect();
        const overlay = document.getElementById('upsc-watermark-overlay');
        if (!overlay) return;

        watermarkObserver = new MutationObserver(() => {
            const wm = document.getElementById('upsc-watermark-overlay');
            if (!wm || wm.style.display === 'none' || wm.style.visibility === 'hidden' || parseFloat(window.getComputedStyle(wm).opacity || '1') < 0.02 || wm.children.length === 0) {
                if (wm) {
                    wm.style.display = 'block';
                    wm.style.visibility = 'visible';
                    wm.style.opacity = '0.045';
                }
                renderWatermark(customLabel);
            }
        });

        watermarkObserver.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class', 'id'] });
    }

    function initSecurityGuards(options = {}) {
        const { label = 'UPSC CSE', allowCopy = false } = options;

        // 1. Right Click Prevention
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            return false;
        });

        // 2. DevTools Shortcut Prevention (F12, Ctrl+Shift+I/J/C, Ctrl+U, Ctrl+S, Ctrl+P)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'F12' || e.keyCode === 123) {
                e.preventDefault();
                return false;
            }
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) {
                e.preventDefault();
                return false;
            }
            if ((e.ctrlKey || e.metaKey) && ['u', 'U', 's', 'S', 'p', 'P'].includes(e.key)) {
                e.preventDefault();
                return false;
            }
        });

        // 3. Selection / Copy protection
        if (!allowCopy) {
            document.addEventListener('copy', (e) => {
                const sel = window.getSelection().toString();
                if (sel && sel.length > 8) {
                    e.preventDefault();
                }
            });
            document.addEventListener('dragstart', (e) => {
                e.preventDefault();
                return false;
            });
        }

        // 4. DPI-Aware DevTools Detection
        const dpr = window.devicePixelRatio || 1;
        const threshold = Math.max(220, Math.round(180 * dpr));
        setInterval(() => {
            const widthDiff = Math.abs(window.outerWidth - window.innerWidth);
            const heightDiff = Math.abs(window.outerHeight - window.innerHeight);
            if (widthDiff > threshold || heightDiff > threshold) {
                // Silent guard
            }
        }, 3000);

        // 5. Watermark setup
        renderWatermark(label);
        setupWatermarkProtection(label);
    }

    // Vault methods for assessment questions
    function registerVaultItem(qId, answer, explanation) {
        _secretAnswerVault.set(String(qId), {
            answer: String(answer || '').trim(),
            explanation: String(explanation || '').trim()
        });
    }

    function verifyVaultAnswer(qId, selectedOption) {
        const item = _secretAnswerVault.get(String(qId));
        if (!item) return { isCorrect: false, explanation: '' };
        return {
            isCorrect: String(selectedOption || '').trim() === item.answer,
            correctAnswer: item.answer,
            explanation: item.explanation
        };
    }

    return {
        init: initSecurityGuards,
        registerVaultItem,
        verifyVaultAnswer,
        renderWatermark
    };
})();

if (typeof module !== 'undefined') {
    module.exports = UPSCSecurity;
}
