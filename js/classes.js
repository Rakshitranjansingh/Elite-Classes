/* Elite Classes — Active Classes & Subject Teachers Directory */

let activeClassesDirectoryFilter = '';

function setClassesFilter(cls) {
    activeClassesDirectoryFilter = cls;
    renderClassesView();
}

// Helper: Get subject averages & student rankings for a class
function getClassSubjectAnalytics(clsName) {
    const enrolledStudents = students.filter(s => s.cls === clsName);
    
    // Distinct subjects taught in this class
    let subjectList = [...new Set(enrolledStudents.flatMap(s => (s.subjects || '').split(',').map(sub => sub.trim()).filter(Boolean)))];
    if (subjectList.length === 0) subjectList = ['Mathematics', 'Science', 'English'];

    const analytics = subjectList.map(sub => {
        let studentScores = enrolledStudents.map(s => {
            const studentExams = typeof MOCK_EXAM_MARKS !== 'undefined' ? (MOCK_EXAM_MARKS[s.id] || []) : [];
            const subExam = studentExams.find(e => e.subject.toLowerCase() === sub.toLowerCase()) || {
                exam: 'Mid-Term Exam 2025',
                subject: sub,
                marks: s.id === 's1' ? 96 : s.id === 's2' ? 88 : s.id === 's3' ? 94 : s.id === 's5' ? 98 : 82,
                max: 100,
                grade: 'A'
            };

            const pct = Math.round((subExam.marks / subExam.max) * 100);
            return {
                student: s,
                exam: subExam.exam,
                marks: subExam.marks,
                max: subExam.max,
                pct: pct,
                grade: subExam.grade || (pct >= 90 ? 'A+' : pct >= 80 ? 'A' : 'B')
            };
        });

        // Sort students in decreasing order of percentage / marks score
        studentScores.sort((a, b) => b.pct - a.pct);

        const totalPct = studentScores.reduce((acc, x) => acc + x.pct, 0);
        const avg = studentScores.length > 0 ? Math.round(totalPct / studentScores.length) : 80;

        return {
            subject: sub,
            avg: avg,
            studentScores: studentScores
        };
    });

    return analytics;
}

