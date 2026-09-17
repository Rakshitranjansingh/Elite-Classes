/**
 * =============================================================================
 * ELITE CLASSES — TODAY VIEW: CIVIL SERVICES (civilservices.js)
 * Dedicated daily agenda, GS curriculum strategy, and assessments for
 * Civil Services (UPSC / State PCS Foundation & Advanced) aspirants.
 * =============================================================================
 */

(function () {
    const civilServicesHandler = {
        render: function (container, student, helpers) {
            const name = helpers.escapeHtml(student.name);
            const rawCls = helpers.escapeHtml(helpers.rawClass || 'Civil Services');

            container.innerHTML = `
                <!-- TOP HEADER HERO BANNER -->
                <div class="card" style="padding:24px 26px; background:linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border:1px solid rgba(255,255,255,0.08); border-radius:16px; margin-bottom:20px; box-shadow:0 8px 24px rgba(0,0,0,0.12); color:#ffffff;">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
                        <div style="display:flex; align-items:center; gap:16px;">
                            <div style="width:52px; height:52px; border-radius:14px; background:linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color:#ffffff; display:flex; align-items:center; justify-content:center; font-size:26px; font-weight:800; box-shadow:0 4px 14px rgba(245,158,11,0.35);">
                                🏛️
                            </div>
                            <div>
                                <h2 style="font-size:20px; font-weight:800; color:#f8fafc; margin:0 0 4px 0; letter-spacing:-0.3px;">
                                    Welcome back, ${name}!
                                </h2>
                                <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                                    <span class="badge" style="background:rgba(245,158,11,0.2); color:#fbbf24; border:1px solid rgba(245,158,11,0.4); font-weight:700; font-size:11.5px; padding:3px 10px;">
                                        🏛️ ${rawCls} Aspirant
                                    </span>
                                    <span style="font-size:12.5px; color:#94a3b8;">${helpers.formattedDate}</span>
                                </div>
                            </div>
                        </div>
                        <div style="display:flex; gap:10px;">
                            <button class="btn btn-outline btn-sm" onclick="switchStudentTab('courses')" style="font-weight:700; border-radius:8px; background:rgba(255,255,255,0.06); border-color:rgba(255,255,255,0.2); color:#f8fafc;">
                                📚 GS Curriculum
                            </button>
                            <button class="btn btn-primary btn-sm" onclick="switchStudentTab('tests')" style="font-weight:700; border-radius:8px; background:#f59e0b; border-color:#f59e0b; color:#0f172a;">
                                📝 Prelims Mock Tests
                            </button>
                        </div>
                    </div>
                </div>

                <!-- CIVIL SERVICES TARGET ROADMAP & DAILY STRATEGY -->
                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:18px; margin-bottom:20px;">
                    <!-- Card 1: GS Paper Coverage -->
                    <div class="card" style="padding:20px; margin-bottom:0; background:#ffffff; border-radius:14px; border:1px solid var(--border); box-shadow:0 2px 8px rgba(0,0,0,0.04);">
                        <div style="display:flex; align-items:center; gap:10px; margin-bottom:12px;">
                            <span style="font-size:22px;">📜</span>
                            <h3 style="font-size:15px; font-weight:800; color:#0f172a; margin:0;">
                                General Studies (Prelims & Mains)
                            </h3>
                        </div>
                        <p style="font-size:12.5px; color:#64748b; line-height:1.5; margin:0 0 14px 0;">
                            Polity & Governance, Indian History, Geography, Indian Economy, and Environment & Ecology structured modules.
                        </p>
                        <div style="display:flex; gap:6px; flex-wrap:wrap;">
                            <span class="badge" style="background:#eff6ff; color:#1d4ed8; font-size:11px;">Indian Polity</span>
                            <span class="badge" style="background:#f0fdf4; color:#15803d; font-size:11px;">Modern History</span>
                            <span class="badge" style="background:#fefce8; color:#a16207; font-size:11px;">Economy</span>
                            <span class="badge" style="background:#faf5ff; color:#7e22ce; font-size:11px;">Geography</span>
                        </div>
                    </div>

                    <!-- Card 2: Current Affairs & Editorials -->
                    <div class="card" style="padding:20px; margin-bottom:0; background:#ffffff; border-radius:14px; border:1px solid var(--border); box-shadow:0 2px 8px rgba(0,0,0,0.04);">
                        <div style="display:flex; align-items:center; gap:10px; margin-bottom:12px;">
                            <span style="font-size:22px;">📰</span>
                            <h3 style="font-size:15px; font-weight:800; color:#0f172a; margin:0;">
                                Daily Current Affairs & Analysis
                            </h3>
                        </div>
                        <p style="font-size:12.5px; color:#64748b; line-height:1.5; margin:0 0 14px 0;">
                            High-impact national & international updates, PIB briefs, constitutional judgments, and editorial takeaways.
                        </p>
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-size:12px; font-weight:700; color:#059669;">● Updated Daily</span>
                            <button class="btn btn-sm btn-outline" onclick="switchStudentTab('courses')" style="font-size:11.5px; padding:4px 10px;">
                                Read Digest →
                            </button>
                        </div>
                    </div>

                    <!-- Card 3: CSAT & Aptitude -->
                    <div class="card" style="padding:20px; margin-bottom:0; background:#ffffff; border-radius:14px; border:1px solid var(--border); box-shadow:0 2px 8px rgba(0,0,0,0.04);">
                        <div style="display:flex; align-items:center; gap:10px; margin-bottom:12px;">
                            <span style="font-size:22px;">📐</span>
                            <h3 style="font-size:15px; font-weight:800; color:#0f172a; margin:0;">
                                CSAT Paper II Drills
                            </h3>
                        </div>
                        <p style="font-size:12.5px; color:#64748b; line-height:1.5; margin:0 0 14px 0;">
                            Reading Comprehension, Logical Reasoning, and Quantitative Data Interpretation timed mock sets.
                        </p>
                        <div style="display:flex; justify-content:space-between; align-items:center;">
                            <span style="font-size:12px; font-weight:700; color:#6366f1;">● Qualifying (33%) Focus</span>
                            <button class="btn btn-sm btn-outline" onclick="switchStudentTab('tests')" style="font-size:11.5px; padding:4px 10px;">
                                Practice CSAT →
                            </button>
                        </div>
                    </div>
                </div>

                <!-- CIVIL SERVICES DAILY FEED & MENTORSHIP AGENDA -->
                <div class="card" style="padding:26px 24px; background:#ffffff; border:1px dashed var(--border); border-radius:14px;">
                    <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
                        <span style="font-size:26px;">🎯</span>
                        <div>
                            <h3 style="font-size:16px; font-weight:800; color:#0f172a; margin:0;">
                                Civil Services Daily Target & Assessment Hub
                            </h3>
                            <div style="font-size:12px; color:var(--text-muted); margin-top:2px;">
                                Consistent daily revision, active recall, and sectional mock test series
                            </div>
                        </div>
                    </div>

                    <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:18px;">
                        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px; flex-wrap:wrap; gap:8px;">
                            <span style="font-weight:800; font-size:13.5px; color:#0f172a;">⚡ Prelims Exam Readiness & Testing Hub</span>
                            <span class="badge badge-success" style="font-size:10.5px;">Active Aspirant Portal</span>
                        </div>
                        <p style="font-size:13px; color:#64748b; margin:0 0 14px; line-height:1.6;">
                            Access your structured general studies material under the <b>Courses</b> tab or enter the live computer-based test platform under <b>Tests</b> to assess your accuracy and time management under authentic test conditions.
                        </p>
                        <div style="display:flex; gap:10px; flex-wrap:wrap;">
                            <button class="btn btn-sm btn-outline" onclick="switchStudentTab('courses')" style="font-size:12px; font-weight:700; border-radius:8px; border-color:var(--primary); color:var(--primary);">
                                Explore Study Modules →
                            </button>
                            <button class="btn btn-sm btn-primary" onclick="switchStudentTab('tests')" style="font-size:12px; font-weight:700; border-radius:8px;">
                                Launch CBT Test Series →
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }
    };

    if (typeof window.registerTodayClassHandler === 'function') {
        window.registerTodayClassHandler('civilservices', civilServicesHandler);
    } else {
        window.TodayClassHandlers = window.TodayClassHandlers || {};
        window.TodayClassHandlers['civilservices'] = civilServicesHandler;
    }
})();
