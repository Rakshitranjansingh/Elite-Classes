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

// Render Class 10 Assessment Hub
function renderClass10TestSeriesHub(container) {
    container.innerHTML = `
        <div style="width:100%; border-radius:12px; overflow:hidden; border:1px solid var(--border);">
            <iframe src="modules/testseries/data/class10/testseries_class_10.html" style="width:100%; height:780px; border:none; display:block;"></iframe>
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
