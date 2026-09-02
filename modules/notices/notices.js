/* Elite Classes — Notice Board & Announcement Slides Module */

let cachedNoticesList = [];

// Render Right-to-Left Scrolling Notice Board Slides
async function renderStudentNoticeSlides() {
    const track = document.getElementById('student-notice-slides-track');
    if (!track) return;

    cachedNoticesList = await DBService.fetchNoticeList();
    if (!cachedNoticesList || cachedNoticesList.length === 0) {
        track.innerHTML = `
            <div class="notice-card-slide">
                <span class="notice-card-slide-badge">ANNOUNCEMENT</span>
                <div>📢 Welcome to Elite Classes Portal! Active coaching announcements will appear here.</div>
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

// Admin Helper: Submit New Notice Slide
async function submitNewNotice() {
    const content = document.getElementById('f-notice-content').value.trim();
    if (!content) {
        showToast('Please enter notice content', 'error');
        return;
    }

    await DBService.insertNotice(content);
    closeModal('postNoticeModal');
    document.getElementById('f-notice-content').value = '';
    
    showToast('Notice published successfully!', 'success');
    await renderStudentNoticeSlides();
}
