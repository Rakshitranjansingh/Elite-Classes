# -*- coding: utf-8 -*-
"""
CH5 Part 2: Modules 11 to 20
Life Processes (Class 10 Science)
"""
import json

with open('scratch/ch5_bank_questions.json', 'r', encoding='utf-8') as f:
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

modules_11_to_20 = []

# Module 11
m11 = {
  "id": "m11", "moduleNumber": 11,
  "title": "Cellular Respiration: Glycolysis (Glucose to Pyruvate)",
  "tagline": "Cytoplasmic cleavage of 6-carbon glucose into 3-carbon pyruvate molecules.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>While nutrition provides food materials, <strong>cellular respiration</strong> is the biochemical process that releases energy stored within food nutrients to power the living cell. Respiration takes place inside the individual cells of all organisms.</p>

<h3>The Universal First Step — Glycolysis:</h3>
<p>The initial stage of cellular glucose catabolism is called <strong>glycolysis</strong>. It is common to virtually all living organisms—from primitive anaerobic bacteria and yeast to advanced plants and humans:</p>
<ul>
  <li><strong>Site of Reaction:</strong> Glycolysis occurs strictly in the <strong>cytoplasm</strong> of the cell (it does not take place in the mitochondria).</li>
  <li><strong>Substrate & Product:</strong> A single $6$-carbon glucose molecule ($\text{C}_6\text{H}_{12}\text{O}_6$) is enzymatically cleaved into <strong>two molecules of the $3$-carbon compound called pyruvate</strong> (pyruvic acid, $\text{CH}_3\text{COCOOH}$):
  $$\text{Glucose } (6\text{C}) \xrightarrow{\text{In Cytoplasm}} 2\text{ Pyruvate } (3\text{C}) + \text{Energy (net } 2\text{ ATP)}$$
  </li>
  <li><strong>Oxygen Requirement:</strong> Glycolysis does <strong>NOT require oxygen</strong>. It proceeds identically whether molecular oxygen is present or absent.</li>
</ul>

<p>The subsequent fate of pyruvate depends on whether oxygen is available and the specific metabolic machinery of the organism.</p>
""",
  "pointsToRemember": [
    "Glycolysis is the first step of respiration occurring in the cytoplasm of all cells.",
    "A 6-carbon glucose molecule is broken down into two 3-carbon pyruvate molecules.",
    "Glycolysis does not require oxygen and yields a net gain of 2 ATP molecules."
  ],
  "keyNotes": [
    "Board Highlight: State the location of glycolysis (cytoplasm) and its product (two molecules of 3-carbon pyruvate)."
  ],
  "questions": [
    get_bank_q(26, "m11_q01"), get_bank_q(31, "m11_q02"), get_bank_q(32, "m11_q03"),
    get_bank_q(33, "m11_q04"), get_bank_q(34, "m11_q05"),
    {
      "id": "m11_q06",
      "question": "In which cellular compartment does the initial step of respiration (conversion of glucose to pyruvate) occur?",
      "options": [
        "Mitochondrial matrix",
        "Cell cytoplasm",
        "Nucleus",
        "Chloroplast thylakoid"
      ],
      "answer": "Cell cytoplasm",
      "explanation": "Glycolysis enzymes are dissolved in the cytoplasm, where glucose is cleaved into pyruvate."
    },
    {
      "id": "m11_q07",
      "question": "How many carbon atoms are present in a single molecule of pyruvate (pyruvic acid)?",
      "options": [
        "2 carbon atoms",
        "3 carbon atoms",
        "4 carbon atoms",
        "6 carbon atoms"
      ],
      "answer": "3 carbon atoms",
      "explanation": "A 6-carbon glucose molecule is split into two 3-carbon pyruvate molecules during glycolysis."
    },
    {
      "id": "m11_q08",
      "question": "Does the conversion of glucose to pyruvate during glycolysis require molecular oxygen (O₂)?",
      "options": [
        "Yes, it requires 6 molecules of O₂.",
        "No, glycolysis is an anaerobic process independent of oxygen.",
        "It only occurs under pure nitrogen gas.",
        "It requires liquid water to be absent."
      ],
      "answer": "No, glycolysis is an anaerobic process independent of oxygen.",
      "explanation": "Glycolysis does not utilize oxygen; it is the universal anaerobic pathway in all living cells."
    },
    {
      "id": "m11_q09",
      "question": "What is the net gain of ATP molecules synthesized per molecule of glucose during glycolysis alone?",
      "options": [
        "Net 2 ATP molecules",
        "Net 10 ATP molecules",
        "Net 36 ATP molecules",
        "Zero ATP"
      ],
      "answer": "Net 2 ATP molecules",
      "explanation": "Substrate-level phosphorylation during glycolysis yields a net gain of 2 ATP per glucose molecule."
    },
    {
      "id": "m11_q10",
      "question": "Which of the following cellular organisms undergoes glycolysis in its cytoplasm?",
      "options": [
        "Yeast cells only",
        "Human muscle cells only",
        "Both aerobic organisms and anaerobic organisms (virtually all living cells)",
        "Viruses outside host bodies"
      ],
      "answer": "Both aerobic organisms and anaerobic organisms (virtually all living cells)",
      "explanation": "Glycolysis is an evolutionary primitive pathway shared by all living cellular organisms."
    }
  ]
}
modules_11_to_20.append(m11)

# Module 12
m12 = {
  "id": "m12", "moduleNumber": 12,
  "title": "Pathways of Glucose Breakdown: Aerobic vs Anaerobic & Muscle Cramps",
  "tagline": "Mitochondrial complete oxidation, yeast alcoholic fermentation, and lactic acid cramps.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Once pyruvate is formed in the cytoplasm, it can follow three distinct biochemical pathways depending on the cellular environment and oxygen availability:</p>

<h3>1. Aerobic Respiration (In the Presence of Oxygen):</h3>
<ul>
  <li><strong>Site:</strong> Inside the <strong>mitochondria</strong>.</li>
  <li><strong>Reaction:</strong> The $3$-carbon pyruvate is completely broken down using oxygen into carbon dioxide, water, and an immense release of energy:
  $$\text{Pyruvate} + \text{O}_2 \xrightarrow{\text{In Mitochondria}} 6\text{CO}_2 + 6\text{H}_2\text{O} + \text{Energy (36 to 38 ATP)}$$
  </li>
  <li>Aerobic respiration yields substantially more energy than anaerobic pathways.</li>
</ul>

<h3>2. Anaerobic Respiration in Yeast (Alcoholic Fermentation):</h3>
<ul>
  <li><strong>Site:</strong> Cytoplasm of yeast during the complete absence of oxygen.</li>
  <li><strong>Reaction:</strong> Pyruvate is converted into a $2$-carbon alcohol (<strong>ethanol</strong>), carbon dioxide, and a modest release of energy:
  $$\text{Pyruvate} \xrightarrow{\text{Yeast (Absence of }\text{O}_2)} \text{C}_2\text{H}_5\text{OH (Ethanol)} + \text{CO}_2 + \text{Energy (2 ATP)}$$
  </li>
  <li><strong>Applications:</strong> Used in brewing beer/wine and in baking (where $\text{CO}_2$ gas bubbles make dough rise and become spongy).</li>
</ul>

<h3>3. Anaerobic Respiration in Human Muscle Cells (Lactic Acid Fermentation):</h3>
<ul>
  <li><strong>Context:</strong> During sudden, vigorous physical activity (sprinting, heavy lifting), muscle cells consume oxygen faster than the circulatory system can deliver it.</li>
  <li><strong>Reaction:</strong> To rapidly generate emergency ATP, muscle cells temporarily switch to anaerobic breakdown, converting pyruvate into the $3$-carbon compound <strong>lactic acid</strong>:
  $$\text{Pyruvate} \xrightarrow{\text{Muscle Cells (Lack of }\text{O}_2)} \text{Lactic Acid} + \text{Energy (2 ATP)}$$
  </li>
  <li><strong>Muscle Cramps:</strong> The sudden accumulation of acidic lactic acid crystals in muscle fibers irritates nerve endings, causing acute, painful <strong>muscle cramps</strong>.</li>
  <li><strong>Relief:</strong> A hot water bath or gentle massage enhances blood circulation, flushing fresh oxygen to muscle tissues, which oxidises lactic acid back into carbon dioxide and water.</li>
</ul>
""",
  "pointsToRemember": [
    "Aerobic respiration occurs in mitochondria, completely oxidising pyruvate to CO₂, H₂O, and 36-38 ATP.",
    "Anaerobic respiration in yeast yields Ethanol + CO₂ + 2 ATP (fermentation).",
    "In human muscle cells during vigorous exercise, lack of oxygen produces Lactic acid + 2 ATP; lactic acid buildup causes painful cramps."
  ],
  "keyNotes": [
    "Board Flowchart Classic: Master the diagram showing the 3 pathways of glucose breakdown: 1) In yeast (absence of O₂), 2) In muscle cells (lack of O₂), 3) In mitochondria (presence of O₂)."
  ],
  "questions": [
    get_bank_q(27, "m12_q01"), get_bank_q(28, "m12_q02"), get_bank_q(29, "m12_q03"),
    get_bank_q(30, "m12_q04"), get_bank_q(81, "m12_q05"),
    {
      "id": "m12_q06",
      "question": "What is the biological cause of sudden, painful muscle cramps experienced by athletes during an intense 100-meter sprint?",
      "options": [
        "Depletion of red blood cells in the liver",
        "Accumulation of lactic acid in muscle cells due to anaerobic breakdown under oxygen deficit",
        "Excessive calcium deposition in knee joints",
        "Overproduction of carbon dioxide gas in bones"
      ],
      "answer": "Accumulation of lactic acid in muscle cells due to anaerobic breakdown under oxygen deficit",
      "explanation": "When oxygen supply is outpaced by exertion, muscles produce lactic acid; its accumulation causes severe cramps."
    },
    {
      "id": "m12_q07",
      "question": "Why does taking a hot water bath or receiving a gentle massage relieve muscle cramps after heavy physical exertion?",
      "options": [
        "It cools the muscle to stop all blood flow.",
        "It improves blood circulation, increasing oxygen delivery to muscle cells which completely oxidises lactic acid into CO₂ and water.",
        "It turns lactic acid into solid bone.",
        "It removes all water from the body."
      ],
      "answer": "It improves blood circulation, increasing oxygen delivery to muscle cells which completely oxidises lactic acid into CO₂ and water.",
      "explanation": "Enhanced blood flow delivers oxygen to metabolise and clear lactic acid from fatigued muscle fibers."
    },
    {
      "id": "m12_q08",
      "question": "What are the chemical end products of anaerobic respiration (fermentation) carried out by yeast cells?",
      "options": [
        "Lactic acid and oxygen",
        "Ethanol, Carbon dioxide, and Energy",
        "Glucose and water",
        "Pyruvate and hydrogen gas"
      ],
      "answer": "Ethanol, Carbon dioxide, and Energy",
      "explanation": "Yeast decarboxylates and reduces pyruvate to ethanol (C2H5OH) and CO₂, yielding 2 ATP."
    },
    {
      "id": "m12_q09",
      "question": "In which cellular organelle does the complete aerobic oxidation of pyruvate into carbon dioxide and water take place?",
      "options": [
        "Endoplasmic reticulum",
        "Mitochondria",
        "Golgi apparatus",
        "Vacuole"
      ],
      "answer": "Mitochondria",
      "explanation": "The Krebs cycle and electron transport chain take place in the inner membrane and matrix of mitochondria."
    },
    {
      "id": "m12_q10",
      "question": "How does the total ATP energy yield of aerobic respiration compare to anaerobic respiration per molecule of glucose?",
      "options": [
        "Anaerobic yields 100 times more energy.",
        "Aerobic respiration yields vastly more energy (~36-38 ATP) compared to anaerobic respiration (only 2 ATP).",
        "Both pathways produce identical energy yields.",
        "Aerobic respiration consumes ATP without releasing any energy."
      ],
      "answer": "Aerobic respiration yields vastly more energy (~36-38 ATP) compared to anaerobic respiration (only 2 ATP).",
      "explanation": "Complete oxidation in mitochondria yields ~36-38 ATP, compared to only 2 net ATP in fermentation."
    }
  ]
}
modules_11_to_20.append(m12)

