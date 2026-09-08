# -*- coding: utf-8 -*-
"""
CH6 Part 2: Modules 11 to 20
Control and Coordination (Class 10 Science)
"""
import json

with open('scratch/ch6_bank_questions.json', 'r', encoding='utf-8') as f:
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
  "title": "Geotropism, Hydrotropism & Chemotropism (Pollen Tube Growth)",
  "tagline": "Gravity, moisture gradients, and chemical guidance of reproductive tissues.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Plants display a range of directional growth responses (tropisms) governed by different physical and chemical environmental signals:</p>

<h3>1. Geotropism (Response to Gravity):</h3>
<p>The directional growth of plant organs in response to the pull of gravity is called <strong>geotropism</strong> (or gravitropism):</p>
<ul>
  <li><strong>Plant Roots:</strong> Grow downwards in the direction of the gravitational pull $\implies$ <strong>Positive Geotropism</strong> (anchors the plant securely in soil).</li>
  <li><strong>Plant Shoots (Stems):</strong> Grow upwards against the gravitational pull $\implies$ <strong>Negative Geotropism</strong>.</li>
</ul>

<h3>2. Hydrotropism (Response to Water):</h3>
<p>The growth movement of plant roots towards moisture or water sources is called <strong>hydrotropism</strong>. Roots exhibit <strong>positive hydrotropism</strong>. In laboratory demonstrations where seeds are germinated near a porous clay cup filled with water, root tips curve sideways towards moisture, proving that hydrotropic attraction can even override geotropic pull!</p>

<h3>3. Chemotropism (Response to Chemical Stimuli):</h3>
<p>The directional growth movement of plant parts in response to specific chemical substances is called <strong>chemotropism</strong>:</p>
<ul>
  <li><strong>Classic Example — Pollen Tube Growth:</strong> When a pollen grain lands on the compatible stigma of a flower during pollination, it germinates and develops a long <strong>pollen tube</strong>.</li>
  <li>The pollen tube grows downward through the style towards the ovary and penetrates the ovule.</li>
  <li>This directional growth is guided by chemical attractants (sugars and calcium gradients) secreted by the female ovule—a prime example of <strong>positive chemotropism</strong>!</li>
</ul>
""",
  "pointsToRemember": [
    "Geotropism is growth in response to gravity: roots show positive geotropism; shoots show negative geotropism.",
    "Hydrotropism is directional growth of roots towards moisture.",
    "Chemotropism is directional growth guided by chemicals, exemplified by the growth of the pollen tube towards the ovule."
  ],
  "keyNotes": [
    "Board Classic: Give an example of chemotropism in plants: The growth of the pollen tube towards the ovule in response to chemical secretions."
  ],
  "questions": [
    get_bank_q(86, "m11_q01"), get_bank_q(87, "m11_q02"), get_bank_q(88, "m11_q03"),
    get_bank_q(89, "m11_q04"), get_bank_q(90, "m11_q05"),
    {
      "id": "m11_q06",
      "question": "Which of the following biological phenomena is the classic example of chemotropism in flowering plants?",
      "options": [
        "Opening of flower petals at sunrise",
        "Growth of the pollen tube through the style towards the ovule in response to chemical attractants",
        "Drooping of Mimosa pudica leaves",
        "Bending of a shoot towards light"
      ],
      "answer": "Growth of the pollen tube through the style towards the ovule in response to chemical attractants",
      "explanation": "Chemical signals from the ovule guide the unidirectional growth of the pollen tube through the style."
    },
    {
      "id": "m11_q07",
      "question": "What type of tropism is displayed when plant roots grow downwards into the earth in the direction of gravitational pull?",
      "options": [
        "Negative geotropism",
        "Positive geotropism",
        "Positive phototropism",
        "Thigmotropism"
      ],
      "answer": "Positive geotropism",
      "explanation": "Growth towards the gravitational pull of the Earth is defined as positive geotropism."
    },
    {
      "id": "m11_q08",
      "question": "If a potted plant is placed horizontally on its side in a dark room, what growth curvature will be observed in its shoots and roots after a few days?",
      "options": [
        "Both shoot and roots continue growing strictly horizontal.",
        "The shoot bends upwards (negative geotropism) while roots bend downwards (positive geotropism).",
        "The shoot bends downwards and roots grow upwards.",
        "The plant stops all growth permanently."
      ],
      "answer": "The shoot bends upwards (negative geotropism) while roots bend downwards (positive geotropism).",
      "explanation": "Gravity redistribution of auxin causes the shoot to curve upward and the root to curve downward."
    },
    {
      "id": "m11_q09",
      "question": "What directional response is termed 'hydrotropism' in botanical physiology?",
      "options": [
        "Growth of plant parts in response to moisture and water gradients",
        "Growth of leaves in dry air",
        "Storage of water in stems",
        "Closing of stomata at night"
      ],
      "answer": "Growth of plant parts in response to moisture and water gradients",
      "explanation": "Hydrotropism is directional growth where moisture serves as the orienting environmental stimulus."
    },
    {
      "id": "m11_q10",
      "question": "Why does positive geotropism in roots offer an evolutionary survival advantage to land plants?",
      "options": [
        "It exposes roots to bright sunlight.",
        "It firmly anchors the plant in soil and brings roots into contact with subterranean water and mineral nutrients.",
        "It prevents flowers from opening.",
        "It turns roots green."
      ],
      "answer": "It firmly anchors the plant in soil and brings roots into contact with subterranean water and mineral nutrients.",
      "explanation": "Downwards root growth ensures mechanical stability and access to soil moisture and inorganic minerals."
    }
  ]
}
modules_11_to_20.append(m11)

# Module 12
m12 = {
  "id": "m12", "moduleNumber": 12,
  "title": "Thigmotropism & Tendril Coiling Around Supports",
  "tagline": "Touch-induced differential growth, mechanical anchoring, and climber adaptations.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Plants with weak, slender stems (such as climbing peas, bitter gourd, and grapevines) cannot stand upright on their own. To elevate their foliage towards sunlight, they produce specialized thread-like sensory organs called <strong>tendrils</strong>.</p>

<h3>What Is Thigmotropism?</h3>
<p>The directional growth response of a plant organ in reaction to <strong>physical contact or touch</strong> with a solid object is called <strong>thigmotropism</strong>. Tendrils exhibit positive thigmotropism.</p>

<h3>The Cellular Mechanism of Tendril Coiling:</h3>
<p>Tendrils are exquisitely sensitive to touch. How does a straight tendril wrap itself into a tight spiral around a fence or bamboo stake?</p>
<ol>
  <li><strong>Initial Contact:</strong> When a waving tendril brushes against a solid support, sensory mechanoreceptors detect the contact.</li>
  <li><strong>Unequal Growth Rate (Differential Elongation):</strong>
    <ul>
      <li>The side of the tendril in <strong>direct physical contact</strong> with the support experiences a reduction in growth rate.</li>
      <li>Auxin migrates away from the contact surface, accumulating on the <strong>side of the tendril away from the support</strong>.</li>
      <li>This higher auxin concentration stimulates the outer, non-touching cells to <strong>grow and elongate significantly faster</strong> than the inner touching cells.</li>
    </ul>
  </li>
  <li><strong>Coiling and Anchoring:</strong> Because the outer side grows much faster than the inner side, the tendril bends tightly inwards around the support, forming a firm helical coil like a spring. This anchors the climbing plant securely and pulls the weak stem upward!</li>
</ol>
""",
  "pointsToRemember": [
    "Thigmotropism is directional growth in response to physical contact or touch.",
    "Tendrils of climbing plants (like peas) coil around supports via differential growth.",
    "The side of the tendril in contact with the support grows slower, while the opposite side grows faster, causing the tendril to coil."
  ],
  "keyNotes": [
    "Exam Question: Explain how tendrils of a pea plant coil around a support (Side away from support grows faster than the side in contact, causing the tendril to circle and coil)."
  ],
  "questions": [
    get_bank_q(91, "m12_q01"), get_bank_q(92, "m12_q02"), get_bank_q(93, "m12_q03"),
    get_bank_q(94, "m12_q04"), get_bank_q(95, "m12_q05"),
    {
      "id": "m12_q06",
      "question": "What botanical term describes the directional growth movement of a climbing plant's tendril in response to touch?",
      "options": [
        "Chemotropism",
        "Thigmotropism",
        "Hydrotropism",
        "Geotropism"
      ],
      "answer": "Thigmotropism",
      "explanation": "Thigmotropism is the directional growth response stimulated by physical touch or contact."
    },
    {
      "id": "m12_q07",
      "question": "Why does a pea tendril coil tightly around a wooden bamboo stick when it touches it?",
      "options": [
        "The stick produces poisonous gases.",
        "The side of the tendril in contact with the support grows slower, while the outer side away from the support grows much faster, forcing the tendril to coil.",
        "The tendril melts and sticks to the wood.",
        "The plant has muscular joints."
      ],
      "answer": "The side of the tendril in contact with the support grows slower, while the outer side away from the support grows much faster, forcing the tendril to coil.",
      "explanation": "Differential growth rates between contact and non-contact sides cause the helical coiling of tendrils."
    },
    {
      "id": "m12_q08",
      "question": "Which plant hormone is responsible for redistributing away from the contact point to stimulate elongation on the outer side of the tendril?",
      "options": [
        "Auxin",
        "Abscisic acid",
        "Ethylene",
        "Insulin"
      ],
      "answer": "Auxin",
      "explanation": "Auxin concentrates on the side away from contact, promoting localized cell elongation."
    },
    {
      "id": "m12_q09",
      "question": "Which of the following plants uses modified leaf or stem tendrils showing thigmotropism to climb supports?",
      "options": [
        "Sweet pea (Pisum sativum)",
        "Banyan tree",
        "Oak tree",
        "Cactus"
      ],
      "answer": "Sweet pea (Pisum sativum)",
      "explanation": "Pea plants possess delicate leaflet tendrils that coil around trellises via thigmotropism."
    },
    {
      "id": "m12_q10",
      "question": "What mechanical advantage does the coiled, spring-like structure of a tendril provide to a climbing plant during heavy winds?",
      "options": [
        "It snaps off immediately.",
        "It acts as a flexible shock absorber, holding the plant to its support without tearing the delicate stem.",
        "It conducts electricity from the clouds.",
        "It stores water."
      ],
      "answer": "It acts as a flexible shock absorber, holding the plant to its support without tearing the delicate stem.",
      "explanation": "The helical coil acts like a mechanical spring, buffering wind gusts without ripping the climber."
    }
  ]
}
modules_11_to_20.append(m12)

