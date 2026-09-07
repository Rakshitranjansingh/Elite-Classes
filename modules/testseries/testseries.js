/* =========================================================================
   ELITE CLASSES — TEST SERIES ROUTER & CONTROLLER (testseries.js)
   Dynamic Class-Scoped Router for Student Portal (Class 10, Class 9, etc.)
   Executive Dark / Slate-Blue Theme Aligned
   ========================================================================= */

let cachedTestSeriesList = [];
let currentSelectedCbtClass = 'Class 10';
let currentSelectedCbtSubject = 'All';

// Dynamic Router for Student Test Series
async function renderStudentTestSeries() {
    const container = document.getElementById('st-tests-container') || document.getElementById('st-testseries-container');
    if (!container) return;

    // Detect student's registered class from session
    let studentCls = 'Class 10';
    if (typeof currentStudent !== 'undefined' && currentStudent && currentStudent.cls) {
        studentCls = currentStudent.cls;
    } else {
        try {
            const stored = JSON.parse(localStorage.getItem('ec_active_student'));
            if (stored && stored.cls) studentCls = stored.cls;
            else if (localStorage.getItem('ec_student_class')) studentCls = localStorage.getItem('ec_student_class');
        } catch (e) {}
    }

    currentSelectedCbtClass = studentCls;

    // If container is st-tests-container (in student_home.html), inject the full module structure
    if (container.id === 'st-tests-container') {
        container.innerHTML = buildTestSeriesPortalMarkup(currentSelectedCbtClass);
        renderTestCardsForClass(currentSelectedCbtClass);
    } else {
        // Container is already inside testseries.html
        updateClassHeader(currentSelectedCbtClass);
        renderTestCardsForClass(currentSelectedCbtClass);
    }
}

