/* Elite Classes — App Core & State Manager */

// Global State Store
let students = JSON.parse(localStorage.getItem('ec_students') || '[]');
let teachers = JSON.parse(localStorage.getItem('ec_teachers') || '[]');
let staff = JSON.parse(localStorage.getItem('ec_staff') || '[]');
let admins = JSON.parse(localStorage.getItem('ec_admins') || '[]');
let payments = JSON.parse(localStorage.getItem('ec_payments') || '[]');
let salaryPayouts = JSON.parse(localStorage.getItem('ec_salary_payouts') || '[]');

const AVATAR_COLORS = ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444', '#06b6d4', '#ea580c', '#ec4899'];

function saveState() {
    localStorage.setItem('ec_students', JSON.stringify(students));
    localStorage.setItem('ec_teachers', JSON.stringify(teachers));
    localStorage.setItem('ec_staff', JSON.stringify(staff));
    localStorage.setItem('ec_admins', JSON.stringify(admins));
    localStorage.setItem('ec_payments', JSON.stringify(payments));
    localStorage.setItem('ec_salary_payouts', JSON.stringify(salaryPayouts));
}

// Navigation System
function navigateToView(viewName) {
    document.querySelectorAll('.page-view').forEach(v => v.classList.remove('active'));
    
    const targetView = document.getElementById('view-' + viewName);
    if (targetView) targetView.classList.add('active');

    // Trigger view refresh callbacks
    if (viewName === 'dashboard') renderDashboard();
    if (viewName === 'profiles') renderActiveProfileView();
    if (viewName === 'finances') renderFinancesView();
    if (viewName === 'classes') renderClassesView();
    if (viewName === 'attendance') renderAttendanceView();
}

// Profile Type Switcher (Students / Teachers / Staff / Admins)
let activeProfileTab = 'students';

function switchProfileTab(tab) {
    activeProfileTab = tab;
    document.querySelectorAll('.profile-tab').forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-tab') === tab);
    });
    
    document.querySelectorAll('.profile-section').forEach(s => {
        s.style.display = s.id === 'profile-section-' + tab ? 'block' : 'none';
    });

    renderActiveProfileView();
}

function renderActiveProfileView() {
    if (activeProfileTab === 'students') renderStudentsTable();
    if (activeProfileTab === 'teachers') renderTeachersTable();
    if (activeProfileTab === 'staff') renderStaffTable();
    if (activeProfileTab === 'admins') renderAdminsTable();
}

// Modal Helpers
function openModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.add('open');
}

function closeModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.remove('open');
}

// Toast System
function showToast(message, type = 'success') {
    const toast = document.getElementById('app-toast');
    const msgEl = document.getElementById('toast-msg');
    if (!toast || !msgEl) return;
    
    toast.className = `toast ${type} show`;
    msgEl.textContent = message;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Date & Month Utilities
function getCurrentMonthLabel() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const now = new Date();
    return months[now.getMonth()] + ' ' + now.getFullYear();
}

function isCurrentMonth(monthStr) {
    return monthStr === getCurrentMonthLabel();
}

function getInitials(name) {
    if (!name) return 'EC';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return name.slice(0, 2).toUpperCase();
}

// Render Dashboard Interactive Stat Pallets
function renderDashboard() {
    // 1. Students Stat
    const studentsEl = document.getElementById('dash-stat-students');
    if (studentsEl) studentsEl.textContent = students.length;

    // 2. Staffs Stat
    const totalStaffCount = teachers.length + staff.length;
    const staffsEl = document.getElementById('dash-stat-staffs');
    if (staffsEl) staffsEl.textContent = `${totalStaffCount} (${teachers.length} T, ${staff.length} S)`;

    // 3. Classes Stat
    const activeClassesCount = new Set(students.map(s => s.cls)).size || 10;
    const classesEl = document.getElementById('dash-stat-classes');
    if (classesEl) classesEl.textContent = activeClassesCount;

    // 4. Finances Stat (Fee Collected - Salary Paid = Net Revenue)
    const curPayments = payments.filter(p => isCurrentMonth(p.month));
    const feeCollected = curPayments.reduce((a, p) => a + p.amount, 0);
    const curSalaries = salaryPayouts.filter(s => isCurrentMonth(s.month));
    const salaryPaid = curSalaries.reduce((a, s) => a + s.amount, 0);
    const netRevenue = feeCollected - salaryPaid;
    const financesEl = document.getElementById('dash-stat-finances');
    if (financesEl) financesEl.textContent = '₹' + feeCollected.toLocaleString() + ' Collected';

    // 5. Attendance Stat
    const todayDate = getTodayDateStr();
    const attRecs = attendanceRecords[todayDate] || {};
    const markedCount = Object.keys(attRecs).length;
    const presentCount = Object.values(attRecs).filter(v => v === 'present').length;
    const attRate = markedCount > 0 ? Math.round((presentCount / markedCount) * 100) : 95;
    // Set formatted sub-header date (e.g., 25 Aug 26 TUE)
    updateSubHeaderDate();
}

