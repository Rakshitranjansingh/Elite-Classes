import json

bank = json.load(open("scratch/ch13_bank_questions.json", "r", encoding="utf-8"))

def get_bank(start, count):
    res = []
    for q in bank[start:start+count]:
        opts = []
        ans_text = ""
        corr_key = q.get("correct_option", "")
        for opt in q.get("options", []):
            if isinstance(opt, dict):
                text = opt.get("text", "")
                opts.append(text)
                if opt.get("key") == corr_key:
                    ans_text = text
            else:
                opts.append(opt)
        if not ans_text and q.get("answer"):
            ans_text = q["answer"]
        if not ans_text and opts:
            ans_text = opts[0]
        res.append({
            "question": q["question"],
            "options": opts,
            "answer": ans_text,
            "explanation": q.get("explanation", "")
        })
    return res

modules_p2 = []

# Module 11
m11_questions = get_bank(50, 5) + [
    {
        "question": "Which ecological pyramid is ALWAYS upright in all natural ecosystems without any exception?",
        "options": [
            "Pyramid of numbers",
            "Pyramid of biomass",
            "Pyramid of energy",
            "Pyramid of species diversity"
        ],
        "answer": "Pyramid of energy",
        "explanation": "Because energy is irreversibly lost as heat at each trophic level according to the Second Law of Thermodynamics, energy at a higher trophic level is always less than at the lower level."
    },
    {
        "question": "An inverted pyramid of biomass (where producers have lower biomass than consumers) is characteristically observed in:",
        "options": [
            "A dense tropical rainforest",
            "A grassland savannah",
            "An open aquatic/oceanic ecosystem with phytoplankton and zooplankton",
            "A desert cactus scrub"
        ],
        "answer": "An open aquatic/oceanic ecosystem with phytoplankton and zooplankton",
        "explanation": "In aquatic ecosystems, the standing biomass of phytoplankton at any instant is small due to rapid turnover and short lifespan, yet it supports a larger biomass of zooplankton and fish."
    },
    {
        "question": "What is represented along the horizontal bar of an ecological pyramid of biomass?",
        "options": [
            "The total number of individual organisms",
            "The total dry weight of organic living matter present at each trophic level",
            "The velocity of water currents",
            "The percentage of non-biodegradable chemicals"
        ],
        "answer": "The total dry weight of organic living matter present at each trophic level",
        "explanation": "Biomass measures the total living organic material (dry mass) accumulated per unit area at each trophic level."
    },
    {
        "question": "In a single large oak tree supporting thousands of herbivorous insects and dozens of birds, the pyramid of numbers is:",
        "options": [
            "Strictly upright",
            "Inverted or spindle-shaped",
            "Completely flat",
            "Circular"
        ],
        "answer": "Inverted or spindle-shaped",
        "explanation": "One single producer (oak tree) supports many primary consumers (insects), creating an inverted base in the pyramid of numbers."
    },
    {
        "question": "Why does a carnivore have to consume several times its own body mass in herbivore prey over its lifetime?",
        "options": [
            "Because 90% of food consumed is expended in metabolic maintenance, heat loss, and locomotion",
            "Because herbivores contain zero calories",
            "Because meat cannot be stored as fat",
            "Because digestive acids destroy 99% of amino acids"
        ],
        "answer": "Because 90% of food consumed is expended in metabolic maintenance, heat loss, and locomotion",
        "explanation": "Due to low ecological efficiency (~10%), large quantities of biomass must be consumed to yield a small increment in predator tissue."
    }
]

modules_p2.append({
    "id": "m11",
    "moduleNumber": 11,
    "title": "Ecological Pyramids: Energy, Biomass & Numbers in Ecosystems",
    "tagline": "Trophic stratification, upright vs inverted pyramids, and thermodynamic limits.",
    "readingTimeMins": 5,
    "theoryHtml": """
<div class=\"module-content\">
  <div class=\"theory-section\">
    <h4>1. Concept of Ecological Pyramids</h4>
    <p>An <strong>ecological pyramid</strong> is a graphical representation of trophic structure and trophic function in an ecosystem, with producers forming the broad base and top carnivores forming the tapering apex.</p>

    <h4>2. Types of Ecological Pyramids</h4>
    <ul>
      <li><strong>Pyramid of Energy:</strong> Displays the total energy flux entering each trophic level over time. <em>Crucial Law:</em> The pyramid of energy is <strong>always strictly upright</strong> in all ecosystems because energy transfer between trophic levels is governed by Lindeman's 10% law and thermodynamic dissipation.</li>
      <li><strong>Pyramid of Numbers:</strong> Displays the count of individual organisms at each trophic level. Generally upright in grasslands and ponds, but can be spindle-shaped or inverted in a tree ecosystem (1 tree $\\to$ hundreds of birds $\\to$ thousands of parasites).</li>
      <li><strong>Pyramid of Biomass:</strong> Displays the total dry weight of living organic matter (biomass) at each level. Upright in terrestrial ecosystems, but often <strong>inverted in aquatic ecosystems</strong> where small standing crop of phytoplankton supports a heavier biomass of zooplankton and fish.</li>
    </ul>
  </div>
</div>
""",
    "pointsToRemember": [
        "Ecological pyramids graphically depict numbers, biomass, or energy across trophic levels.",
        "The pyramid of energy is always strictly upright due to thermodynamic dissipation of heat at each step.",
        "The pyramid of biomass in open aquatic systems can be inverted due to rapid turnover of phytoplankton."
    ],
    "keyNotes": [
        "The pyramid of energy is universally upright because energy diminishes by ~90% at each trophic step; biomass and numbers pyramids may vary based on habitat."
    ],
    "questions": m11_questions
})

