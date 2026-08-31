/* Elite Classes — Component & Module HTML Injector (moduleLoader.js) */

const ModuleLoader = {
    async loadModuleHTML(url, targetElementId) {
        const target = document.getElementById(targetElementId);
        if (!target) return;
        try {
            const resp = await fetch(url);
            if (resp.ok) {
                const htmlContent = await resp.text();
                target.innerHTML = htmlContent;
            }
        } catch (e) {
            console.warn(`[ModuleLoader] Local fetch failed for ${url}, fallback active:`, e);
        }
    },

    async initAllModules() {
        // Load studentView main view container
        await this.loadModuleHTML('modules/studentView/studentView.html', 'app-studentview-root');
        
        // Load sub-modules inside studentView placeholders
        await this.loadModuleHTML('modules/notices/notices.html', 'module-notices-container');
        await this.loadModuleHTML('modules/courses/courses.html', 'module-courses-container');
        await this.loadModuleHTML('modules/testseries/testseries.html', 'module-testseries-container');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    ModuleLoader.initAllModules();
});
