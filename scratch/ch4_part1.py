# -*- coding: utf-8 -*-
"""
CH₄ Part 1: Modules 1 to 10
Carbon and its Compounds
"""
import json

with open('scratch/ch4_bank_questions.json', 'r', encoding='utf-8') as f:
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
  "title": "Bonding in Carbon: The Covalent Bond & The Problem of C⁴⁺ and C⁴⁻",
  "tagline": "Why carbon cannot form ionic bonds and relies exclusively on electron sharing.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Carbon is an element of immense biological and industrial significance. Everything from food, clothes, medicines, books, and fuels to living organisms is built around carbon compounds. Yet, carbon's abundance in nature is surprisingly tiny:</p>
<ul>
  <li>The Earth's crust contains only <strong>$0.02\%$ carbon</strong> in the form of minerals (carbonates, hydrogen carbonates, coal, and petroleum).</li>
  <li>The atmosphere contains a mere <strong>$0.03\%$ carbon dioxide ($\text{CO}_2$)</strong>.</li>
</ul>

<h3>The Atomic Structure of Carbon:</h3>
<p>Carbon has atomic number $Z = 6$. Its electronic configuration is $2, 4$, meaning it possesses <strong>$4$ valence electrons</strong> in its outermost $L$-shell. To attain the stable octet of noble gas neon ($2, 8$) or helium ($2$), carbon requires $4$ additional electrons. Why can carbon NOT gain or lose electrons to form ionic bonds?</p>

<h3>Why Carbon Cannot Form Ionic Bonds ($C^{4+}$ or $C^{4-}$):</h3>
<ol>
  <li><strong>It cannot gain 4 electrons to form a $C^{4-}$ anion:</strong><br>
  A carbon nucleus contains only $6$ protons. It would be energetically impossible for a tiny nucleus with just $6$ protons to hold on securely to $10$ electrons ($6$ original $+ 4$ extra), causing severe inter-electronic repulsion.</li>
  <li><strong>It cannot lose 4 electrons to form a $C^{4+}$ cation:</strong><br>
  Removing $4$ electrons in succession requires an enormous amount of ionisation energy, leaving a tiny $C^{4+}$ cation with $6$ protons holding just $2$ electrons.</li>
</ol>

<p><strong>The Solution — Covalent Bonding:</strong> Carbon overcomes this fundamental energy barrier by <strong>sharing its valence electrons</strong> with other carbon atoms or with atoms of other elements. Chemical bonds formed by the mutual sharing of electron pairs between two atoms are called <strong>covalent bonds</strong>.</p>
""",
  "pointsToRemember": [
    "Carbon has atomic number 6 with electronic configuration 2, 4 (tetravalent).",
    "Carbon cannot form C⁴⁻ (6 protons cannot hold 10 electrons) or C⁴⁺ (requires enormous ionisation energy to remove 4 electrons).",
    "Carbon resolves this by sharing electron pairs with other atoms, forming stable covalent bonds."
  ],
  "keyNotes": [
    "Board Exam Classic: Explain why carbon always forms covalent bonds instead of ionic bonds by discussing the energetic impossibility of C⁴⁺ and C⁴⁻."
  ],
  "questions": [
    get_bank_q(1, "m01_q01"), get_bank_q(2, "m01_q02"), get_bank_q(3, "m01_q03"),
    get_bank_q(4, "m01_q04"), get_bank_q(5, "m01_q05"),
    {
      "id": "m01_q06",
      "question": "What is the primary physical reason why a carbon atom cannot accept four electrons to form a stable C⁴⁻ anion?",
      "options": [
        "Carbon atoms do not have electron shells.",
        "A nucleus with only 6 protons cannot stably hold onto 10 electrons due to intense inter-electronic repulsion.",
        "Carbon instantly turns into a gas upon touching an electron.",
        "The atomic mass of carbon is too small to permit negative charges."
      ],
      "answer": "A nucleus with only 6 protons cannot stably hold onto 10 electrons due to intense inter-electronic repulsion.",
      "explanation": "With only 6 positive nuclear protons, the effective nuclear charge is insufficient to hold 10 total electrons in a small radius."
    },
    {
      "id": "m01_q07",
      "question": "Why is the removal of four valence electrons from a carbon atom to yield a C⁴⁺ cation energetically unfeasible?",
      "options": [
        "Carbon has zero ionization energy.",
        "It would require an enormous amount of ionisation energy to strip four successive electrons from the pull of 6 protons.",
        "Electrons in carbon cannot be separated from neutrons.",
        "The resulting C⁴⁺ cation would be too heavy to float."
      ],
      "answer": "It would require an enormous amount of ionisation energy to strip four successive electrons from the pull of 6 protons.",
      "explanation": "Stripping four electrons against an increasing positive nuclear charge requires an astronomical input of energy."
    },
    {
      "id": "m01_q08",
      "question": "A chemical bond formed by the mutual, equal sharing of electron pairs between two reacting atoms is known as a/an:",
      "options": [
        "Electrovalent bond",
        "Ionic bond",
        "Covalent bond",
        "Metallic lattice bond"
      ],
      "answer": "Covalent bond",
      "explanation": "A covalent bond is specifically defined as a bond formed by the mutual sharing of pairs of electrons between combining atoms."
    },
    {
      "id": "m01_q09",
      "question": "What is the percentage concentration of carbon dioxide (CO₂) naturally present in the Earth's atmosphere?",
      "options": [
        "0.03%",
        "0.2%",
        "3.0%",
        "21.0%"
      ],
      "answer": "0.03%",
      "explanation": "Atmospheric air contains approximately 0.03% to 0.04% carbon dioxide gas by volume."
    },
    {
      "id": "m01_q10",
      "question": "How does sharing of electrons allow combining atoms to achieve chemical stability?",
      "options": [
        "Shared electrons orbit both nuclei, effectively completing the outer valence shell octet or duplet for both atoms.",
        "Shared electrons cancel out the mass of the nucleus.",
        "Shared electrons turn both atoms into neutral photons.",
        "Shared electrons convert carbon into radioactive radium."
      ],
      "answer": "Shared electrons orbit both nuclei, effectively completing the outer valence shell octet or duplet for both atoms.",
      "explanation": "Sharing electrons allows each participating atom to attain a stable, low-energy noble gas electronic configuration."
    }
  ]
}
modules_1_to_10.append(m01)

# Module 2
m02 = {
  "id": "m02", "moduleNumber": 2,
  "title": "Covalent Bonding in Simple Diatomic Molecules: H₂, Cl₂, O₂ & N₂",
  "tagline": "Single, double, and triple covalent bonds illustrated by Lewis electron-dot models.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>To master covalent bonding, we first examine simple diatomic molecules formed by non-metals sharing electron pairs:</p>

<h3>1. Single Covalent Bond — Hydrogen Molecule ($\text{H}_2$):</h3>
<p>A hydrogen atom has atomic number $1$ with a single electron in its $K$-shell ($1s^1$). To achieve the stable duplet of helium, it needs $1$ more electron. Two hydrogen atoms share their single electrons to form a pair of shared electrons:</p>
<p style="text-align:center; font-size:1.1em; color:#1e3a8a;">
  $\text{H}\cdot + \cdot\text{H} \longrightarrow \text{H}:\text{H} \quad\text{or}\quad \text{H}-\text{H}$
</p>
<p>The shared pair constitutes a <strong>single covalent bond</strong> between the two hydrogen atoms.</p>

<h3>2. Chlorine Molecule ($\text{Cl}_2$):</h3>
<p>Chlorine ($Z = 17$, configuration $2, 8, 7$) has $7$ valence electrons. Two chlorine atoms contribute one electron each to share a single electron pair, completing octets for both atoms: $:\ddot{\text{Cl}}-\ddot{\text{Cl}}:$.</p>

<h3>3. Double Covalent Bond — Oxygen Molecule ($\text{O}_2$):</h3>
<p>Oxygen has atomic number $8$ (configuration $2, 6$) and requires $2$ electrons to complete its octet. Two oxygen atoms share <strong>two pairs of electrons</strong>:</p>
<p style="text-align:center; font-size:1.1em; color:#1e3a8a;">
  $:\ddot{\text{O}}\cdot\cdot + \cdot\cdot\ddot{\text{O}}: \longrightarrow :\ddot{\text{O}}::\ddot{\text{O}}: \quad\text{or}\quad \text{O}=\text{O}$
</p>
<p>Sharing two pairs of electrons establishes a <strong>double covalent bond</strong>.</p>

<h3>4. Triple Covalent Bond — Nitrogen Molecule ($\text{N}_2$):</h3>
<p>Nitrogen has atomic number $7$ (configuration $2, 5$). Each nitrogen atom needs $3$ electrons. Two nitrogen atoms share <strong>three pairs of electrons</strong>:</p>
<p style="text-align:center; font-size:1.1em; color:#1e3a8a;">
  $:\text{N}\vdots\vdots\text{N}: \quad\text{or}\quad \text{N}\equiv\text{N}$
</p>
<p>This forms an exceptionally strong <strong>triple covalent bond</strong>, explaining why nitrogen gas ($\text{N}_2$) is chemically inert at room temperature.</p>
""",
  "pointsToRemember": [
    "A single covalent bond (—) involves 1 shared electron pair (e.g. H₂).",
    "A double covalent bond (=) involves 2 shared electron pairs (e.g. O₂).",
    "A triple covalent bond (≡) involves 3 shared electron pairs (e.g. N₂), conferring high chemical stability."
  ],
  "keyNotes": [
    "Exam Diagrams: Draw electron-dot structures showing overlapping circles or electron dots for H₂ (single bond), O₂ (double bond), and N₂ (triple bond)."
  ],
  "questions": [
    get_bank_q(7, "m02_q01"), get_bank_q(8, "m02_q02"), get_bank_q(9, "m02_q03"),
    get_bank_q(10, "m02_q04"), get_bank_q(81, "m02_q05"),
    {
      "id": "m02_q06",
      "question": "How many total electron pairs are shared between the two nitrogen atoms in a molecule of nitrogen (N₂)?",
      "options": [
        "1 pair (single bond)",
        "2 pairs (double bond)",
        "3 pairs (triple bond)",
        "4 pairs (quadruple bond)"
      ],
      "answer": "3 pairs (triple bond)",
      "explanation": "Nitrogen atoms share three pairs of valence electrons (6 shared electrons total) to form a triple bond (N≡N)."
    },
    {
      "id": "m02_q07",
      "question": "Why is elemental nitrogen gas (N₂) chemically inert and unreactive under ordinary ambient room conditions?",
      "options": [
        "Nitrogen atoms have zero valence electrons.",
        "The N≡N triple bond has an exceptionally high bond dissociation energy, making it difficult to cleave.",
        "Nitrogen molecules dissolve completely in light waves.",
        "Nitrogen gas is solid at room temperature."
      ],
      "answer": "The N≡N triple bond has an exceptionally high bond dissociation energy, making it difficult to cleave.",
      "explanation": "The strong triple bond (945 kJ/mol) requires intense energy to break, rendering N₂ inert under ambient conditions."
    },
    {
      "id": "m02_q08",
      "question": "What type of covalent bond joins the two oxygen atoms in a diatomic molecule of oxygen (O₂)?",
      "options": [
        "Single covalent bond",
        "Double covalent bond (two shared electron pairs)",
        "Triple covalent bond",
        "Coordinate electrovalent bond"
      ],
      "answer": "Double covalent bond (two shared electron pairs)",
      "explanation": "Each oxygen atom needs two electrons, sharing two pairs to form a double covalent bond (O=O)."
    },
    {
      "id": "m02_q09",
      "question": "How many total valence electrons are involved in the single covalent bond holding a hydrogen chloride (HCl) molecule together?",
      "options": [
        "1 electron",
        "2 electrons (one shared electron pair)",
        "4 electrons",
        "8 electrons"
      ],
      "answer": "2 electrons (one shared electron pair)",
      "explanation": "Hydrogen contributes 1 electron and chlorine contributes 1 electron, forming one shared pair (2 electrons) in H—Cl."
    },
    {
      "id": "m02_q10",
      "question": "A molecule of elemental sulphur consists of eight sulphur atoms joined together. What geometric shape does this S₈ ring take?",
      "options": [
        "A planar hexagon",
        "A puckered crown-shaped ring",
        "A straight linear chain",
        "A perfect cube"
      ],
      "answer": "A puckered crown-shaped ring",
      "explanation": "Eight sulphur atoms form a crown-shaped octagonal ring where each sulphur atom shares single covalent bonds with two neighbours."
    }
  ]
}
modules_1_to_10.append(m02)

