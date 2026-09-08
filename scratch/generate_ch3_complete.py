# -*- coding: utf-8 -*-
"""
ELITE CLASSES - CHAPTER 3 DEEP COURSE BUILDER
Metals and Non-metals (Class 10 Science)
Generates exactly 20 mini-modules, 200 questions, high educational depth, zero boilerplate, zero mentions of NCERT.
"""
import json, re

# Load bank questions
with open('scratch/ch3_bank_questions.json', 'r', encoding='utf-8') as f:
    bank_questions = json.load(f)

bank_by_id = {q['id']: q for q in bank_questions}

def get_bank_q(qid, new_id):
    q = bank_by_id[qid]
    opts = [opt['text'] for opt in q['options']]
    correct_key = q['correct_option']
    correct_text = next(opt['text'] for opt in q['options'] if opt['key'] == correct_key)
    # Sanitize any NCERT mention if present
    qtext = q['question'].replace('NCERT', 'standard curriculum')
    exp = q['explanation'].replace('NCERT', 'standard curriculum')
    return {
        "id": new_id,
        "question": qtext,
        "options": opts,
        "answer": correct_text,
        "explanation": exp
    }

modules_data = []

# =============================================================================
# MODULE 1: Physical Properties of Metals
# =============================================================================
m01_theory = """
<p>In our daily lives, metals play an indispensable role—from cooking utensils and electrical wiring to construction beams and jewellery. To understand why metals are used for these diverse applications, we examine their distinctive physical properties:</p>
<ul>
  <li><strong>Metallic Lustre:</strong> In their pure state, metals possess a bright, shining surface. This characteristic shine is called metallic lustre. Freshly cut or polished surfaces of metals like copper, aluminium, silver, and gold reflect light vividly.</li>
  <li><strong>Hardness:</strong> Most metals are typically hard solids at room temperature. The degree of hardness varies from metal to metal (iron and copper are extremely hard, whereas sodium and potassium are soft exceptions).</li>
  <li><strong>Malleability:</strong> Metals can be beaten or rolled into extremely thin foils without breaking. Gold ($\text{Au}$) and silver ($\text{Ag}$) are the most malleable metals known—gold can be hammered into sheets only $0.00001\text{ mm}$ thick, used in gold leaf decor and sweets.</li>
  <li><strong>Ductility:</strong> The ability of a metal to be drawn into thin, long wires is known as ductility. Gold is the most ductile metal: an astonishing $2\text{ km}$ long wire can be drawn from just $1\text{ gram}$ of pure gold!</li>
  <li><strong>Thermal Conductivity:</strong> Metals are excellent conductors of heat and have high melting points. Silver and copper are the best thermal conductors, which is why cooking pots have copper bases. Lead ($\text{Pb}$) and mercury ($\text{Hg}$) are poor thermal conductors.</li>
  <li><strong>Electrical Conductivity:</strong> Metals allow electric charges to flow with negligible resistance because of free delocalised valence electrons. Transmission lines use copper and aluminium wires, coated with polyvinylchloride ($\text{PVC}$) or vulcanised rubber for electrical insulation.</li>
  <li><strong>Sonority:</strong> When metals strike a hard surface, they produce a deep, resonant ringing sound. Substances with this acoustic property are called sonorous, explaining why school bells and musical instrument strings are made of metals or metallic alloys.</li>
</ul>
<div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
  <strong>🔬 Laboratory Investigation: Thermal Conductivity of Metals</strong>
  <p style="margin:4px 0 0 0; line-height:1.6;">Clamp a long copper wire on a stand. Fix a small iron pin to the free end using molten wax. Heat the wire near the clamped end with a Bunsen burner. The heat conducts rapidly along the copper wire until it melts the wax, causing the pin to drop. Crucially, the metal wire itself does not melt, demonstrating high thermal conductivity combined with a high melting point.</p>
</div>
"""
m01_points = [
  "Malleability allows metals to be hammered into sheets (gold and silver are the most malleable); ductility allows them to be drawn into wires (gold is the most ductile).",
  "Silver is the best conductor of both heat and electricity, followed closely by copper; lead and mercury are comparatively poor thermal conductors.",
  "Electrical wires are coated with polyvinylchloride (PVC) or synthetic rubber to provide electrical insulation and prevent electric shocks."
]
m01_notes = [
  "Board Examination Focus: Remember that gold is the most ductile metal (1 g yields a 2 km wire) and silver and copper are the best conductors of heat."
]
m01_q = [
  get_bank_q(3, "m01_q01"),
  get_bank_q(4, "m01_q02"),
  get_bank_q(5, "m01_q03"),
  get_bank_q(6, "m01_q04"),
  get_bank_q(7, "m01_q05"),
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
    "question": "Domestic electrical wires carrying $220\\text{ V}$ current are enveloped in a brightly colored plastic sheath primarily made of:",
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
modules_data.append({
  "id": "m01", "moduleNumber": 1,
  "title": "Physical Properties of Metals: Lustre, Malleability, Ductility & Conductivity",
  "tagline": "Mechanical and thermal characteristics of metallic elements.",
  "readingTimeMins": 5, "theoryHtml": m01_theory,
  "pointsToRemember": m01_points, "keyNotes": m01_notes, "questions": m01_q
})

# =============================================================================
# MODULE 2: Non-Metals & Physical Exceptions
# =============================================================================
m02_theory = """
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
"""
m02_points = [
  "Mercury is the only liquid metal, and Bromine is the only liquid non-metal at room temperature.",
  "Gallium and Caesium melt in the palm of your hand due to very low melting points (~30 °C).",
  "Iodine is a lustrous non-metal; diamond (carbon allotrope) is the hardest natural substance; graphite (carbon allotrope) is an electrical conductor."
]
m02_notes = [
  "Board Exam Alert: Frequently asked exceptions include liquid non-metal (Bromine), non-metal with lustre (Iodine), and metals cut with a knife (Na, K, Li)."
]
m02_q = [
  get_bank_q(1, "m02_q01"),
  get_bank_q(2, "m02_q02"),
  get_bank_q(10, "m02_q03"),
  get_bank_q(11, "m02_q04"),
  get_bank_q(12, "m02_q05"),
  get_bank_q(13, "m02_q06"),
  get_bank_q(14, "m02_q07"),
  {
    "id": "m02_q08",
    "question": "Which of the following carbon allotropes is utilised as electrodes in dry cells and industrial electrolysis tanks due to its electrical conductivity?",
    "options": [
      "Fullerene $C_{60}$",
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
modules_data.append({
  "id": "m02", "moduleNumber": 2,
  "title": "Non-Metals & Physical Exceptions: State, Hardness, Lustre & Allotropes",
  "tagline": "Examining anomalies in physical states, melting points, and allotropes.",
  "readingTimeMins": 5, "theoryHtml": m02_theory,
  "pointsToRemember": m02_points, "keyNotes": m02_notes, "questions": m02_q
})

print(f"Generated modules 1 and 2. Total modules so far: {len(modules_data)}")
