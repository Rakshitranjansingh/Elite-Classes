import json
import re
import os

# Load Chapter 2 test bank questions
with open('modules/testseries/data/class10/science/chapter2_acids_bases_salts.js', 'r', encoding='utf-8') as f:
    bank_js = f.read()

questions_raw = []
pattern = re.compile(r'\{\s*id:\s*(\d+),\s*question:\s*"([^"]+)",\s*options:\s*\[([\s\S]*?)\],\s*correct_option:\s*\'([A-D])\',\s*explanation:\s*"([^"]+)"\s*\}')

for match in pattern.finditer(bank_js):
    q_id = int(match.group(1))
    q_text = match.group(2)
    options_raw = match.group(3)
    correct_opt = match.group(4)
    explanation = match.group(5)
    
    opt_pattern = re.compile(r'\{\s*key:\s*\'([A-D])\',\s*text:\s*"([^"]+)"\s*\}')
    options = []
    correct_answer = ""
    for opt_match in opt_pattern.finditer(options_raw):
        k = opt_match.group(1)
        t = opt_match.group(2)
        options.append(t)
        if k == correct_opt:
            correct_answer = t
            
    questions_raw.append({
        'id': q_id,
        'question': q_text,
        'options': options,
        'answer': correct_answer,
        'explanation': explanation
    })

print(f"Extracted {len(questions_raw)} test bank questions.")

def get_bank_q(num):
    for q in questions_raw:
        if q['id'] == num:
            return q
    raise ValueError(f"Question {num} not found")

def clean_txt(s):
    return s.replace("NCERT", "curriculum").strip()

