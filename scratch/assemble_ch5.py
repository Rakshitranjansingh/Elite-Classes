# -*- coding: utf-8 -*-
"""
Assemble Chapter 5 Course Data
Combines Part 1 (m01-m10) and Part 2 (m11-m20)
Outputs to modules/course/data/class10/science/chapter5_course_data.js
"""
import json

with open('scratch/ch5_part1.json', 'r', encoding='utf-8') as f:
    part1 = json.load(f)

with open('scratch/ch5_part2.json', 'r', encoding='utf-8') as f:
    part2 = json.load(f)

all_modules = part1 + part2

chapter5_data = {
    "chapterNumber": 5,
    "chapterTitle": "Life Processes",
    "subject": "Science",
    "className": "Class 10",
    "totalModules": len(all_modules),
    "modules": all_modules
}

output_content = f"""/* =============================================================================
   ELITE CLASSES — INTERACTIVE COURSE DATA
   Class 10 Science — Chapter 5: Life Processes
   Comprehensive Curriculum: 20 Mini-Modules, 200 Questions Total
   High Educational Depth | Class 10 Student Standard | Zero Template Boilerplate
   ============================================================================= */

const COURSE_CHAPTER_5_SCIENCE = {json.dumps(chapter5_data, indent=4, ensure_ascii=False)};

if (typeof window !== 'undefined') {{
    window.COURSE_CHAPTER_DATA = COURSE_CHAPTER_5_SCIENCE;
}}
if (typeof module !== 'undefined' && module.exports) {{
    module.exports = COURSE_CHAPTER_5_SCIENCE;
}}
"""

out_file = 'modules/course/data/class10/science/chapter5_course_data.js'
with open(out_file, 'w', encoding='utf-8') as f:
    f.write(output_content)

print(f"Successfully assembled Chapter 5 to {out_file}")
print(f"Modules: {len(all_modules)}, Total Questions: {sum(len(m['questions']) for m in all_modules)}")
