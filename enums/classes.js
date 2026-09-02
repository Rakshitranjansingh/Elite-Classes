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
    CLASS_10: 'Class 10'
});

let CLASS_OPTIONS = Object.values(CLASS_ENUM);

async function syncClassesFromDB() {
    if (typeof DBService !== 'undefined' && typeof DBService.fetchClasses === 'function') {
        const classes = await DBService.fetchClasses();
        if (classes && classes.length > 0) {
            CLASS_OPTIONS = classes.map(c => c.name);
        }
    }
}
