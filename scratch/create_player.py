# -*- coding: utf-8 -*-
"""
Create modules/course/class10/economics/course_player.html
from modules/course/class10/science/course_player.html
"""
import re

with open('modules/course/class10/science/course_player.html', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace titles and references
text = text.replace('Class 10 Science Interactive Course — Elite Classes', 'Class 10 Economics Interactive Course — Elite Classes')
text = text.replace('Class 10 Science', 'Class 10 Economics')
text = text.replace('science_course_hub.html', 'economics_course_hub.html')
text = text.replace('../../data/class10/science/chapter', '../../data/class10/economics/chapter')
text = text.replace('c10_sci_ch', 'c10_econ_ch')
text = text.replace('Math.min(13, chParam)', 'Math.min(5, chParam)')
text = text.replace("subject: 'Science'", "subject: 'Economics'")

# Adjust color palette tokens to emerald / green for economics
text = text.replace('--c-primary: #1e3a8a;', '--c-primary: #065f46;')
text = text.replace('--c-primary-light: #eff6ff;', '--c-primary-light: #ecfdf5;')
text = text.replace('--c-accent: #3b82f6;', '--c-accent: #059669;')

new_picker = """<select class="chapter-picker-select" id="global-chapter-picker" onchange="onChapterSelectChange(this.value)">
                <option value="1">Ch 1: Development</option>
                <option value="2">Ch 2: Sectors of the Economy</option>
                <option value="3">Ch 3: Money and Credit</option>
                <option value="4">Ch 4: Globalisation</option>
                <option value="5">Ch 5: Consumer Rights</option>
            </select>"""

text = re.sub(r'<select class="chapter-picker-select"[\s\S]*?</select>', new_picker, text, count=1)

out_path = 'modules/course/class10/economics/course_player.html'
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(text)

print(f"Created {out_path} successfully!")
