/**
 * =============================================================================
 * ELITE CLASSES — TODAY VIEW: UNIVERSAL DEFAULT (defaultClass.js)
 * Fallback handler for all classes without a dedicated separate file
 * =============================================================================
 */

(function () {
    const defaultHandler = {
        render: function (container, student, helpers) {
            const name = helpers.escapeHtml(student.name);
            const rawCls = helpers.escapeHtml(helpers.rawClass || 'Student');

            container.innerHTML = `
                <!-- TOP HEADER HERO BANNER -->
                <div class="card" style="padding:22px 24px; background:linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); border:1px solid var(--border); border-radius:14px; margin-bottom:16px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                        <div style="display:flex; align-items:center; gap:14px;">
                            <div style="width:48px; height:48px; border-radius:12px; background:linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color:#ffffff; display:flex; align-items:center; justify-content:center; font-size:22px; font-weight:800; box-shadow:0 4px 12px rgba(37,99,235,0.25);">
                                🎓
                            </div>
                            <div>
                                <h2 style="font-size:18px; font-weight:800; color:#0f172a; margin:0 0 3px 0;">
                                    Welcome back, ${name}!
                                </h2>
                                <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                                    <span class="badge badge-primary" style="font-weight:700; font-size:11px;">${rawCls}</span>
                                    <span style="font-size:12px; color:var(--text-muted);">${helpers.formattedDate}</span>
                                </div>
                            </div>
                        </div>
                        <div style="display:flex; gap:8px;">
                            <button class="btn btn-outline btn-sm" onclick="switchStudentTab('courses')" style="font-weight:700; border-radius:8px;">
                                📚 Courses
                            </button>
                            <button class="btn btn-primary btn-sm" onclick="switchStudentTab('tests')" style="font-weight:700; border-radius:8px;">
                                📝 Tests
                            </button>
                        </div>
                    </div>
                </div>

                <!-- DAILY FEED & AGENDA -->
                <div class="card" style="padding:32px 24px; text-align:center; background:#ffffff; border:1px dashed var(--border); border-radius:14px;">
                    <div style="font-size:32px; margin-bottom:10px;">📅</div>
                    <h3 style="font-size:16px; font-weight:700; color:#0f172a; margin:0 0 6px 0;">Today's Daily Feed & Classroom Agenda</h3>
                    <p style="font-size:13px; color:var(--text-muted); margin:0 auto; max-width:440px; line-height:1.5;">
                        Daily classroom announcements, scheduled lecture updates, and coaching notices will appear here. Switch to <b>Courses</b> to study or <b>Tests</b> to take exams.
                    </p>
                </div>
            `;
        }
    };

    if (typeof window.registerTodayClassHandler === 'function') {
        window.registerTodayClassHandler('default', defaultHandler);
    } else {
        window.TodayClassHandlers = window.TodayClassHandlers || {};
        window.TodayClassHandlers['default'] = defaultHandler;
    }
})();
