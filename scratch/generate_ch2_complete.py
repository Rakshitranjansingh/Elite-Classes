import json
import re
import os

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

def get_bank_q(num):
    for q in questions_raw:
        if q['id'] == num:
            return q
    raise ValueError(f"Question {num} not found")

def clean_txt(s):
    return s.replace("NCERT", "curriculum").strip()

modules_data = [
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
    },

    # 6. Metal Hydrogen Carbonates & Lime Water Test
    {
        "id": "m06", "num": 6,
        "title": "Metal Hydrogen Carbonates & The Lime Water Test",
        "tagline": "Reaction of NaHCO₃ with acids, formation of insoluble CaCO₃, and clearing with excess CO₂.",
        "theory": """
            <p>Metal hydrogen carbonates (bicarbonates) also react with acids to produce a salt, water, and carbon dioxide gas:</p>
            <p style="text-align:center; font-weight:700; color:#1e3a8a; margin:10px 0;">
                NaHCO₃(s) + HCl(aq) → NaCl(aq) + H₂O(l) + CO₂(g)↑
            </p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🔬 The Lime Water Test (Passing CO₂ through Lime Water):</strong>
                <p>When evolved carbon dioxide gas is bubbled into freshly prepared lime water [calcium hydroxide, Ca(OH)₂ solution], the solution turns <strong>milky / turbid</strong> due to the formation of an insoluble white precipitate of <strong>calcium carbonate (CaCO₃)</strong>:</p>
                <p style="text-align:center; font-weight:700; color:#065f46; margin:8px 0;">
                    Ca(OH)₂(aq) + CO₂(g) → CaCO₃(s)↓ (White ppt) + H₂O(l)
                </p>
            </div>
            <div class="activity-box" style="background:#fefce8; border-left:4px solid #eab308; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>⚠️ What Happens When Excess CO₂ is Passed:</strong>
                <p>If carbon dioxide gas is passed continuously for a longer time, the white milkiness <strong>completely disappears</strong>. This occurs because the insoluble calcium carbonate is converted into <strong>calcium hydrogencarbonate [Ca(HCO₃)₂]</strong>, which is completely soluble in water:</p>
                <p style="text-align:center; font-weight:700; color:#b45309; margin:8px 0;">
                    CaCO₃(s) + H₂O(l) + CO₂(g) → Ca(HCO₃)₂(aq) (Soluble, clear solution)
                </p>
            </div>
        """,
        "points": [
            "Metal Hydrogen Carbonate + Acid → Salt + Water + CO₂↑.",
            "Lime water [Ca(OH)₂] turns milky with CO₂ due to insoluble CaCO₃ precipitate.",
            "Passing excess CO₂ dissolves the precipitate by forming soluble Ca(HCO₃)₂.",
            "This two-step observation is the standard analytical confirmation test for carbon dioxide."
        ],
        "notes": ["Board favorite: Lime water turns milky (CaCO₃), and clears upon excess CO₂ [Ca(HCO₃)₂]."],
        "bank_ids": [21, 22, 23, 84, 85],
        "extra": [
            {"q": "What causes lime water to turn milky when carbon dioxide is bubbled through it?", "opts": ["Formation of soluble calcium chloride", "Formation of insoluble white precipitate of calcium carbonate", "Decomposition of calcium hydroxide into calcium metal", "Formation of calcium sulphate"], "ans": "Formation of insoluble white precipitate of calcium carbonate", "exp": "Ca(OH)₂ + CO₂ → CaCO₃↓ (white precipitate) + H₂O."},
            {"q": "Why does the milkiness of lime water disappear when excess carbon dioxide gas is passed through it?", "opts": ["Excess CO₂ reacts with water to form ice", "Insoluble CaCO₃ turns into water-soluble calcium hydrogencarbonate Ca(HCO₃)₂", "Lime water evaporates completely", "Calcium carbonate decomposes into carbon"], "ans": "Insoluble CaCO₃ turns into water-soluble calcium hydrogencarbonate Ca(HCO₃)₂", "exp": "CaCO₃ + H₂O + CO₂ → Ca(HCO₃)₂, which is completely soluble in water."},
            {"q": "What is the chemical formula of calcium hydrogencarbonate?", "opts": ["CaHCO₃", "Ca(HCO₃)₂", "Ca₂(HCO₃)₃", "CaH₂CO₃"], "ans": "Ca(HCO₃)₂", "exp": "Calcium has valency +2 and hydrogencarbonate radical has valency -1, giving Ca(HCO₃)₂."},
            {"q": "What is the common name for calcium hydroxide solution used in the carbon dioxide test?", "opts": ["Quicklime", "Slaked lime / Lime water", "Bleaching powder", "Plaster of Paris"], "ans": "Slaked lime / Lime water", "exp": "A clear aqueous solution of calcium hydroxide [Ca(OH)₂] is called lime water."},
            {"q": "Which of the following equations correctly represents the reaction of baking soda with hydrochloric acid?", "opts": ["NaHCO₃ + HCl → NaCl + H₂O + CO₂", "Na₂CO₃ + HCl → NaCl + H₂O + CO₂", "NaHCO₃ + 2HCl → NaCl₂ + H₂ + CO₂", "NaHCO₃ + HCl → NaH + Cl₂ + CO₂"], "ans": "NaHCO₃ + HCl → NaCl + H₂O + CO₂", "exp": "One mole of NaHCO₃ reacts with one mole of HCl to form 1 mole of NaCl, water, and CO₂."}
        ]
    },

    # 7. Neutralisation Reactions
    {
        "id": "m07", "num": 7,
        "title": "Neutralisation Reactions: Acid + Base → Salt + Water",
        "tagline": "Proton exchange, ionic equations, phenolphthalein colour transitions, and exothermic heat release.",
        "theory": """
            <p>The reaction between an acid and a base to give a salt and water is known as a <strong>neutralisation reaction</strong>. In general:</p>
            <p style="text-align:center; font-weight:700; color:#1e3a8a; margin:10px 0;">
                Base + Acid → Salt + Water
            </p>
            <p style="text-align:center; font-weight:700; color:#065f46; margin:8px 0;">
                NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l) + Heat
            </p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🔬 Activity 2.6 — Phenolphthalein in Neutralisation:</strong>
                <p>Take 2 mL of dilute NaOH solution in a test tube and add two drops of phenolphthalein. The solution turns <strong>pink</strong>. Now add dilute HCl drop by drop with shaking:</p>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li>As soon as the acid completely neutralises the base, the pink colour <strong>disappears</strong> (solution becomes colourless).</li>
                    <li>If a drop of NaOH is added again, the pink colour <strong>reappears</strong>!</li>
                </ul>
            </div>
            <div class="activity-box" style="background:#fefce8; border-left:4px solid #eab308; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>⚡ Fundamental Ionic Equation of Neutralisation:</strong>
                <p>In aqueous solution, acids provide H⁺(aq) ions (or H₃O⁺) and bases provide OH⁻(aq) ions. Neutralisation is essentially the combination of hydrogen ions and hydroxide ions to form neutral water molecules:</p>
                <p style="text-align:center; font-weight:700; color:#b45309; margin:8px 0;">
                    H⁺(aq) + OH⁻(aq) → H₂O(l)
                </p>
                <p>Neutralisation is always an <strong>exothermic process</strong>; heat energy is released during the bond formation of water.</p>
            </div>
        """,
        "points": [
            "Acid + Base → Salt + Water (Neutralisation).",
            "Ionic core of neutralisation: H⁺(aq) + OH⁻(aq) → H₂O(l).",
            "Neutralisation reactions are exothermic (temperature of container rises).",
            "Phenolphthalein indicates completion: pink in alkaline, sharp discharge to colourless at neutrality."
        ],
        "notes": ["Neutralisation always forms water from the union of H⁺ and OH⁻."],
        "bank_ids": [25, 7, 14, 46, 47],
        "extra": [
            {"q": "What is the net ionic equation representing any strong acid-strong base neutralisation in aqueous solution?", "opts": ["Na⁺ + Cl⁻ → NaCl", "H⁺(aq) + OH⁻(aq) → H₂O(l)", "2H₂ + O₂ → 2H₂O", "HCl + NaOH → NaCl + H₂O"], "ans": "H⁺(aq) + OH⁻(aq) → H₂O(l)", "exp": "Spectator ions (Na⁺ and Cl⁻) remain unchanged; the actual reaction is H⁺ combining with OH⁻ to produce neutral water."},
            {"q": "During a neutralisation reaction between dilute HCl and dilute NaOH, the temperature of the reaction mixture:", "opts": ["Decreases noticeably", "Increases due to exothermic heat release", "Remains at absolute zero", "Drops below freezing point"], "ans": "Increases due to exothermic heat release", "exp": "Bond formation between H⁺ and OH⁻ releases thermal energy (~57.3 kJ/mol), making neutralisation exothermic."},
            {"q": "When excess dilute hydrochloric acid is added to a pink solution of NaOH containing phenolphthalein, what happens?", "opts": ["Solution turns blue", "Pink colour disappears and solution becomes colourless", "A yellow precipitate forms", "Solution turns bright green"], "ans": "Pink colour disappears and solution becomes colourless", "exp": "Phenolphthalein is colourless in neutral and acidic solutions; when acid exceeds base, the pink colour discharges."},
            {"q": "Which of the following acid-base pairs will undergo a neutralisation reaction?", "opts": ["HCl and HNO₃", "NaOH and KOH", "H₂SO₄ and Ca(OH)₂", "NaCl and KCl"], "ans": "H₂SO₄ and Ca(OH)₂", "exp": "H₂SO₄ is an acid and Ca(OH)₂ is a base; their reaction produces calcium sulphate salt and water."},
            {"q": "Rubbing a dock plant leaf on a nettle sting relieves pain because:", "opts": ["Dock leaves contain concentrated hydrochloric acid", "Dock leaf sap is mildly alkaline and neutralises acidic methanoic acid injected by nettle hairs", "Dock leaves freeze the skin", "Dock leaves contain volatile alcohol"], "ans": "Dock leaf sap is mildly alkaline and neutralises acidic methanoic acid injected by nettle hairs", "exp": "Nettle hairs inject methanoic acid; the alkaline dock leaf sap neutralises it, bringing immediate pain relief."}
        ]
    },

    # 8. Metallic Oxides with Acids
    {
        "id": "m08", "num": 8,
        "title": "Reaction of Metallic Oxides with Acids (Basic Nature)",
        "tagline": "Formation of blue-green copper(II) chloride and proving that metallic oxides are basic.",
        "theory": """
            <p>Metal oxides react with acids to form a salt and water, exactly analogous to the reaction between a base and an acid:</p>
            <p style="text-align:center; font-weight:700; color:#1e3a8a; margin:10px 0;">
                Metal Oxide + Acid → Salt + Water
            </p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🔬 Activity 2.7 — Reaction of Copper(II) Oxide with Dilute HCl:</strong>
                <p>Take a small amount of black copper(II) oxide (CuO) in a beaker and slowly add dilute hydrochloric acid while stirring continuously:</p>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li>The black powder dissolves completely.</li>
                    <li>The solution turns a striking <strong>blue-green colour</strong> due to the formation of <strong>copper(II) chloride [CuCl₂]</strong>:</li>
                </ul>
                <p style="text-align:center; font-weight:700; color:#065f46; margin:8px 0;">
                    CuO(s) (Black) + 2HCl(aq) → CuCl₂(aq) (Blue-green) + H₂O(l)
                </p>
            </div>
            <div class="activity-box" style="background:#fefce8; border-left:4px solid #eab308; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>💡 Why Metal Oxides are Called Basic Oxides:</strong>
                <p>Since metallic oxides react with acids to yield salt and water (just like bases do in neutralisation), <strong>metallic oxides are classified as basic oxides</strong> (e.g., Na₂O, K₂O, CaO, MgO, CuO).</p>
            </div>
        """,
        "points": [
            "Metal Oxide + Acid → Salt + Water.",
            "Black CuO dissolves in dilute HCl to form blue-green CuCl₂ solution.",
            "Because metal oxides react with acids to form salt and water, they are basic oxides.",
            "Soluble metal oxides (Na₂O, K₂O) dissolve in water to produce alkalis (NaOH, KOH)."
        ],
        "notes": ["Colour change: Black CuO powder dissolves into a blue-green solution of CuCl₂."],
        "bank_ids": [26, 27, 48, 49, 50],
        "extra": [
            {"q": "When black copper(II) oxide powder is warmed with dilute hydrochloric acid, the resulting solution turns:", "opts": ["Colourless", "Bright red", "Blue-green", "Milky white"], "ans": "Blue-green", "exp": "Copper(II) chloride (CuCl₂) formed in aqueous solution imparts a characteristic blue-green colour."},
            {"q": "Why are metallic oxides classified as 'basic oxides'?", "opts": ["They turn blue litmus red", "They react with acids to produce salt and water only", "They contain free hydroxide ions in solid crystal form", "They decompose spontaneously into metals"], "ans": "They react with acids to produce salt and water only", "exp": "Reacting with an acid to yield salt and water is the definitive chemical behaviour of a base."},
            {"q": "What are the products formed when magnesium oxide reacts with dilute sulphuric acid?", "opts": ["Magnesium sulphate and hydrogen gas", "Magnesium sulphate and water", "Magnesium sulphide and oxygen", "Magnesium hydroxide only"], "ans": "Magnesium sulphate and water", "exp": "MgO (basic oxide) + H₂SO₄ (acid) → MgSO₄ (salt) + H₂O (water)."},
            {"q": "Which of the following metallic oxides dissolves in water to form a strong alkali?", "opts": ["Copper(II) oxide (CuO)", "Sodium oxide (Na₂O)", "Iron(III) oxide (Fe₂O₃)", "Aluminium oxide (Al₂O₃)"], "ans": "Sodium oxide (Na₂O)", "exp": "Na₂O(s) + H₂O(l) → 2NaOH(aq), forming the strong alkali sodium hydroxide."},
            {"q": "What is the balanced equation for the reaction between calcium oxide (quicklime) and nitric acid?", "opts": ["CaO + HNO₃ → CaNO₃ + H₂O", "CaO + 2HNO₃ → Ca(NO₃)₂ + H₂O", "2CaO + 2HNO₃ → 2CaNO₂ + H₂O₂", "CaO + HNO₃ → Ca(OH)₂ + NO₂"], "ans": "CaO + 2HNO₃ → Ca(NO₃)₂ + H₂O", "exp": "Calcium oxide reacts with 2 moles of nitric acid to produce calcium nitrate and water."}
        ]
    },

    # 9. Non-Metallic Oxides with Bases
    {
        "id": "m09", "num": 9,
        "title": "Reaction of Non-Metallic Oxides with Bases (Acidic Nature)",
        "tagline": "Reaction of CO₂ and SO₂ with alkalis and confirming that non-metallic oxides are acidic.",
        "theory": """
            <p>Non-metallic oxides react with bases to produce a salt and water, following the identical pattern of an acid-base neutralisation reaction:</p>
            <p style="text-align:center; font-weight:700; color:#1e3a8a; margin:10px 0;">
                Non-Metallic Oxide + Base → Salt + Water
            </p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🔬 Classical Example — Reaction of Calcium Hydroxide with Carbon Dioxide:</strong>
                <p>Calcium hydroxide [Ca(OH)₂] is a base. When non-metallic carbon dioxide gas (CO₂) is bubbled through it, calcium carbonate salt and water are produced:</p>
                <p style="text-align:center; font-weight:700; color:#065f46; margin:8px 0;">
                    Ca(OH)₂(aq) (Base) + CO₂(g) (Non-metal oxide) → CaCO₃(s) (Salt) + H₂O(l) (Water)
                </p>
                <p>Similarly, sulphur dioxide gas reacts with sodium hydroxide base:</p>
                <p style="text-align:center; font-weight:700; color:#065f46; margin:8px 0;">
                    2NaOH(aq) + SO₂(g) → Na₂SO₃(aq) + H₂O(l)
                </p>
            </div>
            <div class="activity-box" style="background:#fefce8; border-left:4px solid #eab308; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>💡 Conclusion: Non-Metallic Oxides are Acidic in Nature:</strong>
                <p>Since non-metallic oxides neutralise bases to yield salt and water, <strong>non-metallic oxides are acidic oxides</strong> (e.g., CO₂, SO₂, SO₃, NO₂). When dissolved in water, they form acidic solutions (e.g., CO₂ + H₂O → H₂CO₃ carbonic acid; SO₃ + H₂O → H₂SO₄ sulphuric acid).</p>
            </div>
        """,
        "points": [
            "Non-Metallic Oxide + Base → Salt + Water.",
            "CO₂ reacts with Ca(OH)₂ base to form CaCO₃ salt and H₂O.",
            "Because non-metallic oxides neutralise bases, they are acidic in nature.",
            "Non-metallic oxides dissolve in moisture in clouds to form acid rain (H₂SO₄, HNO₃)."
        ],
        "notes": ["Metal oxides = Basic (react with acids); Non-metal oxides = Acidic (react with bases)."],
        "bank_ids": [28, 66, 67, 68, 69],
        "extra": [
            {"q": "Non-metallic oxides (such as CO₂ and SO₂) are classified as acidic oxides because they:", "opts": ["Contain replaceable hydrogen atoms", "React with bases to produce salt and water", "Turn red litmus blue", "React with metals to produce oxygen"], "ans": "React with bases to produce salt and water", "exp": "Neutralising a base to yield salt and water is the characteristic property of an acidic substance."},
            {"q": "What acid is formed when sulphur trioxide gas (SO₃) dissolves in rainwater?", "opts": ["Sulphurous acid (H₂SO₃)", "Sulphuric acid (H₂SO₄)", "Hydrosulphuric acid (H₂S)", "Nitric acid (HNO₃)"], "ans": "Sulphuric acid (H₂SO₄)", "exp": "SO₃(g) + H₂O(l) → H₂SO₄(aq), a primary contributor to acid rain."},
            {"q": "When carbon dioxide gas is passed through a solution of sodium hydroxide, which salt is formed?", "opts": ["Sodium chloride", "Sodium carbonate", "Sodium sulphate", "Sodium nitrate"], "ans": "Sodium carbonate", "exp": "2NaOH + CO₂ → Na₂CO₃ + H₂O."},
            {"q": "Which of the following non-metallic oxides is a neutral oxide rather than an acidic oxide?", "opts": ["Carbon dioxide (CO₂)", "Sulphur dioxide (SO₂)", "Carbon monoxide (CO)", "Nitrogen dioxide (NO₂)"], "ans": "Carbon monoxide (CO)", "exp": "Carbon monoxide (CO), water (H₂O), and nitrous oxide (N₂O) are neutral oxides that do not react with acids or bases."},
            {"q": "What is the observed effect on moist blue litmus paper when exposed to sulphur dioxide gas?", "opts": ["Turns red due to acidic nature", "Turns deep blue", "Becomes completely bleached white immediately", "Remains unchanged"], "ans": "Turns red due to acidic nature", "exp": "SO₂ reacts with moisture on the paper to form sulphurous acid (H₂SO₃), turning blue litmus red."}
        ]
    },

    # 10. What all Acids and Bases have in common
    {
        "id": "m10", "num": 10,
        "title": "What All Acids and Bases Have in Common: Ionisation",
        "tagline": "Generation of H⁺ and OH⁻ ions, electrical conductivity, and why glucose/alcohol do not conduct.",
        "theory": """
            <p>What gives all acids their common chemical properties? In aqueous solution, <strong>all acids generate hydrogen ions [H⁺(aq)]</strong> (or hydronium ions H₃O⁺).</p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🔬 Activity 2.8 — Electrical Conductivity of Solutions:</strong>
                <p>Fix two iron nails on a rubber cork placed in a beaker and connect them to a 6-volt battery, a bulb, and a switch. Pour different test solutions into the beaker:</p>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li><strong>Dilute HCl and dilute H₂SO₄:</strong> The bulb glows brightly! Electric current is carried through the solution by moving <strong>ions</strong> [H⁺ cations and Cl⁻/SO₄²⁻ anions].</li>
                    <li><strong>Glucose (C₆H₁₂O₆) and Alcohol (C₂H₅OH):</strong> Even though their chemical formulas contain hydrogen atoms, <strong>the bulb does NOT glow</strong>! They are covalent compounds that do not ionise to release free H⁺ ions in water.</li>
                </ul>
            </div>
            <div class="activity-box" style="background:#fefce8; border-left:4px solid #eab308; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🧪 Common Factor in Bases:</strong>
                <p>Similarly, all basic substances when dissolved in water produce <strong>hydroxide ions [OH⁻(aq)]</strong>:</p>
                <p style="text-align:center; font-weight:700; color:#065f46; margin:8px 0;">
                    NaOH(s) --[H₂O]--> Na⁺(aq) + OH⁻(aq)
                </p>
                <p style="text-align:center; font-weight:700; color:#065f46; margin:8px 0;">
                    Ca(OH)₂(s) --[H₂O]--> Ca²⁺(aq) + 2OH⁻(aq)
                </p>
            </div>
        """,
        "points": [
            "All acids produce H⁺(aq) ions in water, which are responsible for their acidic properties.",
            "All bases produce OH⁻(aq) ions in water, responsible for basic properties.",
            "Acidic and basic solutions conduct electricity because of free mobile ions.",
            "Glucose and alcohol contain hydrogen but do not ionise, so they do not conduct electricity or show acidic behaviour."
        ],
        "notes": ["Crucial distinction: Having hydrogen in the formula does NOT make a substance an acid (e.g., glucose, alcohol)."],
        "bank_ids": [36, 45, 51, 52, 53],
        "extra": [
            {"q": "Aqueous solutions of glucose and ethyl alcohol contain hydrogen atoms but do NOT conduct electricity. Why?", "opts": ["They are too dense to allow electron flow", "They do not dissociate into free ions in aqueous solution", "They react violently with water molecules", "They destroy electrical wires"], "ans": "They do not dissociate into free ions in aqueous solution", "exp": "Electrical conductivity in liquids requires free moving ions; glucose and alcohol do not ionise in water."},
            {"q": "Why does distilled water NOT conduct electricity, whereas rainwater conducts electricity readily?", "opts": ["Distilled water is colder than rainwater", "Rainwater contains dissolved gases like CO₂ and SO₂ that form conducting ions", "Distilled water contains no hydrogen atoms", "Rainwater contains dissolved sugar"], "ans": "Rainwater contains dissolved gases like CO₂ and SO₂ that form conducting ions", "exp": "Pure distilled water has negligible ions, while rainwater dissolves atmospheric CO₂ forming carbonic acid ions (H⁺ and HCO₃⁻)."},
            {"q": "Which of the following ions is responsible for all characteristic acidic properties in aqueous solution?", "opts": ["Hydroxide ion (OH⁻)", "Hydronium ion (H₃O⁺ / H⁺)", "Chloride ion (Cl⁻)", "Oxide ion (O²⁻)"], "ans": "Hydronium ion (H₃O⁺ / H⁺)", "exp": "The acidic traits (sour taste, indicator shifts, H₂ release with metals) are caused specifically by hydronium ions."},
            {"q": "What cation and anion are produced when calcium hydroxide dissolves in water?", "opts": ["Ca⁺ and OH⁻", "Ca²⁺ and 2OH⁻", "CaO²⁺ and H₂⁻", "Ca²⁺ and O²⁻"], "ans": "Ca²⁺ and 2OH⁻", "exp": "Ca(OH)₂ dissociates into one Ca²⁺ cation and two OH⁻ hydroxide anions."},
            {"q": "An electric bulb connected in an electrochemical circuit glows when the beaker contains:", "opts": ["Pure kerosene", "Aqueous glucose solution", "Dilute hydrochloric acid", "Solid sodium chloride powder"], "ans": "Dilute hydrochloric acid", "exp": "Dilute HCl completely ionises into mobile H⁺ and Cl⁻ ions, completing the electric circuit."}
        ]
    },

    # 11. Dissociation in Water & Role of Moisture
    {
        "id": "m11", "num": 11,
        "title": "Role of Water in Acid Dissociation: Hydronium Ions",
        "tagline": "Why dry HCl does not affect dry litmus, hydronium ion formation, and alkalis vs bases.",
        "theory": """
            <p>Do acids produce ions only in aqueous solution? Let's investigate the crucial role of moisture.</p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🔬 Activity 2.9 — Testing Dry HCl Gas:</strong>
                <p>Prepare dry hydrogen chloride gas by adding concentrated H₂SO₄ to solid NaCl in a dry test tube. Pass the gas through a guard tube containing anhydrous calcium chloride (CaCl₂) to absorb all atmospheric moisture:</p>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li>When dry HCl gas is brought into contact with <strong>dry blue litmus paper</strong>, <strong>NO colour change</strong> occurs!</li>
                    <li>When the same dry HCl gas touches <strong>moist blue litmus paper</strong>, it immediately turns <strong>bright red</strong>!</li>
                </ul>
            </div>
            <div class="activity-box" style="background:#fefce8; border-left:4px solid #eab308; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>⚡ Hydronium Ion (H₃O⁺) Formation:</strong>
                <p>Hydrogen ions (H⁺) cannot exist alone in water because a bare proton has an extremely high charge density. It immediately combines with a polar water molecule to form a <strong>hydronium ion (H₃O⁺)</strong>:</p>
                <p style="text-align:center; font-weight:700; color:#065f46; margin:8px 0;">
                    HCl + H₂O → H₃O⁺ + Cl⁻
                </p>
                <p><strong>Definition of Alkali:</strong> Bases that dissolve in water are called <strong>alkalis</strong> (e.g., NaOH, KOH, Ca(OH)₂). All alkalis are bases, but not all bases are alkalis [e.g., Cu(OH)₂ and Fe(OH)₃ are insoluble bases].</p>
            </div>
        """,
        "points": [
            "Acids dissociate into H⁺ ions ONLY in the presence of water; dry acid gas shows no acidic properties.",
            "H⁺ combines with H₂O to form hydronium ions: H⁺ + H₂O → H₃O⁺.",
            "Anhydrous calcium chloride (CaCl₂) in the guard tube acts as a drying agent.",
            "All alkalis are bases, but all bases are not alkalis."
        ],
        "notes": ["Crucial concept: Separation of H⁺ ion from an acid molecule cannot occur in the absence of water."],
        "bank_ids": [37, 38, 39, 40, 41],
        "extra": [
            {"q": "Why does dry hydrogen chloride gas NOT change the colour of dry blue litmus paper?", "opts": ["HCl is an alkaline gas when dry", "Hydrogen ions can only be formed in the presence of water", "Dry litmus paper has no dye", "Litmus paper turns white instead"], "ans": "Hydrogen ions can only be formed in the presence of water", "exp": "Acidic behaviour requires H⁺/H₃O⁺ ions, which only dissociate when polar water molecules are present."},
            {"q": "What is the primary function of anhydrous calcium chloride (CaCl₂) packed in a laboratory guard tube?", "opts": ["To generate chlorine gas", "To absorb moisture and dry the escaping gas", "To cool the reaction mixture", "To act as a catalyst"], "ans": "To absorb moisture and dry the escaping gas", "exp": "Anhydrous CaCl₂ is highly hygroscopic and absorbs water vapor, ensuring the gas tested is completely dry."},
            {"q": "Hydrogen ions in aqueous solutions always exist in association with water molecules as:", "opts": ["Hydride ions (H⁻)", "Hydronium ions (H₃O⁺)", "Hydroxide ions (OH⁻)", "Hydrogen peroxide (H₂O₂)"], "ans": "Hydronium ions (H₃O⁺)", "exp": "Bare H⁺ protons combine with H₂O: H⁺ + H₂O → H₃O⁺."},
            {"q": "Which of the following statements correctly defines an alkali?", "opts": ["Any base that contains chlorine", "A base that is soluble in water", "An acid that dissolves in oil", "An insoluble metal hydroxide"], "ans": "A base that is soluble in water", "exp": "Alkalis are water-soluble bases like NaOH and KOH, soapy to touch, bitter, and corrosive."},
            {"q": "Which of the following bases is NOT an alkali because it is insoluble in water?", "opts": ["Sodium hydroxide [NaOH]", "Potassium hydroxide [KOH]", "Copper(II) hydroxide [Cu(OH)₂]", "Calcium hydroxide [Ca(OH)₂]"], "ans": "Copper(II) hydroxide [Cu(OH)₂]", "exp": "Copper(II) hydroxide is an insoluble blue precipitate base and therefore not an alkali."}
        ]
    },

    # 12. Dilution of Acids and Bases
    {
        "id": "m12", "num": 12,
        "title": "Dilution of Acids & Bases: Heat of Dissolution & Safety",
        "tagline": "Why concentrated acid must always be added to water dropwise, and ion concentration changes.",
        "theory": """
            <p>The process of dissolving an acid or a base in water is a <strong>highly exothermic</strong> reaction.</p>
            <div class="activity-box" style="background:#fef2f2; border-left:4px solid #ef4444; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>⚠️ Mandatory Laboratory Safety Rule:</strong>
                <p>The acid must <strong>ALWAYS be added slowly to water with constant stirring</strong>. <strong>NEVER add water to concentrated acid!</strong></p>
                <p>If water is poured into concentrated acid, the sudden heat generated causes the mixture to boil instantaneously, splashing hot corrosive acid onto your face and clothes, and may cause the thick glass container to shatter due to excessive local heating!</p>
            </div>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>💧 Effect of Dilution on Ion Concentration:</strong>
                <p>Mixing an acid or base with water results in a decrease in the concentration of ions [H₃O⁺ or OH⁻] per unit volume. This process is called <strong>dilution</strong>, and the acid or base is said to be diluted:</p>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li>Adding water to acid $\implies$ Concentration of H₃O⁺ per mL <strong>decreases</strong> (pH increases towards 7).</li>
                    <li>Adding water to base $\implies$ Concentration of OH⁻ per mL <strong>decreases</strong> (pH decreases towards 7).</li>
                </ul>
            </div>
        """,
        "points": [
            "Always add acid slowly to water with constant stirring, never water to acid.",
            "Dissolving concentrated H₂SO₄ or NaOH pellets in water is highly exothermic.",
            "Dilution decreases the number of H₃O⁺ or OH⁻ ions per unit volume.",
            "A milkman adds a pinch of baking soda to fresh milk in summer to make it slightly alkaline and prevent rapid souring."
        ],
        "notes": ["Golden Rule: Add Acid to Water (A to W - Alphabetical order) with continuous stirring."],
        "bank_ids": [42, 43, 44, 70, 65],
        "extra": [
            {"q": "Why must concentrated sulphuric acid always be added slowly to water with constant stirring?", "opts": ["Water is more expensive than acid", "Adding water to acid causes localized boiling and violent acid splashing", "Acid evaporates instantly in water", "To prevent the acid from changing colour"], "ans": "Adding water to acid causes localized boiling and violent acid splashing", "exp": "The huge heat of dissolution causes instant steam formation, splashing corrosive acid and cracking glassware."},
            {"q": "What happens to the concentration of hydronium ions (H₃O⁺) per unit volume when an acid solution is diluted?", "opts": ["It increases exponentially", "It decreases", "It remains exactly constant", "It drops to absolute zero immediately"], "ans": "It decreases", "exp": "Adding water increases the total volume, so the number of H₃O⁺ ions per unit volume (concentration) decreases."},
            {"q": "What happens to the concentration of hydroxide ions (OH⁻) per unit volume when excess water is added to a sodium hydroxide solution?", "opts": ["Increases", "Decreases", "Remains unchanged", "Doubles"], "ans": "Decreases", "exp": "Diluting an alkaline solution spreads the OH⁻ ions over a larger volume, decreasing their concentration per mL."},
            {"q": "A milkman adds a pinch of baking soda (NaHCO₃) to fresh milk in summer. Why?", "opts": ["To increase the fat content", "To make milk slightly alkaline and delay souring by lactic acid", "To make milk boil faster", "To turn milk into cheese"], "ans": "To make milk slightly alkaline and delay souring by lactic acid", "exp": "Baking soda shifts the pH slightly above 6, so it takes a longer time for bacteria to produce enough acid to curdle it."},
            {"q": "When sodium hydroxide pellets are dissolved in water in a test tube, the beaker feels hot to the touch. This shows the reaction is:", "opts": ["Endothermic", "Exothermic", "Photochemical", "Reversible without energy change"], "ans": "Exothermic", "exp": "The release of thermal energy increases temperature, characteristic of exothermic processes."}
        ]
    },

    # 13. The pH Scale
    {
        "id": "m13", "num": 13,
        "title": "The pH Scale: Measuring Hydronium Ion Concentration",
        "tagline": "Understanding the 0–14 scale, the meaning of 'p' (potenz), and universal indicator colour spectrum.",
        "theory": """
            <p>The <strong>pH scale</strong> is a logarithmic scale used for measuring hydrogen ion concentration in a solution, developed by Danish biochemist Sørensen in 1909.</p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>📏 Understanding the pH Range (0 to 14):</strong>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li>The 'p' in pH stands for <strong>potenz</strong>, a German word meaning <em>power</em>.</li>
                    <li><strong>Neutral Solution:</strong> $\text{pH} = 7$ (e.g., pure water at 25°C, where $[H^+] = [OH^-] = 10^{-7}\text{ M}$).</li>
                    <li><strong>Acidic Solution:</strong> $\text{pH} < 7$. Lower pH value represents higher $[H^+]$ concentration (stronger acid).</li>
                    <li><strong>Basic Solution:</strong> $\text{pH} > 7$. Higher pH value represents higher $[OH^-]$ concentration (stronger base).</li>
                </ul>
            </div>
            <div class="activity-box" style="background:#fefce8; border-left:4px solid #eab308; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🌈 Universal Indicator Colour Changes:</strong>
                <p>A universal indicator is a mixture of several indicators showing different colours at different pH values across the entire 0–14 spectrum:</p>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li>$\text{pH } 0 - 2$: Deep Red (Strong acids like conc. HCl)</li>
                    <li>$\text{pH } 3 - 5$: Orange / Yellow (Weak acids like vinegar, lemon juice)</li>
                    <li>$\text{pH } 7$: Green (Neutral, pure water)</li>
                    <li>$\text{pH } 8 - 10$: Blue (Weak bases like baking soda)</li>
                    <li>$\text{pH } 11 - 14$: Deep Indigo / Violet (Strong bases like NaOH)</li>
                </ul>
            </div>
        """,
        "points": [
            "pH scale measures [H⁺] from 0 (very acidic) to 14 (very alkaline).",
            "pH = 7 is neutral; pH < 7 is acidic; pH > 7 is basic.",
            "Lower pH means higher H⁺ ion concentration: pH 1 has 10 times higher [H⁺] than pH 2, and 100 times higher than pH 3.",
            "Universal indicator turns red in strong acid, green at neutral pH 7, and violet in strong base."
        ],
        "notes": ["Inverse relationship: As [H⁺] increases, pH value decreases."],
        "bank_ids": [54, 55, 56, 57, 64],
        "extra": [
            {"q": "The 'p' in pH stands for 'potenz', which is a German word meaning:", "opts": ["Purity", "Power", "Potential", "Proton"], "ans": "Power", "exp": "'Potenz' in German means power (referring to the power of hydrogen ion concentration)."},
            {"q": "Solution X has a pH of 3 and Solution Y has a pH of 5. How many times higher is the hydrogen ion concentration in X compared to Y?", "opts": ["2 times", "20 times", "100 times", "1000 times"], "ans": "100 times", "exp": "Each unit drop on the logarithmic pH scale represents a 10-fold increase in [H⁺]; a difference of 2 units means 10² = 100 times."},
            {"q": "What colour does universal indicator paper turn when dipped into a neutral solution of pure water (pH 7)?", "opts": ["Bright red", "Green", "Dark violet", "Yellow"], "ans": "Green", "exp": "Universal indicator displays a green colour at exact neutral pH 7."},
            {"q": "Which of the following pH values corresponds to the strongest acidic solution?", "opts": ["pH 1", "pH 5", "pH 7", "pH 13"], "ans": "pH 1", "exp": "The lowest pH value on the 0–14 scale corresponds to the highest concentration of hydronium ions."},
            {"q": "If agricultural soil has a pH of 4.5, what chemical should a farmer add to treat the field?", "opts": ["Dilute sulphuric acid", "Quicklime (CaO) or slaked lime [Ca(OH)₂]", "Common salt (NaCl)", "Gypsum"], "ans": "Quicklime (CaO) or slaked lime [Ca(OH)₂]", "exp": "Soil with pH 4.5 is too acidic for crop growth; treating with basic quicklime or slaked lime neutralises excess soil acidity."}
        ]
    },

    # 14. Importance of pH in Everyday Life
    {
        "id": "m14", "num": 14,
        "title": "Importance of pH in Everyday Life & Acid Rain",
        "tagline": "Narrow biological pH windows, acid rain threshold (pH < 5.6), and Venus atmosphere.",
        "theory": """
            <p>pH plays a crucial role in biological systems, agriculture, and global environmental chemistry.</p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🧬 Living Organisms & pH Windows:</strong>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li>The human body functions optimally within a very narrow physiological pH range of <strong>7.0 to 7.8</strong>.</li>
                    <li>Human blood, tears, and cerebrospinal fluid maintain a tightly buffered pH of approximately <strong>7.35 to 7.45</strong>.</li>
                </ul>
            </div>
            <div class="activity-box" style="background:#fefce8; border-left:4px solid #eab308; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🌧️ Acid Rain (Threshold pH < 5.6):</strong>
                <p>When atmospheric pollutants like sulphur dioxide (SO₂) and nitrogen oxides (NO₂) dissolve in rain clouds, they form sulphuric and nitric acids. When the pH of rainwater falls below <strong>5.6</strong>, it is called <strong>acid rain</strong>.</p>
                <p>When acid rain flows into rivers and lakes, it lowers the water pH, severely endangering aquatic life and reacting with limestone monuments (like the Taj Mahal, causing "marble cancer").</p>
            </div>
            <div class="activity-box" style="background:#fee2e2; border-left:4px solid #ef4444; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🪐 Venus Atmosphere:</strong>
                <p>The thick, white and yellowish clouds covering the planet Venus are made of concentrated <strong>sulphuric acid (H₂SO₄)</strong>. Life cannot survive under such extreme acidic conditions!</p>
            </div>
        """,
        "points": [
            "Human body functions within a narrow pH range of 7.0 to 7.8.",
            "Rainwater is called acid rain when its pH falls below 5.6.",
            "Acid rain severely harms aquatic ecosystems and corrodes marble structures.",
            "Venusian atmosphere contains thick clouds of sulphuric acid."
        ],
        "notes": ["Acid rain cutoff to remember: pH strictly below 5.6."],
        "bank_ids": [58, 59, 60, 61, 62],
        "extra": [
            {"q": "Human physiological systems operate properly only within which narrow pH range?", "opts": ["2.0 to 3.5", "5.5 to 6.5", "7.0 to 7.8", "9.0 to 10.5"], "ans": "7.0 to 7.8", "exp": "Our body works within a narrow pH range of 7.0 to 7.8; biological enzymes denature outside this window."},
            {"q": "Rainwater is classified as 'acid rain' when its pH value drops below:", "opts": ["6.5", "5.6", "7.0", "4.0"], "ans": "5.6", "exp": "Normal rainwater is slightly acidic (pH ~6) due to dissolved CO₂; when pH falls below 5.6, it is classified as acid rain."},
            {"q": "The clouds in the atmosphere of Venus are composed of which corrosive chemical compound?", "opts": ["Hydrochloric acid", "Sulphuric acid", "Nitric acid", "Acetic acid"], "ans": "Sulphuric acid", "exp": "Venus has an extreme atmosphere filled with dense clouds of concentrated sulphuric acid."},
            {"q": "What happens to aquatic animals in a river when acid rain enters the water body?", "opts": ["Their reproduction rate doubles", "The lowered pH makes survival difficult or impossible", "Water temperature increases dramatically", "Fish grow faster"], "ans": "The lowered pH makes survival difficult or impossible", "exp": "Acidic water leaches toxic aluminium ions and disrupts fish osmoregulation, leading to mass fish mortality."},
            {"q": "The corrosion of historical marble monuments by acid rain is chemically caused by the reaction of acid with:", "opts": ["Silicon dioxide", "Calcium carbonate in marble", "Iron oxide", "Pure carbon"], "ans": "Calcium carbonate in marble", "exp": "H₂SO₄ in acid rain reacts with CaCO₃ in marble forming calcium sulphate, causing pitting ('marble cancer')."}
        ]
    },

    # 15. pH in Digestive System & Tooth Decay
    {
        "id": "m15", "num": 15,
        "title": "pH in the Digestive System & Tooth Decay Prevention",
        "tagline": "Gastric HCl, antacid action (Milk of Magnesia), enamel demineralisation below pH 5.5.",
        "theory": """
            <p>Specific internal pH environments are vital for digestion, but pH imbalances can cause painful disorders.</p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🍲 pH in the Human Stomach & Antacids:</strong>
                <p>Our stomach produces <strong>hydrochloric acid (HCl)</strong>, giving gastric juice a pH of about <strong>1.2 to 2.0</strong>. This highly acidic medium facilitates the protein-digesting enzyme <em>pepsin</em> and destroys harmful ingested pathogens without harming the stomach (protected by mucus).</p>
                <p>During indigestion, the stomach produces excess acid, causing burning pain (heartburn). To get relief, patients take <strong>antacids</strong>—mild edible bases that neutralise excess stomach acid:</p>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li><strong>Milk of Magnesia [Mg(OH)₂]:</strong> Magnesium hydroxide suspension in water.</li>
                    <li><strong>Baking Soda (NaHCO₃):</strong> Sodium hydrogencarbonate.</li>
                </ul>
            </div>
            <div class="activity-box" style="background:#fefce8; border-left:4px solid #eab308; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🦷 Tooth Decay (Dental Caries):</strong>
                <p>Tooth enamel is made of <strong>calcium hydroxyapatite [a crystalline form of Ca₅(PO₄)₃OH]</strong>, the hardest substance in the human body. It does not dissolve in neutral water.</p>
                <p>However, when food particles (especially refined sugars) remain in the mouth after eating, oral bacteria ferment them into organic acids. <strong>Tooth decay begins when oral pH drops below 5.5</strong>. The acid dissolves the enamel mineral lattice. Using toothpastes (which are mildly <strong>basic</strong>) neutralises oral acid and prevents caries.</p>
            </div>
        """,
        "points": [
            "Stomach secretes HCl (pH ~1.2) to activate pepsin without digesting its own mucosal wall.",
            "Antacids are mild bases (Milk of Magnesia, baking soda) used to neutralise hyperacidity.",
            "Tooth decay begins when oral pH falls below 5.5.",
            "Tooth enamel is calcium hydroxyapatite; mildly basic toothpaste neutralises bacterial acid."
        ],
        "notes": ["Critical benchmark: Oral pH below 5.5 triggers tooth enamel corrosion."],
        "bank_ids": [63, 13, 86, 87, 88],
        "extra": [
            {"q": "Tooth enamel, the hardest substance in the human body, is chemically composed of:", "opts": ["Calcium carbonate", "Calcium hydroxyapatite (crystalline calcium phosphate)", "Magnesium sulphate", "Sodium fluoride"], "ans": "Calcium hydroxyapatite (crystalline calcium phosphate)", "exp": "Enamel consists of crystalline calcium hydroxyapatite [Ca₅(PO₄)₃OH]."},
            {"q": "Dental tooth decay begins when the pH inside the oral cavity falls below:", "opts": ["7.0", "6.5", "5.5", "4.0"], "ans": "5.5", "exp": "Below pH 5.5, hydrogen ions dissolve calcium phosphate from tooth enamel, initiating caries."},
            {"q": "What mild base is commonly known as 'Milk of Magnesia' and used as an antacid for indigestion?", "opts": ["Sodium hydroxide [NaOH]", "Magnesium hydroxide [Mg(OH)₂]", "Potassium hydroxide [KOH]", "Calcium oxide [CaO]"], "ans": "Magnesium hydroxide [Mg(OH)₂]", "exp": "Magnesium hydroxide is an insoluble mild base that safely neutralises excess stomach acid without damaging tissue."},
            {"q": "Why do dental doctors universally recommend using toothpastes that are generally basic in nature?", "opts": ["To sweeten the breath", "To neutralise acids produced by oral bacteria and prevent tooth decay", "To bleach the gums", "To dissolve remaining food particles"], "ans": "To neutralise acids produced by oral bacteria and prevent tooth decay", "exp": "Bacteria produce acids from sugar fermentation; basic toothpaste neutralises these acids, keeping oral pH above 5.5."},
            {"q": "Which acid is naturally secreted by human gastric glands to assist digestion in the stomach?", "opts": ["Sulphuric acid", "Hydrochloric acid", "Nitric acid", "Acetic acid"], "ans": "Hydrochloric acid", "exp": "Gastric parietal cells secrete HCl (pH ~1.2) to activate pepsinogen into active pepsin."}
        ]
    },

    # 16. Self-Defence by Animals and Plants
    {
        "id": "m16", "num": 16,
        "title": "Self-Defence by Animals and Plants: Chemical Warfare",
        "tagline": "Methanoic acid in bee stings and nettle leaves, alkaline wasp stings, and neutralising remedies.",
        "theory": """
            <p>Nature uses acid-base chemistry as an ingenious weapon of survival and defence.</p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🐝 Bee Stings and Ant Bites:</strong>
                <p>When a honeybee or a red ant stings, it injects <strong>methanoic acid (formic acid, HCOOH)</strong> into the subcutaneous tissue, causing intense burning pain, redness, and inflammation.</p>
                <p><strong>Remedy:</strong> Applying a mild base like <strong>baking soda (sodium hydrogencarbonate) paste</strong> or calamine lotion (containing zinc carbonate) neutralises the acid and provides immediate soothing relief.</p>
                <p><em>Contrast:</em> A <strong>wasp sting is alkaline</strong> in nature! Therefore, treating a wasp sting with baking soda will worsen the irritation; it should be neutralised with a mild acid like <strong>vinegar</strong>.</p>
            </div>
            <div class="activity-box" style="background:#fefce8; border-left:4px solid #eab308; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🌿 The Nettle Plant and Dock Plant Coexistence:</strong>
                <p>The <strong>nettle plant</strong> (a herbaceous plant growing in wild forests) has leaves covered in stinging hairs. Touching them inadvertently injects <strong>methanoic acid</strong>, causing severe stinging blisters.</p>
                <p>Nature provides a cure right beside the problem! The <strong>dock plant</strong> often grows alongside wild nettles. Rubbing the affected skin with a fresh dock leaf provides quick relief because dock leaf sap contains mildly <strong>basic</strong> chemical constituents that neutralise the acid.</p>
            </div>
        """,
        "points": [
            "Bee stings and ant bites inject acidic methanoic acid (HCOOH).",
            "Treat bee stings with a mild base like baking soda paste.",
            "Wasp stings are alkaline and relieved with mild acids like vinegar.",
            "Nettle leaves inject methanoic acid; dock plant leaves provide a natural alkaline remedy."
        ],
        "notes": ["Remember: Bee sting = Acidic (treat with baking soda); Wasp sting = Alkaline (treat with vinegar)."],
        "bank_ids": [71, 72, 73, 74, 75],
        "extra": [
            {"q": "A honeybee sting injects which chemical substance into human skin causing acute burning pain?", "opts": ["Hydrochloric acid", "Methanoic acid (formic acid)", "Citric acid", "Sodium hydroxide"], "ans": "Methanoic acid (formic acid)", "exp": "Bee venom contains methanoic acid (HCOOH), which causes acute stinging and inflammation."},
            {"q": "What household substance should be applied to neutralise a bee sting?", "opts": ["Vinegar (acetic acid)", "Baking soda paste (mild base)", "Lemon juice", "Concentrated nitric acid"], "ans": "Baking soda paste (mild base)", "exp": "Baking soda is a mild base that neutralises the acidic bee venom."},
            {"q": "In contrast to a bee sting, a wasp sting is alkaline. What household remedy should be applied?", "opts": ["Baking soda", "Mild vinegar or lemon juice", "Soap solution", "Slaked lime"], "ans": "Mild vinegar or lemon juice", "exp": "Wasp venom is alkaline, so applying a mild acid like vinegar neutralises it."},
            {"q": "Touching the stinging hairs of a nettle plant leaf causes painful burning blisters due to:", "opts": ["Injection of oxalic acid crystals", "Injection of methanoic acid", "Alkaline venom", "Fungal spores"], "ans": "Injection of methanoic acid", "exp": "Nettle hairs inject methanoic acid into the skin on contact."},
            {"q": "Which plant commonly found growing near wild nettle provides a natural soothing alkaline remedy?", "opts": ["Cactus", "Dock plant", "Rose plant", "Bamboo"], "ans": "Dock plant", "exp": "Dock leaves contain mildly basic juices that neutralise the nettle's methanoic acid."}
        ]
    },

    # 17. Family of Salts & Hydrolysis pH
    {
        "id": "m17", "num": 17,
        "title": "Family of Salts: Acidic, Basic, and Neutral Salts",
        "tagline": "Strong/weak acid-base combinations and predicting pH of aqueous salt solutions.",
        "theory": """
            <p>Salts having the same positive radical (cation) or negative radical (anion) belong to a <strong>family of salts</strong> (e.g., NaCl and Na₂SO₄ belong to the family of sodium salts; NaCl and KCl belong to the chloride family).</p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>⚖️ Salt Hydrolysis & Solution pH:</strong>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li><strong>1. Strong Acid + Strong Base $\implies$ Neutral Salt ($\text{pH} = 7$):</strong>
                        <br>E.g., $\text{HCl} + \text{NaOH} \to \text{NaCl} + \text{H}_2\text{O}$; $\text{KNO}_3$. Neither ion hydrolyses; solution is perfectly neutral.</li>
                    <li><strong>2. Strong Acid + Weak Base $\implies$ Acidic Salt ($\text{pH} < 7$):</strong>
                        <br>E.g., $\text{HCl} + \text{NH}_4\text{OH} \to \text{NH}_4\text{Cl} + \text{H}_2\text{O}$; $\text{CuSO}_4$. The cation hydrolyses to release excess H⁺ ions, turning blue litmus red!</li>
                    <li><strong>3. Weak Acid + Strong Base $\implies$ Basic Salt ($\text{pH} > 7$):</strong>
                        <br>E.g., $\text{CH}_3\text{COOH} + \text{NaOH} \to \text{CH}_3\text{COONa} + \text{H}_2\text{O}$; $\text{Na}_2\text{CO}_3$. The anion hydrolyses to release excess OH⁻ ions, turning red litmus blue!</li>
                    <li><strong>4. Weak Acid + Weak Base $\implies$ Near-neutral ($\text{pH} \approx 7$):</strong>
                        <br>E.g., Ammonium acetate ($\text{CH}_3\text{COONH}_4$).</li>
                </ul>
            </div>
        """,
        "points": [
            "Strong acid + Strong base = Neutral salt (pH = 7).",
            "Strong acid + Weak base = Acidic salt (pH < 7).",
            "Weak acid + Strong base = Basic salt (pH > 7).",
            "Sodium carbonate (Na₂CO₃) and sodium acetate (CH₃COONa) form basic aqueous solutions."
        ],
        "notes": ["To determine salt pH: Identify the parent acid and base from which the salt is formed."],
        "bank_ids": [76, 77, 78, 79, 80],
        "extra": [
            {"q": "What is the expected pH range of an aqueous solution of ammonium chloride (NH₄Cl)?", "opts": ["pH = 7 (Neutral)", "pH < 7 (Acidic)", "pH > 7 (Basic)", "pH = 14 (Strongly alkaline)"], "ans": "pH < 7 (Acidic)", "exp": "NH₄Cl is formed from a strong acid (HCl) and a weak base (NH₄OH); its solution is acidic (pH < 7)."},
            {"q": "Sodium acetate (CH₃COONa) produces an aqueous solution with pH > 7 because it is formed from:", "opts": ["Strong acid and strong base", "Strong acid and weak base", "Weak acid (acetic acid) and strong base (NaOH)", "Weak acid and weak base"], "ans": "Weak acid (acetic acid) and strong base (NaOH)", "exp": "Weak acid + strong base yields a basic salt with pH > 7 due to anion hydrolysis."},
            {"q": "Which of the following salts will produce a completely neutral aqueous solution with pH = 7?", "opts": ["Ammonium sulphate [(NH₄)₂SO₄]", "Potassium chloride [KCl]", "Sodium carbonate [Na₂CO₃]", "Copper sulphate [CuSO₄]"], "ans": "Potassium chloride [KCl]", "exp": "KCl is formed from strong base KOH and strong acid HCl, so its solution has pH = 7."},
            {"q": "When copper sulphate crystals are dissolved in water, the resulting solution turns blue litmus red. Why?", "opts": ["Copper sulphate contains free chlorine gas", "CuSO₄ is a salt of strong acid (H₂SO₄) and weak base [Cu(OH)₂], producing acidic solution", "Water decomposes into hydrogen gas", "Copper is a halogen"], "ans": "CuSO₄ is a salt of strong acid (H₂SO₄) and weak base [Cu(OH)₂], producing acidic solution", "exp": "Strong acid + weak base yields an acidic salt that turns blue litmus red."},
            {"q": "Which of the following salts belongs to the family of sulphate salts?", "opts": ["NaCl and Na₂SO₄", "K₂SO₄ and CaSO₄", "CaCO₃ and Na₂CO₃", "KNO₃ and NaNO₃"], "ans": "K₂SO₄ and CaSO₄", "exp": "K₂SO₄ and CaSO₄ both contain the sulphate radical (SO₄²⁻), belonging to the sulphate family."}
        ]
    },

    # 18. Common Salt & Chlor-Alkali Process
    {
        "id": "m18", "num": 18,
        "title": "Common Salt & The Chlor-Alkali Process",
        "tagline": "Electrolysis of brine producing NaOH, Cl₂, and H₂, and their industrial applications.",
        "theory": """
            <p><strong>Common Salt (NaCl)</strong> obtained from seawater and rock salt deposits is an indispensable raw material for manufacturing essential industrial chemicals.</p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>⚡ The Chlor-Alkali Process:</strong>
                <p>When electricity is passed through an aqueous concentrated solution of sodium chloride (called <strong>brine</strong>), it decomposes to form sodium hydroxide. The process is called the <strong>chlor-alkali process</strong> because of the products formed: <em>chlor</em> for chlorine and <em>alkali</em> for sodium hydroxide:</p>
                <p style="text-align:center; font-weight:700; color:#1e3a8a; margin:8px 0;">
                    2NaCl(aq) + 2H₂O(l) --[Electricity]--> 2NaOH(aq) + Cl₂(g)↑ + H₂(g)↑
                </p>
            </div>
            <div class="activity-box" style="background:#fefce8; border-left:4px solid #eab308; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🏭 Products and their Electrode Destinations:</strong>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li><strong>At the Anode (Positive electrode):</strong> <strong>Chlorine gas (Cl₂)</strong> is released. Used for water treatment, swimming pools, PVC manufacturing, disinfectants, and CFCs.</li>
                    <li><strong>At the Cathode (Negative electrode):</strong> <strong>Hydrogen gas (H₂)</strong> is released. Used for rocket fuels, hydrogenated margarine, and synthesizing ammonia (NH₃) for agricultural fertilizers.</li>
                    <li><strong>Near the Cathode:</strong> <strong>Sodium hydroxide (NaOH)</strong> solution collects. Used for de-greasing metals, soap and detergent manufacture, paper making, and rayon fibers.</li>
                </ul>
            </div>
        """,
        "points": [
            "Brine is a concentrated aqueous solution of sodium chloride.",
            "Chlor-Alkali equation: 2NaCl + 2H₂O → 2NaOH + Cl₂↑ + H₂↑.",
            "Chlorine gas is liberated at the positive ANODE.",
            "Hydrogen gas is liberated at the negative CATHODE; NaOH solution forms near the cathode."
        ],
        "notes": ["Exam trick: Positive Anode collects Cl₂; Negative Cathode collects H₂."],
        "bank_ids": [81, 82, 83, 89, 90],
        "extra": [
            {"q": "In the industrial chlor-alkali process, what is 'brine'?", "opts": ["Solid rock salt crystals", "A concentrated aqueous solution of sodium chloride", "A mixture of salt and limestone", "Molten sodium metal"], "ans": "A concentrated aqueous solution of sodium chloride", "exp": "Brine is defined as a saturated aqueous solution of sodium chloride used as electrolyte."},
            {"q": "During the electrolysis of brine, which gas is liberated at the ANODE (positive electrode)?", "opts": ["Hydrogen gas (H₂)", "Oxygen gas (O₂)", "Chlorine gas (Cl₂)", "Nitrogen gas (N₂)"], "ans": "Chlorine gas (Cl₂)", "exp": "Negative chloride ions (Cl⁻) migrate to the positive anode, lose electrons, and form chlorine gas."},
            {"q": "Where is the sodium hydroxide (NaOH) solution collected during the chlor-alkali process?", "opts": ["At the anode surface", "Near the cathode compartment", "As a precipitate at the bottom", "It evaporates with chlorine"], "ans": "Near the cathode compartment", "exp": "Na⁺ ions migrate toward the cathode, combining with OH⁻ formed by water reduction near the cathode."},
            {"q": "Which of the following is a primary industrial application of chlorine gas produced in the chlor-alkali process?", "opts": ["Rocket fuel", "Manufacture of PVC, disinfectants, and water purification", "Soap making", "Margarine hydrogenation"], "ans": "Manufacture of PVC, disinfectants, and water purification", "exp": "Chlorine is a powerful germicide used for drinking water sterilisation and producing polyvinyl chloride (PVC)."},
            {"q": "Hydrogen gas produced at the cathode during brine electrolysis is commercially used in:", "opts": ["Disinfecting swimming pools", "Synthesis of ammonia for fertilizers and hydrogenation of oils", "Bleaching paper pulp", "Etching glassware"], "ans": "Synthesis of ammonia for fertilizers and hydrogenation of oils", "exp": "Hydrogen is combined with nitrogen to produce ammonia (Haber process) and used for hydrogenating vegetable oils."}
        ]
    },

    # 19. Bleaching Powder & Baking Soda
    {
        "id": "m19", "num": 19,
        "title": "Bleaching Powder (CaOCl₂) & Baking Soda (NaHCO₃)",
        "tagline": "Manufacture, chemical reactions, tartaric acid in baking powder, and soda-acid fire extinguishers.",
        "theory": """
            <p>Two essential chemical compounds derived from chlor-alkali raw materials are bleaching powder and baking soda.</p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>⚪ Bleaching Powder [Calcium Oxychloride, CaOCl₂]:</strong>
                <p>Produced by passing chlorine gas over dry slaked lime [Ca(OH)₂]:</p>
                <p style="text-align:center; font-weight:700; color:#1e3a8a; margin:8px 0;">
                    Ca(OH)₂(s) + Cl₂(g) → CaOCl₂(s) + H₂O(l)
                </p>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li><strong>Uses:</strong> Bleaching cotton and linen in textile factories, bleaching wood pulp in paper mills, oxidising agent in chemical synthesis, and disinfecting drinking water to make it germ-free.</li>
                </ul>
            </div>
            <div class="activity-box" style="background:#fefce8; border-left:4px solid #eab308; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🧁 Baking Soda [Sodium Hydrogencarbonate, NaHCO₃]:</strong>
                <p>Manufactured using salt, water, carbon dioxide, and ammonia (Solvay process):</p>
                <p style="text-align:center; font-weight:700; color:#065f46; margin:8px 0;">
                    NaCl + H₂O + CO₂ + NH₃ → NH₄Cl + NaHCO₃
                </p>
                <p>On heating during cooking, it decomposes to evolve carbon dioxide gas:</p>
                <p style="text-align:center; font-weight:700; color:#065f46; margin:8px 0;">
                    2NaHCO₃(s) --[Heat]--> Na₂CO₃(s) + H₂O(l) + CO₂(g)↑
                </p>
                <p><strong>Baking Powder vs Baking Soda:</strong> Baking powder is a mixture of baking soda and a mild edible acid (like <strong>tartaric acid</strong>). The CO₂ evolved makes cakes and breads soft and spongy, while tartaric acid neutralises the bitter sodium carbonate formed!</p>
            </div>
        """,
        "points": [
            "Bleaching powder is CaOCl₂, prepared by reacting dry slaked lime Ca(OH)₂ with chlorine gas.",
            "Bleaching powder disinfects drinking water and bleaches fabrics.",
            "Baking soda is NaHCO₃, mild non-corrosive basic salt.",
            "Baking powder = Baking soda + tartaric acid; prevents bitter taste by neutralising Na₂CO₃.",
            "NaHCO₃ is also used in antacids and soda-acid fire extinguishers."
        ],
        "notes": ["Formula difference: Baking soda is NaHCO₃; Bleaching powder is CaOCl₂."],
        "bank_ids": [91, 92, 93, 94, 95],
        "extra": [
            {"q": "Bleaching powder is manufactured by the action of chlorine gas on which substance?", "opts": ["Dry quicklime (CaO)", "Dry slaked lime [Ca(OH)₂]", "Limestone (CaCO₃)", "Calcium chloride (CaCl₂)"], "ans": "Dry slaked lime [Ca(OH)₂]", "exp": "Ca(OH)₂ + Cl₂ → CaOCl₂ + H₂O."},
            {"q": "What is the chemical name and formula of bleaching powder?", "opts": ["Calcium chloride [CaCl₂]", "Calcium oxychloride [CaOCl₂]", "Calcium chlorate [Ca(ClO₃)₂]", "Calcium carbonate [CaCO₃]"], "ans": "Calcium oxychloride [CaOCl₂]", "exp": "Bleaching powder is chemically named calcium oxychloride with formula CaOCl₂."},
            {"q": "Why is a mild edible acid like tartaric acid added to baking soda to make commercial baking powder?", "opts": ["To increase the shelf life", "To neutralise the alkaline, bitter-tasting sodium carbonate formed upon heating", "To make the powder yellow", "To speed up decomposition"], "ans": "To neutralise the alkaline, bitter-tasting sodium carbonate formed upon heating", "exp": "Heating NaHCO₃ forms Na₂CO₃ which tastes bitter; tartaric acid reacts with it to form pleasant-tasting sodium tartrate."},
            {"q": "What gas causes bread and cake dough to rise and become soft and spongy?", "opts": ["Hydrogen gas", "Carbon dioxide gas", "Oxygen gas", "Nitrogen gas"], "ans": "Carbon dioxide gas", "exp": "CO₂ bubbles expand during baking, leaving tiny pores that make baked goods light and spongy."},
            {"q": "Which sodium compound is used as a reactive charge in soda-acid fire extinguishers?", "opts": ["Sodium chloride", "Sodium hydroxide", "Sodium hydrogencarbonate (baking soda)", "Sodium sulphate"], "ans": "Sodium hydrogencarbonate (baking soda)", "exp": "NaHCO₃ reacts with sulphuric acid inside the extinguisher to produce an instantaneous jet of CO₂ foam."}
        ]
    },

    # 20. Washing Soda & Plaster of Paris
    {
        "id": "m20", "num": 20,
        "title": "Washing Soda (Na₂CO₃·10H₂O) & Plaster of Paris (CaSO₄·½H₂O)",
        "tagline": "Water of crystallisation, removal of water hardness, gypsum heating, and surgical cast hardening.",
        "theory": """
            <p>Two crystalline substances demonstrate the fundamental chemical concept of <strong>water of crystallisation</strong>: washing soda and Plaster of Paris.</p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🧼 Washing Soda [Sodium Carbonate Decahydrate, Na₂CO₃·10H₂O]:</strong>
                <p>Prepared by recrystallisation of sodium carbonate obtained from heating baking soda:</p>
                <p style="text-align:center; font-weight:700; color:#1e3a8a; margin:8px 0;">
                    Na₂CO₃(s) + 10H₂O(l) → Na₂CO₃·10H₂O(s)
                </p>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li><strong>Uses:</strong> Glass, soap, and paper industries; manufacturing sodium compounds like <strong>borax</strong>; domestic cleansing agent; and <strong>removing permanent hardness of water</strong>.</li>
                </ul>
            </div>
            <div class="activity-box" style="background:#fefce8; border-left:4px solid #eab308; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🦴 Plaster of Paris [Calcium Sulphate Hemihydrate, CaSO₄·½H₂O]:</strong>
                <p>On heating <strong>gypsum (CaSO₄·2H₂O)</strong> carefully at <strong>373 K (100°C)</strong>, it loses three-fourths of its water of crystallisation and forms Plaster of Paris (POP):</p>
                <p style="text-align:center; font-weight:700; color:#065f46; margin:8px 0;">
                    CaSO₄·2H₂O (Gypsum) --[Heat at 373 K]--> CaSO₄·½H₂O (POP) + 1½H₂O
                </p>
                <p><strong>Why is half a molecule of water written?</strong> Two formula units of CaSO₄ share one molecule of water of crystallisation: $(CaSO_4)_2\cdot H_2O$.</p>
                <p><strong>Setting of POP:</strong> When POP powder is mixed with water, it rehydrates in 10–15 minutes, forming a hard solid mass of interlocking gypsum crystals with heat evolution:</p>
                <p style="text-align:center; font-weight:700; color:#b45309; margin:8px 0;">
                    CaSO₄·½H₂O + 1½H₂O → CaSO₄·2H₂O (Hard solid Gypsum)
                </p>
            </div>
        """,
        "points": [
            "Water of crystallisation is the fixed number of water molecules chemically attached to one formula unit of salt.",
            "Washing soda is Na₂CO₃·10H₂O; used to remove permanent hardness of water and make borax.",
            "Plaster of Paris is CaSO₄·½H₂O; formed by heating gypsum (CaSO₄·2H₂O) at 373 K.",
            "POP sets into hard solid gypsum upon mixing with water; doctors use it to support fractured bones in position.",
            "POP must be stored in moisture-proof containers to prevent premature hardening."
        ],
        "notes": ["Temperature control is critical: Heating gypsum above 373 K forms 'dead burnt plaster' (anhydrous CaSO₄)."],
        "bank_ids": [96, 97, 98, 99, 100],
        "extra": [
            {"q": "What is the chemical formula of washing soda?", "opts": ["Na₂CO₃·H₂O", "Na₂CO₃·5H₂O", "Na₂CO₃·10H₂O", "NaHCO₃·10H₂O"], "ans": "Na₂CO₃·10H₂O", "exp": "Washing soda is sodium carbonate decahydrate, containing 10 molecules of water of crystallisation."},
            {"q": "Which sodium compound is used commercially for removing the permanent hardness of water?", "opts": ["Sodium chloride (NaCl)", "Sodium carbonate decahydrate (washing soda)", "Sodium hydroxide (NaOH)", "Sodium bicarbonate (baking soda)"], "ans": "Sodium carbonate decahydrate (washing soda)", "exp": "Washing soda reacts with soluble calcium and magnesium ions in hard water, precipitating them as insoluble carbonates."},
            {"q": "At what exact temperature must gypsum be heated to produce Plaster of Paris without over-drying?", "opts": ["273 K (0°C)", "373 K (100°C)", "473 K (200°C)", "573 K (300°C)"], "ans": "373 K (100°C)", "exp": "Gypsum must be heated at exactly 373 K; heating above this removes all water, forming inactive 'dead burnt plaster'."},
            {"q": "Why is half a molecule of water (½H₂O) written in the chemical formula of Plaster of Paris (CaSO₄·½H₂O)?", "opts": ["Half water molecules exist freely in air", "Two formula units of CaSO₄ share one molecule of water of crystallisation", "The salt is half dissolved in acid", "Water is partially evaporated"], "ans": "Two formula units of CaSO₄ share one molecule of water of crystallisation", "exp": "Two Ca²⁺ and two SO₄²⁻ ions share a single coordinate H₂O molecule: (CaSO₄)₂·H₂O."},
            {"q": "Why must Plaster of Paris always be stored in moisture-proof, airtight packaging?", "opts": ["It evaporates in air", "It absorbs moisture from air and sets into a useless hard solid mass of gypsum", "It catches fire with humidity", "It decomposes into toxic gas"], "ans": "It absorbs moisture from air and sets into a useless hard solid mass of gypsum", "exp": "POP reacts exothermically with atmospheric moisture to form hard gypsum, rendering it unusable."}
        ]
    }
]

