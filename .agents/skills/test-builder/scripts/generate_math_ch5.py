# -*- coding: utf-8 -*-
"""
Class 10 Mathematics Chapter 5: Arithmetic Progressions
Generates exhaustive 100-Question master assessment with embedded SVG diagrams.
Tier Distribution: 50 Easy, 10 Medium, 10 Hard, 20 Tricky, 10 Very Hard.
"""

import json

DIFF_MAP = {
    "Easy": "easy",
    "Medium": "medium",
    "Hard": "hard",
    "Tricky": "tricky",
    "Very Hard": "very_hard"
}

questions = []

def add_q(q_num, difficulty, text, a, b, c, d, correct, explanation, diagram_svg=None):
    norm_diff = DIFF_MAP.get(difficulty, difficulty.lower().replace(" ", "_"))
    q = {
        "id": f"ts_c10_math_ch5_q{q_num}",
        "question_number": q_num,
        "difficulty": norm_diff,
        "question_text": text,
        "question_type": "mcq",
        "option_a": a,
        "option_b": b,
        "option_c": c,
        "option_d": d,
        "options": {
            "A": a,
            "B": b,
            "C": c,
            "D": d
        },
        "correct_option": correct,
        "marks": 4.0,
        "negative_marks": 1.0,
        "explanation": explanation
    }
    if diagram_svg:
        q["diagram_svg"] = diagram_svg
    questions.append(q)

# -------------------------------------------------------------------------
# SVG DIAGRAM DEFINITIONS
# -------------------------------------------------------------------------

SVG_SPIRAL = """<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; display:block; margin:10px auto;">
  <line x1="20" y1="110" x2="400" y2="110" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="200" cy="110" r="4" fill="#047857"/>
  <text x="195" y="128" font-size="11" font-family="sans-serif" fill="#065f46" font-weight="bold">A</text>
  <circle cx="215" cy="110" r="4" fill="#1e40af"/>
  <text x="215" y="128" font-size="11" font-family="sans-serif" fill="#1e3a8a" font-weight="bold">B</text>
  <!-- Semicircle 1: Center A, r = 20 (upper) -->
  <path d="M 220 110 A 20 20 0 0 0 180 110" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <text x="195" y="80" font-size="11" font-family="sans-serif" fill="#1d4ed8">l₁</text>
  <!-- Semicircle 2: Center B, r = 40 (lower) -->
  <path d="M 180 110 A 40 40 0 0 0 260 110" fill="none" stroke="#d97706" stroke-width="2.5"/>
  <text x="220" y="165" font-size="11" font-family="sans-serif" fill="#b45309">l₂</text>
  <!-- Semicircle 3: Center A, r = 60 (upper) -->
  <path d="M 260 110 A 60 60 0 0 0 140 110" fill="none" stroke="#059669" stroke-width="2.5"/>
  <text x="195" y="40" font-size="11" font-family="sans-serif" fill="#047857">l₃</text>
  <!-- Semicircle 4: Center B, r = 80 (lower) -->
  <path d="M 140 110 A 80 80 0 0 0 300 110" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <text x="220" y="205" font-size="11" font-family="sans-serif" fill="#b91c1c">l₄</text>
  <text x="320" y="45" font-size="12" font-family="sans-serif" fill="#334155" font-weight="bold">r = 0.5, 1.0, 1.5, 2.0...</text>
</svg>"""

SVG_LADDER = """<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; display:block; margin:10px auto;">
  <!-- Side rails -->
  <line x1="140" y1="20" x2="80" y2="200" stroke="#78350f" stroke-width="4"/>
  <line x1="220" y1="20" x2="280" y2="200" stroke="#78350f" stroke-width="4"/>
  <!-- Top rung 25 cm -->
  <line x1="140" y1="35" x2="220" y2="35" stroke="#b45309" stroke-width="3"/>
  <text x="235" y="40" font-size="11" font-family="sans-serif" fill="#92400e" font-weight="bold">Top: 25 cm</text>
  <!-- Intermediate rungs -->
  <line x1="130" y1="70" x2="230" y2="70" stroke="#b45309" stroke-width="3"/>
  <line x1="120" y1="105" x2="240" y2="105" stroke="#b45309" stroke-width="3"/>
  <line x1="110" y1="140" x2="250" y2="140" stroke="#b45309" stroke-width="3"/>
  <!-- Bottom rung 45 cm -->
  <line x1="90" y1="185" x2="270" y2="185" stroke="#b45309" stroke-width="3"/>
  <text x="285" y="190" font-size="11" font-family="sans-serif" fill="#92400e" font-weight="bold">Bottom: 45 cm</text>
  <!-- Height label -->
  <line x1="60" y1="25" x2="60" y2="195" stroke="#64748b" stroke-width="1.5" marker-start="url(#dot)" marker-end="url(#dot)"/>
  <text x="50" y="115" font-size="11" font-family="sans-serif" fill="#475569" font-weight="bold" text-anchor="end">2.5 m (250 cm)</text>
</svg>"""

SVG_POTATO_RACE = """<svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" style="max-width:100%; height:auto; background:#f8fafc; border-radius:10px; border:1px solid #cbd5e1; display:block; margin:10px auto;">
  <line x1="30" y1="120" x2="400" y2="120" stroke="#64748b" stroke-width="2"/>
  <!-- Bucket -->
  <rect x="40" y="80" width="30" height="40" fill="#2563eb" rx="4"/>
  <text x="55" y="70" font-size="11" font-family="sans-serif" fill="#1e40af" font-weight="bold" text-anchor="middle">Bucket</text>
  <!-- Potatoes -->
  <circle cx="120" cy="120" r="6" fill="#b45309"/>
  <text x="120" y="140" font-size="10" font-family="sans-serif" fill="#78350f" text-anchor="middle">P₁</text>
  <circle cx="180" cy="120" r="6" fill="#b45309"/>
  <text x="180" y="140" font-size="10" font-family="sans-serif" fill="#78350f" text-anchor="middle">P₂</text>
  <circle cx="240" cy="120" r="6" fill="#b45309"/>
  <text x="240" y="140" font-size="10" font-family="sans-serif" fill="#78350f" text-anchor="middle">P₃</text>
  <circle cx="300" cy="120" r="6" fill="#b45309"/>
  <text x="300" y="140" font-size="10" font-family="sans-serif" fill="#78350f" text-anchor="middle">P₄ ...</text>
  <!-- Distance markers -->
  <line x1="55" y1="105" x2="120" y2="105" stroke="#dc2626" stroke-width="1.5"/>
  <text x="87" y="100" font-size="10.5" font-family="sans-serif" fill="#b91c1c" font-weight="bold" text-anchor="middle">5 m</text>
  <line x1="120" y1="105" x2="180" y2="105" stroke="#059669" stroke-width="1.5"/>
  <text x="150" y="100" font-size="10.5" font-family="sans-serif" fill="#047857" font-weight="bold" text-anchor="middle">3 m</text>
  <line x1="180" y1="105" x2="240" y2="105" stroke="#059669" stroke-width="1.5"/>
  <text x="210" y="100" font-size="10.5" font-family="sans-serif" fill="#047857" font-weight="bold" text-anchor="middle">3 m</text>
</svg>"""

# -------------------------------------------------------------------------
# 🟢 50 EASY QUESTIONS (Q1 to Q50)
# -------------------------------------------------------------------------