# Module 3
m03 = {
  "id": "m03", "moduleNumber": 3,
  "title": "Covalent Bonding in Polyatomic Molecules: CH₄, H₂O & NH₃",
  "tagline": "Electron-dot Lewis structures, single bond networks, and physical properties of covalent compounds.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Having explored diatomic molecules, we now look at how carbon and other non-metals form multi-atom covalent compounds:</p>

<h3>1. Methane ($\text{CH}_4$) — The Simplest Hydrocarbon:</h3>
<p>Methane is a major component of natural gas, biogas, and compressed natural gas ($\text{CNG}$). In methane, one central carbon atom shares its $4$ valence electrons with $4$ individual hydrogen atoms:</p>
<ul>
  <li>Carbon achieves a neon octet ($2, 8$).</li>
  <li>Each of the four hydrogen atoms achieves a helium duplet ($2$).</li>
  <li>Methane contains <strong>$4$ single covalent $\text{C}-\text{H}$ bonds</strong> directed symmetrically towards the vertices of a regular tetrahedron.</li>
</ul>

<h3>2. Water Molecule ($\text{H}_2\text{O}$):</h3>
<p>The central oxygen atom ($2, 6$) shares two single pairs of electrons with two hydrogen atoms, leaving <strong>two unshared lone pairs</strong> of electrons on oxygen: $\text{H}-\ddot{\text{O}}-\text{H}$.</p>

<h3>3. Ammonia Molecule ($\text{NH}_3$):</h3>
<p>Nitrogen ($2, 5$) shares three electron pairs with three hydrogen atoms, retaining <strong>one unshared lone pair</strong> of electrons: $\text{H}-\ddot{\text{N}}(\text{H})-\text{H}$.</p>

<hr style="border:0; border-top:1px solid #cbd5e1; margin:16px 0;">

<h3>Characteristic Physical Properties of Covalent Compounds:</h3>
<p>Covalent molecules exhibit distinct physical behaviors that contrast sharply with ionic compounds:</p>
<ol>
  <li><strong>Low Melting and Boiling Points:</strong><br>
  Although covalent bonds <em>within</em> molecules (intramolecular forces) are strong, the <strong>intermolecular forces</strong> (forces between separate molecules) are weak. Small amounts of heat energy can easily separate the molecules, so substances like methane ($\text{BP} = -161\ ^\circ\text{C}$), chloroform, and ethanol have low melting and boiling points.</li>
  <li><strong>Poor Electrical Conductivity:</strong><br>
  Because electrons are mutually shared between atoms and no free charged ions are produced, covalent compounds are <strong>poor conductors of electricity</strong> in all states.</li>
</ol>
""",
  "pointsToRemember": [
    "Methane (CH₄) contains 4 single C—H covalent bonds forming a tetrahedral geometry.",
    "Covalent compounds have low melting and boiling points due to weak intermolecular forces between molecules.",
    "Covalent compounds do not conduct electricity because they have no free ions or mobile charge carriers."
  ],
  "keyNotes": [
    "Board Highlight: Be prepared to state the difference between strong intramolecular covalent bonds vs weak intermolecular forces to explain low melting points."
  ],
  "questions": [
    get_bank_q(6, "m03_q01"), get_bank_q(11, "m03_q02"), get_bank_q(76, "m03_q03"),
    get_bank_q(80, "m03_q04"), get_bank_q(82, "m03_q05"),
    {
      "id": "m03_q06",
      "question": "How many total covalent bonds are present in a single molecule of methane (CH₄)?",
      "options": [
        "1 covalent bond",
        "2 covalent bonds",
        "3 covalent bonds",
        "4 single covalent bonds"
      ],
      "answer": "4 single covalent bonds",
      "explanation": "A central carbon atom shares each of its four valence electrons with a hydrogen atom, forming four distinct C—H single covalent bonds."
    },
    {
      "id": "m03_q07",
      "question": "Why do covalent compounds like methane, ethanol, and chloroform typically possess low melting and boiling points?",
      "options": [
        "Covalent bonds inside the molecule are extremely weak and dissolve in air.",
        "The intermolecular forces of attraction between separate molecules are weak and easily overcome by gentle heating.",
        "Covalent compounds have zero molecular mass.",
        "All covalent compounds are radioactive."
      ],
      "answer": "The intermolecular forces of attraction between separate molecules are weak and easily overcome by gentle heating.",
      "explanation": "While intramolecular covalent bonds are strong, intermolecular forces are weak, requiring little thermal energy to separate molecules."
    },
    {
      "id": "m03_q08",
      "question": "Why are covalent compounds universally poor conductors of electricity in both solid and liquid states?",
      "options": [
        "They contain free protons that cancel all current.",
        "Electrons are locked in shared pairs between atoms, so no free mobile ions or electrons exist to carry electric current.",
        "They turn into lead when connected to a battery.",
        "They absorb magnetic fields completely."
      ],
      "answer": "Electrons are locked in shared pairs between atoms, so no free mobile ions or electrons exist to carry electric current.",
      "explanation": "Electrical conduction requires mobile charge carriers (ions or free electrons). Neutral covalent molecules have neither."
    },
    {
      "id": "m03_q09",
      "question": "How many unshared (lone) pairs of electrons reside on the central oxygen atom in a molecule of water (H₂O)?",
      "options": [
        "0 lone pairs",
        "1 lone pair",
        "2 lone pairs",
        "3 lone pairs"
      ],
      "answer": "2 lone pairs",
      "explanation": "Oxygen has 6 valence electrons: 2 are shared with two hydrogen atoms, leaving 4 non-bonding electrons as 2 lone pairs."
    },
    {
      "id": "m03_q10",
      "question": "In a molecule of ammonia (NH₃), how many single covalent bonds and lone pairs are present around the nitrogen atom?",
      "options": [
        "3 single covalent bonds and 1 lone pair",
        "2 single covalent bonds and 2 lone pairs",
        "4 single covalent bonds and 0 lone pairs",
        "1 triple bond and 0 lone pairs"
      ],
      "answer": "3 single covalent bonds and 1 lone pair",
      "explanation": "Nitrogen shares 3 electrons with 3 hydrogen atoms (3 N—H single bonds) and retains 1 lone pair (2 non-bonding electrons)."
    }
  ]
}
modules_1_to_10.append(m03)

# Module 4
m04 = {
  "id": "m04", "moduleNumber": 4,
  "title": "Allotropes of Carbon: Diamond — Rigid 3D Tetrahedral Network",
  "tagline": "Crystal structure, extreme hardness, optical dispersion, and industrial rock-drilling uses.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>The phenomenon where an element exists in two or more distinct physical forms having identical chemical properties but vastly different physical structures is called <strong>allotropy</strong>. Carbon possesses three primary allotropes: <strong>Diamond</strong>, <strong>Graphite</strong>, and <strong>Fullerenes</strong>.</p>

<h3>Crystal Architecture of Diamond:</h3>
<p>In diamond, each carbon atom is covalently bonded to <strong>four other carbon atoms</strong> in a rigid, three-dimensional tetrahedral network:</p>
<ul>
  <li><strong>Bonding:</strong> All four valence electrons of every carbon atom are firmly engaged in single covalent bonds ($s p^3$ hybridisation). There are <strong>zero free or delocalised electrons</strong> anywhere in the crystal.</li>
  <li><strong>Hardness:</strong> Because breaking diamond requires rupturing thousands of extremely strong, interlocking covalent $\text{C}-\text{C}$ bonds across the lattice, diamond is the <strong>hardest naturally occurring substance known</strong> on Earth (Mohs hardness $10$).</li>
  <li><strong>Melting Point:</strong> Diamond has an exceptionally high melting point of over $3500\ ^\circ\text{C}$ ($3800\text{ K}$) due to its dense, continuous covalent network.</li>
  <li><strong>Electrical Conductivity:</strong> Because all valence electrons are locked rigidly into localised covalent bonds, diamond possesses no free mobile charge carriers and is a <strong>complete electrical insulator</strong>.</li>
  <li><strong>Optical Properties:</strong> High refractive index ($2.42$) and high dispersion cause total internal reflection, producing diamond's brilliant sparkle when properly faceted.</li>
</ul>

<h3>Synthetic Diamonds:</h3>
<p>Pure carbon (such as graphite) can be transformed into synthetic diamonds by subjecting it to <strong>extremely high temperature and astronomical pressure</strong>. Synthetic diamonds are small but otherwise indistinguishable from natural diamonds, and are widely used industrially in glass cutters, rock-drilling bits, and precision surgical scalpels.</p>
""",
  "pointsToRemember": [
    "In diamond, each carbon atom is bonded to 4 other carbon atoms in a rigid 3D tetrahedral network.",
    "Diamond is the hardest natural substance known and has an exceptionally high melting point (>3500 °C).",
    "Diamond does NOT conduct electricity because all 4 valence electrons are locked in covalent bonds with zero free electrons."
  ],
  "keyNotes": [
    "Board Highlight: Know why diamond is an insulator (all 4 electrons bonded, no free electrons) vs graphite (conducts electricity due to 1 free electron per atom)."
  ],
  "questions": [
    get_bank_q(12, "m04_q01"), get_bank_q(75, "m04_q02"), get_bank_q(77, "m04_q03"),
    get_bank_q(78, "m04_q04"), get_bank_q(79, "m04_q05"),
    {
      "id": "m04_q06",
      "question": "In the crystal structure of diamond, how many other carbon atoms is each individual carbon atom covalently linked to?",
      "options": [
        "2 other carbon atoms in a straight chain",
        "3 other carbon atoms in flat sheets",
        "4 other carbon atoms in a rigid three-dimensional tetrahedral lattice",
        "6 other carbon atoms in an octahedral cage"
      ],
      "answer": "4 other carbon atoms in a rigid three-dimensional tetrahedral lattice",
      "explanation": "Each carbon atom forms four strong covalent bonds directed towards the corners of a regular tetrahedron."
    },
    {
      "id": "m04_q07",
      "question": "Why is diamond a complete non-conductor of electricity?",
      "options": [
        "Its crystal lattice contains radioactive neutrons.",
        "All four valence electrons of every carbon atom are firmly engaged in covalent bonds, leaving zero free electrons or ions to conduct current.",
        "Diamond melts at room temperature.",
        "Diamond repels all electric voltages."
      ],
      "answer": "All four valence electrons of every carbon atom are firmly engaged in covalent bonds, leaving zero free electrons or ions to conduct current.",
      "explanation": "With all valence electrons locked in strong single bonds, there are no mobile charge carriers available for electrical conduction."
    },
    {
      "id": "m04_q08",
      "question": "Under what laboratory conditions can pure carbon be transformed into synthetic diamonds?",
      "options": [
        "Zero gravity and cryogenic liquid nitrogen temperature",
        "Extremely high pressures and high temperatures",
        "Submersion in concentrated sulphuric acid at room temperature",
        "Electrolysis of carbon dioxide gas"
      ],
      "answer": "Extremely high pressures and high temperatures",
      "explanation": "Synthetic diamonds are fabricated by mimicking geological mantle conditions: enormous pressure (>5 GPa) and temperatures (>1500 °C)."
    },
    {
      "id": "m04_q09",
      "question": "Which heavy-duty industrial application directly relies on the extreme physical hardness of diamond?",
      "options": [
        "Lubricating high-speed automotive engine pistons",
        "Diamond-tipped rock drilling bits and precision glass-cutting blades",
        "Electrodes for electrolytic aluminium smelting",
        "Synthetic fuel manufacture"
      ],
      "answer": "Diamond-tipped rock drilling bits and precision glass-cutting blades",
      "explanation": "Being the hardest known natural substance, diamond easily cuts through hard glass, granite, and geological rock formations."
    },
    {
      "id": "m04_q10",
      "question": "What is the refractive index of diamond that causes total internal reflection and its brilliant sparkle?",
      "options": [
        "1.00",
        "1.33",
        "1.52",
        "2.42"
      ],
      "answer": "2.42",
      "explanation": "Diamond has a very high optical refractive index of 2.42 and a low critical angle (24.4°), producing intense total internal reflection."
    }
  ]
}
modules_1_to_10.append(m04)