# Module 12
m12_questions = get_bank(55, 5) + [
    {
        "question": "Which of the following interventions is essential to maintain an artificial aquarium ecosystem?",
        "options": [
            "Adding synthetic plastic flowers",
            "Regular water filtration/cleaning and providing fish food externally",
            "Boiling the water daily",
            "Exposing the aquarium to continuous UV-C radiation"
        ],
        "answer": "Regular water filtration/cleaning and providing fish food externally",
        "explanation": "Because an aquarium is a closed, artificial mini-ecosystem lacking natural mineral cycling, excess food and fish ammonia excreta must be removed mechanically."
    },
    {
        "question": "Why can an aquarium not be left uncleaned for several weeks without causing fish mortality?",
        "options": [
            "Fish run out of water molecules",
            "Decomposition of uneaten fish food and excretory waste depletes dissolved oxygen and produces toxic ammonia",
            "Glass walls absorb oxygen from water",
            "Aquarium pebbles turn into acid"
        ],
        "answer": "Decomposition of uneaten fish food and excretory waste depletes dissolved oxygen and produces toxic ammonia",
        "explanation": "In an uncleaned artificial tank, decomposing wastes consume dissolved oxygen and accumulate toxic nitrogenous wastes (ammonia/nitrites), asphyxiating aquatic organisms."
    },
    {
        "question": "Why does a natural pond remain clean and biologically balanced without human maintenance?",
        "options": [
            "Ponds are completely isolated from biological organisms",
            "Ponds contain diverse native decomposers, aquatic plants, and micro-fauna that establish self-regulating biogeochemical cycles",
            "Rainfall in ponds contains bleach",
            "Pond fish do not produce waste"
        ],
        "answer": "Ponds contain diverse native decomposers, aquatic plants, and micro-fauna that establish self-regulating biogeochemical cycles",
        "explanation": "A natural pond is a mature, self-sustaining ecosystem with balanced producers, consumers, and decomposer communities."
    },
    {
        "question": "Which aquatic organisms in a freshwater pond oxygenate the water during daylight hours?",
        "options": [
            "Benthic scavenger catfish",
            "Submerged aquatic plants (Hydrilla, Vallisneria) and phytoplankton",
            "Zooplankton and water fleas",
            "Saprophytic anaerobic bacteria"
        ],
        "answer": "Submerged aquatic plants (Hydrilla, Vallisneria) and phytoplankton",
        "explanation": "Photosynthesizing aquatic autotrophs release dissolved oxygen as a byproduct of the light reactions of photosynthesis."
    },
    {
        "question": "To convert an aquarium into a more self-sustaining closed ecosystem, what should be introduced?",
        "options": [
            "Live green aquatic plants and beneficial nitrifying bacteria",
            "Synthetic chemical dyes",
            "More carnivorous predator fish",
            "Petroleum oil drops"
        ],
        "answer": "Live green aquatic plants and beneficial nitrifying bacteria",
        "explanation": "Aquatic plants provide dissolved oxygen and absorb carbon dioxide, while nitrifying bacteria convert toxic fish ammonia into harmless nitrates."
    }
]

modules_p2.append({
    "id": "m12",
    "moduleNumber": 12,
    "title": "Aquatic & Terrestrial Dynamics: Aquarium Maintenance vs Natural Pond Self-Cleaning",
    "tagline": "Self-regulation, decomposer populations, dissolved oxygen, and ecosystem equilibrium.",
    "readingTimeMins": 5,
    "theoryHtml": """
<div class=\"module-content\">
  <div class=\"theory-section\">
    <h4>1. Natural vs Artificial Ecosystem Dynamics</h4>
    <p>A fundamental ecological insight emerges when comparing a <strong>natural freshwater pond</strong> with an <strong>artificial household aquarium</strong>:</p>
    <ul>
      <li><strong>Natural Pond:</strong> A complete, mature, self-regulating ecosystem. It houses a diverse consortium of phytoplankton, rooted submerged macrophytes (<em>Hydrilla</em>), zooplankton, insects, fish, and rich benthic decomposer colonies (saprophytic bacteria and fungi). Wastes and dead organisms are continuously mineralized into plant nutrients.</li>
      <li><strong>Home Aquarium:</strong> An incomplete, human-engineered ecosystem. It typically contains fish and decorative pebbles, but lacks a balanced community of decomposers, adequate macrophyte surface area, and natural physical flushing.</li>
    </ul>

    <h4>2. Why Aquariums Require Active Maintenance</h4>
    <p>In an aquarium, uneaten fish food flakes and metabolic nitrogenous wastes (ammonia excreted by fish gills and kidneys) rapidly accumulate. Aerobic bacteria breaking down this organic matter consume all dissolved oxygen, leading to hypoxic asphyxiation and toxic ammonia buildup. Hence, mechanical aeration, bio-filters, and routine water replacement are mandatory.</p>
  </div>
</div>
""",
    "pointsToRemember": [
        "Natural ponds are self-sustaining because established decomposer communities recycle wastes continuously.",
        "Aquariums are incomplete artificial ecosystems requiring mechanical filtration and periodic water changes.",
        "Introducing aquatic plants and nitrifying bacteria stabilizes dissolved oxygen and nitrogen cycles in aquariums."
    ],
    "keyNotes": [
        "Natural ecosystems possess self-cleansing capacity via balanced decomposer microbial loops; artificial ecosystems require continuous external maintenance."
    ],
    "questions": m12_questions
})

# Module 13
m13_questions = get_bank(60, 5) + [
    {
        "question": "What is the molecular formula of ozone, and how does it chemically differ from atmospheric oxygen gas?",
        "options": [
            "Ozone is O₂ and oxygen gas is O₃",
            "Ozone is O₃ (triatomic) while oxygen gas is O₂ (diatomic)",
            "Ozone is O₄ and oxygen gas is O",
            "Ozone is H₂O₂ and oxygen gas is O₂"
        ],
        "answer": "Ozone is O₃ (triatomic) while oxygen gas is O₂ (diatomic)",
        "explanation": "Ozone is a triatomic molecule made of three oxygen atoms (O₃), whereas breathable elemental oxygen is diatomic (O₂)."
    },
    {
        "question": "Where is the protective ozone layer primarily situated in the Earth's atmosphere?",
        "options": [
            "Troposphere (0 to 10 km)",
            "Stratosphere (roughly 15 to 35 km above sea level)",
            "Mesosphere (50 to 80 km)",
            "Ionosphere (above 100 km)"
        ],
        "answer": "Stratosphere (roughly 15 to 35 km above sea level)",
        "explanation": "The ozone layer is concentrated in the stratosphere, located between approximately 15 and 35 km above Earth's surface."
    },
    {
        "question": "Why is ozone at ground level considered a hazardous environmental pollutant?",
        "options": [
            "It turns rainwater into sulfuric acid instantly",
            "It is a deadly toxic gas that irritates the respiratory tract and causes pulmonary damage",
            "It absorbs radio broadcasting signals",
            "It triggers immediate earthquakes"
        ],
        "answer": "It is a deadly toxic gas that irritates the respiratory tract and causes pulmonary damage",
        "explanation": "While beneficial in the stratosphere as a UV shield, tropospheric ground-level ozone is a toxic oxidizing pollutant harmful to human lungs and plant foliage."
    },
    {
        "question": "What primary biological hazard is prevented by the stratospheric ozone shield?",
        "options": [
            "Penetration of harmful high-energy ultraviolet (UV) radiation from the Sun",
            "Escape of nitrogen gas into outer space",
            "Incoming collisions with meteoroids",
            "Formation of desert sand dunes"
        ],
        "answer": "Penetration of harmful high-energy ultraviolet (UV) radiation from the Sun",
        "explanation": "The ozone layer absorbs dangerous solar UV-B and UV-C radiation, preventing DNA damage, skin cancers, cataracts, and immune depression."
    },
    {
        "question": "UV radiation causes severe cellular damage in living organisms primarily because:",
        "options": [
            "It freezes cellular cytoplasm",
            "Its high photon energy breaks covalent bonds in DNA, inducing thymine dimers and oncogenic mutations",
            "It neutralizes blood hemoglobin into water",
            "It turns chlorophyll green"
        ],
        "answer": "Its high photon energy breaks covalent bonds in DNA, inducing thymine dimers and oncogenic mutations",
        "explanation": "Ultraviolet photons possess sufficient energy to rupture chemical bonds in nucleic acids, creating mutagenic thymine-thymine dimers that lead to skin carcinoma."
    }
]