# Module 13
m13 = {
  "id": "m13", "moduleNumber": 13,
  "title": "Energy Currency: ATP Structure, Synthesis & 30.5 kJ/mol Energy Release",
  "tagline": "Adenosine triphosphate phosphorylation and fueling cellular work.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>In all living organisms, the energy released during cellular respiration is not allowed to dissipate randomly as heat. Instead, it is immediately trapped and stored chemically in molecules of <strong>Adenosine Triphosphate (ATP)</strong>.</p>

<h3>ATP — The Universal Energy Currency:</h3>
<p>Just as currency can be spent on any transaction, ATP can be hydrolyzed to power any endothermic cellular work: mechanical contraction of muscles, protein synthesis, active transport of ions, and conduction of nerve impulses.</p>

<h3>How ATP Is Synthesised (Phosphorylation):</h3>
<p>ATP is formed from <strong>Adenosine Diphosphate (ADP)</strong> and an inorganic phosphate group ($P_i$):</p>
<p style="text-align:center; font-weight:bold; color:#1e3a8a;">
  $\text{ADP} + \text{Inorganic Phosphate } (P_i) + \text{Energy from Respiration} \longrightarrow \text{ATP}$
</p>

<h3>How ATP Delivers Energy:</h3>
<p>ATP consists of an adenosine nucleoside attached to a chain of three phosphate groups linked by high-energy phosphoanhydride bonds. When the cell needs energy, the terminal phosphate linkage is broken by water (hydrolysis):</p>
<p style="text-align:center; font-weight:bold; font-size:1.1em; color:#166534; background:#f0fdf4; padding:12px; border-radius:8px; border:1px solid #bbf7d0;">
  $\text{ATP} + \text{H}_2\text{O} \longrightarrow \text{ADP} + P_i + \mathbf{30.5\text{ kJ/mol}}\text{ of Energy}$
</p>
<p>This precise packet of <strong>$30.5\text{ kJ/mol}$</strong> is coupled directly to cellular enzymes to drive otherwise non-spontaneous reactions.</p>
""",
  "pointsToRemember": [
    "ATP (Adenosine Triphosphate) is the universal energy currency of cells.",
    "ATP is synthesised by coupling energy from respiration to join ADP and inorganic phosphate: ADP + Pi + Energy → ATP.",
    "Hydrolysis of the terminal phosphate in ATP releases 30.5 kJ/mol of energy to drive cellular activities."
  ],
  "keyNotes": [
    "Numerical Standard: Remember the exact energy released upon breaking the terminal phosphate bond of ATP: 30.5 kJ/mol."
  ],
  "questions": [
    get_bank_q(35, "m13_q01"), get_bank_q(36, "m13_q02"), get_bank_q(37, "m13_q03"),
    get_bank_q(38, "m13_q04"), get_bank_q(39, "m13_q05"),
    {
      "id": "m13_q06",
      "question": "How much energy is liberated when the terminal high-energy phosphate bond of an ATP molecule is hydrolysed in cellular reactions?",
      "options": [
        "10.5 kJ/mol",
        "30.5 kJ/mol",
        "100.5 kJ/mol",
        "500 kJ/mol"
      ],
      "answer": "30.5 kJ/mol",
      "explanation": "Standard free energy change for terminal phosphate hydrolysis of ATP is exactly 30.5 kJ per mole."
    },
    {
      "id": "m13_q07",
      "question": "Why is ATP universally designated as the 'energy currency' of living cells?",
      "options": [
        "Because it is made of silver and copper atoms.",
        "Because it is readily synthesized to store metabolic energy and hydrolyzed on demand to power cellular work.",
        "Because it can be exchanged in banks.",
        "Because it only exists in human currency."
      ],
      "answer": "Because it is readily synthesized to store metabolic energy and hydrolyzed on demand to power cellular work.",
      "explanation": "ATP captures respiratory energy and transfers it flexibly to drive diverse cellular biological processes."
    },
    {
      "id": "m13_q08",
      "question": "What is the chemical equation for the synthesis of an ATP molecule from ADP during cellular respiration?",
      "options": [
        "ADP + Pi + Energy -> ATP",
        "ATP + H₂O -> ADP + Pi",
        "Glucose + ADP -> ATP",
        "ATP -> AMP + 2Pi"
      ],
      "answer": "ADP + Pi + Energy -> ATP",
      "explanation": "Phosphorylation of ADP with inorganic phosphate (Pi) using respiratory energy yields ATP."
    },
    {
      "id": "m13_q09",
      "question": "Which of the following cellular processes directly utilizes the energy released by ATP hydrolysis?",
      "options": [
        "Muscle contraction and protein synthesis",
        "Conduction of electrical nerve impulses",
        "Active transport of molecules across cell membranes",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "ATP powers mechanical (muscle), chemical (protein synthesis), and electrical/transport cellular work."
    },
    {
      "id": "m13_q10",
      "question": "What are the structural components of an Adenosine Diphosphate (ADP) molecule?",
      "options": [
        "One adenine base, one ribose sugar, and two phosphate groups",
        "Three glucose molecules and one lipid",
        "One amino acid and three fatty acids",
        "Pure nucleic acid without sugar"
      ],
      "answer": "One adenine base, one ribose sugar, and two phosphate groups",
      "explanation": "ADP consists of an adenine nitrogenous base, ribose pentose sugar, and two phosphate groups."
    }
  ]
}
modules_11_to_20.append(m13)

# Module 14
m14 = {
  "id": "m14", "moduleNumber": 14,
  "title": "Gas Exchange in Plants & Aquatic vs Terrestrial Organisms",
  "tagline": "Diffusion dynamics, stomatal respiration, and the gill ventilation rate in fish.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<h3>1. Gas Exchange in Plants:</h3>
<p>Plants exchange oxygen and carbon dioxide by <strong>simple diffusion</strong> across large intercellular air spaces ensuring all cells are close to the surface:</p>
<ul>
  <li>Gases diffuse through <strong>stomata</strong> in leaves, <strong>lenticels</strong> in bark/woody stems, and <strong>root hairs</strong> in soil.</li>
  <li><strong>Diurnal Rhythm of Gas Exchange:</strong>
    <ul>
      <li><strong>At Night (No Photosynthesis):</strong> Respiration continues, but photosynthesis ceases. Consequently, <strong>carbon dioxide elimination</strong> is the major gas exchange activity taking place.</li>
      <li><strong>During the Daytime:</strong> $\text{CO}_2$ generated by respiration is immediately consumed internally by photosynthesis. Because the rate of photosynthesis exceeds respiration, <strong>oxygen release</strong> is the major event observed.</li>
    </ul>
  </li>
</ul>

<hr style="border:0; border-top:1px solid #cbd5e1; margin:16px 0;">

<h3>2. Aquatic vs Terrestrial Animals — Breathing Rates:</h3>
<p>Why do fishes in an aquarium gulp water and flap their operculum so rapidly compared to humans breathing calmly in air?</p>
<ul>
  <li><strong>Oxygen Availability:</strong> Atmospheric air contains roughly <strong>$21\%$ oxygen</strong> by volume ($210,000\text{ ppm}$). In sharp contrast, water contains only about <strong>$0.0008\%$ dissolved oxygen</strong> ($8\text{ ppm}$) at room temperature!</li>
  <li><strong>Breathing Rate:</strong> Because the concentration of dissolved oxygen in aquatic environments is so low, <strong>aquatic animals must breathe at a much faster rate</strong> than terrestrial animals to extract sufficient oxygen.</li>
  <li><strong>Fish Gill Mechanism:</strong> Fish take water in through their mouth and force it back over their <strong>gills</strong>. Gills contain thousands of paper-thin, capillary-rich <strong>filaments (lamellae)</strong> that absorb dissolved oxygen directly into the bloodstream while releasing $\text{CO}_2$ into the outflowing water.</li>
</ul>
""",
  "pointsToRemember": [
    "Plants exchange gases by simple diffusion via stomata (leaves), lenticels (stems), and root hairs.",
    "At night, plants primarily release CO₂; during daytime, O₂ release is the dominant event.",
    "Aquatic animals breathe much faster than terrestrial animals because the concentration of dissolved oxygen in water is very low compared to air."
  ],
  "keyNotes": [
    "Board Classic: Why is the rate of breathing in aquatic organisms much faster than in terrestrial organisms? State the difference in oxygen availability (dissolved oxygen in water is very low compared to air)."
  ],
  "questions": [
    get_bank_q(40, "m14_q01"), get_bank_q(41, "m14_q02"), get_bank_q(42, "m14_q03"),
    get_bank_q(43, "m14_q04"), get_bank_q(44, "m14_q05"),
    {
      "id": "m14_q06",
      "question": "Why is the breathing rate of aquatic animals (such as fish) significantly higher and more rapid than that of terrestrial animals?",
      "options": [
        "Aquatic animals run much faster than land animals.",
        "The concentration of dissolved oxygen in water is very low compared to the abundant oxygen content in air.",
        "Water has zero density.",
        "Fish have no respiratory organs."
      ],
      "answer": "The concentration of dissolved oxygen in water is very low compared to the abundant oxygen content in air.",
      "explanation": "Water holds far less dissolved O₂ (<1%) than atmospheric air (21%), requiring fish to pump water rapidly over gills."
    },
    {
      "id": "m14_q07",
      "question": "Why is sleeping under a large shady tree at night traditionally discouraged in folklore?",
      "options": [
        "Trees attract poisonous snakes at night.",
        "At night, photosynthesis ceases while cellular respiration continues, causing trees to actively release carbon dioxide into the surrounding air.",
        "Trees consume all atmospheric nitrogen at night.",
        "Leaves become poisonous after sunset."
      ],
      "answer": "At night, photosynthesis ceases while cellular respiration continues, causing trees to actively release carbon dioxide into the surrounding air.",
      "explanation": "Without sunlight, photosynthesis stops and respiration continues, releasing CO₂ rather than oxygen."
    },
    {
      "id": "m14_q08",
      "question": "Through which microscopic structures in the woody bark of mature tree trunks does gaseous exchange take place?",
      "options": [
        "Stomata",
        "Lenticels",
        "Guard cells",
        "Companion cells"
      ],
      "answer": "Lenticels",
      "explanation": "Lenticels are raised, porous openings in the woody cork/bark of trees providing pathways for gas exchange."
    },
    {
      "id": "m14_q09",
      "question": "What specialized respiratory organs enable fish to extract dissolved oxygen from water?",
      "options": [
        "Lungs",
        "Gills (with capillary-rich lamellae)",
        "Tracheoles",
        "Skin pores only"
      ],
      "answer": "Gills (with capillary-rich lamellae)",
      "explanation": "Fish possess vascularised gills whose fine lamellae provide expansive surface area for aquatic gas exchange."
    },
    {
      "id": "m14_q10",
      "question": "During bright midday hours, what is the net gas exchange observed between a green plant leaf and the atmosphere?",
      "options": [
        "Net absorption of oxygen and release of carbon dioxide",
        "Net absorption of carbon dioxide and release of oxygen gas",
        "Zero gas exchange takes place",
        "Release of nitrogen gas"
      ],
      "answer": "Net absorption of carbon dioxide and release of oxygen gas",
      "explanation": "Midday photosynthetic rate vastly exceeds respiration; the leaf absorbs net CO₂ and liberates net O₂."
    }
  ]
}
modules_11_to_20.append(m14)

