import json

with open('scratch/ch3_bank_questions.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

print(f"Total questions in bank: {len(questions)}")
for i, q in enumerate(questions):
    print(f"Q{q['id']}: {q['question'][:80]}")