# Module 5
m05 = {
  "id": "m05", "moduleNumber": 5,
  "title": "Allotropes of Carbon: Graphite & Fullerenes (C₆₀)",
  "tagline": "Hexagonal layers, delocalised electron conductivity, dry lubrication, and buckyballs.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<h3>1. The Hexagonal Layered Structure of Graphite:</h3>
<p>Graphite has a structure and properties completely different from diamond, despite consisting of pure carbon atoms:</p>
<ul>
  <li><strong>Bonding:</strong> In graphite, each carbon atom is covalently bonded to only <strong>three other carbon atoms</strong> in the same plane, creating a flat network of interlocking <strong>hexagonal rings</strong>.</li>
  <li><strong>Delocalised Electrons & Electrical Conduction:</strong> Since carbon has $4$ valence electrons and bonds to only $3$ neighbours, <strong>one valence electron per carbon atom remains unbonded and free to move</strong> throughout the planar layers. These mobile, delocalised electrons make graphite an <strong>excellent conductor of electricity</strong>, used in dry cell battery electrodes and arc lamp rods.</li>
  <li><strong>Lubricating Properties:</strong> The parallel hexagonal layers are held together only by weak <strong>van der Waals forces</strong>. Under shear pressure, these layers slide smoothly over one another. This gives graphite a soft, slippery, and soapy feel, making it an ideal <strong>dry solid lubricant</strong> for high-temperature machinery where oil would burn.</li>
</ul>

<hr style="border:0; border-top:1px solid #cbd5e1; margin:16px 0;">

<h3>2. Fullerenes — The Third Allotropic Form:</h3>
<p>Fullerenes form another class of carbon allotropes discovered in 1985:</p>
<ul>
  <li>The first identified fullerene was <strong>$\text{C}_{60}$</strong>, which consists of $60$ carbon atoms arranged in a hollow spherical cage resembling a soccer ball.</li>
  <li>The structure consists of interlocking $20$ hexagons and $12$ pentagons.</li>
  <li>It was named <strong>Buckminsterfullerene</strong> in honor of the visionary American architect <strong>Buckminster Fuller</strong>, because its spherical geodesic cage resembled the geodesic domes he designed.</li>
</ul>
""",
  "pointsToRemember": [
    "In graphite, each carbon atom is bonded to 3 other carbon atoms in hexagonal layers, leaving 1 free mobile electron per atom.",
    "Graphite conducts electricity due to delocalised electrons; its layers slide over each other making it a soft dry lubricant.",
    "Fullerenes (like C₆₀) consist of carbon atoms arranged in hollow spherical cages resembling geodesic domes or soccer balls."
  ],
  "keyNotes": [
    "Exam Comparison: Diamond is hard and an insulator (4 bonded electrons, 3D network); Graphite is soft and a conductor (3 bonded electrons, 1 free electron, 2D layers)."
  ],
  "questions": [
    get_bank_q(13, "m05_q01"), get_bank_q(71, "m05_q02"), get_bank_q(72, "m05_q03"),
    get_bank_q(73, "m05_q04"), get_bank_q(74, "m05_q05"),
    {
      "id": "m05_q06",
      "question": "What enables graphite to conduct electricity with such high efficiency, despite being a non-metal allotrope?",
      "options": [
        "It contains free sodium ions trapped between its sheets.",
        "Each carbon atom is bonded to only 3 neighbours, leaving one free delocalised electron that moves freely across the hexagonal layers.",
        "Graphite absorbs light photons and converts them into metallic copper.",
        "It has an ionic lattice that dissociates in water."
      ],
      "answer": "Each carbon atom is bonded to only 3 neighbours, leaving one free delocalised electron that moves freely across the hexagonal layers.",
      "explanation": "The fourth valence electron is delocalised across the sp2 planar sheet, facilitating high electrical conductivity."
    },
    {
      "id": "m05_q07",
      "question": "Why is powdered graphite widely utilized as a dry solid lubricant in heavy industrial machinery operating at elevated temperatures?",
      "options": [
        "It dissolves machine parts to make them lighter.",
        "Its planar hexagonal carbon sheets are held by weak van der Waals forces and slide easily over one another without burning.",
        "Graphite produces oil when squeezed.",
        "Graphite melts into water at 50 °C."
      ],
      "answer": "Its planar hexagonal carbon sheets are held by weak van der Waals forces and slide easily over one another without burning.",
      "explanation": "The weak interlayer attraction permits smooth sliding of sheets, providing dry lubricity at temperatures where liquid oils vaporise."
    },
    {
      "id": "m05_q08",
      "question": "What is the molecular formula and structural shape of the famous fullerene named after architect Buckminster Fuller?",
      "options": [
        "C100, forming a long cylinder",
        "C60, forming a hollow spherical soccer-ball shaped geodesic cage",
        "C12, forming a flat planar triangle",
        "C24, forming a solid pyramid"
      ],
      "answer": "C60, forming a hollow spherical soccer-ball shaped geodesic cage",
      "explanation": "C60 contains 60 carbon atoms organised into 12 pentagons and 20 hexagons, forming a spherical geodesic cage."
    },
    {
      "id": "m05_q09",
      "question": "How many other carbon atoms is each carbon atom covalently bonded to inside a single sheet of graphite?",
      "options": [
        "2 carbon atoms",
        "3 carbon atoms",
        "4 carbon atoms",
        "6 carbon atoms"
      ],
      "answer": "3 carbon atoms",
      "explanation": "In graphite, each carbon atom forms planar covalent bonds with three adjacent carbon atoms at 120° angles in hexagonal rings."
    },
    {
      "id": "m05_q10",
      "question": "Which of the following carbon allotropes is commonly used in pencil leads because of its ability to leave dark, flaky marks on paper?",
      "options": [
        "Diamond",
        "Graphite (mixed with clay)",
        "Fullerene C60",
        "Carbon nanotube"
      ],
      "answer": "Graphite (mixed with clay)",
      "explanation": "Pencil lead is a blend of powdered graphite and clay; the slippery layers shear off easily to mark paper."
    }
  ]
}
modules_1_to_10.append(m05)

# Module 6
m06 = {
  "id": "m06", "moduleNumber": 6,
  "title": "The Versatile Nature of Carbon: Catenation & Strong C—C Bonds",
  "tagline": "Explaining the existence of millions of organic compounds through self-linking chemistry.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Chemists have identified and synthesised millions of carbon compounds—vastly outnumbering the compounds of all other periodic table elements combined! What unique properties allow carbon to form this immense family of compounds?</p>
<p>Two exceptional factors govern carbon's versatile nature:</p>

<h3>1. Catenation (Self-Linking Ability):</h3>
<p><strong>Catenation</strong> is the unique ability of an element to form strong covalent bonds with other atoms of the same element, generating vast chains, branched structures, and rings of atoms:</p>
<ul>
  <li>Carbon atoms can link together to form <strong>straight long chains</strong> of dozens or hundreds of carbon atoms (e.g. in synthetic polymers and biological DNA).</li>
  <li>They can form intricate <strong>branched chains</strong> and <strong>closed cyclic rings</strong>.</li>
  <li>Carbon atoms can be linked by single bonds, double bonds, or triple bonds.</li>
</ul>

<h3>Why Carbon's Catenation Is Unique:</h3>
<p>Although other elements in Group 14 like silicon ($\text{Si}$) also show catenation (forming chains with hydrogen up to $7$ or $8$ atoms), silicon-silicon compounds are highly reactive, unstable, and thermally sensitive.</p>
<p>In stark contrast, the <strong>carbon-carbon ($\text{C}-\text{C}$) bond is exceptionally strong, robust, and stable</strong>.</p>

<h3>Why Is the C—C Bond So Exceptionally Strong?</h3>
<p>Because of carbon's <strong>small atomic size</strong> ($Z = 6$, only two electron shells). The small radius allows the positively charged carbon nucleus to hold shared electron pairs tightly and securely. As we move down the periodic table to larger elements, the atomic size increases, placing the shared electrons further from the nucleus, resulting in dramatically weaker bonds.</p>
""",
  "pointsToRemember": [
    "Catenation is the unique ability of carbon to form bonds with other carbon atoms, giving rise to long chains, branches, and rings.",
    "Carbon-carbon (C—C) bonds are exceptionally strong and stable because of carbon's small atomic size.",
    "Silicon forms chains only up to 7-8 atoms, which are unstable and highly reactive, whereas carbon forms stable chains of unlimited length."
  ],
  "keyNotes": [
    "Core Board Question: Define catenation and explain why carbon shows catenation to an extent unmatched by any other element (small size enables strong C—C bonds)."
  ],
  "questions": [
    get_bank_q(14, "m06_q01"), get_bank_q(70, "m06_q02"), get_bank_q(56, "m06_q03"),
    get_bank_q(57, "m06_q04"), get_bank_q(58, "m06_q05"),
    {
      "id": "m06_q06",
      "question": "What technical term describes the property of an element to form covalent bonds with other atoms of itself to build long chains or rings?",
      "options": [
        "Allotropy",
        "Catenation",
        "Electronegativity",
        "Saponification"
      ],
      "answer": "Catenation",
      "explanation": "Catenation is the linkage of atoms of the same element into longer chains, branches, or rings via covalent bonding."
    },
    {
      "id": "m06_q07",
      "question": "Why are carbon-carbon (C—C) single covalent bonds exceptionally strong and chemically stable compared to silicon-silicon (Si—Si) bonds?",
      "options": [
        "Carbon atoms have zero neutrons.",
        "Carbon has a very small atomic size, enabling its nucleus to hold shared electron pairs tightly.",
        "Silicon atoms are completely non-polar.",
        "Silicon can only form ionic bonds with itself."
      ],
      "answer": "Carbon has a very small atomic size, enabling its nucleus to hold shared electron pairs tightly.",
      "explanation": "Due to its compact atomic radius, the shared electron pair is held close to both carbon nuclei, yielding high bond energy."
    },
    {
      "id": "m06_q08",
      "question": "Silicon also forms compounds with hydrogen showing chains of up to 7 or 8 atoms. How do these silicon chains compare with carbon chains?",
      "options": [
        "Silicon chains are completely unbreakable.",
        "Silicon chains are thermally unstable, fragile, and react violently with air.",
        "Silicon chains are radioactive.",
        "Silicon chains only exist in liquid helium."
      ],
      "answer": "Silicon chains are thermally unstable, fragile, and react violently with air.",
      "explanation": "Si—Si bonds are weak because of silicon's larger atomic size; silanes are unstable and ignite spontaneously in air."
    },
    {
      "id": "m06_q09",
      "question": "In 1828, German chemist Friedrich Wöhler famously disproved the 'Vital Force Theory' by synthesising which organic compound from ammonium cyanate in the lab?",
      "options": [
        "Methane",
        "Urea [NH₂CONH₂]",
        "Acetic acid",
        "Ethanol"
      ],
      "answer": "Urea [NH₂CONH₂]",
      "explanation": "Wöhler heated the inorganic compound ammonium cyanate (NH4CNO) and produced urea, proving organic molecules do not require a living 'vital force'."
    },
    {
      "id": "m06_q10",
      "question": "What three structural geometric arrangements can carbon atoms adopt when forming catenated frameworks?",
      "options": [
        "Straight linear chains, branched chains, and closed cyclic rings",
        "Only straight lines without any branching",
        "Only hollow concentric spheres",
        "Only helical spirals"
      ],
      "answer": "Straight linear chains, branched chains, and closed cyclic rings",
      "explanation": "Carbon catenation allows for open straight chains, branched structures, and closed rings containing single, double, or triple bonds."
    }
  ]
}
modules_1_to_10.append(m06)

