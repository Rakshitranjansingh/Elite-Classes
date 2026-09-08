# -*- coding: utf-8 -*-
"""
CH₄ Part 2: Modules 11 to 20
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

modules_11_to_20 = []

# Module 11
m11 = {
  "id": "m11", "moduleNumber": 11,
  "title": "Cyclic Hydrocarbons: Saturated Cyclohexane (C₆H₁₂) & Aromatic Benzene (C₆H₆)",
  "tagline": "Ring structures of carbon, covalent bond counts, and alternating multiple bonds.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Carbon atoms can link together not only in straight or branched open chains, but also in closed ring frameworks known as <strong>cyclic hydrocarbons</strong>:</p>

<h3>1. Saturated Cyclic Hydrocarbon — Cyclohexane ($\text{C}_6\text{H}_{12}$):</h3>
<p>In cyclohexane, six carbon atoms are joined in a closed ring by single covalent bonds, with two hydrogen atoms attached to each carbon atom:</p>
<ul>
  <li>Each carbon atom is bonded to two neighbouring carbon atoms and two hydrogen atoms, satisfying tetravalency.</li>
  <li><strong>Total Covalent Bonds:</strong> There are $6$ single $\text{C}-\text{C}$ bonds forming the ring and $12$ single $\text{C}-\text{H}$ bonds, making a grand total of <strong>$18$ single covalent bonds</strong> in a single molecule of cyclohexane.</li>
  <li>Cyclohexane has the same general formula ($\text{C}_n\text{H}_{2n}$) as straight-chain alkenes, but is completely saturated because it contains no double bonds.</li>
</ul>

<h3>2. Unsaturated Aromatic Hydrocarbon — Benzene ($\text{C}_6\text{H}_6$):</h3>
<p>Benzene is the parent member of aromatic hydrocarbons:</p>
<ul>
  <li>It consists of a closed hexagonal ring of six carbon atoms containing <strong>alternating single and double carbon-carbon bonds</strong>:
  $$\begin{matrix}
  \text{Three } \text{C}-\text{C} \text{ single bonds} \\
  \text{Three } \text{C}=\text{C} \text{ double bonds} \\
  \text{Six } \text{C}-\text{H} \text{ single bonds}
  \end{matrix}$$
  </li>
  <li><strong>Total Covalent Bonds:</strong> In benzene ($\text{C}_6\text{H}_6$), there are $9$ carbon-carbon bonds ($3$ double $+ 3$ single) and $6$ carbon-hydrogen bonds, representing a total of <strong>$15$ covalent bonds</strong>.</li>
</ul>
""",
  "pointsToRemember": [
    "Cyclohexane (C₆H₁₂) is a saturated cyclic ring containing 18 single covalent bonds.",
    "Benzene (C₆H₆) is an unsaturated cyclic ring with alternating single and double bonds, containing 15 covalent bonds total.",
    "Cycloalkanes share the general formula CnH₂n with alkenes, but possess no double bonds."
  ],
  "keyNotes": [
    "Exam Highlight: Count bonds carefully—Cyclohexane has 18 single bonds; Benzene has 3 C=C double bonds, 3 C—C single bonds, and 6 C—H single bonds (15 bonds total)."
  ],
  "questions": [
    get_bank_q(85, "m11_q01"), get_bank_q(86, "m11_q02"), get_bank_q(87, "m11_q03"),
    get_bank_q(88, "m11_q04"), get_bank_q(89, "m11_q05"),
    {
      "id": "m11_q06",
      "question": "What is the molecular formula and total number of single covalent bonds in a molecule of cyclohexane?",
      "options": [
        "C6H6, with 15 bonds",
        "C6H12, with 18 single covalent bonds (6 C—C and 12 C—H bonds)",
        "C6H14, with 19 single bonds",
        "C6H10, with 16 bonds"
      ],
      "answer": "C6H12, with 18 single covalent bonds (6 C—C and 12 C—H bonds)",
      "explanation": "Cyclohexane has formula C6H12; its ring contains 6 C—C single bonds and 12 C—H single bonds = 18 total bonds."
    },
    {
      "id": "m11_q07",
      "question": "How many double bonds and single bonds exist between carbon atoms in a molecule of benzene (C₆H₆)?",
      "options": [
        "6 double bonds and 0 single bonds",
        "3 carbon-carbon double bonds and 3 carbon-carbon single bonds (alternating)",
        "2 double bonds and 4 single bonds",
        "1 triple bond and 5 single bonds"
      ],
      "answer": "3 carbon-carbon double bonds and 3 carbon-carbon single bonds (alternating)",
      "explanation": "Benzene features a planar ring with alternating three C=C double bonds and three C—C single bonds."
    },
    {
      "id": "m11_q08",
      "question": "Which of the following compounds is an unsaturated cyclic hydrocarbon?",
      "options": [
        "Cyclopentane",
        "Cyclohexane",
        "Benzene",
        "Propane"
      ],
      "answer": "Benzene",
      "explanation": "Benzene is a closed cyclic hydrocarbon containing three carbon-carbon double bonds, making it unsaturated."
    },
    {
      "id": "m11_q09",
      "question": "What is the total count of covalent bonds (including all single and double bonds) in a molecule of benzene (C₆H₆)?",
      "options": [
        "12 bonds",
        "15 covalent bonds",
        "18 bonds",
        "21 bonds"
      ],
      "answer": "15 covalent bonds",
      "explanation": "Benzene has 6 C—H single bonds + 3 C—C single bonds + 3 C=C double bonds = 15 total covalent bonds."
    },
    {
      "id": "m11_q10",
      "question": "What is the molecular formula of cyclobutane (a saturated 4-carbon ring)?",
      "options": [
        "C4H10",
        "C4H8",
        "C4H6",
        "C4H4"
      ],
      "answer": "C4H8",
      "explanation": "Like all monocyclic cycloalkanes, cyclobutane adheres to the general formula CnH₂n, giving C4H8."
    }
  ]
}
modules_11_to_20.append(m11)

