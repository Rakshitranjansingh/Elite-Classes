#!/usr/bin/env node
/**
 * Elite Classes — Subject Test Series Scaffolder
 * Generates subject folders, NCERT holding directory, and pre-wired portal HTML.
 * 
 * Usage:
 *   node scaffold_subject.js --class 10 --subject mathematics --chapters 14
 *   node scaffold_subject.js --class 10 --subject "social_science" --chapters 20
 */

const fs = require('fs');
const path = require('path');

// Parse CLI flags
const args = process.argv.slice(2);
const params = {
    classNum: '10',
    subject: '',
    chapters: 10
};

for (let i = 0; i < args.length; i++) {
    if (args[i] === '--class' && args[i + 1]) {
        params.classNum = args[++i].replace(/^class/i, '').trim();
    } else if (args[i] === '--subject' && args[i + 1]) {
        params.subject = args[++i].toLowerCase().trim().replace(/\s+/g, '_');
    } else if (args[i] === '--chapters' && args[i + 1]) {
        params.chapters = parseInt(args[++i], 10) || 10;
    }
}

if (!params.subject) {
    console.error('\x1b[31mError: --subject is required!\x1b[0m');
    console.log('Example: node scaffold_subject.js --class 10 --subject mathematics --chapters 14');
    process.exit(1);
}

