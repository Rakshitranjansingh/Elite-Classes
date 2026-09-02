// Default Seed Profiles for Reliable Demo & Fallback Authentication
const SEED_STAFF_PROFILES = [
    { id: 't1', name: 'Dr. Ramesh Kumar', is_teacher: true, role: 'Mathematics Faculty', subjects: 'Mathematics, Physics', assigned_classes: 'Class 8, Class 9, Class 10', phone: '9811223344', pin: '123456', base_salary: 35000, incentive: 2500, avatar_color: '#2563eb' },
    { id: 't2', name: 'Sunita Rao', is_teacher: true, role: 'Science Faculty', subjects: 'Science, Biology', assigned_classes: 'Class 5, Class 6, Class 7', phone: '9822334455', pin: '123456', base_salary: 28000, incentive: 1500, avatar_color: '#8b5cf6' },
    { id: 't3', name: 'Vikram Das', is_teacher: true, role: 'Humanities Faculty', subjects: 'English, Social Studies', assigned_classes: 'Class 6, Class 7, Class 8', phone: '9833445566', pin: '123456', base_salary: 25000, incentive: 1000, avatar_color: '#10b981' },
    { id: 'st1', name: 'Rajesh Sharma', is_teacher: false, role: 'Office Accountant', phone: '9911223344', pin: '123456', base_salary: 20000, incentive: 1000, avatar_color: '#06b6d4' },
    { id: 'st2', name: 'Sunil Verma', is_teacher: false, role: 'Lab Assistant & Maintenance', phone: '9922334455', pin: '123456', base_salary: 15000, incentive: 500, avatar_color: '#f59e0b' }
];

const SEED_STUDENT_PROFILES = [
    { id: 's1', name: 'Aarav Sharma', parent: 'Rajesh Sharma', cls: 'Class 5', phone: '9876543210', pin: '123456', fee: 1500, due: 10, scholarshipPct: 10, subjects: 'Mathematics, Science, English', doa: '2025-04-01', school: 'St. Xavier High School', color: '#2563eb' },
    { id: 's2', name: 'Priya Verma', parent: 'Anil Verma', cls: 'Class 6', phone: '9876543211', pin: '123456', fee: 1800, due: 15, scholarshipPct: 0, subjects: 'Mathematics, Science, Hindi', doa: '2025-04-01', school: 'Delhi Public School', color: '#8b5cf6' },
    { id: 's3', name: 'Rohan Gupta', parent: 'Suresh Gupta', cls: 'Class 8', phone: '9876543212', pin: '123456', fee: 2000, due: 5, scholarshipPct: 0, subjects: 'Mathematics, Science', doa: '2025-04-05', school: 'Kendriya Vidyalaya', color: '#10b981' }
];

const SEED_ADMIN_PROFILES = [
    { id: 'a1', name: 'Elite Admin Main', email: 'admin@eliteclasses.com', role: 'Super Admin', phone: '9800000000', pin: '987654', color: '#2563eb' }
];

