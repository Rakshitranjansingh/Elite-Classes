/**
 * generate_upsc_portals.js
 * Generates subject portal HTML files for UPSC Test Series
 * Usage: node scripts/generate_upsc_portals.js [--subject <id>] [--all]
 */
const fs = require('fs');
const path = require('path');

const CATALOG_PATH = path.join(__dirname, '../modules/course/civilservices/UPSC/catalog/upsc_curriculum_catalog.json');
const OUTPUT_BASE  = path.join(__dirname, '../modules/testseries/data/civilservices/UPSC/Chaptertests');

const SUBJECT_META = {
  ancient_history:    { title:'Ancient History of India',           icon:'&#x1F3BA;', gs:'GS-I',   gradStart:'#78350f', gradEnd:'#451a03', accent:'#fcd34d', gsBg:'#fef3c7', gsColor:'#92400e', tests:39  },
  art_and_culture:    { title:'Indian Art &amp; Culture',           icon:'&#x1F3A8;', gs:'GS-I',   gradStart:'#6d28d9', gradEnd:'#4c1d95', accent:'#ddd6fe', gsBg:'#fef3c7', gsColor:'#92400e', tests:57  },
  disaster_mgmt:      { title:'Disaster Management &amp; Resilience', icon:'&#x1F198;', gs:'GS-III', gradStart:'#b91c1c', gradEnd:'#7f1d1d', accent:'#fca5a5', gsBg:'#dcfce7', gsColor:'#166534', tests:6   },
  economy:            { title:'Indian &amp; World Economy',          icon:'&#x1F4C8;', gs:'GS-III', gradStart:'#065f46', gradEnd:'#022c22', accent:'#6ee7b7', gsBg:'#dcfce7', gsColor:'#166534', tests:96  },
  environment:        { title:'Environment &amp; Ecology',           icon:'&#x1F33F;', gs:'GS-III', gradStart:'#14532d', gradEnd:'#052e16', accent:'#86efac', gsBg:'#dcfce7', gsColor:'#166534', tests:87  },
  geography:          { title:'World &amp; Indian Geography',        icon:'&#x1F30F;', gs:'GS-I',   gradStart:'#0f4c81', gradEnd:'#07253e', accent:'#93c5fd', gsBg:'#fef3c7', gsColor:'#92400e', tests:192 },
  governance_ethics:  { title:'Governance, Ethics &amp; Social Justice', icon:'&#x1F3E2;', gs:'GS-II', gradStart:'#1e40af', gradEnd:'#1e3a8a', accent:'#bfdbfe', gsBg:'#dbeafe', gsColor:'#1e40af', tests:18 },
  history:            { title:'History (General)',                   icon:'&#x1F4DC;', gs:'GS-I',   gradStart:'#78350f', gradEnd:'#451a03', accent:'#fcd34d', gsBg:'#fef3c7', gsColor:'#92400e', tests:18  },
  indian_society:     { title:'Indian Society',                     icon:'&#x1F91D;', gs:'GS-II',  gradStart:'#9d174d', gradEnd:'#500724', accent:'#fbcfe8', gsBg:'#dbeafe', gsColor:'#1e40af', tests:15  },
  internal_security:  { title:'Internal Security &amp; Border Mgmt', icon:'&#x1F6E1;', gs:'GS-III', gradStart:'#1f2937', gradEnd:'#111827', accent:'#9ca3af', gsBg:'#dcfce7', gsColor:'#166534', tests:42  },
  ir:                 { title:'International Relations',             icon:'&#x1F310;', gs:'GS-II',  gradStart:'#1e3a5f', gradEnd:'#0f172a', accent:'#93c5fd', gsBg:'#dbeafe', gsColor:'#1e40af', tests:117 },
  medieval_history:   { title:'Medieval History of India',          icon:'&#x1F54C;', gs:'GS-I',   gradStart:'#92400e', gradEnd:'#451a03', accent:'#fcd34d', gsBg:'#fef3c7', gsColor:'#92400e', tests:21  },
  modern_history:     { title:'Modern History of India',            icon:'&#x1F1EE;&#x1F1F3;', gs:'GS-I', gradStart:'#047857', gradEnd:'#022c22', accent:'#6ee7b7', gsBg:'#fef3c7', gsColor:'#92400e', tests:102 },
  polity:             { title:'Indian Polity &amp; Governance',      icon:'&#x1F3DB;', gs:'GS-II',  gradStart:'#1e3a8a', gradEnd:'#0f172a', accent:'#bfdbfe', gsBg:'#dbeafe', gsColor:'#1e40af', tests:156 },
  science_tech:       { title:'Science &amp; Technology',            icon:'&#x1F52C;', gs:'GS-III', gradStart:'#0e7490', gradEnd:'#0c4a6e', accent:'#7dd3fc', gsBg:'#dcfce7', gsColor:'#166534', tests:18  },
  society:            { title:'Society &amp; Salient Features',      icon:'&#x1F30E;', gs:'GS-I',   gradStart:'#7c3aed', gradEnd:'#4c1d95', accent:'#ddd6fe', gsBg:'#fef3c7', gsColor:'#92400e', tests:3   }
};

