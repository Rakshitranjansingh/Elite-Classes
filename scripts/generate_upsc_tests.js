
/**
 * generate_upsc_tests.js
 * Elite Classes ? UPSC Chapter Test Generator
 * Uses Gemini API to generate 20Q x 3 tests per topic
 * 
 * Usage: node scripts/generate_upsc_tests.js --subject ancient_history [--topic <topicId>] [--start <N>] [--end <N>]
 */

const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const path = require("path");

// -------------------------------------------------------
// CONFIG
// -------------------------------------------------------
const API_KEYS = process.env.GEMINI_API_KEYS
  ? process.env.GEMINI_API_KEYS.split(',').map(k => k.trim()).filter(Boolean)
  : [process.env.GEMINI_API_KEY || "YOUR_GEMINI_API_KEY"].filter(Boolean);

// Strictly Gemini 3.1 Flash Lite and Gemini 3.5 Flash Lite (all other models removed)
const MODELS = [
  "gemini-3.1-flash-lite",
  "gemini-3.5-flash-lite"
];

let currentKeyIdx = 0;
let currentModelIdx = 0;
let requestCount = 0;

const CATALOG_PATH = path.join(__dirname, "../modules/course/civilservices/UPSC/catalog/upsc_curriculum_catalog.json");
const OUTPUT_BASE  = path.join(__dirname, "../modules/testseries/data/civilservices/UPSC/Chaptertests");
const DELAY_MS = 1000; // 1s delay distributed across 4 keys

const SUBJECT_TITLES = {
  ancient_history: "Ancient History of India",
  art_and_culture: "Indian Art & Culture",
  disaster_mgmt: "Disaster Management & Resilience",
  economy: "Indian & World Economy",
  environment: "Environment & Ecology",
  geography: "World & Indian Geography",
  governance_ethics: "Governance, Social Justice & Ethics",
  history: "History (General)",
  indian_society: "Indian Society",
  internal_security: "Internal Security & Border Management",
  ir: "International Relations & Global Affairs",
  medieval_history: "Medieval History of India",
  modern_history: "Modern History of India",
  polity: "Indian Polity & Governance",
  science_tech: "Science & Technology",
  society: "Indian Society & Salient Features"
};

// -------------------------------------------------------
// ARG PARSING
// -------------------------------------------------------
const args = process.argv.slice(2);
const getArg = (flag) => { const i = args.indexOf(flag); return i !== -1 ? args[i + 1] : null; };
const SUBJECT = getArg("--subject");
const TOPIC_FILTER = getArg("--topic");
const START_IDX = parseInt(getArg("--start") || "0");
const END_IDX = parseInt(getArg("--end") || "999");

if (!SUBJECT) {
  console.error("ERROR: --subject <subject_id> is required");
  console.error("Example: node generate_upsc_tests.js --subject ancient_history");
  process.exit(1);
}

// -------------------------------------------------------
// HELPERS
// -------------------------------------------------------
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

function getNextKey() {
  requestCount++;
  const key = API_KEYS[currentKeyIdx % API_KEYS.length];
  currentKeyIdx = (currentKeyIdx + 1) % API_KEYS.length;
  return key;
}

function getNextModel(attempt = 0) {
  return MODELS[(currentModelIdx + attempt) % MODELS.length];
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "").substring(0, 50);
}

function escapeJs(str) {
  return str.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, "\\n");
}