modules_p2.append({
    "id": "m13",
    "moduleNumber": 13,
    "title": "The Ozone Shield (O₃): Distribution, Molecular Nature & Biological Protection",
    "tagline": "Triatomic allotrope of oxygen, stratospheric distribution, and the vital UV radiation umbrella.",
    "readingTimeMins": 5,
    "theoryHtml": """
<div class=\"module-content\">
  <div class=\"theory-section\">
    <h4>1. Molecular Nature of Ozone ($O_3$)</h4>
    <p><strong>Ozone</strong> is a triatomic allotrope of oxygen composed of three oxygen atoms bonded together ($O_3$). It differs fundamentally from diatomic oxygen gas ($O_2$), which is essential for aerobic respiration:</p>
    <ul>
      <li>While $O_2$ is life-sustaining and non-toxic, ozone ($O_3$) is a <strong>deadly toxic poison</strong> at ground level.</li>
      <li>At ground level (troposphere), ozone acts as an aggressive oxidizing pollutant, causing severe respiratory irritation, asthma, and vegetation damage.</li>
    </ul>

    <h4>2. The Stratospheric Ozone Umbrella</h4>
    <p>High up in the <strong>stratosphere</strong> (between 15 and 35 km altitude), ozone performs an indispensable ecological service:</p>
    <blockquote style=\"background:#f8fafc; border-left:4px solid #3b82f6; padding:10px 14px; margin:10px 0; font-style:italic;\">
      \"The ozone layer shields the surface of the Earth from damaging high-energy ultraviolet (UV) radiation emitted by the Sun.\"
    </blockquote>

    <h4>3. Biological Consequences of UV Exposure</h4>
    <p>Without the stratospheric ozone layer, high-energy UV radiation (specifically UV-B) reaches the Earth's surface with devastating effects:</p>
    <ul>
      <li><strong>Human Health:</strong> Induces skin carcinomas (melanoma), ocular cataracts leading to blindness, and severe suppression of the immune system.</li>
      <li><strong>Terrestrial & Marine Life:</strong> Destroys delicate phytoplankton in upper ocean layers (collapsing marine food chains) and disrupts chlorophyll synthesis in land crops.</li>
    </ul>
  </div>
</div>
""",
    "pointsToRemember": [
        "Ozone ($O_3$) is a triatomic molecule of oxygen that is toxic at ground level but protective in the stratosphere.",
        "The stratospheric ozone layer absorbs harmful high-energy solar UV radiation.",
        "UV radiation causes skin cancers, cataracts, genetic mutations in DNA, and damage to crops and phytoplankton."
    ],
    "keyNotes": [
        "Stratospheric ozone acts as a planetary sunscreen, absorbing deadly high-frequency solar UV radiation that would otherwise mutate DNA and collapse ecosystems."
    ],
    "questions": m13_questions
})

# Module 14
m14_questions = get_bank(65, 5) + [
    {
        "question": "How is ozone formed in the upper stratosphere from molecular oxygen?",
        "options": [
            "Oxygen gas reacts with nitrogen oxide under lightning",
            "High-energy UV radiation splits O₂ molecules into free oxygen atoms (O), which then combine with molecular O₂ to form O₃",
            "Plants transpire O₃ directly into the clouds",
            "Carbon dioxide decomposes into ozone and carbon"
        ],
        "answer": "High-energy UV radiation splits O₂ molecules into free oxygen atoms (O), which then combine with molecular O₂ to form O₃",
        "explanation": "Photodissociation: O₂ + UV → O + O; then nascent oxygen combines with molecular oxygen: O + O₂ → O₃."
    },
    {
        "question": "What type of chemical reaction represents the photodissociation of O₂ by ultraviolet radiation?",
        "options": [
            "Photochemical decomposition",
            "Precipitation reaction",
            "Neutralization reaction",
            "Combustion of hydrocarbon"
        ],
        "answer": "Photochemical decomposition",
        "explanation": "The cleavage of covalent double bonds in O₂ by solar photons of UV wavelength represents a photochemical decomposition reaction."
    },
    {
        "question": "The nascent single oxygen atom (O) generated during UV photolysis is characterized by:",
        "options": [
            "Extreme chemical reactivity due to unpaired valence electrons",
            "Complete chemical inertness like helium",
            "A positive double charge",
            "Zero mass"
        ],
        "answer": "Extreme chemical reactivity due to unpaired valence electrons",
        "explanation": "A free atomic oxygen radical has incomplete outer valence orbitals, making it intensely reactive and driving spontaneous addition to O₂ to form O₃."
    },
    {
        "question": "What is the Chapman Cycle?",
        "options": [
            "The natural photochemical cycle of continuous ozone formation and photolytic destruction maintaining a steady-state equilibrium in the stratosphere",
            "The cycle of nitrogen fixation in legume roots",
            "The flow of phosphorus through mountain rocks",
            "The migration of Arctic birds"
        ],
        "answer": "The natural photochemical cycle of continuous ozone formation and photolytic destruction maintaining a steady-state equilibrium in the stratosphere",
        "explanation": "Sydney Chapman formulated the dynamic photochemical equilibrium where O₃ is formed by UV action on O₂ and simultaneously destroyed by UV absorption, maintaining a stable ozone concentration."
    },
    {
        "question": "Which wavelength band of solar radiation possesses sufficient photon energy to split diatomic oxygen ($O_2$) into nascent atoms?",
        "options": [
            "Infrared thermal radiation",
            "High-energy ultraviolet radiation (wavelength < 240 nm)",
            "Visible red light",
            "Microwaves"
        ],
        "answer": "High-energy ultraviolet radiation (wavelength < 240 nm)",
        "explanation": "Only short-wavelength, high-energy UV-C photons have adequate photon energy ($E = h\\nu$) to overcome the strong O=O covalent bond dissociation energy."
    }
]

modules_p2.append({
    "id": "m14",
    "moduleNumber": 14,
    "title": "Photochemical Formation & Equilibrium of Stratospheric Ozone",
    "tagline": "UV photolysis of molecular oxygen, nascent oxygen radicals, and Chapman equilibrium.",
    "readingTimeMins": 5,
    "theoryHtml": """
<div class=\"module-content\">
  <div class=\"theory-section\">
    <h4>1. Photochemical Mechanism of Ozone Synthesis</h4>
    <p>Ozone at higher levels of the atmosphere is a product of UV radiation acting on oxygen ($O_2$) gas through a two-step photochemical process:</p>
    <ul>
      <li><strong>Step 1 (Photodissociation of Molecular Oxygen):</strong> The higher energy UV radiations split apart molecular oxygen ($O_2$) into free oxygen (nascent atomic oxygen, $O$) radicals:
        $$O_2 \\xrightarrow{\\text{High-Energy UV}} O + O$$
      </li>
      <li><strong>Step 2 (Combination with Diatomic Oxygen):</strong> These highly reactive nascent oxygen atoms immediately react with intact molecular oxygen to produce ozone:
        $$O + O_2 \\longrightarrow O_3 \\quad (\\text{Ozone})$$
      </li>
    </ul>

    <h4>2. Dynamic Steady-State Equilibrium (The Chapman Mechanism)</h4>
    <p>Under natural pristine conditions, ozone is simultaneously created and decomposed by absorbing solar radiation:</p>
    $$O_3 \\xrightarrow{\\text{UV Absorption}} O_2 + O$$
    <p>The rate of photochemical ozone formation balances the rate of photolytic ozone destruction, establishing a constant, protective stratospheric ozone concentration.</p>
  </div>
</div>
""",
    "pointsToRemember": [
        "High-energy UV photons dissociate diatomic $O_2$ into reactive nascent oxygen atoms ($O$).",
        "Nascent oxygen instantly combines with molecular oxygen to synthesize ozone ($O + O_2 \\to O_3$).",
        "Natural ozone levels remain in dynamic photochemical equilibrium via continuous synthesis and breakdown."
    ],
    "keyNotes": [
        "Solar UV radiation drives both the synthesis of ozone ($O_2 \\xrightarrow{UV} 2O$, $O + O_2 \\to O_3$) and its UV-absorbing breakdown, sustaining a protective stratospheric shield."
    ],
    "questions": m14_questions
})

