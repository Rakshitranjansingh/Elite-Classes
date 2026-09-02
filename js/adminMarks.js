/* Elite Classes — Admin Exam Marks & Leaderboard Controller */

const ADMIN_BASE_RECENT_EXAMS = [
    { 
        id: 'ex_midterm', 
        name: 'Mid-Term Examination 2025-26', 
        date: '2025-08-25', 
        classes: ['Class 8', 'Class 9', 'Class 10', 'Class 7', 'Class 6', 'Class 5'], 
        subjects: ['Mathematics', 'Science', 'English', 'Physics', 'Chemistry'] 
    },
    { 
        id: 'ex_unit1', 
        name: 'Unit Test 1 (Quarterly Assessment)', 
        date: '2025-07-15', 
        classes: ['Class 8', 'Class 9', 'Class 10', 'Class 7', 'Class 6', 'Class 5'], 
        subjects: ['Mathematics', 'Science', 'English'] 
    },
    { 
        id: 'ex_preboard', 
        name: 'Pre-Board Diagnostic Exam', 
        date: '2025-06-10', 
        classes: ['Class 10', 'Class 9'], 
        subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'] 
    },
    { 
        id: 'ex_monthly_may', 
        name: 'Monthly Assessment - May 2025', 
        date: '2025-05-28', 
        classes: ['Class 8', 'Class 9', 'Class 10'], 
        subjects: ['Mathematics', 'Science'] 
    }
];

function getAdminAllExams() {
    const customExams = JSON.parse(localStorage.getItem('ec_custom_exams') || '[]');
    const combined = [...customExams, ...ADMIN_BASE_RECENT_EXAMS];

    const unique = [];
    const seen = new Set();
    combined.forEach(e => {
        if (!seen.has(e.name)) {
            seen.add(e.name);
            unique.push(e);
        }
    });

    unique.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
    return unique;
}

let selectedAdminExam = '';
let selectedAdminExamClass = '';

function setupAdminMarksControls() {
    const allExams = getAdminAllExams();
    if (!selectedAdminExam || !allExams.some(e => e.name === selectedAdminExam)) {
        selectedAdminExam = allExams[0]?.name || 'Mid-Term Examination 2025-26';
    }

    const currentExamObj = allExams.find(e => e.name === selectedAdminExam) || allExams[0];
    selectedAdminExam = currentExamObj.name;

    // Check if selected exam is within latest 2
    const latest2Exams = allExams.slice(0, 2);
    const isExamEditable = latest2Exams.some(e => e.name === selectedAdminExam);

    // 1. Populate Dropdown
    const examSelect = document.getElementById('admin-marks-exam-select');
    if (examSelect) {
        examSelect.innerHTML = allExams.map((e, idx) => {
            const isEditable = idx < 2;
            const tag = isEditable ? '🟢 [Active for Edit]' : '🔒 [Historical/Locked]';
            return `<option value="${e.name}" ${selectedAdminExam === e.name ? 'selected' : ''}>${e.name} ${tag}</option>`;
        }).join('');
    }

    // 2. Status Indicator
    const indicatorEl = document.getElementById('admin-exam-status-indicator');
    if (indicatorEl) {
        if (isExamEditable) {
            indicatorEl.innerHTML = `<span class="badge badge-success" style="font-size:12px; padding:6px 12px; display:inline-flex; align-items:center; gap:4px;">🟢 Active (Editable — Latest 2 Exams)</span>`;
        } else {
            indicatorEl.innerHTML = `<span class="badge badge-warning" style="font-size:12px; padding:6px 12px; display:inline-flex; align-items:center; gap:4px;">🔒 Locked Record (Only Latest 2 Exams Editable)</span>`;
        }
    }

    // Top Header Button Toggle
    const headerBtn = document.getElementById('admin-enter-marks-header-btn');
    if (headerBtn) {
        headerBtn.style.display = isExamEditable ? 'inline-flex' : 'none';
    }

    // 3. Class Chips
    const classChipsEl = document.getElementById('admin-marks-class-chips');
    const appearedClasses = currentExamObj.classes || (typeof CLASS_OPTIONS !== 'undefined' ? CLASS_OPTIONS : ['Class 8', 'Class 9', 'Class 10']);

    if (!selectedAdminExamClass || !appearedClasses.includes(selectedAdminExamClass)) {
        selectedAdminExamClass = appearedClasses[0] || 'Class 8';
    }

    if (classChipsEl) {
        classChipsEl.innerHTML = appearedClasses.map(c => `
            <button class="btn btn-sm ${selectedAdminExamClass === c ? 'btn-primary' : 'btn-outline'}" onclick="selectAdminMarksClass('${c}')">
                🏫 ${c}
            </button>
        `).join('');
    }
}

