import json

with open('scratch/ch4_bank_questions.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

print(f"Total questions in bank: {len(questions)}")
for i in range(0, len(questions), 4):
    q = questions[i]
    print(f"Q{q['id']}: {q['question'][:80]}")