# Module 15
m15_questions = get_bank(70, 5) + [
    {
        "question": "Which synthetic chemical compound was identified in the 1980s as the principal culprit behind stratospheric ozone layer depletion?",
        "options": [
            "Carbon dioxide (CO₂)",
            "Chlorofluorocarbons (CFCs)",
            "Methane (CH₄)",
            "Sulfur dioxide (SO₂)"
        ],
        "answer": "Chlorofluorocarbons (CFCs)",
        "explanation": "CFCs (chlorofluorocarbons) released from refrigeration equipment, air conditioners, and aerosol sprays were discovered to destroy stratospheric ozone."
    },
    {
        "question": "In what household and industrial equipment were CFCs widely utilized before international bans?",
        "options": [
            "Refrigerators, air conditioners, and fire extinguisher propellant sprays",
            "Internal combustion car engines",
            "Solar water heaters",
            "Earthen cooking stoves"
        ],
        "answer": "Refrigerators, air conditioners, and fire extinguisher propellant sprays",
        "explanation": "CFCs like Freon were prized for their chemical stability, non-toxicity, and non-flammability as coolants and propellants."
    },
    {
        "question": "Why do CFCs reach the stratosphere without being broken down in the lower troposphere?",
        "options": [
            "They are extremely chemically unreactive and insoluble in water, resisting tropospheric breakdown",
            "They are lighter than pure hydrogen",
            "They react with rain to form clouds",
            "They are propelled by aircraft rocket engines"
        ],
        "answer": "They are extremely chemically unreactive and insoluble in water, resisting tropospheric breakdown",
        "explanation": "CFCs are highly inert in the lower atmosphere, allowing them to drift intact into the stratosphere over decades."
    },
    {
        "question": "How does a single chlorine radical ($Cl^\\bullet$) released from a CFC destroy thousands of ozone molecules?",
        "options": [
            "By acting as a regenerated catalytic radical: Cl + O₃ → ClO + O₂, followed by ClO + O → Cl + O₂",
            "By physically blocking solar photons",
            "By freezing the clouds into dry ice",
            "By turning ozone into hydrochloric acid permanently"
        ],
        "answer": "By acting as a regenerated catalytic radical: Cl + O₃ → ClO + O₂, followed by ClO + O → Cl + O₂",
        "explanation": "Chlorine atoms act catalytically; one chlorine atom can destroy over 100,000 ozone molecules before being deactivated."
    },
    {
        "question": "The marked thinning of the ozone layer first detected in 1985 over which geographical region became known as the 'Ozone Hole'?",
        "options": [
            "Over Antarctica (South Pole)",
            "Over the Sahara Desert",
            "Over the Amazon rainforest",
            "Over the Indian Ocean"
        ],
        "answer": "Over Antarctica (South Pole)",
        "explanation": "British Antarctic Survey scientists (Farman et al.) discovered severe springtime ozone depletion over Antarctica in 1985."
    }
]

modules_p2.append({
    "id": "m15",
    "moduleNumber": 15,
    "title": "Ozone Layer Depletion: Chlorofluorocarbons (CFCs) & Catalytic Chlorine Cycles",
    "tagline": "Synthetic refrigerants, atmospheric inertness, and catalytic destruction over Antarctica.",
    "readingTimeMins": 5,
    "theoryHtml": """
<div class=\"module-content\">
  <div class=\"theory-section\">
    <h4>1. Discovery of Ozone Depletion</h4>
    <p>In the 1980s, atmospheric scientists observed a sharp drop in stratospheric ozone levels, particularly over Antarctica, culminating in the seasonal formation of an <strong>Ozone Hole</strong>.</p>

    <h4>2. Culprit Chemical: Chlorofluorocarbons (CFCs)</h4>
    <p>The primary driver of this depletion was identified as synthetic chemicals known as <strong>chlorofluorocarbons (CFCs)</strong>, widely used as non-toxic, non-flammable refrigerants in domestic refrigerators, air conditioners, aerosol propellants, and fire extinguishers.</p>

    <h4>3. Catalytic Mechanism of Ozone Destruction</h4>
    <ul>
      <li><strong>Tropospheric Stability:</strong> Because CFCs are chemically inert and water-insoluble, they do not wash out with rain or decompose in the lower atmosphere, slowly diffusing into the stratosphere over 10 to 20 years.</li>
      <li><strong>UV Cleavage:</strong> In the stratosphere, intense UV radiation breaks the carbon-chlorine bonds, releasing free, reactive chlorine radicals ($Cl^\\bullet$):
        $$\\text{CF}_2\\text{Cl}_2 \\xrightarrow{\\text{UV}} \\text{CF}_2\\text{Cl}^\\bullet + \\text{Cl}^\\bullet$$
      </li>
      <li><strong>Catalytic Ozone Breakdown:</strong> The free chlorine radical attacks ozone, converting it into diatomic oxygen while regenerating itself in a catalytic chain reaction:
        $$\\text{Cl}^\\bullet + O_3 \\longrightarrow \\text{ClO}^\\bullet + O_2$$
        $$\\text{ClO}^\\bullet + O \\longrightarrow \\text{Cl}^\\bullet + O_2$$
      </li>
      <li>A single atomic chlorine radical can catalytically destroy over <strong>100,000 ozone molecules</strong> before being sequestered!</li>
    </ul>
  </div>
</div>
""",
    "pointsToRemember": [
        "Chlorofluorocarbons (CFCs) used in refrigerators and air conditioners caused sharp ozone depletion.",
        "CFCs diffuse to the stratosphere where UV radiation releases catalytic chlorine radicals ($Cl^\\bullet$).",
        "A single chlorine radical destroys upwards of 100,000 ozone molecules via catalytic recycling."
    ],
    "keyNotes": [
        "Chemically stable CFCs reach the stratosphere where UV releases free chlorine atoms, triggering catalytic destruction of thousands of ozone molecules per chlorine atom."
    ],
    "questions": m15_questions
})

