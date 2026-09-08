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


modules_p1 = []

# Module 1
m1_questions = get_bank(0, 5) + [
    {
        "question": "Why do enzymes in our digestive system fail to break down synthetic plastics?",
        "options": [
            "Enzymes require high temperature above 100°C to act on plastics",
            "Enzymes are highly specific in their action and act only on specific chemical bonds found in natural organic molecules",
            "Plastics are acidic and neutralize digestive enzymes immediately",
            "Human body produces only lipid-digesting enzymes"
        ],
        "answer": "Enzymes are highly specific in their action and act only on specific chemical bonds found in natural organic molecules",
        "explanation": "Enzymes are biocatalysts possessing unique active sites tailored to specific stereochemical bonds. Synthetic polymers like polyethylene lack glycosidic, peptide, or ester linkages recognized by microbial or digestive enzymes."
    },
    {
        "question": "Which of the following groups contains only biodegradable substances?",
        "options": [
            "Grass, flowers and leather",
            "Grass, wood and plastic",
            "Fruit peels, cake and lime juice",
            "Cake, wood and grass"
        ],
        "answer": "Fruit peels, cake and lime juice",
        "explanation": "Fruit peels, cake, lime juice, grass, flowers, wood, and leather are all biodegradable organic materials derived from living plants or animals."
    },
    {
        "question": "Substances that are broken down by biological processes involving saprophytes are classified as:",
        "options": [
            "Non-biodegradable",
            "Biodegradable",
            "Persistent pollutants",
            "Abiotic minerals"
        ],
        "answer": "Biodegradable",
        "explanation": "Substances broken down by biological micro-organisms (bacteria and fungi) into simpler inorganic nutrients are termed biodegradable substances."
    },
    {
        "question": "Non-biodegradable substances persist in the environment for long periods because:",
        "options": [
            "They are easily metabolized by soil earthworms",
            "Physical processes like heat and pressure act very slowly on their synthetic covalent structures",
            "They instantly evaporate into the upper atmosphere",
            "They convert directly into heavy metals"
        ],
        "answer": "Physical processes like heat and pressure act very slowly on their synthetic covalent structures",
        "explanation": "Non-biodegradable materials like plastics and DDT are inert to biological enzymatic action and degrade extremely slowly only under protracted physical weathering."
    },
    {
        "question": "Which domestic waste item will remain unchanged in a compost pit after six months?",
        "options": [
            "Discarded cotton shirt cloth",
            "Dry fallen tree leaves",
            "Polyethylene carry bag",
            "Leftover vegetable peels"
        ],
        "answer": "Polyethylene carry bag",
        "explanation": "Polyethylene is a synthetic polymer that micro-organisms cannot decompose, remaining virtually intact in soil for decades or centuries."
    }
]

modules_p1.append({
    "id": "m01",
    "moduleNumber": 1,
    "title": "Waste and the Environment: Biodegradable vs Non-Biodegradable Substances",
    "tagline": "Enzyme specificity, saprophytic decomposition, and structural persistence of synthetic polymers.",
    "readingTimeMins": 5,
    "theoryHtml": """
<div class=\"module-content\">
  <div class=\"theory-section\">
    <h4>1. Classification of Environmental Wastes</h4>
    <p>Human day-to-day activities generate enormous quantities of waste materials discarded into our surroundings. These discarded substances are fundamentally classified based on their biodegradability:</p>
    <ul>
      <li><strong>Biodegradable Substances:</strong> Substances that can be broken down into simpler, harmless, inorganic chemical forms by the biological actions of saprophytic micro-organisms (bacteria and fungi). Examples include food leftovers, vegetable and fruit peels, paper, wood, cotton cloth, cow dung, and agricultural residues.</li>
      <li><strong>Non-Biodegradable Substances:</strong> Substances that cannot be broken down by biological processes and micro-organisms. They persist unchanged in the environment for decades or centuries, accumulating and harming ecological health. Examples include plastics, bakelite, polythene bags, synthetic detergents, glass, radioactive wastes, and pesticides like DDT.</li>
    </ul>

    <h4>2. The Principle of Enzyme Specificity</h4>
    <p>Why cannot bacteria or human digestive enzymes decompose plastic or glass? The answer lies in <strong>biocatalytic specificity</strong>:</p>
    <ul>
      <li>Enzymes are protein catalysts with specific three-dimensional active site geometries.</li>
      <li>A specific enzyme acts only on a particular substrate possessing specific chemical bonds (e.g., salivary amylase breaks down $\\alpha$-glycosidic bonds in starch, but cannot break $\\beta$-linkages in cellulose or carbon-carbon bonds in synthetic polyethylene).</li>
      <li>Synthetic materials are man-made and do not possess the chemical linkages recognized by natural decomposer enzymes.</li>
    </ul>

    <h4>3. Environmental Impact of Non-Biodegradable Wastes</h4>
    <p>Because decomposers cannot metabolize non-biodegradable materials, physical processes such as ambient heat, UV solar radiation, and pressure can act on them only extremely slowly. Consequently, they cause severe soil toxicity, clog urban drainage systems, choke stray animals, and leach toxins into aquifers.</p>
  </div>
</div>
""",
    "pointsToRemember": [
        "Biodegradable wastes are broken down into simple inorganic nutrients by microbial saprophytes.",
        "Enzyme specificity explains why natural decomposers cannot digest man-made synthetic polymers like polyethylene.",
        "Non-biodegradable materials persist indefinitely, causing mechanical blockages, toxic leaching, and ecosystem imbalance."
    ],
    "keyNotes": [
        "Enzymes are highly substrate-specific biocatalysts; because synthetic polymers lack natural chemical linkages, decomposers cannot break them down, leading to environmental persistence."
    ],
    "questions": m1_questions
})

