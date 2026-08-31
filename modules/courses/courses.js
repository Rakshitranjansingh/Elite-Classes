/* Elite Classes — Courses & Study Materials Module */

let cachedCoursesList = [];

// Render Class-Filtered Courses & Study Materials
async function renderStudentCourses() {
    const container = document.getElementById('st-courses-container');
    const heading = document.getElementById('st-courses-heading');
    if (!container || !currentStudent) return;

    heading.textContent = `Courses & Materials for ${currentStudent.cls}`;

    cachedCoursesList = await DBService.fetchCourses();
    
    // Filter courses matching student class or general
    const filtered = cachedCoursesList.filter(c => c.cls === currentStudent.cls || c.cls === 'All');

    if (filtered.length === 0) {
        container.innerHTML = `<div style="grid-column:1/-1; padding:30px; text-align:center; color:var(--text-muted);">No study materials published yet for ${currentStudent.cls}. Check back soon!</div>`;
        return;
    }

    let html = '';
    filtered.forEach(c => {
        const progress = studentStats.courseProgress[c.id] || 0;
        html += `
            <div class="learning-card">
                <div>
                    <div class="learning-card-header">
                        <div>
                            <span class="badge badge-primary">${c.subject}</span>
                            <span class="badge badge-info" style="margin-left:4px;">${c.cls}</span>
                        </div>
                        <span style="font-size:12px; font-weight:700; color:var(--primary);">${progress}% Complete</span>
                    </div>
                    <div class="learning-card-title">${c.title}</div>
                    <div class="learning-card-desc">${c.description || 'Comprehensive chapter modules and problem solving.'}</div>
                    
                    <div style="font-size:12px; color:var(--text-muted); margin-bottom:4px;">
                        <span>👨‍🏫 Instructor: <b>${c.instructor || 'Senior Faculty'}</b></span> • <span>📖 ${c.lessons_count || 10} Lessons</span>
                    </div>
                    
                    <div class="progress-bar-wrap">
                        <div class="progress-bar-fill" style="width:${progress}%;"></div>
                    </div>
                </div>

                <div style="display:flex; gap:8px; margin-top:12px;">
                    <button class="btn btn-primary btn-sm" style="flex:1;" onclick="updateCourseProgress('${c.id}', ${Math.min(100, progress + 25)})">
                        ${progress === 0 ? '▶ Start Learning' : progress >= 100 ? '✅ Completed' : '📖 Continue Lesson (+25%)'}
                    </button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Update and Persist Student Course Progress
async function updateCourseProgress(courseId, newProgress) {
    if (!currentStudent) return;

    studentStats.courseProgress[courseId] = newProgress;
    await DBService.saveStudentStats(currentStudent.id, studentStats);
    
    showToast(newProgress >= 100 ? '🎉 Congratulations! Course completed!' : `Progress updated to ${newProgress}%`, 'success');
    renderStudentCourses();
}

// Admin Helper: Submit New Course
async function submitNewCourse() {
    const title = document.getElementById('f-course-title').value.trim();
    const cls = document.getElementById('f-course-class').value;
    const subject = document.getElementById('f-course-subject').value.trim();
    const instructor = document.getElementById('f-course-instructor').value.trim();
    const lessons = parseInt(document.getElementById('f-course-lessons').value) || 10;
    const desc = document.getElementById('f-course-desc').value.trim();

    if (!title || !subject) {
        showToast('Please enter Course Title and Subject', 'error');
        return;
    }

    const courseObj = {
        id: 'c_' + Date.now(),
        title, cls, subject, instructor, lessons_count: lessons, description: desc
    };

    await DBService.upsertCourse(courseObj);
    closeModal('addCourseModal');
    
    showToast('Course published successfully!', 'success');
    renderStudentCourses();
}
