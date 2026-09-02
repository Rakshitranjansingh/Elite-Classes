/* =========================================================================
   ELITE CLASSES — CLASS 10 SCIENCE TEST SERIES
   Chapter 13: Our Environment (100 Questions Master Assessment)
   NCERT Standard Assessment with Proper Scientific & Mathematical Typography
   Difficulty Distribution: 50 Easy | 10 Medium | 10 Hard | 20 Tricky | 10 Very Hard
   ========================================================================= */

const Class10ScienceChapter13FullBank = {
    id: 'ts_c10_sci_ch13',
    title: 'Chapter 13: Our Environment Assessment',
    subject: 'Science',
    cls: 'Class 10',
    duration_mins: 120,
    total_marks: 400,
    marks_per_question: 4,
    negative_mark: 1,
    questions_count: 100,
    questions: [
        // =================================================================
        // TIER 1: EASY QUESTIONS (Q1 - Q50)
        // Direct NCERT Concepts, Ecosystem, Trophic Levels, 10% Law, Ozone & Waste
        // =================================================================
        {
            id: 1,
            question: "An ecosystem consists of interacting living organisms together with the non-living physical factors. What are these two components called?",
            options: [
                { key: 'A', text: "Producers and Consumers" },
                { key: 'B', text: "Biotic components and Abiotic components" },
                { key: 'C', text: "Biodegradable and Non-biodegradable components" },
                { key: 'D', text: "Flora and Fauna only" }
            ],
            correct_option: 'B',
            explanation: "An ecosystem comprises living biotic factors (plants, animals, microbes) and physical abiotic factors (temperature, rainfall, soil, wind, minerals)."
        },
        {
            id: 2,
            question: "Which of the following is an example of an ARTIFICIAL (human-made) ecosystem?",
            options: [
                { key: 'A', text: "Forest" },
                { key: 'B', text: "Aquarium and Crop-field (or Garden)" },
                { key: 'C', text: "Pond" },
                { key: 'D', text: "Lake" }
            ],
            correct_option: 'B',
            explanation: "Aquariums, botanical gardens, and agricultural crop-fields are artificial human-engineered ecosystems, whereas forests, ponds, and lakes are natural."
        },
        {
            id: 3,
            question: "Which organisms synthesize organic food compounds (sugar and starch) from inorganic substances using sunlight and chlorophyll?",
            options: [
                { key: 'A', text: "Herbivores" },
                { key: 'B', text: "Producers (Autotrophs / Green plants and blue-green algae)" },
                { key: 'C', text: "Decomposers" },
                { key: 'D', text: "Carnivores" }
            ],
            correct_option: 'B',
            explanation: "Green plants and photosynthetic bacteria are primary producers (autotrophs) that fix radiant solar energy into chemical food energy."
        },
        {
            id: 4,
            question: "What percentage of solar energy falling on the leaves of green terrestrial plants is captured and converted into food energy?",
            options: [
                { key: 'A', text: "10%" },
                { key: 'B', text: "About 1%" },
                { key: 'C', text: "50%" },
                { key: 'D', text: "100%" }
            ],
            correct_option: 'B',
            explanation: "Terrestrial green plants capture only about 1% of total incident sunlight energy on their foliage for photosynthesis."
        },
        {
            id: 5,
            question: "According to Lindeman's 10% Energy Transfer Law in ecology, what percentage of food energy is transferred from one trophic level to the next?",
            options: [
                { key: 'A', text: "1%" },
                { key: 'B', text: "10% (an average of 10% of organic matter reaches the next consumer level)" },
                { key: 'C', text: "50%" },
                { key: 'D', text: "90%" }
            ],
            correct_option: 'B',
            explanation: "Approximately 10% of biomass energy is incorporated at each progressive trophic step; ~90% is lost as metabolic heat, respiration, and excretion."
        },
        {
            id: 6,
            question: "Which organisms occupy the FIRST trophic level in every terrestrial and aquatic food chain?",
            options: [
                { key: 'A', text: "Herbivores" },
                { key: 'B', text: "Producers (Autotrophs)" },
                { key: 'C', text: "Decomposers" },
                { key: 'D', text: "Top carnivores" }
            ],
            correct_option: 'B',
            explanation: "Producers (autotrophs) form the base (first trophic level) of all biological food chains."
        },
        {
            id: 7,
            question: "Herbivores (primary consumers that feed directly on green plants) occupy which trophic level?",
            options: [
                { key: 'A', text: "First trophic level" },
                { key: 'B', text: "Second trophic level" },
                { key: 'C', text: "Third trophic level" },
                { key: 'D', text: "Fourth trophic level" }
            ],
            correct_option: 'B',
            explanation: "Herbivores consume producers and occupy the second trophic level (T₂)."
        },
        {
            id: 8,
            question: "Small carnivores that feed on herbivores (secondary consumers) belong to which trophic level?",
            options: [
                { key: 'A', text: "First trophic level" },
                { key: 'B', text: "Second trophic level" },
                { key: 'C', text: "Third trophic level" },
                { key: 'D', text: "Fourth trophic level" }
            ],
            correct_option: 'C',
            explanation: "Secondary consumers (small carnivores like frogs and small fish) occupy the third trophic level (T₃)."
        },
        {
            id: 9,
            question: "Why do most natural food chains contain only 3 or 4 trophic levels?",
            options: [
                { key: 'A', text: "Carnivores refuse to eat after 4 steps" },
                { key: 'B', text: "The loss of energy at each step (90% lost) is so great that negligible usable energy remains after four trophic levels" },
                { key: 'C', text: "Decomposers destroy top carnivores" },
                { key: 'D', text: "Solar energy decreases every year" }
            ],
            correct_option: 'B',
            explanation: "Progressive 90% thermodynamic energy loss limits food chain length; by the 4th/5th level, remaining energy cannot support viable populations."
        },
        {
            id: 10,
            question: "What is the nature of energy flow in an ecosystem?",
            options: [
                { key: 'A', text: "Bidirectional" },
                { key: 'B', text: "Unidirectional (strictly one-way from Sun → Producers → Consumers → Decomposers)" },
                { key: 'C', text: "Cyclic and reversible" },
                { key: 'D', text: "Randomly fluctuating" }
            ],
            correct_option: 'B',
            explanation: "Energy flows strictly one-way: sunlight fixed by autotrophs moves sequentially through trophic levels and cannot revert back to solar input."
        },
        {
            id: 11,
            question: "A network of multiple interconnected and branching food chains in an ecosystem is called a:",
            options: [
                { key: 'A', text: "Trophic pyramid" },
                { key: 'B', text: "Food web" },
                { key: 'C', text: "Ecological niche" },
                { key: 'D', text: "Carbon cycle" }
            ],
            correct_option: 'B',
            explanation: "A food web is an interconnected network of cross-feeding food chains providing ecological stability."
        },
        {
            id: 12,
            question: "Which of the following correctly represents a valid terrestrial FOOD CHAIN in nature?",
            options: [
                { key: 'A', text: "Grass → Wheat → Mango" },
                { key: 'B', text: "Grass → Goat → Human" },
                { key: 'C', text: "Goat → Cow → Elephant" },
                { key: 'D', text: "Grass → Fish → Goat" }
            ],
            correct_option: 'B',
            explanation: "Grass (Producer, T₁) → Goat (Herbivore, T₂) → Human (Carnivore/Omnivore, T₃) is a valid, sequential food chain."
        },
        {
            id: 13,
            question: "What crucial ecological role do DECOMPOSERS (bacteria and fungi) perform in an ecosystem?",
            options: [
                { key: 'A', text: "They trap sunlight to make starch" },
                { key: 'B', text: "They break down complex organic remains and wastes into simple inorganic nutrients, returning them to the soil and natural pools" },
                { key: 'C', text: "They eat live apex predators" },
                { key: 'D', text: "They produce chemical pesticides" }
            ],
            correct_option: 'B',
            explanation: "Decomposers act as natural recyclers, converting dead biomass into bioavailable mineral nutrients for producers."
        },
        {
            id: 14,
            question: "The progressive accumulation and increasing concentration of non-biodegradable toxic chemicals (like pesticides and DDT) at each successive trophic level is known as:",
            options: [
                { key: 'A', text: "Eutrophication" },
                { key: 'B', text: "Biological Magnification (Biomagnification)" },
                { key: 'C', text: "Bio-accumulation only" },
                { key: 'D', text: "Photosynthesis" }
            ],
            correct_option: 'B',
            explanation: "Biomagnification is the cumulative concentration of non-metabolizable toxins as they ascend up successive trophic levels."
        },
        {
            id: 15,
            question: "Why do HUMAN BEINGS accumulate the highest concentration of toxic pesticide residues in their bodies through the food chain?",
            options: [
                { key: 'A', text: "Humans do not drink water" },
                { key: 'B', text: "Human beings occupy the top trophic level in food webs, consuming magnified concentrations from all lower trophic tiers" },
                { key: 'C', text: "Human skin absorbs all chemicals" },
                { key: 'D', text: "Pesticides are manufactured by humans" }
            ],
            correct_option: 'B',
            explanation: "As top consumers at the apex of ecological food webs, humans accumulate peak biomagnified pesticide concentrations."
        },
        {
            id: 16,
            question: "What is the chemical formula of an OZONE molecule?",
            options: [
                { key: 'A', text: "O₂" },
                { key: 'B', text: "O₃ (a triatomic oxygen molecule)" },
                { key: 'C', text: "O₄" },
                { key: 'D', text: "CO₂" }
            ],
            correct_option: 'B',
            explanation: "Ozone is a triatomic allotrope of oxygen with formula O₃."
        },
        {
            id: 17,
            question: "While diatomic oxygen (O₂) is essential for all aerobic life, ozone (O₃) at ground level is:",
            options: [
                { key: 'A', text: "A harmless nutrient" },
                { key: 'B', text: "A deadly poison and respiratory irritant" },
                { key: 'C', text: "A fertilizer for crops" },
                { key: 'D', text: "A non-reactive inert gas" }
            ],
            correct_option: 'B',
            explanation: "Ozone at ground level (troposphere) is a toxic pollutant and severe respiratory poison."
        },
        {
            id: 18,
            question: "What vital protective function does the ozone layer perform in the upper stratosphere of Earth's atmosphere?",
            options: [
                { key: 'A', text: "It traps greenhouse heat" },
                { key: 'B', text: "It absorbs harmful ultraviolet (UV) radiation from the Sun, shielding living organisms from skin cancer, cataract, and genetic damage" },
                { key: 'C', text: "It produces oxygen for breathing" },
                { key: 'D', text: "It creates lightning" }
            ],
            correct_option: 'B',
            explanation: "Stratospheric ozone filters out damaging solar UV-B and UV-C wavelengths, safeguarding terrestrial biosphere DNA."
        },
        {
            id: 19,
            question: "How is stratospheric ozone formed naturally in the upper atmosphere from molecular oxygen (O₂)?",
            options: [
                { key: 'A', text: "By chemical combustion" },
                { key: 'B', text: "High-energy UV radiation splits O₂ molecules into free oxygen atoms (O), which then combine with molecular O₂ to form O₃ (O₂ xrightarrow{UV} O + O ; O + O₂ → O₃)" },
                { key: 'C', text: "By plant photosynthesis directly in space" },
                { key: 'D', text: "By volcanic eruptions" }
            ],
            correct_option: 'B',
            explanation: "Solar UV photolysis dissociates O₂ into nascent oxygen radicals (O), which react with intact O₂ to yield ozone: O + O₂ → O₃."
        },
        {
            id: 20,
            question: "Which synthetic chemicals widely used in refrigeration, air conditioning, and fire extinguishers are primarily responsible for stratospheric ozone layer depletion?",
            options: [
                { key: 'A', text: "Carbon dioxide (CO₂)" },
                { key: 'B', text: "Chlorofluorocarbons (CFCs)" },
                { key: 'C', text: "Methane (CH₄)" },
                { key: 'D', text: "Nitrogen dioxide (NO₂)" }
            ],
            correct_option: 'B',
            explanation: "CFCs release reactive chlorine radicals under UV photolysis, catalytically destroying thousands of O₃ molecules."
        },
        {
            id: 21,
            question: "In 1987, which international organization forged the landmark global agreement to freeze and phase out CFC production at 1986 levels (Montreal Protocol)?",
            options: [
                { key: 'A', text: "WHO (World Health Organization)" },
                { key: 'B', text: "UNEP (United Nations Environment Programme)" },
                { key: 'C', text: "UNESCO" },
                { key: 'D', text: "WTO" }
            ],
            correct_option: 'B',
            explanation: "UNEP spearheaded the Montreal Protocol in 1987, mandating the global transition to CFC-free refrigeration."
        },
        {
            id: 22,
            question: "Substances that can be broken down and decomposed into simpler harmless materials by the biological action of microorganisms (bacteria and fungi) are called:",
            options: [
                { key: 'A', text: "Non-biodegradable substances" },
                { key: 'B', text: "Biodegradable substances" },
                { key: 'C', text: "Inorganic minerals" },
                { key: 'D', text: "Persistent organic pollutants" }
            ],
            correct_option: 'B',
            explanation: "Biodegradable materials (food peels, paper, dung, cotton) are biologically broken down by microbial enzymes."
        },
        {
            id: 23,
            question: "Substances that CANNOT be decomposed or broken down by microbial biological processes and persist in the environment for decades are called:",
            options: [
                { key: 'A', text: "Biodegradable substances" },
                { key: 'B', text: "Non-biodegradable substances (e.g. plastics, polythene bags, glass, synthetic pesticides)" },
                { key: 'C', text: "Organic manures" },
                { key: 'D', text: "Compost" }
            ],
            correct_option: 'B',
            explanation: "Non-biodegradable wastes (plastics, glass, synthetic polymers) resist enzyme catalysis and persist indefinitely."
        },
        {
            id: 24,
            question: "Which of the following groups contains ONLY biodegradable waste materials?",
            options: [
                { key: 'A', text: "Grass, flowers, and leather" },
                { key: 'B', text: "Grass, wood, and plastic" },
                { key: 'C', text: "Fruit-peels, cake, and lime-juice" },
                { key: 'D', text: "Both A and C" }
            ],
            correct_option: 'D',
            explanation: "Grass, flowers, leather, fruit peels, cake, and lime juice are all natural organic matters biodegradable by microbes."
        },
        {
            id: 25,
            question: "Why do bacteria and fungal saprophytes fail to degrade man-made plastics and polythene in the soil?",
            options: [
                { key: 'A', text: "Plastics are too cold" },
                { key: 'B', text: "Microbial enzymes are highly substrate-specific and do not possess the specific biocatalysts needed to cleave synthetic synthetic polymer bonds" },
                { key: 'C', text: "Plastics kill all bacteria instantly" },
                { key: 'D', text: "Soil contains zero microbes" }
            ],
            correct_option: 'B',
            explanation: "Enzymes are biologically lock-and-key specific; nature has not evolved catabolic pathways for synthetic artificial polymers."
        },
        {
            id: 26,
            question: "Why was the large-scale introduction of unbaked clay cups ('kulhads') for serving tea in Indian trains discontinued?",
            options: [
                { key: 'A', text: "Clay is non-biodegradable" },
                { key: 'B', text: "Manufacturing billions of disposable kulhads daily led to massive depletion and stripping of fertile agricultural top-soil" },
                { key: 'C', text: "Tea tastes bad in clay" },
                { key: 'D', text: "Clay dissolves in tea" }
            ],
            correct_option: 'B',
            explanation: "Industrial mass production of clay kulhads stripped away fertile topsoil, leading to environmental land degradation."
        },
        {
            id: 27,
            question: "What is the primary ecological advantage of using disposable PAPER CUPS over disposable plastic cups on railways?",
            options: [
                { key: 'A', text: "Paper cups are transparent" },
                { key: 'B', text: "Paper is biodegradable, recyclable, and does not persist as indestructible toxic pollution in landfills" },
                { key: 'C', text: "Paper cups can be reused for 100 years" },
                { key: 'D', text: "Paper cups are made of metal" }
            ],
            correct_option: 'B',
            explanation: "Paper is derived from cellulose and biodegrades safely without lingering as persistent solid microplastic pollution."
        },
        {
            id: 28,
            question: "Which of the following human daily activities represents an environmentally-friendly practice ('Green Habit')?",
            options: [
                { key: 'A', text: "Carrying reusable cloth bags for market shopping instead of accepting single-use polythene bags" },
                { key: 'B', text: "Switching off fans, lights, and appliances when not in use" },
                { key: 'C', text: "Walking or bicycling for short distances instead of using motorized scooters" },
                { key: 'D', text: "All of the above" }
            ],
            correct_option: 'D',
            explanation: "All listed practices reduce fossil fuel consumption, plastic waste accumulation, and carbon footprint."
        },
        {
            id: 29,
            question: "In a forest ecosystem, which of the following organisms represents a PRIMARY CONSUMER?",
            options: [
                { key: 'A', text: "Tiger" },
                { key: 'B', text: "Deer (Herbivore)" },
                { key: 'C', text: "Oak tree" },
                { key: 'D', text: "Fungus" }
            ],
            correct_option: 'B',
            explanation: "Deer graze on plant leaves, making them primary consumers (herbivores, T₂)."
        },
        {
            id: 30,
            question: "In an aquatic pond ecosystem, which organisms function as the PRODUCERS?",
            options: [
                { key: 'A', text: "Large fish and water snakes" },
                { key: 'B', text: "Phytoplankton, algae, and submerged aquatic plants" },
                { key: 'C', text: "Zooplankton and protozoa" },
                { key: 'D', text: "Tadpoles" }
            ],
            correct_option: 'B',
            explanation: "Microscopic photosynthetic phytoplankton and aquatic weeds produce organic matter at the base of aquatic trophic webs."
        },
        {
            id: 31,
            question: "If 10,000 Joules of solar energy falls on the leaves of plants in a forest, how much energy will be captured and converted into plant biomass?",
            options: [
                { key: 'A', text: "10,000 J" },
                { key: 'B', text: "100 J (1% of 10,000 J)" },
                { key: 'C', text: "1,000 J" },
                { key: 'D', text: "10 J" }
            ],
            correct_option: 'B',
            explanation: "Plants capture ~1% of incident solar energy: 1% of 10,000 J = 100 J."
        },
        {
            id: 32,
            question: "If producers in an ecosystem possess 20,000 J of energy, how much energy will be available to the SECONDARY CONSUMERS (T₃) according to the 10% law?",
            options: [
                { key: 'A', text: "2,000 J" },
                { key: 'B', text: "200 J [T₁ = 20,000 J → T₂ = 2,000 J → T₃ = 200 J]" },
                { key: 'C', text: "20 J" },
                { key: 'D', text: "2 J" }
            ],
            correct_option: 'B',
            explanation: "Producers (T₁) = 20,000 J → Primary consumers (T₂) = 2,000 J (10%) → Secondary consumers (T₃) = 200 J (10% of 2,000 J)."
        },
        {
            id: 33,
            question: "Which trophic level in an ecological food pyramid contains the LARGEST number of individual organisms?",
            options: [
                { key: 'A', text: "Top carnivores (Tertiary consumers)" },
                { key: 'B', text: "Producers (Autotrophs at the base of the pyramid)" },
                { key: 'C', text: "Secondary consumers" },
                { key: 'D', text: "Herbivores" }
            ],
            correct_option: 'B',
            explanation: "Pyramids of numbers generally have the greatest population density at the producer level (T₁) to support upper levels."
        },
        {
            id: 34,
            question: "What happens to an ecosystem if ALL the top carnivores (like tigers and lions) are completely removed from a forest?",
            options: [
                { key: 'A', text: "The forest produces double fruit" },
                { key: 'B', text: "The herbivore (deer) population will explode unchecked, leading to catastrophic overgrazing, loss of green vegetation, and ecological collapse" },
                { key: 'C', text: "All herbivores will die immediately" },
                { key: 'D', text: "Trees will grow infinitely tall" }
            ],
            correct_option: 'B',
            explanation: "Removing apex predators disrupts top-down trophic regulation, causing uncontrolled herbivore multiplication and overgrazing."
        },
        {
            id: 35,
            question: "What happens if ALL the decomposers are completely eliminated from an ecosystem?",
            options: [
                { key: 'A', text: "Plants grow faster" },
                { key: 'B', text: "Dead organisms and organic wastes will pile up endlessly, nutrient cycling will halt, and the soil will become depleted of minerals" },
                { key: 'C', text: "All carnivores become herbivores" },
                { key: 'D', text: "The ozone layer thickens" }
            ],
            correct_option: 'B',
            explanation: "Without decomposers, bio-geochemical mineral recycling stops, causing soil exhaustion and waste choking."
        },
        {
            id: 36,
            question: "Which of the following organisms functions as a PARASITE in nature?",
            options: [
                { key: 'A', text: "Cuscuta (Amarbel), Leeches, and Tapeworms" },
                { key: 'B', text: "Grasshopper" },
                { key: 'C', text: "Green algae" },
                { key: 'D', text: "Vulture" }
            ],
            correct_option: 'A',
            explanation: "Cuscuta, ticks, leeches, and tapeworms obtain nutrition directly from living hosts without immediately killing them."
        },
        {
            id: 37,
            question: "What is an autotroph that captures chemical energy through chemosynthesis rather than sunlight called?",
            options: [
                { key: 'A', text: "Photoautotroph" },
                { key: 'B', text: "Chemoautotroph (e.g. nitrifying and sulfur bacteria)" },
                { key: 'C', text: "Heterotroph" },
                { key: 'D', text: "Parasite" }
            ],
            correct_option: 'B',
            explanation: "Chemoautotrophs derive metabolic energy by oxidizing inorganic compounds (hydrogen sulfide, ammonia) without light."
        },
        {
            id: 38,
            question: "Why are domestic sewage and livestock farm manure classified as BIODEGRADABLE wastes?",
            options: [
                { key: 'A', text: "They contain heavy metals" },
                { key: 'B', text: "They consist of natural organic nitrogenous and carbon compounds that soil bacteria readily digest into humus, water, and mineral salts" },
                { key: 'C', text: "They never smell" },
                { key: 'D', text: "They resist microbial action" }
            ],
            correct_option: 'B',
            explanation: "Organic wastes are biochemically decomposed into nutrient-rich humus and bio-gas by heterotrophic saprophytes."
        },
        {
            id: 39,
            question: "Which of the following is an effective, eco-friendly method for managing organic biodegradable kitchen and garden waste in households?",
            options: [
                { key: 'A', text: "Burning in open air" },
                { key: 'B', text: "Composting / Vermicomposting (converting into organic manure)" },
                { key: 'C', text: "Dumping into freshwater rivers" },
                { key: 'D', text: "Sealing in thick polythene bags" }
            ],
            correct_option: 'B',
            explanation: "Composting utilizes aerobic bacteria and earthworms (vermicompost) to transform organic refuse into nutrient-rich natural fertilizer."
        },
        {
            id: 40,
            question: "Why is the disposal of ELECTRONIC WASTE (E-waste like old smartphones, motherboards, and CRT monitors) especially hazardous to the environment?",
            options: [
                { key: 'A', text: "They take up zero landfill space" },
                { key: 'B', text: "They contain toxic heavy metals such as Lead, Mercury, Cadmium, and Beryllium, which leach into groundwater and contaminate ecosystems" },
                { key: 'C', text: "They release ozone gas" },
                { key: 'D', text: "They dissolve in rain water" }
            ],
            correct_option: 'B',
            explanation: "E-waste contains carcinogenic heavy metals (lead, cadmium, mercury) that bioaccumulate and poison aquifers."
        },
        {
            id: 41,
            question: "What is the primary danger of burning non-biodegradable PLASTIC waste in open garbage dumps?",
            options: [
                { key: 'A', text: "It depletes nitrogen from soil" },
                { key: 'B', text: "It releases toxic, carcinogenic gases like dioxins, furans, and carbon monoxide into the atmosphere, causing severe air pollution" },
                { key: 'C', text: "It cools down the Earth" },
                { key: 'D', text: "It turns into water" }
            ],
            correct_option: 'B',
            explanation: "Incomplete combustion of chlorinated polymers (PVC) emits highly toxic chlorinated dioxins and persistent furans."
        },
        {
            id: 42,
            question: "Which of the following trophic pyramids in a terrestrial grassland ecosystem is ALWAYS upright (cannot be inverted)?",
            options: [
                { key: 'A', text: "Pyramid of Energy" },
                { key: 'B', text: "Pyramid of Biomass in a pond" },
                { key: 'C', text: "Pyramid of Numbers on a single tree" },
                { key: 'D', text: "Pyramid of Parasites" }
            ],
            correct_option: 'A',
            explanation: "Because energy is lost irreversibly at each successive trophic transfer (Second Law of Thermodynamics), the pyramid of energy is ALWAYS upright."
        },
        {
            id: 43,
            question: "In a marine ecosystem, why is the Pyramid of Biomass often INVERTED (phytoplankton biomass < zooplankton biomass)?",
            options: [
                { key: 'A', text: "Phytoplankton are carnivores" },
                { key: 'B', text: "Phytoplankton have microscopic standing biomass with exceptionally high turnover and rapid reproduction rates that sustain a larger biomass of longer-lived zooplankton" },
                { key: 'C', text: "Fish do not eat plankton" },
                { key: 'D', text: "Water is salty" }
            ],
            correct_option: 'B',
            explanation: "Rapid reproduction and short lifespans of phytoplankton support a larger standing crop of slow-turnover consumers, inverting biomass pyramids."
        },
        {
            id: 44,
            question: "In a food chain consisting of: Grass → Grasshopper → Frog → Snake → Hawk, which organism occupies the FOURTH trophic level (T₄)?",
            options: [
                { key: 'A', text: "Grasshopper" },
                { key: 'B', text: "Snake (Tertiary consumer)" },
                { key: 'C', text: "Frog" },
                { key: 'D', text: "Hawk" }
            ],
            correct_option: 'B',
            explanation: "Grass (T₁) → Grasshopper (T₂) → Frog (T₃) → Snake (T₄) → Hawk (T₅). The snake is at T₄."
        },
        {
            id: 45,
            question: "In the same food chain (Grass → Grasshopper → Frog → Snake → Hawk), which organism will have the MAXIMUM concentration of DDT due to biomagnification?",
            options: [
                { key: 'A', text: "Grass" },
                { key: 'B', text: "Hawk (Apex predator / Top consumer at T₅)" },
                { key: 'C', text: "Frog" },
                { key: 'D', text: "Grasshopper" }
            ],
            correct_option: 'B',
            explanation: "Persistent pesticide concentrations multiply across each trophic level, reaching peak bioaccumulation in the top predator (Hawk)."
        },
        {
            id: 46,
            question: "Why is the use of bio-pesticides and organic farming techniques recommended over chemical synthetic insecticides like DDT and Endosulfan?",
            options: [
                { key: 'A', text: "Chemical insecticides dissolve in sunlight" },
                { key: 'B', text: "Bio-pesticides are biodegradable, target-specific, non-persistent, and do not cause biomagnification in food webs" },
                { key: 'C', text: "Bio-pesticides are made of plastic" },
                { key: 'D', text: "Organic farming requires zero water" }
            ],
            correct_option: 'B',
            explanation: "Biological controls breakdown naturally and do not bioaccumulate in food chains or poison human consumers."
        },
        {
            id: 47,
            question: "What happens when excessive untreated nitrogen and phosphorus fertilizers wash into a local pond (Eutrophication)?",
            options: [
                { key: 'A', text: "Pond water becomes crystal clear" },
                { key: 'B', text: "Massive algal bloom forms; decaying algae deplete dissolved oxygen (BOD rises), suffocating and killing aquatic fish" },
                { key: 'C', text: "Fish population quadruples" },
                { key: 'D', text: "Pond water turns into drinking milk" }
            ],
            correct_option: 'B',
            explanation: "Nutrient runoff triggers algal blooms; microbial decomposition of dead algae exhausts dissolved oxygen, causing widespread fish kills."
        },
        {
            id: 48,
            question: "Which of the following is considered an environmentally hazardous non-biodegradable waste generated in hospitals that requires high-temperature INCINERATION?",
            options: [
                { key: 'A', text: "Used needles, syringes, contaminated anatomical wastes, and surgical gloves" },
                { key: 'B', text: "Kitchen vegetable peels" },
                { key: 'C', text: "Newspaper wrapping" },
                { key: 'D', text: "Cotton bedsheets only" }
            ],
            correct_option: 'A',
            explanation: "Infectious bio-medical waste (syringes, sharps, anatomical tissue) is incinerated at >1000°C to destroy pathogens and neutralize toxins."
        },
        {
            id: 49,
            question: "What is the biological term for the role, habitat, and functional position of an organism within its ecosystem community?",
            options: [
                { key: 'A', text: "Biome" },
                { key: 'B', text: "Ecological Niche" },
                { key: 'C', text: "Trophic level" },
                { key: 'D', text: "Ecosystem" }
            ],
            correct_option: 'B',
            explanation: "An ecological niche encompasses the physical habitat, resource utilization, and functional interactions of a species."
        },
        {
            id: 50,
            question: "Which gas produced during anaerobic decomposition of organic waste in bio-gas plants is an excellent, clean domestic cooking fuel?",
            options: [
                { key: 'A', text: "Carbon monoxide" },
                { key: 'B', text: "Biogas (rich in Methane CH₄, ~75%)" },
                { key: 'C', text: "Sulfur dioxide" },
                { key: 'D', text: "Chlorine" }
            ],
            correct_option: 'B',
            explanation: "Anaerobic methanogenic digestion of cattle dung and biomass produces biogas containing up to 75% combustible methane (CH₄)."
        },

        // =================================================================
        // TIER 2: MEDIUM QUESTIONS (Q51 - Q60)
        // Two-Step Energy Calculations, Food Web Balances & Atmospheric Photochemistry
        // =================================================================
        {
            id: 51,
            question: "In a four-step food chain: Phytoplankton → Zooplankton → Small Fish → Kingfisher bird, if the Kingfisher bird receives 5 J of energy, how much energy was present at the PRODUCER (Phytoplankton) level?",
            options: [
                { key: 'A', text: "50 J" },
                { key: 'B', text: "5,000 J [T₄ (Bird) = 5 J → T₃ (Fish) = 50 J → T₂ (Zooplankton) = 500 J → T₁ (Phytoplankton) = 5,000 J]" },
                { key: 'C', text: "500 J" },
                { key: 'D', text: "50,000 J" }
            ],
            correct_option: 'B',
            explanation: "Working backward with 10% efficiency: T₄ = 5 J ⇒ T₃ = 50 J ⇒ T₂ = 500 J ⇒ T₁ (Producers) = 5,000 J."
        },
        {
            id: 52,
            question: "In the same aquatic food chain, how much total INCIDENT SOLAR ENERGY had to fall on the water surface to generate the 5,000 J of chemical energy captured by phytoplankton?",
            options: [
                { key: 'A', text: "50,000 J" },
                { key: 'B', text: "500,000 J (5 × 10⁵ J, since green producers capture ~1% of incident sunlight)" },
                { key: 'C', text: "5,000,000 J" },
                { key: 'D', text: "5,000 J" }
            ],
            correct_option: 'B',
            explanation: "Producers capture 1% of solar energy: Solar energy = 5,000 J / 0.01 = 500,000 J (5 × 10⁵ J)."
        },
        {
            id: 53,
            question: "Why are food chains depicted as linear pathways, whereas real ecosystems operate as complex FOOD WEBS?",
            options: [
                { key: 'A', text: "Food chains are imaginary" },
                { key: 'B', text: "In nature, most organisms feed on multiple species and are in turn preyed upon by several predators, creating cross-linked alternative survival pathways" },
                { key: 'C', text: "Plants eat animals in winter" },
                { key: 'D', text: "Carnivores produce their own food" }
            ],
            correct_option: 'B',
            explanation: "Polyphagous feeding relationships form resilient webs that stabilize ecosystems against single-species collapses."
        },
        {
            id: 54,
            question: "What is the primary mechanism by which chlorine free radicals (Cl•) from CFCs destroy stratospheric ozone molecules in a continuous catalytic cycle?",
            options: [
                { key: 'A', text: "Chlorine freezes oxygen" },
                { key: 'B', text: "Cl• reacts with O₃ to form ClO• and O₂; ClO• then reacts with nascent O to regenerate Cl• (Cl• + O₃ → ClO• + O₂; ClO• + O → Cl• + O₂), destroying thousands of O₃ per Cl• atom" },
                { key: 'C', text: "Chlorine turns into water" },
                { key: 'D', text: "Chlorine blocks UV rays" }
            ],
            correct_option: 'B',
            explanation: "Chlorine acts as a homogeneous catalyst: a single chlorine radical can break down over 100,000 ozone molecules before being deactivated."
        },
        {
            id: 55,
            question: "If all the herbivores in a grassland ecosystem are wiped out by an epidemic, how will this immediately affect the PRODUCERS (grasses) and SECONDARY CONSUMERS (wolves)?",
            options: [
                { key: 'A', text: "Grasses will decrease; wolves will multiply" },
                { key: 'B', text: "Grasses will overgrow initially due to zero grazing pressure; wolves will starve and their population will crash due to total prey loss" },
                { key: 'C', text: "Both will increase" },
                { key: 'D', text: "Both will remain completely unchanged" }
            ],
            correct_option: 'B',
            explanation: "Herbivore elimination removes grazing pressure on producers while starving dependent secondary carnivores."
        },
        {
            id: 56,
            question: "Why cannot biological magnification be eliminated by simply washing vegetables and fruits thoroughly with tap water?",
            options: [
                { key: 'A', text: "Pesticides are water-soluble" },
                { key: 'B', text: "Pesticides and systemic insecticides are absorbed internally through root systems and translocated into the cellular plant tissues and fruits during growth" },
                { key: 'C', text: "Water contains more pesticides" },
                { key: 'D', text: "Washing freezes the toxins" }
            ],
            correct_option: 'B',
            explanation: "Systemic agrochemicals permeate internal xylem/phloem tissues and accumulate in cellular protoplasm, resisting superficial washing."
        },
        {
            id: 57,
            question: "Why is an open garbage landfill a significant contributor to GLOBAL WARMING and groundwater pollution?",
            options: [
                { key: 'A', text: "Landfills absorb sunlight" },
                { key: 'B', text: "Anaerobic decomposition deep inside compacted landfills generates potent Methane gas (CH₄), while toxic chemical leachate seeps into underground aquifers" },
                { key: 'C', text: "Landfills increase tectonic earthquakes" },
                { key: 'D', text: "Landfills produce ozone" }
            ],
            correct_option: 'B',
            explanation: "Landfill methanogenesis emits CH₄ (a greenhouse gas with 28× the warming potential of CO₂), while toxic leachate pollutes groundwater."
        },
        {
            id: 58,
            question: "In an ecological food chain: Plants → Deer → Tiger, if 400 J of energy is available to the Deer, how much energy will be transferred to the Tiger?",
            options: [
                { key: 'A', text: "400 J" },
                { key: 'B', text: "40 J (10% of 400 J)" },
                { key: 'C', text: "4 J" },
                { key: 'D', text: "4,000 J" }
            ],
            correct_option: 'B',
            explanation: "By Lindeman's 10% law: Energy to Tiger = 10% of 400 J = 40 J."
        },
        {
            id: 59,
            question: "Which of the following household waste segregation schemes follows modern sanitary municipal solid waste guidelines?",
            options: [
                { key: 'A', text: "Mix everything into a single bin" },
                { key: 'B', text: "Green bin for wet biodegradable organic waste; Blue bin for dry recyclable non-biodegradable waste; Red bin for hazardous sanitary/electronic waste" },
                { key: 'C', text: "Burn dry waste and bury wet waste together" },
                { key: 'D', text: "Dump all waste in plastic bags" }
            ],
            correct_option: 'B',
            explanation: "Source segregation: Green (wet compostable waste), Blue (dry recyclables), and Red/Black (hazardous/electronic waste)."
        },
        {
            id: 60,
            question: "Why do vultures and scavenger birds, occupying the apex of scavenger food chains, suffer severe reproductive failure when livestock are treated with the veterinary drug DICLOFENAC?",
            options: [
                { key: 'A', text: "Diclofenac is a pesticide" },
                { key: 'B', text: "Scavenging vultures consume carcasses containing residual diclofenac, causing acute kidney failure and massive population crashes via bioaccumulation" },
                { key: 'C', text: "Diclofenac destroys bird feathers" },
                { key: 'D', text: "Diclofenac attracts poachers" }
            ],
            correct_option: 'B',
            explanation: "Diclofenac in livestock carcasses causes visceral gout, renal failure, and >99% vulture mortality through bioaccumulation."
        },

        // =================================================================
        // TIER 3: HARD QUESTIONS (Q61 - Q70)
        // Multi-Step Trophic Calculations, Trophic Cascades & Biomass Dynamics
        // =================================================================
        {
            id: 61,
            question: "In a 5-tier grassland food chain: Grass → Insect → Frog → Snake → Eagle, if 50,000 kJ of solar energy strikes the grass, what is the maximum energy that reaches the EAGLE?",
            options: [
                { key: 'A', text: "500 kJ" },
                { key: 'B', text: "0.05 kJ = 50 J [Solar = 50,000 kJ → Grass (1%) = 500 kJ → Insect (10%) = 50 kJ → Frog (10%) = 5 kJ → Snake (10%) = 0.5 kJ → Eagle (10%) = 0.05 kJ]" },
                { key: 'C', text: "5 kJ" },
                { key: 'D', text: "0.5 kJ" }
            ],
            correct_option: 'B',
            explanation: "Solar (50,000 kJ) → Grass (1% = 500 kJ) → Insect (50 kJ) → Frog (5 kJ) → Snake (0.5 kJ) → Eagle (0.05 kJ = 50 J)."
        },
        {
            id: 62,
            question: "A lake is contaminated with 0.02 ppm of DDT in water. If biomagnification increases DDT concentration by 10 times at each successive trophic level across a 4-step food chain (Water → Phytoplankton → Small Fish → Osprey bird), what is the DDT concentration in the OSPREY?",
            options: [
                { key: 'A', text: "0.2 ppm" },
                { key: 'B', text: "20.0 ppm [Phytoplankton = 0.2 ppm → Small Fish = 2.0 ppm → Osprey = 20.0 ppm (a 1000-fold bio-magnification)]" },
                { key: 'C', text: "200 ppm" },
                { key: 'D', text: "0.002 ppm" }
            ],
            correct_option: 'B',
            explanation: "Water (0.02 ppm) → Phytoplankton (0.2 ppm) → Small Fish (2.0 ppm) → Osprey (20.0 ppm, a 1000× magnification)."
        },
        {
            id: 63,
            question: "Why does the thickness of the Antarctic ozone hole reach its minimum size (maximum depletion) during the Antarctic SPRING (September–October)?",
            options: [
                { key: 'A', text: "Sunlight disappears completely in spring" },
                { key: 'B', text: "Returning springtime sunlight photolyses trapped chlorine reservoirs on polar stratospheric cloud ice crystals, unleashing explosive catalytic ozone destruction" },
                { key: 'C', text: "Planes fly only in spring" },
                { key: 'D', text: "Volcanoes erupt in September" }
            ],
            correct_option: 'B',
            explanation: "Spring sunlight provides UV photons that cleave active Cl₂ and HOCl off polar stratospheric clouds, triggering rapid catalytic O₃ destruction."
        },
        {
            id: 64,
            question: "In an ecosystem, if the Gross Primary Productivity (GPP) of producers is 1000 kcal/m²/year and plant respiration (R) consumes 400 kcal/m²/year, what is the Net Primary Productivity (NPP) available to herbivores?",
            options: [
                { key: 'A', text: "1400 kcal/m²/year" },
                { key: 'B', text: "600 kcal/m²/year (NPP = GPP - R = 1000 - 400 = 600 kcal/m²/year)" },
                { key: 'C', text: "400 kcal/m²/year" },
                { key: 'D', text: "250 kcal/m²/year" }
            ],
            correct_option: 'B',
            explanation: "Net Primary Productivity NPP = GPP - R_respiration = 1000 - 400 = 600 kcal/m²/year."
        },
        {
            id: 65,
            question: "Why are TOP CARNIVORES (like tigers, polar bears, and eagles) considered KEYSTONE species whose extinction causes trophic cascades?",
            options: [
                { key: 'A', text: "They produce oxygen" },
                { key: 'B', text: "They exert top-down population control on intermediate herbivores and mesopredators, preserving biodiversity and vegetative balance throughout the entire ecosystem" },
                { key: 'C', text: "They decompose fallen logs" },
                { key: 'D', text: "They eat plant roots" }
            ],
            correct_option: 'B',
            explanation: "Keystone apex predators prevent ecological dominance by single mesopredators or herbivores through top-down trophic cascades."
        },
        {
            id: 66,
            question: "What is the primary difference between BIO-ACCUMULATION and BIOLOGICAL MAGNIFICATION?",
            options: [
                { key: 'A', text: "Bio-accumulation refers to the build-up of a contaminant in an INDIVIDUAL organism's tissues over its lifetime; Biomagnification is the progressive increase in contaminant concentration across SUCCESSIVE TROPHIC LEVELS" },
                { key: 'B', text: "Bio-accumulation only happens in plants" },
                { key: 'C', text: "Biomagnification is biodegradable" },
                { key: 'D', text: "They are identical concepts" }
            ],
            correct_option: 'A',
            explanation: "Bioaccumulation is intra-organism concentration over time; biomagnification is inter-trophic concentration across food chain links."
        },
        {
            id: 67,
            question: "Which of the following plastics is considered OXO-BIODEGRADABLE, and what environmental controversy surrounds its degradation?",
            options: [
                { key: 'A', text: "It dissolves into water instantly" },
                { key: 'B', text: "It contains chemical additives that fragment the plastic into invisible, persistent MICROPLASTICS under UV light rather than true biological mineralization" },
                { key: 'C', text: "It turns into edible starch" },
                { key: 'D', text: "It produces fertilizer" }
            ],
            correct_option: 'B',
            explanation: "Oxo-biodegradables simply fragment into persistent microplastic dust, exacerbating ecological and bioaccumulative toxicity."
        },
        {
            id: 68,
            question: "Why does the 10% energy transfer rule result in a PYRAMIDAL biomass structure in almost all terrestrial ecosystems?",
            options: [
                { key: 'A', text: "Carnivores are physically lighter than plants" },
                { key: 'B', text: "Because each trophic step supports only 10% of the biomass of the preceding level, total standing biomass must progressively decrease from base to apex" },
                { key: 'C', text: "Plants grow in pyramid shapes" },
                { key: 'D', text: "Gravity compresses upper levels" }
            ],
            correct_option: 'B',
            explanation: "Due to 90% thermodynamic entropy loss, available biomass shrinks tenfold at each trophic tier, enforcing a tapered pyramidal structure."
        },
        {
            id: 69,
            question: "In a forest ecosystem, if a pesticide kills 90% of all SOIL EARTHWORMS and MICROORGANISMS, what will be the immediate long-term ecological consequence?",
            options: [
                { key: 'A', text: "Soil aeration and humus formation cease, leaf litter accumulates without decomposing, and plant root nutrient uptake declines precipitously" },
                { key: 'B', text: "Trees will grow twice as fast" },
                { key: 'C', text: "Rainfall will double" },
                { key: 'D', text: "Herbivores will become carnivores" }
            ],
            correct_option: 'A',
            explanation: "Earthworms and microbes drive pedogenesis (soil creation) and nitrogen mineralization; their loss collapses plant nutrient absorption."
        },
        {
            id: 70,
            question: "Which Dobson Unit (DU) threshold is scientifically defined as the formation of an 'Ozone Hole' in the stratosphere?",
            options: [
                { key: 'A', text: "Total ozone column density dropping below 220 Dobson Units (DU)" },
                { key: 'B', text: "Below 500 DU" },
                { key: 'C', text: "Zero DU only" },
                { key: 'D', text: "Below 10 DU" }
            ],
            correct_option: 'A',
            explanation: "An ozone hole is defined historically as total column ozone falling below 220 Dobson Units (where 1 DU = 2.69 × 10¹⁶ ozone molecules/cm²)."
        },

        // =================================================================
        // TIER 4: TRICKY QUESTIONS (Q71 - Q90)
        // Specificity of Enzymes, Trophic Traps, Ozone Layer Physics & Waste Myths
        // =================================================================
        {
            id: 71,
            question: "Why does eating coal or cellulose paper fail to provide usable energy to a human being, even though both are carbon compounds?",
            options: [
                { key: 'A', text: "Coal has no chemical energy" },
                { key: 'B', text: "Human digestive enzymes (amylases) are stereochemically specific and lack cellulase and carbon-cleaving enzymes required to hydrolyze beta-glycosidic or aromatic carbon bonds" },
                { key: 'C', text: "Stomach acid freezes coal" },
                { key: 'D', text: "Coal is radioactive" }
            ],
            correct_option: 'B',
            explanation: "Enzymatic hydrolysis requires substrate-enzyme active site complementarity; humans lack cellulase and coal-metabolizing enzymes."
        },
        {
            id: 72,
            question: "If all waste produced by human society were made 100% BIODEGRADABLE, would solid waste disposal cease to have any negative environmental impact?",
            options: [
                { key: 'A', text: "Yes, 100% biodegradable waste produces zero environmental harm" },
                { key: 'B', text: "No, massive heaps of decomposing organic waste generate foul odors, breed pathogenic disease vectors (flies/rats), produce methane greenhouse gas, and cause eutrophication if washed into waterways" },
                { key: 'C', text: "Yes, it dissolves into air in 5 seconds" },
                { key: 'D', text: "Biodegradable waste creates plastics" }
            ],
            correct_option: 'B',
            explanation: "Unmanaged organic waste decomposition causes oxygen depletion, groundwater leachate contamination, vector-borne epidemics, and methane emissions."
        },
        {
            id: 73,
            question: "In a marine food chain (Phytoplankton → Zooplankton → Fish → Seal → Polar Bear), which level contains the LEAST total energy?",
            options: [
                { key: 'A', text: "Phytoplankton (T₁)" },
                { key: 'B', text: "Polar Bear (T₅ - apex predator)" },
                { key: 'C', text: "Zooplankton (T₂)" },
                { key: 'D', text: "Fish (T₃)" }
            ],
            correct_option: 'B',
            explanation: "Energy dwindles exponentially at each ascending step (10% rule); the terminal apex tier (Polar bear, T₅) holds the least total energy."
        },
        {
            id: 74,
            question: "In the same marine food chain, which organism contains the HIGHEST concentration of persistent mercury and PCBs per gram of body fat?",
            options: [
                { key: 'A', text: "Phytoplankton" },
                { key: 'B', text: "Polar Bear (due to biological magnification at T₅)" },
                { key: 'C', text: "Zooplankton" },
                { key: 'D', text: "Small Fish" }
            ],
            correct_option: 'B',
            explanation: "Lipophilic persistent contaminants (PCBs, methylmercury) magnify across trophic levels, reaching hazardous concentrations in apex predators."
        },
        {
            id: 75,
            question: "Why is an aquarium considered an UNBALANCED or incomplete ecosystem that requires regular artificial human maintenance (cleaning and aeration)?",
            options: [
                { key: 'A', text: "Aquariums lack sunlight" },
                { key: 'B', text: "Aquariums typically lack adequate self-sustaining populations of decomposers and natural nutrient recycling loops to process fish excreta and dead matter" },
                { key: 'C', text: "Fish cannot breathe water in glass" },
                { key: 'D', text: "Aquarium glass absorbs all oxygen" }
            ],
            correct_option: 'B',
            explanation: "Artificial micro-ecosystems lack complete biogeochemical loops and sufficient saprophytes, requiring external filtration, aeration, and cleaning."
        },
        {
            id: 76,
            question: "Which of the following statements about the OZONE LAYER is FALSE?",
            options: [
                { key: 'A', text: "Ozone is formed in the stratosphere by solar UV photolysis of O₂" },
                { key: 'B', text: "Ozone depletion causes global sea levels to rise directly by melting ice via UV heat" },
                { key: 'C', text: "CFCs release chlorine atoms that destroy O₃ catalytically" },
                { key: 'D', text: "Ozone hole increases human skin cancer and cataract rates" }
            ],
            correct_option: 'B',
            explanation: "Ozone depletion is an atmospheric radiation filtering issue (UV exposure), whereas global warming and sea level rise are caused by greenhouse gas infrared trapping."
        },
        {
            id: 77,
            question: "What is the primary ecological difference between a PRODUCER and a DECOMPOSER?",
            options: [
                { key: 'A', text: "Producers build high-energy organic molecules from inorganic raw materials using external energy; Decomposers break down high-energy organic wastes back into simple inorganic raw materials" },
                { key: 'B', text: "Producers are animals; Decomposers are plants" },
                { key: 'C', text: "Decomposers trap sunlight" },
                { key: 'D', text: "Producers release methane" }
            ],
            correct_option: 'A',
            explanation: "Producers are anbolic converters (inorganic → organic); decomposers are catabolic mineralizers (organic → inorganic)."
        },
        {
            id: 78,
            question: "A student creates a closed terrarium with green plants and herbivores, but forgets to add decomposers. What will happen to the terrarium after several weeks?",
            options: [
                { key: 'A', text: "Plants will live forever" },
                { key: 'B', text: "Nutrients locked in dead leaves and animal feces will not be recycled, starving the plants of essential soil nitrogen and minerals" },
                { key: 'C', text: "The terrarium will expand" },
                { key: 'D', text: "Animals will turn into plants" }
            ],
            correct_option: 'B',
            explanation: "Without saprophytes to mineralize organic detritus, bioavailable nutrient pools are exhausted, halting plant growth."
        },
        {
            id: 79,
            question: "Why do vegetarian humans who consume plant crops directly obtain MORE usable energy from a field than non-vegetarian humans who eat livestock fed on the same crops?",
            options: [
                { key: 'A', text: "Meat has zero energy" },
                { key: 'B', text: "Eating crops directly operates at the 2nd trophic level (T₂), bypassing the 90% energy loss incurred when crops are first fed to intermediate livestock (T₃)" },
                { key: 'C', text: "Plants contain animal proteins" },
                { key: 'D', text: "Herbivores destroy all vitamins" }
            ],
            correct_option: 'B',
            explanation: "Directly consuming primary producers (T₂) captures 10× more food energy per hectare than consuming livestock raised at T₃."
        },
        {
            id: 80,
            question: "Which of the following wastes is NON-BIODEGRADABLE but can be safely melted down and transformed into new products (Recyclable)?",
            options: [
                { key: 'A', text: "Thermoplastic bottles (PET / HDPE) and Aluminium cans" },
                { key: 'B', text: "Vegetable peels" },
                { key: 'C', text: "Cow dung" },
                { key: 'D', text: "Dry leaves" }
            ],
            correct_option: 'A',
            explanation: "Thermoplastics (PET, HDPE) and aluminium are non-biodegradable but can be mechanically sorted, melted, and recycled."
        },
        {
            id: 81,
            question: "Which of the following items is BOTH non-biodegradable AND non-recyclable (Thermosetting plastic)?",
            options: [
                { key: 'A', text: "Bakelite electrical switches and Melamine kitchenware" },
                { key: 'B', text: "PET water bottles" },
                { key: 'C', text: "Aluminium foil" },
                { key: 'D', text: "Cotton cloth" }
            ],
            correct_option: 'A',
            explanation: "Thermosetting resins (Bakelite, Melamine) form cross-linked chemical matrices that char upon reheating and cannot be remolded."
        },
        {
            id: 82,
            question: "Why is SANITARY LANDFILLING preferred over open dump burning for non-recyclable solid municipal waste?",
            options: [
                { key: 'A', text: "Landfilling makes plastics biodegradable" },
                { key: 'B', text: "Sanitary landfills use impermeable clay/geotextile liners and leachate collection systems to isolate refuse from groundwater and prevent open-air toxic smoke emissions" },
                { key: 'C', text: "Landfilling is free of cost" },
                { key: 'D', text: "Landfilling produces solar electricity" }
            ],
            correct_option: 'B',
            explanation: "Engineered landfills seal waste beneath geomembrane liners with leachate drainage, mitigating soil contamination and air pollution."
        },
        {
            id: 83,
            question: "What is the primary role of earthworms in VERMICOMPOSTING of organic waste?",
            options: [
                { key: 'A', text: "They eat plastics" },
                { key: 'B', text: "They aerate, fragment, and ingest organic matter, producing microbial-rich worm castings (vermicast) that act as premium organic fertilizer" },
                { key: 'C', text: "They produce pesticides" },
                { key: 'D', text: "They kill all bacteria" }
            ],
            correct_option: 'B',
            explanation: "Eisenia fetida earthworms digest biodegradable waste into cast fertilizer rich in nitrates, phosphates, and beneficial microflora."
        },
        {
            id: 84,
            question: "In an ecosystem, which of the following is considered a REGULATING ecosystem service provided by natural forests?",
            options: [
                { key: 'A', text: "Timber extraction only" },
                { key: 'B', text: "Climate regulation, carbon sequestration, flood control, and groundwater recharge" },
                { key: 'C', text: "Tourism ticket sales" },
                { key: 'D', text: "Pesticide manufacturing" }
            ],
            correct_option: 'B',
            explanation: "Regulating services include watershed hydrological buffering, carbon storage, microclimate moderation, and soil erosion control."
        },
        {
            id: 85,
            question: "Which of the following heavy metals found in industrial wastewater bioaccumulates in fish and caused the famous Minamata disease in Japan?",
            options: [
                { key: 'A', text: "Iron" },
                { key: 'B', text: "Methylmercury (Mercury, Hg)" },
                { key: 'C', text: "Calcium" },
                { key: 'D', text: "Sodium" }
            ],
            correct_option: 'B',
            explanation: "Industrial discharge of methylmercury bioaccumulated in marine fish, causing severe neurotoxic Minamata disease in humans."
        },
        {
            id: 86,
            question: "Why does the concentration of pesticides in food grains remain hazardous even after boiling and cooking rice or wheat?",
            options: [
                { key: 'A', text: "Boiling creates new pesticides" },
                { key: 'B', text: "Many organochlorines and synthetic pesticides are chemically thermostable and lipophilic, resisting thermal breakdown at cooking temperatures (100°C)" },
                { key: 'C', text: "Rice absorbs all boiling water" },
                { key: 'D', text: "Pesticides evaporate into gold" }
            ],
            correct_option: 'B',
            explanation: "Persistent organochlorine residues (DDT, DDE, Lindane) possess high thermal stability and do not degrade at normal boiling points."
        },
        {
            id: 87,
            question: "What is the ecological term for the total dry mass of all living organic matter present at a particular trophic level at any given time?",
            options: [
                { key: 'A', text: "Gross productivity" },
                { key: 'B', text: "Standing Crop (or Standing Biomass)" },
                { key: 'C', text: "Carrying capacity" },
                { key: 'D', text: "Ecological footprint" }
            ],
            correct_option: 'B',
            explanation: "Standing crop is the mass of living organisms (biomass) measured as dry weight per unit area at a specific time."
        },
        {
            id: 88,
            question: "Which trophic level in a grassland ecosystem has the SMALLEST total number of individual organisms in an upright pyramid of numbers?",
            options: [
                { key: 'A', text: "Producers (Grasses)" },
                { key: 'B', text: "Top carnivores (e.g. Hawks / Eagles)" },
                { key: 'C', text: "Herbivores (Insects)" },
                { key: 'D', text: "Primary carnivores (Frogs)" }
            ],
            correct_option: 'B',
            explanation: "Apex predators at the highest trophic tier have the smallest population density due to progressive energy constriction."
        },
        {
            id: 89,
            question: "Why is burning dry fallen leaves on city roadsides considered an unscientific and harmful municipal practice?",
            options: [
                { key: 'A', text: "Dry leaves are non-biodegradable" },
                { key: 'B', text: "Burning wastes valuable organic carbon and mineral nutrients while generating PM2.5 particulates, carbon monoxide, and toxic smoke; leaves should instead be composted" },
                { key: 'C', text: "Leaves do not burn" },
                { key: 'D', text: "Leaves produce ozone gas when burned" }
            ],
            correct_option: 'B',
            explanation: "Open leaf burning causes severe particulate air pollution; composting recycles leaf nitrogen, phosphorus, and organic carbon back to soil."
        },
        {
            id: 90,
            question: "What is the 5R principle of sustainable environmental waste management?",
            options: [
                { key: 'A', text: "Read, Run, Rest, Repeat, Rebuild" },
                { key: 'B', text: "Refuse, Reduce, Reuse, Repurpose, Recycle" },
                { key: 'C', text: "React, Remove, Replace, Reheat, Reclaim" },
                { key: 'D', text: "Recharge, Refuel, Restart, Relocate, Reverse" }
            ],
            correct_option: 'B',
            explanation: "The 5R ecological hierarchy is: Refuse (unneeded items), Reduce (consumption), Reuse (materials), Repurpose (alternate uses), Recycle (processing)."
        },

        // =================================================================
        // TIER 5: VERY VERY HARD QUESTIONS (Q91 - Q100)
        // Advanced Energetics, Global Biogeochemical Cycling & Ecological Thermodynamics
        // =================================================================
        {
            id: 91,
            question: "In an agro-ecosystem receiving 1,000,000 J of incident sunlight, corn crops fix solar energy at 1% photosynthetic efficiency. If 80% of the crop biomass is harvested and fed to cattle (which transfer 10% of their ingested energy to beef biomass), how much energy reaches a human who consumes this beef?",
            options: [
                { key: 'A', text: "800 J" },
                { key: 'B', text: "80 J [Solar = 10⁶ J → Corn (1%) = 10,000 J → Cattle fed (80%) = 8,000 J → Cattle biomass (10%) = 800 J → Human (10%) = 80 J]" },
                { key: 'C', text: "8 J" },
                { key: 'D', text: "8,000 J" }
            ],
            correct_option: 'B',
            explanation: "Corn fixed = 1% of 1,000,000 = 10,000 J. Fed to cattle = 8,000 J. Cattle biomass = 800 J (10%). Human ingestion efficiency (10%) = 80 J."
        },
        {
            id: 92,
            question: "Why does the second law of thermodynamics (entropy increase) dictate that NO natural ecological food chain can ever achieve 100% trophic transfer efficiency?",
            options: [
                { key: 'A', text: "Heat moves backwards" },
                { key: 'B', text: "Every energy transformation generates unrecoverable degraded thermal energy (entropy) through cellular respiration, physiological maintenance, and locomotion, irreversibly dispersing heat to the ambient environment" },
                { key: 'C', text: "Light cannot be converted to mass" },
                { key: 'D', text: "Enzymes destroy calories" }
            ],
            correct_option: 'B',
            explanation: "Thermodynamic entropy mandates that energy conversions lose high-grade chemical energy as low-grade metabolic heat to the environment."
        },
        {
            id: 93,
            question: "A persistent pesticide has a half-life of 10 years in soil. If 64 kg/hectare of this pesticide was applied to a farmland in the year 2000, how much residual pesticide will remain active in the soil in the year 2040 (after 40 years)?",
            options: [
                { key: 'A', text: "16 kg/hectare" },
                { key: 'B', text: "4 kg/hectare [n = 40/10 = 4 half-lives; N = 64 × (1/2)⁴ = 64 / 16 = 4 kg/hectare]" },
                { key: 'C', text: "8 kg/hectare" },
                { key: 'D', text: "1 kg/hectare" }
            ],
            correct_option: 'B',
            explanation: "40 years = 4 half-lives. Remaining = 64 × (1/2)⁴ = 64 / 16 = 4 kg/hectare."
        },
        {
            id: 94,
            question: "In the Chapman cycle of stratospheric ozone equilibrium, what two photochemical reactions maintain the steady-state concentration of ozone in an unpolluted atmosphere?",
            options: [
                { key: 'A', text: "Combustion and precipitation" },
                { key: 'B', text: "Ozone production (O₂ xrightarrow{UV} 2O ; O + O₂ → O₃) balanced dynamically by photolytic breakdown (O₃ xrightarrow{UV} O₂ + O ; O₃ + O → 2O₂)" },
                { key: 'C', text: "Photosynthesis and respiration" },
                { key: 'D', text: "Evaporation and condensation" }
            ],
            correct_option: 'B',
            explanation: "The Chapman mechanism balances photolytic O₃ synthesis against UV photodissociation and oxygen radical recombination."
        },
        {
            id: 95,
            question: "Why do aquatic ecosystems with multi-tier food chains (e.g. 5–6 trophic levels) exhibit much more SEVERE biomagnification of methylmercury than 3-step terrestrial grazing food chains?",
            options: [
                { key: 'A', text: "Water dissolves mercury" },
                { key: 'B', text: "Each additional trophic link multiplies the bioaccumulation concentration factor by another order of magnitude (~10× per step), exponentially compounding toxicity across 5–6 steps (10⁵–10⁶ fold increase)" },
                { key: 'C', text: "Fish have no kidneys" },
                { key: 'D', text: "Aquatic plants produce mercury" }
            ],
            correct_option: 'B',
            explanation: "Each trophic step magnifies non-biodegradable toxins by ~10×; spanning 6 aquatic levels yields an exponential 10⁶-fold contaminant escalation."
        },
        {
            id: 96,
            question: "In an ecosystem stability study, how does increased SPECIES RICHNESS in a food web contribute to ecosystem resilience against environmental disturbances?",
            options: [
                { key: 'A', text: "It reduces total food consumption" },
                { key: 'B', text: "Multiple feeding links provide functional redundancy; if one prey species declines, predators switch to alternative prey without collapsing the whole food web" },
                { key: 'C', text: "It prevents sunlight absorption" },
                { key: 'D', text: "It eliminates decomposers" }
            ],
            correct_option: 'B',
            explanation: "Biodiversity offers ecological insurance: functional redundancy allows web stability via dietary switching when individual species fluctuate."
        },
        {
            id: 97,
            question: "Why does the biological decomposition of organic matter in a deep stagnant pond cause an ABRUPT SPIKE in Biochemical Oxygen Demand (BOD) and total collapse of aquatic life?",
            options: [
                { key: 'A', text: "Microbes produce toxic nitrogen gas" },
                { key: 'B', text: "Aerobic saprophytic bacteria consume dissolved oxygen exponentially to oxidize the organic carbon overload, dropping dissolved O₂ below the critical threshold (4 mg/L) needed for fish survival" },
                { key: 'C', text: "Algae stop photosynthesis permanently" },
                { key: 'D', text: "Water turns into carbon dioxide" }
            ],
            correct_option: 'B',
            explanation: "Aerobic respiration by decomposers consuming organic loads drives high BOD, causing anoxic hypoxia that suffocates aquatic organisms."
        },
        {
            id: 98,
            question: "A bioplastic manufactured from polyhydroxyalkanoate (PHA) by bacterial fermentation is degraded by soil microflora. What are the ultimate end products of its aerobic biodegradation?",
            options: [
                { key: 'A', text: "Toxic microplastic particles and chlorine" },
                { key: 'B', text: "Carbon dioxide (CO₂), Water (H₂O), and Microbial Biomass (humus)" },
                { key: 'C', text: "Sulphuric acid" },
                { key: 'D', text: "CFC gas" }
            ],
            correct_option: 'B',
            explanation: "True bio-derived biopolymers (PHA/PLA) undergo complete enzymatic mineralization into CO₂, H₂O, and non-toxic biomass."
        },
        {
            id: 99,
            question: "In an ecological energetics experiment, if the ecological efficiency (assimilation × production efficiency) of an herbivore is 8% and a primary carnivore is 12%, what fraction of the producer's net primary productivity is incorporated into the carnivore's tissues?",
            options: [
                { key: 'A', text: "20%" },
                { key: 'B', text: "0.96% [0.08 × 0.12 = 0.0096 = 0.96%]" },
                { key: 'C', text: "4%" },
                { key: 'D', text: "1.5%" }
            ],
            correct_option: 'B',
            explanation: "Cumulative efficiency across two trophic transfers is the product: 8% × 12% = 0.08 × 0.12 = 0.0096 = 0.96%."
        },
        {
            id: 100,
            question: "Why did the 1987 Montreal Protocol succeed in stabilizing and initiating the recovery of the Antarctic ozone hole, serving as the gold standard for global environmental diplomacy?",
            options: [
                { key: 'A', text: "It banned the use of refrigerators entirely" },
                { key: 'B', text: "It established legally binding global phase-out schedules for ozone-depleting substances, provided financial/technical transfer mechanisms for developing nations, and mandated universal scientific reassessments" },
                { key: 'C', text: "It created artificial ozone using space lasers" },
                { key: 'D', text: "It moved all factories to the Sahara desert" }
            ],
            correct_option: 'B',
            explanation: "The Montreal Protocol combined clear chemical phase-outs, multilateral fund technology transfers, trade sanctions, and scientific review, ensuring 99% CFC reduction."
        }
    ]
};