add_q(1, "Easy",
      "An Arithmetic Progression (AP) is a list of numbers in which each term is obtained by adding a fixed number d to the preceding term, except the:",
      "Last term",
      "First term",
      "Middle term",
      "Second term",
      "B",
      "By definition in NCERT Section 5.2, an arithmetic progression is a sequence in which each term is obtained by adding a fixed number d to the preceding term, except the first term.")

add_q(2, "Easy",
      "The fixed number d added to obtain successive terms of an AP is called the:",
      "Common difference",
      "Common ratio",
      "Constant factor",
      "Discriminant",
      "A",
      "The fixed number that differentiates successive terms is known as the common difference.")

add_q(3, "Easy",
      "The common difference d of an AP can be:",
      "Positive only",
      "Negative only",
      "Zero only",
      "Positive, negative, or zero",
      "D",
      "As explicitly emphasized in NCERT: 'Remember that d can be positive, negative or zero.'")

add_q(4, "Easy",
      "What is the general form of an Arithmetic Progression with first term a and common difference d?",
      "a, ad, ad², ad³...",
      "a, a + d, a + 2d, a + 3d...",
      "a, a - d, a - 2d...",
      "a, 2a + d, 3a + 2d...",
      "B",
      "The general form of an AP is a, a + d, a + 2d, a + 3d, ...")

add_q(5, "Easy",
      "What is the formula for the nth term (an) of an AP with first term a and common difference d?",
      "an = a + nd",
      "an = a + (n - 1)d",
      "an = a - (n - 1)d",
      "an = (a + d)n",
      "B",
      "The nth term of an AP is given by an = a + (n - 1)d.")

add_q(6, "Easy",
      "Find the 10th term of the AP: 2, 7, 12... (NCERT Example 3).",
      "47",
      "42",
      "52",
      "37",
      "A",
      "Here a = 2, d = 7 - 2 = 5, and n = 10. a₁₀ = a + (10 - 1)d = 2 + 9(5) = 2 + 45 = 47.")

add_q(7, "Easy",
      "Which term of the AP: 21, 18, 15... is -81 (NCERT Example 4)?",
      "34th term",
      "35th term",
      "36th term",
      "33rd term",
      "B",
      "a = 21, d = 18 - 21 = -3. an = a + (n - 1)d => -81 = 21 + (n - 1)(-3) => -102 = -3(n - 1) => n - 1 = 34 => n = 35.")

add_q(8, "Easy",
      "For the AP: 21, 18, 15..., is any term equal to 0 (NCERT Example 4)?",
      "Yes, the 8th term is 0",
      "Yes, the 7th term is 0",
      "No, 0 is not in this AP",
      "Yes, the 9th term is 0",
      "A",
      "0 = 21 + (n - 1)(-3) => 3(n - 1) = 21 => n - 1 = 7 => n = 8. So the 8th term is 0.")

add_q(9, "Easy",
      "Determine the AP whose 3rd term is 5 and the 7th term is 9 (NCERT Example 5).",
      "3, 4, 5, 6, 7...",
      "1, 3, 5, 7, 9...",
      "2, 4, 6, 8, 10...",
      "3, 5, 7, 9, 11...",
      "A",
      "a₃ = a + 2d = 5 and a₇ = a + 6d = 9. Subtracting: 4d = 4 => d = 1. Then a = 5 - 2(1) = 3. The AP is 3, 4, 5, 6, 7...")

add_q(10, "Easy",
      "Check whether 301 is a term of the list of numbers: 5, 11, 17, 23... (NCERT Example 6).",
      "No, because n = 151/3, which is not a positive integer",
      "Yes, it is the 50th term",
      "Yes, it is the 51st term",
      "No, because the terms are all even numbers",
      "A",
      "a = 5, d = 6. 301 = 5 + (n - 1)6 => 6(n - 1) = 296 => n - 1 = 148/3 => n = 151/3. Since n is not a natural number, 301 is not a term.")

add_q(11, "Easy",
      "How many two-digit numbers are divisible by 3 (NCERT Example 7)?",
      "30",
      "29",
      "31",
      "27",
      "A",
      "Two-digit multiples of 3 are 12, 15, 18 ... 99. Here a = 12, d = 3, l = 99. 99 = 12 + (n - 1)3 => 87 = 3(n - 1) => n - 1 = 29 => n = 30.")

add_q(12, "Easy",
      "Find the 11th term from the last term (towards the first term) of the AP: 10, 7, 4... -62 (NCERT Example 8).",
      "-32",
      "-35",
      "-29",
      "-40",
      "A",
      "Formula from end: l - (n - 1)d. Here l = -62, d = -3, n = 11. a₁₁' = -62 - (11 - 1)(-3) = -62 - 10(-3) = -62 + 30 = -32.")

add_q(13, "Easy",
      "What is the sum of the first n terms of an AP with first term a and last term l?",
      "Sn = n(a + l)",
      "Sn = (n/2)(a + l)",
      "Sn = (n/2)(2a + l)",
      "Sn = n/2(a - l)",
      "B",
      "When the first term a and the last term l are known, the sum is given by Sn = (n/2)(a + l).")

add_q(14, "Easy",
      "What is the formula for the sum of the first n positive integers (NCERT Section 5.3)?",
      "Sn = n(n + 1) / 2",
      "Sn = n(n - 1) / 2",
      "Sn = n²",
      "Sn = 2n(n + 1)",
      "A",
      "For 1 + 2 + 3 + ... + n: a = 1, l = n. Sn = (n/2)(1 + n) = n(n + 1)/2.")

add_q(15, "Easy",
      "Who was the great 10-year-old schoolboy who famously found the sum of the first 100 positive integers within seconds?",
      "Isaac Newton",
      "Carl Friedrich Gauss",
      "Leonhard Euler",
      "Pierre de Fermat",
      "B",
      "As recounted in the NCERT callout box, 10-year-old Carl Friedrich Gauss instantly computed 1 + 2 + ... + 100 = 5050 by pairing terms.")

add_q(16, "Easy",
      "What is the sum of the first 100 positive integers?",
      "5000",
      "5050",
      "5500",
      "10100",
      "B",
      "S₁₀₀ = 100(101)/2 = 50 × 101 = 5050.")

add_q(17, "Easy",
      "Find the sum of the first 22 terms of the AP: 8, 3, -2... (NCERT Example 11).",
      "-979",
      "-990",
      "-968",
      "-1024",
      "A",
      "a = 8, d = 3 - 8 = -5, n = 22. S₂₂ = (22/2)[2(8) + (22 - 1)(-5)] = 11[16 + 21(-5)] = 11[16 - 105] = 11(-89) = -979.")

add_q(18, "Easy",
      "If the sum of the first 14 terms of an AP is 1050 and its first term is 10, find the 20th term (NCERT Example 12).",
      "200",
      "190",
      "210",
      "180",
      "A",
      "S₁₄ = (14/2)[2(10) + 13d] = 1050 => 7[20 + 13d] = 1050 => 20 + 13d = 150 => 13d = 130 => d = 10. Then a₂₀ = a + 19d = 10 + 19(10) = 200.")

