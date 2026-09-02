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
    if (viewName === 'marks') {
        if (typeof setupAdminMarksControls === 'function') setupAdminMarksControls();
        if (typeof renderAdminExamScoreboard === 'function') renderAdminExamScoreboard();
    }
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
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return name.slice(0, 2).toUpperCase();
}

// Abbreviate profile button name: e.g. Dr Ramesh Kumar -> Dr. R. Kumar, Aarav Sharma -> A. Sharma
function formatProfileButtonName(name) {
    if (!name) return 'Profile';
    const words = name.trim().split(/\s+/);
    if (words.length <= 1) return words[0];

    const titles = ['dr', 'dr.', 'mr', 'mr.', 'mrs', 'mrs.', 'ms', 'ms.', 'prof', 'prof.', 'shri', 'er', 'er.'];
    const firstLower = words[0].toLowerCase();

    if (titles.includes(firstLower)) {
        let titleFormatted = words[0];
        if (!titleFormatted.endsWith('.')) titleFormatted += '.';
        titleFormatted = titleFormatted.charAt(0).toUpperCase() + titleFormatted.slice(1);

        if (words.length === 2) {
            return `${titleFormatted} ${words[1]}`;
        }

        const initials = words.slice(1, -1).map(w => (w[0] ? w[0].toUpperCase() + '.' : '')).filter(Boolean).join(' ');
        const lastName = words[words.length - 1];
        return `${titleFormatted} ${initials} ${lastName}`;
    }

    const initials = words.slice(0, -1).map(w => (w[0] ? w[0].toUpperCase() + '.' : '')).filter(Boolean).join(' ');
    const lastName = words[words.length - 1];
    return `${initials} ${lastName}`;
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
            { id: 's1', name: 'Aarav Sharma', email: 'aarav.sharma@gmail.com', cls: 'Class 5', parent: 'Rajesh Sharma', phone: '9876543210', pin: '123456', fee: 1500, due: '10', subjects: 'Mathematics, Science, English', doa: '2025-04-01', school: 'St. Xavier School', color: '#2563eb' },
            { id: 's2', name: 'Ananya Singh', email: 'ananya.singh@gmail.com', cls: 'Class 5', parent: 'Vikram Singh', phone: '9876543211', pin: '123456', fee: 1500, due: '10', subjects: 'Mathematics, Science, English', doa: '2025-04-02', school: 'Delhi Public School', color: '#8b5cf6' },
            { id: 's3', name: 'Rohan Gupta', email: 'rohan.gupta@gmail.com', cls: 'Class 8', parent: 'Suresh Gupta', phone: '9876543212', pin: '123456', fee: 2000, due: '5', subjects: 'Mathematics, Science', doa: '2025-04-05', school: 'Kendriya Vidyalaya', color: '#10b981' },
            { id: 's4', name: 'Ishita Patel', email: 'ishita.patel@gmail.com', cls: 'LKG', parent: 'Amit Patel', phone: '9876543213', pin: '123456', fee: 1200, due: '1', subjects: 'Rhymes, Drawing, English', doa: '2025-04-10', school: 'Little Tots Play School', color: '#ec4899' },
            { id: 's5', name: 'Karan Mehta', email: 'karan.mehta@gmail.com', cls: 'Class 10', parent: 'Pankaj Mehta', phone: '9876543214', pin: '123456', fee: 3000, due: '10', subjects: 'Mathematics, Physics, Chemistry', doa: '2025-03-15', school: 'Modern High School', color: '#f59e0b' }
        ];

        teachers = [
            { id: 't1', name: 'Dr. Ramesh Kumar', email: 'ramesh.kumar@eliteclasses.com', subjects: 'Mathematics, Physics', classes: 'Class 8, Class 9, Class 10', phone: '9811223344', pin: '123456', salary: 35000, incentive: 2500, color: '#2563eb' },
            { id: 't2', name: 'Sunita Rao', email: 'sunita.rao@eliteclasses.com', subjects: 'Science, Biology', classes: 'Class 5, Class 6, Class 7', phone: '9822334455', pin: '123456', salary: 28000, incentive: 1500, color: '#8b5cf6' },
            { id: 't3', name: 'Vikram Das', email: 'vikram.das@eliteclasses.com', subjects: 'English, Social Studies', classes: 'Class 6, Class 7, Class 8', phone: '9833445566', pin: '123456', salary: 25000, incentive: 1000, color: '#10b981' }
        ];

        staff = [
            { id: 'st1', name: 'Rajesh Sharma', email: 'rajesh.accountant@eliteclasses.com', role: 'Office Accountant', phone: '9911223344', pin: '123456', salary: 20000, incentive: 1000, color: '#06b6d4' },
            { id: 'st2', name: 'Sunil Verma', email: 'sunil.maintenance@eliteclasses.com', role: 'Lab Assistant & Maintenance', phone: '9922334455', pin: '123456', salary: 15000, incentive: 500, color: '#f59e0b' }
        ];

        admins = [
            { id: 'a1', name: 'Elite Admin Main', email: 'admin@eliteclasses.com', role: 'Super Admin', phone: '9800000000', pin: '987654', color: '#2563eb' }
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

// 10-Minute Inactivity Auto-Logout System
const INACTIVITY_TIMEOUT_MS = 10 * 60 * 1000; // 10 minutes
let inactivityTimer = null;

function resetInactivityTimer() {
    const role = localStorage.getItem('ec_user_role');
    if (!role) return;

    localStorage.setItem('ec_last_activity', Date.now().toString());

    if (inactivityTimer) clearTimeout(inactivityTimer);

    inactivityTimer = setTimeout(() => {
        logoutToGateway('Logged out due to 10 minutes of inactivity for security.');
    }, INACTIVITY_TIMEOUT_MS);
}

function initInactivityListeners() {
    const events = ['mousemove', 'keydown', 'click', 'touchstart', 'scroll'];
    events.forEach(evt => {
        window.addEventListener(evt, () => resetInactivityTimer(), { passive: true });
    });
}

// Unified Gateway Logout Action
function logoutToGateway(toastMsg = 'Logged out successfully') {
    localStorage.removeItem('ec_user_role');
    localStorage.removeItem('ec_authenticated_key');
    localStorage.removeItem('ec_student_id');
    localStorage.removeItem('ec_admin_id');
    localStorage.removeItem('ec_admin_name');
    localStorage.removeItem('ec_last_activity');
    if (inactivityTimer) clearTimeout(inactivityTimer);

    window.location.href = 'index.html';
}

// Auth Guard for Admin Home Page (admin_home.html)
async function checkAdminAuthGuard() {
    const role = localStorage.getItem('ec_user_role');
    const lastActivity = parseInt(localStorage.getItem('ec_last_activity') || '0');

    if (role !== 'admin' || !lastActivity || (Date.now() - lastActivity > INACTIVITY_TIMEOUT_MS)) {
        logoutToGateway('Please login with your WhatsApp and Admin PIN to access Admin Portal.');
        return false;
    }

    initInactivityListeners();
    resetInactivityTimer();
    return true;
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
        admins = await DBService.fetchAdmins();
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

// Initial App Boot (runs on all portal pages)
document.addEventListener('DOMContentLoaded', async () => {
    initSeedData();
    if (typeof initSupabaseClient === 'function') initSupabaseClient();
    updateSubHeaderDate();
    
    // Check if we are on admin_home.html
    if (window.location.pathname.includes('admin_home.html') || document.getElementById('view-dashboard')) {
        const authed = await checkAdminAuthGuard();
        if (!authed) return;
        renderDashboard();
        if (typeof isSupabaseConnected === 'function' && isSupabaseConnected()) {
            syncDataFromSupabase();
        }
    }
});