# Module 15
m15 = {
  "id": "m15", "moduleNumber": 15,
  "title": "Human Respiratory System: Trachea, Alveoli & Haemoglobin Transport",
  "tagline": "Cartilaginous rings, alveolar gas diffusion, and the necessity of respiratory pigments.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>The human respiratory tract begins at the external <strong>nostrils</strong>, where air is filtered by fine hairs and mucus that trap airborne dust particles and pathogens, while warming and moistening the incoming air.</p>

<h3>The Respiratory Pathway:</h3>
<p style="text-align:center; font-weight:bold; color:#1e3a8a;">
  $\text{Nostrils} \longrightarrow \text{Pharynx} \longrightarrow \text{Larynx} \longrightarrow \text{Trachea} \longrightarrow \text{Bronchi} \longrightarrow \text{Bronchioles} \longrightarrow \text{Alveoli}$
</p>

<h3>Key Anatomical Adaptations:</h3>
<ul>
  <li><strong>Rings of Cartilage in Trachea:</strong> The windpipe (trachea) is lined with C-shaped <strong>rings of cartilage</strong>. These sturdy rings prevent the tracheal airway from collapsing shut when air pressure drops during inhalation.</li>
  <li><strong>The Alveoli — The Gas Exchange Surface:</strong>
    <ul>
      <li>Inside the lungs, the bronchi branch repeatedly into smaller bronchioles, culminating in millions of tiny, balloon-like air sacs called <strong>alveoli</strong> (around $300\text{ million}$ alveoli per lung!).</li>
      <li><strong>Enormous Surface Area:</strong> Spread out flat, human alveoli would cover an astonishing <strong>$80\text{ square metres}$</strong> (the size of a tennis court!).</li>
      <li><strong>Extremely Thin Walls:</strong> Alveolar walls consist of a single layer of squamous epithelial cells surrounded by a dense mesh of blood capillaries, facilitating instant diffusion of $\text{O}_2$ into blood and $\text{CO}_2$ out of blood.</li>
    </ul>
  </li>
</ul>

<h3>Why Diffusion Alone Cannot Transport Oxygen in Humans:</h3>
<p>If simple physical diffusion were used to move oxygen in the human body, calculations show that <strong>it would take an estimated $3\text{ years}$</strong> for a single molecule of oxygen to travel from our lungs down to our toes!</p>
<p>Multicellular animals therefore rely on a respiratory pigment: <strong>Haemoglobin</strong> in red blood cells (RBCs). Haemoglobin has a remarkably high binding affinity for oxygen, forming <strong>oxyhaemoglobin</strong> to rapidly deliver oxygen to every tissue. In contrast, $\text{CO}_2$ is much more water-soluble than oxygen, so it travels dissolved in blood plasma as bicarbonate ions.</p>
""",
  "pointsToRemember": [
    "C-shaped rings of cartilage in the trachea prevent the airway from collapsing when air pressure drops.",
    "Alveoli provide an immense surface area (~80 m²) with paper-thin capillary walls for rapid gas diffusion.",
    "Haemoglobin in RBCs binds oxygen with high affinity; diffusion alone is too slow in large multicellular animals."
  ],
  "keyNotes": [
    "Exam Question: Why are rings of cartilage present in the trachea? (To prevent the collapse of the air passage during breathing)."
  ],
  "questions": [
    get_bank_q(45, "m15_q01"), get_bank_q(46, "m15_q02"), get_bank_q(47, "m15_q03"),
    get_bank_q(48, "m15_q04"), get_bank_q(49, "m15_q05"),
    {
      "id": "m15_q06",
      "question": "What is the crucial physiological function of the C-shaped rings of cartilage located within the human trachea?",
      "options": [
        "To digest food boluses entering the windpipe",
        "To prevent the tracheal air passage from collapsing when there is less air pressure inside it",
        "To manufacture red blood cells",
        "To produce vocal sounds"
      ],
      "answer": "To prevent the tracheal air passage from collapsing when there is less air pressure inside it",
      "explanation": "Cartilaginous rings provide structural rigidity, keeping the tracheal lumen patent during pressure changes."
    },
    {
      "id": "m15_q07",
      "question": "What is the primary site of actual gaseous exchange between alveolar air and circulating blood in the human lungs?",
      "options": [
        "Nasal cavity",
        "Trachea",
        "Alveoli (air sacs)",
        "Larynx"
      ],
      "answer": "Alveoli (air sacs)",
      "explanation": "Alveoli possess paper-thin walls and dense capillary beds, serving as the functional gas exchange units."
    },
    {
      "id": "m15_q08",
      "question": "Why is simple physical diffusion alone entirely inadequate to deliver oxygen to distant tissues in large multicellular organisms like humans?",
      "options": [
        "Oxygen does not dissolve in water.",
        "Diffusion distances are enormous; it would take an estimated 3 years for oxygen to reach human toes via diffusion alone without a blood pigment.",
        "Diffusion only operates at 100 °C.",
        "Human skin repels oxygen."
      ],
      "answer": "Diffusion distances are enormous; it would take an estimated 3 years for oxygen to reach human toes via diffusion alone without a blood pigment.",
      "explanation": "Diffusion is effective only over microscopic distances; large bodies require bulk transport by haemoglobin."
    },
    {
      "id": "m15_q09",
      "question": "What iron-containing respiratory pigment in human red blood cells binds oxygen to form oxyhaemoglobin?",
      "options": [
        "Chlorophyll",
        "Haemoglobin",
        "Haemocyanin",
        "Myoglobin only"
      ],
      "answer": "Haemoglobin",
      "explanation": "Haemoglobin contains iron-porphyrin complexes that reversibly bind up to four O₂ molecules."
    },
    {
      "id": "m15_q10",
      "question": "Why is carbon dioxide transported in human blood predominantly in the dissolved state in plasma rather than bound to haemoglobin?",
      "options": [
        "Carbon dioxide is completely insoluble in water.",
        "Carbon dioxide is significantly more soluble in water/plasma than oxygen gas.",
        "Haemoglobin destroys carbon dioxide molecules.",
        "Carbon dioxide is transported as solid crystals."
      ],
      "answer": "Carbon dioxide is significantly more soluble in water/plasma than oxygen gas.",
      "explanation": "CO₂ has high aqueous solubility and travels predominantly as dissolved bicarbonate ions (HCO₃⁻) in plasma."
    }
  ]
}
modules_11_to_20.append(m15)

# Module 16
m16 = {
  "id": "m16", "moduleNumber": 16,
  "title": "Human Circulatory System: Heart Anatomy, Chambers & Valves",
  "tagline": "The four-chambered muscular pump, atrioventricular valves, and separating blood flows.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>The human <strong>heart</strong> is a muscular pumping organ roughly the size of a clenched fist ($12\text{ cm} \times 9\text{ cm}$, mass $\approx 300\text{ g}$). Its continuous pumping maintains systemic and pulmonary blood flow.</p>

<h3>Four-Chambered Architecture:</h3>
<p>Because humans are warm-blooded endotherms requiring enormous, uninterrupted oxygen supplies, our heart is divided into <strong>four distinct chambers</strong> to prevent any mixing of oxygen-rich and oxygen-poor blood:</p>
<ul>
  <li><strong>Two Thin-Walled Receiving Chambers (Atria):</strong>
    <ul>
      <li><em>Left Atrium:</em> Receives oxygenated blood from the lungs via four pulmonary veins.</li>
      <li><em>Right Atrium:</em> Receives deoxygenated blood from the upper and lower body via the vena cava.</li>
    </ul>
  </li>
  <li><strong>Two Thick-Walled Pumping Chambers (Ventricles):</strong>
    <ul>
      <li><em>Left Ventricle:</em> Pumps oxygenated blood through the aorta to the entire systemic body.</li>
      <li><em>Right Ventricle:</em> Pumps deoxygenated blood through the pulmonary artery to the lungs.</li>
    </ul>
  </li>
  <li><strong>The Septum:</strong> A thick muscular dividing wall that separates the left and right sides of the heart, completely preventing oxygenated and deoxygenated blood from mixing.</li>
</ul>

<h3>Why Do Ventricles Have Thicker Walls Than Atria?</h3>
<p>Atria only pump blood down into the ventricles directly below them. In contrast, <strong>ventricles have much thicker, more muscular walls</strong> because they must generate high hydraulic pressure to pump blood out into distant vascular beds (especially the left ventricle, which must overcome systemic peripheral resistance to circulate blood through the entire body).</p>

<h3>Function of Heart Valves:</h3>
<p>The heart contains atrioventricular valves (tricuspid on the right, bicuspid/mitral on the left) and semilunar valves at the bases of the aorta and pulmonary artery. These flap-like valves ensure that <strong>blood flows strictly in one direction</strong> and prevent backflow when atria or ventricles contract.</p>
""",
  "pointsToRemember": [
    "The human heart has 4 chambers: Right/Left Atria and Right/Left Ventricles.",
    "A muscular septum completely separates the left (oxygenated) and right (deoxygenated) sides.",
    "Ventricles have thicker muscular walls than atria because they pump blood to distant body organs.",
    "Valves ensure blood flows in one direction and prevent backflow during ventricular contraction."
  ],
  "keyNotes": [
    "Board Highlight: Explain why the left ventricle has the thickest wall in the heart—it must pump blood under high pressure throughout the entire systemic body."
  ],
  "questions": [
    get_bank_q(50, "m16_q01"), get_bank_q(51, "m16_q02"), get_bank_q(52, "m16_q03"),
    get_bank_q(53, "m16_q04"), get_bank_q(54, "m16_q05"),
    {
      "id": "m16_q06",
      "question": "Why do the ventricles of the human heart possess much thicker, more muscular walls than the atria?",
      "options": [
        "Ventricles store bile juice.",
        "Ventricles must exert high pressure to pump blood to distant organs (lungs and whole body), while atria only push blood into adjacent ventricles.",
        "Atria are made of bone, while ventricles are made of cartilage.",
        "Ventricles must absorb food nutrients."
      ],
      "answer": "Ventricles must exert high pressure to pump blood to distant organs (lungs and whole body), while atria only push blood into adjacent ventricles.",
      "explanation": "High peripheral vascular resistance requires thick myocardial muscle in ventricles to pump blood through pulmonary and systemic circuits."
    },
    {
      "id": "m16_q07",
      "question": "What is the critical mechanical function of valves (such as tricuspid and bicuspid valves) inside the human heart?",
      "options": [
        "To filter out bacteria from blood",
        "To ensure that blood flows in only one direction and prevent retrograde backflow when chambers contract",
        "To produce red blood cells",
        "To cool the heart muscle"
      ],
      "answer": "To ensure that blood flows in only one direction and prevent retrograde backflow when chambers contract",
      "explanation": "Valves act as one-way gates that close tightly during systole to prevent backflow into preceding chambers."
    },
    {
      "id": "m16_q08",
      "question": "What is the biological role of the thick muscular septum that divides the human heart into left and right halves?",
      "options": [
        "It generates electrical pulses for breathing.",
        "It completely prevents oxygen-rich blood on the left from mixing with oxygen-poor blood on the right.",
        "It stores oxygen gas for emergencies.",
        "It separates blood from digestive juices."
      ],
      "answer": "It completely prevents oxygen-rich blood on the left from mixing with oxygen-poor blood on the right.",
      "explanation": "Complete septation prevents mixing of oxygenated and deoxygenated blood, maximizing oxygenation efficiency."
    },
    {
      "id": "m16_q09",
      "question": "Which chamber of the human heart receives freshly oxygenated blood returning directly from the lungs via the pulmonary veins?",
      "options": [
        "Right Atrium",
        "Left Atrium",
        "Right Ventricle",
        "Left Ventricle"
      ],
      "answer": "Left Atrium",
      "explanation": "Oxygenated blood from pulmonary veins enters the left atrium, which then passes it to the left ventricle."
    },
    {
      "id": "m16_q10",
      "question": "Which chamber of the heart has the thickest muscular myocardium of all four chambers?",
      "options": [
        "Right Atrium",
        "Left Atrium",
        "Right Ventricle",
        "Left Ventricle"
      ],
      "answer": "Left Ventricle",
      "explanation": "The left ventricle must generate enough pressure to pump blood through the systemic aorta to the entire body."
    }
  ]
}
modules_11_to_20.append(m16)

