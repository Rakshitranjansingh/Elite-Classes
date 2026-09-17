/**
 * =============================================================================
 * ELITE CLASSES — TODAY VIEW SWITCHBOARD & CONTROLLER (today.js)
 * Dynamically routes and renders the "Today" dashboard based on student's class
 * without modifying or redesigning the core architecture.
 * =============================================================================
 */

(function () {
    window.TodayClassHandlers = window.TodayClassHandlers || {};

    /**
     * Register a class-specific handler
     * @param {string} classKey - e.g. 'class10', 'class9', 'class8', 'default'
     * @param {object} handler - Object implementing render(container, student, helpers)
     */
    window.registerTodayClassHandler = function (classKey, handler) {
        if (!classKey || typeof handler !== 'object' || typeof handler.render !== 'function') {
            console.warn('[TodayRouter] Invalid handler registration for:', classKey);
            return;
        }
        window.TodayClassHandlers[classKey.toLowerCase()] = handler;
    };

    /**
     * Normalize class name to safe alphanumeric key
     * e.g. "Class 10" -> "class10", "10th" -> "class10", "Class 9" -> "class9"
     */
    function normalizeClassKey(cls) {
        if (!cls) return 'default';
        const clean = cls.toString().trim().toLowerCase().replace(/[^a-z0-9]/g, '');
        if (clean.includes('civil')) return 'civilservices';
        if (clean.includes('10')) return 'class10';
        if (clean.includes('9')) return 'class9';
        if (clean.includes('8')) return 'class8';
        if (clean.includes('7')) return 'class7';
        if (clean.includes('6')) return 'class6';
        if (clean.includes('5')) return 'class5';
        if (clean.includes('lkg')) return 'lkg';
        if (clean.includes('ukg')) return 'ukg';
        return clean || 'default';
    }

    /**
     * Helper to load external class script asynchronously if not yet loaded
     */
    function loadClassScriptAsync(scriptSrc) {
        return new Promise((resolve) => {
            // Check if script already exists in document
            const existing = document.querySelector(`script[src*="${scriptSrc}"]`);
            if (existing) {
                return resolve(true);
            }
            const s = document.createElement('script');
            s.src = scriptSrc;
            s.async = true;
            s.onload = () => resolve(true);
            s.onerror = () => {
                console.warn(`[TodayRouter] Script ${scriptSrc} not found or failed to load.`);
                resolve(false);
            };
            document.head.appendChild(s);
        });
    }

    /**
     * Standard UI escape helper
     */
    function escapeHtml(str) {
        if (str === null || str === undefined) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    /**
     * Main dispatch method for rendering the Today dashboard
     */
    window.TodayViewManager = {
        render: async function (targetContainer, studentData) {
            const container = targetContainer || document.getElementById('st-today-container');
            const student = studentData || (typeof currentStudent !== 'undefined' ? currentStudent : null);

            if (!container || !student) return;

            const rawCls = student.cls || student.class || 'Class 10';
            const classKey = normalizeClassKey(rawCls);

            const helpers = {
                escapeHtml: escapeHtml,
                switchTab: typeof switchStudentTab === 'function' ? switchStudentTab : (t) => console.log('Tab:', t),
                showToast: typeof showToast === 'function' ? showToast : (m) => console.log('Toast:', m),
                rawClass: rawCls,
                formattedDate: new Intl.DateTimeFormat('en-IN', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }).format(new Date())
            };

            // If handler already registered, render immediately
            if (window.TodayClassHandlers[classKey]) {
                window.TodayClassHandlers[classKey].render(container, student, helpers);
                return;
            }

            // Try dynamically loading the class-specific script
            // Handles both relative paths from root or sub-pages
            const basePath = window.location.pathname.includes('/modules/') ? '../today/' : 'modules/studentView/today/';
            const scriptLoaded = await loadClassScriptAsync(`${basePath}${classKey}.js`);

            if (scriptLoaded && window.TodayClassHandlers[classKey]) {
                window.TodayClassHandlers[classKey].render(container, student, helpers);
                return;
            }

            // Ensure default fallback is loaded
            if (!window.TodayClassHandlers['default']) {
                await loadClassScriptAsync(`${basePath}defaultClass.js`);
            }

            if (window.TodayClassHandlers['default']) {
                window.TodayClassHandlers['default'].render(container, student, helpers);
            }
        }
    };

    window.renderTodayForClass = window.TodayViewManager.render;
})();