# Module 2
m2_questions = get_bank(5, 5) + [
    {
        "question": "Which of the following is considered an artificial or man-made ecosystem?",
        "options": [
            "Tropical rainforest",
            "Crop field",
            "Natural lake",
            "Marine ocean"
        ],
        "answer": "Crop field",
        "explanation": "Crop fields, gardens, and aquariums are artificial (man-made) ecosystems designed, manipulated, and maintained by human intervention."
    },
    {
        "question": "Which abiotic factor directly dictates the rate of transpiration and evaporation in an ecosystem?",
        "options": [
            "Soil pH",
            "Temperature and wind speed",
            "Herbivore density",
            "Decomposer population"
        ],
        "answer": "Temperature and wind speed",
        "explanation": "Physical environmental factors such as temperature, humidity, light intensity, and wind speed are abiotic components that control physical and physiological rates like transpiration."
    },
    {
        "question": "An ecosystem is defined as a self-sustaining structural and functional unit consisting of:",
        "options": [
            "Only the plant species living in a geographical area",
            "Interacting communities of living organisms together with their non-living physical environment",
            "A group of identical animals reproducing in isolation",
            "Only non-living climatic variables like rainfall and soil"
        ],
        "answer": "Interacting communities of living organisms together with their non-living physical environment",
        "explanation": "An ecosystem includes all interacting biotic organisms (plants, animals, microbes) interacting with physical abiotic factors (soil, water, air, sunlight, temperature)."
    },
    {
        "question": "Why does an aquarium require regular cleaning and water change, whereas a natural pond does not?",
        "options": [
            "Aquarium fishes do not produce ammonia wastes",
            "An aquarium is an incomplete, artificial ecosystem lacking a balanced natural community of decomposers",
            "Pond water contains industrial chlorine that destroys fish waste",
            "Natural ponds have no aquatic plants"
        ],
        "answer": "An aquarium is an incomplete, artificial ecosystem lacking a balanced natural community of decomposers",
        "explanation": "Natural ponds have established colonies of decomposer bacteria and aquatic plants that naturally recycle waste, whereas small aquariums lack sufficient decomposer populations, allowing toxic fish excreta to accumulate."
    },
    {
        "question": "Which pair represents exclusively abiotic factors in a terrestrial forest ecosystem?",
        "options": [
            "Sunlight and mycorrhizal fungi",
            "Soil minerals and rainfall",
            "Earthworms and decaying humus",
            "Herbaceous shrubs and atmospheric nitrogen"
        ],
        "answer": "Soil minerals and rainfall",
        "explanation": "Soil minerals and rainfall are non-living physical/chemical components, and therefore strictly abiotic."
    }
]

modules_p1.append({
    "id": "m02",
    "moduleNumber": 2,
    "title": "Ecosystem Architecture: Natural vs Artificial Ecosystems & Abiotic Factors",
    "tagline": "Structural and functional unity of biotic organisms and physical abiotic parameters.",
    "readingTimeMins": 5,
    "theoryHtml": """
<div class=\"module-content\">
  <div class=\"theory-section\">
    <h4>1. Definition of an Ecosystem</h4>
    <p>An <strong>ecosystem</strong> is the basic structural and functional unit of ecology. It is a self-regulating, self-sustaining community where living organisms (biotic community) interact continuously amongst themselves and with the physical, non-living environment (abiotic factors), exchanging matter and energy.</p>

    <h4>2. Components of an Ecosystem</h4>
    <ul>
      <li><strong>Abiotic Components (Physical & Chemical Factors):</strong> Non-living physical parameters including sunlight, temperature, rainfall, atmospheric humidity, wind, soil texture, pH, and dissolved inorganic minerals.</li>
      <li><strong>Biotic Components (Living Beings):</strong> All living organisms categorized by their ecological nutritional role into <em>producers</em>, <em>consumers</em>, and <em>decomposers</em>.</li>
    </ul>

    <h4>3. Natural vs Artificial Ecosystems</h4>
    <table class=\"course-data-table\" style=\"width:100%; border-collapse:collapse; margin:12px 0;\">
      <thead>
        <tr style=\"background:#e0f2fe;\">
          <th style=\"border:1px solid #cbd5e1; padding:8px;\">Feature</th>
          <th style=\"border:1px solid #cbd5e1; padding:8px;\">Natural Ecosystem</th>
          <th style=\"border:1px solid #cbd5e1; padding:8px;\">Artificial (Man-made) Ecosystem</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style=\"border:1px solid #cbd5e1; padding:8px;\"><strong>Origin</strong></td>
          <td style=\"border:1px solid #cbd5e1; padding:8px;\">Formed naturally without human intervention</td>
          <td style=\"border:1px solid #cbd5e1; padding:8px;\">Created, modified, and curated by human beings</td>
        </tr>
        <tr>
          <td style=\"border:1px solid #cbd5e1; padding:8px;\"><strong>Self-Sustainability</strong></td>
          <td style=\"border:1px solid #cbd5e1; padding:8px;\">Complete, self-sustaining nutrient cycles</td>
          <td style=\"border:1px solid #cbd5e1; padding:8px;\">Incomplete; requires external energy, fertilizers, or cleaning</td>
        </tr>
        <tr>
          <td style=\"border:1px solid #cbd5e1; padding:8px;\"><strong>Examples</strong></td>
          <td style=\"border:1px solid #cbd5e1; padding:8px;\">Forests, grasslands, deserts, oceans, lakes, ponds</td>
          <td style=\"border:1px solid #cbd5e1; padding:8px;\">Crop fields (agroecosystem), botanical gardens, aquariums</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
""",
    "pointsToRemember": [
        "An ecosystem comprises living biotic communities interacting dynamically with non-living abiotic factors.",
        "Natural ecosystems (forests, ponds) are naturally self-regulating and self-cleaning through established decomposer cycles.",
        "Artificial ecosystems (aquariums, crop fields) require human inputs like waste clearance, feeding, or fertilizers."
    ],
    "keyNotes": [
        "An ecosystem operates as a functional unit through bidirectional interactions between biotic organisms and abiotic parameters (temperature, light, water, minerals)."
    ],
    "questions": m2_questions
})

# Module 3
m3_questions = get_bank(10, 5) + [
    {
        "question": "What percentage of the total incident solar radiant energy striking green plant leaves is captured and converted into food energy?",
        "options": [
            "About 10%",
            "About 1%",
            "Nearly 50%",
            "Approximately 100%"
        ],
        "answer": "About 1%",
        "explanation": "Terrestrial green plants capture only about 1% of the solar radiant energy incident on their leaves and convert it into chemical bond energy during photosynthesis."
    },
    {
        "question": "Which organisms constitute the first trophic level in all terrestrial and aquatic ecosystems?",
        "options": [
            "Herbivores",
            "Decomposers",
            "Autotrophic producers",
            "Carnivores"
        ],
        "answer": "Autotrophic producers",
        "explanation": "Producers (green plants, phytoplankton, cyanobacteria) synthesize organic food from inorganic carbon dioxide and water using sunlight, forming the base of all food chains."
    },
    {
        "question": "In a marine ecosystem, the dominant primary producers are:",
        "options": [
            "Zooplankton",
            "Phytoplankton and microscopic algae",
            "Crustaceans",
            "Benthic scavenger fish"
        ],
        "answer": "Phytoplankton and microscopic algae",
        "explanation": "Phytoplankton and photosynthetic algae act as the foundational primary producers in oceanic and open aquatic environments."
    },
    {
        "question": "The fundamental biochemical equation through which producers fix solar energy is:",
        "options": [
            "Respiration of glucose into lactic acid",
            "Photosynthetic synthesis of glucose from CO₂ and H₂O with release of O₂",
            "Oxidation of carbohydrates into urea",
            "Decomposition of dead humus into ammonia"
        ],
        "answer": "Photosynthetic synthesis of glucose from CO₂ and H₂O with release of O₂",
        "explanation": "Producers convert light energy into chemical energy: 6CO₂ + 6H₂O + Sunlight → C₆H₁₂O₆ + 6O₂."
    },
    {
        "question": "If sunlight is completely absent in an ecosystem, what is the immediate ecological consequence?",
        "options": [
            "Carnivores immediately multiply",
            "Decomposers become autotrophic",
            "Primary production halts, starving the entire food chain",
            "Abiotic minerals multiply spontaneously"
        ],
        "answer": "Primary production halts, starving the entire food chain",
        "explanation": "Since all heterotrophic life depends directly or indirectly on producers for chemical food energy, cessation of solar energy capture causes the entire trophic hierarchy to collapse."
    }
]

