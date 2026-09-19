/* =============================================================================
   ELITE CLASSES — CIVIL SERVICES: BIOLOGY REVISION COURSE
   CHAPTER 1: CELL BIOLOGY, CYTOLOGY, CELL ORGANELLES, CELL DIVISION & CHROMOSOMES
   - Exactly 20 Progressive Mini-Modules
   - 10 High-Yield Conceptual MCQs per Module (200 MCQs total)
   - 70% Mastery Progressive Unlocking Threshold
   - Complete Pedagogical Standard Notes & Biological Systems Analyses
   ============================================================================= */

const COURSE_CHAPTER_1_BIOLOGY = {
    "chapterId": "cs_bio_ch1",
    "chapterNumber": 1,
    "chapterTitle": "Cell Biology, Cytology, Cell Organelles, Cell Division & Chromosomes",
    "subject": "Biology",
    "class": "Civil Services",
    "course": "Revision Course",
    "passPercentage": 70,
    "modules": [
        {
            "id": "m01",
            "title": "Discovery of Cell & Historical Development of Cytology",
            "summary": "Historical milestones in microscopy and cellular discovery from Robert Hooke to Antonie van Leeuwenhoek and Robert Brown.",
            "theoryHtml": "\n<p>Cytology (the study of cells) began in the seventeenth century with the advent of the compound optical microscope. In 1665, British natural philosopher <strong>Robert Hooke</strong> examined thin slices of bottle cork under a primitive microscope and observed hollow, honeycomb-like compartments, which he coined <em>cellulae</em> (little rooms) in his seminal work <em>Micrographia</em>. Hooke had observed the dead, empty cellulose cell walls of plant tissue.</p>\n<p>The first observation of living, motile microscopic cells was made in 1674 by the Dutch microscopist <strong>Antonie van Leeuwenhoek</strong>. Using high-precision single biconvex lenses, he observed bacteria, free-living freshwater protozoa (which he termed <em>animalcules</em>), human spermatozoa, and red blood cells. In 1831, Scottish botanist <strong>Robert Brown</strong> discovered and named the <strong>nucleus</strong> within the epidermal cells of orchids, recognizing it as a regular and vital component of living cells.</p>\n<p>In 1839, Czech physiologist <strong>Jan Evangelista Purkinje</strong> coined the term <strong>protoplasm</strong> for the living, jelly-like fluid substance contained inside the cell membrane, differentiating the active living matter from non-living inclusions.</p>\n",
            "pointsToRemember": [
                "Robert Hooke coined the term 'cell' in 1665 after observing dead cork cell walls in his work Micrographia.",
                "Antonie van Leeuwenhoek first observed live, motile cells (bacteria, protozoa, sperm) in 1674.",
                "Robert Brown discovered the nucleus in 1831, and J.E. Purkinje coined the term 'protoplasm' in 1839."
            ],
            "keyNotes": [
                "Cytology: Branch of biology dealing with the structure, function, and life history of cells. Protoplasm is the physical basis of life."
            ],
            "questions": [
                {
                    "id": "ch1_m01_q01",
                    "question": "Who first discovered and coined the term 'cell' in 1665 after observing thin slices of cork?",
                    "options": [
                        "Antonie van Leeuwenhoek",
                        "Robert Hooke",
                        "Robert Brown",
                        "Theodor Schwann"
                    ],
                    "answer": "Robert Hooke",
                    "explanation": "Robert Hooke observed dead cork cell walls under a primitive compound microscope in 1665 and coined the term 'cell' in his publication Micrographia."
                },
                {
                    "id": "ch1_m01_q02",
                    "question": "Which scientist was the first to observe and describe live, free-living microscopic cells such as bacteria and protozoa?",
                    "options": [
                        "Robert Hooke",
                        "Antonie van Leeuwenhoek",
                        "Jan Evangelista Purkinje",
                        "Rudolf Virchow"
                    ],
                    "answer": "Antonie van Leeuwenhoek",
                    "explanation": "Antonie van Leeuwenhoek improved lens-grinding techniques and in 1674 first observed live microorganisms, which he called animalcules, including bacteria and protozoa."
                },
                {
                    "id": "ch1_m01_q03",
                    "question": "The cellular nucleus was discovered and identified as an essential organelle in 1831 by which scientist?",
                    "options": [
                        "Robert Brown",
                        "Robert Hooke",
                        "Camillo Golgi",
                        "Jan Evangelista Purkinje"
                    ],
                    "answer": "Robert Brown",
                    "explanation": "Scottish botanist Robert Brown discovered and named the cell nucleus in 1831 while studying orchid floral tissues."
                },
                {
                    "id": "ch1_m01_q04",
                    "question": "The term 'protoplasm' to describe the physical, living substance of a cell was coined in 1839 by:",
                    "options": [
                        "Hugo von Mohl",
                        "Jan Evangelista Purkinje",
                        "Matthias Schleiden",
                        "Felix Dujardin"
                    ],
                    "answer": "Jan Evangelista Purkinje",
                    "explanation": "J.E. Purkinje coined the term protoplasm in 1839 for the living colloidal ground substance contained inside the cell."
                },
                {
                    "id": "ch1_m01_q05",
                    "question": "What structure did Robert Hooke actually observe when he examined cork under his microscope?",
                    "options": [
                        "Living cytoplasm",
                        "Dead cell walls",
                        "Active nuclei",
                        "Chloroplasts"
                    ],
                    "answer": "Dead cell walls",
                    "explanation": "Cork is dead bark tissue; Hooke observed only the empty, non-living cellulose cell walls outlining former plant cells."
                },
                {
                    "id": "ch1_m01_q06",
                    "question": "Which microscopist was the first to observe human erythrocytes (red blood cells) and spermatozoa?",
                    "options": [
                        "Robert Hooke",
                        "Antonie van Leeuwenhoek",
                        "Marcello Malpighi",
                        "Robert Brown"
                    ],
                    "answer": "Antonie van Leeuwenhoek",
                    "explanation": "Antonie van Leeuwenhoek made pioneering microscopic observations of human red blood cells, spermatozoa, and capillary circulation."
                },
                {
                    "id": "ch1_m01_q07",
                    "question": "The classic book 'Micrographia', published in 1665 containing famous drawings of flea and cork cells, was authored by:",
                    "options": [
                        "Isaac Newton",
                        "Robert Hooke",
                        "Antonie van Leeuwenhoek",
                        "Francis Bacon"
                    ],
                    "answer": "Robert Hooke",
                    "explanation": "Robert Hooke authored Micrographia in 1665, presenting his microscopic observations and introducing the concept of cells."
                },
                {
                    "id": "ch1_m01_q08",
                    "question": "Felix Dujardin described the living contents of protozoan cells under the name:",
                    "options": [
                        "Sarcode",
                        "Cytosol",
                        "Endoplasm",
                        "Hyaloplasm"
                    ],
                    "answer": "Sarcode",
                    "explanation": "In 1835, French biologist Felix Dujardin discovered the living jelly-like content of protozoa and named it 'sarcode', later designated protoplasm by Purkinje."
                },
                {
                    "id": "ch1_m01_q09",
                    "question": "Who famously declared that 'Protoplasm is the physical basis of life' in 1868?",
                    "options": [
                        "Thomas Henry Huxley",
                        "Charles Darwin",
                        "Robert Brown",
                        "Rudolf Virchow"
                    ],
                    "answer": "Thomas Henry Huxley",
                    "explanation": "T.H. Huxley delivered his renowned lecture in 1868 emphasizing that protoplasm is the universal physical basis of all living organisms."
                },
                {
                    "id": "ch1_m01_q10",
                    "question": "Which of the following cellular structures is the longest cell in the human body?",
                    "options": [
                        "Skeletal muscle fiber",
                        "Neuron (nerve cell)",
                        "Macrophage",
                        "Osteocyte"
                    ],
                    "answer": "Neuron (nerve cell)",
                    "explanation": "The human motor neuron (especially the sciatic nerve projecting from spinal cord to foot) can exceed 1 meter in length, making it the longest cell in the body."
                }
            ]
        },
        {
            "id": "m02",
            "title": "Cell Theory Formulation, Modifications & Modern Tenets",
            "summary": "The synthesis of classical cell theory by Schleiden and Schwann, Virchow's biogenic modification, and modern cell tenets.",
            "theoryHtml": "\n<p>The classical <strong>Cell Theory</strong> was formulated jointly by German botanist <strong>Matthias Schleiden</strong> (1838) and German zoologist <strong>Theodor Schwann</strong> (1839). Schleiden examined a wide variety of plant tissues and concluded that all plants are composed of distinct individual cells. A year later, Schwann independently examined diverse animal tissues, noticed that animal cells lacked a cell wall but possessed a thin outer plasma membrane, and synthesized their findings into two foundational propositions:\n<ol>\n<li>All living organisms are composed of one or more cells and cell products.</li>\n<li>The cell is the basic structural and functional unit of all living things.</li>\n</ol>\n</p>\n<p>However, the original classical theory failed to explain how new cells were generated. In 1855, German pathologist <strong>Rudolf Virchow</strong> provided the critical missing link with his famous Latin aphorism: <em>\"Omnis cellula e cellula\"</em> (all living cells arise only from pre-existing cells through cell division). This established the biogenic continuity of life.</p>\n<p>Modern cell theory recognizes that hereditary genetic material (DNA) is passed from parent to daughter cells during division, that all cells share fundamentally similar biochemical compositions, and that all energy transformations (metabolism and biochemistry) occur within cells. <strong>Viruses</strong> remain a universal exception to cell theory because they lack cellular organization and metabolic machinery.</p>\n",
            "pointsToRemember": [
                "Matthias Schleiden (1838) and Theodor Schwann (1839) proposed the classical Cell Theory.",
                "Rudolf Virchow (1855) added the doctrine 'Omnis cellula e cellula' (all cells arise from pre-existing cells).",
                "Viruses are non-cellular (acellular) nucleoprotein complexes and form a notable exception to the cell theory."
            ],
            "keyNotes": [
                "Cell Theory Postulates: All life is cellular; cell is functional unit; all cells arise from pre-existing cells via division."
            ],
            "questions": [
                {
                    "id": "ch1_m02_q01",
                    "question": "Which two scientists are credited with formulating the classical Cell Theory in 1838–1839?",
                    "options": [
                        "Robert Hooke and Robert Brown",
                        "Matthias Schleiden and Theodor Schwann",
                        "Watson and Crick",
                        "Louis Pasteur and Robert Koch"
                    ],
                    "answer": "Matthias Schleiden and Theodor Schwann",
                    "explanation": "Matthias Schleiden (botanist, 1838) and Theodor Schwann (zoologist, 1839) jointly synthesized the classical cell theory."
                },
                {
                    "id": "ch1_m02_q02",
                    "question": "Who modified the cell theory in 1855 by establishing the principle 'Omnis cellula e cellula'?",
                    "options": [
                        "Rudolf Virchow",
                        "Louis Pasteur",
                        "August Weismann",
                        "Gregor Mendel"
                    ],
                    "answer": "Rudolf Virchow",
                    "explanation": "Rudolf Virchow stated that all cells arise from pre-existing cells ('Omnis cellula e cellula') via division."
                },
                {
                    "id": "ch1_m02_q03",
                    "question": "What does the Latin phrase 'Omnis cellula e cellula' mean?",
                    "options": [
                        "Every cell has a nucleus",
                        "All cells arise from pre-existing cells",
                        "Cells are immortal",
                        "All cells require oxygen"
                    ],
                    "answer": "All cells arise from pre-existing cells",
                    "explanation": "'Omnis cellula e cellula' formulated by Virchow means that new cells are produced exclusively from the division of existing parent cells."
                },
                {
                    "id": "ch1_m02_q04",
                    "question": "Which of the following biological entities is considered an exception to the classical Cell Theory?",
                    "options": [
                        "Bacteria",
                        "Yeast",
                        "Viruses",
                        "Amoeba"
                    ],
                    "answer": "Viruses",
                    "explanation": "Viruses lack cellular organization, cytoplasm, and independent metabolic machinery, functioning as obligate intracellular parasites, making them an exception to cell theory."
                },
                {
                    "id": "ch1_m02_q05",
                    "question": "Theodor Schwann noted that unlike plant cells, animal cells uniquely lack:",
                    "options": [
                        "Cell membrane",
                        "Mitochondria",
                        "Cell wall",
                        "Nucleus"
                    ],
                    "answer": "Cell wall",
                    "explanation": "Schwann recognized that the presence of a rigid cellulose cell wall is a unique feature of plant cells, absent in animal cells."
                },
                {
                    "id": "ch1_m02_q06",
                    "question": "Which principle is NOT part of modern cell theory?",
                    "options": [
                        "All living organisms are made of cells",
                        "The cell is the basic structural and functional unit",
                        "Cells can arise spontaneously from non-living organic broth",
                        "Hereditary material (DNA) is transmitted during cell division"
                    ],
                    "answer": "Cells can arise spontaneously from non-living organic broth",
                    "explanation": "Spontaneous generation (abiogenesis) was disproved by Pasteur and Virchow; modern cell theory holds that cells arise only from pre-existing cells."
                },
                {
                    "id": "ch1_m02_q07",
                    "question": "Matthias Schleiden conducted his extensive cytological research on which kingdom?",
                    "options": [
                        "Kingdom Plantae",
                        "Kingdom Animalia",
                        "Kingdom Fungi",
                        "Kingdom Protista"
                    ],
                    "answer": "Kingdom Plantae",
                    "explanation": "Matthias Schleiden was a German botanist who studied a vast diversity of plant tissues to conclude all plants consist of cells."
                },
                {
                    "id": "ch1_m02_q08",
                    "question": "The cell theory received experimental confirmation that microorganisms do not arise spontaneously from the swan-neck flask experiments of:",
                    "options": [
                        "Louis Pasteur",
                        "Robert Koch",
                        "Edward Jenner",
                        "Alexander Fleming"
                    ],
                    "answer": "Louis Pasteur",
                    "explanation": "Louis Pasteur's 1862 swan-neck flask experiments conclusively disproved spontaneous generation and validated Virchow's biogenic tenet."
                },
                {
                    "id": "ch1_m02_q09",
                    "question": "Which of the following organisms exhibits a multinucleate, coenocytic/syncytial body plan that challenges simple cellular partitioning?",
                    "options": [
                        "Rhizopus (bread mould)",
                        "Escherichia coli",
                        "Chlamydomonas",
                        "Human erythrocyte"
                    ],
                    "answer": "Rhizopus (bread mould)",
                    "explanation": "Coenocytic fungi like Rhizopus possess continuous multinucleate hyphae without regular cross-walls (septa), representing a specialized syncytial condition."
                },
                {
                    "id": "ch1_m02_q10",
                    "question": "The largest single isolated cell known in the biological world is:",
                    "options": [
                        "Acetabularia alga",
                        "Egg of an Ostrich",
                        "Human ovum",
                        "PPLO (Mycoplasma)"
                    ],
                    "answer": "Egg of an Ostrich",
                    "explanation": "The unfertilized egg of an ostrich (measuring roughly 15 cm to 18 cm across) represents the largest known single isolated living cell."
                }
            ]
        },
        {
            "id": "m03",
            "title": "Acellular vs Cellular Life & Viral Architecture",
            "summary": "Distinction between acellular entities (viruses, viroids, prions) and cellular organisms, viral structure, and obligate parasitism.",
            "theoryHtml": "\n<p>Living organisms and infectious biological agents are classified into two broad structural categories based on whether they possess a membrane-enclosed cytoplasm: <strong>Cellular organisms</strong> and <strong>Acellular entities</strong>.</p>\n<p><strong>Cellular organisms</strong> (bacteria, archaea, protists, fungi, plants, animals) possess an organized cytoplasm, metabolic enzymes, lipid bilayer membranes, and the capacity for autonomous homeostatic regulation. In contrast, <strong>Acellular agents</strong>—most notably <strong>viruses</strong>—lack a cellular architecture, cytoplasm, ribosomes, and ATP-generating enzymes. A complete infectious viral particle, termed a <strong>virion</strong>, consists solely of:\n<ul>\n<li>A nucleic acid core containing <em>either</em> DNA <em>or</em> RNA (never both simultaneously in the same virion).</li>\n<li>A protective surrounding protein coat called the <strong>capsid</strong>, made of repeating protein subunits called <strong>capsomeres</strong>.</li>\n<li>In some viruses (e.g., Influenza, HIV, SARS-CoV-2), an outer lipid <strong>envelope</strong> derived from host membranes studded with viral glycoproteins.</li>\n</ul>\n</p>\n<p>Because viruses cannot generate energy or synthesize proteins independently, they are <strong>obligate intracellular parasites</strong>. Outside a host cell, they are completely inert, crystallized chemical packages (as demonstrated by W.M. Stanley in 1935 with Tobacco Mosaic Virus). Other subviral acellular agents include <strong>viroids</strong> (infectious naked single-stranded RNA molecules lacking a protein coat, discovered by T.O. Diener) and <strong>prions</strong> (infectious misfolded proteins lacking nucleic acids, causing Creutzfeldt-Jakob disease and scrapie).</p>\n",
            "pointsToRemember": [
                "Acellular entities (viruses, viroids, prions) lack cytoplasm, organelles, and autonomous metabolism.",
                "Viruses contain either DNA or RNA as genetic material, never both in the same virion.",
                "Viroids consist solely of infectious naked circular RNA, while prions consist purely of infectious misfolded protein."
            ],
            "keyNotes": [
                "Virion = Nucleic acid core + Protein capsid (± lipid envelope). Obligate intracellular parasites."
            ],
            "questions": [
                {
                    "id": "ch1_m03_q01",
                    "question": "Which of the following is an acellular infectious biological agent lacking cellular organization?",
                    "options": [
                        "Virus",
                        "Bacterium",
                        "Cyanobacterium",
                        "Yeast"
                    ],
                    "answer": "Virus",
                    "explanation": "Viruses are acellular (non-cellular) nucleoprotein complexes that do not have a cellular structure, organelles, or cytoplasm."
                },
                {
                    "id": "ch1_m03_q02",
                    "question": "What is the genetic material of a single viral particle (virion)?",
                    "options": [
                        "Both DNA and RNA simultaneously",
                        "Either DNA or RNA, but never both",
                        "Only double-stranded DNA",
                        "Only single-stranded RNA"
                    ],
                    "answer": "Either DNA or RNA, but never both",
                    "explanation": "A fundamental rule of viral architecture is that a virion contains either DNA or RNA as its hereditary genome, never both together."
                },
                {
                    "id": "ch1_m03_q03",
                    "question": "The protective outer protein coat of a virus is known as the:",
                    "options": [
                        "Capsid",
                        "Pellicle",
                        "Peptidoglycan",
                        "Glycocalyx"
                    ],
                    "answer": "Capsid",
                    "explanation": "The protein shell enclosing the viral genome is the capsid, composed of individual protein subunits called capsomeres."
                },
                {
                    "id": "ch1_m03_q04",
                    "question": "Who first crystallized the Tobacco Mosaic Virus (TMV) in 1935, demonstrating its chemical nature?",
                    "options": [
                        "Dmitri Ivanovsky",
                        "Martinus Beijerinck",
                        "Wendell M. Stanley",
                        "Edward Jenner"
                    ],
                    "answer": "Wendell M. Stanley",
                    "explanation": "American biochemist W.M. Stanley crystallized TMV in 1935 and showed that it consists largely of proteins and RNA, earning the 1946 Nobel Prize in Chemistry."
                },
                {
                    "id": "ch1_m03_q05",
                    "question": "What are viroids, first discovered by T.O. Diener in 1971?",
                    "options": [
                        "Infectious naked RNA molecules without a protein coat",
                        "Infectious misfolded proteins without nucleic acids",
                        "Bacterial viruses that possess a lipid envelope",
                        "Double-stranded DNA plasmids in plant cells"
                    ],
                    "answer": "Infectious naked RNA molecules without a protein coat",
                    "explanation": "Viroids are small, circular, single-stranded infectious RNA molecules that cause plant diseases (e.g., potato spindle tuber disease) and completely lack a protein coat."
                },
                {
                    "id": "ch1_m03_q06",
                    "question": "Prions, which cause Bovine Spongiform Encephalopathy (Mad Cow Disease), are composed exclusively of:",
                    "options": [
                        "Infectious abnormally folded proteins",
                        "Single-stranded DNA",
                        "Double-stranded RNA",
                        "Lipopolysaccharide complexes"
                    ],
                    "answer": "Infectious abnormally folded proteins",
                    "explanation": "Prions are proteinaceous infectious particles devoid of any nucleic acids, transmitting disease through the template-directed misfolding of normal cellular proteins."
                },
                {
                    "id": "ch1_m03_q07",
                    "question": "Why are viruses described as obligate intracellular parasites?",
                    "options": [
                        "They can reproduce in soil without hosts",
                        "They can only replicate and express genes inside living host cells",
                        "They produce their own ATP using chemosynthesis",
                        "They have a functional nucleus and ribosomes"
                    ],
                    "answer": "They can only replicate and express genes inside living host cells",
                    "explanation": "Lacking metabolic enzymes and ribosomes for protein synthesis, viruses can replicate exclusively by hijacking the biochemical machinery of a living host cell."
                },
                {
                    "id": "ch1_m03_q08",
                    "question": "Bacteriophages are viruses that specifically infect:",
                    "options": [
                        "Protozoa",
                        "Fungi",
                        "Bacteria",
                        "Algae"
                    ],
                    "answer": "Bacteria",
                    "explanation": "Bacteriophages (or phages) are specialized viruses that infect, replicate within, and often lyse bacterial cells."
                },
                {
                    "id": "ch1_m03_q09",
                    "question": "Martinus Beijerinck coined which Latin phrase in 1898 to describe the infectious filterable nature of viruses?",
                    "options": [
                        "Contagium vivum fluidum",
                        "Omnis cellula e cellula",
                        "Post hoc ergo propter hoc",
                        "De novo synthesis"
                    ],
                    "answer": "Contagium vivum fluidum",
                    "explanation": "Beijerinck demonstrated that the tobacco mosaic agent could diffuse through agar and termed it 'contagium vivum fluidum' (contagious living fluid)."
                },
                {
                    "id": "ch1_m03_q10",
                    "question": "Retroviruses, such as the Human Immunodeficiency Virus (HIV), carry which specialized enzyme to transcribe their RNA into DNA?",
                    "options": [
                        "RNA Polymerase II",
                        "Reverse Transcriptase",
                        "DNA Ligase",
                        "Topoisomerase"
                    ],
                    "answer": "Reverse Transcriptase",
                    "explanation": "Retroviruses possess the enzyme reverse transcriptase (RNA-directed DNA polymerase), which synthesizes complementary DNA from an RNA viral template."
                }
            ]
        },
        {
            "id": "m04",
            "title": "Prokaryotic vs Eukaryotic Cell Organization",
            "summary": "Fundamental cytological contrasts between prokaryotic cells (bacteria, cyanobacteria) and eukaryotic cells (protists, fungi, plants, animals).",
            "theoryHtml": "\n<p>Biologists categorize all cellular organisms on Earth into two fundamental organizational plans: <strong>Prokaryotes</strong> and <strong>Eukaryotes</strong>.</p>\n<p><strong>Prokaryotic cells</strong> (domains Bacteria and Archaea) represent the evolutionary primitive cellular architecture (typically 0.1 to 5.0 µm in size). Their hallmarks include:\n<ul>\n<li>Absence of a membrane-bound true nucleus; genetic material consists of a single circular double-stranded DNA molecule concentrated in an irregular, membrane-less region termed the <strong>nucleoid</strong>.</li>\n<li>Absence of membrane-bound organelles (no mitochondria, chloroplasts, endoplasmic reticulum, or Golgi apparatus).</li>\n<li>Presence of smaller <strong>70S ribosomes</strong> (composed of 50S and 30S subunits).</li>\n<li>Respiratory enzymes localized on the plasma membrane or its invaginations called <strong>mesosomes</strong>.</li>\n<li>Non-histone proteins; DNA is circular and lacks nucleosomal packaging. Plasmids (small extrachromosomal circular DNA) are frequently present.</li>\n</ul>\n</p>\n<p><strong>Eukaryotic cells</strong> (protists, fungi, plants, animals) are typically much larger (10 to 100 µm) and characterized by:\n<ul>\n<li>A membrane-delimited true <strong>nucleus</strong> enclosed by a double-membraned nuclear envelope with nuclear pores.</li>\n<li>Extensive internal compartmentalization provided by membrane-bound organelles (mitochondria for oxidative phosphorylation, chloroplasts in plants, lysosomes, peroxisomes, ER, Golgi).</li>\n<li>Larger <strong>80S ribosomes</strong> in the cytoplasm (60S and 40S subunits), though their mitochondria and chloroplasts contain prokaryote-like 70S ribosomes.</li>\n<li>Linear chromosomal DNA complexed with basic <strong>histone proteins</strong> into chromatin and nucleosomes.</li>\n</ul>\n</p>\n",
            "pointsToRemember": [
                "Prokaryotes lack a nuclear membrane and membrane-bound organelles; their DNA resides in a nucleoid.",
                "Prokaryotic ribosomes are 70S (50S + 30S), while eukaryotic cytoplasmic ribosomes are 80S (60S + 40S).",
                "Mesosomes in bacteria are plasma membrane infoldings involved in respiration, cell wall synthesis, and DNA replication."
            ],
            "keyNotes": [
                "Prokaryote: No true nucleus, circular DNA, 70S ribosomes. Eukaryote: True nucleus, linear DNA with histones, 80S ribosomes, compartmentalization."
            ],
            "questions": [
                {
                    "id": "ch1_m04_q01",
                    "question": "Which of the following is the defining characteristic of a prokaryotic cell?",
                    "options": [
                        "Absence of a membrane-enclosed nucleus",
                        "Absence of genetic material",
                        "Presence of 80S ribosomes in cytoplasm",
                        "Presence of multiple linear chromosomes"
                    ],
                    "answer": "Absence of a membrane-enclosed nucleus",
                    "explanation": "Prokaryotic cells (bacteria, archaea) lack a membrane-bound nucleus; their circular DNA is organized in an unbound region called the nucleoid."
                },
                {
                    "id": "ch1_m04_q02",
                    "question": "What type of ribosomes are found freely floating in the cytoplasm of prokaryotes?",
                    "options": [
                        "60S ribosomes",
                        "70S ribosomes",
                        "80S ribosomes",
                        "90S ribosomes"
                    ],
                    "answer": "70S ribosomes",
                    "explanation": "Prokaryotic cells have 70S ribosomes consisting of a large 50S subunit and a small 30S subunit."
                },
                {
                    "id": "ch1_m04_q03",
                    "question": "The respiratory and oxidative phosphorylation enzymes in bacteria are localized on the:",
                    "options": [
                        "Mitochondrial cristae",
                        "Plasma membrane (and mesosomes)",
                        "Nuclear envelope",
                        "Endoplasmic reticulum"
                    ],
                    "answer": "Plasma membrane (and mesosomes)",
                    "explanation": "Bacteria lack mitochondria; their electron transport chain and ATP synthase enzymes are embedded in the plasma membrane and mesosomal folds."
                },
                {
                    "id": "ch1_m04_q04",
                    "question": "Which of the following cellular organisms is a prokaryote?",
                    "options": [
                        "Amoeba proteus",
                        "Escherichia coli",
                        "Saccharomyces cerevisiae (Yeast)",
                        "Spirogyra"
                    ],
                    "answer": "Escherichia coli",
                    "explanation": "Escherichia coli is a bacterium and therefore a prokaryotic organism, whereas Amoeba (protist), yeast (fungus), and Spirogyra (alga) are eukaryotes."
                },
                {
                    "id": "ch1_m04_q05",
                    "question": "In eukaryotic chromosomes, linear DNA is compactly coiled around which basic proteins?",
                    "options": [
                        "Collagens",
                        "Histones",
                        "Actins",
                        "Tubulins"
                    ],
                    "answer": "Histones",
                    "explanation": "Eukaryotic nuclear DNA winds around octamers of basic histone proteins to form nucleosomes, the fundamental repeating units of chromatin."
                },
                {
                    "id": "ch1_m04_q06",
                    "question": "Small, circular, self-replicating extrachromosomal DNA molecules found in bacteria are called:",
                    "options": [
                        "Plasmids",
                        "Chromatids",
                        "Centromeres",
                        "Transposons"
                    ],
                    "answer": "Plasmids",
                    "explanation": "Plasmids are double-stranded extrachromosomal circular DNA elements that replicate autonomously and frequently carry antibiotic resistance genes."
                },
                {
                    "id": "ch1_m04_q07",
                    "question": "Which organelle inside eukaryotic cells possesses its own prokaryote-like 70S ribosomes and circular DNA?",
                    "options": [
                        "Lysosome",
                        "Mitochondrion",
                        "Golgi body",
                        "Centrosome"
                    ],
                    "answer": "Mitochondrion",
                    "explanation": "According to the endosymbiotic theory, mitochondria and chloroplasts originated from engulfed prokaryotes and retain their own circular DNA and 70S ribosomes."
                },
                {
                    "id": "ch1_m04_q08",
                    "question": "The region in a prokaryotic cell where the naked circular chromosome is localized is called the:",
                    "options": [
                        "Nucleolus",
                        "Nucleoid",
                        "Plasmid",
                        "Centrosome"
                    ],
                    "answer": "Nucleoid",
                    "explanation": "The undefined, membrane-less region containing the bacterial chromosome is termed the nucleoid."
                },
                {
                    "id": "ch1_m04_q09",
                    "question": "Which structure is present in both prokaryotic and eukaryotic cells?",
                    "options": [
                        "Ribosomes",
                        "Endoplasmic reticulum",
                        "Nuclear membrane",
                        "Golgi apparatus"
                    ],
                    "answer": "Ribosomes",
                    "explanation": "Ribosomes are universally present in all cellular life (both prokaryotes and eukaryotes) for translation of mRNA into protein."
                },
                {
                    "id": "ch1_m04_q10",
                    "question": "Cell division in prokaryotes occurs predominantly through which simple process?",
                    "options": [
                        "Mitosis with spindle fibers",
                        "Meiosis with crossing over",
                        "Binary fission",
                        "Multiple fission with cyst"
                    ],
                    "answer": "Binary fission",
                    "explanation": "Prokaryotes reproduce asexually primarily by binary fission, where the single circular chromosome duplicates and the cell divides without forming mitotic spindle apparatus."
                }
            ]
        },
        {
            "id": "m05",
            "title": "Plant Cell And Animal Cell: Structural & Biochemical Contrasts",
            "summary": "Detailed anatomical, organellar, and physiological distinctions between plant and animal cells.",
            "theoryHtml": "\n<p>Both plant and animal cells share the fundamental eukaryotic plan, possessing a true nucleus, mitochondria, endoplasmic reticulum, Golgi apparatus, and cytoskeleton. However, evolutionary divergence to different modes of nutrition and mobility has produced profound cellular distinctions:</p>\n<p><strong>Plant Cells:</strong>\n<ul>\n<li>Enclosed by a rigid, non-living <strong>cell wall</strong> outer to the plasma membrane, primarily composed of cellulose, hemicellulose, and pectin, providing mechanical rigidity and turgor support.</li>\n<li>Contain photosynthetic organelles termed <strong>chloroplasts</strong> (and other plastids like chromoplasts and leucoplasts).</li>\n<li>Typically possess a single, prominent <strong>large central vacuole</strong> occupying 50% to 90% of the cell volume, bounded by a specialized membrane called the <strong>tonoplast</strong>.</li>\n<li>Intercellular communication occurs via micro-channels traversing the cell wall called <strong>plasmodesmata</strong>.</li>\n<li>Generally lack centrioles/centrosomes (except in lower flagellated plants) and lysosomes are rare (vacuoles perform hydrolytic digestion). Reserve carbohydrate is stored as <strong>starch</strong>.</li>\n</ul>\n</p>\n<p><strong>Animal Cells:</strong>\n<ul>\n<li>Lack a cell wall and plastids; bounded externally only by a flexible, dynamic plasma membrane.</li>\n<li>Possess <strong>centrioles / centrosomes</strong> that organize spindle microtubules during cell division and form cilia/flagella.</li>\n<li>Contain numerous small, temporary vacuoles rather than a large permanent central vacuole.</li>\n<li>Rich in active <strong>lysosomes</strong> containing acidic hydrolases for intracellular degradation.</li>\n<li>Intercellular communication occurs via protein complexes called <strong>gap junctions</strong>, tight junctions, and desmosomes. Reserve carbohydrate is stored as <strong>glycogen</strong>.</li>\n</ul>\n</p>\n",
            "pointsToRemember": [
                "Plant cells uniquely possess a rigid cellulose cell wall, plastids, and a large central vacuole bounded by the tonoplast.",
                "Animal cells lack cell walls and plastids, but possess centrosomes with centrioles and store carbohydrates as glycogen.",
                "Plasmodesmata connect adjacent plant cells, whereas gap junctions connect adjacent animal cells."
            ],
            "keyNotes": [
                "Plant: Cell wall (+), Chloroplasts (+), Large Central Vacuole (+), Starch. Animal: Cell wall (-), Chloroplasts (-), Centrioles (+), Glycogen."
            ],
            "questions": [
                {
                    "id": "ch1_m05_q01",
                    "question": "Which of the following structures is present in plant cells but completely absent in normal animal cells?",
                    "options": [
                        "Plasma membrane",
                        "Cellulose cell wall",
                        "Mitochondria",
                        "Ribosomes"
                    ],
                    "answer": "Cellulose cell wall",
                    "explanation": "Plant cells possess a rigid outer cellulose cell wall that gives mechanical shape and turgor protection, which animal cells completely lack."
                },
                {
                    "id": "ch1_m05_q02",
                    "question": "The specialized semi-permeable membrane that surrounds the large central vacuole of a plant cell is called the:",
                    "options": [
                        "Tonoplast",
                        "Plasmalemma",
                        "Pellicle",
                        "Pericarp"
                    ],
                    "answer": "Tonoplast",
                    "explanation": "The tonoplast is the single membrane delimiting the central vacuole in plant cells, maintaining osmotic turgor pressure against the cell wall."
                },
                {
                    "id": "ch1_m05_q03",
                    "question": "In what form do animal cells primarily store reserve carbohydrates?",
                    "options": [
                        "Starch",
                        "Glycogen",
                        "Cellulose",
                        "Inulin"
                    ],
                    "answer": "Glycogen",
                    "explanation": "Animals store excess glucose as the branched polysaccharide glycogen (predominantly in liver and skeletal muscles), whereas plants store glucose as starch."
                },
                {
                    "id": "ch1_m05_q04",
                    "question": "Microscopic cytoplasmic channels that traverse cell walls and connect neighboring plant cells are called:",
                    "options": [
                        "Gap junctions",
                        "Plasmodesmata",
                        "Desmosomes",
                        "Tight junctions"
                    ],
                    "answer": "Plasmodesmata",
                    "explanation": "Plasmodesmata are cytoplasmic bridges extending through pits in plant cell walls that facilitate symplastic intercellular transport and communication."
                },
                {
                    "id": "ch1_m05_q05",
                    "question": "Centrosomes containing a pair of cylindrical centrioles are characteristically found in:",
                    "options": [
                        "Higher plant cells",
                        "Animal cells",
                        "Mature angiosperm vessels",
                        "Cyanobacteria"
                    ],
                    "answer": "Animal cells",
                    "explanation": "Centrioles/centrosomes organize the mitotic spindle apparatus in animal cells; higher flowering plants lack centrioles and organize their spindle without them."
                },
                {
                    "id": "ch1_m05_q06",
                    "question": "Which organelle responsible for capturing solar energy and synthesizing carbohydrates is unique to plant cells among eukaryotes?",
                    "options": [
                        "Mitochondrion",
                        "Chloroplast",
                        "Peroxisome",
                        "Ribosome"
                    ],
                    "answer": "Chloroplast",
                    "explanation": "Chloroplasts contain chlorophyll pigments and are the photosynthetic plastids found exclusively in green plants and photosynthetic protists."
                },
                {
                    "id": "ch1_m05_q07",
                    "question": "When placed in a hypotonic solution (pure water), why does an animal cell burst while a plant cell remains intact?",
                    "options": [
                        "Animal cells have thicker membranes",
                        "Plant cells possess a rigid cell wall that resists osmotic lysis",
                        "Plant cells do not take up water",
                        "Animal cells actively pump water inside"
                    ],
                    "answer": "Plant cells possess a rigid cell wall that resists osmotic lysis",
                    "explanation": "The rigid plant cell wall exerts counter turgor pressure (wall pressure), preventing the plant cell from bursting in hypotonic water, whereas animal cells lyse."
                },
                {
                    "id": "ch1_m05_q08",
                    "question": "Which intercellular junction in animal tissues corresponds functionally to the plasmodesmata of plant tissues by allowing passage of small ions and molecules?",
                    "options": [
                        "Tight junction",
                        "Gap junction",
                        "Desmosome",
                        "Hemidesmosome"
                    ],
                    "answer": "Gap junction",
                    "explanation": "Gap junctions in animal tissues consist of connexon protein channels that permit direct cytoplasmic passage of ions and signaling molecules, akin to plant plasmodesmata."
                },
                {
                    "id": "ch1_m05_q09",
                    "question": "Which of the following organelles is prominent in animal cells for hydrolyzing cellular debris and foreign pathogens?",
                    "options": [
                        "Glyoxysome",
                        "Lysosome",
                        "Amyloplast",
                        "Chloroplast"
                    ],
                    "answer": "Lysosome",
                    "explanation": "Lysosomes are abundant in animal cells, containing over 50 acidic hydrolases to digest phagocytosed debris, aged organelles, and macromolecules."
                },
                {
                    "id": "ch1_m05_q10",
                    "question": "What is the primary chemical constituent of the primary cell wall in plant cells?",
                    "options": [
                        "Chitin",
                        "Peptidoglycan",
                        "Cellulose",
                        "Keratin"
                    ],
                    "answer": "Cellulose",
                    "explanation": "Plant cell walls are made predominantly of cellulose, an unbranched polymer of β-D-glucose units held together by β-1,4-glycosidic bonds."
                }
            ]
        },
        {
            "id": "m06",
            "title": "Plasma Membrane: Fluid Mosaic Model & Selective Permeability",
            "summary": "Biochemical structure of the plasma membrane, Singer & Nicolson's Fluid Mosaic Model, and selective permeability.",
            "theoryHtml": "\n<p>The <strong>plasma membrane</strong> (or plasmalemma) is a dynamic, selectively permeable biological barrier (approximately 7.5 nm to 10 nm thick) enclosing the cytoplasm of all living cells. In 1972, <strong>S.J. Singer</strong> and <strong>G.L. Nicolson</strong> proposed the widely accepted <strong>Fluid Mosaic Model</strong>, which conceptualizes the membrane as a quasi-fluid 'sea' of lipids in which a 'mosaic' of proteins floats.</p>\n<p>The matrix is a <strong>phospholipid bilayer</strong>. Each phospholipid molecule is amphipathic, possessing a polar hydrophilic head (facing outward toward aqueous extracellular and intracellular fluids) and two non-polar hydrophobic fatty acid hydrocarbon tails (sequestered inward, shielded from water). This lipid bilayer confers fluidity, flexibility, and elasticity.</p>\n<p>Membrane proteins are categorized by their ease of extraction into:\n<ul>\n<li><strong>Integral (intrinsic) proteins:</strong> Deeply embedded in the bilayer, often spanning both layers as <em>transmembrane proteins</em> functioning as ion channels, carriers, or receptor kinases.</li>\n<li><strong>Peripheral (extrinsic) proteins:</strong> Loosely associated with the polar surfaces of the bilayer through electrostatic interactions.</li>\n</ul>\nCholesterol molecules intercalated between phospholipids buffer membrane fluidity across temperature shifts. Oligosaccharide chains linked to lipids (glycolipids) and proteins (glycoproteins) project outward, forming the <strong>glycocalyx</strong> responsible for cell-cell recognition and tissue compatibility.</p>\n",
            "pointsToRemember": [
                "Singer and Nicolson proposed the Fluid Mosaic Model of the plasma membrane in 1972.",
                "The lipid bilayer consists of amphipathic phospholipids with hydrophilic polar heads and hydrophobic tails.",
                "Glycoproteins and glycolipids forming the glycocalyx mediate cell recognition and immune identification."
            ],
            "keyNotes": [
                "Fluid Mosaic Model (1972): Phospholipid bilayer provides fluid matrix; integral and peripheral proteins provide mosaic functions."
            ],
            "questions": [
                {
                    "id": "ch1_m06_q01",
                    "question": "Who proposed the universally accepted Fluid Mosaic Model of the plasma membrane in 1972?",
                    "options": [
                        "Davson and Danielli",
                        "S.J. Singer and G.L. Nicolson",
                        "Robertson",
                        "Schleiden and Schwann"
                    ],
                    "answer": "S.J. Singer and G.L. Nicolson",
                    "explanation": "S.J. Singer and G.L. Nicolson proposed the Fluid Mosaic Model in 1972, describing proteins floating within a dynamic phospholipid bilayer."
                },
                {
                    "id": "ch1_m06_q02",
                    "question": "The primary structural lipid component of the plasma membrane is:",
                    "options": [
                        "Triglycerides",
                        "Phospholipids",
                        "Waxes",
                        "Sphingolipids only"
                    ],
                    "answer": "Phospholipids",
                    "explanation": "Phospholipids, being amphipathic with polar heads and non-polar hydrocarbon tails, spontaneously arrange into a continuous bilayer."
                },
                {
                    "id": "ch1_m06_q03",
                    "question": "Why is the plasma membrane termed 'selectively permeable'?",
                    "options": [
                        "It allows all solutes and water to pass unimpeded",
                        "It allows water and selected solute molecules to pass while impeding others",
                        "It completely blocks all molecular transit",
                        "It permits only lipid-insoluble substances to cross"
                    ],
                    "answer": "It allows water and selected solute molecules to pass while impeding others",
                    "explanation": "Selective permeability means the membrane regulates transport, allowing specific ions and uncharged small molecules to cross while blocking large or polar charged solutes without transporters."
                },
                {
                    "id": "ch1_m06_q04",
                    "question": "Which lipid component acts as a fluidity buffer in animal cell membranes by preventing crystallization at low temperatures and excessive fluidity at high temperatures?",
                    "options": [
                        "Cholesterol",
                        "Palmitic acid",
                        "Ergosterol",
                        "Lecithin"
                    ],
                    "answer": "Cholesterol",
                    "explanation": "Cholesterol molecules intercalated among phospholipid tails act as bidirectional fluidity regulators in animal cell membranes."
                },
                {
                    "id": "ch1_m06_q05",
                    "question": "Membrane proteins that span the entire thickness of the lipid bilayer are known as:",
                    "options": [
                        "Peripheral proteins",
                        "Transmembrane (integral) proteins",
                        "Glycolipids",
                        "Spectrins"
                    ],
                    "answer": "Transmembrane (integral) proteins",
                    "explanation": "Transmembrane proteins are integral proteins that penetrate completely through both leaflets of the phospholipid bilayer."
                },
                {
                    "id": "ch1_m06_q06",
                    "question": "What is the biochemical orientation of the phospholipid bilayer in the plasma membrane?",
                    "options": [
                        "Hydrophilic heads point inward toward each other",
                        "Hydrophobic tails face outward towards the aqueous environment",
                        "Hydrophilic heads face outward towards water, while hydrophobic tails are buried inside",
                        "Lipids and proteins alternate in rigid parallel columns"
                    ],
                    "answer": "Hydrophilic heads face outward towards water, while hydrophobic tails are buried inside",
                    "explanation": "The polar hydrophilic phosphate heads orient toward water (extra- and intracellular), sequestering the non-polar hydrophobic fatty acid tails away from water."
                },
                {
                    "id": "ch1_m06_q07",
                    "question": "The carbohydrate-rich cell surface coat formed by glycoproteins and glycolipids is called the:",
                    "options": [
                        "Glycocalyx",
                        "Cuticle",
                        "Mesosome",
                        "Peroxisome"
                    ],
                    "answer": "Glycocalyx",
                    "explanation": "The glycocalyx consists of the oligosaccharide moieties of glycoproteins and glycolipids projecting from the outer surface, mediating cell recognition."
                },
                {
                    "id": "ch1_m06_q08",
                    "question": "Which model of cell membrane structure preceded the fluid mosaic model by describing a 'protein-lipid-protein sandwich' in 1935?",
                    "options": [
                        "Unit membrane model of Robertson",
                        "Davson-Danielli sandwich model",
                        "Overton lipid theory",
                        "Micellar model"
                    ],
                    "answer": "Davson-Danielli sandwich model",
                    "explanation": "Hugh Davson and James Danielli proposed the sandwich model in 1935, postulating a lipid bilayer coated on both sides with continuous protein sheets."
                },
                {
                    "id": "ch1_m06_q09",
                    "question": "The movement of individual phospholipid molecules from one leaflet of the bilayer to the opposite leaflet is called:",
                    "options": [
                        "Lateral diffusion",
                        "Flip-flop movement",
                        "Rotational movement",
                        "Solvation"
                    ],
                    "answer": "Flip-flop movement",
                    "explanation": "Flip-flop (transverse diffusion) involves a phospholipid crossing the hydrophobic core from one leaflet to another, a rare event catalyzed by flippase enzymes."
                },
                {
                    "id": "ch1_m06_q10",
                    "question": "Which molecule easily penetrates the hydrophobic core of the plasma membrane by simple passive diffusion without a carrier?",
                    "options": [
                        "Glucose",
                        "Oxygen gas (O₂)",
                        "Sodium ion (Na⁺)",
                        "ATP"
                    ],
                    "answer": "Oxygen gas (O₂)",
                    "explanation": "Small, uncharged, non-polar molecules like O₂, CO₂, and N₂ diffuse rapidly and freely through the hydrophobic fatty acid core of the membrane."
                }
            ]
        },
        {
            "id": "m07",
            "title": "Membrane Transport: Passive Diffusion, Osmosis & Active Ion Pumps",
            "summary": "Mechanisms of cellular transport including simple diffusion, facilitated diffusion via channels/permeases, osmosis, and ATP-driven active transport.",
            "theoryHtml": "\n<p>Transport of ions, water, and nutrients across the plasma membrane occurs via two primary thermodynamic modalities: <strong>Passive transport</strong> and <strong>Active transport</strong>.</p>\n<p><strong>Passive Transport:</strong> Occurs along an electrochemical or concentration gradient (downhill, from high concentration to low concentration) without any expenditure of cellular metabolic energy (ATP).\n<ul>\n<li><strong>Simple Diffusion:</strong> Movement of small non-polar molecules ($\\text{O}_2, \\text{CO}_2$, steroid hormones) directly across the lipid bilayer.</li>\n<li><strong>Facilitated Diffusion:</strong> Passive movement of polar solutes (glucose, amino acids) or ions mediated by specific membrane transport proteins (channels like aquaporins for water, or carrier permeases like GLUT transporters) without consuming ATP.</li>\n<li><strong>Osmosis:</strong> The passive diffusion of water (solvent) molecules across a selectively permeable membrane from a region of lower solute concentration (higher water potential) to a region of higher solute concentration (lower water potential). In a <em>hypertonic solution</em>, water leaves the plant cell, causing shrinkage of the protoplast away from the cell wall—a phenomenon termed <strong>plasmolysis</strong>. In a <em>hypotonic solution</em>, water enters, generating <strong>turgor pressure</strong>.</li>\n</ul>\n</p>\n<p><strong>Active Transport:</strong> Movement of solutes against their concentration gradient (uphill, from low to high concentration) coupled to metabolic energy expenditure (ATP hydrolysis). The classic example is the <strong>$\\text{Na}^+/\\text{K}^+$ ATPase pump</strong>, which hydrolyzes 1 molecule of ATP to pump $3\\,\\text{Na}^+$ ions out of the cell and $2\\,\\text{K}^+$ ions into the cell, maintaining resting membrane potential and cellular volume.</p>\n",
            "pointsToRemember": [
                "Passive transport requires no ATP and moves solutes down their concentration gradient.",
                "Osmosis is water diffusion across a semi-permeable membrane; plasmolysis occurs in hypertonic solutions.",
                "The active Na⁺/K⁺ pump hydrolyzes ATP to expel 3 Na⁺ ions and import 2 K⁺ ions against gradients."
            ],
            "keyNotes": [
                "Passive: Simple & Facilitated diffusion (no ATP). Active: Driven by ATP hydrolysis against concentration gradients (e.g., Na⁺/K⁺ pump)."
            ],
            "questions": [
                {
                    "id": "ch1_m07_q01",
                    "question": "Which of the following transport mechanisms requires direct hydrolysis of metabolic energy in the form of ATP?",
                    "options": [
                        "Simple diffusion",
                        "Facilitated diffusion",
                        "Active transport",
                        "Osmosis"
                    ],
                    "answer": "Active transport",
                    "explanation": "Active transport moves ions or molecules against an electrochemical or concentration gradient, requiring cellular energy derived from ATP hydrolysis."
                },
                {
                    "id": "ch1_m07_q02",
                    "question": "The primary active transport Na⁺/K⁺ ATPase pump transports which ratio of ions per hydrolyzed ATP?",
                    "options": [
                        "3 Na⁺ out and 2 K⁺ in",
                        "2 Na⁺ out and 3 K⁺ in",
                        "3 Na⁺ in and 2 K⁺ out",
                        "1 Na⁺ out and 1 K⁺ in"
                    ],
                    "answer": "3 Na⁺ out and 2 K⁺ in",
                    "explanation": "The electrogenic Na⁺/K⁺ ATPase pump expels 3 Na⁺ ions from the cell and brings 2 K⁺ ions inside for each molecule of ATP hydrolyzed."
                },
                {
                    "id": "ch1_m07_q03",
                    "question": "The specialized water-selective pore proteins that facilitate rapid osmosis across cell membranes are called:",
                    "options": [
                        "Aquaporins",
                        "Connexons",
                        "Integrins",
                        "Cadherins"
                    ],
                    "answer": "Aquaporins",
                    "explanation": "Peter Agre discovered aquaporins (Nobel Prize 2003), the membrane channel proteins that permit rapid, selective passage of water molecules."
                },
                {
                    "id": "ch1_m07_q04",
                    "question": "What happens to a living plant cell when placed in a hypertonic solution containing high salt or sugar concentration?",
                    "options": [
                        "It swells and bursts by endosmosis",
                        "Plasmolysis occurs as the protoplast shrinks away from the cell wall",
                        "It divides rapidly by mitosis",
                        "Its vacuole expands to fill the entire cell"
                    ],
                    "answer": "Plasmolysis occurs as the protoplast shrinks away from the cell wall",
                    "explanation": "In a hypertonic medium, water flows out of the central vacuole by exosmosis, causing the protoplast to contract away from the rigid cell wall (plasmolysis)."
                },
                {
                    "id": "ch1_m07_q05",
                    "question": "Movement of glucose into human erythrocytes through GLUT1 transporter proteins is an example of:",
                    "options": [
                        "Simple diffusion",
                        "Facilitated diffusion",
                        "Primary active transport",
                        "Endocytosis"
                    ],
                    "answer": "Facilitated diffusion",
                    "explanation": "Glucose enters erythrocytes down its concentration gradient via GLUT1 carrier proteins without utilizing ATP, which is facilitated diffusion."
                },
                {
                    "id": "ch1_m07_q06",
                    "question": "Cellular ingestion of liquid droplets by invagination of the plasma membrane ('cell drinking') is termed:",
                    "options": [
                        "Phagocytosis",
                        "Pinocytosis",
                        "Exocytosis",
                        "Plasmolysis"
                    ],
                    "answer": "Pinocytosis",
                    "explanation": "Pinocytosis is fluid-phase endocytosis wherein small droplets of extracellular fluid are enclosed in tiny vesicles and internalized."
                },
                {
                    "id": "ch1_m07_q07",
                    "question": "The cellular engulfment of large solid food particles or bacteria by pseudopodia ('cell eating') is called:",
                    "options": [
                        "Phagocytosis",
                        "Pinocytosis",
                        "Autophagy",
                        "Dialysis"
                    ],
                    "answer": "Phagocytosis",
                    "explanation": "Phagocytosis is the active process by which cells (like macrophages and amoebae) engulf large particulate matter or pathogens."
                },
                {
                    "id": "ch1_m07_q08",
                    "question": "When a red blood cell is placed in an isotonic solution (0.9% NaCl saline), what is the net movement of water?",
                    "options": [
                        "Net movement is zero (equal rate in and out)",
                        "Water rapidly rushes in, causing lysis",
                        "Water rapidly leaves, causing crenation",
                        "Salts are actively secreted out"
                    ],
                    "answer": "Net movement is zero (equal rate in and out)",
                    "explanation": "In an isotonic environment, the osmotic pressure matches intra-erythrocytic fluid, resulting in equal rates of water movement and constant cell volume."
                },
                {
                    "id": "ch1_m07_q09",
                    "question": "The transport of two different solutes across a membrane simultaneously in the same direction is known as:",
                    "options": [
                        "Uniport",
                        "Symport",
                        "Antiport",
                        "Transportation"
                    ],
                    "answer": "Symport",
                    "explanation": "Symport (cotransport) is a coupled transport mechanism where two different substances move across the membrane in the same direction."
                },
                {
                    "id": "ch1_m07_q10",
                    "question": "Which of the following processes explains the preservation of raw mangoes or meat using concentrated salt solution?",
                    "options": [
                        "Bacteria undergo plasmolysis and dehydration, inhibiting their growth",
                        "Salt provides vitamins to the food",
                        "Salt destroys bacterial DNA directly",
                        "Salt neutralizes cellular enzymes"
                    ],
                    "answer": "Bacteria undergo plasmolysis and dehydration, inhibiting their growth",
                    "explanation": "High salt concentration creates a hypertonic medium, causing microbial cells to lose water by exosmosis, undergo lethal plasmolysis, and cease multiplying."
                }
            ]
        },
        {
            "id": "m08",
            "title": "Cell Wall Structure, Composition & Functions in Plants, Fungi & Bacteria",
            "summary": "Chemical composition, layers, and biological roles of cell walls across plants, fungi, and bacteria.",
            "theoryHtml": "\n<p>The <strong>cell wall</strong> is a non-living, rigid, protective, and semi-elastic outer layer found in plants, fungi, bacteria, and algae, located outside the plasma membrane. It dictates cell shape, confers mechanical strength, prevents osmotic lysis, and regulates cellular growth.</p>\n<p><strong>Plant Cell Wall Architecture:</strong>\n<ul>\n<li><strong>Middle Lamella:</strong> The outermost cementing layer holding adjacent plant cells together, composed predominantly of <strong>calcium and magnesium pectate</strong> (pectin). When fruits ripen, enzymes break down pectates, causing softening.</li>\n<li><strong>Primary Wall:</strong> Formed in young, growing cells, consisting of cellulose microfibrils embedded in an amorphous matrix of hemicellulose and pectin. It is thin, flexible, and capable of extension.</li>\n<li><strong>Secondary Wall:</strong> Deposited interior to the primary wall once growth ceases, containing heavily thickened layers of cellulose, hemicellulose, and water-impermeable <strong>lignin</strong> (providing wood stiffness) or <strong>suberin</strong> (in cork).</li>\n</ul>\n</p>\n<p><strong>Cross-Kingdom Chemical Diversity:</strong>\n<ul>\n<li><strong>Plants & Algae:</strong> Cellulose (β-1,4-glucan), hemicellulose, pectin, and glycoproteins.</li>\n<li><strong>Fungi:</strong> <strong>Chitin</strong> (a polymer of N-acetylglucosamine, NAG) and glucans.</li>\n<li><strong>Bacteria (Eubacteria):</strong> <strong>Peptidoglycan</strong> (murein), composed of alternating NAG and N-acetylmuramic acid (NAM) cross-linked by short oligopeptide chains. Gram-positive bacteria possess thick peptidoglycan with teichoic acids, while Gram-negative bacteria have thin peptidoglycan surrounded by an outer lipopolysaccharide (LPS) membrane.</li>\n<li><strong>Mycoplasma:</strong> A genus of bacteria uniquely lacking a cell wall entirely, making them naturally insensitive to penicillin.</li>\n</ul>\n</p>\n",
            "pointsToRemember": [
                "The plant middle lamella is composed of calcium and magnesium pectates, which soften during fruit ripening.",
                "Fungal cell walls are made of chitin (N-acetylglucosamine polymer), while bacterial cell walls contain peptidoglycan.",
                "Mycoplasma (PPLO) is a bacterial group that completely lacks a cell wall."
            ],
            "keyNotes": [
                "Plant wall = Cellulose; Fungal wall = Chitin; Bacterial wall = Peptidoglycan (murein). Middle lamella = Calcium pectate."
            ],
            "questions": [
                {
                    "id": "ch1_m08_q01",
                    "question": "The middle lamella that acts as an intercellular cementing layer between adjacent plant cells is composed of:",
                    "options": [
                        "Calcium and magnesium pectates",
                        "Cellulose and lignin",
                        "Chitin and glucan",
                        "Peptidoglycan"
                    ],
                    "answer": "Calcium and magnesium pectates",
                    "explanation": "The middle lamella is made up of calcium and magnesium pectate (pectin), functioning as the cellular cement binding plant cells together."
                },
                {
                    "id": "ch1_m08_q02",
                    "question": "The cell wall of fungi is distinctively composed of which tough, nitrogen-containing polysaccharide?",
                    "options": [
                        "Cellulose",
                        "Chitin",
                        "Peptidoglycan",
                        "Pectin"
                    ],
                    "answer": "Chitin",
                    "explanation": "Fungal cell walls are composed of chitin, a long-chain polymer of N-acetylglucosamine (NAG), which also forms the exoskeleton of arthropods."
                },
                {
                    "id": "ch1_m08_q03",
                    "question": "Bacterial cell walls are primarily built of which complex heteropolymer?",
                    "options": [
                        "Peptidoglycan (Murein)",
                        "Cellulose",
                        "Chitin",
                        "Keratin"
                    ],
                    "answer": "Peptidoglycan (Murein)",
                    "explanation": "The structural backbone of bacterial cell walls consists of peptidoglycan (murein), made of alternating NAG and NAM sugars cross-linked by peptide chains."
                },
                {
                    "id": "ch1_m08_q04",
                    "question": "Which of the following organisms naturally lacks a cell wall and is the smallest known free-living bacterium?",
                    "options": [
                        "Mycoplasma (PPLO)",
                        "Escherichia coli",
                        "Bacillus subtilis",
                        "Streptococcus"
                    ],
                    "answer": "Mycoplasma (PPLO)",
                    "explanation": "Mycoplasma (Pleuropneumonia-like organisms) completely lack a cell wall, rendering them pleomorphic and resistant to penicillin."
                },
                {
                    "id": "ch1_m08_q05",
                    "question": "Why does penicillin specifically kill bacteria without harming human host cells?",
                    "options": [
                        "It binds to 80S eukaryotic ribosomes",
                        "It inhibits peptidoglycan cross-linking enzyme in bacterial cell walls",
                        "It dissolves human plasma membranes",
                        "It stops mitochondrial respiration"
                    ],
                    "answer": "It inhibits peptidoglycan cross-linking enzyme in bacterial cell walls",
                    "explanation": "Penicillin inhibits transpeptidase enzymes that synthesize peptidoglycan walls; since human cells lack cell walls and peptidoglycan, they remain unharmed."
                },
                {
                    "id": "ch1_m08_q06",
                    "question": "During the ripening of fruits, softening of tissue occurs primarily due to:",
                    "options": [
                        "Solubilization and enzymatic degradation of pectic middle lamella",
                        "Deposition of lignin",
                        "Synthesis of thick secondary walls",
                        "Loss of cellular cytoplasm"
                    ],
                    "answer": "Solubilization and enzymatic degradation of pectic middle lamella",
                    "explanation": "Enzymes such as pectinase and polygalacturonase degrade and dissolve the calcium pectate of the middle lamella, causing ripe fruits to soften."
                },
                {
                    "id": "ch1_m08_q07",
                    "question": "Lignin deposition in the secondary cell walls of plant vascular tissue provides:",
                    "options": [
                        "Elasticity and expansion",
                        "High mechanical rigidity and waterproof strength",
                        "Photosynthetic capacity",
                        "Nutrient absorption"
                    ],
                    "answer": "High mechanical rigidity and waterproof strength",
                    "explanation": "Lignin is a complex aromatic polymer that stiffens xylem vessels and sclerenchyma, imparting mechanical compressive strength and water impermeability."
                },
                {
                    "id": "ch1_m08_q08",
                    "question": "Gram-positive bacteria retain the crystal violet stain during Gram staining because they possess:",
                    "options": [
                        "A thick multilayered peptidoglycan wall",
                        "An outer lipopolysaccharide membrane",
                        "A chitinous shell",
                        "No cell wall"
                    ],
                    "answer": "A thick multilayered peptidoglycan wall",
                    "explanation": "Gram-positive bacteria have a thick, dense peptidoglycan cell wall that traps the crystal violet-iodine complex, resisting alcohol decolourization."
                },
                {
                    "id": "ch1_m08_q09",
                    "question": "Which substance is deposited in the cell walls of cork cells, making them impervious to water and gases?",
                    "options": [
                        "Suberin",
                        "Pectin",
                        "Cellulose",
                        "Starch"
                    ],
                    "answer": "Suberin",
                    "explanation": "Suberin is a waxy, hydrophobic lipid material deposited in the walls of cork (phellem) cells and the Casparian strip of root endodermis."
                },
                {
                    "id": "ch1_m08_q10",
                    "question": "Cellulose is a linear, unbranched homopolysaccharide composed entirely of repeating units of:",
                    "options": [
                        "α-D-Glucose",
                        "β-D-Glucose",
                        "β-D-Fructose",
                        "Galactose"
                    ],
                    "answer": "β-D-Glucose",
                    "explanation": "Cellulose consists of thousands of β-D-glucose molecules linked together by β-1,4-glycosidic bonds, forming straight, rigid microfibril chains."
                }
            ]
        },
        {
            "id": "m09",
            "title": "Cytoplasm, Cytosol & Endomembrane System Overview",
            "summary": "Cytoplasmic matrix properties, cyclosis, and the coordinated functions of the endomembrane system.",
            "theoryHtml": "\n<p>The <strong>cytoplasm</strong> represents the entire cellular content bounded by the plasma membrane, excluding the nucleus. It is divided into two distinct components: the liquid aqueous ground substance called the <strong>cytosol</strong> (hyaloplasm) and the specialized membrane-bound and non-membrane-bound <strong>cell organelles</strong>.</p>\n<p>The cytosol is an aqueous colloidal matrix consisting of 80% to 85% water, dissolved electrolytes, amino acids, simple sugars, lipids, nucleotides, and metabolic enzymes. In living plant and animal cells, the cytoplasm undergoes streaming movements known as <strong>cyclosis</strong> (cytoplasmic streaming), driven by microfilaments (actin) and ATP to circulate nutrients, organelles, and signaling molecules.</p>\n<p>In eukaryotic cells, several membrane-bound organelles function in a coordinated, sequential manner to synthesize, process, package, and deliver macromolecules. This integrated functional cooperative network is termed the <strong>Endomembrane System</strong>, which comprises:\n<ol>\n<li><strong>Endoplasmic Reticulum (ER):</strong> Primary site of protein and lipid synthesis.</li>\n<li><strong>Golgi Apparatus:</strong> Modifies, sorts, and packages ER-derived macromolecules.</li>\n<li><strong>Lysosomes:</strong> Degrades waste products and cellular debris via acidic hydrolases.</li>\n<li><strong>Vacuoles:</strong> Storage of water, ions, and waste solutes.</li>\n</ol>\nOrganelles such as <strong>mitochondria</strong>, <strong>chloroplasts</strong>, and <strong>peroxisomes</strong> are NOT part of the endomembrane system because their functions are not coordinated with the ER-Golgi pathway and they possess semi-autonomous origins.</p>\n",
            "pointsToRemember": [
                "Cytoplasm = Cytosol (colloidal fluid) + Organelles. Cyclosis is cytoplasmic streaming driven by actin microfilaments.",
                "The Endomembrane System consists of the Endoplasmic Reticulum, Golgi apparatus, Lysosomes, and Vacuoles.",
                "Mitochondria, chloroplasts, and peroxisomes are excluded from the endomembrane system."
            ],
            "keyNotes": [
                "Endomembrane System: ER → Golgi → Lysosomes / Vacuoles. Operates as a coordinated secretory and degradative pathway."
            ],
            "questions": [
                {
                    "id": "ch1_m09_q01",
                    "question": "Which of the following organelles is an integral component of the eukaryotic Endomembrane System?",
                    "options": [
                        "Mitochondria",
                        "Chloroplast",
                        "Golgi apparatus",
                        "Peroxisome"
                    ],
                    "answer": "Golgi apparatus",
                    "explanation": "The endomembrane system comprises the endoplasmic reticulum, Golgi apparatus, lysosomes, and vacuoles, which work in coordinated vesicular transport."
                },
                {
                    "id": "ch1_m09_q02",
                    "question": "Why are mitochondria and chloroplasts NOT considered part of the endomembrane system?",
                    "options": [
                        "They are not bounded by a membrane",
                        "Their functions are not coordinated with the ER-Golgi vesicular secretory pathway",
                        "They lack enzymes",
                        "They are located inside the nucleus"
                    ],
                    "answer": "Their functions are not coordinated with the ER-Golgi vesicular secretory pathway",
                    "explanation": "Mitochondria and chloroplasts function independently of the ER-Golgi secretory traffic and possess semi-autonomous genomes and evolutionary origins."
                },
                {
                    "id": "ch1_m09_q03",
                    "question": "The continuous streaming movement of cytoplasm observed inside living cells (such as Paramecium or Elodea leaves) is termed:",
                    "options": [
                        "Cyclosis",
                        "Dialysis",
                        "Plasmolysis",
                        "Crenation"
                    ],
                    "answer": "Cyclosis",
                    "explanation": "Cyclosis (cytoplasmic streaming) is the active circulation of fluid cytoplasm mediated by actin microfilaments and myosin motor proteins."
                },
                {
                    "id": "ch1_m09_q04",
                    "question": "The aqueous, soluble ground substance of the cytoplasm excluding all organelles is called the:",
                    "options": [
                        "Nucleoplasm",
                        "Cytosol",
                        "Tonoplast",
                        "Pellicle"
                    ],
                    "answer": "Cytosol",
                    "explanation": "Cytosol is the soluble, fluid phase of the cytoplasm containing water, dissolved ions, and soluble metabolic enzymes."
                },
                {
                    "id": "ch1_m09_q05",
                    "question": "Which cytoskeletal protein filament is primarily responsible for generating the force behind cytoplasmic streaming (cyclosis)?",
                    "options": [
                        "Actin microfilaments",
                        "Microtubules",
                        "Keratin intermediate filaments",
                        "Collagen fibers"
                    ],
                    "answer": "Actin microfilaments",
                    "explanation": "Interactions between actin microfilaments and myosin motor proteins generate the mechanical shearing forces that drive cytoplasmic streaming."
                },
                {
                    "id": "ch1_m09_q06",
                    "question": "Which of the following four organelles all belong to the endomembrane system?",
                    "options": [
                        "ER, Golgi, Lysosomes, Vacuoles",
                        "ER, Golgi, Mitochondria, Chloroplasts",
                        "Nucleus, Ribosomes, Centrioles, Lysosomes",
                        "Peroxisomes, Chloroplasts, Vacuoles, ER"
                    ],
                    "answer": "ER, Golgi, Lysosomes, Vacuoles",
                    "explanation": "The coordinated endomembrane pathway strictly comprises the endoplasmic reticulum, Golgi apparatus, lysosomes, and vacuoles."
                },
                {
                    "id": "ch1_m09_q07",
                    "question": "The primary metabolic pathway occurring in the cytosol of almost all living cells without requiring oxygen is:",
                    "options": [
                        "Krebs cycle",
                        "Glycolysis",
                        "Electron transport chain",
                        "Calvin cycle"
                    ],
                    "answer": "Glycolysis",
                    "explanation": "Glycolysis (the breakdown of glucose into pyruvate) occurs in the aqueous cytosol and does not require oxygen."
                },
                {
                    "id": "ch1_m09_q08",
                    "question": "What is the physical state of the cytosol described in classical cell physiology?",
                    "options": [
                        "Pure Newtonian liquid",
                        "Reversible colloidal sol-gel system",
                        "Solid crystal",
                        "Gaseous emulsion"
                    ],
                    "answer": "Reversible colloidal sol-gel system",
                    "explanation": "Cytosol acts as a colloidal system that can reversibly transition between a more fluid 'sol' state and a more viscous 'gel' state during cellular activities."
                },
                {
                    "id": "ch1_m09_q09",
                    "question": "Vesicles budding off from the rough ER travel first to which face of the Golgi apparatus?",
                    "options": [
                        "Trans (maturing) face",
                        "Cis (forming) face",
                        "Medial cisternae",
                        "Lysosomal lumen"
                    ],
                    "answer": "Cis (forming) face",
                    "explanation": "Transport vesicles from the ER fuse with the convex cis (forming) face of the Golgi apparatus to deliver newly synthesized proteins."
                },
                {
                    "id": "ch1_m09_q10",
                    "question": "Inclusions in the cytoplasm that are non-living reserve substances or metabolic byproducts are known as:",
                    "options": [
                        "Deuteroplasm (Ergastic substances)",
                        "Protoplasm",
                        "Chondriosomes",
                        "Centrosomes"
                    ],
                    "answer": "Deuteroplasm (Ergastic substances)",
                    "explanation": "Ergastic substances (or deuteroplasm) are non-living cytoplasmic inclusions such as starch grains, glycogen granules, lipid droplets, and mineral crystals."
                }
            ]
        },
        {
            "id": "m10",
            "title": "Endoplasmic Reticulum: Rough (RER) vs Smooth (SER) Roles",
            "summary": "Structure and specialized physiological functions of the Rough Endoplasmic Reticulum (RER) and Smooth Endoplasmic Reticulum (SER).",
            "theoryHtml": "\n<p>The <strong>Endoplasmic Reticulum (ER)</strong> is an extensive, interconnected network of membrane-bound tubules, flattened sacs (cisternae), and vesicles proliferating through the cytoplasm of eukaryotic cells. It divides the intracellular space into two distinct compartments: the <em>luminal</em> (inside ER) and <em>extra-luminal</em> (cytosol) compartments. The ER membrane is physically continuous with the outer membrane of the nuclear envelope.</p>\n<p>The ER exists in two morphologically and biochemically distinct forms:\n<ul>\n<li><strong>Rough Endoplasmic Reticulum (RER):</strong> Possesses numerous <strong>80S ribosomes</strong> bound to its outer membrane surface via translocon receptor proteins (ribophorins). The RER is heavily developed in cells actively specialized for protein synthesis and secretion (such as pancreatic acinar cells, plasma B-cells producing antibodies, and liver hepatocytes). Proteins synthesized on RER ribosomes enter the ER lumen for post-translational folding, disulfide bond formation, and initial N-linked glycosylation.</li>\n<li><strong>Smooth Endoplasmic Reticulum (SER):</strong> Lacks surface ribosomes. The SER is the major cellular site for the synthesis of <strong>lipids</strong>, phospholipids, and <strong>steroid hormones</strong> (such as testosterone, estrogen, and cortisol in endocrine glands). In the liver, the SER contains cytochrome P450 enzymes responsible for the <strong>detoxification</strong> of drugs, alcohol, and metabolic poisons. In skeletal and cardiac muscle cells, a specialized form of SER termed the <strong>sarcoplasmic reticulum</strong> sequesters and releases $\text{Ca}^{2+}$ ions to trigger muscle contraction.</li>\n</ul>\n</p>\n",
            "pointsToRemember": [
                "RER is studded with 80S ribosomes and is the hub for synthesis and folding of secretory and membrane proteins.",
                "SER lacks ribosomes and synthesizes lipids, phospholipids, and steroid hormones.",
                "SER detoxifies drugs/toxins in the liver and stores Ca²⁺ as sarcoplasmic reticulum in muscle fibers."
            ],
            "keyNotes": [
                "RER = Ribosomes (+), Protein synthesis & secretion. SER = Ribosomes (-), Lipid/steroid synthesis, detoxification, Ca²⁺ storage."
            ],
            "questions": [
                {
                    "id": "ch1_m10_q01",
                    "question": "Which organelle is the major site of protein synthesis and initial post-translational processing for secretory proteins?",
                    "options": [
                        "Smooth Endoplasmic Reticulum",
                        "Rough Endoplasmic Reticulum",
                        "Peroxisome",
                        "Lysosome"
                    ],
                    "answer": "Rough Endoplasmic Reticulum",
                    "explanation": "Rough ER possesses ribosomes on its outer surface and is the primary organelle synthesizing proteins destined for secretion or membrane insertion."
                },
                {
                    "id": "ch1_m10_q02",
                    "question": "What gives the Rough Endoplasmic Reticulum its granular, 'rough' appearance under electron microscopy?",
                    "options": [
                        "Glycogen granules",
                        "Ribosomes attached to its surface",
                        "Lipid droplets",
                        "Nuclear pores"
                    ],
                    "answer": "Ribosomes attached to its surface",
                    "explanation": "The rough appearance is due to the presence of numerous 80S ribosomes anchored to ribophorin receptor proteins on the cytosolic face of the membrane."
                },
                {
                    "id": "ch1_m10_q03",
                    "question": "The Smooth Endoplasmic Reticulum (SER) is primarily responsible for the synthesis of:",
                    "options": [
                        "Proteins and nucleic acids",
                        "Lipids, phospholipids, and steroid hormones",
                        "Cellulose and starch",
                        "Acidic digestive hydrolases"
                    ],
                    "answer": "Lipids, phospholipids, and steroid hormones",
                    "explanation": "The SER contains enzymes for synthesizing lipids, fatty acids, phospholipids for membranes, and steroid hormones (e.g., testosterone, estrogen)."
                },
                {
                    "id": "ch1_m10_q04",
                    "question": "In liver cells, the SER plays a vital role in which physiological process?",
                    "options": [
                        "Protein digestion",
                        "Detoxification of drugs, alcohol, and toxic chemicals",
                        "Antibody production",
                        "Oxygen binding"
                    ],
                    "answer": "Detoxification of drugs, alcohol, and toxic chemicals",
                    "explanation": "Liver SER contains the cytochrome P450 monooxygenase enzyme system, which chemically modifies and detoxifies drugs and lipid-soluble toxins."
                },
                {
                    "id": "ch1_m10_q05",
                    "question": "The specialized smooth endoplasmic reticulum in skeletal muscle cells that stores and releases calcium ions (Ca²⁺) during contraction is called:",
                    "options": [
                        "Sarcoplasmic reticulum",
                        "Peroxisome",
                        "Chondriosome",
                        "Microsome"
                    ],
                    "answer": "Sarcoplasmic reticulum",
                    "explanation": "The sarcoplasmic reticulum in muscle fibers acts as a specialized calcium reservoir that pumps Ca²⁺ into the cytosol to stimulate contraction."
                },
                {
                    "id": "ch1_m10_q06",
                    "question": "Cells producing large quantities of steroid hormones, such as adrenal cortical cells and Leydig cells of testes, are rich in:",
                    "options": [
                        "Rough Endoplasmic Reticulum",
                        "Smooth Endoplasmic Reticulum",
                        "Lysosomes",
                        "Chloroplasts"
                    ],
                    "answer": "Smooth Endoplasmic Reticulum",
                    "explanation": "Because steroid hormones are synthesized from cholesterol by lipid-metabolizing enzymes, steroidogenic cells are abundant in SER."
                },
                {
                    "id": "ch1_m10_q07",
                    "question": "Which organelle membrane is directly continuous with the outer membrane of the nuclear envelope?",
                    "options": [
                        "Golgi apparatus",
                        "Endoplasmic reticulum",
                        "Plasma membrane",
                        "Lysosome"
                    ],
                    "answer": "Endoplasmic reticulum",
                    "explanation": "The outer nuclear membrane is structurally and functionally continuous with the membrane of the endoplasmic reticulum."
                },
                {
                    "id": "ch1_m10_q08",
                    "question": "Who discovered and named the Endoplasmic Reticulum in 1945 using electron microscopy?",
                    "options": [
                        "Keith Porter, Albert Claude, and Ernest Fullam",
                        "Camillo Golgi",
                        "Christian de Duve",
                        "George Palade"
                    ],
                    "answer": "Keith Porter, Albert Claude, and Ernest Fullam",
                    "explanation": "Keith Porter, Albert Claude, and Ernest Fullam discovered the lace-like ER network in cultured cells using electron microscopy in 1945."
                },
                {
                    "id": "ch1_m10_q09",
                    "question": "When cells are mechanically homogenized, the fragmented membranes of the endoplasmic reticulum re-vesiculate to form experimental particles called:",
                    "options": [
                        "Microsomes",
                        "Peroxisomes",
                        "Lysosomes",
                        "Liposomes"
                    ],
                    "answer": "Microsomes",
                    "explanation": "Microsomes are small vesicular artifacts formed from broken fragments of ER when cells are disrupted during centrifugation."
                },
                {
                    "id": "ch1_m10_q10",
                    "question": "Nissl's granules found in the cyton (cell body) and dendrites of neurons are composed of:",
                    "options": [
                        "RER and free ribosomes",
                        "SER and lipids",
                        "Golgi cisternae",
                        "Mitochondrial cristae"
                    ],
                    "answer": "RER and free ribosomes",
                    "explanation": "Nissl granules in neurons are prominent clumps of rough endoplasmic reticulum and free polyribosomes engaged in high-volume neurotransmitter/protein synthesis."
                }
            ]
        },
        {
            "id": "m11",
            "title": "Golgi Apparatus: Packaging, Secretion & Macromolecular Modification",
            "summary": "Structure and polarity of the Golgi complex, glycosylation of proteins/lipids, and formation of secretory vesicles and lysosomes.",
            "theoryHtml": "\n<p>The <strong>Golgi apparatus</strong> (or Golgi complex) was discovered in 1898 by Italian neurohistologist <strong>Camillo Golgi</strong> using silver nitrate impregnation ('black reaction') in nerve cells of the barn owl and cat. In plant cells and lower invertebrates, the Golgi apparatus consists of discrete, unconnected sub-units dispersed throughout the cytoplasm termed <strong>dictyosomes</strong>.</p>\n<p>The Golgi complex consists of parallel stacks of flattened, curved, membrane-bound sacs called <strong>cisternae</strong> (typically 0.5 µm to 1.0 µm in diameter), accompanied by associated tubules and vesicles. It displays distinct morphological and functional polarity:\n<ul>\n<li><strong>Cis face (forming or entry face):</strong> The convex surface facing the rough ER and nucleus, which receives transport vesicles budding from the ER.</li>\n<li><strong>Trans face (maturing or exit face):</strong> The concave surface facing the plasma membrane, which pinches off secretory vesicles, transport vesicles, and primary lysosomes.</li>\n</ul>\n</p>\n<p>The Golgi acts as the primary 'postal and packaging center' of the cell. As proteins and lipids transit from the cis to trans cisternae, they undergo crucial modifications:\n<ol>\n<li><strong>Glycosylation:</strong> Attachment of carbohydrate moieties to proteins and lipids to form <strong>glycoproteins</strong> and <strong>glycolipids</strong>.</li>\n<li><strong>Sulfation and Phosphorylation:</strong> Addition of sulfate and phosphate groups to target proteins to specific cellular destinations.</li>\n<li><strong>Formation of Lysosomes:</strong> Enzymatic sorting and budding of primary lysosomes containing acid hydrolases.</li>\n</ol>\nIn plants, the Golgi apparatus synthesizes complex cell wall polysaccharides (pectins and hemicelluloses) during cell plate formation.</p>\n",
            "pointsToRemember": [
                "Camillo Golgi discovered the Golgi apparatus in 1898 using silver staining in nerve cells.",
                "In plant cells, dispersed unconnected Golgi stacks are called dictyosomes.",
                "Golgi is polarized into a convex cis (entry) face and a concave trans (maturing) face; it glycosylates proteins and lipids."
            ],
            "keyNotes": [
                "Golgi Apparatus = Cellular post office. Functions: Modification, glycosylation (glycoproteins/glycolipids), packaging, secretory vesicle & lysosome formation."
            ],
            "questions": [
                {
                    "id": "ch1_m11_q01",
                    "question": "Who discovered the Golgi apparatus in 1898 using a silver nitrate impregnation staining technique in neural tissue?",
                    "options": [
                        "Camillo Golgi",
                        "Santiago Ramón y Cajal",
                        "Robert Hooke",
                        "Albert Claude"
                    ],
                    "answer": "Camillo Golgi",
                    "explanation": "Camillo Golgi discovered the reticular network in owl neurons in 1898 and shared the 1906 Nobel Prize with Ramón y Cajal."
                },
                {
                    "id": "ch1_m11_q02",
                    "question": "In plant cells, the dispersed and unconnected individual stacks of Golgi cisternae are commonly known as:",
                    "options": [
                        "Dictyosomes",
                        "Polysomes",
                        "Mesosomes",
                        "Desmosomes"
                    ],
                    "answer": "Dictyosomes",
                    "explanation": "Plant Golgi units are non-compact and scattered throughout the cytosol, referred to specifically as dictyosomes."
                },
                {
                    "id": "ch1_m11_q03",
                    "question": "Which face of the Golgi apparatus receives transport vesicles newly budded from the Rough Endoplasmic Reticulum?",
                    "options": [
                        "Trans (maturing) face",
                        "Cis (forming) face",
                        "Basal lamina",
                        "Tonoplast"
                    ],
                    "answer": "Cis (forming) face",
                    "explanation": "The convex cis face (forming face) is oriented toward the ER and receives transition vesicles containing newly synthesized proteins."
                },
                {
                    "id": "ch1_m11_q04",
                    "question": "The Golgi apparatus is the primary intracellular site for the synthesis of which biochemical conjugates?",
                    "options": [
                        "Glycoproteins and glycolipids",
                        "DNA and RNA",
                        "ATP and NADH",
                        "Cellulose and starch only"
                    ],
                    "answer": "Glycoproteins and glycolipids",
                    "explanation": "Glycosyltransferase enzymes in the Golgi lumen attach sugar residues to proteins and lipids, generating glycoproteins and glycolipids."
                },
                {
                    "id": "ch1_m11_q05",
                    "question": "Which organelle acts as the 'cellular post office' by sorting, modifying, and tagging macromolecules for delivery to specific targets?",
                    "options": [
                        "Golgi apparatus",
                        "Mitochondrion",
                        "Centriole",
                        "Peroxisome"
                    ],
                    "answer": "Golgi apparatus",
                    "explanation": "The Golgi apparatus sorts, packages, and routes proteins and lipids into specific secretory vesicles, lysosomes, or plasma membrane domains."
                },
                {
                    "id": "ch1_m11_q06",
                    "question": "During the division of plant cells, the cell plate is initiated by vesicle coalescence from which organelle?",
                    "options": [
                        "Golgi apparatus (dictyosomes)",
                        "Mitochondria",
                        "Lysosomes",
                        "Centrosome"
                    ],
                    "answer": "Golgi apparatus (dictyosomes)",
                    "explanation": "Golgi-derived vesicles carry pectin and cell wall precursors to the equatorial plane to form the phragmoplast and cell plate during plant cytokinesis."
                },
                {
                    "id": "ch1_m11_q07",
                    "question": "The acrosome of a mature mammalian sperm cell, which contains egg-penetrating enzymes, is derived from which organelle?",
                    "options": [
                        "Golgi apparatus",
                        "Endoplasmic reticulum",
                        "Mitochondria",
                        "Centrosome"
                    ],
                    "answer": "Golgi apparatus",
                    "explanation": "During spermiogenesis, the Golgi apparatus of the spermatid condenses at the anterior pole of the sperm head to form the enzymatic acrosome cap."
                },
                {
                    "id": "ch1_m11_q08",
                    "question": "Secretory vesicles carrying digestive enzymes or hormones bud off from which face of the Golgi apparatus?",
                    "options": [
                        "Trans (exit) face",
                        "Cis (entry) face",
                        "Nuclear envelope",
                        "Ribosomal groove"
                    ],
                    "answer": "Trans (exit) face",
                    "explanation": "Secretory vesicles bud from the concave trans (maturing/exit) face of the Golgi apparatus to fuse with the plasma membrane."
                },
                {
                    "id": "ch1_m11_q09",
                    "question": "Cells that are actively engaged in extensive protein secretion (such as pancreatic acinar cells and goblet cells) have:",
                    "options": [
                        "A very well-developed Golgi apparatus",
                        "No Golgi apparatus",
                        "Only smooth ER",
                        "Few mitochondria"
                    ],
                    "answer": "A very well-developed Golgi apparatus",
                    "explanation": "Secretory cells require massive packaging and processing capacity, resulting in an exceptionally prominent, extensive Golgi complex."
                },
                {
                    "id": "ch1_m11_q10",
                    "question": "Which organelle is responsible for packaging and forming primary lysosomes in eukaryotic cells?",
                    "options": [
                        "Golgi apparatus",
                        "Peroxisome",
                        "Mitochondrion",
                        "Nucleolus"
                    ],
                    "answer": "Golgi apparatus",
                    "explanation": "Primary lysosomes bud off directly from the trans-Golgi network after hydrolytic enzymes tagged with mannose-6-phosphate are sorted."
                }
            ]
        },
        {
            "id": "m12",
            "title": "Lysosomes: Hydrolytic Enzymes & Autophagy Mechanisms",
            "summary": "Lysosomal biochemistry, acid hydrolases, suicidal bag mechanism, autophagy, and lysosomal storage disorders.",
            "theoryHtml": "\n<p><strong>Lysosomes</strong> were discovered in 1955 by Belgian biochemist <strong>Christian de Duve</strong> (who was awarded the Nobel Prize in 1974). They are spherical, single-membrane-bound vesicles (0.2 µm to 0.5 µm in diameter) that bud from the trans-Golgi network, functioning as the primary digestive and waste disposal system of animal cells.</p>\n<p>Lysosomes contain a battery of approximately 50 different <strong>acid hydrolytic enzymes</strong> (acid hydrolases), including proteases, lipases, nucleases (DNase, RNase), glycosidases, and acid phosphatases (the marker enzyme of lysosomes). These enzymes operate optimally at an acidic pH of <strong>4.5 to 5.0</strong>. The acidic luminal pH is actively maintained by an ATP-driven proton pump ($\text{H}^+$-ATPase) embedded in the lysosomal membrane.</p>\n<p>Lysosomes are termed <strong>\"suicidal bags\"</strong> of the cell because if the cell is damaged, dying, or subjected to starvation, lysosomal membranes rupture and release their hydrolytic enzymes into the cytoplasm, digesting the host cell itself (a process termed <strong>autolysis</strong>).</p>\n<p>Lysosomes exhibit polymorphic stages:\n<ol>\n<li><strong>Primary lysosomes:</strong> Newly formed vesicles carrying inactive acid hydrolases.</li>\n<li><strong>Secondary lysosomes (heterophagosomes):</strong> Formed by the fusion of a primary lysosome with a phagosome or pinosome, actively digesting engulfed food or pathogens.</li>\n<li><strong>Autophagosomes (autolysosomes):</strong> Fusion of lysosomes with damaged cellular organelles (e.g., aged mitochondria) to recycle cellular constituents (<strong>autophagy</strong>, whose mechanism won Yoshinori Ohsumi the 2016 Nobel Prize).</li>\n<li><strong>Residual bodies:</strong> Lysosomes containing undigested debris, normally expelled by exocytosis. Defective enzymes cause <strong>lysosomal storage diseases</strong>, such as <strong>Tay-Sachs disease</strong> (deficiency of hexosaminidase A causing toxic accumulation of gangliosides in the brain).</li>\n</ol>\n</p>\n",
            "pointsToRemember": [
                "Christian de Duve discovered lysosomes in 1955; they are known as the 'suicidal bags' of the cell.",
                "Lysosomes contain ~50 acid hydrolases operating at optimal acidic pH 4.5–5.0 maintained by an H⁺ pump.",
                "Autophagy is the lysosomal degradation of damaged organelles (Ohsumi Nobel Prize 2016); failure causes storage disorders like Tay-Sachs."
            ],
            "keyNotes": [
                "Lysosomes = Suicidal bags of cell. Single membrane. Contain acid hydrolases (optimum pH ~4.5–5.0). Marker enzyme: Acid phosphatase."
            ],
            "questions": [
                {
                    "id": "ch1_m12_q01",
                    "question": "Which organelle is popularly referred to as the 'suicidal bag' of the cell?",
                    "options": [
                        "Lysosome",
                        "Mitochondrion",
                        "Ribosome",
                        "Centrosome"
                    ],
                    "answer": "Lysosome",
                    "explanation": "Lysosomes are called 'suicidal bags' because their hydrolytic enzymes can digest and destroy the host cell itself (autolysis) if their membrane ruptures."
                },
                {
                    "id": "ch1_m12_q02",
                    "question": "Who discovered lysosomes in 1955 and was awarded the Nobel Prize in Physiology or Medicine in 1974?",
                    "options": [
                        "Christian de Duve",
                        "George Palade",
                        "Camillo Golgi",
                        "Robert Brown"
                    ],
                    "answer": "Christian de Duve",
                    "explanation": "Belgian biochemist Christian de Duve discovered lysosomes in 1955 using differential centrifugation and enzyme assays."
                },
                {
                    "id": "ch1_m12_q03",
                    "question": "Lysosomal enzymes operate optimally at which internal luminal pH?",
                    "options": [
                        "Acidic pH around 4.5–5.0",
                        "Neutral pH 7.0–7.4",
                        "Alkaline pH 8.5–9.0",
                        "Strongly basic pH 11.0"
                    ],
                    "answer": "Acidic pH around 4.5–5.0",
                    "explanation": "Lysosomal hydrolases are acid hydrolases whose catalytic activity is maximized in an acidic environment (pH 4.5 to 5.0)."
                },
                {
                    "id": "ch1_m12_q04",
                    "question": "How is the acidic internal pH of a lysosome continuously maintained?",
                    "options": [
                        "By passive diffusion of hydrochloric acid",
                        "By an active ATP-driven proton (H⁺) pump in the lysosomal membrane",
                        "By the breakdown of carbonic acid",
                        "By basic sodium bicarbonate secretion"
                    ],
                    "answer": "By an active ATP-driven proton (H⁺) pump in the lysosomal membrane",
                    "explanation": "A membrane-bound V-type H⁺-ATPase pump uses ATP hydrolysis to pump protons into the lumen against a concentration gradient, maintaining pH 4.5–5.0."
                },
                {
                    "id": "ch1_m12_q05",
                    "question": "The enzymatic digestion of a cell's own aged or damaged organelles (e.g., worn-out mitochondria) is called:",
                    "options": [
                        "Autophagy",
                        "Phagocytosis",
                        "Pinocytosis",
                        "Plasmolysis"
                    ],
                    "answer": "Autophagy",
                    "explanation": "Autophagy ('self-eating') is the conserved catabolic mechanism wherein cells deliver dysfunctional organelles to lysosomes for degradation and recycling."
                },
                {
                    "id": "ch1_m12_q06",
                    "question": "Which Japanese scientist won the 2016 Nobel Prize in Physiology or Medicine for elucidating the mechanisms of autophagy?",
                    "options": [
                        "Yoshinori Ohsumi",
                        "Shinya Yamanaka",
                        "Tasuku Honjo",
                        "Satoshi Omura"
                    ],
                    "answer": "Yoshinori Ohsumi",
                    "explanation": "Yoshinori Ohsumi was awarded the 2016 Nobel Prize for discovering the genes and morphological pathways regulating autophagy."
                },
                {
                    "id": "ch1_m12_q07",
                    "question": "Which of the following is considered the standard diagnostic marker enzyme for lysosomes?",
                    "options": [
                        "Acid phosphatase",
                        "Cytochrome oxidase",
                        "Catalase",
                        "DNA polymerase"
                    ],
                    "answer": "Acid phosphatase",
                    "explanation": "Acid phosphatase is universally present in lysosomes and serves as the definitive biochemical marker enzyme for identifying lysosomes."
                },
                {
                    "id": "ch1_m12_q08",
                    "question": "Tay-Sachs disease is a fatal hereditary lysosomal storage disorder caused by the deficiency of which enzyme?",
                    "options": [
                        "Hexosaminidase A",
                        "Glucocerebrosidase",
                        "Sphingomyelinase",
                        "Acid lipase"
                    ],
                    "answer": "Hexosaminidase A",
                    "explanation": "Deficiency of beta-hexosaminidase A prevents the breakdown of GM2 gangliosides, leading to their toxic accumulation in neurons and causing Tay-Sachs disease."
                },
                {
                    "id": "ch1_m12_q09",
                    "question": "How many membranes surround a functional lysosome?",
                    "options": [
                        "A single unit membrane",
                        "Double membrane",
                        "Triple membrane",
                        "No membrane"
                    ],
                    "answer": "A single unit membrane",
                    "explanation": "Unlike mitochondria and chloroplasts which are double-membraned, lysosomes are surrounded by a single lipid bilayer membrane."
                },
                {
                    "id": "ch1_m12_q10",
                    "question": "During metamorphosis of a tadpole into an adult frog, the disappearance of the tadpole's tail is brought about by:",
                    "options": [
                        "Lysosomal autolytic digestion of tail tissue",
                        "Mechanical shedding of the tail",
                        "Hormonal dehydration",
                        "Bacterial decay"
                    ],
                    "answer": "Lysosomal autolytic digestion of tail tissue",
                    "explanation": "Thyroid hormone triggers programmed cell death (apoptosis) and lysosomal autolysis in the tadpole tail, digesting and recycling its tissues into the body."
                }
            ]
        },
        {
            "id": "m13",
            "title": "Mitochondria: Cristae, Matrix & Cellular Respiration Energy Generation",
            "summary": "Mitochondrial ultrastructure, cristae, F0-F1 ATP synthase particles, Krebs cycle, and endosymbiotic maternal inheritance.",
            "theoryHtml": "\n<p><strong>Mitochondria</strong> (singular: mitochondrion) are the <strong>\"powerhouses of the cell\"</strong>, responsible for aerobic cellular respiration and generating the bulk of cellular chemical energy in the form of <strong>Adenosine Triphosphate (ATP)</strong>. They were first observed in insect striated muscle by Albert von Kölliker (1850), described as <em>bioblasts</em> by Richard Altmann (1890), and named <em>mitochondria</em> by Carl Benda in 1898.</p>\n<p>A mitochondrion is a double-membrane-bound, sausage-shaped or cylindrical organelle (0.5 to 1.0 µm in diameter and 1.0 to 4.1 µm in length). Its ultrastructure comprises:\n<ul>\n<li><strong>Outer Membrane:</strong> Smooth, highly permeable due to large pore-forming channel proteins called <strong>porins</strong>.</li>\n<li><strong>Intermembrane Space:</strong> The fluid-filled compartment between outer and inner membranes where protons ($\text{H}^+$) are pumped during electron transport.</li>\n<li><strong>Inner Membrane:</strong> Selectively permeable and folded into numerous convoluted infoldings called <strong>cristae</strong>. Cristae drastically increase the surface area available for respiratory enzyme complexes. Studded on the inner membrane are pin-headed particles called <strong>$F_0-F_1$ particles</strong> (oxysomes or ATP synthase complexes), which synthesize ATP by utilizing the proton motive force.</li>\n<li><strong>Mitochondrial Matrix:</strong> The internal aqueous space containing enzymes for the <strong>Krebs cycle (TCA cycle)</strong>, fatty acid $\beta$-oxidation, a single circular double-stranded DNA molecule (<strong>mtDNA</strong>), and prokaryote-like <strong>70S ribosomes</strong>.</li>\n</ul>\n</p>\n<p>Because mitochondria possess their own DNA, RNA, and ribosomes, and replicate autonomously by binary fission, they are designated <strong>semi-autonomous organelles</strong>. In humans, mitochondrial DNA is inherited almost exclusively from the mother (<strong>maternal inheritance</strong>) because the sperm's mitochondria in the tail are lost during fertilization.</p>\n",
            "pointsToRemember": [
                "Mitochondria are the 'powerhouses of the cell', producing ATP through aerobic respiration and oxidative phosphorylation.",
                "The inner membrane folds into cristae and houses F₀-F₁ ATP synthase particles (oxysomes).",
                "Mitochondria are semi-autonomous with their own circular DNA and 70S ribosomes, exhibiting maternal inheritance."
            ],
            "keyNotes": [
                "Mitochondria = Powerhouse of cell. Double membrane. Cristae increase surface area. Inner membrane has F₀-F₁ ATP synthase. Matrix houses Krebs cycle."
            ],
            "questions": [
                {
                    "id": "ch1_m13_q01",
                    "question": "Which organelle is universally known as the 'powerhouse of the cell'?",
                    "options": [
                        "Mitochondrion",
                        "Chloroplast",
                        "Golgi apparatus",
                        "Lysosome"
                    ],
                    "answer": "Mitochondrion",
                    "explanation": "Mitochondria generate over 90% of the cell's energy in the form of ATP via aerobic respiration and oxidative phosphorylation."
                },
                {
                    "id": "ch1_m13_q02",
                    "question": "The convoluted inner membrane infoldings of a mitochondrion that increase surface area for ATP synthesis are called:",
                    "options": [
                        "Cristae",
                        "Thylakoids",
                        "Cisternae",
                        "Mesosomes"
                    ],
                    "answer": "Cristae",
                    "explanation": "Cristae are the deep folds of the inner mitochondrial membrane that house the electron transport chain complexes and ATP synthases."
                },
                {
                    "id": "ch1_m13_q03",
                    "question": "The pin-head lollipop structures studded on the inner mitochondrial cristae responsible for ATP synthesis are called:",
                    "options": [
                        "F₀-F₁ particles (Oxysomes)",
                        "Quantasomes",
                        "Polysomes",
                        "Centrioles"
                    ],
                    "answer": "F₀-F₁ particles (Oxysomes)",
                    "explanation": "F₀-F₁ complexes (oxysomes/ATP synthases) utilize the proton gradient across the inner membrane to synthesize ATP from ADP and inorganic phosphate."
                },
                {
                    "id": "ch1_m13_q04",
                    "question": "The biochemical enzymes for the Krebs cycle (Citric Acid Cycle) are localized inside which mitochondrial compartment?",
                    "options": [
                        "Mitochondrial matrix",
                        "Intermembrane space",
                        "Outer membrane",
                        "Nucleus"
                    ],
                    "answer": "Mitochondrial matrix",
                    "explanation": "The soluble enzymes catalyzing the Krebs cycle reside in the mitochondrial matrix (except succinate dehydrogenase, which is membrane-bound)."
                },
                {
                    "id": "ch1_m13_q05",
                    "question": "Why are mitochondria termed 'semi-autonomous organelles'?",
                    "options": [
                        "They possess their own circular DNA, 70S ribosomes, and can divide by binary fission",
                        "They can survive outside the cell indefinitely",
                        "They produce their own glucose from sunlight",
                        "They do not require any nuclear-encoded proteins"
                    ],
                    "answer": "They possess their own circular DNA, 70S ribosomes, and can divide by binary fission",
                    "explanation": "Mitochondria contain their own genetic genome (mtDNA) and translation machinery (70S ribosomes) and replicate independently by fission, making them semi-autonomous."
                },
                {
                    "id": "ch1_m13_q06",
                    "question": "In humans, mitochondrial DNA (mtDNA) is transmitted to offspring through:",
                    "options": [
                        "Maternal inheritance (from mother only)",
                        "Paternal inheritance (from father only)",
                        "Equal biparental inheritance",
                        "Y-chromosome linkage"
                    ],
                    "answer": "Maternal inheritance (from mother only)",
                    "explanation": "During human fertilization, the ovum contributes virtually all cytoplasm and mitochondria; the sperm contributes only nuclear DNA, resulting in maternal inheritance of mtDNA."
                },
                {
                    "id": "ch1_m13_q07",
                    "question": "Who introduced the term 'mitochondria' in 1898?",
                    "options": [
                        "Carl Benda",
                        "Richard Altmann",
                        "Albert von Kölliker",
                        "George Palade"
                    ],
                    "answer": "Carl Benda",
                    "explanation": "Carl Benda coined the term 'mitochondria' (from Greek mitos = thread, chondros = granule) in 1898."
                },
                {
                    "id": "ch1_m13_q08",
                    "question": "Which of the following human mature cells uniquely lacks mitochondria and relies solely on anaerobic glycolysis for energy?",
                    "options": [
                        "Mature red blood cells (erythrocytes)",
                        "Hepatocytes",
                        "Cardiac myocytes",
                        "Neurons"
                    ],
                    "answer": "Mature red blood cells (erythrocytes)",
                    "explanation": "Mature human erythrocytes lack a nucleus, mitochondria, and other organelles, maximizing hemoglobin packing and preventing oxygen consumption during transport."
                },
                {
                    "id": "ch1_m13_q09",
                    "question": "The high permeability of the outer mitochondrial membrane to small molecules is due to the presence of:",
                    "options": [
                        "Porins",
                        "Aquaporins",
                        "Connexins",
                        "Cadherins"
                    ],
                    "answer": "Porins",
                    "explanation": "Porins are pore-forming transmembrane proteins that form large aqueous channels in the outer mitochondrial membrane, permitting free passage of molecules up to 5 kDa."
                },
                {
                    "id": "ch1_m13_q10",
                    "question": "According to the Endosymbiotic Theory (proposed by Lynn Margulis), mitochondria evolved from:",
                    "options": [
                        "Engulfed aerobic alpha-proteobacteria",
                        "Photosynthetic cyanobacteria",
                        "Primitive fungi",
                        "Ancient viruses"
                    ],
                    "answer": "Engulfed aerobic alpha-proteobacteria",
                    "explanation": "Lynn Margulis showed that mitochondria originated when an ancient anaerobic ancestral eukaryote engulfed an aerobic alpha-proteobacterium in a mutualistic endosymbiosis."
                }
            ]
        },
        {
            "id": "m14",
            "title": "Plastids: Chloroplasts, Chromoplasts & Leucoplasts",
            "summary": "Classification of plastids, chloroplast ultrastructure (grana, thylakoids, stroma), chromoplast pigments, and leucoplast storage types.",
            "theoryHtml": "\n<p><strong>Plastids</strong> are major double-membrane organelles found in all plant cells and photosynthetic protists (such as <em>Euglena</em>), first named by Ernst Haeckel in 1866. Based on the type of pigments they contain and their storage functions, German botanist A.F.W. Schimper classified plastids into three primary categories:</p>\n<p><strong>1. Chloroplasts:</strong> Green plastids containing the light-absorbing pigments <strong>chlorophyll a</strong>, <strong>chlorophyll b</strong>, and carotenoids, specialized for carrying out photosynthesis.\n<ul>\n<li>Like mitochondria, chloroplasts are semi-autonomous, double-membrane organelles containing circular DNA, 70S ribosomes, and RNA.</li>\n<li>The interior is divided into two distinct regions: the aqueous matrix called the <strong>stroma</strong> (which houses the soluble enzymes for the dark reaction/Calvin cycle, $\text{CO}_2$ fixation by RuBisCO) and an organized internal membrane network of flattened disc-like sacs called <strong>thylakoids</strong>.</li>\n<li>Thylakoids are stacked like piles of coins into units termed <strong>grana</strong> (singular: granum), interconnected by flat membranous tubules called <strong>stroma lamellae</strong>. The thylakoid membranes contain chlorophyll and carry out the photochemical <strong>light reactions</strong> of photosynthesis.</li>\n</ul>\n</p>\n<p><strong>2. Chromoplasts:</strong> Colored plastids containing fat-soluble <strong>carotenoid pigments</strong> (carotenes and xanthophylls), giving yellow, orange, and red colors to flowers, ripe fruits (e.g., lycopene in tomatoes), and autumn leaves to attract pollinating insects and seed-dispersing animals.</p>\n<p><strong>3. Leucoplasts:</strong> Colorless, non-pigmented plastids specialized for nutrient storage, categorized by the storage macromolecule:\n<ul>\n<li><strong>Amyloplasts:</strong> Store carbohydrates as starch (e.g., in potato tubers, rice, and wheat grains).</li>\n<li><strong>Elaioplasts (Lipidoplasts):</strong> Store lipids, fats, and oils (e.g., in mustard and castor seeds).</li>\n<li><strong>Aleuroplasts (Proteinoplasts):</strong> Store proteins (e.g., in maize grain aleurone layer).</li>\n</ul>\n</p>\n",
            "pointsToRemember": [
                "Plastids are categorized into Chloroplasts (green, photosynthesis), Chromoplasts (colored carotenoids), and Leucoplasts (colorless storage).",
                "Chloroplasts consist of grana (thylakoid stacks for light reactions) and stroma (matrix for dark reactions/Calvin cycle).",
                "Leucoplast types: Amyloplasts store starch, Elaioplasts store oils/fats, Aleuroplasts store proteins."
            ],
            "keyNotes": [
                "Plastids: Chloroplasts (chlorophyll + light reaction in grana, dark reaction in stroma). Chromoplasts (carotenoids). Leucoplasts (Amyloplast/Elaioplast/Aleuroplast)."
            ],
            "questions": [
                {
                    "id": "ch1_m14_q01",
                    "question": "Which type of plastids are colorless and specialized for storing nutrients such as starch, oils, or proteins?",
                    "options": [
                        "Leucoplasts",
                        "Chromoplasts",
                        "Chloroplasts",
                        "Phaeoplasts"
                    ],
                    "answer": "Leucoplasts",
                    "explanation": "Leucoplasts are non-pigmented plastids found in non-photosynthetic plant tissues (roots, seeds, tubers) dedicated to nutrient storage."
                },
                {
                    "id": "ch1_m14_q02",
                    "question": "In a chloroplast, the stacked coin-like structures formed by thylakoid discs where light reactions occur are called:",
                    "options": [
                        "Grana",
                        "Stroma",
                        "Cisternae",
                        "Cristae"
                    ],
                    "answer": "Grana",
                    "explanation": "Grana (singular: granum) are stacks of thylakoid membranes where chlorophyll absorbs light energy and generates ATP and NADPH."
                },
                {
                    "id": "ch1_m14_q03",
                    "question": "The enzymatic reactions of the Calvin cycle (dark reaction of photosynthesis) take place in which chloroplast compartment?",
                    "options": [
                        "Stroma",
                        "Thylakoid lumen",
                        "Inner membrane",
                        "Intermembrane space"
                    ],
                    "answer": "Stroma",
                    "explanation": "The fluid stroma of the chloroplast contains the soluble enzymes (including RuBisCO) required for CO₂ fixation into sugars during the dark reaction."
                },
                {
                    "id": "ch1_m14_q04",
                    "question": "Amyloplasts are specialized leucoplasts responsible for storing:",
                    "options": [
                        "Starch (carbohydrates)",
                        "Oils and fats",
                        "Proteins",
                        "Chlorophyll"
                    ],
                    "answer": "Starch (carbohydrates)",
                    "explanation": "Amyloplasts synthesize and store starch granules, abundant in potato tubers and cereal grains."
                },
                {
                    "id": "ch1_m14_q05",
                    "question": "The characteristic red color of ripe tomatoes and red chili peppers is primarily due to which carotenoid pigment in chromoplasts?",
                    "options": [
                        "Lycopene",
                        "Anthocyanin",
                        "Chlorophyll b",
                        "Fucoxanthin"
                    ],
                    "answer": "Lycopene",
                    "explanation": "Lycopene is a bright red carotene pigment concentrated in the chromoplasts of ripening tomatoes, watermelons, and red peppers."
                },
                {
                    "id": "ch1_m14_q06",
                    "question": "Which of the following leucoplasts specifically stores fats and vegetable oils?",
                    "options": [
                        "Elaioplasts",
                        "Amyloplasts",
                        "Aleuroplasts",
                        "Etioplasts"
                    ],
                    "answer": "Elaioplasts",
                    "explanation": "Elaioplasts (also called oleoplasts or lipidoplasts) store essential oils and fats, commonly found in oil seeds like castor and sunflower."
                },
                {
                    "id": "ch1_m14_q07",
                    "question": "Why can a green raw tomato turn into a bright red ripe tomato?",
                    "options": [
                        "Chloroplasts transform into chromoplasts with chlorophyll degradation and carotenoid accumulation",
                        "Leucoplasts turn into amyloplasts",
                        "The tomato produces anthocyanins in the cell wall",
                        "The cells lose their vacuoles"
                    ],
                    "answer": "Chloroplasts transform into chromoplasts with chlorophyll degradation and carotenoid accumulation",
                    "explanation": "During fruit ripening, chloroplast thylakoids break down, chlorophyll degrades, and massive amounts of red lycopene carotenoids accumulate, transforming them into chromoplasts."
                },
                {
                    "id": "ch1_m14_q08",
                    "question": "What type of ribosomes are found in the chloroplast stroma?",
                    "options": [
                        "70S ribosomes",
                        "80S ribosomes",
                        "60S ribosomes",
                        "50S ribosomes only"
                    ],
                    "answer": "70S ribosomes",
                    "explanation": "Like prokaryotes and mitochondria, the semi-autonomous chloroplast stroma contains 70S ribosomes (consisting of 50S and 30S subunits)."
                },
                {
                    "id": "ch1_m14_q09",
                    "question": "Tubular membranous channels that connect adjacent grana across the stroma are called:",
                    "options": [
                        "Stroma lamellae (frets)",
                        "Cisternae",
                        "Cristae",
                        "Plasmodesmata"
                    ],
                    "answer": "Stroma lamellae (frets)",
                    "explanation": "Stroma lamellae (fret membranes) are flat membranous tubules connecting separate thylakoid stacks (grana) throughout the stroma."
                },
                {
                    "id": "ch1_m14_q10",
                    "question": "Aleuroplasts are leucoplasts specialized for the storage of:",
                    "options": [
                        "Proteins",
                        "Starch",
                        "Lipids",
                        "Glycogen"
                    ],
                    "answer": "Proteins",
                    "explanation": "Aleuroplasts (proteinoplasts) contain crystalline protein reserves, especially prominent in the aleurone layer of cereal grains."
                }
            ]
        },
        {
            "id": "m15",
            "title": "Centrosome, Centrioles & Spindle Apparatus Organization",
            "summary": "Ultrastructure of the centrosome and centrioles, 9+0 triplet microtubule architecture, and organization of cilia/flagella basal bodies.",
            "theoryHtml": "\n<p>The <strong>centrosome</strong> is the primary microtubule-organizing center (MTOC) in animal cells, first observed by Edouard van Beneden (1883) and characterized by Theodor Boveri (1888). It is a non-membrane-bound organelle located in the cytoplasm adjacent to the cell nucleus.</p>\n<p>A centrosome consists of two barrel-shaped cylindrical structures called <strong>centrioles</strong> that lie perpendicular to each other, surrounded by an amorphous proteinaceous matrix known as the <strong>pericentriolar material (PCM)</strong>.</p>\n<p><strong>Centriole Ultrastructure:</strong>\n<ul>\n<li>Under the electron microscope, a centriole displays a distinctive <strong>'cartwheel'</strong> cross-sectional architecture.</li>\n<li>The wall is composed of nine evenly spaced peripheral <strong>triplet microtubules</strong> made of the protein <strong>tubulin</strong> arranged in a circle, with no central microtubule. This spatial arrangement is designated the <strong>9 + 0 pattern</strong>.</li>\n<li>Each triplet consists of three sub-fibers designated A, B, and C (A-microtubule is complete with 13 protofilaments, while B and C share protofilaments). Adjacent triplets are linked by protein bridges (A-C linkers).</li>\n<li>The central hub is proteinaceous and connected to the peripheral triplets by nine radial protein <strong>spokes</strong>.</li>\n</ul>\n</p>\n<p><strong>Functional Roles:</strong>\n<ol>\n<li><strong>Mitotic Spindle Organization:</strong> During cell division, the centrosome duplicates, and the two centrosomes migrate to opposite poles of the cell, nucleating spindle fibers (microtubules) to orchestrate chromosome alignment and separation.</li>\n<li><strong>Basal Bodies:</strong> Centrioles give rise to the <strong>basal bodies</strong> (kinetosomes) that anchor and template the axoneme of eukaryotic cilia and flagella (which display a 9 + 2 microtubule doublet arrangement).</li>\n</ol>\nHigher plant cells lack centrosomes and centrioles entirely, yet they organize mitotic spindles successfully using non-centrosomal cytoplasmic microtubule arrays.</p>\n",
            "pointsToRemember": [
                "Centrosomes contain two mutually perpendicular centrioles exhibiting a 9 + 0 triplet microtubule cartwheel pattern.",
                "They organize mitotic spindle fibers in animal cells and form the basal bodies of cilia and flagella.",
                "Higher flowering plants lack centrosomes and centrioles."
            ],
            "keyNotes": [
                "Centrosome: 2 perpendicular centrioles, 9 + 0 triplet tubulin arrangement (cartwheel). MTOC of animal cells; forms spindle apparatus & basal bodies."
            ],
            "questions": [
                {
                    "id": "ch1_m15_q01",
                    "question": "What is the structural microtubule arrangement pattern in a centriole?",
                    "options": [
                        "9 + 0 triplet pattern",
                        "9 + 2 doublet pattern",
                        "9 + 1 singlet pattern",
                        "8 + 2 pattern"
                    ],
                    "answer": "9 + 0 triplet pattern",
                    "explanation": "Centrioles possess nine peripheral triplet microtubules arranged in a ring with no central microtubule, designated the 9 + 0 pattern."
                },
                {
                    "id": "ch1_m15_q02",
                    "question": "The primary role of the centrosome in animal cells during cell division is to:",
                    "options": [
                        "Synthesize ribosomal RNA",
                        "Organize the mitotic spindle fibers to separate chromosomes",
                        "Produce ATP for cytokinesis",
                        "Digest the nuclear membrane"
                    ],
                    "answer": "Organize the mitotic spindle fibers to separate chromosomes",
                    "explanation": "The centrosome serves as the microtubule-organizing center (MTOC) that nucleates and organizes spindle microtubules for chromosome segregation."
                },
                {
                    "id": "ch1_m15_q03",
                    "question": "Which major kingdom of eukaryotic organisms completely lacks centrioles in its normal somatic cell division?",
                    "options": [
                        "Higher plant kingdom (Angiosperms & Gymnosperms)",
                        "Animal kingdom",
                        "Protista",
                        "Lower aquatic flagellates"
                    ],
                    "answer": "Higher plant kingdom (Angiosperms & Gymnosperms)",
                    "explanation": "Higher vascular plants divide by anastral mitosis and lack centrosomes/centrioles, forming mitotic spindles via diffuse MTOCs."
                },
                {
                    "id": "ch1_m15_q04",
                    "question": "Centrioles form the anchor structure at the base of eukaryotic cilia and flagella, known as the:",
                    "options": [
                        "Basal body (Kinetosome)",
                        "Acrosome",
                        "Centromere",
                        "Blepharoplast"
                    ],
                    "answer": "Basal body (Kinetosome)",
                    "explanation": "A centriole migrates to the cell cortex to form the basal body, which acts as the nucleation template for the axoneme of cilia and flagella."
                },
                {
                    "id": "ch1_m15_q05",
                    "question": "The characteristic cross-sectional appearance of a centriole under electron microscopy is compared to a:",
                    "options": [
                        "Cartwheel",
                        "Honeycomb",
                        "Double helix",
                        "Lollipop"
                    ],
                    "answer": "Cartwheel",
                    "explanation": "The radial spokes radiating from the central protein hub to the 9 peripheral triplets give the centriole a classic 'cartwheel' appearance."
                },
                {
                    "id": "ch1_m15_q06",
                    "question": "Which protein polymerizes to form the microtubules of centrioles and the mitotic spindle?",
                    "options": [
                        "Tubulin",
                        "Actin",
                        "Myosin",
                        "Dynein"
                    ],
                    "answer": "Tubulin",
                    "explanation": "Microtubules are hollow cylindrical polymers assembled from heterodimers of α-tubulin and β-tubulin."
                },
                {
                    "id": "ch1_m15_q07",
                    "question": "In a non-dividing animal cell, the two centrioles of the centrosome are positioned:",
                    "options": [
                        "Perpendicular (at right angles) to each other",
                        "End-to-end in a straight line",
                        "Parallel to each other",
                        "Inside the nucleolus"
                    ],
                    "answer": "Perpendicular (at right angles) to each other",
                    "explanation": "Within the centrosome, the mother and daughter centrioles are oriented perpendicular (at 90 degrees) to one another."
                },
                {
                    "id": "ch1_m15_q08",
                    "question": "During which phase of the eukaryotic cell cycle does centriole duplication take place in animal cells?",
                    "options": [
                        "S phase (Synthesis phase)",
                        "G₁ phase",
                        "G₂ phase",
                        "M phase (Metaphase)"
                    ],
                    "answer": "S phase (Synthesis phase)",
                    "explanation": "Centriole duplication in the cytoplasm occurs synchronously with nuclear DNA replication during the S phase of interphase."
                },
                {
                    "id": "ch1_m15_q09",
                    "question": "The amorphous, protein-dense cloud surrounding the centrioles that nucleates microtubules is called:",
                    "options": [
                        "Pericentriolar material (PCM)",
                        "Chromatin",
                        "Nucleoplasm",
                        "Sarcoplasm"
                    ],
                    "answer": "Pericentriolar material (PCM)",
                    "explanation": "The pericentriolar material is an amorphous mass of proteins (including γ-tubulin ring complexes) that nucleates and anchors spindle microtubules."
                },
                {
                    "id": "ch1_m15_q10",
                    "question": "The motile axoneme of a eukaryotic cilium or flagellum differs from a centriole by having which microtubule arrangement?",
                    "options": [
                        "9 + 2 doublet pattern",
                        "9 + 0 triplet pattern",
                        "8 + 0 pattern",
                        "Single central microtubule only"
                    ],
                    "answer": "9 + 2 doublet pattern",
                    "explanation": "The axoneme of cilia and flagella has 9 peripheral doublet microtubules and 2 central singlet microtubules (9 + 2 doublet arrangement)."
                }
            ]
        },
        {
            "id": "m16",
            "title": "Peroxisomes, Glyoxysomes, Vacuoles & Cytoskeletal Filaments",
            "summary": "Microbodies including peroxisomes and glyoxysomes, vacuolar osmoregulation, and the structural network of the cytoskeleton.",
            "theoryHtml": "\n<p>In addition to major organelles, eukaryotic cells contain small, single-membrane-bound vesicular microbodies and a protein filament skeleton:</p>\n<p><strong>1. Peroxisomes:</strong> Ubiquitous microbodies discovered by Christian de Duve, containing oxidative enzymes such as urate oxidase, D-amino acid oxidase, and abundant <strong>catalase</strong>. They perform fatty acid $\\beta$-oxidation and break down toxic hydrogen peroxide ($\\text{H}_2\\text{O}_2$), a hazardous byproduct of cellular metabolism:\n$$2\\text{H}_2\\text{O}_2 \\xrightarrow{\\text{Catalase}} 2\\text{H}_2\\text{O} + \\text{O}_2$$\nIn photosynthetic plant leaves, peroxisomes collaborate with chloroplasts and mitochondria to execute <strong>photorespiration</strong> (the $\\text{C}_2$ cycle).</p>\n<p><strong>2. Glyoxysomes:</strong> Specialized plant microbodies present in germinating oil-rich seeds (e.g., castor, groundnut) containing enzymes of the <strong>glyoxylate cycle</strong>, which converts stored lipids (fatty acids) into soluble carbohydrates (sucrose) until the seedling can photosynthesize.</p>\n<p><strong>3. Vacuoles:</strong> Non-cytoplasmic cavities bounded by the <strong>tonoplast</strong>. In plants, the central vacuole stores water, cell sap, inorganic ions, and anthocyanin pigments, maintaining hydrostatic turgor. In freshwater protozoans (like <em>Amoeba</em>), <strong>contractile vacuoles</strong> act as osmoregulatory pumps expelling excess water, while <strong>food vacuoles</strong> digest engulfed prey.</p>\n<p><strong>4. Cytoskeleton:</strong> An elaborate three-dimensional network of filamentous protein polymers extending throughout the cytosol, comprising:\n<ul>\n<li><strong>Microfilaments (Actin):</strong> 7 nm diameter, responsible for amoeboid movement, cytokinesis cleavage furrow, and cyclosis.</li>\n<li><strong>Intermediate Filaments (Keratin, Vimentin, Neurofilaments):</strong> 8–12 nm diameter, providing mechanical tensile strength to resist cellular deformation.</li>\n<li><strong>Microtubules (Tubulin):</strong> 25 nm hollow cylinders, forming the spindle apparatus, centrioles, cilia, and flagella, and serving as tracks for kinesin and dynein motor proteins.</li>\n</ul>\n</p>\n",
            "pointsToRemember": [
                "Peroxisomes contain catalase, which rapidly degrades toxic H₂O₂ into H₂O and O₂.",
                "Glyoxysomes convert stored fatty acids into sugars in germinating oil seeds via the glyoxylate cycle.",
                "The cytoskeleton consists of microfilaments (actin, 7 nm), intermediate filaments (10 nm), and microtubules (tubulin, 25 nm)."
            ],
            "keyNotes": [
                "Microbodies: Peroxisomes (H₂O₂ breakdown via catalase; photorespiration). Glyoxysomes (fats → carbohydrates). Vacuoles (tonoplast, osmoregulation)."
            ],
            "questions": [
                {
                    "id": "ch1_m16_q01",
                    "question": "Which enzyme present in peroxisomes rapidly decomposes toxic hydrogen peroxide into water and oxygen?",
                    "options": [
                        "Catalase",
                        "Lysozyme",
                        "Pepsin",
                        "Amylase"
                    ],
                    "answer": "Catalase",
                    "explanation": "Catalase is the signature enzyme of peroxisomes, catalyzing the reaction 2H₂O₂ → 2H₂O + O₂ to prevent oxidative damage."
                },
                {
                    "id": "ch1_m16_q02",
                    "question": "Specialized microbodies found in germinating fatty seeds that convert stored lipids into carbohydrates are called:",
                    "options": [
                        "Glyoxysomes",
                        "Lysosomes",
                        "Centrosomes",
                        "Dictyosomes"
                    ],
                    "answer": "Glyoxysomes",
                    "explanation": "Glyoxysomes contain the enzymes of the glyoxylate cycle, allowing oil-rich seeds to convert stored triglycerides into glucose for seedling growth."
                },
                {
                    "id": "ch1_m16_q03",
                    "question": "In freshwater protozoa like Amoeba, which organelle plays the crucial role in osmoregulation and water excretion?",
                    "options": [
                        "Contractile vacuole",
                        "Food vacuole",
                        "Gas vacuole",
                        "Peroxisome"
                    ],
                    "answer": "Contractile vacuole",
                    "explanation": "The contractile vacuole collects excess water entering the hypotonic protozoan cell and periodically contracts to pump it outside, preventing lysis."
                },
                {
                    "id": "ch1_m16_q04",
                    "question": "Which trio of cell organelles cooperatively participates in the photorespiration (C₂ cycle) of plant leaves?",
                    "options": [
                        "Chloroplast, Peroxisome, and Mitochondrion",
                        "Chloroplast, Golgi, and Lysosome",
                        "Mitochondrion, Endoplasmic Reticulum, and Nucleus",
                        "Vacuole, Ribosome, and Centrosome"
                    ],
                    "answer": "Chloroplast, Peroxisome, and Mitochondrion",
                    "explanation": "Photorespiration involves a coordinated shuttle of glycolate, glyoxylate, and glycine among chloroplasts, peroxisomes, and mitochondria."
                },
                {
                    "id": "ch1_m16_q05",
                    "question": "Which cytoskeletal component has the smallest diameter (~7 nm) and is composed of actin protein?",
                    "options": [
                        "Microfilaments",
                        "Microtubules",
                        "Intermediate filaments",
                        "Collagen fibers"
                    ],
                    "answer": "Microfilaments",
                    "explanation": "Actin microfilaments are the thinnest cytoskeletal filaments (~7 nm in diameter), responsible for cell shape changes, amoeboid motion, and cytokinesis."
                },
                {
                    "id": "ch1_m16_q06",
                    "question": "The contractile ring that pinches an animal cell into two during cytokinesis is formed by:",
                    "options": [
                        "Actin microfilaments and myosin",
                        "Microtubules",
                        "Intermediate filaments",
                        "Tubulin dimers"
                    ],
                    "answer": "Actin microfilaments and myosin",
                    "explanation": "A purse-string-like contractile ring of actin microfilaments and myosin motor proteins constricts the cleavage furrow to split animal daughter cells."
                },
                {
                    "id": "ch1_m16_q07",
                    "question": "Microtubules are hollow cylindrical polymers assembled from heterodimers of which protein?",
                    "options": [
                        "Tubulin",
                        "Actin",
                        "Keratin",
                        "Flagellin"
                    ],
                    "answer": "Tubulin",
                    "explanation": "Microtubules are composed of α-tubulin and β-tubulin heterodimers that polymerize into hollow cylinders approximately 25 nm in outer diameter."
                },
                {
                    "id": "ch1_m16_q08",
                    "question": "Which intermediate filament protein provides structural toughness to human hair, nails, and the epidermis?",
                    "options": [
                        "Keratin",
                        "Actin",
                        "Myosin",
                        "Elastin"
                    ],
                    "answer": "Keratin",
                    "explanation": "Keratin is an abundant intermediate filament protein that forms the structural framework of epithelial tissues, hair, nails, and horns."
                },
                {
                    "id": "ch1_m16_q09",
                    "question": "Which organelle membrane contains specialized solute transport proteins that concentrate ions and wastes against gradients into the plant sap?",
                    "options": [
                        "Tonoplast",
                        "Nuclear envelope",
                        "Thylakoid membrane",
                        "Cristae"
                    ],
                    "answer": "Tonoplast",
                    "explanation": "The tonoplast membrane actively transports ions into the vacuolar lumen, maintaining internal vacuolar concentrations much higher than the cytoplasm."
                },
                {
                    "id": "ch1_m16_q10",
                    "question": "Motor proteins like kinesin and dynein move vesicles and organelles along which cytoskeletal tracks?",
                    "options": [
                        "Microtubules",
                        "Actin filaments",
                        "Collagen fibrils",
                        "Chromatin fibers"
                    ],
                    "answer": "Microtubules",
                    "explanation": "Kinesins and dyneins are molecular motor proteins that use ATP to walk along microtubule tracks, transporting cargo through the cell."
                }
            ]
        },
        {
            "id": "m17",
            "title": "Cell Nucleus, Nuclear Envelope, Nucleolus & Chromatin Organization",
            "summary": "Structure of the nucleus, nuclear pore complexes, nucleolar ribosome assembly, and euchromatin vs heterochromatin.",
            "theoryHtml": "\n<p>The <strong>cell nucleus</strong> is the principal repository of genetic information and the master control center of eukaryotic life, orchestrating gene expression, protein synthesis, and cell division. It was discovered in 1831 by Scottish botanist <strong>Robert Brown</strong> in orchid cells.</p>\n<p>The nucleus is bounded by a <strong>nuclear envelope</strong> consisting of two concentric lipid bilayer membranes separated by a perinuclear space (10 to 50 nm wide):\n<ul>\n<li>The <strong>outer nuclear membrane</strong> is studded with ribosomes and continuous with the Rough ER.</li>\n<li>The <strong>inner nuclear membrane</strong> is lined internally by the <strong>nuclear lamina</strong>, a meshwork of intermediate filament proteins (lamins) providing structural support and chromatin anchoring.</li>\n<li>At numerous points, the inner and outer membranes fuse to form <strong>nuclear pores</strong> (approximately 100 nm across). Each pore is plugged by an elaborate octagonal <strong>Nuclear Pore Complex (NPC)</strong>, which selectively regulates bidirectional macromolecular traffic (importing histones and polymerases, exporting processed mRNA, tRNA, and ribosomal subunits).</li>\n</ul>\n</p>\n<p>Inside the nucleus is the semi-fluid <strong>nucleoplasm</strong> (nuclear sap), which suspends the <strong>nucleolus</strong> and <strong>chromatin</strong>:\n<ul>\n<li><strong>Nucleolus:</strong> A dense, non-membrane-bound spherical body discovered by Felice Fontana (1781) and described by Gabriel Valentin (1836). It is the <strong>'ribosome factory'</strong> of the cell, where ribosomal RNA (rRNA) is actively transcribed by RNA polymerase I and assembled with ribosomal proteins into 40S and 60S subunits. Cells with high protein synthesis rates (e.g., oocytes, secretory cells) possess large, multiple nucleoli.</li>\n<li><strong>Chromatin:</strong> The loose, uncoiled, fibrous complex of double-stranded DNA wrapped around basic histone proteins. Walther Flemming (1879) coined the term chromatin. Chromatin exists in two functional states:\n  <ul>\n  <li><strong>Euchromatin:</strong> Lightly staining, loosely condensed, transcriptionally active chromatin rich in active genes.</li>\n  <li><strong>Heterochromatin:</strong> Deeply staining, tightly coiled, transcriptionally silent or inert chromatin (e.g., the inactivated female X-chromosome known as the <strong>Barr body</strong>).</li>\n  </ul>\n</li>\n</ul>\n</p>\n",
            "pointsToRemember": [
                "Robert Brown discovered the nucleus in 1831. Nuclear pores regulate macromolecular transport via the Nuclear Pore Complex.",
                "The nucleolus is the 'ribosome factory' where rRNA is transcribed and assembled into ribosomal subunits.",
                "Euchromatin is lightly staining and transcriptionally active; heterochromatin is densely packed and transcriptionally inactive."
            ],
            "keyNotes": [
                "Nucleus = Master organelle. Nucleolus = rRNA synthesis & ribosome factory. Euchromatin = active; Heterochromatin = inactive."
            ],
            "questions": [
                {
                    "id": "ch1_m17_q01",
                    "question": "Which organelle is considered the master control center and genetic storehouse of the eukaryotic cell?",
                    "options": [
                        "Nucleus",
                        "Mitochondrion",
                        "Golgi apparatus",
                        "Ribosome"
                    ],
                    "answer": "Nucleus",
                    "explanation": "The nucleus houses the genomic DNA and directs all cellular activities by controlling transcription and protein synthesis."
                },
                {
                    "id": "ch1_m17_q02",
                    "question": "The dense, non-membrane-bound subnuclear structure responsible for synthesizing ribosomal RNA (rRNA) is the:",
                    "options": [
                        "Nucleolus",
                        "Centrosome",
                        "Peroxisome",
                        "Kinetochore"
                    ],
                    "answer": "Nucleolus",
                    "explanation": "The nucleolus is the site of rRNA transcription, processing, and assembly of ribosomal subunits (the 'ribosome factory')."
                },
                {
                    "id": "ch1_m17_q03",
                    "question": "Who discovered the cell nucleus in 1831?",
                    "options": [
                        "Robert Brown",
                        "Robert Hooke",
                        "Theodor Schwann",
                        "Rudolf Virchow"
                    ],
                    "answer": "Robert Brown",
                    "explanation": "Scottish botanist Robert Brown discovered and named the nucleus in 1831 while studying orchid plant cells."
                },
                {
                    "id": "ch1_m17_q04",
                    "question": "The structural meshwork of intermediate filaments lining the inner surface of the inner nuclear membrane is called the:",
                    "options": [
                        "Nuclear lamina",
                        "Nuclear pores",
                        "Nucleoplasm",
                        "Pellicle"
                    ],
                    "answer": "Nuclear lamina",
                    "explanation": "The nuclear lamina is composed of lamin proteins that provide mechanical rigidity to the nuclear envelope and anchor chromatin loops."
                },
                {
                    "id": "ch1_m17_q05",
                    "question": "What is the primary function of nuclear pore complexes?",
                    "options": [
                        "To allow selective bidirectional transport of macromolecules between nucleus and cytoplasm",
                        "To generate ATP for nuclear movement",
                        "To replicate chromosomal DNA",
                        "To synthesize phospholipids"
                    ],
                    "answer": "To allow selective bidirectional transport of macromolecules between nucleus and cytoplasm",
                    "explanation": "Nuclear pore complexes act as selective molecular gateways, importing nuclear proteins and exporting synthesized RNA and ribosomal subunits."
                },
                {
                    "id": "ch1_m17_q06",
                    "question": "Euchromatin differs from heterochromatin in being:",
                    "options": [
                        "Loosely packed and transcriptionally active",
                        "Densely packed and genetically inert",
                        "Devoid of DNA",
                        "Located outside the nucleus"
                    ],
                    "answer": "Loosely packed and transcriptionally active",
                    "explanation": "Euchromatin is relaxed, open chromatin that stains lightly and contains active genes undergoing transcription."
                },
                {
                    "id": "ch1_m17_q07",
                    "question": "Who coined the term 'chromatin' in 1879 for the stained thread-like nuclear material?",
                    "options": [
                        "Walther Flemming",
                        "Robert Brown",
                        "Gregor Mendel",
                        "W. Waldeyer"
                    ],
                    "answer": "Walther Flemming",
                    "explanation": "German anatomist Walther Flemming coined the term 'chromatin' in 1879 because of its strong affinity for basic aniline dyes."
                },
                {
                    "id": "ch1_m17_q08",
                    "question": "The condensed, transcriptionally inactive X-chromosome observed in the somatic cell nuclei of normal mammalian females is called a:",
                    "options": [
                        "Barr body",
                        "Centromere",
                        "Polysome",
                        "Kinetochore"
                    ],
                    "answer": "Barr body",
                    "explanation": "Murray Barr discovered the Barr body, which is the facultatively heterochromatinized, inactivated X-chromosome in female somatic cells."
                },
                {
                    "id": "ch1_m17_q09",
                    "question": "Which of the following mature mammalian cells completely lacks a nucleus at maturity?",
                    "options": [
                        "Mature erythrocyte (RBC)",
                        "Lymphocyte",
                        "Neuron",
                        "Hepatocyte"
                    ],
                    "answer": "Mature erythrocyte (RBC)",
                    "explanation": "Mammalian red blood cells extrude their nucleus during maturation to maximize room for hemoglobin and oxygen transport."
                },
                {
                    "id": "ch1_m17_q10",
                    "question": "The space between the outer and inner membranes of the nuclear envelope is known as the:",
                    "options": [
                        "Perinuclear space",
                        "Peroxisome",
                        "Stroma",
                        "Lumen of ER"
                    ],
                    "answer": "Perinuclear space",
                    "explanation": "The perinuclear space is the 10 to 50 nm fluid-filled gap separating the inner and outer nuclear membranes."
                }
            ]
        },
        {
            "id": "m18",
            "title": "Chromosome Structure, Telomeres, Centromeres & Human Karyotype",
            "summary": "Chromosome morphology, centromeric classification, telomeric protection, and the 46-chromosome human karyotype.",
            "theoryHtml": "\n<p>Chromosomes are high-order compacted packages of chromatin visible as distinct rod-like bodies under the light microscope during cell division. The term <strong>chromosome</strong> (colored body) was coined by German anatomist <strong>Heinrich von Waldeyer-Hartz</strong> in 1888.</p>\n<p><strong>Chromosome Architecture:</strong>\n<ul>\n<li><strong>Centromere (Primary Constriction):</strong> A clear constricted region on the chromosome holding sister chromatids together. On either side of the centromere sits a disc-shaped protein complex called the <strong>kinetochore</strong>, which serves as the physical attachment site for mitotic spindle microtubules.</li>\n<li><strong>Chromosome Arms:</strong> The centromere divides the chromosome into two arms: the shorter arm designated <strong>p</strong> (from French <em>petit</em>) and the longer arm designated <strong>q</strong>.</li>\n<li><strong>Telomeres:</strong> Specialized non-coding repetitive DNA sequences ($\text{TTAGGG}$ in vertebrates) and associated shelterin proteins capping the physical ends of linear chromosomes. Telomeres prevent chromosome degradation, end-to-end fusion, and genomic instability. Telomeres shorten with successive cell divisions, acting as a biological aging clock. The enzyme <strong>telomerase</strong> (discovered by Elizabeth Blackburn, Carol Greider, and Jack Szostak, Nobel Prize 2009) elongates telomeres, active in germ cells and cancer cells.</li>\n<li><strong>Secondary Constriction & SAT Chromosomes:</strong> Non-staining secondary constrictions associate with the Nucleolar Organizer Region (NOR). The chromosomal knob distal to the secondary constriction is termed a <strong>satellite</strong> (SAT chromosome). In humans, chromosomes 13, 14, 15, 21, and 22 are acrocentric SAT chromosomes.</li>\n</ul>\n</p>\n<p><strong>Classification based on Centromere Position:</strong>\n<ol>\n<li><strong>Metacentric:</strong> Centromere in the center, giving two equal arms (V-shaped during anaphase).</li>\n<li><strong>Sub-metacentric:</strong> Centromere slightly off-center, producing one slightly shorter arm and one longer arm (L-shaped).</li>\n<li><strong>Acrocentric:</strong> Centromere situated close to one end, producing one extremely short arm and one very long arm (J-shaped).</li>\n<li><strong>Telocentric:</strong> Centromere at the absolute terminal tip (I-shaped; absent in normal human karyotype).</li>\n</ol>\n</p>\n<p><strong>Human Karyotype:</strong> Normal human somatic cells possess <strong>46 chromosomes</strong> arranged in <strong>23 pairs</strong>: 22 pairs of <strong>autosomes</strong> (numbered 1 to 22 in order of decreasing size) and 1 pair of <strong>sex chromosomes (allosomes)</strong> ($XX$ in females, $XY$ in males).</p>\n",
            "pointsToRemember": [
                "Chromosomes have a primary constriction (centromere) with protein kinetochores where spindle fibers attach.",
                "Based on centromere position, chromosomes are Metacentric (V), Sub-metacentric (L), Acrocentric (J), or Telocentric (I).",
                "Human karyotype has 46 chromosomes (23 pairs: 22 pairs autosomes + 1 pair sex chromosomes XX/XY)."
            ],
            "keyNotes": [
                "Waldeyer (1888) coined 'chromosome'. Telomeres cap chromosome ends (TTAGGG repeats). Karyotype = 2n = 46."
            ],
            "questions": [
                {
                    "id": "ch1_m18_q01",
                    "question": "Who coined the scientific term 'chromosome' in 1888?",
                    "options": [
                        "Heinrich von Waldeyer-Hartz",
                        "Walther Flemming",
                        "Gregor Mendel",
                        "Hugo de Vries"
                    ],
                    "answer": "Heinrich von Waldeyer-Hartz",
                    "explanation": "W. Waldeyer coined the term 'chromosome' in 1888 to designate the deeply staining nuclear bodies."
                },
                {
                    "id": "ch1_m18_q02",
                    "question": "The protein disc located on either side of the centromere to which spindle microtubules attach during cell division is the:",
                    "options": [
                        "Kinetochore",
                        "Telomere",
                        "Chromomere",
                        "Nucleosome"
                    ],
                    "answer": "Kinetochore",
                    "explanation": "The kinetochore is a trilaminar protein complex assembled on the centromere that captures spindle microtubules to move chromosomes."
                },
                {
                    "id": "ch1_m18_q03",
                    "question": "A chromosome with its centromere located exactly in the middle, forming two equal arms (V-shaped during anaphase), is classified as:",
                    "options": [
                        "Metacentric",
                        "Sub-metacentric",
                        "Acrocentric",
                        "Telocentric"
                    ],
                    "answer": "Metacentric",
                    "explanation": "Metacentric chromosomes have a median centromere dividing the chromosome into two equal arms, assuming a V-shape during anaphase."
                },
                {
                    "id": "ch1_m18_q04",
                    "question": "The specialized repetitive nucleotide sequences capping and protecting the terminal ends of linear eukaryotic chromosomes are called:",
                    "options": [
                        "Telomeres",
                        "Centromeres",
                        "Satellites",
                        "Plasmids"
                    ],
                    "answer": "Telomeres",
                    "explanation": "Telomeres are protective cap structures consisting of non-coding repetitive DNA (TTAGGG) that prevent chromosomal fraying and end-to-end fusion."
                },
                {
                    "id": "ch1_m18_q05",
                    "question": "The short arm of a sub-metacentric or acrocentric chromosome is designated by the letter:",
                    "options": [
                        "p arm",
                        "q arm",
                        "s arm",
                        "t arm"
                    ],
                    "answer": "p arm",
                    "explanation": "The short arm is labeled 'p' (for French petit), while the longer arm is designated 'q'."
                },
                {
                    "id": "ch1_m18_q06",
                    "question": "What is the normal diploid (2n) chromosome number in a human somatic cell?",
                    "options": [
                        "46 chromosomes (23 pairs)",
                        "44 chromosomes",
                        "48 chromosomes",
                        "23 chromosomes"
                    ],
                    "answer": "46 chromosomes (23 pairs)",
                    "explanation": "Normal human somatic cells are diploid (2n = 46), consisting of 22 pairs of autosomes and 1 pair of sex chromosomes."
                },
                {
                    "id": "ch1_m18_q07",
                    "question": "Which chromosome morphology has the centromere located at the extreme terminal tip, forming an I-shape during anaphase?",
                    "options": [
                        "Telocentric",
                        "Metacentric",
                        "Acrocentric",
                        "Sub-metacentric"
                    ],
                    "answer": "Telocentric",
                    "explanation": "Telocentric chromosomes have a strictly terminal centromere (though normal human karyotypes lack telocentric chromosomes)."
                },
                {
                    "id": "ch1_m18_q08",
                    "question": "The enzyme telomerase, which prevents the progressive shortening of telomeres in germ and cancer cells, was discovered by:",
                    "options": [
                        "Blackburn, Greider, and Szostak",
                        "Watson and Crick",
                        "Meselson and Stahl",
                        "Jacob and Monod"
                    ],
                    "answer": "Blackburn, Greider, and Szostak",
                    "explanation": "Elizabeth Blackburn, Carol Greider, and Jack Szostak discovered telomerase and telomere maintenance, winning the 2009 Nobel Prize."
                },
                {
                    "id": "ch1_m18_q09",
                    "question": "In a human karyotype, the sex chromosomal complement of a normal biological male is:",
                    "options": [
                        "44 autosomes + XY",
                        "44 autosomes + XX",
                        "44 autosomes + YY",
                        "45 autosomes + X0"
                    ],
                    "answer": "44 autosomes + XY",
                    "explanation": "A normal male karyotype is 46,XY (22 pairs of homologous autosomes plus heteromorphic sex chromosomes X and Y)."
                },
                {
                    "id": "ch1_m18_q10",
                    "question": "Chromosomes possessing a secondary constriction that demarcates a terminal rounded knob are called:",
                    "options": [
                        "SAT chromosomes (Satellite chromosomes)",
                        "Polytene chromosomes",
                        "Lampbrush chromosomes",
                        "Isochromosomes"
                    ],
                    "answer": "SAT chromosomes (Satellite chromosomes)",
                    "explanation": "SAT chromosomes have a secondary constriction (Sine Acid Thymonucleinico) setting off a distal chromosomal satellite."
                }
            ]
        },
        {
            "id": "m19",
            "title": "Mitosis & Cell Cycle: Interphase, M-Phase & Cytokinesis",
            "summary": "Phases of the cell cycle (G1, S, G2), stages of mitosis (Prophase, Metaphase, Anaphase, Telophase), and animal vs plant cytokinesis.",
            "theoryHtml": "\n<p>The <strong>Cell Cycle</strong> is the coordinated sequence of events by which a cell duplicates its genome, synthesizes other cellular constituents, and eventually divides into two daughter cells. The cycle is divided into two broad phases: <strong>Interphase</strong> (occupying ~95% of cell cycle duration) and the <strong>M Phase (Mitosis)</strong>.</p>\n<p><strong>Interphase (Non-dividing, Preparatory Phase):</strong>\n<ul>\n<li><strong>$G_1$ Phase (Gap 1):</strong> Active metabolic growth, protein and RNA synthesis, cell size enlargement; cell monitors internal and external cues at the restriction point. Cells that cease division exit into a quiescent, metabolically active non-dividing state termed the <strong>$G_0$ phase</strong> (e.g., adult neurons, heart muscle cells).</li>\n<li><strong>S Phase (Synthesis Phase):</strong> Precise <strong>DNA replication</strong> occurs. The DNA content doubles ($2C \rightarrow 4C$), but the chromosome number remains unchanged ($2n \rightarrow 2n$). In animal cells, the centrosome duplicates in the cytoplasm.</li>\n<li><strong>$G_2$ Phase (Gap 2):</strong> Synthesis of tubulin and spindle proteins, cell growth, and preparation for entry into mitosis.</li>\n</ul>\n</p>\n<p><strong>Mitosis (Equational Division):</strong> Produces two genetically identical daughter cells maintaining the diploid ($2n$) chromosome number. It proceeds through four continuous stages:\n<ol>\n<li><strong>Prophase:</strong> Chromatin condenses into distinct visible chromosomes (each consisting of two sister chromatids joined at the centromere). Centrosomes migrate to opposite poles. The nucleolus and nuclear envelope disintegrate.</li>\n<li><strong>Metaphase:</strong> Spindle fibers attach to the kinetochores of chromosomes. Chromosomes align along the central equatorial plane of the cell, forming the <strong>metaphase plate</strong>. Chromosome morphology is best studied at metaphase.</li>\n<li><strong>Anaphase:</strong> The centromere splits synchronously, and sister chromatids separate into individual daughter chromosomes, which are pulled toward opposite spindle poles by shortening kinetochore microtubules. Chromosome shape (V, L, J, I) is best observed at anaphase.</li>\n<li><strong>Telophase:</strong> Chromosomes arrive at opposite poles, decondense back into diffuse chromatin, the nuclear envelope reassembles around each set, and the nucleolus reforms.</li>\n</ol>\n</p>\n<p><strong>Cytokinesis (Cytoplasmic Division):</strong>\nIn animal cells, cytokinesis occurs by the formation of a <strong>cleavage furrow</strong> in the plasma membrane, which deepens centripetally (from outside inward). In plant cells, cytokinesis occurs centrifugally (from center outward) through the synthesis of a <strong>cell plate</strong> derived from Golgi vesicles (phragmoplast), which matures into the middle lamella and primary cell wall.</p>\n",
            "pointsToRemember": [
                "Interphase comprises G₁ (growth), S (DNA replication doubles DNA from 2C to 4C, chromosome count remains 2n), and G₂ (spindle preparation).",
                "Mitosis has 4 stages: Prophase (condensation), Metaphase (equatorial alignment), Anaphase (centromere splitting), Telophase (nuclear reformation).",
                "Cytokinesis in animal cells occurs via a cleavage furrow (centripetal); in plant cells via a cell plate (centrifugal)."
            ],
            "keyNotes": [
                "Mitosis = Equational division (2n → 2n). Chromosome morphology studied at Metaphase; shape studied at Anaphase. G₀ = quiescent phase."
            ],
            "questions": [
                {
                    "id": "ch1_m19_q01",
                    "question": "During which phase of the eukaryotic cell cycle does DNA replication take place, causing the DNA content to double?",
                    "options": [
                        "S phase (Synthesis phase)",
                        "G₁ phase",
                        "G₂ phase",
                        "Prophase"
                    ],
                    "answer": "S phase (Synthesis phase)",
                    "explanation": "During the S phase (Synthesis phase) of interphase, nuclear DNA is replicated, doubling DNA quantity from 2C to 4C while chromosome number remains constant."
                },
                {
                    "id": "ch1_m19_q02",
                    "question": "In which stage of mitosis do chromosomes align neatly along the equatorial plane (metaphase plate) of the cell?",
                    "options": [
                        "Metaphase",
                        "Anaphase",
                        "Prophase",
                        "Telophase"
                    ],
                    "answer": "Metaphase",
                    "explanation": "During metaphase, spindle fibers align all condensed chromosomes at the equatorial plane, forming the metaphase plate."
                },
                {
                    "id": "ch1_m19_q03",
                    "question": "In which phase of mitosis do centromeres split and sister chromatids separate to move to opposite poles?",
                    "options": [
                        "Anaphase",
                        "Metaphase",
                        "Telophase",
                        "Prophase"
                    ],
                    "answer": "Anaphase",
                    "explanation": "Centromere splitting and sister chromatid disjunction occur synchronously at the onset of anaphase."
                },
                {
                    "id": "ch1_m19_q04",
                    "question": "At which mitotic stage is the size, number, and morphology of chromosomes most clearly studied under a light microscope?",
                    "options": [
                        "Metaphase",
                        "Anaphase",
                        "Prophase",
                        "Interphase"
                    ],
                    "answer": "Metaphase",
                    "explanation": "Chromosomes reach their maximum degree of condensation and are spread out on the equatorial plate during metaphase, making it ideal for karyotyping."
                },
                {
                    "id": "ch1_m19_q05",
                    "question": "Cells that cease dividing and enter a dormant, quiescent metabolic state (such as adult neurons) are said to reside in the:",
                    "options": [
                        "G₀ phase (Quiescent stage)",
                        "S phase",
                        "M phase",
                        "G₂ phase"
                    ],
                    "answer": "G₀ phase (Quiescent stage)",
                    "explanation": "Cells that exit the cell cycle without dividing enter the G₀ phase (quiescent phase); they remain metabolically active but do not proliferate."
                },
                {
                    "id": "ch1_m19_q06",
                    "question": "How does cytokinesis differ between dividing plant and animal cells?",
                    "options": [
                        "Animal cells divide centripetally by a cleavage furrow; plant cells divide centrifugally by a cell plate",
                        "Plant cells divide by a cleavage furrow; animal cells form a cell plate",
                        "Plant cells do not divide cytoplasm",
                        "Animal cells form a cell plate from Golgi vesicles"
                    ],
                    "answer": "Animal cells divide centripetally by a cleavage furrow; plant cells divide centrifugally by a cell plate",
                    "explanation": "Rigid walls prevent furrowing in plant cells; they build a cell plate from the center outward (centrifugal), while animal cells pinch inward (centripetal)."
                },
                {
                    "id": "ch1_m19_q07",
                    "question": "Which stage of mitosis is characterized by the reformation of the nuclear envelope, reappearance of nucleoli, and chromosome decondensation?",
                    "options": [
                        "Telophase",
                        "Prophase",
                        "Anaphase",
                        "Metaphase"
                    ],
                    "answer": "Telophase",
                    "explanation": "Telophase is the reverse of prophase: chromosomes reach poles, decondense, nucleoli reappear, and nuclear envelopes reform around daughter nuclei."
                },
                {
                    "id": "ch1_m19_q08",
                    "question": "The mitotic spindle poison colchicine halts cell division by inhibiting the polymerization of microtubules at which stage?",
                    "options": [
                        "Metaphase",
                        "Prophase",
                        "Telophase",
                        "Interphase"
                    ],
                    "answer": "Metaphase",
                    "explanation": "Colchicine binds tubulin and prevents spindle assembly, arresting cells at metaphase (used to induce polyploidy and arrest cells for karyotyping)."
                },
                {
                    "id": "ch1_m19_q09",
                    "question": "If a diploid mammalian cell has 40 chromosomes and 2C DNA content in G₁, what will be its chromosome number and DNA content in G₂?",
                    "options": [
                        "40 chromosomes and 4C DNA",
                        "80 chromosomes and 4C DNA",
                        "40 chromosomes and 2C DNA",
                        "20 chromosomes and 2C DNA"
                    ],
                    "answer": "40 chromosomes and 4C DNA",
                    "explanation": "DNA replication in S phase doubles DNA content from 2C to 4C, but the chromosome count remains 2n = 40."
                },
                {
                    "id": "ch1_m19_q10",
                    "question": "The nuclear envelope and nucleolus disappear during which stage of mitosis?",
                    "options": [
                        "Late Prophase",
                        "Early Anaphase",
                        "Telophase",
                        "G₂ phase"
                    ],
                    "answer": "Late Prophase",
                    "explanation": "By late prophase (prometaphase), the nuclear envelope breaks down into vesicles and the nucleolus completely disperses."
                }
            ]
        },
        {
            "id": "m20",
            "title": "Meiosis: Reduction Division, Homologous Crossing Over & Genetic Recombination",
            "summary": "Mechanisms of meiosis, substages of Prophase I, synaptonemal complex, crossing over, and evolutionary significance of gametogenesis.",
            "theoryHtml": "\n<p><strong>Meiosis</strong> is the specialized form of cell division that occurs in germ cells to produce haploid gametes (sperm and ova in animals, spores in plants). First discovered by Oscar Hertwig (1876) in sea urchin eggs and described at the chromosomal level by Edouard van Beneden (1883), it reduces the chromosome number by half ($2n \rightarrow n$).</p>\n<p>Meiosis comprises two successive nuclear and cellular divisions following a single round of DNA replication:\n<ol>\n<li><strong>Meiosis I (Reductional Division):</strong> Homologous chromosome pairs separate, reducing the diploid chromosome count ($2n$) to haploid ($n$).</li>\n<li><strong>Meiosis II (Equational Division):</strong> Sister chromatids separate, analogous to normal mitosis. The end result is <strong>four genetically non-identical haploid daughter cells</strong>.</li>\n</ol>\n</p>\n<p><strong>Prophase I of Meiosis I:</strong> The most prolonged and complex phase, divided into five successive substages:\n<ol>\n<li><strong>Leptotene:</strong> Chromatin condenses into long, thin, bouquet-like threads.</li>\n<li><strong>Zygotene:</strong> Homologous maternal and paternal chromosomes pair up gene-for-gene in a process termed <strong>synapsis</strong>, facilitated by a proteinaceous zipper called the <strong>synaptonemal complex</strong>. The paired unit is a <strong>bivalent</strong> or <strong>tetrad</strong> (four chromatids).</li>\n<li><strong>Pachytene:</strong> Non-sister chromatids of homologous chromosomes exchange genetic segments—a vital process called <strong>crossing over</strong> (genetic recombination), catalyzed by the enzyme complex <strong>recombinase</strong>.</li>\n<li><strong>Diplotene:</strong> The synaptonemal complex dissolves, and homologous chromosomes begin to repel each other except at the X-shaped cross-over points called <strong>chiasmata</strong>. (In female human oocytes, diplotene arrest can last for decades until puberty).</li>\n<li><strong>Diakinesis:</strong> Chiasmata slip toward the chromosome tips (<strong>terminalization</strong>), the nucleolus disappears, and the nuclear envelope breaks down.</li>\n</ol>\n</p>\n<p><strong>Evolutionary Significance:</strong> Meiosis generates genetic variability through two independent mechanisms: reciprocal crossing over in Prophase I and random, independent assortment of maternal/paternal chromosomes at Anaphase I ($2^{23} \u0007pprox 8.4\text{ million}$ possible gametic combinations in humans). It also ensures the conservation of species chromosome number across generations.</p>\n",
            "pointsToRemember": [
                "Meiosis produces four genetically diverse haploid (n) daughter cells through two divisions (Meiosis I reductional, Meiosis II equational).",
                "Prophase I substages: Leptotene → Zygotene (synapsis) → Pachytene (crossing over via recombinase) → Diplotene (chiasmata) → Diakinesis.",
                "Crossing over between non-sister chromatids of homologous chromosomes creates new allele combinations driving evolution."
            ],
            "keyNotes": [
                "Meiosis: 2n → 4 haploid cells. Prophase I: Synapsis (Zygotene), Crossing over (Pachytene), Chiasmata (Diplotene), Terminalization (Diakinesis)."
            ],
            "questions": [
                {
                    "id": "ch1_m20_q01",
                    "question": "How many haploid daughter cells are produced at the completion of meiosis from a single diploid parent germ cell?",
                    "options": [
                        "Four haploid cells",
                        "Two diploid cells",
                        "Two haploid cells",
                        "Eight haploid cells"
                    ],
                    "answer": "Four haploid cells",
                    "explanation": "Meiosis involves two sequential cell divisions (Meiosis I and Meiosis II), yielding four haploid (n) daughter cells from one diploid (2n) germ cell."
                },
                {
                    "id": "ch1_m20_q02",
                    "question": "In which substage of Prophase I does crossing over (genetic recombination between non-sister chromatids) take place?",
                    "options": [
                        "Pachytene",
                        "Zygotene",
                        "Leptotene",
                        "Diplotene"
                    ],
                    "answer": "Pachytene",
                    "explanation": "Crossing over occurs during the pachytene stage of Prophase I, mediated by the enzyme complex recombinase."
                },
                {
                    "id": "ch1_m20_q03",
                    "question": "The pairing of homologous chromosomes (synapsis) and formation of the synaptonemal complex occurs during which substage?",
                    "options": [
                        "Zygotene",
                        "Leptotene",
                        "Pachytene",
                        "Diakinesis"
                    ],
                    "answer": "Zygotene",
                    "explanation": "During zygotene, homologous chromosomes pair lengthwise (synapsis) joined by the proteinaceous synaptonemal complex to form bivalents."
                },
                {
                    "id": "ch1_m20_q04",
                    "question": "The X-shaped physical sites of crossing over visible between homologous chromosomes during Diplotene are called:",
                    "options": [
                        "Chiasmata",
                        "Centromeres",
                        "Kinetochores",
                        "Centrosomes"
                    ],
                    "answer": "Chiasmata",
                    "explanation": "Chiasmata (singular: chiasma) are the X-shaped morphological junction points where non-sister chromatids crossed over and exchanged segments."
                },
                {
                    "id": "ch1_m20_q05",
                    "question": "Why is Meiosis I specifically called a 'reductional division'?",
                    "options": [
                        "The chromosome number is reduced from diploid (2n) to haploid (n)",
                        "The cell size is drastically reduced",
                        "The amount of cytoplasm is reduced to zero",
                        "The number of genes on each chromosome decreases"
                    ],
                    "answer": "The chromosome number is reduced from diploid (2n) to haploid (n)",
                    "explanation": "Meiosis I separates homologous chromosome pairs to opposite poles, halving the chromosome number from diploid (2n) to haploid (n)."
                },
                {
                    "id": "ch1_m20_q06",
                    "question": "The terminal shifting of chiasmata toward the ends of chromosomes during Diakinesis is known as:",
                    "options": [
                        "Terminalization",
                        "Synapsis",
                        "Disjunction",
                        "Translocation"
                    ],
                    "answer": "Terminalization",
                    "explanation": "Terminalization is the progressive migration of chiasmata from the centromeric region toward the telomeric ends during diakinesis."
                },
                {
                    "id": "ch1_m20_q07",
                    "question": "Which enzyme complex facilitates the breakage, reciprocal exchange, and rejoining of DNA strands during crossing over in pachytene?",
                    "options": [
                        "Recombinase",
                        "DNA Polymerase I",
                        "RNA Polymerase",
                        "Amylase"
                    ],
                    "answer": "Recombinase",
                    "explanation": "The recombinase multienzyme complex (including endonucleases and ligases) catalyzes homologous genetic recombination."
                },
                {
                    "id": "ch1_m20_q08",
                    "question": "In human females, oocytes enter meiotic arrest during fetal development and remain halted at which stage until ovulation after puberty?",
                    "options": [
                        "Diplotene stage of Prophase I",
                        "Pachytene stage",
                        "Metaphase II",
                        "Anaphase I"
                    ],
                    "answer": "Diplotene stage of Prophase I",
                    "explanation": "Human primary oocytes enter a prolonged resting stage called dictyate (a prolonged diplotene) that persists for 12 to 50 years until ovulation."
                },
                {
                    "id": "ch1_m20_q09",
                    "question": "Failure of homologous chromosomes or sister chromatids to separate properly during meiosis is called:",
                    "options": [
                        "Non-disjunction",
                        "Crossing over",
                        "Synapsis",
                        "Epistasis"
                    ],
                    "answer": "Non-disjunction",
                    "explanation": "Non-disjunction results in aneuploid gametes (possessing extra or missing chromosomes), leading to conditions such as Down syndrome (trisomy 21)."
                },
                {
                    "id": "ch1_m20_q10",
                    "question": "What is the primary evolutionary advantage of sexual reproduction involving meiosis?",
                    "options": [
                        "It generates new genetic combinations (variations) that natural selection can act upon",
                        "It ensures offspring are identical clones of the parent",
                        "It doubles the chromosome number in each generation",
                        "It requires no metabolic energy"
                    ],
                    "answer": "It generates new genetic combinations (variations) that natural selection can act upon",
                    "explanation": "Meiosis generates novel gene combinations via crossing over and independent assortment, driving genetic variation and biological evolution."
                }
            ]
        }
    ]
};

if (typeof window !== 'undefined') {
    window.COURSE_CHAPTER_DATA = COURSE_CHAPTER_1_BIOLOGY;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COURSE_CHAPTER_1_BIOLOGY;
}