// Open Subject Rankings Modal for a Class & Subject
function openSubjectRankingsModal(clsName, subjectName) {
    const analytics = getClassSubjectAnalytics(clsName);
    const subData = analytics.find(a => a.subject.toLowerCase() === subjectName.toLowerCase()) || analytics[0];

    if (!subData) return;

    const modalTitle = document.getElementById('subjectRankingsModalTitle');
    const modalBody = document.getElementById('subjectRankingsModalBody');

    if (modalTitle) modalTitle.textContent = `${clsName} — ${subData.subject} Student Rankings`;

    if (modalBody) {
        modalBody.innerHTML = `
            <div style="display:flex; align-items:center; justify-content:space-between; background:#f8fafc; padding:14px 18px; border-radius:12px; border:1px solid var(--border); margin-bottom:20px;">
                <div>
                    <div style="font-size:12px; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Class & Subject</div>
                    <div style="font-size:18px; font-weight:800; color:var(--text);">${clsName} • ${subData.subject}</div>
                </div>
                <div style="text-align:right;">
                    <div style="font-size:12px; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Class Average Score</div>
                    <div style="font-size:22px; font-weight:800; color:var(--primary);">${subData.avg}%</div>
                </div>
            </div>

            <div style="font-size:13.5px; font-weight:700; color:var(--text); margin-bottom:10px;">
                Student Leaderboard (Ranked in Decreasing Order of Score)
            </div>

            <div class="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th style="width:60px;">Rank</th>
                            <th>Student</th>
                            <th>Parent & Contact</th>
                            <th>Marks Score</th>
                            <th>Percentage</th>
                            <th>Grade</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${subData.studentScores.map((sc, idx) => {
                            const initials = getInitials(sc.student.name);
                            const rankBadge = idx === 0 ? '<span class="badge badge-success" style="font-size:12px;">🥇 #1</span>' :
                                              idx === 1 ? '<span class="badge badge-primary" style="font-size:12px;">🥈 #2</span>' :
                                              idx === 2 ? '<span class="badge badge-info" style="font-size:12px;">🥉 #3</span>' :
                                              `<span style="font-weight:700; color:var(--text-muted);">#${idx + 1}</span>`;

                            return `
                            <tr>
                                <td>${rankBadge}</td>
                                <td>
                                    <div style="display:flex; align-items:center; gap:10px;">
                                        <div class="avatar" style="background:${sc.student.color}">${initials}</div>
                                        <div style="font-weight:700; color:var(--text);">${sc.student.name}</div>
                                    </div>
                                </td>
                                <td>
                                    <div>${sc.student.parent}</div>
                                    <div style="font-size:11.5px; color:var(--text-muted);">${sc.student.phone}</div>
                                </td>
                                <td style="font-weight:700; color:var(--primary);">${sc.marks} / ${sc.max}</td>
                                <td style="font-weight:800; font-size:14px;">${sc.pct}%</td>
                                <td><span class="badge ${sc.pct >= 90 ? 'badge-success' : 'badge-primary'}">${sc.grade}</span></td>
                                <td>
                                    <button class="btn btn-sm btn-outline" onclick="closeModal('subjectRankingsModal'); openStudentDetailModal('${sc.student.id}')">
                                        View Profile
                                    </button>
                                </td>
                            </tr>`;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    openModal('subjectRankingsModal');
}

function renderClassesView() {
    // 1. Render Desktop Class Filter Chips: Class: All LKG UKG 1 2 3 4 5 6 7 8 9 10
    const filterContainer = document.getElementById('classes-filter-chips');
    if (filterContainer) {
        filterContainer.innerHTML = `<button class="btn btn-sm ${activeClassesDirectoryFilter === '' ? 'btn-primary' : 'btn-outline'}" onclick="setClassesFilter('')">All</button>` +
            CLASS_OPTIONS.map(c => {
                const label = (c === 'LKG' || c === 'UKG') ? c : c.replace('Class ', '');
                const isActive = activeClassesDirectoryFilter === c || activeClassesDirectoryFilter === label;
                return `<button class="btn btn-sm ${isActive ? 'btn-primary' : 'btn-outline'}" onclick="setClassesFilter('${c}')">${label}</button>`;
            }).join('');
    }

    // 2. Sync Mobile Select Dropdown
    const mobileSel = document.getElementById('classes-mobile-select');
    if (mobileSel) {
        mobileSel.value = activeClassesDirectoryFilter;
    }

    // 3. Filter Class Cards Grid
    const container = document.getElementById('classes-cards-grid');
    if (!container) return;

    let filteredClasses = CLASS_OPTIONS;
    if (activeClassesDirectoryFilter && activeClassesDirectoryFilter !== '') {
        filteredClasses = CLASS_OPTIONS.filter(c => {
            if (activeClassesDirectoryFilter === c) return true;
            if (c === ('Class ' + activeClassesDirectoryFilter)) return true;
            return false;
        });
    }

    const classStats = filteredClasses.map(cls => {
        const enrolledStudents = students.filter(s => s.cls === cls);
        const assignedTeachers = teachers.filter(t => t.classes && t.classes.toLowerCase().includes(cls.toLowerCase()));
        const analytics = getClassSubjectAnalytics(cls);

        return {
            cls,
            studentCount: enrolledStudents.length,
            assignedTeachers,
            analytics
        };
    });

    if (classStats.length === 0) {
        container.innerHTML = `<div class="empty-state" style="grid-column: 1/-1;"><p>No class card found for "${activeClassesDirectoryFilter}"</p></div>`;
        return;
    }

    container.innerHTML = classStats.map(c => `
        <div class="card" id="class-card-${c.cls.replace(/\s+/g, '-')}" style="margin-bottom:0; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
                <div class="card-header" style="background:#f8fafc;">
                    <div style="font-size:16px; font-weight:800; color:var(--text);">${c.cls}</div>
                    <span class="badge ${c.studentCount > 0 ? 'badge-primary' : 'badge-warning'}">${c.studentCount} Students</span>
                </div>
                <div class="card-body">
                    <!-- SUBJECT-WISE CLASS AVERAGES (INTERACTIVE BUTTONS) -->
                    <div style="margin-bottom:16px;">
                        <div style="font-size:11px; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:6px;">
                            📊 Subject Averages (Click for Score Rankings)
                        </div>
                        <div style="display:flex; gap:6px; flex-wrap:wrap;">
                            ${c.analytics.map(sa => `
                                <button class="btn btn-sm btn-outline" style="border-color:var(--primary); color:var(--primary); font-weight:700; padding:4px 8px; font-size:11.5px;" onclick="openSubjectRankingsModal('${c.cls}', '${sa.subject}')" title="Click to see decreasing score student list">
                                    ${sa.subject}: ${sa.avg}% Avg →
                                </button>
                            `).join('')}
                        </div>
                    </div>

                    <div>
                        <div style="font-size:11px; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:6px;">Subject Teachers</div>
                        ${c.assignedTeachers.length === 0 ? '<div style="font-size:12px; color:var(--text-light); italic;">No assigned teachers listed</div>' : `
                        <div style="display:flex; flex-direction:column; gap:8px;">
                            ${c.assignedTeachers.map(t => `
                            <div style="display:flex; align-items:center; justify-content:space-between; background:#f1f5f9; padding:8px 10px; border-radius:8px;">
                                <div>
                                    <div style="font-size:12.5px; font-weight:700; color:var(--text);">${t.name}</div>
                                    <div style="font-size:11px; color:var(--text-muted);">${t.subjects}</div>
                                </div>
                                <a href="https://wa.me/91${t.phone}" target="_blank" class="btn btn-sm btn-whatsapp" style="padding:4px 8px; font-size:11px;">
                                    Contact
                                </a>
                            </div>`).join('')}
                        </div>
                        `}
                    </div>
                </div>
            </div>
            <div style="padding:12px 20px; border-top:1px solid var(--border); background:#ffffff;">
                <button class="btn btn-sm btn-outline" style="width:100%;" onclick="navigateToView('profiles'); switchProfileTab('students'); setStudentClassFilter('${c.cls}');">
                    View Enrolled Students
                </button>
            </div>
        </div>
    `).join('');
}