# Complete list of 20 modules with full academic depth
modules_config = [
    # 1. Natural & Synthetic Indicators
    {
        "id": "m01", "num": 1,
        "title": "Natural & Synthetic Acid-Base Indicators",
        "tagline": "Distinguishing acids and bases visually using litmus, turmeric, phenolphthalein, and methyl orange.",
        "theory": """
            <p>An <strong>indicator</strong> is a chemical dye that changes colour when exposed to an acidic or basic medium, allowing rapid testing of chemical nature.</p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🔬 Natural Indicators:</strong>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li><strong>Litmus:</strong> Extracted from <em>lichen</em> (Thallophyta division). Neutral litmus solution is <strong>purple</strong>. Acids turn blue litmus <strong>red</strong>; bases turn red litmus <strong>blue</strong>.</li>
                    <li><strong>Turmeric:</strong> Yellow in acidic/neutral medium; turns <strong>reddish-brown</strong> in basic medium (such as laundry soap).</li>
                    <li><strong>Flower Petals:</strong> <em>Hydrangea</em> blooms blue in acidic soil and pink in basic soil. <em>Petunia</em> and <em>Geranium</em> petals also act as natural pH indicators.</li>
                </ul>
            </div>
            <div class="activity-box" style="background:#fefce8; border-left:4px solid #eab308; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🧪 Synthetic Indicators:</strong>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li><strong>Phenolphthalein:</strong> Colourless in acidic and neutral solutions; turns vibrant <strong>pink in basic</strong> solutions.</li>
                    <li><strong>Methyl Orange:</strong> Turns distinct <strong>red in acidic</strong> medium and bright <strong>yellow in basic</strong> medium.</li>
                </ul>
            </div>
        """,
        "points": [
            "Neutral litmus is purple; blue litmus turns red in acid, red litmus turns blue in base.",
            "Phenolphthalein is colourless in acid and pink in alkaline medium.",
            "Methyl orange turns red in acid and yellow in base.",
            "Turmeric turns reddish-brown with basic substances like soap."
        ],
        "notes": ["Remember: Phenolphthalein is colourless in acid, while methyl orange is red in acid."],
        "bank_ids": [1, 2, 3, 4, 6],
        "extra": [
            {"q": "A drop of a clear liquid turns phenolphthalein pink. What will happen if a drop of methyl orange is added to the same liquid?", "opts": ["It will turn red", "It will turn yellow", "It will remain colourless", "It will turn purple"], "ans": "It will turn yellow", "exp": "Turning phenolphthalein pink proves the liquid is basic. Methyl orange turns yellow in basic solutions."},
            {"q": "Which of the following natural indicators will turn reddish-brown when exposed to baking soda solution?", "opts": ["Blue litmus", "Turmeric paste", "Phenolphthalein", "Methyl orange"], "ans": "Turmeric paste", "exp": "Baking soda is a mild base. Turmeric contains curcumin which turns reddish-brown in basic solutions."},
            {"q": "If a solution turns red litmus paper blue, what is its expected action on phenolphthalein?", "opts": ["Remains colourless", "Turns pink", "Turns orange", "Turns milky white"], "ans": "Turns pink", "exp": "Turning red litmus blue indicates an alkaline solution. Bases turn phenolphthalein pink."},
            {"q": "Which plant flower petals naturally act as an acid-base indicator by changing colour according to soil pH?", "opts": ["Rose", "Hydrangea", "Sunflower", "Marigold"], "ans": "Hydrangea", "exp": "Hydrangea flowers bloom blue in acidic soil and pink in alkaline soil."},
            {"q": "What is the colour of methyl orange indicator when added to dilute hydrochloric acid (HCl)?", "opts": ["Yellow", "Red", "Pink", "Colourless"], "ans": "Red", "exp": "Dilute HCl is acidic. Methyl orange turns red in acidic solutions."}
        ]
    },

    # 2. Olfactory Indicators & Natural Acids
    {
        "id": "m02", "num": 2,
        "title": "Olfactory Indicators & Natural Organic Acids",
        "tagline": "Aroma shifts in acidic/basic media and natural organic acids present in daily food items.",
        "theory": """
            <p><strong>Olfactory indicators</strong> are substances whose characteristic odour changes depending on whether they are mixed with an acid or a base.</p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>👃 Key Olfactory Indicators:</strong>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li><strong>Vanilla Essence:</strong> Retains its pleasant sweet scent in acidic medium; its scent is completely <strong>destroyed/vanishes</strong> in a basic medium (such as NaOH).</li>
                    <li><strong>Onion:</strong> Scented cloth strips retain their characteristic smell with dilute acids, but <strong>lose their smell</strong> completely in basic solutions.</li>
                    <li><strong>Clove Oil:</strong> Retains its smell with acids, but odour <strong>disappears</strong> in basic solutions.</li>
                </ul>
            </div>
            <div class="activity-box" style="background:#fefce8; border-left:4px solid #eab308; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🍋 Naturally Occurring Organic Acids:</strong>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li><strong>Curd / Sour milk:</strong> Lactic acid</li>
                    <li><strong>Vinegar:</strong> Acetic acid (Ethanoic acid, 5%–8% solution)</li>
                    <li><strong>Orange & Lemon:</strong> Citric acid & Ascorbic acid</li>
                    <li><strong>Tamarind & Grapes:</strong> Tartaric acid</li>
                    <li><strong>Tomatoes:</strong> Oxalic acid</li>
                    <li><strong>Ant / Nettle sting:</strong> Methanoic acid (Formic acid, HCOOH)</li>
                </ul>
            </div>
        """,
        "points": [
            "Olfactory indicators retain their smell in acids and lose their smell in bases.",
            "They enable visually impaired students to test acids and bases through smell.",
            "Curd has lactic acid, vinegar has acetic acid, tamarind has tartaric acid, tomatoes have oxalic acid.",
            "Ant and nettle stings inject methanoic acid (formic acid)."
        ],
        "notes": ["Bases extinguish the smell of onion, vanilla, and clove oil."],
        "bank_ids": [5, 10, 11, 12, 15],
        "extra": [
            {"q": "A visually impaired student wants to test whether a given sample is acidic or alkaline. Which indicator is best suited?", "opts": ["Litmus solution", "Phenolphthalein", "Vanilla essence", "Methyl orange"], "ans": "Vanilla essence", "exp": "Vanilla essence is an olfactory indicator whose odour change can be detected by smell without sight."},
            {"q": "When dilute sodium hydroxide (NaOH) is added to a cloth strip scented with chopped onion, what happens to the smell?", "opts": ["The onion smell becomes stronger", "The onion smell is completely destroyed", "A sweet fruity smell develops", "No change occurs"], "ans": "The onion smell is completely destroyed", "exp": "Bases chemically neutralize the volatile organic sulfur compounds responsible for onion odour."},
            {"q": "Which organic acid is predominantly present in sour milk or curd?", "opts": ["Citric acid", "Lactic acid", "Tartaric acid", "Oxalic acid"], "ans": "Lactic acid", "exp": "Lactobacillus bacteria ferment milk sugars into lactic acid, causing curdling and sour taste."},
            {"q": "What happens to the pleasant aroma of clove oil when a drop of dilute hydrochloric acid (HCl) is added to it?", "opts": ["The aroma disappears immediately", "The characteristic aroma remains unchanged", "It turns into an ammonia smell", "It catches fire"], "ans": "The characteristic aroma remains unchanged", "exp": "Acids do not destroy the aroma of olfactory indicators like clove oil or vanilla."},
            {"q": "Commercial vinegar is chemically composed of:", "opts": ["100% pure anhydrous acetic acid", "5% to 8% aqueous solution of acetic acid", "10% aqueous solution of citric acid", "Concentrated formic acid"], "ans": "5% to 8% aqueous solution of acetic acid", "exp": "Vinegar is prepared by diluting acetic acid in water to approximately 5% to 8% concentration."}
        ]
    },

    # 3. Reaction of Acids with Active Metals
    {
        "id": "m03", "num": 3,
        "title": "Reaction of Acids with Active Metals & Hydrogen Gas",
        "tagline": "Evolution of hydrogen gas, metal displacement, and the confirmatory pop sound test.",
        "theory": """
            <p>When reactive metals (above hydrogen in the reactivity series) react with dilute acids, they displace hydrogen to form a metal salt and evolve <strong>hydrogen gas</strong>.</p>
            <p style="text-align:center; font-weight:700; color:#1e3a8a; margin:10px 0;">
                Acid + Reactive Metal → Metal Salt + Hydrogen Gas (H₂↑)
            </p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🔬 Activity 2.3 — Reaction of Granulated Zinc with Dilute Sulphuric Acid:</strong>
                <p>When dilute H₂SO₄ is added to zinc granules in a test tube, brisk effervescence of hydrogen gas occurs on the zinc surface:</p>
                <p style="text-align:center; font-weight:700; color:#065f46; margin:8px 0;">
                    Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g)↑
                </p>
                <p>Similarly, with dilute hydrochloric acid:</p>
                <p style="text-align:center; font-weight:700; color:#065f46; margin:8px 0;">
                    Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g)↑
                </p>
            </div>
            <div class="activity-box" style="background:#fefce8; border-left:4px solid #eab308; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🔥 Testing for Hydrogen Gas:</strong>
                <p>Pass the gas into soap solution. Soap bubbles filled with hydrogen gas float upwards because hydrogen is much lighter than air. Bringing a burning candle near a bubble ignites the gas with a characteristic <strong>'pop' sound</strong>.</p>
            </div>
        """,
        "points": [
            "Active metals displace hydrogen from dilute acids to form metal salts and H₂ gas.",
            "Granulated zinc is preferred due to its large surface area and trace impurities accelerating the reaction.",
            "Hydrogen gas burns with a distinctive 'pop' sound.",
            "Curd and sour foods should never be stored in copper or brass containers because acids react to form toxic salts."
        ],
        "notes": ["Copper, silver, and gold lie below hydrogen in the reactivity series and do not evolve H₂ with dilute acids."],
        "bank_ids": [9, 16, 17, 30, 31],
        "extra": [
            {"q": "Which gas is evolved when granulated zinc reacts with dilute sulphuric acid?", "opts": ["Oxygen (O₂)", "Hydrogen (H₂)", "Sulphur dioxide (SO₂)", "Carbon dioxide (CO₂)"], "ans": "Hydrogen (H₂)", "exp": "Zinc displaces hydrogen: Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g)↑."},
            {"q": "Why does a soap bubble filled with hydrogen gas rise rapidly towards the ceiling?", "opts": ["Hydrogen is denser than air", "Hydrogen gas is significantly lighter than air", "Soap solution is magnetic", "Hydrogen reacts with nitrogen"], "ans": "Hydrogen gas is significantly lighter than air", "exp": "Hydrogen has a molar mass of 2 g/mol, making it far lighter than atmospheric air (~29 g/mol)."},
            {"q": "Which of the following metals will NOT react with dilute hydrochloric acid to liberate hydrogen gas?", "opts": ["Magnesium", "Zinc", "Copper", "Iron"], "ans": "Copper", "exp": "Copper lies below hydrogen in the reactivity series and cannot displace hydrogen from dilute acids."},
            {"q": "What is the confirmatory test for hydrogen gas produced in an acid-metal reaction?", "opts": ["Turns lime water milky", "Rekindles a glowing splint", "Burns with a characteristic 'pop' sound", "Turns blue litmus red"], "ans": "Burns with a characteristic 'pop' sound", "exp": "Hydrogen burns rapidly with atmospheric oxygen in a miniature explosion producing a 'pop' sound."},
            {"q": "Why are pickles and curd strictly kept in glass or ceramic jars rather than copper or brass vessels?", "opts": ["Glass keeps food colder", "Organic acids in pickles react with copper/brass forming toxic chemical salts", "Pickles turn glass opaque", "Copper absorbs food flavor"], "ans": "Organic acids in pickles react with copper/brass forming toxic chemical salts", "exp": "Acids react with copper and zinc in brass vessels, producing poisonous soluble metal salts."}
        ]
    },

    # 4. Reaction of Bases with Metals
    {
        "id": "m04", "num": 4,
        "title": "Reaction of Strong Bases with Amphoteric Metals",
        "tagline": "Formation of sodium zincate, hydrogen gas release, and why HNO₃ does not evolve H₂.",
        "theory": """
            <p>Bases do not react with most metals. However, strong alkalis (like NaOH and KOH) react with <strong>amphoteric metals</strong> (such as Zinc and Aluminium) when warmed, liberating <strong>hydrogen gas</strong> and forming complex salts.</p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🔬 Activity 2.4 — Heating Zinc with Sodium Hydroxide:</strong>
                <p>Place a few granulated zinc pieces in a test tube and add 2 mL of sodium hydroxide solution. Warm the contents gently over a burner:</p>
                <p style="text-align:center; font-weight:700; color:#1e3a8a; margin:8px 0;">
                    2NaOH(aq) + Zn(s) --[Warm]--> Na₂ZnO₂(aq) + H₂(g)↑
                </p>
                <p>The salt formed is <strong>sodium zincate</strong> (Na₂ZnO₂), and hydrogen gas is released (confirmed by the pop test).</p>
            </div>
            <div class="activity-box" style="background:#fefce8; border-left:4px solid #eab308; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>⚠️ Why Nitric Acid (HNO₃) Does Not Evolve H₂ with Most Metals:</strong>
                <p>Dilute nitric acid is a powerful oxidising agent. As soon as hydrogen gas is formed, HNO₃ oxidises it to water (H₂O) while getting reduced itself to nitrogen oxides (N₂O, NO, or NO₂). Only extremely dilute HNO₃ (1%) reacts with <strong>Magnesium (Mg)</strong> and <strong>Manganese (Mn)</strong> to evolve H₂ gas.</p>
            </div>
        """,
        "points": [
            "Strong bases react with amphoteric metals (Zn, Al) upon heating to liberate H₂ gas.",
            "Sodium zincate has the formula Na₂ZnO₂.",
            "Such base-metal reactions are not possible with all metals.",
            "Nitric acid oxidises evolved H₂ into H₂O, except with very dilute HNO₃ on Mg and Mn."
        ],
        "notes": ["Formula to memorize: Sodium zincate is Na₂ZnO₂; sodium aluminate is NaAlO₂."],
        "bank_ids": [18, 19, 32, 33, 34],
        "extra": [
            {"q": "What are the products formed when zinc granules are heated with concentrated sodium hydroxide solution?", "opts": ["Zinc hydroxide and water", "Sodium zincate and hydrogen gas", "Sodium oxide and zinc", "Zinc oxide and water"], "ans": "Sodium zincate and hydrogen gas", "exp": "2NaOH + Zn → Na₂ZnO₂ + H₂↑ upon heating."},
            {"q": "What is the correct chemical formula of sodium zincate?", "opts": ["NaZnO₂", "Na₂ZnO₂", "NaZn(OH)₄", "Na₂(ZnO)₂"], "ans": "Na₂ZnO₂", "exp": "Zincate radical is ZnO₂²⁻ and sodium is Na⁺, yielding Na₂ZnO₂."},
            {"q": "Why does dilute nitric acid (HNO₃) rarely evolve hydrogen gas when reacted with metals?", "opts": ["It is too weak an acid", "It is a strong oxidising agent that oxidises H₂ to water", "It contains no hydrogen atoms", "It is an alkaline liquid"], "ans": "It is a strong oxidising agent that oxidises H₂ to water", "exp": "Nitric acid oxidises H₂ to H₂O and reduces itself to nitrogen oxides like NO or NO₂."},
            {"q": "Which two metals react with very dilute (1%) nitric acid to evolve hydrogen gas?", "opts": ["Zinc and Iron", "Copper and Silver", "Magnesium and Manganese", "Sodium and Potassium"], "ans": "Magnesium and Manganese", "exp": "Mg and Mn are powerful reducing agents that can evolve H₂ even with very dilute HNO₃."},
            {"q": "Can all metals react with bases to produce hydrogen gas?", "opts": ["Yes, all metals react with bases", "No, only certain amphoteric metals like Zn and Al react", "Only noble metals like gold react", "Only alkali metals react with bases"], "ans": "No, only certain amphoteric metals like Zn and Al react", "exp": "Bases only react with amphoteric metals whose oxides and hydroxides exhibit dual acidic-basic traits."}
        ]
    },

    # 5. Reaction of Metal Carbonates with Acids
    {
        "id": "m05", "num": 5,
        "title": "Reaction of Metal Carbonates with Acids & CO₂ Evolution",
        "tagline": "Carbon dioxide effervescence, balanced equations, and different natural forms of calcium carbonate.",
        "theory": """
            <p>All metal carbonates react with acids to form a metal salt, water, and liberate <strong>carbon dioxide gas (CO₂)</strong> with brisk effervescence.</p>
            <p style="text-align:center; font-weight:700; color:#1e3a8a; margin:10px 0;">
                Metal Carbonate + Acid → Salt + Water + Carbon Dioxide (CO₂↑)
            </p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🔬 Activity 2.5 (Part 1) — Sodium Carbonate and Dilute Hydrochloric Acid:</strong>
                <p>Take about 0.5 g of sodium carbonate (Na₂CO₃) in a test tube and add 2 mL of dilute HCl:</p>
                <p style="text-align:center; font-weight:700; color:#065f46; margin:8px 0;">
                    Na₂CO₃(s) + 2HCl(aq) → 2NaCl(aq) + H₂O(l) + CO₂(g)↑
                </p>
                <p>Brisk effervescence of colourless, odourless carbon dioxide gas is immediately evolved.</p>
            </div>
            <div class="activity-box" style="background:#fefce8; border-left:4px solid #eab308; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🐚 Natural Forms of Calcium Carbonate (CaCO₃):</strong>
                <p><strong>Limestone</strong>, <strong>chalk</strong>, <strong>marble</strong>, and <strong>eggshells</strong> are all chemically different physical forms of the same compound: <strong>Calcium Carbonate (CaCO₃)</strong>. All of them produce CO₂ gas when treated with acids.</p>
            </div>
        """,
        "points": [
            "Metal Carbonate + Acid → Salt + H₂O + CO₂↑.",
            "Carbon dioxide gas is colourless, odourless, and causes brisk effervescence.",
            "Limestone, chalk, marble, and eggshells are all chemically CaCO₃.",
            "CO₂ extinguishes a burning candle because it does not support combustion."
        ],
        "notes": ["Key test: CO₂ gas turns a burning candle off and turns lime water milky."],
        "bank_ids": [20, 24, 29, 35, 8],
        "extra": [
            {"q": "Which gas is evolved when dilute hydrochloric acid is added to sodium carbonate (Na₂CO₃)?", "opts": ["Hydrogen gas", "Carbon dioxide gas", "Chlorine gas", "Oxygen gas"], "ans": "Carbon dioxide gas", "exp": "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂↑ with brisk effervescence."},
            {"q": "Limestone, chalk, and marble are all chemical forms of which single compound?", "opts": ["Calcium hydroxide [Ca(OH)₂]", "Calcium sulphate [CaSO₄]", "Calcium carbonate [CaCO₃]", "Calcium oxide [CaO]"], "ans": "Calcium carbonate [CaCO₃]", "exp": "All these geological materials are natural physical allotropes/forms of calcium carbonate."},
            {"q": "Eggshells are primarily composed of which chemical substance?", "opts": ["Sodium chloride", "Calcium carbonate", "Magnesium carbonate", "Calcium phosphate"], "ans": "Calcium carbonate", "exp": "Eggshells are hard outer shells made of calcium carbonate, reacting with acid to produce CO₂."},
            {"q": "A metal compound 'X' reacts with dilute acid to produce effervescence that extinguishes a burning candle. What is 'X'?", "opts": ["Metal carbonate or hydrogencarbonate", "Metal chloride", "Metal sulphate", "Metal oxide"], "ans": "Metal carbonate or hydrogencarbonate", "exp": "Evolving an extinguishing gas (CO₂) proves the compound is a carbonate or hydrogencarbonate."},
            {"q": "What is the stoichiometric coefficient of HCl when balancing: Na₂CO₃ + xHCl → 2NaCl + H₂O + CO₂?", "opts": ["1", "2", "3", "4"], "ans": "2", "exp": "Two moles of HCl provide two chloride ions for 2NaCl and two hydrogen atoms for H₂O."}
        ]
    }
]

print(f"Defined {len(modules_config)} core modules so far.")
