/**
 * Elite Classes — Admin Courses & Curriculum Switchboard Controller
 * Provides active/inactive state controls for Class 10 Science course chapters & subjects.
 */

const ADMIN_SCIENCE_CHAPTERS = [
    { id: 'c10_sci_ch1', num: 1, title: 'Chemical Reactions and Equations', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/science/course_player.html?chapter=1' },
    { id: 'c10_sci_ch2', num: 2, title: 'Acids, Bases and Salts', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/science/course_player.html?chapter=2' },
    { id: 'c10_sci_ch3', num: 3, title: 'Metals and Non-Metals', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/science/course_player.html?chapter=3' },
    { id: 'c10_sci_ch4', num: 4, title: 'Carbon and its Compounds', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/science/course_player.html?chapter=4' },
    { id: 'c10_sci_ch5', num: 5, title: 'Life Processes', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/science/course_player.html?chapter=5' },
    { id: 'c10_sci_ch6', num: 6, title: 'Control and Coordination', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/science/course_player.html?chapter=6' },
    { id: 'c10_sci_ch7', num: 7, title: 'How do Organisms Reproduce?', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/science/course_player.html?chapter=7' },
    { id: 'c10_sci_ch8', num: 8, title: 'Heredity', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/science/course_player.html?chapter=8' },
    { id: 'c10_sci_ch9', num: 9, title: 'Light – Reflection and Refraction', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/science/course_player.html?chapter=9' },
    { id: 'c10_sci_ch10', num: 10, title: 'The Human Eye and Colourful World', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/science/course_player.html?chapter=10' },
    { id: 'c10_sci_ch11', num: 11, title: 'Electricity', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/science/course_player.html?chapter=11' },
    { id: 'c10_sci_ch12', num: 12, title: 'Magnetic Effects of Electric Current', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/science/course_player.html?chapter=12' },
    { id: 'c10_sci_ch13', num: 13, title: 'Our Environment', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/science/course_player.html?chapter=13' }
];

const ADMIN_ECONOMICS_CHAPTERS = [
    { id: 'c10_econ_ch1', num: 1, title: 'Development', cls: 'Class 10', subject: 'Economics', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/economics/course_player.html?chapter=1' },
    { id: 'c10_econ_ch2', num: 2, title: 'Sectors of the Indian Economy', cls: 'Class 10', subject: 'Economics', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/economics/course_player.html?chapter=2' },
    { id: 'c10_econ_ch3', num: 3, title: 'Money and Credit', cls: 'Class 10', subject: 'Economics', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/economics/course_player.html?chapter=3' },
    { id: 'c10_econ_ch4', num: 4, title: 'Globalisation and the Indian Economy', cls: 'Class 10', subject: 'Economics', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/economics/course_player.html?chapter=4' },
    { id: 'c10_econ_ch5', num: 5, title: 'Consumer Rights', cls: 'Class 10', subject: 'Economics', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/economics/course_player.html?chapter=5' }
];

const ADMIN_GEOGRAPHY_CHAPTERS = [
    { id: 'c10_geog_ch1', num: 1, title: 'Resources and Development', cls: 'Class 10', subject: 'Geography', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/geography/course_player.html?chapter=1' },
    { id: 'c10_geog_ch2', num: 2, title: 'Forest and Wildlife Resources', cls: 'Class 10', subject: 'Geography', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/geography/course_player.html?chapter=2' },
    { id: 'c10_geog_ch3', num: 3, title: 'Water Resources', cls: 'Class 10', subject: 'Geography', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/geography/course_player.html?chapter=3' },
    { id: 'c10_geog_ch4', num: 4, title: 'Agriculture', cls: 'Class 10', subject: 'Geography', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/geography/course_player.html?chapter=4' },
    { id: 'c10_geog_ch5', num: 5, title: 'Minerals and Energy Resources', cls: 'Class 10', subject: 'Geography', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/geography/course_player.html?chapter=5' },
    { id: 'c10_geog_ch6', num: 6, title: 'Manufacturing Industries', cls: 'Class 10', subject: 'Geography', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/geography/course_player.html?chapter=6' },
    { id: 'c10_geog_ch7', num: 7, title: 'Lifelines of National Economy', cls: 'Class 10', subject: 'Geography', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/geography/course_player.html?chapter=7' }
];

const ADMIN_HISTORY_CHAPTERS = [
    { id: 'c10_hist_ch1', num: 1, title: 'The Rise of Nationalism in Europe', cls: 'Class 10', subject: 'History', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/history/course_player.html?chapter=1' },
    { id: 'c10_hist_ch2', num: 2, title: 'Nationalism in India', cls: 'Class 10', subject: 'History', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/history/course_player.html?chapter=2' },
    { id: 'c10_hist_ch3', num: 3, title: 'The Making of a Global World', cls: 'Class 10', subject: 'History', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/history/course_player.html?chapter=3' },
    { id: 'c10_hist_ch4', num: 4, title: 'The Age of Industrialisation', cls: 'Class 10', subject: 'History', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/history/course_player.html?chapter=4' },
    { id: 'c10_hist_ch5', num: 5, title: 'Print Culture and the Modern World', cls: 'Class 10', subject: 'History', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/history/course_player.html?chapter=5' }
];

const ADMIN_POLITICS_CHAPTERS = [
    { id: 'c10_pol_ch1', num: 1, title: 'Power-sharing', cls: 'Class 10', subject: 'Politics', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/politics/course_player.html?chapter=1' },
    { id: 'c10_pol_ch2', num: 2, title: 'Federalism', cls: 'Class 10', subject: 'Politics', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/politics/course_player.html?chapter=2' },
    { id: 'c10_pol_ch3', num: 3, title: 'Gender, Religion and Caste', cls: 'Class 10', subject: 'Politics', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/politics/course_player.html?chapter=3' },
    { id: 'c10_pol_ch4', num: 4, title: 'Political Parties', cls: 'Class 10', subject: 'Politics', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/politics/course_player.html?chapter=4' },
    { id: 'c10_pol_ch5', num: 5, title: 'Outcomes of Democracy', cls: 'Class 10', subject: 'Politics', modulesCount: 20, questionsCount: 200, previewUrl: 'modules/course/class10/politics/course_player.html?chapter=5' }
];

const ALL_ADMIN_CHAPTERS = [
    ...ADMIN_SCIENCE_CHAPTERS,
    ...ADMIN_ECONOMICS_CHAPTERS,
    ...ADMIN_GEOGRAPHY_CHAPTERS,
    ...ADMIN_HISTORY_CHAPTERS,
    ...ADMIN_POLITICS_CHAPTERS
];

function getCourseStatusMap() {
    try {
        return JSON.parse(localStorage.getItem('ec_course_status_map') || '{}');
    } catch (e) {
        return {};
    }
}

function saveCourseStatusMap(statusMap) {
    localStorage.setItem('ec_course_status_map', JSON.stringify(statusMap));
}

function isChapterActive(chId) {
    const statusMap = getCourseStatusMap();
    if (!chId) return true;
    if (chId.startsWith('c10_econ_')) {
        return statusMap[chId] !== false && statusMap['class10_economics'] !== false;
    }
    if (chId.startsWith('c10_geog_')) {
        return statusMap[chId] !== false && statusMap['class10_geography'] !== false;
    }
    if (chId.startsWith('c10_hist_')) {
        return statusMap[chId] !== false && statusMap['class10_history'] !== false;
    }
    if (chId.startsWith('c10_pol_')) {
        return statusMap[chId] !== false && statusMap['class10_politics'] !== false;
    }
    return statusMap[chId] !== false && statusMap['class10_science'] !== false;
}

function adminToggleCourseChapter(chId) {
    const statusMap = getCourseStatusMap();
    const currentState = statusMap[chId] !== false;
    const newState = !currentState;
    statusMap[chId] = newState;
    saveCourseStatusMap(statusMap);

    const ch = ALL_ADMIN_CHAPTERS.find(c => c.id === chId);
    const title = ch ? ch.title : chId;

    if (typeof showToast === 'function') {
        showToast(`Chapter "${title}" is now ${newState ? '🟢 ACTIVE' : '🔴 INACTIVE'} for students.`, newState ? 'success' : 'danger');
    }

    renderAdminCoursesView();
    updateCourseDashboardStat();
}

function adminBulkToggleCourses(status) {
    const activate = (status === 'active' || status === 'published');
    const statusMap = getCourseStatusMap();
    ALL_ADMIN_CHAPTERS.forEach(ch => {
        statusMap[ch.id] = activate;
    });
    statusMap['class10_science'] = activate;
    statusMap['class10_economics'] = activate;
    statusMap['class10_geography'] = activate;
    statusMap['class10_history'] = activate;
    statusMap['class10_politics'] = activate;
    saveCourseStatusMap(statusMap);

    if (typeof showToast === 'function') {
        showToast(`All ${ALL_ADMIN_CHAPTERS.length} course chapters are now ${activate ? '🟢 ACTIVE' : '🔴 INACTIVE'}.`, activate ? 'success' : 'danger');
    }

    renderAdminCoursesView();
    updateCourseDashboardStat();
}

function renderAdminCoursesView() {
    const tbody = document.getElementById('admin-courses-tbody');
    if (!tbody) return;

    let activeCount = 0;
    const rowsHtml = ALL_ADMIN_CHAPTERS.map(ch => {
        const active = isChapterActive(ch.id);
        if (active) activeCount++;

        const statusPill = active 
            ? `<span class="badge badge-success" style="font-size:11.5px; padding:4px 10px;">🟢 Live & Active</span>`
            : `<span class="badge badge-danger" style="font-size:11.5px; padding:4px 10px;">🔴 Inactive / Disabled</span>`;

        const actionBtn = active
            ? `<button class="btn btn-sm btn-outline" style="border-color:#ef4444; color:#dc2626; font-weight:700; padding:4px 10px; font-size:11.5px;" onclick="adminToggleCourseChapter('${ch.id}')">
                   Deactivate
               </button>`
            : `<button class="btn btn-sm btn-outline" style="border-color:#10b981; color:#059669; font-weight:700; padding:4px 10px; font-size:11.5px;" onclick="adminToggleCourseChapter('${ch.id}')">
                   Activate 🟢
               </button>`;

        const previewLink = ch.previewUrl || `modules/course/class10/science/course_player.html?chapter=${ch.num}`;

        return `
            <tr>
                <td style="text-align:center; font-weight:800; color:var(--text-muted);">
                    ${String(ch.num).padStart(2, '0')}
                </td>
                <td>
                    <div style="font-weight:700; color:var(--text);">${ch.title}</div>
                    <div style="font-size:11.5px; color:var(--text-muted); margin-top:2px;">ID: ${ch.id}</div>
                </td>
                <td>
                    <span class="badge badge-primary">${ch.cls}</span>
                    <span class="badge badge-secondary" style="margin-left:4px; ${
                        ch.subject === 'Economics' ? 'background:#059669;' : 
                        ch.subject === 'Geography' ? 'background:#0284c7;' : 
                        ch.subject === 'History' ? 'background:#b45309;' : 
                        ch.subject === 'Politics' ? 'background:#4338ca;' : ''
                    }">${ch.subject}</span>
                </td>
                <td>
                    <div style="font-size:12.5px; font-weight:600; color:var(--text);">
                        📘 ${ch.modulesCount} Modules • 📝 ${ch.questionsCount} MCQs
                    </div>
                    <div style="font-size:11px; color:var(--text-muted);">70% Progressive Mastery Gate</div>
                </td>
                <td style="text-align:center;">
                    ${statusPill}
                </td>
                <td style="text-align:center;">
                    <div style="display:flex; justify-content:center; gap:8px;">
                        ${actionBtn}
                        <a href="${previewLink}" target="_blank" class="btn btn-sm btn-outline" style="padding:4px 8px; font-size:11px;" title="Preview in Course Player">
                            Preview ↗
                        </a>
                    </div>
                </td>
            </tr>
        `;
    }).join('');

    tbody.innerHTML = rowsHtml;

    // Update Counter Badges
    const badge = document.getElementById('admin-courses-status-badge');
    if (badge) {
        badge.textContent = `${activeCount} of ${ALL_ADMIN_CHAPTERS.length} Chapters Active`;
    }
}

function updateCourseDashboardStat() {
    let activeCount = 0;
    ALL_ADMIN_CHAPTERS.forEach(ch => {
        if (isChapterActive(ch.id)) activeCount++;
    });

    const statEl = document.getElementById('dash-stat-courses');
    if (statEl) {
        statEl.textContent = `${activeCount} Active`;
    }
}

// Auto-run when DOM is ready
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        updateCourseDashboardStat();
    });
}