# Module 13
m13 = {
  "id": "m13", "moduleNumber": 13,
  "title": "Plant Hormones (Growth Promoters): Auxins, Gibberellins & Cytokinins",
  "tagline": "Endogenous chemical regulators stimulating cell division, elongation, and shoot development.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Plant coordination is accomplished entirely through chemical messengers called <strong>phytohormones</strong> (plant hormones). Unlike animal hormones, plant hormones are not produced in specialized glands; they are synthesized in tissues and diffuse readily to target cells. Plant hormones that stimulate growth are categorized as <strong>growth promoters</strong>:</p>

<h3>1. Auxins:</h3>
<ul>
  <li>Synthesized predominantly at the <strong>growing tips of shoots and roots</strong>.</li>
  <li><strong>Key Roles:</strong>
    <ul>
      <li>Promotes <strong>cell elongation and enlargement</strong>.</li>
      <li>Coordinates <strong>phototropism</strong> (diffuses to shaded side to bend shoot towards light).</li>
      <li>Maintains <strong>apical dominance</strong> (suppresses growth of lateral axillary buds).</li>
      <li>Promotes root initiation in stem cuttings.</li>
    </ul>
  </li>
</ul>

<h3>2. Gibberellins:</h3>
<ul>
  <li>First discovered in rice seedlings infected with the 'foolish seedling' fungus <em>Gibberella fujikuroi</em>.</li>
  <li><strong>Key Roles:</strong>
    <ul>
      <li>Promotes <strong>stem elongation</strong> and inter-node growth, helping dwarf varieties grow tall.</li>
      <li>Breaks seed dormancy and initiates <strong>seed germination</strong> by activating hydrolytic enzymes like alpha-amylase.</li>
      <li>Promotes development of seedless fruits (parthenocarpy).</li>
    </ul>
  </li>
</ul>

<h3>3. Cytokinins:</h3>
<ul>
  <li>Hormones that specifically stimulate <strong>cell division (cytokinesis)</strong>.</li>
  <li><strong>Key Roles:</strong>
    <ul>
      <li>Present in highest natural concentrations in areas of <strong>rapid cell division</strong>—namely <strong>young fruits, developing seeds, and root apices</strong>.</li>
      <li>Promotes the <strong>opening of stomata</strong> even in darkness.</li>
      <li>Delays leaf aging and yellowing (<strong>senescence</strong>) by preserving chlorophyll and cellular proteins.</li>
    </ul>
  </li>
</ul>
""",
  "pointsToRemember": [
    "Auxin promotes cell elongation and mediates phototropism and apical dominance.",
    "Gibberellins promote stem growth, elongation of internodes, and seed germination.",
    "Cytokinins promote rapid cell division and are present in high concentrations in fruits and seeds; delay leaf senescence."
  ],
  "keyNotes": [
    "Board Highlight: Name the plant hormone that promotes cell division (Cytokinins), and the hormone that helps in growth of stems (Gibberellins/Auxins)."
  ],
  "questions": [
    get_bank_q(26, "m13_q01"), get_bank_q(27, "m13_q02"), get_bank_q(28, "m13_q03"),
    get_bank_q(29, "m13_q04"), get_bank_q(30, "m13_q05"),
    {
      "id": "m13_q06",
      "question": "Which plant hormone is specifically characterized by its ability to promote active cell division (cytokinesis) in plant tissues?",
      "options": [
        "Abscisic acid",
        "Cytokinins",
        "Gibberellins",
        "Ethylene"
      ],
      "answer": "Cytokinins",
      "explanation": "Cytokinins directly stimulate cytokinesis and cell division, found abundantly in dividing tissues."
    },
    {
      "id": "m13_q07",
      "question": "In which plant organs or structures are cytokinins naturally found in the highest physiological concentrations?",
      "options": [
        "In dead woody heartwood",
        "In areas of rapid cell division, such as developing fruits and seeds",
        "In old yellow falling leaves",
        "Inside dry cork bark"
      ],
      "answer": "In areas of rapid cell division, such as developing fruits and seeds",
      "explanation": "Tissues undergoing intense cellular proliferation (embryos, seeds, young fruits) have high cytokinin levels."
    },
    {
      "id": "m13_q08",
      "question": "Which plant hormone, working alongside auxin, is primarily responsible for promoting stem elongation and inter-nodal growth in plants?",
      "options": [
        "Gibberellin",
        "Abscisic acid",
        "Insulin",
        "Ptyalin"
      ],
      "answer": "Gibberellin",
      "explanation": "Gibberellins promote axial elongation of stem internodes and stimulate seed germination."
    },
    {
      "id": "m13_q09",
      "question": "Where is the plant growth hormone auxin primarily synthesized within a growing plant?",
      "options": [
        "At the shoot and root apical meristematic tips",
        "In the middle of mature woody bark",
        "Inside dead xylem vessels",
        "Exclusively in pollen grains"
      ],
      "answer": "At the shoot and root apical meristematic tips",
      "explanation": "Auxin is synthesized by dividing apical meristems at shoot and root tips and transported basipetally."
    },
    {
      "id": "m13_q10",
      "question": "Florists frequently spray cut flowers and leafy vegetables with dilute cytokinin solutions. What is the commercial purpose of this treatment?",
      "options": [
        "To make flowers wilt immediately",
        "To delay leaf senescence (aging and yellowing) and maintain fresh green appearance",
        "To destroy plant cell walls",
        "To stop all respiration"
      ],
      "answer": "To delay leaf senescence (aging and yellowing) and maintain fresh green appearance",
      "explanation": "Cytokinins retard senescence and chlorophyll breakdown, prolonging post-harvest shelf life."
    }
  ]
}
modules_11_to_20.append(m13)

# Module 14
m14 = {
  "id": "m14", "moduleNumber": 14,
  "title": "Plant Hormones (Growth Inhibitors): Abscisic Acid (ABA) & Ethylene",
  "tagline": "Dormancy induction, the drought stress hormone, and gaseous fruit ripening.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Just as an automobile requires brakes as well as an accelerator, plants require <strong>growth-inhibiting hormones</strong> to stop growth, conserve water, and survive hostile environmental conditions:</p>

<h3>1. Abscisic Acid (ABA) — The Stress Hormone:</h3>
<ul>
  <li><strong>General Role:</strong> The master growth inhibitor in plants, counteracting the effects of growth-promoting hormones (auxins and gibberellins).</li>
  <li><strong>Drought Adaptation (The 'Stress Hormone'):</strong>
    <ul>
      <li>When roots detect soil moisture deficit (drought stress), they synthesize abscisic acid and transport it rapidly through xylem to leaves.</li>
      <li>ABA signals guard cells to undergo rapid exosmosis, causing them to become flaccid and <strong>close stomatal pores immediately</strong>. This halts transpirational water loss, saving the plant from wilting.</li>
    </ul>
  </li>
  <li><strong>Wilting & Abscission:</strong> Promotes the aging, yellowing, <strong>wilting, and dropping of leaves</strong>, flowers, and ripe fruits by forming an abscission layer across the petiole base.</li>
  <li><strong>Dormancy:</strong> Inhibits seed germination and induces <strong>dormancy in seeds and buds</strong>, ensuring seeds do not sprout during harsh freezing winters.</li>
</ul>

<hr style="border:0; border-top:1px solid #cbd5e1; margin:16px 0;">

<h3>2. Ethylene ($\text{C}_2\text{H}_4$) — The Gaseous Ripening Hormone:</h3>
<ul>
  <li>Ethylene is a natural hydrocarbon gas synthesized by ripening fruits and aging tissues.</li>
  <li><strong>Fruit Ripening:</strong> Accelerates the <strong>ripening of fruits</strong> (bananas, mangoes, tomatoes) by stimulating the conversion of complex insoluble starches into sweet soluble sugars, softening pectin cell walls, and synthesizing fruit aroma esters.</li>
  <li><em>Commercial Practice:</em> Green, unripe fruits are transported across long distances in refrigerated containers and subsequently exposed to controlled ethylene gas in ripening chambers before market retail.</li>
</ul>
""",
  "pointsToRemember": [
    "Abscisic Acid (ABA) is the primary plant growth inhibitor.",
    "ABA is the 'stress hormone' that closes stomata during drought and induces leaf wilting/falling (abscission).",
    "Ethylene is the gaseous hormone that promotes commercial and natural fruit ripening."
  ],
  "keyNotes": [
    "Board Highlight: Name the plant hormone responsible for wilting of leaves (Abscisic Acid, ABA)."
  ],
  "questions": [
    get_bank_q(96, "m14_q01"), get_bank_q(97, "m14_q02"), get_bank_q(98, "m14_q03"),
    get_bank_q(99, "m14_q04"), get_bank_q(100, "m14_q05"),
    {
      "id": "m14_q06",
      "question": "Which plant hormone acts as a growth inhibitor and is directly responsible for the wilting and falling (abscission) of leaves?",
      "options": [
        "Auxin",
        "Abscisic Acid (ABA)",
        "Gibberellin",
        "Cytokinin"
      ],
      "answer": "Abscisic Acid (ABA)",
      "explanation": "Abscisic acid (ABA) is an inhibitory hormone that induces leaf yellowing, wilting, and abscission."
    },
    {
      "id": "m14_q07",
      "question": "Why is Abscisic Acid (ABA) designated as the 'stress hormone' in plant physiology?",
      "options": [
        "It causes plants to produce flowers during thunderstorms.",
        "Under drought stress, ABA triggers the rapid closure of stomata to prevent fatal transpirational water loss.",
        "It makes plants radioactive.",
        "It turns chlorophyll into red pigment."
      ],
      "answer": "Under drought stress, ABA triggers the rapid closure of stomata to prevent fatal transpirational water loss.",
      "explanation": "ABA levels surge under osmotic stress, signalling guard cells to close stomata and conserve moisture."
    },
    {
      "id": "m14_q08",
      "question": "Which unique plant hormone exists as a gaseous hydrocarbon at ambient room temperatures and promotes fruit ripening?",
      "options": [
        "Methane",
        "Ethylene (C2H4)",
        "Acetylene",
        "Carbon monoxide"
      ],
      "answer": "Ethylene (C2H4)",
      "explanation": "Ethylene is the only gaseous phytohormone, orchestrating fruit ripening and tissue senescence."
    },
    {
      "id": "m14_q09",
      "question": "How does Abscisic Acid (ABA) help seeds survive freezing winter conditions?",
      "options": [
        "By warming the seed to 40 °C",
        "By maintaining seed dormancy and preventing premature germination until favorable spring conditions arrive",
        "By digesting the seed coat",
        "By turning the seed into a bulb"
      ],
      "answer": "By maintaining seed dormancy and preventing premature germination until favorable spring conditions arrive",
      "explanation": "ABA maintains developmental arrest (dormancy) so seeds survive unfavorable winter environments."
    },
    {
      "id": "m14_q10",
      "question": "Which of the following pairs correctly matches the phytohormone with its primary physiological function?",
      "options": [
        "Auxin — Promotes leaf shedding",
        "Abscisic acid — Closes stomata and inhibits growth",
        "Cytokinin — Promotes seed dormancy",
        "Gibberellin — Causes dwarfism"
      ],
      "answer": "Abscisic acid — Closes stomata and inhibits growth",
      "explanation": "ABA is an inhibitor that induces stomatal closure and retards vegetative growth."
    }
  ]
}
modules_11_to_20.append(m14)

