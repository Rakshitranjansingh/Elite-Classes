# -*- coding: utf-8 -*-
"""
CH3 Part 2: Modules 11 to 20
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

modules_11_to_20 = []

# Module 11
m11 = {
  "id": "m11", "moduleNumber": 11,
  "title": "Electronic Configuration, Octet Rule & Cation/Anion Formation",
  "tagline": "The driving force behind chemical reactivity and ionic valence states.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Why do elements enter into chemical combinations? Atoms react to achieve a completely filled outermost electron shell, mirroring the exceptionally stable electronic configuration of <strong>noble gases</strong> (which have an octet of $8$ valence electrons, or a duplet of $2$ in helium).</p>

<h3>1. Metallic Character & Cation Formation (Electropositive Elements):</h3>
<p>Atoms of metals have $1, 2,$ or $3$ valence electrons in their outermost shell. To attain a noble gas octet, it is energetically favorable for metals to <strong>lose</strong> these valence electrons rather than gain five or more electrons:</p>
<ul>
  <li><strong>Sodium ($\text{Na}$, atomic number $11$):</strong><br>
  Electronic configuration is $2, 8, 1$. By losing its outermost valence electron, it forms a sodium cation ($\text{Na}^+$) with the stable configuration $2, 8$ of neon ($\text{Ne}$):
  $$\text{Na}\,(2,8,1) \longrightarrow \text{Na}^+\,(2,8) + e^-$$
  </li>
  <li><strong>Magnesium ($\text{Mg}$, atomic number $12$):</strong><br>
  Electronic configuration is $2, 8, 2$. It loses $2$ valence electrons to form a magnesium cation ($\text{Mg}^{2+}$):
  $$\text{Mg}\,(2,8,2) \longrightarrow \text{Mg}^{2+}\,(2,8) + 2e^-$$
  </li>
</ul>

<h3>2. Non-Metallic Character & Anion Formation (Electronegative Elements):</h3>
<p>Atoms of non-metals have $5, 6,$ or $7$ electrons in their valence shell. They complete their octet by <strong>gaining</strong> electrons, forming negatively charged anions:</p>
<ul>
  <li><strong>Chlorine ($\text{Cl}$, atomic number $17$):</strong><br>
  Electronic configuration is $2, 8, 7$. It requires only $1$ electron to complete its octet. By gaining an electron, it forms a chloride anion ($\text{Cl}^-$) with the stable configuration $2, 8, 8$ of argon ($\text{Ar}$):
  $$\text{Cl}\,(2,8,7) + e^- \longrightarrow \text{Cl}^-\,(2,8,8)$$
  </li>
  <li><strong>Oxygen ($\text{O}$, atomic number $8$):</strong><br>
  Electronic configuration is $2, 6$. It gains $2$ electrons to form the oxide anion ($\text{O}^{2-}$):
  $$\text{O}\,(2,6) + 2e^- \longrightarrow \text{O}^{2-}(2,8)$$
  </li>
</ul>
""",
  "pointsToRemember": [
    "Atoms react to attain a stable noble gas electronic configuration with 8 valence electrons (octet rule).",
    "Metals lose valence electrons to form positively charged cations (electropositive nature).",
    "Non-metals gain valence electrons to form negatively charged anions (electronegative nature)."
  ],
  "keyNotes": [
    "Board Highlight: Be ready to state electronic configurations of Na (2,8,1), Na+ (2,8), Cl (2,8,7), and Cl- (2,8,8) to illustrate ionic bond formation."
  ],
  "questions": [
    get_bank_q(36, "m11_q01"), get_bank_q(37, "m11_q02"), get_bank_q(38, "m11_q03"),
    get_bank_q(70, "m11_q04"), get_bank_q(71, "m11_q05"),
    {
      "id": "m11_q06",
      "question": "What is the electronic configuration of a neutral magnesium atom (Z = 12) and a magnesium cation (Mg²⁺)?",
      "options": [
        "Atom: 2, 8, 2; Cation: 2, 8",
        "Atom: 2, 8; Cation: 2, 8, 2",
        "Atom: 2, 7, 3; Cation: 2, 8, 1",
        "Atom: 2, 8, 2; Cation: 2, 8, 8"
      ],
      "answer": "Atom: 2, 8, 2; Cation: 2, 8",
      "explanation": "A neutral Mg atom has 12 electrons (2, 8, 2); upon losing its two outermost electrons, Mg²⁺ has 10 electrons (2, 8)."
    },
    {
      "id": "m11_q07",
      "question": "Why are metallic elements described as 'electropositive' in chemical nomenclature?",
      "options": [
        "Because they attract protons into their electron shells.",
        "Because they readily lose electrons to form positively charged cations.",
        "Because their nuclei carry zero electrical charge.",
        "Because they repel all non-metallic atoms in solution."
      ],
      "answer": "Because they readily lose electrons to form positively charged cations.",
      "explanation": "Metals have low ionisation energies and readily release valence electrons to form positive ions (cations), making them electropositive."
    },
    {
      "id": "m11_q08",
      "question": "How many electrons does an atom of nitrogen (atomic number 7) need to gain in order to achieve a stable noble gas configuration?",
      "options": [
        "1 electron",
        "2 electrons",
        "3 electrons",
        "4 electrons"
      ],
      "answer": "3 electrons",
      "explanation": "Nitrogen has configuration 2, 5; it requires 3 electrons to complete its valence octet (2, 8) to form N³⁻."
    },
    {
      "id": "m11_q09",
      "question": "Which noble gas electronic configuration is attained by a chlorine atom when it forms a chloride ion (Cl⁻)?",
      "options": [
        "Helium (2)",
        "Neon (2, 8)",
        "Argon (2, 8, 8)",
        "Krypton (2, 8, 18, 8)"
      ],
      "answer": "Argon (2, 8, 8)",
      "explanation": "Chlorine (2, 8, 7) gains one electron to attain the 18-electron configuration of Argon (2, 8, 8)."
    },
    {
      "id": "m11_q10",
      "question": "What happens when an atom of oxygen (Z = 6 valence electrons) combines with calcium (Z = 2 valence electrons)?",
      "options": [
        "Calcium shares two pairs of electrons with oxygen.",
        "Calcium transfers 2 valence electrons to oxygen, forming Ca²⁺ and O²⁻ ions.",
        "Oxygen transfers 2 electrons to calcium.",
        "Both atoms gain protons from each other."
      ],
      "answer": "Calcium transfers 2 valence electrons to oxygen, forming Ca²⁺ and O²⁻ ions.",
      "explanation": "Calcium completely transfers its two outermost electrons to oxygen, resulting in the electrovalent compound Calcium Oxide (CaO)."
    }
  ]
}
modules_11_to_20.append(m11)

