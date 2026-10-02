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

function generatePortalHtml(subjectId, topics, meta) {
  const totalTests = topics.length * 3;
  const backPath = '../../../../../../';

  // Script tags for all topic JS files
  const scriptTags = topics.map(t => {
    const n = String(t.num).padStart(2,'0');
    const s = slugify(t.title);
    return `    <script src="topic_${n}a_${s}.js"><\/script>\n    <script src="topic_${n}b_${s}.js"><\/script>\n    <script src="topic_${n}c_${s}.js"><\/script>`;
  }).join('\n');

  // TOPICS JS array
  const topicsJs = topics.map(t =>
    `            { num:${t.num}, title:'${t.title.replace(/'/g,"\\'")}', slug:'${slugify(t.title)}' }`
  ).join(',\n');

  const testIds_t1a = `ts_upsc_${subjectId}_t01a`;

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
        .topic-card { background:#fff; border-radius:16px; border:1px solid var(--border); padding:0; overflow:hidden; transition:all 0.2s ease; box-shadow:0 2px 8px rgba(0,0,0,0.03); }
        .topic-card:hover { transform:translateY(-2px); box-shadow:0 8px 24px rgba(0,0,0,0.07); }
        .topic-header { padding:16px 18px 12px; border-bottom:1px solid #f1f5f9; }
        .test-row { display:flex; align-items:center; justify-content:space-between; padding:10px 18px; border-bottom:1px solid #f8fafc; gap:12px; }
        .test-row:last-child { border-bottom:none; }
        .test-label { font-size:11.5px; font-weight:700; padding:3px 10px; border-radius:20px; white-space:nowrap; }
        .label-a { background:#dcfce7; color:#15803d; }
        .label-b { background:#fef9c3; color:#854d0e; }
        .label-c { background:#fce7f3; color:#9d174d; }
        .meta-pill { font-size:10.5px; font-weight:700; padding:2px 7px; border-radius:6px; background:#f1f5f9; color:#475569; }
        .topic-num { width:28px; height:28px; border-radius:8px; display:inline-flex; align-items:center; justify-content:center; font-size:11px; font-weight:800; flex-shrink:0; }
    </style>
</head>
<body style="background:var(--bg); padding:16px; max-width:1100px; margin:0 auto; font-family:'Plus Jakarta Sans',sans-serif;">

    <header style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
        <a href="${backPath}student_home.html" style="display:flex; align-items:center; gap:10px; text-decoration:none; color:inherit;" title="Return to Student Portal">
            <img src="${backPath}eliteLogo_crest.png" alt="Elite Classes" class="brand-logo-icon" style="width:30px; height:30px;">
            <div>
                <div style="font-size:13.5px; font-weight:800; color:var(--text);">Elite Classes</div>
                <div style="font-size:10px; color:var(--text-muted); text-transform:uppercase; font-weight:700;">Committed to success</div>
            </div>
        </a>
        <a href="../../upsc_testseries_hub.html" class="btn btn-outline btn-sm" style="text-decoration:none; font-size:11.5px; padding:4px 10px;">← UPSC Hub</a>
    </header>

    <div style="background:${meta.bg}; color:#fff; border-radius:20px; padding:24px 28px; margin-bottom:20px;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
            <div>
                <div style="font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:${meta.accent}; margin-bottom:4px;">UPSC Prelims &bull; ${meta.gs} &bull; ${meta.title}</div>
                <h1 style="font-size:22px; font-weight:800; margin:0 0 6px; color:#fff;">${meta.title} — Chapter-Wise Tests</h1>
                <p style="font-size:13px; color:rgba(255,255,255,0.8); margin:0;">${topics.length} Topics &times; 3 Tests Each = ${totalTests} Assessments &bull; 20 Questions per Test &bull; UPSC Marking (+4 / &minus;1.33)</p>
            </div>
            <div style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); border-radius:14px; padding:12px 18px; text-align:right;">
                <div style="font-size:10.5px; color:${meta.accent}; font-weight:700;">ACTIVE CANDIDATE</div>
                <div style="font-size:14px; font-weight:800; color:#fff;" id="active-student-pill">Loading...</div>
            </div>
        </div>
    </div>

    <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:16px;">
        <span style="background:#dcfce7; color:#15803d; padding:4px 12px; border-radius:20px; font-size:11.5px; font-weight:700;">&#x1F7E2; Part A: Easy &amp; Moderate</span>
        <span style="background:#fef9c3; color:#854d0e; padding:4px 12px; border-radius:20px; font-size:11.5px; font-weight:700;">&#x1F7E1; Part B: Hard &amp; Tricky</span>
        <span style="background:#fce7f3; color:#9d174d; padding:4px 12px; border-radius:20px; font-size:11.5px; font-weight:700;">&#x1F534; Part C: UPSC Synthesis &amp; PYQ</span>
        <span style="background:#f1f5f9; color:#475569; padding:4px 12px; border-radius:20px; font-size:11.5px; font-weight:700;">20Q &bull; 30 Mins &bull; 80 Marks</span>
    </div>

    <div id="topics-grid" style="display:grid; grid-template-columns:repeat(auto-fill,minmax(340px,1fr)); gap:16px;"></div>

    <div class="toast" id="app-toast">
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" stroke-width="2.5"/></svg>
        <span id="toast-msg"></span>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"><\/script>
    <script src="${backPath}supabase/config.js"><\/script>
    <script src="${backPath}supabase/api.js"><\/script>
    <script src="../../../../cbtPlayer.js"><\/script>

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
            { part:'A', label:'Part A: Easy & Moderate', labelClass:'label-a', icon:'🟢' },
            { part:'B', label:'Part B: Hard & Tricky', labelClass:'label-b', icon:'🟡' },
            { part:'C', label:'Part C: UPSC Synthesis & PYQ', labelClass:'label-c', icon:'🔴' }
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
            return (testId === '${testIds_t1a}') ? 'published' : 'inactive';
        }
        function showToast(msg, type) {
            type = type || 'success';
            var t = document.getElementById('app-toast'), m = document.getElementById('toast-msg');
            if (!t || !m) return;
            m.textContent = msg; t.className = 'toast show ' + type;
            setTimeout(function(){ t.className = 'toast'; }, 3000);
        }
        function enrollInTest(testId) {
            if (['inactive','disabled'].indexOf(getTestStatus(testId)) !== -1) { showToast('Locked by admin.','danger'); return; }
            studentCbtData.enrolled = studentCbtData.enrolled || {};
            studentCbtData.enrolled[testId] = true;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(studentCbtData));
            showToast('Enrolled! Launching...', 'success');
            renderTopics();
            setTimeout(function(){ launchTest(testId); }, 600);
        }
        function launchTest(testId) {
            if (['inactive','disabled'].indexOf(getTestStatus(testId)) !== -1) { showToast('Locked by admin.','danger'); return; }
            var testObj = getRegisteredTest(testId);
            if (!testObj || !testObj.questions || !testObj.questions.length) { showToast('Content loading, try again.','danger'); return; }
            if (typeof CBTPlayer !== 'undefined' && CBTPlayer.launch) {
                CBTPlayer.launch(testObj, activeStudent, function(res){
                    studentCbtData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"enrolled":{},"attempts":{}}');
                    renderTopics();
                    if (res && res.score !== undefined) showToast('Score: ' + res.score + '/80 (' + (res.percentage||0) + '%)');
                });
            }
        }
        function reviewTest(testId) {
            var testObj = getRegisteredTest(testId) || { id: testId };
            var attempt = studentCbtData.attempts && studentCbtData.attempts[testId];
            if (typeof CBTPlayer !== 'undefined' && CBTPlayer.openReview) CBTPlayer.openReview(testObj, activeStudent, attempt);
        }
        function renderTopics() {
            studentCbtData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"enrolled":{},"attempts":{}}');
            studentCbtData.enrolled = studentCbtData.enrolled || {};
            studentCbtData.attempts = studentCbtData.attempts || {};
            var grid = document.getElementById('topics-grid');
            grid.innerHTML = TOPICS.map(function(topic) {
                var numStr = String(topic.num).padStart(2,'0');
                var rows = TESTS_META.map(function(tm) {
                    var testId = getTestId(topic.num, tm.part);
                    var status = getTestStatus(testId);
                    var isInactive = (status === 'inactive' || status === 'disabled');
                    var isEnrolled = !!(studentCbtData.enrolled && studentCbtData.enrolled[testId]);
                    var attempt = studentCbtData.attempts && studentCbtData.attempts[testId];
                    var testObj = getRegisteredTest(testId);
                    var hasData = !!(testObj && testObj.questions && testObj.questions.length > 0);
                    var badge = '', action = '';
                    if (isInactive) {
                        badge = '<span style="font-size:10px;color:#94a3b8;font-weight:600;">&#x1F512; Locked</span>';
                        action = '<button disabled style="padding:4px 14px;border-radius:8px;background:#f1f5f9;border:none;color:#94a3b8;font-size:11px;font-weight:700;cursor:not-allowed;">Locked</button>';
                    } else if (!hasData) {
                        badge = '<span style="font-size:10px;color:#d97706;font-weight:600;">&#x23F3; Loading</span>';
                        action = '<button disabled style="padding:4px 14px;border-radius:8px;background:#fef3c7;border:none;color:#92400e;font-size:11px;font-weight:700;">Loading...</button>';
                    } else if (attempt) {
                        var pct = attempt.pct !== undefined ? attempt.pct : Math.round(((attempt.score||0)/80)*100);
                        badge = '<span style="font-size:10px;font-weight:700;color:' + (pct>=50?'#15803d':'#dc2626') + ';">' + (attempt.score||0) + '/80 (' + pct + '%)</span>';
                        action = '<div style="display:flex;gap:6px;"><button onclick="reviewTest(\'' + testId + '\')" style="padding:4px 10px;border-radius:8px;background:#eff6ff;border:1px solid #bfdbfe;color:#1d4ed8;font-size:11px;font-weight:700;cursor:pointer;">Review</button><button onclick="launchTest(\'' + testId + '\')" style="padding:4px 10px;border-radius:8px;background:var(--primary);border:none;color:#fff;font-size:11px;font-weight:700;cursor:pointer;">Retake</button></div>';
                    } else if (isEnrolled) {
                        badge = '<span style="font-size:10px;color:#2563eb;font-weight:700;">&#x25CF; Ready</span>';
                        action = '<button onclick="launchTest(\'' + testId + '\')" style="padding:4px 14px;border-radius:8px;background:var(--primary);border:none;color:#fff;font-size:11px;font-weight:700;cursor:pointer;">&#x1F680; Start</button>';
                    } else {
                        badge = '<span style="font-size:10px;color:#64748b;font-weight:600;">Not Enrolled</span>';
                        action = '<button onclick="enrollInTest(\'' + testId + '\')" style="padding:4px 14px;border-radius:8px;background:#f0fdf4;border:1px solid #bbf7d0;color:#15803d;font-size:11px;font-weight:700;cursor:pointer;">&#x1F4DD; Enroll</button>';
                    }
                    return '<div class="test-row"><div style="display:flex;align-items:center;gap:8px;flex:1;"><span class="test-label ' + tm.labelClass + '">' + tm.icon + ' ' + tm.label + '</span><span class="meta-pill">20Q &bull; 30m</span></div><div style="display:flex;align-items:center;gap:8px;">' + badge + action + '</div></div>';
                }).join('');
                return '<div class="topic-card"><div class="topic-header"><div style="display:flex;align-items:center;gap:8px;"><span class="topic-num" style="background:${meta.bg};color:${meta.accent};">' + topic.num + '</span><div style="font-size:14px;font-weight:800;color:var(--text);">' + topic.title + '</div></div></div>' + rows + '</div>';
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