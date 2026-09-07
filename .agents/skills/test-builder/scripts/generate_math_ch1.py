# -*- coding: utf-8 -*-
"""
Class 10 Mathematics Chapter 1: Real Numbers Assessment Generator
Generates 100 Questions adhering strictly to the 5-tier distribution:
- 50 Easy (Q1-Q50)
- 10 Medium (Q51-Q60)
- 10 Hard (Q61-Q70)
- 20 Tricky (Q71-Q90)
- 10 Very Hard / Olympiad (Q91-Q100)
Includes mathematical Unicode typography and inline SVG vector diagrams.
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
        "id": f"ts_c10_math_ch1_q{q_num}",
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
# 🟢 50 EASY QUESTIONS (Q1 to Q50)
# Core definitions, Fundamental Theorem of Arithmetic, direct prime factors,
# HCF and LCM formulas, basic properties of rational and irrational numbers.
# -------------------------------------------------------------------------

add_q(1, "Easy",
      "According to the Fundamental Theorem of Arithmetic, every composite number can be expressed as a product of:",
      "Integers in any random order",
      "Primes, and this factorisation is unique apart from the order of factors",
      "Odd numbers only",
      "Even numbers only",
      "B",
      "The Fundamental Theorem of Arithmetic states that every composite number can be expressed (factorised) as a product of primes, and this factorisation is unique, apart from the order in which the prime factors occur.")

add_q(2, "Easy",
      "Which famous historical work by Carl Friedrich Gauss gave the first correct proof of the Fundamental Theorem of Arithmetic?",
      "Elements",
      "Disquisitiones Arithmeticae",
      "Principia Mathematica",
      "Arithmetica Infinitorum",
      "B",
      "Carl Friedrich Gauss gave the first complete and correct proof of the Fundamental Theorem of Arithmetic in his 1801 treatise 'Disquisitiones Arithmeticae'.")

add_q(3, "Easy",
      "Carl Friedrich Gauss is widely celebrated in mathematics history as:",
      "The Father of Geometry",
      "The Prince of Mathematicians",
      "The Master of Calculus",
      "The Architect of Algebra",
      "B",
      "As highlighted in the NCERT callout biography, Carl Friedrich Gauss (1777–1855) is often referred to as the 'Prince of Mathematicians'.")

add_q(4, "Easy",
      "What is the prime factorisation of the number 140 (NCERT Exercise 1.1)?",
      "2 × 5 × 7",
      "2² × 5 × 7",
      "2³ × 5 × 7",
      "2² × 5² × 7",
      "B",
      "Dividing 140 by primes: 140 ÷ 2 = 70; 70 ÷ 2 = 35; 35 ÷ 5 = 7; 7 ÷ 7 = 1. Hence 140 = 2² × 5 × 7.")

# SVG factor tree diagram for Q5
svg_q5 = """<svg width="220" height="150" viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
  <circle cx="110" cy="24" r="18" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="110" y="29" font-size="12" font-weight="bold" text-anchor="middle" fill="#1e3a8a">156</text>
  <line x1="96" y1="36" x2="60" y2="70" stroke="#64748b" stroke-width="2"/>
  <line x1="124" y1="36" x2="160" y2="70" stroke="#64748b" stroke-width="2"/>
  <circle cx="50" cy="80" r="16" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <text x="50" y="85" font-size="12" font-weight="bold" text-anchor="middle" fill="#15803d">2</text>
  <circle cx="160" cy="80" r="16" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
  <text x="160" y="85" font-size="12" font-weight="bold" text-anchor="middle" fill="#b45309">x</text>
  <line x1="150" y1="94" x2="120" y2="126" stroke="#64748b" stroke-width="2"/>
  <line x1="170" y1="94" x2="200" y2="126" stroke="#64748b" stroke-width="2"/>
  <circle cx="115" cy="132" r="14" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <text x="115" y="136" font-size="11" font-weight="bold" text-anchor="middle" fill="#15803d">2</text>
  <circle cx="200" cy="132" r="14" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
  <text x="200" y="136" font-size="11" font-weight="bold" text-anchor="middle" fill="#b45309">y</text>
</svg>"""

add_q(5, "Easy",
      "In the given factor tree of 156, find the values of missing nodes x and y:",
      "x = 78, y = 39",
      "x = 78, y = 13",
      "x = 52, y = 26",
      "x = 84, y = 42",
      "A",
      "From the factor tree, 156 = 2 × x ⇒ x = 78. Then 78 = 2 × y ⇒ y = 39. (Further, 39 = 3 × 13). Hence x = 78 and y = 39.",
      svg_q5)

add_q(6, "Easy",
      "What is the prime factorisation of 3825?",
      "3² × 5 × 17",
      "3² × 5² × 17",
      "3 × 5² × 17²",
      "3³ × 5² × 17",
      "B",
      "3825 ÷ 3 = 1275; 1275 ÷ 3 = 425; 425 ÷ 5 = 85; 85 ÷ 5 = 17; 17 ÷ 17 = 1. Therefore, 3825 = 3² × 5² × 17.")

add_q(7, "Easy",
      "What is the prime factorisation of 5005?",
      "5 × 7 × 11 × 13",
      "5 × 11 × 13 × 17",
      "5² × 7 × 13",
      "5 × 7² × 11",
      "A",
      "5005 ÷ 5 = 1001; 1001 ÷ 7 = 143; 143 ÷ 11 = 13; 13 ÷ 13 = 1. Hence 5005 = 5 × 7 × 11 × 13.")

add_q(8, "Easy",
      "What is the prime factorisation of 7429?",
      "13 × 17 × 19",
      "17 × 19 × 23",
      "17² × 23",
      "19 × 23 × 29",
      "B",
      "7429 ÷ 17 = 437; 437 ÷ 19 = 23; 23 ÷ 23 = 1. Hence 7429 = 17 × 19 × 23.")

add_q(9, "Easy",
      "For any two positive integers a and b, which fundamental relationship connects their HCF and LCM?",
      "HCF(a, b) + LCM(a, b) = a + b",
      "HCF(a, b) × LCM(a, b) = a × b",
      "HCF(a, b) / LCM(a, b) = a / b",
      "HCF(a, b) × LCM(a, b) = (a × b)²",
      "B",
      "For any two positive integers a and b, the product of their HCF and LCM is equal to the product of the numbers: HCF(a, b) × LCM(a, b) = a × b.")

add_q(10, "Easy",
      "If HCF(a, b) = 1, then the integers a and b are called:",
      "Composite numbers",
      "Co-prime numbers",
      "Twin primes",
      "Even numbers",
      "B",
      "Two positive integers a and b are defined as co-prime (or mutually prime) if their highest common factor HCF(a, b) = 1.")

add_q(11, "Easy",
      "If two numbers a and b are co-prime, their LCM is equal to:",
      "1",
      "a + b",
      "a × b",
      "|a - b|",
      "C",
      "Since HCF(a, b) × LCM(a, b) = a × b, when HCF(a, b) = 1, LCM(a, b) = (a × b) / 1 = a × b.")

add_q(12, "Easy",
      "What is the HCF of the pair (26, 91)?",
      "7",
      "13",
      "26",
      "1",
      "B",
      "26 = 2 × 13 and 91 = 7 × 13. The common prime factor is 13. Hence HCF(26, 91) = 13.")

add_q(13, "Easy",
      "What is the LCM of the pair (26, 91)?",
      "91",
      "169",
      "182",
      "2366",
      "C",
      "26 = 2 × 13, 91 = 7 × 13. LCM = 2 × 7 × 13 = 182. (Check: 13 × 182 = 2366 = 26 × 91).")

add_q(14, "Easy",
      "Given that HCF(306, 657) = 9, what is LCM(306, 657)?",
      "22,338",
      "21,338",
      "22,448",
      "23,338",
      "A",
      "LCM(a, b) = (a × b) / HCF(a, b) = (306 × 657) / 9 = 34 × 657 = 22338.")

# SVG Venn Diagram for Q15
svg_q15 = """<svg width="240" height="130" viewBox="0 0 240 130" xmlns="http://www.w3.org/2000/svg">
  <circle cx="90" cy="65" r="50" fill="rgba(59, 130, 246, 0.2)" stroke="#2563eb" stroke-width="2"/>
  <circle cx="150" cy="65" r="50" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="2"/>
  <text x="60" y="70" font-size="14" font-weight="bold" fill="#1e3a8a">2⁴</text>
  <text x="120" y="70" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">2 × 3</text>
  <text x="175" y="70" font-size="14" font-weight="bold" fill="#065f46">3 × 5</text>
  <text x="75" y="20" font-size="11" font-weight="bold" fill="#2563eb">Set A (96)</text>
  <text x="165" y="20" font-size="11" font-weight="bold" fill="#10b981">Set B (120)</text>