# Module 12
m12 = {
  "id": "m12", "moduleNumber": 12,
  "title": "Heteroatoms & Functional Groups: Halogens and Alcohols (—OH)",
  "tagline": "Replacing hydrogen with reactive heteroatoms and naming haloalkanes and alcohols.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Carbon forms bonds not only with hydrogen, but also with other elements such as halogens, oxygen, nitrogen, and sulphur. In hydrocarbon chains, when one or more hydrogen atoms are substituted by other elements such that carbon's tetravalency is preserved, the substituting element is termed a <strong>heteroatom</strong>.</p>

<h3>What Is a Functional Group?</h3>
<p>A heteroatom or group of atoms that confers characteristic chemical properties to an organic molecule, regardless of the carbon chain length, is defined as a <strong>functional group</strong>.</p>

<h3>1. Halogens (Haloalkanes):</h3>
<ul>
  <li><strong>Heteroatom:</strong> Chlorine ($\text{Cl}$), Bromine ($\text{Br}$), or Iodine ($\text{I}$).</li>
  <li><strong>Formula of Group:</strong> $-\text{Cl}$ (chloro), $-\text{Br}$ (bromo).</li>
  <li><strong>Naming Rule:</strong> Named with the prefix 'chloro-' or 'bromo-'.</li>
  <li><strong>Examples:</strong>
    <ul>
      <li>Chloromethane: $\text{CH}_3\text{Cl}$</li>
      <li>Chloroethane: $\text{CH}_3-\text{CH}_2\text{Cl}$ ($\text{C}_2\text{H}_5\text{Cl}$)</li>
      <li>Bromopropane: $\text{CH}_3-\text{CH}_2-\text{CH}_2\text{Br}$ ($\text{C}_3\text{H}_7\text{Br}$)</li>
    </ul>
  </li>
</ul>

<h3>2. Alcohols:</h3>
<ul>
  <li><strong>Heteroatom:</strong> Oxygen ($\text{O}$).</li>
  <li><strong>Formula of Functional Group:</strong> $-\text{OH}$ (Hydroxyl group).</li>
  <li><strong>Naming Rule:</strong> Replace the terminal '-e' of the parent alkane with the suffix <strong>'-ol'</strong>.</li>
  <li><strong>Examples:</strong>
    <ul>
      <li>Methanol (Methyl alcohol): $\text{CH}_3\text{OH}$</li>
      <li>Ethanol (Ethyl alcohol): $\text{CH}_3\text{CH}_2\text{OH}$ ($\text{C}_2\text{H}_5\text{OH}$)</li>
      <li>Propanol: $\text{CH}_3\text{CH}_2\text{CH}_2\text{OH}$ ($\text{C}_3\text{H}_7\text{OH}$)</li>
    </ul>
  </li>
</ul>
""",
  "pointsToRemember": [
    "Heteroatoms are non-carbon, non-hydrogen atoms (e.g. Cl, Br, O, N) that replace hydrogen on carbon chains.",
    "Functional groups confer distinct chemical properties to organic compounds regardless of chain length.",
    "Haloalkanes use prefixes (chloro-, bromo-); Alcohols possess the —OH group and take the suffix '-ol'."
  ],
  "keyNotes": [
    "Nomenclature Check: Methanol is CH₃OH, Ethanol is C₂H₅OH; remember that the hydroxyl group in alcohols does not dissociate as OH⁻ ions (it is covalent, neutral)."
  ],
  "questions": [
    get_bank_q(26, "m12_q01"), get_bank_q(31, "m12_q02"), get_bank_q(32, "m12_q03"),
    get_bank_q(33, "m12_q04"), get_bank_q(34, "m12_q05"),
    {
      "id": "m12_q06",
      "question": "What is the definition of a 'heteroatom' in organic chemistry?",
      "options": [
        "A carbon atom with an extra neutron.",
        "Any non-carbon, non-hydrogen atom (such as oxygen, nitrogen, or chlorine) that replaces hydrogen in a hydrocarbon.",
        "An atom that carries a radioactive charge.",
        "An atom with zero valency."
      ],
      "answer": "Any non-carbon, non-hydrogen atom (such as oxygen, nitrogen, or chlorine) that replaces hydrogen in a hydrocarbon.",
      "explanation": "Heteroatoms are non-carbon/non-hydrogen elements that bond to the carbon skeleton, forming functional groups."
    },
    {
      "id": "m12_q07",
      "question": "What is the chemical formula and IUPAC name of the two-carbon alcohol?",
      "options": [
        "CH3OH, Methanol",
        "C₂H₅OH, Ethanol",
        "C3H7OH, Propanol",
        "CH₃COOH, Ethanoic acid"
      ],
      "answer": "C₂H₅OH, Ethanol",
      "explanation": "The two-carbon alcohol is ethanol, having the molecular formula C₂H₅OH (or CH3CH₂OH)."
    },
    {
      "id": "m12_q08",
      "question": "How does the suffix of an alkane change when converted into an alcohol containing the —OH functional group?",
      "options": [
        "The terminal '-e' is replaced by '-al'.",
        "The terminal '-e' is replaced by '-ol'.",
        "The terminal '-e' is replaced by '-one'.",
        "The prefix 'hydro-' is added."
      ],
      "answer": "The terminal '-e' is replaced by '-ol'.",
      "explanation": "In IUPAC nomenclature, alcohols are designated by replacing the trailing '-e' of alkane with the suffix '-ol' (e.g. Ethane -> Ethanol)."
    },
    {
      "id": "m12_q09",
      "question": "Which of the following compounds contains chlorine as a heteroatom?",
      "options": [
        "Ethanol (C₂H₅OH)",
        "Chloromethane (CH₃Cl)",
        "Ethanoic acid (CH₃COOH)",
        "Propanone (CH3COCH3)"
      ],
      "answer": "Chloromethane (CH₃Cl)",
      "explanation": "In chloromethane (CH₃Cl), chlorine replaces one hydrogen of methane, acting as the halogen heteroatom."
    },
    {
      "id": "m12_q10",
      "question": "Why does an aqueous solution of pure ethanol (C₂H₅OH) fail to turn red litmus paper blue, despite possessing an —OH group?",
      "options": [
        "Ethanol is a strong acid.",
        "The —OH group in ethanol is covalently bonded to carbon and does not dissociate into free hydroxide (OH⁻) ions in water.",
        "Litmus paper dissolves in ethanol.",
        "Ethanol turns into dry ice."
      ],
      "answer": "The —OH group in ethanol is covalently bonded to carbon and does not dissociate into free hydroxide (OH⁻) ions in water.",
      "explanation": "Alcohols are neutral covalent compounds; the C—OH bond does not ionise into OH⁻, so ethanol is neutral to litmus."
    }
  ]
}
modules_11_to_20.append(m12)

# Module 13
m13 = {
  "id": "m13", "moduleNumber": 13,
  "title": "Functional Groups: Aldehydes (—CHO), Ketones (>C=O) & Carboxylic Acids (—COOH)",
  "tagline": "Carbonyl and carboxyl chemistry, structural formulas, and nomenclature rules.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Oxygen forms three other vital carbonyl-based functional groups in Class 10 organic chemistry:</p>

<h3>1. Aldehydes (—CHO):</h3>
<ul>
  <li><strong>Structure:</strong> A carbonyl group ($\text{C}=\text{O}$) bonded to at least one hydrogen atom: $-\text{CH}=\text{O}$.</li>
  <li><strong>Position:</strong> Always located at the <strong>terminal end</strong> of the carbon chain.</li>
  <li><strong>Naming Rule:</strong> Replace '-e' of the alkane with the suffix <strong>'-al'</strong>.</li>
  <li><strong>Examples:</strong>
    <ul>
      <li>Methanal (Formaldehyde): $\text{HCHO}$ (1-carbon)</li>
      <li>Ethanal (Acetaldehyde): $\text{CH}_3\text{CHO}$ (2-carbon)</li>
      <li>Propanal: $\text{CH}_3\text{CH}_2\text{CHO}$ (3-carbon)</li>
    </ul>
  </li>
</ul>

<h3>2. Ketones (>C=O):</h3>
<ul>
  <li><strong>Structure:</strong> A carbonyl group ($>\text{C}=\text{O}$) bonded to <strong>two adjacent carbon atoms</strong>: $\text{R}-\text{CO}-\text{R}'$.</li>
  <li><strong>Position:</strong> Must be located <strong>inside the carbon chain</strong> (never terminal).</li>
  <li><strong>Minimum Carbons:</strong> A ketone must contain a <strong>minimum of 3 carbon atoms</strong>.</li>
  <li><strong>Naming Rule:</strong> Replace '-e' of the alkane with the suffix <strong>'-one'</strong> (pronounced 'own').</li>
  <li><strong>Simplest Member:</strong> <strong>Propanone (Acetone)</strong>: $\text{CH}_3-\text{CO}-\text{CH}_3$, widely used as commercial nail polish remover.</li>
</ul>

<h3>3. Carboxylic Acids (—COOH):</h3>
<ul>
  <li><strong>Structure:</strong> A carbonyl group joined to a hydroxyl group: $-\text{C}(=\text{O})\text{OH}$.</li>
  <li><strong>Position:</strong> Always terminal.</li>
  <li><strong>Naming Rule:</strong> Replace '-e' of alkane with <strong>'-oic acid'</strong>.</li>
  <li><strong>Examples:</strong>
    <ul>
      <li>Methanoic acid (Formic acid): $\text{HCOOH}$ (present in ant stings and nettle hair)</li>
      <li>Ethanoic acid (Acetic acid): $\text{CH}_3\text{COOH}$ (active ingredient in vinegar)</li>
      <li>Propanoic acid: $\text{CH}_3\text{CH}_2\text{COOH}$</li>
    </ul>
  </li>
</ul>
""",
  "pointsToRemember": [
    "Aldehydes have the —CHO group and take the suffix '-al' (e.g. Ethanal, CH₃CHO).",
    "Ketones have the >C=O group inside the chain, take suffix '-one', and require at least 3 carbons (simplest is Propanone, CH₃COCH₃).",
    "Carboxylic acids have the —COOH group and take the suffix '-oic acid' (e.g. Ethanoic acid, CH₃COOH)."
  ],
  "keyNotes": [
    "Board Classic: Propanone (CH₃COCH₃) is the simplest possible ketone because the carbonyl carbon must be flanked by two carbon atoms on both sides."
  ],
  "questions": [
    get_bank_q(35, "m13_q01"), get_bank_q(36, "m13_q02"), get_bank_q(37, "m13_q03"),
    get_bank_q(38, "m13_q04"), get_bank_q(39, "m13_q05"),
    {
      "id": "m13_q06",
      "question": "What is the minimum number of carbon atoms required to construct a stable molecule belonging to the ketone family?",
      "options": [
        "1 carbon atom",
        "2 carbon atoms",
        "3 carbon atoms (Propanone)",
        "4 carbon atoms"
      ],
      "answer": "3 carbon atoms (Propanone)",
      "explanation": "In a ketone, the carbonyl carbon (>C=O) must be bonded to two other carbons, necessitating a minimum of 3 carbons (CH3COCH3)."
    },
    {
      "id": "m13_q07",
      "question": "What is the IUPAC name and condensed formula of the simplest member of the carboxylic acid homologous series?",
      "options": [
        "Ethanoic acid, CH₃COOH",
        "Methanoic acid, HCOOH",
        "Propanoic acid, C2H5COOH",
        "Methanal, HCHO"
      ],
      "answer": "Methanoic acid, HCOOH",
      "explanation": "Methanoic acid (HCOOH, commonly known as formic acid) has only one carbon and is the simplest carboxylic acid."
    },
    {
      "id": "m13_q08",
      "question": "Which suffix is attached to the parent alkane root to designate an aldehyde containing the —CHO functional group?",
      "options": [
        "'-ol'",
        "'-al'",
        "'-one'",
        "'-oic acid'"
      ],
      "answer": "'-al'",
      "explanation": "Aldehydes take the IUPAC suffix '-al' (e.g. Ethanal, Propanal), distinguishing them from alcohols ('-ol')."
    },
    {
      "id": "m13_q09",
      "question": "Which widely used cosmetic solvent (nail polish remover) is chemically known as propanone (acetone)?",
      "options": [
        "CH3OH",
        "CH3COCH3",
        "CH₃COOH",
        "CH3CHO"
      ],
      "answer": "CH3COCH3",
      "explanation": "Propanone (acetone, CH3COCH3) is an organic solvent that rapidly dissolves nitrocellulose in nail varnish."
    },
    {
      "id": "m13_q10",
      "question": "What organic functional group is present in ethanoic acid (CH₃COOH)?",
      "options": [
        "Hydroxyl group (—OH)",
        "Aldehyde group (—CHO)",
        "Carboxylic acid group (—COOH)",
        "Ketone group (>C=O)"
      ],
      "answer": "Carboxylic acid group (—COOH)",
      "explanation": "Ethanoic acid features the carboxylic acid group (—COOH), composed of a carbonyl and a hydroxyl group."
    }
  ]
}
modules_11_to_20.append(m13)