# Module 7
m07 = {
  "id": "m07", "moduleNumber": 7,
  "title": "Tetravalency of Carbon & Saturated vs Unsaturated Hydrocarbons",
  "tagline": "Valency of four, single vs multiple bonds, and chemical reactivity differences.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<h3>1. Tetravalency of Carbon:</h3>
<p>The second pillar of carbon's versatile nature is its <strong>tetravalency</strong>. Since carbon has a valency of $4$, it is capable of bonding with $4$ other atoms of carbon or atoms of other monovalent elements (such as hydrogen, halogens) or multivalent elements (oxygen, nitrogen, sulphur).</p>
<p>Compounds containing only <strong>carbon and hydrogen</strong> are called <strong>hydrocarbons</strong>.</p>

<hr style="border:0; border-top:1px solid #cbd5e1; margin:16px 0;">

<h3>2. Saturated Hydrocarbons (Alkanes):</h3>
<ul>
  <li>Hydrocarbons in which all carbon atoms are linked to one another <strong>exclusively by single covalent bonds</strong> ($\text{C}-\text{C}$) are called <strong>saturated hydrocarbons</strong>.</li>
  <li>They are also known as <strong>alkanes</strong>.</li>
  <li><strong>Chemical Reactivity:</strong> Saturated hydrocarbons are relatively unreactive and chemically inert under ordinary conditions because all valence requirements are satisfied by strong single bonds.</li>
  <li><strong>Combustion:</strong> They burn with a clean, blue, non-sooty flame in sufficient oxygen.</li>
</ul>

<h3>3. Unsaturated Hydrocarbons (Alkenes & Alkynes):</h3>
<ul>
  <li>Hydrocarbons containing <strong>at least one double bond ($\text{C}=\text{C}$) or triple bond ($\text{C}\equiv\text{C}$)</strong> between carbon atoms are called <strong>unsaturated hydrocarbons</strong>.</li>
  <li>Compounds with a double bond are called <strong>alkenes</strong> (e.g. ethene, $\text{C}_2\text{H}_4$).</li>
  <li>Compounds with a triple bond are called <strong>alkynes</strong> (e.g. ethyne, $\text{C}_2\text{H}_2$).</li>
  <li><strong>Chemical Reactivity:</strong> Unsaturated hydrocarbons are <strong>far more chemically reactive</strong> than saturated hydrocarbons because the extra shared electron pairs in double and triple bonds are readily available to undergo addition reactions.</li>
  <li><strong>Combustion:</strong> They burn with a yellow, luminous, and smoky/sooty flame due to higher carbon percentages.</li>
</ul>
""",
  "pointsToRemember": [
    "Tetravalency means carbon has a valency of 4 and can form 4 covalent bonds.",
    "Saturated hydrocarbons (alkanes) contain only single C—C bonds and are relatively unreactive.",
    "Unsaturated hydrocarbons contain double bonds (alkenes) or triple bonds (alkynes) and are much more chemically reactive."
  ],
  "keyNotes": [
    "Board Highlight: Differentiate between saturated and unsaturated hydrocarbons based on type of bond (single vs double/triple) and chemical reactivity (alkenes/alkynes undergo addition reactions)."
  ],
  "questions": [
    get_bank_q(15, "m07_q01"), get_bank_q(16, "m07_q02"), get_bank_q(17, "m07_q03"),
    get_bank_q(18, "m07_q04"), get_bank_q(19, "m07_q05"),
    {
      "id": "m07_q06",
      "question": "What is the structural definition of an unsaturated hydrocarbon?",
      "options": [
        "A hydrocarbon with oxygen dissolved inside it.",
        "A carbon compound that contains at least one carbon-carbon double (C=C) or triple (C≡C) covalent bond.",
        "A hydrocarbon that dissolves in water.",
        "A compound composed exclusively of single bonds."
      ],
      "answer": "A carbon compound that contains at least one carbon-carbon double (C=C) or triple (C≡C) covalent bond.",
      "explanation": "Unsaturated hydrocarbons contain double or triple bonds between carbon atoms, permitting addition reactions."
    },
    {
      "id": "m07_q07",
      "question": "Why are unsaturated hydrocarbons (alkenes and alkynes) chemically much more reactive than saturated alkanes?",
      "options": [
        "They have lower molecular masses.",
        "The double and triple bonds provide accessible electron density that readily opens up to undergo addition reactions with reagents.",
        "They contain unstable free neutrons.",
        "They possess ionic bonds in their backbones."
      ],
      "answer": "The double and triple bonds provide accessible electron density that readily opens up to undergo addition reactions with reagents.",
      "explanation": "The multiple bonds contain pi electrons that are more exposed and readily participate in addition reactions."
    },
    {
      "id": "m07_q08",
      "question": "Which type of hydrocarbon burns with a clean, clear blue flame under conditions of complete combustion in air?",
      "options": [
        "Saturated hydrocarbons (alkanes) with sufficient air supply",
        "Aromatic alkynes with high carbon percentage",
        "Unsaturated alkenes in limited air",
        "Pure coal dust"
      ],
      "answer": "Saturated hydrocarbons (alkanes) with sufficient air supply",
      "explanation": "Saturated hydrocarbons have a lower carbon percentage and burn completely with a non-sooty blue flame."
    },
    {
      "id": "m07_q09",
      "question": "What is the common chemical name for the hydrocarbon family possessing only single carbon-carbon bonds?",
      "options": [
        "Alkenes",
        "Alkynes",
        "Alkanes (paraffins)",
        "Arenes"
      ],
      "answer": "Alkanes (paraffins)",
      "explanation": "Alkanes are saturated aliphatic hydrocarbons containing exclusively single carbon-carbon covalent bonds."
    },
    {
      "id": "m07_q10",
      "question": "A hydrocarbon molecule has the molecular formula C₃H₆. Is it saturated or unsaturated, and to which family does it belong?",
      "options": [
        "Saturated alkane",
        "Unsaturated alkene (propene)",
        "Unsaturated alkyne (propyne)",
        "Cyclic ether"
      ],
      "answer": "Unsaturated alkene (propene)",
      "explanation": "C₃H₆ matches the alkene general formula CnH₂n (where n = 3), so it is the unsaturated hydrocarbon propene."
    }
  ]
}
modules_1_to_10.append(m07)

# Module 8
m08 = {
  "id": "m08", "moduleNumber": 8,
  "title": "Alkanes (Saturated Hydrocarbons): General Formula CnH₂n₊₂ & Homologues",
  "tagline": "Straight-chain alkanes from methane to hexane, formulas, and structural representations.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p><strong>Alkanes</strong> are the foundational family of saturated hydrocarbons. In every alkane, every carbon atom uses all four of its valence bonds to link either to adjacent carbon atoms or to hydrogen atoms through single covalent bonds.</p>

<h3>The General Chemical Formula for Alkanes:</h3>
<p style="text-align:center; font-weight:bold; font-size:1.2em; color:#1e3a8a;">
  $\text{C}_n\text{H}_{2n+2}$
</p>
<p>where $n$ represents the integer number of carbon atoms in the molecule.</p>

<h3>The First Six Alkanes of the Series:</h3>
<table style="width:100%; border-collapse:collapse; text-align:center; margin:16px 0;">
  <tr style="background:#e2e8f0; font-weight:bold;">
    <td style="padding:6px; border:1px solid #cbd5e1;">$n$</td>
    <td style="padding:6px; border:1px solid #cbd5e1;">Name</td>
    <td style="padding:6px; border:1px solid #cbd5e1;">Formula ($\text{C}_n\text{H}_{2n+2}$)</td>
    <td style="padding:6px; border:1px solid #cbd5e1;">Condensed Structural Formula</td>
  </tr>
  <tr>
    <td style="padding:6px; border:1px solid #cbd5e1;">$1$</td>
    <td style="border:1px solid #cbd5e1; font-weight:bold;">Methane</td>
    <td style="border:1px solid #cbd5e1;">$\text{CH}_4$</td>
    <td style="border:1px solid #cbd5e1;">$\text{CH}_4$</td>
  </tr>
  <tr style="background:#f8fafc;">
    <td style="padding:6px; border:1px solid #cbd5e1;">$2$</td>
    <td style="border:1px solid #cbd5e1; font-weight:bold;">Ethane</td>
    <td style="border:1px solid #cbd5e1;">$\text{C}_2\text{H}_6$</td>
    <td style="border:1px solid #cbd5e1;">$\text{CH}_3-\text{CH}_3$</td>
  </tr>
  <tr>
    <td style="padding:6px; border:1px solid #cbd5e1;">$3$</td>
    <td style="border:1px solid #cbd5e1; font-weight:bold;">Propane</td>
    <td style="border:1px solid #cbd5e1;">$\text{C}_3\text{H}_8$</td>
    <td style="border:1px solid #cbd5e1;">$\text{CH}_3-\text{CH}_2-\text{CH}_3$</td>
  </tr>
  <tr style="background:#f8fafc;">
    <td style="padding:6px; border:1px solid #cbd5e1;">$4$</td>
    <td style="border:1px solid #cbd5e1; font-weight:bold;">Butane</td>
    <td style="border:1px solid #cbd5e1;">$\text{C}_4\text{H}_{10}$</td>
    <td style="border:1px solid #cbd5e1;">$\text{CH}_3-\text{CH}_2-\text{CH}_2-\text{CH}_3$</td>
  </tr>
  <tr>
    <td style="padding:6px; border:1px solid #cbd5e1;">$5$</td>
    <td style="border:1px solid #cbd5e1; font-weight:bold;">Pentane</td>
    <td style="border:1px solid #cbd5e1;">$\text{C}_5\text{H}_{12}$</td>
    <td style="border:1px solid #cbd5e1;">$\text{CH}_3-(\text{CH}_2)_3-\text{CH}_3$</td>
  </tr>
  <tr style="background:#f8fafc;">
    <td style="padding:6px; border:1px solid #cbd5e1;">$6$</td>
    <td style="border:1px solid #cbd5e1; font-weight:bold;">Hexane</td>
    <td style="border:1px solid #cbd5e1;">$\text{C}_6\text{H}_{14}$</td>
    <td style="border:1px solid #cbd5e1;">$\text{CH}_3-(\text{CH}_2)_4-\text{CH}_3$</td>
  </tr>
</table>

<h3>Structural Representation:</h3>
<p>To draw the structure of any alkane (e.g. propane, $\text{C}_3\text{H}_8$):</p>
<ol>
  <li>First connect the carbon atoms together in a chain with single bonds: $\text{C}-\text{C}-\text{C}$.</li>
  <li>Then satisfy the remaining tetravalent bonds of each carbon atom by attaching hydrogen atoms. The terminal carbon atoms bond with $3$ hydrogens each ($-\text{CH}_3$), while interior carbon atoms bond with $2$ hydrogens ($-\text{CH}_2-$).</li>
</ol>
""",
  "pointsToRemember": [
    "General formula for alkanes: CnH₂n₊₂.",
    "First four alkanes are Methane (CH₄), Ethane (C₂H₆), Propane (C₃H₈), and Butane (C₄H₁₀).",
    "Each successive member differs by a —CH₂— group (14 u molecular mass)."
  ],
  "keyNotes": [
    "Formula Rule: Given n carbons, calculate hydrogens using 2n + 2 for alkanes (e.g., if n=5, H = 2(5)+2 = 12 → Pentane, C₅H₁₂)."
  ],
  "questions": [
    get_bank_q(20, "m08_q01"), get_bank_q(22, "m08_q02"), get_bank_q(23, "m08_q03"),
    get_bank_q(24, "m08_q04"), get_bank_q(25, "m08_q05"),
    {
      "id": "m08_q06",
      "question": "What is the molecular formula of an alkane containing exactly 5 carbon atoms?",
      "options": [
        "C5H10",
        "C5H12",
        "C5H8",
        "C5H14"
      ],
      "answer": "C5H12",
      "explanation": "Applying the alkane formula CnH₂n+2 with n = 5: H = 2(5) + 2 = 12, yielding pentane (C5H12)."
    },
    {
      "id": "m08_q07",
      "question": "How many total single covalent bonds are present in a molecule of ethane (C₂H₆)?",
      "options": [
        "6 bonds",
        "7 single covalent bonds (one C—C bond and six C—H bonds)",
        "8 bonds",
        "5 bonds"
      ],
      "answer": "7 single covalent bonds (one C—C bond and six C—H bonds)",
      "explanation": "Ethane has one carbon-carbon single bond and six carbon-hydrogen single bonds, giving 1 + 6 = 7 covalent bonds."
    },
    {
      "id": "m08_q08",
      "question": "What is the molecular mass difference between any two successive members of the alkane homologous series?",
      "options": [
        "2 u",
        "12 u",
        "14 u (corresponding to one —CH₂— unit)",
        "16 u"
      ],
      "answer": "14 u (corresponding to one —CH₂— unit)",
      "explanation": "Every successive member differs by a —CH₂— unit, which has a mass of 12 (carbon) + 2×1 (hydrogen) = 14 u."
    },
    {
      "id": "m08_q09",
      "question": "Which alkane is the principal component of Liquefied Petroleum Gas (LPG) supplied in domestic cooking cylinders?",
      "options": [
        "Methane",
        "Butane (C4H10)",
        "Hexane",
        "Acetylene"
      ],
      "answer": "Butane (C4H10)",
      "explanation": "Commercial LPG consists primarily of liquefied butane (along with some propane) under pressure."
    },
    {
      "id": "m08_q10",
      "question": "What is the condensed structural formula of propane?",
      "options": [
        "CH3—CH3",
        "CH3—CH₂—CH3",
        "CH3—CH₂—CH₂—CH3",
        "CH₂=CH—CH3"
      ],
      "answer": "CH3—CH₂—CH3",
      "explanation": "Propane has 3 carbons in a chain: two terminal methyl groups (-CH3) bonded to a central methylene group (-CH₂-)."
    }
  ]
}
modules_1_to_10.append(m08)