# Module 15
m15 = {
  "id": "m15", "moduleNumber": 15,
  "title": "Hormones in Animals: Electrical vs Chemical Signaling",
  "tagline": "Endocrine system principles, ductless glands, and universal cellular coordination.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>Animals possess a highly sophisticated, high-speed nervous system. Why, then, did nature evolve a parallel <strong>endocrine system</strong> producing chemical hormones?</p>

<h3>Limitations of Electrical Nerve Signaling:</h3>
<ol>
  <li><strong>Incomplete Innervation:</strong> Electrical impulses can only reach those individual cells that are <strong>physically connected by nerve fibers</strong>. Millions of cells in the human body have no direct nerve connections!</li>
  <li><strong>Refractory Reset Period:</strong> When a neuron generates and transmits an electrical action potential, it takes a finite amount of time (refractory period) to reset its cell membrane ionic gradients before it can fire a second impulse. Neurons cannot transmit continuous, unbroken signals.</li>
  <li><strong>Localized Action:</strong> Nerve impulses are localized point-to-point signals unsuitable for orchestrating widespread, body-wide developmental changes.</li>
</ol>

<h3>The Endocrine Alternative — Chemical Hormonal Signaling:</h3>
<ul>
  <li><strong>Ductless Glands:</strong> Endocrine glands have no tubes or ducts; they secrete their chemical messengers (<strong>hormones</strong>) directly into the circulating <strong>bloodstream</strong>.</li>
  <li><strong>Universal Cellular Reach:</strong> The bloodstream circulates everywhere, carrying hormones to every single tissue and organ in the body.</li>
  <li><strong>Target Specificity:</strong> Although a hormone bathes all cells, it acts ONLY upon specific <strong>target cells</strong> possessing complementary surface receptor proteins.</li>
  <li><strong>Sustained & Coordinated Responses:</strong> Hormones produce steady, coordinated, and long-lasting biological responses, making them ideal for governing body-wide transitions such as growth, metabolic rates, and sexual maturity at puberty.</li>
</ul>
""",
  "pointsToRemember": [
    "Electrical impulses reach only innervated cells and require refractory time to reset.",
    "Endocrine glands are ductless and secrete hormones directly into the bloodstream.",
    "Hormones travel everywhere in blood, acting specifically on target cells possessing complementary receptors.",
    "Chemical coordination is steady, prolonged, and ideal for body-wide growth and development."
  ],
  "keyNotes": [
    "Core Reasoning Question: Why is chemical signaling (hormones) necessary in animals despite having a nervous system? (Nerves do not reach all cells, and cells need time to reset after impulses; hormones reach everywhere via blood)."
  ],
  "questions": [
    get_bank_q(31, "m15_q01"), get_bank_q(32, "m15_q02"), get_bank_q(33, "m15_q03"),
    get_bank_q(34, "m15_q04"), get_bank_q(35, "m15_q05"),
    {
      "id": "m15_q06",
      "question": "What is the primary anatomical limitation of the nervous system that necessitates chemical hormonal coordination?",
      "options": [
        "Electrical impulses are too cold.",
        "Electrical impulses can only reach cells connected by nerve fibers, whereas hormones reach all body tissues via the bloodstream.",
        "Nerves cannot conduct electricity.",
        "The brain turns off after noon."
      ],
      "answer": "Electrical impulses can only reach cells connected by nerve fibers, whereas hormones reach all body tissues via the bloodstream.",
      "explanation": "Not all cells are innervated; systemic blood circulation delivers endocrine signals to all cells."
    },
    {
      "id": "m15_q07",
      "question": "Why are endocrine glands medically classified as 'ductless glands'?",
      "options": [
        "They have no blood vessels.",
        "They lack tubes or ducts, secreting their chemical hormones directly into the circulating bloodstream.",
        "They are made of cartilage.",
        "They only exist in birds."
      ],
      "answer": "They lack tubes or ducts, secreting their chemical hormones directly into the circulating bloodstream.",
      "explanation": "Unlike exocrine glands (with ducts like salivary glands), endocrine glands release hormones directly into blood capillaries."
    },
    {
      "id": "m15_q08",
      "question": "After a neuron fires an electrical nerve impulse, why can it not immediately fire another impulse without a brief delay?",
      "options": [
        "The neuron must wait for the brain to sleep.",
        "The cell membrane must restore its resting ionic concentration gradients (the refractory period).",
        "The neuron runs out of blood.",
        "The myelin sheath melts."
      ],
      "answer": "The cell membrane must restore its resting ionic concentration gradients (the refractory period).",
      "explanation": "The sodium-potassium ATPase pump requires a refractory recovery interval to reset membrane potentials."
    },
    {
      "id": "m15_q09",
      "question": "Although a hormone circulates through all blood vessels across the entire body, why does it affect ONLY specific target organs?",
      "options": [
        "The hormone is destroyed by red blood cells.",
        "Only target cells possess specific complementary molecular receptor proteins that bind that particular hormone.",
        "Target organs have higher gravity.",
        "The hormone is guided by magnetic fields."
      ],
      "answer": "Only target cells possess specific complementary molecular receptor proteins that bind that particular hormone.",
      "explanation": "Target tissue selectivity is governed by specific hormone receptors expressed on or within target cells."
    },
    {
      "id": "m15_q10",
      "question": "Which of the following biological transitions is coordinated primarily by the endocrine system rather than the nervous system?",
      "options": [
        "Jerking hand away from an open flame",
        "Blinking of eyelids when an object approaches",
        "Gradual development of secondary sexual characteristics during puberty",
        "Knee-jerk reflex"
      ],
      "answer": "Gradual development of secondary sexual characteristics during puberty",
      "explanation": "Pubertal maturation is a systemic, prolonged developmental transition orchestrated by endocrine gonadal steroids."
    }
  ]
}
modules_11_to_20.append(m15)

# Module 16
m16 = {
  "id": "m16", "moduleNumber": 16,
  "title": "The Adrenal Glands: Adrenaline & The Fight-or-Flight Response",
  "tagline": "Emergency sympathetic activation, vascular redistribution, and survival physiology.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<p>When an animal faces acute physical danger—such as an impala spotting a hunting cheetah, or a human encountering a fierce barking dog—its body must prepare instantly for survival. It must decide whether to <strong>fight</strong> the threat or <strong>flee</strong> at maximum speed. This full-body survival mobilisation is orchestrated by the hormone <strong>Adrenaline</strong>.</p>

<h3>The Adrenal Glands:</h3>
<p>Humans possess two <strong>adrenal glands</strong>, each positioned like a small cap directly on top of each kidney (suprarenal glands).</p>

<h3>Physiological Cascade Triggered by Adrenaline:</h3>
<p>Under fear, acute stress, or sudden physical danger, adrenaline is secreted directly into the bloodstream, triggering coordinated physiological adjustments:</p>
<ol>
  <li><strong>Accelerated Heartbeat:</strong> Adrenaline acts on the heart, causing it to beat faster and pump with greater force. This floods skeletal muscles with rich supplies of oxygen and glucose.</li>
  <li><strong>Vascular Shunting (Redistribution of Blood):</strong><br>
  Blood flow to non-essential organs (the digestive gut and skin) is dramatically <strong>reduced</strong> by the constriction of small arteries around these tissues. This shunts massive volumes of oxygenated blood directly towards <strong>skeletal muscles</strong> in the limbs.</li>
  <li><strong>Accelerated Breathing Rate:</strong> The respiratory rate increases rapidly due to contractions of the diaphragm and rib intercostal muscles, and bronchial air passages dilate to maximize oxygen uptake into the blood.</li>
  <li><strong>Hepatic Glycogenolysis:</strong> The liver breaks down stored glycogen, flooding the bloodstream with <strong>glucose</strong> for immediate cellular ATP generation.</li>
</ol>
<p>Together, these integrated responses prime the muscular apparatus of the animal to execute intense physical exertion (fight or flight) without immediate fatigue!</p>
""",
  "pointsToRemember": [
    "Adrenal glands (located atop the kidneys) secrete Adrenaline during emergency situations.",
    "Adrenaline prepares the body for 'Fight or Flight' by increasing heart rate, breathing rate, and blood pressure.",
    "Blood is diverted away from the digestive tract and skin toward skeletal muscles to support rapid physical action."
  ],
  "keyNotes": [
    "Board Highlight: State three physiological changes that occur when adrenaline is secreted into the blood: 1) Heart beats faster, 2) Breathing rate increases, 3) Blood is diverted from digestive tract/skin to skeletal muscles."
  ],
  "questions": [
    get_bank_q(36, "m16_q01"), get_bank_q(37, "m16_q02"), get_bank_q(38, "m16_q03"),
    get_bank_q(39, "m16_q04"), get_bank_q(40, "m16_q05"),
    {
      "id": "m16_q06",
      "question": "Where are the adrenal glands anatomically situated in the human body?",
      "options": [
        "In the base of the skull",
        "Positioned like caps on top of both kidneys",
        "Around the trachea in the neck",
        "Inside the pancreas"
      ],
      "answer": "Positioned like caps on top of both kidneys",
      "explanation": "The paired suprarenal adrenal glands sit atop the superior poles of both kidneys."
    },
    {
      "id": "m16_q07",
      "question": "What happens to the blood flow to the digestive digestive tract and skin when adrenaline is released during an acute emergency?",
      "options": [
        "Blood flow to the gut and skin increases tenfold.",
        "Blood flow to the digestive system and skin is drastically reduced, diverting blood towards skeletal muscles.",
        "Blood circulation stops completely.",
        "Blood turns into lymph."
      ],
      "answer": "Blood flow to the digestive system and skin is drastically reduced, diverting blood towards skeletal muscles.",
      "explanation": "Arteriolar vasoconstriction shunts blood from visceral organs to skeletal muscles to power fight-or-flight."
    },
    {
      "id": "m16_q08",
      "question": "Why does the human breathing rate accelerate rapidly following a sudden adrenaline surge?",
      "options": [
        "To cool the tongue down",
        "To increase blood oxygenation by dilating bronchioles and stimulating diaphragm/rib contractions",
        "To excrete urea through the mouth",
        "To prevent water loss"
      ],
      "answer": "To increase blood oxygenation by dilating bronchioles and stimulating diaphragm/rib contractions",
      "explanation": "Adrenaline stimulates respiratory centers and dilates bronchioles, maximizing oxygen delivery."
    },
    {
      "id": "m16_q09",
      "question": "Which organ is stimulated by adrenaline to break down stored glycogen into glucose to fuel active muscles?",
      "options": [
        "Kidney",
        "Liver",
        "Spleen",
        "Gall bladder"
      ],
      "answer": "Liver",
      "explanation": "Adrenaline promotes hepatic glycogenolysis, elevating blood glucose levels for muscle ATP production."
    },
    {
      "id": "m16_q10",
      "question": "Which of the following hormones is commonly termed the 'emergency hormone' or 'fight-or-flight hormone'?",
      "options": [
        "Insulin",
        "Adrenaline (Epinephrine)",
        "Thyroxin",
        "Growth hormone"
      ],
      "answer": "Adrenaline (Epinephrine)",
      "explanation": "Adrenaline prepares physiological systems for immediate emergency action (fight or flight)."
    }
  ]
}
modules_11_to_20.append(m16)

