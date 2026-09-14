/**
 * =============================================================================
 * ELITE CLASSES — TODAY VIEW: CLASS 8 (class8.js)
 * Class-specific daily agenda & schedule for Class 8
 * =============================================================================
 */

(function () {
    const class8Handler = {
        render: function (container, student, helpers) {
            const name = helpers.escapeHtml(student.name);
            const rawCls = helpers.escapeHtml(helpers.rawClass || 'Class 8');

            container.innerHTML = `
                <!-- TOP HEADER HERO BANNER -->
                <div class="card" style="padding:22px 24px; background:linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); border:1px solid var(--border); border-radius:14px; margin-bottom:16px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                        <div style="display:flex; align-items:center; gap:14px;">
                            <div style="width:48px; height:48px; border-radius:12px; background:linear-gradient(135deg, #10b981 0%, #059669 100%); color:#ffffff; display:flex; align-items:center; justify-content:center; font-size:22px; font-weight:800; box-shadow:0 4px 12px rgba(16,185,129,0.25);">
                                📖
                            </div>
                            <div>
                                <h2 style="font-size:18px; font-weight:800; color:#0f172a; margin:0 0 3px 0;">
                                    Welcome back, ${name}!
                                </h2>
                                <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                                    <span class="badge" style="background:#d1fae5; color:#059669; font-weight:700; font-size:11px;">${rawCls} Middle School</span>
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

                <!-- CLASS 8 DAILY FEED -->
                <div class="card" style="padding:28px 24px; background:#ffffff; border:1px dashed var(--border); border-radius:14px;">
                    <div style="display:flex; align-items:center; gap:10px; margin-bottom:12px;">
                        <span style="font-size:26px;">📅</span>
                        <div>
                            <h3 style="font-size:16px; font-weight:800; color:#0f172a; margin:0;">
                                Class 8 Daily Feed & Homework Agenda
                            </h3>
                            <div style="font-size:12px; color:var(--text-muted); margin-top:2px;">
                                Middle school curriculum, classroom lecture schedule and homework drills
                            </div>
                        </div>
                    </div>

                    <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:16px; margin-top:14px;">
                        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
                            <span style="font-weight:700; font-size:13px; color:#0f172a;">📘 Middle School Curriculum</span>
                            <span class="badge badge-success" style="font-size:10px;">Active Session</span>
                        </div>
                        <p style="font-size:12.5px; color:#64748b; margin:0 0 10px; line-height:1.5;">
                            Review your daily class notes under the <b>Courses</b> tab or practice upcoming assessments under <b>Tests</b>.
                        </p>
                    </div>
                </div>
            `;
        }
    };

    if (typeof window.registerTodayClassHandler === 'function') {
        window.registerTodayClassHandler('class8', class8Handler);
    } else {
        window.TodayClassHandlers = window.TodayClassHandlers || {};
        window.TodayClassHandlers['class8'] = class8Handler;
    }
})();