modules_p1.append({
    "id": "m03",
    "moduleNumber": 3,
    "title": "Biotic Components: Producers, Autotrophic Energy Capture & Solar Radiation",
    "tagline": "Radiant energy capture, chlorophyll pigment, and chemical fixation of biomass.",
    "readingTimeMins": 5,
    "theoryHtml": """
<div class=\"module-content\">
  <div class=\"theory-section\">
    <h4>1. Producers (Autotrophs)</h4>
    <p><strong>Producers</strong> are organisms that can manufacture organic nutritional compounds (sugars, starch) from simple inorganic substances ($CO_2$ and $H_2O$) utilizing radiant light energy via the process of <strong>photosynthesis</strong>.</p>
    <ul>
      <li>Producers include all green plants, microscopic photosynthetic algae, and photosynthetic bacteria (cyanobacteria/blue-green algae).</li>
      <li>They possess chlorophyll pigments housed within chloroplasts that capture specific wavelengths of photosynthetically active radiation (PAR).</li>
    </ul>

    <h4>2. Energetics of Solar Capture</h4>
    <p>A crucial ecological reality governs primary productivity on Earth:</p>
    <blockquote style=\"background:#f8fafc; border-left:4px solid #10b981; padding:10px 14px; margin:10px 0; font-style:italic;\">
      \"The green plants in a terrestrial ecosystem capture about <strong>1 percent</strong> of the total energy of sunlight that falls on their leaves and convert it into chemical food energy.\"
    </blockquote>
    <p>This 1% capture rate forms the total gross primary productivity that sustains all consumer trophic levels on Earth.</p>

    <h4>3. Chemical Energy Fixation</h4>
    <p>Through the light and dark reactions of photosynthesis, producers store solar energy in the chemical bonds of glucose and starch:</p>
    $$6CO_2 + 6H_2O + \\text{Solar Energy} \\xrightarrow{\\text{Chlorophyll}} C_6H_{12}O_6 + 6O_2$$
    <p>Producers represent the <strong>first trophic level ($T_1$)</strong> in all ecological food webs.</p>
  </div>
</div>
""",
    "pointsToRemember": [
        "Producers are autotrophs that convert simple inorganic raw materials ($CO_2, H_2O$) into organic food using sunlight.",
        "Terrestrial green plants capture only approximately 1% of total incident sunlight hitting their leaves.",
        "Producers constitute the foundational first trophic level ($T_1$) upon which all heterotrophs depend."
    ],
    "keyNotes": [
        "Only 1% of total incident solar energy is captured by photosynthetic producers to generate chemical food energy."
    ],
    "questions": m3_questions
})

# Module 4
m4_questions = get_bank(15, 5) + [
    {
        "question": "Organisms that feed directly upon producers are categorized as:",
        "options": [
            "Primary consumers or herbivores",
            "Secondary consumers or small carnivores",
            "Tertiary consumers or top predators",
            "Saprophytic decomposers"
        ],
        "answer": "Primary consumers or herbivores",
        "explanation": "Primary consumers feed directly on autotrophic plants and occupy the second trophic level ($T_2$)."
    },
    {
        "question": "A snake preying upon a herbivorous grasshopper would be classified as a:",
        "options": [
            "Primary producer",
            "Primary consumer",
            "Secondary consumer",
            "Top autotroph"
        ],
        "answer": "Secondary consumer",
        "explanation": "Since the grasshopper is a primary consumer (feeding on grass), the snake feeding on it acts as a secondary consumer."
    },
    {
        "question": "Which of the following organisms represents an omnivore in a terrestrial food chain?",
        "options": [
            "Lion",
            "Cow",
            "Human being",
            "Deer"
        ],
        "answer": "Human being",
        "explanation": "Humans consume both plant matter (vegetables, grains) and animal flesh, functioning ecologically as omnivores."
    },
    {
        "question": "Parasites differ from predators because parasites:",
        "options": [
            "Fix solar energy into starch",
            "Live on or inside the host organism and derive nutrition without necessarily killing the host immediately",
            "Decompose dead forest logs into soil minerals",
            "Consume only non-biodegradable plastics"
        ],
        "answer": "Live on or inside the host organism and derive nutrition without necessarily killing the host immediately",
        "explanation": "Parasites (e.g. Cuscuta/amarbel, tapeworms, ticks, leeches) derive nourishment directly from the living tissues of host organisms without instantaneous killing."
    },
    {
        "question": "In a forest ecosystem, which animal is a top carnivore occupying the highest trophic level?",
        "options": [
            "Rabbit",
            "Tiger",
            "Grasshopper",
            "Caterpillar"
        ],
        "answer": "Tiger",
        "explanation": "Tigers are apex predators feeding on secondary and primary consumers; they are not preyed upon by any higher organism in the forest."
    }
]