# Module 17
m17 = {
  "id": "m17", "moduleNumber": 17,
  "title": "The Thyroid Gland: Thyroxin, Iodine Requirement & Goitre",
  "tagline": "Basal metabolic rate regulation, dietary iodine trace needs, and preventing neck swellings.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<h3>1. The Thyroid Gland and Thyroxin:</h3>
<p>The <strong>Thyroid Gland</strong> is a butterfly-shaped endocrine organ situated in the neck, wrapped around the front of the trachea (windpipe) just below the larynx. It synthesizes and secretes the hormone <strong>Thyroxin</strong>:</p>
<ul>
  <li><strong>Function of Thyroxin:</strong> Thyroxin regulates the <strong>metabolism of carbohydrates, fats, and proteins</strong> in the body. By governing the rate at which cells consume oxygen and burn fuels, it controls the <strong>Basal Metabolic Rate (BMR)</strong>, ensuring the optimal balance for physical growth and tissue development.</li>
</ul>

<h3>2. The Indispensable Role of Iodine:</h3>
<p><strong>Iodine is chemically essential for the synthesis of thyroxin</strong>. The thyroid gland cannot manufacture thyroxin molecules without incorporating dietary iodine atoms.</p>

<h3>3. Iodine Deficiency and Goitre:</h3>
<ul>
  <li><strong>Pathology:</strong> In regions where soil and drinking water lack iodine (notably in mountainous and sub-Himalayan inland areas), people consume diets deficient in iodine.</li>
  <li>When the thyroid gland cannot synthesize enough thyroxin, the pituitary gland continuously releases thyroid-stimulating hormone (TSH) to force the thyroid to work harder.</li>
  <li>In response, the thyroid follicular cells proliferate massively, causing the entire thyroid gland to enlarge into a prominent swelling in the neck called <strong>Goitre</strong>.</li>
  <li><strong>Prevention:</strong> Goitre is easily and universally prevented by consuming <strong>iodised table salt</strong> ($NaCl$ fortified with trace amounts of potassium iodate, $\text{KIO}_3$), providing the tiny daily requirement ($150\ \mu\text{g}$) of iodine.</li>
</ul>
""",
  "pointsToRemember": [
    "Thyroid gland in the neck secretes Thyroxin, which regulates carbohydrate, protein, and fat metabolism.",
    "Iodine is essential for the synthesis of thyroxin in the thyroid gland.",
    "Deficiency of iodine in the diet leads to enlargement of the thyroid gland, causing Goitre (swollen neck).",
    "Iodised salt is recommended to prevent goitre."
  ],
  "keyNotes": [
    "Board Question Classic: Why is the use of iodised salt advised? (Iodine is essential for thyroid gland to make thyroxin; lack of iodine causes goitre with a swollen neck)."
  ],
  "questions": [
    get_bank_q(41, "m17_q01"), get_bank_q(42, "m17_q02"), get_bank_q(43, "m17_q03"),
    get_bank_q(44, "m17_q04"), get_bank_q(45, "m17_q05"),
    {
      "id": "m17_q06",
      "question": "Why is the mandatory consumption of iodised table salt universally recommended by public health authorities?",
      "options": [
        "Iodine makes table salt taste sweeter.",
        "Iodine is chemically essential for the thyroid gland to synthesize thyroxin, preventing goitre.",
        "Iodine turns salt into a powerful antibiotic.",
        "Iodine prevents dental caries directly."
      ],
      "answer": "Iodine is chemically essential for the thyroid gland to synthesize thyroxin, preventing goitre.",
      "explanation": "Iodine is a necessary cofactor for thyroxin synthesis; deficiency causes thyroid hypertrophy (goitre)."
    },
    {
      "id": "m17_q07",
      "question": "What is the characteristic visible clinical symptom of goitre caused by dietary iodine deficiency?",
      "options": [
        "A dramatically swollen and enlarged neck",
        "Loss of fingernails",
        "Curvature of the spine",
        "Yellowing of the teeth"
      ],
      "answer": "A dramatically swollen and enlarged neck",
      "explanation": "Compensatory hypertrophy of the thyroid gland produces a visible cervical neck swelling."
    },
    {
      "id": "m17_q08",
      "question": "What is the primary physiological function of the hormone thyroxin secreted by the thyroid gland?",
      "options": [
        "It regulates the metabolism of carbohydrates, fats, and proteins for optimal growth and basal metabolic rate (BMR).",
        "It digests milk proteins in the stomach.",
        "It produces white blood cells.",
        "It prevents blood from clotting."
      ],
      "answer": "It regulates the metabolism of carbohydrates, fats, and proteins for optimal growth and basal metabolic rate (BMR).",
      "explanation": "Thyroxin controls cellular metabolic rate, regulating oxygen consumption and heat production."
    },
    {
      "id": "m17_q09",
      "question": "In which geographical regions is dietary iodine deficiency and endemic goitre historically most prevalent?",
      "options": [
        "Coastal coastal fishing communities",
        "Mountainous inland regions (such as the Himalayas) where rainwater has leached iodine from soil",
        "Deep underground diamond mines",
        "Desert salt flats"
      ],
      "answer": "Mountainous inland regions (such as the Himalayas) where rainwater has leached iodine from soil",
      "explanation": "Glacial leaching strips iodine from mountain soils and waters, causing endemic goitre in local populations."
    },
    {
      "id": "m17_q10",
      "question": "Where is the thyroid gland anatomically situated in the human body?",
      "options": [
        "At the base of the brain",
        "In the neck region, attached to the front of the trachea",
        "On top of the kidneys",
        "Inside the pelvic cavity"
      ],
      "answer": "In the neck region, attached to the front of the trachea",
      "explanation": "The bi-lobed thyroid gland wraps around the anterior and lateral surfaces of the trachea."
    }
  ]
}
modules_11_to_20.append(m17)

# Module 18
m18 = {
  "id": "m18", "moduleNumber": 18,
  "title": "The Pituitary Gland: Growth Hormone, Dwarfism & Gigantism",
  "tagline": "The master endocrine gland, somatotropin regulation, and stature disorders.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<h3>1. The Pituitary Gland — The 'Master Gland':</h3>
<p>The <strong>Pituitary Gland</strong> is a small, pea-sized endocrine organ situated at the base of the brain, suspended directly from the hypothalamus. It is traditionally designated the <strong>'master gland'</strong> of the endocrine system because its trophic hormones control and regulate the secretions of other endocrine glands (including the thyroid, adrenal cortex, and gonads).</p>

<h3>2. Growth Hormone (GH / Somatotropin):</h3>
<p>One of the vital hormones secreted by the anterior pituitary is <strong>Growth Hormone</strong>:</p>
<ul>
  <li><strong>Function:</strong> Regulates the growth, cellular division, and development of all tissues in the body, stimulating the elongation of long bones (femur, tibia, humerus) and skeletal muscles during childhood and adolescence.</li>
</ul>

<h3>3. Clinical Disorders of Growth Hormone Secretion:</h3>
<ul>
  <li><strong>Dwarfism (Hyposecretion in Childhood):</strong>
    <ul>
      <li>Caused by a <strong>deficiency (hyposecretion) of growth hormone during childhood</strong>.</li>
      <li>The epiphyseal growth plates of long bones close prematurely.</li>
      <li>The individual remains abnormally short in stature, but body proportions and mental intelligence remain normal.</li>
    </ul>
  </li>
  <li><strong>Gigantism (Hypersecretion in Childhood):</strong>
    <ul>
      <li>Caused by <strong>excessive secretion (hypersecretion) of growth hormone during childhood</strong> (often due to a benign pituitary tumour).</li>
      <li>Long bones grow to extraordinary lengths before the growth plates fuse.</li>
      <li>The individual attains an abnormally immense height (frequently exceeding $2.1 - 2.4\text{ metres}$ or $7 - 8\text{ feet}$!).</li>
    </ul>
  </li>
</ul>
""",
  "pointsToRemember": [
    "The pituitary gland (master gland) at the base of the brain secretes Growth Hormone (GH).",
    "Growth hormone regulates the growth and development of bones and tissues.",
    "Deficiency of GH in childhood causes Dwarfism (very short stature); excess GH causes Gigantism (abnormally tall stature)."
  ],
  "keyNotes": [
    "Board Highlight: State the consequence of: 1) Deficiency of growth hormone in childhood (Dwarfism), 2) Excessive secretion of growth hormone in childhood (Gigantism)."
  ],
  "questions": [
    get_bank_q(76, "m18_q01"), get_bank_q(77, "m18_q02"), get_bank_q(78, "m18_q03"),
    get_bank_q(79, "m18_q04"), get_bank_q(80, "m18_q05"),
    {
      "id": "m18_q06",
      "question": "Which endocrine gland located at the base of the brain secretes Growth Hormone to regulate developmental stature?",
      "options": [
        "Thyroid gland",
        "Pituitary gland",
        "Adrenal gland",
        "Pancreas"
      ],
      "answer": "Pituitary gland",
      "explanation": "The anterior lobe of the pituitary gland synthesizes and releases Growth Hormone (somatotropin)."
    },
    {
      "id": "m18_q07",
      "question": "What clinical medical condition results from a severe deficiency of Growth Hormone during childhood?",
      "options": [
        "Gigantism",
        "Dwarfism (extremely stunted physical stature)",
        "Goitre",
        "Diabetes mellitus"
      ],
      "answer": "Dwarfism (extremely stunted physical stature)",
      "explanation": "Childhood hyposecretion of growth hormone impairs bone elongation, causing pituitary dwarfism."
    },
    {
      "id": "m18_q08",
      "question": "What clinical condition is caused by an abnormal hypersecretion (excess) of Growth Hormone during early childhood before epiphyseal plates fuse?",
      "options": [
        "Gigantism (abnormally tall vertical height)",
        "Dwarfism",
        "Cretinism",
        "Addison's disease"
      ],
      "answer": "Gigantism (abnormally tall vertical height)",
      "explanation": "Childhood hypersecretion of GH stimulates excessive long-bone elongation, causing gigantism."
    },
    {
      "id": "m18_q09",
      "question": "Why is the pituitary gland traditionally referred to as the 'master gland' of the endocrine system?",
      "options": [
        "It is the largest gland in the body.",
        "It secretes trophic hormones that regulate and stimulate the activity of many other endocrine glands (thyroid, adrenals, gonads).",
        "It produces all digestive enzymes.",
        "It filters blood before the heart."
      ],
      "answer": "It secretes trophic hormones that regulate and stimulate the activity of many other endocrine glands (thyroid, adrenals, gonads).",
      "explanation": "Pituitary trophic hormones (TSH, ACTH, FSH, LH) control the secretory output of secondary target glands."
    },
    {
      "id": "m18_q10",
      "question": "Which neuroendocrine structure in the brain directly controls the release of pituitary hormones via releasing and inhibiting factors?",
      "options": [
        "Cerebellum",
        "Hypothalamus",
        "Medulla oblongata",
        "Pons"
      ],
      "answer": "Hypothalamus",
      "explanation": "The hypothalamus secretes releasing hormones (e.g. GHRH) that instruct the pituitary gland."
    }
  ]
}
modules_11_to_20.append(m18)