function onAdminMarksExamSelectChange() {
    const examSelect = document.getElementById('admin-marks-exam-select');
    if (!examSelect) return;
    selectedAdminExam = examSelect.value;
    setupAdminMarksControls();
    renderAdminExamScoreboard();
}

function selectAdminMarksClass(cls) {
    selectedAdminExamClass = cls;
    setupAdminMarksControls();
    renderAdminExamScoreboard();
}

// Generate / Fetch Student Marks
function getAdminStudentExamMarks(student, examName, subject) {
    const allResults = JSON.parse(localStorage.getItem('ec_exam_results') || '[]');
    const found = allResults.find(r => 
        (r.student_id === student.id || r.studentId === student.id) &&
        (r.exam_name === examName || r.exam === examName) &&
        (r.subject.toLowerCase() === subject.toLowerCase())
    );
    if (found) return { marks: parseFloat(found.marks_obtained || found.marks || 0), max: parseFloat(found.max_marks || found.max || 100) };

    const seed = (student.id.split('').reduce((a, c) => a + c.charCodeAt(0), 0) * 17 + subject.length * 23) % 36;
    const marks = Math.min(100, 64 + seed);
    return { marks: marks, max: 100 };
}

async function renderAdminExamScoreboard() {
    const container = document.getElementById('admin-marks-container');
    if (!container) return;

    setupAdminMarksControls();

    const allExams = getAdminAllExams();
    const examObj = allExams.find(e => e.name === selectedAdminExam) || allExams[0];
    const examSubjects = examObj.subjects || ['Mathematics', 'Science'];

    const latest2Exams = allExams.slice(0, 2);
    const isExamEditable = latest2Exams.some(e => e.name === selectedAdminExam);

    const classStudents = (students || []).filter(s => s.cls === selectedAdminExamClass);

    if (classStudents.length === 0) {
        container.innerHTML = `
            <div style="padding:36px; text-align:center; background:#f8fafc; border-radius:12px; border:1px dashed var(--border); color:var(--text-muted);">
                <div style="font-size:28px; margin-bottom:8px;">📊</div>
                <div style="font-weight:700; color:var(--text); font-size:15px;">No students found in ${selectedAdminExamClass} for this examination.</div>
                <div style="font-size:12px; margin-top:4px;">Please select another class or create an exam.</div>
            </div>
        `;
        return;
    }

    const studentScorecards = classStudents.map(s => {
        let totalObtained = 0;
        let totalMax = 0;
        const subjectScores = {};

        examSubjects.forEach(sub => {
            const scoreObj = getAdminStudentExamMarks(s, selectedAdminExam, sub);
            subjectScores[sub] = scoreObj.marks;
            totalObtained += scoreObj.marks;
            totalMax += scoreObj.max;
        });

        const pct = totalMax > 0 ? Math.round((totalObtained / totalMax) * 1000) / 10 : 0;
        
        let gradeBadge = '<span class="badge badge-success">A+ Distinction</span>';
        if (pct < 60) gradeBadge = '<span class="badge badge-danger">C Passing</span>';
        else if (pct < 70) gradeBadge = '<span class="badge badge-warning">B Average</span>';
        else if (pct < 80) gradeBadge = '<span class="badge badge-purple">B+ Good</span>';
        else if (pct < 90) gradeBadge = '<span class="badge badge-primary">A First Class</span>';

        return {
            student: s,
            subjectScores,
            totalObtained,
            totalMax,
            pct,
            gradeBadge
        };
    });

    studentScorecards.sort((a, b) => b.pct - a.pct || b.totalObtained - a.totalObtained);

    studentScorecards.forEach((sc, idx) => {
        const rankNum = idx + 1;
        if (rankNum === 1) sc.rankDisplay = '<span class="badge" style="background:#fef3c7; color:#b45309; border:1px solid #fde68a; font-weight:800;">🥇 Rank 1</span>';
        else if (rankNum === 2) sc.rankDisplay = '<span class="badge" style="background:#f1f5f9; color:#475569; border:1px solid #cbd5e1; font-weight:800;">🥈 Rank 2</span>';
        else if (rankNum === 3) sc.rankDisplay = '<span class="badge" style="background:#ffedd5; color:#c2410c; border:1px solid #fed7aa; font-weight:800;">🥉 Rank 3</span>';
        else sc.rankDisplay = `<span class="badge badge-outline" style="font-weight:700;">Rank ${rankNum}</span>`;
    });

    const classAvgPct = Math.round((studentScorecards.reduce((acc, c) => acc + c.pct, 0) / studentScorecards.length) * 10) / 10;
    const topScorer = studentScorecards[0];

    container.innerHTML = `
        <!-- SUMMARY KPI CARDS -->
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:12px; margin-bottom:18px;">
            <div style="background:#ffffff; border:1px solid var(--border); border-radius:12px; padding:14px 16px; box-shadow:0 1px 3px rgba(0,0,0,0.03);">
                <div style="font-size:11px; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Class Appeared</div>
                <div style="font-size:18px; font-weight:800; color:var(--text); margin-top:2px;">${selectedAdminExamClass} (${studentScorecards.length} Students)</div>
            </div>
            <div style="background:#ffffff; border:1px solid var(--border); border-radius:12px; padding:14px 16px; box-shadow:0 1px 3px rgba(0,0,0,0.03);">
                <div style="font-size:11px; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Class Average Score</div>
                <div style="font-size:18px; font-weight:800; color:#2563eb; margin-top:2px;">${classAvgPct}% Overall</div>
            </div>
            <div style="background:#ffffff; border:1px solid var(--border); border-radius:12px; padding:14px 16px; box-shadow:0 1px 3px rgba(0,0,0,0.03);">
                <div style="font-size:11px; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Class Top Performer</div>
                <div style="font-size:16px; font-weight:800; color:#16a34a; margin-top:2px;">${topScorer ? topScorer.student.name : '—'} (${topScorer ? topScorer.pct : 0}%)</div>
            </div>
        </div>

        <!-- SCOREBOARD TABLE -->
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th style="width:90px;">Rank</th>
                        <th>Student Name</th>
                        ${examSubjects.map(sub => `<th>${sub} <span style="font-size:10px; font-weight:400; color:var(--text-muted);">(/100)</span></th>`).join('')}
                        <th>Total Score</th>
                        <th>Percentage</th>
                        <th>Performance Grade</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${studentScorecards.map(sc => `
                        <tr>
                            <td>${sc.rankDisplay}</td>
                            <td>
                                <div style="display:flex; align-items:center; gap:10px;">
                                    <div class="avatar avatar-sm" style="background:${sc.student.color || '#2563eb'}; width:30px; height:30px; font-size:11.5px;">${getInitials(sc.student.name)}</div>
                                    <span style="font-weight:700; color:var(--text);">${sc.student.name}</span>
                                </div>
                            </td>
                            ${examSubjects.map(sub => `
                                <td style="font-weight:700; color:var(--text);">${sc.subjectScores[sub]}</td>
                            `).join('')}
                            <td style="font-weight:800; color:#2563eb;">${sc.totalObtained} / ${sc.totalMax}</td>
                            <td style="font-weight:800; color:${sc.pct >= 80 ? '#16a34a' : sc.pct >= 60 ? '#2563eb' : '#dc2626'};">${sc.pct}%</td>
                            <td>${sc.gradeBadge}</td>
                            <td>
                                ${isExamEditable ? `
                                    <button class="btn btn-sm btn-outline" onclick="openAdminEnterMarksModal('${sc.student.id}')" style="font-size:11px; padding:3px 8px;">
                                        ✏️ Edit
                                    </button>
                                ` : `
                                    <span style="font-size:11px; color:var(--text-muted); font-weight:600; display:inline-flex; align-items:center; gap:3px;">
                                        🔒 Locked
                                    </span>
                                `}
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// ---------------------------------------------------------
// ADD NEW EXAM (ADMIN)
// ---------------------------------------------------------
function openAdminAddNewExamModal() {
    const nameInput = document.getElementById('f-admin-new-exam-name');
    const dateInput = document.getElementById('f-admin-new-exam-date');
    const classesContainer = document.getElementById('f-admin-new-exam-classes-container');
    const subjectsContainer = document.getElementById('f-admin-new-exam-subjects-container');

    if (nameInput) nameInput.value = '';
    if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];

    const availableClasses = (typeof CLASS_OPTIONS !== 'undefined') ? CLASS_OPTIONS : ['Class 8', 'Class 9', 'Class 10', 'Class 7', 'Class 6', 'Class 5'];
    const availableSubjects = ['Mathematics', 'Science', 'Physics', 'Chemistry', 'Biology', 'English', 'Social Studies', 'Hindi'];

    if (classesContainer) {
        classesContainer.innerHTML = availableClasses.map(c => `
            <label class="checkbox-item" style="font-size:12.5px; padding:4px 8px; background:#f8fafc; border:1px solid var(--border); border-radius:6px; cursor:pointer;">
                <input type="checkbox" value="${c}" checked>
                <span>${c}</span>
            </label>
        `).join('');
    }

    if (subjectsContainer) {
        subjectsContainer.innerHTML = availableSubjects.map((s, i) => `
            <label class="checkbox-item" style="font-size:12.5px; padding:4px 8px; background:#f8fafc; border:1px solid var(--border); border-radius:6px; cursor:pointer;">
                <input type="checkbox" value="${s}" ${i < 3 ? 'checked' : ''}>
                <span>${s}</span>
            </label>
        `).join('');
    }

    openModal('adminAddNewExamModal');
}

