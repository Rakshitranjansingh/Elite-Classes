# -*- coding: utf-8 -*-
"""
CH3 Part 1: Modules 1 to 10
"""
import json

with open('scratch/ch3_bank_questions.json', 'r', encoding='utf-8') as f:
    bank_questions = json.load(f)

bank_by_id = {q['id']: q for q in bank_questions}

def get_bank_q(qid, new_id):
    q = bank_by_id[qid]
    opts = [opt['text'] for opt in q['options']]
    correct_key = q['correct_option']
    correct_text = next(opt['text'] for opt in q['options'] if opt['key'] == correct_key)
    qtext = q['question'].replace('NCERT', 'standard curriculum')
    exp = q['explanation'].replace('NCERT', 'standard curriculum')
    return {
        "id": new_id,
        "question": qtext,
        "options": opts,
        "answer": correct_text,
        "explanation": exp
    }

modules_1_to_10 = []

# Module 1
m01 = {
  "id": "m01", "moduleNumber": 1,
  "title": "Physical Properties of Metals: Lustre, Malleability, Ductility & Conductivity",
  "tagline": "Mechanical, acoustic, and thermal characteristics of metallic elements.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>In our daily lives, metals play an indispensable role—from cooking utensils and electrical wiring to construction beams and jewellery. To understand why metals are selected for these diverse applications, we examine their distinctive physical properties:</p>
<ul>
  <li><strong>Metallic Lustre:</strong> In their pure unoxidised state, metals possess a bright, shining surface. This characteristic shine is called metallic lustre. Freshly cut or polished surfaces of metals like copper, aluminium, silver, and gold reflect incident light specularly.</li>
  <li><strong>Hardness:</strong> Most metals are typically hard solids at room temperature. The degree of hardness varies from metal to metal (iron and copper are extremely hard, whereas sodium and potassium are soft exceptions).</li>
  <li><strong>Malleability:</strong> Metals can be beaten or rolled into extremely thin foils without shattering. Gold ($\text{Au}$) and silver ($\text{Ag}$) are the most malleable metals known—gold can be hammered into sheets only $0.00001\text{ mm}$ thick, widely used in gold leaf decor and fine confectioneries.</li>
  <li><strong>Ductility:</strong> The ability of a metal to be drawn into thin, long wires is known as ductility. Gold is the most ductile metal: an astonishing $2\text{ km}$ long wire can be drawn from just $1\text{ gram}$ of pure gold!</li>
  <li><strong>Thermal Conductivity:</strong> Metals are excellent conductors of heat and have high melting points. Silver and copper are the best thermal conductors, which is why cooking vessels frequently have copper bases. In contrast, lead ($\text{Pb}$) and mercury ($\text{Hg}$) are comparatively poor thermal conductors.</li>
  <li><strong>Electrical Conductivity:</strong> Metals allow electric charges to flow with minimal resistance because of free delocalised valence electrons. Electrical wiring uses copper and aluminium cables, coated with polyvinylchloride ($\text{PVC}$) or vulcanised rubber for electrical insulation and safety.</li>
  <li><strong>Sonority:</strong> When metals strike a hard surface, they produce a deep, resonant ringing sound. Substances with this acoustic property are called sonorous, explaining why school bells, temple bells, and musical instrument strings are made of metals or metallic alloys.</li>
</ul>
<div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
  <strong>🔬 Laboratory Investigation: Thermal Conductivity of Metals</strong>
  <p style="margin:4px 0 0 0; line-height:1.6;">Clamp a long copper wire horizontally on an iron stand. Fix a small steel pin to the free end using molten wax. Heat the wire near the clamped end using a Bunsen burner. Heat conducts rapidly along the metal wire until it melts the wax, causing the pin to drop. Crucially, the metal wire itself does not melt, demonstrating high thermal conductivity combined with a high melting point.</p>
</div>
""",
  "pointsToRemember": [
    "Malleability allows metals to be hammered into sheets (gold and silver are the most malleable); ductility allows them to be drawn into wires (gold is the most ductile).",
    "Silver is the best conductor of both heat and electricity, followed closely by copper; lead and mercury are comparatively poor thermal conductors.",
    "Electrical wires are coated with polyvinylchloride (PVC) or synthetic rubber to provide electrical insulation and prevent electric shocks."
  ],
  "keyNotes": [
    "Board Examination Focus: Remember that gold is the most ductile metal (1 g yields a 2 km wire) and silver and copper are the best conductors of heat."
  ],
  "questions": [
    get_bank_q(3, "m01_q01"), get_bank_q(4, "m01_q02"), get_bank_q(5, "m01_q03"),
    get_bank_q(6, "m01_q04"), get_bank_q(7, "m01_q05"),
    {
      "id": "m01_q06",
      "question": "What structural feature at the subatomic level enables metals to conduct electric currents so efficiently?",
      "options": [
        "Rigid covalent lattice networks locking all charges in place.",
        "A sea of free, delocalised valence electrons that drift under an applied electric field.",
        "Rapid dissociation of metal atoms into gas molecules.",
        "High concentration of stationary neutrons in the crystal core."
      ],
      "answer": "A sea of free, delocalised valence electrons that drift under an applied electric field.",
      "explanation": "Metals have loosely bound valence electrons that are free to move throughout the metallic lattice, providing high electrical conductivity."
    },
    {
      "id": "m01_q07",
      "question": "Although silver is the best conductor of electricity, why are high-voltage overhead transmission lines primarily manufactured using aluminium and copper?",
      "options": [
        "Silver is brittle and shatters under wind tension.",
        "Silver undergoes rapid radioactive decay in outdoor air.",
        "Copper and aluminium are far more abundant and cost-effective than precious silver.",
        "Aluminium conducts electricity better than silver at high temperatures."
      ],
      "answer": "Copper and aluminium are far more abundant and cost-effective than precious silver.",
      "explanation": "Silver is a precious, scarce, and expensive metal. Aluminium and copper offer an optimal balance of high electrical conductivity, light weight, and economic viability."
    },
    {
      "id": "m01_q08",
      "question": "Why are temple bells and school bells fabricated out of bronze or brass alloys rather than wood or plastics?",
      "options": [
        "Metals are sonorous and produce a ringing acoustic resonance when struck.",
        "Metals absorb all acoustic vibrations without reflecting sound.",
        "Metals have very low density, making them lightweight to hang.",
        "Metals melt easily when struck repeatedly."
      ],
      "answer": "Metals are sonorous and produce a ringing acoustic resonance when struck.",
      "explanation": "Sonorous substances emit a characteristic deep ringing sound upon impact, a property intrinsic to metals and metallic alloys."
    },
    {
      "id": "m01_q09",
      "question": "Domestic electrical wires carrying 220 V current are enveloped in a brightly colored plastic sheath primarily made of:",
      "options": [
        "Graphite polymer composite.",
        "Polyvinylchloride (PVC) or rubber-like insulating material.",
        "Pressed aluminium foil wrapping.",
        "Silicate glass wool powder."
      ],
      "answer": "Polyvinylchloride (PVC) or rubber-like insulating material.",
      "explanation": "PVC is an excellent electrical insulator with high dielectric strength that prevents short-circuits and protects humans from electric shocks."
    },
    {
      "id": "m01_q10",
      "question": "When a tarnished block of lead or copper is sliced cleanly with a sharp edge, the freshly exposed surface displays bright lustre. This occurs because:",
      "options": [
        "Pure unoxidised metal atoms at the fresh surface reflect incident light specularly.",
        "The knife blade deposits a layer of polish on the metal.",
        "Atmospheric nitrogen reacts to produce a fluorescent gas.",
        "Friction creates permanent incandescent heat."
      ],
      "answer": "Pure unoxidised metal atoms at the fresh surface reflect incident light specularly.",
      "explanation": "Metallic lustre is an intrinsic optical property of pure metals; a fresh cut removes surface tarnish and reveals the reflective metallic lattice."
    }
  ]
}
modules_1_to_10.append(m01)

# Module 2
m02 = {
  "id": "m02", "moduleNumber": 2,
  "title": "Non-Metals & Physical Exceptions: State, Hardness, Lustre & Allotropes",
  "tagline": "Examining anomalies in physical states, melting points, and allotropes.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Non-metals are elements that typically display physical properties opposite to metals—they are generally poor conductors of heat and electricity, non-malleable, non-ductile, and brittle when solid. However, elements cannot be classified solely on physical properties because there are several striking <strong>exceptions</strong>:</p>
<ul>
  <li><strong>Physical State:</strong> While almost all metals are solids, <strong>mercury ($\text{Hg}$)</strong> is the only metal that is liquid at room temperature. Non-metals exist as solids (carbon, sulphur, phosphorus) or gases (oxygen, nitrogen, chlorine), with <strong>bromine ($\text{Br}_2$)</strong> being the only liquid non-metal.</li>
  <li><strong>Melting and Boiling Points:</strong> Metals generally have high melting points (tungsten melts at over $3400\ ^\circ\text{C}$). However, <strong>gallium ($\text{Ga}$)</strong> and <strong>caesium ($\text{Cs}$)</strong> have such exceptionally low melting points ($30\ ^\circ\text{C}$ and $28.5\ ^\circ\text{C}$) that they liquefy simply when placed on the palm of your hand!</li>
  <li><strong>Metallic Lustre:</strong> Non-metals are usually dull and non-lustrous. The notable exception is <strong>iodine ($\text{I}_2$)</strong>, which is a non-metal with a shiny, purple-black lustrous crystalline surface.</li>
  <li><strong>Allotropes of Carbon:</strong> Carbon is a non-metal that exists in several distinct structural forms called allotropes:
    <ul>
      <li><em>Diamond:</em> A tetrahedral crystalline network that is the <strong>hardest naturally occurring substance known</strong>, possessing an extraordinarily high melting and boiling point.</li>
      <li><em>Graphite:</em> A planar hexagonal sheet structure with delocalised electrons that makes it an <strong>excellent conductor of electricity</strong>, used in dry cell electrodes and pencil leads.</li>
    </ul>
  </li>
  <li><strong>Hardness vs Softness:</strong> While metals are normally hard, <strong>alkali metals</strong> like lithium ($\text{Li}$), sodium ($\text{Na}$), and potassium ($\text{K}$) are so soft that they can be easily sliced with a simple kitchen knife, and they have low densities and low melting points.</li>
</ul>
<div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
  <strong>🔬 Critical Conceptual Takeaway: Chemical vs Physical Classification</strong>
  <p style="margin:4px 0 0 0; line-height:1.6;">Because of these numerous physical exceptions (liquid mercury, liquid bromine, soft alkali metals, lustrous iodine, conducting graphite, ultra-hard diamond), scientists classify elements more reliably using their <strong>chemical properties</strong>—specifically the nature of their oxides and their tendency to lose or gain electrons.</p>
</div>
""",
  "pointsToRemember": [
    "Mercury is the only liquid metal, and Bromine is the only liquid non-metal at room temperature.",
    "Gallium and Caesium melt in the palm of your hand due to very low melting points (~30 °C).",
    "Iodine is a lustrous non-metal; diamond (carbon allotrope) is the hardest natural substance; graphite (carbon allotrope) is an electrical conductor."
  ],
  "keyNotes": [
    "Board Exam Alert: Frequently asked exceptions include liquid non-metal (Bromine), non-metal with lustre (Iodine), and metals cut with a knife (Na, K, Li)."
  ],
  "questions": [
    get_bank_q(1, "m02_q01"), get_bank_q(2, "m02_q02"), get_bank_q(10, "m02_q03"),
    get_bank_q(11, "m02_q04"), get_bank_q(12, "m02_q05"), get_bank_q(13, "m02_q06"),
    get_bank_q(14, "m02_q07"),
    {
      "id": "m02_q08",
      "question": "Which of the following carbon allotropes is utilised as electrodes in dry cells and industrial electrolysis tanks due to its electrical conductivity?",
      "options": [
        "Fullerene C60",
        "Diamond",
        "Graphite",
        "Bone charcoal"
      ],
      "answer": "Graphite",
      "explanation": "In graphite, each carbon atom is bonded to three others in hexagonal layers, leaving one free mobile electron per atom that conducts electricity."
    },
    {
      "id": "m02_q09",
      "question": "Why are elements categorized into metals and non-metals primarily based on their chemical properties rather than physical properties alone?",
      "options": [
        "Physical properties can only be measured under zero gravity conditions.",
        "Too many physical exceptions exist, such as liquid metals, lustrous non-metals, and soft metals.",
        "Physical properties change randomly every hour.",
        "All non-metals turn into metals when dissolved in water."
      ],
      "answer": "Too many physical exceptions exist, such as liquid metals, lustrous non-metals, and soft metals.",
      "explanation": "Due to overlapping exceptions (Hg is liquid, graphite conducts, diamond is hard, iodine shines, Na is soft), chemical behaviour provides an unambiguous distinction."
    },
    {
      "id": "m02_q10",
      "question": "A solid element X has a high melting point, is lustrous, but does not conduct electricity and is brittle. When burned in oxygen, it forms an acidic oxide. Element X is most likely:",
      "options": [
        "Sodium",
        "Iodine",
        "Iron",
        "Copper"
      ],
      "answer": "Iodine",
      "explanation": "Iodine is a non-metal that has a lustrous appearance, does not conduct electricity, and forms acidic oxides, showing typical non-metallic chemical character."
    }
  ]
}
modules_1_to_10.append(m02)