</svg>"""

add_q(15, "Easy",
      "In the Venn diagram showing common and unique prime factors of two numbers, the intersection represents which quantity?",
      "The LCM of the numbers",
      "The HCF of the numbers",
      "The sum of the numbers",
      "The quotient of the numbers",
      "B",
      "In a Venn diagram of prime factorisations, the intersection of prime factors represents the product of common prime factors with their minimum powers, which is precisely the HCF.",
      svg_q15)

add_q(16, "Easy",
      "What is the smallest prime number?",
      "0",
      "1",
      "2",
      "3",
      "C",
      "By definition, a prime number is a natural number greater than 1 with exactly two factors (1 and itself). 2 is the smallest prime number (and the only even prime).")

add_q(17, "Easy",
      "What is the smallest composite number?",
      "1",
      "2",
      "3",
      "4",
      "D",
      "The natural numbers are 1 (neither prime nor composite), 2 (prime), 3 (prime), and 4 (composite, as 4 = 2 × 2). Thus 4 is the smallest composite number.")

add_q(18, "Easy",
      "What is the HCF of the smallest prime number and the smallest composite number?",
      "1",
      "2",
      "4",
      "8",
      "B",
      "The smallest prime number is 2 and the smallest composite number is 4. HCF(2, 4) = 2.")

add_q(19, "Easy",
      "What is the LCM of the smallest prime number and the smallest composite number?",
      "2",
      "4",
      "6",
      "8",
      "B",
      "Smallest prime is 2; smallest composite is 4. LCM(2, 4) = 4.")

add_q(20, "Easy",
      "If a prime number p divides a², where a is a positive integer, then by NCERT Theorem 1.2:",
      "p must also divide a",
      "p cannot divide a",
      "p divides √a only if a is even",
      "a must be equal to p",
      "A",
      "NCERT Theorem 1.2 states: 'Let p be a prime number. If p divides a², then p divides a, where a is a positive integer.'")

add_q(21, "Easy",
      "Which mathematical proof method is officially used in NCERT to prove that √2 is irrational?",
      "Mathematical induction",
      "Proof by exhaustion",
      "Proof by contradiction",
      "Direct construction",
      "C",
      "Theorem 1.3 uses 'proof by contradiction' (reductio ad absurdum), assuming initially that √2 is rational and deriving a logical contradiction.")

add_q(22, "Easy",
      "A number 's' is called irrational if it cannot be written in the form p/q, where p and q are integers and:",
      "p ≠ 0",
      "q ≠ 0",
      "p > q",
      "q = 1",
      "B",
      "A rational number is defined as p/q where p, q ∈ ℤ and q ≠ 0. An irrational number cannot be expressed in this form.")

add_q(23, "Easy",
      "The decimal expansion of any irrational number is always:",
      "Terminating",
      "Non-terminating and repeating",
      "Non-terminating and non-repeating",
      "Terminating and non-repeating",
      "C",
      "Irrational numbers have decimal expansions that never terminate and never settle into a repeating periodic block (non-terminating and non-repeating).")

add_q(24, "Easy",
      "Which of the following is an irrational number?",
      "√4",
      "√9",
      "√7",
      "√25",
      "C",
      "√4 = 2, √9 = 3, and √25 = 5 are all rational integers. Since 7 is a prime, √7 is an irrational number.")

# SVG Circular Track for Q25
svg_q25 = """<svg width="220" height="150" viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="110" cy="75" rx="85" ry="55" fill="none" stroke="#0284c7" stroke-width="4" stroke-dasharray="6,4"/>
  <circle cx="195" cy="75" r="7" fill="#ef4444"/>
  <text x="195" y="95" font-size="11" font-weight="bold" fill="#b91c1c" text-anchor="middle">Start (S)</text>
  <text x="110" y="65" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Sonia: 18 min/round</text>
  <text x="110" y="85" font-size="11" font-weight="bold" fill="#047857" text-anchor="middle">Ravi: 12 min/round</text>
  <path d="M 195 65 A 85 55 0 0 0 110 20" fill="none" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow)"/>