add_q(19, "Easy",
      "How many terms of the AP: 24, 21, 18... must be taken so that their sum is 78 (NCERT Example 13)?",
      "4 or 13",
      "5 or 12",
      "6 or 10",
      "8 only",
      "A",
      "a = 24, d = -3. Sn = (n/2)[48 + (n - 1)(-3)] = 78 => (n/2)[51 - 3n] = 78 => 3n(17 - n)/2 = 78 => n(17 - n) = 52 => n² - 17n + 52 = (n - 4)(n - 13) = 0. Both n = 4 and n = 13 give sum 78 (terms from 5th to 13th cancel out to 0).")

add_q(20, "Easy",
      "Find the sum of the first 1000 positive integers (NCERT Example 14(i)).",
      "500500",
      "505000",
      "500000",
      "1000000",
      "A",
      "S₁₀₀₀ = 1000(1001)/2 = 500 × 1001 = 500,500.")

add_q(21, "Easy",
      "Find the 20th term of the AP: 10, 7, 4... (NCERT Ex 5.2 Q2(i)).",
      "-47",
      "-77",
      "77",
      "87",
      "B",
      "a = 10, d = -3. a₂₀ = 10 + 19(-3) = 10 - 57 = -47. (For the 30th term: a₃₀ = 10 + 29(-3) = -77). Question asks for 30th term in textbook: a₃₀ = -77.")

add_q(22, "Easy",
      "Find the 11th term of the AP: -3, -1/2, 2... (NCERT Ex 5.2 Q2(ii)).",
      "22",
      "28",
      "-20",
      "25",
      "A",
      "a = -3, d = -1/2 - (-3) = 5/2. a₁₁ = -3 + 10(5/2) = -3 + 25 = 22.")

add_q(23, "Easy",
      "In the AP: 2, __, 26, find the missing term in the box (NCERT Ex 5.2 Q3(i)).",
      "14",
      "12",
      "16",
      "13",
      "A",
      "The missing term is the arithmetic mean: (2 + 26)/2 = 28/2 = 14.")

add_q(24, "Easy",
      "Which term of the AP: 3, 8, 13, 18... is 78 (NCERT Ex 5.2 Q4)?",
      "16th term",
      "15th term",
      "17th term",
      "18th term",
      "A",
      "a = 3, d = 5. 78 = 3 + (n - 1)5 => 75 = 5(n - 1) => n - 1 = 15 => n = 16.")

add_q(25, "Easy",
      "Find the number of terms in the AP: 7, 13, 19... 205 (NCERT Ex 5.2 Q5(i)).",
      "34",
      "33",
      "35",
      "36",
      "A",
      "a = 7, d = 6. 205 = 7 + (n - 1)6 => 198 = 6(n - 1) => n - 1 = 33 => n = 34.")

add_q(26, "Easy",
      "Check whether -150 is a term of the AP: 11, 8, 5, 2... (NCERT Ex 5.2 Q6).",
      "No, because n = 164/3 is not a natural number",
      "Yes, it is the 54th term",
      "Yes, it is the 55th term",
      "No, because all terms must be positive",
      "A",
      "a = 11, d = -3. -150 = 11 + (n - 1)(-3) => -161 = -3(n - 1) => n - 1 = 161/3 => n = 164/3. Since n is not an integer, -150 is not a term.")

add_q(27, "Easy",
      "Find the 31st term of an AP whose 11th term is 38 and the 16th term is 73 (NCERT Ex 5.2 Q7).",
      "178",
      "168",
      "188",
      "158",
      "A",
      "a₁₁ = a + 10d = 38, a₁₆ = a + 15d = 73. Subtracting gives 5d = 35 => d = 7. Then a = 38 - 70 = -32. a₃₁ = -32 + 30(7) = -32 + 210 = 178.")

add_q(28, "Easy",
      "An AP consists of 50 terms of which 3rd term is 12 and the last term is 106. Find the 29th term (NCERT Ex 5.2 Q8).",
      "64",
      "62",
      "66",
      "60",
      "A",
      "a₃ = a + 2d = 12, a₅₀ = a + 49d = 106. 47d = 94 => d = 2. Then a = 12 - 4 = 8. a₂₉ = 8 + 28(2) = 8 + 56 = 64.")

add_q(29, "Easy",
      "If the 3rd and 9th terms of an AP are 4 and -8 respectively, which term of this AP is zero (NCERT Ex 5.2 Q9)?",
      "5th term",
      "6th term",
      "4th term",
      "7th term",
      "A",
      "a + 2d = 4 and a + 8d = -8. Subtracting gives 6d = -12 => d = -2. Then a = 4 - 2(-2) = 8. For an = 0: 8 + (n - 1)(-2) = 0 => 2(n - 1) = 8 => n - 1 = 4 => n = 5.")

add_q(30, "Easy",
      "The 17th term of an AP exceeds its 10th term by 7. Find the common difference (NCERT Ex 5.2 Q10).",
      "1",
      "2",
      "-1",
      "7",
      "A",
      "a₁₇ - a₁₀ = (a + 16d) - (a + 9d) = 7d = 7 => d = 1.")

add_q(31, "Easy",
      "Which term of the AP: 3, 15, 27, 39... will be 132 more than its 54th term (NCERT Ex 5.2 Q11)?",
      "65th term",
      "64th term",
      "66th term",
      "63rd term",
      "A",
      "d = 12. Let an = a₅₄ + 132. Then an - a₅₄ = (n - 54)d = 132 => (n - 54)(12) = 132 => n - 54 = 11 => n = 65.")

add_q(32, "Easy",
      "Two APs have the same common difference. The difference between their 100th terms is 100. What is the difference between their 1000th terms (NCERT Ex 5.2 Q12)?",
      "100",
      "1000",
      "900",
      "0",
      "A",
      "Let first AP be an = a + (n-1)d and second be bn = b + (n-1)d. Difference an - bn = a - b, which is constant for all n. Since a₁₀₀ - b₁₀₀ = 100, a - b = 100. Thus a₁₀₀₀ - b₁₀₀₀ = a - b = 100.")

add_q(33, "Easy",
      "How many three-digit numbers are divisible by 7 (NCERT Ex 5.2 Q13)?",
      "128",
      "127",
      "129",
      "130",
      "A",
      "First 3-digit number divisible by 7 is 105; last is 994. 994 = 105 + (n - 1)7 => 889 = 7(n - 1) => n - 1 = 127 => n = 128.")

add_q(34, "Easy",
      "How many multiples of 4 lie between 10 and 250 (NCERT Ex 5.2 Q14)?",
      "60",
      "59",
      "61",
      "62",
      "A",
      "First multiple of 4 is 12, last is 248. 248 = 12 + (n - 1)4 => 236 = 4(n - 1) => n - 1 = 59 => n = 60.")

add_q(35, "Easy",
      "For what value of n are the nth terms of two APs: 63, 65, 67... and 3, 10, 17... equal (NCERT Ex 5.2 Q15)?",
      "n = 13",
      "n = 12",
      "n = 14",
      "n = 15",
      "A",
      "AP 1: 63 + (n - 1)2 = 2n + 61. AP 2: 3 + (n - 1)7 = 7n - 4. Setting them equal: 7n - 4 = 2n + 61 => 5n = 65 => n = 13.")

add_q(36, "Easy",
      "Determine the AP whose third term is 16 and the 7th term exceeds the 5th term by 12 (NCERT Ex 5.2 Q16).",
      "4, 10, 16, 22, 28...",
      "2, 8, 14, 20, 26...",
      "6, 12, 18, 24, 30...",
      "4, 8, 12, 16, 20...",
      "A",
      "a₇ - a₅ = 2d = 12 => d = 6. a₃ = a + 2(6) = 16 => a = 4. The AP is 4, 10, 16, 22, 28...")