function formatSubHeaderDate(d = new Date()) {
    const day = String(d.getDate()).padStart(2, '0');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[d.getMonth()];
    const yearShort = String(d.getFullYear()).slice(-2);
    const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const dayName = dayNames[d.getDay()];

    return `${day} ${month} ${yearShort} ${dayName}`;
}

function updateSubHeaderDate() {
    const subDateEl = document.getElementById('sub-header-date');
    if (subDateEl) subDateEl.textContent = formatSubHeaderDate(new Date());
}

// Sample Seed Data Initialization
function initSeedData() {
    if (students.length === 0 && teachers.length === 0) {
        students = [
            { id: 's1', name: 'Aarav Sharma', cls: 'Class 5', parent: 'Ravi Sharma', phone: '9876543210', fee: 1500, due: '10', subjects: 'Maths, Science', doa: '2024-06-01', school: 'Delhi Public School', color: '#2563eb' },
            { id: 's2', name: 'Priya Patel', cls: 'Class 8', parent: 'Suresh Patel', phone: '9876543211', fee: 2000, due: '10', subjects: 'Maths, Science, English', doa: '2024-06-15', school: 'St. Mary\'s School', color: '#10b981' },
            { id: 's3', name: 'Rohan Gupta', cls: 'Class 3', parent: 'Anil Gupta', phone: '9876543212', fee: 1200, due: '5', subjects: 'All Subjects', doa: '2024-07-01', school: 'KV School', color: '#f59e0b' },
            { id: 's4', name: 'Ananya Singh', cls: 'LKG', parent: 'Mohit Singh', phone: '9876543213', fee: 800, due: '10', subjects: 'All Subjects', doa: '2025-04-01', school: 'Little Flower', color: '#8b5cf6' },
            { id: 's5', name: 'Karan Mehta', cls: 'Class 10', parent: 'Vijay Mehta', phone: '9876543214', fee: 3000, due: '1', subjects: 'Maths, Science, SST', doa: '2024-04-01', school: 'DPS Vasant Kunj', color: '#ef4444' }
        ];

        teachers = [
            { id: 't1', name: 'Dr. Ramesh Kumar', subjects: 'Maths, Physics', classes: 'Class 8, Class 9, Class 10', phone: '9812345678', salary: 35000, color: '#2563eb' },
            { id: 't2', name: 'Sunita Verma', subjects: 'English, Social Studies', classes: 'Class 5, Class 6, Class 7', phone: '9823456789', salary: 28000, color: '#8b5cf6' },
            { id: 't3', name: 'Amit Sharma', subjects: 'Chemistry, Biology', classes: 'Class 9, Class 10', phone: '9834567890', salary: 32000, color: '#10b981' }
        ];

        staff = [
            { id: 'st1', name: 'Rajesh Sharma', role: 'Office Accountant', phone: '9911223344', salary: 20000, color: '#06b6d4' },
            { id: 'st2', name: 'Sunil Verma', role: 'Lab Assistant & Maintenance', phone: '9922334455', salary: 15000, color: '#f59e0b' }
        ];

        admins = [
            { id: 'a1', name: 'Elite Admin Main', email: 'admin@eliteclasses.com', role: 'Super Admin', phone: '9800000000', color: '#2563eb' }
        ];

        payments = [
            { id: 'p1', studentId: 's1', month: getCurrentMonthLabel(), amount: 1500, mode: 'UPI', remarks: 'Paid on time', date: '01/08/2025' },
            { id: 'p2', studentId: 's2', month: getCurrentMonthLabel(), amount: 1000, mode: 'Cash', remarks: 'Partial payment', date: '05/08/2025' },
            { id: 'p3', studentId: 's5', month: getCurrentMonthLabel(), amount: 3000, mode: 'Bank Transfer', remarks: 'Full fee', date: '02/08/2025' }
        ];

        salaryPayouts = [
            { id: 'sp1', recipientId: 't1', type: 'teacher', month: getCurrentMonthLabel(), amount: 35000, mode: 'Bank Transfer', date: '01/08/2025' },
            { id: 'sp2', recipientId: 'st1', type: 'staff', month: getCurrentMonthLabel(), amount: 20000, mode: 'Bank Transfer', date: '01/08/2025' }
        ];

        saveState();
    }
}

// Coaching Key Authentication System
let VALID_COACHING_KEY = '987654';