function submitAdminNewExam() {
    const name = document.getElementById('f-admin-new-exam-name')?.value.trim();
    const date = document.getElementById('f-admin-new-exam-date')?.value;

    const checkedClasses = Array.from(document.querySelectorAll('#f-admin-new-exam-classes-container input[type="checkbox"]:checked'))
        .map(cb => cb.value);

    const checkedSubjects = Array.from(document.querySelectorAll('#f-admin-new-exam-subjects-container input[type="checkbox"]:checked'))
        .map(cb => cb.value);

    if (!name || !date || checkedClasses.length === 0 || checkedSubjects.length === 0) {
        showToast('Please enter Exam Name, Date, and select at least one class and subject.', 'danger');
        return;
    }

    const newExam = {
        id: 'ex_' + Date.now(),
        name: name,
        date: date,
        classes: checkedClasses,
        subjects: checkedSubjects
    };

    const customExams = JSON.parse(localStorage.getItem('ec_custom_exams') || '[]');
    customExams.unshift(newExam);
    localStorage.setItem('ec_custom_exams', JSON.stringify(customExams));

    selectedAdminExam = name;
    selectedAdminExamClass = checkedClasses[0] || 'Class 8';

    closeModal('adminAddNewExamModal');
    showToast(`Exam "${name}" scheduled successfully! It is active for marks evaluation.`, 'success');
    setupAdminMarksControls();
    renderAdminExamScoreboard();
}

