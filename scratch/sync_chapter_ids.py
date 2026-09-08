import re

for i in range(1, 14):
    path = f'modules/course/data/class10/science/chapter{i}_course_data.js'
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    expected_id = f'"chapterId": "c10_sci_ch{i}",'
    if f'"chapterId": "c10_sci_ch{i}"' not in content:
        # Insert chapterId before chapterNumber
        content = re.sub(
            rf'("chapterNumber":\s*{i},)',
            rf'"chapterId": "c10_sci_ch{i}",\n    \1',
            content,
            count=1
        )
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Added chapterId to Chapter {i}")
    else:
        print(f"Chapter {i} already has chapterId")
