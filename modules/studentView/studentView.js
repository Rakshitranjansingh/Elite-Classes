/* Elite Classes — Student Portal & Dashboard Core Module */

let currentStudent = null;
let activeStudentTab = 'courses';
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

    // Update Welcome Card Info & Action Button Subtitles Dynamically Based on Class
    const activeCls = getStudentActiveClassName();
    const isCivil = activeCls.toLowerCase().includes('civil') || activeCls.toLowerCase().includes('upsc');

    const welcomeName = document.getElementById('st-welcome-name');
    const welcomeClass = document.getElementById('st-welcome-class');
    const homeAvatar = document.getElementById('st-home-avatar');
    if (welcomeName && currentStudent) {
        welcomeName.textContent = `Welcome back, ${currentStudent.name}!`;
    }
    if (welcomeClass) {
        welcomeClass.textContent = activeCls;
    }
    if (homeAvatar && currentStudent && currentStudent.name) {
        const initials = currentStudent.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
        homeAvatar.textContent = initials || '🎓';
    }

    const courseSub = document.getElementById('st-course-btn-subtitle');
    const testSub = document.getElementById('st-test-btn-subtitle');
    if (courseSub) {
        courseSub.textContent = isCivil 
            ? 'Civil Services GS Papers I-III & CSAT LMS' 
            : 'Interactive 20-Module Chapter LMS & Notes';
    }
    if (testSub) {
        testSub.textContent = isCivil 
            ? 'Civil Services Subject Test Series & Mock Exams' 
            : 'CBT Assessments, Real-Time Timer & Leaderboard';
    }
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

// Dynamic Navigation to Respective Class Course & Test Hubs
function getStudentActiveClassName() {
    let studentCls = 'Class 10';
    if (typeof currentStudent !== 'undefined' && currentStudent && (currentStudent.cls || currentStudent.class)) {
        studentCls = currentStudent.cls || currentStudent.class;
    } else {
        try {
            const stored = JSON.parse(localStorage.getItem('ec_active_student'));
            if (stored && (stored.cls || stored.class)) studentCls = stored.cls || stored.class;
            else if (localStorage.getItem('ec_student_class')) studentCls = localStorage.getItem('ec_student_class');
        } catch (e) { }
    }
    return studentCls.toString().trim();
}

function navigateToStudentCourses() {
    const cls = getStudentActiveClassName().toLowerCase();
    if (cls.includes('civil') || cls.includes('upsc')) {
        window.location.href = 'modules/course/civilservices/courses_civilservices.html';
    } else {
        window.location.href = 'modules/course/class10/courses_class_10.html';
    }
}

function navigateToStudentTests() {
    const cls = getStudentActiveClassName().toLowerCase();
    if (cls.includes('civil') || cls.includes('upsc')) {
        window.location.href = 'modules/testseries/data/civilservices/testseries_civilservices.html';
    } else {
        window.location.href = 'modules/testseries/data/class10/testseries_class_10.html';
    }
}

if (typeof window !== 'undefined') {
    window.getStudentActiveClassName = getStudentActiveClassName;
    window.navigateToStudentCourses = navigateToStudentCourses;
    window.navigateToStudentTests = navigateToStudentTests;
}

// Switch Student Dashboard Tabs
function switchStudentTab(tab) {
    activeStudentTab = tab;

    // Support tests/testseries aliases
    const isTestTab = tab === 'tests' || tab === 'testseries';

    // Update active tab buttons
    document.querySelectorAll('#view-student-portal .profile-tab').forEach(t => {
        const tVal = t.getAttribute('data-sttab');
        const isActive = tVal === tab || (isTestTab && (tVal === 'tests' || tVal === 'testseries'));
        t.classList.toggle('active', isActive);
    });

    // Toggle tab section containers
    document.querySelectorAll('.st-tab-section').forEach(s => {
        const isMatch = s.id === 'st-tab-section-' + tab ||
            (isTestTab && (s.id === 'st-tab-section-tests' || s.id === 'st-tab-section-testseries'));
        s.style.display = isMatch ? 'block' : 'none';
    });

    // Toggle module containers if present (in moduleLoader architecture)
    const coursesModule = document.getElementById('module-courses-container');
    const testsModule = document.getElementById('module-testseries-container');
    if (coursesModule) coursesModule.style.display = tab === 'courses' ? 'block' : 'none';
    if (testsModule) testsModule.style.display = isTestTab ? 'block' : 'none';

    // Render corresponding section
    if (tab === 'today') renderStudentToday();
    if (tab === 'courses') renderStudentCourses();
    if (isTestTab) renderStudentTests();
    if (tab === 'attendance') renderStudentAttendance();
    if (tab === 'fees') renderStudentFees();
    if (tab === 'marks' || tab === 'exams') renderStudentExamResults();
}