async function verifyCoachingKey() {
    const inputEl = document.getElementById('coaching-key-input');
    const errEl = document.getElementById('auth-error-msg');
    const authScreen = document.getElementById('auth-screen');

    if (!inputEl) return;
    const enteredKey = inputEl.value.trim();

    // If student code 123456 is typed in Admin box, switch tab automatically
    if (enteredKey === '123456') {
        switchAuthTab('student');
        showToast('Switched to Student Portal Login', 'info');
        return;
    }

    // Fetch live coaching key from DB if connected
    if (typeof DBService !== 'undefined' && isSupabaseConnected()) {
        const dbKey = await DBService.getCoachingKey();
        if (dbKey) VALID_COACHING_KEY = dbKey;
    }

    if (enteredKey === VALID_COACHING_KEY) {
        if (errEl) errEl.style.display = 'none';
        localStorage.setItem('ec_user_role', 'admin');
        localStorage.setItem('ec_authenticated_key', enteredKey);
        if (authScreen) authScreen.style.display = 'none';

        // Reveal Admin management buttons in Student View if Admin logs in
        const noticeBtn = document.getElementById('st-admin-notice-btn');
        const courseBtn = document.getElementById('st-admin-add-course-btn');
        const testBtn = document.getElementById('st-admin-add-test-btn');
        if (noticeBtn) noticeBtn.style.display = 'inline-block';
        if (courseBtn) courseBtn.style.display = 'inline-block';
        if (testBtn) testBtn.style.display = 'inline-block';

        showToast('Admin Portal Unlocked Successfully!');
    } else {
        if (errEl) {
            errEl.textContent = 'Invalid Admin Coaching Key. Try Student Login with Code 123456.';
            errEl.style.display = 'block';
        }
        inputEl.style.borderColor = '#ef4444';
    }
}

async function checkCoachingAuthOnLoad() {
    const authScreen = document.getElementById('auth-screen');
    const role = localStorage.getItem('ec_user_role');

    if (role === 'admin') {
        const savedKey = localStorage.getItem('ec_authenticated_key');
        if (savedKey) {
            if (authScreen) authScreen.style.display = 'none';
            const noticeBtn = document.getElementById('st-admin-notice-btn');
            const courseBtn = document.getElementById('st-admin-add-course-btn');
            const testBtn = document.getElementById('st-admin-add-test-btn');
            if (noticeBtn) noticeBtn.style.display = 'inline-block';
            if (courseBtn) courseBtn.style.display = 'inline-block';
            if (testBtn) testBtn.style.display = 'inline-block';
            return;
        }
    } else if (role === 'student') {
        const studentId = localStorage.getItem('ec_student_id');
        if (studentId) {
            if (typeof DBService !== 'undefined') {
                if (!students || students.length === 0) {
                    students = await DBService.fetchStudents();
                }
                const found = students.find(s => s.id === studentId);
                if (found) {
                    currentStudent = found;
                    if (authScreen) authScreen.style.display = 'none';
                    if (typeof loadStudentDashboard === 'function') {
                        await loadStudentDashboard();
                    }
                    return;
                }
            }
        }
    }

    if (authScreen) authScreen.style.display = 'flex';
}

function lockCoachingPortal() {
    localStorage.removeItem('ec_user_role');
    localStorage.removeItem('ec_authenticated_key');
    localStorage.removeItem('ec_student_id');
    const authScreen = document.getElementById('auth-screen');
    const inputEl = document.getElementById('coaching-key-input');
    if (inputEl) inputEl.value = '';
    if (authScreen) authScreen.style.display = 'flex';
    showToast('Coaching Portal Locked', 'warning');
}

// Supabase Settings Modal Helpers
function openSupabaseModal() {
    const urlEl = document.getElementById('cfg-supa-url');
    const keyEl = document.getElementById('cfg-supa-key');
    if (urlEl) urlEl.value = localStorage.getItem('ec_supabase_url') || '';
    if (keyEl) keyEl.value = localStorage.getItem('ec_supabase_key') || '';
    openModal('supabaseModal');
}

function saveSupabaseSettingsFromModal() {
    const url = document.getElementById('cfg-supa-url').value.trim();
    const key = document.getElementById('cfg-supa-key').value.trim();

    if (!url || !key) {
        showToast('Enter both Supabase URL and Anon Key', 'danger');
        return;
    }

    const ok = saveSupabaseCredentials(url, key);
    if (ok) {
        showToast('Connected to Supabase Cloud Database!');
        closeModal('supabaseModal');
        syncDataFromSupabase();
    } else {
        showToast('Supabase connection failed. Check credentials.', 'danger');
    }
}

async function syncDataFromSupabase() {
    if (typeof isSupabaseConnected !== 'function' || !isSupabaseConnected()) return;

    try {
        students = await DBService.fetchStudents();
        teachers = await DBService.fetchTeachers();
        staff = await DBService.fetchStaff();
        payments = await DBService.fetchPayments();
        salaryPayouts = await DBService.fetchSalaryPayouts();

        if (typeof DBService.fetchActiveNotice === 'function') {
            const dbNotice = await DBService.fetchActiveNotice();
            const noticeEl = document.getElementById('active-db-notice');
            if (noticeEl && dbNotice) noticeEl.textContent = dbNotice;
        }

        saveState();
        renderDashboard();
        if (typeof renderActiveProfileView === 'function') renderActiveProfileView();
        showToast('Data synchronized from Supabase Cloud Database!');
    } catch (e) {
        console.error('[Supabase Sync Error]:', e);
    }
}

// Initial App Boot
document.addEventListener('DOMContentLoaded', () => {
    initSeedData();
    if (typeof initSupabaseClient === 'function') initSupabaseClient();
    checkCoachingAuthOnLoad();
    renderDashboard();
    if (typeof isSupabaseConnected === 'function' && isSupabaseConnected()) {
        syncDataFromSupabase();
    }
});
