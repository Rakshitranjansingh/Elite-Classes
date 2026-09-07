/* =========================================================================
   ELITE CLASSES — ADMIN TEST SERIES & CBT SWITCHBOARD (adminTestSeries.js)
   Live One-Click Test Activation & Deactivation Controller for Faculty & Admins
   Supports All Class 10 Subjects: Science (13), History (5), Politics (5), Economics (5), Geography (7)
   ========================================================================= */

const ALL_CLASS_10_TEST_METADATA = [
    // --- SCIENCE (13 CHAPTERS) ---
    { id: 'ts_c10_sci_ch1', ch: 1, subject: 'Science', title: 'Chapter 1: Chemical Reactions Assessment', defaultStatus: 'published' },
    { id: 'ts_c10_sci_ch2', ch: 2, subject: 'Science', title: 'Chapter 2: Acids, Bases and Salts Assessment', defaultStatus: 'published' },
    { id: 'ts_c10_sci_ch3', ch: 3, subject: 'Science', title: 'Chapter 3: Metals and Non-Metals Assessment', defaultStatus: 'published' },
    { id: 'ts_c10_sci_ch4', ch: 4, subject: 'Science', title: 'Chapter 4: Carbon and its Compounds Assessment', defaultStatus: 'published' },
    { id: 'ts_c10_sci_ch5', ch: 5, subject: 'Science', title: 'Chapter 5: Life Processes Assessment', defaultStatus: 'published' },
    { id: 'ts_c10_sci_ch6', ch: 6, subject: 'Science', title: 'Chapter 6: Control and Coordination Assessment', defaultStatus: 'published' },
    { id: 'ts_c10_sci_ch7', ch: 7, subject: 'Science', title: 'Chapter 7: How do Organisms Reproduce Assessment', defaultStatus: 'published' },
    { id: 'ts_c10_sci_ch8', ch: 8, subject: 'Science', title: 'Chapter 8: Heredity Assessment', defaultStatus: 'published' },
    { id: 'ts_c10_sci_ch9', ch: 9, subject: 'Science', title: 'Chapter 9: Light – Reflection and Refraction Assessment', defaultStatus: 'published' },
    { id: 'ts_c10_sci_ch10', ch: 10, subject: 'Science', title: 'Chapter 10: The Human Eye and the Colourful World Assessment', defaultStatus: 'published' },
    { id: 'ts_c10_sci_ch11', ch: 11, subject: 'Science', title: 'Chapter 11: Electricity Assessment', defaultStatus: 'published' },
    { id: 'ts_c10_sci_ch12', ch: 12, subject: 'Science', title: 'Chapter 12: Magnetic Effects of Electric Current Assessment', defaultStatus: 'published' },
    { id: 'ts_c10_sci_ch13', ch: 13, subject: 'Science', title: 'Chapter 13: Our Environment Assessment', defaultStatus: 'published' },

    // --- HISTORY (5 CHAPTERS: Ch 1 Active, Ch 2-5 Inactive by default) ---
    { id: 'ts_c10_hist_ch1', ch: 1, subject: 'History', title: 'Chapter 1: The Rise of Nationalism in Europe', defaultStatus: 'published' },
    { id: 'ts_c10_hist_ch2', ch: 2, subject: 'History', title: 'Chapter 2: Nationalism in India', defaultStatus: 'inactive' },
    { id: 'ts_c10_hist_ch3', ch: 3, subject: 'History', title: 'Chapter 3: The Making of a Global World', defaultStatus: 'inactive' },
    { id: 'ts_c10_hist_ch4', ch: 4, subject: 'History', title: 'Chapter 4: The Age of Industrialisation', defaultStatus: 'inactive' },
    { id: 'ts_c10_hist_ch5', ch: 5, subject: 'History', title: 'Chapter 5: Print Culture and the Modern World', defaultStatus: 'inactive' },

    // --- DEMOCRATIC POLITICS (5 CHAPTERS: Ch 1 Active, Ch 2-5 Inactive by default) ---
    { id: 'ts_c10_poli_ch1', ch: 1, subject: 'Politics', title: 'Chapter 1: Power-sharing', defaultStatus: 'published' },
    { id: 'ts_c10_poli_ch2', ch: 2, subject: 'Politics', title: 'Chapter 2: Federalism', defaultStatus: 'inactive' },
    { id: 'ts_c10_poli_ch3', ch: 3, subject: 'Politics', title: 'Chapter 3: Gender, Religion and Caste', defaultStatus: 'inactive' },
    { id: 'ts_c10_poli_ch4', ch: 4, subject: 'Politics', title: 'Chapter 4: Political Parties', defaultStatus: 'inactive' },
    { id: 'ts_c10_poli_ch5', ch: 5, subject: 'Politics', title: 'Chapter 5: Outcomes of Democracy', defaultStatus: 'inactive' },

    // --- ECONOMICS (5 CHAPTERS: Ch 1 Active, Ch 2-5 Inactive by default) ---
    { id: 'ts_c10_econ_ch1', ch: 1, subject: 'Economics', title: 'Chapter 1: Development', defaultStatus: 'published' },
    { id: 'ts_c10_econ_ch2', ch: 2, subject: 'Economics', title: 'Chapter 2: Sectors of the Indian Economy', defaultStatus: 'inactive' },
    { id: 'ts_c10_econ_ch3', ch: 3, subject: 'Economics', title: 'Chapter 3: Money and Credit', defaultStatus: 'inactive' },
    { id: 'ts_c10_econ_ch4', ch: 4, subject: 'Economics', title: 'Chapter 4: Globalisation and the Indian Economy', defaultStatus: 'inactive' },
    { id: 'ts_c10_econ_ch5', ch: 5, subject: 'Economics', title: 'Chapter 5: Consumer Rights', defaultStatus: 'inactive' },

    // --- GEOGRAPHY (7 CHAPTERS: Ch 1 Active, Ch 2-7 Inactive by default) ---
    { id: 'ts_c10_geog_ch1', ch: 1, subject: 'Geography', title: 'Chapter 1: Resources and Development', defaultStatus: 'published' },
    { id: 'ts_c10_geog_ch2', ch: 2, subject: 'Geography', title: 'Chapter 2: Forest and Wildlife Resources', defaultStatus: 'inactive' },
    { id: 'ts_c10_geog_ch3', ch: 3, subject: 'Geography', title: 'Chapter 3: Water Resources', defaultStatus: 'inactive' },
    { id: 'ts_c10_geog_ch4', ch: 4, subject: 'Geography', title: 'Chapter 4: Agriculture', defaultStatus: 'inactive' },
    { id: 'ts_c10_geog_ch5', ch: 5, subject: 'Geography', title: 'Chapter 5: Minerals and Energy Resources', defaultStatus: 'inactive' },
    { id: 'ts_c10_geog_ch6', ch: 6, subject: 'Geography', title: 'Chapter 6: Manufacturing Industries', defaultStatus: 'inactive' },
    { id: 'ts_c10_geog_ch7', ch: 7, subject: 'Geography', title: 'Chapter 7: Lifelines of National Economy', defaultStatus: 'inactive' },

    // --- MATHEMATICS (14 CHAPTERS: Ch 1 Active, Ch 2-14 Inactive by default) ---
    { id: 'ts_c10_math_ch1', ch: 1, subject: 'Mathematics', title: 'Chapter 1: Real Numbers', defaultStatus: 'published' },
    { id: 'ts_c10_math_ch2', ch: 2, subject: 'Mathematics', title: 'Chapter 2: Polynomials', defaultStatus: 'inactive' },
    { id: 'ts_c10_math_ch3', ch: 3, subject: 'Mathematics', title: 'Chapter 3: Pair of Linear Equations in Two Variables', defaultStatus: 'inactive' },
    { id: 'ts_c10_math_ch4', ch: 4, subject: 'Mathematics', title: 'Chapter 4: Quadratic Equations', defaultStatus: 'inactive' },
    { id: 'ts_c10_math_ch5', ch: 5, subject: 'Mathematics', title: 'Chapter 5: Arithmetic Progressions', defaultStatus: 'inactive' },
    { id: 'ts_c10_math_ch6', ch: 6, subject: 'Mathematics', title: 'Chapter 6: Triangles', defaultStatus: 'inactive' },
    { id: 'ts_c10_math_ch7', ch: 7, subject: 'Mathematics', title: 'Chapter 7: Coordinate Geometry', defaultStatus: 'inactive' },
    { id: 'ts_c10_math_ch8', ch: 8, subject: 'Mathematics', title: 'Chapter 8: Introduction to Trigonometry', defaultStatus: 'inactive' },
    { id: 'ts_c10_math_ch9', ch: 9, subject: 'Mathematics', title: 'Chapter 9: Some Applications of Trigonometry', defaultStatus: 'inactive' },
    { id: 'ts_c10_math_ch10', ch: 10, subject: 'Mathematics', title: 'Chapter 10: Circles', defaultStatus: 'inactive' },
    { id: 'ts_c10_math_ch11', ch: 11, subject: 'Mathematics', title: 'Chapter 11: Areas Related to Circles', defaultStatus: 'inactive' },
    { id: 'ts_c10_math_ch12', ch: 12, subject: 'Mathematics', title: 'Chapter 12: Surface Areas and Volumes', defaultStatus: 'inactive' },
    { id: 'ts_c10_math_ch13', ch: 13, subject: 'Mathematics', title: 'Chapter 13: Statistics', defaultStatus: 'inactive' },
    { id: 'ts_c10_math_ch14', ch: 14, subject: 'Mathematics', title: 'Chapter 14: Probability', defaultStatus: 'inactive' }
];