// ---------------------------------------------------------
// ENTER / UPDATE MARKS (ADMIN)
// ---------------------------------------------------------
function openAdminEnterMarksModal(preSelectedStudentId = '') {
    const allExams = getAdminAllExams();
    const latest2Exams = allExams.slice(0, 2);

    const examSelect = document.getElementById('f-admin-exam-name');
    const classSelect = document.getElementById('f-admin-exam-class');
    const subjectSelect = document.getElementById('f-admin-exam-subject');
    const studentSelect = document.getElementById('f-admin-exam-student');

    if (!examSelect || !classSelect || !subjectSelect || !studentSelect) return;

    examSelect.innerHTML = latest2Exams.map(e => `
        <option value="${e.name}" ${e.name === selectedAdminExam ? 'selected' : ''}>${e.name} 🟢 (Latest)</option>
    `).join('');

    if (!latest2Exams.some(e => e.name === selectedAdminExam)) {
        selectedAdminExam = latest2Exams[0]?.name || allExams[0]?.name;
        examSelect.value = selectedAdminExam;
    }

    const examObj = latest2Exams.find(e => e.name === examSelect.value) || latest2Exams[0];
    classSelect.innerHTML = examObj.classes.map(c => `
        <option value="${c}" ${c === selectedAdminExamClass ? 'selected' : ''}>${c}</option>
    `).join('');

    subjectSelect.innerHTML = examObj.subjects.map(s => `
        <option value="${s}">${s}</option>
    `).join('');

    const selClass = classSelect.value || selectedAdminExamClass;
    const classSts = (students || []).filter(s => s.cls === selClass);
    studentSelect.innerHTML = classSts.map(s => `
        <option value="${s.id}" ${s.id === preSelectedStudentId ? 'selected' : ''}>${s.name} (${s.cls})</option>
    `).join('');

    document.getElementById('f-admin-exam-marks').value = '';
    document.getElementById('f-admin-exam-max').value = '100';

    openModal('adminEnterMarksModal');
}

