/* Elite Classes — Enum & Dynamic Academic Classes Definition */

const CLASS_ENUM = Object.freeze({
    LKG: 'LKG',
    UKG: 'UKG',
    CLASS_1: 'Class 1',
    CLASS_2: 'Class 2',
    CLASS_3: 'Class 3',
    CLASS_4: 'Class 4',
    CLASS_5: 'Class 5',
    CLASS_6: 'Class 6',
    CLASS_7: 'Class 7',
    CLASS_8: 'Class 8',
    CLASS_9: 'Class 9',
    CLASS_10: 'Class 10',
    CIVIL_SERVICES: 'Civil Services'
});

let CLASS_OPTIONS = Object.values(CLASS_ENUM);

async function syncClassesFromDB() {
    if (typeof DBService !== 'undefined' && typeof DBService.fetchClasses === 'function') {
        try {
            const classes = await DBService.fetchClasses();
            if (classes && classes.length > 0) {
                CLASS_OPTIONS = classes.map(c => c.name);
                autoPopulateClassDropdowns();
            }
        } catch (e) {
            console.warn('[Classes] Failed to sync classes from DB:', e);
        }
    }
}

// Dynamically auto-populate class dropdown selects across the application
function autoPopulateClassDropdowns() {
    if (typeof document === 'undefined') return;

    const targetSelectIds = [
        'reg-class',
        'g-onboard-class',
        'f-sclass',
        'sub-filter-class',
        'conv-sub-class'
    ];

    targetSelectIds.forEach(id => {
        const select = document.getElementById(id);
        if (!select) return;

        const currentValue = select.value;
        const firstOption = select.options[0];
        const preserveFirst = firstOption && (firstOption.value === '' || firstOption.value === 'All');

        let html = '';
        if (preserveFirst) {
            html += `<option value="${firstOption.value}">${firstOption.textContent}</option>`;
        }

        CLASS_OPTIONS.forEach(cls => {
            html += `<option value="${cls}">${cls}</option>`;
        });

        select.innerHTML = html;
        if (currentValue) {
            select.value = currentValue;
        }
    });
}

if (typeof window !== 'undefined') {
    window.autoPopulateClassDropdowns = autoPopulateClassDropdowns;
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            autoPopulateClassDropdowns();
            syncClassesFromDB();
        });
    } else {
        autoPopulateClassDropdowns();
        syncClassesFromDB();
    }
}