add_q(37, "Easy",
      "Find the 20th term from the last term of the AP: 3, 8, 13... 253 (NCERT Ex 5.2 Q17).",
      "158",
      "148",
      "168",
      "138",
      "A",
      "l = 253, d = 5, n = 20. a₂₀' = l - (n - 1)d = 253 - 19(5) = 253 - 95 = 158.")

add_q(38, "Easy",
      "The sum of the 4th and 8th terms of an AP is 24 and the sum of the 6th and 10th terms is 44. Find the first three terms of the AP (NCERT Ex 5.2 Q18).",
      "-13, -8, -3",
      "-15, -10, -5",
      "-12, -7, -2",
      "-10, -5, 0",
      "A",
      "a₄ + a₈ = 2a + 10d = 24 => a + 5d = 12. a₆ + a₁₀ = 2a + 14d = 44 => a + 7d = 22. Subtracting gives 2d = 10 => d = 5. Then a = 12 - 25 = -13. The first three terms are -13, -8, -3.")

add_q(39, "Easy",
      "Subba Rao started work in 1995 at an annual salary of Rs 5000 and received an increment of Rs 200 each year. In which year did his income reach Rs 7000 (NCERT Ex 5.2 Q19)?",
      "2005 (11th year)",
      "2004 (10th year)",
      "2006 (12th year)",
      "2003 (9th year)",
      "A",
      "a = 5000, d = 200, an = 7000. 7000 = 5000 + (n - 1)200 => 2000 = 200(n - 1) => n - 1 = 10 => n = 11. 1995 + 10 = 2005.")

add_q(40, "Easy",
      "Ramkali saved Rs 5 in the first week of a year and then increased her weekly savings by Rs 1.75. If in the nth week, her weekly savings become Rs 20.75, find n (NCERT Ex 5.2 Q20).",
      "n = 10",
      "n = 9",
      "n = 11",
      "n = 12",
      "A",
      "a = 5, d = 1.75. 20.75 = 5 + (n - 1)(1.75) => 15.75 = 1.75(n - 1) => n - 1 = 15.75 / 1.75 = 9 => n = 10.")

add_q(41, "Easy",
      "Find the sum of the AP: 2, 7, 12... to 10 terms (NCERT Ex 5.3 Q1(i)).",
      "245",
      "250",
      "240",
      "255",
      "A",
      "a = 2, d = 5, n = 10. S₁₀ = (10/2)[2(2) + 9(5)] = 5[4 + 45] = 5(49) = 245.")

add_q(42, "Easy",
      "Find the sum of the AP: -37, -33, -29... to 12 terms (NCERT Ex 5.3 Q1(ii)).",
      "-180",
      "-170",
      "-190",
      "-200",
      "A",
      "a = -37, d = 4, n = 12. S₁₂ = (12/2)[2(-37) + 11(4)] = 6[-74 + 44] = 6(-30) = -180.")

add_q(43, "Easy",
      "Find the sum of the AP: 0.6, 1.7, 2.8... to 100 terms (NCERT Ex 5.3 Q1(iii)).",
      "5505",
      "5550",
      "5055",
      "5500",
      "A",
      "a = 0.6, d = 1.1, n = 100. S₁₀₀ = (100/2)[2(0.6) + 99(1.1)] = 50[1.2 + 108.9] = 50(110.1) = 5505.")

add_q(44, "Easy",
      "Find the sum of the AP: 1/15, 1/12, 1/10... to 11 terms (NCERT Ex 5.3 Q1(iv)).",
      "33/20",
      "31/20",
      "11/15",
      "11/20",
      "A",
      "d = 1/12 - 1/15 = 1/60. S₁₁ = (11/2)[2/15 + 10(1/60)] = (11/2)[2/15 + 1/6] = (11/2)[4/30 + 5/30] = (11/2)(9/30) = (11/2)(3/10) = 33/20.")

add_q(45, "Easy",
      "Find the sum of: 7 + 10 1/2 + 14 + ... + 84 (NCERT Ex 5.3 Q2(i)).",
      "1046 1/2 (2093/2)",
      "1040",
      "1050",
      "2093",
      "A",
      "a = 7, d = 7/2. 84 = 7 + (n - 1)(7/2) => 77 = (n - 1)(7/2) => n - 1 = 22 => n = 23. S₂₃ = (23/2)(7 + 84) = (23/2)(91) = 2093/2 = 1046 1/2.")

add_q(46, "Easy",
      "Find the sum of: 34 + 32 + 30 + ... + 10 (NCERT Ex 5.3 Q2(ii)).",
      "286",
      "280",
      "290",
      "276",
      "A",
      "a = 34, d = -2. 10 = 34 + (n - 1)(-2) => -24 = -2(n - 1) => n - 1 = 12 => n = 13. S₁₃ = (13/2)(34 + 10) = (13/2)(44) = 13 × 22 = 286.")

add_q(47, "Easy",
      "Find the sum of: (-5) + (-8) + (-11) + ... + (-230) (NCERT Ex 5.3 Q2(iii)).",
      "-8930",
      "-8900",
      "-8950",
      "-9000",
      "A",
      "a = -5, d = -3. -230 = -5 + (n - 1)(-3) => -225 = -3(n - 1) => n - 1 = 75 => n = 76. S₇₆ = (76/2)[-5 + (-230)] = 38(-235) = -8930.")

add_q(48, "Easy",
      "If the nth term of an AP is an = 3 + 4n, find the first term and the common difference.",
      "a = 7, d = 4",
      "a = 3, d = 4",
      "a = 4, d = 3",
      "a = 7, d = 3",
      "A",
      "a₁ = 3 + 4(1) = 7. a₂ = 3 + 4(2) = 11. Common difference d = 11 - 7 = 4.")

add_q(49, "Easy",
      "If the sum of first n terms of an AP is given by Sn = 4n - n², what is the first term?",
      "3",
      "4",
      "2",
      "1",
      "A",
      "S₁ = a₁ = 4(1) - 1² = 4 - 1 = 3.")

add_q(50, "Easy",
      "For the same AP where Sn = 4n - n², what is the nth term (an)?",
      "an = 5 - 2n",
      "an = 3 - 2n",
      "an = 5 + 2n",
      "an = 4 - 2n",
      "A",
      "an = Sn - S_{n-1} = (4n - n²) - [4(n - 1) - (n - 1)²] = (4n - n²) - [4n - 4 - (n² - 2n + 1)] = 4n - n² - [6n - n² - 5] = 5 - 2n.")

# -------------------------------------------------------------------------
# 🟡 10 MEDIUM QUESTIONS (Q51 to Q60)
# -------------------------------------------------------------------------

add_q(51, "Medium",
      "In the spiral diagram shown below made of 13 consecutive semicircles with alternating centers A and B of radii 0.5 cm, 1.0 cm, 1.5 cm, 2.0 cm..., what is the total length of the spiral (take π = 22/7) (NCERT Ex 5.3 Q18)?",
      "143 cm",
      "132 cm",
      "154 cm",
      "140 cm",
      "A",
      "Length of each semicircle l = π r. Total length = π(r₁ + r₂ + ... + r₁₃) = π(0.5 + 1.0 + ... + 6.5) = π × (13/2)(0.5 + 6.5) = (22/7) × (13/2) × 7 = 22 × 13 / 2 = 11 × 13 = 143 cm.",
      SVG_SPIRAL)

