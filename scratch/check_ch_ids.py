import re

for i in range(1, 14):
    with open(f'modules/course/data/class10/science/chapter{i}_course_data.js', encoding='utf-8') as f:
        text = f.read()
    cid = re.search(r'["\']?chapterId["\']?\s*:\s*["\']([^"\']+)["\']', text)
    cnum = re.search(r'["\']?chapterNumber["\']?\s*:\s*([0-9]+)', text)
    print(f"Ch {i}: chapterId={cid.group(1) if cid else None}, chapterNumber={cnum.group(1) if cnum else None}")
