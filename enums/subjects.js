/* Elite Classes — Enum & Dynamic Academic Subjects Definition */

const SUBJECT_ENUM = Object.freeze({
    MATHEMATICS: 'Mathematics',
    SCIENCE: 'Science',
    PHYSICS: 'Physics',
    CHEMISTRY: 'Chemistry',
    BIOLOGY: 'Biology',
    ENGLISH: 'English',
    SOCIAL_STUDIES: 'Social Studies',
    HINDI: 'Hindi',
    COMPUTER_SCIENCE: 'Computer Science',
    GENERAL_KNOWLEDGE: 'General Knowledge',
    ALL_SUBJECTS: 'All Subjects'
});

let SUBJECT_OPTIONS = Object.values(SUBJECT_ENUM);

async function syncSubjectsFromDB() {
    if (typeof DBService !== 'undefined' && typeof DBService.fetchSubjects === 'function') {
        const subs = await DBService.fetchSubjects();
        if (subs && subs.length > 0) {
            SUBJECT_OPTIONS = [...subs.map(s => s.name), 'All Subjects'];
        }
    }
}