modules_p1.append({
    "id": "m04",
    "moduleNumber": 4,
    "title": "Consumers: Herbivores, Carnivores, Omnivores & Parasites",
    "tagline": "Heterotrophic feeding strategies, primary to tertiary consumers, and parasitism.",
    "readingTimeMins": 5,
    "theoryHtml": """
<div class=\"module-content\">
  <div class=\"theory-section\">
    <h4>1. Classification of Consumers (Heterotrophs)</h4>
    <p><strong>Consumers</strong> are organisms that cannot synthesize their own organic food and must obtain chemical nutrients by consuming other organisms or their organic products. Consumers are classified into distinct functional categories:</p>

    <h4>2. Consumer Tiers</h4>
    <ul>
      <li><strong>Herbivores (Primary Consumers):</strong> Animals that feed exclusively on autotrophic plants or algae. They occupy the <strong>second trophic level ($T_2$)</strong>. Examples: deer, cattle, rabbits, grasshoppers, zooplankton.</li>
      <li><strong>Carnivores:</strong> Flesh-eating animals that feed upon other animals.
        <ul>
          <li><em>Secondary Consumers ($T_3$):</em> Small carnivores that prey on herbivores (e.g., frogs feeding on insects, small fish eating zooplankton, birds eating worms).</li>
          <li><em>Tertiary Consumers ($T_4$):</em> Larger carnivores that prey upon secondary consumers (e.g., snakes eating frogs).</li>
          <li><em>Apex / Quaternary Consumers:</em> Top predators not preyed upon by any other species (e.g., eagles, tigers, lions).</li>
        </ul>
      </li>
      <li><strong>Omnivores:</strong> Organisms that consume both plants and animals. Examples: humans, bears, crows, cockroaches.</li>
      <li><strong>Parasites:</strong> Organisms that live on or inside a host body and obtain nutrients directly from the host tissues without immediately killing it. Examples: <em>Cuscuta</em> (amarbel), ticks, tapeworms, leeches, roundworms.</li>
    </ul>
  </div>
</div>
""",
    "pointsToRemember": [
        "Consumers are heterotrophs categorized by diet into herbivores, carnivores, omnivores, and parasites.",
        "Herbivores are primary consumers occupying the second trophic level ($T_2$).",
        "Parasites live on or inside hosts deriving nourishment without immediately causing host death."
    ],
    "keyNotes": [
        "Consumers depend directly or indirectly on primary producers, forming successive consumer tiers ($T_2$ to $T_4$) in the ecosystem."
    ],
    "questions": m4_questions
})

# Module 5
m5_questions = get_bank(20, 5) + [
    {
        "question": "What is the primary ecological function of saprophytic decomposers in an ecosystem?",
        "options": [
            "To capture solar radiant energy",
            "To break down complex organic remains into simple inorganic substances that return to the soil and air",
            "To consume live apex carnivores",
            "To synthesize artificial fertilizers"
        ],
        "answer": "To break down complex organic remains into simple inorganic substances that return to the soil and air",
        "explanation": "Decomposers (bacteria and fungi) secrete enzymes to break down dead organic matter into simple inorganic compounds, replenishing soil fertility."
    },
    {
        "question": "Which organisms are primary examples of decomposers?",
        "options": [
            "Fungi and heterotrophic soil bacteria",
            "Green algae and mosses",
            "Eagles and vultures",
            "Caterpillars and beetles"
        ],
        "answer": "Fungi and heterotrophic soil bacteria",
        "explanation": "Bacteria and fungi are microscopic saprophytic decomposers responsible for mineral recycling."
    },
    {
        "question": "What would happen if all decomposers were eliminated from a forest ecosystem?",
        "options": [
            "Dead bodies and organic wastes would pile up indefinitely and soil would become depleted of essential mineral nutrients",
            "Herbivore populations would increase exponentially",
            "Photosynthesis would triple in rate",
            "Rainfall would stop permanently"
        ],
        "answer": "Dead bodies and organic wastes would pile up indefinitely and soil would become depleted of essential mineral nutrients",
        "explanation": "Without decomposers, dead plant and animal remains would accumulate, and elemental nutrients (nitrogen, phosphorus, potassium) would remain locked up, halting plant growth."
    },
    {
        "question": "Saprophytes obtain their nutrition through which mode?",
        "options": [
            "Phagocytosis of live prey",
            "Extracellular enzymatic digestion of decaying matter followed by absorption of soluble nutrients",
            "Photolysis of water molecules inside chloroplasts",
            "Haustorial suction from vascular bundles of living trees"
        ],
        "answer": "Extracellular enzymatic digestion of decaying matter followed by absorption of soluble nutrients",
        "explanation": "Saprophytes release digestive enzymes into decaying organic substrate to convert insoluble polymers into soluble monomers, which are then absorbed through their cell walls."
    },
    {
        "question": "Decomposers differ from scavengers (such as vultures) because decomposers:",
        "options": [
            "Feed only on live producers",
            "Perform biochemical breakdown of organic matter to the molecular/mineral level",
            "Do not require oxygen for any cellular process",
            "Produce radioactive byproducts"
        ],
        "answer": "Perform biochemical breakdown of organic matter to the molecular/mineral level",
        "explanation": "Scavengers ingest chunks of dead animal flesh, whereas true decomposers biochemically mineralize complex organic residues into basic inorganic soil nutrients."
    }
]

modules_p1.append({
    "id": "m05",
    "moduleNumber": 5,
    "title": "Decomposers: Microorganisms, Organic Recycling & Soil Replenishment",
    "tagline": "Extracellular digestion, nutrient mineralization, and closure of biochemical cycles.",
    "readingTimeMins": 5,
    "theoryHtml": """
<div class=\"module-content\">
  <div class=\"theory-section\">
    <h4>1. Role and Nature of Decomposers</h4>
    <p><strong>Decomposers</strong> are saprophytic micro-organisms—chiefly bacteria and fungi—that feed on the dead bodies, decaying tissues, and metabolic waste products of plants and animals.</p>

    <h4>2. Mode of Nutrition: Saprophytic Extracellular Digestion</h4>
    <ul>
      <li>Decomposers release specialized extracellular digestive enzymes directly onto dead decaying organic substrate.</li>
      <li>These enzymes break down complex insoluble biological polymers (proteins, cellulose, lipids) into simple, soluble inorganic molecules (nitrates, phosphates, sulfates, carbon dioxide, and water).</li>
      <li>The micro-organisms absorb the dissolved nutrients necessary for their own cellular metabolism, leaving the remaining inorganic minerals in the soil and water.</li>
    </ul>

    <h4>3. Crucial Ecological Importance</h4>
    <ul>
      <li><strong>Nutrient Cycling & Soil Fertility:</strong> They act as nature's ultimate recyclers, replenishing soil nutrients so that autotrophic producers can absorb them again through roots.</li>
      <li><strong>Natural Cleansing Agents:</strong> Without decomposers, dead animal carcasses and fallen leaves would accumulate endlessly, choking all habitats.</li>
    </ul>
  </div>
</div>
""",
    "pointsToRemember": [
        "Decomposers are saprophytic bacteria and fungi that break down dead organic matter.",
        "They utilize extracellular enzymes to mineralize complex organic polymers into simple inorganic nutrients.",
        "They maintain global biogeochemical cycles by returning minerals back to soil and water."
    ],
    "keyNotes": [
        "Decomposers close the ecological nutrient loop by converting dead organic biomass into soil minerals available for root absorption by producers."
    ],
    "questions": m5_questions
})