# Module 9
m09 = {
  "id": "m09", "moduleNumber": 9,
  "title": "Alkenes (CnH₂n) & Alkynes (CnH₂n₋₂): Unsaturated Hydrocarbons",
  "tagline": "Ethene, ethyne, multiple bond electron sharing, and hydrogenation tests.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<h3>1. Alkenes — The Double-Bond Family:</h3>
<p>Alkenes are unsaturated hydrocarbons containing at least one <strong>carbon-carbon double bond ($\text{C}=\text{C}$)</strong>.</p>
<p><strong>General Formula for Alkenes:</strong></p>
<p style="text-align:center; font-weight:bold; font-size:1.2em; color:#1e3a8a;">
  $\text{C}_n\text{H}_{2n}\quad (\text{where } n \ge 2)$
</p>
<ul>
  <li><strong>Ethene ($\text{C}_2\text{H}_4$):</strong> The simplest alkene. Two carbon atoms share two electron pairs ($\text{C}=\text{C}$), and each carbon bonds with two hydrogen atoms:
  $$\text{H}_2\text{C}=\text{CH}_2$$
  </li>
  <li><strong>Propene ($\text{C}_3\text{H}_6$):</strong> $\text{CH}_3-\text{CH}=\text{CH}_2$</li>
  <li><strong>Butene ($\text{C}_4\text{H}_8$):</strong> $\text{CH}_3-\text{CH}_2-\text{CH}=\text{CH}_2$</li>
</ul>

<h3>2. Alkynes — The Triple-Bond Family:</h3>
<p>Alkynes are unsaturated hydrocarbons containing at least one <strong>carbon-carbon triple bond ($\text{C}\equiv\text{C}$)</strong>.</p>
<p><strong>General Formula for Alkynes:</strong></p>
<p style="text-align:center; font-weight:bold; font-size:1.2em; color:#1e3a8a;">
  $\text{C}_n\text{H}_{2n-2}\quad (\text{where } n \ge 2)$
</p>
<ul>
  <li><strong>Ethyne ($\text{C}_2\text{H}_2$, commonly called Acetylene):</strong> The simplest alkyne. Two carbon atoms share three electron pairs ($\text{C}\equiv\text{C}$), with one hydrogen on each carbon:
  $$\text{H}-\text{C}\equiv\text{C}-\text{H}$$
  Ethyne is mixed with oxygen in oxy-acetylene torches to produce an intensely hot flame ($>3000\ ^\circ\text{C}$) for welding metals.
  </li>
  <li><strong>Propyne ($\text{C}_3\text{H}_4$):</strong> $\text{CH}_3-\text{C}\equiv\text{CH}$</li>
  <li><strong>Butyne ($\text{C}_4\text{H}_6$):</strong> $\text{CH}_3-\text{CH}_2-\text{C}\equiv\text{CH}$</li>
</ul>

<div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
  <strong>🔬 Chemical Distinction Test (Bromine Water Test)</strong>
  <p style="margin:4px 0 0 0; line-height:1.6;">When reddish-brown bromine water is shaken with an unsaturated hydrocarbon (alkene or alkyne), the bromine adds across the double/triple bond, causing the reddish-brown color to <strong>decolorise rapidly</strong>. Saturated alkanes do not decolorise bromine water in the dark.</p>
</div>
""",
  "pointsToRemember": [
    "Alkenes contain a C=C double bond with general formula CnH₂n (starting with ethene, C₂H₄).",
    "Alkynes contain a C≡C triple bond with general formula CnH₂n₋₂ (starting with ethyne, C₂H₂).",
    "Unsaturated hydrocarbons decolorize reddish-brown bromine water; saturated alkanes do not."
  ],
  "keyNotes": [
    "Exam Alert: Ethyne is commonly known as acetylene (C₂H₂). Remember the general formulas: Alkane = CnH₂n+2, Alkene = CnH₂n, Alkyne = CnH₂n-2."
  ],
  "questions": [
    get_bank_q(27, "m09_q01"), get_bank_q(28, "m09_q02"), get_bank_q(29, "m09_q03"),
    get_bank_q(30, "m09_q04"), get_bank_q(83, "m09_q05"),
    {
      "id": "m09_q06",
      "question": "What is the common trivial name and molecular formula of the simplest member of the alkyne homologous series?",
      "options": [
        "Methane, CH₄",
        "Acetylene (Ethyne), C₂H₂",
        "Ethylene (Ethene), C₂H₄",
        "Propylene, C3H6"
      ],
      "answer": "Acetylene (Ethyne), C₂H₂",
      "explanation": "Ethyne (H-C≡C-H), commonly known as acetylene, is the simplest alkyne with formula C₂H₂."
    },
    {
      "id": "m09_q07",
      "question": "Why is pure ethyne (acetylene) burned with pure oxygen rather than air in oxy-acetylene welding torches?",
      "options": [
        "Air is too cold to support combustion.",
        "In air, incomplete combustion produces a smoky yellow flame, whereas burning in pure oxygen gives complete combustion yielding an intensely hot 3000 °C welding flame.",
        "Oxygen prevents ethyne from turning into coal.",
        "Air makes ethyne non-flammable."
      ],
      "answer": "In air, incomplete combustion produces a smoky yellow flame, whereas burning in pure oxygen gives complete combustion yielding an intensely hot 3000 °C welding flame.",
      "explanation": "High carbon percentage causes soot in air; pure oxygen achieves complete combustion generating temperatures over 3000 °C."
    },
    {
      "id": "m09_q08",
      "question": "What visual observation occurs when an alkene gas (such as ethene) is bubbled through reddish-brown bromine water?",
      "options": [
        "The solution turns dark black.",
        "The reddish-brown color rapidly discharges and becomes completely colorless.",
        "A thick green precipitate forms.",
        "The solution glows in the dark."
      ],
      "answer": "The reddish-brown color rapidly discharges and becomes completely colorless.",
      "explanation": "Bromine adds across the carbon-carbon double bond to form colorless 1,2-dibromoethane, discharging the brown color."
    },
    {
      "id": "m09_q09",
      "question": "What is the molecular formula of an alkyne containing 4 carbon atoms?",
      "options": [
        "C4H10",
        "C4H8",
        "C4H6",
        "C4H4"
      ],
      "answer": "C4H6",
      "explanation": "Applying the alkyne formula CnH₂n-2 with n = 4: H = 2(4) - 2 = 6, giving butyne (C4H6)."
    },
    {
      "id": "m09_q10",
      "question": "How many electrons are shared between the two carbon atoms in a molecule of ethene (C₂H₄)?",
      "options": [
        "2 electrons (1 pair)",
        "4 electrons (2 shared pairs forming a double bond)",
        "6 electrons (3 pairs)",
        "8 electrons"
      ],
      "answer": "4 electrons (2 shared pairs forming a double bond)",
      "explanation": "The carbon-carbon double bond in ethene consists of two shared pairs of electrons (4 electrons total)."
    }
  ]
}
modules_1_to_10.append(m09)

# Module 10
m10 = {
  "id": "m10", "moduleNumber": 10,
  "title": "Structural Isomerism: Chain Isomers of Butane (C₄H₁₀) and Pentane (C₅H₁₂)",
  "tagline": "Identical molecular formulas with differing carbon chain skeletons.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Compounds that have the <strong>same molecular formula</strong> but <strong>different structural formulas</strong> (differing arrangements of atoms in space) are called <strong>structural isomers</strong>, and this phenomenon is called <strong>structural isomerism</strong>.</p>
<p>Because the first three alkanes—methane ($\text{CH}_4$), ethane ($\text{C}_2\text{H}_6$), and propane ($\text{C}_3\text{H}_8$)—have only one possible structural arrangement, isomerism begins with <strong>butane ($\text{C}_4\text{H}_{10}$)</strong>.</p>

<h3>1. Isomers of Butane ($\text{C}_4\text{H}_{10}$):</h3>
<p>There are exactly <strong>$2$ structural isomers</strong> of butane:</p>
<ol>
  <li><strong>Normal Butane ($n$-butane):</strong> A continuous straight chain of four carbon atoms:
  $$\text{CH}_3-\text{CH}_2-\text{CH}_2-\text{CH}_3$$
  </li>
  <li><strong>Isobutane ($2$-methylpropane):</strong> A branched three-carbon chain with a methyl branch on the central carbon:
  $$\begin{matrix}
  \text{CH}_3-\text{CH}-\text{CH}_3 \\
  \quad\quad| \\
  \quad\quad\text{CH}_3
  \end{matrix}$$
  </li>
</ol>

<h3>2. Isomers of Pentane ($\text{C}_5\text{H}_{12}$):</h3>
<p>There are exactly <strong>$3$ structural isomers</strong> of pentane:</p>
<ol>
  <li><strong>$n$-pentane:</strong> Straight five-carbon chain: $\text{CH}_3-(\text{CH}_2)_3-\text{CH}_3$.</li>
  <li><strong>Isopentane ($2$-methylbutane):</strong> Four-carbon chain with one branch: $\text{CH}_3-\text{CH}(\text{CH}_3)-\text{CH}_2-\text{CH}_3$.</li>
  <li><strong>Neopentane ($2,2$-dimethylpropane):</strong> A central carbon bonded symmetrically to four methyl groups: $\text{C}(\text{CH}_3)_4$.</li>
</ol>

<p><strong>Physical vs Chemical Differences:</strong> Isomers have the same chemical formula, but differ in physical properties such as boiling point. For example, branching makes molecules more compact, reducing surface area and lowering van der Waals forces, which lowers the boiling point.</p>
""",
  "pointsToRemember": [
    "Structural isomers have the same molecular formula but different structural arrangements.",
    "Butane (C₄H₁₀) has 2 isomers: n-butane and isobutane (2-methylpropane).",
    "Pentane (C₅H₁₂) has 3 isomers: n-pentane, isopentane (2-methylbutane), and neopentane (2,2-dimethylpropane)."
  ],
  "keyNotes": [
    "Common Board Exam Question: Draw the electron-dot and structural formulas of the two isomers of butane (n-butane and isobutane)."
  ],
  "questions": [
    get_bank_q(21, "m10_q01"), get_bank_q(67, "m10_q02"), get_bank_q(68, "m10_q03"),
    get_bank_q(69, "m10_q04"), get_bank_q(84, "m10_q05"),
    {
      "id": "m10_q06",
      "question": "What is the IUPAC systematic name for the branched isomer of butane known as isobutane?",
      "options": [
        "1-methylpropane",
        "2-methylpropane",
        "Dimethylmethane",
        "Cyclobutane"
      ],
      "answer": "2-methylpropane",
      "explanation": "Isobutane has a 3-carbon parent propane chain with a methyl group on carbon 2: 2-methylpropane."
    },
    {
      "id": "m10_q07",
      "question": "How many distinct structural chain isomers are possible for the alkane pentane (C₅H₁₂)?",
      "options": [
        "2 isomers",
        "3 structural isomers (n-pentane, isopentane, neopentane)",
        "4 isomers",
        "5 isomers"
      ],
      "answer": "3 structural isomers (n-pentane, isopentane, neopentane)",
      "explanation": "Pentane forms exactly three isomers: n-pentane, 2-methylbutane (isopentane), and 2,2-dimethylpropane (neopentane)."
    },
    {
      "id": "m10_q08",
      "question": "Why do the first three alkanes—methane (CH₄), ethane (C₂H₆), and propane (C₃H₈)—NOT exhibit structural isomerism?",
      "options": [
        "They are gases at room temperature.",
        "There is only one possible way to arrange 1, 2, or 3 carbon atoms in space without branching.",
        "Their covalent bonds are too weak to bend.",
        "They contain odd numbers of protons."
      ],
      "answer": "There is only one possible way to arrange 1, 2, or 3 carbon atoms in space without branching.",
      "explanation": "Any arrangement of 1, 2, or 3 carbon atoms forms a continuous unbranched chain; branching requires at least 4 carbons."
    },
    {
      "id": "m10_q09",
      "question": "Which of the following compounds is a structural isomer of normal hexane (C₆H₁₄)?",
      "options": [
        "Cyclohexane (C6H12)",
        "2-methylpentane (C6H14)",
        "Hexene (C6H12)",
        "Benzene (C6H6)"
      ],
      "answer": "2-methylpentane (C6H14)",
      "explanation": "2-methylpentane has the identical formula C6H14 with a branched skeleton, making it an isomer of hexane."
    },
    {
      "id": "m10_q10",
      "question": "How does increased branching in structural isomers affect their physical boiling points?",
      "options": [
        "Branching raises boiling points to 1000 °C.",
        "Branching makes molecules more spherical and compact, decreasing surface area and lowering the boiling point.",
        "Branching has zero effect on any physical property.",
        "Branching turns liquids into permanent gases that cannot be condensed."
      ],
      "answer": "Branching makes molecules more spherical and compact, decreasing surface area and lowering the boiling point.",
      "explanation": "Branching reduces molecular surface area, weakening intermolecular van der Waals forces and lowering the boiling point."
    }
  ]
}
modules_1_to_10.append(m10)

with open('scratch/ch4_part1.json', 'w', encoding='utf-8') as f:
    json.dump(modules_1_to_10, f, ensure_ascii=False, indent=2)

print(f"Successfully generated Chapter 4 Part 1 (Modules 1 to 10): {len(modules_1_to_10)} modules.")
