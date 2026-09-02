/* Elite Classes — Notice Board & Announcement Slides Module */

let cachedNoticesList = [];

// Render Right-to-Left Scrolling Notice Board Slides (Filtered for Students)
async function renderStudentNoticeSlides() {
    const track = document.getElementById('student-notice-slides-track');
    if (!track) return;

    if (typeof DBService !== 'undefined' && typeof DBService.fetchNoticeList === 'function') {
        cachedNoticesList = await DBService.fetchNoticeList('students');
    } else {
        const all = JSON.parse(localStorage.getItem('ec_notices') || '[]');
        cachedNoticesList = all.filter(n => (n.target_audience || 'all') === 'students' || (n.target_audience || 'all') === 'all');
    }

    if (!cachedNoticesList || cachedNoticesList.length === 0) {
        track.innerHTML = `
            <div class="notice-card-slide">
                <span class="notice-card-slide-badge">ANNOUNCEMENT</span>
                <div>📢 Welcome to Elite Classes Portal! Active student announcements will appear here.</div>
            </div>
        `;
        return;
    }

    // Render continuous Right-to-Left sliding cards
    let slidesHtml = '';
    const badges = ['ANNOUNCEMENT', 'OLYMPIAD', 'EXAM SCHEDULE', 'DOUBT SESSION', 'NOTICE'];

    // Duplicate list items to create seamless scrolling loop
    const displayNotices = [...cachedNoticesList, ...cachedNoticesList];

    displayNotices.forEach((n, idx) => {
        let badge = badges[idx % badges.length];
        let text = n.content;

        const match = text.match(/^\[(.*?)\]\s*(.*)$/);
        if (match) {
            badge = match[1];
            text = match[2];
        }

        slidesHtml += `
            <div class="notice-card-slide">
                <span class="notice-card-slide-badge">${badge}</span>
                <div>${text}</div>
            </div>
        `;
    });

    track.innerHTML = slidesHtml;
}

// Admin Helper: Submit New Notice Slide with Target Audience
async function submitNewNotice() {
    const content = document.getElementById('f-notice-content')?.value.trim();
    const audience = document.getElementById('f-notice-audience')?.value || 'all';

    if (!content) {
        showToast('Please enter notice content', 'error');
        return;
    }

    if (typeof DBService !== 'undefined' && typeof DBService.insertNotice === 'function') {
        await DBService.insertNotice(content, audience);
    } else {
        const list = JSON.parse(localStorage.getItem('ec_notices') || '[]');
        list.unshift({
            id: 'not_' + Date.now(),
            content: content,
            target_audience: audience,
            is_active: true,
            created_at: new Date().toISOString()
        });
        localStorage.setItem('ec_notices', JSON.stringify(list));
    }

    closeModal('postNoticeModal');
    if (document.getElementById('f-notice-content')) document.getElementById('f-notice-content').value = '';
    
    const audLabel = audience === 'students' ? 'Students Portal' : audience === 'staff' ? 'Staff & Faculty Portal' : 'All Portals';
    showToast(`Notice published successfully to ${audLabel}!`, 'success');
    if (typeof renderStudentNoticeSlides === 'function') await renderStudentNoticeSlides();
}
