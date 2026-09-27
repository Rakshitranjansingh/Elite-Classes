#!/usr/bin/env python3
"""
=============================================================================
ELITE CLASSES — UPSC TOPIC-WISE CURRICULUM EXTRACTION ENGINE (PHASE 1)
Extracts Subject -> Topic -> Micro-Topic hierarchy from upscTopicWise.pdf
using parallel Gemini Vision API calls across 4 rotated API keys.
=============================================================================
"""

import os
import sys
import json
import time
import re
from concurrent.futures import ThreadPoolExecutor, as_completed
from PIL import Image
import pymupdf
import google.generativeai as genai

# Paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PDF_PATH = os.path.join(BASE_DIR, 'Review', 'upscTopicWise.pdf')
CACHE_DIR = os.path.join(BASE_DIR, 'Review', 'page_extractions')
CATALOG_DIR = os.path.join(BASE_DIR, 'catalog')
CATALOG_FILE = os.path.join(CATALOG_DIR, 'upsc_curriculum_catalog.json')

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

EXTRACTION_PROMPT = """
You are an expert curriculum data extractor for the UPSC Civil Services Examination.
Analyze this image from the UPSC syllabus breakdown document.
Extract every row in the table accurately into a JSON array of objects.

JSON schema:
[
  {
    "subject": "e.g. POLITY, INDIAN ECONOMY, ENVIRONMENT, GEOGRAPHY, MEDIEVAL HISTORY, etc.",
    "topic": "Main topic / module heading",
    "subtopics": [
      "Micro-topic bullet 1",
      "Micro-topic bullet 2"
    ],
    "remarks": "Strategy or remarks column content (or null)",
    "lectures": "Lecture number / duration (or null)"
  }
]

CRITICAL RULES:
1. Do not skip any bullet point or sub-topic. Every single bullet point must be its own string in 'subtopics'.
2. If the subject column is blank for a row, inherit the subject from the preceding row on this page.
3. Exclude any institute branding or watermarks from the text.
4. Return ONLY valid, raw JSON array without markdown code fences, backticks, or preamble.
"""

def slugify(text):
    text = text.lower().strip()
    text = re.sub(r'[^a-z0-9]+', '_', text)
    return text.strip('_')

def get_page_cache_path(page_num):
    return os.path.join(CACHE_DIR, f'page_{page_num:02d}.json')

