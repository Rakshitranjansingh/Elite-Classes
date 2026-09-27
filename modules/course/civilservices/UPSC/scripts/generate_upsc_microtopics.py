#!/usr/bin/env python3
"""
=============================================================================
ELITE CLASSES — UPSC MICRO-TOPIC CONTENT SYNTHESIS ENGINE (PHASE 2)
Generates unique, high-yield, current UPSC Prelims & Mains standard content
for every sub-topic individually using parallel API calls across 4 rotated keys.
Models: Gemini 3.5 Flash Lite, Gemini 3.1 Flash Lite.
=============================================================================
"""

import os
import sys
import json
import time
import re
import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
import google.generativeai as genai

# Directories
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CATALOG_FILE = os.path.join(BASE_DIR, 'catalog', 'upsc_curriculum_catalog.json')
SUBJECTS_DIR = os.path.join(BASE_DIR, 'subjects')
PROGRESS_FILE = os.path.join(BASE_DIR, 'catalog', 'generation_progress.json')

# Dynamic API Keys loader from environment or .env
def load_api_keys():
    keys = []
    env_keys = os.environ.get('GEMINI_API_KEYS') or os.environ.get('GEMINI_API_KEY')
    if env_keys:
        keys.extend([k.strip() for k in env_keys.split(',') if k.strip()])

    root_dir = os.path.abspath(os.path.join(BASE_DIR, '..', '..', '..', '..'))
    env_file = os.path.join(root_dir, '.env')
    if os.path.exists(env_file):
        with open(env_file, 'r', encoding='utf-8') as f:
            for line in f:
                if line.startswith('GEMINI_API_KEYS='):
                    val = line.split('=', 1)[1].strip()
                    keys.extend([k.strip() for k in val.split(',') if k.strip()])
                elif line.startswith('GEMINI_API_KEY=') and not keys:
                    keys.append(line.split('=', 1)[1].strip())
    return list(dict.fromkeys(keys))

API_KEYS = load_api_keys()

PRIMARY_MODEL = 'gemini-3.5-flash-lite'
FALLBACK_MODEL = 'gemini-3.1-flash-lite'

