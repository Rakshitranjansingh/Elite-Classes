/* Elite Classes — Student Portal & Dashboard Core Module */

let currentStudent = null;
let activeStudentTab = 'today';
let studentStats = { testAttempts: {}, courseProgress: {} };

// Gateway Tab Switcher (Student vs Admin)
function switchAuthTab(mode) {
    const studentBtn = document.getElementById('auth-tab-student');
    const adminBtn = document.getElementById('auth-tab-admin');
    const studentForm = document.getElementById('auth-form-student');
    const adminForm = document.getElementById('auth-form-admin');

    if (mode === 'student') {
        studentBtn.classList.add('active');
        adminBtn.classList.remove('active');
        studentForm.style.display = 'flex';
        adminForm.style.display = 'none';
    } else {
        adminBtn.classList.add('active');
        studentBtn.classList.remove('active');
        adminForm.style.display = 'flex';
        studentForm.style.display = 'none';
    }
}

// Authenticate & Verify Student Login via Access Code (123456) & WhatsApp Number
async function verifyStudentLogin() {
    const codeInput = document.getElementById('student-code-input').value.trim();
    const phoneInput = document.getElementById('student-phone-input').value.trim().replace(/\D/g, '');
    const errEl = document.getElementById('student-auth-error');
    errEl.style.display = 'none';

    if (!phoneInput) {
        errEl.textContent = 'Please enter your registered WhatsApp / Mobile number.';
        errEl.style.display = 'block';
        return;
    }

    // Verify Student Access Code (Default: 123456)
    const expectedStudentKey = await DBService.getStudentAccessKey();
    if (codeInput !== expectedStudentKey && codeInput !== '123456') {
        errEl.textContent = 'Invalid Coaching Student Access Code. Default is 123456.';
        errEl.style.display = 'block';
        return;
    }

    // Load latest student records if empty
    if (!students || students.length === 0) {
        students = await DBService.fetchStudents();
    }

    // Find student matching phone number
    const matched = students.find(s => {
        const pClean = (s.phone || '').replace(/\D/g, '');
        return pClean === phoneInput || pClean.endsWith(phoneInput) || phoneInput.endsWith(pClean);
    });

    if (!matched) {
        errEl.textContent = `No student found registered with number ${phoneInput}. Please contact Admin.`;
        errEl.style.display = 'block';
        return;
    }

    // Login Success
    currentStudent = matched;
    localStorage.setItem('ec_user_role', 'student');
    localStorage.setItem('ec_student_id', matched.id);
    localStorage.setItem('ec_student_name', matched.name);
    localStorage.setItem('ec_active_student', JSON.stringify({
        id: matched.id,
        name: matched.name,
        cls: matched.cls || matched.class || 'Class 10',
        phone: matched.phone
    }));

    if (typeof initInactivityListeners === 'function') initInactivityListeners();
    if (typeof resetInactivityTimer === 'function') resetInactivityTimer();

    showToast(`Welcome back, ${matched.name}!`, 'success');
    
    // Hide Auth Screen & Load Student Dashboard
    document.getElementById('auth-screen').style.display = 'none';
    await loadStudentDashboard();
}

// Logout & Return to Gateway Screen
function logoutStudent() {
    currentStudent = null;
    localStorage.removeItem('ec_user_role');
    localStorage.removeItem('ec_student_id');
    localStorage.removeItem('ec_student_name');
    localStorage.removeItem('ec_active_student');
    localStorage.removeItem('ec_last_activity');
    if (typeof logoutToGateway === 'function') {
        logoutToGateway('Logged out of Student Portal');
    } else {
        window.location.href = 'index.html';
    }
}

// Load Student Dashboard View & Data
async function loadStudentDashboard() {
    if (!currentStudent) return;

    // Hide Top Right Admin Icon in Student View
    const adminChip = document.getElementById('app-header-admin-chip');
    if (adminChip) adminChip.style.display = 'none';

    // Navigate to Student View
    document.querySelectorAll('.page-view').forEach(v => v.classList.remove('active'));
    const portalView = document.getElementById('view-student-portal');
    if (portalView) portalView.classList.add('active');

    // Update Header Avatar & Greeting
    const avatarEl = document.getElementById('st-portal-avatar');
    if (avatarEl) {
        avatarEl.textContent = getInitials(currentStudent.name);
        avatarEl.style.background = currentStudent.color || '#2563eb';
    }

    const headerUserEl = document.getElementById('st-header-username');
    if (headerUserEl) {
        headerUserEl.textContent = typeof formatProfileButtonName === 'function' ? formatProfileButtonName(currentStudent.name) : currentStudent.name;
    }

    const headerAvatarEl = document.getElementById('st-header-avatar');
    if (headerAvatarEl) {
        headerAvatarEl.textContent = getInitials(currentStudent.name);
        if (currentStudent.color) headerAvatarEl.style.background = currentStudent.color;
    }

    const nameEl = document.getElementById('st-portal-name');
    if (nameEl) nameEl.textContent = `Hello, ${currentStudent.name}`;
    const badgeEl = document.getElementById('st-portal-class-badge');
    if (badgeEl) badgeEl.textContent = currentStudent.cls || 'Student';
    const subEl = document.getElementById('st-portal-sub');
    if (subEl) subEl.textContent = `Access your class courses, test series, attendance, and fee receipts.`;

    // Load persistent stats
    studentStats = await DBService.fetchStudentStats(currentStudent.id);
    if (!studentStats.testAttempts) studentStats.testAttempts = {};
    if (!studentStats.courseProgress) studentStats.courseProgress = {};

    // Render Profile Info Cards in Settings Modal
    renderStudentProfileCards();

    // Render Right-to-Left Scrolling Notice Slides
    await renderStudentNoticeSlides();

    // Render Active Tab Content
    switchStudentTab(activeStudentTab);
}