# Module 12
m12 = {
  "id": "m12", "moduleNumber": 12,
  "title": "Formation and Electron-Dot Structures of Ionic Compounds (NaCl, MgCl₂, CaO)",
  "tagline": "Lewis electron-dot representations, complete electron transfer, and lattice assembly.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>An <strong>ionic bond</strong> (or <strong>electrovalent bond</strong>) is a strong chemical bond formed by the <strong>complete transfer of one or more electrons</strong> from a metal atom to a non-metal atom. The resulting oppositely charged ions are bound firmly together by powerful electrostatic forces of attraction.</p>

<h3>1. Formation of Sodium Chloride ($\text{NaCl}$):</h3>
<p>Sodium has one valence electron ($\text{Na}\cdot$) and chlorine has seven ($:\ddot{\text{Cl}}\cdot$). Sodium transfers its valence electron to chlorine:</p>
<p style="text-align:center; font-size:1.1em; color:#1e3a8a;">
  $\text{Na}\cdot + :\ddot{\text{Cl}}\cdot \longrightarrow [\text{Na}]^+ [:\ddot{\text{Cl}}:]^-$
</p>
<p>The electrostatic attraction between the $\text{Na}^+$ cation and $\text{Cl}^-$ anion forms crystalline sodium chloride.</p>

<h3>2. Formation of Magnesium Chloride ($\text{MgCl}_2$):</h3>
<p>Magnesium has two valence electrons ($\cdot\text{Mg}\cdot$). A single chlorine atom can accept only one electron. Therefore, <strong>one magnesium atom transfers its two valence electrons to two separate chlorine atoms</strong>:</p>
<p style="text-align:center; font-size:1.1em; color:#1e3a8a;">
  $\cdot\text{Mg}\cdot + 2\,:\ddot{\text{Cl}}\cdot \longrightarrow [\text{Mg}]^{2+} 2[:\ddot{\text{Cl}}:]^- \quad\text{or}\quad [\text{Mg}]^{2+} [:\ddot{\text{Cl}}:]^-_2$
</p>
<p>The chemical formula is $\text{MgCl}_2$, representing a $1 : 2$ stoichiometric ratio of $\text{Mg}^{2+}$ to $\text{Cl}^-$ ions.</p>

<h3>3. Formation of Calcium Oxide ($\text{CaO}$):</h3>
<p>Calcium ($\text{Ca}$, $2, 8, 8, 2$) transfers both of its valence electrons to one oxygen atom ($\text{O}$, $2, 6$):</p>
<p style="text-align:center; font-size:1.1em; color:#1e3a8a;">
  $\cdot\text{Ca}\cdot + :\ddot{\text{O}}\cdot \longrightarrow [\text{Ca}]^{2+} [:\ddot{\text{O}}:]^{2-}$
</p>

<p><strong>Fundamental Structural Distinction:</strong> Ionic compounds do NOT exist as separate, isolated molecules. Instead, they form infinite, highly organised <strong>three-dimensional crystal lattices</strong> in which each cation is surrounded symmetrically by anions and each anion by cations.</p>
""",
  "pointsToRemember": [
    "Ionic bonds form by complete transfer of electrons from metals to non-metals.",
    "In MgCl₂, one Mg atom transfers two electrons—one to each of two chlorine atoms: [Mg]²⁺ 2[Cl]⁻.",
    "Ionic compounds exist as three-dimensional crystal lattices of alternating ions, not as discrete molecules."
  ],
  "keyNotes": [
    "Exam Practice: Practice drawing electron-dot structures for NaCl, MgCl₂, and CaO showing arrows for electron transfer and square brackets for ions with charges."
  ],
  "questions": [
    get_bank_q(39, "m12_q01"), get_bank_q(40, "m12_q02"), get_bank_q(72, "m12_q03"),
    get_bank_q(73, "m12_q04"), get_bank_q(74, "m12_q05"),
    {
      "id": "m12_q06",
      "question": "In the electron-dot representation of magnesium chloride (MgCl₂), how many chlorine atoms are needed to accommodate the electrons lost by one magnesium atom?",
      "options": [
        "One chlorine atom",
        "Two chlorine atoms, each accepting one electron",
        "Three chlorine atoms",
        "Four chlorine atoms"
      ],
      "answer": "Two chlorine atoms, each accepting one electron",
      "explanation": "Magnesium loses two electrons; since each chlorine atom needs only one electron to complete its octet, two chlorine atoms are required."
    },
    {
      "id": "m12_q07",
      "question": "Why do ionic compounds such as sodium chloride NOT exist as discrete, isolated single molecules?",
      "options": [
        "Because ionic bonds evaporate in open air.",
        "Because electrostatic attraction acts equally in all directions, building a continuous 3D crystal lattice of alternating cations and anions.",
        "Because the ions have no mass.",
        "Because electrons are continually destroyed and recreated."
      ],
      "answer": "Because electrostatic attraction acts equally in all directions, building a continuous 3D crystal lattice of alternating cations and anions.",
      "explanation": "Electrostatic forces are non-directional; each cation attracts all neighbouring anions in a macroscopic 3D lattice network."
    },
    {
      "id": "m12_q08",
      "question": "What is the formula unit and ionic composition of the compound formed between Aluminium (Al) and Oxygen (O)?",
      "options": [
        "AlO (one Al²⁺ and one O²⁻)",
        "Al₂O₃ (two Al³⁺ cations and three O²⁻ anions)",
        "Al3O₂ (three Al²⁺ cations and two O³⁻ anions)",
        "AlO₂ (one Al⁴⁺ cation and two O²⁻ anions)"
      ],
      "answer": "Al₂O₃ (two Al³⁺ cations and three O²⁻ anions)",
      "explanation": "Aluminium forms Al³⁺ (loses 3 e⁻) and oxygen forms O²⁻ (gains 2 e⁻). Balancing charges gives Al₂O₃ (2×(+3) + 3×(-2) = 0)."
    },
    {
      "id": "m12_q09",
      "question": "During the formation of potassium chloride (KCl), which electron transfer takes place?",
      "options": [
        "Potassium accepts 1 electron from chlorine.",
        "Potassium transfers 1 electron from its outermost shell to chlorine's valence shell.",
        "Chlorine shares 2 electrons equally with potassium.",
        "Potassium transfers 2 protons to chlorine."
      ],
      "answer": "Potassium transfers 1 electron from its outermost shell to chlorine's valence shell.",
      "explanation": "Potassium (2, 8, 8, 1) transfers its single valence electron to chlorine (2, 8, 7), forming K⁺ and Cl⁻."
    },
    {
      "id": "m12_q10",
      "question": "What type of chemical bond is formed between an element X (atomic number 19) and element Y (atomic number 8)?",
      "options": [
        "Non-polar covalent bond",
        "Ionic (electrovalent) bond, forming X2Y",
        "Coordinate covalent bond",
        "Metallic bond"
      ],
      "answer": "Ionic (electrovalent) bond, forming X2Y",
      "explanation": "Element X (19) is potassium (metal) and Y (8) is oxygen (non-metal). Metal + Non-metal forms an ionic bond with formula K₂O (X2Y)."
    }
  ]
}
modules_11_to_20.append(m12)

# Module 13
m13 = {
  "id": "m13", "moduleNumber": 13,
  "title": "General Properties of Ionic Compounds: Hardness, Melting Points & Conductivity",
  "tagline": "Explaining the physical, thermal, and electrical behavior of electrovalent crystals.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>The general physical and chemical properties of ionic (electrovalent) compounds are directly explained by the intense electrostatic forces holding their crystal lattices together:</p>

<h3>1. Physical Nature (Hard & Brittle):</h3>
<ul>
  <li>Ionic compounds are hard, rigid crystalline solids at room temperature because of the powerful omnidirectional attraction between positive and negative ions.</li>
  <li><strong>Brittleness:</strong> When a mechanical shear stress or hammer blow is struck against an ionic crystal, one layer of ions slips slightly over the adjacent layer. This causes ions of <strong>like charges to come into direct alignment</strong>. The resulting intense electrostatic repulsion abruptly cleaves or shatters the crystal into pieces.</li>
</ul>

<h3>2. Exceptionally High Melting and Boiling Points:</h3>
<p>A very substantial amount of thermal energy is required to overcome the strong electrostatic inter-ionic forces binding the lattice. For example, sodium chloride ($\text{NaCl}$) has a melting point of $801\ ^\circ\text{C}$ ($1074\text{ K}$) and a boiling point of $1413\ ^\circ\text{C}$ ($1686\text{ K}$). Magnesium oxide ($\text{MgO}$) melts at an astonishing $2852\ ^\circ\text{C}$ due to divalent $\text{Mg}^{2+}$ and $\text{O}^{2-}$ charges!</p>

<h3>3. Solubility:</h3>
<ul>
  <li>Ionic compounds are generally <strong>soluble in polar solvents</strong> like water ($\text{H}_2\text{O}$). Polar water molecules surround and hydrate the individual ions, weakening their inter-ionic electrostatic bonds.</li>
  <li>They are completely <strong>insoluble in non-polar organic solvents</strong> like kerosene, petrol, benzene, and carbon tetrachloride.</li>
</ul>

<h3>4. Electrical Conductivity:</h3>
<p>Electrical conduction requires the physical movement of charged particles:</p>
<ul>
  <li><strong>In the Solid State:</strong> Ionic compounds <strong>DO NOT conduct electricity</strong> because ions are locked in rigid, fixed crystal lattice positions and cannot move under an electric potential.</li>
  <li><strong>In the Molten (Fused) State or Aqueous Solution:</strong> Ionic compounds are <strong>excellent conductors of electricity</strong>. In the molten state, high thermal kinetic energy overcomes electrostatic forces; in aqueous solution, hydration frees the ions, allowing cations and anions to migrate freely towards oppositely charged electrodes.</li>
</ul>
""",
  "pointsToRemember": [
    "Ionic compounds are hard, crystalline solids, but brittle because displacement of layers brings like charges together, causing repulsion.",
    "They have high melting and boiling points due to strong electrostatic inter-ionic attractions.",
    "They do NOT conduct electricity in the solid state, but ARE good conductors in molten state and in aqueous solutions where ions are free to migrate."
  ],
  "keyNotes": [
    "Common Board Question: Explain why solid NaCl does not conduct electricity, whereas molten NaCl or aqueous NaCl conducts electricity easily."
  ],
  "questions": [
    get_bank_q(41, "m13_q01"), get_bank_q(42, "m13_q02"), get_bank_q(43, "m13_q03"),
    get_bank_q(75, "m13_q04"), get_bank_q(76, "m13_q05"),
    {
      "id": "m13_q06",
      "question": "Why does solid sodium chloride crystal fail to conduct electric current when connected in an electrical circuit?",
      "options": [
        "Solid NaCl contains no ions whatsoever.",
        "The ions in the solid state are held rigidly in fixed lattice positions and cannot move freely.",
        "The solid crystal emits insulating radiation.",
        "Electrons in sodium chloride travel faster than light."
      ],
      "answer": "The ions in the solid state are held rigidly in fixed lattice positions and cannot move freely.",
      "explanation": "Conduction in ionic compounds requires mobile charge carriers. In solid NaCl, ions are held immobility by strong lattice forces."
    },
    {
      "id": "m13_q07",
      "question": "Why does an ionic crystal shatter into fragments when struck with a mechanical hammer (brittleness)?",
      "options": [
        "Covalent bonds inside the ions snap simultaneously.",
        "Mechanical stress shifts ion layers, bringing ions of like charges into alignment, causing violent electrostatic repulsion.",
        "The hammer injects moisture that hydrolyses the ions instantly.",
        "Electrons expand and blow the crystal apart."
      ],
      "answer": "Mechanical stress shifts ion layers, bringing ions of like charges into alignment, causing violent electrostatic repulsion.",
      "explanation": "When layers shift, like charges (+/+ and -/-) face each other, resulting in powerful electrostatic repulsion that splits the crystal."
    },
    {
      "id": "m13_q08",
      "question": "Which of the following liquids will readily dissolve table salt (sodium chloride)?",
      "options": [
        "Kerosene",
        "Petrol",
        "Water",
        "Benzene"
      ],
      "answer": "Water",
      "explanation": "Water is a polar solvent with a high dielectric constant that solvates and separates Na⁺ and Cl⁻ ions; non-polar organic solvents cannot."
    },
    {
      "id": "m13_q09",
      "question": "Why does Magnesium Oxide (MgO) possess a much higher melting point (2852 °C) than Sodium Chloride (NaCl, 801 °C)?",
      "options": [
        "Magnesium oxide contains trivalent ions.",
        "MgO consists of divalent ions (Mg²⁺ and O²⁻), resulting in much stronger electrostatic lattice attraction than univalent Na⁺ and Cl⁻.",
        "MgO is a synthetic diamond allotrope.",
        "Sodium chloride contains organic bonds."
      ],
      "answer": "MgO consists of divalent ions (Mg²⁺ and O²⁻), resulting in much stronger electrostatic lattice attraction than univalent Na⁺ and Cl⁻.",
      "explanation": "By Coulomb's law, electrostatic force is proportional to the product of ionic charges (q1 × q2). Mg²⁺ and O²⁻ (+2 × -2 = 4) attract much more strongly than Na⁺ and Cl⁻ (+1 × -1 = 1)."
    },
    {
      "id": "m13_q10",
      "question": "What charged particles are responsible for carrying electric current through molten calcium chloride during electrolysis?",
      "options": [
        "Free delocalised electrons",
        "Mobile calcium cations (Ca²⁺) and chloride anions (Cl⁻)",
        "Neutrons drifting between atoms",
        "Gaseous chlorine molecules"
      ],
      "answer": "Mobile calcium cations (Ca²⁺) and chloride anions (Cl⁻)",
      "explanation": "In ionic melts, current is conducted by the physical migration of mobile cations towards the cathode and anions towards the anode."
    }
  ]
}
modules_11_to_20.append(m13)

