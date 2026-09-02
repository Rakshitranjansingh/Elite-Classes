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

// Render Class 10 Chapterwise Tests (Clean & Minimal)
function renderClass10TestSeriesHub(container) {
    container.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:16px;">
            <!-- MINIMAL HEADER CARD -->
            <div class="card" style="padding:16px 20px;">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
                    <div>
                        <h3 style="font-size:16px; font-weight:800; color:var(--text); margin:0;">
                            📝 Chapterwise Tests
                        </h3>
                    </div>
                    <div>
                        <a href="modules/testseries/data/class10/testseries_class_10.html" class="btn btn-outline btn-sm" style="text-decoration:none; font-weight:700; font-size:12px; padding:6px 14px;">
                            View All Subjects →
                        </a>
                    </div>
                </div>
            </div>

            <!-- MINIMAL SUBJECT CARDS -->
            <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(260px, 1fr)); gap:14px;">
                
                <!-- SCIENCE -->
                <div class="card" style="padding:18px; display:flex; flex-direction:column; justify-content:space-between; gap:14px;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-size:16px; font-weight:800; color:var(--text); display:flex; align-items:center; gap:8px;">
                            🧪 Science
                        </span>
                        <span class="badge badge-success" style="font-size:11px;">Active</span>
                    </div>
                    <div>
                        <a href="modules/testseries/data/class10/science/science_10.html" class="btn btn-primary btn-sm" style="text-decoration:none; font-weight:700; width:100%; text-align:center; padding:9px; display:block;">
                            Enroll & Start →
                        </a>
                    </div>
                </div>

                <!-- MATHEMATICS -->
                <div class="card" style="padding:18px; display:flex; flex-direction:column; justify-content:space-between; gap:14px; opacity:0.75;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-size:16px; font-weight:800; color:var(--text); display:flex; align-items:center; gap:8px;">
                            📐 Mathematics
                        </span>
                        <span class="badge badge-warning" style="font-size:11px;">Coming Soon</span>
                    </div>
                    <div>
                        <button class="btn btn-outline btn-sm" disabled style="width:100%; font-weight:700; padding:9px; opacity:0.6; cursor:not-allowed;">
                            Upcoming
                        </button>
                    </div>
                </div>

                <!-- SOCIAL STUDIES -->
                <div class="card" style="padding:18px; display:flex; flex-direction:column; justify-content:space-between; gap:14px; opacity:0.75;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-size:16px; font-weight:800; color:var(--text); display:flex; align-items:center; gap:8px;">
                            🌍 Social Studies
                        </span>
                        <span class="badge badge-warning" style="font-size:11px;">Coming Soon</span>
                    </div>
                    <div>
                        <button class="btn btn-outline btn-sm" disabled style="width:100%; font-weight:700; padding:9px; opacity:0.6; cursor:not-allowed;">
                            Upcoming
                        </button>
                    </div>
                </div>

                <!-- ENGLISH -->
                <div class="card" style="padding:18px; display:flex; flex-direction:column; justify-content:space-between; gap:14px; opacity:0.75;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-size:16px; font-weight:800; color:var(--text); display:flex; align-items:center; gap:8px;">
                            📖 English
                        </span>
                        <span class="badge badge-warning" style="font-size:11px;">Coming Soon</span>
                    </div>
                    <div>
                        <button class="btn btn-outline btn-sm" disabled style="width:100%; font-weight:700; padding:9px; opacity:0.6; cursor:not-allowed;">
                            Upcoming
                        </button>
                    </div>
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
