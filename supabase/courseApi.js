/* =============================================================================
   ELITE CLASSES — MODULAR COURSE DATABASE SERVICE (courseApi.js)
   Dedicated Course LMS progression, module mastery, and quiz analytics layer
   - Offline-First with resilient localStorage caching
   - Progressive module unlocking (>= 70% passing threshold)
   - Real-time cloud sync with Supabase PostgreSQL
   ============================================================================= */

const CourseDBService = {
    // ---------------------------------------------------------
    // 1. SAVE MODULE PROGRESS & QUIZ ATTEMPT
    // ---------------------------------------------------------
    async saveModuleProgress(payload) {
        const studentId = payload.student_id;
        const chapterId = payload.chapter_id;
        const moduleId = payload.module_id;
        const score = parseInt(payload.quiz_score || 0, 10);
        const maxScore = parseInt(payload.quiz_max_score || 10, 10);
        const accuracyPct = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
        const isPassed = accuracyPct >= 70; // 70% passing threshold to unlock next module

        const recordId = `prog_${studentId}_${chapterId}_${moduleId}`;
        const moduleRecord = {
            id: recordId,
            student_id: studentId,
            student_name: payload.student_name || 'Student',
            cls: payload.cls || 'Class 10',
            subject: payload.subject || 'Science',
            chapter_id: chapterId,
            module_id: moduleId,
            module_number: parseInt(payload.module_number || 1, 10),
            is_completed: isPassed || Boolean(payload.is_completed),
            quiz_score: score,
            quiz_max_score: maxScore,
            accuracy_pct: accuracyPct,
            answers_payload: payload.answers_payload || {},
            completed_at: isPassed ? new Date().toISOString() : null,
            updated_at: new Date().toISOString()
        };

        // 1. Update Local Storage Cache
        const cacheKey = `ec_course_progress_${studentId}_${chapterId}`;
        let localProgressMap = {};
        try {
            localProgressMap = JSON.parse(localStorage.getItem(cacheKey) || '{}');
        } catch (e) {
            localProgressMap = {};
        }

        // Keep highest score if re-attempted
        const existingRec = localProgressMap[moduleId];
        if (existingRec && existingRec.quiz_score > score) {
            moduleRecord.quiz_score = existingRec.quiz_score;
            moduleRecord.accuracy_pct = existingRec.accuracy_pct;
            moduleRecord.is_completed = existingRec.is_completed || isPassed;
        }

        localProgressMap[moduleId] = moduleRecord;
        try {
            localStorage.setItem(cacheKey, JSON.stringify(localProgressMap));
        } catch (e) {}

        // Compute aggregate chapter stats
        const totalModules = 20;
        const completedCount = Object.values(localProgressMap).filter(m => m.is_completed).length;
        const totalScore = Object.values(localProgressMap).reduce((acc, m) => acc + (m.quiz_score || 0), 0);
        const completionPct = Math.round((completedCount / totalModules) * 100);

        const chapterStats = {
            id: `chstats_${studentId}_${chapterId}`,
            student_id: studentId,
            chapter_id: chapterId,
            modules_completed: completedCount,
            total_modules: totalModules,
            completion_percentage: completionPct,
            total_quiz_score: totalScore,
            total_quiz_max: totalModules * 10,
            updated_at: new Date().toISOString()
        };

        const statsCacheKey = `ec_course_stats_${studentId}_${chapterId}`;
        try {
            localStorage.setItem(statsCacheKey, JSON.stringify(chapterStats));
        } catch (e) {}

        // 2. Sync to Supabase Cloud if connected
        if (typeof isSupabaseConnected === 'function' && isSupabaseConnected()) {
            try {
                await supabaseClient.from('course_module_progress').upsert([moduleRecord]);
                await supabaseClient.from('course_chapter_stats').upsert([chapterStats]);
            } catch (cloudErr) {
                console.warn('[CourseDBService] Cloud sync error, queued locally:', cloudErr);
                if (typeof DBService !== 'undefined' && DBService.enqueueOfflineMutation) {
                    DBService.enqueueOfflineMutation('saveCourseProgress', { moduleRecord, chapterStats });
                }
            }
        }

        return {
            success: true,
            isPassed,
            moduleRecord,
            chapterStats
        };
    },

    // ---------------------------------------------------------
    // 2. FETCH CHAPTER PROGRESS FOR A STUDENT
    // ---------------------------------------------------------
    async fetchChapterProgress(studentId, chapterId) {
        const cacheKey = `ec_course_progress_${studentId}_${chapterId}`;
        let progressMap = {};

        // Read Local Cache first for zero-latency UI
        try {
            progressMap = JSON.parse(localStorage.getItem(cacheKey) || '{}');
        } catch (e) {
            progressMap = {};
        }

        if (typeof isSupabaseConnected === 'function' && isSupabaseConnected()) {
            try {
                const { data, error } = await supabaseClient
                    .from('course_module_progress')
                    .select('*')
                    .eq('student_id', studentId)
                    .eq('chapter_id', chapterId);

                if (!error && Array.isArray(data)) {
                    data.forEach(row => {
                        progressMap[row.module_id] = row;
                    });
                    try {
                        localStorage.setItem(cacheKey, JSON.stringify(progressMap));
                    } catch (e) {}
                }
            } catch (fetchErr) {
                console.warn('[CourseDBService] Cloud fetch error, using cache:', fetchErr);
            }
        }

        return progressMap;
    },

    // ---------------------------------------------------------
    // 3. FETCH AGGREGATE CHAPTER STATS
    // ---------------------------------------------------------
    async fetchChapterStats(studentId, chapterId) {
        const statsCacheKey = `ec_course_stats_${studentId}_${chapterId}`;
        let stats = null;

        try {
            stats = JSON.parse(localStorage.getItem(statsCacheKey));
        } catch (e) {}

        if (!stats && typeof isSupabaseConnected === 'function' && isSupabaseConnected()) {
            try {
                const { data, error } = await supabaseClient
                    .from('course_chapter_stats')
                    .select('*')
                    .eq('student_id', studentId)
                    .eq('chapter_id', chapterId)
                    .maybeSingle();

                if (!error && data) {
                    stats = data;
                    localStorage.setItem(statsCacheKey, JSON.stringify(stats));
                }
            } catch (e) {}
        }

        if (!stats) {
            stats = {
                student_id: studentId,
                chapter_id: chapterId,
                modules_completed: 0,
                total_modules: 20,
                completion_percentage: 0,
                total_quiz_score: 0,
                total_quiz_max: 200
            };
        }

        return stats;
    }
};

// Universal Global Attachments
if (typeof window !== 'undefined') {
    window.CourseDBService = CourseDBService;
    if (typeof window.DBService !== 'undefined') {
        window.DBService.course = CourseDBService;
    }
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CourseDBService;
}