# Module 14
m14 = {
  "id": "m14", "moduleNumber": 14,
  "title": "Occurrence of Metals: Minerals, Ores, Gangue & Metallurgy",
  "tagline": "Geological sources, terminology, and foundational metallurgical concepts.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>The Earth's crust is the major source of metals. Soluble salts of metals (like sodium chloride and magnesium chloride) are also abundant in seawater. To study how metals are extracted, we must establish precise definitions:</p>

<h3>1. Key Definitions:</h3>
<ul>
  <li><strong>Mineral:</strong> Naturally occurring elements or chemical compounds found in the Earth's crust are called minerals.</li>
  <li><strong>Ore:</strong> A mineral that contains a sufficiently high percentage of a particular metal that can be extracted from it <strong>profitably and conveniently</strong> is called an ore.<br>
  <em>Golden Rule:</em> <strong>"All ores are minerals, but not all minerals are ores."</strong></li>
  <li><strong>Gangue (pronounced 'gang'):</strong> The unwanted earthy, rocky, sandy, and clayey impurities associated with commercially mined ores are collectively called gangue.</li>
  <li><strong>Metallurgy:</strong> The entire sequence of scientific, chemical, and commercial processes involved in the extraction of pure metals from their ores is called metallurgy.</li>
</ul>

<h3>2. Occurrence Based on Chemical Reactivity:</h3>
<ul>
  <li><strong>Metals at the Bottom of Reactivity Series (Native State):</strong> Gold ($\text{Au}$), platinum ($\text{Pt}$), and silver ($\text{Ag}$) are the least reactive and are found in the <strong>free or native elemental state</strong>. Copper and silver also occur in combined states as sulphide or oxide ores.</li>
  <li><strong>Metals in the Middle of Reactivity Series:</strong> Zinc ($\text{Zn}$), iron ($\text{Fe}$), lead ($\text{Pb}$), and copper ($\text{Cu}$) are moderately reactive and occur primarily as <strong>oxides, sulphides, or carbonates</strong>.</li>
  <li><strong>Metals at the Top of Reactivity Series:</strong> Potassium ($\text{K}$), sodium ($\text{Na}$), calcium ($\text{Ca}$), magnesium ($\text{Mg}$), and aluminium ($\text{Al}$) are so reactive that they are <strong>never found in the free native state</strong>. They occur exclusively as stable chlorides, carbonates, or oxides.</li>
</ul>

<h3>3. Concentration of Ores (Enrichment):</h3>
<p>Before chemical extraction begins, gangue must be removed. The physical and chemical methods used for ore enrichment (such as hydraulic washing, magnetic separation, or froth flotation) depend on the differences in physical or chemical properties between the ore particles and the gangue.</p>
""",
  "pointsToRemember": [
    "Minerals are natural inorganic substances in the Earth's crust; ores are minerals from which metals can be extracted profitably.",
    "Gangue refers to the commercially unwanted rocky and earthy impurities present in mined ores.",
    "Metals at the bottom of the reactivity series (Au, Pt) occur in native state; reactive metals occur combined as oxides, sulphides, or carbonates."
  ],
  "keyNotes": [
    "Board Highlight: Explain the distinction between mineral and ore, and why all ores are minerals but not all minerals are ores."
  ],
  "questions": [
    get_bank_q(44, "m14_q01"), get_bank_q(45, "m14_q02"), get_bank_q(46, "m14_q03"),
    get_bank_q(77, "m14_q04"), get_bank_q(78, "m14_q05"),
    {
      "id": "m14_q06",
      "question": "Why is the statement 'All ores are minerals, but not all minerals are ores' scientifically accurate?",
      "options": [
        "Minerals are artificial, whereas ores are natural.",
        "Every ore is a naturally occurring mineral, but only minerals with high metal percentage that allow profitable extraction qualify as ores.",
        "Ores are gases, whereas minerals are liquids.",
        "Minerals can only be found in volcanoes."
      ],
      "answer": "Every ore is a naturally occurring mineral, but only minerals with high metal percentage that allow profitable extraction qualify as ores.",
      "explanation": "An ore is an economically viable subset of minerals where metal extraction is commercially profitable."
    },
    {
      "id": "m14_q07",
      "question": "What technical term designates the rocky, sandy, and silty unwanted impurities mined alongside metallic ore?",
      "options": [
        "Slag",
        "Gangue",
        "Flux",
        "Anode mud"
      ],
      "answer": "Gangue",
      "explanation": "Gangue is the collective term for the earthy, silty, and rocky waste materials contaminating raw mined ore."
    },
    {
      "id": "m14_q08",
      "question": "Which of the following metals occurs commonly in nature in BOTH the free native state and combined as sulphide/oxide ores?",
      "options": [
        "Sodium",
        "Copper",
        "Potassium",
        "Magnesium"
      ],
      "answer": "Copper",
      "explanation": "Copper and silver have relatively low reactivity and occur both as native metals and combined as sulphides (Cu₂S) or oxides (Cu₂O)."
    },
    {
      "id": "m14_q09",
      "question": "Why are highly reactive metals like sodium, potassium, and calcium NEVER found in their native elemental state in the Earth's crust?",
      "options": [
        "They are destroyed by solar radiation.",
        "They have high electropositive reactivity and readily react with atmospheric oxygen, moisture, and carbon dioxide to form stable compounds.",
        "They sink directly into the Earth's molten iron core.",
        "They turn into organic matter upon burial."
      ],
      "answer": "They have high electropositive reactivity and readily react with atmospheric oxygen, moisture, and carbon dioxide to form stable compounds.",
      "explanation": "High reactivity metals react spontaneously with environmental substances, existing exclusively as stable ionic compounds."
    },
    {
      "id": "m14_q10",
      "question": "On what fundamental principle are the industrial methods of ore enrichment (gangue removal) designed?",
      "options": [
        "The atomic weights of the metal isotopes.",
        "The differences in physical or chemical properties between the ore particles and the gangue impurities.",
        "The color of the miners' protective equipment.",
        "The phase of the moon during mining operations."
      ],
      "answer": "The differences in physical or chemical properties between the ore particles and the gangue impurities.",
      "explanation": "Separation processes rely on density differences (hydraulic washing), magnetic properties, or surface wettability (froth flotation)."
    }
  ]
}
modules_11_to_20.append(m14)

# Module 15
m15 = {
  "id": "m15", "moduleNumber": 15,
  "title": "Extraction of Metals Low in the Reactivity Series (Cinnabar & Copper Glance)",
  "tagline": "Thermal decomposition and self-reduction of low-reactivity sulphide ores.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Metals situated low in the reactivity series (such as <strong>Mercury, $\text{Hg}$</strong> and <strong>Copper, $\text{Cu}$</strong>) are comparatively unreactive. The oxides of these metals are relatively unstable and can be reduced to metallic elements simply by <strong>thermal heating alone</strong> (thermal decomposition or self-reduction), without requiring expensive reducing agents like coke or electricity.</p>

<h3>1. Extraction of Mercury from Cinnabar ($\text{HgS}$):</h3>
<p><strong>Cinnabar</strong> is the natural sulphide ore of mercury ($\text{HgS}$). When cinnabar is roasted in the presence of excess air, it first oxidises to mercuric oxide ($\text{HgO}$), which on continued heating decomposes directly into liquid mercury metal:</p>
<ul>
  <li><strong>Step 1 (Roasting):</strong>
  $$2\text{HgS}(s) + 3\text{O}_2(g) \xrightarrow{\Delta} 2\text{HgO}(s) + 2\text{SO}_2(g) \uparrow$$
  </li>
  <li><strong>Step 2 (Thermal Decomposition):</strong>
  $$2\text{HgO}(s) \xrightarrow{\Delta > 300\ ^\circ\text{C}} 2\text{Hg}(l) + \text{O}_2(g) \uparrow$$
  </li>
</ul>

<h3>2. Extraction of Copper from Copper Glance ($\text{Cu}_2\text{S}$):</h3>
<p>Similarly, copper can be extracted from its sulphide ore, <strong>copper glance ($\text{Cu}_2\text{S}$)</strong>, by simple heating in air through a process known as <strong>auto-reduction (self-reduction)</strong>:</p>
<ul>
  <li><strong>Step 1 (Partial Roasting in Air):</strong> Part of the copper(I) sulphide is converted into copper(I) oxide:
  $$2\text{Cu}_2\text{S}(s) + 3\text{O}_2(g) \xrightarrow{\Delta} 2\text{Cu}_2\text{O}(s) + 2\text{SO}_2(g) \uparrow$$
  </li>
  <li><strong>Step 2 (Self-Reduction in the Absence of Air):</strong> The air supply is cut off. The newly formed copper(I) oxide reacts with the remaining unreacted copper(I) sulphide to yield blister copper:
  $$2\text{Cu}_2\text{O}(s) + \text{Cu}_2\text{S}(s) \xrightarrow{\Delta} 6\text{Cu}(s) + \text{SO}_2(g) \uparrow$$
  </li>
</ul>
""",
  "pointsToRemember": [
    "Metals low in the reactivity series (Hg, Cu) can be extracted from their sulphide ores by simple heating in air.",
    "Cinnabar (HgS) is roasted to mercuric oxide (HgO), which thermally decomposes into liquid mercury: 2HgO → 2Hg + O₂.",
    "Copper glance (Cu₂S) undergoes auto-reduction: 2Cu₂O + Cu₂S → 6Cu + SO₂."
  ],
  "keyNotes": [
    "Exam Equations: Memorize both steps for mercury extraction from cinnabar and the auto-reduction reaction for copper glance."
  ],
  "questions": [
    get_bank_q(47, "m15_q01"), get_bank_q(48, "m15_q02"), get_bank_q(79, "m15_q03"),
    get_bank_q(80, "m15_q04"), get_bank_q(81, "m15_q05"),
    {
      "id": "m15_q06",
      "question": "What is the mineral name and chemical formula of the primary commercial ore of mercury?",
      "options": [
        "Bauxite, Al₂O₃·2H₂O",
        "Cinnabar, HgS",
        "Calamine, ZnCO₃",
        "Galena, PbS"
      ],
      "answer": "Cinnabar, HgS",
      "explanation": "Cinnabar is the naturally occurring red sulphide ore of mercury with formula HgS."
    },
    {
      "id": "m15_q07",
      "question": "Why is a chemical reducing agent such as carbon (coke) NOT required for extracting mercury from mercuric oxide (HgO)?",
      "options": [
        "Carbon dissolves in liquid mercury to form gas.",
        "Mercuric oxide is thermally unstable and decomposes readily into liquid mercury and oxygen upon heating.",
        "Mercury is the most electropositive metal known.",
        "Mercuric oxide is an amphoteric gas."
      ],
      "answer": "Mercuric oxide is thermally unstable and decomposes readily into liquid mercury and oxygen upon heating.",
      "explanation": "Low-reactivity metal oxides have low lattice stability and decompose thermally without needing reducing agents."
    },
    {
      "id": "m15_q08",
      "question": "In the extraction of copper from copper glance (Cu₂S), what chemical species acts as the reducing agent in the final step?",
      "options": [
        "Coke (carbon powder)",
        "Unreacted copper(I) sulphide (Cu₂S) via auto-reduction",
        "Aluminium metal powder",
        "Carbon monoxide gas"
      ],
      "answer": "Unreacted copper(I) sulphide (Cu₂S) via auto-reduction",
      "explanation": "In auto-reduction, Cu₂O reacts directly with unreacted Cu₂S: 2Cu₂O + Cu₂S -> 6Cu + SO₂."
    },
    {
      "id": "m15_q09",
      "question": "Which pungent, suffocating gas is discharged as a byproduct during the roasting of sulphide ores like HgS and Cu₂S?",
      "options": [
        "Carbon dioxide (CO₂)",
        "Sulphur dioxide (SO₂)",
        "Hydrogen sulphide (H₂S)",
        "Nitrogen dioxide (NO₂)"
      ],
      "answer": "Sulphur dioxide (SO₂)",
      "explanation": "Roasting sulphide ores in air oxidises sulphur to pungent sulphur dioxide gas (SO₂)."
    },
    {
      "id": "m15_q10",
      "question": "What is the physical state of mercury obtained at the end of the cinnabar roasting and condensation process?",
      "options": [
        "Crystalline solid needles",
        "A dense, silvery liquid at room temperature",
        "A colorless gas",
        "A porous white cake"
      ],
      "answer": "A dense, silvery liquid at room temperature",
      "explanation": "Elemental mercury is condensed from vapour into its characteristic liquid metal form."
    }
  ]
}
modules_11_to_20.append(m15)