# Module 16
m16_questions = get_bank(75, 5) + [
    {
        "question": "In what year did UNEP successfully forge an international agreement to freeze CFC production at 1986 levels?",
        "options": [
            "1972",
            "1987",
            "2001",
            "1995"
        ],
        "answer": "1987",
        "explanation": "In 1987, the United Nations Environment Programme (UNEP) negotiated the landmark Montreal Protocol, freezing CFC production at 1986 levels."
    },
    {
        "question": "What does the acronym UNEP stand for?",
        "options": [
            "United Nations Energy Project",
            "United Nations Environment Programme",
            "Universal Nature and Ecology Protocol",
            "Union of Natural Environmental Protectors"
        ],
        "answer": "United Nations Environment Programme",
        "explanation": "UNEP stands for United Nations Environment Programme, the global environmental authority established in 1972."
    },
    {
        "question": "What technological mandate was imposed on all refrigerator manufacturers worldwide following the Montreal Protocol?",
        "options": [
            "Refrigerators must run on coal",
            "All manufacturing companies must make CFC-free refrigerators using alternative eco-friendly refrigerants (e.g. HFCs/HCs)",
            "Refrigerators were permanently banned globally",
            "Refrigerators must use lead pipes"
        ],
        "answer": "All manufacturing companies must make CFC-free refrigerators using alternative eco-friendly refrigerants (e.g. HFCs/HCs)",
        "explanation": "Under international and national regulations, appliance manufacturers were required to phase out CFCs and switch to ozone-safe refrigerants."
    },
    {
        "question": "The Montreal Protocol is internationally celebrated as one of the most successful environmental treaties because:",
        "options": [
            "It halted solar flares",
            "Nearly every nation ratified it, leading to a 99% phaseout of ozone-depleting substances and healing of the stratospheric ozone layer",
            "It made air conditioning free for all citizens",
            "It eliminated all greenhouse gases permanently"
        ],
        "answer": "Nearly every nation ratified it, leading to a 99% phaseout of ozone-depleting substances and healing of the stratospheric ozone layer",
        "explanation": "Universal ratification and strict compliance have led to significant recovery of the Antarctic ozone hole, demonstrating effective global multilateral environmental action."
    },
    {
        "question": "Which alternative class of compounds was initially adopted to replace CFCs, having zero ozone-depleting potential?",
        "options": [
            "Hydrofluorocarbons (HFCs)",
            "Polychlorinated biphenyls (PCBs)",
            "Sulfuric acid vapors",
            "Carbon tetrachloride"
        ],
        "answer": "Hydrofluorocarbons (HFCs)",
        "explanation": "Hydrofluorocarbons (HFCs) contain no chlorine atoms and thus have zero ozone depletion potential (ODP), serving as initial replacements for CFCs."
    }
]

modules_p2.append({
    "id": "m16",
    "moduleNumber": 16,
    "title": "International Policy & UNEP Montreal Protocol (1987)",
    "tagline": "Global environmental diplomacy, CFC freeze, and mandatory CFC-free refrigeration.",
    "readingTimeMins": 5,
    "theoryHtml": """
<div class=\"module-content\">
  <div class=\"theory-section\">
    <h4>1. International Response to the Ozone Crisis</h4>
    <p>Following scientific confirmation of the Antarctic ozone hole and the role of synthetic CFCs, global governments mobilized under the auspices of the <strong>United Nations Environment Programme (UNEP)</strong>.</p>

    <h4>2. The Montreal Protocol (1987)</h4>
    <blockquote style=\"background:#f8fafc; border-left:4px solid #10b981; padding:10px 14px; margin:10px 0; font-style:italic;\">
      \"In <strong>1987</strong>, the United Nations Environment Programme (UNEP) succeeded in forging an agreement to <strong>freeze CFC production at 1986 levels</strong>.\"
    </blockquote>
    <p>This landmark multilateral treaty is known as the <strong>Montreal Protocol on Substances that Deplete the Ozone Layer</strong>.</p>

    <h4>3. Mandatory Compliance and CFC-Free Technology</h4>
    <ul>
      <li>The treaty legally bound participating developed and developing nations to phase out production and consumption of chlorofluorocarbons, halons, and carbon tetrachloride.</li>
      <li>It is now mandatory for manufacturing companies worldwide to produce <strong>CFC-free refrigerators</strong>, air conditioners, and chillers using safer alternative compounds like hydrofluorocarbons (HFCs) and hydrocarbons (isobutane, $R\\text{-}600a$).</li>
      <li>Due to near 100% global compliance, the stratospheric ozone layer is projected to return to 1980 levels by approximately 2066 over Antarctica.</li>
    </ul>
  </div>
</div>
""",
    "pointsToRemember": [
        "In 1987, UNEP forged the historic Montreal Protocol to freeze CFC production at 1986 levels.",
        "The agreement made it mandatory for appliance manufacturers globally to make CFC-free refrigerators.",
        "The Montreal Protocol is considered the most effective international environmental agreement in history."
    ],
    "keyNotes": [
        "The 1987 UNEP Montreal Protocol mandated the global freeze and phaseout of CFCs, establishing mandatory production of CFC-free refrigeration systems."
    ],
    "questions": m16_questions
})

# Module 17
m17_questions = get_bank(80, 5) + [
    {
        "question": "What socio-economic factors have driven the dramatic increase in garbage generated by modern human societies?",
        "options": [
            "Improvements in lifestyle, increased consumer purchasing power, and disposable packaging habits",
            "Decreased human population",
            "Universal adoption of home composting",
            "Strict reduction in factory production"
        ],
        "answer": "Improvements in lifestyle, increased consumer purchasing power, and disposable packaging habits",
        "explanation": "Rising consumerism, modern packaged convenience foods, disposable goods, and urban lifestyles generate enormous volumes of solid municipal waste."
    },
    {
        "question": "Why does widespread use of disposable, non-biodegradable packaging pose a greater ecological threat today than in the past?",
        "options": [
            "Past packaging was made entirely of radioactive lead",
            "Modern packaging relies heavily on synthetic polymers (plastics, laminates) that cannot be degraded by natural decomposers",
            "Modern packaging dissolves immediately into clouds",
            "Past packaging was eaten by fish"
        ],
        "answer": "Modern packaging relies heavily on synthetic polymers (plastics, laminates) that cannot be degraded by natural decomposers",
        "explanation": "Historically, packaging was made of cloth, jute, or leaves; today, single-use plastic films and multilayer laminates persist indefinitely."
    },
    {
        "question": "What is the primary danger when stray cattle ingest plastic bags containing discarded leftover food?",
        "options": [
            "Plastic causes instant weight loss",
            "Plastics accumulate in the rumen/stomach, forming an impermeable mass that blocks the digestive tract and causes painful death",
            "Plastics turn into milk proteins",
            "Cattle develop wings"
        ],
        "answer": "Plastics accumulate in the rumen/stomach, forming an impermeable mass that blocks the digestive tract and causes painful death",
        "explanation": "Indigestible plastic bags lodge inside bovine stomachs, creating complete intestinal obstruction and fatal peritonitis."
    },
    {
        "question": "The first and most critical rule of modern solid waste management is:",
        "options": [
            "Throwing all waste together into open gutters",
            "Segregation of waste at the source of generation into biodegradable and non-biodegradable fractions",
            "Burning all trash in open backyards",
            "Dumping trash into rivers at night"
        ],
        "answer": "Segregation of waste at the source of generation into biodegradable and non-biodegradable fractions",
        "explanation": "Segregating wet (organic biodegradable) waste from dry (recyclable non-biodegradable) waste at homes and commercial establishments is foundational to effective processing."
    },
    {
        "question": "Which color-coded bin system is internationally recommended for domestic waste segregation?",
        "options": [
            "Green bin for wet/biodegradable waste; Blue bin for dry/recyclable waste",
            "Red bin for wet food; Yellow bin for sewage",
            "Black bin for vegetables; White bin for meat",
            "Purple bin for everything"
        ],
        "answer": "Green bin for wet/biodegradable waste; Blue bin for dry/recyclable waste",
        "explanation": "Green bins are designated for organic compostable wet kitchen waste, while blue bins collect dry recyclables like paper, plastics, and metals."
    }
]

