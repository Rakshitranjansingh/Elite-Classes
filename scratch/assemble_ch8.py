# -*- coding: utf-8 -*-
"""
Assemble Chapter 8 Course Data
Combines Part 1 (m01-m10) and Part 2 (m11-m20)
Outputs to modules/course/data/class10/science/chapter8_course_data.js
"""
import json

with open('scratch/ch8_part1.json', 'r', encoding='utf-8') as f:
    part1 = json.load(f)

with open('scratch/ch8_part2.json', 'r', encoding='utf-8') as f:
    part2 = json.load(f)

all_modules = part1 + part2

# Apply automatic chemical formula / symbol unicode replacements
subs = {
    'CO2': 'CO₂',
    'H2O': 'H₂O',
    'O2': 'O₂',
}

def clean_obj(obj):
    if isinstance(obj, str):
        res = obj
        for k, v in subs.items():
            res = res.replace(k, v)
        return res
    elif isinstance(obj, list):
        return [clean_obj(x) for x in obj]
    elif isinstance(obj, dict):
        return {k: clean_obj(v) for k, v in obj.items()}
    return obj

all_modules = clean_obj(all_modules)

for m in all_modules:
    if isinstance(m.get('keyNotes'), str):
        m['keyNotes'] = [m['keyNotes']]

chapter8_data = {
    "chapterNumber": 8,
    "chapterTitle": "Heredity",
    "subject": "Science",
    "className": "Class 10",
    "totalModules": len(all_modules),
    "modules": all_modules
}

output_content = f"""/* =============================================================================
   ELITE CLASSES — INTERACTIVE COURSE DATA
   Class 10 Science — Chapter 8: Heredity
   Comprehensive Curriculum: 20 Mini-Modules, 200 Questions Total
   High Educational Depth | Class 10 Student Standard | Zero Template Boilerplate
   ============================================================================= */

const COURSE_CHAPTER_8_SCIENCE = {json.dumps(chapter8_data, indent=4, ensure_ascii=False)};

if (typeof window !== 'undefined') {{
    window.COURSE_CHAPTER_DATA = COURSE_CHAPTER_8_SCIENCE;
}}
if (typeof module !== 'undefined' && module.exports) {{
    module.exports = COURSE_CHAPTER_8_SCIENCE;
}}
"""

target_path = 'modules/course/data/class10/science/chapter8_course_data.js'
with open(target_path, 'w', encoding='utf-8') as f:
    f.write(output_content)

print(f"Successfully assembled Chapter 8 course data to {target_path}!")
print(f"Total modules: {len(all_modules)}, Total questions: {sum(len(m['questions']) for m in all_modules)}")