# Module 6
m6_questions = get_bank(25, 5) + [
    {
        "question": "A sequential series of organisms through which energy transfers in the form of food is known as a:",
        "options": [
            "Biogeochemical cycle",
            "Food chain",
            "Ecological niche",
            "Pedological horizon"
        ],
        "answer": "Food chain",
        "explanation": "A food chain represents a linear sequence of organisms where each organism feeds on the preceding one, transferring matter and energy."
    },
    {
        "question": "In the food chain: Grass → Grasshopper → Frog → Snake → Eagle, which organism occupies the fourth trophic level ($T_4$)?",
        "options": [
            "Grasshopper",
            "Frog",
            "Snake",
            "Eagle"
        ],
        "answer": "Snake",
        "explanation": "Grass is $T_1$, Grasshopper is $T_2$, Frog is $T_3$, Snake is $T_4$, and Eagle is $T_5$."
    },
    {
        "question": "Which of the following represents a correct aquatic food chain in a freshwater pond?",
        "options": [
            "Phytoplankton → Zooplankton → Small fish → Large fish",
            "Large fish → Small fish → Zooplankton → Phytoplankton",
            "Zooplankton → Phytoplankton → Small fish → Frog",
            "Grass → Insect → Phytoplankton → Bird"
        ],
        "answer": "Phytoplankton → Zooplankton → Small fish → Large fish",
        "explanation": "Phytoplankton (producers) are grazed upon by zooplankton (primary consumers), which are eaten by small fish (secondary consumers), which in turn are consumed by large fish (tertiary consumers)."
    },
    {
        "question": "Each step or level of a food chain where transfer of food energy takes place is termed a:",
        "options": [
            "Trophic level",
            "Biomass gradient",
            "Abiotic phase",
            "Ecological territory"
        ],
        "answer": "Trophic level",
        "explanation": "Each distinct feeding step in a food chain is designated as a trophic level."
    },
    {
        "question": "Which organism occupies the second trophic level in a forest food chain consisting of Trees, Deer, and Lion?",
        "options": [
            "Trees",
            "Deer",
            "Lion",
            "Vulture"
        ],
        "answer": "Deer",
        "explanation": "Trees are the primary producers ($T_1$); deer is the primary consumer/herbivore occupying $T_2$; lion is the secondary consumer ($T_3$)."
    }
]

modules_p1.append({
    "id": "m06",
    "moduleNumber": 6,
    "title": "Food Chains: Structure, Sequence of Organisms & Trophic Levels",
    "tagline": "Linear feeding sequences, trophic level designations, and ecosystem energy conduit.",
    "readingTimeMins": 5,
    "theoryHtml": """
<div class=\"module-content\">
  <div class=\"theory-section\">
    <h4>1. Definition of a Food Chain</h4>
    <p>A <strong>food chain</strong> is a linear, sequential unidirectional pathway of organisms in an ecosystem through which food energy is transferred as one organism eats another.</p>

    <h4>2. Concept of Trophic Levels</h4>
    <p>Each feeding step or nutritive stage in a food chain constitutes a <strong>trophic level</strong> (from Greek <em>trophe</em> meaning nourishment):</p>
    <ul>
      <li><strong>First Trophic Level ($T_1$):</strong> Autotrophs or producers (green plants, phytoplankton).</li>
      <li><strong>Second Trophic Level ($T_2$):</strong> Herbivores or primary consumers (cows, deer, caterpillars, zooplankton).</li>
      <li><strong>Third Trophic Level ($T_3$):</strong> Small carnivores or secondary consumers (frogs, foxes, small fish).</li>
      <li><strong>Fourth Trophic Level ($T_4$):</strong> Larger carnivores or tertiary consumers (snakes, predatory birds, large fish).</li>
    </ul>

    <h4>3. Representative Examples of Food Chains</h4>
    <ul>
      <li><strong>Terrestrial Forest:</strong> $\\text{Plants } (T_1) \\longrightarrow \\text{Deer } (T_2) \\longrightarrow \\text{Tiger } (T_3)$</li>
      <li><strong>Grassland Ecosystem:</strong> $\\text{Grass } (T_1) \\longrightarrow \\text{Grasshopper } (T_2) \\longrightarrow \\text{Frog } (T_3) \\longrightarrow \\text{Snake } (T_4) \\longrightarrow \\text{Eagle } (T_5)$</li>
      <li><strong>Aquatic Pond:</strong> $\\text{Phytoplankton } (T_1) \\longrightarrow \\text{Zooplankton } (T_2) \\longrightarrow \\text{Small fish } (T_3) \\longrightarrow \\text{Large fish } (T_4)$</li>
    </ul>
  </div>
</div>
""",
    "pointsToRemember": [
        "A food chain is a unidirectional linear sequence of who eats whom in an ecosystem.",
        "Each distinct feeding link is called a trophic level ($T_1, T_2, T_3, T_4$).",
        "Producers form $T_1$, herbivores form $T_2$, and carnivores occupy $T_3$ and higher levels."
    ],
    "keyNotes": [
        "Food chains delineate the sequential transfer of matter and energy across distinct trophic levels from autotrophic producers to apex carnivores."
    ],
    "questions": m6_questions
})

# Module 7
m7_questions = get_bank(30, 5) + [
    {
        "question": "According to the 10 Percent Law of energy transfer, how much energy is typically transferred from one trophic level to the next higher level?",
        "options": [
            "About 50%",
            "About 10%",
            "About 90%",
            "About 1%"
        ],
        "answer": "About 10%",
        "explanation": "Raymond Lindeman's 10% law states that on average, only 10% of the energy entering a trophic level is stored as organic biomass and available to the next consumer level."
    },
    {
        "question": "If 10,000 Joules of solar energy falls on green plants, how much energy is fixed into plant biomass, and how much is then transferred to herbivores?",
        "options": [
            "Fixed by plants = 1,000 J; transferred to herbivores = 100 J",
            "Fixed by plants = 100 J; transferred to herbivores = 10 J",
            "Fixed by plants = 10,000 J; transferred to herbivores = 1,000 J",
            "Fixed by plants = 10 J; transferred to herbivores = 1 J"
        ],
        "answer": "Fixed by plants = 100 J; transferred to herbivores = 10 J",
        "explanation": "Green plants capture 1% of incident sunlight: 1% of 10,000 J = 100 J. Herbivores receive 10% of plant energy: 10% of 100 J = 10 J."
    },
    {
        "question": "What happens to the remaining 90% of energy at each trophic level?",
        "options": [
            "It is converted back into radiant sunlight",
            "It is lost to the environment as metabolic heat, respiration, movement, and excretion",
            "It accumulates as non-biodegradable heavy metals",
            "It is absorbed by clouds to form rain"
        ],
        "answer": "It is lost to the environment as metabolic heat, respiration, movement, and excretion",
        "explanation": "Organisms utilize the majority (~90%) of acquired energy for basal metabolism, cellular respiration, locomotion, and heat loss to the ambient environment."
    },
    {
        "question": "Why is the flow of energy in any food chain strictly unidirectional (one-way)?",
        "options": [
            "Energy captured by autotrophs cannot revert back to solar radiant energy, and energy passed to herbivores cannot return to plants",
            "Sunlight absorbs heat emitted by top carnivores",
            "Decomposers turn energy into fresh photons",
            "Herbivores send digested food backward to roots"
        ],
        "answer": "Energy captured by autotrophs cannot revert back to solar radiant energy, and energy passed to herbivores cannot return to plants",
        "explanation": "Energy flows irreversibly from the Sun → producers → consumers → decomposers; dissipated thermal energy cannot be recaptured by photosynthetic organisms."
    },
    {
        "question": "In a food chain: Grain → Mice → Snake → Peacock. If grains contain 20,000 J of energy, how much energy reaches the Peacock?",
        "options": [
            "2,000 J",
            "200 J",
            "20 J",
            "2 J"
        ],
        "answer": "20 J",
        "explanation": "Grain = 20,000 J; Mice (10%) = 2,000 J; Snake (10%) = 200 J; Peacock (10%) = 20 J."
    }
]

