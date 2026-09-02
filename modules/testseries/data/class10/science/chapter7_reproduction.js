/* =========================================================================
   ELITE CLASSES — CLASS 10 SCIENCE TEST SERIES
   Chapter 7: How do Organisms Reproduce? (100 Questions Master Assessment)
   NCERT Standard Assessment with Proper Scientific Typography & Terminology
   Difficulty Distribution: 50 Easy | 10 Medium | 10 Hard | 20 Tricky | 10 Very Hard
   ========================================================================= */

const Class10ScienceChapter7FullBank = {
    id: 'ts_c10_sci_ch7',
    title: 'Chapter 7: How do Organisms Reproduce? Assessment',
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
        // Direct NCERT Concepts, Definitions, Asexual Modes, Anatomy & Contraception
        // =================================================================
        {
            id: 1,
            question: "Which cellular macromolecule located in the nucleus contains the genetic information for the inheritance of features from parents to offspring?",
            options: [
                { key: 'A', text: "ATP (Adenosine Triphosphate)" },
                { key: 'B', text: "DNA (Deoxyribonucleic Acid)" },
                { key: 'C', text: "Hemoglobin" },
                { key: 'D', text: "Chlorophyll" }
            ],
            correct_option: 'B',
            explanation: "DNA in the chromosomes of the cell nucleus contains coded genetic blueprints that direct cellular protein synthesis and determine body design."
        },
        {
            id: 2,
            question: "What is the primary fundamental cellular event involved in biological reproduction?",
            options: [
                { key: 'A', text: "Breakdown of glucose into pyruvate" },
                { key: 'B', text: "Creation of an accurate DNA copy accompanied by division of cellular apparatus" },
                { key: 'C', text: "Transpiration of water" },
                { key: 'D', text: "Excretion of urea" }
            ],
            correct_option: 'B',
            explanation: "Reproduction requires replication of parental DNA followed by cytokinesis to equip each new daughter cell with its own functional cellular apparatus."
        },
        {
            id: 3,
            question: "Why are the offspring produced by asexual reproduction not 100% identical copies of the parent at the molecular level?",
            options: [
                { key: 'A', text: "Cells run out of amino acids" },
                { key: 'B', text: "No biochemical copying reaction is absolutely reliable, leading to subtle variations during DNA replication" },
                { key: 'C', text: "DNA is completely destroyed in each generation" },
                { key: 'D', text: "Only mutations from sunlight occur" }
            ],
            correct_option: 'B',
            explanation: "Biochemical DNA polymerase copying mechanisms possess intrinsic minor error rates, generating subtle variations that serve as the raw material for evolution."
        },
        {
            id: 4,
            question: "How does the occurrence of subtle variations within a reproducing population benefit a species over evolutionary time?",
            options: [
                { key: 'A', text: "It guarantees that all individuals live forever" },
                { key: 'B', text: "It increases the probability that some variant individuals will survive sudden drastic environmental changes (e.g. global warming)" },
                { key: 'C', text: "It stops natural selection" },
                { key: 'D', text: "It eliminates the need for DNA" }
            ],
            correct_option: 'B',
            explanation: "If an ecological niche changes drastically (e.g. water temperature spikes), pre-existing resistant variants (like heat-tolerant bacteria) survive and perpetuate the species."
        },
        {
            id: 5,
            question: "Which type of asexual reproduction is observed in unicellular Amoeba where the cell splits into two daughter cells across any plane?",
            options: [
                { key: 'A', text: "Spore formation" },
                { key: 'B', text: "Simple binary fission" },
                { key: 'C', text: "Vegetative propagation" },
                { key: 'D', text: "Fragmentation" }
            ],
            correct_option: 'B',
            explanation: "Amoeba reproduces by simple binary fission, splitting its nucleus (karyokinesis) and cytoplasm (cytokinesis) into two equal halves along any plane."
        },
        {
            id: 6,
            question: "In which protozoan parasite (causing kala-azar) does binary fission occur in a definite longitudinal orientation relative to its whip-like flagellum?",
            options: [
                { key: 'A', text: "Amoeba" },
                { key: 'B', text: "Leishmania" },
                { key: 'C', text: "Plasmodium" },
                { key: 'D', text: "Paramoecium" }
            ],
            correct_option: 'B',
            explanation: "Leishmania has a distinct whip-like flagellum at one end, and its binary fission occurs longitudinally in a fixed plane relative to this structure."
        },
        {
            id: 7,
            question: "Which unicellular malarial parasite undergoes multiple fission to produce many daughter cells simultaneously inside a protective cyst?",
            options: [
                { key: 'A', text: "Amoeba" },
                { key: 'B', text: "Plasmodium" },
                { key: 'C', text: "Leishmania" },
                { key: 'D', text: "Hydra" }
            ],
            correct_option: 'B',
            explanation: "Plasmodium reproduces asexually by multiple fission (schizogony), where repeated nuclear division yields dozens of daughter merozoites simultaneously."
        },
        {
            id: 8,
            question: "In which unicellular fungus does asexual reproduction occur by putting out small cellular outgrowths called buds that detach and grow?",
            options: [
                { key: 'A', text: "Bread mould (Rhizopus)" },
                { key: 'B', text: "Yeast" },
                { key: 'C', text: "Mushroom" },
                { key: 'D', text: "Spirogyra" }
            ],
            correct_option: 'B',
            explanation: "Yeast reproduces by budding: a small protuberance forms on the parent cell, receives a daughter nucleus, and pinches off as an independent yeast cell."
        },
        {
            id: 9,
            question: "Which filamentous green alga with simple multicellular organization reproduces by breaking up into fragments upon maturation?",
            options: [
                { key: 'A', text: "Planaria" },
                { key: 'B', text: "Spirogyra" },
                { key: 'C', text: "Hydra" },
                { key: 'D', text: "Amoeba" }
            ],
            correct_option: 'B',
            explanation: "Spirogyra consists of ribbon-like filaments that fragment mechanically; each detached fragment grows into a new filament through mitotic divisions."
        },
        {
            id: 10,
            question: "Which simple animals have remarkable regenerative capacity, such that when cut into multiple pieces, each piece can grow into a complete organism?",
            options: [
                { key: 'A', text: "Cockroach and Mosquito" },
                { key: 'B', text: "Hydra and Planaria (Flatworm)" },
                { key: 'C', text: "Fish and Frog" },
                { key: 'D', text: "Earthworm and Snail" }
            ],
            correct_option: 'B',
            explanation: "Planaria and Hydra possess specialized pluripotent regenerative cells that proliferate and differentiate to reform all lost tissues from cut body fragments."
        },
        {
            id: 11,
            question: "How does Hydra reproduce asexually under favorable environmental conditions?",
            options: [
                { key: 'A', text: "By multiple fission inside a cyst" },
                { key: 'B', text: "By budding using regenerative cells that undergo repeated mitotic division at one specific site on the body wall" },
                { key: 'C', text: "By releasing airborne spores" },
                { key: 'D', text: "By producing seeds" }
            ],
            correct_option: 'B',
            explanation: "In Hydra, repeated localized cell division forms an external bud equipped with miniature tentacles that matures and detaches as a free-living individual."
        },
        {
            id: 12,
            question: "The development of a new plant from vegetative vegetative parts such as root, stem, or leaves under suitable conditions is known as:",
            options: [
                { key: 'A', text: "Sexual reproduction" },
                { key: 'B', text: "Vegetative propagation" },
                { key: 'C', text: "Multiple fission" },
                { key: 'D', text: "Parthenogenesis" }
            ],
            correct_option: 'B',
            explanation: "Vegetative propagation is an asexual mode of plant reproduction using non-floral vegetative organs (tubers, rhizomes, runners, leaves)."
        },
        {
            id: 13,
            question: "In Bryophyllum, vegetative propagation occurs naturally through adventitious buds produced in the:",
            options: [
                { key: 'A', text: "Underground roots" },
                { key: 'B', text: "Notches along the leaf margin" },
                { key: 'C', text: "Petals of the flower" },
                { key: 'D', text: "Bark of the trunk" }
            ],
            correct_option: 'B',
            explanation: "Bryophyllum leaves bear foliar adventitious buds in marginal serrations/notches that detach and root upon contact with moist soil."
        },
        {
            id: 14,
            question: "On a potato tuber, new green shoots and roots arise during vegetative propagation from structures called:",
            options: [
                { key: 'A', text: "Root hairs" },
                { key: 'B', text: "Eyes (Buds in notches)" },
                { key: 'C', text: "Sepals" },
                { key: 'D', text: "Stomata" }
            ],
            correct_option: 'B',
            explanation: "Potato 'eyes' are nodes on the modified underground stem containing axillary dormant buds that sprout into new leafy shoots."
        },
        {
            id: 15,
            question: "Which agricultural propagation techniques are commonly used to cultivate sugarcane, roses, and grapes?",
            options: [
                { key: 'A', text: "Spore dusting and pollination" },
                { key: 'B', text: "Stem cutting, layering, and grafting" },
                { key: 'C', text: "Multiple fission" },
                { key: 'D', text: "Hydrotropism" }
            ],
            correct_option: 'B',
            explanation: "Horticulturalists propagate sugarcane, roses, and grapes using vegetative artificial cloning methods (cuttings, air layering, and scion/rootstock grafting)."
        },
        {
            id: 16,
            question: "Which of the following is a major advantage of vegetative propagation in commercial agriculture?",
            options: [
                { key: 'A', text: "It introduces maximum genetic variation" },
                { key: 'B', text: "Plants raised bear flowers and fruits earlier than seed-grown plants, and seedless varieties (banana, orange, rose, jasmine) can be easily multiplied" },
                { key: 'C', text: "It produces new species instantly" },
                { key: 'D', text: "It does not require water or soil" }
            ],
            correct_option: 'B',
            explanation: "Vegetative propagation ensures faster maturity, preserves desirable parental characteristics across uniform clonal crops, and enables propagation of sterile seedless cultivars."
        },
        {
            id: 17,
            question: "In plant tissue culture (micropropagation), what is the unorganized dividing mass of cells formed in the artificial nutrient medium called?",
            options: [
                { key: 'A', text: "Zygote" },
                { key: 'B', text: "Callus" },
                { key: 'C', text: "Embryo" },
                { key: 'D', text: "Radicle" }
            ],
            correct_option: 'B',
            explanation: "An explant grown on sterile nutrient agar forms an undifferentiated, rapidly dividing cell mass termed a callus, which is subsequently treated with auxins/cytokinins to induce shoot/root differentiation."
        },
        {
            id: 18,
            question: "In bread mould (Rhizopus), what are the microscopic reproductive structures containing thick-walled spores called?",
            options: [
                { key: 'A', text: "Hyphae" },
                { key: 'B', text: "Sporangia (Blobs on sticks)" },
                { key: 'C', text: "Mycelium" },
                { key: 'D', text: "Roots" }
            ],
            correct_option: 'B',
            explanation: "Rhizopus produces globular terminal sporangia filled with dormant, desiccation-resistant asexual spores that disperse through the air."
        },
        {
            id: 19,
            question: "What is the primary role of the thick protective cell wall surrounding fungal spores in Rhizopus?",
            options: [
                { key: 'A', text: "To produce nectar" },
                { key: 'B', text: "To protect spores from unfavorable dry environments until they land on a moist nutrient surface to germinate" },
                { key: 'C', text: "To attract insects" },
                { key: 'D', text: "To absorb light for photosynthesis" }
            ],
            correct_option: 'B',
            explanation: "The cyst-like outer spore wall shields the fungal protoplasm from desiccation, heat, and UV radiation until favorable germination conditions arise."
        },
        {
            id: 20,
            question: "What specialized process of cell division reduces the chromosome number and DNA content by half in gametes (germ cells)?",
            options: [
                { key: 'A', text: "Mitosis" },
                { key: 'B', text: "Meiosis (Reduction division)" },
                { key: 'C', text: "Binary fission" },
                { key: 'D', text: "Budding" }
            ],
            correct_option: 'B',
            explanation: "Meiosis halves diploid (2n) germline chromosomes into haploid (n) gametes, ensuring that syngamy during fertilization restores the diploid 2n complement in the zygote."
        },
        {
            id: 21,
            question: "In higher sexually reproducing organisms, how do male and female gametes differ morphologically?",
            options: [
                { key: 'A', text: "Male gamete is large and stationary; female gamete is small and motile" },
                { key: 'B', text: "Male gamete is smaller and motile; female gamete is larger and non-motile containing stored food reserves" },
                { key: 'C', text: "Both gametes are identical in all organisms" },
                { key: 'D', text: "Male gametes have cell walls; female gametes do not" }
            ],
            correct_option: 'B',
            explanation: "Anisogamy/oogamy features tiny, flagellated motile male spermatozoa and large nutrient-laden stationary female ova."
        },
        {
            id: 22,
            question: "Which of the following floral organs constitute the reproductive parts of an angiosperm flower?",
            options: [
                { key: 'A', text: "Sepals and Petals" },
                { key: 'B', text: "Stamens (male) and Pistil/Carpel (female)" },
                { key: 'C', text: "Thalamus and Pedicel" },
                { key: 'D', text: "Bracts and Leaves" }
            ],
            correct_option: 'B',
            explanation: "Stamens (androecium) produce pollen, and carpels/pistils (gynoecium) house ovules; sepals and petals are non-reproductive accessory perianth whorls."
        },
        {
            id: 23,
            question: "Which of the following plants bear unisexual flowers (containing either stamens or carpels, but not both)?",
            options: [
                { key: 'A', text: "Hibiscus and Mustard" },
                { key: 'B', text: "Papaya and Watermelon" },
                { key: 'C', text: "Rose and Pea" },
                { key: 'D', text: "Sunflower and Lily" }
            ],
            correct_option: 'B',
            explanation: "Papaya and watermelon produce imperfect unisexual flowers (staminate or pistillate). Hibiscus and mustard bear bisexual (hermaphroditic) flowers."
        },
        {
            id: 24,
            question: "What are the three distinct anatomical parts of the female reproductive organ (Pistil / Carpel) in a flower?",
            options: [
                { key: 'A', text: "Anther, Filament, and Pollen" },
                { key: 'B', text: "Stigma (sticky terminal part), Style (elongated neck), and Ovary (swollen basal part)" },
                { key: 'C', text: "Sepal, Petal, and Pedicel" },
                { key: 'D', text: "Radicle, Plumule, and Cotyledon" }
            ],
            correct_option: 'B',
            explanation: "The pistil comprises a receptive terminal stigma, a slender transmitting style, and a basal ovary containing ovules."
        },
        {
            id: 25,
            question: "The transfer of yellow pollen grains from the anther to the receptive stigma of the same flower is known as:",
            options: [
                { key: 'A', text: "Cross-pollination" },
                { key: 'B', text: "Self-pollination (Autogamy)" },
                { key: 'C', text: "Fertilisation" },
                { key: 'D', text: "Germination" }
            ],
            correct_option: 'B',
            explanation: "Self-pollination is the transfer of pollen from the anther to the stigma of the same flower or another flower on the same plant."
        },
        {
            id: 26,
            question: "The transfer of pollen grains from the anther of one flower to the stigma of a flower on another plant of the same species by wind, water, or insects is called:",
            options: [
                { key: 'A', text: "Self-pollination" },
                { key: 'B', text: "Cross-pollination (Allogamy)" },
                { key: 'C', text: "Translocation" },
                { key: 'D', text: "Implantation" }
            ],
            correct_option: 'B',
            explanation: "Cross-pollination transfers pollen between flowers of different individual plants of the same species via biotic (bees) or abiotic (wind, water) vectors."
        },
        {
            id: 27,
            question: "After a pollen grain lands on a compatible stigma, how does the male germ cell reach the female egg cell inside the ovary?",
            options: [
                { key: 'A', text: "It diffuses through air" },
                { key: 'B', text: "A pollen tube germinates and grows down through the style into the ovary" },
                { key: 'C', text: "Insects carry it inside the ovary" },
                { key: 'D', text: "The stigma drops into the ovary" }
            ],
            correct_option: 'B',
            explanation: "Stigmatic secretions stimulate pollen germination; a pollen tube elongates through the style tissues to deliver two sperm nuclei into the ovule embryo sac."
        },
        {
            id: 28,
            question: "After fertilisation in flowering plants, the ovule develops into a __________, while the ovary ripens to form the __________.",
            options: [
                { key: 'A', text: "Fruit; Seed" },
                { key: 'B', text: "Seed; Fruit" },
                { key: 'C', text: "Petal; Sepal" },
                { key: 'D', text: "Root; Leaf" }
            ],
            correct_option: 'B',
            explanation: "Post-fertilisation: the integuments of the ovule harden into a seed coat (seed), while the ovary wall pericarp expands and matures into the fruit."
        },
        {
            id: 29,
            question: "In a germinating Bengal gram (chana) seed, which embryonic parts develop into the future shoot and future root, respectively?",
            options: [
                { key: 'A', text: "Cotyledon (shoot) and Plumule (root)" },
                { key: 'B', text: "Plumule (future shoot) and Radicle (future root)" },
                { key: 'C', text: "Radicle (future shoot) and Plumule (future root)" },
                { key: 'D', text: "Cotyledon (root) and Seed coat (shoot)" }
            ],
            correct_option: 'B',
            explanation: "The embryo consists of cotyledons (nutrient reserves), a plumule (epicotyl forming aerial stem/leaves), and a radicle (hypocotyl forming primary root)."
        },
        {
            id: 30,
            question: "What is the biological period of adolescence during which reproductive organs mature and secondary sexual characteristics develop called?",
            options: [
                { key: 'A', text: "Gestation" },
                { key: 'B', text: "Puberty" },
                { key: 'C', text: "Menopause" },
                { key: 'D', text: "Parturition" }
            ],
            correct_option: 'B',
            explanation: "Puberty marks sexual maturation triggered by hypothalamic GnRH, leading to gonadal gametogenesis and secondary sexual traits."
        },
        {
            id: 31,
            question: "Which of the following physical changes occurs in teenage boys at the onset of puberty?",
            options: [
                { key: 'A', text: "Enlargement of breasts" },
                { key: 'B', text: "Growth of facial hair and cracking/deepening of the voice" },
                { key: 'C', text: "Onset of menstruation" },
                { key: 'D', text: "Shrinkage of testes" }
            ],
            correct_option: 'B',
            explanation: "Testosterone stimulates laryngeal enlargement (Adam's apple, voice cracking/deepening), facial/body hair growth, and testicular/penile development in boys."
        },
        {
            id: 32,
            question: "Which of the following physical changes is characteristic of puberty in adolescent girls?",
            options: [
                { key: 'A', text: "Cracking of voice" },
                { key: 'B', text: "Enlargement of breasts, darkening of nipple skin, and onset of menstruation (Menarche)" },
                { key: 'C', text: "Growth of thick beard" },
                { key: 'D', text: "Broadening of shoulders only" }
            ],
            correct_option: 'B',
            explanation: "Estrogen surges induce breast thelarche, pelvic widening, and initiation of monthly uterine menstrual bleeding cycles (menarche)."
        },
        {
            id: 33,
            question: "Where are human male testes anatomically located, and why are they situated outside the abdominal cavity in the scrotum?",
            options: [
                { key: 'A', text: "Inside the liver; for oxygen supply" },
                { key: 'B', text: "In the scrotum outside abdominal cavity; because spermatogenesis requires a temperature 2 to 2.5°C lower than core internal body temperature" },
                { key: 'C', text: "In the chest; to be near the heart" },
                { key: 'D', text: "Inside the pelvis; to avoid moving" }
            ],
            correct_option: 'B',
            explanation: "The extra-abdominal scrotum maintains testicular temperature at ~34–35°C (2–2.5°C below core body 37°C), essential for viable sperm production."
        },
        {
            id: 34,
            question: "Which duct transports mature sperms from the testes to the urethra?",
            options: [
                { key: 'A', text: "Fallopian tube" },
                { key: 'B', text: "Vas deferens (Sperm duct)" },
                { key: 'C', text: "Ureter" },
                { key: 'D', text: "Cervix" }
            ],
            correct_option: 'B',
            explanation: "The vas deferens carries spermatozoa from the epididymis up through the inguinal canal to join the urethra at the ejaculatory duct."
        },
        {
            id: 35,
            question: "In the human male anatomy, which tube serves as a common passageway for BOTH urine and seminal fluid (sperms)?",
            options: [
                { key: 'A', text: "Ureter" },
                { key: 'B', text: "Urethra" },
                { key: 'C', text: "Vas deferens" },
                { key: 'D', text: "Oviduct" }
            ],
            correct_option: 'B',
            explanation: "In human males, the urethra passes through the prostate and corpus spongiosum of the penis, conveying both urine and semen (urinogenital tract)."
        },
        {
            id: 36,
            question: "What is the functional role of secretions from the prostate gland and seminal vesicles in the male reproductive tract?",
            options: [
                { key: 'A', text: "They destroy sperms" },
                { key: 'B', text: "They provide an alkaline fluid medium containing fructose and enzymes that nourishes sperms and facilitates fluid transport" },
                { key: 'C', text: "They produce red blood cells" },
                { key: 'D', text: "They convert urine into water" }
            ],
            correct_option: 'B',
            explanation: "Seminal fluid neutralises acidic urethral/vaginal environments, provides fructose for sperm ATP generation, and constitutes the bulk of seminal volume."
        },
        {
            id: 37,
            question: "What is the primary anatomical feature of a human sperm cell that provides motility to swim towards the female ovum?",
            options: [
                { key: 'A', text: "A heavy nucleus" },
                { key: 'B', text: "A long flagellar tail powered by mitochondrial ATP" },
                { key: 'C', text: "A protective thick shell" },
                { key: 'D', text: "Cilia covering the entire head" }
            ],
            correct_option: 'B',
            explanation: "A sperm cell consists of an acrosome-capped haploid head, a midpiece packed with spiraled mitochondria, and a long microtubular flagellar tail for swimming."
        },
        {
            id: 38,
            question: "Where are human female eggs (ova) produced and released monthly at puberty?",
            options: [
                { key: 'A', text: "Uterus" },
                { key: 'B', text: "Ovaries" },
                { key: 'C', text: "Vagina" },
                { key: 'D', text: "Cervix" }
            ],
            correct_option: 'B',
            explanation: "Ovaries house primordial follicles from birth; starting at puberty, one mature Graafian follicle ovulates one secondary oocyte roughly every 28 days."
        },
        {
            id: 39,
            question: "In the human female reproductive tract, where does fertilisation (fusion of sperm and egg) normally take place?",
            options: [
                { key: 'A', text: "Vagina" },
                { key: 'B', text: "Oviduct / Fallopian tube (Ampulla)" },
                { key: 'C', text: "Uterus" },
                { key: 'D', text: "Cervix" }
            ],
            correct_option: 'B',
            explanation: "Fertilisation occurs in the upper portion (ampullary-isthmic junction) of the oviduct / Fallopian tube."
        },
        {
            id: 40,
            question: "Where does the developing embryo implant and grow into a foetus inside the mother's body?",
            options: [
                { key: 'A', text: "Ovary" },
                { key: 'B', text: "Uterus (Womb)" },
                { key: 'C', text: "Fallopian tube" },
                { key: 'D', text: "Abdominal cavity" }
            ],
            correct_option: 'B',
            explanation: "The cleaving blastocyst embeds (implants) in the vascularized, glandular endometrium of the uterus for embryonic development."
        },
        {
            id: 41,
            question: "What specialized disc-shaped vascular tissue connects the developing embryo to the uterine wall for nutrient uptake and waste exchange?",
            options: [
                { key: 'A', text: "Corpus luteum" },
                { key: 'B', text: "Placenta" },
                { key: 'C', text: "Amnion" },
                { key: 'D', text: "Fallopian tube" }
            ],
            correct_option: 'B',
            explanation: "The placenta features chorionic villi interdigitated with maternal blood sinuses, facilitating diffusion of glucose, amino acids, O₂, and urea clearance."
        },
        {
            id: 42,
            question: "What is the average gestation period (duration of pregnancy) in human beings from conception to delivery?",
            options: [
                { key: 'A', text: "3 months" },
                { key: 'B', text: "Approximately 9 months (around 280 days)" },
                { key: 'C', text: "15 months" },
                { key: 'D', text: "5 months" }
            ],
            correct_option: 'B',
            explanation: "Human pregnancy spans approximately 9 calendar months (38–40 weeks / 280 days from last menstrual period)."
        },
        {
            id: 43,
            question: "If an ovulated human egg is NOT fertilised by a sperm, what happens to the prepared uterine endometrial lining?",
            options: [
                { key: 'A', text: "It turns into a placenta" },
                { key: 'B', text: "It slowly breaks down and is shed along with unfertilised egg, blood, and mucus through the vagina as Menstruation" },
                { key: 'C', text: "It solidifies into bone" },
                { key: 'D', text: "It remains thick permanently" }
            ],
            correct_option: 'B',
            explanation: "Without fertilisation, progesterone drops, triggering constriction of spiral arterioles, endometrial ischemia, necrosis, and menstrual bleeding."
        },
        {
            id: 44,
            question: "How long does the menstrual bleeding phase typically last in a human female?",
            options: [
                { key: 'A', text: "1 hour" },
                { key: 'B', text: "About 2 to 8 days" },
                { key: 'C', text: "20 to 25 days" },
                { key: 'D', text: "60 days" }
            ],
            correct_option: 'B',
            explanation: "The menstrual flow phase typically lasts between 2 to 8 days (average 3–5 days)."
        },
        {
            id: 45,
            question: "Which of the following sexually transmitted infections (STIs) are caused by BACTERIAL pathogens?",
            options: [
                { key: 'A', text: "Warts and HIV-AIDS" },
                { key: 'B', text: "Gonorrhoea and Syphilis" },
                { key: 'C', text: "Malaria and Dengue" },
                { key: 'D', text: "Typhoid and Cholera" }
            ],
            correct_option: 'B',
            explanation: "Gonorrhoea (Neisseria gonorrhoeae) and Syphilis (Treponema pallidum) are bacterial STIs; Genital warts (HPV) and AIDS (HIV) are viral."
        },
        {
            id: 46,
            question: "Which of the following sexually transmitted diseases is caused by a VIRAL infection and compromises the human immune system?",
            options: [
                { key: 'A', text: "Syphilis" },
                { key: 'B', text: "HIV-AIDS" },
                { key: 'C', text: "Gonorrhoea" },
                { key: 'D', text: "Tuberculosis" }
            ],
            correct_option: 'B',
            explanation: "Human Immunodeficiency Virus (HIV) attacks CD4 helper T-lymphocytes, causing Acquired Immunodeficiency Syndrome (AIDS)."
        },
        {
            id: 47,
            question: "Which barrier method of contraception worn over the penis during intercourse helps in preventing BOTH unwanted pregnancy and the transmission of STIs?",
            options: [
                { key: 'A', text: "Oral pill" },
                { key: 'B', text: "Condom" },
                { key: 'C', text: "Copper-T" },
                { key: 'D', text: "Vasectomy" }
            ],
            correct_option: 'B',
            explanation: "Latex condoms form a physical barrier preventing direct mucosal fluid contact, blocking both sperm entry and pathogenic viral/bacterial STI transmission."
        },
        {
            id: 48,
            question: "How do oral contraceptive pills taken by women prevent conception?",
            options: [
                { key: 'A', text: "They destroy sperms in the vagina" },
                { key: 'B', text: "They alter hormonal levels (estrogen/progestin) to inhibit ovulation so that no egg is released from the ovaries" },
                { key: 'C', text: "They surgically block the uterus" },
                { key: 'D', text: "They dissolve the embryo after 3 months" }
            ],
            correct_option: 'B',
            explanation: "Oral pills contain synthetic progestin-estrogen combinations that suppress pituitary FSH and LH secretion, preventing follicular maturation and ovulation."
        },
        {
            id: 49,
            question: "Which intrauterine contraceptive device (IUD) is medically placed inside the uterus by a doctor to prevent pregnancy?",
            options: [
                { key: 'A', text: "Condom" },
                { key: 'B', text: "Copper-T / Loop" },
                { key: 'C', text: "Oral steroid" },
                { key: 'D', text: "Diaphragm cap" }
            ],
            correct_option: 'B',
            explanation: "Copper-T and intrauterine loops release copper ions that suppress sperm motility and fertilising capacity while creating a hostile uterine environment against blastocyst implantation."
        },
        {
            id: 50,
            question: "What are the surgical permanent sterilization methods in males and females called, respectively?",
            options: [
                { key: 'A', text: "Tubectomy (in males) and Vasectomy (in females)" },
                { key: 'B', text: "Vasectomy (blocking vas deferens in males) and Tubectomy (blocking Fallopian tubes in females)" },
                { key: 'C', text: "Dialysis and Chemotherapy" },
                { key: 'D', text: "Grafting and Layering" }
            ],
            correct_option: 'B',
            explanation: "Vasectomy cuts/ligates the vas deferens in men to prevent sperm ejaculation; Tubectomy cuts/ligates the oviducts in women to prevent egg transport and fertilisation."
        },

        // =================================================================
        // TIER 2: MEDIUM QUESTIONS (Q51 - Q60)
        // Single-Step Mechanisms, Floral & Human Anatomy, Gametogenesis
        // =================================================================
        {
            id: 51,
            question: "Why cannot complex multicellular animals (such as humans or birds) regenerate complete organisms from cut body pieces like Planaria?",
            options: [
                { key: 'A', text: "Complex animals have no cells" },
                { key: 'B', text: "Their bodies are not random cell aggregations; differentiated cells are organized into specialized tissues, organs, and organ systems with irreversibly restricted developmental potency" },
                { key: 'C', text: "They have warm blood" },
                { key: 'D', text: "They do not possess DNA" }
            ],
            correct_option: 'B',
            explanation: "Higher animals undergo terminal cell differentiation and complex spatial organogenesis; their specialized somatic cells lack the pluripotency required to reconstruct entire organ systems from scratch."
        },
        {
            id: 52,
            question: "In the flower of a mustard plant, what are the respective roles of bright petals and green sepals?",
            options: [
                { key: 'A', text: "Sepals produce pollen; petals produce eggs" },
                { key: 'B', text: "Sepals protect the inner floral whorls in the bud stage; brightly coloured petals attract pollinating insects with visual cues and scent" },
                { key: 'C', text: "Petals turn into seeds; sepals turn into fruits" },
                { key: 'D', text: "Both only absorb carbon dioxide" }
            ],
            correct_option: 'B',
            explanation: "Calyx (sepals) encloses and protects floral buds against herbivores/desiccation; corolla (petals) provides visual/olfactory attraction for biotic insect pollinators."
        },
        {
            id: 53,
            question: "How does the structural arrangement of villi in the human placenta maximize physiological exchange between maternal and foetal blood?",
            options: [
                { key: 'A', text: "Villi mix the maternal and fetal blood directly together into one pool" },
                { key: 'B', text: "Chorionic villi on the embryo side project into maternal blood spaces, providing a vast surface area for diffusion of glucose, oxygen, and metabolic wastes without mixing blood streams" },
                { key: 'C', text: "Villi act as teeth to chew food" },
                { key: 'D', text: "Villi filter urine into the mother's lungs" }
            ],
            correct_option: 'B',
            explanation: "Placental villi vastly amplify surface area for countercurrent diffusion across a thin syncytiotrophoblast barrier, preventing immune rejection and blood incompatibility."
        },
        {
            id: 54,
            question: "Why does the child sex ratio in some human populations decline unnaturally, and what legal measures have been enacted to prevent it?",
            options: [
                { key: 'A', text: "Due to malaria; hospitals give vitamins" },
                { key: 'B', text: "Due to reckless illegal female foeticide following prenatal sex determination; prohibited by law under the Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act" },
                { key: 'C', text: "Due to male migration; weddings are banned" },
                { key: 'D', text: "Due to dietary habits only" }
            ],
            correct_option: 'B',
            explanation: "Sex-selective abortions driven by patriarchal bias skewed sex ratios, leading to strict legal prohibition of prenatal ultrasound fetal sex determination under the PCPNDT Act."
        },
        {
            id: 55,
            question: "If a woman is using an Intrauterine Device (Copper-T), will it provide protection against Sexually Transmitted Diseases (STIs)?",
            options: [
                { key: 'A', text: "Yes, copper destroys all viruses" },
                { key: 'B', text: "No, Copper-T only prevents intrauterine blastocyst implantation and does not prevent mucosal contact or transmission of viral and bacterial pathogens during intercourse" },
                { key: 'C', text: "Yes, because it is made of metal" },
                { key: 'D', text: "Yes, it acts as a vaccine" }
            ],
            correct_option: 'B',
            explanation: "IUDs like Copper-T function purely within the uterine cavity to prevent pregnancy; they provide zero barrier against pathogens transmitting across genital epithelial mucosa."
        },
        {
            id: 56,
            question: "What is the biological significance of crossing over and recombination during meiotic division in sexual reproduction?",
            options: [
                { key: 'A', text: "It creates identical clones" },
                { key: 'B', text: "It generates unique combinations of maternal and paternal alleles in gametes, creating genetic diversity that enhances adaptive evolutionary potential" },
                { key: 'C', text: "It stops cell division" },
                { key: 'D', text: "It reduces cell size to zero" }
            ],
            correct_option: 'B',
            explanation: "Meiotic homologous recombination reshuffles parental gene alleles into novel genomic combinations in haploid gametes, driving population phenotypic diversity."
        },
        {
            id: 57,
            question: "In the microscopic examination of a permanent slide showing binary fission in Amoeba, which event is observed to precede cytoplasmic cleavage (cytokinesis)?",
            options: [
                { key: 'A', text: "Formation of tentacles" },
                { key: 'B', text: "Elongation and mitotic division of the nucleus (Karyokinesis)" },
                { key: 'C', text: "Disintegration of cell membrane" },
                { key: 'D', text: "Photosynthesis" }
            ],
            correct_option: 'B',
            explanation: "During binary fission, nuclear elongation, DNA replication, and karyokinesis occur first, followed by an equatorial furrow in the cytoplasm (cytokinesis)."
        },
        {
            id: 58,
            question: "Why do plants propagated via vegetative techniques (like grafting or tissue culture) produce crops with uniform taste and characteristics?",
            options: [
                { key: 'A', text: "They are pollinated by identical bees" },
                { key: 'B', text: "They arise by mitotic division from a single parent without gametic fusion, making them genetically identical clones sharing the exact parental genotype" },
                { key: 'C', text: "They consume identical fertilizers" },
                { key: 'D', text: "They do not have genes" }
            ],
            correct_option: 'B',
            explanation: "Asexual propagation involves mitosis alone; progeny share the identical DNA sequences and phenotypic traits of the mother cultivar."
        },
        {
            id: 59,
            question: "What is the function of the cotyledon inside a mature dicot seed (such as gram or pea)?",
            options: [
                { key: 'A', text: "To attract insects" },
                { key: 'B', text: "To store reserve food (starch/proteins) to nourish the germinating embryo until its first green leaves can perform photosynthesis" },
                { key: 'C', text: "To anchor the plant into rock" },
                { key: 'D', text: "To produce flowers" }
            ],
            correct_option: 'B',
            explanation: "Cotyledons store substantial carbohydrate and protein reserves mobilised during imbibition to fuel radicle and plumule emergence."
        },
        {
            id: 60,
            question: "What physiological change occurs in the uterus during the final stage of the 9-month gestation period to cause parturition (childbirth)?",
            options: [
                { key: 'A', text: "Uterus dissolves" },
                { key: 'B', text: "Rhythmic, forceful contractions of the smooth muscular wall (myometrium) of the uterus dilate the cervix and expel the foetus through the birth canal" },
                { key: 'C', text: "Fallopian tubes squeeze the ovaries" },
                { key: 'D', text: "Placenta turns into bone" }
            ],
            correct_option: 'B',
            explanation: "Oxytocin-driven myometrial contractions increase in frequency and intensity, dilating the cervix and delivering the neonate through the vagina."
        },

        // =================================================================
        // TIER 3: HARD QUESTIONS (Q61 - Q70)
        // Multi-Step Experimental Deductions, Hormonal Cascades & Pathophysiology
        // =================================================================
        {
            id: 61,
            question: "In an experiment testing seed germination, soaked gram seeds are kept in three different conditions: (1) Dry dish at room temp, (2) Submerged in boiled deoxygenated water covered with oil, (3) On moist cotton with air at room temp. Which setup shows successful germination, and what does this prove?",
            options: [
                { key: 'A', text: "Setup 1; proves seeds need darkness" },
                { key: 'B', text: "Setup 2; proves seeds need water without air" },
                { key: 'C', text: "Setup 3; proves both moisture (for enzyme activation) and oxygen (for aerobic respiration) are simultaneously essential for embryonic germination" },
                { key: 'D', text: "All three setups germinate equally" }
            ],
            correct_option: 'C',
            explanation: "Dry seeds lack water for metabolic hydrolytic enzymes; submerged seeds lack O₂ for ATP production. Setup 3 provides both moisture and oxygen for germination."
        },
        {
            id: 62,
            question: "How does the hormonal feedback between the ovary and the anterior pituitary control the human menstrual cycle?",
            options: [
                { key: 'A', text: "Adrenaline causes bleeding" },
                { key: 'B', text: "Pituitary FSH stimulates ovarian follicle growth and estrogen secretion; estrogen peak triggers LH surge inducing ovulation; corpus luteum secretes progesterone maintaining endometrium; luteolysis drops progesterone triggering menstruation" },
                { key: 'C', text: "Thyroxin produces eggs directly" },
                { key: 'D', text: "Insulin stops the cycle permanently" }
            ],
            correct_option: 'B',
            explanation: "The hypothalamic-pituitary-ovarian axis coordinates cyclic changes: FSH (follicular phase) $\\rightarrow$ Estrogen $\\rightarrow$ LH surge (ovulation at day 14) $\\rightarrow$ Progesterone (luteal phase) $\\rightarrow$ Menstruation upon corpus luteum regression."
        },
        {
            id: 63,
            question: "Why does surgical sterilization (Vasectomy in males or Tubectomy in females) NOT affect sexual desire, libido, or secondary sexual characteristics?",
            options: [
                { key: 'A', text: "Surgery has no effect on anything" },
                { key: 'B', text: "Sex hormones (testosterone, estrogen) are endocrine secretions released directly into vascular capillaries, whereas surgery merely blocks the mechanical transport ducts for gametes" },
                { key: 'C', text: "Nerves are cut to increase hormones" },
                { key: 'D', text: "Gametes produce all sex hormones" }
            ],
            correct_option: 'B',
            explanation: "Leydig cells in testes and follicle cells in ovaries secrete hormones directly into the bloodstream. Ligating the vas deferens or fallopian tubes only blocks luminal gamete transit without compromising endocrine blood circulation."
        },
        {
            id: 64,
            question: "In flowering plants, why does the pollen tube develop two male gamete nuclei, and what is the evolutionary significance of double fertilisation?",
            options: [
                { key: 'A', text: "One sperm fertilizes the sepal and one fertilizes the petal" },
                { key: 'B', text: "One male gamete fuses with the egg cell forming the diploid (2n) zygote (syngamy), while the second male gamete fuses with the two polar nuclei forming the triploid (3n) primary endosperm nucleus (triple fusion) for embryonic nutrition" },
                { key: 'C', text: "Both sperms fuse with the stigma" },
                { key: 'D', text: "Double fertilisation produces twin flowers" }
            ],
            correct_option: 'B',
            explanation: "Double fertilisation is unique to angiosperms: Syngamy (n + n $\\rightarrow$ 2n zygote) forms the embryo; Triple Fusion (n + 2n $\\rightarrow$ 3n endosperm) forms nutritive tissue."
        },
        {
            id: 65,
            question: "In a plant breeding laboratory, what is the role of 'callus differentiation hormones' in plant tissue culture (micropropagation)?",
            options: [
                { key: 'A', text: "They destroy the callus completely" },
                { key: 'B', text: "Specific ratios of Auxins (stimulating root development) and Cytokinins (stimulating shoot proliferation) induce organogenesis from the unorganized callus mass" },
                { key: 'C', text: "They convert plant cells into animal cells" },
                { key: 'D', text: "They produce plastic leaves" }
            ],
            correct_option: 'B',
            explanation: "Skoog and Miller's classical hormonal ratio: high cytokinin-to-auxin ratio promotes shoot organogenesis; high auxin-to-cytokinin ratio induces root rhizogenesis."
        },
        {
            id: 66,
            question: "What is the biological mechanism preventing polyspermy (entry of multiple sperms into a single ovum) during human fertilisation?",
            options: [
                { key: 'A', text: "Only one sperm exists in semen" },
                { key: 'B', text: "As soon as the first sperm penetrates the ovum's zona pellucida, cortical granules release enzymes that induce a permanent electrical and biochemical hardening of the zona membrane, blocking further sperm entry" },
                { key: 'C', text: "The vagina closes immediately" },
                { key: 'D', text: "The second sperm turns into an egg" }
            ],
            correct_option: 'B',
            explanation: "Sperm-egg fusion triggers the cortical reaction and zona reaction: exocytosis of cortical granules alters zona pellucida glycoprotein receptors, establishing a block to polyspermy."
        },
        {
            id: 67,
            question: "Why do single-celled organisms like yeast reproduce by budding rather than by fragmentation?",
            options: [
                { key: 'A', text: "Yeast has no cell wall" },
                { key: 'B', text: "Fragmentation requires a multicellular filamentous body structure (like Spirogyra); a unicellular organism has only one cell, so asymmetric division through budding is its specialized method" },
                { key: 'C', text: "Yeast does not contain a nucleus" },
                { key: 'D', text: "Yeast reproduces by seeds" }
            ],
            correct_option: 'B',
            explanation: "Fragmentation is restricted to multicellular organisms with repeating structural modules. Unicellular yeast achieves vegetative proliferation via budding."
        },
        {
            id: 68,
            question: "What would occur if the testes in a human male fail to descend from the abdominal cavity into the scrotum during foetal development (Cryptorchidism)?",
            options: [
                { key: 'A', text: "Increased sperm production" },
                { key: 'B', text: "Exposure to high core body temperature (37°C) damages seminiferous tubules, causing failure of spermatogenesis and male sterility" },
                { key: 'C', text: "Voice cracks earlier" },
                { key: 'D', text: "Testes turn into ovaries" }
            ],
            correct_option: 'B',
            explanation: "Undescended testes remain at core body temperature (37°C), arresting spermatogonial maturation and causing azoospermia and permanent infertility."
        },
        {
            id: 69,
            question: "How does the barrier method of contraception (condom) differ fundamentally in action and protection from hormonal oral pills?",
            options: [
                { key: 'A', text: "Pills prevent STIs; condoms cause hormonal imbalance" },
                { key: 'B', text: "Condoms provide physical barrier blocking sperm transit and preventing STI pathogen transfer without altering systemic hormones; oral pills manipulate endocrine feedback to prevent ovulation but offer zero STI protection" },
                { key: 'C', text: "Both operate through surgery" },
                { key: 'D', text: "Neither method prevents pregnancy" }
            ],
            correct_option: 'B',
            explanation: "Condoms act mechanically at the organ surface (dual protection: pregnancy + STIs); oral pills act biochemically at the pituitary-ovarian axis (pregnancy prevention only)."
        },
        {
            id: 70,
            question: "Why do cross-pollinated plants often exhibit greater vigor, higher yield, and superior adaptability compared to obligate self-pollinated plants?",
            options: [
                { key: 'A', text: "They consume twice as much sunlight" },
                { key: 'B', text: "Cross-pollination combines distinct alleles from genetically diverse parents, generating heterozygosity and masking deleterious recessive mutations (hybrid vigor / heterosis)" },
                { key: 'C', text: "They do not form seeds" },
                { key: 'D', text: "Self-pollination destroys chlorophyll" }
            ],
            correct_option: 'B',
            explanation: "Cross-pollination promotes genetic outbreeding and heterosis, whereas continuous self-pollination leads to inbreeding depression and homozygosity of harmful recessive alleles."
        },

        // =================================================================
        // TIER 4: TRICKY QUESTIONS (Q71 - Q90)
        // Common Misconceptions, Subtle NCERT Details & Distractors
        // =================================================================
        {
            id: 71,
            question: "Which of the following parts of a flower persists and remains attached in the mature fruit of a tomato, brinjal, or strawberry?",
            options: [
                { key: 'A', text: "Persistent Petals" },
                { key: 'B', text: "Persistent Calyx (Sepals)" },
                { key: 'C', text: "Persistent Anther" },
                { key: 'D', text: "Persistent Stigma" }
            ],
            correct_option: 'B',
            explanation: "In Solanaceae fruits (brinjal, tomato, chili) and strawberry, the green sepals (calyx) remain persistent and crown the base of the ripe fruit."
        },
        {
            id: 72,
            question: "Why is vegetative propagation from leaves possible in Bryophyllum but NOT in mango or peepal trees?",
            options: [
                { key: 'A', text: "Mango leaves have no chloroplasts" },
                { key: 'B', text: "Bryophyllum leaves uniquely possess dormant adventitious epiphyllous foliar buds in their marginal notches capable of initiating root and shoot meristems" },
                { key: 'C', text: "Peepal leaves lack stomata" },
                { key: 'D', text: "Mango leaves are made of wood" }
            ],
            correct_option: 'B',
            explanation: "Bryophyllum leaf margins contain specialized meristematic foliar notches primed with adventitious bud primordia that sprout into plantlets upon detaching."
        },
        {
            id: 73,
            question: "In the human male reproductive system, what would happen if the vas deferens on BOTH sides are surgically ligated and excised (bilateral vasectomy)?",
            options: [
                { key: 'A', text: "Sperm production stops and testosterone drops to zero" },
                { key: 'B', text: "Testes continue producing sperms and testosterone, but ejaculated semen contains no spermatozoa (azoospermic semen), preventing fertilisation" },
                { key: 'C', text: "The patient cannot urinate" },
                { key: 'D', text: "Secondary sexual traits disappear" }
            ],
            correct_option: 'B',
            explanation: "Spermatogenesis and testosterone secretion continue normally; un-ejaculated spermatozoa are phagocytosed in the epididymis. Semen volume from prostate/vesicles is maintained without sperms."
        },
        {
            id: 74,
            question: "Which of the following structures in human female reproductive anatomy serves as BOTH the organ of copulation and the birth canal during parturition?",
            options: [
                { key: 'A', text: "Oviduct" },
                { key: 'B', text: "Vagina" },
                { key: 'C', text: "Ovary" },
                { key: 'D', text: "Uterus" }
            ],
            correct_option: 'B',
            explanation: "The vagina receives the penis and semen during coitus and, together with the dilated cervix, forms the birth canal during parturition."
        },
        {
            id: 75,
            question: "Why is binary fission in Leishmania considered more structurally specialized than binary fission in Amoeba?",
            options: [
                { key: 'A', text: "Amoeba has flagella" },
                { key: 'B', text: "Leishmania has a definite whip-like flagellum and cell polarity, restricting binary fission to a single longitudinal plane, whereas Amoeba splits in any arbitrary plane" },
                { key: 'C', text: "Leishmania produces seeds" },
                { key: 'D', text: "Amoeba reproduces sexually only" }
            ],
            correct_option: 'B',
            explanation: "Organized cell architecture (basal body, kinetoplast, and flagellum) in Leishmania dictates a fixed longitudinal cleavage plane during division."
        },
        {
            id: 76,
            question: "What is the primary function of the sticky surface of the mature stigma in flowering plants?",
            options: [
                { key: 'A', text: "To trap insects to digest them" },
                { key: 'B', text: "To securely adhere incoming pollen grains and provide sugary stigmatic fluid that hydrates and stimulates pollen germination" },
                { key: 'C', text: "To produce fragrance" },
                { key: 'D', text: "To prevent sunlight from entering" }
            ],
            correct_option: 'B',
            explanation: "The sticky stigmatic exudate physically anchors pollen grains and provides moisture, calcium, and sugars essential for pollen tube emergence."
        },
        {
            id: 77,
            question: "During human reproduction, what triggers the rhythmic, progressive muscular contractions of the uterus during labour?",
            options: [
                { key: 'A', text: "Release of insulin from pancreas" },
                { key: 'B', text: "Release of the hormone Oxytocin from the maternal posterior pituitary stimulated by foetal ejection reflex" },
                { key: 'C', text: "Drop in blood pressure to zero" },
                { key: 'D', text: "Sudden secretion of saliva" }
            ],
            correct_option: 'B',
            explanation: "The mature fetus and placenta initiate the foetal ejection reflex, triggering posterior pituitary oxytocin release, which stimulates powerful myometrial contractions via positive feedback."
        },
        {
            id: 78,
            question: "Which of the following statements about Planaria regeneration is CORRECT?",
            options: [
                { key: 'A', text: "Planaria regenerates using dead cells" },
                { key: 'B', text: "Regeneration is mediated by specialized stem-like cells (neoblasts) that proliferate into a blastema and differentiate into missing tissues in an organized sequence" },
                { key: 'C', text: "Regeneration is identical to sexual reproduction" },
                { key: 'D', text: "Planaria must be cut to stay alive" }
            ],
            correct_option: 'B',
            explanation: "Planarian pluripotent neoblasts migrate to wound sites, form a regenerative blastema, and differentiate into all lost organ systems with correct morphological polarity."
        },
        {
            id: 79,
            question: "Why do oral contraceptive pills sometimes cause nausea, weight changes, or irregular spotting in some women?",
            options: [
                { key: 'A', text: "Pills contain toxic metals" },
                { key: 'B', text: "Synthetic estrogen and progestin alter the body's natural endocrine hormonal balance, which can produce systemic side-effects in hormone-sensitive tissues" },
                { key: 'C', text: "Pills destroy red blood cells" },
                { key: 'D', text: "Pills stop digestion" }
            ],
            correct_option: 'B',
            explanation: "Exogenous steroid hormones affect systemic target tissues, occasionally altering fluid retention, lipid metabolism, and endometrial stability."
        },
        {
            id: 80,
            question: "In the flower of a papaya plant, why do some individual trees NEVER produce any fruit even after blooming profusely?",
            options: [
                { key: 'A', text: "They lack roots" },
                { key: 'B', text: "Papaya is dioecious; male trees produce only staminate (male) flowers with stamens and no ovaries, so they cannot form fruits" },
                { key: 'C', text: "They grow in cold climate" },
                { key: 'D', text: "Pollen grains destroy the tree" }
            ],
            correct_option: 'B',
            explanation: "Papaya trees are dioecious (unisexual). Staminate male trees produce pollen but lack pistils and ovaries, making fruit formation impossible on male trees."
        },
        {
            id: 81,
            question: "What is the fate of the corpus luteum in the ovary if the released ovum IS successfully fertilised and implants in the uterus?",
            options: [
                { key: 'A', text: "It degenerates immediately into a scar" },
                { key: 'B', text: "It is maintained by hCG hormone secreted by the trophoblast and continues secreting high levels of progesterone to support the pregnancy" },
                { key: 'C', text: "It turns into an egg" },
                { key: 'D', text: "It travels into the Fallopian tube" }
            ],
            correct_option: 'B',
            explanation: "Human chorionic gonadotropin (hCG) from the early placenta rescues the corpus luteum, sustaining progesterone secretion to prevent endometrial shedding."
        },
        {
            id: 82,
            question: "Which of the following contraceptive methods is considered NON-REVERSIBLE (permanent)?",
            options: [
                { key: 'A', text: "Condom" },
                { key: 'B', text: "Surgical Vasectomy / Tubectomy" },
                { key: 'C', text: "Oral contraceptive pill" },
                { key: 'D', text: "Copper-T" }
            ],
            correct_option: 'B',
            explanation: "Surgical ligation (vasectomy/tubectomy) permanently severs gamete conduits; surgical reversal is technically complex with low fertility success."
        },
        {
            id: 83,
            question: "Why is water NOT required for pollination in the majority of flowering angiosperm land plants unlike lower bryophytes and pteridophytes?",
            options: [
                { key: 'A', text: "Flowering plants produce motile swimming sperms" },
                { key: 'B', text: "Angiosperms produce non-motile pollen grains transferred by wind, insects, or animals, and non-motile male gametes are carried inside a pollen tube directly to the ovule (Siphonogamy)" },
                { key: 'C', text: "Flowers are waterproof" },
                { key: 'D', text: "Pollen grains dissolve in water" }
            ],
            correct_option: 'B',
            explanation: "Angiosperms evolved siphonogamous pollen tube siphonage, freeing fertilization from reliance on external ambient water films."
        },
        {
            id: 84,
            question: "What happens if a piece of Rhizopus mycelium containing ONLY hyphae (and no sporangia) is transferred to fresh moist bread?",
            options: [
                { key: 'A', text: "It dies instantly" },
                { key: 'B', text: "The vegetative hyphae continue to absorb nutrients, grow, branch, and eventually produce new erect sporangiophores with sporangia" },
                { key: 'C', text: "It turns into bacteria" },
                { key: 'D', text: "It produces flowers" }
            ],
            correct_option: 'B',
            explanation: "Vegetative hyphae are living multinucleate mycelia that expand through nutrient absorption and produce new reproductive sporangiophores."
        },
        {
            id: 85,
            question: "Which structure in a seed provides physical mechanical protection to the delicate embryo inside during environmental dormancy?",
            options: [
                { key: 'A', text: "Plumule" },
                { key: 'B', text: "Seed coat (Testa)" },
                { key: 'C', text: "Radicle" },
                { key: 'D', text: "Cotyledon" }
            ],
            correct_option: 'B',
            explanation: "The hardened outer seed coat (testa derived from ovular integuments) protects the dormant embryo from mechanical trauma, desiccation, and pathogens."
        },
        {
            id: 86,
            question: "Why do teenage adolescents frequently experience acne, oily skin, and pimples on their face during puberty?",
            options: [
                { key: 'A', text: "Due to lack of red blood cells" },
                { key: 'B', text: "Surging pubertal androgenic hormones stimulate sebaceous (oil) glands in the facial skin to hypersecrete sebum, clogging pores with bacteria" },
                { key: 'C', text: "Due to excess saliva" },
                { key: 'D', text: "Due to drinking milk" }
            ],
            correct_option: 'B',
            explanation: "Pubertal androgens enlarge and stimulate sebaceous glands; hyperkeratinization and sebum accumulation support Cutibacterium acnes proliferation, causing acne."
        },
        {
            id: 87,
            question: "In which of the following animals does multiple fission occur as a natural asexual survival strategy inside a cyst under adverse conditions?",
            options: [
                { key: 'A', text: "Hydra" },
                { key: 'B', text: "Amoeba (during encystment) and Plasmodium" },
                { key: 'C', text: "Planaria" },
                { key: 'D', text: "Frog" }
            ],
            correct_option: 'B',
            explanation: "Under harsh conditions, Amoeba secretes a 3-layered cyst and divides by multiple fission (sporulation), releasing numerous pseudopodiospores upon cyst rupture."
        },
        {
            id: 88,
            question: "What is the primary biological reason that human sperms must be produced in millions per ejaculate even though only ONE sperm fertilises the egg?",
            options: [
                { key: 'A', text: "All sperms fertilize together" },
                { key: 'B', text: "Millions of sperms are lost, neutralized by acidic vaginal pH, or trapped in cervical mucus during the long transit up the female tract, ensuring enough reach the ampulla to digest the ovum's outer layer" },
                { key: 'C', text: "Sperms convert into blood" },
                { key: 'D', text: "Sperms produce breast milk" }
            ],
            correct_option: 'B',
            explanation: "High sperm counts compensate for vaginal acid mortality, phagocytosis, and long female tract transit; multiple acrosomes are needed to disperse corona radiata cells."
        },
        {
            id: 89,
            question: "Which of the following organisms reproduces asexually by budding, yet belongs to the animal kingdom (Kingdom Animalia)?",
            options: [
                { key: 'A', text: "Yeast (Kingdom Fungi)" },
                { key: 'B', text: "Hydra (Kingdom Animalia, Phylum Cnidaria)" },
                { key: 'C', text: "Amoeba (Kingdom Protista)" },
                { key: 'D', text: "Spirogyra (Kingdom Plantae)" }
            ],
            correct_option: 'B',
            explanation: "Hydra is a multicellular diploblastic invertebrate animal (Phylum Cnidaria) that reproduces asexually via budding; Yeast is a unicellular fungus."
        },
        {
            id: 90,
            question: "Why is self-pollination considered disadvantageous for the long-term evolutionary survival of a flowering plant species?",
            options: [
                { key: 'A', text: "It prevents flower opening" },
                { key: 'B', text: "It leads to inbreeding depression, homozygosity of deleterious recessive alleles, and diminished genetic variation to resist new diseases or climate shifts" },
                { key: 'C', text: "It destroys the ovules" },
                { key: 'D', text: "It produces poisonous fruits" }
            ],
            correct_option: 'B',
            explanation: "Repeated self-pollination limits genetic recombination, accumulating deleterious homozygous recessives (inbreeding depression) and reducing adaptive resilience."
        },

        // =================================================================
        // TIER 5: VERY VERY HARD QUESTIONS (Q91 - Q100)
        // Advanced Multi-Concept Synthesis, Genetics, Embryology & Calculations
        // =================================================================
        {
            id: 91,
            question: "A diploid flowering plant has 2n = 24 chromosomes in its somatic vegetative leaf cells. How many chromosomes are present in its: (1) Pollen grain vegetative cell, (2) Zygote, (3) Primary endosperm nucleus (PEN), and (4) Seed coat cell?",
            options: [
                { key: 'A', text: "(1) 24, (2) 24, (3) 24, (4) 24" },
                { key: 'B', text: "(1) 12 (n), (2) 24 (2n), (3) 36 (3n), (4) 24 (2n)" },
                { key: 'C', text: "(1) 12, (2) 12, (3) 24, (4) 12" },
                { key: 'D', text: "(1) 6, (2) 12, (3) 18, (4) 24" }
            ],
            correct_option: 'B',
            explanation: "Given 2n = 24 (n = 12): Pollen cell is haploid (n = 12); Zygote is diploid (2n = 24); Primary endosperm nucleus formed by triple fusion is triploid (3n = 36); Seed coat derived from maternal integument is diploid (2n = 24)."
        },
        {
            id: 92,
            question: "In human spermatogenesis, how many functional haploid spermatozoa are produced from 100 primary spermatocytes, and how many functional mature ova are produced from 100 primary oocytes in human oogenesis?",
            options: [
                { key: 'A', text: "100 sperms and 100 ova" },
                { key: 'B', text: "400 sperms (each primary spermatocyte yields 4 functional spermatozoa) and 100 ova (each primary oocyte yields 1 functional ovum + 3 non-functional polar bodies)" },
                { key: 'C', text: "200 sperms and 200 ova" },
                { key: 'D', text: "400 sperms and 400 ova" }
            ],
            correct_option: 'B',
            explanation: "Male meiosis is symmetric: 1 primary spermatocyte $\\rightarrow$ 4 viable sperms (100 $\\rightarrow$ 400). Female meiosis is asymmetric: 1 primary oocyte $\\rightarrow$ 1 ovum + polar bodies (100 $\\rightarrow$ 100)."
        },
        {
            id: 93,
            question: "If a homozygous tall plant with round seeds (TTRR) is asexually propagated through stem cuttings for 10 successive generations, what will be the genotype and phenotype of the 10th generation plants?",
            options: [
                { key: 'A', text: "Tt Rr (heterozygous)" },
                { key: 'B', text: "TTRR (100% tall with round seeds, identical to original parent due to absence of meiotic recombination during asexual cloning)" },
                { key: 'C', text: "ttrr (dwarf with wrinkled seeds)" },
                { key: 'D', text: "50% Tall and 50% Dwarf" }
            ],
            correct_option: 'B',
            explanation: "Vegetative reproduction relies strictly on mitotic duplication. Barring rare spontaneous somatic mutations, the exact TTRR genotype is preserved indefinitely."
        },
        {
            id: 94,
            question: "Consider the maternal-foetal exchange across the human placenta. Which of the following substances pass from maternal blood to foetal blood, and which pass from foetal blood to maternal blood?",
            options: [
                { key: 'A', text: "Urea passes to foetus; Oxygen passes to mother" },
                { key: 'B', text: "Glucose, amino acids, oxygen, and maternal IgG antibodies pass to foetus; Urea, uric acid, and carbon dioxide pass from foetus to maternal blood for excretion" },
                { key: 'C', text: "Red blood cells pass freely in both directions" },
                { key: 'D', text: "Digestive bile passes to foetus" }
            ],
            correct_option: 'B',
            explanation: "The placenta allows nutrient and respiratory influx (glucose, O₂, amino acids, passive IgG) and metabolic waste efflux (CO₂, urea, creatinine) without RBC mixing."
        },
        {
            id: 95,
            question: "In an in-vitro experiment on Planaria, a specimen is cut transversely into three segments (head, middle trunk, tail). What morphological regeneration will occur in the middle trunk segment?",
            options: [
                { key: 'A', text: "It forms two heads and dies" },
                { key: 'B', text: "Neoblasts at the anterior wound blastema regenerate a new head (with eyespots and brain) while neoblasts at the posterior blastema regenerate a new tail, strictly preserving antero-posterior body polarity" },
                { key: 'C', text: "It dissolves into water" },
                { key: 'D', text: "It grows into a Hydra" }
            ],
            correct_option: 'B',
            explanation: "Planarian morphallaxis is governed by Wnt/$\\beta$-catenin and positional gradient signaling, maintaining precise antero-posterior polarity to regenerate a head anteriorly and a tail posteriorly."
        },
        {
            id: 96,
            question: "Why does the surgical removal of both ovaries (bilateral oophorectomy) in a premenopausal woman cause immediate cessation of menstruation (surgical menopause) and permanent infertility?",
            options: [
                { key: 'A', text: "Fallopian tubes produce too much acid" },
                { key: 'B', text: "Ovaries are the sole source of both cyclic mature ova and ovarian steroid hormones (estrogen and progesterone); their absence permanently abolishes both ovulation and endometrial cyclic priming" },
                { key: 'C', text: "Blood stops flowing to the brain" },
                { key: 'D', text: "Kidneys stop functioning" }
            ],
            correct_option: 'B',
            explanation: "Oophorectomy eliminates oocyte follicles and the primary source of cyclic estrogen/progesterone, halting endometrial growth and inducing surgical menopause."
        },
        {
            id: 97,
            question: "How does the chemical action of a copper-releasing IUD (such as Copper-T) prevent pregnancy at the cellular and immunological level?",
            options: [
                { key: 'A', text: "It freezes the ovaries" },
                { key: 'B', text: "Released Cu²⁺ ions exert a toxic spermicidal effect suppressing sperm motility and fertilising capacity, while inducing a sterile local endometrial inflammatory response that prevents blastocyst implantation" },
                { key: 'C', text: "It destroys the pituitary gland" },
                { key: 'D', text: "It turns all eggs into water" }
            ],
            correct_option: 'B',
            explanation: "Cu²⁺ ions impair sperm energy metabolism and flagellar axonemal motility, while the physical IUD induces leukocyte infiltration in the endometrium, preventing blastocyst implantation."
        },
        {
            id: 98,
            question: "In an artificial pollination experiment on bisexual pea flowers (Pisum sativum), what two essential steps must a plant breeder perform to ensure controlled cross-fertilisation?",
            options: [
                { key: 'A', text: "Watering the leaves and heating the stem" },
                { key: 'B', text: "Emasculation (removal of anthers from the female parent flower before dehiscence) followed by Bagging (covering the emasculated flower with a butter paper bag to prevent contamination by unwanted foreign pollen)" },
                { key: 'C', text: "Cutting off all roots and petals" },
                { key: 'D', text: "Freezing the flower in liquid nitrogen" }
            ],
            correct_option: 'B',
            explanation: "Emasculation eliminates self-pollination; bagging prevents accidental open pollination by airborne or insect-carried stray pollen grains."
        },
        {
            id: 99,
            question: "During human fertilization, what is the precise biochemical mechanism of the 'acrosome reaction' enabling sperm entry into the oocyte?",
            options: [
                { key: 'A', text: "Sperm explodes using electrical current" },
                { key: 'B', text: "Binding of sperm head to ZP3 glycoproteins on the zona pellucida triggers exocytosis of acrosomal hydrolytic enzymes (hyaluronidase and acrosin) that digest a path through the corona radiata and zona pellucida" },
                { key: 'C', text: "Sperm dissolves the entire uterus" },
                { key: 'D', text: "Egg engulfs sperm by phagocytosis like Amoeba" }
            ],
            correct_option: 'B',
            explanation: "ZP3 binding induces $\\text{Ca}^{2+}$-dependent acrosomal exocytosis; hyaluronidase disperses follicle cells, and acrosin hydrolyses the zona pellucida to allow sperm-oolemma membrane fusion."
        },
        {
            id: 100,
            question: "Why does the sexual mode of reproduction accelerate evolutionary adaptation to changing environments compared to asexual reproduction?",
            options: [
                { key: 'A', text: "Sexual reproduction requires less energy" },
                { key: 'B', text: "Sexual reproduction combines accumulated independent beneficial mutations from two distinct parental genomes via meiotic recombination and random syngamy, generating novel polygenic combinations and purging deleterious mutations" },
                { key: 'C', text: "Asexual reproduction creates new genes every second" },
                { key: 'D', text: "Sexual organisms do not have DNA copying errors" }
            ],
            correct_option: 'B',
            explanation: "Sexual reproduction accelerates evolutionary adaptation through independent assortment, crossing over, and syngamy, bringing together favorable alleles while breaking Muller's ratchet (purging deleterious mutations)."
        }
    ]
};