# Module 3
m03 = {
  "id": "m03", "moduleNumber": 3,
  "title": "Chemical Properties: Reaction with Oxygen & Basic Metal Oxides",
  "tagline": "Combustion of metals in air, oxide formation, and protective surface layers.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Almost all metals combine with atmospheric oxygen to form metal oxides:</p>
<p style="text-align:center; font-weight:bold; font-size:1.1em; color:#1e3a8a;">
  $\text{Metal} + \text{Oxygen} \longrightarrow \text{Metal Oxide}$
</p>
<p>Most metal oxides are <strong>basic</strong> in nature. When tested with litmus paper, their aqueous suspensions turn red litmus paper blue. However, different metals show vastly different affinities towards oxygen:</p>
<ul>
  <li><strong>Vigorous Combustion (Sodium & Potassium):</strong> Sodium ($\text{Na}$) and potassium ($\text{K}$) react so vigorously with oxygen at room temperature that they catch fire spontaneously if kept in the open. To prevent accidental fires, they are stored permanently immersed in <strong>kerosene oil</strong>.</li>
  <li><strong>Magnesium:</strong> Magnesium ribbon burns in air with a dazzling white flame to form a white powder of basic magnesium oxide:
    $$2Mg(s) + O_2(g) \longrightarrow 2MgO(s)$$
  </li>
  <li><strong>Copper:</strong> Copper does not burn with flame, but when heated strongly in a burner, its red-brown surface combines with oxygen to form a black surface coating of <strong>copper(II) oxide</strong>:
    $$2Cu(s) + O_2(g) \xrightarrow{\Delta} 2CuO(s)\quad (\text{Black})$$
  </li>
  <li><strong>Aluminium:</strong> Aluminium burns in oxygen when strongly heated to form aluminium oxide:
    $$4Al(s) + 3O_2(g) \longrightarrow 2Al_2O_3(s)$$
  </li>
  <li><strong>Iron:</strong> An iron rod does not burn on heating; however, iron filings sprinkled into a Bunsen burner flame burn with bright sparkling scintillations due to high surface area.</li>
  <li><strong>Noble Metals (Silver & Gold):</strong> Silver ($\text{Ag}$) and gold ($\text{Au}$) do not react with oxygen even at extremely high furnace temperatures.</li>
  <li><strong>Self-Protecting Metal Oxide Layers:</strong> At ordinary room temperature, surfaces of metals such as <strong>magnesium, aluminium, zinc, and lead</strong> develop a thin, impervious layer of oxide that seals the underlying metal from further atmospheric corrosion.</li>
</ul>
<div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
  <strong>🔬 Laboratory Observation: Heating Copper in Air</strong>
  <p style="margin:4px 0 0 0; line-height:1.6;">Place copper powder in a china dish and heat it strongly over a burner. The reddish-brown surface turns jet-black. This black substance is copper(II) oxide ($CuO$). If hydrogen gas is subsequently passed over this hot black material, the reverse reaction occurs: $CuO + H_2 \xrightarrow{\Delta} Cu + H_2O$, regenerating shiny reddish-brown copper metal!</p>
</div>
""",
  "pointsToRemember": [
    "Most metal oxides are basic in nature and react with water to form basic solutions that turn red litmus blue.",
    "Sodium and potassium react violently with oxygen at room temperature and are stored submerged under kerosene oil to prevent accidental fires.",
    "At room temperature, aluminium, magnesium, zinc, and lead form an impermeable, protective oxide layer that shields the metal from further oxidation."
  ],
  "keyNotes": [
    "Exam Highlight: Heating copper in air produces black copper(II) oxide (CuO), while iron filings burn with bright sparks despite solid iron rods not burning."
  ],
  "questions": [
    get_bank_q(15, "m03_q01"), get_bank_q(16, "m03_q02"), get_bank_q(20, "m03_q03"),
    get_bank_q(51, "m03_q04"), get_bank_q(52, "m03_q05"),
    {
      "id": "m03_q06",
      "question": "What is the chemical identity and physical appearance of the product formed when magnesium ribbon burns in air with a dazzling white flame?",
      "options": [
        "A black crystalline mass of Magnesium Nitride (Mg3N2).",
        "A white basic powder of Magnesium Oxide (MgO).",
        "A colorless liquid of Magnesium Hydroxide (Mg(OH)2).",
        "A yellow gas of Magnesium Carbonate (MgCO3)."
      ],
      "answer": "A white basic powder of Magnesium Oxide (MgO).",
      "explanation": "Magnesium burns vigorously in atmospheric oxygen to produce a fine white powder of basic magnesium oxide (MgO)."
    },
    {
      "id": "m03_q07",
      "question": "Why does a solid iron rod held over a Bunsen flame not catch fire, whereas fine iron filings sprinkled into the same flame burn with brilliant sparkles?",
      "options": [
        "Iron filings are mixed with combustible carbon black.",
        "Iron filings possess a vastly greater surface area exposed to oxygen, enabling rapid surface combustion.",
        "A solid iron rod is made of non-metallic cast iron.",
        "The burner flame is cooler when touching a solid iron rod."
      ],
      "answer": "Iron filings possess a vastly greater surface area exposed to oxygen, enabling rapid surface combustion.",
      "explanation": "Fine iron filings have a much higher surface-area-to-volume ratio, facilitating immediate and rapid reaction with atmospheric oxygen."
    },
    {
      "id": "m03_q08",
      "question": "Which of the following metals develops a natural, impervious oxide film at room temperature that shields the interior metal from atmospheric degradation?",
      "options": [
        "Potassium",
        "Aluminium",
        "Sodium",
        "Mercury"
      ],
      "answer": "Aluminium",
      "explanation": "Aluminium, magnesium, zinc, and lead naturally form a thin, tough, adhering oxide layer that halts further corrosion."
    },
    {
      "id": "m03_q09",
      "question": "When hydrogen gas is passed over heated black copper(II) oxide (CuO), the black coating turns reddish-brown. This reaction is classified as:",
      "options": [
        "Thermal decomposition",
        "Redox displacement reaction where CuO is reduced to Cu",
        "Combination reaction forming copper hydride",
        "Electrochemical hydrolysis"
      ],
      "answer": "Redox displacement reaction where CuO is reduced to Cu",
      "explanation": "Hydrogen reduces black CuO to metallic reddish-brown copper, while hydrogen itself is oxidised to water: CuO + H₂ -> Cu + H₂O."
    },
    {
      "id": "m03_q10",
      "question": "Why do jewellers and coin minters use gold and platinum for long-lasting ornaments rather than copper or iron?",
      "options": [
        "Gold and platinum do not react with oxygen, water, or moisture even at high temperatures, retaining their lustre indefinitely.",
        "Gold and platinum react instantly with air to form transparent protective nitrates.",
        "Gold and platinum are synthetic metals created inside blast furnaces.",
        "Gold and platinum have the lowest melting points of all metals."
      ],
      "answer": "Gold and platinum do not react with oxygen, water, or moisture even at high temperatures, retaining their lustre indefinitely.",
      "explanation": "Gold and platinum are noble metals situated at the very bottom of the reactivity series; they do not oxidise or corrode in air."
    }
  ]
}
modules_1_to_10.append(m03)

# Module 4
m04 = {
  "id": "m04", "moduleNumber": 4,
  "title": "Amphoteric Oxides: Dual Acid-Base Behavior of Al₂O₃ and ZnO",
  "tagline": "Neutralisation of both acids and bases by amphoteric metallic oxides.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>While the vast majority of metallic oxides are strictly basic (reacting only with acids to yield salt and water), certain metallic oxides exhibit a remarkable dual chemical personality. These oxides react with <strong>both acids and bases</strong> to produce salt and water. Such metal oxides are defined as <strong>amphoteric oxides</strong>.</p>
<p>The two classic Class 10 curriculum examples of amphoteric oxides are <strong>Aluminium Oxide ($\text{Al}_2\text{O}_3$)</strong> and <strong>Zinc Oxide ($\text{ZnO}$)</strong>.</p>

<h3>1. Dual Chemical Character of Aluminium Oxide ($\text{Al}_2\text{O}_3$):</h3>
<ul>
  <li><strong>Reaction with an Acid (Acts as a Base):</strong><br>
  When aluminium oxide reacts with dilute hydrochloric acid, it behaves as a basic oxide, forming aluminium chloride salt and water:
  $$\text{Al}_2\text{O}_3(s) + 6\text{HCl}(aq) \longrightarrow 2\text{AlCl}_3(aq) + 3\text{H}_2\text{O}(l)$$
  </li>
  <li><strong>Reaction with a Strong Base (Acts as an Acid):</strong><br>
  When aluminium oxide reacts with aqueous sodium hydroxide, it behaves as an acidic oxide, neutralising the base to form the soluble salt <strong>sodium aluminate</strong> and water:
  $$\text{Al}_2\text{O}_3(s) + 2\text{NaOH}(aq) \longrightarrow 2\text{NaAlO}_2(aq) + \text{H}_2\text{O}(l)$$
  </li>
</ul>

<h3>2. Dual Chemical Character of Zinc Oxide ($\text{ZnO}$):</h3>
<ul>
  <li><strong>Reaction with an Acid (Acts as a Base):</strong>
  $$\text{ZnO}(s) + 2\text{HCl}(aq) \longrightarrow \text{ZnCl}_2(aq) + \text{H}_2\text{O}(l)$$
  </li>
  <li><strong>Reaction with a Strong Base (Acts as an Acid):</strong><br>
  Zinc oxide reacts with sodium hydroxide to form <strong>sodium zincate</strong>:
  $$\text{ZnO}(s) + 2\text{NaOH}(aq) \longrightarrow \text{Na}_2\text{ZnO}_2(aq) + \text{H}_2\text{O}(l)$$
  </li>
</ul>

<div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
  <strong>🔬 Experimental Verification of Amphoteric Nature</strong>
  <p style="margin:4px 0 0 0; line-height:1.6;">Take two test tubes containing a small quantity of white aluminium oxide powder. To test tube A, add $5\text{ mL}$ of dilute $HCl$. To test tube B, add $5\text{ mL}$ of concentrated aqueous $NaOH$. Warm both test tubes gently. The white powder completely dissolves in both test tubes, producing crystal-clear solutions of aluminium chloride and sodium aluminate respectively, proving its amphoteric character.</p>
</div>
""",
  "pointsToRemember": [
    "Amphoteric oxides are metal oxides that react with both acids and bases to produce salt and water.",
    "Aluminium oxide (Al₂O₃) and Zinc oxide (ZnO) are the two primary amphoteric oxides in the Class 10 curriculum.",
    "Al₂O₃ + 2NaOH → 2NaAlO₂ (Sodium Aluminate) + H₂O; ZnO + 2NaOH → Na₂ZnO₂ (Sodium Zincate) + H₂O."
  ],
  "keyNotes": [
    "Common Board Exam Question: Write balanced chemical equations showing the amphoteric nature of Al₂O₃ with HCl and NaOH. Note the formula NaAlO₂ for sodium aluminate!"
  ],
  "questions": [
    get_bank_q(17, "m04_q01"), get_bank_q(18, "m04_q02"), get_bank_q(19, "m04_q03"),
    get_bank_q(53, "m04_q04"), get_bank_q(54, "m04_q05"),
    {
      "id": "m04_q06",
      "question": "What is the chemical formula of the salt formed when aluminium oxide reacts with hot, concentrated aqueous sodium hydroxide?",
      "options": [
        "NaAlO₂",
        "Na3AlO3",
        "Al(OH)3",
        "Na2Al2O4"
      ],
      "answer": "NaAlO₂",
      "explanation": "Aluminium oxide reacts with sodium hydroxide to form sodium aluminate, which has the chemical formula NaAlO₂."
    },
    {
      "id": "m04_q07",
      "question": "In the chemical reaction Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O, aluminium oxide acts as:",
      "options": [
        "A neutral solvent.",
        "An acidic oxide that neutralises the base.",
        "A basic catalyst.",
        "A reducing gas."
      ],
      "answer": "An acidic oxide that neutralises the base.",
      "explanation": "Because it reacts with a strong base (NaOH) to produce a salt and water, Al₂O₃ is functioning here as an acidic oxide."
    },
    {
      "id": "m04_q08",
      "question": "Which of the following metal oxides is strictly basic and will NOT dissolve in aqueous sodium hydroxide?",
      "options": [
        "Al₂O₃",
        "ZnO",
        "Na2O",
        "PbO"
      ],
      "answer": "Na2O",
      "explanation": "Sodium oxide (Na2O) is a purely basic oxide. It does not react with or dissolve in bases like NaOH."
    },
    {
      "id": "m04_q09",
      "question": "What is the name and formula of the salt obtained when zinc oxide dissolves in sodium hydroxide solution?",
      "options": [
        "Sodium zincate, Na2ZnO₂",
        "Sodium zinc oxide, NaZnO",
        "Zinc hydroxide, Zn(OH)2",
        "Sodium zinc chloride, NaZnCl3"
      ],
      "answer": "Sodium zincate, Na2ZnO₂",
      "explanation": "Zinc oxide dissolves in sodium hydroxide to form the soluble complex salt sodium zincate, Na2ZnO₂."
    },
    {
      "id": "m04_q10",
      "question": "How can a student confirm in the laboratory that an unlabelled white metal oxide powder is amphoteric rather than strictly basic?",
      "options": [
        "By testing its electrical conductivity in the dry solid state.",
        "By verifying that it dissolves completely in both dilute hydrochloric acid and aqueous sodium hydroxide.",
        "By burning it in a flame to observe if it produces carbon dioxide.",
        "By testing if it floats on water."
      ],
      "answer": "By verifying that it dissolves completely in both dilute hydrochloric acid and aqueous sodium hydroxide.",
      "explanation": "An amphoteric oxide dissolves in both strong acids and strong bases to yield clear salt solutions."
    }
  ]
}
modules_1_to_10.append(m04)