# Module 14
m14 = {
  "id": "m14", "moduleNumber": 14,
  "title": "Homologous Series: Structural Step (—CH₂—), Mass & Property Trends",
  "tagline": "Uniform chemical behaviors and regular gradations in physical properties.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>A series of organic compounds in which the same functional group substitutes for hydrogen in a carbon chain, such that successive members differ by a constant structural unit, is called a <strong>homologous series</strong>.</p>

<h3>Core Defining Characteristics of a Homologous Series:</h3>
<ol>
  <li><strong>Constant Structural Difference:</strong><br>
  Any two consecutive (adjacent) members of a homologous series differ by exactly one <strong>$-\text{CH}_2-$ unit</strong> (methylene group).<br>
  <em>Examples:</em>
  $$\text{CH}_4 \xrightarrow{+\text{CH}_2} \text{C}_2\text{H}_6 \xrightarrow{+\text{CH}_2} \text{C}_3\text{H}_8 \xrightarrow{+\text{CH}_2} \text{C}_4\text{H}_{10}$$
  $$\text{CH}_3\text{OH} \xrightarrow{+\text{CH}_2} \text{C}_2\text{H}_5\text{OH} \xrightarrow{+\text{CH}_2} \text{C}_3\text{H}_7\text{OH}$$
  </li>
  <li><strong>Constant Molecular Mass Difference:</strong><br>
  Since carbon has atomic mass $12\text{ u}$ and hydrogen has mass $1\text{ u}$, the mass of one $-\text{CH}_2-$ unit is $12 + 2(1) = 14\text{ u}$. Therefore, successive members differ by exactly <strong>$14\text{ u}$ in molecular mass</strong>.</li>
  <li><strong>Identical Chemical Properties:</strong><br>
  Because all members possess the identical functional group, their chemical reactions are remarkably similar. For instance, all alcohols react with sodium to liberate hydrogen gas.</li>
  <li><strong>Gradation in Physical Properties:</strong><br>
  As the carbon chain lengthens, the molecular mass and molecular surface area increase steadily. This strengthens intermolecular van der Waals attractions, resulting in a <strong>gradual increase in melting points, boiling points, and densities</strong>, alongside a progressive decrease in water solubility.</li>
</ol>
""",
  "pointsToRemember": [
    "Successive members of any homologous series differ by a —CH₂— unit.",
    "The difference in molecular mass between adjacent homologues is exactly 14 u.",
    "Members share identical chemical properties but show a gradual increase in melting and boiling points as molecular mass rises."
  ],
  "keyNotes": [
    "Exam Highlight: Know the two key differences between successive homologues: a —CH₂— group in chemical formula, and 14 u in molecular mass."
  ],
  "questions": [
    get_bank_q(40, "m14_q01"), get_bank_q(41, "m14_q02"), get_bank_q(42, "m14_q03"),
    get_bank_q(43, "m14_q04"), get_bank_q(44, "m14_q05"),
    {
      "id": "m14_q06",
      "question": "What is the exact molecular mass difference between the second member (ethanol, C₂H₅OH) and third member (propanol, C₃H₇OH) of the alcohol homologous series?",
      "options": [
        "12 u",
        "14 u",
        "16 u",
        "28 u"
      ],
      "answer": "14 u",
      "explanation": "Consecutive homologues differ by one —CH₂— group, which corresponds to 12 + 2(1) = 14 atomic mass units."
    },
    {
      "id": "m14_q07",
      "question": "Why do the boiling points of alkanes increase smoothly from methane (-161 °C) to hexane (+69 °C)?",
      "options": [
        "Higher alkanes contain ionic bonds.",
        "As molecular mass and chain length increase, the molecular surface area expands, strengthening intermolecular attraction forces.",
        "Higher alkanes absorb atmospheric heat.",
        "Carbon atoms become lighter in larger molecules."
      ],
      "answer": "As molecular mass and chain length increase, the molecular surface area expands, strengthening intermolecular attraction forces.",
      "explanation": "Greater molecular surface area strengthens intermolecular van der Waals forces, requiring more heat to boil."
    },
    {
      "id": "m14_q08",
      "question": "Which of the following pairs of compounds belong to the SAME homologous series?",
      "options": [
        "CH₄ and C₂H₄",
        "C2H6 and C3H8",
        "C₂H₅OH and CH₃COOH",
        "C₂H₂ and C2H6"
      ],
      "answer": "C2H6 and C3H8",
      "explanation": "Ethane (C2H6) and propane (C3H8) are consecutive members of the alkane homologous series (differing by —CH₂—)."
    },
    {
      "id": "m14_q09",
      "question": "Why do all members of the carboxylic acid homologous series exhibit similar chemical properties?",
      "options": [
        "They have the identical boiling point.",
        "All members contain the same functional group (—COOH) which governs chemical reactivity.",
        "They are all gases at standard temperature.",
        "They contain identical numbers of hydrogen atoms."
      ],
      "answer": "All members contain the same functional group (—COOH) which governs chemical reactivity.",
      "explanation": "Chemical reactivity is dictated by the functional group; since all carboxylic acids share —COOH, their reactions are similar."
    },
    {
      "id": "m14_q10",
      "question": "What is the fourth member of the alkene homologous series (starting with ethene as the first member)?",
      "options": [
        "Butene (C4H8)",
        "Pentene (C5H10)",
        "Hexene (C6H12)",
        "Propene (C3H6)"
      ],
      "answer": "Pentene (C5H10)",
      "explanation": "1st = Ethene (C2), 2nd = Propene (C3), 3rd = Butene (C4), 4th = Pentene (C5H10)."
    }
  ]
}
modules_11_to_20.append(m14)

# Module 15
m15 = {
  "id": "m15", "moduleNumber": 15,
  "title": "IUPAC Nomenclature of Carbon Compounds: Prefixes & Suffixes",
  "tagline": "Systematic naming of hydrocarbons, haloalkanes, alcohols, aldehydes, ketones, and acids.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>To provide unambiguous identification, the International Union of Pure and Applied Chemistry (<strong>IUPAC</strong>) established universal rules for naming carbon compounds:</p>

<h3>Step-by-Step IUPAC Naming System:</h3>
<ol>
  <li><strong>Identify the Longest Carbon Chain (Root Word):</strong>
    <ul style="margin:4px 0;">
      <li>$1\text{ Carbon} \implies \text{Meth-}$</li>
      <li>$2\text{ Carbons} \implies \text{Eth-}$</li>
      <li>$3\text{ Carbons} \implies \text{Prop-}$</li>
      <li>$4\text{ Carbons} \implies \text{But-}$</li>
      <li>$5\text{ Carbons} \implies \text{Pent-}$</li>
      <li>$6\text{ Carbons} \implies \text{Hex-}$</li>
    </ul>
  </li>
  <li><strong>Identify the Degree of Saturation (Primary Suffix):</strong>
    <ul style="margin:4px 0;">
      <li>All single bonds $\implies \text{-ane}$</li>
      <li>Contains double bond ($\text{C}=\text{C}$) $\implies \text{-ene}$</li>
      <li>Contains triple bond ($\text{C}\equiv\text{C}$) $\implies \text{-yne}$</li>
    </ul>
  </li>
  <li><strong>Attach Functional Group (Prefix or Secondary Suffix):</strong>
    <ul style="margin:4px 0;">
      <li><strong>Halogen:</strong> Added as prefix: 'chloro-', 'bromo-'. (e.g. $\text{CH}_3\text{CH}_2\text{Cl} \implies \text{Chloroethane}$).</li>
      <li><strong>Alcohol ($-OH$):</strong> Replace terminal '-e' with <strong>'-ol'</strong>. (e.g. $\text{C}_3\text{H}_7\text{OH} \implies \text{Propanol}$).</li>
      <li><strong>Aldehyde ($-CHO$):</strong> Replace terminal '-e' with <strong>'-al'</strong>. (e.g. $\text{CH}_3\text{CHO} \implies \text{Ethanal}$).</li>
      <li><strong>Ketone ($>C=O$):</strong> Replace terminal '-e' with <strong>'-one'</strong>. (e.g. $\text{CH}_3\text{COCH}_3 \implies \text{Propanone}$).</li>
      <li><strong>Carboxylic Acid ($-COOH$):</strong> Replace terminal '-e' with <strong>'-oic acid'</strong>. (e.g. $\text{CH}_3\text{COOH} \implies \text{Ethanoic acid}$).</li>
    </ul>
  </li>
</ol>
""",
  "pointsToRemember": [
    "Root words: Meth (1), Eth (2), Prop (3), But (4), Pent (5), Hex (6).",
    "Suffixes: -ane (single), -ene (double), -yne (triple), -ol (alcohol), -al (aldehyde), -one (ketone), -oic acid (carboxylic acid).",
    "Halogens are always written as prefixes (e.g., Chloropropane, Bromobutane)."
  ],
  "keyNotes": [
    "Common Trap: Methanal is HCHO (an aldehyde); Methanol is CH₃OH (an alcohol). Do not confuse '-al' with '-ol'!"
  ],
  "questions": [
    get_bank_q(45, "m15_q01"), get_bank_q(46, "m15_q02"), get_bank_q(47, "m15_q03"),
    get_bank_q(48, "m15_q04"), get_bank_q(49, "m15_q05"),
    {
      "id": "m15_q06",
      "question": "What is the systematic IUPAC name for the organic compound with formula CH₃—CH₂—CHO?",
      "options": [
        "Propanol",
        "Propanal",
        "Propanone",
        "Propanoic acid"
      ],
      "answer": "Propanal",
      "explanation": "The 3-carbon chain with a terminal aldehyde functional group (—CHO) is named propanal."
    },
    {
      "id": "m15_q07",
      "question": "What is the correct IUPAC name of the compound CH₃—CH₂—COOH?",
      "options": [
        "Ethanoic acid",
        "Propanoic acid",
        "Propanal",
        "Butanoic acid"
      ],
      "answer": "Propanoic acid",
      "explanation": "The compound contains 3 total carbon atoms with a —COOH group, which is propanoic acid."
    },
    {
      "id": "m15_q08",
      "question": "Which of the following represents the correct IUPAC name for CH₃—C≡CH?",
      "options": [
        "Propene",
        "Propyne",
        "Propane",
        "Propadiene"
      ],
      "answer": "Propyne",
      "explanation": "A 3-carbon hydrocarbon containing a carbon-carbon triple bond is named propyne."
    },
    {
      "id": "m15_q09",
      "question": "How is a halogen atom such as bromine incorporated into the systematic IUPAC name of an alkane?",
      "options": [
        "As a suffix '-bromic acid'",
        "As a prefix 'bromo-' before the alkane name (e.g. Bromoethane)",
        "As an infix '-brom-'",
        "Halogens are never included in IUPAC names"
      ],
      "answer": "As a prefix 'bromo-' before the alkane name (e.g. Bromoethane)",
      "explanation": "Halogens are treated as substituents and prefixed with 'chloro-', 'bromo-', or 'iodo-'."
    },
    {
      "id": "m15_q10",
      "question": "What is the IUPAC name for the simplest ketone, CH₃—CO—CH₃?",
      "options": [
        "Ethanone",
        "Propanone",
        "Propanal",
        "Acetone"
      ],
      "answer": "Propanone",
      "explanation": "While commonly called acetone, its systematic IUPAC name is propanone (3 carbons with a ketone group)."
    }
  ]
}
modules_11_to_20.append(m15)

