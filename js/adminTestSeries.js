/* =========================================================================
   ELITE CLASSES — ADMIN TEST SERIES & CBT SWITCHBOARD (adminTestSeries.js)
   Live One-Click Test Activation & Deactivation Controller for Faculty & Admins
   ========================================================================= */

const CLASS_10_SCIENCE_TEST_METADATA = [
    { id: 'ts_c10_sci_ch1', ch: 1, title: 'Chapter 1: Chemical Reactions Assessment' },
    { id: 'ts_c10_sci_ch2', ch: 2, title: 'Chapter 2: Acids, Bases and Salts Assessment' },
    { id: 'ts_c10_sci_ch3', ch: 3, title: 'Chapter 3: Metals and Non-Metals Assessment' },
    { id: 'ts_c10_sci_ch4', ch: 4, title: 'Chapter 4: Carbon and its Compounds Assessment' },
    { id: 'ts_c10_sci_ch5', ch: 5, title: 'Chapter 5: Life Processes Assessment' },
    { id: 'ts_c10_sci_ch6', ch: 6, title: 'Chapter 6: Control and Coordination Assessment' },
    { id: 'ts_c10_sci_ch7', ch: 7, title: 'Chapter 7: How do Organisms Reproduce Assessment' },
    { id: 'ts_c10_sci_ch8', ch: 8, title: 'Chapter 8: Heredity Assessment' },
    { id: 'ts_c10_sci_ch9', ch: 9, title: 'Chapter 9: Light – Reflection and Refraction Assessment' },
    { id: 'ts_c10_sci_ch10', ch: 10, title: 'Chapter 10: The Human Eye and the Colourful World Assessment' },
    { id: 'ts_c10_sci_ch11', ch: 11, title: 'Chapter 11: Electricity Assessment' },
    { id: 'ts_c10_sci_ch12', ch: 12, title: 'Chapter 12: Magnetic Effects of Electric Current Assessment' },
    { id: 'ts_c10_sci_ch13', ch: 13, title: 'Chapter 13: Our Environment Assessment' }
];

// Render Admin Test Series Management View
async function renderAdminTestSeriesView() {
    const tbody = document.getElementById('admin-testseries-tbody');
    if (!tbody) return;

    let testsList = [];
    if (typeof DBService !== 'undefined' && DBService.fetchTestSeries) {
        try {
            testsList = await DBService.fetchTestSeries('Class 10');
        } catch (e) {
            testsList = JSON.parse(localStorage.getItem('ec_test_series') || '[]');
        }
    } else {
        testsList = JSON.parse(localStorage.getItem('ec_test_series') || '[]');
    }

    const testMap = {};
    testsList.forEach(t => {
        testMap[t.id] = t;
    });

    let activeCount = 0;
    let inactiveCount = 0;
    let html = '';

    CLASS_10_SCIENCE_TEST_METADATA.forEach(meta => {
        const test = testMap[meta.id] || {
            id: meta.id,
            title: meta.title,
            cls: 'Class 10',
            subject: 'Science',
            duration_mins: 90,
            total_marks: 400,
            questions_count: 100,
            status: 'published'
        };

        const isPublished = test.status === 'published' || test.status === 'active';
        if (isPublished) activeCount++;
        else inactiveCount++;

        html += `
            <tr style="border-bottom:1px solid var(--border-light); ${!isPublished ? 'background:#fafafa; opacity:0.85;' : ''}">
                <td style="text-align:center; font-weight:800; color:var(--text-muted); font-size:12px;">
                    Ch ${meta.ch}
                </td>
                <td>
                    <div style="font-weight:700; font-size:13.5px; color:var(--text);">${meta.title}</div>
                    <div style="font-size:11px; color:var(--text-muted);">ID: <code>${meta.id}</code></div>
                </td>
                <td>
                    <span class="meta-pill" style="font-size:11px;">Class 10</span>
                    <span class="meta-pill" style="font-size:11px;">Science</span>
                </td>
                <td>
                    <div style="font-size:12px; font-weight:600; color:var(--text);">100 Qs • 90 Mins</div>
                    <div style="font-size:11px; color:var(--text-muted);">400 Marks (+4 / -1)</div>
                </td>
                <td style="text-align:center;">
                    ${isPublished ? `
                        <span class="badge badge-success" style="font-size:11px; padding:4px 10px; font-weight:700;">
                            🟢 Active & Live
                        </span>
                    ` : `
                        <span class="badge badge-danger" style="font-size:11px; padding:4px 10px; font-weight:700;">
                            🔴 Inactive / Locked
                        </span>
                    `}
                </td>
                <td style="text-align:center;">
                    ${isPublished ? `
                        <button class="btn btn-sm" onclick="adminToggleTestStatus('${meta.id}', 'inactive')" style="background:#fee2e2; color:#b91c1c; border:1px solid #f87171; font-weight:700; font-size:12px; padding:5px 12px; border-radius:6px; cursor:pointer; width:125px;">
                            ⏸️ Deactivate
                        </button>
                    ` : `
                        <button class="btn btn-sm" onclick="adminToggleTestStatus('${meta.id}', 'published')" style="background:#ecfdf5; color:#047857; border:1px solid #34d399; font-weight:700; font-size:12px; padding:5px 12px; border-radius:6px; cursor:pointer; width:125px;">
                            ▶️ Activate
                        </button>
                    `}
                </td>
            </tr>
        `;
    });

    tbody.innerHTML = html;

    // Update Summary Header Pills
    const summaryPill = document.getElementById('admin-testseries-summary-pill');
    if (summaryPill) {
        summaryPill.innerHTML = `
            <span class="badge badge-success" style="font-size:11.5px; padding:4px 10px;">🟢 ${activeCount} Active</span>
            <span class="badge ${inactiveCount > 0 ? 'badge-danger' : 'badge-warning'}" style="font-size:11.5px; padding:4px 10px;">🔴 ${inactiveCount} Inactive</span>
        `;
    }

    // Update Dashboard Pallet Value if present
    const dashStat = document.getElementById('dash-stat-testseries');
    if (dashStat) {
        dashStat.textContent = `${activeCount} Active`;
    }
}