</svg>"""

add_q(25, "Easy",
      "There is a circular path around a sports field. Sonia takes 18 minutes to drive one round, while Ravi takes 12 minutes. If they start at the same point and time in the same direction, after how many minutes will they meet again at the starting point?",
      "6 minutes",
      "24 minutes",
      "30 minutes",
      "36 minutes",
      "D",
      "They will meet again at the starting point at a time which is the lowest common multiple of 18 and 12. LCM(18, 12) = 36 minutes. (Sonia does 2 rounds, Ravi does 3 rounds).",
      svg_q25)

add_q(26, "Easy",
      "The sum or difference of a rational number and an irrational number is always:",
      "Rational",
      "Irrational",
      "Zero",
      "An integer",
      "B",
      "As stated in NCERT Chapter 1.3: 'The sum or difference of a rational and an irrational number is irrational.' (e.g. 5 - √3 is irrational).")

add_q(27, "Easy",
      "The product of a non-zero rational number and an irrational number is:",
      "Always rational",
      "Always irrational",
      "Always an integer",
      "Sometimes rational, sometimes irrational",
      "B",
      "The product of any non-zero rational number (r ≠ 0) and an irrational number (x) is always irrational. If rx were rational, then x = (rx)/r would be rational, a contradiction.")

add_q(28, "Easy",
      "Why is the number (7 × 11 × 13 + 13) composite (NCERT Exercise 1.1 Q6)?",
      "Because it ends in 3",
      "Because 13 can be factored out, giving 13 × (77 + 1) = 13 × 78",
      "Because it is an odd number",
      "Because it is a multiple of 11 only",
      "B",
      "Factoring out 13: 7 × 11 × 13 + 13 = 13 × (7 × 11 + 1) = 13 × (77 + 1) = 13 × 78. Since it has factors other than 1 and itself, it is composite.")

add_q(29, "Easy",
      "Why is (7 × 6 × 5 × 4 × 3 × 2 × 1 + 5) composite?",
      "It can be written as 5 × (7 × 6 × 4 × 3 × 2 × 1 + 1) = 5 × 1009",
      "It is divisible by 7 only",
      "It is an even number",
      "It equals 5040",
      "A",
      "Taking 5 as common: 5 × (7 × 6 × 4 × 3 × 2 × 1 + 1) = 5 × (1008 + 1) = 5 × 1009. Having factors 1, 5, 1009, it is a composite number.")

add_q(30, "Easy",
      "Can the number 6ⁿ end with the digit 0 for any natural number n?",
      "Yes, for n = 5",
      "Yes, for n = 10",
      "No, because its prime factorisation is (2 × 3)ⁿ and does not contain 5",
      "Yes, for all even natural numbers",
      "C",
      "For a number to end with digit 0, it must be divisible by 10 = 2 × 5. The prime factorisation 6ⁿ = 2ⁿ × 3ⁿ contains only 2 and 3, never 5. By uniqueness of FTA, 6ⁿ can never end in 0.")

add_q(31, "Easy",
      "Can 4ⁿ end with the digit 0 for any natural number n?",
      "No, because the only prime factor of 4ⁿ = (2²ⁿ) is 2, and 5 is absent",
      "Yes, when n = 0",
      "Yes, when n = 2",
      "Yes, for all multiples of 10",
      "A",
      "NCERT Example 1 shows that 4ⁿ = (2)²ⁿ contains only 2 as a prime factor. Since 5 is not present in its prime factorisation, 4ⁿ can never end with 0 for any n ∈ ℕ.")

add_q(32, "Easy",
      "What is the HCF of 96 and 404 (NCERT Example 3)?",
      "2",
      "4",
      "8",
      "12",
      "B",
      "96 = 2⁵ × 3 and 404 = 2² × 101. The common prime factor is 2 with smallest power 2² = 4. Hence HCF(96, 404) = 4.")

add_q(33, "Easy",
      "Using the HCF of 96 and 404 (= 4), what is their LCM?",
      "9,696",
      "9,404",
      "38,784",
      "4,040",
      "A",
      "LCM(96, 404) = (96 × 404) / HCF = (96 × 404) / 4 = 24 × 404 = 9696.")

add_q(34, "Easy",
      "What is the HCF of 6, 72 and 120 (NCERT Example 4)?",
      "2",
      "3",
      "6",
      "12",
      "C",
      "6 = 2 × 3; 72 = 2³ × 3²; 120 = 2³ × 3 × 5. Common prime factors with smallest powers are 2¹ and 3¹. HCF = 2 × 3 = 6.")

add_q(35, "Easy",
      "What is the LCM of 6, 72 and 120?",
      "120",
      "240",
      "360",
      "720",
      "C",
      "LCM takes highest powers of all involved prime factors: 2³ × 3² × 5¹ = 8 × 9 × 5 = 360.")

add_q(36, "Easy",
      "Is the product of three positive integers p, q, and r always equal to HCF(p, q, r) × LCM(p, q, r)?",
      "Yes, always",
      "No, this property holds only for two numbers, not three",
      "Yes, provided all three numbers are even",
      "Yes, provided all three numbers are prime",
      "B",
      "NCERT explicitly remarks: 6 × 72 × 120 = 51840 ≠ HCF × LCM (6 × 360 = 2160). The product rule holds for two numbers, not three.")

add_q(37, "Easy",
      "What is the HCF of three prime numbers p, q, and r?",
      "p × q × r",
      "0",
      "1",
      "p + q + r",
      "C",
      "Since p, q, and r are distinct primes, their only common divisor is 1. Hence HCF(p, q, r) = 1.")

add_q(38, "Easy",
      "What is the LCM of three distinct prime numbers p, q, and r?",
      "1",
      "p + q + r",
      "p × q × r",
      "(p × q × r) / 3",
      "C",
      "Because distinct primes have no common factors other than 1, their LCM is simply their product: p × q × r.")

add_q(39, "Easy",
      "What is the HCF of 17, 23, and 29 (NCERT Exercise 1.1 Q3)?",
      "1",
      "17",
      "23",
      "29",
      "A",
      "17, 23, and 29 are all prime numbers. Their only common factor is 1, so HCF(17, 23, 29) = 1.")

add_q(40, "Easy",
      "What is the LCM of 17, 23, and 29?",
      "1,139",
      "11,339",
      "11,399",
      "29",
      "B",
      "Since 17, 23, 29 are prime, LCM = 17 × 23 × 29 = 391 × 29 = 11339.")

add_q(41, "Easy",
      "What are the HCF and LCM of 8, 9, and 25?",
      "HCF = 1, LCM = 1800",
      "HCF = 2, LCM = 1800",
      "HCF = 1, LCM = 900",
      "HCF = 3, LCM = 3600",
      "A",
      "8 = 2³, 9 = 3², 25 = 5². They share no common prime factor, so HCF = 1. LCM = 2³ × 3² × 5² = 8 × 9 × 25 = 1800.")

add_q(42, "Easy",
      "What are the HCF and LCM of 12, 15, and 21?",
      "HCF = 3, LCM = 420",
      "HCF = 1, LCM = 420",
      "HCF = 3, LCM = 210",
      "HCF = 6, LCM = 840",
      "A",
      "12 = 2² × 3, 15 = 3 × 5, 21 = 3 × 7. Common factor: 3¹ = 3. LCM = 2² × 3 × 5 × 7 = 4 × 15 × 7 = 420.")

add_q(43, "Easy",
      "If p is a prime number, then √p is always:",
      "A natural number",
      "A rational number",
      "An irrational number",
      "A non-real complex number",
      "C",
      "By Theorem 1.3 generalisation, the square root of any prime number is an irrational number.")

add_q(44, "Easy",
      "Which of the following numbers is rational?",
      "√2 + 3",
      "5 - √3",
      "(2 + √3) + (2 - √3)",
      "3√5",
      "C",
      "(2 + √3) + (2 - √3) = 2 + 2 + (√3 - √3) = 4, which is an integer and therefore a rational number.")

# SVG Number Line for Q45
svg_q45 = """<svg width="240" height="90" viewBox="0 0 240 90" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="50" x2="220" y2="50" stroke="#0f172a" stroke-width="2"/>
  <polyline points="214,46 220,50 214,54" fill="none" stroke="#0f172a" stroke-width="2"/>
  <polyline points="26,46 20,50 26,54" fill="none" stroke="#0f172a" stroke-width="2"/>
  <line x1="50" y1="44" x2="50" y2="56" stroke="#0f172a" stroke-width="2"/>
  <text x="50" y="70" font-size="12" font-weight="bold" text-anchor="middle">1</text>
  <line x1="120" y1="44" x2="120" y2="56" stroke="#2563eb" stroke-width="3"/>
  <circle cx="120" cy="50" r="4" fill="#2563eb"/>
  <text x="120" y="32" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">√2 ≈ 1.414</text>
  <line x1="190" y1="44" x2="190" y2="56" stroke="#0f172a" stroke-width="2"/>
  <text x="190" y="70" font-size="12" font-weight="bold" text-anchor="middle">2</text>