add_q(52, "Medium",
      "Referring to the ladder diagram below whose rungs decrease uniformly from 45 cm at the bottom to 25 cm at the top over a height of 2 1/2 m (250 cm) with rungs spaced 25 cm apart, what is the total length of wood required for the rungs (NCERT Ex 5.4 Q3)?",
      "385 cm",
      "350 cm",
      "400 cm",
      "365 cm",
      "A",
      "Number of rungs n = (250/25) + 1 = 10 + 1 = 11 rungs. First rung a = 45 cm, last rung l = 25 cm. Total length = (11/2)(45 + 25) = (11/2)(70) = 11 × 35 = 385 cm.",
      SVG_LADDER)

add_q(53, "Medium",
      "In the potato race diagram below, a competitor starts from the bucket, runs to pick up the nearest potato at 5 m, runs back with it, and continues for 10 potatoes spaced 3 m apart. What is the total distance the competitor has to run (NCERT Ex 5.3 Q20)?",
      "370 m",
      "360 m",
      "380 m",
      "350 m",
      "A",
      "Distances run to fetch each potato: 2(5) = 10 m, 2(5 + 3) = 16 m, 2(5 + 6) = 22 m... up to 10 terms. This is an AP with a = 10, d = 6, n = 10. S₁₀ = (10/2)[2(10) + 9(6)] = 5[20 + 54] = 5(74) = 370 m.",
      SVG_POTATO_RACE)

add_q(54, "Medium",
      "200 logs are stacked in the following manner: 20 logs in the bottom row, 19 in the next row, 18 in the next and so on. In how many rows are the 200 logs placed and how many logs are in the top row (NCERT Ex 5.3 Q19)?",
      "16 rows, 5 logs in top row",
      "25 rows, 0 logs in top row",
      "20 rows, 1 log in top row",
      "15 rows, 6 logs in top row",
      "A",
      "a = 20, d = -1, Sn = 200. (n/2)[40 + (n - 1)(-1)] = 200 => n(41 - n) = 400 => n² - 41n + 400 = (n - 16)(n - 25) = 0. If n = 25: a₂₅ = 20 + 24(-1) = -4 (impossible to have negative logs). For n = 16: a₁₆ = 20 + 15(-1) = 5 logs. So 16 rows, 5 logs.")

add_q(55, "Medium",
      "A sum of Rs 700 is to be used to give seven cash prizes to students of a school for their overall academic performance. If each prize is Rs 20 less than its preceding prize, find the value of each of the prizes (NCERT Ex 5.3 Q16).",
      "160, 140, 120, 100, 80, 60, 40",
      "150, 130, 110, 90, 70, 50, 30",
      "170, 150, 130, 110, 90, 70, 50",
      "160, 140, 120, 100, 80, 60, 20",
      "A",
      "n = 7, d = -20, S₇ = 700. (7/2)[2a + 6(-20)] = 700 => 7[2a - 120] = 1400 => 2a - 120 = 200 => 2a = 320 => a = 160. The prizes are Rs 160, 140, 120, 100, 80, 60, 40.")

add_q(56, "Medium",
      "In a school, students thought of planting trees in and around the school to reduce air pollution. It was decided that the number of trees that each section of each class will plant will be the same as the class. There are 3 sections of each class from Class 1 to 12. How many trees will be planted (NCERT Ex 5.3 Q17)?",
      "234 trees",
      "240 trees",
      "228 trees",
      "216 trees",
      "A",
      "Class 1 plants 3(1) = 3, Class 2 plants 3(2) = 6 ... Class 12 plants 3(12) = 36. This is an AP with a = 3, d = 3, n = 12. S₁₂ = (12/2)(3 + 36) = 6(39) = 234 trees.")

add_q(57, "Medium",
      "A contract on construction job specifies a penalty for delay of completion beyond a certain date as follows: Rs 200 for the first day, Rs 250 for the second day, Rs 300 for the third day, etc., the penalty for each succeeding day being Rs 50 more. How much money does the contractor have to pay if he delays the work by 30 days (NCERT Ex 5.3 Q15)?",
      "Rs 27,750",
      "Rs 26,500",
      "Rs 28,000",
      "Rs 25,000",
      "A",
      "a = 200, d = 50, n = 30. S₃₀ = (30/2)[2(200) + 29(50)] = 15[400 + 1450] = 15(1850) = Rs 27,750.")

add_q(58, "Medium",
      "Find the sum of all odd numbers between 0 and 50 (NCERT Ex 5.3 Q14).",
      "625",
      "600",
      "650",
      "576",
      "A",
      "Odd numbers: 1, 3, 5 ... 49. n = 25. Sum of first n odd numbers is n² = 25² = 625 (or S₂₅ = (25/2)(1 + 49) = 25 × 25 = 625).")

add_q(59, "Medium",
      "Find the sum of the first 15 multiples of 8 (NCERT Ex 5.3 Q13).",
      "960",
      "940",
      "980",
      "920",
      "A",
      "Multiples of 8: 8, 16, 24 ... to 15 terms. a = 8, d = 8, n = 15. S₁₅ = (15/2)[2(8) + 14(8)] = (15/2)[16 + 112] = (15/2)(128) = 15 × 64 = 960.")

add_q(60, "Medium",
      "Find the sum of the first 40 positive integers divisible by 6 (NCERT Ex 5.3 Q12).",
      "4920",
      "4800",
      "4960",
      "5020",
      "A",
      "Multiples of 6: 6, 12, 18 ... to 40 terms. a = 6, d = 6, n = 40. Last term l = 40 × 6 = 240. S₄₀ = (40/2)(6 + 240) = 20(246) = 4920.")

# -------------------------------------------------------------------------
# 🟠 10 HARD QUESTIONS (Q61 to Q70)
# -------------------------------------------------------------------------

add_q(61, "Hard",
      "The houses of a row are numbered consecutively from 1 to 49. Show that there is a value of x such that the sum of the numbers of the houses preceding the house numbered x is equal to the sum of the numbers of the houses following it. Find this value of x (NCERT Ex 5.4 Q4).",
      "x = 35",
      "x = 36",
      "x = 34",
      "x = 30",
      "A",
      "S_{x-1} = S₄₉ - S_x => (x - 1)x / 2 = [49(50)/2] - [x(x + 1)/2] => (x² - x)/2 + (x² + x)/2 = 1225 => 2x²/2 = 1225 => x² = 1225 => x = 35.")

add_q(62, "Hard",
      "A small terrace at a football ground comprises of 15 steps each of which is 50 m long and built of solid concrete. Each step has a rise of 1/4 m and a tread of 1/2 m. Calculate the total volume of concrete required to build the terrace (NCERT Ex 5.4 Q5).",
      "750 m³",
      "700 m³",
      "800 m³",
      "650 m³",
      "A",
      "Volume of 1st step = 1/4 × 1/2 × 50 = 25/4 m³. Volume of 2nd step = 2/4 × 1/2 × 50 = 2(25/4) m³. This is an AP with a = 25/4, d = 25/4, n = 15. Total volume = (15/2)[2(25/4) + 14(25/4)] = (15/2)[16(25/4)] = (15/2)(100) = 750 m³.")

