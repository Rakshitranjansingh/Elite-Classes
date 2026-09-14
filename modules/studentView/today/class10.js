/**
 * =============================================================================
 * ELITE CLASSES — TODAY VIEW: CLASS 10 (class10.js)
 * Class-specific daily agenda, board prep focus & schedule for Class 10
 * =============================================================================
 */

(function () {
    const class10Handler = {
        render: function (container, student, helpers) {
            const name = helpers.escapeHtml(student.name);
            const rawCls = helpers.escapeHtml(helpers.rawClass || 'Class 10');

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
                                    <span class="badge badge-primary" style="font-weight:700; font-size:11px;">${rawCls} Board Candidate</span>
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

                <!-- CLASS 10 DAILY AGENDA & FEED -->
                <div class="card" style="padding:28px 24px; background:#ffffff; border:1px dashed var(--border); border-radius:14px;">
                    <div style="display:flex; align-items:center; gap:10px; margin-bottom:12px;">
                        <span style="font-size:26px;">📅</span>
                        <div>
                            <h3 style="font-size:16px; font-weight:800; color:#0f172a; margin:0;">
                                Class 10 Daily Feed & Coaching Agenda
                            </h3>
                            <div style="font-size:12px; color:var(--text-muted); margin-top:2px;">
                                Live classroom lecture updates, board preparation agenda, and daily tasks
                            </div>
                        </div>
                    </div>

                    <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:16px; margin-top:14px;">
                        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
                            <span style="font-weight:700; font-size:13px; color:#0f172a;">🎯 Daily Academic Focus</span>
                            <span class="badge badge-success" style="font-size:10px;">Session 2025–26</span>
                        </div>
                        <p style="font-size:12.5px; color:#64748b; margin:0 0 10px; line-height:1.5;">
                            Keep up with your revision schedule. Switch to the <b>Courses</b> tab for in-depth theory notes or take chapter assessments in <b>Tests</b>.
                        </p>
                        <div style="display:flex; gap:10px; flex-wrap:wrap;">
                            <button class="btn btn-sm btn-outline" onclick="switchStudentTab('courses')" style="font-size:11.5px; font-weight:700; border-radius:6px;">
                                Open Study Modules →
                            </button>
                            <button class="btn btn-sm btn-outline" onclick="switchStudentTab('tests')" style="font-size:11.5px; font-weight:700; border-radius:6px;">
                                Practice Tests →
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }
    };

    if (typeof window.registerTodayClassHandler === 'function') {
        window.registerTodayClassHandler('class10', class10Handler);
    } else {
        window.TodayClassHandlers = window.TodayClassHandlers || {};
        window.TodayClassHandlers['class10'] = class10Handler;
    }
})();