# Module 5
m05 = {
  "id": "m05", "moduleNumber": 5,
  "title": "Metal Oxides in Water (Alkalis) & Anodising of Aluminium",
  "tagline": "Soluble basic oxides and the industrial electrochemical enhancement of oxide coats.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>While the majority of metallic oxides are insoluble in water, certain metallic oxides dissolve readily in water to form water-soluble hydroxides known as <strong>alkalis</strong>:</p>
<ul>
  <li><strong>Sodium Oxide:</strong> Dissolves exothermically in water to form sodium hydroxide:
  $$\text{Na}_2\text{O}(s) + \text{H}_2\text{O}(l) \longrightarrow 2\text{NaOH}(aq)$$
  </li>
  <li><strong>Potassium Oxide:</strong> Dissolves in water to form potassium hydroxide:
  $$\text{K}_2\text{O}(s) + \text{H}_2\text{O}(l) \longrightarrow 2\text{KOH}(aq)$$
  </li>
</ul>
<p>These alkaline solutions turn red litmus blue and possess a soapy touch.</p>

<hr style="border:0; border-top:1px solid #cbd5e1; margin:16px 0;">

<h3>The Industrial Process of Anodising:</h3>
<p><strong>Anodising</strong> is an electrochemical technique used to develop a thick, durable, and corrosion-resistant protective layer of aluminium oxide on aluminium articles.</p>
<ul>
  <li><strong>Natural Layer:</strong> Aluminium naturally develops a thin, transparent layer of aluminium oxide ($\text{Al}_2\text{O}_3$) when exposed to air, which renders it passive against further corrosion.</li>
  <li><strong>Electrochemical Thickening:</strong> In anodising, a clean aluminium article is made the <strong>anode</strong> (connected to the positive terminal of a DC power supply) in an electrolytic cell containing <strong>dilute sulphuric acid ($\text{H}_2\text{SO}_4$)</strong> as the electrolyte.</li>
  <li><strong>Electrode Reaction:</strong> During electrolysis, water is oxidised at the anode, releasing nascent oxygen gas:
  $$2\text{H}_2\text{O} \longrightarrow \text{O}_2(g) + 4\text{H}^+ + 4e^-$$
  This liberated oxygen reacts immediately with the aluminium anode surface to produce a uniform, robust, and thicker oxide coat.</li>
  <li><strong>Dyeing & Decoration:</strong> The freshly formed anodic oxide coating has microscopic pores that readily absorb organic dyes before being sealed in boiling water, allowing aluminium products (cookware, door frames, smartphones) to be produced in vibrant, non-fading metallic colors.</li>
</ul>
""",
  "pointsToRemember": [
    "Most metal oxides are insoluble in water, but Na₂O and K₂O dissolve in water to form alkalis (NaOH and KOH).",
    "Anodising is the electrolytic process of creating a thick, protective aluminium oxide layer on aluminium articles.",
    "During anodising, the aluminium article serves as the anode (+) immersed in dilute sulphuric acid electrolyte."
  ],
  "keyNotes": [
    "Board Tip: Understand why aluminium is made the ANODE during anodising—oxygen is liberated at the positive anode, which reacts with aluminium to form the thick Al₂O₃ coating."
  ],
  "questions": [
    get_bank_q(21, "m05_q01"), get_bank_q(55, "m05_q02"), get_bank_q(56, "m05_q03"),
    get_bank_q(57, "m05_q04"), get_bank_q(58, "m05_q05"),
    {
      "id": "m05_q06",
      "question": "What is the balanced chemical equation for the reaction that occurs when solid potassium oxide is added to water?",
      "options": [
        "K₂O(s) + H₂O(l) -> 2KOH(aq)",
        "K₂O(s) + H₂O(l) -> K₂O₂(aq) + H₂(g)",
        "K₂O(s) + 2H₂O(l) -> 2K(OH)2(aq)",
        "2K₂O(s) + H₂O(l) -> 4K(s) + O₂(g)"
      ],
      "answer": "K₂O(s) + H₂O(l) -> 2KOH(aq)",
      "explanation": "Potassium oxide is an alkali-forming basic oxide that dissolves in water to produce potassium hydroxide solution."
    },
    {
      "id": "m05_q07",
      "question": "Which of the following compounds is an example of an alkali (a water-soluble base)?",
      "options": [
        "Copper(II) hydroxide, Cu(OH)2",
        "Sodium hydroxide, NaOH",
        "Iron(III) hydroxide, Fe(OH)3",
        "Aluminium hydroxide, Al(OH)3"
      ],
      "answer": "Sodium hydroxide, NaOH",
      "explanation": "Alkalis are bases that dissolve in water. Sodium hydroxide (NaOH) is highly soluble, whereas hydroxides of copper, iron, and aluminium are insoluble."
    },
    {
      "id": "m05_q08",
      "question": "During the industrial anodising of an aluminium window frame, why is the aluminium connected to the positive terminal of the power source?",
      "options": [
        "To attract positive aluminium ions away from the frame.",
        "Because oxygen is discharged at the positive anode, where it reacts directly with aluminium to build the oxide layer.",
        "To melt the aluminium frame into a molten state.",
        "To deposit a shiny silver coating onto the aluminium."
      ],
      "answer": "Because oxygen is discharged at the positive anode, where it reacts directly with aluminium to build the oxide layer.",
      "explanation": "At the positive anode, oxidation of water releases oxygen gas, which reacts in situ with the aluminium surface to form thick Al₂O₃."
    },
    {
      "id": "m05_q09",
      "question": "What common laboratory acid is universally chosen as the electrolyte in the anodising bath of aluminium?",
      "options": [
        "Concentrated nitric acid",
        "Dilute sulphuric acid (H₂SO₄)",
        "Concentrated hydrochloric acid",
        "Dilute acetic acid"
      ],
      "answer": "Dilute sulphuric acid (H₂SO₄)",
      "explanation": "Dilute sulphuric acid provides high ionic conductivity and an optimal oxygen evolution environment without aggressively dissolving aluminium oxide."
    },
    {
      "id": "m05_q10",
      "question": "Why are anodised aluminium kitchen utensils preferred over untreated raw aluminium cookware?",
      "options": [
        "Anodised cookware has a non-reactive, hard oxide layer that resists corrosion by acidic foods like tomatoes and tamarind.",
        "Anodised aluminium turns food sweeter.",
        "Untreated aluminium is radioactive.",
        "Anodised aluminium dissolves in boiling water."
      ],
      "answer": "Anodised cookware has a non-reactive, hard oxide layer that resists corrosion by acidic foods like tomatoes and tamarind.",
      "explanation": "The hardened, non-porous Al₂O₃ layer prevents organic food acids from corroding the aluminium and leaching metal ions into cooked food."
    }
  ]
}
modules_1_to_10.append(m05)

# Module 6
m06 = {
  "id": "m06", "moduleNumber": 6,
  "title": "Reaction of Metals with Water: Cold Water, Hot Water & Steam",
  "tagline": "Systematic evaluation of metallic reactivity with water across temperature states.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Metals react with water to produce a metal oxide and hydrogen gas. Metal oxides that are soluble in water further dissolve to form metal hydroxides:</p>
<p style="text-align:center; font-weight:bold; color:#1e3a8a;">
  $\text{Metal} + \text{Water} \longrightarrow \text{Metal Oxide} + \text{Hydrogen}$<br>
  $\text{Metal Oxide} + \text{Water} \longrightarrow \text{Metal Hydroxide}$
</p>
<p>However, the intensity and conditions of the reaction vary dramatically depending on the position of the metal in the reactivity series:</p>

<h3>1. Reaction with Cold Water (Violent & Exothermic):</h3>
<ul>
  <li><strong>Potassium ($\text{K}$) and Sodium ($\text{Na}$):</strong> React vigorously with cold water. The reaction is so violently exothermic that the liberated hydrogen gas immediately catches fire and burns with a characteristic flame (lilac for potassium, golden yellow for sodium):
  $$2\text{K}(s) + 2\text{H}_2\text{O}(l) \longrightarrow 2\text{KOH}(aq) + \text{H}_2(g) + \text{Heat}$$
  $$2\text{Na}(s) + 2\text{H}_2\text{O}(l) \longrightarrow 2\text{NaOH}(aq) + \text{H}_2(g) + \text{Heat}$$
  </li>
  <li><strong>Calcium ($\text{Ca}$):</strong> Reacts less violently with cold water. The heat evolved is <em>insufficient</em> for the hydrogen to catch fire. Interestingly, <strong>calcium starts floating</strong> because bubbles of hydrogen gas stick to the metal surface:
  $$\text{Ca}(s) + 2\text{H}_2\text{O}(l) \longrightarrow \text{Ca(OH)}_2(aq) + \text{H}_2(g)$$
  </li>
</ul>

<h3>2. Reaction with Hot Boiling Water:</h3>
<ul>
  <li><strong>Magnesium ($\text{Mg}$):</strong> Does not react with cold water at all. It reacts slowly with <strong>hot water</strong> to form magnesium hydroxide and hydrogen gas. Like calcium, magnesium also starts floating as hydrogen gas bubbles adhere to its surface:
  $$\text{Mg}(s) + 2\text{H}_2\text{O}(l,\text{hot}) \longrightarrow \text{Mg(OH)}_2(aq) + \text{H}_2(g)$$
  </li>
</ul>

<h3>3. Reaction with Steam (Forming Oxides, Not Hydroxides):</h3>
<ul>
  <li>Metals like <strong>Aluminium ($\text{Al}$), Iron ($\text{Fe}$), and Zinc ($\text{Zn}$)</strong> do not react with either cold water or hot water. They react only when heated in a stream of <strong>steam</strong>, producing solid metal oxide and hydrogen gas:
  $$2\text{Al}(s) + 3\text{H}_2\text{O}(g) \longrightarrow \text{Al}_2\text{O}_3(s) + 3\text{H}_2(g)$$
  $$3\text{Fe}(s) + 4\text{H}_2\text{O}(g) \longrightarrow \text{Fe}_3\text{O}_4(s) + 4\text{H}_2(g)$$
  <em>Note:</em> Red-hot iron with steam forms <strong>iron(II,III) oxide ($\text{Fe}_3\text{O}_4$, magnetic oxide)</strong>.
  </li>
</ul>

<h3>4. Non-Reactive Metals:</h3>
<p>Metals such as <strong>lead ($\text{Pb}$), copper ($\text{Cu}$), silver ($\text{Ag}$), and gold ($\text{Au}$)</strong> do not react with water or steam at all under any circumstances.</p>
""",
  "pointsToRemember": [
    "K and Na react violently with cold water, catching fire; Calcium reacts moderately and floats due to adhering H₂ bubbles.",
    "Magnesium reacts with hot water and floats; Aluminium, Zinc, and Iron react ONLY with steam to form metal oxides (not hydroxides).",
    "Red-hot iron reacts with steam to form magnetic iron oxide (Fe₃O₄) and hydrogen gas: 3Fe + 4H₂O(g) → Fe₃O₄ + 4H₂."
  ],
  "keyNotes": [
    "High-Yield Concept: Distinguish between metals that form hydroxides (Na, K, Ca, Mg with liquid water) vs metals that form oxides (Al, Zn, Fe with steam)!"
  ],
  "questions": [
    get_bank_q(22, "m06_q01"), get_bank_q(23, "m06_q02"), get_bank_q(24, "m06_q03"),
    get_bank_q(25, "m06_q04"), get_bank_q(26, "m06_q05"),
    {
      "id": "m06_q06",
      "question": "Why does a piece of calcium placed in a beaker of cold water rise and float on the water surface during the reaction?",
      "options": [
        "Calcium is naturally less dense than water.",
        "Bubbles of hydrogen gas produced in the reaction stick to the surface of the calcium pieces, buoying them upward.",
        "Calcium converts into a light gaseous state.",
        "The reaction generates a magnetic repulsion field against water."
      ],
      "answer": "Bubbles of hydrogen gas produced in the reaction stick to the surface of the calcium pieces, buoying them upward.",
      "explanation": "Calcium is denser than water, but the clinging bubbles of liberated hydrogen gas act as tiny floats, causing the metal to rise to the surface."
    },
    {
      "id": "m06_q07",
      "question": "What is the chemical formula of the oxide formed when red-hot iron reacts with steam in a sealed combustion tube?",
      "options": [
        "FeO",
        "Fe₂O₃",
        "Fe₃O₄",
        "Fe(OH)3"
      ],
      "answer": "Fe₃O₄",
      "explanation": "The reaction of red-hot iron with steam produces ferrosoferric oxide / magnetic iron oxide (Fe₃O₄) and hydrogen gas: 3Fe + 4H₂O(g) -> Fe₃O₄ + 4H₂."
    },
    {
      "id": "m06_q08",
      "question": "Which of the following metals shows NO reaction when exposed to cold water, hot water, or superheated steam?",
      "options": [
        "Zinc",
        "Iron",
        "Copper",
        "Magnesium"
      ],
      "answer": "Copper",
      "explanation": "Copper lies below hydrogen in the reactivity series and does not react with water or steam at any temperature."
    },
    {
      "id": "m06_q09",
      "question": "When potassium metal is dropped into cold water, the liberated hydrogen gas catches fire with a distinct flame color. What color is the flame?",
      "options": [
        "Golden yellow",
        "Lilac (pale violet)",
        "Brick red",
        "Apple green"
      ],
      "answer": "Lilac (pale violet)",
      "explanation": "The violent combustion of potassium vapour and hydrogen imparts a characteristic lilac (violet) coloration to the flame."
    },
    {
      "id": "m06_q10",
      "question": "A student passes steam over heated granules of metal X. A white solid oxide is formed and a gas is collected over water that burns with a pop sound. Metal X could be:",
      "options": [
        "Aluminium",
        "Gold",
        "Silver",
        "Copper"
      ],
      "answer": "Aluminium",
      "explanation": "Aluminium reacts with steam to form white aluminium oxide (Al₂O₃) and hydrogen gas, which pops when ignited."
    }
  ]
}
modules_1_to_10.append(m06)