# Module 17
m17 = {
  "id": "m17", "moduleNumber": 17,
  "title": "Double Circulation & Blood Pressure (Sphygmomanometer)",
  "tagline": "Pulmonary vs systemic circuits, warm-blooded energy needs, and 120/80 mm Hg blood pressure.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<h3>1. The Principle of Double Circulation:</h3>
<p>In humans and other mammals, blood passes through the heart <strong>twice</strong> during each complete circuit of the body. This is known as <strong>double circulation</strong>:</p>
<ol>
  <li><strong>Pulmonary Circulation:</strong><br>
  $$\text{Right Ventricle} \xrightarrow{\text{Pulmonary Artery (Deoxygenated)}} \text{Lungs} \xrightarrow{\text{Pulmonary Veins (Oxygenated)}} \text{Left Atrium}$$
  <em>Vital Rule:</em> Arteries carry blood away from the heart; veins carry blood towards the heart. Thus, the <strong>pulmonary artery is the ONLY artery carrying deoxygenated blood</strong>, and the <strong>pulmonary vein is the ONLY vein carrying oxygenated blood</strong>!
  </li>
  <li><strong>Systemic Circulation:</strong><br>
  $$\text{Left Ventricle} \xrightarrow{\text{Aorta (Oxygenated)}} \text{Body Tissues} \xrightarrow{\text{Vena Cava (Deoxygenated)}} \text{Right Atrium}$$
  </li>
</ol>

<h3>Why Is Double Circulation Necessary for Birds and Mammals?</h3>
<p>Birds and mammals are warm-blooded (endothermic) animals that constantly maintain a stable internal body temperature regardless of ambient weather. This requires an enormous, uninterrupted supply of ATP energy, which is made possible by complete separation of oxygenated and deoxygenated blood, delivering high oxygen concentrations to tissues.</p>

<hr style="border:0; border-top:1px solid #cbd5e1; margin:16px 0;">

<h3>2. Blood Pressure (BP):</h3>
<ul>
  <li><strong>Definition:</strong> The lateral force that circulating blood exerts against the walls of blood vessels (measured in arteries).</li>
  <li><strong>Systolic Pressure:</strong> The peak pressure in arteries during ventricular contraction (systole). Normal value $\approx \mathbf{120\text{ mm Hg}}$.</li>
  <li><strong>Diastolic Pressure:</strong> The lowest pressure in arteries during ventricular relaxation (diastole). Normal value $\approx \mathbf{80\text{ mm Hg}}$.</li>
  <li><strong>Standard Normal Blood Pressure:</strong> $\mathbf{120 / 80\text{ mm Hg}}$.</li>
  <li><strong>Measurement Instrument:</strong> Measured using a <strong>Sphygmomanometer</strong>.</li>
  <li><strong>Hypertension (High BP):</strong> Chronic elevation of BP caused by constriction of arteriolar resistance vessels, which can lead to rupture of arteries and internal hemorrhage.</li>
</ul>
""",
  "pointsToRemember": [
    "Double circulation means blood passes through the heart twice per cycle (Pulmonary and Systemic circuits).",
    "Pulmonary artery carries deoxygenated blood to lungs; Pulmonary vein brings oxygenated blood to heart.",
    "Normal human blood pressure is 120/80 mm Hg, measured with a Sphygmomanometer."
  ],
  "keyNotes": [
    "Core Exam Question: Name the instrument used to measure blood pressure (Sphygmomanometer) and state normal values (Systolic: 120 mm Hg, Diastolic: 80 mm Hg)."
  ],
  "questions": [
    get_bank_q(76, "m17_q01"), get_bank_q(77, "m17_q02"), get_bank_q(78, "m17_q03"),
    get_bank_q(79, "m17_q04"), get_bank_q(80, "m17_q05"),
    {
      "id": "m17_q06",
      "question": "What is the medical name of the clinical diagnostic instrument used to measure human arterial blood pressure?",
      "options": [
        "Stethoscope",
        "Sphygmomanometer",
        "Spirometer",
        "Barometer"
      ],
      "answer": "Sphygmomanometer",
      "explanation": "A sphygmomanometer uses an inflatable cuff and mercury/aneroid manometer to measure arterial blood pressure."
    },
    {
      "id": "m17_q07",
      "question": "What are the standard resting systolic and diastolic blood pressure values for a healthy young adult human?",
      "options": [
        "100 / 50 mm Hg",
        "120 / 80 mm Hg (Systolic 120 mm Hg, Diastolic 80 mm Hg)",
        "160 / 120 mm Hg",
        "80 / 120 mm Hg"
      ],
      "answer": "120 / 80 mm Hg (Systolic 120 mm Hg, Diastolic 80 mm Hg)",
      "explanation": "Normal resting adult blood pressure is approximately 120 mm Hg systolic over 80 mm Hg diastolic."
    },
    {
      "id": "m17_q08",
      "question": "Which blood vessel is the unique exception among arteries because it carries DEOXYGENATED blood?",
      "options": [
        "Aorta",
        "Pulmonary Artery",
        "Renal Artery",
        "Carotid Artery"
      ],
      "answer": "Pulmonary Artery",
      "explanation": "Arteries carry blood away from the heart; the pulmonary artery carries deoxygenated blood from the right ventricle to the lungs."
    },
    {
      "id": "m17_q09",
      "question": "Why is the complete separation of oxygenated and deoxygenated blood by a four-chambered heart essential for warm-blooded birds and mammals?",
      "options": [
        "They have green blood.",
        "It provides high oxygen delivery efficiency necessary to produce large amounts of energy for maintaining constant internal body temperature.",
        "It stops the heart from beating too fast.",
        "It allows them to live under water."
      ],
      "answer": "It provides high oxygen delivery efficiency necessary to produce large amounts of energy for maintaining constant internal body temperature.",
      "explanation": "Endothermic homeothermy demands intense cellular respiration, requiring unmixed oxygenated blood."
    },
    {
      "id": "m17_q10",
      "question": "What dangerous physiological consequence can arise from severe, unmanaged hypertension (high blood pressure)?",
      "options": [
        "Blood turns into clear water.",
        "Rupture of delicate arteriolar blood vessels and internal hemorrhage (such as in stroke).",
        "Immediate freezing of bone marrow.",
        "Rapid growth of teeth."
      ],
      "answer": "Rupture of delicate arteriolar blood vessels and internal hemorrhage (such as in stroke).",
      "explanation": "Excess hydrostatic pressure damages vascular endothelium and can cause aneurysm rupture or cerebral stroke."
    }
  ]
}
modules_11_to_20.append(m17)

# Module 18
m18 = {
  "id": "m18", "moduleNumber": 18,
  "title": "Blood Composition (RBCs, WBCs, Platelets) & The Lymphatic System",
  "tagline": "Formed cellular elements, coagulation cascades, and the parallel immune-drainage network.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<h3>1. Components of Human Blood:</h3>
<p>Blood is a fluid connective tissue consisting of a pale-yellow liquid matrix called <strong>plasma</strong> in which cellular formed elements are suspended:</p>
<ul>
  <li><strong>Plasma ($55\%$ of blood):</strong> Transports dissolved carbon dioxide, urea, digested food nutrients, hormones, and mineral salts.</li>
  <li><strong>Red Blood Cells (RBCs / Erythrocytes):</strong> Biconcave disc-like cells packed with <strong>haemoglobin</strong> for oxygen transport.</li>
  <li><strong>White Blood Cells (WBCs / Leucocytes):</strong> Phagocytic cells and antibody-producing lymphocytes that defend the body against infectious diseases.</li>
  <li><strong>Platelets (Thrombocytes):</strong>
    <ul>
      <li>Tiny cellular fragments circulating in blood.</li>
      <li>When a blood vessel is ruptured or severed, blood loss would cause a dangerous drop in systemic blood pressure (reducing pumping efficiency).</li>
      <li>Platelets rapidly aggregate at the injury site and release clotting factors that convert soluble fibrinogen into an insoluble <strong>fibrin mesh clot</strong>, plugging the leak.</li>
    </ul>
  </li>
</ul>

<hr style="border:0; border-top:1px solid #cbd5e1; margin:16px 0;">

<h3>2. The Lymphatic System (Tissue Fluid / Lymph):</h3>
<p>Through microscopic pores in the walls of arterial capillaries, a portion of blood plasma, proteins, and leucocytes filters out into intercellular spaces between cells. This extracellular fluid is called <strong>tissue fluid</strong> or <strong>lymph</strong>:</p>
<ul>
  <li><strong>Characteristics of Lymph:</strong> Lymph is similar to blood plasma, but is <strong>colorless and contains significantly less protein</strong>, and lacks red blood cells and platelets.</li>
  <li><strong>Lymph Drainage:</strong> Tissue fluid enters microscopic, blind-ended <strong>lymphatic capillaries</strong>, which join into larger lymph vessels that eventually empty back into <strong>large veins (subclavian veins)</strong> near the heart.</li>
  <li><strong>Key Functions of Lymph:</strong>
    <ol>
      <li><strong>Fat Absorption:</strong> Transports digested and absorbed dietary fats from the intestinal villi (via specialised lymph vessels called <strong>lacteals</strong>).</li>
      <li><strong>Fluid Homeostasis:</strong> Drains excess extracellular interstitial fluid from tissue spaces back into the bloodstream, preventing painful swelling (oedema).</li>
      <li><strong>Immune Defense:</strong> Contains specialised white blood cells (lymphocytes) inside <strong>lymph nodes</strong> that filter and destroy invading bacteria and pathogens.</li>
    </ol>
  </li>
</ul>
""",
  "pointsToRemember": [
    "Blood consists of plasma, RBCs (oxygen transport), WBCs (immune defense), and platelets (clotting to stop blood loss).",
    "Lymph is colorless tissue fluid with less protein and no RBCs.",
    "Lymph carries absorbed fats from the intestine via lacteals and returns excess tissue fluid to the blood."
  ],
  "keyNotes": [
    "Exam Comparison: Contrast Blood vs Lymph: Blood has RBCs (red) and more protein; Lymph is colorless, lacks RBCs, has less protein, and transports digested fats."
  ],
  "questions": [
    get_bank_q(82, "m18_q01"), get_bank_q(83, "m18_q02"), get_bank_q(84, "m18_q03"),
    get_bank_q(85, "m18_q04"), get_bank_q(91, "m18_q05"),
    {
      "id": "m18_q06",
      "question": "What is the primary function of blood platelets (thrombocytes) when a blood vessel suffers an accidental puncture or cut?",
      "options": [
        "To destroy virus cells in the brain",
        "To form an insoluble fibrin blood clot at the leak site to halt haemorrhage and maintain circulatory pressure",
        "To carry oxygen to bone marrow",
        "To produce bile juice"
      ],
      "answer": "To form an insoluble fibrin blood clot at the leak site to halt haemorrhage and maintain circulatory pressure",
      "explanation": "Platelets aggregate at injury sites, initiating the coagulation cascade to plug vascular leaks."
    },
    {
      "id": "m18_q07",
      "question": "How does the composition of lymph (tissue fluid) differ from blood plasma?",
      "options": [
        "Lymph contains double the amount of red blood cells.",
        "Lymph is colorless, contains significantly less protein, and lacks red blood cells.",
        "Lymph is solid bone matrix.",
        "Lymph contains pure hydrochloric acid."
      ],
      "answer": "Lymph is colorless, contains significantly less protein, and lacks red blood cells.",
      "explanation": "Lymph is filtered interstitial fluid containing water, salts, and lymphocytes, but lacking RBCs and large plasma proteins."
    },
    {
      "id": "m18_q08",
      "question": "What are the specialized lymphatic vessels inside intestinal villi responsible for absorbing digested fats called?",
      "options": [
        "Renal tubules",
        "Lacteals",
        "Alveoli",
        "Tracheoles"
      ],
      "answer": "Lacteals",
      "explanation": "Lacteals are the central lymphatic capillaries in villi that take up emulsified chylomicron fats."
    },
    {
      "id": "m18_q09",
      "question": "Where does the lymphatic system ultimately return drained interstitial tissue fluid back into the blood circulation?",
      "options": [
        "Directly into the coronary arteries",
        "Into large veins (subclavian veins) near the neck/heart",
        "Into the stomach cavity",
        "Out through the skin pores"
      ],
      "answer": "Into large veins (subclavian veins) near the neck/heart",
      "explanation": "The thoracic and right lymphatic ducts empty collected lymph into large subclavian veins."
    },
    {
      "id": "m18_q10",
      "question": "What happens if lymphatic drainage vessels in a limb become chronically blocked by parasitic filarial worms?",
      "options": [
        "Blood pressure drops to zero immediately.",
        "Severe accumulation of tissue fluid in extracellular spaces causes massive swelling (oedema / elephantiasis).",
        "Bones melt into fluid.",
        "The limb turns green."
      ],
      "answer": "Severe accumulation of tissue fluid in extracellular spaces causes massive swelling (oedema / elephantiasis).",
      "explanation": "Impaired lymph drainage leads to fluid retention and swelling, clinically known as lymphedema."
    }
  ]
}
modules_11_to_20.append(m18)