PROMPT_TEMPLATE = """
You are a senior UPSC Civil Services faculty member and curriculum architect at Elite Classes.
Create a comprehensive, 100% unique, authoritative, and exhaustive study module for the following sub-topic:

============================================================
SUBJECT:     {subject}
TOPIC:       {topic}
SUB-TOPIC:   {subtopic}
REMARKS/NOTES: {remarks}
============================================================

CRITICAL MANDATES:
1. Current UPSC Standard: Match the latest UPSC CSE trend (analytical, multi-disciplinary, practical governance orientation).
2. Zero Boilerplate: Provide deep, authentic, subject-specific insights. No generic placeholders or repetitive sentences.
3. Authentic PYQs: Provide real or authentic UPSC Prelims (2013–2024) and Mains PYQs on or closely relevant to this exact topic.
4. Model Mains Q&A: Craft a high-yield question (10 Marks / 150 words or 15 Marks / 250 words) with a complete, structured model answer (Introduction, Multi-dimensional Headings, Reports/Case laws, Flowchart/Diagram, Way Forward).
5. Output format: Return strictly valid raw JSON conforming exactly to the schema below without markdown code fences or backticks.

REQUIRED JSON SCHEMA:
{{
  "microTopicId": "{microtopic_id}",
  "subjectId": "{subject_id}",
  "subjectTitle": "{subject}",
  "topicId": "{topic_id}",
  "topicTitle": "{topic}",
  "subTopicTitle": "{subtopic}",
  "syllabusMapping": {{
    "prelims": "Relevant Prelims GS-I area",
    "mains": "Relevant Mains GS Paper (GS-I / GS-II / GS-III / GS-IV) and syllabus heading"
  }},
  "lectureHoursEstimate": "{lectures}",

  "prelimsCapsule": {{
    "coreConceptSummary": "Concise high-yield concept definition and context (2-3 sentences).",
    "highYieldFacts": [
      "Fact 1: Key statutory/constitutional provisions, specific numbers, or timeline.",
      "Fact 2: Institutional roles, nodal ministries, or bodies involved.",
      "Fact 3: Exceptions, conditions, or thresholds.",
      "Fact 4: Critical geographic/economic/scientific parameters.",
      "Fact 5: Recent policy, international index, or landmark report."
    ],
    "trapsAndElimination": [
      "Trap 1: Common examiner distractor (e.g. confusing discretionary with mandatory powers, or ministry names).",
      "Trap 2: Sub-distinction between closely related terms or constitutional articles."
    ],
    "keyArticlesOrStatutes": [
      "Relevant Article/Section/Act name"
    ]
  }},

  "mainsFramework": {{
    "inDepthTheoryHtml": "Rich semantic HTML (<h3>, <p>, <ul>, <li>, <strong>) containing a thorough 400-600 word master analytical treatment covering origins, institutional architecture, contemporary challenges, and governance impacts.",
    "dimensions": {{
      "constitutional_or_legal": "Specific legal/constitutional architecture",
      "socio_economic": "Impact on society, equity, and vulnerable groups",
      "administrative_governance": "Implementation hurdles, inter-agency coordination",
      "international_or_comparative": "Global best practices or international treaty obligations"
    }},
    "landmarkJudgmentsOrReports": [
      "Specific Supreme Court Judgments or Committee recommendations (e.g., 2nd ARC, Sarkaria, Punchhi, Law Commission, NITI Aayog)"
    ],
    "structuredDiagramAscii": "Clear multi-step ASCII flowchart or schematic structure summarizing the concept/process for answer scripts"
  }},

  "previousYearsQuestions": {{
    "prelims": [
      {{
        "year": 2021,
        "question": "Full authentic or representative UPSC Prelims question statement...",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "answer": "Option A",
        "explanation": "Detailed explanation showing step-by-step reasoning and why distractors are eliminated."
      }}
    ],
    "mains": [
      {{
        "year": 2020,
        "paper": "GS-II",
        "marks": 15,
        "question": "Full authentic or representative UPSC Mains question statement."
      }}
    ]
  }},

  "modelMainsQA": {{
    "question": "Well-formulated UPSC Mains question with directive (Discuss / Critically Analyze / Evaluate) (150/250 Words, 10/15 Marks)",
    "approach": {{
      "intro": "How to introduce the answer (definition/context/article)",
      "body": "Core arguments, headings, data, and institutional perspectives to cover",
      "conclusion": "Actionable way forward, constitutional morality, or SDG/Vision 2047 link"
    }},
    "modelAnswerHtml": "Comprehensive model answer in clean semantic HTML with clear bold subheadings, bulleted arguments, specific data, and concluding way forward."
  }},

  "practiceMCQs": [
    {{
      "id": "mcq_01",
      "question": "Consider the following statements regarding {subtopic}: ...",
      "options": ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
      "answer": "Both 1 and 2",
      "explanation": "Clear explanation of both statements."
    }},
    {{
      "id": "mcq_02",
      "question": "High-yield conceptual question 2...",
      "options": ["A", "B", "C", "D"],
      "answer": "A",
      "explanation": "Clear explanation."
    }}
  ]
}}
"""

def slugify(text):
    text = text.lower().strip()
    text = re.sub(r'[^a-z0-9]+', '_', text)
    return text.strip('_')