print(f"Total fully detailed modules configured: {len(modules_data)}")

# Now construct the complete 200 questions dataset
final_modules = []

for m in modules_data:
    mod_id = m['id']
    mod_num = m['num']
    
    questions = []
    
    # 1. First 5 questions: Mapped from verified testbank
    for idx, b_id in enumerate(m['bank_ids']):
        bq = get_bank_q(b_id)
        padQ = String = f"{idx+1:02d}"
        questions.append({
            "id": f"{mod_id}_q{padQ}",
            "question": clean_txt(bq['question']),
            "options": [clean_txt(o) for o in bq['options']],
            "answer": clean_txt(bq['answer']),
            "explanation": clean_txt(bq['explanation'])
        })
        
    # 2. Next 5 questions: Dedicated topic-specific concept questions
    for idx, eq in enumerate(m['extra']):
        padQ = f"{len(questions)+1:02d}"
        questions.append({
            "id": f"{mod_id}_q{padQ}",
            "question": clean_txt(eq['q']),
            "options": [clean_txt(o) for o in eq['opts']],
            "answer": clean_txt(eq['ans']),
            "explanation": clean_txt(eq['exp'])
        })
        
    final_modules.append({
        "id": mod_id,
        "moduleNumber": mod_num,
        "title": clean_txt(m['title']),
        "tagline": clean_txt(m['tagline']),
        "readingTimeMins": 4,
        "theoryHtml": clean_txt(m['theory']),
        "pointsToRemember": [clean_txt(p) for p in m['points']],
        "keyNotes": [clean_txt(k) for k in m['notes']],
        "questions": questions
    })