function onAdminExamModalChange() {
    const allExams = getAdminAllExams();
    const latest2Exams = allExams.slice(0, 2);

    const examSelect = document.getElementById('f-admin-exam-name');
    const classSelect = document.getElementById('f-admin-exam-class');
    const subjectSelect = document.getElementById('f-admin-exam-subject');
    const studentSelect = document.getElementById('f-admin-exam-student');

    if (!examSelect || !classSelect || !subjectSelect || !studentSelect) return;

    const examObj = latest2Exams.find(e => e.name === examSelect.value) || latest2Exams[0];
    subjectSelect.innerHTML = examObj.subjects.map(s => `<option value="${s}">${s}</option>`).join('');

    const selClass = classSelect.value;
    const classSts = (students || []).filter(s => s.cls === selClass);
    studentSelect.innerHTML = classSts.map(s => `<option value="${s.id}">${s.name} (${s.cls})</option>`).join('');
}

async function submitAdminExamMarks() {
    const examName = document.getElementById('f-admin-exam-name')?.value;
    const cls = document.getElementById('f-admin-exam-class')?.value;
    const subject = document.getElementById('f-admin-exam-subject')?.value;
    const studentId = document.getElementById('f-admin-exam-student')?.value;
    const marks = parseFloat(document.getElementById('f-admin-exam-marks')?.value);
    const max = parseFloat(document.getElementById('f-admin-exam-max')?.value) || 100;

    if (!examName || !subject || !studentId || isNaN(marks)) {
        showToast('Please fill all required marks fields (*)', 'danger');
        return;
    }

    const pct = Math.round((marks / max) * 100);
    const grade = pct >= 90 ? 'A+' : pct >= 80 ? 'A' : pct >= 70 ? 'B+' : pct >= 60 ? 'B' : 'C';

    const resultObj = {
        id: `er_${Date.now()}_${studentId}`,
        student_id: studentId,
        exam_name: examName,
        subject: subject,
        marks_obtained: marks,
        max_marks: max,
        grade: grade,
        created_at: new Date().toISOString()
    };

    if (typeof DBService !== 'undefined' && typeof DBService.upsertExamResult === 'function') {
        await DBService.upsertExamResult(resultObj);
    } else {
        const list = JSON.parse(localStorage.getItem('ec_exam_results') || '[]');
        const idx = list.findIndex(r => (r.student_id === studentId || r.studentId === studentId) && (r.exam_name === examName || r.exam === examName) && r.subject === subject);
        if (idx >= 0) list[idx] = resultObj;
        else list.unshift(resultObj);
        localStorage.setItem('ec_exam_results', JSON.stringify(list));
    }

    closeModal('adminEnterMarksModal');
    showToast(`Marks for ${subject} saved successfully!`, 'success');
    renderAdminExamScoreboard();
}