// Build the top banner, search, and container for student_home.html
function buildTestSeriesPortalMarkup(activeClass) {
    const isCls10 = (activeClass === 'Class 10');

    return `
        <div id="st-tab-section-testseries" class="st-tab-section" style="display:block;">
            <!-- 1. HEADER BANNER & STATS PALLET -->
            <div class="card" style="margin-bottom:20px; border-left:4px solid var(--primary); background:linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);">
                <div class="card-body" style="padding:22px 24px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
                        <div>
                            <div style="display:flex; align-items:center; gap:10px; margin-bottom:6px;">
                                <span class="badge badge-primary" id="cbt-class-badge" style="font-size:11.5px; padding:4px 10px;">${activeClass}</span>
                                <span class="badge badge-purple" style="font-size:11.5px; padding:4px 10px;">🧪 CBT Engine Active</span>
                                <span class="badge badge-success" id="cbt-status-badge" style="font-size:11.5px; padding:4px 10px;">🟢 Live Assessments</span>
                            </div>
                            <h2 style="font-size:20px; font-weight:800; color:var(--text); margin:0 0 4px;" id="st-tests-heading">
                                <span id="cbt-class-title-text">${activeClass}</span>: Online Test Series & Chapter-Wise CBT Mock Exams
                            </h2>
                            <p style="font-size:13px; color:var(--text-muted); margin:0;" id="cbt-class-subtitle">
                                ${isCls10 
                                    ? 'NCERT aligned computer-based assessments with real-time timers, negative marking, instant scorecards, and live class rankings.' 
                                    : `Coaching assessments and scheduled chapter tests for ${activeClass}.`}
                            </p>
                        </div>

                        <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
                            <a href="modules/testseries/data/class10/testseries_class_10.html" id="cbt-hub-link-btn" class="btn btn-outline btn-sm" style="text-decoration:none; font-weight:700; font-size:12px; padding:6px 14px; ${isCls10 ? '' : 'display:none;'}">
                                🏆 Class 10 Leadership Hub →
                            </a>
                            <div style="text-align:right;" id="cbt-student-stats-pill">
                                <div style="font-size:11px; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Enrolled Class</div>
                                <div style="font-size:16px; font-weight:800; color:var(--primary);">${activeClass}</div>
                            </div>
                        </div>
                    </div>

                    <!-- FILTERS & SEARCH ROW -->
                    <div style="display:flex; gap:12px; margin-top:18px; align-items:center; flex-wrap:wrap; border-top:1px solid var(--border-light); padding-top:16px;">
                        <div class="search-input" style="max-width:300px; flex:1;">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-width="2"/></svg>
                            <input type="text" id="cbt-search-filter" placeholder="Search tests, chapters or topics..." oninput="filterTestSeriesCards()">
                        </div>

                        <div style="display:flex; gap:6px; align-items:center; flex-wrap:wrap;" id="cbt-subject-filter-chips">
                            <button class="btn btn-sm btn-primary cbt-subj-pill active" onclick="selectCbtSubjectFilter('All', this)" style="border-radius:20px; padding:5px 12px; font-size:11.5px;">📚 All</button>
                            <button class="btn btn-sm btn-outline cbt-subj-pill" onclick="selectCbtSubjectFilter('Science', this)" style="border-radius:20px; padding:5px 12px; font-size:11.5px;">🧪 Science</button>
                            <button class="btn btn-sm btn-outline cbt-subj-pill" onclick="selectCbtSubjectFilter('Mathematics', this)" style="border-radius:20px; padding:5px 12px; font-size:11.5px;">📐 Math</button>
                            <button class="btn btn-sm btn-outline cbt-subj-pill" onclick="selectCbtSubjectFilter('History', this)" style="border-radius:20px; padding:5px 12px; font-size:11.5px;">🏰 History</button>
                            <button class="btn btn-sm btn-outline cbt-subj-pill" onclick="selectCbtSubjectFilter('Geography', this)" style="border-radius:20px; padding:5px 12px; font-size:11.5px;">🗺️ Geography</button>
                            <button class="btn btn-sm btn-outline cbt-subj-pill" onclick="selectCbtSubjectFilter('Politics', this)" style="border-radius:20px; padding:5px 12px; font-size:11.5px;">⚖️ Politics</button>
                            <button class="btn btn-sm btn-outline cbt-subj-pill" onclick="selectCbtSubjectFilter('Economics', this)" style="border-radius:20px; padding:5px 12px; font-size:11.5px;">📈 Economics</button>
                            <button class="btn btn-sm btn-outline cbt-subj-pill" onclick="selectCbtSubjectFilter('English', this)" style="border-radius:20px; padding:5px 12px; font-size:11.5px;">📖 English</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2. TEST SERIES CARDS CONTAINER -->
            <div class="content-cards-grid" id="st-testseries-container" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(320px, 1fr)); gap:18px;">
                <!-- Dynamically rendered cards -->
            </div>
        </div>
    `;
}

// Update Header Titles and Badges
function updateClassHeader(cls) {
    const badge = document.getElementById('cbt-class-badge');
    if (badge) badge.textContent = cls;

    const titleText = document.getElementById('cbt-class-title-text');
    if (titleText) titleText.textContent = cls;

    const subtitle = document.getElementById('cbt-class-subtitle');
    if (subtitle) {
        if (cls === 'Class 10') {
            subtitle.textContent = 'NCERT aligned computer-based assessments with real-time timers, negative marking, instant scorecards, and live class rankings.';
        } else {
            subtitle.textContent = `Coaching assessments and scheduled chapter tests for ${cls}.`;
        }
    }

    const hubBtn = document.getElementById('cbt-hub-link-btn');
    if (hubBtn) {
        hubBtn.style.display = (cls === 'Class 10') ? 'inline-block' : 'none';
    }
}

// Switch subject filter
function selectCbtSubjectFilter(subject, btn) {
    currentSelectedCbtSubject = subject;

    const subjPills = document.querySelectorAll('.cbt-subj-pill');
    subjPills.forEach(p => {
        if (p === btn) p.className = 'btn btn-sm btn-primary cbt-subj-pill active';
        else p.className = 'btn btn-sm btn-outline cbt-subj-pill';
    });

    filterTestSeriesCards();
}

