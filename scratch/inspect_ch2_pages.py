import json

with open('scratch/ch2_raw_text.json', encoding='utf-8') as f:
    pages = json.load(f)

for p in pages:
    lines = [l.strip() for l in p['text'].split('\n') if l.strip()]
    header = ' | '.join(lines[:4]) if lines else 'Empty'
    print(f"Page {p['page']}: {header[:120]}")