modules_p1.append({
    "id": "m07",
    "moduleNumber": 7,
    "title": "The 10 Percent Law of Energy Transfer & Unidirectional Flow of Energy",
    "tagline": "Lindeman's thermodynamic trophic efficiency, metabolic dissipation, and one-way energy flux.",
    "readingTimeMins": 5,
    "theoryHtml": """
<div class=\"module-content\">
  <div class=\"theory-section\">
    <h4>1. Raymond Lindeman's 10% Law of Energy Transfer (1942)</h4>
    <p>When green plants are consumed by herbivores, a large portion of energy is lost as heat to the environment, utilized during cellular respiration, digestion, and daily physiological work. Only a small fraction is converted into new biomass:</p>
    <blockquote style=\"background:#f8fafc; border-left:4px solid #f59e0b; padding:10px 14px; margin:10px 0; font-style:italic;\">
      \"An average of only <strong>10 percent</strong> of the food eaten is turned into the organism's own body tissue and made available for the next level of consumers.\"
    </blockquote>

    <h4>2. Quantitative Energy Calculation Across Trophic Levels</h4>
    <p>Consider 1,000,000 Joules of incident solar energy:</p>
    <ul>
      <li><strong>Incident Sunlight:</strong> $1,000,000\\text{ J}$</li>
      <li><strong>Captured by Producers ($T_1$, 1% rule):</strong> $10,000\\text{ J}$</li>
      <li><strong>Primary Consumers / Herbivores ($T_2$, 10% of $T_1$):</strong> $1,000\\text{ J}$</li>
      <li><strong>Secondary Consumers ($T_3$, 10% of $T_2$):</strong> $100\\text{ J}$</li>
      <li><strong>Tertiary Consumers ($T_4$, 10% of $T_3$):</strong> $10\\text{ J}$</li>
    </ul>

    <h4>3. The Unidirectional Flow of Energy</h4>
    <p>Unlike mineral nutrients (carbon, nitrogen, water) which cycle endlessly, <strong>energy does not cycle</strong>:</p>
    <ul>
      <li>Energy enters ecosystems from the sun and is captured by autotrophs.</li>
      <li>It passes progressively through consumer tiers in one direction.</li>
      <li>Energy lost as metabolic heat dissipated into the surroundings can never be recaptured by green plants for photosynthesis.</li>
    </ul>
  </div>
</div>
""",
    "pointsToRemember": [
        "Lindeman's 10% law: only ~10% of energy at any trophic level is transferred to the next higher level.",
        "Approximately 90% of consumed energy is consumed in life processes (respiration, movement) and lost as heat.",
        "Energy flow through an ecosystem is strictly unidirectional and never reversible."
    ],
    "keyNotes": [
        "Energy flow is strictly one-way: autotrophs capture solar radiant energy, which diminishes by 90% at each successive consumer tier due to metabolic work and heat dissipation."
    ],
    "questions": m7_questions
})

# Module 8
m8_questions = get_bank(35, 5) + [
    {
        "question": "Why do food chains in nature rarely contain more than 3 to 4 trophic levels?",
        "options": [
            "Higher animals refuse to eat below their social rank",
            "The loss of energy at each step is so great that very little usable energy remains after four trophic levels",
            "Animals at the 5th level always become herbivores",
            "Decomposers eliminate organisms above the 4th level"
        ],
        "answer": "The loss of energy at each step is so great that very little usable energy remains after four trophic levels",
        "explanation": "Because 90% of energy is dissipated at each level, by the 4th or 5th trophic level, the residual energy is insufficient to sustain the metabolic requirements of another population."
    },
    {
        "question": "Which trophic level generally has the greatest total number of individual organisms in an ecosystem?",
        "options": [
            "Producers (T₁)",
            "Herbivores (T₂)",
            "Secondary consumers (T₃)",
            "Apex predators (T₄)"
        ],
        "answer": "Producers (T₁)",
        "explanation": "Because energy availability is greatest at the base, producers generally support the largest number of individuals in natural ecosystems."
    },
    {
        "question": "If an ecosystem contains only 5 Joules of energy at the tertiary consumer level, could a quaternary consumer population survive exclusively on them?",
        "options": [
            "Yes, because energy increases with trophic height",
            "No, because the quaternary consumer would receive only ~0.5 J, which cannot support a viable breeding population",
            "Yes, because predators need zero energy to survive",
            "No, because quaternary consumers only eat plants"
        ],
        "answer": "No, because the quaternary consumer would receive only ~0.5 J, which cannot support a viable breeding population",
        "explanation": "With only 5 J at $T_4$, $T_5$ would obtain only 0.5 J (10%), which is thermodynamically inadequate to offset foraging metabolic costs."
    },
    {
        "question": "Why are top predators like tigers and eagles relatively rare compared to herbivores like deer and rabbits?",
        "options": [
            "Top predators reproduce at a much slower rate due to restricted energy availability at high trophic tiers",
            "Herbivores consume toxic chemicals that repel predators",
            "Predators hibernate 11 months per year",
            "Top predators do not require food"
        ],
        "answer": "Top predators reproduce at a much slower rate due to restricted energy availability at high trophic tiers",
        "explanation": "Because huge amounts of primary biomass are needed to support even a small amount of apex predator biomass, the carrying capacity for apex predators is inherently low."
    },
    {
        "question": "A student constructs an artificial food chain: Grass → Insect → Frog → Snake → Hawk → Leopard. What is ecologically flawed about this proposal?",
        "options": [
            "Grass cannot be digested by insects",
            "Hawks never fly near snakes",
            "A 6-level food chain is thermodynamically unsustainable in nature due to extreme energy diminution",
            "Leopards only consume aquatic phytoplankton"
        ],
        "answer": "A 6-level food chain is thermodynamically unsustainable in nature due to extreme energy diminution",
        "explanation": "Six trophic levels would dilute available primary energy to an infinitesimal fraction (~0.001%), incapable of supporting a large warm-blooded feline predator."
    }
]