// Client-side search and subject filter
function filterTestSeriesCards() {
    const searchInput = document.getElementById('cbt-search-filter');
    const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
    const cards = document.querySelectorAll('#st-testseries-container .cbt-card');

    cards.forEach(card => {
        const cardSubject = card.getAttribute('data-subject') || '';
        const cardTitle = (card.getAttribute('data-title') || card.textContent || '').toLowerCase();

        const matchesSubject = (currentSelectedCbtSubject === 'All' || cardSubject.toLowerCase() === currentSelectedCbtSubject.toLowerCase());
        const matchesQuery = (!query || cardTitle.includes(query));

        if (matchesSubject && matchesQuery) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Render cards according to selected class
async function renderTestCardsForClass(cls) {
    const grid = document.getElementById('st-testseries-container');
    if (!grid) return;

    if (cls === 'Class 10') {
        grid.innerHTML = getClass10SubjectCardsHtml();
    } else {
        grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:30px;"><span class="spinner"></span> Loading ${cls} assessments...</div>`;
        await renderGenericClassTestSeries(grid, cls);
    }
}

// Class 10 Full Suite of Active Subject Cards
function getClass10SubjectCardsHtml() {
    return `
        <!-- CARD 1: SCIENCE -->
        <div class="card cbt-card" data-subject="Science" data-class="Class 10" data-title="Science Chemical Reactions Acids Metals Life Processes Light Electricity" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between; gap:14px; border:1px solid var(--border); transition:transform 0.2s, box-shadow 0.2s;">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span class="badge badge-success" style="font-size:10.5px;">🟢 Active & Live</span>
                    <span class="badge badge-purple" style="font-size:10.5px;">13 Chapters</span>
                </div>
                <h3 style="font-size:17px; font-weight:800; color:var(--text); margin:0 0 6px; display:flex; align-items:center; gap:8px;">
                    🧪 Science
                </h3>
                <p style="font-size:12.5px; color:var(--text-muted); margin:0 0 12px; line-height:1.5;">
                    Chemical Reactions, Acids & Bases, Metals, Carbon, Life Processes, Light, Electricity & Magnetism.
                </p>
                <div style="display:flex; gap:6px; flex-wrap:wrap; font-size:11px; color:var(--text-muted);">
                    <span class="badge badge-outline">1300 Questions</span>
                    <span class="badge badge-outline">400 Marks / Test</span>
                    <span class="badge badge-outline">Negative Marking</span>
                </div>
            </div>
            <div>
                <a href="modules/testseries/data/class10/science/science_10.html" class="btn btn-primary btn-sm" style="text-decoration:none; font-weight:700; width:100%; text-align:center; padding:9px 12px; display:block;">
                    Open Science Tests →
                </a>
            </div>
        </div>

        <!-- CARD 2: MATHEMATICS -->
        <div class="card cbt-card" data-subject="Mathematics" data-class="Class 10" data-title="Mathematics Real Numbers Polynomials Triangles Trigonometry Statistics Surface Areas Visual Diagrams" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between; gap:14px; border:1px solid var(--border); transition:transform 0.2s, box-shadow 0.2s;">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span class="badge badge-success" style="font-size:10.5px;">🟢 Active & Live</span>
                    <span class="badge badge-primary" style="font-size:10.5px;">14 Chapters</span>
                </div>
                <h3 style="font-size:17px; font-weight:800; color:var(--text); margin:0 0 6px; display:flex; align-items:center; gap:8px;">
                    📐 Mathematics
                </h3>
                <p style="font-size:12.5px; color:var(--text-muted); margin:0 0 12px; line-height:1.5;">
                    Real Numbers, Polynomials, Linear Equations, Triangles, Trigonometry, Statistics & Surface Areas with Visual SVG Diagrams.
                </p>
                <div style="display:flex; gap:6px; flex-wrap:wrap; font-size:11px; color:var(--text-muted);">
                    <span class="badge badge-outline">1400 Questions</span>
                    <span class="badge badge-outline">Visual Diagrams</span>
                    <span class="badge badge-outline">400 Marks / Test</span>
                </div>
            </div>
            <div>
                <a href="modules/testseries/data/class10/mathematics/mathematics_10.html" class="btn btn-primary btn-sm" style="text-decoration:none; font-weight:700; width:100%; text-align:center; padding:9px 12px; display:block;">
                    Open Mathematics Tests →
                </a>
            </div>
        </div>

        <!-- CARD 3: HISTORY -->
        <div class="card cbt-card" data-subject="History" data-class="Class 10" data-title="History Nationalism in Europe Nationalism in India Global World Age of Industrialisation Print Culture" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between; gap:14px; border:1px solid var(--border); transition:transform 0.2s, box-shadow 0.2s;">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span class="badge badge-success" style="font-size:10.5px;">🟢 Active & Live</span>
                    <span class="badge badge-primary" style="font-size:10.5px;">5 Chapters</span>
                </div>
                <h3 style="font-size:17px; font-weight:800; color:var(--text); margin:0 0 6px; display:flex; align-items:center; gap:8px;">
                    🏰 History
                </h3>
                <p style="font-size:12.5px; color:var(--text-muted); margin:0 0 12px; line-height:1.5;">
                    India and the Contemporary World - II. Rise of Nationalism in Europe & India, Global World, and Print Culture.
                </p>
                <div style="display:flex; gap:6px; flex-wrap:wrap; font-size:11px; color:var(--text-muted);">
                    <span class="badge badge-outline">500 Questions</span>
                    <span class="badge badge-outline">Timeline & Chronology</span>
                    <span class="badge badge-outline">400 Marks / Test</span>
                </div>
            </div>
            <div>
                <a href="modules/testseries/data/class10/history/history_10.html" class="btn btn-primary btn-sm" style="text-decoration:none; font-weight:700; width:100%; text-align:center; padding:9px 12px; display:block;">
                    Open History Tests →
                </a>
            </div>
        </div>

        <!-- CARD 4: GEOGRAPHY -->
        <div class="card cbt-card" data-subject="Geography" data-class="Class 10" data-title="Geography Resources Development Forest Wildlife Water Agriculture Minerals Energy Manufacturing Lifelines" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between; gap:14px; border:1px solid var(--border); transition:transform 0.2s, box-shadow 0.2s;">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span class="badge badge-success" style="font-size:10.5px;">🟢 Active & Live</span>
                    <span class="badge badge-primary" style="font-size:10.5px;">7 Chapters</span>
                </div>
                <h3 style="font-size:17px; font-weight:800; color:var(--text); margin:0 0 6px; display:flex; align-items:center; gap:8px;">
                    🗺️ Geography
                </h3>
                <p style="font-size:12.5px; color:var(--text-muted); margin:0 0 12px; line-height:1.5;">
                    Contemporary India - II. Resources, Forest, Water, Agriculture, Minerals, Energy, Manufacturing & Lifelines.
                </p>
                <div style="display:flex; gap:6px; flex-wrap:wrap; font-size:11px; color:var(--text-muted);">
                    <span class="badge badge-outline">700 Questions</span>
                    <span class="badge badge-outline">Maps & Concepts</span>
                    <span class="badge badge-outline">400 Marks / Test</span>
                </div>
            </div>
            <div>
                <a href="modules/testseries/data/class10/geography/geography_10.html" class="btn btn-primary btn-sm" style="text-decoration:none; font-weight:700; width:100%; text-align:center; padding:9px 12px; display:block;">
                    Open Geography Tests →
                </a>
            </div>
        </div>

        <!-- CARD 5: POLITICS -->
        <div class="card cbt-card" data-subject="Politics" data-class="Class 10" data-title="Politics Civics Power Sharing Federalism Gender Religion Caste Political Parties Outcomes Democracy" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between; gap:14px; border:1px solid var(--border); transition:transform 0.2s, box-shadow 0.2s;">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span class="badge badge-success" style="font-size:10.5px;">🟢 Active & Live</span>
                    <span class="badge badge-primary" style="font-size:10.5px;">5 Chapters</span>
                </div>
                <h3 style="font-size:17px; font-weight:800; color:var(--text); margin:0 0 6px; display:flex; align-items:center; gap:8px;">
                    ⚖️ Politics (Civics)
                </h3>
                <p style="font-size:12.5px; color:var(--text-muted); margin:0 0 12px; line-height:1.5;">
                    Democratic Politics - II. Power-sharing, Federalism, Gender, Religion & Caste, Political Parties, and Outcomes.
                </p>
                <div style="display:flex; gap:6px; flex-wrap:wrap; font-size:11px; color:var(--text-muted);">
                    <span class="badge badge-outline">500 Questions</span>
                    <span class="badge badge-outline">Case-Studies</span>
                    <span class="badge badge-outline">400 Marks / Test</span>
                </div>
            </div>
            <div>
                <a href="modules/testseries/data/class10/politics/politics_10.html" class="btn btn-primary btn-sm" style="text-decoration:none; font-weight:700; width:100%; text-align:center; padding:9px 12px; display:block;">
                    Open Politics Tests →
                </a>
            </div>
        </div>

        <!-- CARD 6: ECONOMICS -->
        <div class="card cbt-card" data-subject="Economics" data-class="Class 10" data-title="Economics Development Sectors Indian Economy Money Credit Globalisation Consumer Rights" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between; gap:14px; border:1px solid var(--border); transition:transform 0.2s, box-shadow 0.2s;">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span class="badge badge-success" style="font-size:10.5px;">🟢 Active & Live</span>
                    <span class="badge badge-primary" style="font-size:10.5px;">5 Chapters</span>
                </div>
                <h3 style="font-size:17px; font-weight:800; color:var(--text); margin:0 0 6px; display:flex; align-items:center; gap:8px;">
                    📈 Economics
                </h3>
                <p style="font-size:12.5px; color:var(--text-muted); margin:0 0 12px; line-height:1.5;">
                    Understanding Economic Development. Sectors of Indian Economy, Money & Credit, Globalisation, and Consumer Rights.
                </p>
                <div style="display:flex; gap:6px; flex-wrap:wrap; font-size:11px; color:var(--text-muted);">
                    <span class="badge badge-outline">500 Questions</span>
                    <span class="badge badge-outline">Economic Analysis</span>
                    <span class="badge badge-outline">400 Marks / Test</span>
                </div>
            </div>
            <div>
                <a href="modules/testseries/data/class10/economics/economics_10.html" class="btn btn-primary btn-sm" style="text-decoration:none; font-weight:700; width:100%; text-align:center; padding:9px 12px; display:block;">
                    Open Economics Tests →
                </a>
            </div>
        </div>

        <!-- CARD 7: ENGLISH -->
        <div class="card cbt-card" data-subject="English" data-class="Class 10" data-title="English Language Literature First Flight Footprints Without Feet Grammar Reading" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between; gap:14px; border:1px solid var(--border); opacity:0.85;">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span class="badge badge-warning" style="font-size:10.5px;">🟡 Scheduled</span>
                    <span class="badge badge-outline" style="font-size:10.5px;">Curriculum Aligned</span>
                </div>
                <h3 style="font-size:17px; font-weight:800; color:var(--text); margin:0 0 6px; display:flex; align-items:center; gap:8px;">
                    📖 English
                </h3>
                <p style="font-size:12.5px; color:var(--text-muted); margin:0 0 12px; line-height:1.5;">
                    Language and Literature. First Flight, Footprints Without Feet, Reading Comprehension, and Grammar.
                </p>
                <div style="display:flex; gap:6px; flex-wrap:wrap; font-size:11px; color:var(--text-muted);">
                    <span class="badge badge-outline">Upcoming Release</span>
                    <span class="badge badge-outline">Question Review</span>
                </div>
            </div>
            <div>
                <button class="btn btn-outline btn-sm" disabled style="width:100%; font-weight:700; padding:9px 12px; opacity:0.65; cursor:not-allowed;">
                    Upcoming Test Series
                </button>
            </div>
        </div>

        <!-- CARD 8: CLASS 10 MASTER LEADERSHIP HUB -->
        <div class="card cbt-card" data-subject="All" data-class="Class 10" data-title="Class 10 Leadership Hub Overall Ranks Podium Achievers Test Series Hub" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between; gap:14px; border:2px dashed var(--primary); background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);">
            <div>
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                    <span class="badge badge-primary" style="font-size:10.5px;">🏆 Master Hub</span>
                    <span class="badge badge-purple" style="font-size:10.5px;">Leaderboards</span>
                </div>
                <h3 style="font-size:17px; font-weight:800; color:var(--text); margin:0 0 6px; display:flex; align-items:center; gap:8px;">
                    👑 Class 10 Leadership Hub
                </h3>
                <p style="font-size:12.5px; color:var(--text-muted); margin:0 0 12px; line-height:1.5;">
                    Access overall multi-subject rankings, compare percentile scores, and explore top achiever podiums across all subjects.
                </p>
                <div style="display:flex; gap:6px; flex-wrap:wrap; font-size:11px; color:var(--text-muted);">
                    <span class="badge badge-outline">Cross-Subject Ranks</span>
                    <span class="badge badge-outline">Podium Analytics</span>
                </div>
            </div>
            <div>
                <a href="modules/testseries/data/class10/testseries_class_10.html" class="btn btn-primary btn-sm" style="text-decoration:none; font-weight:700; width:100%; text-align:center; padding:9px 12px; display:block;">
                    View Master Hub & Podium →
                </a>
            </div>
        </div>
    `;
}

// Fallback for other classes (checks DBService or provides quick switch to Class 10 live series)
async function renderGenericClassTestSeries(container, cls) {
    try {
        if (typeof DBService !== 'undefined' && typeof DBService.fetchTestSeries === 'function') {
            cachedTestSeriesList = await DBService.fetchTestSeries(cls);
        } else {
            cachedTestSeriesList = [];
        }
    } catch (err) {
        console.warn(`[testseries] DB fetch for ${cls} fallback:`, err);
        cachedTestSeriesList = [];
    }
    
    if (!cachedTestSeriesList || cachedTestSeriesList.length === 0) {
        container.innerHTML = `
            <div class="card" style="grid-column:1/-1; padding:48px 24px; text-align:center; border:1px dashed var(--border); background:#ffffff;">
                <div style="font-size:42px; margin-bottom:14px;">📚</div>
                <h3 style="font-size:18px; font-weight:800; color:var(--text); margin-bottom:8px;">Online Test Series for ${cls}</h3>
                <p style="font-size:13.5px; color:var(--text-muted); max-width:540px; margin:0 auto; line-height:1.5;">
                    Chapterwise assessments and scheduled coaching tests for ${cls} are currently being prepared by the faculty. Please check back soon.
                </p>
            </div>
        `;
        return;
    }

    let html = '';
    cachedTestSeriesList.forEach(t => {
        html += `
            <div class="card cbt-card" data-subject="${t.subject || 'General'}" data-class="${cls}" data-title="${t.title || ''}" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between; gap:14px; border:1px solid var(--border);">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                        <span class="badge badge-purple">${t.subject || 'General'}</span>
                        <span class="badge badge-primary">${t.questions_count || 25} Questions</span>
                    </div>
                    <h3 style="font-size:16px; font-weight:800; color:var(--text); margin:0 0 6px;">${t.title}</h3>
                    <div style="display:flex; gap:10px; font-size:12px; color:var(--text-muted); margin-bottom:12px;">
                        <span>⏱️ ${t.duration_mins || 60} Mins</span>
                        <span>🎯 ${t.total_marks || 100} Marks</span>
                    </div>
                </div>
                <div>
                    <button class="btn btn-primary btn-sm" onclick="if(window.CBTPlayer) CBTPlayer.launch(cachedTestSeriesList.find(x => x.id === '${t.id}'))" style="width:100%; font-weight:700; padding:9px;">
                        ✏️ Start Assessment
                    </button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// Open Live Assessment Leaderboard Modal
let currentCbtActiveTestId = null;

async function openTestLeaderboardModal(testId) {
    if (!testId && window.CBTPlayer && window.CBTPlayer.activeTest) {
        testId = window.CBTPlayer.activeTest.id;
    }
    currentCbtActiveTestId = testId;

    if (typeof openModal === 'function') {
        openModal('cbtLeaderboardModal');
    } else {
        const modal = document.getElementById('cbtLeaderboardModal');
        if (modal) modal.style.display = 'flex';
    }

    const podiumContainer = document.getElementById('leaderboard-podium-container');
    const tableBody = document.getElementById('leaderboard-table-body');
    const titleEl = document.getElementById('leaderboard-modal-test-title');

    if (titleEl && testId) {
        titleEl.textContent = `Live Rankings for Assessment: ${testId.toUpperCase().replace(/_/g, ' ')}`;
    }
    if (tableBody) {
        tableBody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:24px; color:var(--text-muted);">Loading live combined rankings...</td></tr>';
    }

    try {
        let currentUserId = localStorage.getItem('ec_student_id') || localStorage.getItem('ec_subscriber_id');
        const rows = (typeof DBService !== 'undefined' && DBService.fetchCombinedLeaderboard)
            ? await DBService.fetchCombinedLeaderboard({ testId: testId || undefined, limit: 50, currentUserId })
            : [];

        if (!rows || rows.length === 0) {
            if (tableBody) {
                tableBody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:24px; color:var(--text-muted);">No attempts recorded for this assessment yet. Be the first to take it!</td></tr>';
            }
            if (podiumContainer) podiumContainer.innerHTML = '';
            return;
        }

        // Podium top 3
        if (podiumContainer) {
            const top3 = rows.slice(0, 3);
            podiumContainer.innerHTML = top3.map((entry, idx) => {
                const colors = ['#f59e0b', '#64748b', '#b45309'];
                const badges = ['🥇 1st', '🥈 2nd', '🥉 3rd'];
                return `
                    <div style="background:#ffffff; border:1px solid var(--border); border-radius:12px; padding:14px; text-align:center; min-width:140px; box-shadow:0 2px 4px rgba(0,0,0,0.04);">
                        <div style="font-size:20px;">${badges[idx]}</div>
                        <div style="font-weight:800; font-size:13px; color:var(--text); margin:4px 0 2px;">${entry.name}</div>
                        <div style="font-size:11px; color:${colors[idx]}; font-weight:700;">Avg: ${entry.avgScore} pts</div>
                        <div style="font-size:10px; color:var(--text-muted);">Latest: ${entry.score} pts</div>
                    </div>
                `;
            }).join('');
        }

        if (tableBody) {
            tableBody.innerHTML = rows.map(r => `
                <tr style="${r.isCurrentUser ? 'background:rgba(37,99,235,0.06); font-weight:700;' : ''}">
                    <td style="text-align:center; font-weight:800;">${r.medal || `#${r.rank}`}</td>
                    <td>
                        <div style="font-weight:700;">${r.name}</div>
                        <span class="badge ${r.userType === 'subscriber' ? 'badge-purple' : 'badge-primary'}" style="font-size:10px; padding:1px 6px;">
                            ${r.badgeLabel}
                        </span>
                    </td>
                    <td>${r.cls}</td>
                    <td>
                        <span style="font-weight:800; color:var(--primary); font-size:13px;">${r.avgScore}</span>
                        <div style="font-size:10px; color:var(--text-muted);">Latest: ${r.score}</div>
                    </td>
                    <td>${r.accuracyPct}%</td>
                    <td>${r.timeFormatted}</td>
                </tr>
            `).join('');
        }
    } catch (err) {
        console.warn('[testseries] Error loading test leaderboard:', err);
        if (tableBody) {
            tableBody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:24px; color:var(--text-muted);">Unable to load rankings. Please try again.</td></tr>';
        }
    }
}

// Global exports for window access
if (typeof window !== 'undefined') {
    window.renderStudentTestSeries = renderStudentTestSeries;
    window.selectCbtSubjectFilter = selectCbtSubjectFilter;
    window.filterTestSeriesCards = filterTestSeriesCards;
    window.openTestLeaderboardModal = openTestLeaderboardModal;
    window.currentCbtActiveTestId = currentCbtActiveTestId;
}