// Single-Test Toggle
async function adminToggleTestStatus(testId, targetStatus) {
    let localTests = JSON.parse(localStorage.getItem('ec_test_series') || '[]');
    let testObj = localTests.find(t => t.id === testId);

    if (!testObj) {
        const meta = CLASS_10_SCIENCE_TEST_METADATA.find(m => m.id === testId);
        testObj = {
            id: testId,
            title: meta ? meta.title : testId,
            cls: 'Class 10',
            subject: 'Science',
            duration_mins: 90,
            total_marks: 400,
            passing_marks: 160,
            negative_marking: 1.00,
            questions_count: 100,
            status: targetStatus
        };
        localTests.push(testObj);
    } else {
        testObj.status = targetStatus;
    }

    localStorage.setItem('ec_test_series', JSON.stringify(localTests));

    // Cloud Database Persistence
    if (typeof supabaseClient !== 'undefined' && supabaseClient && typeof isSupabaseConnected === 'function' && isSupabaseConnected()) {
        try {
            await supabaseClient.from('test_series').upsert(testObj, { onConflict: 'id' });
        } catch (e) {
            console.warn('[AdminTestSeries] Supabase update warning:', e);
        }
    }

    const friendlyName = testObj.title ? testObj.title.split(':')[0] : 'Test';
    showToast(`${friendlyName} marked as ${targetStatus === 'published' ? 'Active (Live)' : 'Inactive (Locked)'}!`, targetStatus === 'published' ? 'success' : 'danger');

    renderAdminTestSeriesView();
}

// Bulk Activate / Deactivate All 13 Tests
async function adminBulkToggleTests(targetStatus) {
    let localTests = JSON.parse(localStorage.getItem('ec_test_series') || '[]');
    const localMap = {};
    localTests.forEach(t => { localMap[t.id] = t; });

    const batch = [];
    CLASS_10_SCIENCE_TEST_METADATA.forEach(meta => {
        let t = localMap[meta.id];
        if (!t) {
            t = {
                id: meta.id,
                title: meta.title,
                cls: 'Class 10',
                subject: 'Science',
                duration_mins: 90,
                total_marks: 400,
                passing_marks: 160,
                negative_marking: 1.00,
                questions_count: 100,
                status: targetStatus
            };
            localTests.push(t);
        } else {
            t.status = targetStatus;
        }
        batch.push(t);
    });

    localStorage.setItem('ec_test_series', JSON.stringify(localTests));

    // Cloud Database Persistence
    if (typeof supabaseClient !== 'undefined' && supabaseClient && typeof isSupabaseConnected === 'function' && isSupabaseConnected()) {
        try {
            await supabaseClient.from('test_series').upsert(batch, { onConflict: 'id' });
        } catch (e) {
            console.warn('[AdminTestSeries] Supabase batch warning:', e);
        }
    }

    showToast(`All Class 10 Science assessments have been ${targetStatus === 'published' ? 'Activated' : 'Deactivated'}!`, targetStatus === 'published' ? 'success' : 'danger');

    renderAdminTestSeriesView();
}

// Attach to window
if (typeof window !== 'undefined') {
    window.renderAdminTestSeriesView = renderAdminTestSeriesView;
    window.adminToggleTestStatus = adminToggleTestStatus;
    window.adminBulkToggleTests = adminBulkToggleTests;
}