modules_p2.append({
    "id": "m17",
    "moduleNumber": 17,
    "title": "Waste Generation & Municipal Solid Waste Crisis in Urban Societies",
    "tagline": "Consumerism, single-use packaging revolution, and the critical need for source segregation.",
    "readingTimeMins": 5,
    "theoryHtml": """
<div class=\"module-content\">
  <div class=\"theory-section\">
    <h4>1. The Explosion of Solid Waste in Modern Times</h4>
    <p>In our modern era, economic development, rapid urbanization, and higher living standards have vastly increased the volume of waste generated per capita:</p>
    <ul>
      <li>Changes in human attitude and the shift towards a \"throwaway society\" have created mountains of municipal solid waste (MSW).</li>
      <li>Changes in packaging technology have replaced biodegradable materials (banana leaves, paper, clay) with non-biodegradable multilayer plastics, polystyrene (thermocol), and tetra packs.</li>
    </ul>

    <h4>2. Environmental and Health Hazards</h4>
    <ul>
      <li><strong>Drainage Blockades:</strong> Light polythene carry bags choke municipal storm sewers, triggering urban flash floods during monsoons.</li>
      <li><strong>Animal Welfare:</strong> Stray cows foraging on open garbage heaps consume plastic bags along with rotting vegetables, forming massive indigestible rumen blockages that lead to lethal intestinal starvation.</li>
      <li><strong>Microplastics & Leaching:</strong> Plastics slowly weather into microplastics, absorbing toxic hydrophobic pesticides and entering human water supplies and marine food chains.</li>
    </ul>

    <h4>3. The Fundamental Solution: Waste Segregation at Source</h4>
    <p>Effective municipal waste management is impossible without <strong>source segregation</strong>:</p>
    <ul>
      <li><strong>Wet Waste (Green Bins):</strong> Biodegradable organic matter (kitchen scraps, food leftovers, garden trimmings) suited for composting or biomethanation.</li>
      <li><strong>Dry Waste (Blue Bins):</strong> Non-biodegradable recyclable matter (paper, cardboard, plastics, metals, glass).</li>
      <li><strong>Domestic Hazardous Waste (Red Bins):</strong> Batteries, CFL bulbs, unused medicines, paints, and sanitary pads.</li>
    </ul>
  </div>
</div>
""",
    "pointsToRemember": [
        "Modern packaging lifestyles have dramatically increased the volume of persistent non-biodegradable waste.",
        "Plastics choke city storm drains and cause lethal intestinal blockages in livestock.",
        "Segregation at source into wet (green) and dry (blue) waste is the cornerstone of effective waste management."
    ],
    "keyNotes": [
        "Urban lifestyle shifts have multiplied non-biodegradable waste; segregating wet organic waste from dry recyclables at source is crucial to prevent ecological damage."
    ],
    "questions": m17_questions
})

# Module 18
m18_questions = get_bank(85, 5) + [
    {
        "question": "What biochemical process converts wet organic kitchen waste into nutrient-rich humus in the presence of aerobic microbes?",
        "options": [
            "Composting",
            "Nuclear fission",
            "Electrolysis",
            "Hydrocracking"
        ],
        "answer": "Composting",
        "explanation": "Composting is the aerobic biological decomposition of organic solid wastes (fruit peels, leaves, vegetable trimmings) into organic fertilizer (humus)."
    },
    {
        "question": "Vermicomposting accelerates the natural composting process through the active participation of which organisms?",
        "options": [
            "Redworms (Eisenia fetida) and earthworms",
            "Locusts and termites",
            "Mosquito larvae",
            "Honeybees"
        ],
        "answer": "Redworms (Eisenia fetida) and earthworms",
        "explanation": "Vermicomposting utilizes earthworms (especially red wigglers / Eisenia fetida) to consume organic waste, producing nutrient-rich vermicast castings."
    },
    {
        "question": "In a rural biogas plant, cattle dung (gobar) and wet organic waste are decomposed by:",
        "options": [
            "Anaerobic methanogenic bacteria in the absence of oxygen, producing methane (biogas) and slurry",
            "Aerobic algae in direct sunlight",
            "Chlorine gas bubbling through slurry",
            "Electric discharge from batteries"
        ],
        "answer": "Anaerobic methanogenic bacteria in the absence of oxygen, producing methane (biogas) and slurry",
        "explanation": "Anaerobic digesters use methanogens to break down biomass without oxygen, generating clean biogas (~75% methane) and rich nitrogenous bio-fertilizer."
    },
    {
        "question": "Which of the following household waste items should NEVER be placed in an organic home compost pit?",
        "options": [
            "Banana peels",
            "Used tea leaves",
            "Plastic wrappers and glass bottles",
            "Dry garden leaves"
        ],
        "answer": "Plastic wrappers and glass bottles",
        "explanation": "Plastic and glass are non-biodegradable materials that will contaminate compost and cannot be broken down by earthworms or microbes."
    },
    {
        "question": "The dark, crumbly organic residue produced by successful composting that enhances soil moisture and cation exchange capacity is called:",
        "options": [
            "Humus",
            "Plastic sludge",
            "Calcified limestone",
            "Granite dust"
        ],
        "answer": "Humus",
        "explanation": "Humus is the stable, nutrient-dense, decomposed organic matter that improves soil structure, aeration, and fertility."
    }
]