// Render Profile Info Cards inside Settings Modal
function renderStudentProfileCards() {
    const grid = document.getElementById('st-settings-info-grid');
    if (!grid || !currentStudent) return;

    const cardsHtml = `
        <div class="student-info-card">
            <div class="student-info-icon">👤</div>
            <div>
                <div class="student-info-label">Full Name</div>
                <div class="student-info-value">${currentStudent.name}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">🎓</div>
            <div>
                <div class="student-info-label">Class / Standard</div>
                <div class="student-info-value">${currentStudent.cls}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">👨‍👩‍👦</div>
            <div>
                <div class="student-info-label">Parent / Guardian</div>
                <div class="student-info-value">${currentStudent.parent}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">📱</div>
            <div>
                <div class="student-info-label">WhatsApp Number</div>
                <div class="student-info-value">+91 ${currentStudent.phone}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">📧</div>
            <div>
                <div class="student-info-label">Email Address</div>
                <div class="student-info-value">${currentStudent.email || 'N/A'}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">🏫</div>
            <div>
                <div class="student-info-label">School Name</div>
                <div class="student-info-value">${currentStudent.school || 'Not Specified'}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">📚</div>
            <div>
                <div class="student-info-label">Enrolled Subjects</div>
                <div class="student-info-value">${currentStudent.subjects || 'General Subjects'}</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">💰</div>
            <div>
                <div class="student-info-label">Monthly Fee & Due Day</div>
                <div class="student-info-value">₹${(currentStudent.fee || 0).toLocaleString()} (Due: ${currentStudent.due || 10}th)</div>
            </div>
        </div>

        <div class="student-info-card">
            <div class="student-info-icon">📅</div>
            <div>
                <div class="student-info-label">Admission Date</div>
                <div class="student-info-value">${currentStudent.doa || '2025-04-01'}</div>
            </div>
        </div>
    `;

    grid.innerHTML = cardsHtml;
}

// Switch Student Dashboard Tabs
function switchStudentTab(tab) {
    activeStudentTab = tab;

    // Update active tab buttons
    document.querySelectorAll('#view-student-portal .profile-tab').forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-sttab') === tab);
    });

    // Toggle tab section containers
    document.querySelectorAll('.st-tab-section').forEach(s => {
        s.style.display = s.id === 'st-tab-section-' + tab ? 'block' : 'none';
    });

    // Render corresponding section
    if (tab === 'today') renderStudentToday();
    if (tab === 'courses') renderStudentCourses();
    if (tab === 'tests') renderStudentTests();
    if (tab === 'attendance') renderStudentAttendance();
    if (tab === 'fees') renderStudentFees();
    if (tab === 'marks') renderStudentExamResults();
}

