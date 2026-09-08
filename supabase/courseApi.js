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
        const studentId = payload.student_id || payload.studentId;
        const chapterId = payload.chapter_id || payload.chapterId;
        const moduleId = payload.module_id || payload.moduleId;
        const score = parseInt(payload.quiz_score !== undefined ? payload.quiz_score : (payload.score || 0), 10);
        const maxScore = parseInt(payload.quiz_max_score !== undefined ? payload.quiz_max_score : (payload.totalQuestions || 10), 10);
        const accuracyPct = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
        const isPassed = accuracyPct >= 70; // 70% passing threshold to unlock next module

        const recordId = `prog_${studentId}_${chapterId}_${moduleId}`;
        const moduleRecord = {
            id: recordId,
            student_id: studentId,
            student_name: payload.student_name || payload.studentName || 'Student',
            cls: payload.cls || 'Class 10',
            subject: payload.subject || 'Science',
            chapter_id: chapterId,
            module_id: moduleId,
            module_number: parseInt(payload.module_number || payload.moduleNumber || 1, 10),
            is_completed: isPassed || Boolean(payload.is_completed || payload.passed),
            quiz_score: score,
            score: score,
            quiz_max_score: maxScore,
            totalQuestions: maxScore,
            accuracy_pct: accuracyPct,
            answers_payload: payload.answers_payload || payload.answers || {},
            answers: payload.answers_payload || payload.answers || {},
            passed: isPassed || Boolean(payload.is_completed || payload.passed),
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
        if (existingRec && (existingRec.quiz_score > score || existingRec.score > score)) {
            const bestScore = Math.max(existingRec.quiz_score || 0, existingRec.score || 0);
            moduleRecord.quiz_score = bestScore;
            moduleRecord.score = bestScore;
            moduleRecord.accuracy_pct = existingRec.accuracy_pct;
            moduleRecord.is_completed = existingRec.is_completed || isPassed;
            moduleRecord.passed = existingRec.passed || isPassed;
        }

        localProgressMap[moduleId] = moduleRecord;
        try {
            localStorage.setItem(cacheKey, JSON.stringify(localProgressMap));
        } catch (e) {}

        // Compute aggregate chapter stats
        const totalModules = 20;
        const completedCount = Object.values(localProgressMap).filter(m => m && (m.is_completed || m.passed || (m.quiz_score >= 7) || (m.score >= 7))).length;
        const totalScore = Object.values(localProgressMap).reduce((acc, m) => acc + (m.quiz_score || m.score || 0), 0);
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
                // Ensure db-friendly payload for Supabase table
                const cloudRecord = {
                    id: moduleRecord.id,
                    student_id: moduleRecord.student_id,
                    student_name: moduleRecord.student_name,
                    cls: moduleRecord.cls,
                    subject: moduleRecord.subject,
                    chapter_id: moduleRecord.chapter_id,
                    module_id: moduleRecord.module_id,
                    module_number: moduleRecord.module_number,
                    is_completed: moduleRecord.is_completed,
                    quiz_score: moduleRecord.quiz_score,
                    quiz_max_score: moduleRecord.quiz_max_score,
                    accuracy_pct: moduleRecord.accuracy_pct,
                    answers_payload: moduleRecord.answers_payload,
                    completed_at: moduleRecord.completed_at,
                    updated_at: moduleRecord.updated_at
                };
                await supabaseClient.from('course_module_progress').upsert([cloudRecord]);
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

        // Also check fallback key if previously saved without CourseDBService
        const fallbackKey = `ec_course_prog_${studentId}_${chapterId}`;
        try {
            const fallbackMap = JSON.parse(localStorage.getItem(fallbackKey) || '{}');
            Object.keys(fallbackMap).forEach(mId => {
                if (!progressMap[mId]) {
                    const fb = fallbackMap[mId];
                    progressMap[mId] = {
                        ...fb,
                        module_id: mId,
                        quiz_score: fb.score,
                        quiz_max_score: fb.totalQuestions || 10,
                        is_completed: fb.passed || (fb.score >= 7),
                        passed: fb.passed || (fb.score >= 7)
                    };
                }
            });
        } catch (e) {}

        if (typeof isSupabaseConnected === 'function' && isSupabaseConnected()) {
            try {
                const { data, error } = await supabaseClient
                    .from('course_module_progress')
                    .select('*')
                    .eq('student_id', studentId)
                    .eq('chapter_id', chapterId);

                if (!error && Array.isArray(data)) {
                    data.forEach(row => {
                        const isDone = Boolean(row.is_completed || (row.quiz_score >= 7) || (row.accuracy_pct >= 70));
                        row.passed = isDone;
                        row.is_completed = isDone;
                        row.score = row.quiz_score;
                        row.totalQuestions = row.quiz_max_score || 10;
                        row.answers = row.answers_payload || {};
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