// -------------------------------------------------------
// PROMPT BUILDER
// -------------------------------------------------------
function buildPrompt(topicTitle, subtopics, subjectTitle, testType, testIndex) {
  const subtopicList = subtopics.map((s, i) => `${i + 1}. ${s}`).join("\n");

  const CONFIGS = {
    A: {
      label: "Part A — Easy & Moderate",
      difficulty: "easy_moderate",
      distribution: "10 Easy (direct recall, UPSC factual) + 7 Moderate (application, one-step reasoning) + 3 Tricky (subtle misconceptions)",
      instructions: "Questions should be direct, factual recall type. Options should not be too obvious — include 2 plausible distractors per question. Cover the first half of subtopics more heavily.",
      markingNote: "easy and moderate level for aspirants just starting this topic"
    },
    B: {
      label: "Part B — Hard & Tricky",
      difficulty: "hard_tricky",
      distribution: "5 Hard (multi-step reasoning, inter-topic connections) + 10 Tricky (subtle distractor-based, common UPSC misconceptions, PYQ-pattern) + 5 Very Hard (advanced analysis, UPSC Mains integration)",
      instructions: "Questions should be UPSC Prelims PYQ-style. Include statement-based (A and R type), match-the-following concepts in MCQ form, and chronological ordering. Cover the second half of subtopics more heavily.",
      markingNote: "hard level for serious UPSC aspirants — PYQ aligned"
    },
    C: {
      label: "Part C — UPSC Synthesis & PYQ",
      difficulty: "very_hard",
      distribution: "3 Hard (advanced application) + 7 Very Hard (synthesis, Mains-Prelims bridge) + 10 Olympiad-level (multi-concept integration, analytical, current-affairs hook)",
      instructions: "Questions must mimic actual UPSC Prelims PYQ style. Include: (a) Assertion-Reason format questions, (b) 'Which of the following is/are correct?' multi-statement, (c) Chronological questions. All options must be highly plausible. Cover all subtopics holistically.",
      markingNote: "UPSC Prelims PYQ synthesis level — toughest tier"
    }
  };

  const cfg = CONFIGS[testType];

  return `You are an expert UPSC Prelims question author for Elite Classes, India's premier coaching institute.

Generate EXACTLY 20 high-quality UPSC Prelims style MCQ questions for the following:
- Subject: ${subjectTitle}
- Topic: ${topicTitle}
- Test: ${cfg.label}
- Subtopics covered: 
${subtopicList}

DIFFICULTY DISTRIBUTION: ${cfg.distribution}
SPECIAL INSTRUCTIONS: ${cfg.instructions}

STRICT RULES:
1. All 20 questions MUST be about "${topicTitle}" subtopics listed above.
2. Every question must have exactly 4 options (A, B, C, D).
3. Exactly ONE correct answer per question.
4. UPSC negative marking: 4 marks correct, -1.33 wrong (1/3 penalty).
5. NEVER mention "NCERT" — brand as Elite Classes curriculum.
6. Use proper Unicode: H₂O, CO₂, →, ⇌, ↑, ↓, ², ³, %, °C, BCE, CE etc.
7. Explanations must be detailed and educational (2-3 sentences minimum).
8. This is ${cfg.markingNote}.

Return ONLY a valid JSON array with exactly 20 objects. Each object:
{
  "q": 1,
  "difficulty": "easy"|"moderate"|"hard"|"tricky"|"very_hard",
  "question": "Question text?",
  "A": "Option A",
  "B": "Option B", 
  "C": "Option C",
  "D": "Option D",
  "answer": "A"|"B"|"C"|"D",
  "explanation": "Detailed explanation of why the answer is correct."
}

DO NOT include any markdown, code fences, or extra text. Return ONLY the JSON array starting with [ and ending with ].`;
}