# Module 16
m16 = {
  "id": "m16", "moduleNumber": 16,
  "title": "Extraction of Middle Metals: Roasting vs Calcination (ZnS & ZnCO₃)",
  "tagline": "Thermal conversion of sulphide and carbonate ores into reducible oxides.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Metals in the middle of the reactivity series (such as <strong>Zinc, Iron, and Lead</strong>) are typically present in the Earth's crust as <strong>sulphide ores</strong> or <strong>carbonate ores</strong>.</p>
<p><strong>Why convert to oxides first?</strong> It is far easier and thermodynamically favorable to reduce a metal oxide to free metal using carbon than to reduce a sulphide or carbonate directly. Therefore, ores are first converted into metal oxides by two distinct thermal processes:</p>

<h3>1. Roasting (for Sulphide Ores):</h3>
<ul>
  <li><strong>Definition:</strong> The process of heating a sulphide ore strongly in the presence of <strong>excess air (oxygen)</strong> below its melting point.</li>
  <li><strong>Example (Zinc Blende, $\text{ZnS}$):</strong>
  $$2\text{ZnS}(s) + 3\text{O}_2(g) \xrightarrow{\Delta} 2\text{ZnO}(s) + 2\text{SO}_2(g) \uparrow$$
  </li>
  <li><strong>Gas Evolved:</strong> Pungent <strong>sulphur dioxide ($\text{SO}_2$)</strong> gas is evolved.</li>
</ul>

<h3>2. Calcination (for Carbonate Ores):</h3>
<ul>
  <li><strong>Definition:</strong> The process of heating a carbonate (or hydrated) ore strongly in <strong>limited air or in the complete absence of air</strong> below its melting point.</li>
  <li><strong>Example (Calamine, $\text{ZnCO}_3$):</strong>
  $$\text{ZnCO}_3(s) \xrightarrow{\Delta} \text{ZnO}(s) + \text{CO}_2(g) \uparrow$$
  </li>
  <li><strong>Gas Evolved:</strong> <strong>Carbon dioxide ($\text{CO}_2$)</strong> gas is evolved.</li>
</ul>

<h3>3. Reduction of Zinc Oxide to Zinc Metal:</h3>
<p>The zinc oxide ($\text{ZnO}$) obtained from either roasting or calcination is subsequently mixed with crushed coke (carbon) and heated strongly in a retort furnace:</p>
$$\text{ZnO}(s) + \text{C}(s) \xrightarrow{\Delta} \text{Zn}(s) + \text{CO}(g) \uparrow$$
<p>Here, carbon acts as the <strong>reducing agent</strong>, oxidising to carbon monoxide while reducing zinc oxide to zinc metal.</p>
""",
  "pointsToRemember": [
    "Roasting heats sulphide ores in EXCESS air to produce metal oxides and SO₂ gas.",
    "Calcination heats carbonate ores in LIMITED/NO air to produce metal oxides and CO₂ gas.",
    "Zinc blende (ZnS) is roasted; Calamine (ZnCO₃) is calcined; both yield ZnO, which is reduced by carbon: ZnO + C → Zn + CO."
  ],
  "keyNotes": [
    "Board Exam Essential: Contrast Roasting vs Calcination with equations: 2ZnS + 3O₂ → 2ZnO + 2SO₂ (Roasting) vs ZnCO₃ → ZnO + CO₂ (Calcination)."
  ],
  "questions": [
    get_bank_q(49, "m16_q01"), get_bank_q(50, "m16_q02"), get_bank_q(82, "m16_q03"),
    get_bank_q(83, "m16_q04"), get_bank_q(84, "m16_q05"),
    {
      "id": "m16_q06",
      "question": "What is the primary operational distinction between roasting and calcination in metallurgical extraction?",
      "options": [
        "Roasting uses electricity, whereas calcination uses liquid fuel.",
        "Roasting is carried out in excess air for sulphide ores, while calcination is carried out in limited or no air for carbonate ores.",
        "Roasting cools the ore, whereas calcination heats the ore.",
        "Roasting is only used for gold and silver."
      ],
      "answer": "Roasting is carried out in excess air for sulphide ores, while calcination is carried out in limited or no air for carbonate ores.",
      "explanation": "Roasting requires excess oxygen to convert sulphides to oxides + SO₂; calcination decomposes carbonates in the absence of air into oxides + CO₂."
    },
    {
      "id": "m16_q07",
      "question": "What gas is liberated when calamine ore (ZnCO₃) is subjected to calcination?",
      "options": [
        "Sulphur dioxide (SO₂)",
        "Carbon dioxide (CO₂)",
        "Oxygen gas (O₂)",
        "Chlorine gas (Cl₂)"
      ],
      "answer": "Carbon dioxide (CO₂)",
      "explanation": "Thermal decomposition of zinc carbonate during calcination releases carbon dioxide gas: ZnCO₃ -> ZnO + CO₂."
    },
    {
      "id": "m16_q08",
      "question": "Why are sulphide and carbonate ores universally converted into metal oxides before chemical reduction is performed?",
      "options": [
        "Metal oxides are liquids at room temperature.",
        "It is far easier and thermodynamically favorable to reduce metal oxides to free metals than sulphides or carbonates.",
        "Metal oxides are lighter than air.",
        "Oxides prevent the ore from exploding."
      ],
      "answer": "It is far easier and thermodynamically favorable to reduce metal oxides to free metals than sulphides or carbonates.",
      "explanation": "Standard metallurgical reduction using carbon or CO is thermodynamically spontaneous for oxides, but not for sulphides or carbonates."
    },
    {
      "id": "m16_q09",
      "question": "What reducing agent is commercially employed to reduce zinc oxide (ZnO) to metallic zinc in a retort furnace?",
      "options": [
        "Coke (carbon powder)",
        "Concentrated sulphuric acid",
        "Liquid nitrogen",
        "Chlorine gas"
      ],
      "answer": "Coke (carbon powder)",
      "explanation": "Coke reduces ZnO to metallic zinc vapour at high temperatures: ZnO + C -> Zn + CO."
    },
    {
      "id": "m16_q10",
      "question": "Which of the following pairings correctly matches an ore name with its corresponding chemical formula?",
      "options": [
        "Zinc blende — ZnCO₃",
        "Calamine — ZnS",
        "Zinc blende — ZnS and Calamine — ZnCO₃",
        "Cinnabar — Cu₂S"
      ],
      "answer": "Zinc blende — ZnS and Calamine — ZnCO₃",
      "explanation": "Zinc blende is the sulphide ore (ZnS), whereas Calamine is the carbonate ore (ZnCO₃)."
    }
  ]
}
modules_11_to_20.append(m16)

# Module 17
m17 = {
  "id": "m17", "moduleNumber": 17,
  "title": "Reduction of Metal Oxides & The Thermite Reaction",
  "tagline": "Carbon reduction limits, displacement by reactive metals, and molten rail welding.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Besides using carbon (coke) to reduce metal oxides, <strong>displacement reactions</strong> can also be used. Highly reactive metals such as <strong>sodium ($\text{Na}$), calcium ($\text{Ca}$), and aluminium ($\text{Al}$)</strong> are used as powerful reducing agents because they can displace metals of lower reactivity from their oxides.</p>

<h3>1. Reduction of Manganese Dioxide by Aluminium:</h3>
<p>When black manganese dioxide ($\text{MnO}_2$) is heated with aluminium powder, a highly exothermic displacement reaction takes place:</p>
$$3\text{MnO}_2(s) + 4\text{Al}(s) \longrightarrow 3\text{Mn}(l) + 2\text{Al}_2\text{O}_3(s) + \text{Heat}$$
<p>Manganese metal is produced in the molten state because of the tremendous heat evolved.</p>

<hr style="border:0; border-top:1px solid #cbd5e1; margin:16px 0;">

<h3>2. The Thermite Reaction:</h3>
<p>The reaction between <strong>iron(III) oxide ($\text{Fe}_2\text{O}_3$)</strong> and <strong>aluminium powder ($\text{Al}$)</strong> is famously known as the <strong>Thermite Reaction</strong>:</p>
<p style="text-align:center; font-weight:bold; font-size:1.1em; color:#1e3a8a;">
  $\text{Fe}_2\text{O}_3(s) + 2\text{Al}(s) \longrightarrow 2\text{Fe}(l) + \text{Al}_2\text{O}_3(s) + \text{Enormous Heat}$
</p>
<ul>
  <li><strong>Why is Iron in the Molten State?</strong> The reaction is so violently exothermic that the temperature generated exceeds $2500\ ^\circ\text{C}$—well above the melting point of iron ($1538\ ^\circ\text{C}$). The iron metal is produced as a glowing white-hot liquid!</li>
  <li><strong>Practical Application:</strong> This molten iron is tapped directly into gaps between <strong>cracked railway tracks</strong>, fractured machine frames, or cracked ship rudders to weld them securely on site.</li>
  <li><strong>Ignition:</strong> A mixture of iron(III) oxide and aluminium powder is called 'thermite'. It is ignited using a magnesium ribbon fuse embedded in barium peroxide powder.</li>
</ul>

<h3>Why Carbon Cannot Reduce All Metal Oxides:</h3>
<p>Carbon cannot reduce the oxides of sodium, magnesium, calcium, or aluminium because these reactive metals have a vastly greater chemical affinity for oxygen than carbon does.</p>
""",
  "pointsToRemember": [
    "Reactive metals like Al, Na, Ca act as reducing agents for oxides of less reactive metals.",
    "The Thermite reaction: Fe₂O₃ + 2Al → 2Fe(l) + Al₂O₃ + Heat; produces molten iron used to weld railway tracks.",
    "Carbon cannot reduce oxides of Na, Mg, Ca, Al because these metals have much higher affinity for oxygen than carbon."
  ],
  "keyNotes": [
    "Board Classic: Write the chemical equation for the Thermite reaction and state why the iron formed is obtained in the molten state (high heat of reaction exceeding iron's melting point)."
  ],
  "questions": [
    get_bank_q(85, "m17_q01"), get_bank_q(86, "m17_q02"), get_bank_q(87, "m17_q03"),
    get_bank_q(88, "m17_q04"), get_bank_q(89, "m17_q05"),
    {
      "id": "m17_q06",
      "question": "Why is the iron produced during the Thermite reaction obtained as a white-hot molten liquid rather than a solid?",
      "options": [
        "Iron melts at -50 °C.",
        "The displacement reaction is intensely exothermic, generating heat well above iron's melting point of 1538 °C.",
        "Aluminium dissolves iron into water.",
        "The reaction takes place in an open blast furnace."
      ],
      "answer": "The displacement reaction is intensely exothermic, generating heat well above iron's melting point of 1538 °C.",
      "explanation": "The enormous heat liberated during the reaction raises the local temperature above 2500 °C, melting the iron produced."
    },
    {
      "id": "m17_q07",
      "question": "What is the primary industrial application of the Thermite reaction?",
      "options": [
        "Manufacturing dental fillings",
        "Welding broken railway tracks and cracked heavy machine casings on site",
        "Producing cooking gas cylinders",
        "Electroplating gold on silverware"
      ],
      "answer": "Welding broken railway tracks and cracked heavy machine casings on site",
      "explanation": "The liquid molten iron produced in situ is poured into the gap between broken railway tracks to weld them seamlessly."
    },
    {
      "id": "m17_q08",
      "question": "Why cannot carbon powder (coke) be used to reduce aluminium oxide (Al₂O₃) to metallic aluminium?",
      "options": [
        "Carbon is more electropositive than aluminium.",
        "Aluminium has a vastly greater affinity for oxygen than carbon has.",
        "Carbon reacts with aluminium to form water.",
        "Aluminium oxide decomposes at room temperature."
      ],
      "answer": "Aluminium has a vastly greater affinity for oxygen than carbon has.",
      "explanation": "Aluminium binds oxygen with extreme thermodynamic stability; carbon cannot overcome this bond."
    },
    {
      "id": "m17_q09",
      "question": "In the reduction of manganese dioxide by aluminium powder (3MnO₂ + 4Al → 3Mn + 2Al₂O₃ + Heat), what role does aluminium play?",
      "options": [
        "An oxidising agent",
        "A reducing agent that displaces manganese",
        "A neutral spectator solvent",
        "A catalyst that remains unchanged"
      ],
      "answer": "A reducing agent that displaces manganese",
      "explanation": "Aluminium removes oxygen from MnO₂ (reducing it to Mn) while aluminium itself is oxidised to Al₂O₃."
    },
    {
      "id": "m17_q10",
      "question": "What fuse material is customarily used to initiate the high activation energy of the Thermite mixture?",
      "options": [
        "A burning wooden toothpick",
        "A burning magnesium ribbon fuse with barium peroxide ignition powder",
        "A beam of sunlight through a magnifying glass",
        "A drop of cold water"
      ],
      "answer": "A burning magnesium ribbon fuse with barium peroxide ignition powder",
      "explanation": "The thermite reaction has high activation energy and is ignited using a burning magnesium ribbon."
    }
  ]
}
modules_11_to_20.append(m17)