# Module 19
m19 = {
  "id": "m19", "moduleNumber": 19,
  "title": "The Pancreas: Insulin, Blood Glucose Regulation & Diabetes Mellitus",
  "tagline": "Islets of Langerhans beta cells, glucose uptake, and daily insulin therapeutics.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<h3>1. The Pancreas — A Heterocrine (Dual) Gland:</h3>
<p>The <strong>Pancreas</strong> is located in the abdominal cavity just behind the stomach. It is a dual organ possessing both exocrine functions (secreting pancreatic digestive juice via the pancreatic duct) and endocrine functions (secreting hormones directly into blood).</p>

<h3>2. The Endocrine Secretion — Insulin:</h3>
<ul>
  <li>Specialized micro-organs embedded within pancreatic tissue, called the <strong>Islets of Langerhans</strong>, contain beta ($\beta$) cells that synthesize and secrete the protein hormone <strong>Insulin</strong>.</li>
  <li><strong>Function of Insulin:</strong> Insulin acts as the master regulator that <strong>lowers blood glucose levels</strong>:
    <ol>
      <li>Stimulates body cells (especially skeletal muscles and adipose tissue) to absorb glucose from circulating blood.</li>
      <li>Stimulates the liver and muscles to convert excess glucose into <strong>glycogen</strong> (glycogenesis).</li>
    </ol>
  </li>
</ul>

<h3>3. Diabetes Mellitus:</h3>
<ul>
  <li><strong>Cause:</strong> When the pancreas fails to secrete adequate amounts of insulin, or when body cells become resistant to insulin, glucose cannot enter cells and remains trapped in the bloodstream.</li>
  <li><strong>Pathology:</strong> Blood sugar rises to dangerously high levels (hyperglycaemia). The kidneys filter out excess glucose, causing glucose to appear in the urine.</li>
  <li><strong>Symptoms:</strong> Extreme thirst (polydipsia), frequent urination (polyuria), weight loss, and chronic fatigue.</li>
  <li><strong>Management:</strong> Patients with severe diabetes (Type 1) are treated by regular, daily <strong>injections of insulin</strong>.
    <p><em>Why must insulin be injected rather than swallowed as a pill?</em> Insulin is a protein. If taken orally, stomach pepsin and pancreatic enzymes would digest insulin into harmless amino acids before it could enter the bloodstream!</p>
  </li>
</ul>
""",
  "pointsToRemember": [
    "Pancreatic Islets of Langerhans secrete the hormone Insulin.",
    "Insulin lowers blood glucose levels by promoting cellular glucose uptake and glycogen storage.",
    "Deficiency of insulin causes Diabetes mellitus (high blood sugar), treated by insulin injections.",
    "Insulin must be injected because being a protein, it would be digested in the gut if swallowed."
  ],
  "keyNotes": [
    "Board Highlight: Name the hormone that regulates blood sugar levels (Insulin, secreted by the pancreas). Explain why diabetic patients are treated with insulin injections."
  ],
  "questions": [
    get_bank_q(81, "m19_q01"), get_bank_q(82, "m19_q02"), get_bank_q(83, "m19_q03"),
    get_bank_q(84, "m19_q04"), get_bank_q(85, "m19_q05"),
    {
      "id": "m19_q06",
      "question": "Which hormone produced by the beta cells of the pancreas is responsible for lowering and regulating blood glucose levels?",
      "options": [
        "Glucagon",
        "Insulin",
        "Thyroxin",
        "Adrenaline"
      ],
      "answer": "Insulin",
      "explanation": "Insulin promotes cellular uptake and storage of glucose, lowering blood sugar levels."
    },
    {
      "id": "m19_q07",
      "question": "What metabolic disease is caused by an inadequate secretion or malfunctioning of insulin by the pancreas?",
      "options": [
        "Goitre",
        "Diabetes mellitus",
        "Dwarfism",
        "Meningitis"
      ],
      "answer": "Diabetes mellitus",
      "explanation": "Insufficient insulin results in hyperglycaemia and glucose excretion in urine, diagnosed as diabetes mellitus."
    },
    {
      "id": "m19_q08",
      "question": "Why must insulin prescribed to diabetic patients be administered via subcutaneous injection rather than as an oral pill?",
      "options": [
        "Pills taste too bitter to swallow.",
        "Insulin is a protein hormone; if swallowed, gastric pepsin and intestinal proteases would digest it into amino acids before it could be absorbed.",
        "Injections cool the blood down.",
        "Insulin only dissolves in needles."
      ],
      "answer": "Insulin is a protein hormone; if swallowed, gastric pepsin and intestinal proteases would digest it into amino acids before it could be absorbed.",
      "explanation": "Being a polypeptide, oral insulin is degraded by digestive enzymes in the stomach and small intestine."
    },
    {
      "id": "m19_q09",
      "question": "What specialized clusters of endocrine cells inside the human pancreas secrete insulin and glucagon?",
      "options": [
        "Bowman's capsules",
        "Islets of Langerhans",
        "Gastric pits",
        "Alveoli"
      ],
      "answer": "Islets of Langerhans",
      "explanation": "The Islets of Langerhans are the endocrine micro-organs of the pancreas."
    },
    {
      "id": "m19_q10",
      "question": "How does insulin facilitate the storage of surplus glucose inside the human liver and skeletal muscles?",
      "options": [
        "It converts glucose into urea.",
        "It stimulates the polymerisation of glucose into glycogen (glycogenesis).",
        "It evaporates glucose into air.",
        "It turns glucose into bone calcium."
      ],
      "answer": "It stimulates the polymerisation of glucose into glycogen (glycogenesis).",
      "explanation": "Insulin activates glycogen synthase to convert circulating glucose into storage glycogen."
    }
  ]
}
modules_11_to_20.append(m19)

# Module 20
m20 = {
  "id": "m20", "moduleNumber": 20,
  "title": "Gonadal Hormones (Testosterone, Oestrogen) & Feedback Mechanisms",
  "tagline": "Pubertal maturation and the homeostatic negative feedback loops governing endocrine secretion.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<h3>1. Gonadal Hormones at Puberty:</h3>
<p>During puberty (adolescence), the brain's pituitary gland secretes gonadotropins that stimulate the primary reproductive organs (gonads) to produce sex hormones:</p>
<ul>
  <li><strong>Testes in Males — Testosterone:</strong>
    <ul>
      <li>Secreted by the Leydig cells of the testes.</li>
      <li>Stimulates the <strong>formation of sperm</strong> (spermatogenesis).</li>
      <li>Regulates the development of <strong>male secondary sexual characteristics</strong>: deepening of the voice, growth of facial, pubic, and body hair, broadening of shoulders, and increased muscle mass.</li>
    </ul>
  </li>
  <li><strong>Ovaries in Females — Oestrogen and Progesterone:</strong>
    <ul>
      <li><strong>Oestrogen:</strong> Stimulates egg maturation and regulates <strong>female secondary sexual characteristics</strong> (development of mammary glands/breasts, feminine fat deposition on hips, widening of pelvis).</li>
      <li><strong>Progesterone:</strong> Regulates the thickening of the uterine endometrium, controls the menstrual cycle, and maintains pregnancy.</li>
    </ul>
  </li>
</ul>

<hr style="border:0; border-top:1px solid #cbd5e1; margin:16px 0;">

<h3>2. The Feedback Mechanism of Hormone Regulation:</h3>
<p>Hormones must be released in <strong>precise quantities at exact times</strong>. Excess or deficiency leads to severe pathology. How does the body regulate this timing and amount? Through <strong>Negative Feedback Mechanisms</strong>:</p>

<h3>Example — Blood Sugar Feedback Control:</h3>
<ol>
  <li>After a meal rich in carbohydrates, glucose is absorbed into the blood, causing <strong>blood sugar levels to rise</strong>.</li>
  <li>This elevated glucose concentration is detected directly by the beta cells of the <strong>pancreas</strong>.</li>
  <li>In response, the pancreas secretes <strong>more insulin</strong> into the bloodstream.</li>
  <li>Insulin stimulates cells to absorb glucose, and causes the liver to store glucose as glycogen, causing <strong>blood sugar levels to fall back to normal</strong>.</li>
  <li>As blood glucose drops back to normal baseline, the stimulus is removed; the pancreas detects this decline and <strong>reduces/shuts off further insulin secretion</strong>.</li>
</ol>
<p>This closed negative feedback loop ensures that hormone levels oscillate within tight, healthy homeostatic boundaries!</p>
""",
  "pointsToRemember": [
    "Testosterone (from testes) regulates sperm production and male secondary sexual characteristics at puberty.",
    "Oestrogen and Progesterone (from ovaries) regulate egg maturation, female secondary sexual traits, and the menstrual cycle.",
    "Negative feedback mechanisms regulate the timing and amount of hormone released (e.g. blood sugar level controls insulin secretion)."
  ],
  "keyNotes": [
    "Board Highlight: Explain how the timing and amount of hormone release are regulated using the feedback mechanism of insulin as an example."
  ],
  "questions": [
    get_bank_q(86, "m20_q01"), get_bank_q(87, "m20_q02"), get_bank_q(88, "m20_q03"),
    get_bank_q(89, "m20_q04"), get_bank_q(90, "m20_q05"),
    {
      "id": "m20_q06",
      "question": "Which male sex hormone secreted by the testes regulates sperm production and the emergence of secondary sexual traits during puberty?",
      "options": [
        "Oestrogen",
        "Testosterone",
        "Insulin",
        "Thyroxin"
      ],
      "answer": "Testosterone",
      "explanation": "Testosterone coordinates male spermatogenesis and secondary sexual traits at puberty."
    },
    {
      "id": "m20_q07",
      "question": "Which female hormone secreted by the ovaries is responsible for regulating breast development and the menstrual cycle?",
      "options": [
        "Testosterone",
        "Oestrogen",
        "Adrenaline",
        "Growth hormone"
      ],
      "answer": "Oestrogen",
      "explanation": "Oestrogen coordinates female pubertal maturation and regulates the menstrual cycle."
    },
    {
      "id": "m20_q08",
      "question": "How does the negative feedback mechanism regulate the secretion of insulin when blood glucose levels fall back to normal?",
      "options": [
        "The pancreas secretes ten times more insulin.",
        "As blood glucose levels decline, the stimulus to beta cells ceases, causing the pancreas to reduce and shut off further insulin release.",
        "The liver destroys the pancreas.",
        "The stomach produces bile."
      ],
      "answer": "As blood glucose levels decline, the stimulus to beta cells ceases, causing the pancreas to reduce and shut off further insulin release.",
      "explanation": "Negative feedback ensures that once the desired setpoint is reached, hormone production decreases."
    },
    {
      "id": "m20_q09",
      "question": "What would happen if the endocrine feedback mechanism regulating insulin secretion failed completely and insulin continued pumping unabated?",
      "options": [
        "Blood glucose would rise to infinity.",
        "Blood glucose would drop precipitously to dangerously low levels (hypoglycaemic shock/coma).",
        "The heart would turn into bone.",
        "No change would be observed."
      ],
      "answer": "Blood glucose would drop precipitously to dangerously low levels (hypoglycaemic shock/coma).",
      "explanation": "Uncontrolled insulin secretion removes all glucose from blood, starving brain neurons of fuel."
    },
    {
      "id": "m20_q10",
      "question": "Which pair of organs produce both gamete sex cells and endocrine steroid hormones?",
      "options": [
        "Kidneys and Liver",
        "Testes and Ovaries",
        "Thyroid and Pituitary",
        "Stomach and Pancreas"
      ],
      "answer": "Testes and Ovaries",
      "explanation": "The gonads (testes and ovaries) serve dual roles: gamete production and sex hormone secretion."
    }
  ]
}
modules_11_to_20.append(m20)

with open('scratch/ch6_part2.json', 'w', encoding='utf-8') as f:
    json.dump(modules_11_to_20, f, ensure_ascii=False, indent=2)

print(f"Successfully generated Chapter 6 Part 2 (Modules 11 to 20): {len(modules_11_to_20)} modules.")