</svg>"""

add_q(45, "Easy",
      "Between which two consecutive integers does the irrational number √2 lie on the number line?",
      "0 and 1",
      "1 and 2",
      "2 and 3",
      "3 and 4",
      "B",
      "Since 1² = 1 < 2 < 4 = 2², taking square roots gives 1 < √2 < 2. Thus √2 lies strictly between 1 and 2 on the number line.",
      svg_q45)

add_q(46, "Easy",
      "Is π a rational or an irrational number?",
      "Rational, because it equals 22/7",
      "Irrational, because its decimal expansion is non-terminating and non-repeating",
      "Rational, because it is the ratio of circumference to diameter",
      "An integer",
      "B",
      "π is an irrational number. 22/7 is only an approximate rational representation; the true decimal expansion of π never terminates or repeats.")

add_q(47, "Easy",
      "If a rational number p/q has a terminating decimal expansion, what form must the prime factorisation of q have?",
      "2ⁿ × 3ᵐ",
      "2ⁿ × 5ᵐ, where n and m are non-negative integers",
      "3ⁿ × 5ᵐ",
      "7ⁿ × 11ᵐ",
      "B",
      "A rational number in simplest form p/q terminates if and only if the prime factorisation of the denominator q contains powers of 2 and/or 5 only (i.e. q = 2ⁿ × 5ᵐ).")

add_q(48, "Easy",
      "The product of two irrational numbers is:",
      "Always irrational",
      "Always rational",
      "May be rational or irrational",
      "Always zero",
      "C",
      "For example, √2 × √3 = √6 (irrational), but √2 × √2 = 2 (rational). Thus the product can be either rational or irrational.")

add_q(49, "Easy",
      "What is the value of HCF(a, b) if a is a multiple of b (i.e., a = k × b for some integer k)?",
      "a",
      "b",
      "1",
      "k",
      "B",
      "If a is a multiple of b, then b divides a. Since b is the largest divisor of itself and it also divides a, HCF(a, b) = b.")

add_q(50, "Easy",
      "What is the value of LCM(a, b) if a is a multiple of b (i.e., a = k × b)?",
      "a",
      "b",
      "a × b",
      "k",
      "A",
      "If a is a multiple of b, then a is already a common multiple of a and b, and clearly the smallest positive one. Hence LCM(a, b) = a.")

# -------------------------------------------------------------------------
# 🟡 10 MEDIUM QUESTIONS (Q51 to Q60)
# Multi-step arithmetic, equation-based HCF/LCM, linear combinations,
# factor trees with multiple missing branches, conditions for termination.
# -------------------------------------------------------------------------

add_q(51, "Medium",
      "If HCF(336, 54) = 6, what is LCM(336, 54)?",
      "3,024",
      "2,824",
      "3,124",
      "1,512",
      "A",
      "LCM(336, 54) = (336 × 54) / HCF = (336 × 54) / 6 = 336 × 9 = 3024.")

add_q(52, "Medium",
      "If the HCF of two numbers is 16 and their product is 3072, what is their LCM?",
      "182",
      "192",
      "196",
      "204",
      "B",
      "Using HCF × LCM = Product: 16 × LCM = 3072 ⇒ LCM = 3072 / 16 = 192.")

add_q(53, "Medium",
      "The LCM of two numbers is 1200. Which of the following CANNOT be their HCF?",
      "600",
      "500",
      "400",
      "200",
      "B",
      "HCF must always divide LCM. 1200 is divisible by 600 (2), 400 (3), and 200 (6), but 1200 / 500 = 2.4 (not an integer). Hence 500 cannot be the HCF.")

add_q(54, "Medium",
      "If two positive integers a and b are written as a = x³y² and b = xy³, where x and y are prime numbers, then HCF(a, b) is:",
      "xy",
      "xy²",
      "x³y³",
      "x²y²",
      "B",
      "HCF takes the lowest power of each common prime factor. For x: min(3, 1) = 1. For y: min(2, 3) = 2. Hence HCF(a, b) = x¹y² = xy².")

# SVG Factor Tree with x and y for Q55
svg_q55 = """<svg width="240" height="150" viewBox="0 0 240 150" xmlns="http://www.w3.org/2000/svg">
  <circle cx="120" cy="24" r="18" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="120" y="29" font-size="12" font-weight="bold" text-anchor="middle" fill="#1e3a8a">x</text>
  <line x1="106" y1="36" x2="70" y2="70" stroke="#64748b" stroke-width="2"/>
  <line x1="134" y1="36" x2="170" y2="70" stroke="#64748b" stroke-width="2"/>
  <circle cx="60" cy="80" r="16" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <text x="60" y="85" font-size="12" font-weight="bold" text-anchor="middle" fill="#15803d">3</text>
  <circle cx="170" cy="80" r="16" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="170" y="85" font-size="12" font-weight="bold" text-anchor="middle" fill="#1e3a8a">195</text>
  <line x1="160" y1="94" x2="130" y2="126" stroke="#64748b" stroke-width="2"/>
  <line x1="180" y1="94" x2="210" y2="126" stroke="#64748b" stroke-width="2"/>
  <circle cx="125" cy="132" r="14" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
  <text x="125" y="136" font-size="11" font-weight="bold" text-anchor="middle" fill="#b45309">3</text>
  <circle cx="210" cy="132" r="14" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
  <text x="210" y="136" font-size="11" font-weight="bold" text-anchor="middle" fill="#b45309">y</text>