// Display Name Formatting
function formatTitle(str) {
    return str.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

const subjectDisplayName = formatTitle(params.subject);
const subjectFolder = params.subject;
const classFolder = `class${params.classNum}`;
const baseDir = path.join(process.cwd(), 'modules', 'testseries', 'data', classFolder, subjectFolder);
const ncertDir = path.join(baseDir, 'ncert');
const portalHtmlFile = path.join(baseDir, `${subjectFolder}_${params.classNum}.html`);

console.log(`\n\x1b[36m=====================================================\x1b[0m`);
console.log(`\x1b[1mElite Classes — Scaffolding Test Series for ${subjectDisplayName} (Class ${params.classNum})\x1b[0m`);
console.log(`\x1b[36m=====================================================\x1b[0m\n`);

// 1. Create directories
if (!fs.existsSync(ncertDir)) {
    fs.mkdirSync(ncertDir, { recursive: true });
    console.log(`\x1b[32m✔ Created folder:\x1b[0m ${path.relative(process.cwd(), ncertDir)}`);
} else {
    console.log(`\x1b[33mℹ Folder already exists:\x1b[0m ${path.relative(process.cwd(), ncertDir)}`);
}

// 2. Generate Portal HTML
const chapterCardsHtml = [];
const scriptImports = [];
const testsMapEntries = [];

for (let ch = 1; ch <= params.chapters; ch++) {
    const testId = `ts_c${params.classNum}_${subjectFolder.slice(0, 4)}_ch${ch}`;
    const varName = `Class${params.classNum}${subjectDisplayName.replace(/\s+/g, '')}Chapter${ch}FullBank`;
    const jsFileName = `chapter${ch}_${subjectFolder}.js`;

    scriptImports.push(`    <script src="${jsFileName}"></script>`);
    testsMapEntries.push(`            '${testId}': (typeof ${varName} !== 'undefined' ? ${varName} : null)`);

    chapterCardsHtml.push(`            <!-- CHAPTER ${ch} TEST -->
            <div class="chapter-card" id="card-${testId}">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <span class="badge badge-primary" style="font-size:10.5px;">100 Questions</span>
                        <span id="badge-status-${testId}" class="badge badge-warning" style="font-size:10.5px;">Not Enrolled</span>
                    </div>

                    <div style="font-size:15px; font-weight:800; color:var(--text); margin-bottom:8px;">
                        Chapter ${ch}: ${subjectDisplayName} Assessment
                    </div>

                    <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:14px;">
                        <span class="meta-pill">⏱️ 90 Mins</span>
                        <span class="meta-pill">🎯 400 Marks</span>
                        <span class="meta-pill">⚠️ -1.0 Neg</span>
                    </div>
                </div>

                <div id="action-${testId}">
                    <button class="btn btn-outline btn-sm" onclick="enrollInTest('${testId}')" style="width:100%; font-weight:700; padding:8px;">
                        📝 Enroll in Test
                    </button>
                </div>
            </div>`);
}

const portalHtmlContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class ${params.classNum} ${subjectDisplayName} Test Series — Elite Classes</title>
    <link rel="icon" type="image/png" href="../../../../../eliteLogo_crest.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../../../../css/styles.css">
    <style>
        .chapter-card {
            background: #ffffff;
            border-radius: 16px;
            border: 1px solid var(--border);
            padding: 20px;
            transition: all 0.2s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .chapter-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
            border-color: var(--primary);
        }
        .meta-pill {
            font-size: 11px;
            font-weight: 700;
            padding: 3px 8px;
            border-radius: 6px;
            background: #f1f5f9;
            color: #475569;
        }
    </style>
</head>

<body style="background:var(--bg); padding:16px; max-width:1100px; margin:0 auto; font-family:'Plus Jakarta Sans', sans-serif;">

    <!-- TOP HEADER -->
    <header style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
        <div style="display:flex; align-items:center; gap:10px;">
            <div class="brand-logo-icon" style="width:30px; height:30px; font-size:11px;">EC</div>
            <div>
                <div style="font-size:13.5px; font-weight:800; color:var(--text);">Elite Classes</div>
                <div style="font-size:10px; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Committed to success</div>
            </div>
        </div>

        <div style="display:flex; align-items:center; gap:8px;">
            <a href="../testseries_class_${params.classNum}.html" class="btn btn-outline btn-sm" style="text-decoration:none; font-size:11.5px; padding:4px 10px;">
                ← Class ${params.classNum} Hub
            </a>
        </div>
    </header>

    <!-- HERO BANNER -->
    <div style="background:linear-gradient(135deg, #1e3a8a, #0b1329); color:#ffffff; border-radius:20px; padding:24px 28px; margin-bottom:18px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
            <div>
                <div style="font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:#93c5fd; margin-bottom:4px;">
                    Class ${params.classNum} • Comprehensive Test Series
                </div>
                <h1 style="font-size:24px; font-weight:800; margin:0 0 6px; color:#ffffff;">
                    ${subjectDisplayName} Chapter-Wise CBT Assessments
                </h1>
                <p style="font-size:13px; color:#cbd5e1; margin:0; max-width:650px;">
                    100 Questions per Chapter • 90 Minutes • 400 Marks • Instant Scorecards & Solutions
                </p>
            </div>
            <div style="background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.15); border-radius:14px; padding:12px 18px; text-align:right;">
                <div style="font-size:10.5px; color:#94a3b8; font-weight:600;">ACTIVE CANDIDATE</div>
                <div style="font-size:14px; font-weight:800; color:#38bdf8;" id="active-student-pill">Student</div>
            </div>
        </div>
    </div>

    <!-- CHAPTER TESTS GRID -->
    <div style="margin-bottom:14px;">
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(320px, 1fr)); gap:14px;" id="chapter-tests-grid">
${chapterCardsHtml.join('\n\n')}
        </div>
    </div>

    <!-- TOAST -->
    <div class="toast" id="app-toast">
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" stroke-width="2.5"/></svg>
        <span id="toast-msg"></span>
    </div>

    <!-- SUPABASE SDK & API -->
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    <script src="../../../../../supabase/config.js"></script>
    <script src="../../../../../supabase/api.js"></script>

    <!-- UNIVERSAL CBT ENGINE -->
    <script src="../../../cbtPlayer.js"></script>

    <!-- CHAPTER ASSESSMENT DATA SCRIPTS -->