// Backwards compatibility alias
const CLASS_10_SCIENCE_TEST_METADATA = ALL_CLASS_10_TEST_METADATA.filter(t => t.subject === 'Science');

// Filter state: 'all', 'Science', 'History', 'Politics', 'Economics', 'Geography'
let currentAdminSubjectFilter = 'all';

function setAdminSubjectFilter(subj) {
    currentAdminSubjectFilter = subj;
    renderAdminTestSeriesView();
}

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

    // Determine items based on subject filter
    const filteredMetadata = (currentAdminSubjectFilter === 'all')
        ? ALL_CLASS_10_TEST_METADATA
        : ALL_CLASS_10_TEST_METADATA.filter(m => m.subject.toLowerCase() === currentAdminSubjectFilter.toLowerCase());

    let activeCount = 0;
    let inactiveCount = 0;
    let html = '';

    filteredMetadata.forEach(meta => {
        const test = testMap[meta.id] || {
            id: meta.id,
            title: meta.title,
            cls: 'Class 10',
            subject: meta.subject,
            duration_mins: 90,
            total_marks: 400,
            questions_count: 100,
            status: meta.defaultStatus || 'published'
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
                    <span class="meta-pill" style="font-size:11px; font-weight:700; color:var(--primary);">${meta.subject}</span>
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

    // Render Filter Tabs
    const tabsContainer = document.getElementById('admin-testseries-filter-tabs');
    if (tabsContainer) {
        const subjects = [
            { key: 'all', label: 'All Subjects', count: 49 },
            { key: 'Mathematics', label: 'Mathematics', count: 14 },
            { key: 'Science', label: 'Science', count: 13 },
            { key: 'History', label: 'History', count: 5 },
            { key: 'Politics', label: 'Politics', count: 5 },
            { key: 'Economics', label: 'Economics', count: 5 },
            { key: 'Geography', label: 'Geography', count: 7 }
        ];

        let tabsHtml = '';
        subjects.forEach(s => {
            const isSelected = (currentAdminSubjectFilter.toLowerCase() === s.key.toLowerCase());
            tabsHtml += `
                <button class="btn btn-sm ${isSelected ? 'btn-primary' : 'btn-outline'}" 
                        onclick="setAdminSubjectFilter('${s.key}')" 
                        style="font-size:12px; font-weight:700; padding:4px 12px; border-radius:20px; transition:all 0.15s ease;">
                    ${s.label} (${s.count})
                </button>
            `;
        });
        tabsContainer.innerHTML = tabsHtml;
    }

    // Update Sub-Header Badge & Info
    const subjBadge = document.getElementById('admin-testseries-subject-badge');
    const subjInfo = document.getElementById('admin-testseries-subject-info');
    if (subjBadge) {
        subjBadge.textContent = currentAdminSubjectFilter === 'all' 
            ? 'Class 10 All Subjects (49)' 
            : `Class 10 ${currentAdminSubjectFilter} (${filteredMetadata.length})`;
    }
    if (subjInfo) {
        subjInfo.textContent = currentAdminSubjectFilter === 'all'
            ? '49 Chapters • 4,900 NCERT Questions • Science, Mathematics & Social Science Assessment Bank'
            : `${filteredMetadata.length} Chapters • ${filteredMetadata.length * 100} NCERT Questions • Master Assessment Bank`;
    }

    // Update Bulk Toggle Button Labels
    const activateBtn = document.getElementById('admin-testseries-activate-btn');
    const deactivateBtn = document.getElementById('admin-testseries-deactivate-btn');
    const filterLabel = currentAdminSubjectFilter === 'all' ? 'All (49)' : `${currentAdminSubjectFilter} (${filteredMetadata.length})`;
    if (activateBtn) activateBtn.innerHTML = `🟢 Activate ${filterLabel}`;
    if (deactivateBtn) deactivateBtn.innerHTML = `🔴 Deactivate ${filterLabel}`;

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
        let totalAllActive = 0;
        ALL_CLASS_10_TEST_METADATA.forEach(m => {
            const t = testMap[m.id];
            const isPub = t ? (t.status === 'published' || t.status === 'active') : (m.defaultStatus === 'published');
            if (isPub) totalAllActive++;
        });
        dashStat.textContent = `${totalAllActive} / 35 Active`;
    }
}

// Single-Test Toggle
async function adminToggleTestStatus(testId, targetStatus) {
    let localTests = JSON.parse(localStorage.getItem('ec_test_series') || '[]');
    let testObj = localTests.find(t => t.id === testId);

    if (!testObj) {
        const meta = ALL_CLASS_10_TEST_METADATA.find(m => m.id === testId);
        testObj = {
            id: testId,
            title: meta ? meta.title : testId,
            cls: 'Class 10',
            subject: meta ? meta.subject : 'Science',
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

    // Cloud Database Persistence via Unified DBService
    if (typeof DBService !== 'undefined' && DBService.upsertTestSeries) {
        try {
            await DBService.upsertTestSeries(testObj);
        } catch (e) {
            console.warn('[AdminTestSeries] DBService update warning:', e);
        }
    }

    const friendlyName = testObj.title ? testObj.title.split(':')[0] : 'Test';
    showToast(`${friendlyName} marked as ${targetStatus === 'published' ? 'Active (Live)' : 'Inactive (Locked)'}!`, targetStatus === 'published' ? 'success' : 'danger');

    renderAdminTestSeriesView();
}

// Bulk Activate / Deactivate for current filtered subjects
async function adminBulkToggleTests(targetStatus) {
    let localTests = JSON.parse(localStorage.getItem('ec_test_series') || '[]');
    const localMap = {};
    localTests.forEach(t => { localMap[t.id] = t; });

    const filteredMetadata = (currentAdminSubjectFilter === 'all')
        ? ALL_CLASS_10_TEST_METADATA
        : ALL_CLASS_10_TEST_METADATA.filter(m => m.subject.toLowerCase() === currentAdminSubjectFilter.toLowerCase());

    const batch = [];
    filteredMetadata.forEach(meta => {
        let t = localMap[meta.id];
        if (!t) {
            t = {
                id: meta.id,
                title: meta.title,
                cls: 'Class 10',
                subject: meta.subject,
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

    // Cloud Database Persistence via Unified DBService
    if (typeof DBService !== 'undefined' && DBService.bulkUpsertTestSeries) {
        try {
            await DBService.bulkUpsertTestSeries(batch);
        } catch (e) {
            console.warn('[AdminTestSeries] DBService batch warning:', e);
        }
    }

    const scopeName = currentAdminSubjectFilter === 'all' ? 'All 35 assessments' : `All ${filteredMetadata.length} ${currentAdminSubjectFilter} assessments`;
    showToast(`${scopeName} have been ${targetStatus === 'published' ? 'Activated' : 'Deactivated'}!`, targetStatus === 'published' ? 'success' : 'danger');

    renderAdminTestSeriesView();
}

// Attach to window
if (typeof window !== 'undefined') {
    window.ALL_CLASS_10_TEST_METADATA = ALL_CLASS_10_TEST_METADATA;
    window.CLASS_10_SCIENCE_TEST_METADATA = CLASS_10_SCIENCE_TEST_METADATA;
    window.setAdminSubjectFilter = setAdminSubjectFilter;
    window.renderAdminTestSeriesView = renderAdminTestSeriesView;
    window.adminToggleTestStatus = adminToggleTestStatus;
    window.adminBulkToggleTests = adminBulkToggleTests;
}
