# -*- coding: utf-8 -*-
"""
Generator script for Class 10 Mathematics Chapter 13: Statistics
Exhaustive 100 questions (50 Easy, 10 Medium, 10 Hard, 20 Tricky, 10 Very Hard)
Strict compliance with Elite Classes Test Standards and validation rules.
"""
import json
import os

questions = []
q_count = 0

def add_q(difficulty, text, a, b, c, d, correct, explanation, svg=None):
    global q_count
    q_count += 1
    q = {
        "id": f"ts_c10_math_ch13_q{q_count}",
        "question_number": q_count,
        "question": text,
        "difficulty": difficulty,
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
    if svg:
        q["diagram_svg"] = svg
    questions.append(q)

# SVG Visual Diagrams
svg_ogive = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 250" width="100%" height="210" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
  <!-- Axes -->
  <line x1="50" y1="210" x2="390" y2="210" stroke="#334155" stroke-width="2"/>
  <line x1="50" y1="210" x2="50" y2="30" stroke="#334155" stroke-width="2"/>
  <text x="360" y="235" font-size="11" font-weight="bold" fill="#334155">Upper Limit (x)</text>
  <text x="20" y="25" font-size="11" font-weight="bold" fill="#334155">cf (y)</text>
  <!-- Less than ogive -->
  <path d="M 60 200 Q 180 180 220 120 T 370 45" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <!-- More than ogive -->
  <path d="M 60 45 Q 150 70 220 120 T 370 200" fill="none" stroke="#ea580c" stroke-width="2.5"/>
  <!-- Intersection point -->
  <circle cx="220" cy="120" r="5" fill="#dc2626"/>
  <line x1="220" y1="120" x2="220" y2="210" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="50" y1="120" x2="220" y2="120" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="205" y="228" font-size="12" font-weight="bold" fill="#dc2626">Median</text>
  <text x="15" y="125" font-size="11" font-weight="bold" fill="#dc2626">N/2</text>
  <text x="280" y="65" font-size="11" font-weight="bold" fill="#2563eb">Less than Ogive</text>
  <text x="90" y="65" font-size="11" font-weight="bold" fill="#ea580c">More than Ogive</text>
</svg>'''

svg_histogram_mode = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="200" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
  <line x1="40" y1="200" x2="370" y2="200" stroke="#334155" stroke-width="2"/>
  <line x1="40" y1="200" x2="40" y2="30" stroke="#334155" stroke-width="2"/>
  <!-- Bars -->
  <rect x="70" y="140" width="50" height="60" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
  <text x="85" y="130" font-size="11" fill="#475569">f₀</text>
  <rect x="120" y="70" width="60" height="130" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
  <text x="142" y="60" font-size="12" font-weight="bold" fill="#0284c7">f₁ (Modal)</text>
  <rect x="180" y="120" width="50" height="80" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
  <text x="195" y="110" font-size="11" fill="#475569">f₂</text>
  <!-- Diagonal intersection for mode -->
  <line x1="120" y1="140" x2="180" y2="70" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
  <line x1="120" y1="70" x2="180" y2="120" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
  <circle cx="152" cy="103" r="3" fill="#dc2626"/>
  <line x1="152" y1="103" x2="152" y2="200" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="2,2"/>
  <text x="135" y="218" font-size="11" font-weight="bold" fill="#dc2626">Mode</text>
  <text x="120" y="235" font-size="11" fill="#334155">Modal Class</text>
</svg>'''

# =========================================================================
# 50 EASY QUESTIONS (Formulas, class marks, central tendencies, basics)
# =========================================================================
add_q("easy",
      "The class mark (midpoint) of a class interval is calculated by:",
      "(Upper class limit + Lower class limit) / 2",
      "(Upper class limit - Lower class limit) / 2",
      "Upper class limit + Lower class limit",
      "Upper class limit / Lower class limit",
      "A",
      "NCERT Section 13.2: Class mark x_i = (Upper class limit + Lower class limit) / 2.")

add_q("easy",
      "The class mark of the class interval 10 - 25 is:",
      "17.5", "15", "20", "35",
      "A",
      "Class mark = (10 + 25) / 2 = 35 / 2 = 17.5.")

add_q("easy",
      "The class size (width) of the class interval 40 - 55 is:",
      "15", "47.5", "95", "10",
      "A",
      "Class size h = Upper limit - Lower limit = 55 - 40 = 15.")

add_q("easy",
      "In the direct method, the mean of grouped data is given by the formula:",
      "Σ(f_i x_i) / Σf_i",
      "Σ(f_i d_i) / Σf_i",
      "a + Σ(f_i u_i) / Σf_i",
      "Σx_i / n",
      "A",
      "NCERT Section 13.2: Direct method formula for mean: x̄ = Σ(f_i x_i) / Σf_i.")

add_q("easy",
      "In the assumed mean method, the deviation d_i is defined as:",
      "d_i = x_i - a",
      "d_i = x_i + a",
      "d_i = (x_i - a) / h",
      "d_i = f_i - a",
      "A",
      "NCERT Section 13.2: In the assumed mean method, d_i = x_i - a where 'a' is the chosen assumed mean.")

add_q("easy",
      "In the assumed mean method, the formula for mean x̄ is:",
      "x̄ = a + [Σ(f_i d_i) / Σf_i]",
      "x̄ = a - [Σ(f_i d_i) / Σf_i]",
      "x̄ = [Σ(f_i d_i) / Σf_i]",
      "x̄ = a + h [Σ(f_i d_i) / Σf_i]",
      "A",
      "NCERT Section 13.2: x̄ = a + (Σ f_i d_i / Σ f_i).")

add_q("easy",
      "In the step-deviation method, the reduced variable u_i is given by:",
      "u_i = (x_i - a) / h",
      "u_i = (x_i + a) / h",
      "u_i = (x_i - a) × h",
      "u_i = x_i / h",
      "A",
      "NCERT Section 13.2: u_i = (x_i - a) / h where h is the common class width.")

add_q("easy",
      "In the step-deviation method, the formula for mean x̄ is:",
      "x̄ = a + h × [Σ(f_i u_i) / Σf_i]",
      "x̄ = a + [Σ(f_i u_i) / Σf_i]",
      "x̄ = a - h × [Σ(f_i u_i) / Σf_i]",
      "x̄ = (a / h) × [Σ(f_i u_i) / Σf_i]",
      "A",
      "NCERT Section 13.2: Step-deviation formula: x̄ = a + h × [Σ(f_i u_i) / Σf_i].")

add_q("easy",
      "The value of observation which occurs most frequently in a data set is called the:",
      "Mode", "Mean", "Median", "Range",
      "A",
      "NCERT Section 13.3: Mode is that value among the observations which occurs most often, that is, the value having the maximum frequency.")

add_q("easy",
      "The class interval with the maximum frequency in a grouped frequency distribution is called the:",
      "Modal class", "Median class", "Mean class", "Extreme class",
      "A",
      "NCERT Section 13.3: The class with the maximum frequency is called the modal class.",
      svg_histogram_mode)

add_q("easy",
      "The formula for calculating the mode of grouped data is:",
      "l + [(f₁ - f₀) / (2f₁ - f₀ - f₂)] × h",
      "l + [(f₁ - f₀) / (f₁ - f₂)] × h",
      "l + [(f₀ - f₁) / (2f₁ - f₀ - f₂)] × h",
      "l + [(f₁ - f₂) / (2f₁ - f₀ - f₂)] × h",
      "A",
      "NCERT Section 13.3: Mode = l + [(f₁ - f₀) / (2f₁ - f₀ - f₂)] × h.",
      svg_histogram_mode)

add_q("easy",
      "In the mode formula, what does 'f₁' represent?",
      "Frequency of the modal class",
      "Frequency of the class preceding the modal class",
      "Frequency of the class succeeding the modal class",
      "Lower limit of modal class",
      "A",
      "In the mode formula, f₁ is the frequency of the modal class itself.")

add_q("easy",
      "In the mode formula, what does 'f₀' represent?",
      "Frequency of the class preceding the modal class",
      "Frequency of the modal class",
      "Frequency of the class succeeding the modal class",
      "Cumulative frequency",
      "A",
      "f₀ is the frequency of the class immediately preceding (before) the modal class.")

add_q("easy",
      "In the mode formula, what does 'f₂' represent?",
      "Frequency of the class succeeding the modal class",
      "Frequency of the modal class",
      "Frequency of the class preceding the modal class",
      "Class size",
      "A",
      "f₂ is the frequency of the class immediately succeeding (after) the modal class.")

add_q("easy",
      "The measure of central tendency which gives the value of the middle-most observation is the:",
      "Median", "Mean", "Mode", "Variance",
      "A",
      "NCERT Section 13.4: Median is a measure of central tendency which gives the value of the middle-most observation in the data.")

add_q("easy",
      "For a total frequency N, the median class is the class interval whose cumulative frequency is:",
      "Just greater than (or equal to) N / 2",
      "Exactly equal to N",
      "Less than N / 2",
      "Equal to N / 4",
      "A",
      "NCERT Section 13.4: The median class is the class whose cumulative frequency is just greater than or equal to N/2.")

add_q("easy",
      "The formula for the median of grouped data is:",
      "l + [(N/2 - cf) / f] × h",
      "l + [(N - cf) / f] × h",
      "l + [(cf - N/2) / f] × h",
      "l + [(N/2 - f) / cf] × h",
      "A",
      "NCERT Section 13.4: Median = l + [(N/2 - cf) / f] × h.")

add_q("easy",
      "In the median formula, what does 'cf' stand for?",
      "Cumulative frequency of the class preceding the median class",
      "Cumulative frequency of the median class",
      "Frequency of the median class",
      "Class frequency of the succeeding class",
      "A",
      "In the median formula, cf is the cumulative frequency of the class PRECEDING the median class.")

add_q("easy",
      "In the median formula, what does 'f' stand for?",
      "Frequency of the median class",
      "Cumulative frequency of the median class",
      "Total frequency",
      "Frequency of the preceding class",
      "A",
      "f represents the simple frequency of the median class itself.")

add_q("easy",
      "The empirical relationship between the three measures of central tendency is:",
      "3 Median = Mode + 2 Mean",
      "Mode = 3 Mean - 2 Median",
      "Mean = 3 Median - 2 Mode",
      "3 Mode = Median + 2 Mean",
      "A",
      "NCERT Section 13.4: The standard empirical relation is 3 Median = Mode + 2 Mean (or Mode = 3 Median - 2 Mean).")

add_q("easy",
      "If the mean of a data set is 24 and the median is 25, find the mode using the empirical relationship:",
      "27", "26", "23", "25",
      "A",
      "Mode = 3 Median - 2 Mean = 3(25) - 2(24) = 75 - 48 = 27.")

add_q("easy",
      "If the mode of a distribution is 12 and the mean is 24, find the median using the empirical relationship:",
      "20", "18", "16", "22",
      "A",
      "3 Median = Mode + 2 Mean = 12 + 2(24) = 12 + 48 = 60 ⇒ Median = 60 / 3 = 20.")

add_q("easy",
      "The cumulative frequency curve is popularly known as an:",
      "Ogive", "Histogram", "Frequency polygon", "Bar chart",
      "A",
      "NCERT Section 13.5: The cumulative frequency curve is called an ogive (pronounced o-jive).",
      svg_ogive)

add_q("easy",
      "In a 'less than' ogive, the cumulative frequencies are plotted against the:",
      "Upper limits of the class intervals",
      "Lower limits of the class intervals",
      "Class marks",
      "Class frequencies",
      "A",
      "NCERT Section 13.5: To construct a 'less than' ogive, cumulative frequencies are plotted against the corresponding upper class limits.")

add_q("easy",
      "In a 'more than' ogive, the cumulative frequencies are plotted against the:",
      "Lower limits of the class intervals",
      "Upper limits of the class intervals",
      "Class midpoints",
      "Total frequencies",
      "A",
      "NCERT Section 13.5: For a 'more than' ogive, cumulative frequencies are plotted against the lower limits of the corresponding class intervals.")

add_q("easy",
      "The x-coordinate of the point of intersection of the 'less than' ogive and the 'more than' ogive of a data set gives the:",
      "Median", "Mean", "Mode", "Range",
      "A",
      "NCERT Section 13.5: The intersection of both ogives occurs at y = N/2, and its x-coordinate is precisely the Median.",
      svg_ogive)

add_q("easy",
      "The y-coordinate of the point of intersection of the 'less than' ogive and 'more than' ogive of total frequency N is:",
      "N / 2", "N", "N / 4", "3N / 4",
      "A",
      "At the median, exactly half of the total frequency has accumulated, so y = N / 2.")

add_q("easy",
      "Which measure of central tendency can be determined graphically from a histogram?",
      "Mode", "Mean", "Median", "Standard deviation",
      "A",
      "Mode can be determined graphically from a histogram by drawing diagonals from the top corners of the highest bar to the adjacent bars.",
      svg_histogram_mode)

add_q("easy",
      "Which measure of central tendency CANNOT be determined graphically using standard curves?",
      "Mean", "Median", "Mode", "Both Median and Mode",
      "A",
      "Mean cannot be determined graphically; Median is found from ogives, and Mode from histograms.")

add_q("easy",
      "If each observation in a data set is increased by 5, the new mean of the data:",
      "Increases by 5", "Remains unchanged", "Multiplies by 5", "Increases by 5 / n",
      "A",
      "If x_i' = x_i + k, then Mean' = Σ(x_i + k)/n = x̄ + k. So the mean increases by 5.")

add_q("easy",
      "If each observation in a data set is multiplied by a constant k, the new mean:",
      "Is multiplied by k", "Increases by k", "Remains unchanged", "Is divided by k",
      "A",
      "Mean' = Σ(k x_i) / n = k (Σ x_i / n) = k x̄.")

add_q("easy",
      "The algebraic sum of deviations of all observations from their mean (Σ(x_i - x̄)) is ALWAYS equal to:",
      "0", "1", "Positive constant", "Σf_i",
      "A",
      "Σ(x_i - x̄) = Σx_i - n x̄ = n x̄ - n x̄ = 0. The sum of deviations from the arithmetic mean is always identically zero.")

add_q("easy",
      "For a symmetric distribution, which of the following is true?",
      "Mean = Median = Mode",
      "Mean > Median > Mode",
      "Mean < Median < Mode",
      "Mean = Mode ≠ Median",
      "A",
      "In a perfectly symmetrical distribution (like a bell curve), Mean, Median, and Mode are all coincident and equal.")

add_q("easy",
      "Find the mean of the first five natural numbers (1, 2, 3, 4, 5):",
      "3", "2.5", "3.5", "15",
      "A",
      "Mean = (1 + 2 + 3 + 4 + 5) / 5 = 15 / 5 = 3.")

add_q("easy",
      "Find the mean of the first five prime numbers (2, 3, 5, 7, 11):",
      "5.6", "5", "5.4", "6",
      "A",
      "Sum = 2 + 3 + 5 + 7 + 11 = 28. Mean = 28 / 5 = 5.6.")

add_q("easy",
      "If the mean of five observations x, x+2, x+4, x+6, x+8 is 11, find x:",
      "7", "9", "11", "5",
      "A",
      "Sum = 5x + 20. Mean = (5x + 20) / 5 = x + 4. x + 4 = 11 ⇒ x = 7.")

add_q("easy",
      "The median of the numbers 4, 8, 2, 9, 5 is:",
      "5", "8", "4", "2",
      "A",
      "Arranging in ascending order: 2, 4, 5, 8, 9. The middle observation (3rd) is 5.")

add_q("easy",
      "The mode of the numbers 3, 5, 7, 5, 9, 5, 3, 8 is:",
      "5", "3", "7", "9",
      "A",
      "5 occurs three times, which is more than any other number. Thus Mode = 5.")

add_q("easy",
      "If the upper limit of a class interval is 30 and class mark is 25, what is its lower limit?",
      "20", "22.5", "15", "10",
      "A",
      "(Lower + 30) / 2 = 25 ⇒ Lower + 30 = 50 ⇒ Lower = 20.")

add_q("easy",
      "If the lower limit of a class interval is 15 and class mark is 20, what is its upper limit?",
      "25", "30", "35", "22.5",
      "A",
      "(15 + Upper) / 2 = 20 ⇒ 15 + Upper = 40 ⇒ Upper = 25.")

add_q("easy",
      "A distribution with two distinct modes is called:",
      "Bimodal", "Unimodal", "Trimodal", "Skewed",
      "A",
      "A distribution having two modes is termed bimodal.")

add_q("easy",
      "In a frequency table, the sum of all class frequencies Σf_i is equal to:",
      "Total number of observations (N)",
      "The maximum frequency",
      "The mean of the data",
      "The class mark",
      "A",
      "Σf_i = N, the total count of all observations in the dataset.")

add_q("easy",
      "Can the mode of grouped data be greater than the upper limit of the modal class?",
      "No, the mode always lies inside the modal class interval",
      "Yes, if f₂ is very large",
      "Yes, if h > 10",
      "Only for skewed data",
      "A",
      "The formula guarantees that l ≤ Mode ≤ l + h, so mode strictly lies within the modal class.")

add_q("easy",
      "Can the median of grouped data lie outside the median class interval?",
      "No, it always lies within the median class interval",
      "Yes, if N is odd",
      "Yes, if cf is large",
      "Only if class widths vary",
      "A",
      "The median formula guarantees that l ≤ Median ≤ l + h.")

add_q("easy",
      "Which measure of central tendency is most affected by extreme outliers in the data?",
      "Mean", "Median", "Mode", "All equally",
      "A",
      "The arithmetic mean takes into account the numerical magnitude of every value, making it highly sensitive to extreme outliers.")

add_q("easy",
      "Which measure of central tendency is the most appropriate when the data contains extreme outliers?",
      "Median", "Mean", "Mode", "Mid-range",
      "A",
      "Median is a positional average and is robust against extreme outliers.")

add_q("easy",
      "For open-ended classes (e.g. 'Below 20' or 'Above 80'), which measure of central tendency cannot be calculated without assuming limits?",
      "Mean", "Median", "Mode", "None",
      "A",
      "Mean requires class marks (midpoints), which cannot be calculated for open-ended classes without making arbitrary assumptions.")

add_q("easy",
      "Cumulative frequency is obtained by:",
      "Adding the frequencies of preceding classes successively",
      "Multiplying frequencies by class marks",
      "Dividing frequencies by total observations",
      "Subtracting each frequency from total",
      "A",
      "Cumulative frequency of a class is the running sum of frequencies up to and including that class.")

add_q("easy",
      "If the class intervals are 0-10, 10-20, 20-30, what type of intervals are these?",
      "Continuous (exclusive) class intervals",
      "Discontinuous (inclusive) intervals",
      "Open-ended intervals",
      "Cumulative intervals",
      "A",
      "Where the upper limit of one class equals the lower limit of the next, they are continuous (exclusive) intervals.")

add_q("easy",
      "To convert discontinuous intervals like 1-5, 6-10 into continuous intervals, the correction factor subtracted from lower limits and added to upper limits is:",
      "0.5", "1.0", "0.25", "0.1",
      "A",
      "The gap between 5 and 6 is 1. Correction factor = (6 - 5) / 2 = 0.5. Classes become 0.5 - 5.5, 5.5 - 10.5.")

# =========================================================================
# 10 MEDIUM QUESTIONS (Calculations of Mean, Median, Mode from tables)
# =========================================================================
add_q("medium",
      "Given Σf_i x_i = 1860 and Σf_i = 30, find the mean using the direct method:",
      "62", "58", "60", "64",
      "A",
      "NCERT Example 1: x̄ = Σ(f_i x_i) / Σf_i = 1860 / 30 = 62.")

add_q("medium",
      "In an assumed mean calculation, assumed mean a = 50, Σf_i d_i = -40, and Σf_i = 20. The mean x̄ is:",
      "48", "52", "46", "50",
      "A",
      "x̄ = a + (Σf_i d_i / Σf_i) = 50 + (-40 / 20) = 50 - 2 = 48.")

add_q("medium",
      "In a step-deviation calculation, a = 25, h = 10, Σf_i u_i = 15, and Σf_i = 50. The mean x̄ is:",
      "28", "25.3", "30", "26.5",
      "A",
      "x̄ = a + h(Σf_i u_i / Σf_i) = 25 + 10(15 / 50) = 25 + 10(0.3) = 25 + 3 = 28.")

add_q("medium",
      "For a grouped distribution, the modal class is 40 - 55. Here l = 40, h = 15, f₁ = 7, f₀ = 3, f₂ = 6. The mode of the data is:",
      "52", "48", "45", "50",
      "A",
      "NCERT Example 5: Mode = l + [(f₁ - f₀)/(2f₁ - f₀ - f₂)] × h = 40 + [(7 - 3)/(2×7 - 3 - 6)] × 15 = 40 + [4 / (14 - 9)] × 15 = 40 + (4/5) × 15 = 40 + 12 = 52.")

add_q("medium",
      "In a frequency distribution, the median class is 20 - 30. Here l = 20, N = 60, cf = 22, f = 20, and h = 10. The median is:",
      "24", "25", "23", "26",
      "A",
      "Median = l + [(N/2 - cf)/f] × h = 20 + [(30 - 22)/20] × 10 = 20 + (8/20) × 10 = 20 + 4 = 24.")

add_q("medium",
      "If the mode of a distribution is 45 and the mean is 27, find the median:",
      "33", "30", "36", "39",
      "A",
      "3 Median = Mode + 2 Mean = 45 + 2(27) = 45 + 54 = 99 ⇒ Median = 99 / 3 = 33.")

add_q("medium",
      "The following are the marks of 30 students: 10, 20, 36, 92, 95, 40, 50, 56, 60, 70. If the sum of all marks is 1779, what is the mean mark of the students?",
      "59.3", "60.0", "58.5", "61.2",
      "A",
      "Mean = 1779 / 30 = 59.3.")

add_q("medium",
      "For the following frequency distribution: Class 0-10 (f=5), 10-20 (f=8), 20-30 (f=12), 30-40 (f=7), 40-50 (f=8). What is the modal class?",
      "20 - 30", "10 - 20", "30 - 40", "40 - 50",
      "A",
      "The highest frequency is 12, which corresponds to the class interval 20 - 30.")

add_q("medium",
      "In the same frequency distribution (Total N = 5 + 8 + 12 + 7 + 8 = 40), what is the median class?",
      "20 - 30", "10 - 20", "30 - 40", "40 - 50",
      "A",
      "N = 40 ⇒ N/2 = 20. Cumulative frequencies: 0-10: 5; 10-20: 13; 20-30: 25. The class whose cf is just ≥ 20 is 20 - 30.")

add_q("medium",
      "If the mean of the numbers 27, 31, 89, 107, 156 is x̄, then the sum of deviations (27 - x̄) + (31 - x̄) + (89 - x̄) + (107 - x̄) + (156 - x̄) is equal to:",
      "0", "10", "410", "-15",
      "A",
      "By mathematical definition, the sum of deviations of any set of numbers from their mean is ALWAYS zero.")

# =========================================================================
# 10 HARD QUESTIONS (Missing frequency problems, multi-step algebra)
# =========================================================================
add_q("hard",
      "The mean of the following distribution is 18. Classes: 11-13 (f=7), 13-15 (f=6), 15-17 (f=9), 17-19 (f=13), 19-21 (f=f), 21-23 (f=5), 23-25 (f=4). Find the missing frequency f:",
      "20", "18", "16", "22",
      "A",
      "NCERT Exercise 13.1 Q3: Midpoints x_i: 12, 14, 16, 18, 20, 22, 24. With a = 18, d_i = -6, -4, -2, 0, 2, 4, 6. Σf_i d_i = 7(-6) + 6(-4) + 9(-2) + 13(0) + f(2) + 5(4) + 4(6) = -42 - 24 - 18 + 0 + 2f + 20 + 24 = 2f - 40. Given x̄ = 18 = a ⇒ Σf_i d_i = 0 ⇒ 2f - 40 = 0 ⇒ 2f = 40 ⇒ f = 20.")

add_q("hard",
      "The median of the following data is 28.5. If the total frequency is 60, find x and y: 0-10 (5), 10-20 (x), 20-30 (20), 30-40 (15), 40-50 (y), 50-60 (5):",
      "x = 8, y = 7", "x = 7, y = 8", "x = 9, y = 6", "x = 10, y = 5",
      "A",
      "NCERT Exercise 13.3 Q2: Total = 45 + x + y = 60 ⇒ x + y = 15. Median = 28.5 lies in class 20 - 30. l = 20, h = 10, f = 20, cf = 5 + x, N/2 = 30. 28.5 = 20 + [(30 - (5 + x))/20] × 10 ⇒ 8.5 = (25 - x)/2 ⇒ 17 = 25 - x ⇒ x = 8. y = 15 - 8 = 7.")

add_q("hard",
      "If the median of a distribution is 525 and total frequency is 100, where classes are in steps of 100 (0-100 to 900-1000) and missing frequencies are x in 100-200 and y in 600-700. If x + y = 24 and x = 9, what is the value of y?",
      "15", "12", "18", "9",
      "A",
      "NCERT Example 8: x + y = 24. If x = 9, then y = 24 - 9 = 15.")

add_q("hard",
      "A life insurance agent found the following data for distribution of ages of 100 policy holders: Below 20: 2, Below 25: 6, Below 30: 24, Below 35: 45, Below 40: 78, Below 45: 89, Below 50: 92, Below 55: 98, Below 60: 100. What is the median class?",
      "35 - 40", "30 - 35", "40 - 45", "25 - 30",
      "A",
      "NCERT Exercise 13.3 Q3: N = 100 ⇒ N/2 = 50. The cumulative frequency just ≥ 50 is 78, which corresponds to the class 35 - 40.")

add_q("hard",
      "In the policy holders data above (median class 35-40, l=35, N/2=50, cf=45, f=78-45=33, h=5), find the median age:",
      "35.76 years", "36.5 years", "37.2 years", "38.1 years",
      "A",
      "Median = 35 + [(50 - 45)/33] × 5 = 35 + (5/33) × 5 = 35 + 25/33 = 35 + 0.7576 ≈ 35.76 years.")

add_q("hard",
      "The lengths of 40 leaves of a plant are measured correct to nearest millimetre: 118-126 (3), 127-135 (5), 136-144 (9), 145-153 (12), 154-162 (5), 163-171 (4), 172-180 (2). To find the median, what continuous boundaries must be used for the modal/median class?",
      "144.5 - 153.5", "145 - 153", "144 - 154", "145.5 - 152.5",
      "A",
      "NCERT Exercise 13.3 Q4: The classes are discontinuous with a gap of 1. Subtract 0.5 from lower limit and add 0.5 to upper limit. The class 145-153 becomes 144.5 - 153.5.")

add_q("hard",
      "In the leaves problem (N=40, N/2=20, continuous class 144.5-153.5, cf=17, f=12, h=9), find the median length of the leaves:",
      "146.75 mm", "145.5 mm", "148.2 mm", "150.0 mm",
      "A",
      "Median = 144.5 + [(20 - 17)/12] × 9 = 144.5 + (3/12) × 9 = 144.5 + 2.25 = 146.75 mm.")

add_q("hard",
      "If the mean of 20 observations is 35 and on checking it was found that an observation 45 was mistakenly recorded as 25. The correct mean is:",
      "36", "34", "35.5", "37",
      "A",
      "Initial total sum = 20 × 35 = 700. Correct sum = 700 - 25 + 45 = 720. Correct mean = 720 / 20 = 36.")

add_q("hard",
      "The mean of 100 observations was 50. If at the time of calculation, two observations were wrongly taken as 30 and 20 instead of 50 and 40, find the correct mean:",
      "50.4", "51.0", "49.6", "52.0",
      "A",
      "Initial sum = 100 × 50 = 5000. Correct sum = 5000 - (30 + 20) + (50 + 40) = 5000 - 50 + 90 = 5040. Correct mean = 5040 / 100 = 50.4.")

add_q("hard",
      "In a frequency distribution with classes 0-10, 10-20, ..., 40-50, the modal class is 20-30 with frequency 15. The frequency of 10-20 is 10 and that of 30-40 is 10. Find the mode:",
      "25", "22.5", "27.5", "20",
      "A",
      "Mode = 20 + [(15 - 10)/(2×15 - 10 - 10)] × 10 = 20 + [5 / 10] × 10 = 20 + 5 = 25. When f₀ = f₂, the mode lies exactly at the class midpoint!")

# =========================================================================
# 20 TRICKY QUESTIONS (Conceptual subtleties, misconceptions, ogive nuances)
# =========================================================================
add_q("tricky",
      "Can the mode of a frequency distribution be determined if class widths are unequal without adjusting frequencies?",
      "No, modal class must be identified using frequency density (f / h)",
      "Yes, simply pick the largest frequency f_i",
      "Yes, by using the mean formula",
      "Mode cannot be calculated for unequal class intervals",
      "A",
      "When class widths vary, the class with the highest raw frequency is not necessarily the modal class; one must compare frequency densities (frequency per unit class width).")

add_q("tricky",
      "A student states: 'In the assumed mean method, if we choose a different assumed mean 'a', the final value of the calculated mean x̄ will change.' Is this true?",
      "False, the calculated mean x̄ is mathematically identical regardless of the chosen assumed mean 'a'",
      "True, choosing a larger 'a' increases x̄",
      "True, 'a' must always be chosen as the exact median",
      "True, only direct method gives the correct value",
      "A",
      "NCERT Section 13.2: The derivation proves that the choice of 'a' does not affect the final value of x̄; it only shifts the arithmetic values during intermediate calculation.")

add_q("tricky",
      "If the step-deviation method is applied to a grouped distribution where class sizes are unequal:",
      "The standard formula with a single 'h' cannot be used directly",
      "The result is always zero",
      "It gives an exact integer mean",
      "It is identical to the median formula",
      "A",
      "Step-deviation relies on dividing deviations by a common factor 'h'. If class sizes are unequal, a single class width h does not exist (unless all widths share a common factor).")

add_q("tricky",
      "If the mean and mode of a data distribution are both 30, what is its median?",
      "30", "60", "15", "45",
      "A",
      "3 Median = Mode + 2 Mean = 30 + 2(30) = 90 ⇒ Median = 90 / 3 = 30. (In any symmetric unimodal distribution, Mean = Median = Mode).")

add_q("tricky",
      "For a positively skewed distribution with a long right tail, what is the typical order of the central tendencies?",
      "Mean > Median > Mode",
      "Mode > Median > Mean",
      "Median > Mean > Mode",
      "Mean = Median = Mode",
      "A",
      "In a distribution skewed to the right (positive skew), extreme large values pull the mean to the right: Mean > Median > Mode.")

add_q("tricky",
      "For a negatively skewed distribution with a long left tail, what is the typical order of the central tendencies?",
      "Mode > Median > Mean",
      "Mean > Median > Mode",
      "Median > Mode > Mean",
      "Mean = Mode > Median",
      "A",
      "In a distribution skewed to the left (negative skew), extreme small values pull the mean down: Mean < Median < Mode.")

add_q("tricky",
      "If a 'less than' ogive and a 'more than' ogive intersect at the point (35, 25), then:",
      "Median = 35 and total frequency N = 50",
      "Median = 25 and total frequency N = 35",
      "Median = 35 and total frequency N = 25",
      "Mean = 35 and Mode = 25",
      "A",
      "The x-coordinate is the Median = 35. The y-coordinate is N/2 = 25 ⇒ Total frequency N = 50.",
      svg_ogive)

add_q("tricky",
      "If the point of intersection of two ogives is (42.5, 60), what is the total number of observations N in the study?",
      "120", "60", "85", "42.5",
      "A",
      "Intersection y-coordinate = N / 2 = 60 ⇒ N = 2 × 60 = 120 observations.")

add_q("tricky",
      "In the calculation of mode, what happens if f₁ = f₀ (the frequency of the modal class equals that of the preceding class)?",
      "Mode = l (the lower limit of the modal class)",
      "Mode is undefined",
      "Mode = l + h",
      "Mode = 0",
      "A",
      "When f₁ = f₀, the numerator (f₁ - f₀) becomes 0, so Mode = l + 0 = l.")

add_q("tricky",
      "In the calculation of mode, what happens if f₁ = f₂ (the frequency of the modal class equals that of the succeeding class)?",
      "Mode = l + h / 2 (the midpoint of the modal class)",
      "Mode = l",
      "Mode = l + h",
      "Mode cannot be found",
      "A",
      "If f₁ - f₀ = f₁ - f₂, then (f₁ - f₀) / [2f₁ - f₀ - f₂] = Δ / (Δ + Δ) = 1/2. Thus Mode = l + (1/2)h, which is precisely the midpoint of the modal class!")

add_q("tricky",
      "Can a dataset have more than one median?",
      "No, every numerical dataset has a unique median",
      "Yes, if it has an even number of observations",
      "Yes, if it has two modes",
      "Only for grouped data",
      "A",
      "Unlike mode (which can be bimodal or multimodal), the median is ALWAYS unique for any dataset.")

add_q("tricky",
      "Can a dataset have no mode at all?",
      "Yes, if every observation occurs with the same frequency (e.g., each appears once)",
      "No, every dataset must have at least one mode",
      "Only for grouped data",
      "Only if mean = 0",
      "A",
      "If all values occur with equal frequency (e.g. 1, 2, 3, 4, 5), there is no greatest frequency and hence no mode.")

add_q("tricky",
      "If the mean of a set of 10 observations is 20, and the mean of another set of 15 observations is 30, what is the combined mean of all 25 observations?",
      "26", "25", "24", "28",
      "A",
      "Combined mean = (n1 x̄1 + n2 x̄2) / (n1 + n2) = (10 × 20 + 15 × 30) / 25 = (200 + 450) / 25 = 650 / 25 = 26.")

add_q("tricky",
      "In the ogive graph, the slope of the 'less than' ogive is:",
      "Always non-negative (never decreases)",
      "Always negative",
      "Alternating positive and negative",
      "Constant",
      "A",
      "Because cumulative frequencies are running sums of non-negative frequencies (f_i ≥ 0), cumulative frequency never decreases as x increases. The curve is non-decreasing.")

add_q("tricky",
      "In the ogive graph, the slope of the 'more than' ogive is:",
      "Always non-positive (never increases)",
      "Always positive",
      "Zero everywhere",
      "First positive then negative",
      "A",
      "As the lower limit increases, fewer observations exceed that limit, so 'more than' cumulative frequency never increases.")

add_q("tricky",
      "What is the sum of the 'less than' cumulative frequency and the 'more than' cumulative frequency at any dividing point between two classes?",
      "Total frequency N",
      "N / 2",
      "2N",
      "0",
      "A",
      "Observations less than x plus observations greater than x account for all N observations, so their sum is N.")

add_q("tricky",
      "If the median of the observations x/5, x, x/4, x/2, x/3 (where x > 0) is 8, find x:",
      "24", "40", "16", "32",
      "A",
      "Arranging in ascending order for x > 0: x/5 < x/4 < x/3 < x/2 < x. The middle (3rd) observation is x/3. Given x/3 = 8 ⇒ x = 24.")

add_q("tricky",
      "If the mean of a frequency distribution is 35 and each frequency f_i is doubled while keeping class marks unchanged, what happens to the mean?",
      "Remains 35", "Becomes 70", "Becomes 17.5", "Becomes 35²",
      "A",
      "Mean = Σ(2f_i x_i) / Σ(2f_i) = 2 Σ(f_i x_i) / [2 Σf_i] = x̄ = 35. Doubling all frequencies preserves the relative proportions, so the mean is UNCHANGED.")

add_q("tricky",
      "If the variance of a dataset is 0, what can be concluded about all the observations?",
      "All observations are identical (equal to each other)",
      "All observations are 0",
      "The mean is 0",
      "The median is negative",
      "A",
      "Variance is the average of squared deviations from the mean. Since squared deviations are non-negative, variance = 0 if and only if every deviation is zero, meaning all observations are identical.")

add_q("tricky",
      "In the construction of cumulative frequency tables, which of the following is an upper-class boundary for 'less than 20' in interval 10-20?",
      "20", "10", "15", "25",
      "A",
      "In continuous interval 10-20, all values in this class are strictly less than 20 (the upper limit).")

# =========================================================================
# 10 VERY HARD QUESTIONS (Olympiad/Exemplar multi-step analytical problems)
# =========================================================================
add_q("very_hard",
      "If x̄ is the mean of x₁, x₂, ..., xₙ, and ȳ is the mean of y₁, y₂, ..., yₙ, then the mean of x₁ + y₁, x₂ + y₂, ..., xₙ + yₙ is:",
      "x̄ + ȳ", "x̄ ȳ", "(x̄ + ȳ) / 2", "x̄ - ȳ",
      "A",
      "Mean = Σ(x_i + y_i) / n = (Σx_i + Σy_i) / n = Σx_i/n + Σy_i/n = x̄ + ȳ.")

add_q("very_hard",
      "If the mean of n observations x₁, x₂, ..., xₙ is x̄, what is the value of Σᵢ₌₁ⁿ (xᵢ - x̄ + 3)?",
      "3n", "0", "3", "n(x̄ + 3)",
      "A",
      "Σ(x_i - x̄ + 3) = Σ(x_i - x̄) + Σ 3 = 0 + 3n = 3n.")

add_q("very_hard",
      "The average weight of 30 students in a class is 45 kg. If the teacher's weight is included, the average weight increases by 500 g (0.5 kg). What is the weight of the teacher?",
      "60.5 kg", "60 kg", "55.5 kg", "65 kg",
      "A",
      "Total weight of 30 students = 30 × 45 = 1350 kg. Total weight of 31 people = 31 × 45.5 = 1410.5 kg. Teacher's weight = 1410.5 - 1350 = 60.5 kg.")

add_q("very_hard",
      "For what value of k will the mode of the dataset 2, 4, 6, 4, 8, 6, 10, k, 4 be equal to 4?",
      "Any real number", "k must be 4", "k cannot be 6", "Both B and C are correct",
      "D",
      "Currently 4 appears twice, 6 appears twice. For 4 to be the unique mode, 4 must appear at least 3 times (so k = 4), and certainly k cannot be 6 (otherwise 6 would also appear 3 times). Thus both B and C are correct!")

add_q("very_hard",
      "If the difference between mode and median of a frequency distribution is 24, what is the difference between median and mean?",
      "12", "24", "8", "16",
      "A",
      "We know Mode = 3 Median - 2 Mean ⇒ Mode - Median = 2 Median - 2 Mean = 2(Median - Mean). Given Mode - Median = 24 ⇒ 2(Median - Mean) = 24 ⇒ Median - Mean = 12.")

add_q("very_hard",
      "If the difference between mode and mean of a distribution is k times the difference between median and mean, what is the value of k?",
      "3", "2", "1/3", "1/2",
      "A",
      "Mode - Mean = (3 Median - 2 Mean) - Mean = 3 Median - 3 Mean = 3(Median - Mean). Therefore, k = 3.")

add_q("very_hard",
      "Find the median of the first 100 natural numbers (1, 2, 3, ..., 100):",
      "50.5", "50", "51", "50.0",
      "A",
      "Since n = 100 (even), Median = average of (n/2)th and (n/2 + 1)th terms = (50th + 51st) / 2 = (50 + 51) / 2 = 101 / 2 = 50.5.")

add_q("very_hard",
      "In an examination, the mean marks of boys is 70 and that of girls is 73. If the combined mean of the whole class is 71, what is the ratio of the number of boys to girls?",
      "2 : 1", "1 : 2", "3 : 1", "3 : 2",
      "A",
      "Let boys be n1 and girls be n2. 71 = (70 n1 + 73 n2) / (n1 + n2) ⇒ 71 n1 + 71 n2 = 70 n1 + 73 n2 ⇒ n1 = 2 n2 ⇒ n1 / n2 = 2 / 1.")

add_q("very_hard",
      "The median of 11 distinct numbers is m. If the five smallest numbers are each decreased by 3, and the five largest numbers are each increased by 3, what is the new median?",
      "m (remains completely unchanged)",
      "m + 3",
      "m - 3",
      "m / 3",
      "A",
      "Decreasing values that are already smaller than m keeps them below m. Increasing values that are already larger keeps them above m. The middle (6th) observation m is unaffected, so the median remains exactly m.")

add_q("very_hard",
      "A distribution has mean 15 and variance 4. If each observation is multiplied by 3 and then increased by 2, what are the new mean and new standard deviation?",
      "New Mean = 47, New SD = 6",
      "New Mean = 45, New SD = 12",
      "New Mean = 47, New SD = 12",
      "New Mean = 51, New SD = 4",
      "A",
      "Initial SD = √4 = 2. New Mean = 3(15) + 2 = 45 + 2 = 47. Scaling multiplies SD by 3, and adding a constant does not change spread: New SD = 3 × 2 = 6.")

# Verification of distribution
tiers = {}
for q in questions:
    d = q["difficulty"]
    tiers[d] = tiers.get(d, 0) + 1

print(f"Total questions generated: {len(questions)}")
print(f"Tier distribution: {tiers}")

# Output JS content
output_path = "modules/testseries/data/class10/mathematics/chapter13_mathematics.js"
header = """/* =========================================================================
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
    questions: """

footer = """
};

if (typeof window !== 'undefined') {
    if (!window.EliteTestRegistry) window.EliteTestRegistry = [];
    window.EliteTestRegistry.push(Class10MathematicsChapter13FullBank);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Class10MathematicsChapter13FullBank;
}
"""

js_content = header + json.dumps(questions, indent=4, ensure_ascii=False) + footer

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Saved assessment to {output_path}")