# Module 16
m16 = {
  "id": "m16", "moduleNumber": 16,
  "title": "Chemical Properties: Combustion, Sooty vs Clean Flames & Air Inlets",
  "tagline": "Complete vs incomplete oxidation, thermal energetics, and burner maintenance.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Carbon and its compounds are universally used as fuels because when burned in oxygen, they undergo <strong>combustion</strong>, releasing substantial amounts of heat and light energy.</p>

<h3>1. Combustion Reactions:</h3>
<ul>
  <li><strong>Elemental Carbon:</strong>
  $$\text{C} + \text{O}_2 \longrightarrow \text{CO}_2 + \text{Heat & Light}$$
  </li>
  <li><strong>Methane (Natural Gas):</strong>
  $$\text{CH}_4 + 2\text{O}_2 \longrightarrow \text{CO}_2 + 2\text{H}_2\text{O} + \text{Heat & Light}$$
  </li>
  <li><strong>Ethanol:</strong>
  $$\text{C}_2\text{H}_5\text{OH} + 3\text{O}_2 \longrightarrow 2\text{CO}_2 + 3\text{H}_2\text{O} + \text{Heat & Light}$$
  </li>
</ul>

<h3>2. Saturated vs Unsaturated Hydrocarbon Flames:</h3>
<ul>
  <li><strong>Saturated Hydrocarbons (Alkanes):</strong> Have a lower carbon percentage and burn with a <strong>clean, blue, non-sooty flame</strong> in an adequate supply of air, resulting in complete combustion.</li>
  <li><strong>Unsaturated Hydrocarbons (Alkenes & Alkynes):</strong> Possess a significantly higher carbon-to-hydrogen ratio. They do not get fully oxidised in ordinary atmospheric air, burning with a <strong>yellow, luminous, and sooty flame</strong> that deposits unburned carbon soot on surfaces.</li>
</ul>

<div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
  <strong>🔬 Daily Life Problem: Blackening of Cooking Pots</strong>
  <p style="margin:4px 0 0 0; line-height:1.6;">At home, gas stoves have small air inlets at their base. When these air inlets get clogged with dirt or grease, the supply of oxygen is restricted. Saturated fuel gas (LPG) undergoes <strong>incomplete combustion</strong>, producing a smoky yellow flame that deposits unburnt black soot on the bottoms of cooking vessels. Cleaning the air holes restores the clean blue flame!</p>
</div>
""",
  "pointsToRemember": [
    "Complete combustion of carbon compounds produces CO₂, H₂O, heat, and light.",
    "Saturated hydrocarbons burn with a clean blue flame in sufficient oxygen.",
    "Unsaturated hydrocarbons or incomplete combustion in limited air produces a yellow sooty flame that blackens cooking vessels."
  ],
  "keyNotes": [
    "Practical Reasoning Question: Why do cooking pots get blackened at the bottom? Because air inlets of the burner are blocked, causing incomplete combustion and soot formation."
  ],
  "questions": [
    get_bank_q(50, "m16_q01"), get_bank_q(51, "m16_q02"), get_bank_q(52, "m16_q03"),
    get_bank_q(53, "m16_q04"), get_bank_q(54, "m16_q05"),
    {
      "id": "m16_q06",
      "question": "What are the chemical products formed during the complete combustion of methane (CH₄) in excess oxygen?",
      "options": [
        "Carbon monoxide and hydrogen gas",
        "Carbon dioxide, water vapour, heat, and light",
        "Methanol and ozone",
        "Carbon soot and liquid water"
      ],
      "answer": "Carbon dioxide, water vapour, heat, and light",
      "explanation": "Complete combustion yields carbon dioxide (CO₂) and water (H₂O), alongside substantial heat and light."
    },
    {
      "id": "m16_q07",
      "question": "Why does an unsaturated hydrocarbon like ethyne burn with a yellow, smoky flame when ignited in ordinary atmospheric air?",
      "options": [
        "Ethyne contains nitrogen impurities.",
        "Its high carbon percentage cannot be completely oxidised by the limited oxygen in air, leaving unburnt incandescent carbon particles (soot).",
        "Ethyne does not react with oxygen.",
        "Ethyne is colder than air."
      ],
      "answer": "Its high carbon percentage cannot be completely oxidised by the limited oxygen in air, leaving unburnt incandescent carbon particles (soot).",
      "explanation": "High carbon content leads to incomplete combustion in air; unburned glowing carbon particles produce a smoky yellow flame."
    },
    {
      "id": "m16_q08",
      "question": "While cooking, if the bottom of the cooking vessel is getting blackened on the outside, it clearly signifies that:",
      "options": [
        "The food is completely cooked.",
        "The fuel is not burning completely due to insufficient air supply through blocked burner vents.",
        "The vessel is made of pure diamond.",
        "The gas cylinder contains water."
      ],
      "answer": "The fuel is not burning completely due to insufficient air supply through blocked burner vents.",
      "explanation": "Blackening indicates soot deposition from incomplete combustion caused by blocked air holes at the burner base."
    },
    {
      "id": "m16_q09",
      "question": "Why are coal and petroleum termed fossil fuels that release smoke and acidic pollutants when burned?",
      "options": [
        "They are synthetic plastics made in chemical factories.",
        "They were formed from ancient biological biomass and contain small amounts of nitrogen and sulphur that burn into acidic oxides (NOx, SOx).",
        "They contain radioactive uranium isotopes.",
        "They only burn under water."
      ],
      "answer": "They were formed from ancient biological biomass and contain small amounts of nitrogen and sulphur that burn into acidic oxides (NOx, SOx).",
      "explanation": "Fossil fuels contain nitrogen and sulphur impurities that oxidise during combustion to form harmful acidic oxides causing acid rain."
    },
    {
      "id": "m16_q10",
      "question": "Write the balanced chemical equation for the complete combustion of ethanol (C₂H₅OH):",
      "options": [
        "C₂H₅OH + O₂ -> C₂H₄ + H₂O",
        "C₂H₅OH + 3O₂ -> 2CO₂ + 3H₂O + Heat",
        "C₂H₅OH + 2O₂ -> 2CO + 3H₂O",
        "2C₂H₅OH + O₂ -> 2CH₃COOH"
      ],
      "answer": "C₂H₅OH + 3O₂ -> 2CO₂ + 3H₂O + Heat",
      "explanation": "Complete combustion of one mole of ethanol requires 3 moles of oxygen to yield 2 moles of CO₂ and 3 moles of H₂O."
    }
  ]
}
modules_11_to_20.append(m16)

# Module 17
m17 = {
  "id": "m17", "moduleNumber": 17,
  "title": "Chemical Properties: Oxidation of Alcohols & Hydrogenation of Oils",
  "tagline": "Alkaline KMnO₄, acidified K₂Cr₂O₇, and the industrial synthesis of vegetable ghee.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<h3>1. Controlled Oxidation of Alcohols:</h3>
<p>While combustion is rapid, uncontrolled oxidation that completely degrades carbon chains into $\text{CO}_2$ and $\text{H}_2\text{O}$, carbon compounds can also undergo <strong>controlled chemical oxidation</strong>.</p>
<p>Alcohols can be converted into carboxylic acids using powerful <strong>oxidising agents</strong> (substances that supply nascent oxygen):</p>
<ul>
  <li><strong>Reagents:</strong> <strong>Alkaline Potassium Permanganate ($\text{alkaline }\text{KMnO}_4 + \Delta$)</strong> OR <strong>Acidified Potassium Dichromate ($\text{acidified }\text{K}_2\text{Cr}_2\text{O}_7 + \Delta$)</strong>.</li>
  <li><strong>Reaction:</strong>
  $$\text{CH}_3\text{CH}_2\text{OH} \xrightarrow{\text{Alkaline }\text{KMnO}_4 + \Delta \quad\text{or}\quad \text{Acidified }\text{K}_2\text{Cr}_2\text{O}_7 + \Delta} \text{CH}_3\text{COOH}$$
  Ethanol is cleanly oxidised to ethanoic acid.
  </li>
</ul>

<hr style="border:0; border-top:1px solid #cbd5e1; margin:16px 0;">

<h3>2. Addition Reaction (Hydrogenation of Vegetable Oils):</h3>
<p>Unsaturated hydrocarbons add hydrogen across their carbon-carbon multiple bonds in the presence of finely divided metal catalysts (such as <strong>Nickel, $\text{Ni}$</strong> or <strong>Palladium, $\text{Pd}$</strong>) to yield saturated hydrocarbons:</p>
<p style="text-align:center; font-weight:bold; color:#1e3a8a;">
  $R_2\text{C}=\text{C}R_2 + \text{H}_2 \xrightarrow{\text{Ni catalyst, } 200\ ^\circ\text{C}} R_2\text{CH}-\text{CH}R_2$
</p>

<h3>Industrial & Nutritional Significance:</h3>
<ul>
  <li><strong>Hydrogenation of Oils:</strong> Liquid vegetable oils (like groundnut, mustard, sunflower oil) contain long <strong>unsaturated fatty acid chains</strong> with double bonds. Treating them with hydrogen over a nickel catalyst converts them into solid, saturated fats known commercially as <strong>vanaspati ghee</strong>.</li>
  <li><strong>Health Advisory:</strong> Vegetable oils containing unsaturated fatty acids are <strong>healthy</strong> for cardiovascular consumption. In contrast, saturated animal fats and hydrogenated fats contain saturated fatty acids that elevate blood cholesterol and are harmful to heart health.</li>
</ul>
""",
  "pointsToRemember": [
    "Ethanol is oxidised to ethanoic acid using alkaline KMnO₄ or acidified K₂Cr₂O₇ as oxidising agents.",
    "Unsaturated hydrocarbons undergo addition reactions with H₂ in the presence of a Nickel (Ni) catalyst.",
    "Industrial hydrogenation converts liquid unsaturated vegetable oils into solid saturated fats (vanaspati ghee)."
  ],
  "keyNotes": [
    "Core Board Questions: Name the oxidising agents for ethanol to ethanoic acid (alkaline KMnO₄ / acidified K₂Cr₂O₇) and state the industrial use of addition reactions (hydrogenation of vegetable oils using Ni catalyst)."
  ],
  "questions": [
    get_bank_q(55, "m17_q01"), get_bank_q(59, "m17_q02"), get_bank_q(60, "m17_q03"),
    get_bank_q(61, "m17_q04"), get_bank_q(62, "m17_q05"),
    {
      "id": "m17_q06",
      "question": "Which of the following chemical reagents is used as a strong oxidising agent to convert ethanol directly into ethanoic acid?",
      "options": [
        "Concentrated hydrochloric acid",
        "Alkaline Potassium Permanganate (KMnO₄) with heat",
        "Dilute sodium hydroxide",
        "Nickel catalyst in hydrogen gas"
      ],
      "answer": "Alkaline Potassium Permanganate (KMnO₄) with heat",
      "explanation": "Alkaline KMnO₄ or acidified K₂Cr₂O₇ supplies oxygen to oxidise the alcohol group (—CH₂OH) into a carboxylic acid (—COOH)."
    },
    {
      "id": "m17_q07",
      "question": "What metal catalyst is universally employed in the industrial hydrogenation of vegetable oils into solid cooking fats?",
      "options": [
        "Iron filings",
        "Nickel (Ni) or Palladium (Pd)",
        "Copper turnings",
        "Aluminium powder"
      ],
      "answer": "Nickel (Ni) or Palladium (Pd)",
      "explanation": "Finely divided nickel (Ni) or palladium acts as a heterogeneous catalyst to add hydrogen across C=C double bonds."
    },
    {
      "id": "m17_q08",
      "question": "From a human health and nutritional standpoint, why are natural vegetable oils preferred over saturated animal fats or hydrogenated vanaspati ghee?",
      "options": [
        "Vegetable oils contain radioactive minerals.",
        "Vegetable oils contain unsaturated fatty acids which are healthy, whereas saturated fats increase blood cholesterol and cardiovascular risk.",
        "Animal fats contain zero calories.",
        "Hydrogenated fats turn into sugar in the stomach."
      ],
      "answer": "Vegetable oils contain unsaturated fatty acids which are healthy, whereas saturated fats increase blood cholesterol and cardiovascular risk.",
      "explanation": "Unsaturated fatty acids promote cardiovascular health; saturated and trans fats lead to arterial plaque and heart disease."
    },
    {
      "id": "m17_q09",
      "question": "Which of the following hydrocarbons will undergo an addition reaction with hydrogen in the presence of a nickel catalyst?",
      "options": [
        "C2H6 (Ethane)",
        "C3H8 (Propane)",
        "C3H6 (Propene)",
        "CH₄ (Methane)"
      ],
      "answer": "C3H6 (Propene)",
      "explanation": "Only unsaturated hydrocarbons (alkenes like C3H6 or alkynes) possess multiple bonds capable of undergoing addition reactions."
    },
    {
      "id": "m17_q10",
      "question": "What chemical change takes place when purple alkaline KMnO₄ is warmed with ethanol?",
      "options": [
        "Ethanol turns into pure carbon soot.",
        "The purple color of KMnO₄ discharges as it oxidises ethanol into ethanoic acid.",
        "A violent explosion occurs.",
        "KMnO₄ precipitates as metallic potassium."
      ],
      "answer": "The purple color of KMnO₄ discharges as it oxidises ethanol into ethanoic acid.",
      "explanation": "As permanganate ions transfer oxygen to ethanol, MnO4⁻ is reduced to brown MnO₂, discharging the deep purple coloration."
    }
  ]
}
modules_11_to_20.append(m17)