modules_p1.append({
    "id": "m08",
    "moduleNumber": 8,
    "title": "Diminishing Energy & Structural Limitation of Trophic Levels (3-4 Steps)",
    "tagline": "Thermodynamic constraints, carrying capacity, and pyramid of numbers.",
    "readingTimeMins": 5,
    "theoryHtml": """
<div class=\"module-content\">
  <div class=\"theory-section\">
    <h4>1. Thermodynamic Restriction on Food Chain Length</h4>
    <p>In almost all natural ecosystems, food chains consist of only <strong>three or four trophic levels</strong>. The reason is rooted in the <strong>Second Law of Thermodynamics</strong> and the 10% energy transfer rule:</p>
    <ul>
      <li>Since approximately 90% of energy is lost as metabolic heat and respiration at each step, the quantity of available chemical energy shrinks by an order of magnitude at each successive level.</li>
      <li>After 3 or 4 transfers, the amount of usable energy left is so vanishingly small ($0.1\\% - 0.01\\%$ of initial primary productivity) that it cannot sustain the metabolic maintenance, hunting expenditure, and reproductive demands of another consumer population.</li>
    </ul>

    <h4>2. Ecological Pyramids of Numbers and Biomass</h4>
    <p>Because energy decreases steeply up the food chain:</p>
    <ul>
      <li>The population density of organisms is generally largest at the bottom (producers, $T_1$).</li>
      <li>Primary consumers ($T_2$) are fewer than plants, secondary consumers ($T_3$) are fewer than herbivores, and apex predators ($T_4$) are the rarest of all.</li>
      <li>This explains why vast savannah grasslands support millions of grass plants, thousands of zebras, but only dozens of lions.</li>
    </ul>
  </div>
</div>
""",
    "pointsToRemember": [
        "Food chains are usually restricted to 3 to 4 steps because usable energy drops by ~90% at each transfer.",
        "Beyond the 4th level, remaining energy is insufficient to support another viable consumer tier.",
        "Producers generally have the highest population count and biomass, whereas apex predators have the lowest."
    ],
    "keyNotes": [
        "Severe energy attenuation across successive trophic levels restricts natural food chains to 3 or 4 feeding links, limiting apex predator populations."
    ],
    "questions": m8_questions
})

# Module 9
m9_questions = get_bank(40, 5) + [
    {
        "question": "The phenomenon of progressive increase in the concentration of harmful non-biodegradable chemicals at each successive trophic level is called:",
        "options": [
            "Eutrophication",
            "Biological magnification (Biomagnification)",
            "Thermal pollution",
            "Photosynthetic assimilation"
        ],
        "answer": "Biological magnification (Biomagnification)",
        "explanation": "Biological magnification refers to the increasing accumulation of persistent, non-biodegradable toxins (like DDT, methylmercury) along successive trophic tiers."
    },
    {
        "question": "Which trophic level accumulates the MAXIMUM concentration of pesticide like DDT in a food chain?",
        "options": [
            "Producers (T₁)",
            "Primary consumers (T₂)",
            "Secondary consumers (T₃)",
            "Top carnivores / Apex consumers occupying the highest trophic level"
        ],
        "answer": "Top carnivores / Apex consumers occupying the highest trophic level",
        "explanation": "Because humans and top predators occupy the pinnacle of the food chain, they ingest accumulated toxins from all lower trophic levels, suffering maximum biomagnification."
    },
    {
        "question": "Why cannot the human body or animal tissues eliminate non-biodegradable pesticides like DDT naturally?",
        "options": [
            "Pesticides are water-soluble and instantly evaporate",
            "These chemicals are lipophilic (fat-soluble), non-biodegradable, and resist enzymatic metabolic breakdown, storing in fatty tissues",
            "They are converted into calcium in bones",
            "They turn into essential vitamins"
        ],
        "answer": "These chemicals are lipophilic (fat-soluble), non-biodegradable, and resist enzymatic metabolic breakdown, storing in fatty tissues",
        "explanation": "Non-biodegradable chlorinated hydrocarbons (e.g. DDT) dissolve in animal adipose (fat) tissues and cannot be metabolized or excreted by kidneys."
    },
    {
        "question": "Pesticides applied to crops reach aquatic water bodies primarily through:",
        "options": [
            "Evaporation and condensation",
            "Surface soil runoff during rainfall and percolation into groundwater",
            "Root respiration of weeds",
            "Transpiration from plant stomata"
        ],
        "answer": "Surface soil runoff during rainfall and percolation into groundwater",
        "explanation": "Agricultural pesticides wash off foliage and topsoil into streams, ponds, and rivers, or seep into subterranean water tables."
    },
    {
        "question": "In an aquatic ecosystem: Water (0.000003 ppm DDT) → Plankton (0.04 ppm) → Small Fish (0.5 ppm) → Fish-eating bird (25 ppm). The bird exhibits an accumulation factor of approximately:",
        "options": [
            "10 times",
            "1,000 times",
            "Over 8 million times",
            "50 times"
        ],
        "answer": "Over 8 million times",
        "explanation": "25 ppm divided by 0.000003 ppm equals ~8.33 million times concentration increase from ambient water to apex predator."
    }
]