chapter2_obj = {
    "chapterId": "c10_sci_ch2",
    "chapterNumber": 2,
    "chapterTitle": "Acids, Bases and Salts",
    "subject": "Science",
    "cls": "Class 10",
    "totalModules": 20,
    "totalQuestions": 200,
    "passingPercentage": 70,
    "modules": final_modules
}

output_content = f"""/* =============================================================================
   ELITE CLASSES — CLASS 10 SCIENCE: CHAPTER 2 COURSE DATA
   Acids, Bases and Salts (Class 10 Comprehensive Curriculum Aligned)
   - Exactly 20 Progressive Mini-Modules
   - 10 Authentic Conceptual Questions per Module (200 MCQs total)
   - 70% Passing Threshold Progressive Mastery Unlocking
   - Proper Scientific & Chemical Typography (Unicode Subscripts)
   - Deep, Non-Redundant Pedagogical Theory and Plausible Distractors
   - Zero Mentions of External Publishers
   ============================================================================= */

const COURSE_CHAPTER_2_SCIENCE = {json.dumps(chapter2_obj, indent=4, ensure_ascii=False)};

if (typeof window !== 'undefined') {{
    window.COURSE_CHAPTER_DATA = COURSE_CHAPTER_2_SCIENCE;
}}
if (typeof module !== 'undefined' && module.exports) {{
    module.exports = COURSE_CHAPTER_2_SCIENCE;
}}
"""

out_path = 'modules/course/data/class10/science/chapter2_course_data.js'
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(output_content)

print(f"🎉 Successfully built authentic Chapter 2 data at: {out_path}")
print(f"Total modules: {len(final_modules)}, Total questions: {sum(len(m['questions']) for m in final_modules)}")