modules_p2.append({
    "id": "m18",
    "moduleNumber": 18,
    "title": "Biological Waste Processing: Composting, Vermicomposting & Biogas Digestion",
    "tagline": "Aerobic and anaerobic mineralization of organic refuse into high-grade bio-fertilizers.",
    "readingTimeMins": 5,
    "theoryHtml": """
<div class=\"module-content\">
  <div class=\"theory-section\">
    <h4>1. Composting: Harnessing Natural Decomposers</h4>
    <p><strong>Composting</strong> is the controlled aerobic biological decomposition of organic solid wastes (vegetable scraps, fruit rinds, tea grounds, dry leaves, cattle dung) by bacteria and fungi:</p>
    <ul>
      <li>Waste is deposited in pits or compost bins where aerobic saprophytes thrive.</li>
      <li>Metabolic activity generates internal heat (up to 55–65°C), killing weed seeds and pathogens.</li>
      <li>Over several weeks, organic compounds break down into dark, crumbly, nutrient-rich <strong>humus</strong> that enriches soil with nitrogen, phosphorus, and potassium.</li>
    </ul>

    <h4>2. Vermicomposting</h4>
    <p><strong>Vermicomposting</strong> introduces specialized epigeic earthworms (most commonly <strong>redworms / <em>Eisenia fetida</em></strong>) into the compost system:</p>
    <ul>
      <li>Redworms ingest decomposing organic matter, grinding it within their gizzard and excreting nutrient-dense castings (vermicast).</li>
      <li>Vermicompost is produced 2 to 3 times faster than traditional composting and contains superior concentrations of plant growth hormones and beneficial soil microbes.</li>
    </ul>

    <h4>3. Anaerobic Biomethanation (Biogas Plants)</h4>
    <p>In rural and semi-urban settings, cattle dung (gobar) and wet organic slurry undergo <strong>anaerobic digestion</strong> inside an airtight digester:</p>
    <ul>
      <li>Methanogenic bacteria decompose biomass in the absence of oxygen, producing <strong>biogas</strong> (composed of ~75% methane ($CH_4$), along with $CO_2$ and traces of $H_2S$).</li>
      <li>Biogas serves as an excellent, smokeless fuel for cooking and electricity generation.</li>
      <li>The leftover spent slurry is rich in nitrogen and phosphorus, serving as high-grade organic manure.</li>
    </ul>
  </div>
</div>
""",
    "pointsToRemember": [
        "Composting is the aerobic microbial breakdown of organic wastes into soil-enriching humus.",
        "Vermicomposting utilizes redworms (Eisenia fetida) to rapidly convert organic waste into nutrient-rich castings.",
        "Biogas plants anaerobically digest organic wastes to produce clean methane fuel and manure."
    ],
    "keyNotes": [
        "Organic wet waste is converted into valuable resources via aerobic composting, vermicomposting with redworms, and anaerobic biomethanation generating methane fuel."
    ],
    "questions": m18_questions
})

# Module 19
m19_questions = get_bank(90, 5) + [
    {
        "question": "What is the specialized method of solid waste disposal involving controlled thermal combustion at temperatures exceeding 900°C to 1000°C?",
        "options": [
            "Incineration",
            "Deep-well injection",
            "Open dumping",
            "Surface impoundment"
        ],
        "answer": "Incineration",
        "explanation": "Incineration is the controlled, high-temperature thermal destruction of hazardous solid wastes, reducing waste volume by up to 90% into ash."
    },
    {
        "question": "Why is incineration strictly mandated for clinical and biomedical hospital wastes (used syringes, anatomical tissues, dressings)?",
        "options": [
            "Because clinical wastes smell like flowers",
            "High temperatures completely incinerate and destroy dangerous infectious pathogens, viruses, and hazardous biological residues",
            "To recover gold from medical instruments",
            "Because hospitals have no trash bins"
        ],
        "answer": "High temperatures completely incinerate and destroy dangerous infectious pathogens, viruses, and hazardous biological residues",
        "explanation": "Incineration at >1000°C sterilizes and eliminates virulent hospital pathogens, preventing deadly disease outbreaks."
    },
    {
        "question": "What engineering barrier is installed beneath a modern sanitary landfill to prevent toxic leachate from polluting underground drinking water?",
        "options": [
            "A porous sand filter",
            "An impermeable geomembrane liner made of high-density polyethylene (HDPE) along with compacted clay layers",
            "Wooden planks",
            "Newspaper sheets"
        ],
        "answer": "An impermeable geomembrane liner made of high-density polyethylene (HDPE) along with compacted clay layers",
        "explanation": "Engineered sanitary landfills utilize impermeable synthetic geomembranes (HDPE liners) and compacted clay to contain toxic liquid leachate."
    },
    {
        "question": "What is landfill leachate?",
        "options": [
            "Pure mineral drinking water filtered by soil",
            "A toxic, foul-smelling liquid formed when percolating rainwater leaches hazardous chemicals and heavy metals from buried wastes",
            "Methane gas bubbles",
            "A type of compost fertilizer"
        ],
        "answer": "A toxic, foul-smelling liquid formed when percolating rainwater leaches hazardous chemicals and heavy metals from buried wastes",
        "explanation": "Leachate is a highly toxic, chemically complex liquid formed as rain percolates through decomposing solid garbage."
    },
    {
        "question": "What flammable greenhouse gas is generated in the deep anaerobic layers of sanitary landfills that must be vented or tapped for energy?",
        "options": [
            "Methane (CH₄)",
            "Helium (He)",
            "Argon (Ar)",
            "Oxygen (O₂)"
        ],
        "answer": "Methane (CH₄)",
        "explanation": "Deep buried organic matter decomposes anaerobically, generating methane gas ($CH_4$), which poses explosion risks if not vented or captured."
    }
]

modules_p2.append({
    "id": "m19",
    "moduleNumber": 19,
    "title": "High-Temperature Incineration & Engineered Sanitary Landfills",
    "tagline": "Controlled thermal oxidation of biomedical waste, leachate containment, and methane venting.",
    "readingTimeMins": 5,
    "theoryHtml": """
<div class=\"module-content\">
  <div class=\"theory-section\">
    <h4>1. High-Temperature Incineration</h4>
    <p><strong>Incineration</strong> is a controlled waste treatment technology that involves the thermal combustion of solid organic waste at temperatures between 900°C and 1100°C in an incinerator furnace:</p>
    <ul>
      <li>It converts solid waste into flue gas, heat, and a small volume of inert mineral ash (reducing waste volume by up to 90%).</li>
      <li><strong>Crucial Medical Application:</strong> Incineration is universally compulsory for disposing of hazardous <strong>biomedical hospital wastes</strong> (blood-soaked dressings, amputated tissues, infectious cultures, disposable syringes) because the extreme heat obliterates all bacterial spores, viruses, and pathogens.</li>
      <li>Modern incinerators utilize electrostatic precipitators and scrubbers to capture toxic dioxins and acidic gases before flue gas emission.</li>
    </ul>

    <h4>2. Engineered Sanitary Landfills</h4>
    <p>A <strong>sanitary landfill</strong> is a carefully engineered site where non-recyclable municipal solid waste is deposited, compacted in layers, and sealed:</p>
    <ul>
      <li>Unlike primitive open dumps, sanitary landfills feature an impermeable composite bottom liner (high-density polyethylene, HDPE, coupled with compacted clay) to prevent toxic liquid <strong>leachate</strong> from contaminating underlying groundwater aquifers.</li>
      <li>Leachate collection pipes collect and route leachate to water treatment plants.</li>
      <li>Vertical gas extraction wells capture anaerobic <strong>landfill methane ($CH_4$)</strong>, which can be flared or harnessed for electricity generation.</li>
    </ul>
  </div>
</div>
""",
    "pointsToRemember": [
        "Incineration involves high-temperature (>900°C) combustion to destroy infectious biomedical hospital waste.",
        "Incineration reduces waste volume by up to 90%, converting waste into inert ash.",
        "Sanitary landfills use impermeable HDPE geomembrane liners and leachate collection systems to protect groundwater."
    ],
    "keyNotes": [
        "Incineration provides thermal pathogen sterilization for biomedical waste; engineered sanitary landfills prevent groundwater contamination using impermeable liners and leachate capture."
    ],
    "questions": m19_questions
})