# Module 18
m18 = {
  "id": "m18", "moduleNumber": 18,
  "title": "Chemical Properties: Substitution Reactions of Alkanes (Chlorination)",
  "tagline": "Stepwise photochemical chlorination of methane in the presence of sunlight.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Saturated hydrocarbons (alkanes) are generally unreactive and inert towards acids, bases, and common laboratory reagents because all valence bonds are fully satisfied single covalent bonds.</p>
<p>However, in the presence of <strong>sunlight (ultraviolet light, $h\nu$)</strong>, alkanes undergo rapid reactions with halogens. Chlorine can replace the hydrogen atoms of an alkane one by one in a process called a <strong>substitution reaction</strong>.</p>

<h3>Stepwise Photochemical Chlorination of Methane:</h3>
<p>When methane and chlorine are mixed in diffused sunlight, chlorine atoms successively displace hydrogen atoms:</p>
<ol>
  <li><strong>Formation of Chloromethane (Methyl Chloride):</strong>
  $$\text{CH}_4 + \text{Cl}_2 \xrightarrow{\text{Sunlight}} \text{CH}_3\text{Cl} + \text{HCl}$$
  </li>
  <li><strong>Formation of Dichloromethane (Methylene Chloride):</strong>
  $$\text{CH}_3\text{Cl} + \text{Cl}_2 \xrightarrow{\text{Sunlight}} \text{CH}_2\text{Cl}_2 + \text{HCl}$$
  </li>
  <li><strong>Formation of Trichloromethane (Chloroform):</strong>
  $$\text{CH}_2\text{Cl}_2 + \text{Cl}_2 \xrightarrow{\text{Sunlight}} \text{CHCl}_3 + \text{HCl}$$
  </li>
  <li><strong>Formation of Tetrachloromethane (Carbon Tetrachloride):</strong>
  $$\text{CHCl}_3 + \text{Cl}_2 \xrightarrow{\text{Sunlight}} \text{CCl}_4 + \text{HCl}$$
  </li>
</ol>

<h3>Why Is It Called a Substitution Reaction?</h3>
<p>Because an atom of one element (chlorine) <strong>substitutes (takes the place of)</strong> an atom of another element (hydrogen) on the carbon chain without altering the saturated single-bond backbone.</p>
""",
  "pointsToRemember": [
    "Saturated alkanes undergo substitution reactions with chlorine in the presence of sunlight.",
    "Chlorine replaces hydrogen atoms one by one, forming CH₃Cl, CH₂Cl₂, CHCl₃ (chloroform), and CCl₄.",
    "A substitution reaction is one where an atom or group replaces another atom or group on a molecule."
  ],
  "keyNotes": [
    "Exam Point: Sunlight is essential for the chlorination of methane because UV photons provide the energy to dissociate Cl₂ into reactive free radical chlorine atoms."
  ],
  "questions": [
    get_bank_q(63, "m18_q01"), get_bank_q(64, "m18_q02"), get_bank_q(65, "m18_q03"),
    get_bank_q(66, "m18_q04"), get_bank_q(90, "m18_q05"),
    {
      "id": "m18_q06",
      "question": "What essential reaction condition is required for the chlorination of methane to proceed at room temperature?",
      "options": [
        "Complete darkness",
        "Diffused sunlight (or ultraviolet light)",
        "Presence of concentrated sulphuric acid",
        "Cryogenic cooling to -100 °C"
      ],
      "answer": "Diffused sunlight (or ultraviolet light)",
      "explanation": "Sunlight provides ultraviolet photons that break the Cl—Cl bond homolytically to initiate the free radical substitution."
    },
    {
      "id": "m18_q07",
      "question": "What is the common trivial name of trichloromethane (CHCl₃), an organic liquid historically used as a general anaesthetic?",
      "options": [
        "Carbon tetrachloride",
        "Chloroform",
        "Freon",
        "Formic acid"
      ],
      "answer": "Chloroform",
      "explanation": "Trichloromethane (CHCl₃) is universally known as chloroform, an effective solvent and historical anaesthetic."
    },
    {
      "id": "m18_q08",
      "question": "Why is the reaction between methane and chlorine classified specifically as a 'substitution reaction'?",
      "options": [
        "Methane turns into water.",
        "A chlorine atom replaces (substitutes for) a hydrogen atom bonded to carbon.",
        "Chlorine adds to a double bond.",
        "Carbon atoms are destroyed."
      ],
      "answer": "A chlorine atom replaces (substitutes for) a hydrogen atom bonded to carbon.",
      "explanation": "Substitution occurs when one atom (Cl) displaces another atom (H) from a carbon framework without breaking the chain."
    },
    {
      "id": "m18_q09",
      "question": "What final fully chlorinated product is obtained when methane reacts with excess chlorine in bright sunlight?",
      "options": [
        "CH₃Cl",
        "CH₂Cl₂",
        "CHCl₃",
        "Tetrachloromethane (Carbon tetrachloride, CCl₄)"
      ],
      "answer": "Tetrachloromethane (Carbon tetrachloride, CCl₄)",
      "explanation": "In excess chlorine, all four hydrogen atoms are successively replaced, yielding carbon tetrachloride (CCl₄)."
    },
    {
      "id": "m18_q10",
      "question": "In the reaction CH₄ + Cl₂ → CH₃Cl + HCl, what inorganic acidic gas is evolved as a byproduct?",
      "options": [
        "Sulphur dioxide (SO₂)",
        "Hydrogen chloride gas (HCl)",
        "Carbon dioxide (CO₂)",
        "Ammonia gas (NH3)"
      ],
      "answer": "Hydrogen chloride gas (HCl)",
      "explanation": "The displaced hydrogen combines with a chlorine atom to form hydrogen chloride gas (HCl)."
    }
  ]
}
modules_11_to_20.append(m18)

# Module 19
m19 = {
  "id": "m19", "moduleNumber": 19,
  "title": "Ethanol (C₂H₅OH): Reactions with Sodium, Dehydration & Toxicity",
  "tagline": "Sodium ethoxide effervescence, catalytic dehydration to ethene, and physiological effects.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p><strong>Ethanol</strong> ($\text{C}_2\text{H}_5\text{OH}$, commonly called ethyl alcohol or simply alcohol) is the second member of the alcohol series. It is a clear, colorless liquid at room temperature with a characteristic pleasant odor and a boiling point of $78\ ^\circ\text{C}$ ($351\text{ K}$). It is miscible with water in all proportions.</p>

<h3>1. Key Chemical Reactions of Ethanol:</h3>
<ul>
  <li><strong>Reaction with Sodium Metal:</strong><br>
  Ethanol reacts gently with active sodium metal to produce effervescence of <strong>hydrogen gas</strong> and a soluble salt called <strong>sodium ethoxide</strong>:
  $$2\text{Na} + 2\text{C}_2\text{H}_5\text{OH} \longrightarrow 2\text{C}_2\text{H}_5\text{ONa} + \text{H}_2(g) \uparrow$$
  This reaction is used as a laboratory test to detect alcohols.
  </li>
  <li><strong>Dehydration of Ethanol to Ethene:</strong><br>
  Heating ethanol with <strong>excess concentrated sulphuric acid ($\text{H}_2\text{SO}_4$) at $443\text{ K}$ ($170\ ^\circ\text{C}$)</strong> removes a molecule of water to produce the unsaturated alkene <strong>ethene</strong>:
  $$\text{CH}_3\text{CH}_2\text{OH} \xrightarrow{\text{Hot conc. }\text{H}_2\text{SO}_4,\; 443\text{ K}} \text{CH}_2=\text{CH}_2 + \text{H}_2\text{O}$$
  In this reaction, concentrated sulphuric acid acts as a powerful <strong>dehydrating agent</strong> (removes water from molecules).
  </li>
</ul>

<h3>2. Biological & Physiological Effects of Alcohols:</h3>
<ul>
  <li><strong>Ethanol Toxicity:</strong> Ingestion of ethanol depresses the central nervous system, impairs muscle coordination, slows reflexes, dulls cognitive judgment, and causes long-term liver cirrhosis.</li>
  <li><strong>Methanol Poisoning:</strong> Ingestion of even minute quantities of <strong>methanol ($\text{CH}_3\text{OH}$)</strong> is lethal. Methanol is oxidised in the liver by enzymes to <strong>methanal ($\text{HCHO}$)</strong>, which rapidly coagulates cell protoplasm (just as an egg coagulates when boiled) and attacks the optic nerve, causing permanent blindness and respiratory failure.</li>
  <li><strong>Denatured Alcohol:</strong> To prevent the misuse of cheap industrial alcohol for drinking, it is 'denatured' by adding poisonous <strong>methanol ($\text{CH}_3\text{OH}$)</strong>, foul-smelling <strong>pyridine</strong>, and a blue dye (copper sulphate) so it can be easily identified.</li>
</ul>
""",
  "pointsToRemember": [
    "Ethanol reacts with sodium to form sodium ethoxide and hydrogen gas: 2Na + 2C₂H₅OH → 2C₂H₅ONa + H₂.",
    "Heating ethanol with excess conc. H₂SO₄ at 443 K dehydrates it to ethene (C₂H₄); conc. H₂SO₄ acts as a dehydrating agent.",
    "Denatured alcohol contains toxic methanol and blue dye to prevent recreational consumption."
  ],
  "keyNotes": [
    "Crucial Temperature: Dehydration of ethanol requires exactly 443 K (170 °C) with excess conc. H₂SO₄ to produce ethene!"
  ],
  "questions": [
    get_bank_q(91, "m19_q01"), get_bank_q(92, "m19_q02"), get_bank_q(93, "m19_q03"),
    get_bank_q(94, "m19_q04"), get_bank_q(95, "m19_q05"),
    {
      "id": "m19_q06",
      "question": "What gas is evolved with effervescence when a small pellet of sodium metal is dropped into absolute ethanol?",
      "options": [
        "Oxygen gas (O₂)",
        "Hydrogen gas (H₂)",
        "Carbon dioxide (CO₂)",
        "Methane gas (CH₄)"
      ],
      "answer": "Hydrogen gas (H₂)",
      "explanation": "Sodium displaces hydrogen from the hydroxyl group of ethanol to produce hydrogen gas: 2Na + 2C₂H₅OH -> 2C2H5ONa + H₂."
    },
    {
      "id": "m19_q07",
      "question": "What organic product is obtained when ethanol is heated with excess concentrated sulphuric acid at 443 K (170 °C)?",
      "options": [
        "Ethanoic acid",
        "Ethene (C₂H₄)",
        "Ethyne (C₂H₂)",
        "Diethyl ether"
      ],
      "answer": "Ethene (C₂H₄)",
      "explanation": "At 443 K, conc. H₂SO₄ dehydrates ethanol to ethene: CH3CH₂OH -> CH₂=CH₂ + H₂O."
    },
    {
      "id": "m19_q08",
      "question": "Why is concentrated sulphuric acid referred to as a 'dehydrating agent' in the conversion of ethanol to ethene?",
      "options": [
        "It dissolves carbon atoms.",
        "It chemically extracts a water molecule (H₂O) from the ethanol molecule.",
        "It cools the reaction down to absolute zero.",
        "It acts as a source of oxygen."
      ],
      "answer": "It chemically extracts a water molecule (H₂O) from the ethanol molecule.",
      "explanation": "A dehydrating agent removes the elements of water (H and OH) from a compound."
    },
    {
      "id": "m19_q09",
      "question": "Why is the ingestion of even small quantities of methanol (CH₃OH) lethal to humans?",
      "options": [
        "Methanol turns into solid diamond in the stomach.",
        "Methanol is oxidised by liver enzymes to methanal (formaldehyde), which coagulates cellular protoplasm and destroys the optic nerve.",
        "Methanol removes all calcium from bones.",
        "Methanol is an alkali."
      ],
      "answer": "Methanol is oxidised by liver enzymes to methanal (formaldehyde), which coagulates cellular protoplasm and destroys the optic nerve.",
      "explanation": "Methanal coagulates biological proteins and destroys the optic nerve, causing blindness and death."
    },
    {
      "id": "m19_q10",
      "question": "What is 'denatured alcohol'?",
      "options": [
        "Pure 100% drinkable wine",
        "Commercial ethanol rendered poisonous and undrinkable by adding methanol, pyridine, and copper sulphate dye",
        "Ethanol frozen into solid ice",
        "A mixture of ethanol and sugar"
      ],
      "answer": "Commercial ethanol rendered poisonous and undrinkable by adding methanol, pyridine, and copper sulphate dye",
      "explanation": "Denaturing prevents industrial tax-free alcohol from being diverted for illegal drinking by making it toxic and foul-tasting."
    }
  ]
}
modules_11_to_20.append(m19)

