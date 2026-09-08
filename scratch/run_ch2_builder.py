import json
import re
import os

# Read the starter modules from generate_ch2_complete.py
with open('scratch/generate_ch2_complete.py', 'r', encoding='utf-8') as f:
    starter_code = f.read()

# We will write the full generator that outputs chapter2_course_data.js directly
generator_code = """
import json
import re
import os

# Load Chapter 2 test bank questions
with open('modules/testseries/data/class10/science/chapter2_acids_bases_salts.js', 'r', encoding='utf-8') as f:
    bank_js = f.read()

questions_raw = []
pattern = re.compile(r'\\{\\s*id:\\s*(\\d+),\\s*question:\\s*"([^"]+)",\\s*options:\\s*\\[([\\s\\S]*?)\\],\\s*correct_option:\\s*\\'([A-D])\\',\\s*explanation:\\s*"([^"]+)"\\s*\\}')

for match in pattern.finditer(bank_js):
    q_id = int(match.group(1))
    q_text = match.group(2)
    options_raw = match.group(3)
    correct_opt = match.group(4)
    explanation = match.group(5)
    
    opt_pattern = re.compile(r'\\{\\s*key:\\s*\\'([A-D])\\',\\s*text:\\s*"([^"]+)"\\s*\\}')
    options = []
    correct_answer = ""
    for opt_match in opt_pattern.finditer(options_raw):
        k = opt_match.group(1)
        t = opt_match.group(2)
        options.append(t)
        if k == correct_opt:
            correct_answer = t
            
    questions_raw.append({
        'id': q_id,
        'question': q_text,
        'options': options,
        'answer': correct_answer,
        'explanation': explanation
    })

def get_bank_q(num):
    for q in questions_raw:
        if q['id'] == num:
            return q
    raise ValueError(f"Question {num} not found")

def clean_txt(s):
    return s.replace("NCERT", "curriculum").strip()
"""

print("Writing full generator...")