# Module 20
m20_questions = get_bank(95, 5) + [
    {
        "question": "What ecological disadvantage emerged when Indian Railways initially replaced reusable ceramic/glass tea cups with disposable clay cups (kulhads)?",
        "options": [
            "Clay cups caused electric shock to passengers",
            "Making millions of kulhads daily depleted enormous quantities of fertile topsoil and consumed massive fuel firewood for firing kilns",
            "Kulhads dissolved into tea immediately",
            "Clay attracted predatory eagles into trains"
        ],
        "answer": "Making millions of kulhads daily depleted enormous quantities of fertile topsoil and consumed massive fuel firewood for firing kilns",
        "explanation": "Producing millions of disposable kulhads led to large-scale loss of fertile agricultural topsoil used in potteries."
    },
    {
        "question": "Why are plastic-lined disposable paper cups not as environmentally benign as commonly assumed?",
        "options": [
            "They are coated with a thin polyethylene plastic film to prevent leaking, making them difficult to recycle or compost",
            "Paper cups contain toxic mercury",
            "Paper cups are heavier than steel cups",
            "Paper cups absorb all tea without letting people drink"
        ],
        "answer": "They are coated with a thin polyethylene plastic film to prevent leaking, making them difficult to recycle or compost",
        "explanation": "Disposable paper cups have an internal hydrophobic plastic laminate coating that prevents natural composting and fouls paper recycling machinery."
    },
    {
        "question": "Which of the 5 R's of waste hierarchy represents the most ecologically potent first step in waste prevention?",
        "options": [
            "Recycle",
            "Refuse (Say No to single-use items)",
            "Repurpose",
            "Recover"
        ],
        "answer": "Refuse (Say No to single-use items)",
        "explanation": "The most effective way to eliminate waste is to Refuse unnecessary, single-use, non-biodegradable items at the source."
    },
    {
        "question": "The hierarchy of the 5 R's in environmental conservation comprises:",
        "options": [
            "Refuse, Reduce, Reuse, Repurpose, Recycle",
            "Reheat, Reburn, Resell, Return, React",
            "Run, Rest, Repeat, Restore, Relieve",
            "Rinse, Rub, Roast, Rotate, Replace"
        ],
        "answer": "Refuse, Reduce, Reuse, Repurpose, Recycle",
        "explanation": "The 5 R's paradigm represents the standard sustainability framework: Refuse, Reduce, Reuse, Repurpose, and Recycle."
    },
    {
        "question": "Which personal lifestyle action best exemplifies the 'Reuse' principle in everyday life?",
        "options": [
            "Throwing away jam glass jars after single use",
            "Cleaning and using empty glass and plastic food containers for storing spices, pulses, and kitchen staples",
            "Leaving air conditioners running with open windows",
            "Buying disposable plastic water bottles daily"
        ],
        "answer": "Cleaning and using empty glass and plastic food containers for storing spices, pulses, and kitchen staples",
        "explanation": "Reusing items repeatedly for alternative or identical purposes prevents waste generation and conserves manufacturing energy."
    }
]

modules_p2.append({
    "id": "m20",
    "moduleNumber": 20,
    "title": "Sustainable Waste Strategies: Disposable Cups Case Study, 5 R's & Stewardship",
    "tagline": "The kulhads vs plastic dilemma, life-cycle analysis, 5 R's framework, and personal accountability.",
    "readingTimeMins": 5,
    "theoryHtml": """
<div class=\"module-content\">
  <div class=\"theory-section\">
    <h4>1. The Disposable Cups Case Study: A Cautionary Tale of Unintended Consequences</h4>
    <p>A prominent case study in environmental science highlights how well-intentioned interventions can trigger unforeseen ecological trade-offs:</p>
    <ul>
      <li><strong>Phase 1 (Reusable Glasses):</strong> Trains historically served tea in reusable glass glasses. Concerns over hygiene and washing water led to demand for disposable options.</li>
      <li><strong>Phase 2 (Plastic Disposable Cups):</strong> Single-use plastic cups were introduced for convenience and hygiene. However, millions of non-biodegradable plastic cups were dumped daily along railway tracks, causing severe litter, cattle deaths, and drain blockages.</li>
      <li><strong>Phase 3 (Earthen Kulhads):</strong> In an effort to promote natural alternatives, unglazed earthen clay cups (<strong>kulhads</strong>) were introduced. However, manufacturing kulhads on a nationwide scale stripped millions of tonnes of fertile agricultural topsoil from riverbanks and consumed massive wood reserves to fire pottery kilns.</li>
      <li><strong>Phase 4 (Disposable Paper Cups):</strong> While seemingly green, standard paper cups are lined with a thin impermeable polyethylene plastic film that prevents natural decomposition in soil and complicates mechanical paper pulping.</li>
    </ul>

    <h4>2. The 5 R's Framework for Environmental Sustainability</h4>
    <p>Sustainable waste management prioritizes the 5 R's in order of environmental impact:</p>
    <ol>
      <li><strong>Refuse:</strong> Say NO to single-use plastics, extra packaging, plastic straws, and disposable carry bags.</li>
      <li><strong>Reduce:</strong> Minimize consumption of resources; print on both sides of paper, turn off unused appliances, buy durable goods.</li>
      <li><strong>Reuse:</strong> Use products repeatedly instead of discarding them (e.g., wash glass pickle jars to store kitchen spices; carry reusable cloth bags).</li>
      <li><strong>Repurpose:</strong> Adapt discarded containers or old items for new functions (e.g., turn cracked ceramic mugs into succulent planters).</li>
      <li><strong>Recycle:</strong> Collect and process recyclable materials (paper, metals, glass, certain plastics) into new products, conserving virgin raw materials.</li>
    </ol>
  </div>
</div>
""",
    "pointsToRemember": [
        "The train tea cup history illustrates ecological trade-offs: plastics litter, while mass-scale kulhads deplete topsoil.",
        "Disposable paper cups are typically lined with a thin plastic film that impedes decomposition.",
        "The 5 R's framework (Refuse, Reduce, Reuse, Repurpose, Recycle) guides effective everyday environmental stewardship."
    ],
    "keyNotes": [
        "Life-cycle analysis reveals hidden ecological costs in disposable products; adopting the 5 R's hierarchy empowers individuals to systematically reduce environmental footprints."
    ],
    "questions": m20_questions
})

with open("scratch/ch13_part2.json", "w", encoding="utf-8") as f:
    json.dump(modules_p2, f, indent=2, ensure_ascii=False)

print(f"Successfully generated Chapter 13 Part 2 (Modules 11 to 20): {len(modules_p2)} modules.")