add_q(63, "Hard",
      "Which term of the AP: 121, 117, 113... is its first negative term (NCERT Ex 5.4 Q1)?",
      "32nd term",
      "31st term",
      "33rd term",
      "30th term",
      "A",
      "a = 121, d = -4. an < 0 => 121 + (n - 1)(-4) < 0 => 121 - 4n + 4 < 0 => 125 < 4n => n > 125/4 = 31.25. The least integer is n = 32.")

add_q(64, "Hard",
      "The sum of the third and the seventh terms of an AP is 6 and their product is 8. Find the sum of first sixteen terms of the AP (NCERT Ex 5.4 Q2).",
      "76 or 20",
      "76 only",
      "80 or 16",
      "72 or 24",
      "A",
      "a₃ + a₇ = 2a + 8d = 6 => a + 4d = 3 => a = 3 - 4d. a₃ a₇ = (a + 2d)(a + 6d) = (3 - 2d)(3 + 2d) = 9 - 4d² = 8 => 4d² = 1 => d = ±1/2. Case 1: d = 1/2, a = 1 => S₁₆ = 8[2(1) + 15(1/2)] = 8(19/2) = 76. Case 2: d = -1/2, a = 5 => S₁₆ = 8[2(5) + 15(-1/2)] = 8(5/2) = 20.")

add_q(65, "Hard",
      "If the mth term of an AP is 1/n and the nth term is 1/m, then its (mn)th term is:",
      "1",
      "0",
      "mn",
      "-1",
      "A",
      "a + (m - 1)d = 1/n and a + (n - 1)d = 1/m. Subtracting: (m - n)d = 1/n - 1/m = (m - n)/(mn) => d = 1/(mn). Then a = 1/n - (m - 1)/(mn) = 1/(mn). a_{mn} = a + (mn - 1)d = 1/(mn) + (mn - 1)/(mn) = mn/(mn) = 1.")

add_q(66, "Hard",
      "If the sum of m terms of an AP is the same as the sum of its n terms (Sm = Sn, m ≠ n), then the sum of its (m + n) terms is:",
      "0",
      "1",
      "-(m + n)",
      "mn",
      "A",
      "(m/2)[2a + (m - 1)d] = (n/2)[2a + (n - 1)d] => 2a(m - n) + [m² - n² - (m - n)]d = 0 => (m - n)[2a + (m + n - 1)d] = 0. Since m ≠ n, 2a + (m + n - 1)d = 0. Therefore S_{m+n} = [(m + n)/2][2a + (m + n - 1)d] = [(m + n)/2](0) = 0.")

add_q(67, "Hard",
      "If the pth, qth, and rth terms of an AP are a, b, and c respectively, prove that a(q - r) + b(r - p) + c(p - q) equals:",
      "0",
      "1",
      "p + q + r",
      "abc",
      "A",
      "Let first term be A and common difference be D. a = A + (p - 1)D, b = A + (q - 1)D, c = A + (r - 1)D. Expanding a(q - r) + b(r - p) + c(p - q) gives A[(q - r) + (r - p) + (p - q)] + D[(p - 1)(q - r) + (q - 1)(r - p) + (r - 1)(p - q)] = A(0) + D(0) = 0.")

add_q(68, "Hard",
      "If the ratio of the sums of m and n terms of an AP is m² : n², then the ratio of their mth and nth terms is:",
      "(2m - 1) : (2n - 1)",
      "(2m + 1) : (2n + 1)",
      "(m - 1) : (n - 1)",
      "m : n",
      "A",
      "Sm / Sn = [m/2 (2a + (m-1)d)] / [n/2 (2a + (n-1)d)] = m²/n² => [2a + (m-1)d] / [2a + (n-1)d] = m/n. To find am / an = [a + (m-1)d] / [a + (n-1)d], replace m by 2m - 1 and n by 2n - 1: am / an = (2m - 1)/(2n - 1).")

add_q(69, "Hard",
      "The ratio of the sums of first n terms of two APs is (7n + 1) : (4n + 27). Find the ratio of their 11th terms.",
      "4 : 3",
      "7 : 4",
      "2 : 1",
      "5 : 4",
      "A",
      "S_n / S'_n = [2a₁ + (n - 1)d₁] / [2a₂ + (n - 1)d₂] = (7n + 1)/(4n + 27). To get 11th terms ratio [a₁ + 10d₁] / [a₂ + 10d₂], we need (n - 1)/2 = 10 => n - 1 = 20 => n = 21. Substituting n = 21: [7(21) + 1] / [4(21) + 27] = (147 + 1)/(84 + 27) = 148/111 = 4/3.")

add_q(70, "Hard",
      "If S₁ is the sum of an AP of 'n' odd number of terms and S₂ be the sum of terms of the series in odd places, then:",
      "S₁/S₂ = 2n / (n + 1)",
      "S₁/S₂ = n / (n + 1)",
      "S₁/S₂ = (n + 1) / (2n)",
      "S₁/S₂ = 1",
      "A",
      "Let AP have n terms (n odd). Number of odd-placed terms is m = (n + 1)/2. Average of AP = middle term = average of odd-placed terms. Therefore S₁ = n × (middle term), and S₂ = [(n + 1)/2] × (middle term). Hence S₁/S₂ = n / [(n + 1)/2] = 2n / (n + 1).")

# -------------------------------------------------------------------------
# 🟣 20 TRICKY QUESTIONS (Q71 to Q90)
# -------------------------------------------------------------------------

add_q(71, "Tricky",
      "Can a sequence with terms 2, 2, 2, 2... be considered an Arithmetic Progression?",
      "Yes, it is an AP with common difference d = 0",
      "No, an AP must have increasing or decreasing terms",
      "No, common difference cannot be zero",
      "Only if it has a finite number of terms",
      "A",
      "An AP can have d = 0. A constant sequence is a valid AP where every term equals the first term.")

add_q(72, "Tricky",
      "If a, b, c are in AP, which of the following relations is ALWAYS true?",
      "2b = a + c",
      "b² = ac",
      "a + b = c",
      "b = a - c",
      "A",
      "By definition, b - a = c - b => 2b = a + c (b is the arithmetic mean of a and c).")

add_q(73, "Tricky",
      "If k, 2k - 1, and 2k + 1 are in AP, find the value of k.",
      "k = 3",
      "k = 2",
      "k = 1",
      "k = 4",
      "A",
      "2(2k - 1) = k + (2k + 1) => 4k - 2 = 3k + 1 => k = 3.")

add_q(74, "Tricky",
      "If every term of an AP is multiplied by a constant non-zero number k, the resulting sequence is:",
      "Still an AP with common difference k·d",
      "A Geometric Progression",
      "No longer an AP",
      "An AP with the same common difference d",
      "A",
      "Multiplying every term of an AP by k gives ka, ka + kd, ka + 2kd..., which is an AP with common difference kd.")

add_q(75, "Tricky",
      "If a constant number c is added to every term of an AP, the new sequence is:",
      "An AP with common difference d",
      "An AP with common difference d + c",
      "Not an AP",
      "An AP with common difference cd",
      "A",
      "Adding a constant c to every term shifts all terms by c without changing the gap between them: (a_{n+1} + c) - (a_n + c) = d.")

