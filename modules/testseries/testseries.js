/* Elite Classes — Test Series & Mock Exams Module */

let cachedTestSeriesList = [];

// Render Class-Filtered Test Series & Mock Exams
async function renderStudentTestSeries() {
    const container = document.getElementById('st-testseries-container');
    const heading = document.getElementById('st-tests-heading');
    if (!container || !currentStudent) return;

    heading.textContent = `Online Test Series & Mock Exams for ${currentStudent.cls}`;

    cachedTestSeriesList = await DBService.fetchTestSeries();
    
    // Filter tests matching student class
    const filtered = cachedTestSeriesList.filter(t => t.cls === currentStudent.cls || t.cls === 'All');

    if (filtered.length === 0) {
        container.innerHTML = `<div style="grid-column:1/-1; padding:30px; text-align:center; color:var(--text-muted);">No online test series scheduled yet for ${currentStudent.cls}.</div>`;
        return;
    }

    let html = '';
    filtered.forEach(t => {
        const attempt = studentStats.testAttempts[t.id];
        const statusBadge = attempt 
            ? `<span class="badge badge-success">Attempted: ${attempt.score}/${t.total_marks} (${Math.round((attempt.score/t.total_marks)*100)}%)</span>`
            : `<span class="badge badge-warning">Upcoming / Active</span>`;

        html += `
            <div class="learning-card">
                <div>
                    <div class="learning-card-header">
                        <span class="badge badge-purple">${t.subject}</span>
                        ${statusBadge}
                    </div>
                    <div class="learning-card-title">${t.title}</div>
                    
                    <div style="display:flex; gap:12px; font-size:12px; color:var(--text-muted); margin:10px 0 14px; flex-wrap:wrap;">
                        <span>⏱️ ${t.duration_mins} Mins</span>
                        <span>❓ ${t.questions_count} Questions</span>
                        <span>🎯 ${t.total_marks} Total Marks</span>
                        <span>📅 ${t.test_date || 'Active Today'}</span>
                    </div>
                </div>

                <div>
                    ${attempt ? `
                        <button class="btn btn-outline btn-sm" style="width:100%; font-weight:700;" onclick="startInteractiveTest('${t.id}')">
                            🔄 Retake Test Assessment
                        </button>
                    ` : `
                        <button class="btn btn-primary btn-sm" style="width:100%; font-weight:700;" onclick="startInteractiveTest('${t.id}')">
                            ✏️ Start Online Test
                        </button>
                    `}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Start Interactive Test Assessment Modal
function startInteractiveTest(testId) {
    const test = cachedTestSeriesList.find(t => t.id === testId);
    if (!test) return;

    const modalBody = document.getElementById('takeTestModalBody');
    document.getElementById('testModalTitle').textContent = `Assessment: ${test.title}`;

    modalBody.innerHTML = `
        <div style="margin-bottom:16px; background:#f8fafc; padding:14px; border-radius:10px; border:1px solid var(--border);">
            <div style="display:flex; justify-content:space-between; font-size:13px; font-weight:700; color:var(--text-dark);">
                <span>Subject: ${test.subject} (${test.cls})</span>
                <span>Duration: ${test.duration_mins} Mins • Total Marks: ${test.total_marks}</span>
            </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:18px;">
            <div style="background:#ffffff; border:1px solid var(--border); border-radius:10px; padding:16px;">
                <div style="font-weight:700; font-size:14px; margin-bottom:10px;">Q1. Solve the fundamental problem for ${test.subject}:</div>
                <div style="font-size:13px; color:var(--text-muted); margin-bottom:12px;">Select the most accurate answer statement from the options below.</div>
                
                <div style="display:flex; flex-direction:column; gap:8px;">
                    <label style="display:flex; align-items:center; gap:8px; padding:10px; border:1px solid var(--border); border-radius:8px; cursor:pointer;">
                        <input type="radio" name="q1_opt" value="A" checked> <b>(A)</b> Option A — Standard solution formulation
                    </label>
                    <label style="display:flex; align-items:center; gap:8px; padding:10px; border:1px solid var(--border); border-radius:8px; cursor:pointer;">
                        <input type="radio" name="q1_opt" value="B"> <b>(B)</b> Option B — Verified theoretical output
                    </label>
                    <label style="display:flex; align-items:center; gap:8px; padding:10px; border:1px solid var(--border); border-radius:8px; cursor:pointer;">
                        <input type="radio" name="q1_opt" value="C"> <b>(C)</b> Option C — Conceptual application principle
                    </label>
                </div>
            </div>

            <div style="background:#ffffff; border:1px solid var(--border); border-radius:10px; padding:16px;">
                <div style="font-weight:700; font-size:14px; margin-bottom:10px;">Q2. Analytical assessment question for ${test.cls} ${test.subject}:</div>
                <div style="font-size:13px; color:var(--text-muted); margin-bottom:12px;">Choose the appropriate reasoning match.</div>
                
                <div style="display:flex; flex-direction:column; gap:8px;">
                    <label style="display:flex; align-items:center; gap:8px; padding:10px; border:1px solid var(--border); border-radius:8px; cursor:pointer;">
                        <input type="radio" name="q2_opt" value="A" checked> <b>(A)</b> True
                    </label>
                    <label style="display:flex; align-items:center; gap:8px; padding:10px; border:1px solid var(--border); border-radius:8px; cursor:pointer;">
                        <input type="radio" name="q2_opt" value="B"> <b>(B)</b> False
                    </label>
                </div>
            </div>
        </div>

        <div style="margin-top:20px; display:flex; justify-content:flex-end; gap:10px;">
            <button class="btn btn-outline" onclick="closeModal('takeTestModal')">Cancel</button>
            <button class="btn btn-primary" onclick="submitTestAssessment('${test.id}', ${test.total_marks})">Submit Test Answers</button>
        </div>
    `;

    openModal('takeTestModal');
}

// Submit Test & Save Score to Student Stats
async function submitTestAssessment(testId, totalMarks) {
    if (!currentStudent) return;

    // Calculate score (Simulated 85-95% score for demonstration)
    const earnedScore = Math.round(totalMarks * 0.9);
    
    studentStats.testAttempts[testId] = {
        score: earnedScore,
        total: totalMarks,
        date: new Date().toISOString().split('T')[0]
    };

    await DBService.saveStudentStats(currentStudent.id, studentStats);
    closeModal('takeTestModal');
    
    showToast(`Test Submitted! You scored ${earnedScore}/${totalMarks} (${Math.round((earnedScore/totalMarks)*100)}%)`, 'success');
    renderStudentTestSeries();
}

// Admin Helper: Submit New Test Series
async function submitNewTestSeries() {
    const title = document.getElementById('f-test-title').value.trim();
    const cls = document.getElementById('f-test-class').value;
    const subject = document.getElementById('f-test-subject').value.trim();
    const duration = parseInt(document.getElementById('f-test-duration').value) || 45;
    const marks = parseFloat(document.getElementById('f-test-marks').value) || 50;
    const questions = parseInt(document.getElementById('f-test-questions').value) || 25;
    const testDate = document.getElementById('f-test-date').value || 'Active Today';

    if (!title || !subject) {
        showToast('Please enter Test Title and Subject', 'error');
        return;
    }

    const testObj = {
        id: 'ts_' + Date.now(),
        title, cls, subject, duration_mins: duration, total_marks: marks, questions_count: questions, test_date: testDate
    };

    await DBService.upsertTestSeries(testObj);
    closeModal('addTestSeriesModal');
    
    showToast('Test Series created successfully!', 'success');
    renderStudentTestSeries();
}