# Module 7
m07 = {
  "id": "m07", "moduleNumber": 7,
  "title": "Reaction of Metals with Dilute Acids & Hydrogen Gas Evolution",
  "tagline": "Acid-metal reactivity, temperature changes, and hydrogen effervescence.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>When reactive metals react with dilute non-oxidising acids (such as dilute hydrochloric acid or dilute sulphuric acid), they displace hydrogen from the acid to form a metal salt and hydrogen gas:</p>
<p style="text-align:center; font-weight:bold; font-size:1.1em; color:#1e3a8a;">
  $\text{Metal} + \text{Dilute Acid} \longrightarrow \text{Metal Salt} + \text{Hydrogen gas} \uparrow$
</p>

<h3>Comparing the Reactivity of Different Metals with Dilute $HCl$:</h3>
<p>In a controlled laboratory activity, clean equal-sized strips of magnesium, aluminium, zinc, iron, and copper are placed in test tubes containing equal volumes of $2\text{ M}$ dilute hydrochloric acid equipped with thermometers:</p>
<ul>
  <li><strong>Magnesium ($\text{Mg}$):</strong> Shows the most rapid rate of bubble formation and the highest temperature rise. The reaction is strongly exothermic:
  $$\text{Mg}(s) + 2\text{HCl}(aq) \longrightarrow \text{MgCl}_2(aq) + \text{H}_2(g) \uparrow$$
  </li>
  <li><strong>Aluminium ($\text{Al}$):</strong> Initially reacts slowly because of its protective surface layer of $\text{Al}_2\text{O}_3$. Once the acid dissolves this oxide barrier, rapid effervescence occurs with significant heat generation:
  $$2\text{Al}(s) + 6\text{HCl}(aq) \longrightarrow 2\text{AlCl}_3(aq) + 3\text{H}_2(g) \uparrow$$
  </li>
  <li><strong>Zinc ($\text{Zn}$):</strong> Reacts moderately with steady gas evolution and a moderate temperature rise:
  $$\text{Zn}(s) + 2\text{HCl}(aq) \longrightarrow \text{ZnCl}_2(aq) + \text{H}_2(g) \uparrow$$
  </li>
  <li><strong>Iron ($\text{Fe}$):</strong> Reacts slowly; bubbles evolve steadily, and the solution gradually turns pale green due to formation of iron(II) chloride:
  $$\text{Fe}(s) + 2\text{HCl}(aq) \longrightarrow \text{FeCl}_2(aq) + \text{H}_2(g) \uparrow$$
  </li>
  <li><strong>Copper ($\text{Cu}$):</strong> No bubbles of gas are evolved, and the thermometer records zero temperature change. Copper does not react with dilute $HCl$ at all because copper is less reactive than hydrogen.</li>
</ul>

<p><strong>Decreasing Order of Reactivity with Dilute Acid:</strong></p>
<p style="text-align:center; font-weight:bold; color:#2563eb;">
  $\text{Mg} > \text{Al} > \text{Zn} > \text{Fe} > \text{Cu (no reaction)}$
</p>
""",
  "pointsToRemember": [
    "Metal + Dilute Acid → Salt + Hydrogen gas (evolved with effervescence).",
    "Reactivity series order with dilute HCl: Mg > Al > Zn > Fe.",
    "Copper does not react with dilute hydrochloric acid because copper lies below hydrogen in the reactivity series."
  ],
  "keyNotes": [
    "Exam Point: Explain why aluminium initially reacts slowly with dilute acids—due to the inert Al₂O₃ oxide layer that must first be stripped away by the acid."
  ],
  "questions": [
    get_bank_q(59, "m07_q01"), get_bank_q(60, "m07_q02"), get_bank_q(61, "m07_q03"),
    get_bank_q(62, "m07_q04"), get_bank_q(63, "m07_q05"),
    {
      "id": "m07_q06",
      "question": "Why does aluminium metal react slowly at first when placed into dilute hydrochloric acid, but reacts vigorously after a few minutes?",
      "options": [
        "Aluminium requires time to absorb moisture from the air.",
        "The tough protective aluminium oxide layer on its surface must first be dissolved by the acid before the metal reacts.",
        "Aluminium changes its atomic number upon contact with acid.",
        "Dilute hydrochloric acid takes time to heat up on its own."
      ],
      "answer": "The tough protective aluminium oxide layer on its surface must first be dissolved by the acid before the metal reacts.",
      "explanation": "Aluminium is naturally passivated by an Al₂O₃ surface layer. Once the acid dissolves this oxide film, fresh aluminium reacts rapidly."
    },
    {
      "id": "m07_q07",
      "question": "What is the color change observed in the solution when iron filings are left in dilute hydrochloric acid for an extended period?",
      "options": [
        "The solution remains intensely purple.",
        "The colorless solution turns pale green due to formation of FeCl₂.",
        "The solution turns deep milky white.",
        "The solution deposits a black precipitate of iron metal."
      ],
      "answer": "The colorless solution turns pale green due to formation of FeCl₂.",
      "explanation": "Iron reacts with dilute HCl to produce iron(II) chloride (FeCl₂), whose aqueous solution has a characteristic pale green color."
    },
    {
      "id": "m07_q08",
      "question": "Which of the following metals produces the highest temperature rise when reacted with dilute sulphuric acid under identical conditions?",
      "options": [
        "Iron",
        "Zinc",
        "Magnesium",
        "Lead"
      ],
      "answer": "Magnesium",
      "explanation": "Magnesium is the most reactive metal among the group and undergoes the most exothermic reaction with acid."
    },
    {
      "id": "m07_q09",
      "question": "When a burning wooden splinter is brought near the mouth of a test tube in which granulated zinc is reacting with dilute sulphuric acid, what happens?",
      "options": [
        "The splinter extinguishes silently without any sound.",
        "The gas burns with a characteristic 'pop' sound, confirming hydrogen gas.",
        "The gas relights the glowing splinter into a bright flame.",
        "The gas turns lime water milky."
      ],
      "answer": "The gas burns with a characteristic 'pop' sound, confirming hydrogen gas.",
      "explanation": "Hydrogen gas burns with a distinct 'pop' sound when ignited in the presence of air."
    },
    {
      "id": "m07_q10",
      "question": "If a piece of clean copper turnings is boiled in dilute hydrochloric acid for 10 minutes, what will be observed?",
      "options": [
        "Vigorous evolution of hydrogen gas.",
        "Formation of a deep blue copper chloride solution.",
        "No reaction occurs; copper remains unreacted and no gas is evolved.",
        "Copper dissolves completely to give a white precipitate."
      ],
      "answer": "No reaction occurs; copper remains unreacted and no gas is evolved.",
      "explanation": "Copper has a lower standard reduction potential than hydrogen and cannot displace H+ ions from non-oxidising acids."
    }
  ]
}
modules_1_to_10.append(m07)

# Module 8
m08 = {
  "id": "m08", "moduleNumber": 8,
  "title": "Reaction with Nitric Acid (HNO₃) & Aqua Regia ('Royal Water')",
  "tagline": "Oxidising properties of nitric acid, exceptions (Mg, Mn), and noble metal dissolution.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<h3>Why Is Hydrogen Gas Not Evolved with Nitric Acid?</h3>
<p>When metals react with dilute hydrochloric or sulphuric acid, hydrogen gas is evolved. However, <strong>hydrogen gas is NOT evolved</strong> when a metal reacts with nitric acid ($\text{HNO}_3$).</p>
<p><strong>Scientific Reason:</strong> Nitric acid is a powerful <strong>oxidising agent</strong>. As soon as hydrogen gas is produced during the metal-acid interaction, $\text{HNO}_3$ immediately oxidises the hydrogen into water ($\text{H}_2\text{O}$) and is itself reduced to any of the nitrogen oxides (such as nitrous oxide $\text{N}_2\text{O}$, nitric oxide $\text{NO}$, or nitrogen dioxide $\text{NO}_2$).</p>

<h3>The Two Notable Exceptions:</h3>
<p>Only two metals—<strong>Magnesium ($\text{Mg}$)</strong> and <strong>Manganese ($\text{Mn}$)</strong>—react with <em>extremely dilute</em> (around $1\%$) nitric acid to liberate hydrogen gas, because such very dilute acid behaves as a typical acid with negligible oxidising power:</p>
$$\text{Mg}(s) + 2\text{HNO}_3(\text{very dil.}) \longrightarrow \text{Mg(NO}_3)_2(aq) + \text{H}_2(g) \uparrow$$
$$\text{Mn}(s) + 2\text{HNO}_3(\text{very dil.}) \longrightarrow \text{Mn(NO}_3)_2(aq) + \text{H}_2(g) \uparrow$$

<hr style="border:0; border-top:1px solid #cbd5e1; margin:16px 0;">

<h3>Aqua Regia ('Royal Water'):</h3>
<p><strong>Aqua Regia</strong> (Latin for 'royal water') is a freshly prepared mixture of <strong>concentrated hydrochloric acid ($\text{HCl}$)</strong> and <strong>concentrated nitric acid ($\text{HNO}_3$)</strong> in the volumetric ratio of <strong>$3 : 1$</strong>.</p>
<ul>
  <li>It is a yellow-orange, highly fuming, and intensely corrosive liquid.</li>
  <li>It is one of the few reagents capable of dissolving <strong>noble metals</strong> such as <strong>Gold ($\text{Au}$)</strong> and <strong>Platinum ($\text{Pt}$)</strong>, even though neither concentrated acid can dissolve them individually!</li>
  <li><strong>Mechanism:</strong> The two concentrated acids react chemically to release nascent chlorine and nitrosyl chloride:
  $$\text{HNO}_3(aq) + 3\text{HCl}(aq) \longrightarrow \text{NOCl}(aq) + 2\text{H}_2\text{O}(l) + 2[\text{Cl}]$$
  The nascent chlorine reacts with gold to form soluble chlorauric acid ($\text{HAuCl}_4$).</li>
</ul>
""",
  "pointsToRemember": [
    "Nitric acid (HNO₃) does not liberate H₂ gas with most metals because it oxidises H₂ to H₂O while reducing itself to nitrogen oxides (NO₂, NO, N₂O).",
    "Only Magnesium (Mg) and Manganese (Mn) react with very dilute (~1%) HNO₃ to liberate hydrogen gas.",
    "Aqua Regia is a freshly prepared 3:1 mixture of concentrated HCl and concentrated HNO₃ that can dissolve gold and platinum."
  ],
  "keyNotes": [
    "Critical Board Question: State the composition of Aqua Regia (3 conc. HCl : 1 conc. HNO₃) and explain why HNO₃ does not yield H₂ gas with metals."
  ],
  "questions": [
    get_bank_q(27, "m08_q01"), get_bank_q(28, "m08_q02"), get_bank_q(29, "m08_q03"),
    get_bank_q(30, "m08_q04"), get_bank_q(64, "m08_q05"),
    {
      "id": "m08_q06",
      "question": "What is the volumetric mixing ratio of concentrated hydrochloric acid to concentrated nitric acid in freshly prepared Aqua Regia?",
      "options": [
        "1 : 3",
        "3 : 1",
        "1 : 1",
        "2 : 1"
      ],
      "answer": "3 : 1",
      "explanation": "Aqua Regia is prepared by mixing 3 parts of concentrated HCl with 1 part of concentrated HNO₃ by volume."
    },
    {
      "id": "m08_q07",
      "question": "Which two metals are capable of liberating hydrogen gas when reacted with very dilute (~1%) nitric acid?",
      "options": [
        "Copper and Silver",
        "Magnesium and Manganese",
        "Zinc and Aluminium",
        "Iron and Lead"
      ],
      "answer": "Magnesium and Manganese",
      "explanation": "Magnesium (Mg) and Manganese (Mn) are the only two metals that liberate H₂ gas with very dilute HNO₃."
    },
    {
      "id": "m08_q08",
      "question": "Why does freshly prepared Aqua Regia dissolve noble metals like gold and platinum when concentrated nitric acid alone cannot?",
      "options": [
        "It generates highly reactive nascent chlorine that forms soluble chloro-complexes with gold.",
        "It boils at a temperature of 5000 °C.",
        "It acts as a powerful reducing base.",
        "It removes protons from the gold nucleus."
      ],
      "answer": "It generates highly reactive nascent chlorine that forms soluble chloro-complexes with gold.",
      "explanation": "The reaction between conc. HCl and conc. HNO₃ produces nascent chlorine, which readily coordinates with gold to form soluble HAuCl4."
    },
    {
      "id": "m08_q09",
      "question": "A fraudster pretending to be a jewellery polisher dips dull gold bangles into a fuming yellow liquid. The bangles shine brightly, but their weight decreases drastically. What was the liquid?",
      "options": [
        "Dilute sulphuric acid",
        "Aqua Regia",
        "Liquid ammonia",
        "Sodium hydroxide solution"
      ],
      "answer": "Aqua Regia",
      "explanation": "Aqua Regia dissolves the outer layers of gold to expose fresh shiny metal, resulting in a substantial loss in gold weight."
    },
    {
      "id": "m08_q10",
      "question": "When concentrated nitric acid reacts with zinc metal, what brown gaseous byproduct is typically observed?",
      "options": [
        "Hydrogen gas (H₂)",
        "Nitrogen dioxide (NO₂)",
        "Ammonia gas (NH3)",
        "Oxygen gas (O₂)"
      ],
      "answer": "Nitrogen dioxide (NO₂)",
      "explanation": "Conc. HNO₃ is reduced by zinc to pungent reddish-brown fumes of nitrogen dioxide gas (NO₂)."
    }
  ]
}
modules_1_to_10.append(m08)

