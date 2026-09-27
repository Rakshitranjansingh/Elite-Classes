/**
 * Elite Classes - UPSC Progress & Completion Tracking Service
 * Tracks sub-topic and topic completion, quiz attempts, and syllabus coverage
 */
const UPSCProgressService = {
    getStudentId() {
        let activeStudent = null;
        try {
            activeStudent = JSON.parse(localStorage.getItem('ec_active_student'));
        } catch(e) {}
        return activeStudent ? (activeStudent.id || activeStudent.phone || 'st_user') : (localStorage.getItem('ec_student_id') || 'st_guest');
    },

    getStorageKey() {
        return `ec_upsc_progress_${this.getStudentId()}`;
    },

    getProgressMap() {
        try {
            return JSON.parse(localStorage.getItem(this.getStorageKey()) || '{}');
        } catch(e) {
            return {};
        }
    },

    isCompleted(subTopicId) {
        if (!subTopicId) return false;
        const map = this.getProgressMap();
        return Boolean(map[subTopicId] && (map[subTopicId].completed || map[subTopicId].is_completed));
    },

    toggleCompletion(subTopicId, subjectId, topicId) {
        if (!subTopicId) return false;
        const current = this.isCompleted(subTopicId);
        return this.setCompleted(subTopicId, subjectId, topicId, !current);
    },

    setCompleted(subTopicId, subjectId, topicId, isDone = true) {
        if (!subTopicId) return false;
        const key = this.getStorageKey();
        const map = this.getProgressMap();

        if (isDone) {
            map[subTopicId] = {
                completed: true,
                is_completed: true,
                completedAt: new Date().toISOString(),
                subjectId: subjectId || '',
                topicId: topicId || ''
            };
        } else {
            delete map[subTopicId];
        }

        try {
            localStorage.setItem(key, JSON.stringify(map));
            // Dispatch event for instant in-page reactivity
            window.dispatchEvent(new CustomEvent('upsc-progress-changed', {
                detail: { subTopicId, isCompleted: isDone }
            }));
        } catch(e) {
            console.error('Progress save error:', e);
        }

        return isDone;
    },

    getSubjectStats(subject) {
        if (!subject || !subject.topics) return { completed: 0, total: 0, pct: 0 };
        const map = this.getProgressMap();
        let total = 0;
        let completed = 0;

        subject.topics.forEach(t => {
            (t.subtopics || []).forEach(st => {
                total++;
                if (map[st.subTopicId] && (map[st.subTopicId].completed || map[st.subTopicId].is_completed)) {
                    completed++;
                }
            });
        });

        const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
        return { completed, total, pct };
    },

    getTopicStats(topic) {
        if (!topic || !topic.subtopics) return { completed: 0, total: 0, pct: 0 };
        const map = this.getProgressMap();
        let total = topic.subtopics.length;
        let completed = 0;

        topic.subtopics.forEach(st => {
            if (map[st.subTopicId] && (map[st.subTopicId].completed || map[st.subTopicId].is_completed)) {
                completed++;
            }
        });

        const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
        return { completed, total, pct };
    },

    getOverallStats(catalog) {
        if (!catalog || !catalog.subjects) return { completed: 0, total: 0, pct: 0 };
        const map = this.getProgressMap();
        let total = 0;
        let completed = 0;

        catalog.subjects.forEach(subj => {
            (subj.topics || []).forEach(t => {
                (t.subtopics || []).forEach(st => {
                    total++;
                    if (map[st.subTopicId] && (map[st.subTopicId].completed || map[st.subTopicId].is_completed)) {
                        completed++;
                    }
                });
            });
        });

        const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
        return { completed, total, pct };
    }
};

if (typeof module !== 'undefined') {
    module.exports = UPSCProgressService;
}