def get_progress():
    if os.path.exists(PROGRESS_FILE):
        try:
            with open(PROGRESS_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            pass
    return {"completed": [], "failed": []}

def save_progress(progress):
    os.makedirs(os.path.dirname(PROGRESS_FILE), exist_ok=True)
    with open(PROGRESS_FILE, 'w', encoding='utf-8') as f:
        json.dump(progress, f, indent=2)

def generate_subtopic(subtopic_meta, key_index):
    subtopic_id = subtopic_meta["subTopicId"]
    target_path = subtopic_meta["targetPath"]

    if os.path.exists(target_path):
        return subtopic_id, True, "Already exists"

    os.makedirs(os.path.dirname(target_path), exist_ok=True)
    api_key = API_KEYS[key_index % len(API_KEYS)]
    genai.configure(api_key=api_key)

    prompt = PROMPT_TEMPLATE.format(
        subject=subtopic_meta["subjectTitle"],
        topic=subtopic_meta["topicTitle"],
        subtopic=subtopic_meta["subTopicTitle"],
        remarks=subtopic_meta.get("remarks") or "Standard curriculum",
        lectures=subtopic_meta.get("lectures") or "1-2 Hours",
        microtopic_id=subtopic_id,
        subject_id=subtopic_meta["subjectId"],
        topic_id=subtopic_meta["topicId"]
    )

    # Rotate keys if any key encounters a rate limit or error
    for offset in range(len(API_KEYS)):
        current_key = API_KEYS[(key_index + offset) % len(API_KEYS)]
        genai.configure(api_key=current_key)

        for model_name in [PRIMARY_MODEL, FALLBACK_MODEL, 'gemini-2.5-flash']:
            try:
                model = genai.GenerativeModel(model_name)
                resp = model.generate_content(prompt)
                text = resp.text.strip()
                
                # Remove markdown formatting if wrapped
                if text.startswith('```'):
                    text = re.sub(r'^```(?:json)?\s*', '', text)
                    text = re.sub(r'\s*```$', '', text)

                data = json.loads(text)
                
                # Save individual JSON module
                with open(target_path, 'w', encoding='utf-8') as f:
                    json.dump(data, f, indent=2, ensure_ascii=False)
                    
                return subtopic_id, True, f"Generated with {model_name} (Key #{(key_index + offset) % len(API_KEYS) + 1})"
            except Exception as e:
                err_msg = str(e)
                if "429" in err_msg or "ResourceExhausted" in err_msg or "quota" in err_msg.lower():
                    time.sleep(3)
                else:
                    time.sleep(1)

    return subtopic_id, False, f"Failed across all keys and models: {err_msg[:120]}"

def main():
    parser = argparse.ArgumentParser(description="Elite Classes UPSC Micro-Topic Content Generator")
    parser.add_argument("--subject", type=str, help="Generate only for specific subject ID (e.g. polity, economy)")
    parser.add_argument("--limit", type=int, default=0, help="Limit number of subtopics to process (0 = all)")
    parser.add_argument("--workers", type=int, default=4, help="Number of parallel worker threads (default: 4)")
    args = parser.parse_args()

    if not os.path.exists(CATALOG_FILE):
        print(f"ERROR: Catalog file not found at {CATALOG_FILE}")
        print("Please run extract_upsc_syllabus.py first to build the master catalog.")
        sys.exit(1)

    with open(CATALOG_FILE, 'r', encoding='utf-8') as f:
        catalog = json.load(f)

    progress = get_progress()
    completed_set = set(progress.get("completed", []))

    # Flatten queue of subtopics to generate
    queue = []
    for subj in catalog.get("subjects", []):
        subj_id = subj["subjectId"]
        if args.subject and subj_id.lower() != args.subject.lower():
            continue

        for top in subj.get("topics", []):
            top_id = top["topicId"]
            top_slug = slugify(top["topicTitle"])
            
            for st in top.get("subtopics", []):
                st_id = st["subTopicId"]
                st_slug = slugify(st["subTopicTitle"])[:40]
                target_path = os.path.join(SUBJECTS_DIR, subj_id, "topics", top_slug, f"{st_slug}.json")

                if st_id in completed_set and os.path.exists(target_path):
                    continue

                queue.append({
                    "subjectId": subj_id,
                    "subjectTitle": subj["subjectTitle"],
                    "topicId": top_id,
                    "topicTitle": top["topicTitle"],
                    "subTopicId": st_id,
                    "subTopicTitle": st["subTopicTitle"],
                    "remarks": top.get("remarks"),
                    "lectures": top.get("lectures"),
                    "targetPath": target_path
                })

    if args.limit > 0:
        queue = queue[:args.limit]

    print("=" * 70)
    print("ELITE CLASSES — UPSC MICRO-TOPIC CONTENT SYNTHESIS")
    print(f"Target Queue: {len(queue)} micro-topics")
    print(f"Parallel Workers: {args.workers}")
    print(f"Models: {PRIMARY_MODEL}, {FALLBACK_MODEL}")
    print("=" * 70)

    if not queue:
        print("All matching micro-topics have already been generated!")
        return

    # Parallel Execution
    with ThreadPoolExecutor(max_workers=args.workers) as executor:
        futures = {}
        for idx, item in enumerate(queue):
            f = executor.submit(generate_subtopic, item, idx)
            futures[f] = item

        for future in as_completed(futures):
            item = futures[future]
            st_id, success, message = future.result()
            if success:
                print(f"[OK] {item['subjectTitle']} > {item['subTopicTitle']}: {message}")
                if st_id not in progress["completed"]:
                    progress["completed"].append(st_id)
            else:
                print(f"[ERROR] {item['subTopicTitle']}: {message}")
                if st_id not in progress["failed"]:
                    progress["failed"].append(st_id)

            save_progress(progress)

    print("\nBatch generation complete. Progress updated in", PROGRESS_FILE)

if __name__ == '__main__':
    main()