// -------------------------------------------------------
// API CALL WITH RETRY
// -------------------------------------------------------
async function callGemini(prompt, retries = 6) {
  for (let attempt = 0; attempt < retries; attempt++) {
    const apiKey = getNextKey();
    const modelName = getNextModel(attempt);
    try {
      process.stdout.write(`[${modelName}] `);
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: modelName,
        generationConfig: { responseMimeType: "application/json" }
      });
      const result = await model.generateContent(prompt);
      const text = result.response.text().trim();
      // Strip markdown fences if present
      const clean = text.replace(/^```json?\s*/i, "").replace(/\s*```$/i, "").trim();
      let parsed;
      try {
        parsed = JSON.parse(clean);
      } catch (jsonErr) {
        const start = clean.indexOf("[");
        const end = clean.lastIndexOf("]");
        if (start !== -1 && end !== -1 && end > start) {
          parsed = JSON.parse(clean.substring(start, end + 1));
        } else {
          throw jsonErr;
        }
      }
      if (!Array.isArray(parsed) || parsed.length < 18) {
        throw new Error(`Expected ~20 questions, got ${Array.isArray(parsed) ? parsed.length : "non-array"}`);
      }
      currentModelIdx = (currentModelIdx + 1) % MODELS.length;
      return parsed.slice(0, 20); // ensure max 20
    } catch (err) {
      const is503 = err.message && (err.message.includes('503') || err.message.includes('high demand') || err.message.includes('overload'));
      const waitMs = is503 ? (3000 + attempt * 2000) : (1500 * (attempt + 1));
      console.warn(`\n  [Attempt ${attempt + 1}/${retries} | ${modelName}] ${err.message.substring(0, 100)}`);
      if (attempt < retries - 1) {
        process.stdout.write(`  Waiting ${waitMs/1000}s... `);
        await sleep(waitMs);
      }
    }
  }
  throw new Error("All API retry attempts failed across Gemini 3.1 & 3.5 Flash Lite");
}

// -------------------------------------------------------
// FILE WRITER
// -------------------------------------------------------
function writeTestFile(outputDir, fileName, assessmentData, questions, topicNum, testType, topicTitle, subjectTitle, testLabel) {
  const difficultyBreakdown = {
    A: { easy: 10, moderate: 7, tricky: 3, hard: 0, very_hard: 0 },
    B: { easy: 0, moderate: 0, tricky: 10, hard: 5, very_hard: 5 },
    C: { easy: 0, moderate: 0, tricky: 0, hard: 3, very_hard: 17 }
  };

  const testId = `ts_upsc_${assessmentData.subjectId}_t${String(topicNum).padStart(2,"0")}${testType.toLowerCase()}`;

  const diffBreakdown = difficultyBreakdown[testType];
  const diffBreakdownStr = JSON.stringify(diffBreakdown, null, 8).split("\n").map(l => "        " + l).join("\n").trim();

  const questionsStr = questions.map((q, i) => {
    const qNum = i + 1;
    const qId = `${testId}_q${String(qNum).padStart(2, "0")}`;
    return `        {
            id: '${qId}',
            question_number: ${qNum},
            difficulty: '${escapeJs(q.difficulty || (testType === "A" ? "easy" : testType === "B" ? "hard" : "very_hard"))}',
            question_text: '${escapeJs(q.question || "")}',
            question_type: 'mcq',
            option_a: '${escapeJs(q.A || "")}',
            option_b: '${escapeJs(q.B || "")}',
            option_c: '${escapeJs(q.C || "")}',
            option_d: '${escapeJs(q.D || "")}',
            correct_option: '${(q.answer || "A").toUpperCase()}',
            marks: 4.00,
            negative_marks: 1.33,
            explanation: '${escapeJs(q.explanation || "")}'
        }`;
  }).join(",\n");

  const varName = `UPSC_${assessmentData.subjectId.toUpperCase().replace(/-/g,"_")}_T${String(topicNum).padStart(2,"0")}${testType}`;
  const statusVal = (topicNum === 1 && testType === "A") ? "published" : "inactive";

  const content = `/**
 * Elite Classes ? UPSC Chapter Test Series
 * Subject  : ${subjectTitle}
 * Topic    : ${topicTitle}
 * Test     : ${testLabel}
 * ID       : ${testId}
 * Format   : 20 Questions | 30 Mins | 80 Marks | UPSC Negative Marking
 * Standard : UPSC Prelims Level
 * Generated: ${new Date().toISOString().split("T")[0]}
 */

const ${varName} = {
    id: '${testId}',
    title: '${escapeJs(topicTitle)} ? ${testLabel}',
    cls: 'Civil Services',
    subject: '${escapeJs(subjectTitle)}',
    exam: 'UPSC Prelims',
    duration_mins: 30,
    total_marks: 80,
    passing_marks: 40,
    negative_marking: 1.33,
    questions_count: 20,
    status: '${statusVal}',
    difficulty_level: '${["A","B","C"][["A","B","C"].indexOf(testType)] === "A" ? "easy_moderate" : testType === "B" ? "hard_tricky" : "very_hard"}',
    difficulty_breakdown: ${diffBreakdownStr},
    questions: [
${questionsStr}
    ]
};

if (typeof window !== 'undefined') {
    if (!window.EliteTestRegistry) window.EliteTestRegistry = [];
    window.EliteTestRegistry.push(${varName});
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ${varName};
}
`;

  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
  const filePath = path.join(outputDir, fileName);
  fs.writeFileSync(filePath, content, "utf8");
  return filePath;
}