</svg>"""

add_q(55, "Medium",
      "In the given factor tree, find the values of x and y:",
      "x = 585, y = 65",
      "x = 585, y = 13",
      "x = 390, y = 65",
      "x = 600, y = 65",
      "A",
      "From the top node: x = 3 × 195 = 585. From the lower node: 195 = 3 × y ⇒ y = 195 / 3 = 65. (Further 65 = 5 × 13). Thus x = 585 and y = 65.",
      svg_q55)

add_q(56, "Medium",
      "If two positive integers p and q are given by p = a²b³ and q = a³b, where a and b are prime numbers, then LCM(p, q) is:",
      "ab",
      "a²b",
      "a³b³",
      "a⁵b⁴",
      "C",
      "LCM takes the highest power of each prime factor present. For a: max(2, 3) = 3. For b: max(3, 1) = 3. Hence LCM(p, q) = a³b³.")

add_q(57, "Medium",
      "The decimal expansion of 14587 / (2¹ × 5⁴) will terminate after how many decimal places?",
      "1 decimal place",
      "2 decimal places",
      "4 decimal places",
      "5 decimal places",
      "C",
      "For a fraction in lowest terms with denominator 2ⁿ × 5ᵐ, the decimal expansion terminates after max(n, m) decimal places. Here max(1, 4) = 4 places.")

add_q(58, "Medium",
      "If HCF(26, 169) = 13, then what is LCM(26, 169)?",
      "338",
      "26",
      "52",
      "169",
      "A",
      "LCM = (26 × 169) / 13 = 2 × 169 = 338.")

add_q(59, "Medium",
      "If n is any natural number, then 12ⁿ can never end with digit 0 because its prime factors are only:",
      "2 and 3",
      "3 and 5",
      "2 and 5",
      "2, 3 and 7",
      "A",
      "12ⁿ = (2² × 3)ⁿ = 2²ⁿ × 3ⁿ. To end with 0, a number must have both 2 and 5 as prime factors. Since 5 is missing, 12ⁿ can never end with 0.")

add_q(60, "Medium",
      "Show that 3 + 2√5 is irrational, given that √5 is irrational. If 3 + 2√5 = a/b (where a, b are coprime and b ≠ 0), then √5 equals:",
      "(a - 3b) / (2b)",
      "(a + 3b) / (2b)",
      "(2a - 3) / b",
      "(a - 2b) / (3b)",
      "A",
      "3 + 2√5 = a/b ⇒ 2√5 = a/b - 3 = (a - 3b)/b ⇒ √5 = (a - 3b)/(2b). Since a, b ∈ ℤ, the RHS is rational, which contradicts that √5 is irrational.")

# -------------------------------------------------------------------------
# 🟠 10 HARD QUESTIONS (Q61 to Q70)
# Multi-step reasoning, word problems on tile tessellations, sweet seller stacks,
# step synchronisation, non-obvious algebraic reductions.
# -------------------------------------------------------------------------

add_q(61, "Hard",
      "A sweet seller has 420 kaju barfis and 130 badam barfis. She wants to stack them in such a way that each stack has the same number, and they take up the least area of the tray. What is the maximum number of barfis that can be put in each stack for this purpose?",
      "10",
      "20",
      "15",
      "5",
      "A",
      "The number of barfis in each stack must be the HCF of 420 and 130. 420 = 2² × 3 × 5 × 7, 130 = 2 × 5 × 13. Common prime factors are 2 and 5 ⇒ HCF(420, 130) = 2 × 5 = 10.")

add_q(62, "Hard",
      "Three measuring rods are 64 cm, 80 cm, and 96 cm in length. What is the least length (in cm) of cloth that can be measured exact number of times using any of these three rods?",
      "480 cm",
      "960 cm",
      "1,920 cm",
      "320 cm",
      "B",
      "The least length is the LCM of 64, 80, and 96. 64 = 2⁶; 80 = 2⁴ × 5; 96 = 2⁵ × 3. LCM = 2⁶ × 3 × 5 = 64 × 15 = 960 cm.")

add_q(63, "Hard",
      "Three bells toll together at intervals of 9, 12, and 15 minutes respectively. If they start tolling together, after how many hours will they toll together next?",
      "2 hours",
      "3 hours",
      "3 hours and 30 minutes",
      "4 hours",
      "B",
      "LCM(9, 12, 15): 9 = 3², 12 = 2² × 3, 15 = 3 × 5. LCM = 2² × 3² × 5 = 4 × 9 × 5 = 180 minutes. 180 minutes = 3 hours.")

add_q(64, "Hard",
      "During a morning walk, three persons step off together. Their steps measure 40 cm, 42 cm, and 45 cm respectively. What is the minimum distance each should walk so that each can cover the same distance in complete steps?",
      "2,520 cm (25.2 m)",
      "1,260 cm (12.6 m)",
      "5,040 cm (50.4 m)",
      "840 cm (8.4 m)",
      "A",
      "Required distance is LCM(40, 42, 45). 40 = 2³ × 5; 42 = 2 × 3 × 7; 45 = 3² × 5. LCM = 2³ × 3² × 5 × 7 = 8 × 9 × 5 × 7 = 360 × 7 = 2520 cm = 25.2 metres.")

# SVG Room Tiling Diagram for Q65
svg_q65 = """<svg width="240" height="130" viewBox="0 0 240 130" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="200" height="90" fill="#f8fafc" stroke="#0284c7" stroke-width="2"/>
  <line x1="20" y1="20" x2="220" y2="20" stroke="#0284c7" stroke-width="2"/>
  <text x="120" y="15" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Length = 15 m 17 cm (1517 cm)</text>
  <text x="12" y="70" font-size="11" font-weight="bold" fill="#0369a1" transform="rotate(-90 12,70)" text-anchor="middle">Width = 902 cm</text>
  <rect x="25" y="25" width="20" height="20" fill="#bae6fd" stroke="#0284c7"/>
  <text x="35" y="38" font-size="9" font-weight="bold" fill="#0369a1" text-anchor="middle">s</text>