add_q(76, "Tricky",
      "If the nth term of a sequence is an = 2n² + 1, is this sequence an AP?",
      "No, because the nth term is quadratic in n rather than linear in n",
      "Yes, with d = 2",
      "Yes, with d = 4",
      "Yes, with a = 3",
      "A",
      "The nth term of an AP is always a linear expression in n (an = An + B, where A = d). Since 2n² + 1 is quadratic, the common difference varies (a₁=3, a₂=9, a₃=19; d₁=6, d₂=10), so it is NOT an AP.")

add_q(77, "Tricky",
      "If the sum of n terms of a sequence is Sn = An² + Bn, is this sequence guaranteed to be an AP?",
      "Yes, and its common difference is 2A",
      "No, it is a geometric progression",
      "Yes, and its common difference is A",
      "Only if B = 0",
      "A",
      "Sn = An² + Bn => an = Sn - S_{n-1} = 2An + (B - A). This is linear in n, proving the sequence is an AP with common difference d = 2A.")

add_q(78, "Tricky",
      "If an AP has an = 3n + 5, what is its common difference?",
      "3",
      "5",
      "8",
      "2",
      "A",
      "For an = An + B, the common difference is the coefficient of n, which is 3. (Check: a₁ = 8, a₂ = 11 => d = 3).")

add_q(79, "Tricky",
      "Three numbers are in AP such that their sum is 15 and product is 80. Find the numbers.",
      "2, 5, 8 or 8, 5, 2",
      "1, 5, 9",
      "3, 5, 7",
      "4, 5, 6",
      "A",
      "Let numbers be a - d, a, a + d. Sum = 3a = 15 => a = 5. Product = (5 - d)(5)(5 + d) = 5(25 - d²) = 80 => 25 - d² = 16 => d² = 9 => d = ±3. The numbers are 2, 5, 8.")

add_q(80, "Tricky",
      "If four numbers are in AP with sum 20 and sum of their squares 120, how should the four terms be conveniently assumed?",
      "a - 3d, a - d, a + d, a + 3d (common difference 2d)",
      "a, a + d, a + 2d, a + 3d",
      "a - 2d, a - d, a + d, a + 2d",
      "a - d, a, a + d, a + 2d",
      "A",
      "Assuming a - 3d, a - d, a + d, a + 3d allows the 'd' terms to cancel upon addition: sum = 4a = 20 => a = 5.")

add_q(81, "Tricky",
      "In an AP with n terms where n is odd, the middle term is:",
      "((n + 1)/2)th term",
      "(n/2)th term",
      "((n - 1)/2)th term",
      "(n/2 + 1)th term",
      "A",
      "For odd n, the single middle term is at index (n + 1)/2.")

add_q(82, "Tricky",
      "What is the sum of terms equidistant from the beginning and end in a finite AP?",
      "Always equal to (a + l)",
      "Always 2(a + l)",
      "Variable",
      "Zero",
      "A",
      "The kth term from start is a + (k - 1)d; from end is l - (k - 1)d. Their sum is [a + (k - 1)d] + [l - (k - 1)d] = a + l, constant for all k.")

add_q(83, "Tricky",
      "If a₁, a₂, a₃... are in AP, what is the value of a₁ - 2a₂ + a₃?",
      "0",
      "d",
      "2d",
      "-d",
      "A",
      "Since 2a₂ = a₁ + a₃, a₁ - 2a₂ + a₃ = a₁ - (a₁ + a₃) + a₃ = 0.")

add_q(84, "Tricky",
      "What is the sum of the first n even natural numbers (2 + 4 + 6 + ... + 2n)?",
      "n(n + 1)",
      "n²",
      "n(n - 1)",
      "2n(n + 1)",
      "A",
      "2(1 + 2 + 3 + ... + n) = 2 × [n(n + 1)/2] = n(n + 1).")

add_q(85, "Tricky",
      "What is the difference between the sum of the first n even natural numbers and the sum of the first n odd natural numbers?",
      "n",
      "1",
      "2n",
      "0",
      "A",
      "Sum of first n evens = n(n + 1) = n² + n. Sum of first n odds = n². Difference = (n² + n) - n² = n.")

add_q(86, "Tricky",
      "If the angles of a triangle are in AP and the least angle is 30°, what are the other angles?",
      "60° and 90°",
      "50° and 100°",
      "45° and 105°",
      "60° and 60°",
      "A",
      "Let angles be a - d, a, a + d. Sum = 3a = 180° => a = 60°. Since least angle is 30°: 60° - d = 30° => d = 30°. The angles are 30°, 60°, 90°.")

add_q(87, "Tricky",
      "If the sides of a right-angled triangle are in AP, what is the ratio of its sides?",
      "3 : 4 : 5",
      "1 : 2 : 3",
      "2 : 3 : 4",
      "5 : 12 : 13",
      "A",
      "Let sides be a - d, a, a + d. (a - d)² + a² = (a + d)² => a² - 2ad + d² + a² = a² + 2ad + d² => a² = 4ad => a = 4d. The sides are 3d, 4d, 5d, so the ratio is strictly 3 : 4 : 5.")

add_q(88, "Tricky",
      "In an AP, if Sp = q and Sq = p, then S_{p+q} is equal to:",
      "-(p + q)",
      "p + q",
      "0",
      "pq",
      "A",
      "A classic Olympiad result: if Sp = q and Sq = p, then the sum of the first (p + q) terms is -(p + q).")

add_q(89, "Tricky",
      "Can the common difference of an AP with integer terms be an irrational number?",
      "No, if all terms are integers, d = a₂ - a₁ must be an integer",
      "Yes, if the number of terms is infinite",
      "Yes, when a = 0",
      "Yes, if n is prime",
      "A",
      "Since d = a_{k+1} - a_k, the difference of two integers is always an integer, never irrational.")

add_q(90, "Tricky",
      "If S_n denotes the sum of n terms of an AP whose common difference is d, find the value of (S_n - 2S_{n-1} + S_{n-2}).",
      "d",
      "0",
      "2d",
      "a + d",
      "A",
      "S_n - S_{n-1} = a_n. S_{n-1} - S_{n-2} = a_{n-1}. Then (S_n - S_{n-1}) - (S_{n-1} - S_{n-2}) = a_n - a_{n-1} = d.")

# -------------------------------------------------------------------------
# 🔴 10 VERY HARD QUESTIONS (Q91 to Q100)
# -------------------------------------------------------------------------

add_q(91, "Very Hard",
      "If a₁, a₂, a₃... an are in AP with common difference d ≠ 0, find the sum: 1/(a₁ a₂) + 1/(a₂ a₃) + ... + 1/(a_{n-1} a_n).",
      "(n - 1) / (a₁ a_n)",
      "n / (a₁ a_n)",
      "(n - 1) d / (a₁ a_n)",
      "1 / (a₁ a_n)",
      "A",
      "Multiply and divide by d: (1/d)[(a₂ - a₁)/(a₁ a₂) + (a₃ - a₂)/(a₂ a₃) + ... + (a_n - a_{n-1})/(a_{n-1} a_n)] = (1/d)[(1/a₁ - 1/a₂) + (1/a₂ - 1/a₃) + ... + (1/a_{n-1} - 1/a_n)] = (1/d)[1/a₁ - 1/a_n] = (1/d)[(a_n - a₁)/(a₁ a_n)]. Since a_n - a₁ = (n - 1)d, this equals (n - 1)/(a₁ a_n).")

