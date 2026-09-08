import pypdf
import json

reader = pypdf.PdfReader('modules/testseries/data/class10/science/ncert/jesc102.pdf')
pages_text = []

for i, page in enumerate(reader.pages):
    text = page.extract_text()
    pages_text.append({
        'page': i + 1,
        'text': text
    })

with open('scratch/ch2_raw_text.json', 'w', encoding='utf-8') as f:
    json.dump(pages_text, f, indent=2, ensure_ascii=False)

print(f"Extracted {len(pages_text)} pages from jesc102.pdf to scratch/ch2_raw_text.json")