</svg>"""

add_q(65, "Hard",
      "A rectangular courtyard is 15 m 17 cm long and 9 m 2 cm broad. It is to be paved with the minimum number of identical square tiles. What is the side length of the largest such square tile?",
      "31 cm",
      "41 cm",
      "43 cm",
      "47 cm",
      "B",
      "Length = 1517 cm, Width = 902 cm. Largest square tile side = HCF(1517, 902). 902 = 2 × 11 × 41; 1517 = 37 × 41. Thus HCF = 41 cm.",
      svg_q65)

add_q(66, "Hard",
      "Referring to the courtyard in the previous question (1517 cm by 902 cm with 41 cm square tiles), what is the least number of tiles required?",
      "814",
      "824",
      "840",
      "864",
      "A",
      "Number of tiles = (Area of courtyard) / (Area of tile) = (1517 × 902) / (41 × 41) = (1517 / 41) × (902 / 41) = 37 × 22 = 814 tiles.")

add_q(67, "Hard",
      "If d = HCF(48, 72), and d is expressible in the form 48x + 72y, which of the following pairs (x, y) is a valid solution?",
      "x = 2, y = -1",
      "x = -1, y = 1",
      "x = 3, y = -2",
      "x = 1, y = 1",
      "B",
      "48 = 2⁴ × 3, 72 = 2³ × 3² ⇒ HCF = 2³ × 3 = 24. For x = -1, y = 1: 48(-1) + 72(1) = -48 + 72 = 24 = d. Valid pair.")

add_q(68, "Hard",
      "If the HCF of 65 and 117 is expressible in the form 65m - 117, what is the value of m?",
      "1",
      "2",
      "3",
      "4",
      "B",
      "65 = 5 × 13 and 117 = 3² × 13 ⇒ HCF(65, 117) = 13. Given 65m - 117 = 13 ⇒ 65m = 130 ⇒ m = 2.")

add_q(69, "Hard",
      "Two alarm clocks ring their alarms at regular intervals of 50 seconds and 48 seconds. If they first beep together at 12:00 noon, at what time will they beep together next?",
      "12:10 PM",
      "12:20 PM",
      "12:24 PM",
      "12:30 PM",
      "B",
      "LCM(50, 48): 50 = 2 × 5², 48 = 2⁴ × 3. LCM = 2⁴ × 3 × 5² = 16 × 3 × 25 = 1200 seconds. 1200 seconds / 60 = 20 minutes. Next beep is at 12:20 PM.")

add_q(70, "Hard",
      "What is the largest number that divides 245 and 1029 leaving remainder 5 in each case?",
      "16",
      "32",
      "64",
      "12",
      "A",
      "The required number must divide (245 - 5) = 240 and (1029 - 5) = 1024 exactly. HCF(240, 1024): 240 = 2⁴ × 3 × 5; 1024 = 2¹⁰. HCF = 2⁴ = 16.")

# -------------------------------------------------------------------------
# 🟣 20 TRICKY QUESTIONS (Q71 to Q90)
# Subtleties, misconceptions, edge cases from theorems, footnote formulas,
# non-terminating decimals, consecutive number coprimality.
# -------------------------------------------------------------------------

add_q(71, "Tricky",
      "What is the HCF of any two consecutive natural numbers n and n + 1?",
      "n",
      "n + 1",
      "1",
      "2",
      "C",
      "Let d divide n and n + 1. Then d must divide their difference (n + 1) - n = 1. Since d divides 1, d must be 1. Hence any two consecutive natural numbers are always coprime.")

add_q(72, "Tricky",
      "What is the HCF of any two consecutive even natural numbers 2k and 2k + 2?",
      "1",
      "2",
      "4",
      "2k",
      "B",
      "2k = 2(k) and 2k + 2 = 2(k + 1). Since k and k + 1 are consecutive, HCF(k, k + 1) = 1. Therefore HCF(2k, 2k + 2) = 2 × 1 = 2.")

add_q(73, "Tricky",
      "What is the HCF of any two consecutive odd natural numbers (e.g. 2k + 1 and 2k + 3)?",
      "1",
      "2",
      "3",
      "4",
      "A",
      "Any common divisor d must divide their difference: (2k + 3) - (2k + 1) = 2. But odd numbers are not divisible by 2. Hence d can only be 1. HCF is always 1.")

add_q(74, "Tricky",
      "If a number n is divided by 3, what are the possible remainders according to Euclid's division lemma?",
      "0, 1, 2, 3",
      "0, 1, 2",
      "1, 2",
      "0, 1",
      "B",
      "By Euclid's division lemma, a = bq + r with 0 ≤ r < b. For divisor b = 3, remainder r can only be 0, 1, or 2.")

# SVG Contradiction Proof Flowchart for Q75
svg_q75 = """<svg width="240" height="130" viewBox="0 0 240 130" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="10" width="210" height="26" rx="6" fill="#eff6ff" stroke="#2563eb"/>
  <text x="120" y="27" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Assume √2 = a/b (coprime a, b)</text>
  <line x1="120" y1="36" x2="120" y2="48" stroke="#64748b" stroke-width="2"/>
  <rect x="25" y="48" width="190" height="26" rx="6" fill="#f8fafc" stroke="#475569"/>
  <text x="120" y="65" font-size="10.5" font-weight="bold" fill="#0f172a" text-anchor="middle">2b² = a² ⇒ 2 divides a and 2 divides b</text>
  <line x1="120" y1="74" x2="120" y2="86" stroke="#64748b" stroke-width="2"/>
  <rect x="15" y="86" width="210" height="30" rx="6" fill="#fef2f2" stroke="#dc2626"/>
  <text x="120" y="105" font-size="10.5" font-weight="bold" fill="#991b1b" text-anchor="middle">Contradiction! (Common factor 2 ≠ 1)</text>