// 1. Render Today Tab (Delegates to modular TodayViewManager & class-specific handlers)
function renderStudentToday() {
    const container = document.getElementById('st-today-container');
    if (!container || !currentStudent) return;

    if (window.TodayViewManager && typeof window.TodayViewManager.render === 'function') {
        window.TodayViewManager.render(container, currentStudent);
        return;
    }

    // Direct fallback if today.js is loaded asynchronously
    const rawCls = (currentStudent.cls || currentStudent.class || 'Class 10').toString().trim();
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
                        📚 Courses
                    </button>
                    <button class="btn btn-primary btn-sm" onclick="switchStudentTab('tests')" style="font-weight:700; border-radius:8px;">
                        📝 Tests
                    </button>
                </div>
            </div>
        </div>

        <div class="card" style="padding:32px 24px; text-align:center; background:#ffffff; border:1px dashed var(--border); border-radius:14px;">
            <div style="font-size:32px; margin-bottom:10px;">📅</div>
            <h3 style="font-size:16px; font-weight:700; color:#0f172a; margin:0 0 6px 0;">Today's Daily Feed & Classroom Agenda</h3>
            <p style="font-size:13px; color:var(--text-muted); margin:0 auto; max-width:440px; line-height:1.5;">
                Daily classroom announcements, scheduled lecture updates, and coaching notices will appear here. Switch to <b>Courses</b> to study or <b>Tests</b> to take exams.
            </p>
        </div>
    `;
}

// 2. Render Courses Tab (Enrolled Academic Subjects - Full LMS View)
function renderStudentCourses() {
    const container = document.getElementById('st-courses-container');
    if (!container || !currentStudent) return;

    const rawCls = (currentStudent.cls || currentStudent.class || 'Class 10').toString().trim();
    const isCivilServices = rawCls.toLowerCase().includes('civil');
    const isClass10 = !isCivilServices && (rawCls === 'Class 10' || rawCls === '10' || rawCls.toLowerCase().includes('10'));
    const studentCls = isCivilServices ? 'Civil Services' : (isClass10 ? 'Class 10' : rawCls);

    // Normalise enrolled subjects
    let enrolledSubs = currentStudent.subjects 
        ? currentStudent.subjects.split(',').map(s => s.trim()).filter(Boolean)
        : (isCivilServices ? ['General Studies', 'Indian Polity', 'History', 'Geography', 'Economy', 'CSAT', 'Physics', 'Chemistry', 'Biology'] : ['Science', 'Social Science', 'Mathematics', 'English']);

    if (isCivilServices) {
        if (!enrolledSubs.includes('General Studies')) enrolledSubs.unshift('General Studies');
        if (!enrolledSubs.includes('Indian Polity')) enrolledSubs.push('Indian Polity');
        if (!enrolledSubs.includes('History')) enrolledSubs.push('History');
        if (!enrolledSubs.includes('Geography')) enrolledSubs.push('Geography');
        if (!enrolledSubs.includes('Economy')) enrolledSubs.push('Economy');
        if (!enrolledSubs.includes('CSAT')) enrolledSubs.push('CSAT');
        if (!enrolledSubs.includes('Physics')) enrolledSubs.push('Physics');
        if (!enrolledSubs.includes('Chemistry')) enrolledSubs.push('Chemistry');
        if (!enrolledSubs.includes('Biology')) enrolledSubs.push('Biology');
    } else if (isClass10) {
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
            desc: studentCls === 'Civil Services'
                ? '6 Chapters • 120 Modules • Mechanics, Optics, Electricity & Modern Physics'
                : (studentCls === 'Class 10' ? 'Part of Class 10 Science • Light, Electricity & Magnetic Effects' : `${studentCls} Physics Curriculum Modules`),
            link: studentCls === 'Civil Services'
                ? 'modules/course/civilservices/physics/physics_course_hub.html'
                : (studentCls === 'Class 10' ? 'modules/course/class10/science/science_course_hub.html' : null)
        },
        'Chemistry': {
            icon: '🧪',
            color: '#0891b2',
            desc: studentCls === 'Civil Services'
                ? '6 Chapters • 120 Modules • Periodic Trends, Acids & Bases, Metallurgy & Polymers'
                : (studentCls === 'Class 10' ? 'Part of Class 10 Science • Chemical Reactions, Acids, Metals & Carbon' : `${studentCls} Chemistry Curriculum Modules`),
            link: studentCls === 'Civil Services'
                ? 'modules/course/civilservices/chemistry/chemistry_course_hub.html'
                : (studentCls === 'Class 10' ? 'modules/course/class10/science/science_course_hub.html' : null)
        },
        'Biology': {
            icon: '🧬',
            color: '#10b981',
            desc: studentCls === 'Civil Services'
                ? '7 Chapters • 140 Modules • Cell Biology, Genetics, Human Physiology & Diseases'
                : (studentCls === 'Class 10' ? 'Part of Class 10 Science • Life Processes, Reproduction & Heredity' : `${studentCls} Biology Curriculum Modules`),
            link: studentCls === 'Civil Services'
                ? 'modules/course/civilservices/biology/biology_course_hub.html'
                : (studentCls === 'Class 10' ? 'modules/course/class10/science/science_course_hub.html' : null)
        },
        'Mathematics': {
            icon: '📐',
            color: '#8b5cf6',
            desc: `${studentCls} Core Mathematics Syllabus & Problem Sets`,
            link: null
        },
        'General Studies': {
            icon: '🏛️',
            color: '#0f172a',
            desc: '8 Core Civil Services Disciplines • GS Papers I, II, III & CSAT Modules',
            subLinks: [
                { title: 'Polity', icon: '⚖️', chapters: '8 Ch', color: '#4338ca', url: 'modules/course/civilservices/polity/polity_course_hub.html' },
                { title: 'History', icon: '🏛️', chapters: '8 Ch', color: '#b45309', url: 'modules/course/civilservices/history/history_course_hub.html' },
                { title: 'Geography', icon: '🌐', chapters: '8 Ch', color: '#0284c7', url: 'modules/course/civilservices/geography/geography_course_hub.html' },
                { title: 'Economy', icon: '📈', chapters: '6 Ch', color: '#059669', url: 'modules/course/civilservices/economy/economy_course_hub.html' },
                { title: 'CSAT', icon: '📐', chapters: '6 Ch', color: '#7c3aed', url: 'modules/course/civilservices/csat/csat_course_hub.html' },
                { title: 'Physics', icon: '⚛️', chapters: '6 Ch', color: '#2563eb', url: 'modules/course/civilservices/physics/physics_course_hub.html' },
                { title: 'Chemistry', icon: '🧪', chapters: '6 Ch', color: '#0891b2', url: 'modules/course/civilservices/chemistry/chemistry_course_hub.html' },
                { title: 'Biology', icon: '🧬', chapters: '7 Ch', color: '#10b981', url: 'modules/course/civilservices/biology/biology_course_hub.html' }
            ],
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
            desc: studentCls === 'Civil Services'
                ? '8 Chapters • 160 Modules • Ancient, Medieval, Modern History & Post-Independence'
                : (studentCls === 'Class 10' ? '5 Chapters • 100 Mini-Modules • 1,000 Questions • 70% Mastery' : `${studentCls} History Curriculum Modules`),
            link: studentCls === 'Civil Services'
                ? 'modules/course/civilservices/history/history_course_hub.html'
                : (studentCls === 'Class 10' ? 'modules/course/class10/history/history_course_hub.html' : null)
        },
        'Geography': {
            icon: '🌐',
            color: '#0284c7',
            desc: studentCls === 'Civil Services'
                ? '8 Chapters • 160 Modules • Physical Geography, Indian Physiography & Environment'
                : (studentCls === 'Class 10' ? '7 Chapters • 140 Mini-Modules • 1,400 Questions • 70% Mastery' : `${studentCls} Geography Curriculum Modules`),
            link: studentCls === 'Civil Services'
                ? 'modules/course/civilservices/geography/geography_course_hub.html'
                : (studentCls === 'Class 10' ? 'modules/course/class10/geography/geography_course_hub.html' : null)
        },
        'Indian Polity': {
            icon: '⚖️',
            color: '#4338ca',
            desc: '8 Chapters • 160 Modules • Constitutional Framework, Fundamental Rights & Parliament',
            link: 'modules/course/civilservices/polity/polity_course_hub.html'
        },
        'Polity': {
            icon: '⚖️',
            color: '#4338ca',
            desc: '8 Chapters • 160 Modules • Constitutional Framework, Fundamental Rights & Parliament',
            link: 'modules/course/civilservices/polity/polity_course_hub.html'
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
        'Economy': {
            icon: '📈',
            color: '#059669',
            desc: '6 Chapters • 120 Modules • National Income, Fiscal Policy, Banking & Foreign Trade',
            link: 'modules/course/civilservices/economy/economy_course_hub.html'
        },
        'Economics': {
            icon: '📈',
            color: '#059669',
            desc: studentCls === 'Civil Services'
                ? '6 Chapters • 120 Modules • National Income, Fiscal Policy, Banking & Foreign Trade'
                : (studentCls === 'Class 10' ? '5 Chapters • 100 Mini-Modules • 1,000 Questions • 70% Mastery' : `${studentCls} Economics Curriculum Modules`),
            link: studentCls === 'Civil Services'
                ? 'modules/course/civilservices/economy/economy_course_hub.html'
                : (studentCls === 'Class 10' ? 'modules/course/class10/economics/economics_course_hub.html' : null)
        },
        'CSAT': {
            icon: '📐',
            color: '#7c3aed',
            desc: '6 Chapters • 120 Modules • Reading Comprehension, Reasoning & Quantitative Aptitude',
            link: 'modules/course/civilservices/csat/csat_course_hub.html'
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

        const hasInteractiveCourse = Boolean(meta.link);
        const hasSubLinks = Array.isArray(meta.subLinks) && meta.subLinks.length > 0;

        const actionHtml = hasInteractiveCourse
            ? `<a href="${meta.link}" class="btn btn-primary btn-sm" style="font-weight:700; border-radius:8px; padding:8px 16px; text-decoration:none; display:inline-flex; align-items:center; gap:6px; background:${meta.color}; border-color:${meta.color}; box-shadow:0 2px 6px rgba(0,0,0,0.15);">
                   Open Course →
               </a>`
            : hasSubLinks
            ? `<span style="font-size:11.5px; font-weight:700; color:#0d9488;">Select Subject Below ↘</span>`
            : `<button class="btn btn-outline btn-sm" style="font-weight:600; border-radius:8px; padding:8px 14px;" onclick="showToast('${sub} syllabus materials for ${studentCls} are distributed during classroom lectures.', 'info')">
                   Class Notes
               </button>`;

        const subLinksHtml = hasSubLinks
            ? `<div style="display:grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 12px;">
                ${meta.subLinks.map(sl => `
                    <a href="${sl.url}" style="display:flex; align-items:center; justify-content:space-between; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:7px 10px; text-decoration:none; color:#0f172a; font-size:12px; font-weight:700; transition:all 0.2s ease;">
                        <span style="display:flex; align-items:center; gap:6px;">
                            <span>${sl.icon}</span>
                            <span>${sl.title}</span>
                        </span>
                        <span class="badge" style="background:${sl.color}; color:#ffffff; font-size:10px; padding:2px 6px;">${sl.chapters}</span>
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

    container.innerHTML = `
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

    const isCivil = (studentCls === 'Civil Services');
    const hubUrl = isCivil 
        ? 'modules/testseries/data/civilservices/testseries_civilservices.html' 
        : 'modules/testseries/data/class10/testseries_class_10.html';
    const hubTitle = isCivil ? 'Civil Services Assessment Hub' : 'Class 10 Assessment Hub';
    const hubBtnText = isCivil ? 'Open Civil Services Test Hub →' : 'Open Class 10 Test Hub →';

    container.innerHTML = `
        <div class="card" style="padding:40px; text-align:center;">
            <div style="font-size:36px; margin-bottom:12px;">🏛️</div>
            <h3 style="font-size:16px; font-weight:700; color:var(--text); margin-bottom:6px;">${hubTitle}</h3>
            <p style="font-size:13px; color:var(--text-muted); margin-bottom:16px;">
                Access all subjectwise test series and full-length CBT mock exams.
            </p>
            <a href="${hubUrl}" class="btn btn-primary btn-sm" style="text-decoration:none; font-weight:700;">
                ${hubBtnText}
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