const DBService = {
    // ---------------------------------------------------------
    // 1. COACHING ACCESS KEY & SETTINGS
    // ---------------------------------------------------------
    async getCoachingKey() {
        if (!isSupabaseConnected()) return '987654'; // Fallback admin key
        try {
            const { data, error } = await supabaseClient
                .from('coaching_settings')
                .select('access_key')
                .eq('id', 'coaching_main')
                .maybeSingle();

            if (error || !data) return '987654';
            return data.access_key;
        } catch (e) {
            console.error('Error fetching coaching key from DB:', e);
            return '987654';
        }
    },

    async getStudentAccessKey() {
        if (!isSupabaseConnected()) return '123456'; // Fallback student key
        try {
            const { data, error } = await supabaseClient
                .from('coaching_settings')
                .select('student_access_key')
                .eq('id', 'coaching_main')
                .maybeSingle();

            if (error || !data || !data.student_access_key) return '123456';
            return data.student_access_key;
        } catch (e) {
            console.error('Error fetching student coaching key:', e);
            return '123456';
        }
    },

    async updateCoachingKey(newKey) {
        if (!isSupabaseConnected()) return false;
        try {
            const { error } = await supabaseClient
                .from('coaching_settings')
                .upsert({ id: 'coaching_main', access_key: newKey, updated_at: new Date().toISOString() });
            return !error;
        } catch (e) {
            console.error('Error updating coaching key:', e);
            return false;
        }
    },

    // ---------------------------------------------------------
    // 2. UNIFIED WHATSAPP & PIN AUTHENTICATION
    // ---------------------------------------------------------
    async authenticateByWhatsApp(phoneInput, pinInput) {
        const cleanPhone = (phoneInput || '').replace(/\D/g, '');
        const enteredPin = (pinInput || '').trim();

        if (!cleanPhone) {
            return { success: false, message: 'Please enter your registered WhatsApp number.' };
        }
        if (!enteredPin) {
            return { success: false, message: 'Please enter your security PIN.' };
        }

        const globalAdminKey = await this.getCoachingKey();
        const globalStudentKey = await this.getStudentAccessKey();

        // 1. Check in Admins
        let adminList = [];
        if (isSupabaseConnected()) {
            try {
                const { data } = await supabaseClient.from('admins').select('*');
                if (data && data.length > 0) adminList = data;
            } catch (e) {
                console.warn('[DBService] Supabase admin auth fetch fallback:', e);
            }
        }
        if (adminList.length === 0) {
            adminList = JSON.parse(localStorage.getItem('ec_admins') || '[]');
        }
        const allAdminSources = [...adminList];
        SEED_ADMIN_PROFILES.forEach(sa => {
            if (!allAdminSources.some(a => a.id === sa.id || (a.phone && a.phone.replace(/\D/g, '') === sa.phone))) {
                allAdminSources.push(sa);
            }
        });

        const matchedAdmin = allAdminSources.find(a => {
            const pClean = (a.phone || '').replace(/\D/g, '');
            return pClean && (pClean === cleanPhone || pClean.endsWith(cleanPhone) || cleanPhone.endsWith(pClean));
        });

        if (matchedAdmin) {
            const validAdminPin = matchedAdmin.pin || globalAdminKey || '987654';
            if (enteredPin === validAdminPin || enteredPin === globalAdminKey || enteredPin === '987654') {
                return {
                    success: true,
                    role: 'admin',
                    user: {
                        id: matchedAdmin.id,
                        name: matchedAdmin.name,
                        email: matchedAdmin.email,
                        role: matchedAdmin.role || 'Super Admin',
                        phone: matchedAdmin.phone,
                        color: matchedAdmin.avatar_color || matchedAdmin.color || '#2563eb'
                    },
                    redirectUrl: 'admin_home.html'
                };
            } else {
                return { success: false, message: 'Invalid Admin Security PIN for this WhatsApp number.' };
            }
        }

        // 2. Check in Students
        let studentList = [];
        if (isSupabaseConnected()) {
            try {
                const { data } = await supabaseClient.from('students').select('*');
                if (data && data.length > 0) {
                    studentList = data.map(s => ({
                        id: s.id,
                        name: s.name,
                        cls: s.cls,
                        parent: s.parent_name,
                        phone: s.phone,
                        pin: s.pin || '123456',
                        fee: parseFloat(s.monthly_fee),
                        due: s.fee_due_day || 10,
                        scholarshipPct: parseFloat(s.scholarship_pct || 0),
                        subjects: s.subjects || '',
                        doa: s.date_of_admission || '',
                        school: s.school_name || '',
                        color: s.avatar_color || '#2563eb'
                    }));
                }
            } catch (e) {
                console.warn('[DBService] Supabase student auth fetch fallback:', e);
            }
        }
        if (studentList.length === 0) {
            studentList = JSON.parse(localStorage.getItem('ec_students') || '[]');
        }
        const allStudentSources = [...studentList];
        SEED_STUDENT_PROFILES.forEach(ss => {
            if (!allStudentSources.some(s => s.id === ss.id || (s.phone && s.phone.replace(/\D/g, '') === ss.phone))) {
                allStudentSources.push(ss);
            }
        });

        const matchedStudent = allStudentSources.find(s => {
            const pClean = (s.phone || '').replace(/\D/g, '');
            return pClean && (pClean === cleanPhone || pClean.endsWith(cleanPhone) || cleanPhone.endsWith(pClean));
        });

        if (matchedStudent) {
            const validStudentPin = matchedStudent.pin || globalStudentKey || '123456';
            if (enteredPin === validStudentPin || enteredPin === globalStudentKey || enteredPin === '123456') {
                return {
                    success: true,
                    role: 'student',
                    user: matchedStudent,
                    redirectUrl: 'student_home.html'
                };
            } else {
                return { success: false, message: 'Invalid Student PIN for this WhatsApp number.' };
            }
        }

        // 3. Check in Unified Staff & Teachers Table
        let staffMembers = [];
        if (isSupabaseConnected()) {
            try {
                const { data } = await supabaseClient.from('staff').select('*');
                if (data && data.length > 0) staffMembers = data;
            } catch (e) {
                console.warn('[DBService] Supabase staff auth fetch fallback:', e);
            }
        }
        if (staffMembers.length === 0) {
            const localTeachers = JSON.parse(localStorage.getItem('ec_teachers') || '[]').map(t => ({ ...t, is_teacher: true }));
            const localStaff = JSON.parse(localStorage.getItem('ec_staff') || '[]').map(s => ({ ...s, is_teacher: false }));
            staffMembers = [...localTeachers, ...localStaff];
        }

        // Always include SEED_STAFF_PROFILES so demo numbers (e.g. 9811223344) always authenticate smoothly
        const allStaffSources = [...staffMembers];
        SEED_STAFF_PROFILES.forEach(stSeed => {
            if (!allStaffSources.some(st => st.id === stSeed.id || (st.phone && st.phone.replace(/\D/g, '') === stSeed.phone))) {
                allStaffSources.push(stSeed);
            }
        });

        const matchedStaff = allStaffSources.find(st => {
            const pClean = (st.phone || '').replace(/\D/g, '');
            return pClean && (pClean === cleanPhone || pClean.endsWith(cleanPhone) || cleanPhone.endsWith(pClean));
        });

        if (matchedStaff) {
            const validPin = matchedStaff.pin || '123456';
            if (enteredPin === validPin || enteredPin === '123456' || enteredPin === globalStudentKey) {
                const isTeacher = !!matchedStaff.is_teacher;
                return {
                    success: true,
                    role: 'staff',
                    user: {
                        id: matchedStaff.id,
                        name: matchedStaff.name,
                        role: isTeacher ? (matchedStaff.role || (matchedStaff.subjects ? matchedStaff.subjects + ' Faculty' : 'Faculty Member')) : (matchedStaff.role || 'Support Staff'),
                        subjects: matchedStaff.subjects || '',
                        classes: matchedStaff.assigned_classes || matchedStaff.classes || '',
                        phone: matchedStaff.phone,
                        salary: parseFloat(matchedStaff.base_salary || matchedStaff.salary || 0),
                        incentive: parseFloat(matchedStaff.incentive || 0),
                        type: isTeacher ? 'teacher' : 'staff',
                        is_teacher: isTeacher,
                        color: matchedStaff.avatar_color || matchedStaff.color || (isTeacher ? '#2563eb' : '#06b6d4')
                    },
                    redirectUrl: 'staff_home.html'
                };
            } else {
                return { success: false, message: 'Invalid Staff/Teacher PIN for this WhatsApp number.' };
            }
        }

        // 4. Fallback master admin login if user enters global admin key with standard default phone
        if (enteredPin === globalAdminKey && (cleanPhone === '9800000000' || cleanPhone === '9876543210' || cleanPhone === '9999999999')) {
            return {
                success: true,
                role: 'admin',
                user: { id: 'a1', name: 'Elite Admin', email: 'admin@eliteclasses.com', role: 'Super Admin', phone: cleanPhone, color: '#2563eb' },
                redirectUrl: 'admin_home.html'
            };
        }

        return {
            success: false,
            message: `No active account found registered with WhatsApp ${cleanPhone}. Please check or contact administrator.`
        };
    },

    // ---------------------------------------------------------
    // 3. STUDENTS CRUD
    // ---------------------------------------------------------
    async fetchStudents() {
        if (!isSupabaseConnected()) return JSON.parse(localStorage.getItem('ec_students') || '[]');
        try {
            const { data, error } = await supabaseClient.from('students').select('*').order('created_at', { ascending: true });
            if (error) throw error;
            return data.map(s => ({
                id: s.id,
                name: s.name,
                email: s.email || '',
                cls: s.cls,
                parent: s.parent_name,
                phone: s.phone,
                pin: s.pin || '123456',
                fee: parseFloat(s.monthly_fee),
                due: s.fee_due_day || 10,
                scholarshipPct: parseFloat(s.scholarship_pct || 0),
                subjects: s.subjects || '',
                doa: s.date_of_admission || '',
                school: s.school_name || '',
                color: s.avatar_color || '#2563eb'
            }));
        } catch (e) {
            console.warn('[DBService] Fetch students failed, fallback to local:', e);
            return JSON.parse(localStorage.getItem('ec_students') || '[]');
        }
    },

    async upsertStudent(student) {
        if (!isSupabaseConnected()) return;
        try {
            await supabaseClient.from('students').upsert({
                id: student.id,
                name: student.name,
                email: student.email || '',
                cls: student.cls,
                parent_name: student.parent,
                phone: student.phone,
                pin: student.pin || '123456',
                monthly_fee: student.fee,
                fee_due_day: parseInt(student.due) || 10,
                scholarship_pct: student.scholarshipPct || 0,
                subjects: student.subjects,
                date_of_admission: student.doa || null,
                school_name: student.school || '',
                avatar_color: student.color
            });
        } catch (e) {
            console.error('[DBService] Upsert student failed:', e);
        }
    },

    async deleteStudent(studentId) {
        if (!isSupabaseConnected()) return;
        try {
            await supabaseClient.from('students').delete().eq('id', studentId);
        } catch (e) {
            console.error('[DBService] Delete student failed:', e);
        }
    },

    // ---------------------------------------------------------
    // 4. ADMINS CRUD
    // ---------------------------------------------------------
    async fetchAdmins() {
        if (!isSupabaseConnected()) return JSON.parse(localStorage.getItem('ec_admins') || '[]');
        try {
            const { data, error } = await supabaseClient.from('admins').select('*').order('created_at', { ascending: true });
            if (error) throw error;
            return data.map(a => ({
                id: a.id,
                name: a.name,
                email: a.email,
                role: a.role || 'Super Admin',
                phone: a.phone || '',
                pin: a.pin || '987654',
                color: a.avatar_color || '#2563eb'
            }));
        } catch (e) {
            console.warn('[DBService] Fetch admins failed, fallback to local:', e);
            return JSON.parse(localStorage.getItem('ec_admins') || '[]');
        }
    },

    async upsertAdmin(admin) {
        if (!isSupabaseConnected()) return;
        try {
            await supabaseClient.from('admins').upsert({
                id: admin.id,
                name: admin.name,
                email: admin.email,
                role: admin.role,
                phone: admin.phone,
                pin: admin.pin || '987654',
                avatar_color: admin.color
            });
        } catch (e) {
            console.error('[DBService] Upsert admin failed:', e);
        }
    },

    async deleteAdmin(adminId) {
        if (!isSupabaseConnected()) return;
        try {
            await supabaseClient.from('admins').delete().eq('id', adminId);
        } catch (e) {
            console.error('[DBService] Delete admin failed:', e);
        }
    },

    // ---------------------------------------------------------
    // 5. TEACHERS (STAFF WHERE is_teacher = true)
    // ---------------------------------------------------------
    async fetchTeachers() {
        if (!isSupabaseConnected()) return JSON.parse(localStorage.getItem('ec_teachers') || '[]');
        try {
            const { data, error } = await supabaseClient.from('staff').select('*').eq('is_teacher', true).order('created_at', { ascending: true });
            if (error) throw error;
            return data.map(t => ({
                id: t.id,
                name: t.name,
                email: t.email || '',
                subjects: t.subjects || '',
                classes: t.assigned_classes || '',
                phone: t.phone,
                pin: t.pin || '123456',
                salary: parseFloat(t.base_salary),
                incentive: parseFloat(t.incentive || 0),
                color: t.avatar_color || '#2563eb'
            }));
        } catch (e) {
            console.warn('[DBService] Fetch teachers failed:', e);
            return JSON.parse(localStorage.getItem('ec_teachers') || '[]');
        }
    },

    async upsertTeacher(teacher) {
        if (!isSupabaseConnected()) return;
        try {
            await supabaseClient.from('staff').upsert({
                id: teacher.id,
                name: teacher.name,
                email: teacher.email || '',
                is_teacher: true,
                role: teacher.role || (teacher.subjects ? teacher.subjects + ' Faculty' : 'Teacher'),
                subjects: teacher.subjects,
                assigned_classes: teacher.classes,
                phone: teacher.phone,
                pin: teacher.pin || '123456',
                base_salary: teacher.salary,
                incentive: teacher.incentive || 0,
                avatar_color: teacher.color
            });
        } catch (e) {
            console.error('[DBService] Upsert teacher failed:', e);
        }
    },

    async deleteTeacher(teacherId) {
        if (!isSupabaseConnected()) return;
        try {
            await supabaseClient.from('staff').delete().eq('id', teacherId);
        } catch (e) {
            console.error('[DBService] Delete teacher failed:', e);
        }
    },

    // ---------------------------------------------------------
    // 6. SUPPORT STAFF (STAFF WHERE is_teacher = false)
    // ---------------------------------------------------------
    async fetchStaff() {
        if (!isSupabaseConnected()) return JSON.parse(localStorage.getItem('ec_staff') || '[]');
        try {
            const { data, error } = await supabaseClient.from('staff').select('*').eq('is_teacher', false).order('created_at', { ascending: true });
            if (error) throw error;
            return data.map(st => ({
                id: st.id,
                name: st.name,
                email: st.email || '',
                role: st.role || 'Support Staff',
                phone: st.phone,
                pin: st.pin || '123456',
                salary: parseFloat(st.base_salary),
                incentive: parseFloat(st.incentive || 0),
                color: st.avatar_color || '#06b6d4'
            }));
        } catch (e) {
            console.warn('[DBService] Fetch staff failed:', e);
            return JSON.parse(localStorage.getItem('ec_staff') || '[]');
        }
    },

    async upsertStaff(st) {
        if (!isSupabaseConnected()) return;
        try {
            await supabaseClient.from('staff').upsert({
                id: st.id,
                name: st.name,
                email: st.email || '',
                is_teacher: false,
                role: st.role,
                phone: st.phone,
                pin: st.pin || '123456',
                base_salary: st.salary,
                incentive: st.incentive || 0,
                avatar_color: st.color
            });
        } catch (e) {
            console.error('[DBService] Upsert staff failed:', e);
        }
    },

    async deleteStaff(staffId) {
        if (!isSupabaseConnected()) return;
        try {
            await supabaseClient.from('staff').delete().eq('id', staffId);
        } catch (e) {
            console.error('[DBService] Delete staff failed:', e);
        }
    },

    // ---------------------------------------------------------
    // 7. PAYMENTS LEDGER
    // ---------------------------------------------------------
    async fetchPayments() {
        if (!isSupabaseConnected()) return JSON.parse(localStorage.getItem('ec_payments') || '[]');
        try {
            const { data, error } = await supabaseClient.from('payments').select('*').order('created_at', { ascending: false });
            if (error) throw error;
            return data.map(p => ({
                id: p.id,
                studentId: p.student_id,
                month: p.month,
                amount: parseFloat(p.amount),
                mode: p.mode,
                remarks: p.remarks || '',
                date: p.payment_date
            }));
        } catch (e) {
            console.warn('[DBService] Fetch payments failed:', e);
            return JSON.parse(localStorage.getItem('ec_payments') || '[]');
        }
    },

    async insertPayment(p) {
        if (!isSupabaseConnected()) return;
        try {
            await supabaseClient.from('payments').insert({
                id: p.id,
                student_id: p.studentId,
                month: p.month,
                amount: p.amount,
                mode: p.mode,
                remarks: p.remarks,
                payment_date: p.date
            });
        } catch (e) {
            console.error('[DBService] Insert payment failed:', e);
        }
    },

    // ---------------------------------------------------------
    // 8. SALARY PAYOUTS LEDGER
    // ---------------------------------------------------------
    async fetchSalaryPayouts() {
        if (!isSupabaseConnected()) return JSON.parse(localStorage.getItem('ec_salary_payouts') || '[]');
        try {
            const { data, error } = await supabaseClient.from('salary_payouts').select('*').order('created_at', { ascending: false });
            if (error) throw error;
            return data.map(sp => ({
                id: sp.id,
                recipientId: sp.recipient_id,
                type: sp.recipient_type,
                month: sp.month,
                amount: parseFloat(sp.amount),
                mode: sp.mode,
                date: sp.payout_date
            }));
        } catch (e) {
            console.warn('[DBService] Fetch salary payouts failed:', e);
            return JSON.parse(localStorage.getItem('ec_salary_payouts') || '[]');
        }
    },

    async insertSalaryPayout(sp) {
        if (!isSupabaseConnected()) return;
        try {
            await supabaseClient.from('salary_payouts').insert({
                id: sp.id,
                recipient_id: sp.recipientId,
                recipient_type: sp.type,
                month: sp.month,
                amount: sp.amount,
                mode: sp.mode,
                payout_date: sp.date
            });
        } catch (e) {
            console.error('[DBService] Insert salary payout failed:', e);
        }
    },

    // ---------------------------------------------------------
    // 9. NOTICES MANAGEMENT
    // ---------------------------------------------------------
    async fetchActiveNotice() {
        if (!isSupabaseConnected()) return '📢 Admissions open for Academic Session 2025-26 • Mid-Term Examinations begin next week!';
        try {
            const { data, error } = await supabaseClient
                .from('notices')
                .select('content')
                .eq('is_active', true)
                .order('created_at', { ascending: false })
                .limit(1);

            if (error || !data || data.length === 0) return '📢 Admissions open for Academic Session 2025-26 • Mid-Term Examinations begin next week!';
            return data[0].content;
        } catch (e) {
            return '📢 Admissions open for Academic Session 2025-26 • Mid-Term Examinations begin next week!';
        }
    },

    async fetchNoticeList() {
        if (!isSupabaseConnected()) return JSON.parse(localStorage.getItem('ec_notices') || '[]');
        try {
            const { data, error } = await supabaseClient.from('notices').select('*').order('created_at', { ascending: false });
            if (error || !data) return [];
            return data;
        } catch (e) {
            return [];
        }
    },

    async insertNotice(content) {
        const newNotice = { id: 'n_' + Date.now(), content: content, is_active: true, created_at: new Date().toISOString() };
        if (!isSupabaseConnected()) {
            const list = JSON.parse(localStorage.getItem('ec_notices') || '[]');
            list.unshift(newNotice);
            localStorage.setItem('ec_notices', JSON.stringify(list));
            return newNotice;
        }
        try {
            await supabaseClient.from('notices').insert(newNotice);
            return newNotice;
        } catch (e) {
            console.error('[DBService] Insert notice error:', e);
        }
    },

    // ---------------------------------------------------------
    // 10. COURSES CRUD
    // ---------------------------------------------------------
    async fetchCourses() {
        if (!isSupabaseConnected()) return JSON.parse(localStorage.getItem('ec_courses') || '[]');
        try {
            const { data, error } = await supabaseClient.from('courses').select('*').order('created_at', { ascending: false });
            if (error || !data) return [];
            return data.map(c => ({
                id: c.id,
                title: c.title,
                cls: c.cls,
                subject: c.subject,
                instructor: c.instructor,
                description: c.description,
                lessons_count: c.lessons_count || 10
            }));
        } catch (e) {
            return [];
        }
    },

    async upsertCourse(course) {
        if (!isSupabaseConnected()) {
            let courses = JSON.parse(localStorage.getItem('ec_courses') || '[]');
            const idx = courses.findIndex(c => c.id === course.id);
            if (idx >= 0) courses[idx] = course;
            else courses.unshift(course);
            localStorage.setItem('ec_courses', JSON.stringify(courses));
            return;
        }
        try {
            await supabaseClient.from('courses').upsert({
                id: course.id,
                title: course.title,
                cls: course.cls,
                subject: course.subject,
                instructor: course.instructor,
                description: course.description,
                lessons_count: course.lessons_count || 10
            });
        } catch (e) {
            console.error('[DBService] Upsert course failed:', e);
        }
    },

    // ---------------------------------------------------------
    // 11. TEST SERIES CRUD
    // ---------------------------------------------------------
    async fetchTestSeries() {
        if (!isSupabaseConnected()) return JSON.parse(localStorage.getItem('ec_test_series') || '[]');
        try {
            const { data, error } = await supabaseClient.from('test_series').select('*').order('created_at', { ascending: false });
            if (error || !data) return [];
            return data;
        } catch (e) {
            return [];
        }
    },

    async upsertTestSeries(test) {
        if (!isSupabaseConnected()) {
            let tests = JSON.parse(localStorage.getItem('ec_test_series') || '[]');
            const idx = tests.findIndex(t => t.id === test.id);
            if (idx >= 0) tests[idx] = test;
            else tests.unshift(test);
            localStorage.setItem('ec_test_series', JSON.stringify(tests));
            return;
        }
        try {
            await supabaseClient.from('test_series').upsert({
                id: test.id,
                title: test.title,
                cls: test.cls,
                subject: test.subject,
                duration_mins: test.duration_mins,
                total_marks: test.total_marks,
                questions_count: test.questions_count,
                test_date: test.test_date
            });
        } catch (e) {
            console.error('[DBService] Upsert test series failed:', e);
        }
    },

    // ---------------------------------------------------------
    // 12. STUDENT STATS & PERSISTENCE
    // ---------------------------------------------------------
    async fetchStudentStats(studentId) {
        if (!studentId) return { testAttempts: {}, courseProgress: {} };
        const localKey = `ec_stats_${studentId}`;
        if (!isSupabaseConnected()) return JSON.parse(localStorage.getItem(localKey) || '{"testAttempts":{}, "courseProgress":{}}');
        try {
            const { data, error } = await supabaseClient.from('student_stats').select('stats_json').eq('student_id', studentId).maybeSingle();
            if (error || !data) return JSON.parse(localStorage.getItem(localKey) || '{"testAttempts":{}, "courseProgress":{}}');
            return data.stats_json || { testAttempts: {}, courseProgress: {} };
        } catch (e) {
            return JSON.parse(localStorage.getItem(localKey) || '{"testAttempts":{}, "courseProgress":{}}');
        }
    },

    async saveStudentStats(studentId, statsObj) {
        if (!studentId) return;
        const localKey = `ec_stats_${studentId}`;
        localStorage.setItem(localKey, JSON.stringify(statsObj));
        if (!isSupabaseConnected()) return;
        try {
            await supabaseClient.from('student_stats').upsert({
                id: 'ststat_' + studentId,
                student_id: studentId,
                stats_json: statsObj,
                updated_at: new Date().toISOString()
            });
        } catch (e) {
            console.error('[DBService] Save student stats error:', e);
        }
    },

    // ---------------------------------------------------------
    // 13. CLASSES CRUD
    // ---------------------------------------------------------
    async fetchClasses() {
        const defaultClasses = ['LKG', 'UKG', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'].map((c, i) => ({
            id: 'c_' + i, name: c, display_order: i + 1, is_active: true
        }));

        if (!isSupabaseConnected()) return JSON.parse(localStorage.getItem('ec_classes') || JSON.stringify(defaultClasses));
        try {
            const { data, error } = await supabaseClient.from('classes').select('*').order('display_order', { ascending: true });
            if (error || !data || data.length === 0) return defaultClasses;
            return data;
        } catch (e) {
            return defaultClasses;
        }
    },

    async upsertClass(clsObj) {
        if (!isSupabaseConnected()) {
            let list = await this.fetchClasses();
            const idx = list.findIndex(c => c.id === clsObj.id || c.name === clsObj.name);
            if (idx >= 0) list[idx] = { ...list[idx], ...clsObj };
            else list.push(clsObj);
            localStorage.setItem('ec_classes', JSON.stringify(list));
            return;
        }
        try {
            await supabaseClient.from('classes').upsert(clsObj);
        } catch (e) {
            console.error('[DBService] Upsert class error:', e);
        }
    },

    async deleteClass(clsId) {
        if (!isSupabaseConnected()) {
            let list = await this.fetchClasses();
            list = list.filter(c => c.id !== clsId && c.name !== clsId);
            localStorage.setItem('ec_classes', JSON.stringify(list));
            return;
        }
        try {
            await supabaseClient.from('classes').delete().eq('id', clsId);
        } catch (e) {
            console.error('[DBService] Delete class error:', e);
        }
    },

    // ---------------------------------------------------------
    // 14. SUBJECTS CRUD
    // ---------------------------------------------------------
    async fetchSubjects() {
        const defaultSubjects = ['Mathematics', 'Science', 'Physics', 'Chemistry', 'Biology', 'English', 'Social Studies', 'Hindi', 'Computer Science', 'General Knowledge'].map((s, i) => ({
            id: 'sub_' + i, name: s, code: s.slice(0, 4).toUpperCase(), is_active: true
        }));

        if (!isSupabaseConnected()) return JSON.parse(localStorage.getItem('ec_subjects') || JSON.stringify(defaultSubjects));
        try {
            const { data, error } = await supabaseClient.from('subjects').select('*').order('name', { ascending: true });
            if (error || !data || data.length === 0) return defaultSubjects;
            return data;
        } catch (e) {
            return defaultSubjects;
        }
    },

    async upsertSubject(subObj) {
        if (!isSupabaseConnected()) {
            let list = await this.fetchSubjects();
            const idx = list.findIndex(s => s.id === subObj.id || s.name === subObj.name);
            if (idx >= 0) list[idx] = { ...list[idx], ...subObj };
            else list.push(subObj);
            localStorage.setItem('ec_subjects', JSON.stringify(list));
            return;
        }
        try {
            await supabaseClient.from('subjects').upsert(subObj);
        } catch (e) {
            console.error('[DBService] Upsert subject error:', e);
        }
    },

    async deleteSubject(subId) {
        if (!isSupabaseConnected()) {
            let list = await this.fetchSubjects();
            list = list.filter(s => s.id !== subId && s.name !== subId);
            localStorage.setItem('ec_subjects', JSON.stringify(list));
            return;
        }
        try {
            await supabaseClient.from('subjects').delete().eq('id', subId);
        } catch (e) {
            console.error('[DBService] Delete subject error:', e);
        }
    },

    // ---------------------------------------------------------
    // 15. TEACHER REMARKS & OBSERVATIONS
    // ---------------------------------------------------------
    async fetchStudentRemarks(studentId = null) {
        if (!isSupabaseConnected()) {
            const allRemarks = JSON.parse(localStorage.getItem('ec_student_remarks') || '[]');
            return studentId ? allRemarks.filter(r => r.student_id === studentId || r.studentId === studentId) : allRemarks;
        }
        try {
            let query = supabaseClient.from('student_remarks').select('*').order('created_at', { ascending: false });
            if (studentId) query = query.eq('student_id', studentId);
            const { data, error } = await query;
            if (error || !data) {
                const allRemarks = JSON.parse(localStorage.getItem('ec_student_remarks') || '[]');
                return studentId ? allRemarks.filter(r => r.student_id === studentId || r.studentId === studentId) : allRemarks;
            }
            return data;
        } catch (e) {
            console.error('[DBService] Fetch student remarks error:', e);
            const allRemarks = JSON.parse(localStorage.getItem('ec_student_remarks') || '[]');
            return studentId ? allRemarks.filter(r => r.student_id === studentId || r.studentId === studentId) : allRemarks;
        }
    },

    async insertStudentRemark(remarkObj) {
        const item = {
            id: remarkObj.id || 'rem_' + Date.now(),
            student_id: remarkObj.student_id || remarkObj.studentId,
            staff_id: remarkObj.staff_id || remarkObj.staffId || null,
            staff_name: remarkObj.staff_name || remarkObj.staffName || 'Faculty',
            category: remarkObj.category || 'General Note',
            remark: remarkObj.remark,
            created_at: remarkObj.created_at || new Date().toISOString()
        };

        // Update local cache
        const allRemarks = JSON.parse(localStorage.getItem('ec_student_remarks') || '[]');
        allRemarks.unshift(item);
        localStorage.setItem('ec_student_remarks', JSON.stringify(allRemarks));

        if (!isSupabaseConnected()) return item;

        try {
            const { data, error } = await supabaseClient.from('student_remarks').insert([item]).select().single();
            if (error) {
                console.warn('[DBService] Supabase insert remark warning:', error);
                return item;
            }
            return data;
        } catch (e) {
            console.error('[DBService] Insert remark error:', e);
            return item;
        }
    }
};
