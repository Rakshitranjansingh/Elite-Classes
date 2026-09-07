/* =========================================================================
   ELITE CLASSES — MASTER CBT CHAPTER ASSESSMENT
   Class 10 Mathematics — Chapter 13: Statistics
   Total Questions: 100 | Duration: 90 Mins | Total Marks: 400
   Negative Marking: -1.0 | Marks per Correct: +4.0
   Standard Distribution: 50 Easy | 10 Medium | 10 Hard | 20 Tricky | 10 Very Hard
   ========================================================================= */

const Class10MathematicsChapter13FullBank = {
    id: 'ts_c10_math_ch13',
    title: 'Chapter 13: Statistics Assessment',
    cls: 'Class 10',
    subject: 'Mathematics',
    duration_mins: 90,
    total_marks: 400,
    passing_marks: 160,
    negative_marking: 1.00,
    marks_per_question: 4,
    questions_count: 100,
    instructions: 'Comprehensive 100-Question master assessment for Class 10 NCERT Mathematics Chapter 13 (Statistics). Covers direct, assumed mean, and step-deviation methods for mean, modal class and mode formula, median class and median formula, empirical relationship, less-than/more-than ogives, and visual diagrams.',
    questions: [
    {
        "id": "ts_c10_math_ch13_q1",
        "question_number": 1,
        "question": "The class mark (midpoint) of a class interval is calculated by:",
        "difficulty": "easy",
        "option_a": "(Upper class limit + Lower class limit) / 2",
        "option_b": "(Upper class limit - Lower class limit) / 2",
        "option_c": "Upper class limit + Lower class limit",
        "option_d": "Upper class limit / Lower class limit",
        "options": {
            "A": "(Upper class limit + Lower class limit) / 2",
            "B": "(Upper class limit - Lower class limit) / 2",
            "C": "Upper class limit + Lower class limit",
            "D": "Upper class limit / Lower class limit"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Section 13.2: Class mark x_i = (Upper class limit + Lower class limit) / 2."
    },
    {
        "id": "ts_c10_math_ch13_q2",
        "question_number": 2,
        "question": "The class mark of the class interval 10 - 25 is:",
        "difficulty": "easy",
        "option_a": "17.5",
        "option_b": "15",
        "option_c": "20",
        "option_d": "35",
        "options": {
            "A": "17.5",
            "B": "15",
            "C": "20",
            "D": "35"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Class mark = (10 + 25) / 2 = 35 / 2 = 17.5."
    },
    {
        "id": "ts_c10_math_ch13_q3",
        "question_number": 3,
        "question": "The class size (width) of the class interval 40 - 55 is:",
        "difficulty": "easy",
        "option_a": "15",
        "option_b": "47.5",
        "option_c": "95",
        "option_d": "10",
        "options": {
            "A": "15",
            "B": "47.5",
            "C": "95",
            "D": "10"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Class size h = Upper limit - Lower limit = 55 - 40 = 15."
    },
    {
        "id": "ts_c10_math_ch13_q4",
        "question_number": 4,
        "question": "In the direct method, the mean of grouped data is given by the formula:",
        "difficulty": "easy",
        "option_a": "Σ(f_i x_i) / Σf_i",
        "option_b": "Σ(f_i d_i) / Σf_i",
        "option_c": "a + Σ(f_i u_i) / Σf_i",
        "option_d": "Σx_i / n",
        "options": {
            "A": "Σ(f_i x_i) / Σf_i",
            "B": "Σ(f_i d_i) / Σf_i",
            "C": "a + Σ(f_i u_i) / Σf_i",
            "D": "Σx_i / n"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Section 13.2: Direct method formula for mean: x̄ = Σ(f_i x_i) / Σf_i."
    },
    {
        "id": "ts_c10_math_ch13_q5",
        "question_number": 5,
        "question": "In the assumed mean method, the deviation d_i is defined as:",
        "difficulty": "easy",
        "option_a": "d_i = x_i - a",
        "option_b": "d_i = x_i + a",
        "option_c": "d_i = (x_i - a) / h",
        "option_d": "d_i = f_i - a",
        "options": {
            "A": "d_i = x_i - a",
            "B": "d_i = x_i + a",
            "C": "d_i = (x_i - a) / h",
            "D": "d_i = f_i - a"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Section 13.2: In the assumed mean method, d_i = x_i - a where 'a' is the chosen assumed mean."
    },
    {
        "id": "ts_c10_math_ch13_q6",
        "question_number": 6,
        "question": "In the assumed mean method, the formula for mean x̄ is:",
        "difficulty": "easy",
        "option_a": "x̄ = a + [Σ(f_i d_i) / Σf_i]",
        "option_b": "x̄ = a - [Σ(f_i d_i) / Σf_i]",
        "option_c": "x̄ = [Σ(f_i d_i) / Σf_i]",
        "option_d": "x̄ = a + h [Σ(f_i d_i) / Σf_i]",
        "options": {
            "A": "x̄ = a + [Σ(f_i d_i) / Σf_i]",
            "B": "x̄ = a - [Σ(f_i d_i) / Σf_i]",
            "C": "x̄ = [Σ(f_i d_i) / Σf_i]",
            "D": "x̄ = a + h [Σ(f_i d_i) / Σf_i]"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Section 13.2: x̄ = a + (Σ f_i d_i / Σ f_i)."
    },
    {
        "id": "ts_c10_math_ch13_q7",
        "question_number": 7,
        "question": "In the step-deviation method, the reduced variable u_i is given by:",
        "difficulty": "easy",
        "option_a": "u_i = (x_i - a) / h",
        "option_b": "u_i = (x_i + a) / h",
        "option_c": "u_i = (x_i - a) × h",
        "option_d": "u_i = x_i / h",
        "options": {
            "A": "u_i = (x_i - a) / h",
            "B": "u_i = (x_i + a) / h",
            "C": "u_i = (x_i - a) × h",
            "D": "u_i = x_i / h"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Section 13.2: u_i = (x_i - a) / h where h is the common class width."
    },
    {
        "id": "ts_c10_math_ch13_q8",
        "question_number": 8,
        "question": "In the step-deviation method, the formula for mean x̄ is:",
        "difficulty": "easy",
        "option_a": "x̄ = a + h × [Σ(f_i u_i) / Σf_i]",
        "option_b": "x̄ = a + [Σ(f_i u_i) / Σf_i]",
        "option_c": "x̄ = a - h × [Σ(f_i u_i) / Σf_i]",
        "option_d": "x̄ = (a / h) × [Σ(f_i u_i) / Σf_i]",
        "options": {
            "A": "x̄ = a + h × [Σ(f_i u_i) / Σf_i]",
            "B": "x̄ = a + [Σ(f_i u_i) / Σf_i]",
            "C": "x̄ = a - h × [Σ(f_i u_i) / Σf_i]",
            "D": "x̄ = (a / h) × [Σ(f_i u_i) / Σf_i]"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Section 13.2: Step-deviation formula: x̄ = a + h × [Σ(f_i u_i) / Σf_i]."
    },
    {
        "id": "ts_c10_math_ch13_q9",
        "question_number": 9,
        "question": "The value of observation which occurs most frequently in a data set is called the:",
        "difficulty": "easy",
        "option_a": "Mode",
        "option_b": "Mean",
        "option_c": "Median",
        "option_d": "Range",
        "options": {
            "A": "Mode",
            "B": "Mean",
            "C": "Median",
            "D": "Range"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Section 13.3: Mode is that value among the observations which occurs most often, that is, the value having the maximum frequency."
    },
    {
        "id": "ts_c10_math_ch13_q10",
        "question_number": 10,
        "question": "The class interval with the maximum frequency in a grouped frequency distribution is called the:",
        "difficulty": "easy",
        "option_a": "Modal class",
        "option_b": "Median class",
        "option_c": "Mean class",
        "option_d": "Extreme class",
        "options": {
            "A": "Modal class",
            "B": "Median class",
            "C": "Mean class",
            "D": "Extreme class"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Section 13.3: The class with the maximum frequency is called the modal class.",
        "diagram_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 240\" width=\"100%\" height=\"200\" style=\"background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;\">\n  <line x1=\"40\" y1=\"200\" x2=\"370\" y2=\"200\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <line x1=\"40\" y1=\"200\" x2=\"40\" y2=\"30\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <!-- Bars -->\n  <rect x=\"70\" y=\"140\" width=\"50\" height=\"60\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n  <text x=\"85\" y=\"130\" font-size=\"11\" fill=\"#475569\">f₀</text>\n  <rect x=\"120\" y=\"70\" width=\"60\" height=\"130\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n  <text x=\"142\" y=\"60\" font-size=\"12\" font-weight=\"bold\" fill=\"#0284c7\">f₁ (Modal)</text>\n  <rect x=\"180\" y=\"120\" width=\"50\" height=\"80\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n  <text x=\"195\" y=\"110\" font-size=\"11\" fill=\"#475569\">f₂</text>\n  <!-- Diagonal intersection for mode -->\n  <line x1=\"120\" y1=\"140\" x2=\"180\" y2=\"70\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n  <line x1=\"120\" y1=\"70\" x2=\"180\" y2=\"120\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n  <circle cx=\"152\" cy=\"103\" r=\"3\" fill=\"#dc2626\"/>\n  <line x1=\"152\" y1=\"103\" x2=\"152\" y2=\"200\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"/>\n  <text x=\"135\" y=\"218\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">Mode</text>\n  <text x=\"120\" y=\"235\" font-size=\"11\" fill=\"#334155\">Modal Class</text>\n</svg>"
    },
    {
        "id": "ts_c10_math_ch13_q11",
        "question_number": 11,
        "question": "The formula for calculating the mode of grouped data is:",
        "difficulty": "easy",
        "option_a": "l + [(f₁ - f₀) / (2f₁ - f₀ - f₂)] × h",
        "option_b": "l + [(f₁ - f₀) / (f₁ - f₂)] × h",
        "option_c": "l + [(f₀ - f₁) / (2f₁ - f₀ - f₂)] × h",
        "option_d": "l + [(f₁ - f₂) / (2f₁ - f₀ - f₂)] × h",
        "options": {
            "A": "l + [(f₁ - f₀) / (2f₁ - f₀ - f₂)] × h",
            "B": "l + [(f₁ - f₀) / (f₁ - f₂)] × h",
            "C": "l + [(f₀ - f₁) / (2f₁ - f₀ - f₂)] × h",
            "D": "l + [(f₁ - f₂) / (2f₁ - f₀ - f₂)] × h"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Section 13.3: Mode = l + [(f₁ - f₀) / (2f₁ - f₀ - f₂)] × h.",
        "diagram_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 240\" width=\"100%\" height=\"200\" style=\"background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;\">\n  <line x1=\"40\" y1=\"200\" x2=\"370\" y2=\"200\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <line x1=\"40\" y1=\"200\" x2=\"40\" y2=\"30\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <!-- Bars -->\n  <rect x=\"70\" y=\"140\" width=\"50\" height=\"60\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n  <text x=\"85\" y=\"130\" font-size=\"11\" fill=\"#475569\">f₀</text>\n  <rect x=\"120\" y=\"70\" width=\"60\" height=\"130\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n  <text x=\"142\" y=\"60\" font-size=\"12\" font-weight=\"bold\" fill=\"#0284c7\">f₁ (Modal)</text>\n  <rect x=\"180\" y=\"120\" width=\"50\" height=\"80\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n  <text x=\"195\" y=\"110\" font-size=\"11\" fill=\"#475569\">f₂</text>\n  <!-- Diagonal intersection for mode -->\n  <line x1=\"120\" y1=\"140\" x2=\"180\" y2=\"70\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n  <line x1=\"120\" y1=\"70\" x2=\"180\" y2=\"120\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n  <circle cx=\"152\" cy=\"103\" r=\"3\" fill=\"#dc2626\"/>\n  <line x1=\"152\" y1=\"103\" x2=\"152\" y2=\"200\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"/>\n  <text x=\"135\" y=\"218\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">Mode</text>\n  <text x=\"120\" y=\"235\" font-size=\"11\" fill=\"#334155\">Modal Class</text>\n</svg>"
    },
    {
        "id": "ts_c10_math_ch13_q12",
        "question_number": 12,
        "question": "In the mode formula, what does 'f₁' represent?",
        "difficulty": "easy",
        "option_a": "Frequency of the modal class",
        "option_b": "Frequency of the class preceding the modal class",
        "option_c": "Frequency of the class succeeding the modal class",
        "option_d": "Lower limit of modal class",
        "options": {
            "A": "Frequency of the modal class",
            "B": "Frequency of the class preceding the modal class",
            "C": "Frequency of the class succeeding the modal class",
            "D": "Lower limit of modal class"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "In the mode formula, f₁ is the frequency of the modal class itself."
    },
    {
        "id": "ts_c10_math_ch13_q13",
        "question_number": 13,
        "question": "In the mode formula, what does 'f₀' represent?",
        "difficulty": "easy",
        "option_a": "Frequency of the class preceding the modal class",
        "option_b": "Frequency of the modal class",
        "option_c": "Frequency of the class succeeding the modal class",
        "option_d": "Cumulative frequency",
        "options": {
            "A": "Frequency of the class preceding the modal class",
            "B": "Frequency of the modal class",
            "C": "Frequency of the class succeeding the modal class",
            "D": "Cumulative frequency"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "f₀ is the frequency of the class immediately preceding (before) the modal class."
    },
    {
        "id": "ts_c10_math_ch13_q14",
        "question_number": 14,
        "question": "In the mode formula, what does 'f₂' represent?",
        "difficulty": "easy",
        "option_a": "Frequency of the class succeeding the modal class",
        "option_b": "Frequency of the modal class",
        "option_c": "Frequency of the class preceding the modal class",
        "option_d": "Class size",
        "options": {
            "A": "Frequency of the class succeeding the modal class",
            "B": "Frequency of the modal class",
            "C": "Frequency of the class preceding the modal class",
            "D": "Class size"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "f₂ is the frequency of the class immediately succeeding (after) the modal class."
    },
    {
        "id": "ts_c10_math_ch13_q15",
        "question_number": 15,
        "question": "The measure of central tendency which gives the value of the middle-most observation is the:",
        "difficulty": "easy",
        "option_a": "Median",
        "option_b": "Mean",
        "option_c": "Mode",
        "option_d": "Variance",
        "options": {
            "A": "Median",
            "B": "Mean",
            "C": "Mode",
            "D": "Variance"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Section 13.4: Median is a measure of central tendency which gives the value of the middle-most observation in the data."
    },
    {
        "id": "ts_c10_math_ch13_q16",
        "question_number": 16,
        "question": "For a total frequency N, the median class is the class interval whose cumulative frequency is:",
        "difficulty": "easy",
        "option_a": "Just greater than (or equal to) N / 2",
        "option_b": "Exactly equal to N",
        "option_c": "Less than N / 2",
        "option_d": "Equal to N / 4",
        "options": {
            "A": "Just greater than (or equal to) N / 2",
            "B": "Exactly equal to N",
            "C": "Less than N / 2",
            "D": "Equal to N / 4"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Section 13.4: The median class is the class whose cumulative frequency is just greater than or equal to N/2."
    },
    {
        "id": "ts_c10_math_ch13_q17",
        "question_number": 17,
        "question": "The formula for the median of grouped data is:",
        "difficulty": "easy",
        "option_a": "l + [(N/2 - cf) / f] × h",
        "option_b": "l + [(N - cf) / f] × h",
        "option_c": "l + [(cf - N/2) / f] × h",
        "option_d": "l + [(N/2 - f) / cf] × h",
        "options": {
            "A": "l + [(N/2 - cf) / f] × h",
            "B": "l + [(N - cf) / f] × h",
            "C": "l + [(cf - N/2) / f] × h",
            "D": "l + [(N/2 - f) / cf] × h"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Section 13.4: Median = l + [(N/2 - cf) / f] × h."
    },
    {
        "id": "ts_c10_math_ch13_q18",
        "question_number": 18,
        "question": "In the median formula, what does 'cf' stand for?",
        "difficulty": "easy",
        "option_a": "Cumulative frequency of the class preceding the median class",
        "option_b": "Cumulative frequency of the median class",
        "option_c": "Frequency of the median class",
        "option_d": "Class frequency of the succeeding class",
        "options": {
            "A": "Cumulative frequency of the class preceding the median class",
            "B": "Cumulative frequency of the median class",
            "C": "Frequency of the median class",
            "D": "Class frequency of the succeeding class"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "In the median formula, cf is the cumulative frequency of the class PRECEDING the median class."
    },
    {
        "id": "ts_c10_math_ch13_q19",
        "question_number": 19,
        "question": "In the median formula, what does 'f' stand for?",
        "difficulty": "easy",
        "option_a": "Frequency of the median class",
        "option_b": "Cumulative frequency of the median class",
        "option_c": "Total frequency",
        "option_d": "Frequency of the preceding class",
        "options": {
            "A": "Frequency of the median class",
            "B": "Cumulative frequency of the median class",
            "C": "Total frequency",
            "D": "Frequency of the preceding class"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "f represents the simple frequency of the median class itself."
    },
    {
        "id": "ts_c10_math_ch13_q20",
        "question_number": 20,
        "question": "The empirical relationship between the three measures of central tendency is:",
        "difficulty": "easy",
        "option_a": "3 Median = Mode + 2 Mean",
        "option_b": "Mode = 3 Mean - 2 Median",
        "option_c": "Mean = 3 Median - 2 Mode",
        "option_d": "3 Mode = Median + 2 Mean",
        "options": {
            "A": "3 Median = Mode + 2 Mean",
            "B": "Mode = 3 Mean - 2 Median",
            "C": "Mean = 3 Median - 2 Mode",
            "D": "3 Mode = Median + 2 Mean"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Section 13.4: The standard empirical relation is 3 Median = Mode + 2 Mean (or Mode = 3 Median - 2 Mean)."
    },
    {
        "id": "ts_c10_math_ch13_q21",
        "question_number": 21,
        "question": "If the mean of a data set is 24 and the median is 25, find the mode using the empirical relationship:",
        "difficulty": "easy",
        "option_a": "27",
        "option_b": "26",
        "option_c": "23",
        "option_d": "25",
        "options": {
            "A": "27",
            "B": "26",
            "C": "23",
            "D": "25"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Mode = 3 Median - 2 Mean = 3(25) - 2(24) = 75 - 48 = 27."
    },
    {
        "id": "ts_c10_math_ch13_q22",
        "question_number": 22,
        "question": "If the mode of a distribution is 12 and the mean is 24, find the median using the empirical relationship:",
        "difficulty": "easy",
        "option_a": "20",
        "option_b": "18",
        "option_c": "16",
        "option_d": "22",
        "options": {
            "A": "20",
            "B": "18",
            "C": "16",
            "D": "22"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "3 Median = Mode + 2 Mean = 12 + 2(24) = 12 + 48 = 60 ⇒ Median = 60 / 3 = 20."
    },
    {
        "id": "ts_c10_math_ch13_q23",
        "question_number": 23,
        "question": "The cumulative frequency curve is popularly known as an:",
        "difficulty": "easy",
        "option_a": "Ogive",
        "option_b": "Histogram",
        "option_c": "Frequency polygon",
        "option_d": "Bar chart",
        "options": {
            "A": "Ogive",
            "B": "Histogram",
            "C": "Frequency polygon",
            "D": "Bar chart"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Section 13.5: The cumulative frequency curve is called an ogive (pronounced o-jive).",
        "diagram_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 250\" width=\"100%\" height=\"210\" style=\"background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;\">\n  <!-- Axes -->\n  <line x1=\"50\" y1=\"210\" x2=\"390\" y2=\"210\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <line x1=\"50\" y1=\"210\" x2=\"50\" y2=\"30\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <text x=\"360\" y=\"235\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\">Upper Limit (x)</text>\n  <text x=\"20\" y=\"25\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\">cf (y)</text>\n  <!-- Less than ogive -->\n  <path d=\"M 60 200 Q 180 180 220 120 T 370 45\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\"/>\n  <!-- More than ogive -->\n  <path d=\"M 60 45 Q 150 70 220 120 T 370 200\" fill=\"none\" stroke=\"#ea580c\" stroke-width=\"2.5\"/>\n  <!-- Intersection point -->\n  <circle cx=\"220\" cy=\"120\" r=\"5\" fill=\"#dc2626\"/>\n  <line x1=\"220\" y1=\"120\" x2=\"220\" y2=\"210\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n  <line x1=\"50\" y1=\"120\" x2=\"220\" y2=\"120\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n  <text x=\"205\" y=\"228\" font-size=\"12\" font-weight=\"bold\" fill=\"#dc2626\">Median</text>\n  <text x=\"15\" y=\"125\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">N/2</text>\n  <text x=\"280\" y=\"65\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563eb\">Less than Ogive</text>\n  <text x=\"90\" y=\"65\" font-size=\"11\" font-weight=\"bold\" fill=\"#ea580c\">More than Ogive</text>\n</svg>"
    },
    {
        "id": "ts_c10_math_ch13_q24",
        "question_number": 24,
        "question": "In a 'less than' ogive, the cumulative frequencies are plotted against the:",
        "difficulty": "easy",
        "option_a": "Upper limits of the class intervals",
        "option_b": "Lower limits of the class intervals",
        "option_c": "Class marks",
        "option_d": "Class frequencies",
        "options": {
            "A": "Upper limits of the class intervals",
            "B": "Lower limits of the class intervals",
            "C": "Class marks",
            "D": "Class frequencies"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Section 13.5: To construct a 'less than' ogive, cumulative frequencies are plotted against the corresponding upper class limits."
    },
    {
        "id": "ts_c10_math_ch13_q25",
        "question_number": 25,
        "question": "In a 'more than' ogive, the cumulative frequencies are plotted against the:",
        "difficulty": "easy",
        "option_a": "Lower limits of the class intervals",
        "option_b": "Upper limits of the class intervals",
        "option_c": "Class midpoints",
        "option_d": "Total frequencies",
        "options": {
            "A": "Lower limits of the class intervals",
            "B": "Upper limits of the class intervals",
            "C": "Class midpoints",
            "D": "Total frequencies"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Section 13.5: For a 'more than' ogive, cumulative frequencies are plotted against the lower limits of the corresponding class intervals."
    },
    {
        "id": "ts_c10_math_ch13_q26",
        "question_number": 26,
        "question": "The x-coordinate of the point of intersection of the 'less than' ogive and the 'more than' ogive of a data set gives the:",
        "difficulty": "easy",
        "option_a": "Median",
        "option_b": "Mean",
        "option_c": "Mode",
        "option_d": "Range",
        "options": {
            "A": "Median",
            "B": "Mean",
            "C": "Mode",
            "D": "Range"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Section 13.5: The intersection of both ogives occurs at y = N/2, and its x-coordinate is precisely the Median.",
        "diagram_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 250\" width=\"100%\" height=\"210\" style=\"background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;\">\n  <!-- Axes -->\n  <line x1=\"50\" y1=\"210\" x2=\"390\" y2=\"210\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <line x1=\"50\" y1=\"210\" x2=\"50\" y2=\"30\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <text x=\"360\" y=\"235\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\">Upper Limit (x)</text>\n  <text x=\"20\" y=\"25\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\">cf (y)</text>\n  <!-- Less than ogive -->\n  <path d=\"M 60 200 Q 180 180 220 120 T 370 45\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\"/>\n  <!-- More than ogive -->\n  <path d=\"M 60 45 Q 150 70 220 120 T 370 200\" fill=\"none\" stroke=\"#ea580c\" stroke-width=\"2.5\"/>\n  <!-- Intersection point -->\n  <circle cx=\"220\" cy=\"120\" r=\"5\" fill=\"#dc2626\"/>\n  <line x1=\"220\" y1=\"120\" x2=\"220\" y2=\"210\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n  <line x1=\"50\" y1=\"120\" x2=\"220\" y2=\"120\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n  <text x=\"205\" y=\"228\" font-size=\"12\" font-weight=\"bold\" fill=\"#dc2626\">Median</text>\n  <text x=\"15\" y=\"125\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">N/2</text>\n  <text x=\"280\" y=\"65\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563eb\">Less than Ogive</text>\n  <text x=\"90\" y=\"65\" font-size=\"11\" font-weight=\"bold\" fill=\"#ea580c\">More than Ogive</text>\n</svg>"
    },
    {
        "id": "ts_c10_math_ch13_q27",
        "question_number": 27,
        "question": "The y-coordinate of the point of intersection of the 'less than' ogive and 'more than' ogive of total frequency N is:",
        "difficulty": "easy",
        "option_a": "N / 2",
        "option_b": "N",
        "option_c": "N / 4",
        "option_d": "3N / 4",
        "options": {
            "A": "N / 2",
            "B": "N",
            "C": "N / 4",
            "D": "3N / 4"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "At the median, exactly half of the total frequency has accumulated, so y = N / 2."
    },
    {
        "id": "ts_c10_math_ch13_q28",
        "question_number": 28,
        "question": "Which measure of central tendency can be determined graphically from a histogram?",
        "difficulty": "easy",
        "option_a": "Mode",
        "option_b": "Mean",
        "option_c": "Median",
        "option_d": "Standard deviation",
        "options": {
            "A": "Mode",
            "B": "Mean",
            "C": "Median",
            "D": "Standard deviation"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Mode can be determined graphically from a histogram by drawing diagonals from the top corners of the highest bar to the adjacent bars.",
        "diagram_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 240\" width=\"100%\" height=\"200\" style=\"background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;\">\n  <line x1=\"40\" y1=\"200\" x2=\"370\" y2=\"200\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <line x1=\"40\" y1=\"200\" x2=\"40\" y2=\"30\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <!-- Bars -->\n  <rect x=\"70\" y=\"140\" width=\"50\" height=\"60\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n  <text x=\"85\" y=\"130\" font-size=\"11\" fill=\"#475569\">f₀</text>\n  <rect x=\"120\" y=\"70\" width=\"60\" height=\"130\" fill=\"#bae6fd\" stroke=\"#0284c7\" stroke-width=\"2\"/>\n  <text x=\"142\" y=\"60\" font-size=\"12\" font-weight=\"bold\" fill=\"#0284c7\">f₁ (Modal)</text>\n  <rect x=\"180\" y=\"120\" width=\"50\" height=\"80\" fill=\"#cbd5e1\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n  <text x=\"195\" y=\"110\" font-size=\"11\" fill=\"#475569\">f₂</text>\n  <!-- Diagonal intersection for mode -->\n  <line x1=\"120\" y1=\"140\" x2=\"180\" y2=\"70\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n  <line x1=\"120\" y1=\"70\" x2=\"180\" y2=\"120\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n  <circle cx=\"152\" cy=\"103\" r=\"3\" fill=\"#dc2626\"/>\n  <line x1=\"152\" y1=\"103\" x2=\"152\" y2=\"200\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"/>\n  <text x=\"135\" y=\"218\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">Mode</text>\n  <text x=\"120\" y=\"235\" font-size=\"11\" fill=\"#334155\">Modal Class</text>\n</svg>"
    },
    {
        "id": "ts_c10_math_ch13_q29",
        "question_number": 29,
        "question": "Which measure of central tendency CANNOT be determined graphically using standard curves?",
        "difficulty": "easy",
        "option_a": "Mean",
        "option_b": "Median",
        "option_c": "Mode",
        "option_d": "Both Median and Mode",
        "options": {
            "A": "Mean",
            "B": "Median",
            "C": "Mode",
            "D": "Both Median and Mode"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Mean cannot be determined graphically; Median is found from ogives, and Mode from histograms."
    },
    {
        "id": "ts_c10_math_ch13_q30",
        "question_number": 30,
        "question": "If each observation in a data set is increased by 5, the new mean of the data:",
        "difficulty": "easy",
        "option_a": "Increases by 5",
        "option_b": "Remains unchanged",
        "option_c": "Multiplies by 5",
        "option_d": "Increases by 5 / n",
        "options": {
            "A": "Increases by 5",
            "B": "Remains unchanged",
            "C": "Multiplies by 5",
            "D": "Increases by 5 / n"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "If x_i' = x_i + k, then Mean' = Σ(x_i + k)/n = x̄ + k. So the mean increases by 5."
    },
    {
        "id": "ts_c10_math_ch13_q31",
        "question_number": 31,
        "question": "If each observation in a data set is multiplied by a constant k, the new mean:",
        "difficulty": "easy",
        "option_a": "Is multiplied by k",
        "option_b": "Increases by k",
        "option_c": "Remains unchanged",
        "option_d": "Is divided by k",
        "options": {
            "A": "Is multiplied by k",
            "B": "Increases by k",
            "C": "Remains unchanged",
            "D": "Is divided by k"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Mean' = Σ(k x_i) / n = k (Σ x_i / n) = k x̄."
    },
    {
        "id": "ts_c10_math_ch13_q32",
        "question_number": 32,
        "question": "The algebraic sum of deviations of all observations from their mean (Σ(x_i - x̄)) is ALWAYS equal to:",
        "difficulty": "easy",
        "option_a": "0",
        "option_b": "1",
        "option_c": "Positive constant",
        "option_d": "Σf_i",
        "options": {
            "A": "0",
            "B": "1",
            "C": "Positive constant",
            "D": "Σf_i"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Σ(x_i - x̄) = Σx_i - n x̄ = n x̄ - n x̄ = 0. The sum of deviations from the arithmetic mean is always identically zero."
    },
    {
        "id": "ts_c10_math_ch13_q33",
        "question_number": 33,
        "question": "For a symmetric distribution, which of the following is true?",
        "difficulty": "easy",
        "option_a": "Mean = Median = Mode",
        "option_b": "Mean > Median > Mode",
        "option_c": "Mean < Median < Mode",
        "option_d": "Mean = Mode ≠ Median",
        "options": {
            "A": "Mean = Median = Mode",
            "B": "Mean > Median > Mode",
            "C": "Mean < Median < Mode",
            "D": "Mean = Mode ≠ Median"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "In a perfectly symmetrical distribution (like a bell curve), Mean, Median, and Mode are all coincident and equal."
    },
    {
        "id": "ts_c10_math_ch13_q34",
        "question_number": 34,
        "question": "Find the mean of the first five natural numbers (1, 2, 3, 4, 5):",
        "difficulty": "easy",
        "option_a": "3",
        "option_b": "2.5",
        "option_c": "3.5",
        "option_d": "15",
        "options": {
            "A": "3",
            "B": "2.5",
            "C": "3.5",
            "D": "15"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Mean = (1 + 2 + 3 + 4 + 5) / 5 = 15 / 5 = 3."
    },
    {
        "id": "ts_c10_math_ch13_q35",
        "question_number": 35,
        "question": "Find the mean of the first five prime numbers (2, 3, 5, 7, 11):",
        "difficulty": "easy",
        "option_a": "5.6",
        "option_b": "5",
        "option_c": "5.4",
        "option_d": "6",
        "options": {
            "A": "5.6",
            "B": "5",
            "C": "5.4",
            "D": "6"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Sum = 2 + 3 + 5 + 7 + 11 = 28. Mean = 28 / 5 = 5.6."
    },
    {
        "id": "ts_c10_math_ch13_q36",
        "question_number": 36,
        "question": "If the mean of five observations x, x+2, x+4, x+6, x+8 is 11, find x:",
        "difficulty": "easy",
        "option_a": "7",
        "option_b": "9",
        "option_c": "11",
        "option_d": "5",
        "options": {
            "A": "7",
            "B": "9",
            "C": "11",
            "D": "5"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Sum = 5x + 20. Mean = (5x + 20) / 5 = x + 4. x + 4 = 11 ⇒ x = 7."
    },
    {
        "id": "ts_c10_math_ch13_q37",
        "question_number": 37,
        "question": "The median of the numbers 4, 8, 2, 9, 5 is:",
        "difficulty": "easy",
        "option_a": "5",
        "option_b": "8",
        "option_c": "4",
        "option_d": "2",
        "options": {
            "A": "5",
            "B": "8",
            "C": "4",
            "D": "2"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Arranging in ascending order: 2, 4, 5, 8, 9. The middle observation (3rd) is 5."
    },
    {
        "id": "ts_c10_math_ch13_q38",
        "question_number": 38,
        "question": "The mode of the numbers 3, 5, 7, 5, 9, 5, 3, 8 is:",
        "difficulty": "easy",
        "option_a": "5",
        "option_b": "3",
        "option_c": "7",
        "option_d": "9",
        "options": {
            "A": "5",
            "B": "3",
            "C": "7",
            "D": "9"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "5 occurs three times, which is more than any other number. Thus Mode = 5."
    },
    {
        "id": "ts_c10_math_ch13_q39",
        "question_number": 39,
        "question": "If the upper limit of a class interval is 30 and class mark is 25, what is its lower limit?",
        "difficulty": "easy",
        "option_a": "20",
        "option_b": "22.5",
        "option_c": "15",
        "option_d": "10",
        "options": {
            "A": "20",
            "B": "22.5",
            "C": "15",
            "D": "10"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "(Lower + 30) / 2 = 25 ⇒ Lower + 30 = 50 ⇒ Lower = 20."
    },
    {
        "id": "ts_c10_math_ch13_q40",
        "question_number": 40,
        "question": "If the lower limit of a class interval is 15 and class mark is 20, what is its upper limit?",
        "difficulty": "easy",
        "option_a": "25",
        "option_b": "30",
        "option_c": "35",
        "option_d": "22.5",
        "options": {
            "A": "25",
            "B": "30",
            "C": "35",
            "D": "22.5"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "(15 + Upper) / 2 = 20 ⇒ 15 + Upper = 40 ⇒ Upper = 25."
    },
    {
        "id": "ts_c10_math_ch13_q41",
        "question_number": 41,
        "question": "A distribution with two distinct modes is called:",
        "difficulty": "easy",
        "option_a": "Bimodal",
        "option_b": "Unimodal",
        "option_c": "Trimodal",
        "option_d": "Skewed",
        "options": {
            "A": "Bimodal",
            "B": "Unimodal",
            "C": "Trimodal",
            "D": "Skewed"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "A distribution having two modes is termed bimodal."
    },
    {
        "id": "ts_c10_math_ch13_q42",
        "question_number": 42,
        "question": "In a frequency table, the sum of all class frequencies Σf_i is equal to:",
        "difficulty": "easy",
        "option_a": "Total number of observations (N)",
        "option_b": "The maximum frequency",
        "option_c": "The mean of the data",
        "option_d": "The class mark",
        "options": {
            "A": "Total number of observations (N)",
            "B": "The maximum frequency",
            "C": "The mean of the data",
            "D": "The class mark"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Σf_i = N, the total count of all observations in the dataset."
    },
    {
        "id": "ts_c10_math_ch13_q43",
        "question_number": 43,
        "question": "Can the mode of grouped data be greater than the upper limit of the modal class?",
        "difficulty": "easy",
        "option_a": "No, the mode always lies inside the modal class interval",
        "option_b": "Yes, if f₂ is very large",
        "option_c": "Yes, if h > 10",
        "option_d": "Only for skewed data",
        "options": {
            "A": "No, the mode always lies inside the modal class interval",
            "B": "Yes, if f₂ is very large",
            "C": "Yes, if h > 10",
            "D": "Only for skewed data"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "The formula guarantees that l ≤ Mode ≤ l + h, so mode strictly lies within the modal class."
    },
    {
        "id": "ts_c10_math_ch13_q44",
        "question_number": 44,
        "question": "Can the median of grouped data lie outside the median class interval?",
        "difficulty": "easy",
        "option_a": "No, it always lies within the median class interval",
        "option_b": "Yes, if N is odd",
        "option_c": "Yes, if cf is large",
        "option_d": "Only if class widths vary",
        "options": {
            "A": "No, it always lies within the median class interval",
            "B": "Yes, if N is odd",
            "C": "Yes, if cf is large",
            "D": "Only if class widths vary"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "The median formula guarantees that l ≤ Median ≤ l + h."
    },
    {
        "id": "ts_c10_math_ch13_q45",
        "question_number": 45,
        "question": "Which measure of central tendency is most affected by extreme outliers in the data?",
        "difficulty": "easy",
        "option_a": "Mean",
        "option_b": "Median",
        "option_c": "Mode",
        "option_d": "All equally",
        "options": {
            "A": "Mean",
            "B": "Median",
            "C": "Mode",
            "D": "All equally"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "The arithmetic mean takes into account the numerical magnitude of every value, making it highly sensitive to extreme outliers."
    },
    {
        "id": "ts_c10_math_ch13_q46",
        "question_number": 46,
        "question": "Which measure of central tendency is the most appropriate when the data contains extreme outliers?",
        "difficulty": "easy",
        "option_a": "Median",
        "option_b": "Mean",
        "option_c": "Mode",
        "option_d": "Mid-range",
        "options": {
            "A": "Median",
            "B": "Mean",
            "C": "Mode",
            "D": "Mid-range"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Median is a positional average and is robust against extreme outliers."
    },
    {
        "id": "ts_c10_math_ch13_q47",
        "question_number": 47,
        "question": "For open-ended classes (e.g. 'Below 20' or 'Above 80'), which measure of central tendency cannot be calculated without assuming limits?",
        "difficulty": "easy",
        "option_a": "Mean",
        "option_b": "Median",
        "option_c": "Mode",
        "option_d": "None",
        "options": {
            "A": "Mean",
            "B": "Median",
            "C": "Mode",
            "D": "None"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Mean requires class marks (midpoints), which cannot be calculated for open-ended classes without making arbitrary assumptions."
    },
    {
        "id": "ts_c10_math_ch13_q48",
        "question_number": 48,
        "question": "Cumulative frequency is obtained by:",
        "difficulty": "easy",
        "option_a": "Adding the frequencies of preceding classes successively",
        "option_b": "Multiplying frequencies by class marks",
        "option_c": "Dividing frequencies by total observations",
        "option_d": "Subtracting each frequency from total",
        "options": {
            "A": "Adding the frequencies of preceding classes successively",
            "B": "Multiplying frequencies by class marks",
            "C": "Dividing frequencies by total observations",
            "D": "Subtracting each frequency from total"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Cumulative frequency of a class is the running sum of frequencies up to and including that class."
    },
    {
        "id": "ts_c10_math_ch13_q49",
        "question_number": 49,
        "question": "If the class intervals are 0-10, 10-20, 20-30, what type of intervals are these?",
        "difficulty": "easy",
        "option_a": "Continuous (exclusive) class intervals",
        "option_b": "Discontinuous (inclusive) intervals",
        "option_c": "Open-ended intervals",
        "option_d": "Cumulative intervals",
        "options": {
            "A": "Continuous (exclusive) class intervals",
            "B": "Discontinuous (inclusive) intervals",
            "C": "Open-ended intervals",
            "D": "Cumulative intervals"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Where the upper limit of one class equals the lower limit of the next, they are continuous (exclusive) intervals."
    },
    {
        "id": "ts_c10_math_ch13_q50",
        "question_number": 50,
        "question": "To convert discontinuous intervals like 1-5, 6-10 into continuous intervals, the correction factor subtracted from lower limits and added to upper limits is:",
        "difficulty": "easy",
        "option_a": "0.5",
        "option_b": "1.0",
        "option_c": "0.25",
        "option_d": "0.1",
        "options": {
            "A": "0.5",
            "B": "1.0",
            "C": "0.25",
            "D": "0.1"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "The gap between 5 and 6 is 1. Correction factor = (6 - 5) / 2 = 0.5. Classes become 0.5 - 5.5, 5.5 - 10.5."
    },
    {
        "id": "ts_c10_math_ch13_q51",
        "question_number": 51,
        "question": "Given Σf_i x_i = 1860 and Σf_i = 30, find the mean using the direct method:",
        "difficulty": "medium",
        "option_a": "62",
        "option_b": "58",
        "option_c": "60",
        "option_d": "64",
        "options": {
            "A": "62",
            "B": "58",
            "C": "60",
            "D": "64"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Example 1: x̄ = Σ(f_i x_i) / Σf_i = 1860 / 30 = 62."
    },
    {
        "id": "ts_c10_math_ch13_q52",
        "question_number": 52,
        "question": "In an assumed mean calculation, assumed mean a = 50, Σf_i d_i = -40, and Σf_i = 20. The mean x̄ is:",
        "difficulty": "medium",
        "option_a": "48",
        "option_b": "52",
        "option_c": "46",
        "option_d": "50",
        "options": {
            "A": "48",
            "B": "52",
            "C": "46",
            "D": "50"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "x̄ = a + (Σf_i d_i / Σf_i) = 50 + (-40 / 20) = 50 - 2 = 48."
    },
    {
        "id": "ts_c10_math_ch13_q53",
        "question_number": 53,
        "question": "In a step-deviation calculation, a = 25, h = 10, Σf_i u_i = 15, and Σf_i = 50. The mean x̄ is:",
        "difficulty": "medium",
        "option_a": "28",
        "option_b": "25.3",
        "option_c": "30",
        "option_d": "26.5",
        "options": {
            "A": "28",
            "B": "25.3",
            "C": "30",
            "D": "26.5"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "x̄ = a + h(Σf_i u_i / Σf_i) = 25 + 10(15 / 50) = 25 + 10(0.3) = 25 + 3 = 28."
    },
    {
        "id": "ts_c10_math_ch13_q54",
        "question_number": 54,
        "question": "For a grouped distribution, the modal class is 40 - 55. Here l = 40, h = 15, f₁ = 7, f₀ = 3, f₂ = 6. The mode of the data is:",
        "difficulty": "medium",
        "option_a": "52",
        "option_b": "48",
        "option_c": "45",
        "option_d": "50",
        "options": {
            "A": "52",
            "B": "48",
            "C": "45",
            "D": "50"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Example 5: Mode = l + [(f₁ - f₀)/(2f₁ - f₀ - f₂)] × h = 40 + [(7 - 3)/(2×7 - 3 - 6)] × 15 = 40 + [4 / (14 - 9)] × 15 = 40 + (4/5) × 15 = 40 + 12 = 52."
    },
    {
        "id": "ts_c10_math_ch13_q55",
        "question_number": 55,
        "question": "In a frequency distribution, the median class is 20 - 30. Here l = 20, N = 60, cf = 22, f = 20, and h = 10. The median is:",
        "difficulty": "medium",
        "option_a": "24",
        "option_b": "25",
        "option_c": "23",
        "option_d": "26",
        "options": {
            "A": "24",
            "B": "25",
            "C": "23",
            "D": "26"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Median = l + [(N/2 - cf)/f] × h = 20 + [(30 - 22)/20] × 10 = 20 + (8/20) × 10 = 20 + 4 = 24."
    },
    {
        "id": "ts_c10_math_ch13_q56",
        "question_number": 56,
        "question": "If the mode of a distribution is 45 and the mean is 27, find the median:",
        "difficulty": "medium",
        "option_a": "33",
        "option_b": "30",
        "option_c": "36",
        "option_d": "39",
        "options": {
            "A": "33",
            "B": "30",
            "C": "36",
            "D": "39"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "3 Median = Mode + 2 Mean = 45 + 2(27) = 45 + 54 = 99 ⇒ Median = 99 / 3 = 33."
    },
    {
        "id": "ts_c10_math_ch13_q57",
        "question_number": 57,
        "question": "The following are the marks of 30 students: 10, 20, 36, 92, 95, 40, 50, 56, 60, 70. If the sum of all marks is 1779, what is the mean mark of the students?",
        "difficulty": "medium",
        "option_a": "59.3",
        "option_b": "60.0",
        "option_c": "58.5",
        "option_d": "61.2",
        "options": {
            "A": "59.3",
            "B": "60.0",
            "C": "58.5",
            "D": "61.2"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Mean = 1779 / 30 = 59.3."
    },
    {
        "id": "ts_c10_math_ch13_q58",
        "question_number": 58,
        "question": "For the following frequency distribution: Class 0-10 (f=5), 10-20 (f=8), 20-30 (f=12), 30-40 (f=7), 40-50 (f=8). What is the modal class?",
        "difficulty": "medium",
        "option_a": "20 - 30",
        "option_b": "10 - 20",
        "option_c": "30 - 40",
        "option_d": "40 - 50",
        "options": {
            "A": "20 - 30",
            "B": "10 - 20",
            "C": "30 - 40",
            "D": "40 - 50"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "The highest frequency is 12, which corresponds to the class interval 20 - 30."
    },
    {
        "id": "ts_c10_math_ch13_q59",
        "question_number": 59,
        "question": "In the same frequency distribution (Total N = 5 + 8 + 12 + 7 + 8 = 40), what is the median class?",
        "difficulty": "medium",
        "option_a": "20 - 30",
        "option_b": "10 - 20",
        "option_c": "30 - 40",
        "option_d": "40 - 50",
        "options": {
            "A": "20 - 30",
            "B": "10 - 20",
            "C": "30 - 40",
            "D": "40 - 50"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "N = 40 ⇒ N/2 = 20. Cumulative frequencies: 0-10: 5; 10-20: 13; 20-30: 25. The class whose cf is just ≥ 20 is 20 - 30."
    },
    {
        "id": "ts_c10_math_ch13_q60",
        "question_number": 60,
        "question": "If the mean of the numbers 27, 31, 89, 107, 156 is x̄, then the sum of deviations (27 - x̄) + (31 - x̄) + (89 - x̄) + (107 - x̄) + (156 - x̄) is equal to:",
        "difficulty": "medium",
        "option_a": "0",
        "option_b": "10",
        "option_c": "410",
        "option_d": "-15",
        "options": {
            "A": "0",
            "B": "10",
            "C": "410",
            "D": "-15"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "By mathematical definition, the sum of deviations of any set of numbers from their mean is ALWAYS zero."
    },
    {
        "id": "ts_c10_math_ch13_q61",
        "question_number": 61,
        "question": "The mean of the following distribution is 18. Classes: 11-13 (f=7), 13-15 (f=6), 15-17 (f=9), 17-19 (f=13), 19-21 (f=f), 21-23 (f=5), 23-25 (f=4). Find the missing frequency f:",
        "difficulty": "hard",
        "option_a": "20",
        "option_b": "18",
        "option_c": "16",
        "option_d": "22",
        "options": {
            "A": "20",
            "B": "18",
            "C": "16",
            "D": "22"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Exercise 13.1 Q3: Midpoints x_i: 12, 14, 16, 18, 20, 22, 24. With a = 18, d_i = -6, -4, -2, 0, 2, 4, 6. Σf_i d_i = 7(-6) + 6(-4) + 9(-2) + 13(0) + f(2) + 5(4) + 4(6) = -42 - 24 - 18 + 0 + 2f + 20 + 24 = 2f - 40. Given x̄ = 18 = a ⇒ Σf_i d_i = 0 ⇒ 2f - 40 = 0 ⇒ 2f = 40 ⇒ f = 20."
    },
    {
        "id": "ts_c10_math_ch13_q62",
        "question_number": 62,
        "question": "The median of the following data is 28.5. If the total frequency is 60, find x and y: 0-10 (5), 10-20 (x), 20-30 (20), 30-40 (15), 40-50 (y), 50-60 (5):",
        "difficulty": "hard",
        "option_a": "x = 8, y = 7",
        "option_b": "x = 7, y = 8",
        "option_c": "x = 9, y = 6",
        "option_d": "x = 10, y = 5",
        "options": {
            "A": "x = 8, y = 7",
            "B": "x = 7, y = 8",
            "C": "x = 9, y = 6",
            "D": "x = 10, y = 5"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Exercise 13.3 Q2: Total = 45 + x + y = 60 ⇒ x + y = 15. Median = 28.5 lies in class 20 - 30. l = 20, h = 10, f = 20, cf = 5 + x, N/2 = 30. 28.5 = 20 + [(30 - (5 + x))/20] × 10 ⇒ 8.5 = (25 - x)/2 ⇒ 17 = 25 - x ⇒ x = 8. y = 15 - 8 = 7."
    },
    {
        "id": "ts_c10_math_ch13_q63",
        "question_number": 63,
        "question": "If the median of a distribution is 525 and total frequency is 100, where classes are in steps of 100 (0-100 to 900-1000) and missing frequencies are x in 100-200 and y in 600-700. If x + y = 24 and x = 9, what is the value of y?",
        "difficulty": "hard",
        "option_a": "15",
        "option_b": "12",
        "option_c": "18",
        "option_d": "9",
        "options": {
            "A": "15",
            "B": "12",
            "C": "18",
            "D": "9"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Example 8: x + y = 24. If x = 9, then y = 24 - 9 = 15."
    },
    {
        "id": "ts_c10_math_ch13_q64",
        "question_number": 64,
        "question": "A life insurance agent found the following data for distribution of ages of 100 policy holders: Below 20: 2, Below 25: 6, Below 30: 24, Below 35: 45, Below 40: 78, Below 45: 89, Below 50: 92, Below 55: 98, Below 60: 100. What is the median class?",
        "difficulty": "hard",
        "option_a": "35 - 40",
        "option_b": "30 - 35",
        "option_c": "40 - 45",
        "option_d": "25 - 30",
        "options": {
            "A": "35 - 40",
            "B": "30 - 35",
            "C": "40 - 45",
            "D": "25 - 30"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Exercise 13.3 Q3: N = 100 ⇒ N/2 = 50. The cumulative frequency just ≥ 50 is 78, which corresponds to the class 35 - 40."
    },
    {
        "id": "ts_c10_math_ch13_q65",
        "question_number": 65,
        "question": "In the policy holders data above (median class 35-40, l=35, N/2=50, cf=45, f=78-45=33, h=5), find the median age:",
        "difficulty": "hard",
        "option_a": "35.76 years",
        "option_b": "36.5 years",
        "option_c": "37.2 years",
        "option_d": "38.1 years",
        "options": {
            "A": "35.76 years",
            "B": "36.5 years",
            "C": "37.2 years",
            "D": "38.1 years"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Median = 35 + [(50 - 45)/33] × 5 = 35 + (5/33) × 5 = 35 + 25/33 = 35 + 0.7576 ≈ 35.76 years."
    },
    {
        "id": "ts_c10_math_ch13_q66",
        "question_number": 66,
        "question": "The lengths of 40 leaves of a plant are measured correct to nearest millimetre: 118-126 (3), 127-135 (5), 136-144 (9), 145-153 (12), 154-162 (5), 163-171 (4), 172-180 (2). To find the median, what continuous boundaries must be used for the modal/median class?",
        "difficulty": "hard",
        "option_a": "144.5 - 153.5",
        "option_b": "145 - 153",
        "option_c": "144 - 154",
        "option_d": "145.5 - 152.5",
        "options": {
            "A": "144.5 - 153.5",
            "B": "145 - 153",
            "C": "144 - 154",
            "D": "145.5 - 152.5"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Exercise 13.3 Q4: The classes are discontinuous with a gap of 1. Subtract 0.5 from lower limit and add 0.5 to upper limit. The class 145-153 becomes 144.5 - 153.5."
    },
    {
        "id": "ts_c10_math_ch13_q67",
        "question_number": 67,
        "question": "In the leaves problem (N=40, N/2=20, continuous class 144.5-153.5, cf=17, f=12, h=9), find the median length of the leaves:",
        "difficulty": "hard",
        "option_a": "146.75 mm",
        "option_b": "145.5 mm",
        "option_c": "148.2 mm",
        "option_d": "150.0 mm",
        "options": {
            "A": "146.75 mm",
            "B": "145.5 mm",
            "C": "148.2 mm",
            "D": "150.0 mm"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Median = 144.5 + [(20 - 17)/12] × 9 = 144.5 + (3/12) × 9 = 144.5 + 2.25 = 146.75 mm."
    },
    {
        "id": "ts_c10_math_ch13_q68",
        "question_number": 68,
        "question": "If the mean of 20 observations is 35 and on checking it was found that an observation 45 was mistakenly recorded as 25. The correct mean is:",
        "difficulty": "hard",
        "option_a": "36",
        "option_b": "34",
        "option_c": "35.5",
        "option_d": "37",
        "options": {
            "A": "36",
            "B": "34",
            "C": "35.5",
            "D": "37"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Initial total sum = 20 × 35 = 700. Correct sum = 700 - 25 + 45 = 720. Correct mean = 720 / 20 = 36."
    },
    {
        "id": "ts_c10_math_ch13_q69",
        "question_number": 69,
        "question": "The mean of 100 observations was 50. If at the time of calculation, two observations were wrongly taken as 30 and 20 instead of 50 and 40, find the correct mean:",
        "difficulty": "hard",
        "option_a": "50.4",
        "option_b": "51.0",
        "option_c": "49.6",
        "option_d": "52.0",
        "options": {
            "A": "50.4",
            "B": "51.0",
            "C": "49.6",
            "D": "52.0"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Initial sum = 100 × 50 = 5000. Correct sum = 5000 - (30 + 20) + (50 + 40) = 5000 - 50 + 90 = 5040. Correct mean = 5040 / 100 = 50.4."
    },
    {
        "id": "ts_c10_math_ch13_q70",
        "question_number": 70,
        "question": "In a frequency distribution with classes 0-10, 10-20, ..., 40-50, the modal class is 20-30 with frequency 15. The frequency of 10-20 is 10 and that of 30-40 is 10. Find the mode:",
        "difficulty": "hard",
        "option_a": "25",
        "option_b": "22.5",
        "option_c": "27.5",
        "option_d": "20",
        "options": {
            "A": "25",
            "B": "22.5",
            "C": "27.5",
            "D": "20"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Mode = 20 + [(15 - 10)/(2×15 - 10 - 10)] × 10 = 20 + [5 / 10] × 10 = 20 + 5 = 25. When f₀ = f₂, the mode lies exactly at the class midpoint!"
    },
    {
        "id": "ts_c10_math_ch13_q71",
        "question_number": 71,
        "question": "Can the mode of a frequency distribution be determined if class widths are unequal without adjusting frequencies?",
        "difficulty": "tricky",
        "option_a": "No, modal class must be identified using frequency density (f / h)",
        "option_b": "Yes, simply pick the largest frequency f_i",
        "option_c": "Yes, by using the mean formula",
        "option_d": "Mode cannot be calculated for unequal class intervals",
        "options": {
            "A": "No, modal class must be identified using frequency density (f / h)",
            "B": "Yes, simply pick the largest frequency f_i",
            "C": "Yes, by using the mean formula",
            "D": "Mode cannot be calculated for unequal class intervals"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "When class widths vary, the class with the highest raw frequency is not necessarily the modal class; one must compare frequency densities (frequency per unit class width)."
    },
    {
        "id": "ts_c10_math_ch13_q72",
        "question_number": 72,
        "question": "A student states: 'In the assumed mean method, if we choose a different assumed mean 'a', the final value of the calculated mean x̄ will change.' Is this true?",
        "difficulty": "tricky",
        "option_a": "False, the calculated mean x̄ is mathematically identical regardless of the chosen assumed mean 'a'",
        "option_b": "True, choosing a larger 'a' increases x̄",
        "option_c": "True, 'a' must always be chosen as the exact median",
        "option_d": "True, only direct method gives the correct value",
        "options": {
            "A": "False, the calculated mean x̄ is mathematically identical regardless of the chosen assumed mean 'a'",
            "B": "True, choosing a larger 'a' increases x̄",
            "C": "True, 'a' must always be chosen as the exact median",
            "D": "True, only direct method gives the correct value"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "NCERT Section 13.2: The derivation proves that the choice of 'a' does not affect the final value of x̄; it only shifts the arithmetic values during intermediate calculation."
    },
    {
        "id": "ts_c10_math_ch13_q73",
        "question_number": 73,
        "question": "If the step-deviation method is applied to a grouped distribution where class sizes are unequal:",
        "difficulty": "tricky",
        "option_a": "The standard formula with a single 'h' cannot be used directly",
        "option_b": "The result is always zero",
        "option_c": "It gives an exact integer mean",
        "option_d": "It is identical to the median formula",
        "options": {
            "A": "The standard formula with a single 'h' cannot be used directly",
            "B": "The result is always zero",
            "C": "It gives an exact integer mean",
            "D": "It is identical to the median formula"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Step-deviation relies on dividing deviations by a common factor 'h'. If class sizes are unequal, a single class width h does not exist (unless all widths share a common factor)."
    },
    {
        "id": "ts_c10_math_ch13_q74",
        "question_number": 74,
        "question": "If the mean and mode of a data distribution are both 30, what is its median?",
        "difficulty": "tricky",
        "option_a": "30",
        "option_b": "60",
        "option_c": "15",
        "option_d": "45",
        "options": {
            "A": "30",
            "B": "60",
            "C": "15",
            "D": "45"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "3 Median = Mode + 2 Mean = 30 + 2(30) = 90 ⇒ Median = 90 / 3 = 30. (In any symmetric unimodal distribution, Mean = Median = Mode)."
    },
    {
        "id": "ts_c10_math_ch13_q75",
        "question_number": 75,
        "question": "For a positively skewed distribution with a long right tail, what is the typical order of the central tendencies?",
        "difficulty": "tricky",
        "option_a": "Mean > Median > Mode",
        "option_b": "Mode > Median > Mean",
        "option_c": "Median > Mean > Mode",
        "option_d": "Mean = Median = Mode",
        "options": {
            "A": "Mean > Median > Mode",
            "B": "Mode > Median > Mean",
            "C": "Median > Mean > Mode",
            "D": "Mean = Median = Mode"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "In a distribution skewed to the right (positive skew), extreme large values pull the mean to the right: Mean > Median > Mode."
    },
    {
        "id": "ts_c10_math_ch13_q76",
        "question_number": 76,
        "question": "For a negatively skewed distribution with a long left tail, what is the typical order of the central tendencies?",
        "difficulty": "tricky",
        "option_a": "Mode > Median > Mean",
        "option_b": "Mean > Median > Mode",
        "option_c": "Median > Mode > Mean",
        "option_d": "Mean = Mode > Median",
        "options": {
            "A": "Mode > Median > Mean",
            "B": "Mean > Median > Mode",
            "C": "Median > Mode > Mean",
            "D": "Mean = Mode > Median"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "In a distribution skewed to the left (negative skew), extreme small values pull the mean down: Mean < Median < Mode."
    },
    {
        "id": "ts_c10_math_ch13_q77",
        "question_number": 77,
        "question": "If a 'less than' ogive and a 'more than' ogive intersect at the point (35, 25), then:",
        "difficulty": "tricky",
        "option_a": "Median = 35 and total frequency N = 50",
        "option_b": "Median = 25 and total frequency N = 35",
        "option_c": "Median = 35 and total frequency N = 25",
        "option_d": "Mean = 35 and Mode = 25",
        "options": {
            "A": "Median = 35 and total frequency N = 50",
            "B": "Median = 25 and total frequency N = 35",
            "C": "Median = 35 and total frequency N = 25",
            "D": "Mean = 35 and Mode = 25"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "The x-coordinate is the Median = 35. The y-coordinate is N/2 = 25 ⇒ Total frequency N = 50.",
        "diagram_svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 250\" width=\"100%\" height=\"210\" style=\"background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;\">\n  <!-- Axes -->\n  <line x1=\"50\" y1=\"210\" x2=\"390\" y2=\"210\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <line x1=\"50\" y1=\"210\" x2=\"50\" y2=\"30\" stroke=\"#334155\" stroke-width=\"2\"/>\n  <text x=\"360\" y=\"235\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\">Upper Limit (x)</text>\n  <text x=\"20\" y=\"25\" font-size=\"11\" font-weight=\"bold\" fill=\"#334155\">cf (y)</text>\n  <!-- Less than ogive -->\n  <path d=\"M 60 200 Q 180 180 220 120 T 370 45\" fill=\"none\" stroke=\"#2563eb\" stroke-width=\"2.5\"/>\n  <!-- More than ogive -->\n  <path d=\"M 60 45 Q 150 70 220 120 T 370 200\" fill=\"none\" stroke=\"#ea580c\" stroke-width=\"2.5\"/>\n  <!-- Intersection point -->\n  <circle cx=\"220\" cy=\"120\" r=\"5\" fill=\"#dc2626\"/>\n  <line x1=\"220\" y1=\"120\" x2=\"220\" y2=\"210\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n  <line x1=\"50\" y1=\"120\" x2=\"220\" y2=\"120\" stroke=\"#dc2626\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n  <text x=\"205\" y=\"228\" font-size=\"12\" font-weight=\"bold\" fill=\"#dc2626\">Median</text>\n  <text x=\"15\" y=\"125\" font-size=\"11\" font-weight=\"bold\" fill=\"#dc2626\">N/2</text>\n  <text x=\"280\" y=\"65\" font-size=\"11\" font-weight=\"bold\" fill=\"#2563eb\">Less than Ogive</text>\n  <text x=\"90\" y=\"65\" font-size=\"11\" font-weight=\"bold\" fill=\"#ea580c\">More than Ogive</text>\n</svg>"
    },
    {
        "id": "ts_c10_math_ch13_q78",
        "question_number": 78,
        "question": "If the point of intersection of two ogives is (42.5, 60), what is the total number of observations N in the study?",
        "difficulty": "tricky",
        "option_a": "120",
        "option_b": "60",
        "option_c": "85",
        "option_d": "42.5",
        "options": {
            "A": "120",
            "B": "60",
            "C": "85",
            "D": "42.5"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Intersection y-coordinate = N / 2 = 60 ⇒ N = 2 × 60 = 120 observations."
    },
    {
        "id": "ts_c10_math_ch13_q79",
        "question_number": 79,
        "question": "In the calculation of mode, what happens if f₁ = f₀ (the frequency of the modal class equals that of the preceding class)?",
        "difficulty": "tricky",
        "option_a": "Mode = l (the lower limit of the modal class)",
        "option_b": "Mode is undefined",
        "option_c": "Mode = l + h",
        "option_d": "Mode = 0",
        "options": {
            "A": "Mode = l (the lower limit of the modal class)",
            "B": "Mode is undefined",
            "C": "Mode = l + h",
            "D": "Mode = 0"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "When f₁ = f₀, the numerator (f₁ - f₀) becomes 0, so Mode = l + 0 = l."
    },
    {
        "id": "ts_c10_math_ch13_q80",
        "question_number": 80,
        "question": "In the calculation of mode, what happens if f₁ = f₂ (the frequency of the modal class equals that of the succeeding class)?",
        "difficulty": "tricky",
        "option_a": "Mode = l + h / 2 (the midpoint of the modal class)",
        "option_b": "Mode = l",
        "option_c": "Mode = l + h",
        "option_d": "Mode cannot be found",
        "options": {
            "A": "Mode = l + h / 2 (the midpoint of the modal class)",
            "B": "Mode = l",
            "C": "Mode = l + h",
            "D": "Mode cannot be found"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "If f₁ - f₀ = f₁ - f₂, then (f₁ - f₀) / [2f₁ - f₀ - f₂] = Δ / (Δ + Δ) = 1/2. Thus Mode = l + (1/2)h, which is precisely the midpoint of the modal class!"
    },
    {
        "id": "ts_c10_math_ch13_q81",
        "question_number": 81,
        "question": "Can a dataset have more than one median?",
        "difficulty": "tricky",
        "option_a": "No, every numerical dataset has a unique median",
        "option_b": "Yes, if it has an even number of observations",
        "option_c": "Yes, if it has two modes",
        "option_d": "Only for grouped data",
        "options": {
            "A": "No, every numerical dataset has a unique median",
            "B": "Yes, if it has an even number of observations",
            "C": "Yes, if it has two modes",
            "D": "Only for grouped data"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Unlike mode (which can be bimodal or multimodal), the median is ALWAYS unique for any dataset."
    },
    {
        "id": "ts_c10_math_ch13_q82",
        "question_number": 82,
        "question": "Can a dataset have no mode at all?",
        "difficulty": "tricky",
        "option_a": "Yes, if every observation occurs with the same frequency (e.g., each appears once)",
        "option_b": "No, every dataset must have at least one mode",
        "option_c": "Only for grouped data",
        "option_d": "Only if mean = 0",
        "options": {
            "A": "Yes, if every observation occurs with the same frequency (e.g., each appears once)",
            "B": "No, every dataset must have at least one mode",
            "C": "Only for grouped data",
            "D": "Only if mean = 0"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "If all values occur with equal frequency (e.g. 1, 2, 3, 4, 5), there is no greatest frequency and hence no mode."
    },
    {
        "id": "ts_c10_math_ch13_q83",
        "question_number": 83,
        "question": "If the mean of a set of 10 observations is 20, and the mean of another set of 15 observations is 30, what is the combined mean of all 25 observations?",
        "difficulty": "tricky",
        "option_a": "26",
        "option_b": "25",
        "option_c": "24",
        "option_d": "28",
        "options": {
            "A": "26",
            "B": "25",
            "C": "24",
            "D": "28"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Combined mean = (n1 x̄1 + n2 x̄2) / (n1 + n2) = (10 × 20 + 15 × 30) / 25 = (200 + 450) / 25 = 650 / 25 = 26."
    },
    {
        "id": "ts_c10_math_ch13_q84",
        "question_number": 84,
        "question": "In the ogive graph, the slope of the 'less than' ogive is:",
        "difficulty": "tricky",
        "option_a": "Always non-negative (never decreases)",
        "option_b": "Always negative",
        "option_c": "Alternating positive and negative",
        "option_d": "Constant",
        "options": {
            "A": "Always non-negative (never decreases)",
            "B": "Always negative",
            "C": "Alternating positive and negative",
            "D": "Constant"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Because cumulative frequencies are running sums of non-negative frequencies (f_i ≥ 0), cumulative frequency never decreases as x increases. The curve is non-decreasing."
    },
    {
        "id": "ts_c10_math_ch13_q85",
        "question_number": 85,
        "question": "In the ogive graph, the slope of the 'more than' ogive is:",
        "difficulty": "tricky",
        "option_a": "Always non-positive (never increases)",
        "option_b": "Always positive",
        "option_c": "Zero everywhere",
        "option_d": "First positive then negative",
        "options": {
            "A": "Always non-positive (never increases)",
            "B": "Always positive",
            "C": "Zero everywhere",
            "D": "First positive then negative"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "As the lower limit increases, fewer observations exceed that limit, so 'more than' cumulative frequency never increases."
    },
    {
        "id": "ts_c10_math_ch13_q86",
        "question_number": 86,
        "question": "What is the sum of the 'less than' cumulative frequency and the 'more than' cumulative frequency at any dividing point between two classes?",
        "difficulty": "tricky",
        "option_a": "Total frequency N",
        "option_b": "N / 2",
        "option_c": "2N",
        "option_d": "0",
        "options": {
            "A": "Total frequency N",
            "B": "N / 2",
            "C": "2N",
            "D": "0"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Observations less than x plus observations greater than x account for all N observations, so their sum is N."
    },
    {
        "id": "ts_c10_math_ch13_q87",
        "question_number": 87,
        "question": "If the median of the observations x/5, x, x/4, x/2, x/3 (where x > 0) is 8, find x:",
        "difficulty": "tricky",
        "option_a": "24",
        "option_b": "40",
        "option_c": "16",
        "option_d": "32",
        "options": {
            "A": "24",
            "B": "40",
            "C": "16",
            "D": "32"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Arranging in ascending order for x > 0: x/5 < x/4 < x/3 < x/2 < x. The middle (3rd) observation is x/3. Given x/3 = 8 ⇒ x = 24."
    },
    {
        "id": "ts_c10_math_ch13_q88",
        "question_number": 88,
        "question": "If the mean of a frequency distribution is 35 and each frequency f_i is doubled while keeping class marks unchanged, what happens to the mean?",
        "difficulty": "tricky",
        "option_a": "Remains 35",
        "option_b": "Becomes 70",
        "option_c": "Becomes 17.5",
        "option_d": "Becomes 35²",
        "options": {
            "A": "Remains 35",
            "B": "Becomes 70",
            "C": "Becomes 17.5",
            "D": "Becomes 35²"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Mean = Σ(2f_i x_i) / Σ(2f_i) = 2 Σ(f_i x_i) / [2 Σf_i] = x̄ = 35. Doubling all frequencies preserves the relative proportions, so the mean is UNCHANGED."
    },
    {
        "id": "ts_c10_math_ch13_q89",
        "question_number": 89,
        "question": "If the variance of a dataset is 0, what can be concluded about all the observations?",
        "difficulty": "tricky",
        "option_a": "All observations are identical (equal to each other)",
        "option_b": "All observations are 0",
        "option_c": "The mean is 0",
        "option_d": "The median is negative",
        "options": {
            "A": "All observations are identical (equal to each other)",
            "B": "All observations are 0",
            "C": "The mean is 0",
            "D": "The median is negative"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Variance is the average of squared deviations from the mean. Since squared deviations are non-negative, variance = 0 if and only if every deviation is zero, meaning all observations are identical."
    },
    {
        "id": "ts_c10_math_ch13_q90",
        "question_number": 90,
        "question": "In the construction of cumulative frequency tables, which of the following is an upper-class boundary for 'less than 20' in interval 10-20?",
        "difficulty": "tricky",
        "option_a": "20",
        "option_b": "10",
        "option_c": "15",
        "option_d": "25",
        "options": {
            "A": "20",
            "B": "10",
            "C": "15",
            "D": "25"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "In continuous interval 10-20, all values in this class are strictly less than 20 (the upper limit)."
    },
    {
        "id": "ts_c10_math_ch13_q91",
        "question_number": 91,
        "question": "If x̄ is the mean of x₁, x₂, ..., xₙ, and ȳ is the mean of y₁, y₂, ..., yₙ, then the mean of x₁ + y₁, x₂ + y₂, ..., xₙ + yₙ is:",
        "difficulty": "very_hard",
        "option_a": "x̄ + ȳ",
        "option_b": "x̄ ȳ",
        "option_c": "(x̄ + ȳ) / 2",
        "option_d": "x̄ - ȳ",
        "options": {
            "A": "x̄ + ȳ",
            "B": "x̄ ȳ",
            "C": "(x̄ + ȳ) / 2",
            "D": "x̄ - ȳ"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Mean = Σ(x_i + y_i) / n = (Σx_i + Σy_i) / n = Σx_i/n + Σy_i/n = x̄ + ȳ."
    },
    {
        "id": "ts_c10_math_ch13_q92",
        "question_number": 92,
        "question": "If the mean of n observations x₁, x₂, ..., xₙ is x̄, what is the value of Σᵢ₌₁ⁿ (xᵢ - x̄ + 3)?",
        "difficulty": "very_hard",
        "option_a": "3n",
        "option_b": "0",
        "option_c": "3",
        "option_d": "n(x̄ + 3)",
        "options": {
            "A": "3n",
            "B": "0",
            "C": "3",
            "D": "n(x̄ + 3)"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Σ(x_i - x̄ + 3) = Σ(x_i - x̄) + Σ 3 = 0 + 3n = 3n."
    },
    {
        "id": "ts_c10_math_ch13_q93",
        "question_number": 93,
        "question": "The average weight of 30 students in a class is 45 kg. If the teacher's weight is included, the average weight increases by 500 g (0.5 kg). What is the weight of the teacher?",
        "difficulty": "very_hard",
        "option_a": "60.5 kg",
        "option_b": "60 kg",
        "option_c": "55.5 kg",
        "option_d": "65 kg",
        "options": {
            "A": "60.5 kg",
            "B": "60 kg",
            "C": "55.5 kg",
            "D": "65 kg"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Total weight of 30 students = 30 × 45 = 1350 kg. Total weight of 31 people = 31 × 45.5 = 1410.5 kg. Teacher's weight = 1410.5 - 1350 = 60.5 kg."
    },
    {
        "id": "ts_c10_math_ch13_q94",
        "question_number": 94,
        "question": "For what value of k will the mode of the dataset 2, 4, 6, 4, 8, 6, 10, k, 4 be equal to 4?",
        "difficulty": "very_hard",
        "option_a": "Any real number",
        "option_b": "k must be 4",
        "option_c": "k cannot be 6",
        "option_d": "Both B and C are correct",
        "options": {
            "A": "Any real number",
            "B": "k must be 4",
            "C": "k cannot be 6",
            "D": "Both B and C are correct"
        },
        "correct_option": "D",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Currently 4 appears twice, 6 appears twice. For 4 to be the unique mode, 4 must appear at least 3 times (so k = 4), and certainly k cannot be 6 (otherwise 6 would also appear 3 times). Thus both B and C are correct!"
    },
    {
        "id": "ts_c10_math_ch13_q95",
        "question_number": 95,
        "question": "If the difference between mode and median of a frequency distribution is 24, what is the difference between median and mean?",
        "difficulty": "very_hard",
        "option_a": "12",
        "option_b": "24",
        "option_c": "8",
        "option_d": "16",
        "options": {
            "A": "12",
            "B": "24",
            "C": "8",
            "D": "16"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "We know Mode = 3 Median - 2 Mean ⇒ Mode - Median = 2 Median - 2 Mean = 2(Median - Mean). Given Mode - Median = 24 ⇒ 2(Median - Mean) = 24 ⇒ Median - Mean = 12."
    },
    {
        "id": "ts_c10_math_ch13_q96",
        "question_number": 96,
        "question": "If the difference between mode and mean of a distribution is k times the difference between median and mean, what is the value of k?",
        "difficulty": "very_hard",
        "option_a": "3",
        "option_b": "2",
        "option_c": "1/3",
        "option_d": "1/2",
        "options": {
            "A": "3",
            "B": "2",
            "C": "1/3",
            "D": "1/2"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Mode - Mean = (3 Median - 2 Mean) - Mean = 3 Median - 3 Mean = 3(Median - Mean). Therefore, k = 3."
    },
    {
        "id": "ts_c10_math_ch13_q97",
        "question_number": 97,
        "question": "Find the median of the first 100 natural numbers (1, 2, 3, ..., 100):",
        "difficulty": "very_hard",
        "option_a": "50.5",
        "option_b": "50",
        "option_c": "51",
        "option_d": "50.0",
        "options": {
            "A": "50.5",
            "B": "50",
            "C": "51",
            "D": "50.0"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Since n = 100 (even), Median = average of (n/2)th and (n/2 + 1)th terms = (50th + 51st) / 2 = (50 + 51) / 2 = 101 / 2 = 50.5."
    },
    {
        "id": "ts_c10_math_ch13_q98",
        "question_number": 98,
        "question": "In an examination, the mean marks of boys is 70 and that of girls is 73. If the combined mean of the whole class is 71, what is the ratio of the number of boys to girls?",
        "difficulty": "very_hard",
        "option_a": "2 : 1",
        "option_b": "1 : 2",
        "option_c": "3 : 1",
        "option_d": "3 : 2",
        "options": {
            "A": "2 : 1",
            "B": "1 : 2",
            "C": "3 : 1",
            "D": "3 : 2"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Let boys be n1 and girls be n2. 71 = (70 n1 + 73 n2) / (n1 + n2) ⇒ 71 n1 + 71 n2 = 70 n1 + 73 n2 ⇒ n1 = 2 n2 ⇒ n1 / n2 = 2 / 1."
    },
    {
        "id": "ts_c10_math_ch13_q99",
        "question_number": 99,
        "question": "The median of 11 distinct numbers is m. If the five smallest numbers are each decreased by 3, and the five largest numbers are each increased by 3, what is the new median?",
        "difficulty": "very_hard",
        "option_a": "m (remains completely unchanged)",
        "option_b": "m + 3",
        "option_c": "m - 3",
        "option_d": "m / 3",
        "options": {
            "A": "m (remains completely unchanged)",
            "B": "m + 3",
            "C": "m - 3",
            "D": "m / 3"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Decreasing values that are already smaller than m keeps them below m. Increasing values that are already larger keeps them above m. The middle (6th) observation m is unaffected, so the median remains exactly m."
    },
    {
        "id": "ts_c10_math_ch13_q100",
        "question_number": 100,
        "question": "A distribution has mean 15 and variance 4. If each observation is multiplied by 3 and then increased by 2, what are the new mean and new standard deviation?",
        "difficulty": "very_hard",
        "option_a": "New Mean = 47, New SD = 6",
        "option_b": "New Mean = 45, New SD = 12",
        "option_c": "New Mean = 47, New SD = 12",
        "option_d": "New Mean = 51, New SD = 4",
        "options": {
            "A": "New Mean = 47, New SD = 6",
            "B": "New Mean = 45, New SD = 12",
            "C": "New Mean = 47, New SD = 12",
            "D": "New Mean = 51, New SD = 4"
        },
        "correct_option": "A",
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": "Initial SD = √4 = 2. New Mean = 3(15) + 2 = 45 + 2 = 47. Scaling multiplies SD by 3, and adding a constant does not change spread: New SD = 3 × 2 = 6."
    }
]
};

if (typeof window !== 'undefined') {
    if (!window.EliteTestRegistry) window.EliteTestRegistry = [];
    window.EliteTestRegistry.push(Class10MathematicsChapter13FullBank);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Class10MathematicsChapter13FullBank;
}