# Module 20
m20 = {
  "id": "m20", "moduleNumber": 20,
  "title": "Ethanoic Acid, Esterification, Saponification, Soaps & Detergents",
  "tagline": "Fruity esters, soap micelle cleansing action, and hard water scum prevention.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<h3>1. Ethanoic Acid (Acetic Acid, $\text{CH}_3\text{COOH}$):</h3>
<ul>
  <li><strong>Vinegar:</strong> A $5\text{ to }8\%$ solution of ethanoic acid in water is called <strong>vinegar</strong>, widely used as a culinary condiment and food preservative.</li>
  <li><strong>Glacial Acetic Acid:</strong> Pure ethanoic acid has a melting point of $290\text{ K}$ ($17\ ^\circ\text{C}$). During cold winter weather, it freezes into ice-like crystalline sheets, earning the name <strong>glacial acetic acid</strong>.</li>
</ul>

<h3>2. Esterification Reaction:</h3>
<p>Ethanoic acid reacts with absolute ethanol in the presence of an acid catalyst (conc. $\text{H}_2\text{SO}_4$) to form an <strong>ester</strong> called <strong>ethyl ethanoate</strong>:</p>
<p style="text-align:center; font-weight:bold; color:#1e3a8a;">
  $\text{CH}_3\text{COOH} + \text{C}_2\text{H}_5\text{OH} \xrightarrow{\text{Conc. }\text{H}_2\text{SO}_4} \text{CH}_3\text{COOC}_2\text{H}_5 + \text{H}_2\text{O}$
</p>
<p>Esters are sweet-smelling, pleasant, and fruity substances used in perfumes, fragrances, and flavoring essences.</p>

<h3>3. Saponification (Soap Preparation):</h3>
<p>When an ester is heated with a strong alkali (sodium hydroxide), it hydrolyses back into alcohol and the sodium salt of carboxylic acid:</p>
$$\text{CH}_3\text{COOC}_2\text{H}_5 + \text{NaOH} \longrightarrow \text{CH}_3\text{COONa} + \text{C}_2\text{H}_5\text{OH}$$
<p>Because this reaction is used in the preparation of soaps from natural fats (esters of glycerol), it is called <strong>saponification</strong>.</p>

<h3>4. Reaction with Sodium Bicarbonate (Test for Acids):</h3>
$$\text{CH}_3\text{COOH} + \text{NaHCO}_3 \longrightarrow \text{CH}_3\text{COONa} + \text{H}_2\text{O} + \text{CO}_2 \uparrow$$
<p>Brisk effervescence of carbon dioxide gas that turns lime water milky confirms the presence of a carboxylic acid.</p>

<hr style="border:0; border-top:1px solid #cbd5e1; margin:16px 0;">

<h3>5. Cleansing Action of Soaps & Micelles:</h3>
<ul>
  <li><strong>Soap Molecule Structure:</strong> A soap molecule (e.g. sodium stearate, $\text{C}_{17}\text{H}_{35}\text{COO}^-\text{Na}^+$) has two distinct ends:
    <ol>
      <li>A long hydrocarbon tail: <strong>hydrophobic</strong> (water-repelling) and lipophilic (oil-loving).</li>
      <li>An ionic carboxylate head ($-\text{COO}^-\text{Na}^+$): <strong>hydrophilic</strong> (water-loving).</li>
    </ol>
  </li>
  <li><strong>Micelle Formation:</strong> In water, soap molecules assemble into spherical clusters called <strong>micelles</strong>. The hydrophobic hydrocarbon tails cluster inward, embedding themselves in the oily dirt droplet, while the ionic hydrophilic heads project outward in water. The oily dirt is trapped inside the micelle core as a stable emulsion and rinsed away by water.</li>
  <li><strong>Hard Water & Scum:</strong> Hard water contains dissolved calcium ($\text{Ca}^{2+}$) and magnesium ($\text{Mg}^{2+}$) ions. These ions react with soap to form an insoluble, curdy white precipitate called <strong>scum</strong>, wasting soap and hindering lather.</li>
  <li><strong>Synthetic Detergents:</strong> Detergents are sodium salts of alkyl sulphonic acids or ammonium salts with chloride/bromide ions. Their charged ends <strong>do not form insoluble precipitates with $\text{Ca}^{2+}$ and $\text{Mg}^{2+}$</strong>, allowing them to remain completely effective even in hard water (used in shampoos and laundry detergents).</li>
</ul>
""",
  "pointsToRemember": [
    "Vinegar is 5-8% ethanoic acid in water; pure ethanoic acid freezes at 17 °C (glacial acetic acid).",
    "Esterification: Ethanoic acid + Ethanol → Ethyl ethanoate (fruity ester) + H₂O.",
    "Soap molecules form micelles (hydrophobic tails trap oil, hydrophilic heads face water); synthetic detergents work in hard water without forming scum."
  ],
  "keyNotes": [
    "Board Distinction: Test for carboxylic acid vs alcohol: Add NaHCO₃; carboxylic acid produces brisk effervescence of CO₂ turning lime water milky; alcohol shows no reaction."
  ],
  "questions": [
    get_bank_q(96, "m20_q01"), get_bank_q(97, "m20_q02"), get_bank_q(98, "m20_q03"),
    get_bank_q(99, "m20_q04"), get_bank_q(100, "m20_q05"),
    {
      "id": "m20_q06",
      "question": "What is the commercial name given to pure anhydrous ethanoic acid because it freezes into ice-like sheets at 17 °C (290 K)?",
      "options": [
        "Vinegar",
        "Glacial acetic acid",
        "Formic acid",
        "Carbolic acid"
      ],
      "answer": "Glacial acetic acid",
      "explanation": "Pure ethanoic acid has a melting point of 17 °C (290 K) and forms crystalline ice-like sheets in cold climates, hence 'glacial'."
    },
    {
      "id": "m20_q07",
      "question": "What characteristic physical sensory property distinguishes esters from their parent carboxylic acids and alcohols?",
      "options": [
        "A pungent smell of rotten eggs",
        "A sweet, pleasant, and fruity aroma",
        "A suffocating chlorine smell",
        "Zero smell under all conditions"
      ],
      "answer": "A sweet, pleasant, and fruity aroma",
      "explanation": "Esters possess sweet, fruity aromas and are widely employed in perfumes, confectioneries, and flavourings."
    },
    {
      "id": "m20_q08",
      "question": "How can a student chemically distinguish between a sample of ethanol and a sample of ethanoic acid in two unlabelled test tubes?",
      "options": [
        "By testing electrical conductivity in dry air",
        "By adding sodium hydrogen carbonate (NaHCO₃); ethanoic acid produces brisk effervescence of CO₂ gas, while ethanol shows no reaction",
        "By boiling both liquids to 500 °C",
        "By observing their color"
      ],
      "answer": "By adding sodium hydrogen carbonate (NaHCO₃); ethanoic acid produces brisk effervescence of CO₂ gas, while ethanol shows no reaction",
      "explanation": "Ethanoic acid reacts with NaHCO₃ with brisk effervescence of CO₂ (turning lime water milky); ethanol does not react."
    },
    {
      "id": "m20_q09",
      "question": "What happens when a soap solution is used for washing clothes in hard water containing calcium and magnesium salts?",
      "options": [
        "Soap produces double the amount of lather.",
        "Calcium and magnesium ions react with soap to precipitate an insoluble, sticky white curdy substance called 'scum'.",
        "Clothes turn completely black.",
        "The water boils spontaneously."
      ],
      "answer": "Calcium and magnesium ions react with soap to precipitate an insoluble, sticky white curdy substance called 'scum'.",
      "explanation": "Ca²⁺ and Mg²⁺ precipitate soap molecules as insoluble calcium/magnesium stearate (scum), hindering cleaning."
    },
    {
      "id": "m20_q10",
      "question": "Why are synthetic detergents able to clean effectively even in hard water, unlike traditional soaps?",
      "options": [
        "Detergents contain radioactive bleach.",
        "The charged sulphonate or ammonium ends of detergents do not form insoluble precipitates with calcium and magnesium ions present in hard water.",
        "Detergents evaporate immediately upon contact with water.",
        "Detergents are completely non-polar molecules."
      ],
      "answer": "The charged sulphonate or ammonium ends of detergents do not form insoluble precipitates with calcium and magnesium ions present in hard water.",
      "explanation": "Calcium and magnesium salts of sulphonic acids are water-soluble, so detergents lather freely and clean without forming scum."
    }
  ]
}
modules_11_to_20.append(m20)

with open('scratch/ch4_part2.json', 'w', encoding='utf-8') as f:
    json.dump(modules_11_to_20, f, ensure_ascii=False, indent=2)

print(f"Successfully generated Chapter 4 Part 2 (Modules 11 to 20): {len(modules_11_to_20)} modules.")