# Module 18
m18 = {
  "id": "m18", "moduleNumber": 18,
  "title": "Extraction of Highly Reactive Metals: Electrolytic Reduction of Molten Salts",
  "tagline": "Electrochemical extraction of electropositive metals from fused halides.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>The metals high up in the reactivity series (such as <strong>Sodium, Magnesium, Calcium, and Aluminium</strong>) are very reactive and cannot be obtained from their compounds by heating with chemical reducing agents like carbon. They are extracted exclusively by <strong>electrolytic reduction</strong> of their molten (fused) chlorides or oxides.</p>

<h3>1. Electrolytic Reduction of Molten Sodium Chloride ($\text{NaCl}$):</h3>
<p>When an electric current is passed through fused (molten) sodium chloride using inert carbon electrodes, the following half-reactions occur:</p>
<ul>
  <li><strong>At the Cathode (Negative Electrode - Reduction):</strong><br>
  Positively charged sodium ions ($\text{Na}^+$) migrate to the cathode, gain one electron each, and deposit as pure metallic sodium:
  $$\text{Na}^+ + e^- \longrightarrow \text{Na}(s)\quad (\text{Reduction at Cathode})$$
  </li>
  <li><strong>At the Anode (Positive Electrode - Oxidation):</strong><br>
  Negatively charged chloride ions ($\text{Cl}^-$) migrate to the anode, lose one electron each, and combine to form chlorine gas:
  $$2\text{Cl}^- \longrightarrow \text{Cl}_2(g) + 2e^-\quad (\text{Oxidation at Anode})$$
  </li>
</ul>

<h3>Why Must the Salt Be in the Molten State?</h3>
<ol>
  <li><strong>Solid State:</strong> In solid $\text{NaCl}$, ions are locked in rigid lattice positions; no conduction occurs.</li>
  <li><strong>Aqueous Solution (Brine):</strong> If aqueous $\text{NaCl}$ solution is electrolysed, water molecules are reduced at the cathode in preference to $\text{Na}^+$ ions, liberating <strong>hydrogen gas ($\text{H}_2$)</strong> rather than sodium metal! Thus, sodium can ONLY be obtained by electrolysing the <strong>molten anhydrous salt</strong>.</li>
</ol>

<h3>2. Extraction of Aluminium:</h3>
<p>Aluminium is commercially extracted by the electrolytic reduction of <strong>molten aluminium oxide ($\text{Al}_2\text{O}_3$, alumina)</strong> dissolved in molten cryolite ($\text{Na}_3\text{AlF}_6$) to lower its melting point and improve conductivity. Pure aluminium metal is deposited at the cathode.</p>
""",
  "pointsToRemember": [
    "Highly reactive metals (Na, Mg, Ca, Al) are extracted by electrolytic reduction of their molten chlorides or oxides.",
    "During electrolysis of molten NaCl: Sodium deposits at the cathode (Na⁺ + e⁻ → Na); Chlorine gas evolves at the anode (2Cl⁻ → Cl₂ + 2e⁻).",
    "Aqueous NaCl cannot be used to extract sodium because hydrogen gas is liberated at the cathode instead of sodium metal."
  ],
  "keyNotes": [
    "Critical Board Question: State the electrode reactions at cathode and anode for the electrolytic extraction of sodium from molten NaCl."
  ],
  "questions": [
    get_bank_q(90, "m18_q01"), get_bank_q(91, "m18_q02"), get_bank_q(92, "m18_q03"),
    get_bank_q(93, "m18_q04"), get_bank_q(94, "m18_q05"),
    {
      "id": "m18_q06",
      "question": "Why cannot sodium metal be extracted by the electrolysis of an aqueous solution of sodium chloride (brine)?",
      "options": [
        "Sodium chloride precipitates out of water.",
        "Water is reduced more easily than Na⁺ at the cathode, liberating hydrogen gas instead of sodium metal.",
        "Chlorine gas dissolves all the sodium produced.",
        "Aqueous solutions cannot conduct electric current."
      ],
      "answer": "Water is reduced more easily than Na⁺ at the cathode, liberating hydrogen gas instead of sodium metal.",
      "explanation": "Because hydrogen has a higher reduction potential than sodium, H+ (from water) is reduced at the cathode to H₂ gas instead of Na+."
    },
    {
      "id": "m18_q07",
      "question": "During the electrolysis of molten sodium chloride, at which electrode is pure sodium metal deposited, and what reaction occurs there?",
      "options": [
        "At the anode, by oxidation: Na⁺ - e⁻ -> Na",
        "At the cathode, by reduction: Na⁺ + e⁻ -> Na",
        "At the anode, by reduction: 2Cl⁻ -> Cl₂ + 2e⁻",
        "In the middle of the electrolyte bath"
      ],
      "answer": "At the cathode, by reduction: Na⁺ + e⁻ -> Na",
      "explanation": "Cations migrate to the negatively charged cathode where they gain electrons (reduction) to form neutral sodium metal."
    },
    {
      "id": "m18_q08",
      "question": "What gas is evolved at the positive anode during the electrolytic extraction of magnesium from fused magnesium chloride (MgCl₂)?",
      "options": [
        "Hydrogen gas (H₂)",
        "Oxygen gas (O₂)",
        "Chlorine gas (Cl₂)",
        "Carbon dioxide (CO₂)"
      ],
      "answer": "Chlorine gas (Cl₂)",
      "explanation": "Chloride anions are oxidised at the anode to produce chlorine gas: 2Cl⁻ -> Cl₂ + 2e⁻."
    },
    {
      "id": "m18_q09",
      "question": "What is the purpose of adding molten cryolite (Na₃AlF₆) to alumina (Al₂O₃) during the industrial electrolytic extraction of aluminium?",
      "options": [
        "To increase the weight of aluminium produced.",
        "To lower the melting point of alumina from 2050 °C to ~950 °C and increase its electrical conductivity.",
        "To color the aluminium silver.",
        "To absorb toxic oxygen gas."
      ],
      "answer": "To lower the melting point of alumina from 2050 °C to ~950 °C and increase its electrical conductivity.",
      "explanation": "Cryolite acts as a solvent that drastically lowers the melting point and enhances electrical conductivity."
    },
    {
      "id": "m18_q10",
      "question": "Which of the following metals is commercially extracted via electrolytic reduction of its molten chloride?",
      "options": [
        "Iron",
        "Lead",
        "Calcium",
        "Copper"
      ],
      "answer": "Calcium",
      "explanation": "Calcium is a highly reactive alkaline earth metal extracted by electrolytic reduction of molten calcium chloride (CaCl₂)."
    }
  ]
}
modules_11_to_20.append(m18)

# Module 19
m19 = {
  "id": "m19", "moduleNumber": 19,
  "title": "Refining of Metals: Electrolytic Refining of Copper & Anode Mud",
  "tagline": "Faradaic electro-purification, mass transfer, and recovery of precious metals.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>The metals produced by various reduction processes are typically crude and contaminated with impurities. To obtain high-purity metals suitable for electrical and engineering applications, they must be refined. The most versatile and widely employed commercial method is <strong>electrolytic refining</strong>, exemplified by copper:</p>

<h3>Electrolytic Refining Cell Configuration:</h3>
<ul>
  <li><strong>Anode (Positive Electrode):</strong> A thick slab of <strong>impure, crude copper</strong> ("blister copper").</li>
  <li><strong>Cathode (Negative Electrode):</strong> A thin sheet of <strong>pure copper metal</strong>.</li>
  <li><strong>Electrolyte:</strong> An aqueous solution of <strong>acidified copper sulphate ($\text{CuSO}_4 + \text{dil. }\text{H}_2\text{SO}_4$)</strong>.</li>
</ul>

<h3>Electrode Reactions & Mass Transfer:</h3>
<p>When an electric current is passed through the electrolyte cell:</p>
<ol>
  <li><strong>At the Anode (Oxidation / Dissolution):</strong><br>
  Pure copper atoms from the impure anode lose two electrons each and dissolve into the electrolyte as copper ions:
  $$\text{Cu}(\text{impure anode}) \longrightarrow \text{Cu}^{2+}(aq) + 2e^-$$
  </li>
  <li><strong>At the Cathode (Reduction / Deposition):</strong><br>
  An equivalent quantity of pure copper ions from the electrolyte migrate to the cathode, gain two electrons each, and deposit as pure copper:
  $$\text{Cu}^{2+}(aq) + 2e^- \longrightarrow \text{Cu}(\text{pure cathode})$$
  </li>
</ol>

<h3>Fate of Impurities & "Anode Mud":</h3>
<ul>
  <li><strong>Soluble Impurities:</strong> Less noble base metals (such as iron, nickel, and zinc) oxidise and go into the electrolyte solution as dissolved sulphate salts.</li>
  <li><strong>Insoluble Impurities ("Anode Mud"):</strong> Valuable noble metals (such as <strong>gold, silver, and platinum</strong>) that lie below copper in the electrochemical series do not oxidise. As the impure anode dissolves away, these insoluble particles drop down and collect at the bottom below the anode as <strong>anode mud</strong>. The commercial recovery of gold and silver from anode mud often offsets the entire electricity cost of the refining plant!</li>
</ul>
""",
  "pointsToRemember": [
    "In electrolytic refining of copper: Anode = thick impure copper; Cathode = thin pure copper; Electrolyte = acidified CuSO₄.",
    "Copper dissolves at the anode (Cu → Cu²⁺ + 2e⁻) and deposits at the cathode (Cu²⁺ + 2e⁻ → Cu).",
    "Insoluble impurities settle below the anode as 'anode mud', containing precious metals like gold, silver, and platinum."
  ],
  "keyNotes": [
    "Board Exam Classic: Draw and label the electrolytic refining cell of copper. Clearly show the anode, cathode, electrolyte, and anode mud."
  ],
  "questions": [
    get_bank_q(95, "m19_q01"), get_bank_q(96, "m19_q02"), get_bank_q(97, "m19_q03"),
    get_bank_q(98, "m19_q04"), get_bank_q(99, "m19_q05"),
    {
      "id": "m19_q06",
      "question": "In the electrolytic refining of copper, what change in mass occurs at the anode and cathode during prolonged operation?",
      "options": [
        "Both anode and cathode gain mass equally.",
        "The impure anode decreases in mass as it dissolves, while the pure cathode increases in mass as copper deposits.",
        "Both anode and cathode lose mass.",
        "The masses of both electrodes remain completely unchanged."
      ],
      "answer": "The impure anode decreases in mass as it dissolves, while the pure cathode increases in mass as copper deposits.",
      "explanation": "Copper oxidises and dissolves from the anode (mass loss), and deposits onto the cathode (mass gain)."
    },
    {
      "id": "m19_q07",
      "question": "Why is the aqueous copper sulphate electrolyte acidified with dilute sulphuric acid in the copper refining cell?",
      "options": [
        "To bleach the copper wire.",
        "To increase the electrical conductivity of the electrolyte and prevent hydrolysis of CuSO4.",
        "To produce chlorine gas.",
        "To cool the cell down to 0 °C."
      ],
      "answer": "To increase the electrical conductivity of the electrolyte and prevent hydrolysis of CuSO4.",
      "explanation": "Acidifying with dilute H₂SO₄ provides mobile H+ ions, lowering cell resistance and preventing precipitation of basic copper salts."
    },
    {
      "id": "m19_q08",
      "question": "Which precious metals are recovered from the 'anode mud' that accumulates beneath the anode during copper refining?",
      "options": [
        "Sodium and Potassium",
        "Gold, Silver, and Platinum",
        "Magnesium and Calcium",
        "Aluminium and Zinc"
      ],
      "answer": "Gold, Silver, and Platinum",
      "explanation": "Noble metals (Au, Ag, Pt) do not oxidise at the voltage used; they fall to the bottom as valuable anode mud."
    },
    {
      "id": "m19_q09",
      "question": "During electrolytic refining of copper, what happens to the overall concentration of Cu²⁺ ions in the electrolyte solution?",
      "options": [
        "It increases continuously until the solution precipitates.",
        "It decreases to zero within 5 minutes.",
        "It remains constant because the rate of copper dissolution at the anode equals the rate of copper deposition at the cathode.",
        "It fluctuates randomly every second."
      ],
      "answer": "It remains constant because the rate of copper dissolution at the anode equals the rate of copper deposition at the cathode.",
      "explanation": "For every Cu²⁺ ion deposited at the cathode, one Cu²⁺ ion dissolves into solution from the anode, maintaining constant concentration."
    },
    {
      "id": "m19_q10",
      "question": "If a student sets up an electrolytic refining experiment and accidentally connects the pure copper strip to the positive terminal (anode), what will happen?",
      "options": [
        "Pure copper will dissolve from the strip into the solution, while impure copper will receive deposition.",
        "The battery will explode instantly.",
        "No current will flow through the circuit.",
        "The copper strip will turn into solid silver."
      ],
      "answer": "Pure copper will dissolve from the strip into the solution, while impure copper will receive deposition.",
      "explanation": "Reversing polarity makes the pure copper strip the anode, causing it to dissolve into Cu²⁺ ions while depositing on the negative electrode."
    }
  ]
}
modules_11_to_20.append(m19)