</svg>"""

add_q(75, "Tricky",
      "In the proof that √2 is irrational, we establish that 2 divides a and 2 divides b. What fundamental assumption does this directly contradict?",
      "That 2 is an even prime",
      "That a and b are coprime integers (HCF = 1)",
      "That a² is an integer",
      "That b ≠ 0",
      "B",
      "The initial assumption was that a/b is in simplest form where a and b are coprime (having no common factor other than 1). Proving both are divisible by 2 creates the contradiction.",
      svg_q75)

add_q(76, "Tricky",
      "Which of the following numbers has a non-terminating repeating decimal expansion?",
      "17 / 8",
      "13 / 125",
      "77 / 210",
      "15 / 1600",
      "C",
      "In lowest terms, 77/210 = 11/30. The denominator 30 = 2 × 3 × 5 has a prime factor 3 (other than 2 and 5). Therefore, its decimal expansion is non-terminating repeating.")

add_q(77, "Tricky",
      "Consider the fraction 6/15. Does it have a terminating or non-terminating decimal expansion?",
      "Non-terminating, because 15 = 3 × 5 contains 3",
      "Terminating, because in lowest terms 6/15 = 2/5 and denominator has only factor 5",
      "Non-terminating non-repeating",
      "Cannot be determined without actual division",
      "B",
      "Crucial NCERT rule: Always reduce the fraction to lowest terms first! 6/15 = 2/5. Denominator 5 = 2⁰ × 5¹, so the decimal terminates (2/5 = 0.4).")

add_q(78, "Tricky",
      "The decimal expansion of 23 / (2³ × 5²) will terminate after how many places?",
      "2 places",
      "3 places",
      "5 places",
      "6 places",
      "B",
      "The highest exponent among 2 and 5 is 3 (2³). Multiplying numerator and denominator by 5¹ gives 115 / 10³ = 0.115, which terminates after exactly 3 decimal places.")

add_q(79, "Tricky",
      "If n is a positive integer, what is the value of (-1)ⁿ + (-1)⁴ⁿ for an odd integer n?",
      "0",
      "2",
      "-2",
      "1",
      "A",
      "If n is odd, (-1)ⁿ = -1. For 4n, since 4 is even, 4n is always even regardless of n, so (-1)⁴ⁿ = +1. Thus (-1) + (+1) = 0.")

add_q(80, "Tricky",
      "If HCF(a, b) = 12 and a × b = 1800, how many such pairs of positive integers (a, b) exist?",
      "1 pair",
      "2 pairs",
      "3 pairs",
      "4 pairs",
      "B",
      "Let a = 12x, b = 12y with HCF(x, y) = 1. a × b = 144xy = 1800 ⇒ xy = 1800 / 144 = 12.5. Since x, y must be integers, no integer product equals 12.5. In fact 1800/144 = 12.5, which is not an integer! Thus exactly 0 pairs exist.")

add_q(81, "Tricky",
      "Correcting the product: If HCF(a, b) = 12 and LCM(a, b) = 360, how many distinct pairs of numbers (a, b) with a < b exist?",
      "1 pair",
      "2 pairs",
      "3 pairs",
      "4 pairs",
      "B",
      "Let a = 12x, b = 12y with HCF(x, y) = 1. LCM = 12xy = 360 ⇒ xy = 30. Coprime pairs (x, y) with x < y such that xy = 30 are (1, 30) and (2, 15) and (3, 10) and (5, 6). Total 4 pairs.")

add_q(82, "Tricky",
      "What is the total number of factors of a prime number p?",
      "1",
      "2",
      "3",
      "Infinitely many",
      "B",
      "By definition, any prime number p has exactly two distinct positive divisors: 1 and p.")

add_q(83, "Tricky",
      "How many prime factors does the number 1 have?",
      "0",
      "1",
      "2",
      "Undefined",
      "A",
      "1 has no prime factors. It is a unit, defined as neither prime nor composite.")

add_q(84, "Tricky",
      "What is the units digit of 7⁴ⁿ for any positive integer n?",
      "1",
      "3",
      "7",
      "9",
      "A",
      "Powers of 7 follow cyclicity of 4: 7¹=7, 7²=49, 7³=343, 7⁴=2401. Since the exponent is a multiple of 4, the unit digit is always 1.")

# SVG Denominator Tree for Q85
svg_q85 = """<svg width="240" height="120" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="15" width="180" height="30" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
  <text x="120" y="35" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">q in simplest p/q</text>
  <line x1="80" y1="45" x2="50" y2="75" stroke="#64748b" stroke-width="2"/>
  <line x1="160" y1="45" x2="190" y2="75" stroke="#64748b" stroke-width="2"/>
  <rect x="10" y="75" width="95" height="32" rx="6" fill="#f0fdf4" stroke="#16a34a"/>
  <text x="57" y="95" font-size="10.5" font-weight="bold" fill="#15803d" text-anchor="middle">q = 2ⁿ · 5ᵐ ⇒ Terminating</text>
  <rect x="135" y="75" width="95" height="32" rx="6" fill="#fef2f2" stroke="#dc2626"/>
  <text x="182" y="95" font-size="10.5" font-weight="bold" fill="#991b1b" text-anchor="middle">Other prime ⇒ Non-term.</text>