// 1. Render Today Tab
function renderStudentToday() {
    const container = document.getElementById('st-today-container');
    if (!container || !currentStudent) return;

    const rawCls = (currentStudent.cls || currentStudent.class || 'Class 10').toString().trim();
    const isClass10 = (rawCls === 'Class 10' || rawCls === '10' || rawCls.toLowerCase().includes('10'));

    let coursesPreviewHtml = '';
    if (isClass10) {
        coursesPreviewHtml = `
            <div style="margin-top:20px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <span style="font-size:18px;">🚀</span>
                        <h3 style="font-size:16px; font-weight:800; color:var(--text); margin:0;">
                            Interactive Courses & LMS Modules
                        </h3>
                    </div>
                    <button class="btn btn-outline btn-sm" onclick="switchStudentTab('courses')" style="font-size:11.5px; font-weight:700; border-radius:8px;">
                        View All Subjects →
                    </button>
                </div>

                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:14px;">
                    <!-- SCIENCE -->
                    <div class="card" style="border-radius:12px; border:1px solid #bfdbfe; background:#ffffff; box-shadow:0 2px 8px rgba(37,99,235,0.06); padding:16px; display:flex; flex-direction:column; justify-content:space-between; margin-bottom:0;">
                        <div>
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                                <span style="font-size:24px;">🔬</span>
                                <span class="badge badge-primary" style="font-size:10.5px; font-weight:800;">13 Chapters • 260 Modules</span>
                            </div>
                            <h4 style="font-size:15px; font-weight:800; color:#1e3a8a; margin:0 0 4px;">Science Interactive Course</h4>
                            <p style="font-size:12px; color:var(--text-muted); margin:0 0 14px; line-height:1.4;">
                                Chemical Reactions, Acids & Bases, Life Processes, Light, Electricity & Environment with 70% Mastery Gating.
                            </p>
                        </div>
                        <a href="modules/course/class10/science/science_course_hub.html" class="btn btn-primary btn-sm" style="font-weight:700; border-radius:8px; text-decoration:none; display:inline-flex; align-items:center; justify-content:center; gap:6px; background:#2563eb; border-color:#2563eb;">
                            Continue Science →
                        </a>
                    </div>

                    <!-- GEOGRAPHY -->
                    <div class="card" style="border-radius:12px; border:1px solid #bae6fd; background:#ffffff; box-shadow:0 2px 8px rgba(2,132,199,0.06); padding:16px; display:flex; flex-direction:column; justify-content:space-between; margin-bottom:0;">
                        <div>
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                                <span style="font-size:24px;">🌐</span>
                                <span class="badge" style="background:#e0f2fe; color:#0369a1; font-size:10.5px; font-weight:800;">7 Chapters • 140 Modules</span>
                            </div>
                            <h4 style="font-size:15px; font-weight:800; color:#0369a1; margin:0 0 4px;">Geography Interactive Course</h4>
                            <p style="font-size:12px; color:var(--text-muted); margin:0 0 14px; line-height:1.4;">
                                Resources, Forests & Wildlife, Water, Agriculture, Minerals & Manufacturing Industries.
                            </p>
                        </div>
                        <a href="modules/course/class10/geography/geography_course_hub.html" class="btn btn-primary btn-sm" style="font-weight:700; border-radius:8px; text-decoration:none; display:inline-flex; align-items:center; justify-content:center; gap:6px; background:#0284c7; border-color:#0284c7;">
                            Continue Geography →
                        </a>
                    </div>

                    <!-- HISTORY -->
                    <div class="card" style="border-radius:12px; border:1px solid #fed7aa; background:#ffffff; box-shadow:0 2px 8px rgba(180,83,9,0.06); padding:16px; display:flex; flex-direction:column; justify-content:space-between; margin-bottom:0;">
                        <div>
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                                <span style="font-size:24px;">🏛️</span>
                                <span class="badge" style="background:#fef3c7; color:#b45309; font-size:10.5px; font-weight:800;">5 Chapters • 100 Modules</span>
                            </div>
                            <h4 style="font-size:15px; font-weight:800; color:#b45309; margin:0 0 4px;">History Interactive Course</h4>
                            <p style="font-size:12px; color:var(--text-muted); margin:0 0 14px; line-height:1.4;">
                                Nationalism in Europe & India, Making of a Global World, Industrialisation & Print Culture.
                            </p>
                        </div>
                        <a href="modules/course/class10/history/history_course_hub.html" class="btn btn-primary btn-sm" style="font-weight:700; border-radius:8px; text-decoration:none; display:inline-flex; align-items:center; justify-content:center; gap:6px; background:#b45309; border-color:#b45309;">
                            Continue History →
                        </a>
                    </div>

                    <!-- POLITICS -->
                    <div class="card" style="border-radius:12px; border:1px solid #c7d2fe; background:#ffffff; box-shadow:0 2px 8px rgba(67,56,202,0.06); padding:16px; display:flex; flex-direction:column; justify-content:space-between; margin-bottom:0;">
                        <div>
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                                <span style="font-size:24px;">⚖️</span>
                                <span class="badge" style="background:#e0e7ff; color:#4338ca; font-size:10.5px; font-weight:800;">5 Chapters • 100 Modules</span>
                            </div>
                            <h4 style="font-size:15px; font-weight:800; color:#4338ca; margin:0 0 4px;">Democratic Politics Course</h4>
                            <p style="font-size:12px; color:var(--text-muted); margin:0 0 14px; line-height:1.4;">
                                Power-sharing, Federalism, Gender & Religion, Political Parties & Outcomes of Democracy.
                            </p>
                        </div>
                        <a href="modules/course/class10/politics/politics_course_hub.html" class="btn btn-primary btn-sm" style="font-weight:700; border-radius:8px; text-decoration:none; display:inline-flex; align-items:center; justify-content:center; gap:6px; background:#4338ca; border-color:#4338ca;">
                            Continue Politics →
                        </a>
                    </div>

                    <!-- ECONOMICS -->
                    <div class="card" style="border-radius:12px; border:1px solid #a7f3d0; background:#ffffff; box-shadow:0 2px 8px rgba(5,150,105,0.06); padding:16px; display:flex; flex-direction:column; justify-content:space-between; margin-bottom:0;">
                        <div>
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                                <span style="font-size:24px;">📈</span>
                                <span class="badge" style="background:#d1fae5; color:#059669; font-size:10.5px; font-weight:800;">5 Chapters • 100 Modules</span>
                            </div>
                            <h4 style="font-size:15px; font-weight:800; color:#059669; margin:0 0 4px;">Economics Interactive Course</h4>
                            <p style="font-size:12px; color:var(--text-muted); margin:0 0 14px; line-height:1.4;">
                                Development, Sectors of Economy, Money & Credit, Globalisation & Consumer Rights.
                            </p>
                        </div>
                        <a href="modules/course/class10/economics/economics_course_hub.html" class="btn btn-primary btn-sm" style="font-weight:700; border-radius:8px; text-decoration:none; display:inline-flex; align-items:center; justify-content:center; gap:6px; background:#059669; border-color:#059669;">
                            Continue Economics →
                        </a>
                    </div>

                    <!-- CBT TEST SERIES -->
                    <div class="card" style="border-radius:12px; border:1px solid #e2e8f0; background:linear-gradient(135deg, #0b1329 0%, #1e293b 100%); color:#ffffff; box-shadow:0 2px 8px rgba(0,0,0,0.1); padding:16px; display:flex; flex-direction:column; justify-content:space-between; margin-bottom:0;">
                        <div>
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                                <span style="font-size:24px;">📝</span>
                                <span class="badge badge-success" style="font-size:10.5px; font-weight:800;">🟢 CBT Live</span>
                            </div>
                            <h4 style="font-size:15px; font-weight:800; color:#ffffff; margin:0 0 4px;">Class 10 CBT Assessments</h4>
                            <p style="font-size:12px; color:#94a3b8; margin:0 0 14px; line-height:1.4;">
                                100-Question full chapter timed examinations with negative marking, leaderboards & instant scorecards.
                            </p>
                        </div>
                        <a href="modules/testseries/data/class10/testseries_class_10.html" class="btn btn-primary btn-sm" style="font-weight:700; border-radius:8px; text-decoration:none; display:inline-flex; align-items:center; justify-content:center; gap:6px; background:#3b82f6; border-color:#3b82f6;">
                            Open CBT Test Hub →
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    container.innerHTML = `
        <div class="card" style="padding:22px 24px; background:linear-gradient(135deg, #ffffff 0%, #f8fafc 100%); border:1px solid var(--border); border-radius:14px; margin-bottom:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
                <div style="display:flex; align-items:center; gap:14px;">
                    <div style="width:48px; height:48px; border-radius:12px; background:linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color:#ffffff; display:flex; align-items:center; justify-content:center; font-size:22px; font-weight:800; box-shadow:0 4px 12px rgba(37,99,235,0.25);">
                        🎓
                    </div>
                    <div>
                        <h2 style="font-size:18px; font-weight:800; color:#0f172a; margin:0 0 3px 0;">
                            Welcome back, ${escapeHtml(currentStudent.name)}!
                        </h2>
                        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                            <span class="badge badge-primary" style="font-weight:700; font-size:11px;">${escapeHtml(rawCls)}</span>
                            <span style="font-size:12px; color:var(--text-muted);">Coaching Session 2025–26 • All Systems Active</span>
                        </div>
                    </div>
                </div>
                <div style="display:flex; gap:8px;">
                    <button class="btn btn-outline btn-sm" onclick="switchStudentTab('courses')" style="font-weight:700; border-radius:8px;">
                        📚 All Courses
                    </button>
                    <button class="btn btn-primary btn-sm" onclick="switchStudentTab('tests')" style="font-weight:700; border-radius:8px;">
                        📝 CBT Tests
                    </button>
                </div>
            </div>
        </div>
        ${coursesPreviewHtml}
    `;
}

// 2. Render Courses Tab (Enrolled Academic Subjects - Full LMS View)
function renderStudentCourses() {
    const container = document.getElementById('st-courses-container');
    if (!container || !currentStudent) return;

    const rawCls = (currentStudent.cls || currentStudent.class || 'Class 10').toString().trim();
    const isClass10 = (rawCls === 'Class 10' || rawCls === '10' || rawCls.toLowerCase().includes('10'));
    const studentCls = isClass10 ? 'Class 10' : rawCls;

    // Normalise enrolled subjects for Class 10
    let enrolledSubs = currentStudent.subjects 
        ? currentStudent.subjects.split(',').map(s => s.trim()).filter(Boolean)
        : ['Science', 'Social Science', 'Mathematics', 'English'];

    if (isClass10) {
        // Guarantee Science and Social Science presence for every Class 10 student
        if (!enrolledSubs.includes('Science')) {
            enrolledSubs.unshift('Science');
        }
        if (!enrolledSubs.includes('Social Science') && 
            !enrolledSubs.some(s => ['Economics', 'History', 'Geography', 'Politics', 'Democratic Politics'].includes(s))) {
            enrolledSubs.splice(1, 0, 'Social Science');
        }
        if (!enrolledSubs.includes('Mathematics')) {
            enrolledSubs.push('Mathematics');
        }
        if (!enrolledSubs.includes('English')) {
            enrolledSubs.push('English');
        }
    }

    const subjectMetaMap = {
        'Science': {
            icon: '🔬',
            color: '#2563eb',
            desc: studentCls === 'Class 10' 
                ? '13 Chapters • 260 Mini-Modules • 2,600 Questions • 70% Mastery Gating' 
                : `${studentCls} Coaching Syllabus & Curriculum Notes`,
            link: studentCls === 'Class 10' ? 'modules/course/class10/science/science_course_hub.html' : null
        },
        'Physics': {
            icon: '⚛️',
            color: '#2563eb',
            desc: studentCls === 'Class 10'
                ? 'Part of Class 10 Science • Light, Electricity & Magnetic Effects'
                : `${studentCls} Physics Curriculum Modules`,
            link: studentCls === 'Class 10' ? 'modules/course/class10/science/science_course_hub.html' : null
        },
        'Chemistry': {
            icon: '🧪',
            color: '#2563eb',
            desc: studentCls === 'Class 10'
                ? 'Part of Class 10 Science • Chemical Reactions, Acids, Metals & Carbon'
                : `${studentCls} Chemistry Curriculum Modules`,
            link: studentCls === 'Class 10' ? 'modules/course/class10/science/science_course_hub.html' : null
        },
        'Biology': {
            icon: '🧬',
            color: '#2563eb',
            desc: studentCls === 'Class 10'
                ? 'Part of Class 10 Science • Life Processes, Reproduction & Heredity'
                : `${studentCls} Biology Curriculum Modules`,
            link: studentCls === 'Class 10' ? 'modules/course/class10/science/science_course_hub.html' : null
        },
        'Mathematics': {
            icon: '📐',
            color: '#8b5cf6',
            desc: `${studentCls} Core Mathematics Syllabus & Problem Sets`,
            link: null
        },
        'Social Science': {
            icon: '🌍',
            color: '#0d9488',
            desc: studentCls === 'Class 10' 
                ? '4 Core Disciplines • 22 Chapters • 440 Mini-Modules • 4,400 Questions' 
                : `${studentCls} History, Geography, Civics & Economics Notes`,
            subLinks: studentCls === 'Class 10' ? [
                { title: 'History', icon: '🏛️', chapters: '5 Ch', color: '#b45309', url: 'modules/course/class10/history/history_course_hub.html' },
                { title: 'Geography', icon: '🌐', chapters: '7 Ch', color: '#0284c7', url: 'modules/course/class10/geography/geography_course_hub.html' },
                { title: 'Politics', icon: '⚖️', chapters: '5 Ch', color: '#4338ca', url: 'modules/course/class10/politics/politics_course_hub.html' },
                { title: 'Economics', icon: '📈', chapters: '5 Ch', color: '#059669', url: 'modules/course/class10/economics/economics_course_hub.html' }
            ] : null,
            link: null
        },
        'History': {
            icon: '🏛️',
            color: '#b45309',
            desc: studentCls === 'Class 10' 
                ? '5 Chapters • 100 Mini-Modules • 1,000 Questions • 70% Mastery' 
                : `${studentCls} History Curriculum Modules`,
            link: studentCls === 'Class 10' ? 'modules/course/class10/history/history_course_hub.html' : null
        },
        'Geography': {
            icon: '🌐',
            color: '#0284c7',
            desc: studentCls === 'Class 10' 
                ? '7 Chapters • 140 Mini-Modules • 1,400 Questions • 70% Mastery' 
                : `${studentCls} Geography Curriculum Modules`,
            link: studentCls === 'Class 10' ? 'modules/course/class10/geography/geography_course_hub.html' : null
        },
        'Democratic Politics': {
            icon: '⚖️',
            color: '#4338ca',
            desc: studentCls === 'Class 10' 
                ? '5 Chapters • 100 Mini-Modules • 1,000 Questions • 70% Mastery' 
                : `${studentCls} Civics Curriculum Modules`,
            link: studentCls === 'Class 10' ? 'modules/course/class10/politics/politics_course_hub.html' : null
        },
        'Politics': {
            icon: '⚖️',
            color: '#4338ca',
            desc: studentCls === 'Class 10' 
                ? '5 Chapters • 100 Mini-Modules • 1,000 Questions • 70% Mastery' 
                : `${studentCls} Democratic Politics Curriculum Modules`,
            link: studentCls === 'Class 10' ? 'modules/course/class10/politics/politics_course_hub.html' : null
        },
        'Economics': {
            icon: '📈',
            color: '#059669',
            desc: studentCls === 'Class 10' 
                ? '5 Chapters • 100 Mini-Modules • 1,000 Questions • 70% Mastery' 
                : `${studentCls} Economics Curriculum Modules`,
            link: studentCls === 'Class 10' ? 'modules/course/class10/economics/economics_course_hub.html' : null
        },
        'English': {
            icon: '📖',
            color: '#f59e0b',
            desc: `${studentCls} Literature & Language Competency Modules`,
            link: null
        }
    };

    let cardsHtml = enrolledSubs.map(sub => {
        const meta = subjectMetaMap[sub] || {
            icon: '📘',
            color: '#0284c7',
            desc: `${studentCls} Academic Coaching Material`,
            link: null
        };

        const hasInteractiveCourse = (studentCls === 'Class 10' && meta.link);
        const hasSubLinks = (studentCls === 'Class 10' && Array.isArray(meta.subLinks));

        const actionHtml = hasInteractiveCourse
            ? `<a href="${meta.link}" class="btn btn-primary btn-sm" style="font-weight:700; border-radius:8px; padding:8px 16px; text-decoration:none; display:inline-flex; align-items:center; gap:6px; background:${meta.color}; border-color:${meta.color}; box-shadow:0 2px 6px rgba(0,0,0,0.15);">
                   Open Course →
               </a>`
            : hasSubLinks
            ? `<span style="font-size:11.5px; font-weight:700; color:#0d9488;">Select Subject Above ↗</span>`
            : `<button class="btn btn-outline btn-sm" style="font-weight:600; border-radius:8px; padding:8px 14px;" onclick="showToast('${sub} syllabus materials for ${studentCls} are distributed during classroom lectures.', 'info')">
                   Class Notes
               </button>`;

        const subLinksHtml = hasSubLinks
            ? `<div style="display:grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 12px;">
                ${meta.subLinks.map(sl => `
                    <a href="${sl.url}" style="display:flex; align-items:center; gap:8px; padding:8px 10px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; text-decoration:none; color:#0f172a; font-size:12px; font-weight:700; transition:all 0.2s ease;">
                        <span style="font-size:16px;">${sl.icon}</span>
                        <div style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                            <div style="color:${sl.color};">${sl.title}</div>
                            <div style="font-size:10.5px; font-weight:500; color:#64748b;">${sl.chapters} • Course</div>
                        </div>
                    </a>
                `).join('')}
               </div>`
            : '';

        return `
            <div class="card" style="border-radius:14px; border:1px solid var(--border); box-shadow:0 2px 10px rgba(0,0,0,0.03); overflow:hidden; display:flex; flex-direction:column; justify-content:space-between; margin-bottom:0;">
                <div>
                    <div style="background:${meta.color}; padding:16px 18px; color:#ffffff; display:flex; justify-content:space-between; align-items:center;">
                        <div style="display:flex; align-items:center; gap:10px;">
                            <span style="font-size:24px;">${meta.icon}</span>
                            <div>
                                <h3 style="font-size:16px; font-weight:800; margin:0; color:#ffffff;">${sub}</h3>
                                <div style="font-size:11px; opacity:0.9; margin-top:2px;">${studentCls} Curriculum</div>
                            </div>
                        </div>
                        <span style="background:rgba(255,255,255,0.2); color:#ffffff; font-size:10.5px; font-weight:700; padding:3px 9px; border-radius:12px;">Enrolled</span>
                    </div>
                    <div class="card-body" style="padding:16px 18px;">
                        <p style="font-size:13px; color:var(--text-muted); margin:0; line-height:1.5;">
                            ${meta.desc}
                        </p>
                        ${subLinksHtml}
                    </div>
                </div>
                <div style="padding:12px 18px; background:#f8fafc; border-top:1px solid var(--border); display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-size:11.5px; font-weight:700; color:var(--text-muted);">${studentCls}</span>
                    ${actionHtml}
                </div>
            </div>
        `;
    }).join('');

    const topBannerHtml = isClass10 ? `
        <div class="card" style="background:linear-gradient(135deg, #0b1329 0%, #1e293b 100%); color:#ffffff; border-radius:14px; padding:18px 22px; margin-bottom:20px; border:1px solid rgba(255,255,255,0.1); box-shadow:0 4px 16px rgba(0,0,0,0.1);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:12px;">
                <div>
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
                        <span class="badge badge-primary" style="font-size:10.5px; font-weight:800;">Class 10 LMS</span>
                        <span class="badge badge-success" style="font-size:10.5px; font-weight:700;">🟢 35 Chapters Live</span>
                    </div>
                    <h3 style="font-size:17px; font-weight:800; margin:0; color:#ffffff;">Class 10 Interactive Course Hubs</h3>
                    <p style="font-size:12px; color:#94a3b8; margin:2px 0 0;">20 Progressive Mini-Modules per Chapter • 10 MCQs/Module • 70% Mastery Unlocking</p>
                </div>
            </div>
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap:8px;">
                <a href="modules/course/class10/science/science_course_hub.html" style="display:flex; align-items:center; gap:8px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); border-radius:8px; padding:8px 12px; text-decoration:none; color:#ffffff; font-size:12px; font-weight:700; transition:all 0.2s ease;">
                    <span>🔬</span>
                    <div>
                        <div style="color:#60a5fa;">Science</div>
                        <div style="font-size:10px; color:#94a3b8; font-weight:500;">13 Ch • 260 Mod</div>
                    </div>
                </a>
                <a href="modules/course/class10/geography/geography_course_hub.html" style="display:flex; align-items:center; gap:8px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); border-radius:8px; padding:8px 12px; text-decoration:none; color:#ffffff; font-size:12px; font-weight:700; transition:all 0.2s ease;">
                    <span>🌐</span>
                    <div>
                        <div style="color:#38bdf8;">Geography</div>
                        <div style="font-size:10px; color:#94a3b8; font-weight:500;">7 Ch • 140 Mod</div>
                    </div>
                </a>
                <a href="modules/course/class10/history/history_course_hub.html" style="display:flex; align-items:center; gap:8px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); border-radius:8px; padding:8px 12px; text-decoration:none; color:#ffffff; font-size:12px; font-weight:700; transition:all 0.2s ease;">
                    <span>🏛️</span>
                    <div>
                        <div style="color:#fbbf24;">History</div>
                        <div style="font-size:10px; color:#94a3b8; font-weight:500;">5 Ch • 100 Mod</div>
                    </div>
                </a>
                <a href="modules/course/class10/politics/politics_course_hub.html" style="display:flex; align-items:center; gap:8px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); border-radius:8px; padding:8px 12px; text-decoration:none; color:#ffffff; font-size:12px; font-weight:700; transition:all 0.2s ease;">
                    <span>⚖️</span>
                    <div>
                        <div style="color:#a5b4fc;">Politics</div>
                        <div style="font-size:10px; color:#94a3b8; font-weight:500;">5 Ch • 100 Mod</div>
                    </div>
                </a>
                <a href="modules/course/class10/economics/economics_course_hub.html" style="display:flex; align-items:center; gap:8px; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); border-radius:8px; padding:8px 12px; text-decoration:none; color:#ffffff; font-size:12px; font-weight:700; transition:all 0.2s ease;">
                    <span>📈</span>
                    <div>
                        <div style="color:#34d399;">Economics</div>
                        <div style="font-size:10px; color:#94a3b8; font-weight:500;">5 Ch • 100 Mod</div>
                    </div>
                </a>
            </div>
        </div>
    ` : '';

    container.innerHTML = `
        ${topBannerHtml}
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
            <div>
                <h3 style="font-size:16px; font-weight:800; margin:0; color:var(--text);">All Enrolled Subjects</h3>
                <span style="font-size:12px; color:var(--text-muted);">Coaching curriculum materials for ${studentCls}</span>
            </div>
            <span class="badge badge-primary">${enrolledSubs.length} Subjects</span>
        </div>
        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:16px;">
            ${cardsHtml}
        </div>
    `;
}

// 3. Render Tests Tab (Scheduled Coaching Tests & CBT Assessments)
function renderStudentTests() {
    if (typeof renderStudentTestSeries === 'function') {
        renderStudentTestSeries();
        return;
    }

    const container = document.getElementById('st-tests-container');
    if (!container || !currentStudent) return;

    container.innerHTML = `
        <div class="card" style="padding:40px; text-align:center;">
            <div style="font-size:36px; margin-bottom:12px;">📚</div>
            <h3 style="font-size:16px; font-weight:700; color:var(--text); margin-bottom:6px;">Class 10 Assessment Hub</h3>
            <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">
                Access all chapterwise test series and mock exams.
            </p>
            <a href="modules/testseries/data/class10/testseries_class_10.html" class="btn btn-primary btn-sm" style="text-decoration:none; font-weight:700;">
                Open Class 10 Test Hub →
            </a>
        </div>
    `;
}
function renderStudentAttendance() {
    const container = document.getElementById('st-attendance-summary-container');
    if (!container || !currentStudent) return;

    // Collect attendance records for logged in student
    let presentCount = 0;
    let absentCount = 0;
    let lateCount = 0;
    let totalSessions = 0;

    Object.keys(attendanceRecords).forEach(dateStr => {
        const dayRecs = attendanceRecords[dateStr] || {};
        const status = dayRecs[currentStudent.id];
        if (status) {
            totalSessions++;
            if (status === 'present') presentCount++;
            else if (status === 'absent') absentCount++;
            else if (status === 'late') lateCount++;
        }
    });

    // Defaults for demonstration if attendance sheet is fresh
    if (totalSessions === 0) {
        container.innerHTML = `<div style="padding:24px; text-align:center; color:var(--text-muted);">No attendance records entered yet for ${currentStudent.name}.</div>`;
        return;
    }

    const effectivePresent = presentCount + (lateCount * 0.5);
    const pct = Math.round((effectivePresent / totalSessions) * 100);

    container.innerHTML = `
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap:14px; margin-bottom:20px;">
            <div class="stat-pallet green" style="padding:14px;">
                <div class="stat-content">
                    <div class="stat-title">Attendance Rate</div>
                    <div class="stat-value">${pct}%</div>
                </div>
            </div>
            <div class="stat-pallet blue" style="padding:14px;">
                <div class="stat-content">
                    <div class="stat-title">Sessions Present</div>
                    <div class="stat-value">${presentCount}</div>
                </div>
            </div>
            <div class="stat-pallet purple" style="padding:14px;">
                <div class="stat-content">
                    <div class="stat-title">Late Sessions</div>
                    <div class="stat-value">${lateCount}</div>
                </div>
            </div>
            <div class="stat-pallet orange" style="padding:14px;">
                <div class="stat-content">
                    <div class="stat-title">Sessions Absent</div>
                    <div class="stat-value">${absentCount}</div>
                </div>
            </div>
        </div>

        <div style="margin-top:16px;">
            <div style="font-size:13px; font-weight:700; margin-bottom:8px;">Attendance Progress Bar</div>
            <div class="progress-bar-wrap" style="height:12px;">
                <div class="progress-bar-fill" style="width:${pct}%; background:linear-gradient(90deg, #10b981, #059669);"></div>
            </div>
            <div style="font-size:12px; color:var(--text-muted); margin-top:6px;">
                Maintaining over 85% attendance across all subject sessions is required for examination clearance.
            </div>
        </div>
    `;
}

// Render Student Fee Ledger & Payment Receipts
function renderStudentFees() {
    const container = document.getElementById('st-fee-ledger-container');
    if (!container || !currentStudent) return;

    // Filter payments for current student
    const studentPayments = payments.filter(p => p.studentId === currentStudent.id);

    if (studentPayments.length === 0) {
        container.innerHTML = `
            <div style="padding:20px; text-align:center; color:var(--text-muted);">
                <div>No fee payments recorded yet for ${currentStudent.name}.</div>
                <div style="margin-top:6px; font-size:13px; font-weight:600; color:var(--primary);">Monthly Fee: ₹${(currentStudent.fee || 0).toLocaleString()} (Due Day: ${currentStudent.due || 10}th of every month)</div>
            </div>
        `;
        return;
    }

    let rowsHtml = '';
    studentPayments.forEach(p => {
        rowsHtml += `
            <tr>
                <td><b>${escapeHtml(p.month)}</b></td>
                <td>₹${(p.amount || 0).toLocaleString()}</td>
                <td><span class="badge badge-success">${escapeHtml(p.mode || 'UPI')}</span></td>
                <td>${escapeHtml(p.date || '2025-08-10')}</td>
                <td>
                    <button class="btn btn-sm btn-outline" onclick="viewReceiptFromLedger('${escapeHtml(p.id)}')">📜 View Receipt</button>
                </td>
            </tr>
        `;
    });

    container.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; background:#f8fafc; padding:12px 16px; border-radius:10px; border:1px solid var(--border);">
            <div>
                <span style="font-size:13px; color:var(--text-muted);">Monthly Fee Structure:</span> 
                <b style="color:var(--text-dark); margin-left:6px;">₹${(currentStudent.fee || 0).toLocaleString()} / month</b>
            </div>
            <span class="badge badge-info">Scholarship Discount: ${currentStudent.scholarshipPct || 0}%</span>
        </div>

        <div style="overflow-x:auto;">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Fee Month</th>
                        <th>Amount Paid</th>
                        <th>Payment Mode</th>
                        <th>Date Paid</th>
                        <th>Receipt Document</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                </tbody>
            </table>
        </div>
    `;
}

// View Printable Receipt Modal for Student
function viewReceiptFromLedger(paymentId) {
    const payment = payments.find(p => p.id === paymentId);
    if (!payment || !currentStudent) return;

    const receiptBody = document.getElementById('receiptModalBody');
    if (!receiptBody) return;

    receiptBody.innerHTML = `
        <div style="border:2px dashed var(--primary); padding:20px; border-radius:12px; background:#f8fafc;">
            <div style="text-align:center; margin-bottom:14px;">
                <h3 style="margin:0; font-size:20px; font-weight:800; color:var(--primary);">ELITE CLASSES</h3>
                <div style="font-size:12px; color:var(--text-muted);">OFFICIAL FEE RECEIPT</div>
            </div>

            <div style="display:flex; justify-content:space-between; font-size:13px; margin-bottom:10px;">
                <span>Receipt No: <b>#REC-${escapeHtml(payment.id ? payment.id.slice(-6) : '')}</b></span>
                <span>Date: <b>${escapeHtml(payment.date)}</b></span>
            </div>

            <hr style="border:none; border-top:1px solid #e2e8f0; margin:12px 0;">

            <div style="font-size:13.5px; line-height:1.8;">
                <div>Student Name: <b>${escapeHtml(currentStudent.name)}</b></div>
                <div>Class / Standard: <b>${escapeHtml(currentStudent.cls)}</b></div>
                <div>Parent Name: <b>${escapeHtml(currentStudent.parent)}</b></div>
                <div>Fee Month: <b>${escapeHtml(payment.month)}</b></div>
                <div>Payment Method: <b>${escapeHtml(payment.mode)}</b></div>
            </div>

            <hr style="border:none; border-top:1px solid #e2e8f0; margin:12px 0;">

            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:14px; font-weight:700;">Total Amount Paid:</span>
                <span style="font-size:18px; font-weight:800; color:var(--success);">₹${(payment.amount || 0).toLocaleString()}</span>
            </div>
        </div>
    `;

    openModal('receiptModal');
}

// Render Student Exam Results & Report Card
function renderStudentExamResults() {
    const container = document.getElementById('st-exam-results-container');
    if (!container || !currentStudent) return;

    const studentExams = (typeof examResults !== 'undefined' ? examResults : []).filter(e => e.student_id === currentStudent.id);

    if (studentExams.length === 0) {
        container.innerHTML = `<div style="padding:24px; text-align:center; color:var(--text-muted);">No exam scores recorded yet for ${currentStudent.name}.</div>`;
        return;
    }

    let rowsHtml = '';
    studentExams.forEach(e => {
        rowsHtml += `
            <tr>
                <td><b>${e.exam_name}</b></td>
                <td><span class="badge badge-primary">${e.subject}</span></td>
                <td><b>${e.marks_obtained} / ${e.max_marks}</b></td>
                <td>${Math.round((e.marks_obtained/e.max_marks)*100)}%</td>
                <td><span class="badge badge-success">${e.grade || 'A'}</span></td>
            </tr>
        `;
    });

    container.innerHTML = `
        <div style="overflow-x:auto;">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Examination Title</th>
                        <th>Subject</th>
                        <th>Marks Obtained</th>
                        <th>Percentage</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                </tbody>
            </table>
        </div>
    `;
}

// Auto-boot for standalone student_home.html
async function initStudentHome() {
    const role = localStorage.getItem('ec_user_role');
    const studentId = localStorage.getItem('ec_student_id');
    const studentName = localStorage.getItem('ec_student_name');

    // Immediately update header profile name from session cache
    const headerUserEl = document.getElementById('st-header-username');
    if (headerUserEl && studentName) {
        headerUserEl.textContent = typeof formatProfileButtonName === 'function' ? formatProfileButtonName(studentName) : studentName;
    }

    if (role !== 'student' || !studentId) {
        if (typeof logoutToGateway === 'function') {
            logoutToGateway('Please login with your registered WhatsApp and PIN to enter Student Portal.');
        } else {
            window.location.href = 'index.html';
        }
        return;
    }

    if (typeof initSeedData === 'function') initSeedData();
    if (typeof initSupabaseClient === 'function') initSupabaseClient();

    // Fetch students list if needed
    if (typeof DBService !== 'undefined') {
        if (!students || students.length === 0) {
            students = await DBService.fetchStudents();
        }
        const found = students.find(s => s.id === studentId);
        if (found) {
            currentStudent = found;
        } else {
            // Check Supabase directly
            const liveList = await DBService.fetchStudents();
            const liveFound = liveList.find(s => s.id === studentId);
            if (liveFound) {
                currentStudent = liveFound;
                students = liveList;
            }
        }
    }

    if (!currentStudent) {
        // Fallback to demo student
        currentStudent = (students && students.length > 0) ? students[0] : { id: studentId, name: studentName || 'Student', cls: 'Class 10', phone: '9876543214', fee: 3000, due: 10 };
    }

    // Normalise Class 10 profile and subjects
    const sCls = (currentStudent.cls || currentStudent.class || '').toString().trim();
    if (sCls === 'Class 10' || sCls === '10' || sCls.toLowerCase().includes('10')) {
        currentStudent.cls = 'Class 10';
        if (!currentStudent.subjects || currentStudent.subjects === 'Mathematics, Physics, Chemistry') {
            currentStudent.subjects = 'Science, Social Science, Mathematics, English';
        }
    }

    // Always keep unified session cache fresh with the logged-in student's real profile
    localStorage.setItem('ec_active_student', JSON.stringify({
        id: currentStudent.id,
        name: currentStudent.name,
        cls: currentStudent.cls || currentStudent.class || 'Class 10',
        phone: currentStudent.phone,
        subjects: currentStudent.subjects
    }));

    if (headerUserEl && currentStudent) {
        headerUserEl.textContent = currentStudent.name;
    }

    if (typeof initInactivityListeners === 'function') initInactivityListeners();
    if (typeof resetInactivityTimer === 'function') resetInactivityTimer();
    if (typeof updateSubHeaderDate === 'function') updateSubHeaderDate();

    await loadStudentDashboard();
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('student_home.html') || document.getElementById('view-student-portal')) {
        initStudentHome();
    }
});