# Module 20
m20 = {
  "id": "m20", "moduleNumber": 20,
  "title": "Corrosion of Metals & Prevention: Rusting, Galvanisation & Alloys",
  "tagline": "Environmental oxidation mechanisms, sacrificial protection, and engineering alloys.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p><strong>Corrosion</strong> is the gradual degradation of metals caused by chemical or electrochemical reactions with environmental agents such as atmospheric oxygen, moisture, and acid gases.</p>

<h3>1. Common Manifestations of Corrosion:</h3>
<ul>
  <li><strong>Rusting of Iron:</strong> When iron is exposed to moist air, it develops a brown, flaky, non-adhering coating called <strong>rust</strong>:
  $$\text{Fe} + \text{O}_2 + x\text{H}_2\text{O} \longrightarrow \text{Fe}_2\text{O}_3 \cdot x\text{H}_2\text{O}\quad (\text{Hydrated Iron(III) Oxide})$$
  <em>Crucial Investigation:</em> By testing iron nails in three test tubes (A: water + air $\rightarrow$ rusts; B: boiled distilled water + oil layer $\rightarrow$ no rust; C: dry air + anhydrous $\text{CaCl}_2$ $\rightarrow$ no rust), we prove that <strong>both air (oxygen) and water (moisture) are strictly necessary for rusting</strong>.</li>
  <li><strong>Tarnishing of Silver:</strong> Silver articles turn black when exposed to air because silver reacts with traces of hydrogen sulphide ($\text{H}_2\text{S}$) gas to form black <strong>silver sulphide ($\text{Ag}_2\text{S}$)</strong>.</li>
  <li><strong>Corrosion of Copper:</strong> Copper reacts slowly with moist carbon dioxide in air to develop a green surface coating of <strong>basic copper carbonate ($\text{CuCO}_3 \cdot \text{Cu(OH)}_2$)</strong>.</li>
</ul>

<h3>2. Methods of Preventing Corrosion:</h3>
<ul>
  <li><strong>Barrier Methods:</strong> Painting, oiling, greasing, and tin-plating shield the metal surface from contact with air and moisture.</li>
  <li><strong>Galvanisation:</strong> The process of coating iron or steel with a thin protective layer of <strong>zinc ($\text{Zn}$)</strong>. Even if the zinc coating is scratched, the underlying iron remains protected because zinc is more electropositive than iron and acts as a <strong>sacrificial anode</strong>, oxidising preferentially.</li>
  <li><strong>Alloying:</strong> An alloy is a homogeneous mixture of two or more metals, or a metal and a non-metal:
    <ul>
      <li><em>Pure Iron:</em> Very soft and stretches easily when hot. Adding $0.05\%$ carbon makes it hard and strong.</li>
      <li><em>Stainless Steel:</em> Iron mixed with <strong>Nickel ($\text{Ni}$)</strong> and <strong>Chromium ($\text{Cr}$)</strong>. It is hard, tough, and completely rust-resistant.</li>
      <li><em>Brass:</em> An alloy of <strong>Copper ($70\%$)</strong> and <strong>Zinc ($30\%$)</strong>.</li>
      <li><em>Bronze:</em> An alloy of <strong>Copper ($90\%$)</strong> and <strong>Tin ($10\%$)</strong>. Both brass and bronze are poorer electrical conductors than pure copper, but have superior mechanical strength.</li>
      <li><em>Solder:</em> An alloy of <strong>Lead ($\text{Pb}$)</strong> and <strong>Tin ($\text{Sn}$)</strong>. It has a low melting point and is used for welding electrical wires together.</li>
      <li><em>Amalgam:</em> Any alloy in which <strong>Mercury ($\text{Hg}$)</strong> is one of the constituents (e.g., sodium amalgam, dental amalgam).</li>
      <li><em>Pure Gold (24-carat):</em> Very soft; alloyed with silver or copper to make 22-carat gold ($22$ parts gold, $2$ parts Cu/Ag) for jewellery.</li>
    </ul>
  </li>
</ul>
<div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
  <strong>🏛️ Historical Marvel: The Iron Pillar of Delhi</strong>
  <p style="margin:4px 0 0 0; line-height:1.6;">Built more than $1600\text{ years ago}$ near the Qutub Minar in New Delhi, this $8\text{-metre}$ high, $6\text{-tonne}$ iron pillar has stood exposed to weather without rusting, showcasing the sophisticated metallurgical skill of ancient Indian metallurgists who created a protective passive phosphate film on the wrought iron.</p>
</div>
""",
  "pointsToRemember": [
    "Rusting of iron requires BOTH oxygen (air) and moisture (water); rust is hydrated iron(III) oxide (Fe₂O₃·xH₂O).",
    "Galvanisation coats iron with zinc, offering sacrificial protection even when scratched.",
    "Alloys: Brass = Cu + Zn; Bronze = Cu + Sn; Solder = Pb + Sn (low MP); Stainless Steel = Fe + Ni + Cr; Amalgam = alloy containing mercury."
  ],
  "keyNotes": [
    "Board Essential: Learn alloy compositions (Brass = Cu+Zn, Bronze = Cu+Sn, Solder = Pb+Sn) and know that 22-carat gold contains 22 parts gold and 2 parts copper/silver."
  ],
  "questions": [
    get_bank_q(100, "m20_q01"), get_bank_q(8, "m20_q02"), get_bank_q(9, "m20_q03"),
    get_bank_q(14, "m20_q04"), get_bank_q(76, "m20_q05"),
    {
      "id": "m20_q06",
      "question": "What is the chemical composition and appearance of the green layer that forms on copper statues exposed to outdoor moist air?",
      "options": [
        "Copper(II) sulphate, CuSO4 (blue)",
        "Basic copper carbonate, CuCO3·Cu(OH)2 (green)",
        "Copper(II) oxide, CuO (black)",
        "Copper(I) chloride, CuCl (white)"
      ],
      "answer": "Basic copper carbonate, CuCO3·Cu(OH)2 (green)",
      "explanation": "Copper reacts slowly with moist atmospheric CO₂ to form a protective green patina of basic copper carbonate."
    },
    {
      "id": "m20_q07",
      "question": "Why does a galvanised iron sheet continue to resist rust even if its zinc coating is scratched, exposing the iron beneath?",
      "options": [
        "Zinc turns into paint when exposed to moisture.",
        "Zinc is more reactive than iron and oxidises preferentially, acting as a sacrificial anode.",
        "Scratched iron transforms into stainless steel.",
        "The zinc coating creates an electrical insulator."
      ],
      "answer": "Zinc is more reactive than iron and oxidises preferentially, acting as a sacrificial anode.",
      "explanation": "Zinc has a higher oxidation potential than iron and corrodes sacrificially to protect the exposed iron."
    },
    {
      "id": "m20_q08",
      "question": "What alloy of lead and tin is characterised by a low melting point and is widely used for fusing electrical joints?",
      "options": [
        "Brass",
        "Bronze",
        "Solder",
        "Duralumin"
      ],
      "answer": "Solder",
      "explanation": "Solder is an alloy of lead (Pb) and tin (Sn) with a low eutectic melting point, ideal for soldering electrical connections."
    },
    {
      "id": "m20_q09",
      "question": "What metallic element must be present as a constituent for an alloy to be classified as an 'amalgam'?",
      "options": [
        "Aluminium",
        "Mercury (Hg)",
        "Lead",
        "Magnesium"
      ],
      "answer": "Mercury (Hg)",
      "explanation": "Any alloy containing mercury as one of its component metals is termed an amalgam (e.g. sodium amalgam, silver-mercury dental amalgam)."
    },
    {
      "id": "m20_q10",
      "question": "Why is pure 24-carat gold NOT suitable for crafting intricate jewellery ornaments?",
      "options": [
        "Pure 24-carat gold oxidises rapidly in air.",
        "Pure gold is extremely soft and bends easily; it is alloyed with copper or silver (22-carat) to impart hardness.",
        "Pure gold dissolves in human sweat.",
        "Pure gold conducts too much electricity."
      ],
      "answer": "Pure gold is extremely soft and bends easily; it is alloyed with copper or silver (22-carat) to impart hardness.",
      "explanation": "24-carat gold is too malleable and soft to hold gemstone settings; 22-carat gold (alloyed with Cu or Ag) provides structural rigidity."
    }
  ]
}
modules_11_to_20.append(m20)

with open('scratch/ch3_part2.json', 'w', encoding='utf-8') as f:
    json.dump(modules_11_to_20, f, ensure_ascii=False, indent=2)

print(f"Successfully generated Part 2 (Modules 11 to 20): {len(modules_11_to_20)} modules.")