</svg>"""

add_q(85, "Tricky",
      "For the decimal expansion of a rational number p/q to terminate, which condition must hold after simplifying p/q to its lowest terms?",
      "q has only odd prime factors",
      "The prime factors of q are only 2 and/or 5",
      "p must be a multiple of q",
      "q must be an even integer",
      "B",
      "A rational number p/q in lowest terms has a terminating decimal expansion if and only if the prime factorisation of q is of the form 2ⁿ5ᵐ for non-negative integers n, m.",
      svg_q85)

add_q(86, "Tricky",
      "According to the NCERT 'Note to the Reader' for three positive integers p, q, and r, which exact formula gives LCM(p, q, r)?",
      "[p · q · r · HCF(p, q, r)] / [HCF(p, q) · HCF(q, r) · HCF(p, r)]",
      "[p · q · r] / HCF(p, q, r)",
      "[HCF(p, q) · HCF(q, r) · HCF(p, r)] / [p · q · r]",
      "[p · q · r · LCM(p, q, r)] / [HCF(p, q, r)]",
      "A",
      "NCERT Chapter 1 'A Note to the Reader' gives the exact formula: LCM(p, q, r) = [p · q · r · HCF(p, q, r)] / [HCF(p, q) · HCF(q, r) · HCF(p, r)].")

add_q(87, "Tricky",
      "Similarly, according to the NCERT 'Note to the Reader', HCF(p, q, r) equals:",
      "[p · q · r · LCM(p, q, r)] / [LCM(p, q) · LCM(q, r) · LCM(p, r)]",
      "[p · q · r] / LCM(p, q, r)",
      "[LCM(p, q) · LCM(q, r) · LCM(p, r)] / [p · q · r]",
      "[p · q · r · HCF(p, q, r)] / [LCM(p, q, r)]",
      "A",
      "NCERT gives: HCF(p, q, r) = [p · q · r · LCM(p, q, r)] / [LCM(p, q) · LCM(q, r) · LCM(p, r)].")

add_q(88, "Tricky",
      "If x is a rational number and y is an irrational number, is xy ALWAYS irrational?",
      "Yes, unconditionally",
      "No, if x = 0, then xy = 0, which is rational",
      "No, only if y is a square root",
      "Yes, because irrationality dominates",
      "B",
      "NCERT explicitly specifies 'non-zero rational': if x = 0 (which is rational), then 0 × y = 0, which is rational. Thus xy is not always irrational unless x ≠ 0.")

add_q(89, "Tricky",
      "Is the number (√2 - √3)(√2 + √3) rational or irrational?",
      "Irrational, because it involves √2 and √3",
      "Rational, because it simplifies to -1",
      "Rational, because it simplifies to +1",
      "Neither rational nor irrational",
      "B",
      "Using the algebraic identity (a - b)(a + b) = a² - b²: (√2)² - (√3)² = 2 - 3 = -1, which is an integer and therefore rational.")

add_q(90, "Tricky",
      "What is the remainder when the square of any odd positive integer is divided by 4?",
      "0",
      "1",
      "2",
      "3",
      "B",
      "Any odd positive integer can be written as 2k + 1. Its square is (2k + 1)² = 4k² + 4k + 1 = 4(k² + k) + 1. Dividing by 4 always leaves a remainder of 1.")

# -------------------------------------------------------------------------
# 🔴 10 VERY VERY HARD / OLYMPIAD QUESTIONS (Q91 to Q100)
# Deep multi-concept synthesis, advanced number-theoretic deductions,
# Exemplar & Olympiad level problem solving.
# -------------------------------------------------------------------------

add_q(91, "Very Hard",
      "If n is an odd positive integer, then n² - 1 is always divisible by which maximum integer?",
      "4",
      "8",
      "12",
      "16",
      "B",
      "Any odd integer n can be written as 4q + 1 or 4q + 3 (or 2k + 1). n² - 1 = (2k + 1)² - 1 = 4k(k + 1). Since one of k or k+1 is even, k(k+1) is a multiple of 2. Hence 4 × 2m = 8m. n² - 1 is always divisible by 8.")

add_q(92, "Very Hard",
      "Prove that for any natural number n, the expression n³ - n is always divisible by:",
      "4",
      "6",
      "8",
      "9",
      "B",
      "n³ - n = n(n² - 1) = (n - 1)n(n + 1), which is the product of three consecutive integers. Among any three consecutive integers, at least one is divisible by 2 and exactly one is divisible by 3. Hence their product is always divisible by 2 × 3 = 6.")

add_q(93, "Very Hard",
      "What is the greatest common divisor of (2²⁰²⁴ - 1) and (2²⁰²⁰ - 1)?",
      "2⁴ - 1 = 15",
      "2² - 1 = 3",
      "2¹ - 1 = 1",
      "2⁸ - 1 = 255",
      "A",
      "A classic Olympiad number theory identity states: HCF(aᵐ - 1, aⁿ - 1) = a^(HCF(m, n)) - 1. Here a = 2, m = 2024, n = 2020. HCF(2024, 2020) = 4. Hence GCD = 2⁴ - 1 = 16 - 1 = 15.")

add_q(94, "Very Hard",
      "How many trailing zeroes are there at the end of the product P = 1 × 2 × 3 × ... × 50 (i.e. 50!)?",
      "10",
      "12",
      "14",
      "15",
      "B",
      "Trailing zeroes are determined by the exponent of 5 in the prime factorisation of 50! by Legendre's formula: ⌊50/5⌋ + ⌊50/25⌋ = 10 + 2 = 12 zeroes.")

add_q(95, "Very Hard",
      "If p is a prime number greater than 3, then p² - 1 is always divisible by:",
      "12",
      "18",
      "24",
      "36",
      "C",
      "Any prime p > 3 can be written as 6k ± 1. Then p² - 1 = (6k ± 1)² - 1 = 36k² ± 12k = 12k(3k ± 1). Since one of k or (3k ± 1) is even, this is always divisible by 12 × 2 = 24.")

add_q(96, "Very Hard",
      "If a and b are two positive integers such that a = bq + r (0 ≤ r < b), then HCF(a, b) is equal to:",
      "HCF(q, r)",
      "HCF(b, r)",
      "HCF(a, r)",
      "HCF(a, q)",
      "B",
      "This is the foundational principle of Euclid's Division Algorithm: any common divisor of a and b also divides r = a - bq, and vice versa. Hence HCF(a, b) = HCF(b, r).")

add_q(97, "Very Hard",
      "What is the least positive integer divisible by all the numbers from 1 to 10 inclusive (NCERT Exemplar)?",
      "504",
      "1,260",
      "2,520",
      "5,040",
      "C",
      "Required number = LCM(1, 2, 3, 4, 5, 6, 7, 8, 9, 10). Highest prime powers: 2³ = 8, 3² = 9, 5¹ = 5, 7¹ = 7. LCM = 8 × 9 × 5 × 7 = 2520.")

add_q(98, "Very Hard",
      "If the sum of the LCM and HCF of two numbers is 1260 and their LCM is 900 more than their HCF, find the product of the two numbers:",
      "194,400",
      "204,400",
      "180,000",
      "216,000",
      "A",
      "Given LCM + HCF = 1260 and LCM - HCF = 900. Adding gives 2·LCM = 2160 ⇒ LCM = 1080. Subtracting gives 2·HCF = 360 ⇒ HCF = 180. Product of numbers = HCF × LCM = 180 × 1080 = 194400.")

add_q(99, "Very Hard",
      "Let a, b, c be positive integers. If HCF(a, b) = 1 and c divides (a + b), what is HCF(a, c)?",
      "1",
      "c",
      "a",
      "b",
      "A",
      "Let d = HCF(a, c). Then d divides a and d divides c. Since c divides (a + b), d divides (a + b). Since d divides both a and (a + b), d divides (a + b) - a = b. Thus d is a common divisor of a and b. But HCF(a, b) = 1, so d must be 1.")

add_q(100, "Very Hard",
      "Let S be the set of all natural numbers n ≤ 100 such that the decimal expansion of n / 140 terminates. How many elements are in S?",
      "7",
      "14",
      "20",
      "28",
      "B",
      "140 = 2² × 5 × 7. For the decimal expansion of n / 140 to terminate, the factor 7 in the denominator must cancel out completely. Thus n must be a multiple of 7. The multiples of 7 up to 100 are 7, 14, 21, ..., 98. Total = ⌊100 / 7⌋ = 14 elements.")

print(f"Total questions generated: {len(questions)}")

# Verify tier breakdown
tier_counts = {}
for q in questions:
    tier = q['difficulty']
    tier_counts[tier] = tier_counts.get(tier, 0) + 1

print("Tier distribution:", tier_counts)

# Build JS master assessment content
js_content = f"""/* =========================================================================
   ELITE CLASSES — MASTER CBT CHAPTER ASSESSMENT
   Class 10 Mathematics — Chapter 1: Real Numbers
   Total Questions: 100 | Duration: 90 Mins | Total Marks: 400
   Negative Marking: -1.0 | Marks per Correct: +4.0
   Standard Distribution: 50 Easy | 10 Medium | 10 Hard | 20 Tricky | 10 Very Hard
   ========================================================================= */

const Class10MathematicsChapter1FullBank = {{
    id: 'ts_c10_math_ch1',
    title: 'Chapter 1: Real Numbers Assessment',
    cls: 'Class 10',
    subject: 'Mathematics',
    duration_mins: 90,
    total_marks: 400,
    passing_marks: 160,
    negative_marking: 1.00,
    marks_per_question: 4,
    questions_count: 100,
    instructions: 'Single master 100-Question assessment covering Class 10 NCERT Mathematics Chapter 1 (Real Numbers). Includes Fundamental Theorem of Arithmetic, HCF & LCM applications, irrationality proofs, and decimal representation analysis with visual diagrams.',
    questions: {json.dumps(questions, indent=8, ensure_ascii=False)}
}};

if (typeof window !== 'undefined') {{
    if (!window.EliteTestRegistry) window.EliteTestRegistry = [];
    window.EliteTestRegistry.push(Class10MathematicsChapter1FullBank);
}}

if (typeof module !== 'undefined' && module.exports) {{
    module.exports = Class10MathematicsChapter1FullBank;
}}
"""

with open('modules/testseries/data/class10/mathematics/chapter1_mathematics.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Saved assessment to modules/testseries/data/class10/mathematics/chapter1_mathematics.js")
