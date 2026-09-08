import json
import re

part1 = json.load(open("scratch/ch13_part1.json", "r", encoding="utf-8"))
part2 = json.load(open("scratch/ch13_part2.json", "r", encoding="utf-8"))

all_modules = part1 + part2
print(f"Total modules: {len(all_modules)}")

subscript_map = {
    r'\bCO2\b': 'CO₂',
    r'\bH2O\b': 'H₂O',
    r'\bO2\b': 'O₂',
    r'\bO3\b': 'O₃',
    r'\bN2\b': 'N₂',
    r'\bSO2\b': 'SO₂',
    r'\bNO2\b': 'NO₂',
    r'\bCH4\b': 'CH₄',
    r'\bH2\b': 'H₂',
    r'\bC6H12O6\b': 'C₆H₁₂O₆',
    r'\bFe2O3\b': 'Fe₂O₃',
    r'\bFe3O4\b': 'Fe₃O₄',
    r'\bAl2O3\b': 'Al₂O₃',
    r'\bCuSO4\b': 'CuSO₄',
    r'\bZnSO4\b': 'ZnSO₄',
    r'\bFeSO4\b': 'FeSO₄',
    r'\bCa\(OH\)2\b': 'Ca(OH)₂',
    r'\bPb\(NO3\)2\b': 'Pb(NO₃)₂',
}

def clean_text(text):
    if not isinstance(text, str):
        return text
    text = re.sub(r'\bNCERT\b', 'Curriculum', text, flags=re.IGNORECASE)
    for pattern, repl in subscript_map.items():
        text = re.sub(pattern, repl, text)
    return text

def clean_obj(obj):
    if isinstance(obj, str):
        return clean_text(obj)
    elif isinstance(obj, list):
        return [clean_obj(x) for x in obj]
    elif isinstance(obj, dict):
        return {k: clean_obj(v) for k, v in obj.items()}
    return obj

all_modules = clean_obj(all_modules)

for idx, m in enumerate(all_modules):
    m['id'] = idx + 1
    if isinstance(m.get('keyNotes'), str):
        m['keyNotes'] = [m['keyNotes']]
    for q_idx, q in enumerate(m.get('questions', [])):
        q['id'] = q_idx + 1

course_obj = {
    "chapterNumber": 13,
    "chapterTitle": "Our Environment",
    "subject": "Science",
    "className": "Class 10",
    "totalModules": 20,
    "modules": all_modules
}

js_content = f"""/* =============================================================================
   ELITE CLASSES — INTERACTIVE COURSE DATA
   Class 10 Science — Chapter 13: Our Environment
   Comprehensive Curriculum: 20 Mini-Modules, 200 Questions Total
   High Educational Depth | Class 10 Student Standard | Zero Template Boilerplate
   ============================================================================= */

const COURSE_CHAPTER_13_SCIENCE = {json.dumps(course_obj, indent=2, ensure_ascii=False)};

if (typeof window !== 'undefined') {{
    window.COURSE_CHAPTER_DATA = COURSE_CHAPTER_13_SCIENCE;
}}
if (typeof module !== 'undefined' && module.exports) {{
    module.exports = COURSE_CHAPTER_13_SCIENCE;
}}
"""

with open("modules/course/data/class10/science/chapter13_course_data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Saved modules/course/data/class10/science/chapter13_course_data.js")
