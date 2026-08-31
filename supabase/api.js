/* Elite Classes — Unified Database Service Layer (DBService) */

const DBService = {
    // ---------------------------------------------------------
    // 1. COACHING ACCESS KEY & SETTINGS
    // ---------------------------------------------------------
    async getCoachingKey() {
        if (!isSupabaseConnected()) return '987654'; // Fallback key
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
        if (!isSupabaseConnected()) return '123456'; // Fallback key
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
    // 2. STUDENTS CRUD
    // ---------------------------------------------------------
    async fetchStudents() {
        if (!isSupabaseConnected()) return JSON.parse(localStorage.getItem('ec_students') || '[]');
        try {
            const { data, error } = await supabaseClient.from('students').select('*').order('created_at', { ascending: true });
            if (error) throw error;
            return data.map(s => ({
                id: s.id,
                name: s.name,
                cls: s.cls,
                parent: s.parent_name,
                phone: s.phone,
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
                cls: student.cls,
                parent_name: student.parent,
                phone: student.phone,
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
    // 3. TEACHERS CRUD
    // ---------------------------------------------------------
    async fetchTeachers() {
        if (!isSupabaseConnected()) return JSON.parse(localStorage.getItem('ec_teachers') || '[]');
        try {
            const { data, error } = await supabaseClient.from('teachers').select('*').order('created_at', { ascending: true });
            if (error) throw error;
            return data.map(t => ({
                id: t.id,
                name: t.name,
                subjects: t.subjects || '',
                classes: t.assigned_classes || '',
                phone: t.phone,
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
            await supabaseClient.from('teachers').upsert({
                id: teacher.id,
                name: teacher.name,
                subjects: teacher.subjects,
                assigned_classes: teacher.classes,
                phone: teacher.phone,
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
            await supabaseClient.from('teachers').delete().eq('id', teacherId);
        } catch (e) {
            console.error('[DBService] Delete teacher failed:', e);
        }
    },

    // ---------------------------------------------------------
    // 4. SUPPORT STAFF CRUD
    // ---------------------------------------------------------
    async fetchStaff() {
        if (!isSupabaseConnected()) return JSON.parse(localStorage.getItem('ec_staff') || '[]');
        try {
            const { data, error } = await supabaseClient.from('staff').select('*').order('created_at', { ascending: true });
            if (error) throw error;
            return data.map(st => ({
                id: st.id,
                name: st.name,
                role: st.role,
                phone: st.phone,
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
                role: st.role,
                phone: st.phone,
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
    // 5. PAYMENTS LEDGER
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
    // 6. SALARY PAYOUTS LEDGER
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
    // 7. NOTICES MANAGEMENT
    // ---------------------------------------------------------
    async fetchActiveNotice() {
        if (!isSupabaseConnected()) return '📢 Admissions open for Academic Session 2025-26 • Mid-Term Examinations schedule announced!';
        try {
            const { data, error } = await supabaseClient
                .from('notices')
                .select('content')
                .eq('is_active', true)
                .order('created_at', { ascending: false })
                .limit(1);

            if (error || !data || data.length === 0) return '📢 Admissions open for Academic Session 2025-26 • Mid-Term Examinations schedule announced!';
            return data[0].content;
        } catch (e) {
            return '📢 Admissions open for Academic Session 2025-26 • Mid-Term Examinations schedule announced!';
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
    // 8. COURSES CRUD
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
    // 9. TEST SERIES CRUD
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
    // 10. STUDENT STATS & PERSISTENCE
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
    }
};