# Module 19
m19 = {
  "id": "m19", "moduleNumber": 19,
  "title": "Transportation in Plants: Xylem (Water/Minerals) & Phloem Translocation (Sucrose)",
  "tagline": "Root pressure, transpirational pull, sieve tube mechanics, and ATP-driven food translocation.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Plants have low energy requirements compared to animals because they do not move and contain a high proportion of dead cells in supportive tissues. However, in tall trees, materials must be transported over immense vertical distances without muscular heart pumps!</p>

<h3>1. Transport of Water & Minerals — The Xylem Tissue:</h3>
<ul>
  <li><strong>Vessels & Tracheids:</strong> In xylem, tracheids and vessels of roots, stems, and leaves are interconnected to form a continuous water-conducting channel reaching all parts of the plant.</li>
  <li><strong>Mechanism at Night (Root Pressure):</strong> Cells of the root in contact with soil actively absorb inorganic ions. This creates an osmotic difference between root and soil, driving water into root xylem by <strong>endosmosis</strong>. This steady hydrostatic pressure pushes water upward to modest heights.</li>
  <li><strong>Mechanism in Daytime (Transpirational Pull):</strong><br>
  During the day, stomata are open. Water evaporates from the mesophyll cells of leaves through stomata (<strong>transpiration</strong>). This evaporation creates a suction pressure—known as <strong>transpirational pull</strong>—that pulls a continuous, unbroken column of water molecules (held together by cohesion and adhesion) from root xylem up to the highest leaves of giant trees (over $100\text{ metres}$ tall!).</li>
  <li><strong>Direction:</strong> Xylem transport is <strong>strictly unidirectional</strong> (upward from roots to foliage).</li>
</ul>

<hr style="border:0; border-top:1px solid #cbd5e1; margin:16px 0;">

<h3>2. Transport of Food (Photosynthates) — Phloem Translocation:</h3>
<ul>
  <li>The transport of soluble products of photosynthesis (primarily <strong>sucrose</strong>), amino acids, and plant hormones from leaves to non-green storage organs (roots, fruits, seeds, buds) is called <strong>translocation</strong>.</li>
  <li><strong>Tissue:</strong> Carried out by <strong>sieve tubes</strong> with the help of adjacent nucleated <strong>companion cells</strong>.</li>
  <li><strong>Active, ATP-Driven Process:</strong> Unlike xylem transport (which is driven by physical transpiration pull without direct metabolic energy expenditure), <strong>translocation in phloem requires metabolic energy (ATP)</strong>:
    <ol>
      <li>Sucrose is loaded actively into sieve tubes using ATP energy.</li>
      <li>This increases osmotic concentration inside phloem, causing water to enter by osmosis, generating high hydrostatic pressure.</li>
      <li>This pressure drives food sap towards tissues having lower pressure (e.g. storage roots or growing buds).</li>
    </ol>
  </li>
  <li><strong>Direction:</strong> Phloem translocation is <strong>bidirectional</strong> (both upward and downward according to seasonal and metabolic demand).</li>
</ul>
""",
  "pointsToRemember": [
    "Xylem transports water and minerals unidirectionally (upward) driven by root pressure and transpirational pull (physical forces).",
    "Phloem transports food (sucrose) bidirectionally by translocation, which is an ACTIVE process requiring ATP energy.",
    "Transpiration pull is the major driving force moving water up tall trees during the daytime."
  ],
  "keyNotes": [
    "Board Comparison Classic: Contrast Xylem vs Phloem: 1) Substance transported (Water/Minerals vs Food/Sucrose), 2) Direction (Unidirectional vs Bidirectional), 3) Energy (Physical/Passive vs Active/Requires ATP)."
  ],
  "questions": [
    get_bank_q(86, "m19_q01"), get_bank_q(87, "m19_q02"), get_bank_q(88, "m19_q03"),
    get_bank_q(89, "m19_q04"), get_bank_q(90, "m19_q05"),
    {
      "id": "m19_q06",
      "question": "What physical mechanism provides the primary driving suction force pulling water columns up giant 100-metre tall trees during the daytime?",
      "options": [
        "A heart pump in plant roots",
        "Transpirational pull created by water evaporating from leaf stomata",
        "Atmospheric nitrogen pressure",
        "Gravitational attraction"
      ],
      "answer": "Transpirational pull created by water evaporating from leaf stomata",
      "explanation": "Transpiration creates negative hydrostatic tension in leaf xylem, pulling water upward through cohesive water columns."
    },
    {
      "id": "m19_q07",
      "question": "In what crucial functional way does food translocation in phloem fundamentally differ from water conduction in xylem?",
      "options": [
        "Phloem only transports dry air.",
        "Phloem translocation is an active metabolic process requiring cellular energy (ATP) and operates bidirectionally, whereas xylem transport is passive and unidirectional.",
        "Xylem transport requires ATP, while phloem does not.",
        "Phloem only works at night."
      ],
      "answer": "Phloem translocation is an active metabolic process requiring cellular energy (ATP) and operates bidirectionally, whereas xylem transport is passive and unidirectional.",
      "explanation": "Phloem loading uses ATP to generate pressure gradients, moving food bidirectionally; xylem relies on passive physical transpiration."
    },
    {
      "id": "m19_q08",
      "question": "What is the primary soluble carbohydrate form in which photosynthetic products are translocated through phloem sieve tubes?",
      "options": [
        "Insoluble starch",
        "Sucrose (a non-reducing disaccharide)",
        "Cellulose fibres",
        "Pure glycogen"
      ],
      "answer": "Sucrose (a non-reducing disaccharide)",
      "explanation": "Sucrose is highly water-soluble and non-reducing, making it the ideal stable transport sugar in phloem."
    },
    {
      "id": "m19_q09",
      "question": "Which specialized elongated cells in phloem possess perforated end-walls and transport food with the aid of companion cells?",
      "options": [
        "Xylem tracheids",
        "Sieve tube elements",
        "Vascular cambium",
        "Collenchyma fibers"
      ],
      "answer": "Sieve tube elements",
      "explanation": "Sieve tubes have perforated sieve plates and collaborate with nucleated companion cells for sugar translocation."
    },
    {
      "id": "m19_q10",
      "question": "Why is root pressure more important for water movement at night than during the middle of a sunny day?",
      "options": [
        "Roots only absorb water in the dark.",
        "At night, stomata are closed and transpiration is negligible, making root pressure the primary upward driving force.",
        "Water freezes during daytime.",
        "Sunlight destroys root xylem."
      ],
      "answer": "At night, stomata are closed and transpiration is negligible, making root pressure the primary upward driving force.",
      "explanation": "With stomata closed at night, transpirational pull ceases, leaving osmotic root pressure as the dominant mechanism."
    }
  ]
}
modules_11_to_20.append(m19)

# Module 20
m20 = {
  "id": "m20", "moduleNumber": 20,
  "title": "Excretory System: Human Nephron, Dialysis & Plant Excretion",
  "tagline": "Glomerular ultrafiltration, tubular reabsorption, artificial kidneys, and plant waste disposal.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<h3>1. The Human Excretory System:</h3>
<p>The human urinary system consists of a pair of bean-shaped <strong>kidneys</strong> located in the abdomen on either side of the spine, a pair of <strong>ureters</strong>, a muscular <strong>urinary bladder</strong>, and a <strong>urethra</strong>. Its primary role is to filter out toxic nitrogenous wastes (urea, uric acid) from the blood.</p>

<h3>2. The Nephron — Filtration Unit of the Kidney:</h3>
<p>Each kidney contains approximately one million microscopic structural and functional filtration units called <strong>nephrons</strong>:</p>
<ol>
  <li><strong>Bowman's Capsule & Glomerulus (Ultrafiltration):</strong><br>
  Blood enters under high pressure through the renal artery into a tuft of delicate capillaries called the <strong>glomerulus</strong>, enclosed inside a cup-shaped <strong>Bowman's capsule</strong>. High hydrostatic pressure forces liquid plasma across capillary pores into the capsule, creating an <strong>initial filtrate</strong> containing water, glucose, amino acids, salts, and urea.<br>
  <em>Staggering Statistic:</em> An adult kidney filters about <strong>$180\text{ litres}$ of initial filtrate per day!</strong></li>
  <li><strong>Selective Tubular Reabsorption:</strong><br>
  If all $180\text{ L}$ were excreted, humans would suffer fatal dehydration within hours. As filtrate travels down the long coiled nephron tubule (Henle's loop and collecting duct), useful substances—<strong>glucose, amino acids, essential mineral salts, and the vast majority of water</strong>—are <strong>selectively reabsorbed</strong> back into adjacent peritubular blood capillaries.</li>
  <li><strong>Urine Excretion:</strong><br>
  The remaining concentrated waste fluid (~$\mathbf{1\text{ to }2\text{ litres per day}}$) is <strong>urine</strong>. It flows via ureters into the bladder, where stretching triggers the urge to urinate through the urethra.</li>
</ol>

<hr style="border:0; border-top:1px solid #cbd5e1; margin:16px 0;">

<h3>3. Artificial Kidney (Haemodialysis):</h3>
<p>Kidney failure (due to infections, diabetes, or physical trauma) causes dangerous accumulation of toxic urea in the blood (uraemia). An artificial kidney is an external clinical machine used to filter the patient's blood:</p>
<ul>
  <li>Blood taken from a radial artery is circulated through semipermeable cellophane tubes suspended in a tank filled with <strong>dialysing fluid</strong>.</li>
  <li>The dialysing fluid has the exact same osmotic pressure and electrolyte composition as healthy blood, <strong>except that it contains ZERO nitrogenous wastes</strong>.</li>
  <li>Waste products (urea, excess salts) diffuse through the cellophane pores into the dialysing fluid.</li>
  <li><em>Fundamental Difference from Real Kidneys:</em> In haemodialysis, there is <strong>NO reabsorption involved</strong>!</li>
</ul>

<h3>4. Excretion in Plants:</h3>
<p>Plants handle waste disposal through distinct biological adaptations:</p>
<ul>
  <li>Oxygen gas produced during daytime photosynthesis is eliminated through stomata.</li>
  <li>Excess water is transpired as vapor through stomatal pores.</li>
  <li>Waste substances are stored in cellular vacuoles of dying leaves, which eventually fall off (abscission).</li>
  <li>Other waste products are stored as <strong>resins and gums</strong> in old, non-functional xylem vessels (heartwood).</li>
  <li>Some wastes are excreted into the soil surrounding the roots.</li>
</ul>
""",
  "pointsToRemember": [
    "The nephron is the functional unit of the kidney, consisting of a Bowman's capsule, glomerulus, and coiled tubule.",
    "Initial filtrate (~180 L/day) undergoes selective reabsorption of glucose, amino acids, salts, and water, yielding 1-2 L of urine.",
    "Haemodialysis cleans blood using semipermeable tubes in dialysing fluid; unlike real kidneys, dialysis has NO reabsorption.",
    "Plants excrete wastes via transpiration, falling leaves, and storing gums and resins in old xylem."
  ],
  "keyNotes": [
    "Core Board Questions: 1) Explain why only 1-2 L of urine is excreted daily when 180 L is filtered (selective reabsorption), 2) Contrast artificial kidney vs natural kidney (no reabsorption in artificial kidney)."
  ],
  "questions": [
    get_bank_q(92, "m20_q01"), get_bank_q(93, "m20_q02"), get_bank_q(94, "m20_q03"),
    get_bank_q(95, "m20_q04"), get_bank_q(96, "m20_q05"),
    {
      "id": "m20_q06",
      "question": "Although the human kidneys filter approximately 180 litres of initial filtrate every day, why is the daily volume of urine excreted only 1 to 2 litres?",
      "options": [
        "178 litres of filtrate evaporates through the lungs.",
        "Nearly 99% of the initial filtrate (including all glucose, amino acids, and most water) is selectively reabsorbed by nephron tubules back into blood capillaries.",
        "The urinary bladder destroys the excess water.",
        "The stomach drinks the filtrate back."
      ],
      "answer": "Nearly 99% of the initial filtrate (including all glucose, amino acids, and most water) is selectively reabsorbed by nephron tubules back into blood capillaries.",
      "explanation": "Selective tubular reabsorption returns 99% of filtered volume (water and vital solutes) to the vascular system."
    },
    {
      "id": "m20_q07",
      "question": "What is the cup-shaped upper expanded end of a nephron that encloses the glomerular capillary network called?",
      "options": [
        "Loop of Henle",
        "Bowman's capsule",
        "Collecting duct",
        "Urinary bladder"
      ],
      "answer": "Bowman's capsule",
      "explanation": "Bowman's capsule is the double-walled cup that receives ultrafiltrate forced out of the glomerulus."
    },
    {
      "id": "m20_q08",
      "question": "What fundamental physiological process occurs in a natural human kidney that is completely ABSENT in an artificial kidney (haemodialysis machine)?",
      "options": [
        "Ultrafiltration",
        "Selective reabsorption",
        "Diffusion of urea",
        "Osmotic fluid balance"
      ],
      "answer": "Selective reabsorption",
      "explanation": "Haemodialysis relies solely on simple concentration diffusion; it performs zero selective tubular reabsorption."
    },
    {
      "id": "m20_q09",
      "question": "In what specialized plant tissues or organs do woody trees permanently store metabolic waste products as gums and resins?",
      "options": [
        "Active apical meristems",
        "Old, non-functional xylem vessels (heartwood)",
        "Root hairs",
        "Flower petals only"
      ],
      "answer": "Old, non-functional xylem vessels (heartwood)",
      "explanation": "Plants store insoluble waste metabolites like resins and gums in the lumens of old non-conducting xylem."
    },
    {
      "id": "m20_q10",
      "question": "Which of the following organic solute molecules present in initial glomerular filtrate is NORMALLY 100% reabsorbed in the proximal nephron tubule?",
      "options": [
        "Urea",
        "Glucose",
        "Uric acid",
        "Excess mineral sulphate"
      ],
      "answer": "Glucose",
      "explanation": "Under healthy physiological conditions, 100% of filtered glucose is actively reabsorbed by the proximal tubule."
    }
  ]
}
modules_11_to_20.append(m20)

with open('scratch/ch5_part2.json', 'w', encoding='utf-8') as f:
    json.dump(modules_11_to_20, f, ensure_ascii=False, indent=2)

print(f"Successfully generated Chapter 5 Part 2 (Modules 11 to 20): {len(modules_11_to_20)} modules.")
