# -*- coding: utf-8 -*-
"""
Generator script for Class 10 Mathematics Chapter 14: Probability
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
        "id": f"ts_c10_math_ch14_q{q_count}",
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
svg_two_dice_grid = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 250" width="100%" height="210" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
  <text x="210" y="25" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Two Dice Outcomes (6 × 6 = 36 Outcomes)</text>
  <!-- Grid of dots/cells -->
  <g font-size="9" fill="#475569" font-family="monospace">
    <text x="50" y="55">(1,1) (1,2) (1,3) (1,4) (1,5) (1,6)</text>
    <text x="50" y="85">(2,1) (2,2) (2,3) (2,4) (2,5) (2,6)</text>
    <text x="50" y="115">(3,1) (3,2) (3,3) (3,4) (3,5) (3,6)</text>
    <text x="50" y="145">(4,1) (4,2) (4,3) (4,4) (4,5) (4,6)</text>
    <text x="50" y="175">(5,1) (5,2) (5,3) (5,4) (5,5) (5,6)</text>
    <text x="50" y="205">(6,1) (6,2) (6,3) (6,4) (6,5) (6,6)</text>
  </g>
  <!-- Highlight doublets diagonal -->
  <line x1="60" y1="45" x2="350" y2="210" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="280" y="235" font-size="11" font-weight="bold" fill="#dc2626">Doublets Diagonal (6/36)</text>
</svg>'''

svg_card_suits = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 220" width="100%" height="190" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
  <rect x="25" y="40" width="85" height="120" rx="6" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
  <text x="67" y="70" font-size="28" fill="#0f172a" text-anchor="middle">♠</text>
  <text x="67" y="110" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Spades</text>
  <text x="67" y="130" font-size="11" fill="#64748b" text-anchor="middle">13 Black</text>

  <rect x="125" y="40" width="85" height="120" rx="6" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
  <text x="167" y="70" font-size="28" fill="#dc2626" text-anchor="middle">♥</text>
  <text x="167" y="110" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">Hearts</text>
  <text x="167" y="130" font-size="11" fill="#64748b" text-anchor="middle">13 Red</text>

  <rect x="225" y="40" width="85" height="120" rx="6" fill="#ffffff" stroke="#dc2626" stroke-width="2"/>
  <text x="267" y="70" font-size="28" fill="#dc2626" text-anchor="middle">♦</text>
  <text x="267" y="110" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">Diamonds</text>
  <text x="267" y="130" font-size="11" fill="#64748b" text-anchor="middle">13 Red</text>

  <rect x="325" y="40" width="85" height="120" rx="6" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
  <text x="367" y="70" font-size="28" fill="#0f172a" text-anchor="middle">♣</text>
  <text x="367" y="110" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Clubs</text>
  <text x="367" y="130" font-size="11" fill="#64748b" text-anchor="middle">13 Black</text>

  <text x="220" y="195" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">Total 52 Cards (26 Red, 26 Black, 12 Face Cards: K, Q, J)</text>
</svg>'''

svg_spinning_arrow = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 250" width="100%" height="200" style="background:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
  <circle cx="180" cy="125" r="90" fill="#f0fdf4" stroke="#16a34a" stroke-width="2.5"/>
  <!-- 8 Sectors -->
  <line x1="180" y1="35" x2="180" y2="215" stroke="#16a34a" stroke-width="1.5"/>
  <line x1="90" y1="125" x2="270" y2="125" stroke="#16a34a" stroke-width="1.5"/>
  <line x1="116" y1="61" x2="244" y2="189" stroke="#16a34a" stroke-width="1.5"/>
  <line x1="116" y1="189" x2="244" y2="61" stroke="#16a34a" stroke-width="1.5"/>
  <text x="180" y="65" font-size="14" font-weight="bold" fill="#15803d" text-anchor="middle">1</text>
  <text x="225" y="80" font-size="14" font-weight="bold" fill="#15803d" text-anchor="middle">2</text>
  <text x="245" y="130" font-size="14" font-weight="bold" fill="#15803d" text-anchor="middle">3</text>
  <text x="225" y="180" font-size="14" font-weight="bold" fill="#15803d" text-anchor="middle">4</text>
  <text x="180" y="195" font-size="14" font-weight="bold" fill="#15803d" text-anchor="middle">5</text>
  <text x="135" y="180" font-size="14" font-weight="bold" fill="#15803d" text-anchor="middle">6</text>
  <text x="115" y="130" font-size="14" font-weight="bold" fill="#15803d" text-anchor="middle">7</text>
  <text x="135" y="80" font-size="14" font-weight="bold" fill="#15803d" text-anchor="middle">8</text>
  <!-- Pointer Arrow -->
  <line x1="180" y1="125" x2="180" y2="70" stroke="#dc2626" stroke-width="3"/>
  <polygon points="180,60 174,75 186,75" fill="#dc2626"/>
  <circle cx="180" cy="125" r="5" fill="#dc2626"/>
  <text x="180" y="240" font-size="12" font-weight="bold" fill="#334155" text-anchor="middle">Game of Chance Spinning Wheel</text>
</svg>'''

# =========================================================================
# 50 EASY QUESTIONS (Definitions, coin, die, card fundamentals, P(E) ranges)
# =========================================================================
add_q("easy",
      "The theoretical (classical) probability of an event E is defined as:",
      "Number of outcomes favourable to E / Total number of all possible outcomes",
      "Total outcomes / Favourable outcomes",
      "Number of non-favourable outcomes / Total outcomes",
      "Number of trials / Number of events",
      "A",
      "NCERT Section 14.1: P(E) = (Number of outcomes favourable to E) / (Number of all possible outcomes of the experiment).")

add_q("easy",
      "Who introduced the classical definition of probability in 1812 in his work 'Théorie analytique des probabilités'?",
      "Pierre-Simon Laplace", "Carl Friedrich Gauss", "Blaise Pascal", "Isaac Newton",
      "A",
      "NCERT Section 14.1 historical note: The classical definition of probability was given by Pierre-Simon Laplace in 1812.")

add_q("easy",
      "The probability of an event E always satisfies which inequality?",
      "0 ≤ P(E) ≤ 1", "0 < P(E) < 1", "-1 ≤ P(E) ≤ 1", "P(E) ≥ 1",
      "A",
      "NCERT Section 14.1: The probability of any event E lies between 0 and 1 inclusive: 0 ≤ P(E) ≤ 1.")

add_q("easy",
      "The probability of an event that is impossible to happen (an impossible event) is:",
      "0", "1", "1/2", "-1",
      "A",
      "NCERT Section 14.1: The probability of an impossible event is 0.")

add_q("easy",
      "The probability of an event that is certain (or sure) to happen is:",
      "1", "0", "100", "1/2",
      "A",
      "NCERT Section 14.1: The probability of a certain (or sure) event is 1.")

add_q("easy",
      "If E and Ē are complementary events (event E and event 'not E'), then P(E) + P(Ē) equals:",
      "1", "0", "1/2", "2",
      "A",
      "NCERT Section 14.1: P(E) + P(not E) = 1, so P(Ē) = 1 - P(E).")

add_q("easy",
      "If P(E) = 0.05, what is the probability of 'not E'?",
      "0.95", "0.05", "0.5", "0.90",
      "A",
      "NCERT Exercise 14.1 Q5: P(not E) = 1 - P(E) = 1 - 0.05 = 0.95.")

add_q("easy",
      "If P(E) = 0.68, what is the value of P(not E)?",
      "0.32", "0.68", "1.32", "-0.32",
      "A",
      "P(not E) = 1 - 0.68 = 0.32.")

add_q("easy",
      "The sum of the probabilities of all the elementary events of an experiment is:",
      "1", "0", "Equal to number of outcomes", "Infinite",
      "A",
      "NCERT Section 14.1: The sum of the probabilities of all elementary events of an experiment is always 1.")

add_q("easy",
      "Which of the following CANNOT be the probability of an event?",
      "-1.5", "2/3", "15%", "0.7",
      "A",
      "NCERT Exercise 14.1 Q4: Probability can never be negative (0 ≤ P ≤ 1). Hence -1.5 cannot be a probability.")

add_q("easy",
      "Which of the following numbers cannot represent a probability?",
      "5/4", "3/4", "0%", "0.999",
      "A",
      "5/4 = 1.25 > 1. Probability can never exceed 1.")

add_q("easy",
      "When a single fair coin is tossed, what is the probability of getting a head?",
      "1/2", "1", "1/4", "0",
      "A",
      "NCERT Example 1: Outcomes are {H, T} (total 2). Favourable to head is 1. P(H) = 1/2.")

add_q("easy",
      "When a single fair die is thrown once, what is the probability of getting a number greater than 4?",
      "1/3 (2/6)", "1/2", "2/3", "1/6",
      "A",
      "NCERT Example 3: Numbers greater than 4 are {5, 6} (2 outcomes). P(>4) = 2/6 = 1/3.")

add_q("easy",
      "When a single fair die is thrown once, what is the probability of getting a number less than or equal to 4?",
      "2/3 (4/6)", "1/2", "1/3", "5/6",
      "A",
      "Outcomes are {1, 2, 3, 4} (4 outcomes). P(≤4) = 4/6 = 2/3.")

add_q("easy",
      "When a die is thrown once, the probability of getting an odd number is:",
      "1/2", "1/3", "2/3", "1/6",
      "A",
      "Odd numbers on a die are {1, 3, 5} (3 outcomes). P(odd) = 3/6 = 1/2.")

add_q("easy",
      "When a die is thrown once, the probability of getting a prime number is:",
      "1/2", "1/3", "2/3", "1/6",
      "A",
      "Prime numbers on a die are {2, 3, 5} (3 outcomes). Note that 1 is NOT prime. P(prime) = 3/6 = 1/2.")

add_q("easy",
      "When a die is thrown once, what is the probability of getting the number 8?",
      "0", "1/8", "1/6", "1",
      "A",
      "A standard die has faces 1 to 6. Getting 8 is an impossible event, so P(8) = 0.")

add_q("easy",
      "How many total cards are there in a standard deck of playing cards?",
      "52", "54", "48", "36",
      "A",
      "A standard deck contains 52 playing cards.",
      svg_card_suits)

add_q("easy",
      "How many suits are there in a standard deck of 52 cards?",
      "4 (Spades, Hearts, Diamonds, Clubs)",
      "2", "13", "26",
      "A",
      "There are 4 suits of 13 cards each: Spades, Hearts, Diamonds, Clubs.",
      svg_card_suits)

add_q("easy",
      "In a 52-card deck, how many cards are RED and how many are BLACK?",
      "26 Red and 26 Black",
      "13 Red and 39 Black",
      "20 Red and 32 Black",
      "52 Red",
      "A",
      "Hearts and Diamonds are Red (13 + 13 = 26). Spades and Clubs are Black (13 + 13 = 26).",
      svg_card_suits)

add_q("easy",
      "How many face cards (Kings, Queens, Jacks) are there in a standard pack of 52 cards?",
      "12", "16", "4", "8",
      "A",
      "Each suit has 3 face cards (King, Queen, Jack). 4 suits × 3 = 12 face cards.",
      svg_card_suits)

add_q("easy",
      "Is an Ace considered a face card in standard probability theory?",
      "No, only Kings, Queens, and Jacks have faces drawn on them",
      "Yes, Ace is the highest face card",
      "Yes, all picture cards including Ace are face cards",
      "It depends on the card game",
      "A",
      "NCERT Section 14.1: The cards with pictures on them are King, Queen, and Jack (12 in total). Aces are NOT face cards.")

add_q("easy",
      "What is the probability of drawing a King of red colour from a well-shuffled deck of 52 cards?",
      "2/52 = 1/26", "4/52 = 1/13", "1/52", "26/52 = 1/2",
      "A",
      "NCERT Exercise 14.1 Q14: Red Kings are King of Hearts and King of Diamonds (2 cards). P = 2/52 = 1/26.")

add_q("easy",
      "What is the probability of drawing a face card from a deck of 52 cards?",
      "12/52 = 3/13", "4/52 = 1/13", "16/52 = 4/13", "1/2",
      "A",
      "There are 12 face cards. P(face card) = 12/52 = 3/13.")

add_q("easy",
      "What is the probability of drawing a red face card from a deck of 52 cards?",
      "6/52 = 3/26", "12/52 = 3/13", "2/52 = 1/26", "1/52",
      "A",
      "There are 6 red face cards (3 Hearts + 3 Diamonds). P = 6/52 = 3/26.")

add_q("easy",
      "What is the probability of drawing the Jack of hearts from a deck of 52 cards?",
      "1/52", "4/52", "1/13", "1/26",
      "A",
      "There is only one Jack of Hearts in the entire deck: P = 1/52.")

add_q("easy",
      "What is the probability of drawing a spade from a standard deck of 52 cards?",
      "13/52 = 1/4", "1/52", "4/52 = 1/13", "26/52 = 1/2",
      "A",
      "There are 13 spades in a deck. P = 13/52 = 1/4.")

add_q("easy",
      "What is the probability of drawing the Queen of diamonds from a 52-card deck?",
      "1/52", "1/13", "1/26", "4/52",
      "A",
      "There is exactly one Queen of Diamonds: P = 1/52.")

add_q("easy",
      "When two coins are tossed simultaneously, what is the total number of possible outcomes?",
      "4 ({HH, HT, TH, TT})", "2", "3", "8",
      "A",
      "Total outcomes = 2 × 2 = 4: {HH, HT, TH, TT}.")

add_q("easy",
      "When two coins are tossed simultaneously, what is the probability of getting at least one head?",
      "3/4", "1/2", "1/4", "1",
      "A",
      "Outcomes with at least one head are {HH, HT, TH} (3 outcomes). P = 3/4.")

add_q("easy",
      "When two coins are tossed simultaneously, what is the probability of getting exactly two tails?",
      "1/4", "1/2", "3/4", "0",
      "A",
      "The only outcome is {TT}. P = 1/4.")

add_q("easy",
      "When three coins are tossed simultaneously, what is the total number of possible outcomes?",
      "8", "6", "4", "16",
      "A",
      "Total outcomes = 2³ = 8: {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT}.")

add_q("easy",
      "A bag contains 3 red balls and 5 black balls. A ball is drawn at random. What is the probability that the ball drawn is red?",
      "3/8", "5/8", "3/5", "1/8",
      "A",
      "Total balls = 3 + 5 = 8. Red balls = 3. P(red) = 3/8.")

add_q("easy",
      "In the same bag (3 red, 5 black), what is the probability that the ball drawn is NOT red?",
      "5/8", "3/8", "1/2", "1",
      "A",
      "P(not red) = 1 - P(red) = 1 - 3/8 = 5/8 (or black balls / total = 5/8).")

add_q("easy",
      "A box contains 5 red marbles, 8 white marbles, and 4 green marbles. Total marbles is:",
      "17", "13", "12", "20",
      "A",
      "Total = 5 + 8 + 4 = 17 marbles.")

add_q("easy",
      "In the same box (5 red, 8 white, 4 green), what is the probability that a marble drawn at random is white?",
      "8/17", "5/17", "4/17", "9/17",
      "A",
      "P(white) = 8 / 17.")

add_q("easy",
      "In the same box, what is the probability that the marble drawn is NOT green?",
      "13/17", "4/17", "5/17", "8/17",
      "A",
      "Not green means red or white = 5 + 8 = 13. P(not green) = 13 / 17.")

add_q("easy",
      "A piggy bank contains a hundred 50p coins, fifty ₹1 coins, twenty ₹2 coins, and ten ₹5 coins. What is the total number of coins in the piggy bank?",
      "180", "150", "200", "100",
      "A",
      "NCERT Exercise 14.1 Q10: Total = 100 + 50 + 20 + 10 = 180 coins.")

add_q("easy",
      "In the piggy bank (total 180 coins), what is the probability that a coin falling out will be a 50p coin?",
      "100/180 = 5/9", "50/180 = 5/18", "1/2", "10/180 = 1/18",
      "A",
      "P(50p) = 100 / 180 = 5/9.")

add_q("easy",
      "In the piggy bank, what is the probability that the coin will NOT be a ₹5 coin?",
      "170/180 = 17/18", "10/180 = 1/18", "1/2", "160/180",
      "A",
      "Non-₹5 coins = 180 - 10 = 170. P(not ₹5) = 170 / 180 = 17/18.")

add_q("easy",
      "Gopi buys a fish from a shop for his aquarium. The shopkeeper takes out one fish at random from a tank containing 5 male fish and 8 female fish. What is the probability that the fish taken out is a male fish?",
      "5/13", "8/13", "5/8", "1/13",
      "A",
      "NCERT Exercise 14.1 Q11: Total fish = 5 + 8 = 13. Male fish = 5. P(male) = 5/13.")

add_q("easy",
      "A game of chance consists of spinning an arrow which comes to rest pointing at one of the numbers 1, 2, 3, 4, 5, 6, 7, 8. What is the probability that it will point at 8?",
      "1/8", "1/4", "1/2", "8/8",
      "A",
      "NCERT Exercise 14.1 Q12: Total numbers = 8. Outcome 8 is 1. P(8) = 1/8.",
      svg_spinning_arrow)

add_q("easy",
      "In the spinning wheel with numbers 1 to 8, what is the probability that the arrow will point at an odd number?",
      "4/8 = 1/2", "1/8", "3/8", "5/8",
      "A",
      "Odd numbers are {1, 3, 5, 7} (4 numbers). P(odd) = 4/8 = 1/2.",
      svg_spinning_arrow)

add_q("easy",
      "In the spinning wheel with numbers 1 to 8, what is the probability that the arrow will point at a number greater than 2?",
      "6/8 = 3/4", "1/2", "5/8", "1/4",
      "A",
      "Numbers greater than 2 are {3, 4, 5, 6, 7, 8} (6 numbers). P(>2) = 6/8 = 3/4.")

add_q("easy",
      "In the spinning wheel with numbers 1 to 8, what is the probability that it will point at a number less than 9?",
      "1 (Sure event)", "0", "7/8", "1/2",
      "A",
      "All 8 numbers {1, 2, 3, 4, 5, 6, 7, 8} are less than 9. P(<9) = 8/8 = 1.")

add_q("easy",
      "A lot of 20 bulbs contains 4 defective ones. One bulb is drawn at random from the lot. What is the probability that this bulb is defective?",
      "4/20 = 1/5 (0.2)", "16/20 = 4/5", "1/20", "1/4",
      "A",
      "NCERT Exercise 14.1 Q17(i): P(defective) = 4 / 20 = 1/5 = 0.2.")

add_q("easy",
      "In the same lot of 20 bulbs (4 defective, 16 good), what is the probability that the bulb drawn is NOT defective?",
      "16/20 = 4/5 (0.8)", "1/5", "1/4", "3/5",
      "A",
      "P(good) = 16 / 20 = 4/5 = 0.8.")

add_q("easy",
      "When two dice are thrown simultaneously, how many total elementary outcomes are possible?",
      "36", "12", "6", "64",
      "A",
      "Each die has 6 faces. Total outcomes = 6 × 6 = 36.",
      svg_two_dice_grid)

add_q("easy",
      "When two dice are thrown, how many outcomes result in a 'doublet' (same number on both dice)?",
      "6 ({(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)})",
      "12", "36", "1",
      "A",
      "The doublets are (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) (6 outcomes).",
      svg_two_dice_grid)

add_q("easy",
      "What is the probability of getting a doublet when two dice are thrown?",
      "6/36 = 1/6", "1/36", "1/12", "1/2",
      "A",
      "P(doublet) = 6 / 36 = 1/6.")

# =========================================================================
# 10 MEDIUM QUESTIONS (Two-dice sums, card combinations, conditional scenarios)
# =========================================================================
add_q("medium",
      "Two dice are thrown at the same time. What is the probability that the sum of the two numbers appearing on the top of the dice is 8?",
      "5/36", "6/36", "4/36", "8/36",
      "A",
      "NCERT Example 13 / Ex 14.1 Q22: Pairs summing to 8: (2,6), (3,5), (4,4), (5,3), (6,2) (5 outcomes). P = 5/36.")

add_q("medium",
      "Two dice are thrown at the same time. What is the probability that the sum of the two numbers is 13?",
      "0", "1/36", "2/36", "1/18",
      "A",
      "NCERT Example 13(ii): The maximum possible sum is 6 + 6 = 12. A sum of 13 is impossible, so P = 0.")

add_q("medium",
      "Two dice are thrown at the same time. What is the probability that the sum of the two numbers is less than or equal to 12?",
      "1 (Sure event)", "35/36", "1/2", "11/12",
      "A",
      "NCERT Example 13(iii): All 36 outcomes have a sum between 2 and 12. Every sum is ≤ 12. P = 36/36 = 1.")

add_q("medium",
      "What is the most probable sum when two fair dice are thrown simultaneously?",
      "7 (probability 6/36 = 1/6)",
      "8", "6", "10",
      "A",
      "Sum of 7 has 6 pairs: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). P = 6/36 = 1/6, which is higher than any other sum.")

add_q("medium",
      "Five cards — the ten, jack, queen, king, and ace of diamonds — are well-shuffled with their face downwards. One card is picked up at random. What is the probability that the card is the queen?",
      "1/5", "1/52", "4/5", "1/13",
      "A",
      "NCERT Exercise 14.1 Q15(i): Total cards = 5. Queen is 1 card. P(Queen) = 1/5.")

add_q("medium",
      "If the queen is drawn and put aside (not replaced), what is the probability that the second card picked up is an ace?",
      "1/4", "1/5", "4/5", "0",
      "A",
      "NCERT Exercise 14.1 Q15(ii)(a): Remaining cards = 4 (ten, jack, king, ace). Number of aces = 1. P(Ace) = 1/4.")

add_q("medium",
      "In the same scenario (queen put aside, 4 cards remaining), what is the probability that the second card picked up is a queen?",
      "0", "1/4", "1/5", "1",
      "A",
      "NCERT Exercise 14.1 Q15(ii)(b): The only queen was already set aside, so there are 0 queens remaining. P(Queen) = 0.")

add_q("medium",
      "12 defective pens are accidentally mixed with 132 good ones. It is not possible to just look at a pen and tell whether it is defective. One pen is taken out at random. Determine the probability that the pen taken out is a good one:",
      "11/12 (132/144)", "1/12 (12/144)", "132/132", "12/132",
      "A",
      "NCERT Exercise 14.1 Q16: Total pens = 12 + 132 = 144. Good pens = 132. P(good) = 132 / 144 = 11 / 12.")

add_q("medium",
      "A box contains 90 discs which are numbered from 1 to 90. If one disc is drawn at random from the box, find the probability that it bears a two-digit number:",
      "81/90 = 9/10", "80/90 = 8/9", "90/90 = 1", "10/90 = 1/9",
      "A",
      "NCERT Exercise 14.1 Q18(i): Total discs = 90. One-digit numbers are 1 to 9 (9 numbers). Two-digit numbers = 90 - 9 = 81 (from 10 to 90). P = 81 / 90 = 9/10.")

add_q("medium",
      "In the same box of 90 discs (numbered 1 to 90), what is the probability that the disc bears a perfect square number?",
      "9/90 = 1/10", "10/90 = 1/9", "8/90 = 4/45", "1/90",
      "A",
      "NCERT Exercise 14.1 Q18(ii): Perfect squares up to 90 are 1, 4, 9, 16, 25, 36, 49, 64, 81 (9 numbers). P = 9/90 = 1/10.")

# =========================================================================
# 10 HARD QUESTIONS (Geometric probability, 3-coins, non-replacement)
# =========================================================================
add_q("hard",
      "Suppose you drop a die at random on the rectangular region of dimensions 3 m × 2 m. What is the probability that it will land inside the circle with diameter 1 m (use π in answer)?",
      "π / 24", "π / 6", "π / 12", "1 / 6",
      "A",
      "NCERT Exercise 14.1 Q20: Area of rectangle = 3 × 2 = 6 m². Circle radius r = 0.5 = 1/2 m. Area of circle = π r² = π(1/2)² = π/4 m². Probability = Area of circle / Area of rectangle = (π/4) / 6 = π / 24.")

add_q("hard",
      "A game consists of tossing a one rupee coin 3 times and noting its outcome each time. Hanif wins if all the tosses give the same result, i.e., three heads or three tails, and loses otherwise. Calculate the probability that Hanif will lose the game:",
      "6/8 = 3/4", "2/8 = 1/4", "1/2", "7/8",
      "A",
      "NCERT Exercise 14.1 Q23: Total outcomes = 8. Hanif wins on {HHH, TTT} (2 outcomes). He loses on the remaining 8 - 2 = 6 outcomes. P(loses) = 6/8 = 3/4.")

add_q("hard",
      "In the box of 90 discs (numbered 1 to 90), what is the probability that the disc drawn bears a number divisible by 5?",
      "18/90 = 1/5", "19/90", "17/90", "20/90 = 2/9",
      "A",
      "NCERT Exercise 14.1 Q18(iii): Multiples of 5 are 5, 10, 15, ..., 90. Number of multiples = 90 / 5 = 18. P = 18 / 90 = 1/5.")

add_q("hard",
      "A carton consists of 100 shirts of which 88 are good, 8 have minor defects, and 4 have major defects. Jimmy, a trader, will only accept shirts that are good, but Sujatha, another trader, will only reject shirts that have major defects. One shirt is drawn at random. What is the probability that it is acceptable to Sujatha?",
      "96/100 = 0.96 (24/25)",
      "88/100 = 0.88",
      "4/100 = 0.04",
      "92/100 = 0.92",
      "A",
      "NCERT Exercise 14.1 Q21(ii): Sujatha accepts all shirts EXCEPT those with major defects (4). Acceptable to Sujatha = 100 - 4 = 96 shirts. P = 96/100 = 0.96 = 24/25.")

add_q("hard",
      "In the same carton of 100 shirts (88 good, 8 minor, 4 major), what is the probability that a shirt drawn is acceptable to Jimmy?",
      "88/100 = 0.88 (22/25)",
      "96/100 = 0.96",
      "12/100 = 0.12",
      "8/100 = 0.08",
      "A",
      "NCERT Exercise 14.1 Q21(i): Jimmy accepts ONLY good shirts. Good shirts = 88. P = 88 / 100 = 0.88.")

add_q("hard",
      "From a deck of 52 cards, all the four queens are removed. A card is drawn from the remaining cards. What is the probability of getting a queen?",
      "0", "4/48", "1/48", "1/12",
      "A",
      "All 4 queens were removed, leaving 0 queens in the remaining 48 cards. P(queen) = 0 / 48 = 0.")

add_q("hard",
      "In the remaining 48 cards (after removing all 4 queens), what is the probability of drawing a face card?",
      "8/48 = 1/6", "12/48 = 1/4", "8/52 = 2/13", "1/4",
      "A",
      "Original face cards were 12. Removing 4 queens leaves 4 Kings + 4 Jacks = 8 face cards. Total cards = 48. P = 8 / 48 = 1/6.")

add_q("hard",
      "Two friends were born in the year 2000 (a leap year). What is the probability that they have the same birthday?",
      "1 / 366", "1 / 365", "2 / 366", "365 / 366",
      "A",
      "The year 2000 was a leap year with 366 days. For any birthday of the first friend, the second friend has 1 matching day out of 366: P = 1 / 366.")

add_q("hard",
      "Two friends were born in the year 2021 (a non-leap year). What is the probability that they have DIFFERENT birthdays?",
      "364 / 365", "1 / 365", "365 / 366", "1 / 2",
      "A",
      "P(same birthday) = 1 / 365. P(different birthdays) = 1 - 1/365 = 364 / 365.")

add_q("hard",
      "What is the probability that an ordinary (non-leap) year has 53 Sundays?",
      "1 / 7", "2 / 7", "53 / 365", "52 / 365",
      "A",
      "An ordinary year has 365 days = 52 weeks + 1 extra day. The 52 weeks guarantee 52 Sundays. For a 53rd Sunday, the 1 extra day must be a Sunday. Out of 7 days of the week, P = 1/7.")

# =========================================================================
# 20 TRICKY QUESTIONS (Common student pitfalls, leap year, dice misconceptions)
# =========================================================================
add_q("tricky",
      "What is the probability that a LEAP YEAR has 53 Sundays?",
      "2 / 7", "1 / 7", "53 / 366", "2 / 366",
      "A",
      "A leap year has 366 days = 52 weeks + 2 extra days. The 2 consecutive extra days can be (Sun,Mon), (Mon,Tue), (Tue,Wed), (Wed,Thu), (Thu,Fri), (Fri,Sat), or (Sat,Sun) (7 pairs). 2 of these pairs include Sunday: (Sat,Sun) and (Sun,Mon). P = 2/7!")

add_q("tricky",
      "What is the probability that a leap year has 53 Sundays AND 53 Mondays?",
      "1 / 7", "2 / 7", "0", "1 / 366",
      "A",
      "For both Sunday and Monday to occur 53 times, the 2 extra days must be Sunday and Monday together. There is only 1 such pair out of 7: (Sun, Mon). P = 1/7.")

add_q("tricky",
      "What is the probability that a leap year has 53 Sundays OR 53 Mondays?",
      "3 / 7", "2 / 7", "4 / 7", "1 / 7",
      "A",
      "Pairs with Sunday = {(Sat,Sun), (Sun,Mon)} (2). Pairs with Monday = {(Sun,Mon), (Mon,Tue)} (2). Total distinct pairs with Sunday OR Monday = {(Sat,Sun), (Sun,Mon), (Mon,Tue)} (3 pairs). P = 3/7!")

add_q("tricky",
      "A student argues: 'There are only two possible outcomes when taking an exam: pass or fail. Therefore, the probability of passing is 1/2.' What is wrong with this reasoning?",
      "The two outcomes 'pass' and 'fail' are not necessarily equally likely",
      "There are three outcomes: pass, fail, absent",
      "Probability cannot be applied to exams",
      "The probability of passing is always 1",
      "A",
      "NCERT Section 14.1 Concept: Theoretical probability P = m/n is valid ONLY when the outcomes are EQUALLY LIKELY. Passing and failing depend on preparation and are not equally likely.")

add_q("tricky",
      "A student tosses two dice and says: 'The possible sums are 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 (total 11 outcomes). Therefore, each sum has probability 1/11.' Why is this reasoning FALSE?",
      "The 11 sums are NOT equally likely outcomes",
      "There are 12 sums, not 11",
      "Sum 7 is impossible",
      "Two dice have 64 outcomes",
      "A",
      "NCERT Exercise 14.1 Q22 Note: The 11 sums do not have equal probabilities (e.g. sum 2 has 1/36, while sum 7 has 6/36). You cannot divide by 11!")

add_q("tricky",
      "If a fair coin is tossed 9 times and lands on Heads every single time, what is the probability that the 10th toss lands on Heads?",
      "1/2", "(1/2)¹⁰", "0.9", "1",
      "A",
      "Gambler's Fallacy! Each coin toss is an independent event. The coin has no memory of past tosses, so the probability of Heads on the 10th toss remains exactly 1/2.")

add_q("tricky",
      "In three tosses of a fair coin, what is the probability of getting AT MOST two heads?",
      "7 / 8", "3 / 8", "1 / 2", "3 / 4",
      "A",
      "'At most two heads' means 0, 1, or 2 heads. The ONLY outcome excluded is 3 heads {HHH}. P = 1 - P(HHH) = 1 - 1/8 = 7/8.")

add_q("tricky",
      "In three tosses of a fair coin, what is the probability of getting AT LEAST two heads?",
      "4 / 8 = 1/2", "3 / 8", "7 / 8", "1 / 4",
      "A",
      "'At least two heads' means 2 or 3 heads: {HHT, HTH, THH, HHH} (4 outcomes). P = 4/8 = 1/2.")

add_q("tricky",
      "When rolling two dice, what is the probability that the product of the two numbers is odd?",
      "9 / 36 = 1/4", "1/2", "3/4", "18/36",
      "A",
      "The product of two integers is odd IF AND ONLY IF both numbers are odd. Each die has 3 odd numbers {1, 3, 5}. Favourable outcomes = 3 × 3 = 9. P = 9/36 = 1/4.")

add_q("tricky",
      "When rolling two dice, what is the probability that the product of the two numbers is even?",
      "27 / 36 = 3/4", "1/2", "1/4", "18/36",
      "A",
      "P(even product) = 1 - P(odd product) = 1 - 1/4 = 3/4.")

add_q("tricky",
      "A number x is chosen at random from the numbers -3, -2, -1, 0, 1, 2, 3. What is the probability that |x| < 2?",
      "3 / 7", "2 / 7", "4 / 7", "5 / 7",
      "A",
      "Total numbers = 7. |x| < 2 means x ∈ {-1, 0, 1} (3 numbers). P = 3/7.")

add_q("tricky",
      "A number x is chosen from -3, -2, -1, 0, 1, 2, 3. What is the probability that x² ≤ 4?",
      "5 / 7", "4 / 7", "3 / 7", "1",
      "A",
      "x² ≤ 4 means x ∈ {-2, -1, 0, 1, 2} (5 numbers). P = 5/7.")

add_q("tricky",
      "A card is drawn from a well-shuffled pack of 52 cards. What is the probability that the card drawn is NEITHER a king NOR a queen?",
      "44 / 52 = 11/13", "48 / 52 = 12/13", "8 / 52 = 2/13", "1/2",
      "A",
      "Total Kings and Queens = 4 + 4 = 8. Cards that are neither = 52 - 8 = 44. P = 44/52 = 11/13.")

add_q("tricky",
      "What is the probability of drawing a card that is a King OR a Spade from a 52-card deck?",
      "16 / 52 = 4/13", "17 / 52", "13 / 52 = 1/4", "4 / 52",
      "A",
      "There are 4 Kings and 13 Spades. But the King of Spades is counted in both! Favourable = 4 + 13 - 1 = 16. P = 16/52 = 4/13.")

add_q("tricky",
      "What is the probability of drawing a card that is a Red card OR a King?",
      "28 / 52 = 7/13", "30 / 52", "26 / 52 = 1/2", "14 / 52",
      "A",
      "Red cards = 26. Kings = 4 (2 red, 2 black). Total favourable = 26 red cards + 2 black kings = 28 cards. P = 28/52 = 7/13.")

add_q("tricky",
      "A die is thrown twice. What is the probability that 5 will not come up either time?",
      "25 / 36", "11 / 36", "1 / 6", "5 / 6",
      "A",
      "NCERT Exercise 14.1 Q24(i): Outcomes where 5 comes up at least once = 6 (first die is 5) + 6 (second die is 5) - 1 (5,5) = 11 outcomes. Outcomes where 5 does not appear = 36 - 11 = 25. P = 25/36.")

add_q("tricky",
      "A die is thrown twice. What is the probability that 5 will come up at least once?",
      "11 / 36", "25 / 36", "1 / 6", "10 / 36",
      "A",
      "NCERT Exercise 14.1 Q24(ii): P(5 at least once) = 1 - P(5 not either time) = 1 - 25/36 = 11/36.")

add_q("tricky",
      "In a lottery, there are 10 prizes and 25 blanks. What is the probability of getting a prize?",
      "10 / 35 = 2/7", "10 / 25 = 2/5", "25 / 35 = 5/7", "1/10",
      "A",
      "Total tickets = 10 + 25 = 35. Prizes = 10. P(prize) = 10 / 35 = 2/7.")

add_q("tricky",
      "A girl calculates that the probability of her winning the first prize in a lottery is 0.08. If 6000 tickets are sold, how many tickets did she buy?",
      "480", "750", "48", "600",
      "A",
      "P(winning) = Tickets bought / Total tickets ⇒ 0.08 = x / 6000 ⇒ x = 6000 × 0.08 = 480 tickets.")

add_q("tricky",
      "If an unbiased die is rolled, what is the probability of getting a number that is a multiple of both 2 and 3?",
      "1 / 6", "1 / 2", "1 / 3", "2 / 3",
      "A",
      "A multiple of both 2 and 3 must be a multiple of LCM(2,3) = 6. On a die, the only multiple of 6 is {6} (1 outcome). P = 1/6.")

# =========================================================================
# 10 VERY HARD QUESTIONS (Deep multi-concept synthesis, Olympiad/Exemplar)
# =========================================================================
add_q("very_hard",
      "A bag contains 5 red balls and some blue balls. If the probability of drawing a blue ball is double that of a red ball, determine the number of blue balls in the bag:",
      "10", "15", "5", "20",
      "A",
      "NCERT Exercise 14.2 Q1: Let blue balls be x. Total = 5 + x. P(blue) = x / (5 + x). P(red) = 5 / (5 + x). Given P(blue) = 2 × P(red) ⇒ x / (5 + x) = 2 × [5 / (5 + x)] ⇒ x = 10 blue balls.")

add_q("very_hard",
      "A box contains 12 balls out of which x are black. If one ball is drawn at random, the probability is x/12. If 6 more black balls are put in the box, the probability of drawing a black ball is now double of what it was before. Find x:",
      "3", "4", "2", "6",
      "A",
      "NCERT Exercise 14.2 Q2: Initially P1 = x / 12. After adding 6 black balls: total = 18, black = x + 6. P2 = (x + 6) / 18. Given P2 = 2 P1 ⇒ (x + 6) / 18 = 2(x / 12) = x / 6 ⇒ x + 6 = 3x ⇒ 2x = 6 ⇒ x = 3.")

add_q("very_hard",
      "A jar contains 24 marbles, some are green and others are blue. If a marble is drawn at random, the probability that it is green is 2/3. Find the number of blue balls in the jar:",
      "8", "16", "12", "6",
      "A",
      "NCERT Exercise 14.2 Q3: P(green) = 2/3. Number of green marbles = (2/3) × 24 = 16. Blue marbles = 24 - 16 = 8.")

add_q("very_hard",
      "Two dice are thrown simultaneously. What is the probability that the difference of numbers on the two dice is 2?",
      "8 / 36 = 2/9", "4 / 36 = 1/9", "6 / 36 = 1/6", "10 / 36 = 5/18",
      "A",
      "Pairs with |a - b| = 2: (1,3), (2,4), (3,5), (4,6), (3,1), (4,2), (5,3), (6,4) (8 pairs). P = 8/36 = 2/9.")

add_q("very_hard",
      "In a game of archery, an arrow is shot at a circular target of radius 14 cm with an inner bullseye of radius 7 cm. Assuming the arrow hits the target randomly, what is the probability of hitting the bullseye?",
      "1 / 4", "1 / 2", "1 / √2", "1 / 8",
      "A",
      "Area of bullseye = π(7)² = 49π. Area of whole target = π(14)² = 196π. Probability = 49π / 196π = 49 / 196 = 1/4.")

add_q("very_hard",
      "Three distinct integers are selected at random from 1 to 10. What is the probability that their sum is even?",
      "1 / 2", "5 / 12", "7 / 12", "1 / 3",
      "A",
      "Numbers 1 to 10 contain 5 evens and 5 odds. Total ways to pick 3 = C(10,3) = 120. Sum is even if: (i) all 3 are even: C(5,3) = 10, or (ii) 1 even and 2 odds: C(5,1) × C(5,2) = 5 × 10 = 50. Total even ways = 10 + 50 = 60. P = 60 / 120 = 1/2.")

add_q("very_hard",
      "If a number x is chosen at random from {1, 2, 3} and a number y is chosen at random from {1, 4, 9}, what is the probability that the product xy is less than 9?",
      "5 / 9", "4 / 9", "2 / 3", "1 / 3",
      "A",
      "Total pairs = 3 × 3 = 9. Products xy: (1,1)->1, (1,4)->4, (1,9)->9; (2,1)->2, (2,4)->8, (2,9)->18; (3,1)->3, (3,4)->12, (3,9)->27. Products strictly < 9 are 1, 4, 2, 8, 3 (5 outcomes). P = 5/9.")

add_q("very_hard",
      "Two dice are thrown. What is the probability that the sum of the numbers appearing on the two dice is a prime number?",
      "15 / 36 = 5/12", "12 / 36 = 1/3", "18 / 36 = 1/2", "14 / 36 = 7/18",
      "A",
      "Possible prime sums from 2 to 12 are 2, 3, 5, 7, 11. Sum 2: (1,1) -> 1 pair. Sum 3: (1,2),(2,1) -> 2 pairs. Sum 5: (1,4),(2,3),(3,2),(4,1) -> 4 pairs. Sum 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) -> 6 pairs. Sum 11: (5,6),(6,5) -> 2 pairs. Total prime pairs = 1 + 2 + 4 + 6 + 2 = 15. P = 15/36 = 5/12.")

add_q("very_hard",
      "A card is drawn from a well-shuffled pack of 52 cards. What is the probability that the card drawn is an Honor card (Ace, King, Queen, or Jack)?",
      "16 / 52 = 4/13", "12 / 52 = 3/13", "4 / 52 = 1/13", "20 / 52 = 5/13",
      "A",
      "Each of the 4 suits has 4 honor cards (A, K, Q, J). Total honor cards = 4 × 4 = 16. P = 16/52 = 4/13.")

add_q("very_hard",
      "If the odds in favour of an event E are 3 : 5, what is the probability of the event E occurring?",
      "3 / 8", "3 / 5", "5 / 8", "5 / 3",
      "A",
      "Odds in favour = (Favourable) : (Unfavourable) = a : b = 3 : 5. Probability P(E) = a / (a + b) = 3 / (3 + 5) = 3/8.")

# Verification of distribution
tiers = {}
for q in questions:
    d = q["difficulty"]
    tiers[d] = tiers.get(d, 0) + 1

print(f"Total questions generated: {len(questions)}")
print(f"Tier distribution: {tiers}")

# Output JS content
output_path = "modules/testseries/data/class10/mathematics/chapter14_mathematics.js"
header = """/* =========================================================================
   ELITE CLASSES — MASTER CBT CHAPTER ASSESSMENT
   Class 10 Mathematics — Chapter 14: Probability
   Total Questions: 100 | Duration: 90 Mins | Total Marks: 400
   Negative Marking: -1.0 | Marks per Correct: +4.0
   Standard Distribution: 50 Easy | 10 Medium | 10 Hard | 20 Tricky | 10 Very Hard
   ========================================================================= */

const Class10MathematicsChapter14FullBank = {
    id: 'ts_c10_math_ch14',
    title: 'Chapter 14: Probability Assessment',
    cls: 'Class 10',
    subject: 'Mathematics',
    duration_mins: 90,
    total_marks: 400,
    passing_marks: 160,
    negative_marking: 1.00,
    marks_per_question: 4,
    questions_count: 100,
    instructions: 'Comprehensive 100-Question master assessment for Class 10 NCERT Mathematics Chapter 14 (Probability). Covers classical probability definition, impossible and sure events, complementary events, single/double/triple coins, 2-dice grids, 52-card pack combinations, geometric probability, and visual SVG diagrams.',
    questions: """

footer = """
};

if (typeof window !== 'undefined') {
    if (!window.EliteTestRegistry) window.EliteTestRegistry = [];
    window.EliteTestRegistry.push(Class10MathematicsChapter14FullBank);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Class10MathematicsChapter14FullBank;
}
"""

js_content = header + json.dumps(questions, indent=4, ensure_ascii=False) + footer

with open(output_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Saved assessment to {output_path}")