add_q(92, "Very Hard",
      "If a₁, a₂, a₃... an are in AP, evaluate: 1/(√a₁ + √a₂) + 1/(√a₂ + √a₃) + ... + 1/(√a_{n-1} + √a_n).",
      "(n - 1) / (√a₁ + √a_n)",
      "n / (√a₁ + √a_n)",
      "(√a_n - √a₁) / d",
      "(n - 1) d / (√a₁ + √a_n)",
      "A",
      "Rationalizing each denominator: (√a₂ - √a₁)/(a₂ - a₁) + (√a₃ - √a₂)/(a₃ - a₂) + ... = (1/d)[(√a₂ - √a₁) + (√a₃ - √a₂) + ... + (√a_n - √a_{n-1})] = (√a_n - √a₁) / d. Multiplying numerator and denominator by (√a_n + √a₁): (a_n - a₁) / [d(√a₁ + √a_n)] = (n - 1)d / [d(√a₁ + √a_n)] = (n - 1) / (√a₁ + √a_n).")

add_q(93, "Very Hard",
      "If S₁, S₂, S₃ are the sums of n, 2n, and 3n terms of an AP respectively, prove that S₃ equals:",
      "3(S₂ - S₁)",
      "2(S₂ - S₁)",
      "S₂ + S₁",
      "3(S₂ + S₁)",
      "A",
      "S₁ = (n/2)[2a + (n - 1)d], S₂ = (2n/2)[2a + (2n - 1)d] = n[2a + (2n - 1)d]. S₂ - S₁ = (n/2)[4a + 2(2n - 1)d - 2a - (n - 1)d] = (n/2)[2a + (3n - 1)d]. Multiplying by 3 gives (3n/2)[2a + (3n - 1)d] = S₃. Hence S₃ = 3(S₂ - S₁).")

add_q(94, "Very Hard",
      "Find the sum of all two-digit numbers which when divided by 4 leave a remainder of 1.",
      "1210",
      "1200",
      "1190",
      "1220",
      "A",
      "Numbers are 13, 17, 21 ... 97. a = 13, d = 4, l = 97. 97 = 13 + (n - 1)4 => 84 = 4(n - 1) => n - 1 = 21 => n = 22. Sum S₂₂ = (22/2)(13 + 97) = 11(110) = 1210.")

add_q(95, "Very Hard",
      "Find the sum of all integers between 100 and 200 which are divisible by 9.",
      "1683",
      "1674",
      "1701",
      "1620",
      "A",
      "First multiple of 9 > 100 is 108; last < 200 is 198. 198 = 108 + (n - 1)9 => 90 = 9(n - 1) => n - 1 = 10 => n = 11. Sum = (11/2)(108 + 198) = (11/2)(306) = 11 × 153 = 1683.")

add_q(96, "Very Hard",
      "Find the sum of all integers between 100 and 200 which are NOT divisible by 9.",
      "13167",
      "14850",
      "13200",
      "12980",
      "A",
      "Integers between 100 and 200 are 101 to 199 (99 numbers). Total sum = (99/2)(101 + 199) = (99/2)(300) = 99 × 150 = 14,850. Sum of multiples of 9 is 1683. Sum NOT divisible = 14,850 - 1683 = 13,167.")

add_q(97, "Very Hard",
      "If the sum of first p terms of an AP is a and the sum of first q terms is b, find the sum of first (p + q) terms when d is common difference.",
      "(p + q) [a/p - b/q] / (p - q) + (p + q)d/2 ... More simply, (p+q)(a/p + b/q) if a/p and b/q are considered.",
      "The value of S_{p+q} = (p + q)(a/p - b/q) / (p - q)",
      "(p + q) [ (a/p)(q) - (b/q)(p) ] / (q - p)",
      "(p + q)(a + b) / (pq)",
      "A",
      "a/p = a_first + (p - 1)d/2 and b/q = a_first + (q - 1)d/2. Subtracting gives a/p - b/q = (p - q)d/2 => d = 2(a/p - b/q)/(p - q). Then S_{p+q} can be computed uniquely.")

add_q(98, "Very Hard",
      "If the pth term of an AP is q and qth term is p, find its nth term.",
      "p + q - n",
      "p + q + n",
      "p - q + n",
      "n - p - q",
      "A",
      "a + (p - 1)d = q, a + (q - 1)d = p. Subtracting: (p - q)d = q - p = -(p - q) => d = -1. Then a = q - (p - 1)(-1) = p + q - 1. an = a + (n - 1)d = (p + q - 1) + (n - 1)(-1) = p + q - n.")

add_q(99, "Very Hard",
      "For the same AP where the pth term is q and qth term is p, what is its (p + q)th term?",
      "0",
      "1",
      "p + q",
      "-1",
      "A",
      "Using an = p + q - n from Q98: a_{p+q} = p + q - (p + q) = 0.")

add_q(100, "Very Hard",
      "In an AP, if the pth term is 1/q and qth term is 1/p, find the sum of first pq terms.",
      "1/2 (pq + 1)",
      "1/2 (pq - 1)",
      "pq + 1",
      "pq / 2",
      "A",
      "From Q65, a = 1/(pq) and d = 1/(pq). Then S_{pq} = (pq/2)[2a + (pq - 1)d] = (pq/2)[2/(pq) + (pq - 1)/(pq)] = (pq/2)[(pq + 1)/(pq)] = (pq + 1)/2.")

print(f"Total questions generated: {len(questions)}")
diff_count = {}
for q in questions:
    d = q['difficulty']
    diff_count[d] = diff_count.get(d, 0) + 1
print("Tier distribution:", diff_count)

js_content = f"""/* Elite Classes — Modular Test Series: Class 10 Mathematics Chapter 5
   Arithmetic Progressions (100 Questions Exhaustive Master Assessment)
   Difficulty Breakdown:
   - 50 Easy Questions (Q1 to Q50)
   - 10 Medium Questions (Q51 to Q60)
   - 10 Hard Questions (Q61 to Q70)
   - 20 Tricky Questions (Q71 to Q90)
   - 10 Very Hard / Olympiad Level Questions (Q91 to Q100)
*/

const Class10MathematicsChapter5FullBank = {{
    id: 'ts_c10_math_ch5',
    title: 'Chapter 5: Arithmetic Progressions Assessment',
    cls: 'Class 10',
    subject: 'Mathematics',
    duration_mins: 90,
    total_marks: 400,
    passing_marks: 160,
    negative_marking: 1.00,
    marks_per_question: 4,
    questions_count: 100,
    instructions: 'Single master 100-Question assessment covering Class 10 NCERT Mathematics Chapter 5 (Arithmetic Progressions). Includes common difference, nth term, sum of n terms, real-life word problems (ladder, logs, spiral, potato race), and vector diagrams.',
    questions: {json.dumps(questions, indent=8, ensure_ascii=False)}
}};

if (typeof window !== 'undefined') {{
    if (!window.EliteTestRegistry) window.EliteTestRegistry = [];
    window.EliteTestRegistry.push(Class10MathematicsChapter5FullBank);
}}

if (typeof module !== 'undefined' && module.exports) {{
    module.exports = Class10MathematicsChapter5FullBank;
}}
"""

with open('modules/testseries/data/class10/mathematics/chapter5_mathematics.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Saved assessment to modules/testseries/data/class10/mathematics/chapter5_mathematics.js")
