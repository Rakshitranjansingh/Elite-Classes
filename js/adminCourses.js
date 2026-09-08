/**
 * Elite Classes — Admin Courses & Curriculum Switchboard Controller
 * Provides active/inactive state controls for Class 10 Science course chapters & subjects.
 */

const ADMIN_SCIENCE_CHAPTERS = [
    { id: 'c10_sci_ch1', num: 1, title: 'Chemical Reactions and Equations', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200 },
    { id: 'c10_sci_ch2', num: 2, title: 'Acids, Bases and Salts', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200 },
    { id: 'c10_sci_ch3', num: 3, title: 'Metals and Non-Metals', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200 },
    { id: 'c10_sci_ch4', num: 4, title: 'Carbon and its Compounds', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200 },
    { id: 'c10_sci_ch5', num: 5, title: 'Life Processes', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200 },
    { id: 'c10_sci_ch6', num: 6, title: 'Control and Coordination', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200 },
    { id: 'c10_sci_ch7', num: 7, title: 'How do Organisms Reproduce?', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200 },
    { id: 'c10_sci_ch8', num: 8, title: 'Heredity', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200 },
    { id: 'c10_sci_ch9', num: 9, title: 'Light – Reflection and Refraction', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200 },
    { id: 'c10_sci_ch10', num: 10, title: 'The Human Eye and Colourful World', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200 },
    { id: 'c10_sci_ch11', num: 11, title: 'Electricity', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200 },
    { id: 'c10_sci_ch12', num: 12, title: 'Magnetic Effects of Electric Current', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200 },
    { id: 'c10_sci_ch13', num: 13, title: 'Our Environment', cls: 'Class 10', subject: 'Science', modulesCount: 20, questionsCount: 200 }
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
    return statusMap[chId] !== false && statusMap['class10_science'] !== false;
}

function adminToggleCourseChapter(chId) {
    const statusMap = getCourseStatusMap();
    const currentState = statusMap[chId] !== false;
    const newState = !currentState;
    statusMap[chId] = newState;
    saveCourseStatusMap(statusMap);

    const ch = ADMIN_SCIENCE_CHAPTERS.find(c => c.id === chId);
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
    ADMIN_SCIENCE_CHAPTERS.forEach(ch => {
        statusMap[ch.id] = activate;
    });
    statusMap['class10_science'] = activate;
    saveCourseStatusMap(statusMap);

    if (typeof showToast === 'function') {
        showToast(`All 13 Science course chapters are now ${activate ? '🟢 ACTIVE' : '🔴 INACTIVE'}.`, activate ? 'success' : 'danger');
    }

    renderAdminCoursesView();
    updateCourseDashboardStat();
}

function renderAdminCoursesView() {
    const tbody = document.getElementById('admin-courses-tbody');
    if (!tbody) return;

    let activeCount = 0;
    const rowsHtml = ADMIN_SCIENCE_CHAPTERS.map(ch => {
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
                    <span class="badge badge-secondary" style="margin-left:4px;">${ch.subject}</span>
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
                        <a href="modules/course/class10/science/course_player.html?chapter=${ch.num}" target="_blank" class="btn btn-sm btn-outline" style="padding:4px 8px; font-size:11px;" title="Preview in Course Player">
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
        badge.textContent = `${activeCount} of 13 Chapters Active`;
    }
}

function updateCourseDashboardStat() {
    let activeCount = 0;
    ADMIN_SCIENCE_CHAPTERS.forEach(ch => {
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