${scriptImports.join('\n')}

    <script>
        let storedActiveStudent = null;
        try {
            storedActiveStudent = JSON.parse(localStorage.getItem('ec_active_student'));
        } catch (e) {
            storedActiveStudent = null;
        }

        const activeStudent = storedActiveStudent || {
            id: localStorage.getItem('ec_student_id') || 'st_guest',
            name: localStorage.getItem('ec_student_name') || 'Class ${params.classNum} Student',
            cls: 'Class ${params.classNum}'
        };
        document.getElementById('active-student-pill').textContent = activeStudent.name;

        const STORAGE_KEY = \`ec_cbt_enrollment_\${activeStudent.id}\`;
        let studentCbtData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"enrolled":{}, "attempts":{}}');

        const testsMap = {
${testsMapEntries.join(',\n')}
        };

        function showToast(msg, type = 'success') {
            const t = document.getElementById('app-toast');
            const m = document.getElementById('toast-msg');
            if (!t || !m) return;
            m.textContent = msg;
            t.className = 'toast show ' + type;
            setTimeout(() => { t.className = 'toast'; }, 3000);
        }

        function enrollInTest(testId) {
            if (!studentCbtData.enrolled) studentCbtData.enrolled = {};
            studentCbtData.enrolled[testId] = true;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(studentCbtData));
            showToast('Enrolled successfully! Launching CBT Exam...');
            renderTestCards();
            setTimeout(() => { launchTest(testId); }, 600);
        }

        function launchTest(testId) {
            const testObj = testsMap[testId];
            if (!testObj || !testObj.questions || testObj.questions.length === 0) {
                showToast('Assessment questions are currently being loaded.', 'danger');
                return;
            }
            if (typeof CBTPlayer !== 'undefined' && CBTPlayer.launch) {
                CBTPlayer.launch(testObj, activeStudent, (res) => {
                    renderTestCards();
                });
            } else {
                alert('CBT Engine could not be loaded.');
            }
        }

        function renderTestCards() {
            Object.keys(testsMap).forEach(id => {
                const b = document.getElementById('badge-status-' + id);
                const a = document.getElementById('action-' + id);
                if (!b || !a) return;

                const isEnrolled = studentCbtData.enrolled && studentCbtData.enrolled[id];
                const attempt = studentCbtData.attempts && studentCbtData.attempts[id];

                if (attempt) {
                    b.className = 'badge badge-success';
                    b.textContent = \`Completed: \${attempt.score} / \${attempt.total_marks}\`;
                    a.innerHTML = \`<button class="btn btn-outline btn-sm" onclick="launchTest('\${id}')" style="width:100%; font-weight:700; padding:8px;">🔄 Retake Assessment</button>\`;
                } else if (isEnrolled) {
                    b.className = 'badge badge-primary';
                    b.textContent = 'Enrolled & Ready';
                    a.innerHTML = \`<button class="btn btn-primary btn-sm" onclick="launchTest('\${id}')" style="width:100%; font-weight:700; padding:8px;">🚀 Start CBT Exam</button>\`;
                }
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            renderTestCards();
        });
    </script>
</body>
</html>
`;

if (!fs.existsSync(portalHtmlFile)) {
    fs.writeFileSync(portalHtmlFile, portalHtmlContent, 'utf8');
    console.log(`\x1b[32m✔ Created Portal HTML:\x1b[0m ${path.relative(process.cwd(), portalHtmlFile)}`);
} else {
    console.log(`\x1b[33mℹ Portal HTML already exists:\x1b[0m ${path.relative(process.cwd(), portalHtmlFile)}`);
}

console.log(`\n\x1b[35mNext Step for User:\x1b[0m`);
console.log(`👉 Please place the NCERT chapter PDF files into:\n   \x1b[1m${path.relative(process.cwd(), ncertDir)}\x1b[0m`);
console.log(`\nOnce uploaded, tell the agent: "I have added the chapter PDFs, please build the tests."\n`);