function slugify(str) {
  return str.replace(/[^a-z0-9]+/gi,'_').toLowerCase().replace(/^_|_$/g,'').substring(0,50);
}

function shortenTopicTitle(raw) {
  if (!raw) return '';
  let t = raw.trim();

  const OVERRIDES = {
    'Elections and political parties, Electoral Funding, Voting, Recent Development, Electoral polities, Representation of People\'s Act and working of the political system since Independence.': 'Elections & Representation of People',
    'Important aspects of governance, transparency and accountability': 'Governance, Transparency & Accountability',
    'Role of media, social audit, e-governance, citizens charters, and role of civil services': 'E-Governance & Citizen Charters',
    'Pressure groups and formal/ informal asso-ciations and their role in the Polity': 'Pressure Groups & Associations',
    'Appointment to various Constitutional posts, powers, functions and responsibilities of various Constitutional Bodies': 'Constitutional Bodies & Posts',
    'Statutory, Regulatory and various Quasi-Judicial Bodies': 'Statutory & Quasi-Judicial Bodies',
    'Public Services & Posts like Cabinet Secretary, Chief Secretary etc.': 'Public Services & Key Posts',
    'Subordinate Courts; District Courts, Gram Nyayalayas, ADRs, NALSA etc.': 'Subordinate Courts & ADRs',
    'Constitutional Development / Making of the Constitution': 'Making of the Constitution',
    'Federalism, Centre – State Relations & Inter State Relations': 'Federalism & Inter-State Relations',
    'Other Constitutional Dimensions; Rights and Liabilities of the government': 'Rights & Liabilities of Govt',
    'Special Provisions Relating to Certain classes': 'Provisions for Certain Classes',
    'Development process and related organizations': 'Development Process & NGOs',
    'Languages and related provisions': 'Official Languages & Provisions',
    'Urban Local Bodies/ Municipalities': 'Urban Local Bodies & Municipalities',
    'Cabinet Committee\'s and Parliamentary Committee': 'Cabinet & Parliamentary Committees'
  };

  if (OVERRIDES[t]) return OVERRIDES[t];

  t = t.replace(/\s+/g, ' ');
  t = t.replace(/\s*\((?:cont\.?|contd\.?|continuation)\)/gi, ' (Part 2)');
  t = t.replace(/\((\d{4})$/, '($1)');
  t = t.replace(/^important aspects of\s+/i, '');
  t = t.replace(/^appointment to various\s+/i, '');
  t = t.replace(/\s+like\s+.*$/i, '');
  t = t.replace(/\s*;\s*.*$/i, '');
  t = t.replace(/\s+etc\.?$/i, '');

  if (t.length > 50) {
    const parts = t.split(/[,–—\/-]/);
    if (parts[0].trim().length >= 10) {
      t = parts[0].trim();
    } else if (parts.length > 1) {
      t = (parts[0].trim() + ' & ' + parts[1].trim()).substring(0, 45);
    }
  }

  t = t.replace(/\s+and\s+/gi, ' & ');
  return t;
}

function generatePortalHtml(subjectId, topics, meta) {
  const totalTests = topics.length * 3;
  const backPath = '../../../../../../../';
  const bgGradient = 'linear-gradient(135deg, ' + meta.gradStart + ' 0%, ' + meta.gradEnd + ' 100%)';

  // Script tags for all topic JS files (keyed off original title slug)
  const scriptTags = topics.map(t => {
    const n = String(t.num).padStart(2,'0');
    const s = slugify(t.title);
    return `    <script src="topic_${n}a_${s}.js"><\/script>\n    <script src="topic_${n}b_${s}.js"><\/script>\n    <script src="topic_${n}c_${s}.js"><\/script>`;
  }).join('\n');

  // TOPICS JS array with shortened, clean titles
  const topicsJs = topics.map(t => {
    const cleanTitle = shortenTopicTitle(t.title).replace(/'/g, "\\'");
    return `            { num:${t.num}, title:'${cleanTitle}', slug:'${slugify(t.title)}' }`;
  }).join(',\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${meta.title} — UPSC Test Series | Elite Classes</title>
    <meta name="description" content="UPSC Prelims chapter-wise tests for ${meta.title}. ${topics.length} topics x 3 tests = ${totalTests} assessments. UPSC marking scheme.">
    <meta name="apple-mobile-web-app-title" content="Elite Classes">
    <link rel="icon" type="image/png" href="${backPath}favicon-32x32.png">
    <link rel="apple-touch-icon" href="${backPath}apple-touch-icon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="${backPath}css/styles.css">
    <style>
        .topic-card { background:#ffffff; border-radius:12px; border:1px solid var(--border); overflow:hidden; transition:all 0.18s ease; box-shadow:0 1px 4px rgba(0,0,0,0.03); }
        .topic-card:hover { border-color:#cbd5e1; box-shadow:0 4px 14px rgba(0,0,0,0.06); }
        .topic-header { padding:12px 14px; background:#f8fafc; border-bottom:1px solid #f1f5f9; }
        .test-row { display:flex; align-items:center; justify-content:space-between; padding:9px 14px; border-bottom:1px solid #f8fafc; }
        .test-row:last-child { border-bottom:none; }
        .topic-num { width:22px; height:22px; border-radius:6px; display:inline-flex; align-items:center; justify-content:center; font-size:10.5px; font-weight:800; flex-shrink:0; }
    </style>
</head>
<body style="background:var(--bg); margin:0; font-family:'Plus Jakarta Sans',sans-serif;">

    <!-- STICKY FIXED HEADER -->
    <header class="app-header-sticky">
        <div class="top-banner">
            <a href="${backPath}student_home.html" class="brand-wrapper" style="text-decoration:none; color:inherit; cursor:pointer;" title="Return to Student Portal">
                <img src="${backPath}eliteLogo_crest.png" onerror="this.onerror=null; this.src='${backPath}favicon-32x32.png';" alt="Elite Classes" class="brand-logo-icon">
                <div>
                    <div class="brand-text">Elite Classes</div>
                    <div class="brand-sub">Committed to success</div>
                </div>
            </a>
            <div style="display:flex; align-items:center; gap:8px;">
                <a href="../../upsc_testseries_hub.html" class="btn btn-outline btn-sm" style="text-decoration:none; font-size:12px; font-weight:700;">← UPSC Hub</a>
                <a href="${backPath}student_home.html" class="btn btn-primary btn-sm" style="font-size:12px; font-weight:700;">Student Portal</a>
            </div>
        </div>
    </header>

    <main class="main-content" style="max-width:1100px; margin:0 auto; padding:20px 16px 60px;">

        <!-- HERO BANNER -->
        <div style="background:${bgGradient}; color:#ffffff; border-radius:18px; padding:24px 28px; margin-bottom:18px; box-shadow:0 4px 20px rgba(0,0,0,0.08);">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:14px;">
                <div>
                    <div style="font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:${meta.accent}; margin-bottom:4px;">UPSC Prelims &bull; ${meta.gs} &bull; ${meta.title}</div>
                    <h1 style="font-size:22px; font-weight:800; margin:0 0 6px; color:#ffffff;">${meta.title}</h1>
                    <p style="font-size:13px; color:rgba(255,255,255,0.85); margin:0;">${topics.length} Topics &bull; ${totalTests} Assessments &bull; 20Q &bull; 30 Mins &bull; UPSC Marking (+4 / &minus;1.33)</p>
                </div>
                <div style="background:rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.22); border-radius:12px; padding:10px 16px; text-align:right;">
                    <div style="font-size:10px; color:${meta.accent}; font-weight:700; letter-spacing:0.5px;">ACTIVE CANDIDATE</div>
                    <div style="font-size:14px; font-weight:800; color:#ffffff;" id="active-student-pill">Loading...</div>
                </div>
            </div>
        </div>

        <!-- STATS & SEARCH BAR -->
        <div style="background:#ffffff; border:1px solid var(--border); border-radius:12px; padding:12px 18px; margin-bottom:18px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; box-shadow:0 2px 6px rgba(0,0,0,0.02);">
            <div style="display:flex; align-items:center; gap:14px;">
                <div style="display:flex; align-items:baseline; gap:6px;">
                    <span style="font-size:18px; font-weight:800; color:var(--text);"><span id="stat-completed">0</span> / <span id="stat-total">${totalTests}</span></span>
                    <span style="font-size:11.5px; font-weight:600; color:var(--text-muted);">Tests Completed</span>
                </div>
                <span id="stat-pct" style="font-size:11.5px; font-weight:800; padding:2px 8px; border-radius:12px; background:#eff6ff; color:#1d4ed8;">0%</span>
            </div>
            <div style="display:flex; align-items:center; gap:12px; flex:1; justify-content:flex-end; min-width:240px;">
                <div style="width:140px; height:7px; background:#f1f5f9; border-radius:999px; overflow:hidden;">
                    <div id="stat-bar" style="height:100%; width:0%; background:linear-gradient(90deg, #2563eb, #059669); border-radius:999px; transition:width 0.4s ease;"></div>
                </div>
                <input type="text" id="topic-search" placeholder="Search topics..." oninput="filterTopics(this.value)" style="padding:6px 12px; border-radius:8px; border:1px solid var(--border); font-size:12px; width:170px; font-family:inherit; outline:none;">
            </div>
        </div>

        <!-- TOPICS GRID -->
        <div id="topics-grid" style="display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:14px;"></div>

    </main>

    <div class="toast" id="app-toast">
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" stroke-width="2.5"/></svg>
        <span id="toast-msg"></span>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"><\/script>
    <script src="${backPath}supabase/config.js"><\/script>
    <script src="${backPath}supabase/api.js"><\/script>
    <script src="${backPath}modules/testseries/cbtPlayer.js"><\/script>

${scriptTags}

    <script>
        var activeStudent = null;
        try { activeStudent = JSON.parse(localStorage.getItem('ec_active_student')); } catch(e){}
        activeStudent = activeStudent || { id: localStorage.getItem('ec_student_id') || 'st_guest', name: localStorage.getItem('ec_student_name') || 'UPSC Aspirant', cls: 'Civil Services' };
        document.getElementById('active-student-pill').textContent = activeStudent.name;

        var STORAGE_KEY = 'ec_cbt_enrollment_' + activeStudent.id;
        var studentCbtData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"enrolled":{},"attempts":{}}');

        var TOPICS = [
${topicsJs}
        ];
        var TESTS_META = [
            { part:'A', label:'Test 1' },
            { part:'B', label:'Test 2' },
            { part:'C', label:'Test 3' }
        ];

        function getTestId(topicNum, part) {
            return 'ts_upsc_${subjectId}_t' + String(topicNum).padStart(2,'0') + part.toLowerCase();
        }
        function getRegisteredTest(testId) {
            return (window.EliteTestRegistry && window.EliteTestRegistry.find(function(t){ return t.id === testId; })) || null;
        }
        function getTestStatus(testId) {
            var localTests = JSON.parse(localStorage.getItem('ec_test_series') || '[]');
            var meta = localTests.find(function(t){ return t.id === testId; });
            if (meta && meta.status) return meta.status;
            var testObj = getRegisteredTest(testId);
            if (testObj && (testObj.status === 'disabled' || testObj.status === 'draft')) return testObj.status;
            return 'published';
        }
        function showToast(msg, type) {
            type = type || 'success';
            var t = document.getElementById('app-toast'), m = document.getElementById('toast-msg');
            if (!t || !m) return;
            m.textContent = msg; t.className = 'toast show ' + type;
            setTimeout(function(){ t.className = 'toast'; }, 3000);
        }
        function launchTest(testId) {
            if (['inactive','disabled'].indexOf(getTestStatus(testId)) !== -1) { showToast('Locked by faculty.','danger'); return; }
            var testObj = getRegisteredTest(testId);
            if (!testObj || !testObj.questions || !testObj.questions.length) { showToast('Content loading, try again.','danger'); return; }
            studentCbtData.enrolled = studentCbtData.enrolled || {};
            studentCbtData.enrolled[testId] = true;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(studentCbtData));
            if (typeof CBTPlayer !== 'undefined' && CBTPlayer.launch) {
                CBTPlayer.launch(testObj, activeStudent, function(res){
                    studentCbtData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"enrolled":{},"attempts":{}}');
                    renderTopics();
                    if (res && res.score !== undefined) showToast('Score: ' + res.score + '/80 (' + (res.percentage||0) + '%)');
                });
            } else {
                showToast('CBT Player engine not loaded.', 'danger');
            }
        }
        function reviewTest(testId) {
            var testObj = getRegisteredTest(testId) || { id: testId };
            var attempt = studentCbtData.attempts && studentCbtData.attempts[testId];
            if (typeof CBTPlayer !== 'undefined' && CBTPlayer.openReview) {
                CBTPlayer.openReview(testObj, activeStudent, attempt);
            } else {
                showToast('Review engine not loaded.', 'danger');
            }
        }
        function updateStats() {
            var completedCount = 0;
            var total = TOPICS.length * 3;
            TOPICS.forEach(function(t) {
                TESTS_META.forEach(function(tm) {
                    var testId = getTestId(t.num, tm.part);
                    if (studentCbtData.attempts && studentCbtData.attempts[testId]) {
                        completedCount++;
                    }
                });
            });
            var pct = total > 0 ? Math.round((completedCount / total) * 100) : 0;
            var elComp = document.getElementById('stat-completed');
            var elTot = document.getElementById('stat-total');
            var elPct = document.getElementById('stat-pct');
            var elBar = document.getElementById('stat-bar');
            if (elComp) elComp.textContent = completedCount;
            if (elTot) elTot.textContent = total;
            if (elPct) elPct.textContent = pct + '%';
            if (elBar) elBar.style.width = pct + '%';
        }
        function filterTopics(query) {
            var q = (query || '').toLowerCase().trim();
            var cards = document.querySelectorAll('.topic-card');
            TOPICS.forEach(function(topic, i) {
                var card = cards[i];
                if (!card) return;
                var match = !q || topic.title.toLowerCase().indexOf(q) !== -1 || String(topic.num) === q;
                card.style.display = match ? '' : 'none';
            });
        }
        function renderTopics() {
            studentCbtData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"enrolled":{},"attempts":{}}');
            studentCbtData.enrolled = studentCbtData.enrolled || {};
            studentCbtData.attempts = studentCbtData.attempts || {};
            updateStats();

            var grid = document.getElementById('topics-grid');
            grid.innerHTML = TOPICS.map(function(topic) {
                var rows = TESTS_META.map(function(tm) {
                    var testId = getTestId(topic.num, tm.part);
                    var status = getTestStatus(testId);
                    var isInactive = (status === 'inactive' || status === 'disabled');
                    var attempt = studentCbtData.attempts && studentCbtData.attempts[testId];
                    var testObj = getRegisteredTest(testId);
                    var hasData = !!(testObj && testObj.questions && testObj.questions.length > 0);
                    var action = '';
                    if (isInactive) {
                        action = '<button disabled style="padding:4px 12px;border-radius:6px;background:#f1f5f9;border:none;color:#94a3b8;font-size:11.5px;font-weight:600;cursor:not-allowed;">Locked</button>';
                    } else if (!hasData) {
                        action = '<button disabled style="padding:4px 12px;border-radius:6px;background:#fef3c7;border:none;color:#92400e;font-size:11.5px;font-weight:600;">Loading...</button>';
                    } else if (attempt) {
                        var pct = attempt.pct !== undefined ? attempt.pct : Math.round(((attempt.score||0)/80)*100);
                        action = '<div style="display:flex;align-items:center;gap:6px;">' +
                            '<span style="font-size:11.5px;font-weight:700;color:' + (pct>=50?'#15803d':'#dc2626') + ';margin-right:2px;">' + (attempt.score||0) + '/80</span>' +
                            '<button data-testid="' + testId + '" onclick="reviewTest(this.getAttribute(\\'data-testid\\'))" class="btn btn-outline btn-sm" style="padding:3px 8px;font-size:11px;font-weight:700;">Review</button>' +
                            '<button data-testid="' + testId + '" onclick="launchTest(this.getAttribute(\\'data-testid\\'))" class="btn btn-outline btn-sm" style="padding:3px 8px;font-size:11px;font-weight:700;">Restart</button>' +
                            '</div>';
                    } else {
                        action = '<button data-testid="' + testId + '" onclick="launchTest(this.getAttribute(\\'data-testid\\'))" class="btn btn-primary btn-sm" style="padding:3px 14px;font-size:11.5px;font-weight:700;">Start</button>';
                    }
                    return '<div class="test-row">' +
                        '<span style="font-size:12.5px;font-weight:700;color:var(--text);">' + tm.label + '</span>' +
                        '<div>' + action + '</div>' +
                        '</div>';
                }).join('');

                return '<div class="topic-card">' +
                    '<div class="topic-header">' +
                        '<div style="display:flex;align-items:center;gap:8px;">' +
                            '<span class="topic-num" style="background:${meta.gradStart};color:#ffffff;">' + topic.num + '</span>' +
                            '<div style="font-size:13.5px;font-weight:700;color:var(--text);line-height:1.3;">' + topic.title + '</div>' +
                        '</div>' +
                    '</div>' +
                    rows +
                    '</div>';
            }).join('');
        }
        async function syncCloudTestStatuses() {
            try {
                if (typeof DBService !== 'undefined' && DBService.fetchTestSeriesStatuses) {
                    var data = await DBService.fetchTestSeriesStatuses();
                    if (data && data.length > 0) {
                        var localTests = JSON.parse(localStorage.getItem('ec_test_series') || '[]');
                        var map = {};
                        localTests.forEach(function(t){ map[t.id]=t; });
                        data.forEach(function(item){ if(map[item.id]){map[item.id].status=item.status;}else{map[item.id]={id:item.id,status:item.status};localTests.push(map[item.id]);} });
                        localStorage.setItem('ec_test_series', JSON.stringify(localTests));
                        renderTopics();
                    }
                }
            } catch(e) { console.warn('[${subjectId}] Status sync:', e); }
        }
        document.addEventListener('DOMContentLoaded', function() {
            renderTopics();
            syncCloudTestStatuses();
        });
    <\/script>
</body>
</html>`;
}

// Main
const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
const args = process.argv.slice(2);
const subjectArg = args[args.indexOf('--subject') + 1];
const generateAll = args.includes('--all');

const subjectsToGenerate = generateAll
  ? Object.keys(SUBJECT_META)
  : (subjectArg ? [subjectArg] : Object.keys(SUBJECT_META));

subjectsToGenerate.forEach(subjectId => {
  const meta = SUBJECT_META[subjectId];
  if (!meta) { console.warn('Unknown subject: ' + subjectId); return; }

  const subjectData = catalog.subjects.find(s => s.subjectId === subjectId);
  if (!subjectData) { console.warn('Not in catalog: ' + subjectId); return; }

  const topics = subjectData.topics.map(function(t, i) {
    return { num: i+1, title: t.topicTitle };
  });

  const html = generatePortalHtml(subjectId, topics, meta);
  const outputDir = path.join(OUTPUT_BASE, subjectId);
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
  const outputFile = path.join(outputDir, subjectId + '_upsc.html');
  fs.writeFileSync(outputFile, html, 'utf8');
  console.log('Written: ' + subjectId + '_upsc.html (' + topics.length + ' topics)');
});