# Module 9
m09 = {
  "id": "m09", "moduleNumber": 9,
  "title": "Displacement Reactions in Metal Salt Solutions",
  "tagline": "Competitive redox reactions, color transformations, and relative metal activities.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>A reactive metal has the ability to displace a less reactive metal from its aqueous salt solution:</p>
<p style="text-align:center; font-weight:bold; font-size:1.1em; color:#1e3a8a;">
  $\text{Metal A} + \text{Salt solution of B} \longrightarrow \text{Salt solution of A} + \text{Metal B}$
</p>
<p>If Metal A displaces Metal B from its solution, it conclusively demonstrates that <strong>Metal A is more reactive than Metal B</strong>.</p>

<h3>Classic Laboratory Investigation: Iron in Copper Sulphate Solution</h3>
<p>Take two clean iron nails (cleaned with sandpaper) and immerse them in a test tube containing blue copper sulphate ($\text{CuSO}_4$) solution. Keep another test tube with copper sulphate solution as a control:</p>
<ul>
  <li><strong>Observation 1 (Solution):</strong> After 20 minutes, the deep blue color of the copper sulphate solution gradually fades and transforms into a <strong>pale green solution</strong> due to the formation of iron(II) sulphate ($\text{FeSO}_4$).</li>
  <li><strong>Observation 2 (Nails):</strong> The iron nails become coated with a thick, reddish-brown deposit of metallic copper.</li>
  <li><strong>Chemical Equation:</strong>
  $$\text{Fe}(s) + \text{CuSO}_4(aq,\text{blue}) \longrightarrow \text{FeSO}_4(aq,\text{pale green}) + \text{Cu}(s,\text{red-brown})$$
  </li>
  <li><strong>Reverse Reaction:</strong> If a clean copper wire is placed in a pale green iron sulphate ($\text{FeSO}_4$) solution, <strong>no reaction occurs</strong>, confirming that copper cannot displace iron.</li>
</ul>

<h3>Other Important Displacement Examples:</h3>
<ul>
  <li><strong>Zinc displacing Copper:</strong>
  $$\text{Zn}(s) + \text{CuSO}_4(aq,\text{blue}) \longrightarrow \text{ZnSO}_4(aq,\text{colorless}) + \text{Cu}(s)$$
  The deep blue solution becomes completely colorless as zinc displaces copper.</li>
  <li><strong>Copper displacing Silver:</strong>
  $$\text{Cu}(s) + 2\text{AgNO}_3(aq,\text{colorless}) \longrightarrow \text{Cu(NO}_3)_2(aq,\text{blue}) + 2\text{Ag}(s,\text{shiny})$$
  Copper displaces silver from silver nitrate, turning the solution blue while shimmering needles of pure silver deposit on the copper wire.</li>
</ul>
""",
  "pointsToRemember": [
    "A more reactive metal displaces a less reactive metal from its salt solution in water.",
    "Iron displaces copper from CuSO₄: Fe + CuSO₄ (blue) → FeSO₄ (pale green) + Cu (reddish-brown deposit).",
    "Zinc displaces copper from CuSO₄ to yield a colorless ZnSO₄ solution and reddish-brown copper."
  ],
  "keyNotes": [
    "Board Exam Classic: Note both observations for iron in CuSO₄—the blue solution turns pale green, and a reddish-brown copper deposit forms on the iron nail."
  ],
  "questions": [
    get_bank_q(33, "m09_q01"), get_bank_q(34, "m09_q02"), get_bank_q(35, "m09_q03"),
    get_bank_q(65, "m09_q04"), get_bank_q(66, "m09_q05"),
    {
      "id": "m09_q06",
      "question": "When an iron nail is immersed in blue copper sulphate solution, what two distinct visual observations are recorded after 20 minutes?",
      "options": [
        "The solution turns deep purple and the nail dissolves completely.",
        "The blue solution turns pale green and a reddish-brown coating deposits on the iron nail.",
        "The solution becomes milky white and yellow gas evolves.",
        "No visual change occurs."
      ],
      "answer": "The blue solution turns pale green and a reddish-brown coating deposits on the iron nail.",
      "explanation": "Formation of FeSO4 turns the blue solution pale green, while displaced elemental copper coats the nail in reddish-brown."
    },
    {
      "id": "m09_q07",
      "question": "What occurs when a strip of copper wire is immersed in a colorless solution of silver nitrate (AgNO₃)?",
      "options": [
        "No reaction takes place because copper is less reactive than silver.",
        "Copper displaces silver, turning the solution blue while shiny crystals of silver deposit on the copper.",
        "The solution boils vigorously and silver gas escapes.",
        "A black precipitate of copper oxide forms."
      ],
      "answer": "Copper displaces silver, turning the solution blue while shiny crystals of silver deposit on the copper.",
      "explanation": "Copper is more reactive than silver; it displaces Ag+ to form blue Cu(NO3)2 solution and metallic silver needles."
    },
    {
      "id": "m09_q08",
      "question": "Why does no observable reaction occur when copper wire is placed into a test tube containing aqueous zinc sulphate (ZnSO₄)?",
      "options": [
        "Copper is more reactive than zinc.",
        "Copper is less reactive than zinc and cannot displace Zn²⁺ ions.",
        "Zinc sulphate is an insoluble covalent compound.",
        "Copper instantly turns into a gas."
      ],
      "answer": "Copper is less reactive than zinc and cannot displace Zn²⁺ ions.",
      "explanation": "In the reactivity series, zinc is positioned above copper; therefore, copper lacks the reducing power to displace zinc."
    },
    {
      "id": "m09_q09",
      "question": "In the displacement reaction Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s), which chemical species undergoes oxidation?",
      "options": [
        "Cu²⁺ ions",
        "SO₄²⁻ ions",
        "Zn atoms (losing 2 electrons to form Zn²⁺)",
        "Water molecules"
      ],
      "answer": "Zn atoms (losing 2 electrons to form Zn²⁺)",
      "explanation": "Zinc atoms lose two electrons to become Zn²⁺ ions, undergoing oxidation, while Cu²⁺ ions gain electrons and are reduced."
    },
    {
      "id": "m09_q10",
      "question": "Four metals P, Q, R, and S are tested. Metal Q displaces P from its salt solution, but cannot displace S. Metal R can displace neither P nor Q. Arrange them in order of decreasing reactivity:",
      "options": [
        "S > Q > P > R",
        "R > P > Q > S",
        "P > Q > R > S",
        "Q > S > P > R"
      ],
      "answer": "S > Q > P > R",
      "explanation": "S is most reactive (Q cannot displace S), followed by Q (displaces P), then P, and finally R is least reactive."
    }
  ]
}
modules_1_to_10.append(m09)

# Module 10
m10 = {
  "id": "m10", "moduleNumber": 10,
  "title": "The Reactivity / Activity Series of Metals",
  "tagline": "The electropositive ranking of metals and predictive rules for chemical displacement.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>By comparing the relative rates of reaction of different metals with oxygen, water, dilute acids, and displacement from salt solutions, scientists established a vertical arrangement of metals in the order of their decreasing chemical activities. This list is known as the <strong>Reactivity Series</strong> (or <strong>Activity Series</strong>) of metals.</p>

<div style="background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:16px; margin:16px 0;">
  <h4 style="margin:0 0 10px 0; color:#1e3a8a; text-align:center;">The Standard Reactivity Series (Decreasing Order)</h4>
  <table style="width:100%; border-collapse:collapse; text-align:center; font-size:0.95em;">
    <tr style="background:#e2e8f0; font-weight:bold;">
      <td style="padding:6px; border:1px solid #cbd5e1;">Metal</td>
      <td style="padding:6px; border:1px solid #cbd5e1;">Symbol</td>
      <td style="padding:6px; border:1px solid #cbd5e1;">Reactivity Category</td>
    </tr>
    <tr style="background:#fee2e2;">
      <td style="padding:6px; border:1px solid #cbd5e1;">Potassium</td><td style="border:1px solid #cbd5e1;">K</td>
      <td rowspan="4" style="border:1px solid #cbd5e1; font-weight:bold; color:#991b1b;">High Reactivity<br>(Top of Series)</td>
    </tr>
    <tr style="background:#fee2e2;"><td style="padding:6px; border:1px solid #cbd5e1;">Sodium</td><td style="border:1px solid #cbd5e1;">Na</td></tr>
    <tr style="background:#fee2e2;"><td style="padding:6px; border:1px solid #cbd5e1;">Calcium</td><td style="border:1px solid #cbd5e1;">Ca</td></tr>
    <tr style="background:#fee2e2;"><td style="padding:6px; border:1px solid #cbd5e1;">Magnesium</td><td style="border:1px solid #cbd5e1;">Mg</td></tr>
    <tr style="background:#fef3c7;">
      <td style="padding:6px; border:1px solid #cbd5e1;">Aluminium</td><td style="border:1px solid #cbd5e1;">Al</td>
      <td rowspan="5" style="border:1px solid #cbd5e1; font-weight:bold; color:#92400e;">Moderate Reactivity<br>(Middle of Series)</td>
    </tr>
    <tr style="background:#fef3c7;"><td style="padding:6px; border:1px solid #cbd5e1;">Zinc</td><td style="border:1px solid #cbd5e1;">Zn</td></tr>
    <tr style="background:#fef3c7;"><td style="padding:6px; border:1px solid #cbd5e1;">Iron</td><td style="border:1px solid #cbd5e1;">Fe</td></tr>
    <tr style="background:#fef3c7;"><td style="padding:6px; border:1px solid #cbd5e1;">Lead</td><td style="border:1px solid #cbd5e1;">Pb</td></tr>
    <tr style="background:#e0e7ff; font-weight:bold;"><td style="padding:6px; border:1px solid #cbd5e1;">[Hydrogen]</td><td style="border:1px solid #cbd5e1;">[H]</td><td style="border:1px solid #cbd5e1;">Non-metal Reference</td></tr>
    <tr style="background:#ecfdf5;">
      <td style="padding:6px; border:1px solid #cbd5e1;">Copper</td><td style="border:1px solid #cbd5e1;">Cu</td>
      <td rowspan="4" style="border:1px solid #cbd5e1; font-weight:bold; color:#065f46;">Low Reactivity<br>(Bottom of Series)</td>
    </tr>
    <tr style="background:#ecfdf5;"><td style="padding:6px; border:1px solid #cbd5e1;">Mercury</td><td style="border:1px solid #cbd5e1;">Hg</td></tr>
    <tr style="background:#ecfdf5;"><td style="padding:6px; border:1px solid #cbd5e1;">Silver</td><td style="border:1px solid #cbd5e1;">Ag</td></tr>
    <tr style="background:#ecfdf5;"><td style="padding:6px; border:1px solid #cbd5e1;">Gold</td><td style="border:1px solid #cbd5e1;">Au</td></tr>
  </table>
</div>

<h3>Why Is Hydrogen Included in the Series?</h3>
<p>Although hydrogen is a non-metal, it is included in the metal reactivity series as a <strong>benchmark reference</strong>. Like metals, hydrogen has a tendency to lose its single electron and form a positive ion ($\text{H}^+$). Any metal placed <strong>above hydrogen</strong> can reduce $\text{H}^+$ ions to liberate $\text{H}_2$ gas from dilute acids or water, whereas metals placed <strong>below hydrogen</strong> cannot.</p>
""",
  "pointsToRemember": [
    "The reactivity series arranges metals in order of decreasing chemical activity from Potassium (most reactive) to Gold (least reactive).",
    "Hydrogen is included in the series because it forms positive cations (H+) by electron loss, acting as the displacement threshold for acids.",
    "A metal higher in the activity series will displace any metal below it from its aqueous salt solution."
  ],
  "keyNotes": [
    "Mnemonic for Reactivity Series: Please Stop Calling Me A Careless Zebra, Instead Try Learning How Copper Saves Gold (K, Na, Ca, Mg, Al, C, Zn, Fe, Sn, Pb, H, Cu, Ag, Au)."
  ],
  "questions": [
    get_bank_q(31, "m10_q01"), get_bank_q(32, "m10_q02"), get_bank_q(67, "m10_q03"),
    get_bank_q(68, "m10_q04"), get_bank_q(69, "m10_q05"),
    {
      "id": "m10_q06",
      "question": "Why is hydrogen, which is a non-metal, included in the reactivity series of metals?",
      "options": [
        "Because it is a solid metal at room temperature.",
        "Because like metals, hydrogen can lose an electron to form a positive cation (H+), serving as an acid-displacement benchmark.",
        "Because hydrogen forms alloys with noble gases.",
        "Because hydrogen is the most reactive metal known."
      ],
      "answer": "Because like metals, hydrogen can lose an electron to form a positive cation (H+), serving as an acid-displacement benchmark.",
      "explanation": "Hydrogen loses an electron to form H+ ions, allowing it to act as the standard reference line between metals that displace H₂ from acids and those that cannot."
    },
    {
      "id": "m10_q07",
      "question": "Which of the following metals is situated immediately above hydrogen in the reactivity series and can slowly liberate H₂ from dilute acids?",
      "options": [
        "Copper",
        "Lead (Pb)",
        "Silver",
        "Gold"
      ],
      "answer": "Lead (Pb)",
      "explanation": "Lead (Pb) lies immediately above hydrogen in the activity series, while Cu, Ag, and Au are below hydrogen."
    },
    {
      "id": "m10_q08",
      "question": "Which of the following displacement reactions is chemically FEASIBLE (will occur spontaneously)?",
      "options": [
        "Cu(s) + FeSO4(aq) -> CuSO4(aq) + Fe(s)",
        "Ag(s) + Cu(NO3)2(aq) -> 2AgNO3(aq) + Cu(s)",
        "Zn(s) + CuSO4(aq) -> ZnSO4(aq) + Cu(s)",
        "Fe(s) + ZnSO4(aq) -> FeSO4(aq) + Zn(s)"
      ],
      "answer": "Zn(s) + CuSO4(aq) -> ZnSO4(aq) + Cu(s)",
      "explanation": "Zinc lies above copper in the reactivity series and therefore spontaneously displaces copper from copper sulphate solution."
    },
    {
      "id": "m10_q09",
      "question": "Arrange the metals Calcium (Ca), Magnesium (Mg), Copper (Cu), and Iron (Fe) in order of DECREASING chemical reactivity:",
      "options": [
        "Ca > Mg > Fe > Cu",
        "Cu > Fe > Mg > Ca",
        "Mg > Ca > Cu > Fe",
        "Fe > Cu > Ca > Mg"
      ],
      "answer": "Ca > Mg > Fe > Cu",
      "explanation": "The correct order according to the reactivity series is Calcium > Magnesium > Iron > Copper."
    },
    {
      "id": "m10_q10",
      "question": "Why are gold and platinum found in nature in their free (native) elemental state rather than combined as oxides or sulphides?",
      "options": [
        "They are radioactive and destroy oxygen atoms.",
        "They lie at the very bottom of the reactivity series and do not react with atmospheric oxygen, moisture, or carbon dioxide.",
        "They were created by meteorites after the Earth cooled.",
        "They are completely soluble in ordinary water."
      ],
      "answer": "They lie at the very bottom of the reactivity series and do not react with atmospheric oxygen, moisture, or carbon dioxide.",
      "explanation": "Gold and platinum are least reactive noble metals with very low electropositive character, remaining uncombined as native metals."
    }
  ]
}
modules_1_to_10.append(m10)

with open('scratch/ch3_part1.json', 'w', encoding='utf-8') as f:
    json.dump(modules_1_to_10, f, ensure_ascii=False, indent=2)

print(f"Successfully generated Part 1 (Modules 1 to 10): {len(modules_1_to_10)} modules.")