def extract_page(page_num, pixmap_bytes, key_index):
    cache_path = get_page_cache_path(page_num)
    if os.path.exists(cache_path):
        try:
            with open(cache_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                print(f"[CACHE HIT] Page {page_num:02d} loaded from cache.")
                return page_num, data
        except Exception:
            pass

    api_key = API_KEYS[key_index % len(API_KEYS)]
    genai.configure(api_key=api_key)

    import io
    img = Image.open(io.BytesIO(pixmap_bytes))

    # Try primary model, fallback if needed
    for model_name in [PRIMARY_MODEL, FALLBACK_MODEL, 'gemini-2.5-flash']:
        try:
            model = genai.GenerativeModel(model_name)
            resp = model.generate_content([EXTRACTION_PROMPT, img])
            text = resp.text.strip()
            
            # Clean possible markdown fences
            if text.startswith('```'):
                text = re.sub(r'^```(?:json)?\s*', '', text)
                text = re.sub(r'\s*```$', '', text)
            
            data = json.loads(text)
            
            # Save cache
            with open(cache_path, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            
            print(f"[SUCCESS] Page {page_num:02d} extracted using {model_name} (Key #{key_index % len(API_KEYS) + 1}).")
            return page_num, data
        except Exception as e:
            err_str = str(e)
            print(f"[RETRY] Page {page_num:02d} error with {model_name}: {err_str[:120]}")
            time.sleep(2)

    return page_num, []

def normalize_subject(subj_raw):
    s = (subj_raw or '').upper().strip()
    if 'POLIT' in s or 'CONSTITUT' in s:
        return 'polity', 'Indian Polity & Governance'
    elif 'ECONOM' in s:
        return 'economy', 'Indian Economy & Development'
    elif 'ENVIRON' in s or 'ECOLOG' in s:
        return 'environment', 'Environment, Ecology & Biodiversity'
    elif 'GEOGRAPH' in s:
        return 'geography', 'Geography of India & World'
    elif 'MEDIEVAL' in s:
        return 'medieval_history', 'Medieval Indian History'
    elif 'ANCIENT' in s:
        return 'ancient_history', 'Ancient Indian History & Culture'
    elif 'MODERN' in s or 'FREEDOM' in s:
        return 'modern_history', 'Modern Indian History & Freedom Movement'
    elif 'HISTORY' in s:
        return 'history', 'Indian History & Culture'
    elif 'SCIENCE' in s or 'S&T' in s or 'TECH' in s:
        return 'science_tech', 'Science & Technology'
    elif 'INTERNATIONAL' in s or 'IR' in s or 'RELATION' in s:
        return 'ir', 'International Relations & Global Affairs'
    elif 'SECURITY' in s or 'DEFEN' in s:
        return 'internal_security', 'Internal Security & Border Management'
    elif 'DISASTER' in s:
        return 'disaster_mgmt', 'Disaster Management & Resilience'
    elif 'ETHIC' in s or 'GOVERN' in s:
        return 'governance_ethics', 'Governance, Social Justice & Ethics'
    else:
        clean = (subj_raw or 'General Studies').title().strip()
        return slugify(clean), clean

def main():
    print("=" * 70)
    print("ELITE CLASSES — UPSC CURRICULUM MULTIMODAL EXTRACTION")
    print(f"Source PDF: {PDF_PATH}")
    print(f"API Keys available: {len(API_KEYS)}")
    print("=" * 70)

    os.makedirs(CACHE_DIR, exist_ok=True)
    os.makedirs(CATALOG_DIR, exist_ok=True)

    if not os.path.exists(PDF_PATH):
        print(f"ERROR: PDF file not found at {PDF_PATH}")
        sys.exit(1)

    doc = pymupdf.open(PDF_PATH)
    total_pages = len(doc)
    print(f"Total PDF Pages: {total_pages}")

    # Pre-render pages to memory bytes
    print("Pre-rendering pages for high-throughput parallel API extraction...")
    pages_data = []
    for i in range(total_pages):
        page = doc[i]
        pix = page.get_pixmap(dpi=150)
        pages_data.append((i + 1, pix.tobytes("png")))

    print("Dispatching parallel extraction across worker threads...")
    all_results = {}
    
    # 4 parallel workers, rotating through the 4 keys
    with ThreadPoolExecutor(max_workers=4) as executor:
        futures = {}
        for idx, (p_num, img_bytes) in enumerate(pages_data):
            f = executor.submit(extract_page, p_num, img_bytes, idx)
            futures[f] = p_num

        for future in as_completed(futures):
            p_num = futures[future]
            try:
                page_num, rows = future.result()
                all_results[page_num] = rows
            except Exception as e:
                print(f"[FAIL] Error processing Page {p_num}: {e}")
                all_results[p_num] = []

    print("\nExtraction complete. Consolidating into hierarchical Master Catalog...")
    
    # Hierarchical consolidation
    # Subject -> Topics -> Subtopics
    subjects_dict = {}
    current_subject_slug = "polity"
    current_subject_title = "Indian Polity & Governance"

    for page_num in range(1, total_pages + 1):
        rows = all_results.get(page_num, [])
        for row in rows:
            raw_subj = row.get('subject')
            if raw_subj and raw_subj.strip():
                current_subject_slug, current_subject_title = normalize_subject(raw_subj)

            if current_subject_slug not in subjects_dict:
                subjects_dict[current_subject_slug] = {
                    "subjectId": current_subject_slug,
                    "subjectTitle": current_subject_title,
                    "topics": []
                }

            topic_title = (row.get('topic') or 'General Topics').strip()
            topic_slug = slugify(topic_title)
            
            # Find or create topic
            subj_topics = subjects_dict[current_subject_slug]["topics"]
            matched_topic = None
            for t in subj_topics:
                if t["topicTitle"].lower() == topic_title.lower():
                    matched_topic = t
                    break
            
            if not matched_topic:
                matched_topic = {
                    "topicId": f"{current_subject_slug}_{topic_slug}",
                    "topicTitle": topic_title,
                    "remarks": row.get('remarks') or "",
                    "lectures": row.get('lectures') or "",
                    "subtopics": []
                }
                subj_topics.append(matched_topic)

            # Append unique subtopics
            subtopics = row.get('subtopics') or []
            for st in subtopics:
                if isinstance(st, str) and st.strip():
                    st_clean = st.strip()
                    st_slug = slugify(st_clean)
                    # Check if already present
                    if not any(item["subTopicTitle"].lower() == st_clean.lower() for item in matched_topic["subtopics"]):
                        matched_topic["subtopics"].append({
                            "subTopicId": f"{matched_topic['topicId']}_{st_slug[:30]}",
                            "subTopicTitle": st_clean,
                            "sourcePage": page_num
                        })

    # Summary statistics
    total_subjects = len(subjects_dict)
    total_topics = sum(len(s["topics"]) for s in subjects_dict.values())
    total_subtopics = sum(sum(len(t["subtopics"]) for t in s["topics"]) for s in subjects_dict.values())

    catalog_data = {
        "metadata": {
            "source": "upscTopicWise.pdf",
            "extractedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ"),
            "totalSubjects": total_subjects,
            "totalTopics": total_topics,
            "totalSubtopics": total_subtopics,
            "modelsUsed": [PRIMARY_MODEL, FALLBACK_MODEL]
        },
        "subjects": list(subjects_dict.values())
    }

    with open(CATALOG_FILE, 'w', encoding='utf-8') as f:
        json.dump(catalog_data, f, indent=2, ensure_ascii=False)

    print("=" * 70)
    print("MASTER CURRICULUM CATALOG GENERATED SUCCESSFULLY!")
    print(f"File Saved: {CATALOG_FILE}")
    print(f"Total Subjects:  {total_subjects}")
    print(f"Total Topics:    {total_topics}")
    print(f"Total Subtopics: {total_subtopics}")
    print("=" * 70)

if __name__ == '__main__':
    main()