// -------------------------------------------------------
// MAIN GENERATOR
// -------------------------------------------------------
async function generateSubject(subjectId) {
  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, "utf8"));
  const subjectData = catalog.subjects.find(s => s.subjectId === subjectId);
  if (!subjectData) {
    console.error(`Subject "${subjectId}" not found in catalog.`);
    process.exit(1);
  }

  const subjectTitle = SUBJECT_TITLES[subjectId] || subjectData.subjectTitle;
  const outputDir = path.join(OUTPUT_BASE, subjectId);
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const topics = subjectData.topics.filter((t, idx) => {
    if (TOPIC_FILTER && t.topicId !== TOPIC_FILTER) return false;
    if (idx < START_IDX || idx > END_IDX) return false;
    return true;
  });

  console.log(`\n${"=".repeat(60)}`);
  console.log(`UPSC Test Generator | Subject: ${subjectId}`);
  console.log(`Generating 3 tests ? ${topics.length} topics = ${topics.length * 3} files`);
  console.log(`Output: ${outputDir}`);
  console.log(`${"=".repeat(60)}\n`);

  const results = { success: 0, failed: 0, skipped: 0 };
  const pendingTasks = [];

  for (let ti = 0; ti < topics.length; ti++) {
    const topic = topics[ti];
    const topicNum = subjectData.topics.findIndex(t => t.topicId === topic.topicId) + 1;
    const topicSlug = slugify(topic.topicTitle);
    const subtopics = (topic.subtopics || []).map(s => s.subTopicTitle || s);
    const coverageSubtopics = subtopics.length > 0 ? subtopics : [
      `Overview and introduction of ${topic.topicTitle}`,
      `Key features and significance of ${topic.topicTitle}`,
      `Historical context and developments in ${topic.topicTitle}`,
      `Impact and legacy of ${topic.topicTitle}`
    ];

    for (const testType of ["A", "B", "C"]) {
      const testLabels = {
        A: "Part A: Easy & Moderate",
        B: "Part B: Hard & Tricky",
        C: "Part C: UPSC Synthesis & PYQ"
      };
      const fileName = `topic_${String(topicNum).padStart(2,"0")}${testType.toLowerCase()}_${topicSlug}.js`;
      const filePath = path.join(outputDir, fileName);

      if (fs.existsSync(filePath)) {
        results.skipped++;
      } else {
        pendingTasks.push({
          topicNum,
          topicTitle: topic.topicTitle,
          coverageSubtopics,
          testType,
          fileName,
          filePath,
          testLabel: testLabels[testType]
        });
      }
    }
  }

  console.log(`Discovered: ${pendingTasks.length} pending tests to generate (${results.skipped} already exist).`);
  if (pendingTasks.length === 0) {
    console.log(`All tests for ${subjectId} are already up to date!`);
    return results;
  }

  console.log(`Launching 4 Parallel Workers (1 Dedicated Worker per API Key)...\n`);

  async function runWorker(workerId) {
    const apiKey = API_KEYS[workerId];
    let modelToggle = workerId % MODELS.length;

    while (pendingTasks.length > 0) {
      const task = pendingTasks.shift();
      if (!task) break;

      const tag = `[W${workerId + 1}:${task.fileName}]`;
      console.log(`${tag} Generating ${task.testLabel}...`);

      let completed = false;
      for (let attempt = 0; attempt < 6; attempt++) {
        const modelName = MODELS[(modelToggle + attempt) % MODELS.length];
        try {
          const genAI = new GoogleGenerativeAI(apiKey);
          const model = genAI.getGenerativeModel({
            model: modelName,
            generationConfig: { responseMimeType: "application/json" }
          });
          const prompt = buildPrompt(task.topicTitle, task.coverageSubtopics, subjectTitle, task.testType, task.topicNum);
          const callPromise = model.generateContent(prompt);
          const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error("API call timed out after 35s")), 35000)
          );
          const result = await Promise.race([callPromise, timeoutPromise]);
          const text = result.response.text().trim();
          const clean = text.replace(/^```json?\s*/i, "").replace(/\s*```$/i, "").trim();
          let parsed;
          try {
            parsed = JSON.parse(clean);
          } catch (jsonErr) {
            const start = clean.indexOf("[");
            const end = clean.lastIndexOf("]");
            if (start !== -1 && end !== -1 && end > start) {
              parsed = JSON.parse(clean.substring(start, end + 1));
            } else {
              throw jsonErr;
            }
          }
          if (!Array.isArray(parsed) || parsed.length < 18) {
            throw new Error(`Expected ~20 questions, got ${Array.isArray(parsed) ? parsed.length : "non-array"}`);
          }
          const questions = parsed.slice(0, 20);
          const written = writeTestFile(
            outputDir, task.fileName,
            { subjectId },
            questions, task.topicNum, task.testType,
            task.topicTitle, subjectTitle,
            task.testLabel
          );
          console.log(`${tag} [OK] 20Q (${modelName})`);
          results.success++;
          completed = true;
          modelToggle = (modelToggle + 1) % MODELS.length;

          // Syntax check
          try {
            require("child_process").execSync(`node --check "${written}"`, { stdio: "pipe" });
          } catch (syntaxErr) {
            console.warn(`  [WARN] Syntax warning on ${task.fileName}`);
          }

          await sleep(DELAY_MS);
          break;
        } catch (err) {
          const is503 = err.message && (err.message.includes('503') || err.message.includes('high demand') || err.message.includes('overload'));
          const waitMs = is503 ? (3000 + attempt * 2000) : (1500 * (attempt + 1));
          console.warn(`  ${tag} [Attempt ${attempt + 1}/6 | ${modelName}] ${err.message.substring(0, 80)} (retrying in ${waitMs/1000}s)`);
          if (attempt < 5) await sleep(waitMs);
        }
      }

      if (!completed) {
        console.error(`${tag} [FAIL] All retries exhausted`);
        results.failed++;
        const stubContent = `// GENERATION FAILED\n// Topic: ${task.topicTitle}\n`;
        fs.writeFileSync(task.filePath + ".failed.txt", stubContent);
      }
    }
  }

  await Promise.all(API_KEYS.map((_, i) => runWorker(i)));

  console.log(`\n${"=".repeat(60)}`);
  console.log(`DONE | Subject: ${subjectId}`);
  console.log(`  Success : ${results.success}`);
  console.log(`  Failed  : ${results.failed}`);
  console.log(`  Skipped : ${results.skipped}`);
  console.log(`${"=".repeat(60)}\n`);

  return results;
}

// -------------------------------------------------------
// ENTRY
// -------------------------------------------------------
generateSubject(SUBJECT).catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