modules_p1.append({
    "id": "m09",
    "moduleNumber": 9,
    "title": "Biological Magnification (Biomagnification): Non-Biodegradable Toxins & Peak Accumulation",
    "tagline": "Pesticide persistence, fat solubility, and dangerous accumulation at the pinnacle of food chains.",
    "readingTimeMins": 5,
    "theoryHtml": """
<div class=\"module-content\">
  <div class=\"theory-section\">
    <h4>1. Definition of Biological Magnification</h4>
    <p><strong>Biological Magnification (Biomagnification)</strong> is the progressive accumulation and concentration of non-biodegradable, toxic chemical substances (such as chemical pesticides, DDT, polychlorinated biphenyls, and heavy metals like mercury and lead) at successively higher trophic levels in a food chain.</p>

    <h4>2. Mechanism of Biomagnification</h4>
    <ul>
      <li><strong>Entry into Ecosystem:</strong> Chemical pesticides and fertilizers sprayed on agricultural crops wash into the soil and adjacent freshwater bodies through rainwater runoff.</li>
      <li><strong>Absorption:</strong> Soil minerals and pesticides are absorbed by terrestrial plant roots, while aquatic producers (phytoplankton) absorb them from contaminated water.</li>
      <li><strong>Inability to Metabolize or Excrete:</strong> Because these synthetic toxins are non-biodegradable and lipophilic (fat-soluble), animal bodies lack enzymes to break them down or excrete them through kidneys; they accumulate permanently in adipose fat tissues.</li>
      <li><strong>Bioaccumulation Amplification:</strong> Since a consumer at level $T_{n+1}$ must eat many individual organisms from level $T_n$ over its lifetime, the toxin concentrates exponentially up the chain.</li>
    </ul>

    <h4>3. Maximum Burden on Humans and Apex Predators</h4>
    <p>Because humans occupy the highest trophic level in diverse omnivorous food chains, our bodies accumulate the <strong>highest concentration of toxic chemicals</strong>, leading to endocrine disruption, organ damage, and chronic neurotoxic disorders.</p>
  </div>
</div>
""",
    "pointsToRemember": [
        "Biomagnification is the increasing concentration of non-biodegradable toxins at successive trophic levels.",
        "Non-biodegradable substances cannot be metabolized or excreted, accumulating in animal fat tissues.",
        "Apex consumers, including human beings, experience the maximum chemical toxic burden."
    ],
    "keyNotes": [
        "Because synthetic pesticides cannot be metabolized or excreted, they magnify exponentially up trophic tiers, reaching dangerous peak concentrations in apex predators and humans."
    ],
    "questions": m9_questions
})

# Module 10
m10_questions = get_bank(45, 5) + [
    {
        "question": "A network of interconnected food chains providing alternate pathways for food energy flow is termed a:",
        "options": [
            "Food web",
            "Trophic column",
            "Biochemical loop",
            "Monoculture chain"
        ],
        "answer": "Food web",
        "explanation": "A food web consists of branched, interconnected feeding linkages reflecting the multifaceted dietary habits of organisms in an ecosystem."
    },
    {
        "question": "Why does a food web offer greater stability to an ecosystem than a single isolated food chain?",
        "options": [
            "It forces all animals to eat only grass",
            "It provides alternative food sources if one prey species suffers a population decline",
            "It eliminates the need for solar energy",
            "It prevents decomposers from acting"
        ],
        "answer": "It provides alternative food sources if one prey species suffers a population decline",
        "explanation": "In a food web, predators are not reliant on a single prey species. If one prey species decreases, predators switch to alternates, preventing trophic collapse."
    },
    {
        "question": "In nature, rather than straight linear chains, feeding relationships are naturally branched because:",
        "options": [
            "Each organism generally consumes multiple species and is eaten by multiple other species",
            "Plants do not possess fixed trophic levels",
            "Energy flows in two directions simultaneously",
            "Decomposers turn into predators at night"
        ],
        "answer": "Each organism generally consumes multiple species and is eaten by multiple other species",
        "explanation": "Real organisms have diverse diets; an owl eats mice, frogs, and small birds, linking multiple food chains into a web."
    },
    {
        "question": "Which statement about food webs is scientifically correct?",
        "options": [
            "Energy flows cyclically backwards to the sun in a food web",
            "A food web is an interconnected series of food chains with multiple feeding paths, yet energy flow remains strictly unidirectional",
            "Food webs have no primary producers",
            "Food webs exist only in marine deep-sea trenches"
        ],
        "answer": "A food web is an interconnected series of food chains with multiple feeding paths, yet energy flow remains strictly unidirectional",
        "explanation": "Although pathways branch and interconnect, energy flow through the web is still strictly one-way from the sun to autotrophs and through consumers."
    },
    {
        "question": "If an invasive disease wipes out the rabbit population in a grassland food web, the hawk survives because:",
        "options": [
            "The hawk can switch to preying upon mice, frogs, and lizards",
            "The hawk begins photosynthesizing",
            "The hawk feeds exclusively on decaying leaves",
            "The hawk enters cryptobiosis"
        ],
        "answer": "The hawk can switch to preying upon mice, frogs, and lizards",
        "explanation": "Alternative feeding pathways in the food web buffer predators against the localized extinction of a single prey species."
    }
]

modules_p1.append({
    "id": "m10",
    "moduleNumber": 10,
    "title": "Food Webs: Interconnected Feeding Networks & Ecological Stability",
    "tagline": "Branching trophic pathways, alternate energy routes, and community resilience.",
    "readingTimeMins": 5,
    "theoryHtml": """
<div class=\"module-content\">
  <div class=\"theory-section\">
    <h4>1. Limitations of Linear Food Chains</h4>
    <p>In natural ecosystems, feeding relationships are rarely isolated linear chains. Organisms do not feed exclusively on a single food item: an owl may eat field mice, frogs, grasshoppers, and snakes; a lizard eats diverse insects; humans eat cereals, fruits, dairy, and meat.</p>

    <h4>2. Concept of a Food Web</h4>
    <p>A <strong>food web</strong> is a complex, branched network of interconnected food chains operating simultaneously within an ecological community. It represents all possible pathways of energy and matter transfer among species.</p>

    <h4>3. Ecological Significance and Ecosystem Resilience</h4>
    <ul>
      <li><strong>Alternative Food Channels:</strong> If drought or disease decimates one herbivore species (e.g., rabbits), predators (e.g., foxes, hawks) survive by increasing predation on mice, squirrels, or birds.</li>
      <li><strong>Equilibrium and Homeostasis:</strong> The greater the biodiversity and complexity of a food web, the more stable and resilient the ecosystem is against environmental perturbations.</li>
      <li><strong>Unidirectional Energy Rule:</strong> Even within a complex multi-branched food web, the overall energetic flow remains strictly unidirectional—dissipating as heat at each trophic node.</li>
    </ul>
  </div>
</div>
""",
    "pointsToRemember": [
        "A food web is a network of interconnected food chains representing real dietary interactions in nature.",
        "Branching feeding pathways provide alternative food options, making ecosystems stable and resilient.",
        "Despite multi-branched feeding options, energy flow through a food web remains strictly unidirectional."
    ],
    "keyNotes": [
        "Complex food webs confer ecological stability by offering alternative trophic conduits, buffering communities against population collapses of individual species."
    ],
    "questions": m10_questions
})

with open("scratch/ch13_part1.json", "w", encoding="utf-8") as f:
    json.dump(modules_p1, f, indent=2, ensure_ascii=False)

print(f"Successfully generated Chapter 13 Part 1 (Modules 1 to 10): {len(modules_p1)} modules.")
