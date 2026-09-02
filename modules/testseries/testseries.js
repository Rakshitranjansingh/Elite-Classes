/* =========================================================================
   ELITE CLASSES — TEST SERIES ROUTER & CONTROLLER (testseries.js)
   Dynamic Class-Scoped Router for Student Portal (Class 10, Class 9, etc.)
   ========================================================================= */

let cachedTestSeriesList = [];

// Dynamic Router for Student Test Series
async function renderStudentTestSeries() {
    const container = document.getElementById('st-tests-container') || document.getElementById('st-testseries-container');
    if (!container || !currentStudent) return;

    // Check student class
    const studentClass = currentStudent.cls || 'Class 10';

    if (studentClass === 'Class 10') {
        renderClass10TestSeriesHub(container);
    } else {
        renderGenericClassTestSeries(container, studentClass);
    }
}

// Render Class 10 Assessment Hub natively without nested iframes
function renderClass10TestSeriesHub(container) {
    const storageKey = `ec_cbt_enrollment_${currentStudent.id}`;
    let cbtData = JSON.parse(localStorage.getItem(storageKey) || '{"enrolled":{}, "attempts":{}}');
    const attempts = Object.values(cbtData.attempts || {});
    
    let totalScore = 0;
    let maxScore = 0;
    attempts.forEach(a => {
        totalScore += (a.score || 0);
        maxScore += (a.total_marks || 0);
    });
    const avgPct = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

    container.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:18px;">
            <!-- HERO ACTION BANNER -->
            <div style="background:linear-gradient(135deg, #0b1329 0%, #1e293b 100%); color:#ffffff; border-radius:var(--radius-sm); padding:22px 24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; box-shadow:var(--shadow-card);">
                <div>
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
                        <span class="badge badge-primary" style="font-size:11px;">NCERT Test Series</span>
                        <span class="badge badge-success" style="font-size:11px;">Live CBT Engine</span>
                    </div>
                    <h2 style="font-size:18px; font-weight:800; color:#f8fafc; margin:0 0 6px 0;">Class 10 Assessment & Test Series Hub</h2>
                    <p style="font-size:13px; color:#94a3b8; margin:0; max-width:550px;">
                        Chapterwise assessments, 100Q NCERT question banks with negative marking, and real-time subject leaderboards.
                    </p>
                </div>
                <div style="display:flex; gap:10px; align-items:center;">
                    <a href="modules/testseries/data/class10/testseries_class_10.html" class="btn btn-primary" style="text-decoration:none; font-weight:800; font-size:13px; padding:10px 20px; display:inline-flex; align-items:center; gap:6px;">
                        🚀 Open Class 10 Test Hub →
                    </a>
                </div>
            </div>

            <!-- QUICK SUBJECT SHORTCUTS -->
            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px;">
                
                <!-- SCIENCE CARD -->
                <div class="card" style="padding:18px; display:flex; flex-direction:column; justify-content:space-between;">
                    <div>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                            <span class="badge badge-success">🟢 Active & Live</span>
                            <span class="meta-pill" style="font-size:11px; background:#f1f5f9; padding:2px 8px; border-radius:6px; font-weight:700;">100Q Assessment</span>
                        </div>
                        <h4 style="font-size:16px; font-weight:800; color:var(--text); margin:0 0 6px 0; display:flex; align-items:center; gap:6px;">
                            🧪 Science Test Series
                        </h4>
                        <p style="font-size:12.5px; color:var(--text-muted); margin:0 0 14px 0;">
                            Chapter 1: Chemical Reactions & Equations (100 Questions, 400 Marks, -1.0 Neg Mark).
                        </p>
                    </div>
                    <a href="modules/testseries/data/class10/science/science_10.html" class="btn btn-primary btn-sm" style="text-decoration:none; font-weight:700; width:100%; text-align:center; padding:8px;">
                        Start Science Tests →
                    </a>
                </div>

                <!-- MATHEMATICS CARD -->
                <div class="card" style="padding:18px; display:flex; flex-direction:column; justify-content:space-between; opacity:0.85;">
                    <div>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                            <span class="badge badge-warning">🟡 Scheduled</span>
                            <span class="meta-pill" style="font-size:11px; background:#f1f5f9; padding:2px 8px; border-radius:6px; font-weight:700;">Coming Soon</span>
                        </div>
                        <h4 style="font-size:16px; font-weight:800; color:var(--text); margin:0 0 6px 0; display:flex; align-items:center; gap:6px;">
                            📐 Mathematics Test Series
                        </h4>
                        <p style="font-size:12.5px; color:var(--text-muted); margin:0 0 14px 0;">
                            Real Numbers, Polynomials, Triangles, Trigonometry, and Statistics.
                        </p>
                    </div>
                    <button class="btn btn-outline btn-sm" disabled style="width:100%; font-weight:700; padding:8px; opacity:0.6;">
                        📅 Launching Soon
                    </button>
                </div>

                <!-- SOCIAL STUDIES CARD -->
                <div class="card" style="padding:18px; display:flex; flex-direction:column; justify-content:space-between; opacity:0.85;">
                    <div>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                            <span class="badge badge-warning">🟡 Scheduled</span>
                            <span class="meta-pill" style="font-size:11px; background:#f1f5f9; padding:2px 8px; border-radius:6px; font-weight:700;">Coming Soon</span>
                        </div>
                        <h4 style="font-size:16px; font-weight:800; color:var(--text); margin:0 0 6px 0; display:flex; align-items:center; gap:6px;">
                            🌍 Social Studies Test Series
                        </h4>
                        <p style="font-size:12.5px; color:var(--text-muted); margin:0 0 14px 0;">
                            History, Geography, Democratic Politics, and Economics evaluations.
                        </p>
                    </div>
                    <button class="btn btn-outline btn-sm" disabled style="width:100%; font-weight:700; padding:8px; opacity:0.6;">
                        📅 Launching Soon
                    </button>
                </div>

            </div>
        </div>
    `;
}

// Generic fallback for other classes
async function renderGenericClassTestSeries(container, cls) {
    cachedTestSeriesList = await DBService.fetchTestSeries(cls);
    
    if (cachedTestSeriesList.length === 0) {
        container.innerHTML = `
            <div class="card" style="padding:40px; text-align:center;">
                <div style="font-size:36px; margin-bottom:12px;">📚</div>
                <h3 style="font-size:16px; font-weight:700; color:var(--text); margin-bottom:6px;">Online Test Series for ${cls}</h3>
                <p style="font-size:13px; color:var(--text-muted); margin:0;">
                    Chapterwise assessments for ${cls} are currently being scheduled by the faculty.
                </p>
            </div>
        `;
        return;
    }

    let html = `<div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(320px, 1fr)); gap:16px;">`;
    cachedTestSeriesList.forEach(t => {
        html += `
            <div class="card" style="padding:18px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <span class="badge badge-purple">${t.subject}</span>
                    <span class="badge badge-primary">${t.questions_count || 25} Questions</span>
                </div>
                <div style="font-size:15px; font-weight:700; color:var(--text); margin-bottom:10px;">${t.title}</div>
                <div style="display:flex; gap:10px; font-size:12px; color:var(--text-muted); margin-bottom:16px;">
                    <span>⏱️ ${t.duration_mins} Mins</span>
                    <span>🎯 ${t.total_marks} Marks</span>
                </div>
                <button class="btn btn-primary btn-sm" onclick="CBTPlayer.launch(cachedTestSeriesList.find(x => x.id === '${t.id}'))" style="width:100%; font-weight:700;">
                    ✏️ Start Assessment
                </button>
            </div>
        `;
    });
    html += `</div>`;
    container.innerHTML = html;
}

if (typeof window !== 'undefined') {
    window.renderStudentTestSeries = renderStudentTestSeries;
}
