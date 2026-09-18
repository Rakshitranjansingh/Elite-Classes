/* =============================================================================
   ELITE CLASSES — CIVIL SERVICES: CHEMISTRY REVISION COURSE
   CHAPTER 6: CARBON, ALLOTROPES, HYDROCARBONS & ORGANIC CHEMISTRY
   - Exactly 20 Progressive Mini-Modules
   - 10 High-Yield Conceptual MCQs per Module (200 MCQs total)
   - 70% Mastery Progressive Unlocking Threshold
   - Complete Pedagogical Standard Notes & Chemical Equation Analyses
   ============================================================================= */

const COURSE_CHAPTER_6_CHEMISTRY = {
    "chapterId": "cs_chem_ch6",
    "chapterNumber": 6,
    "chapterTitle": "Carbon, Allotropes, Hydrocarbons & Organic Chemistry",
    "subject": "Chemistry",
    "cls": "Civil Services",
    "course": "revisionCourse",
    "totalModules": 20,
    "totalQuestions": 200,
    "passingPercentage": 70,
    "modules": [
        {
            "id": "m01",
            "moduleNumber": 1,
            "title": "Unique Nature of Carbon: Tetravalency, Catenation, Hybridization & Bond Energy",
            "tagline": "Carbon's central role in organic chemistry, tetravalency, strong catenation capacity (C-C bond energy 348 kJ/mol), multiple bond formation, and diverse hybridization states.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Why Carbon Dominates Organic Chemistry</h3><p>Over 10 million chemical compounds are organic carbon-based molecules. Carbon ($Z = 6$, group 14, ground state $1s^2 2s^2 2p^2$) owes this extraordinary chemical diversity to three distinct structural characteristics:</p><ol><li><b>Tetravalency</b>:<p>In excited state ($1s^2 2s^1 2p_x^1 2p_y^1 2p_z^1$), carbon has 4 unpaired electrons. It does not easily lose 4 electrons to form $C^{4+}$ (prohibitively high ionization energy) nor gain 4 electrons to form $C^{4-}$ (small nucleus cannot stabilize 10 electrons). Instead, it forms four strong, directional covalent bonds directed towards the vertices of a tetrahedron with bond angles of $109^\\circ 28'$.</p></li><li><b>Exceptional Catenation Power</b>:<p><b>Catenation</b> is the unique ability of identical atoms of an element to bind covalently to one another, forming long open chains (straight or branched) or stable closed rings:</p>$$\\mathbf{\text{Catenation Order: } C \\gg Si > Ge \u0007pprox Sn > Pb}$$<p>Carbon's catenation power is superior to silicon because the carbon-carbon single bond ($C-C$) has high bond enthalpy ($\\mathbf{348\text{ kJ/mol}}$), whereas $Si-Si$ bond enthalpy is weak ($297\text{ kJ/mol}$) due to larger atomic radius and diffuse valence orbitals.</p></li><li><b>Tendency to Form Multiple Bonds ($p\\pi - p\\pi$)</b>:<p>Because of its compact atomic radius ($77\text{ pm}$), carbon forms stable multiple bonds with itself and other small electronegative atoms ($C=C, C \\equiv C, C=O, C \\equiv N$). Silicon and heavier elements cannot effectively form $p\\pi - p\\pi$ lateral overlap bonds because their large, diffuse p-orbitals are held too far apart.</p></li></ol><h3>2. Hybridization States of Carbon</h3><table border='1' cellpadding='4' style='border-collapse:collapse;'><tr><th>Hybridization</th><th>Geometry</th><th>Bond Angle</th><th>s-Character</th><th>Example Compound</th></tr><tr><td><b>$sp^3$</b></td><td>Tetrahedral</td><td>$109.5^\\circ$</td><td>$25\\%$</td><td>Ethane ($CH_3-CH_3$), Diamond</td></tr><tr><td><b>$sp^2$</b></td><td>Trigonal Planar</td><td>$120^\\circ$</td><td>$33.3\\%$</td><td>Ethene ($H_2C=CH_2$), Graphite, Benzene</td></tr><tr><td><b>$sp$</b></td><td>Linear</td><td>$180^\\circ$</td><td>$50\\%$</td><td>Ethyne ($HC \\equiv CH$), Carbon Dioxide ($CO_2$)</td></tr></table>",
            "pointsToRemember": [
                "Carbon forms over 10 million compounds due to tetravalency, catenation, multiple bonding ($p\\pi-p\\pi$), and variable hybridization.",
                "Catenation requires high bond enthalpy: $C-C$ ($348\text{ kJ/mol}$) is much stronger than $Si-Si$ ($297\text{ kJ/mol}$).",
                "Carbon's compact size allows strong lateral $p\\pi-p\\pi$ overlap for double and triple bonds ($C=C, C \\equiv C, C=O$)."
            ],
            "keyNotes": [
                "Silicon can form chains up to only 7-8 atoms (silanes) which are highly reactive and unstable to air and moisture, whereas carbon forms stable macromolecules with millions of atoms (e.g., DNA, synthetic polymers)."
            ],
            "questions": [
                {
                    "id": "ch6_m01_q01",
                    "question": "What unique chemical property enables carbon to form millions of organic compounds in the form of long chains, branches, and rings?",
                    "options": [
                        "Catenation",
                        "Radioactive fission",
                        "Metallic conduction",
                        "High nuclear density"
                    ],
                    "answer": "Catenation",
                    "explanation": "Catenation is the self-linking of carbon atoms through strong covalent bonds into chains and rings, unmatched by any other element."
                },
                {
                    "id": "ch6_m01_q02",
                    "question": "Why is the catenation power of carbon far superior to that of its congener silicon ($Si$)?",
                    "options": [
                        "The $C-C$ bond enthalpy ($348\text{ kJ/mol}$) is significantly stronger and more stable than the $Si-Si$ bond enthalpy ($297\text{ kJ/mol}$)",
                        "Silicon does not have valence electrons",
                        "Carbon is an alkali metal",
                        "Silicon forms ionic crystals only"
                    ],
                    "answer": "The $C-C$ bond enthalpy ($348\text{ kJ/mol}$) is significantly stronger and more stable than the $Si-Si$ bond enthalpy ($297\text{ kJ/mol}$)",
                    "explanation": "Due to its small atomic radius, carbon forms strong, compact $C-C$ bonds ($348\text{ kJ/mol}$), whereas diffuse silicon orbitals yield weaker bonds."
                },
                {
                    "id": "ch6_m01_q03",
                    "question": "Why does carbon form covalent bonds rather than $C^{4+}$ cations or $C^{4-}$ anions?",
                    "options": [
                        "Losing 4 electrons requires prohibitive ionization energy, while gaining 4 electrons creates extreme electron-nuclear instability in a small nucleus",
                        "Carbon has no electrons in its valence shell",
                        "Carbon exists only at absolute zero",
                        "The carbon nucleus is radioactive"
                    ],
                    "answer": "Losing 4 electrons requires prohibitive ionization energy, while gaining 4 electrons creates extreme electron-nuclear instability in a small nucleus",
                    "explanation": "Stripping 4 electrons requires tremendous energy, and holding 10 electrons with 6 protons is electrostaticly unstable, favoring 4 covalent bonds."
                },
                {
                    "id": "ch6_m01_q04",
                    "question": "What is the hybridization state and spatial geometry of each carbon atom in methane ($CH_4$)?",
                    "options": [
                        "$sp^3$ hybridization with tetrahedral geometry ($109.5^\\circ$)",
                        "$sp^2$ with trigonal planar geometry ($120^\\circ$)",
                        "$sp$ with linear geometry ($180^\\circ$)",
                        "$sp^3d$ with trigonal bipyramidal geometry"
                    ],
                    "answer": "$sp^3$ hybridization with tetrahedral geometry ($109.5^\\circ$)",
                    "explanation": "In methane, the 4 single bonds around carbon correspond to $sp^3$ hybridization and a tetrahedral shape with $109.5^\\circ$ bond angles."
                },
                {
                    "id": "ch6_m01_q05",
                    "question": "What is the bond order and type of bonds connecting the carbon atoms in ethene ($H_2C=CH_2$)?",
                    "options": [
                        "Bond order 2, consisting of one $\\sigma$ bond and one $\\pi$ bond",
                        "Bond order 1, with one $\\sigma$ bond",
                        "Bond order 3, with one $\\sigma$ and two $\\pi$ bonds",
                        "Two purely ionic bonds"
                    ],
                    "answer": "Bond order 2, consisting of one $\\sigma$ bond and one $\\pi$ bond",
                    "explanation": "The carbon-carbon double bond in ethene comprises one strong axial $\\sigma$ bond and one lateral $p\\pi-p\\pi$ bond (bond order = 2)."
                },
                {
                    "id": "ch6_m01_q06",
                    "question": "Which of the following elements has the second highest catenation power after carbon in Group 14?",
                    "options": [
                        "Silicon ($Si$)",
                        "Germanium ($Ge$)",
                        "Lead ($Pb$)",
                        "Tin ($Sn$)"
                    ],
                    "answer": "Silicon ($Si$)",
                    "explanation": "Silicon exhibits moderate catenation up to 7–8 atoms (silanes), following the group trend $C \\gg Si > Ge \u0007pprox Sn > Pb$."
                },
                {
                    "id": "ch6_m01_q07",
                    "question": "Why can carbon easily form stable multiple bonds ($C=C, C \\equiv C$) while silicon cannot?",
                    "options": [
                        "Carbon's small atomic radius allows close atomic approach for effective lateral $p\\pi-p\\pi$ orbital overlap",
                        "Silicon has no p-orbitals",
                        "Carbon is an inert gas",
                        "Silicon atoms repel each other by magnetism"
                    ],
                    "answer": "Carbon's small atomic radius allows close atomic approach for effective lateral $p\\pi-p\\pi$ orbital overlap",
                    "explanation": "The compact 2p orbitals of carbon overlap sideways effectively, whereas larger, diffuse 3p orbitals of silicon cannot form strong $\\pi$ bonds."
                },
                {
                    "id": "ch6_m01_q08",
                    "question": "What is the state of hybridization of carbon in carbon dioxide ($CO_2$)?",
                    "options": [
                        "$sp$",
                        "$sp^2$",
                        "$sp^3$",
                        "$dsp^2$"
                    ],
                    "answer": "$sp$",
                    "explanation": "In $O=C=O$, the central carbon forms $2\\sigma$ bonds and $2\\pi$ bonds (steric number 2), giving $sp$ hybridization and linear geometry."
                },
                {
                    "id": "ch6_m01_q09",
                    "question": "What is the percentage of s-character in the carbon hybrid orbitals of ethyne ($C_2H_2$)?",
                    "options": [
                        "$50\\%$",
                        "$25\\%$",
                        "$33.33\\%$",
                        "$75\\%$"
                    ],
                    "answer": "$50\\%$",
                    "explanation": "In $sp$ hybridization, one s-orbital combines with one p-orbital, yielding $50\\%$ s-character and $50\\%$ p-character."
                },
                {
                    "id": "ch6_m01_q10",
                    "question": "Which factor directly contributes to the higher electronegativity of an $sp$-hybridized carbon compared to $sp^2$ and $sp^3$ carbons?",
                    "options": [
                        "Higher percentage of s-character ($50\\%$) brings electron density closer to the attractive nucleus",
                        "Larger atomic radius",
                        "Greater number of neutrons",
                        "Presence of vacant d-orbitals"
                    ],
                    "answer": "Higher percentage of s-character ($50\\%$) brings electron density closer to the attractive nucleus",
                    "explanation": "S-orbitals are spherical and penetrate closest to the nucleus; higher s-character ($sp > sp^2 > sp^3$) pulls electrons tighter, increasing electronegativity."
                }
            ]
        },
        {
            "id": "m02",
            "moduleNumber": 2,
            "title": "Carbon Allotropes: Diamond (Structure, Hardness, Refractive Index, Thermal Conductivity)",
            "tagline": "Crystalline allotrope of carbon, rigid 3D tetrahedral framework (sp3, 154 pm), Mohs hardness 10, electrical insulator, exceptional thermal conductivity, and high refractive index (2.42).",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Crystal Structure of Diamond</h3><p><b>Diamond</b> is a three-dimensional covalent network solid (giant macromolecule) where each carbon atom is covalently bonded to four other carbon atoms in a regular <b>tetrahedron</b> via $sp^3$ hybridization:</p><ul><li><b>Bond Length</b>: $C-C$ bond length is $\\mathbf{154\text{ pm}}$ ($1.54\text{ \\AA}$), identical to single bonds in alkanes.</li><li><b>Bond Angle</b>: $109^\\circ 28'$ ($109.5^\\circ$).</li><li><b>Face-Centered Cubic (FCC) Lattice</b>: Diamond adopts a zinc blende-like FCC crystal structure with four additional carbon atoms residing in tetrahedral interstitial sites.</li><li><b>Density</b>: $3.51\text{ g/cm}^3$ (densest natural carbon allotrope).</li></ul><h3>2. Physical Properties and Scientific Explanations</h3><ol><li><b>Extreme Hardness (Mohs Hardness 10)</b>:<p>Diamond is the hardest known natural substance. The interlocking 3D tetrahedral network requires breaking immense numbers of strong $C-C$ covalent bonds ($348\text{ kJ/mol}$ each) in every spatial direction to deform or scratch the crystal.</p></li><li><b>Electrical Insulator</b>:<p>All four valence electrons of every carbon atom are firmly localized in directional $sp^3$ $\\sigma$ bonds. There are <b>zero free or delocalized electrons</b> available for electrical conduction. Hence, pure diamond is an exceptional electrical insulator (band gap $\u0007pprox 5.5\text{ eV}$).</p></li><li><b>Extraordinary Thermal Conductivity</b>:<p>Paradoxically, while an electrical insulator, diamond is the <b>best conductor of heat at room temperature</b> ($k \u0007pprox 2000\text{ to }2200\text{ W}/(\text{m}\\cdot\text{K})$ — nearly five times higher than pure copper!). Heat is transferred not by electrons, but through <b>high-frequency phonon vibrations (acoustic lattice waves)</b> propagated with minimal scattering across its rigid, light-atom tetrahedral lattice.</p></li><li><b>Optical Brilliance & Refractive Index ($n = 2.42$)</b>:<p>Diamond has an exceptionally high refractive index of <b>2.42</b>, resulting in a very small critical angle for total internal reflection: $\theta_c = \\sin^{-1}(1/2.42) \u0007pprox \\mathbf{24.4^\\circ}$. Skilfully cut diamond facets trap incident light, reflecting it multiple times internally before exiting through the crown, producing brilliant sparkle ('fire').</p></li></ol><h3>3. Synthetic Diamond & Industrial Uses</h3><p>Synthesized by subjecting graphite to extreme temperatures ($1500\text{--}2000^\\circ\text{C}$) and pressures ($50\text{--}100\text{ kbar}$) in the presence of nickel/iron catalysts (HPHT method) or by Chemical Vapor Deposition (CVD). Impure black diamonds (called <b>Bort</b> or <b>Carbonado</b>) are used in rock-drilling core bits, glass cutters, and precision abrasive cutting tools.</p>",
            "pointsToRemember": [
                "Diamond has an $sp^3$ 3D tetrahedral lattice ($C-C$ bond length $154\text{ pm}$, density $3.51\text{ g/cm}^3$).",
                "Hardest natural substance (Mohs 10); electrical insulator due to lack of free electrons.",
                "Highest thermal conductivity at room temperature (~$2000\text{ W}/(\text{m}\\cdot\text{K})$, 5x copper) via phonon lattice vibrations.",
                "Refractive index is $2.42$, critical angle is $24.4^\\circ$, producing total internal reflection and brilliant optical fire.",
                "Industrial black diamond varieties are known as Bort and Carbonado."
            ],
            "keyNotes": [
                "Carat is the standard unit of diamond mass: 1 Carat = 200 milligrams (0.2 grams). The famous Koh-i-Noor diamond weighs 105.6 carats (21.12 grams)."
            ],
            "questions": [
                {
                    "id": "ch6_m02_q01",
                    "question": "What is the hybridization and geometric arrangement of carbon atoms in diamond?",
                    "options": [
                        "$sp^3$ hybridization in a rigid three-dimensional tetrahedral lattice",
                        "$sp^2$ hybridization in planar hexagonal layers",
                        "$sp$ hybridization in linear chains",
                        "$sp^3d^2$ in octahedral layers"
                    ],
                    "answer": "$sp^3$ hybridization in a rigid three-dimensional tetrahedral lattice",
                    "explanation": "Each carbon in diamond is covalently bonded to four others at $109.5^\\circ$ in an interlocking $sp^3$ 3D tetrahedral network."
                },
                {
                    "id": "ch6_m02_q02",
                    "question": "Why is pure diamond an electrical insulator while being an extraordinary thermal conductor?",
                    "options": [
                        "It has no free electrons for electrical conduction, but transfers heat rapidly via high-frequency lattice vibrations (phonons)",
                        "It has free mobile protons that carry heat",
                        "Its electrical conductivity is masked by its hardness",
                        "It is an ionic crystal that melts at room temperature"
                    ],
                    "answer": "It has no free electrons for electrical conduction, but transfers heat rapidly via high-frequency lattice vibrations (phonons)",
                    "explanation": "All valence electrons are locked into $sp^3$ $\\sigma$-bonds (insulator). The stiff, lightweight carbon lattice transmits vibrational acoustic phonons with minimal scattering (superb thermal conductor)."
                },
                {
                    "id": "ch6_m02_q03",
                    "question": "What is the refractive index of diamond, and why does a well-cut diamond display extraordinary optical brilliance ('fire')?",
                    "options": [
                        "Refractive index is $2.42$, causing a small critical angle ($24.4^\\circ$) that traps light via total internal reflection",
                        "Refractive index is $1.00$, allowing light to pass freely",
                        "Refractive index is $1.33$, matching liquid water",
                        "Diamond produces its own bioluminescence"
                    ],
                    "answer": "Refractive index is $2.42$, causing a small critical angle ($24.4^\\circ$) that traps light via total internal reflection",
                    "explanation": "A high refractive index of $2.42$ gives a low critical angle of $24.4^\\circ$. Incident light enters and undergoes multiple total internal reflections before exiting."
                },
                {
                    "id": "ch6_m02_q04",
                    "question": "What is the carbon-carbon ($C-C$) bond length in the crystal structure of diamond?",
                    "options": [
                        "$154\text{ pm}$ ($1.54\text{ \\AA}$)",
                        "$134\text{ pm}$ ($1.34\text{ \\AA}$)",
                        "$120\text{ pm}$ ($1.20\text{ \\AA}$)",
                        "$142\text{ pm}$ ($1.42\text{ \\AA}$)"
                    ],
                    "answer": "$154\text{ pm}$ ($1.54\text{ \\AA}$)",
                    "explanation": "The single $C-C$ bond length in diamond's $sp^3$ tetrahedral framework is $154\text{ pm}$ ($1.54\text{ \\AA}$)."
                },
                {
                    "id": "ch6_m02_q05",
                    "question": "What term designates impure, dark, or black polycrystalline diamonds used industrially for heavy rock-drilling and glass-cutting?",
                    "options": [
                        "Bort and Carbonado",
                        "Graphite and Fullerenes",
                        "Kieselguhr and Corundum",
                        "Lignite and Anthracite"
                    ],
                    "answer": "Bort and Carbonado",
                    "explanation": "Bort (granular black diamond) and Carbonado (porous black polycrystalline diamond) are valued for extreme cutting hardness in drilling bits."
                },
                {
                    "id": "ch6_m02_q06",
                    "question": "What is the mass equivalent of 1 Carat used for measuring gemstones and diamonds?",
                    "options": [
                        "$200\text{ mg}$ ($0.2\text{ grams}$)",
                        "$100\text{ mg}$ ($0.1\text{ grams}$)",
                        "$500\text{ mg}$ ($0.5\text{ grams}$)",
                        "$1000\text{ mg}$ ($1.0\text{ gram}$)"
                    ],
                    "answer": "$200\text{ mg}$ ($0.2\text{ grams}$)",
                    "explanation": "One international carat is defined precisely as $200\text{ mg}$ ($0.2\text{ g}$ or $0.00705\text{ oz}$). 24 Karat gold, however, refers to purity (100%)."
                },
                {
                    "id": "ch6_m02_q07",
                    "question": "On the Mohs scale of mineral hardness, what value is assigned to diamond?",
                    "options": [
                        "10",
                        "9",
                        "7",
                        "8"
                    ],
                    "answer": "10",
                    "explanation": "Diamond defines the absolute maximum on the Mohs hardness scale with a rating of 10 (Corundum is 9, Topaz 8, Quartz 7, Talc 1)."
                },
                {
                    "id": "ch6_m02_q08",
                    "question": "Under what thermodynamic conditions is synthetic diamond commercially manufactured from graphite via the HPHT method?",
                    "options": [
                        "Ultra-high temperature ($1500\text{--}2000^\\circ\text{C}$) and pressure ($50\text{--}100\text{ kbar}$) in the presence of transition metal catalysts",
                        "Sub-zero temperatures and vacuum",
                        "Room temperature and atmospheric pressure in water",
                        "By passing electric sparks through methane gas only"
                    ],
                    "answer": "Ultra-high temperature ($1500\text{--}2000^\\circ\text{C}$) and pressure ($50\text{--}100\text{ kbar}$) in the presence of transition metal catalysts",
                    "explanation": "High Pressure High Temperature (HPHT) mimics conditions deep in Earth's mantle ($50\text{--}100\text{ kbar}$, $1500\text{--}2000^\\circ\text{C}$) to convert graphite to diamond."
                },
                {
                    "id": "ch6_m02_q09",
                    "question": "What is the density of diamond compared to graphite?",
                    "options": [
                        "Diamond ($3.51\text{ g/cm}^3$) is significantly denser than graphite ($2.26\text{ g/cm}^3$)",
                        "Graphite is twice as dense as diamond",
                        "Both have identical density of $1.0\text{ g/cm}^3$",
                        "Diamond is less dense than liquid water"
                    ],
                    "answer": "Diamond ($3.51\text{ g/cm}^3$) is significantly denser than graphite ($2.26\text{ g/cm}^3$)",
                    "explanation": "The tightly packed 3D tetrahedral network of diamond gives it a high density ($3.51\text{ g/cm}^3$), whereas graphite has open interlayer spaces ($2.26\text{ g/cm}^3$)."
                },
                {
                    "id": "ch6_m02_q10",
                    "question": "What chemical product is formed when diamond is burned in excess pure oxygen above $800^\\circ\text{C}$?",
                    "options": [
                        "Pure carbon dioxide gas ($CO_2$) leaving zero ash or residue",
                        "Carbon monoxide only",
                        "Water vapor and methane",
                        "A mixture of soot and silica"
                    ],
                    "answer": "Pure carbon dioxide gas ($CO_2$) leaving zero ash or residue",
                    "explanation": "Lavoisier and Tennant proved diamond is pure carbon by burning it in pure oxygen to yield exclusively $CO_2$ gas with zero residual ash."
                }
            ]
        },
        {
            "id": "m03",
            "moduleNumber": 3,
            "title": "Carbon Allotropes: Graphite (Planar Hexagonal Layers, Lubricant, Electrical Conduction)",
            "tagline": "Graphite layered structure (sp2, 141.5 pm), interlayer van der Waals spacing (340 pm), delocalized pi electrons, electrical conduction, softness, solid lubricant, and lead pencils.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Crystal Structure of Graphite</h3><p><b>Graphite</b> (from Greek <i>graphein</i>, 'to write') is the thermodynamically most stable allotrope of carbon at standard temperature and pressure ($298\text{ K}, 1\text{ atm}$). It features a distinct two-dimensional <b>layered sheet structure</b>:</p><ul><li><b>Intra-layer Structure</b>: Each carbon atom is bonded to three neighboring carbons in a planar <b>hexagonal honeycomb sheet</b> via $sp^2$ hybridization.</li><li><b>In-plane Bond Length</b>: $C-C$ bond length within a layer is $\\mathbf{141.5\text{ pm}}$ (shorter than diamond's $154\text{ pm}$, indicating partial double-bond character).</li><li><b>Inter-layer Separation</b>: Successive parallel graphene layers are separated by a large distance of $\\mathbf{340\text{ pm}}$ ($3.40\text{ \\AA}$).</li><li><b>Inter-layer Bonding</b>: Layers are held together only by weak, non-directional <b>van der Waals dispersion forces</b>.</li></ul><h3>2. Physical Properties and Mechanistic Explanations</h3><ol><li><b>Electrical Conductivity</b>:<p>In $sp^2$ hybridization, only three of carbon's four valence electrons are used to form $\\sigma$-bonds. The fourth electron resides in an unhybridized $2p_z$ orbital perpendicular to the layer. These unhybridized orbitals overlap laterally across the entire sheet, forming a <b>delocalized $\\pi$-electron cloud</b>.</p><p>Under an applied voltage, these $\\pi$-electrons migrate freely across the plane, making graphite an <b>excellent conductor of electricity along its layers</b> (anisotropic conductor). Thus, graphite is widely used as <b>inert electrodes</b> in batteries and electrolysis.</p></li><li><b>Slipperiness and Solid Lubricant</b>:<p>Because the weak van der Waals forces between adjacent layers are easily cleaved by mechanical shear, the hexagonal layers <b>slide effortlessly over one another</b>. This imparts a soft, greasy feel, making graphite an ideal <b>solid dry lubricant</b> for high-temperature machinery where liquid lubricating oils would decompose or evaporate.</p></li><li><b>Pencil 'Lead'</b>:<p>Pencil lead contains <b>no metallic lead ($Pb$)</b> whatsoever. It is a pressed composite mixture of <b>powdered graphite and clay (kaolin)</b>. Writing on paper shears off microscopic graphite sheets, leaving black marks. Harder pencils (H, 2H) contain more clay; softer pencils (B, 2B) contain more graphite.</p></li><li><b>Thermodynamic Stability</b>:<p>Graphite is the standard thermodynamic state of carbon: $\\Delta_f H^\\circ (\text{graphite}) = 0\text{ kJ/mol}$. Diamond is slightly less stable: $\\Delta_f H^\\circ (\text{diamond}) = +1.9\text{ kJ/mol}$. (Graphite converting to diamond at room conditions is thermodynamically favored but kinetically blocked by an astronomical activation energy barrier).</p></li></ol>",
            "pointsToRemember": [
                "Graphite is the standard thermodynamic state of carbon with $sp^2$ planar hexagonal layers ($C-C$ bond length $141.5\text{ pm}$).",
                "Layers are separated by $340\text{ pm}$ and bound by weak van der Waals forces, allowing them to slide (solid lubricant).",
                "Delocalized $\\pi$-electrons make graphite an excellent electrical conductor along layers (used in battery electrodes).",
                "Pencil 'lead' is entirely non-toxic graphite mixed with clay; it contains zero chemical lead ($Pb$)."
            ],
            "keyNotes": [
                "Graphite acts as a nuclear moderator in fission reactors (such as Chernobyl's RBMK design) to slow down fast fission neutrons to thermal speeds without absorbing them."
            ],
            "questions": [
                {
                    "id": "ch6_m03_q01",
                    "question": "What structural characteristic enables graphite to conduct electricity, unlike diamond?",
                    "options": [
                        "$sp^2$ hybridization leaves one unhybridized valence electron per carbon atom delocalized across the planar sheet as mobile $\\pi$-electrons",
                        "Graphite contains metallic copper impurities",
                        "Graphite is an ionic crystal of carbon ions",
                        "Graphite absorbs electrons from humid air"
                    ],
                    "answer": "$sp^2$ hybridization leaves one unhybridized valence electron per carbon atom delocalized across the planar sheet as mobile $\\pi$-electrons",
                    "explanation": "Each $sp^2$ carbon has a fourth electron in a $2p_z$ orbital that forms a delocalized $\\pi$ electron sea, free to conduct electricity across layers."
                },
                {
                    "id": "ch6_m03_q02",
                    "question": "Why is graphite extensively utilized as a solid dry lubricant in heavy machinery operating at elevated temperatures?",
                    "options": [
                        "Its parallel hexagonal layers are held by weak van der Waals forces, allowing them to readily slide over one another without evaporating",
                        "It melts at room temperature into a thick oil",
                        "It contains petroleum grease inside its pores",
                        "It reacts with steel to form slippery water"
                    ],
                    "answer": "Its parallel hexagonal layers are held by weak van der Waals forces, allowing them to readily slide over one another without evaporating",
                    "explanation": "Weak interlayer van der Waals bonds ($340\text{ pm}$ separation) allow graphite sheets to slide easily under shear force, providing lubrication where oils burn."
                },
                {
                    "id": "ch6_m03_q03",
                    "question": "What is the actual chemical composition of the 'lead' core inside everyday writing pencils?",
                    "options": [
                        "A baked composite mixture of powdered graphite and clay (kaolin)",
                        "Pure metallic lead ($Pb$)",
                        "An alloy of lead and tin",
                        "Compressed black coal dust"
                    ],
                    "answer": "A baked composite mixture of powdered graphite and clay (kaolin)",
                    "explanation": "Pencil lead contains no chemical lead ($Pb$); it was misnamed when a massive deposit of pure graphite was discovered in Borrowdale, England in 1564."
                },
                {
                    "id": "ch6_m03_q04",
                    "question": "What is the distance separating adjacent parallel layers in the crystal lattice of graphite?",
                    "options": [
                        "$340\text{ pm}$ ($3.40\text{ \\AA}$)",
                        "$154\text{ pm}$ ($1.54\text{ \\AA}$)",
                        "$141.5\text{ pm}$ ($1.415\text{ \\AA}$)",
                        "$500\text{ pm}$ ($5.0\text{ \\AA}$)"
                    ],
                    "answer": "$340\text{ pm}$ ($3.40\text{ \\AA}$)",
                    "explanation": "The interlayer distance in graphite is $340\text{ pm}$, more than double the intra-layer $C-C$ covalent bond length of $141.5\text{ pm}$."
                },
                {
                    "id": "ch6_m03_q05",
                    "question": "Which allotrope of carbon is thermodynamically the MOST stable at standard temperature and pressure ($298\text{ K}, 1\text{ atm}$)?",
                    "options": [
                        "Graphite ($\\Delta_f H^\\circ = 0\text{ kJ/mol}$)",
                        "Diamond ($\\Delta_f H^\\circ = +1.9\text{ kJ/mol}$)",
                        "Buckminsterfullerene ($C_{60}$)",
                        "Carbon Nanotubes"
                    ],
                    "answer": "Graphite ($\\Delta_f H^\\circ = 0\text{ kJ/mol}$)",
                    "explanation": "Graphite is the thermodynamic reference state of elemental carbon with zero standard enthalpy of formation; diamond is slightly metastable by $+1.9\text{ kJ/mol}$."
                },
                {
                    "id": "ch6_m03_q06",
                    "question": "What role does high-purity graphite serve inside certain types of thermal nuclear fission power reactors?",
                    "options": [
                        "Neutron moderator to slow down fast neutrons to thermal fission speeds without absorbing them",
                        "Nuclear fuel that undergoes fission",
                        "Control rod to absorb all neutrons",
                        "Coolant liquid that boils into steam"
                    ],
                    "answer": "Neutron moderator to slow down fast neutrons to thermal fission speeds without absorbing them",
                    "explanation": "Graphite's low neutron absorption cross-section and light atomic mass make it an effective moderator for thermalizing fast neutrons in reactors."
                },
                {
                    "id": "ch6_m03_q07",
                    "question": "What is the in-plane carbon-carbon bond length within a single hexagonal layer of graphite?",
                    "options": [
                        "$141.5\text{ pm}$",
                        "$154\text{ pm}$",
                        "$120\text{ pm}$",
                        "$180\text{ pm}$"
                    ],
                    "answer": "$141.5\text{ pm}$",
                    "explanation": "Within the hexagonal layer, $C-C$ bond length is $141.5\text{ pm}$, intermediate between a single bond ($154\text{ pm}$) and double bond ($134\text{ pm}$)."
                },
                {
                    "id": "ch6_m03_q08",
                    "question": "Why is graphite used to manufacture electrodes for industrial electrolysis and dry cell batteries?",
                    "options": [
                        "It is chemically inert, resistant to high temperatures, and an excellent conductor of electricity",
                        "It dissolves easily in battery acid to release ions",
                        "It is an electrical insulator that prevents short circuits",
                        "It is cheaper than sand"
                    ],
                    "answer": "It is chemically inert, resistant to high temperatures, and an excellent conductor of electricity",
                    "explanation": "Graphite conducts electricity efficiently, resists chemical attack by aggressive electrolytes, and withstands extreme temperatures without melting."
                },
                {
                    "id": "ch6_m03_q09",
                    "question": "What happens when graphite is treated with a mixture of concentrated nitric acid and potassium chlorate?",
                    "options": [
                        "It oxidizes into graphitic acid (graphite oxide)",
                        "It converts instantly into diamond",
                        "It dissolves into methane gas",
                        "It forms lead nitrate"
                    ],
                    "answer": "It oxidizes into graphitic acid (graphite oxide)",
                    "explanation": "Strong oxidizing mixtures attack between graphite layers, introducing hydroxyl and carboxyl groups to form graphite oxide, the precursor to graphene."
                },
                {
                    "id": "ch6_m03_q10",
                    "question": "What is the physical density of crystalline graphite?",
                    "options": [
                        "$2.22\text{ to }2.26\text{ g/cm}^3$",
                        "$3.51\text{ g/cm}^3$",
                        "$1.00\text{ g/cm}^3$",
                        "$8.90\text{ g/cm}^3$"
                    ],
                    "answer": "$2.22\text{ to }2.26\text{ g/cm}^3$",
                    "explanation": "Graphite's density is $\u0007pprox 2.26\text{ g/cm}^3$, substantially lower than diamond's $3.51\text{ g/cm}^3$ due to the large empty $340\text{ pm}$ gap between sheets."
                }
            ]
        },
        {
            "id": "m04",
            "moduleNumber": 4,
            "title": "Modern Carbon Allotropes: Fullerenes (C60 Buckyballs), Carbon Nanotubes & Graphene",
            "tagline": "Discovery of Buckminsterfullerene (C60, Kroto-Curl-Smalley 1985 Nobel 1996), truncated icosahedron (12 pentagons, 20 hexagons), Carbon Nanotubes (CNTs), and Graphene (Geim & Novoselov 2004 Nobel 2010).",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Buckminsterfullerene ($C_{60}$) and Fullerenes</h3><p>Discovered in 1985 by <b>Harold Kroto, Robert Curl, and Richard Smalley</b> (Nobel Prize in Chemistry 1996) by vaporizing graphite with a pulsed laser in an inert helium atmosphere, <b>Fullerenes</b> represent the first known discrete molecular allotropes of carbon:</p><ul><li><b>Buckminsterfullerene ($C_{60}$)</b>: Named after American architect <b>Richard Buckminster Fuller</b> because its cage structure resembles his geodesic domes.</li><li><b>Soccer-Ball Geometry (Truncated Icosahedron)</b>:<p>Consists of exactly <b>60 carbon atoms arranged in 32 polyhedral faces</b>:</p>$$\\mathbf{12\text{ Five-Membered Rings (Pentagons)} \\quad + \\quad 20\text{ Six-Membered Rings (Hexagons)}}$$<li><b>Isolated Pentagon Rule (Euler's Polyhedron Theorem)</b>:<p>Every pentagon is surrounded strictly by five hexagons (no two pentagons share an edge, minimizing strain). Hexagons share edges with both hexagons and pentagons.</p></li><li><b>Hybridization & Bonding</b>: Carbon atoms are $sp^2$-like with curvature distortion. Contains two bond types: single bonds connecting 6- and 5-membered rings ($145\text{ pm}$) and double bonds between two 6-membered rings ($138\text{ pm}$).</li><li><b>Solubility</b>: Unlike diamond and graphite, $C_{60}$ is soluble in organic solvents (benzene, toluene), producing a characteristic magenta/purple solution.</li></ul><h3>2. Carbon Nanotubes (CNTs)</h3><p>Identified in 1991 by Japanese physicist <b>Sumio Iijima</b>, CNTs are tubular cylinders formed by rolling up single or multiple sheets of graphene:</p><ul><li><b>Single-Walled Nanotubes (SWNTs)</b>: Diameter $1\text{ to }2\text{ nm}$.</li><li><b>Multi-Walled Nanotubes (MWNTs)</b>: Multiple concentric cylinders, outer diameter up to $100\text{ nm}$.</li><li><b>Properties</b>: Tensile strength ~100 times greater than high-strength structural steel at one-sixth the weight; can be metallic or semiconducting depending on chiral roll vector.</li></ul><h3>3. Graphene: The Wonder 2D Material</h3><p>Isolated in 2004 by <b>Andre Geim and Konstantin Novoselov</b> at the University of Manchester (Nobel Prize in Physics 2010) using the 'Scotch tape method' of mechanical exfoliation:</p><ul><li><b>Structure</b>: A single, one-atom-thick planar sheet of $sp^2$-bonded carbon atoms arranged in a 2D honeycomb crystal lattice.</li><li><b>Exceptional Properties</b>:<ol><li><b>Mechanical Strength</b>: Strongest material ever tested (intrinsic breaking strength $130\text{ GPa}$, ~200 times stronger than steel).</li><li><b>Electrical Conductivity</b>: Ballistic electron transport with mobility exceeding $200,000\text{ cm}^2/(\text{V}\\cdot\text{s})$; electrons behave as massless Dirac fermions.</li><li><b>Thermal Conductivity</b>: ~$5000\text{ W}/(\text{m}\\cdot\text{K})$ (surpassing diamond).</li><li><b>Optical Transparency</b>: Absorbs only $2.3\\%$ of white light despite being a single atomic layer.</li></ol></li></ul>",
            "pointsToRemember": [
                "Buckminsterfullerene ($C_{60}$) is a soccer-ball cage of 60 carbons: exactly 12 pentagons and 20 hexagons (isolated pentagon rule).",
                "$C_{60}$ dissolves in organic solvents (benzene/toluene) forming purple solutions; discovered by Kroto, Curl, and Smalley (1985).",
                "Carbon Nanotubes (Sumio Iijima, 1991) are rolled graphene sheets with 100x the tensile strength of steel.",
                "Graphene (Geim & Novoselov, 2004) is a 1-atom-thick 2D honeycomb lattice; strongest known material with ballistic electrical conduction."
            ],
            "keyNotes": [
                "Endohedral fullerenes trap metal atoms or small gas molecules inside their hollow hollow carbon cages (denoted $M@C_{60}$), with promising applications in targeted cancer MRI imaging and quantum computing."
            ],
            "questions": [
                {
                    "id": "ch6_m04_q01",
                    "question": "How many pentagonal and hexagonal rings make up the soccer-ball cage structure of Buckminsterfullerene ($C_{60}$)?",
                    "options": [
                        "12 pentagons and 20 hexagons",
                        "20 pentagons and 12 hexagons",
                        "10 pentagons and 10 hexagons",
                        "6 pentagons and 24 hexagons"
                    ],
                    "answer": "12 pentagons and 20 hexagons",
                    "explanation": "The truncated icosahedron geometry of $C_{60}$ contains precisely 12 pentagonal rings and 20 hexagonal rings (total 32 faces)."
                },
                {
                    "id": "ch6_m04_q02",
                    "question": "What is the geometric principle governing the arrangement of pentagons in Buckminsterfullerene ($C_{60}$)?",
                    "options": [
                        "Isolated Pentagon Rule: Every pentagon is completely surrounded by hexagons and no two pentagons share an edge",
                        "All pentagons are fused together into a cap",
                        "Pentagons are located only on the interior of the sphere",
                        "Pentagons alternate directly with triangles"
                    ],
                    "answer": "Isolated Pentagon Rule: Every pentagon is completely surrounded by hexagons and no two pentagons share an edge",
                    "explanation": "By the Isolated Pentagon Rule, adjacent pentagons cause severe ring strain; fullerenes isolate all 12 pentagons among hexagons."
                },
                {
                    "id": "ch6_m04_q03",
                    "question": "Who were awarded the 1996 Nobel Prize in Chemistry for the discovery of Fullerenes?",
                    "options": [
                        "Harold Kroto, Robert Curl, and Richard Smalley",
                        "Andre Geim and Konstantin Novoselov",
                        "Linus Pauling and Walter Heitler",
                        "Ernest Rutherford and Niels Bohr"
                    ],
                    "answer": "Harold Kroto, Robert Curl, and Richard Smalley",
                    "explanation": "Kroto, Curl, and Smalley discovered $C_{60}$ in 1985 using laser vaporization of graphite, winning the 1996 Chemistry Nobel Prize."
                },
                {
                    "id": "ch6_m04_q04",
                    "question": "What is Graphene, for whose isolation the 2010 Nobel Prize in Physics was awarded?",
                    "options": [
                        "A single, one-atom-thick planar sheet of $sp^2$-bonded carbon atoms arranged in a two-dimensional honeycomb lattice",
                        "A three-dimensional diamond sphere",
                        "An alloy of carbon and iron",
                        "A radioactive isotope of carbon"
                    ],
                    "answer": "A single, one-atom-thick planar sheet of $sp^2$-bonded carbon atoms arranged in a two-dimensional honeycomb lattice",
                    "explanation": "Graphene is a single two-dimensional atomic layer of graphite isolated in 2004 by Andre Geim and Konstantin Novoselov."
                },
                {
                    "id": "ch6_m04_q05",
                    "question": "Which Japanese scientist is credited with the pioneering discovery and systematic characterization of Carbon Nanotubes (CNTs) in 1991?",
                    "options": [
                        "Sumio Iijima",
                        "Hideki Shirakawa",
                        "Kenichi Fukui",
                        "Shinya Yamanaka"
                    ],
                    "answer": "Sumio Iijima",
                    "explanation": "Sumio Iijima discovered carbon nanotubes in 1991 while examining carbon soot deposited during arc discharge using transmission electron microscopy."
                },
                {
                    "id": "ch6_m04_q06",
                    "question": "What characteristic color is observed when pure Buckminsterfullerene ($C_{60}$) is dissolved in organic solvents like toluene or benzene?",
                    "options": [
                        "Deep magenta or purple",
                        "Emerald green",
                        "Bright yellow",
                        "Completely colorless"
                    ],
                    "answer": "Deep magenta or purple",
                    "explanation": "$C_{60}$ dissolves in non-polar aromatic solvents (benzene, toluene) to produce a characteristic deep purple/magenta solution."
                },
                {
                    "id": "ch6_m04_q07",
                    "question": "How does the mechanical tensile strength of a single-walled carbon nanotube compare to high-strength structural steel?",
                    "options": [
                        "Approximately 100 times stronger than steel at roughly one-sixth the weight",
                        "Equal in strength to steel",
                        "Ten times weaker than steel",
                        "Extremely brittle like glass"
                    ],
                    "answer": "Approximately 100 times stronger than steel at roughly one-sixth the weight",
                    "explanation": "Carbon nanotubes have an elastic modulus exceeding 1 TPa and tensile strength near 100 GPa, ~100 times stronger than structural steel."
                },
                {
                    "id": "ch6_m04_q08",
                    "question": "What unique quantum electronic behavior do electrons display when moving across a graphene lattice?",
                    "options": [
                        "They behave as massless Dirac fermions traveling with ballistic relativistic-like velocity",
                        "They are completely trapped and stationary",
                        "They turn into positrons",
                        "They emit visible laser light spontaneously"
                    ],
                    "answer": "They behave as massless Dirac fermions traveling with ballistic relativistic-like velocity",
                    "explanation": "In graphene, linear dispersion at Dirac cones causes charge carriers to behave as massless relativistic fermions with mobility $>200,000\text{ cm}^2/(\text{V}\\cdot\text{s})$."
                },
                {
                    "id": "ch6_m04_q09",
                    "question": "What are endohedral fullerenes?",
                    "options": [
                        "Fullerene cages that trap foreign metal ions or small gas atoms inside their hollow spherical interior",
                        "Fullerenes with all bonds broken",
                        "Synthetic polymers of diamond",
                        "Fullerenes that react violently with air"
                    ],
                    "answer": "Fullerene cages that trap foreign metal ions or small gas atoms inside their hollow spherical interior",
                    "explanation": "Endohedral fullerenes ($M@C_{60}$) encapsulate atoms like lanthanum, gadolinium, or helium inside their hollow carbon core."
                },
                {
                    "id": "ch6_m04_q10",
                    "question": "What percentage of incident white light is absorbed by a single monolayer of graphene?",
                    "options": [
                        "Only $2.3\\%$ (it is over $97\\%$ optically transparent)",
                        "$50\\%$",
                        "$90\\%$",
                        "$100\\%$ (it is completely opaque)"
                    ],
                    "answer": "Only $2.3\\%$ (it is over $97\\%$ optically transparent)",
                    "explanation": "A graphene monolayer absorbs only $\\pi \u0007lpha \u0007pprox 2.3\\%$ of white light (where $\u0007lpha$ is the fine-structure constant), making it transparent."
                }
            ]
        },
        {
            "id": "m05",
            "moduleNumber": 5,
            "title": "Amorphous Carbon Forms: Charcoal (Wood, Bone, Activated), Lampblack, Carbon Black & Coke",
            "tagline": "Microcrystalline amorphous allotropes of carbon: destructive distillation of wood, bone, and coal; activated charcoal surface adsorption; lampblack and carbon black in printing inks and tires.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Nature of Amorphous Carbon</h3><p>While diamond, graphite, and fullerenes are crystalline allotropes with long-range order, <b>amorphous carbon</b> allotropes lack long-range crystalline symmetry. X-ray diffraction reveals they consist of microscopic, irregularly oriented <b>graphitic microcrystallites</b> mixed with disordered carbon networks.</p><h3>2. Primary Forms of Charcoal</h3><ol><li><b>Wood Charcoal</b>:<p>Obtained by the <b>destructive distillation</b> (heating in the absence or limited supply of air) of wood. It is a porous, black, brittle solid having a density less than water ($0.2\text{ to }0.4\text{ g/cm}^3$ bulk), allowing it to float despite pure carbon having a density $>1.5\text{ g/cm}^3$ (due to trapped air in capillary pores).</p></li><li><b>Activated Charcoal</b>:<p>Wood charcoal treated at high temperatures ($800\text{--}1000^\\circ\text{C}$) with steam, carbon dioxide, or zinc chloride. This process strips away adsorbed hydrocarbons and creates an extensive network of sub-microscopic pores.</p><p><b>Gigantic Surface Area</b>: 1 gram of activated charcoal provides a surface area of <b>$500\text{ to }1500\text{ m}^2$</b> (equivalent to multiple tennis courts!).</p><p><b>Applications</b>: Exceptional <b>physisorption</b> of poisonous gases in military gas masks, decolorizing brown raw sugar syrup, wastewater purification, and clinical emergency oral treatment for poison ingestion.</p></li><li><b>Bone Charcoal (Animal Charcoal)</b>:<p>Obtained by destructive distillation of defatted bones. Contains only about $10\\%$ carbon and $90\\%$ calcium phosphate $[Ca_3(PO_4)_2]$ and calcium carbonate. Highly effective at adsorbing organic coloring matter, extensively used in <b>decolorizing sugar cane solutions</b> and refining vegetable oils.</p></li></ol><h3>3. Lampblack, Carbon Black and Coke</h3><ul><li><b>Lampblack</b>: Produced by burning vegetable oils (mustard oil, kerosene) in a limited supply of oxygen and collecting the velvety soot on cold metal plates. Fine, soft amorphous carbon (~$98\\%$ carbon) used for making <b>Kajal (eyeliner), black printing ink, and carbon paper</b>.</li><li><b>Carbon Black</b>: Industrial soot obtained by thermal decomposition or incomplete combustion of natural gas (methane, $CH_4$) at $1000^\\circ\text{C}$:$$CH_4 \\xrightarrow{1000^\\circ\text{C}} C + 2H_2$$<p>Vital industrial reinforcing filler in <b>automotive rubber tires</b> (providing wear resistance and dissipating heat) and printing inks. (~$70\\%$ of global carbon black is used in tires).</p></li><li><b>Coke</b>: Solid, gray, porous residue left after the destructive distillation of bituminous coal. Contains $85\text{--}95\\%$ carbon. Essential <b>reducing agent in metallurgical blast furnaces</b> for extracting pig iron from haematite ($Fe_2O_3$) and manufacturing water gas ($CO + H_2$).</li></ul>",
            "pointsToRemember": [
                "Amorphous carbon consists of disordered graphitic microcrystallites formed by destructive distillation.",
                "Activated charcoal has immense surface area ($500\text{--}1500\text{ m}^2/\text{g}$) used in gas masks, sugar decolorization, and poison treatment.",
                "Bone charcoal contains ~$90\\%$ calcium phosphate and $10\\%$ carbon, acting as a decolorizing agent in sugar refining.",
                "Carbon black is produced from methane pyrolysis and reinforces automotive rubber tires; Coke is the reducing agent in iron blast furnaces."
            ],
            "keyNotes": [
                "Charcoal floats on water not because carbon is lighter than water, but because its voluminous capillary pore system traps large quantities of air; once boiled in water to expel the trapped air, it immediately sinks."
            ],
            "questions": [
                {
                    "id": "ch6_m05_q01",
                    "question": "What structural feature gives activated charcoal its extraordinary capacity to adsorb toxic gases and decolorize chemical solutions?",
                    "options": [
                        "An extensive network of sub-microscopic pores yielding an immense surface area of $500\text{ to }1500\text{ m}^2$ per gram",
                        "A high concentration of radioactive carbon-14",
                        "Magnetic attraction of heavy metals",
                        "Its bright white crystalline appearance"
                    ],
                    "answer": "An extensive network of sub-microscopic pores yielding an immense surface area of $500\text{ to }1500\text{ m}^2$ per gram",
                    "explanation": "Steam or chemical activation develops micropores giving 1 gram of activated charcoal a surface area over $1000\text{ m}^2$, driving rapid surface physisorption."
                },
                {
                    "id": "ch6_m05_q02",
                    "question": "Which form of amorphous carbon is primarily used as a reinforcing filler in automotive tires to impart high abrasion resistance and dissipate heat?",
                    "options": [
                        "Carbon black",
                        "Bone charcoal",
                        "Lampblack",
                        "Wood charcoal"
                    ],
                    "answer": "Carbon black",
                    "explanation": "Carbon black, produced by partial combustion of natural gas, strengthens rubber tires, increasing wear resistance and tire longevity."
                },
                {
                    "id": "ch6_m05_q03",
                    "question": "Why does a piece of freshly produced wood charcoal initially float on water despite carbon having an intrinsic density greater than water (~$1.5\text{ g/cm}^3$)?",
                    "options": [
                        "Its porous capillary structure contains large volumes of trapped air, lowering its apparent bulk density below $1.0\text{ g/cm}^3$",
                        "Wood charcoal contains helium gas",
                        "Carbon repels water molecules by static charge",
                        "Wood charcoal has zero mass"
                    ],
                    "answer": "Its porous capillary structure contains large volumes of trapped air, lowering its apparent bulk density below $1.0\text{ g/cm}^3$",
                    "explanation": "Air trapped in charcoal's porous capillary voids gives it a bulk density of $0.2\text{--}0.4\text{ g/cm}^3$. Once boiled to expel air, charcoal sinks."
                },
                {
                    "id": "ch6_m05_q04",
                    "question": "What is the primary chemical composition of bone charcoal (animal charcoal)?",
                    "options": [
                        "Approximately $90\\%$ calcium phosphate $[Ca_3(PO_4)_2]$ and calcium carbonate, with only about $10\\%$ finely dispersed carbon",
                        "$100\\%$ pure crystalline graphite",
                        "A mixture of pure diamond and calcium",
                        "Mainly silicon dioxide sand"
                    ],
                    "answer": "Approximately $90\\%$ calcium phosphate $[Ca_3(PO_4)_2]$ and calcium carbonate, with only about $10\\%$ finely dispersed carbon",
                    "explanation": "Bone charcoal from destructive distillation of defatted bones contains ~90% mineral calcium phosphate framework with ~10% active carbon."
                },
                {
                    "id": "ch6_m05_q05",
                    "question": "Which amorphous carbon allotrope is traditionally collected as fine velvety soot from burning oils for making Kajal and black printing inks?",
                    "options": [
                        "Lampblack",
                        "Coke",
                        "Bone charcoal",
                        "Anthracite"
                    ],
                    "answer": "Lampblack",
                    "explanation": "Lampblack is velvety carbon soot collected on cold surfaces from burning oil in limited oxygen, used for centuries in Kajal and Indian ink."
                },
                {
                    "id": "ch6_m05_q06",
                    "question": "What solid residue remains in the retort after the destructive distillation of bituminous coal to drive off coal gas and coal tar?",
                    "options": [
                        "Coke",
                        "Wood charcoal",
                        "Lampblack",
                        "Carbon black"
                    ],
                    "answer": "Coke",
                    "explanation": "Heating bituminous coal in the absence of air expels volatile gases, leaving gray porous metallurgical coke ($85\text{--}95\\%$ carbon)."
                },
                {
                    "id": "ch6_m05_q07",
                    "question": "Which form of carbon is utilized in the emergency clinical treatment of acute oral poisoning or drug overdoses?",
                    "options": [
                        "Activated charcoal slurry",
                        "Bone charcoal powder",
                        "Pulverized graphite",
                        "Diamond dust"
                    ],
                    "answer": "Activated charcoal slurry",
                    "explanation": "Activated charcoal rapidly adsorbs ingested drugs and toxins in the gastrointestinal tract, preventing their systemic bloodstream absorption."
                },
                {
                    "id": "ch6_m05_q08",
                    "question": "How is industrial carbon black manufactured chemically from hydrocarbons?",
                    "options": [
                        "Incomplete combustion or thermal cracking of methane (natural gas) at high temperatures ($~1000^\\circ\text{C}$)",
                        "Heating coal with sulfuric acid",
                        "Electrolysis of carbon dioxide",
                        "Burning diamond in pure oxygen"
                    ],
                    "answer": "Incomplete combustion or thermal cracking of methane (natural gas) at high temperatures ($~1000^\\circ\text{C}$)",
                    "explanation": "Pyrolysis of methane ($CH_4 \rightarrow C + 2H_2$) at $1000^\\circ\text{C}$ yields finely divided carbon black particles."
                },
                {
                    "id": "ch6_m05_q09",
                    "question": "What chemical process describes heating an organic substance (wood or coal) in the complete absence of air to yield volatile vapors and a carbon residue?",
                    "options": [
                        "Destructive distillation (pyrolysis)",
                        "Aerobic combustion",
                        "Fractional sublimation",
                        "Hydrolysis"
                    ],
                    "answer": "Destructive distillation (pyrolysis)",
                    "explanation": "Destructive distillation is thermal decomposition in the absence of oxygen, driving off volatiles without combusting the solid carbon residue."
                },
                {
                    "id": "ch6_m05_q10",
                    "question": "What role does coke play inside a blast furnace during the smelting of haematite iron ore ($Fe_2O_3$)?",
                    "options": [
                        "It acts as both a metallurgical fuel and the primary chemical reducing agent (producing $CO$ to reduce iron oxides)",
                        "It acts as an acidic flux to remove basic impurities",
                        "It prevents iron from melting",
                        "It cools the furnace walls"
                    ],
                    "answer": "It acts as both a metallurgical fuel and the primary chemical reducing agent (producing $CO$ to reduce iron oxides)",
                    "explanation": "Coke burns to generate smelting heat and reacts ($C + CO_2 \rightarrow 2CO$) to yield carbon monoxide, which reduces $Fe_2O_3$ to molten iron."
                }
            ]
        },
        {
            "id": "m06",
            "moduleNumber": 6,
            "title": "Classification of Hydrocarbons: Aliphatic vs Alicyclic vs Aromatic",
            "tagline": "Systematic classification of organic hydrocarbons: open-chain aliphatic (alkanes, alkenes, alkynes) vs closed-chain cyclic (alicyclic vs aromatic), and saturated vs unsaturated.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Broad Classification of Hydrocarbons</h3><p><b>Hydrocarbons</b> are organic chemical compounds composed solely of carbon and hydrogen atoms. They are systematically classified into two major families based on carbon skeleton architecture:</p><ol><li><b>Open-Chain (Acyclic / Aliphatic) Hydrocarbons</b>:<p>Consist of straight or branched open carbon chains (derived from Greek <i>aleiphar</i>, meaning fat):</p><ul><li><b>Saturated Hydrocarbons (Alkanes)</b>: Contain only carbon-carbon single bonds ($\\sigma$ bonds, $sp^3$ hybridized). General formula: $\\mathbf{C_n H_{2n+2}}$. (e.g., Methane $CH_4$, Ethane $C_2H_6$).</li><li><b>Unsaturated Hydrocarbons</b>: Contain one or more multiple bonds between carbon atoms:<ul><li><b>Alkenes (Olefins)</b>: Contain at least one double bond ($C=C$, $1\\sigma + 1\\pi$). General formula: $\\mathbf{C_n H_{2n}}$. (e.g., Ethene $C_2H_4$).</li><li><b>Alkynes (Acetylenes)</b>: Contain at least one triple bond ($C \\equiv C$, $1\\sigma + 2\\pi$). General formula: $\\mathbf{C_n H_{2n-2}}$. (e.g., Ethyne $C_2H_2$).</li></ul></li></ul></li><li><b>Closed-Chain (Cyclic / Ring) Hydrocarbons</b>:<p>Form closed ring systems, subdivided into two distinct categories:</p><ul><li><b>Alicyclic Hydrocarbons</b>: Aliphatic compounds in ring form. They behave chemically like open-chain aliphatic hydrocarbons (undergo addition if unsaturated, substitution if saturated). (e.g., Cyclopropane $C_3H_6$, Cyclohexane $C_6H_{12}$).</li><li><b>Aromatic Hydrocarbons (Arenes)</b>: Cyclic, planar, conjugated systems possessing extraordinary thermodynamic stability due to delocalized $(4n+2)\\pi$ electrons (Hückel's Rule). Characteristically undergo <b>electrophilic substitution</b> rather than addition. (e.g., Benzene $C_6H_6$, Toluene $C_7H_8$, Naphthalene $C_{10}H_8$).</li></ul></li></ol><h3>2. Saturated vs Unsaturated Chemical Distinction</h3><p>Unsaturated hydrocarbons decolorize <b>Bromine water</b> ($Br_2/CCl_4$, reddish-brown to colorless) and <b>Baeyer's Reagent</b> (cold alkaline $KMnO_4$, purple to brown $MnO_2$ precipitate) via rapid electrophilic addition across multiple bonds. Saturated hydrocarbons do not react with these reagents under ambient conditions.</p>",
            "pointsToRemember": [
                "Hydrocarbons divide into Acyclic (Aliphatic) and Cyclic (Alicyclic and Aromatic).",
                "Saturated hydrocarbons (Alkanes, $C_n H_{2n+2}$) have single bonds; Unsaturated (Alkenes $C_n H_{2n}$, Alkynes $C_n H_{2n-2}$) have multiple bonds.",
                "Aromatic hydrocarbons are planar conjugated rings obeying Hückel's $(4n+2)\\pi$ rule.",
                "Unsaturation is detected by rapid decolorization of Bromine water and Baeyer's reagent (alkaline $KMnO_4$)."
            ],
            "keyNotes": [
                "Cyclopropane ($C_3H_6$) is the simplest alicyclic hydrocarbon; its forced $60^\\circ$ bond angles create immense 'Baeyer ring strain', making it chemically reactive and explosive in air."
            ],
            "questions": [
                {
                    "id": "ch6_m06_q01",
                    "question": "What is the general chemical formula for open-chain saturated hydrocarbons (alkanes)?",
                    "options": [
                        "$C_n H_{2n+2}$",
                        "$C_n H_{2n}$",
                        "$C_n H_{2n-2}$",
                        "$C_n H_{2n+1}$"
                    ],
                    "answer": "$C_n H_{2n+2}$",
                    "explanation": "Alkanes are saturated acyclic hydrocarbons containing only single bonds, following the general formula $C_n H_{2n+2}$ (e.g., methane $CH_4$, ethane $C_2H_6$)."
                },
                {
                    "id": "ch6_m06_q02",
                    "question": "Which chemical test is used in laboratories to distinguish an unsaturated hydrocarbon (alkene or alkyne) from a saturated alkane?",
                    "options": [
                        "Decolorization of reddish-brown Bromine water ($Br_2/CCl_4$) or purple Baeyer's reagent ($KMnO_4$)",
                        "Reaction with litmus paper",
                        "Dissolution in dilute hydrochloric acid",
                        "Testing with copper wire in flame"
                    ],
                    "answer": "Decolorization of reddish-brown Bromine water ($Br_2/CCl_4$) or purple Baeyer's reagent ($KMnO_4$)",
                    "explanation": "Unsaturated hydrocarbons rapidly add halogens or hydroxyls across their multiple bonds, discharging the brown color of bromine or the purple color of $KMnO_4$."
                },
                {
                    "id": "ch6_m06_q03",
                    "question": "What is the general molecular formula for acyclic alkene hydrocarbons containing a single double bond?",
                    "options": [
                        "$C_n H_{2n}$",
                        "$C_n H_{2n+2}$",
                        "$C_n H_{2n-2}$",
                        "$C_n H_n$"
                    ],
                    "answer": "$C_n H_{2n}$",
                    "explanation": "Mono-alkenes possess one carbon-carbon double bond, giving the general formula $C_n H_{2n}$ (e.g., ethene $C_2H_4$, propene $C_3H_6$)."
                },
                {
                    "id": "ch6_m06_q04",
                    "question": "Why is cyclopropane ($C_3H_6$) unusually reactive and prone to ring-opening reactions compared to other cycloalkanes?",
                    "options": [
                        "Severe angle strain (Baeyer strain) due to $60^\\circ$ bond angles forced upon $sp^3$ carbons that prefer $109.5^\\circ$",
                        "It contains aromatic triple bonds",
                        "It has no hydrogen atoms",
                        "It is an ionic salt"
                    ],
                    "answer": "Severe angle strain (Baeyer strain) due to $60^\\circ$ bond angles forced upon $sp^3$ carbons that prefer $109.5^\\circ$",
                    "explanation": "Compressing $sp^3$ tetrahedral angles ($109.5^\\circ$) into a planar triangle ($60^\\circ$) creates severe Baeyer ring strain, causing cyclopropane to react like an alkene."
                },
                {
                    "id": "ch6_m06_q05",
                    "question": "What characterizes an 'alicyclic' hydrocarbon?",
                    "options": [
                        "A cyclic hydrocarbon that resembles open-chain aliphatic hydrocarbons in chemical properties rather than aromatic compounds",
                        "An aromatic compound containing nitrogen",
                        "A hydrocarbon found only in deep sea vents",
                        "A gas that never liquefies"
                    ],
                    "answer": "A cyclic hydrocarbon that resembles open-chain aliphatic hydrocarbons in chemical properties rather than aromatic compounds",
                    "explanation": "Alicyclic hydrocarbons (e.g., cyclohexane, cyclopentane) are closed rings that lack aromatic resonance and behave like aliphatic alkanes/alkenes."
                },
                {
                    "id": "ch6_m06_q06",
                    "question": "What is the general molecular formula for acyclic alkyne hydrocarbons having one triple bond?",
                    "options": [
                        "$C_n H_{2n-2}$",
                        "$C_n H_{2n}$",
                        "$C_n H_{2n+2}$",
                        "$C_n H_{2n+4}$"
                    ],
                    "answer": "$C_n H_{2n-2}$",
                    "explanation": "Mono-alkynes contain one carbon-carbon triple bond, following the general formula $C_n H_{2n-2}$ (e.g., ethyne $C_2H_2$, propyne $C_3H_4$)."
                },
                {
                    "id": "ch6_m06_q07",
                    "question": "What is the composition of Baeyer's reagent used to test for unsaturation in organic chemistry?",
                    "options": [
                        "Cold, dilute alkaline potassium permanganate ($KMnO_4$) solution",
                        "Concentrated sulfuric acid and nitric acid",
                        "Acidified potassium dichromate ($K_2Cr_2O_7$)",
                        "Ammoniacal silver nitrate solution"
                    ],
                    "answer": "Cold, dilute alkaline potassium permanganate ($KMnO_4$) solution",
                    "explanation": "Baeyer's reagent is a $1\\%$ cold alkaline $KMnO_4$ solution that oxidizes alkenes into vicinal diols (glycols), precipitating brown $MnO_2$."
                },
                {
                    "id": "ch6_m06_q08",
                    "question": "Which of the following compounds is an unsaturated hydrocarbon?",
                    "options": [
                        "Propene ($C_3H_6$)",
                        "Propane ($C_3H_8$)",
                        "Methane ($CH_4$)",
                        "Cyclohexane ($C_6H_{12}$)"
                    ],
                    "answer": "Propene ($C_3H_6$)",
                    "explanation": "Propene contains a carbon-carbon double bond ($CH_3-CH=CH_2$), making it an unsaturated alkene."
                },
                {
                    "id": "ch6_m06_q09",
                    "question": "Are aromatic hydrocarbons generally more prone to addition reactions or substitution reactions?",
                    "options": [
                        "Electrophilic substitution reactions, to preserve their stable aromatic resonance sextet",
                        "Rapid addition reactions that break the ring",
                        "Spontaneous explosive decomposition",
                        "Ionic precipitation"
                    ],
                    "answer": "Electrophilic substitution reactions, to preserve their stable aromatic resonance sextet",
                    "explanation": "Addition reactions would destroy the extra aromatic stabilization energy of the ring, so aromatic compounds preferentially undergo substitution."
                },
                {
                    "id": "ch6_m06_q10",
                    "question": "What is the simplest aromatic hydrocarbon?",
                    "options": [
                        "Benzene ($C_6H_6$)",
                        "Methane ($CH_4$)",
                        "Ethylene ($C_2H_4$)",
                        "Acetylene ($C_2H_2$)"
                    ],
                    "answer": "Benzene ($C_6H_6$)",
                    "explanation": "Benzene ($C_6H_6$) is the parent and simplest member of the aromatic hydrocarbon family."
                }
            ]
        },
        {
            "id": "m07",
            "moduleNumber": 7,
            "title": "Saturated Hydrocarbons (Alkanes / Paraffins): Methane & LPG",
            "tagline": "Paraffins (little affinity), methane (marsh gas, fire damp, paddy fields, biogas 55-70%), ethane, LPG (propane and butane), and ethyl mercaptan odorant.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Characteristics of Alkanes (Paraffins)</h3><p><b>Alkanes</b> were historically termed <b>Paraffins</b> (Latin <i>parum affinis</i>, meaning 'little affinity') due to their extreme chemical inertness towards common reagents like acids, bases, and oxidizing agents at room temperature. They are non-polar molecules held by weak London dispersion forces.</p><h3>2. Methane ($CH_4$): The First Alkane</h3><ul><li><b>Marsh Gas</b>: Formed in wetlands and stagnant marshes by anaerobic bacterial decomposition (methanogenesis by <i>Methanobacterium</i>) of cellulose and plant debris.</li><li><b>Fire Damp</b>: Coal miners fear methane as 'fire damp' because mixtures of $5\text{--}15\\%$ methane in air explode violently upon encountering an ignition source (spurred Humphry Davy's invention of the <b>Davy Safety Lamp</b> in 1815).</li><li><b>Agricultural Sources</b>: Major greenhouse gas emissions originate from <b>waterlogged paddy rice fields</b> and <b>enteric fermentation (belching) in ruminant livestock</b> (cattle, sheep).</li><li><b>Biogas / Gobar Gas</b>: Produced by anaerobic digestion of cow dung and agricultural waste; contains <b>$55\text{ to }70\\%$ Methane ($CH_4$)</b>, $30\text{ to }45\\%$ Carbon Dioxide ($CO_2$), and traces of $H_2S$.</li><li><b>Compressed Natural Gas (CNG)</b>: Comprises <b>$80\text{ to }95\\%$ Methane</b> compressed at $200\text{ to }250\text{ bar}$ pressure for clean urban transit fuel.</li></ul><h3>3. Liquefied Petroleum Gas (LPG)</h3><p><b>LPG</b> is a pressurized domestic and commercial fuel obtained from petroleum refining and natural gas processing:</p><ul><li><b>Main Chemical Components</b>: A mixture of <b>n-Butane ($C_4H_{10}$) and Isobutane</b> (~$60\\%$), blended with <b>Propane ($C_3H_8$)</b> (~$40\\%$).</li><li><b>Safety Warning Odorant</b>: Pure butane and propane are completely <b>colorless and odorless</b>, posing catastrophic explosion risks in the event of an undetected leak. Hence, refineries blend minute quantities (~$10\text{--}20\text{ ppm}$) of a foul-smelling sulfur compound, <b>Ethyl Mercaptan (Ethanethiol, $C_2H_5SH$)</b>, giving LPG its characteristic 'rotting cabbage' odor.</li></ul>",
            "pointsToRemember": [
                "Alkanes (paraffins) are chemically inert saturated hydrocarbons ($C_n H_{2n+2}$).",
                "Methane ($CH_4$) is known as marsh gas, fire damp in coal mines, and accounts for 55–70% of biogas and 85–95% of CNG.",
                "Waterlogged rice paddy fields and ruminant belching are major global methane emission sources.",
                "LPG consists primarily of Butane and Propane; Ethyl Mercaptan ($C_2H_5SH$) is added as a pungent leak odorant."
            ],
            "keyNotes": [
                "Methane has a global warming potential (GWP) ~28 to 36 times greater than carbon dioxide ($CO_2$) over a 100-year timescale, making methane mitigation a top priority in international climate accords."
            ],
            "questions": [
                {
                    "id": "ch6_m07_q01",
                    "question": "What is the primary hydrocarbon component present in Liquefied Petroleum Gas (LPG) domestic cooking cylinders?",
                    "options": [
                        "Butane (and Isobutane) blended with Propane",
                        "Methane and Ethane",
                        "Acetylene and Ethene",
                        "Benzene and Toluene"
                    ],
                    "answer": "Butane (and Isobutane) blended with Propane",
                    "explanation": "LPG cylinders contain primarily liquefied butane ($C_4H_{10}$) along with propane ($C_3H_8$), which vaporize into combustible gas upon releasing cylinder valve pressure."
                },
                {
                    "id": "ch6_m07_q02",
                    "question": "Which foul-smelling chemical substance is intentionally blended into commercial LPG cooking gas to enable rapid detection of hazardous leaks?",
                    "options": [
                        "Ethyl Mercaptan (Ethanethiol, $C_2H_5SH$)",
                        "Sulfur dioxide",
                        "Hydrogen sulfide",
                        "Ammonia gas"
                    ],
                    "answer": "Ethyl Mercaptan (Ethanethiol, $C_2H_5SH$)",
                    "explanation": "Because propane and butane are completely odorless, strongly foul-smelling ethyl mercaptan ($C_2H_5SH$) is added to provide immediate warning of gas leaks."
                },
                {
                    "id": "ch6_m07_q03",
                    "question": "What is the predominant gas present in Biogas (Gobar Gas) produced by anaerobic digestion of animal dung?",
                    "options": [
                        "Methane ($55\text{--}70\\%$)",
                        "Carbon monoxide ($80\\%$)",
                        "Propane ($90\\%$)",
                        "Ethylene ($50\\%$)"
                    ],
                    "answer": "Methane ($55\text{--}70\\%$)",
                    "explanation": "Biogas consists of $55\text{--}70\\%$ methane ($CH_4$) and $30\text{--}40\\%$ carbon dioxide ($CO_2$), produced by methanogenic archaebacteria."
                },
                {
                    "id": "ch6_m07_q04",
                    "question": "Why was methane gas historically termed 'marsh gas'?",
                    "options": [
                        "It is produced by anaerobic bacterial decomposition of plant vegetable matter in stagnant marshes and swamps",
                        "It smells like marsh grass",
                        "It was discovered by the French chemist Marsh",
                        "It solidifies into a swamp-like gel"
                    ],
                    "answer": "It is produced by anaerobic bacterial decomposition of plant vegetable matter in stagnant marshes and swamps",
                    "explanation": "Methanogenic bacteria ferment cellulose in oxygen-depleted marsh mud, releasing bubbles of methane gas to the water surface."
                },
                {
                    "id": "ch6_m07_q05",
                    "question": "Which agricultural ecosystem is globally recognized as a major anthropogenic source of atmospheric methane ($CH_4$) emissions?",
                    "options": [
                        "Flooded, waterlogged paddy rice fields",
                        "Wheat cultivation fields",
                        "Apple orchards",
                        "Cotton plantations"
                    ],
                    "answer": "Flooded, waterlogged paddy rice fields",
                    "explanation": "Waterlogged soils in flooded rice paddies create ideal anaerobic conditions for methanogenic microbes to decompose organic matter into methane."
                },
                {
                    "id": "ch6_m07_q06",
                    "question": "What dangerous explosive gas mixture in underground coal mines was historically referred to by miners as 'fire damp'?",
                    "options": [
                        "A combustible mixture of methane gas and air",
                        "Carbon dioxide and steam",
                        "Nitrogen and argon",
                        "Pure hydrogen fluoride"
                    ],
                    "answer": "A combustible mixture of methane gas and air",
                    "explanation": "Methane trapped in coal seams leaks into mine tunnels; between 5% and 15% concentration in air, it forms the explosive mixture called fire damp."
                },
                {
                    "id": "ch6_m07_q07",
                    "question": "What safety device was invented in 1815 by Sir Humphry Davy to prevent fire damp explosions in underground coal mines?",
                    "options": [
                        "Davy Safety Lamp (flame enclosed by fine wire gauze)",
                        "Battery-powered laser torch",
                        "Automatic water sprinkler",
                        "Oxygen breathing mask"
                    ],
                    "answer": "Davy Safety Lamp (flame enclosed by fine wire gauze)",
                    "explanation": "The Davy lamp encloses the flame in a wire gauze mesh that conducts heat away quickly, keeping the gas outside below its ignition temperature."
                },
                {
                    "id": "ch6_m07_q08",
                    "question": "What is the primary chemical constituent of Compressed Natural Gas (CNG)?",
                    "options": [
                        "Methane ($CH_4$, ~$85\text{--}95\\%$)",
                        "Butane ($90\\%$)",
                        "Acetylene ($75\\%$)",
                        "Carbon monoxide ($50\\%$)"
                    ],
                    "answer": "Methane ($CH_4$, ~$85\text{--}95\\%$)",
                    "explanation": "CNG is natural gas compressed to 200–250 bar, consisting predominantly of methane ($85\text{--}95\\%$)."
                },
                {
                    "id": "ch6_m07_q09",
                    "question": "Why were alkanes historically designated by the name 'paraffins'?",
                    "options": [
                        "They exhibit very little chemical reactivity (from Latin <i>parum affinis</i>, meaning 'little affinity') towards acids and alkalis",
                        "They are extracted exclusively from paraffin wax candles",
                        "They dissolve in liquid water",
                        "They form purple salts"
                    ],
                    "answer": "They exhibit very little chemical reactivity (from Latin <i>parum affinis</i>, meaning 'little affinity') towards acids and alkalis",
                    "explanation": "Due to strong non-polar $C-C$ and $C-H$ single $\\sigma$-bonds, alkanes show little chemical affinity toward common reagents at room temperature."
                },
                {
                    "id": "ch6_m07_q10",
                    "question": "What is the geometric spatial orientation and $H-C-H$ bond angle in the methane ($CH_4$) molecule?",
                    "options": [
                        "Regular tetrahedral with bond angles of $109^\\circ 28'$ ($109.5^\\circ$)",
                        "Square planar with $90^\\circ$ angles",
                        "Trigonal planar with $120^\\circ$ angles",
                        "Linear with $180^\\circ$ angles"
                    ],
                    "answer": "Regular tetrahedral with bond angles of $109^\\circ 28'$ ($109.5^\\circ$)",
                    "explanation": "The $sp^3$-hybridized central carbon in $CH_4$ directs four identical $C-H$ bonds towards the corners of a regular tetrahedron at $109.5^\\circ$."
                }
            ]
        },
        {
            "id": "m08",
            "moduleNumber": 8,
            "title": "Unsaturated Hydrocarbons (Alkenes / Olefins): Ethene & Addition Reactions",
            "tagline": "Olefins (oil-forming), ethene (ethylene, C2H4), natural fruit-ripening hormone, catalytic hydrogenation of vegetable oils (Vanaspati ghee), and polymerization to polyethylene.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Characteristics of Alkenes (Olefins)</h3><p><b>Alkenes</b> ($C_n H_{2n}$) were historically named <b>Olefins</b> (Latin <i>oleum facere</i>, 'oil-forming') because lower members like ethene react with halogens ($Cl_2$) to form oily liquid dihalides (ethylene dichloride, an 'oil of the Dutch chemists').</p><ul><li><b>Structure of Ethene ($H_2C=CH_2$)</b>: Planar molecule with $sp^2$ hybridized carbons, bond angles of $120^\\circ$, $C=C$ bond length of $\\mathbf{134\text{ pm}}$ ($1.34\text{ \\AA}$), consisting of one strong $\\sigma$ bond and one weaker $\\pi$ bond ($p\\pi-p\\pi$ overlap).</li></ul><h3>2. Biological Role: Natural Fruit-Ripening Hormone</h3><p><b>Ethylene (Ethene, $C_2H_4$)</b> is a unique natural gaseous plant hormone (phytohormone) that regulates developmental processes:</p><ul><li><b>Climacteric Fruit Ripening</b>: Stimulates the natural ripening of fruits (bananas, mangoes, tomatoes, apples) by triggering starch breakdown into sugars and softening cell wall pectin.</li><li><b>Artificial Ripening with Calcium Carbide ($CaC_2$) Controversy</b>:<p>Traders illegally use industrial <b>Calcium Carbide ($CaC_2$)</b> which reacts with atmospheric moisture to release <b>Acetylene gas ($C_2H_2$)</b>, mimicking ethylene's ripening action:</p>$$CaC_2 + 2H_2O \rightarrow Ca(OH)_2 + C_2H_2\\uparrow$$<p><b>Health Hazard</b>: Industrial $CaC_2$ contains toxic traces of <b>arsenic hydride (arsine, $AsH_3$)</b> and <b>phosphorus hydride (phosphine, $PH_3$)</b>, causing neurological toxicity. Hence, the Food Safety and Standards Authority of India (FSSAI) has banned $CaC_2$, recommending non-toxic ethylene gas generators.</p></li></ul><h3>3. Catalytic Hydrogenation: Vanaspati Ghee Manufacture</h3><p>Unsaturated liquid vegetable oils (containing polyunsaturated fatty acids with $C=C$ double bonds, e.g., groundnut, sunflower, soybean oil) react with hydrogen gas at $150\text{--}200^\\circ\text{C}$ under pressure in the presence of a finely divided <b>Nickel ($Ni$) catalyst</b> (or Platinum/Palladium):</p>$$\text{Vegetable Oil (Liquid)} + H_2 \\xrightarrow[180^\\circ\text{C}]{Ni \text{ catalyst}} \text{Vanaspati Ghee (Solid Saturated Fat)}$$<p><b>Health Impact</b>: Partial hydrogenation generates <b>Trans-fats</b>, which elevate harmful LDL cholesterol and increase cardiovascular disease risks.</p><h3>4. Polymerization: Manufacture of Polyethylene</h3><p>Heating ethene under high pressure produces <b>Low-Density Polyethylene (LDPE)</b>, while using a <b>Ziegler-Natta Catalyst</b> $[TiCl_4 + Al(C_2H_5)_3]$ at low pressure produces <b>High-Density Polyethylene (HDPE)</b>.</p>",
            "pointsToRemember": [
                "Alkenes (olefins, $C_n H_{2n}$) contain a $C=C$ double bond ($1\\sigma + 1\\pi$, $134\text{ pm}$, planar $120^\\circ$).",
                "Ethylene ($C_2H_4$) is the natural gaseous plant hormone triggering fruit ripening.",
                "Calcium carbide ($CaC_2$) produces acetylene ($C_2H_2$) for artificial ripening; banned due to carcinogenic arsine ($AsH_3$) and phosphine ($PH_3$).",
                "Hydrogenation of vegetable oils using Nickel catalyst produces solid Vanaspati ghee (generates trans-fats).",
                "Polymerization of ethene produces Polyethylene (LDPE and HDPE via Ziegler-Natta catalyst)."
            ],
            "keyNotes": [
                "Ziegler-Natta catalyst consists of Titanium tetrachloride and Triethylaluminium $[TiCl_4 + (C_2H_5)_3Al]$; Karl Ziegler and Giulio Natta won the 1963 Nobel Prize in Chemistry for this breakthrough."
            ],
            "questions": [
                {
                    "id": "ch6_m08_q01",
                    "question": "Which gaseous hydrocarbon serves as a natural plant hormone responsible for accelerating the ripening of fruits?",
                    "options": [
                        "Ethylene (Ethene, $C_2H_4$)",
                        "Methane ($CH_4$)",
                        "Propane ($C_3H_8$)",
                        "Acetylene ($C_2H_2$)"
                    ],
                    "answer": "Ethylene (Ethene, $C_2H_4$)",
                    "explanation": "Ethylene is the endogenous gaseous phytohormone that regulates plant growth, leaf abscission, and climacteric fruit ripening."
                },
                {
                    "id": "ch6_m08_q02",
                    "question": "Why has the use of Calcium Carbide ($CaC_2$) for artificial fruit ripening been legally prohibited by food safety regulators (FSSAI)?",
                    "options": [
                        "Industrial calcium carbide contains hazardous toxic impurities of arsenic (arsine, $AsH_3$) and phosphorus (phosphine, $PH_3$)",
                        "It makes fruits taste extremely salty",
                        "It turns fruits black within seconds",
                        "It is an expensive gold derivative"
                    ],
                    "answer": "Industrial calcium carbide contains hazardous toxic impurities of arsenic (arsine, $AsH_3$) and phosphorus (phosphine, $PH_3$)",
                    "explanation": "Commercial $CaC_2$ generates acetylene to ripen fruits, but toxic arsine and phosphine impurities pose severe carcinogenic and neurological risks."
                },
                {
                    "id": "ch6_m08_q03",
                    "question": "What chemical transformation occurs during the industrial manufacture of Vanaspati Ghee (vegetable fat) from vegetable oil?",
                    "options": [
                        "Catalytic hydrogenation of unsaturated double bonds in vegetable oils using a finely divided Nickel ($Ni$) catalyst",
                        "Fermentation with yeast",
                        "Saponification with caustic soda",
                        "Polymerization with sulfur"
                    ],
                    "answer": "Catalytic hydrogenation of unsaturated double bonds in vegetable oils using a finely divided Nickel ($Ni$) catalyst",
                    "explanation": "Bubbling hydrogen gas through liquid polyunsaturated vegetable oils at $180^\\circ\text{C}$ over nickel saturates double bonds, solidifying into ghee."
                },
                {
                    "id": "ch6_m08_q04",
                    "question": "What is the catalyst system used to synthesize High-Density Polyethylene (HDPE) under mild temperature and pressure conditions?",
                    "options": [
                        "Ziegler-Natta catalyst ($TiCl_4$ and triethylaluminium)",
                        "Fenton's reagent",
                        "Lindlar's catalyst",
                        "Raney Nickel"
                    ],
                    "answer": "Ziegler-Natta catalyst ($TiCl_4$ and triethylaluminium)",
                    "explanation": "The Ziegler-Natta coordination catalyst $[TiCl_4 + Al(C_2H_5)_3]$ polymerizes ethene stereospecifically at low pressures into linear HDPE."
                },
                {
                    "id": "ch6_m08_q05",
                    "question": "Why were alkenes historically called 'olefins'?",
                    "options": [
                        "They react with halogens like chlorine to form oily liquid dihalides (from Latin <i>oleum facere</i>, 'oil-forming')",
                        "They are extracted exclusively from olive oil",
                        "They contain natural lubricating greases",
                        "They turn into crude petroleum in water"
                    ],
                    "answer": "They react with halogens like chlorine to form oily liquid dihalides (from Latin <i>oleum facere</i>, 'oil-forming')",
                    "explanation": "Ethene was called 'olefiant gas' by 18th-century Dutch chemists because its reaction with chlorine produced an oily liquid (1,2-dichloroethane)."
                },
                {
                    "id": "ch6_m08_q06",
                    "question": "What is the carbon-carbon bond length in an ethene ($H_2C=CH_2$) molecule?",
                    "options": [
                        "$134\text{ pm}$ ($1.34\text{ \\AA}$)",
                        "$154\text{ pm}$ ($1.54\text{ \\AA}$)",
                        "$120\text{ pm}$ ($1.20\text{ \\AA}$)",
                        "$141.5\text{ pm}$ ($1.415\text{ \\AA}$)"
                    ],
                    "answer": "$134\text{ pm}$ ($1.34\text{ \\AA}$)",
                    "explanation": "The $C=C$ double bond in ethene has a bond length of $134\text{ pm}$, shorter than the $C-C$ single bond in ethane ($154\text{ pm}$)."
                },
                {
                    "id": "ch6_m08_q07",
                    "question": "What harmful nutritional byproduct is commonly formed during the partial industrial hydrogenation of liquid vegetable oils?",
                    "options": [
                        "Trans-fatty acids (trans-fats)",
                        "Vitamin D toxicity",
                        "Excess dietary fiber",
                        "Lactic acid"
                    ],
                    "answer": "Trans-fatty acids (trans-fats)",
                    "explanation": "Partial hydrogenation isomerizes natural cis-double bonds into trans-configurations, producing trans-fats that increase cardiovascular disease."
                },
                {
                    "id": "ch6_m08_q08",
                    "question": "What gas is evolved when moisture or water reacts with solid calcium carbide ($CaC_2$)?",
                    "options": [
                        "Acetylene (Ethyne, $C_2H_2$)",
                        "Ethylene (Ethene, $C_2H_4$)",
                        "Methane ($CH_4$)",
                        "Carbon dioxide ($CO_2$)"
                    ],
                    "answer": "Acetylene (Ethyne, $C_2H_2$)",
                    "explanation": "The hydrolysis reaction $CaC_2 + 2H_2O \rightarrow Ca(OH)_2 + C_2H_2\\uparrow$ releases acetylene gas."
                },
                {
                    "id": "ch6_m08_q09",
                    "question": "What is the geometry and bond angle around the carbon atoms in ethene?",
                    "options": [
                        "Trigonal planar with bond angles of approximately $120^\\circ$",
                        "Tetrahedral with $109.5^\\circ$",
                        "Linear with $180^\\circ$",
                        "Bent with $104.5^\\circ$"
                    ],
                    "answer": "Trigonal planar with bond angles of approximately $120^\\circ$",
                    "explanation": "Each $sp^2$-hybridized carbon atom in ethene forms three coplanar $\\sigma$ bonds separated by angles of roughly $120^\\circ$."
                },
                {
                    "id": "ch6_m08_q10",
                    "question": "Which polymer is synthesized by the addition polymerization of vinyl chloride ($CH_2=CHCl$)?",
                    "options": [
                        "Polyvinyl chloride (PVC)",
                        "Polyethylene",
                        "Polystyrene",
                        "Teflon"
                    ],
                    "answer": "Polyvinyl chloride (PVC)",
                    "explanation": "Free-radical polymerization of vinyl chloride monomer ($CH_2=CHCl$) yields the versatile synthetic plastic Polyvinyl Chloride (PVC)."
                }
            ]
        },
        {
            "id": "m09",
            "moduleNumber": 9,
            "title": "Unsaturated Hydrocarbons (Alkynes): Ethyne & Oxy-acetylene Welding",
            "tagline": "Alkynes ($C_n H_{2n-2}$), ethyne (acetylene, C2H2), linear geometry (180 deg), oxy-acetylene torch flame temperature (3300 deg C), acidity of terminal alkynes, and hydration to acetaldehyde.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Characteristics and Structure of Ethyne (Acetylene)</h3><p><b>Ethyne</b> ($HC \\equiv CH$, empirical formula $CH$, molecular formula $C_2H_2$) is the simplest alkyne:</p><ul><li><b>Linear Geometry</b>: Both carbon atoms are $sp$ hybridized ($50\\%$ s-character), resulting in a strictly linear molecule ($H-C-C$ bond angle $= 180^\\circ$).</li><li><b>Bond Multiplicity</b>: The carbon-carbon triple bond ($C \\equiv C$) consists of <b>one strong $\\sigma$ bond and two mutually perpendicular $\\pi$ bonds</b>.</li><li><b>Bond Parameters</b>: Shortest carbon-carbon bond length ($\\mathbf{120\text{ pm}}$ / $1.20\text{ \\AA}$) and highest bond enthalpy ($\\mathbf{823\text{ kJ/mol}}$).</li></ul><h3>2. High-Temperature Combustion: Oxy-Acetylene Welding</h3><p>When ethyne is burned in a controlled stream of pure oxygen inside a specialized welding torch, it burns with an extraordinarily luminous, ultra-hot flame:</p>$$2C_2H_2 + 5O_2 \rightarrow 4CO_2 + 2H_2O + \text{Heat} \\quad (\\Delta H = -2600\text{ kJ/mol})$$<p><b>Flame Temperature</b>: Attains temperatures between <b>$3000^\\circ\text{C}$ and $3300^\\circ\text{C}$</b>, high enough to cleanly cut and fuse thick structural steel plates. (Higher than any other common hydrocarbon-oxygen fuel flame).</p><h3>3. Storage Hazard: Dissolved Acetylene</h3><p>Acetylene gas is endothermic ($\\Delta_f H^\\circ = +227\text{ kJ/mol}$) and dangerously thermodynamically unstable. Under pressures $>2\text{ bar}$, liquid or compressed acetylene gas can explode spontaneously into carbon and hydrogen without oxygen. Therefore, commercial cylinders store acetylene safely as <b>Dissolved Acetylene (DA)</b>: dissolved under $15\text{ bar}$ in <b>liquid acetone ($CH_3COCH_3$)</b> inside a porous cylinder mass (such as agalite or calcium silicate).</p><h3>4. Chemical Reactions of Ethyne</h3><ol><li><b>Weak Acidity of Terminal Alkynes</b>:<p>Due to high s-character ($50\\%$) of $sp$ carbon, hydrogen atoms attached to triple-bonded carbons are weakly acidic ($pK_a \u0007pprox 25$). Ethyne reacts with sodium metal or sodamide ($NaNH_2$) to release hydrogen gas and form sodium acetylide ($HC \\equiv C^- Na^+$), and precipitates explosive red copper acetylide ($Cu_2C_2$) with ammoniacal cuprous chloride.</p></li><li><b>Hydration (Kucherov Reaction)</b>:<p>Addition of water in the presence of $1\\%\\ HgSO_4$ and $40\\%\\ H_2SO_4$ at $60^\\circ\text{C}$ hydrates ethyne via an unstable vinyl alcohol intermediate into <b>Acetaldehyde (Ethanal, $CH_3CHO$)</b>.</p></li><li><b>Cyclic Trimerization</b>:<p>Passing acetylene through a red-hot iron tube at $873\text{ K}$ ($600^\\circ\text{C}$) trimerizes three molecules into <b>Benzene ($C_6H_6$)</b>:</p>$$3C_2H_2 \\xrightarrow{\text{Red-hot Fe tube, } 600^\\circ\text{C}} C_6H_6$$</li></ol>",
            "pointsToRemember": [
                "Ethyne ($C_2H_2$) has a linear $sp$ structure ($180^\\circ$, $C \\equiv C$ bond length $120\text{ pm}$).",
                "Oxy-acetylene torch flame reaches ~$3300^\\circ\text{C}$, used for cutting and welding structural steel.",
                "Acetylene is thermodynamically unstable under pressure; stored dissolved in acetone within porous mass cylinders.",
                "Terminal alkyne hydrogen is weakly acidic ($sp$ carbon has $50\\%$ s-character), forming metal acetylides.",
                "Hydration of ethyne yields acetaldehyde; cyclic trimerization over red-hot iron forms benzene."
            ],
            "keyNotes": [
                "Pure acetylene gas has an ethereal, pleasant odor; the foul garlic-like odor of industrial acetylene gas arises from trace phosphine ($PH_3$) and hydrogen sulfide ($H_2S$) impurities."
            ],
            "questions": [
                {
                    "id": "ch6_m09_q01",
                    "question": "What maximum flame temperature can be achieved by an oxy-acetylene torch used for cutting and welding structural steel?",
                    "options": [
                        "$3000^\\circ\text{C} \text{ to } 3300^\\circ\text{C}$",
                        "$1000^\\circ\text{C}$",
                        "$1800^\\circ\text{C}$",
                        "$5000^\\circ\text{C}$"
                    ],
                    "answer": "$3000^\\circ\text{C} \text{ to } 3300^\\circ\text{C}$",
                    "explanation": "Combustion of acetylene in pure oxygen yields a localized flame temperature between $3000^\\circ\text{C}$ and $3300^\\circ\text{C}$, melting steel."
                },
                {
                    "id": "ch6_m09_q02",
                    "question": "Why is commercial acetylene gas stored dissolved in liquid acetone inside cylinders rather than compressed as a pure gas?",
                    "options": [
                        "Compressed acetylene gas above 2 bar is thermodynamically unstable and can detonate spontaneously into elemental carbon and hydrogen",
                        "Pure acetylene freezes into ice at room temperature",
                        "Acetylene evaporates instantly through steel cylinder walls",
                        "Acetone prevents acetylene from smelling bad"
                    ],
                    "answer": "Compressed acetylene gas above 2 bar is thermodynamically unstable and can detonate spontaneously into elemental carbon and hydrogen",
                    "explanation": "Due to its positive heat of formation, pressurized acetylene decomposes explosively unless stabilized by dissolving in acetone within porous monolithic packing."
                },
                {
                    "id": "ch6_m09_q03",
                    "question": "Why are terminal alkynes like ethyne ($HC \\equiv CH$) weakly acidic compared to alkenes and alkanes?",
                    "options": [
                        "The $sp$-hybridized carbon has $50\\%$ s-character, making it highly electronegative and capable of stabilizing the conjugate acetylide carbanion",
                        "Ethyne contains oxygen atoms",
                        "Terminal alkynes are inorganic mineral acids",
                        "Ethyne has a pH of 1 in water"
                    ],
                    "answer": "The $sp$-hybridized carbon has $50\\%$ s-character, making it highly electronegative and capable of stabilizing the conjugate acetylide carbanion",
                    "explanation": "With $50\\%$ s-character, $sp$ carbon holds electrons closer to its nucleus, imparting high electronegativity that facilitates the release of terminal protons ($H^+$)."
                },
                {
                    "id": "ch6_m09_q04",
                    "question": "What aromatic compound is synthesized when ethyne gas is passed through a red-hot iron tube at approximately $600^\\circ\text{C}$ ($873\text{ K}$)?",
                    "options": [
                        "Benzene ($C_6H_6$)",
                        "Toluene ($C_7H_8$)",
                        "Naphthalene ($C_{10}H_8$)",
                        "Cyclohexane ($C_6H_{12}$)"
                    ],
                    "answer": "Benzene ($C_6H_6$)",
                    "explanation": "Three acetylene molecules undergo cyclic trimerization over red-hot iron ($3C_2H_2 \rightarrow C_6H_6$) to yield aromatic benzene."
                },
                {
                    "id": "ch6_m09_q05",
                    "question": "What product is formed when ethyne is hydrated with dilute sulfuric acid in the presence of mercuric sulfate ($HgSO_4$) catalyst at $60^\\circ\text{C}$?",
                    "options": [
                        "Acetaldehyde (Ethanal, $CH_3CHO$)",
                        "Acetic acid ($CH_3COOH$)",
                        "Ethanol ($C_2H_5OH$)",
                        "Diethyl ether"
                    ],
                    "answer": "Acetaldehyde (Ethanal, $CH_3CHO$)",
                    "explanation": "Water adds across the triple bond to form unstable vinyl alcohol ($CH_2=CH-OH$), which tautomerizes rapidly into stable acetaldehyde ($CH_3CHO$)."
                },
                {
                    "id": "ch6_m09_q06",
                    "question": "What causes the characteristic foul, garlic-like odor often associated with commercial welding acetylene gas?",
                    "options": [
                        "Trace impurities of phosphine ($PH_3$) and hydrogen sulfide ($H_2S$)",
                        "Pure acetylene gas intrinsically smells like garlic",
                        "Acetone vapor mixed into the gas",
                        "Oxygen burning in the cylinder valve"
                    ],
                    "answer": "Trace impurities of phosphine ($PH_3$) and hydrogen sulfide ($H_2S$)",
                    "explanation": "Pure acetylene has an ethereal sweet odor; the pungent garlic smell of commercial gas comes from trace phosphine ($PH_3$) derived from calcium carbide."
                },
                {
                    "id": "ch6_m09_q07",
                    "question": "What is the carbon-carbon bond length in an ethyne ($HC \\equiv CH$) molecule?",
                    "options": [
                        "$120\text{ pm}$ ($1.20\text{ \\AA}$)",
                        "$134\text{ pm}$ ($1.34\text{ \\AA}$)",
                        "$154\text{ pm}$ ($1.54\text{ \\AA}$)",
                        "$142\text{ pm}$ ($1.42\text{ \\AA}$)"
                    ],
                    "answer": "$120\text{ pm}$ ($1.20\text{ \\AA}$)",
                    "explanation": "The carbon-carbon triple bond in ethyne is exceptionally short at $120\text{ pm}$ ($1.20\text{ \\AA}$)."
                },
                {
                    "id": "ch6_m09_q08",
                    "question": "What precipitate is formed when acetylene gas is bubbled through an ammoniacal cuprous chloride solution?",
                    "options": [
                        "Red precipitate of copper acetylide ($Cu_2C_2$)",
                        "White precipitate of silver chloride",
                        "Black precipitate of copper sulfide",
                        "Blue precipitate of copper hydroxide"
                    ],
                    "answer": "Red precipitate of copper acetylide ($Cu_2C_2$)",
                    "explanation": "Terminal alkynes react with ammoniacal cuprous chloride to precipitate bright red, shock-sensitive copper acetylide ($Cu_2C_2$)."
                },
                {
                    "id": "ch6_m09_q09",
                    "question": "What is the molecular geometry and bond angle in ethyne (acetylene)?",
                    "options": [
                        "Linear with $180^\\circ$ bond angles",
                        "Tetrahedral with $109.5^\\circ$",
                        "Trigonal planar with $120^\\circ$",
                        "Octahedral with $90^\\circ$"
                    ],
                    "answer": "Linear with $180^\\circ$ bond angles",
                    "explanation": "Because both carbons are $sp$-hybridized with two electron domains, the atoms in $H-C \\equiv C-H$ are aligned in a straight line ($180^\\circ$)."
                },
                {
                    "id": "ch6_m09_q10",
                    "question": "What is the number of sigma ($\\sigma$) and pi ($\\pi$) bonds in a molecule of ethyne?",
                    "options": [
                        "$3\\sigma$ bonds and $2\\pi$ bonds",
                        "$2\\sigma$ bonds and $3\\pi$ bonds",
                        "$4\\sigma$ bonds and $1\\pi$ bond",
                        "$5\\sigma$ bonds and $0\\pi$ bonds"
                    ],
                    "answer": "$3\\sigma$ bonds and $2\\pi$ bonds",
                    "explanation": "Ethyne contains two $C-H$ $\\sigma$ bonds, one $C-C$ $\\sigma$ bond (total $3\\sigma$), and two $C-C$ $\\pi$ bonds ($2\\pi$)."
                }
            ]
        },
        {
            "id": "m10",
            "moduleNumber": 10,
            "title": "Aromatic Hydrocarbons: Benzene, Resonance & Hückel's Rule",
            "tagline": "Benzene discovery (Faraday 1825), Kekule structure (1865), resonance hybrid, intermediate C-C bond length (139 pm), Huckel's rule (4n+2 pi electrons), and aromatic stabilization.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Discovery and Structure of Benzene ($C_6H_6$)</h3><p>Discovered in 1825 by <b>Michael Faraday</b> in illuminating gas condensate and synthesized in 1834 by Eilhard Mitscherlich, benzene ($C_6H_6$) presented a profound chemical mystery: its molecular formula suggested extreme unsaturation (like an alkyne), yet it was chemically unreactive, refusing to decolorize bromine water or $KMnO_4$.</p><ul><li><b>Kekulé's Ring Structure (1865)</b>: German chemist <b>August Kekulé</b> proposed a cyclic hexagonal ring of six carbon atoms with alternating single and double bonds (inspired by his famous dream of an Ouroboros snake biting its own tail).</li><li><b>Resonance & Delocalization (Pauling)</b>:<p>Quantum mechanics revealed that benzene is not a dynamic equilibrium of alternating single and double bonds; it is a single <b>resonance hybrid</b> of two equivalent Kekulé canonical forms. All six $\\pi$-electrons are completely <b>delocalized</b> in continuous doughnut-shaped electron rings above and below the planar carbon frame.</p></li><li><b>Uniform Bond Length</b>: All six $C-C$ bond lengths in benzene are completely identical at $\\mathbf{139\text{ pm}}$ ($1.39\text{ \\AA}$), strictly intermediate between a standard single bond ($154\text{ pm}$) and double bond ($134\text{ pm}$).</li></ul><h3>2. Hückel's Rule of Aromaticity ($4n+2$)</h3><p>Formulated in 1931 by German physicist <b>Erich Hückel</b>, a chemical compound is strictly classified as <b>Aromatic</b> if and only if it fulfills four mandatory structural criteria:</p><ol><li><b>Cyclic Ring</b>: Must possess a closed ring of atoms.</li><li><b>Planarity</b>: The ring must be completely planar (flat) so that adjacent p-orbitals can align parallel for continuous overlap.</li><li><b>Complete Conjugation</b>: Every ring atom must possess an unhybridized p-orbital ($sp^2$ or $sp$ hybridized).</li><li><b>Hückel's Number of $\\pi$-Electrons</b>: The delocalized $\\pi$-system must contain exactly $\\mathbf{(4n + 2)\\ \\pi\text{ electrons}}$ (where $n = 0, 1, 2, 3, \\dots$ is an integer):<ul><li>$n = 0 \\Rightarrow \\mathbf{2\\pi}$ electrons: Cyclopropenyl cation ($C_3H_3^+$).</li><li>$n = 1 \\Rightarrow \\mathbf{6\\pi}$ electrons: Benzene ($C_6H_6$), Pyridine ($C_5H_5N$), Furan, Pyrrole, Cyclopentadienyl anion ($C_5H_5^-$), Tropylium cation ($C_7H_7^+$).</li><li>$n = 2 \\Rightarrow \\mathbf{10\\pi}$ electrons: Naphthalene ($C_{10}H_8$).</li><li>$n = 3 \\Rightarrow \\mathbf{14\\pi}$ electrons: Anthracene ($C_{14}H_{10}$), Phenanthrene.</li></ul></li></ol><h3>3. Anti-Aromatic Compounds</h3><p>Molecules that are cyclic, planar, and completely conjugated but possess $\\mathbf{4n\\ \\pi\text{ electrons}}$ (e.g., Cyclobutadiene with $4\\pi$, Cyclooctatetraene if planar with $8\\pi$) are <b>Anti-Aromatic</b>, characterized by extreme electronic instability.</p>",
            "pointsToRemember": [
                "Benzene ($C_6H_6$) is a planar regular hexagon with 6 identical $C-C$ bonds ($139\text{ pm}$) due to $\\pi$-electron delocalization.",
                "Resonance energy of benzene is ~$150\text{ kJ/mol}$ ($36\text{ kcal/mol}$), conferring exceptional thermodynamic stability.",
                "Hückel's Rule: Aromaticity requires a cyclic, planar, completely conjugated system with $(4n+2)\\pi$ electrons ($2, 6, 10, 14, \\dots$).",
                "Planar systems with $4n\\pi$ electrons ($4, 8, \\dots$) are highly unstable Anti-Aromatic species."
            ],
            "keyNotes": [
                "Cyclooctatetraene ($C_8H_8$) possesses $8\\pi$ electrons ($4n, n=2$). To avoid the catastrophic instability of anti-aromaticity, it flexes into a non-planar 'tub-shaped' conformation, behaving as a non-aromatic conjugated polyene."
            ],
            "questions": [
                {
                    "id": "ch6_m10_q01",
                    "question": "What is Hückel's Rule for determining whether a planar, cyclic, conjugated chemical ring system possesses aromatic stability?",
                    "options": [
                        "It must contain exactly $(4n + 2)\\ \\pi$ delocalized electrons, where $n$ is any non-negative integer ($0, 1, 2, 3, \\dots$)",
                        "It must contain an odd number of carbon atoms",
                        "It must have $4n\\ \\pi$ electrons",
                        "It must contain at least three triple bonds"
                    ],
                    "answer": "It must contain exactly $(4n + 2)\\ \\pi$ delocalized electrons, where $n$ is any non-negative integer ($0, 1, 2, 3, \\dots$)",
                    "explanation": "Erich Hückel proved that planar conjugated rings with $(4n+2)\\pi$ electrons ($2, 6, 10, 14, \\dots$) achieve closed electronic shells with exceptional stability."
                },
                {
                    "id": "ch6_m10_q02",
                    "question": "What is the measured carbon-carbon bond length in a molecule of benzene ($C_6H_6$)?",
                    "options": [
                        "$139\text{ pm}$ ($1.39\text{ \\AA}$) for all six carbon-carbon bonds",
                        "Alternating bonds of $154\text{ pm}$ and $134\text{ pm}$",
                        "$120\text{ pm}$ for all bonds",
                        "$180\text{ pm}$ for all bonds"
                    ],
                    "answer": "$139\text{ pm}$ ($1.39\text{ \\AA}$) for all six carbon-carbon bonds",
                    "explanation": "Due to complete resonance delocalization of $\\pi$-electrons, all six carbon-carbon bonds in benzene are equal ($139\text{ pm}$), intermediate between single ($154\text{ pm}$) and double ($134\text{ pm}$) bonds."
                },
                {
                    "id": "ch6_m10_q03",
                    "question": "Who first discovered benzene in 1825 from the condensate of illuminating oil gas?",
                    "options": [
                        "Michael Faraday",
                        "August Kekulé",
                        "Dmitri Mendeleev",
                        "Antoine Lavoisier"
                    ],
                    "answer": "Michael Faraday",
                    "explanation": "Michael Faraday isolated benzene from compressed illuminating gas condensate in 1825, naming it 'bicarburet of hydrogen'."
                },
                {
                    "id": "ch6_m10_q04",
                    "question": "Which chemist proposed the cyclic hexagonal structure of benzene with alternating double bonds in 1865, inspired by a dream of a snake biting its tail?",
                    "options": [
                        "August Kekulé",
                        "Linus Pauling",
                        "Robert Boyle",
                        "Svante Arrhenius"
                    ],
                    "answer": "August Kekulé",
                    "explanation": "August Kekulé published the classic cyclohexatriene ring structure for benzene in 1865 after his famous vision of the Ouroboros snake."
                },
                {
                    "id": "ch6_m10_q05",
                    "question": "How many delocalized pi ($\\pi$) electrons are present in the aromatic ring of naphthalene ($C_{10}H_8$)?",
                    "options": [
                        "$10\\pi$ electrons (satisfying Hückel's rule with $n = 2$)",
                        "$6\\pi$ electrons",
                        "$8\\pi$ electrons",
                        "$14\\pi$ electrons"
                    ],
                    "answer": "$10\\pi$ electrons (satisfying Hückel's rule with $n = 2$)",
                    "explanation": "Naphthalene contains two fused benzene rings with 5 conjugated double bonds ($10\\pi$ electrons), fulfilling $(4n+2)$ with $n = 2$."
                },
                {
                    "id": "ch6_m10_q06",
                    "question": "What is the term for a cyclic, planar, fully conjugated system possessing $4n\\ \\pi$ electrons (such as cyclobutadiene with $4\\pi$ electrons)?",
                    "options": [
                        "Anti-aromatic (characterized by extreme electronic instability)",
                        "Super-aromatic",
                        "Alicyclic alkane",
                        "Saturated hydrocarbon"
                    ],
                    "answer": "Anti-aromatic (characterized by extreme electronic instability)",
                    "explanation": "Planar conjugated rings with $4n\\pi$ electrons have unpaired electrons in non-bonding orbitals, resulting in high thermodynamic instability (anti-aromaticity)."
                },
                {
                    "id": "ch6_m10_q07",
                    "question": "Why does cyclooctatetraene ($C_8H_8$), which has $8\\pi$ electrons ($4n, n=2$), adopt a non-planar 'tub-shaped' geometry in nature?",
                    "options": [
                        "To avoid the destabilizing anti-aromaticity that would occur if it were forced into a planar ring",
                        "Because carbon atoms are too large to fit in a ring",
                        "To become an electrical superconductor",
                        "Because it contains triple bonds"
                    ],
                    "answer": "To avoid the destabilizing anti-aromaticity that would occur if it were forced into a planar ring",
                    "explanation": "By puckering into a non-planar tub shape, cyclooctatetraene breaks continuous p-orbital overlap, escaping high anti-aromatic instability to become a stable non-aromatic polyene."
                },
                {
                    "id": "ch6_m10_q08",
                    "question": "What is the empirical resonance stabilization energy of benzene compared to an idealized localized cyclohexatriene?",
                    "options": [
                        "Approximately $150\text{ to }152\text{ kJ/mol}$ ($~36\text{ kcal/mol}$)",
                        "Zero",
                        "$500\text{ kJ/mol}$",
                        "$10\text{ kJ/mol}$"
                    ],
                    "answer": "Approximately $150\text{ to }152\text{ kJ/mol}$ ($~36\text{ kcal/mol}$)",
                    "explanation": "Heats of hydrogenation show benzene is ~150 kJ/mol (36 kcal/mol) more stable than expected for a hypothetical non-delocalized cyclohexatriene."
                },
                {
                    "id": "ch6_m10_q09",
                    "question": "Which of the following heterocyclic compounds is aromatic with $6\\pi$ electrons?",
                    "options": [
                        "Pyridine ($C_5H_5N$)",
                        "Cyclohexane ($C_6H_{12}$)",
                        "Tetrahydrofuran",
                        "Cyclooctane"
                    ],
                    "answer": "Pyridine ($C_5H_5N$)",
                    "explanation": "Pyridine contains 5 carbons and 1 nitrogen in a planar ring with 6 delocalized $\\pi$ electrons ($n=1$), while nitrogen's lone pair sits in an unshared $sp^2$ orbital."
                },
                {
                    "id": "ch6_m10_q10",
                    "question": "What is the dominant chemical reaction pathway exhibited by benzene?",
                    "options": [
                        "Electrophilic aromatic substitution (e.g., nitration, sulfonation, halogenation)",
                        "Rapid addition across double bonds",
                        "Oxidative cleavage by cold water",
                        "Spontaneous radical polymerization"
                    ],
                    "answer": "Electrophilic aromatic substitution (e.g., nitration, sulfonation, halogenation)",
                    "explanation": "Benzene undergoes electrophilic aromatic substitution, replacing a hydrogen atom while preserving its stable aromatic sextet."
                }
            ]
        },
        {
            "id": "m11",
            "moduleNumber": 11,
            "title": "Petroleum & Coal Tar Refining: Fractional Distillation, Cracking & Reforming",
            "tagline": "Crude oil origins, fractional distillation column cuts (petroleum gas, petrol, kerosene, diesel, lubricating oil, bitumen/asphalt), thermal and catalytic cracking, and reforming.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Origin and Refining of Crude Petroleum</h3><p><b>Petroleum</b> (Latin <i>petra</i> = rock, <i>oleum</i> = oil; often called 'Black Gold') is a complex mixture of hundreds of hydrocarbons (alkanes, cycloalkanes, aromatics) formed over millions of years by the anaerobic decomposition of microscopic marine plankton and algae under extreme geological heat and pressure.</p><h3>2. Fractional Distillation of Petroleum</h3><p>Crude oil is desalted, heated to ~$400^\\circ\text{C}$ in a furnace, and injected into a tall <b>fractionating column (bubble-cap tower)</b>, separating components by boiling points:</p><table border='1' cellpadding='4' style='border-collapse:collapse;'><tr><th>Fraction</th><th>Boiling Range</th><th>Carbon Atoms</th><th>Primary Uses</th></tr><tr><td><b>Petroleum Gas</b></td><td>Below $30^\\circ\text{C}$</td><td>$C_1 - C_4$</td><td>LPG for domestic cooking and heating</td></tr><tr><td><b>Petrol (Gasoline)</b></td><td>$40^\\circ\text{C} - 170^\\circ\text{C}$</td><td>$C_5 - C_{10}$</td><td>Motor fuel for light internal combustion engines; dry-cleaning solvent</td></tr><tr><td><b>Kerosene Oil</b></td><td>$170^\\circ\text{C} - 250^\\circ\text{C}$</td><td>$C_{10} - C_{14}$</td><td>Domestic illumination/stoves; Aviation Turbine Fuel (ATF) for jet aircraft</td></tr><tr><td><b>Diesel Oil (Gas Oil)</b></td><td>$250^\\circ\text{C} - 350^\\circ\text{C}$</td><td>$C_{13} - C_{20}$</td><td>Heavy transport (trucks, buses, trains, tractors, diesel generators)</td></tr><tr><td><b>Lubricating Oils & Greases</b></td><td>Above $350^\\circ\text{C}$</td><td>$C_{20} - C_{30}$</td><td>Machinery lubrication, Vaseline (petroleum jelly), paraffin wax for candles</td></tr><tr><td><b>Bitumen / Asphalt (Residue)</b></td><td>Non-volatile</td><td>$> C_{30}$</td><td><b>Surfacing roads</b>, waterproofing roofs (replaced coal tar)</td></tr></table><h3>3. Cracking and Reforming</h3><ul><li><b>Cracking (Pyrolysis)</b>: Heavy, high-boiling fractions (kerosene or fuel oil) with long carbon chains are broken down into more valuable, lower-boiling gasoline fractions ($C_5-C_{10}$) and alkenes by heat ($500^\\circ\text{C}$) or catalysts (Zeolites, $Al_2O_3 / SiO_2$):</li>$$C_{12}H_{26} \\xrightarrow{\text{Zeolite, } 500^\\circ\text{C}} C_7H_{16} + C_5H_{10}$$<li><b>Catalytic Reforming (Aromatization / Isomerization)</b>: Converts straight-chain alkanes (which knock violently in engines) into highly branched alkanes or aromatic hydrocarbons (e.g., n-hexane to benzene) over platinum/alumina catalysts, drastically <b>increasing octane rating</b>.</li></ul>",
            "pointsToRemember": [
                "Petroleum refining uses fractional distillation in bubble-cap columns based on boiling point differences.",
                "Key cuts: Petroleum Gas ($C_1-C_4$), Petrol ($C_5-C_{10}$), Kerosene / Jet Fuel ($C_{10}-C_{14}$), Diesel ($C_{13}-C_{20}$), Bitumen ($>C_{30}$).",
                "Bitumen (petroleum residue) is used for surfacing modern roads, replacing coal tar.",
                "Cracking breaks heavy fractions into light gasoline; Reforming converts straight-chain alkanes into branched and aromatic rings to boost octane numbers."
            ],
            "keyNotes": [
                "Aviation Turbine Fuel (ATF) used in commercial jet airliners is a specially refined, highly purified cut of kerosene with a low freezing point ($-47^\\circ\text{C}$) to prevent fuel lines from freezing at high cruising altitudes."
            ],
            "questions": [
                {
                    "id": "ch6_m11_q01",
                    "question": "Which petroleum fraction is commonly utilized as Aviation Turbine Fuel (ATF) for commercial jet aircraft engines?",
                    "options": [
                        "Specially refined, low-freezing Kerosene cut ($C_{10} - C_{14}$)",
                        "Liquefied Petroleum Gas (LPG)",
                        "Heavy Asphalt Bitumen",
                        "Compressed Methane"
                    ],
                    "answer": "Specially refined, low-freezing Kerosene cut ($C_{10} - C_{14}$)",
                    "explanation": "Aviation turbine fuel is kerosene-based, engineered to remain liquid and flow freely at the sub-zero temperatures ($-47^\\circ\text{C}$) of cruising altitudes."
                },
                {
                    "id": "ch6_m11_q02",
                    "question": "Which non-volatile residue from the fractional distillation of crude petroleum has largely replaced coal tar for metalling and surfacing modern road surfaces?",
                    "options": [
                        "Bitumen (Asphalt)",
                        "Paraffin wax",
                        "Petroleum ether",
                        "Vaseline jelly"
                    ],
                    "answer": "Bitumen (Asphalt)",
                    "explanation": "Bitumen, the heaviest non-volatile petroleum distillation residue, is the primary binder used for paving road asphalt."
                },
                {
                    "id": "ch6_m11_q03",
                    "question": "What chemical engineering process converts heavy, high-boiling petroleum fractions into lighter, more valuable gasoline (petrol) and alkenes?",
                    "options": [
                        "Cracking (thermal or catalytic pyrolysis)",
                        "Condensation polymerization",
                        "Saponification",
                        "Neutralization"
                    ],
                    "answer": "Cracking (thermal or catalytic pyrolysis)",
                    "explanation": "Cracking breaks long hydrocarbon chains into shorter molecules ($C_5-C_{10}$), dramatically increasing gasoline yields from crude oil."
                },
                {
                    "id": "ch6_m11_q04",
                    "question": "What is the purpose of catalytic reforming (aromatization) in petroleum refineries?",
                    "options": [
                        "Converting straight-chain alkanes into branched-chain and aromatic hydrocarbons to elevate fuel octane ratings",
                        "Removing water from crude oil",
                        "Solidifying petrol into paraffin wax",
                        "Converting oil into natural gas"
                    ],
                    "answer": "Converting straight-chain alkanes into branched-chain and aromatic hydrocarbons to elevate fuel octane ratings",
                    "explanation": "Straight-chain alkanes cause severe engine knocking; catalytic reforming rearranges them into branched and aromatic isomers with high octane ratings."
                },
                {
                    "id": "ch6_m11_q05",
                    "question": "On what physical principle is the separation of crude oil into its various fractions in a fractionating column based?",
                    "options": [
                        "Differences in boiling points of the constituent hydrocarbons",
                        "Differences in magnetic permeability",
                        "Differences in radioactive decay rate",
                        "Differences in solubility in pure water"
                    ],
                    "answer": "Differences in boiling points of the constituent hydrocarbons",
                    "explanation": "Fractional distillation separates hydrocarbons continuously based on progressive differences in boiling temperatures along the column height."
                },
                {
                    "id": "ch6_m11_q06",
                    "question": "Which hydrocarbon fraction obtained from petroleum distillation boils between approximately $40^\\circ\text{C}$ and $170^\\circ\text{C}$ and serves as fuel in automobiles?",
                    "options": [
                        "Petrol (Gasoline)",
                        "Diesel oil",
                        "Bitumen",
                        "Lubricating grease"
                    ],
                    "answer": "Petrol (Gasoline)",
                    "explanation": "Gasoline (petrol) contains $C_5$ to $C_{10}$ hydrocarbons boiling between $40^\\circ\text{C}$ and $170^\\circ\text{C}$."
                },
                {
                    "id": "ch6_m11_q07",
                    "question": "What type of solid organic material is paraffin wax, commonly used for making candles and water-resistant coatings?",
                    "options": [
                        "A solid mixture of higher saturated alkanes ($C_{20} - C_{30}$) obtained from heavy lubricating petroleum cuts",
                        "A plant-derived cellulose polymer",
                        "An animal protein gelatin",
                        "A synthetic silicone resin"
                    ],
                    "answer": "A solid mixture of higher saturated alkanes ($C_{20} - C_{30}$) obtained from heavy lubricating petroleum cuts",
                    "explanation": "Paraffin wax consists of high-molecular-weight saturated straight-chain hydrocarbons ($C_{20}-C_{30}$) crystallizing out of heavy lube oil cuts."
                },
                {
                    "id": "ch6_m11_q08",
                    "question": "What is the primary commercial use of petroleum jelly (Vaseline)?",
                    "options": [
                        "Semi-solid ointment base, skin protectant, and cosmetic lubricant",
                        "Aviation jet fuel",
                        "Industrial explosive",
                        "Food flavoring agent"
                    ],
                    "answer": "Semi-solid ointment base, skin protectant, and cosmetic lubricant",
                    "explanation": "Petroleum jelly is a purified mixture of semi-solid microcrystalline hydrocarbons that traps moisture on the skin."
                },
                {
                    "id": "ch6_m11_q09",
                    "question": "What catalyst is commonly used in modern catalytic cracking in petroleum refineries?",
                    "options": [
                        "Synthetic crystalline Zeolites (aluminosilicates)",
                        "Pure gold dust",
                        "Concentrated sulfuric acid",
                        "Powdered charcoal"
                    ],
                    "answer": "Synthetic crystalline Zeolites (aluminosilicates)",
                    "explanation": "Zeolites have crystalline micro-pores that crack hydrocarbon chains with high selectivity for high-octane gasoline."
                },
                {
                    "id": "ch6_m11_q10",
                    "question": "Why is crude petroleum often informally referred to in global economic and geopolitical contexts as 'Black Gold'?",
                    "options": [
                        "Due to its dark black appearance when extracted and its immense economic, commercial, and geopolitical value",
                        "It contains dissolved gold particles",
                        "It can be turned into pure gold through chemical catalysts",
                        "It was discovered by gold prospectors"
                    ],
                    "answer": "Due to its dark black appearance when extracted and its immense economic, commercial, and geopolitical value",
                    "explanation": "Crude petroleum's foundational role in energy, transport, and manufacturing gives it unrivaled global economic value, earning the moniker 'Black Gold'."
                }
            ]
        },
        {
            "id": "m12",
            "moduleNumber": 12,
            "title": "Functional Groups & Homologous Series: IUPAC Nomenclature & Isomerism",
            "tagline": "Functional groups, IUPAC rules, homologous series characteristics (delta CH2, 14 u mass), and structural isomerism (chain, position, functional, metamerism).",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Functional Groups: The Active Chemical Centers</h3><p>A <b>functional group</b> is an atom or group of bonded atoms that confers characteristic, predictable chemical reactivity to an organic molecule, regardless of the size or structure of the attached hydrocarbon chain:</p><table border='1' cellpadding='4' style='border-collapse:collapse;'><tr><th>Class of Compound</th><th>Functional Group</th><th>Structure</th><th>IUPAC Suffix / Prefix</th><th>Example</th></tr><tr><td><b>Alcohol</b></td><td>Hydroxyl</td><td>$-OH$</td><td>-ol</td><td>Ethanol ($CH_3CH_2OH$)</td></tr><tr><td><b>Aldehyde</b></td><td>Formyl (Carbonyl)</td><td>$-CHO$</td><td>-al</td><td>Ethanal ($CH_3CHO$)</td></tr><tr><td><b>Ketone</b></td><td>Carbonyl (Internal)</td><td>$>C=O$</td><td>-one</td><td>Propanone ($CH_3COCH_3$)</td></tr><tr><td><b>Carboxylic Acid</b></td><td>Carboxyl</td><td>$-COOH$</td><td>-oic acid</td><td>Ethanoic acid ($CH_3COOH$)</td></tr><tr><td><b>Ester</b></td><td>Alkoxycarbonyl</td><td>$-COOR$</td><td>-oate</td><td>Ethyl ethanoate</td></tr><tr><td><b>Ether</b></td><td>Alkoxy</td><td>$-O-$</td><td>alkoxy-</td><td>Methoxyethane</td></tr><tr><td><b>Amine</b></td><td>Amino</td><td>$-NH_2$</td><td>-amine</td><td>Methanamine ($CH_3NH_2$)</td></tr></table><h3>2. Homologous Series</h3><p>A <b>Homologous Series</b> is a family of structurally related organic compounds where all members:</p><ol><li>Share the <b>same general molecular formula</b> (e.g., $C_n H_{2n+2}$ for alkanes).</li><li>Possess the <b>same functional group</b> and exhibit similar chemical reactions.</li><li>Adjacent consecutive members differ by a constant <b>methylene unit ($-CH_2-$)</b>, which corresponds to a molecular mass difference of <b>$14\text{ u}$</b> ($12 + 2\times 1 = 14$).</li><li>Show a smooth, regular gradation in physical properties (boiling point, melting point, density, viscosity) due to increasing molecular mass.</li></ol><h3>3. Structural Isomerism</h3><p><b>Isomers</b> are compounds possessing the <b>identical molecular formula</b> but different structural arrangements and physical/chemical properties:</p><ul><li><b>Chain Isomerism</b>: Different carbon skeleton branching (e.g., n-butane vs isobutane, $C_4H_{10}$).</li><li><b>Position Isomerism</b>: Same carbon skeleton and functional group, but differing position of the functional group or multiple bond (e.g., propan-1-ol vs propan-2-ol).</li><li><b>Functional Group Isomerism</b>: Identical molecular formula but entirely different functional groups (e.g., Ethanol $CH_3CH_2OH$ and Dimethyl Ether $CH_3-O-CH_3$, both $C_2H_6O$).</li><li><b>Metamerism</b>: Unequal distribution of alkyl groups on either side of a polyvalent functional group (e.g., Diethyl ether $C_2H_5-O-C_2H_5$ vs Methyl propyl ether $CH_3-O-C_3H_7$).</li></ul>",
            "pointsToRemember": [
                "Functional groups dictate the chemical properties of organic molecules.",
                "Homologous series members share a general formula, same functional group, and differ by $-CH_2-$ ($14\text{ u}$ mass).",
                "Functional isomerism: Ethanol ($C_2H_5OH$) and Dimethyl ether ($CH_3OCH_3$) share molecular formula $C_2H_6O$ with different functional groups.",
                "Metamerism occurs around polyvalent groups (ethers, secondary amines, ketones)."
            ],
            "keyNotes": [
                "Butane ($C_4H_{10}$) is the smallest alkane capable of displaying structural chain isomerism (2 isomers: n-butane and isobutane); methane, ethane, and propane have zero isomers."
            ],
            "questions": [
                {
                    "id": "ch6_m12_q01",
                    "question": "What is the constant structural difference between any two consecutive members of a homologous series?",
                    "options": [
                        "A methylene unit ($-CH_2-$), corresponding to a molecular mass difference of $14\text{ u}$",
                        "A methyl group ($-CH_3$), mass $15\text{ u}$",
                        "A carbon atom ($12\text{ u}$)",
                        "A water molecule ($18\text{ u}$)"
                    ],
                    "answer": "A methylene unit ($-CH_2-$), corresponding to a molecular mass difference of $14\text{ u}$",
                    "explanation": "Each successive member of a homologous series adds one $-CH_2-$ unit, increasing molecular mass by $12 + 2 = 14\text{ u}$."
                },
                {
                    "id": "ch6_m12_q02",
                    "question": "What type of isomerism is exhibited between ethanol ($CH_3CH_2OH$) and dimethyl ether ($CH_3OCH_3$), which share the identical molecular formula $C_2H_6O$?",
                    "options": [
                        "Functional group isomerism",
                        "Chain isomerism",
                        "Position isomerism",
                        "Optical isomerism"
                    ],
                    "answer": "Functional group isomerism",
                    "explanation": "Ethanol is an alcohol ($-OH$) and dimethyl ether is an ether ($-O-$); sharing formula $C_2H_6O$ makes them functional group isomers."
                },
                {
                    "id": "ch6_m12_q03",
                    "question": "What is the minimum number of carbon atoms required for an alkane to exhibit structural chain isomerism?",
                    "options": [
                        "4 carbon atoms (Butane, $C_4H_{10}$)",
                        "3 carbon atoms (Propane)",
                        "2 carbon atoms (Ethane)",
                        "1 carbon atom (Methane)"
                    ],
                    "answer": "4 carbon atoms (Butane, $C_4H_{10}$)",
                    "explanation": "Methane, ethane, and propane have only one possible structural arrangement. Butane ($C_4H_{10}$) is the first to have 2 isomers: n-butane and isobutane."
                },
                {
                    "id": "ch6_m12_q04",
                    "question": "What is the IUPAC suffix used for naming organic compounds containing the aldehyde functional group ($-CHO$)?",
                    "options": [
                        "-al",
                        "-ol",
                        "-one",
                        "-oic acid"
                    ],
                    "answer": "-al",
                    "explanation": "Aldehydes end in the suffix '-al' (e.g., methanal, ethanal), while alcohols end in '-ol' and ketones in '-one'."
                },
                {
                    "id": "ch6_m12_q05",
                    "question": "What type of isomerism is demonstrated by diethyl ether ($C_2H_5-O-C_2H_5$) and methyl propyl ether ($CH_3-O-C_3H_7$)?",
                    "options": [
                        "Metamerism",
                        "Geometrical isomerism",
                        "Chain isomerism",
                        "Tautomerism"
                    ],
                    "answer": "Metamerism",
                    "explanation": "Metamerism arises when different alkyl groups are attached to the same polyvalent functional group (such as the divalent oxygen atom in ethers)."
                },
                {
                    "id": "ch6_m12_q06",
                    "question": "What is the functional group present in ketones?",
                    "options": [
                        "Carbonyl group ($>C=O$) flanked by two carbon atoms",
                        "Hydroxyl group ($-OH$)",
                        "Carboxyl group ($-COOH$)",
                        "Amino group ($-NH_2$)"
                    ],
                    "answer": "Carbonyl group ($>C=O$) flanked by two carbon atoms",
                    "explanation": "Ketones contain a carbonyl group ($>C=O$) bonded to two alkyl or aryl carbon groups (e.g., acetone, $CH_3COCH_3$)."
                },
                {
                    "id": "ch6_m12_q07",
                    "question": "What kind of isomerism is displayed between propan-1-ol ($CH_3CH_2CH_2OH$) and propan-2-ol ($CH_3CH(OH)CH_3$)?",
                    "options": [
                        "Position isomerism",
                        "Functional isomerism",
                        "Chain isomerism",
                        "Metamerism"
                    ],
                    "answer": "Position isomerism",
                    "explanation": "Both compounds have the same 3-carbon chain and $-OH$ group, but the $-OH$ group is attached at carbon-1 in propan-1-ol and carbon-2 in propan-2-ol."
                },
                {
                    "id": "ch6_m12_q08",
                    "question": "How do physical properties such as boiling point and density change across successive members of an organic homologous series as molecular mass increases?",
                    "options": [
                        "They show a gradual and regular increase due to greater van der Waals surface attractions",
                        "They decrease sharply to zero",
                        "They remain strictly constant",
                        "They fluctuate in a completely random manner"
                    ],
                    "answer": "They show a gradual and regular increase due to greater van der Waals surface attractions",
                    "explanation": "As molecular weight and surface area increase with each $-CH_2-$ unit, intermolecular van der Waals forces strengthen, elevating boiling points."
                },
                {
                    "id": "ch6_m12_q09",
                    "question": "What functional group is represented by the formula $-COOH$?",
                    "options": [
                        "Carboxylic acid group",
                        "Aldehyde group",
                        "Ketone group",
                        "Ester group"
                    ],
                    "answer": "Carboxylic acid group",
                    "explanation": "The carboxyl group ($-COOH$) combines a carbonyl ($>C=O$) and a hydroxyl ($-OH$) group, defining carboxylic acids."
                },
                {
                    "id": "ch6_m12_q10",
                    "question": "How many structural isomers exist for pentane ($C_5H_{12}$)?",
                    "options": [
                        "3 (n-pentane, isopentane, and neopentane)",
                        "2",
                        "5",
                        "9"
                    ],
                    "answer": "3 (n-pentane, isopentane, and neopentane)",
                    "explanation": "Pentane ($C_5H_{12}$) has exactly three structural isomers: n-pentane (linear), isopentane (2-methylbutane), and neopentane (2,2-dimethylpropane)."
                }
            ]
        },
        {
            "id": "m13",
            "moduleNumber": 13,
            "title": "Alcohols: Methanol & Ethanol",
            "tagline": "Methanol (wood spirit, toxicity via formaldehyde, blindness), ethanol (grain alcohol, fermentation, zymase), denatured alcohol (methylated spirit with pyridine), and power alcohol.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Methanol (Methyl Alcohol, $CH_3OH$): 'Wood Spirit'</h3><ul><li><b>Historical Production</b>: Produced by the destructive distillation of wood, earning the name <b>Wood Spirit</b> or Wood Naphtha. Modern industrial synthesis: catalytic hydrogenation of carbon monoxide:</li>$$CO + 2H_2 \\xrightarrow[200\text{--}300\text{ bar}]{ZnO - Cr_2O_3, \\ 200\text{--}300^\\circ\text{C}} CH_3OH$$<li><b>Mechanism of Extreme Toxicity ('Hooch Tragedy')</b>:<p>Ingesting even small amounts ($10\text{ to }30\text{ mL}$) causes permanent blindness; $>30\text{ mL}$ is fatal. In the liver, the enzyme <b>alcohol dehydrogenase</b> metabolizes methanol into <b>Formaldehyde (Methanal, $HCHO$)</b> and subsequently <b>Formic Acid ($HCOOH$)</b>:</p><ol><li>Formaldehyde rapidly coagulates cellular protoplasm (like boiling an egg).</li><li>Formic acid induces severe metabolic acidosis and destroys the optic nerve, causing <b>irreversible blindness</b> and respiratory arrest.</li></ol></li><li><b>Clinical Antidote</b>: Intravenous administration of <b>Ethanol</b> (which has a far higher affinity for alcohol dehydrogenase, competitively inhibiting methanol's oxidation while kidneys excrete unreacted methanol) or Fomepizole.</li></ul><h3>2. Ethanol (Ethyl Alcohol, $C_2H_5OH$): 'Grain Alcohol'</h3><ul><li><b>Fermentation of Sugars</b>: Produced by anaerobic fermentation of molasses (sugarcane byproduct) or starchy grains using <b>yeast</b> containing enzymes <b>Invertase</b> (hydrolyzes sucrose to glucose/fructose) and <b>Zymase</b> (converts glucose to ethanol + $CO_2$):</li>$$C_{12}H_{22}O_{11} + H_2O \\xrightarrow{\text{Invertase}} 2C_6H_{12}O_6 \\xrightarrow{\text{Zymase}} 2C_2H_5OH + 2CO_2\\uparrow$$<li>Fermentation ceases naturally when alcohol concentration reaches ~$14\\%$, because higher alcohol levels denature and kill yeast cells. Higher concentrations require fractional distillation.</li><li><b>Rectified Spirit</b>: Commercial azeotropic mixture containing <b>$95.6\\%$ ethanol and $4.4\\%$ water</b> (boiling point $78.15^\\circ\text{C}$).</li><li><b>Absolute Alcohol</b>: $100\\%$ pure anhydrous ethanol obtained by azeotropic distillation of rectified spirit with benzene.</li><li><b>Denatured Alcohol (Methylated Spirit)</b>: To prevent the misuse of cheap untaxed industrial alcohol for drinking, it is rendered unfit for human consumption by adding poisonous <b>methanol ($~5\text{--}10\\%$)</b>, foul-smelling <b>pyridine</b>, and a blue dye (copper sulfate).</li><li><b>Power Alcohol</b>: A fuel blend of <b>$20\\%$ Absolute Ethanol + $80\\%$ Petrol</b> (plus a co-solvent like benzene or ether) used in internal combustion engines to reduce fossil fuel import bills and emissions (E20 blending program).</li></ul>",
            "pointsToRemember": [
                "Methanol ($CH_3OH$, wood spirit) oxidizes in the liver into formaldehyde and formic acid, coagulating proteins and causing blindness/death.",
                "Ethanol competitively inhibits alcohol dehydrogenase and serves as the clinical antidote for methanol poisoning.",
                "Ethanol is produced by yeast fermentation via Invertase and Zymase; rectified spirit is $95.6\\%$ ethanol.",
                "Denatured alcohol (methylated spirit) contains methanol, pyridine, and blue dye to prevent recreational drinking.",
                "Power alcohol blends $20\\%$ ethanol with $80\\%$ petrol for automotive fuel."
            ],
            "keyNotes": [
                "The Breathalyzer test used by traffic police uses acidified potassium dichromate ($K_2Cr_2O_7$); alcohol in the driver's breath oxidizes to acetic acid, turning the solution from orange ($Cr^{6+}$) to green ($Cr^{3+}$)."
            ],
            "questions": [
                {
                    "id": "ch6_m13_q01",
                    "question": "Why does the accidental ingestion of adulterated liquor containing methanol (methyl alcohol) lead to permanent blindness and death?",
                    "options": [
                        "Methanol is metabolized in the liver into toxic formaldehyde and formic acid, which coagulate cellular proteins and destroy the optic nerve",
                        "Methanol crystallizes into glass shards in the stomach",
                        "Methanol prevents red blood cells from carrying carbon dioxide",
                        "Methanol is a radioactive isotope"
                    ],
                    "answer": "Methanol is metabolized in the liver into toxic formaldehyde and formic acid, which coagulate cellular proteins and destroy the optic nerve",
                    "explanation": "Alcohol dehydrogenase oxidizes methanol to formaldehyde, which coagulates cellular protoplasm and severely attacks the optic nerve, causing blindness."
                },
                {
                    "id": "ch6_m13_q02",
                    "question": "What is the recognized medical emergency antidote administered to treat acute methanol poisoning?",
                    "options": [
                        "Intravenous administration of pure ethanol (or fomepizole) to competitively saturate alcohol dehydrogenase",
                        "Drinking concentrated sodium chloride brine",
                        "Ingestion of activated bone charcoal",
                        "Breathing pure nitrogen gas"
                    ],
                    "answer": "Intravenous administration of pure ethanol (or fomepizole) to competitively saturate alcohol dehydrogenase",
                    "explanation": "Ethanol binds to alcohol dehydrogenase with ~50 times higher affinity than methanol, preventing toxic formaldehyde formation while methanol is safely excreted."
                },
                {
                    "id": "ch6_m13_q03",
                    "question": "Which two biological enzymes present in yeast are responsible for the fermentation of molasses sucrose into ethyl alcohol?",
                    "options": [
                        "Invertase and Zymase",
                        "Pepsin and Trypsin",
                        "Amylase and Lipase",
                        "Catalase and Peroxidase"
                    ],
                    "answer": "Invertase and Zymase",
                    "explanation": "Invertase hydrolyzes sucrose into glucose and fructose, and zymase converts glucose into ethanol and carbon dioxide."
                },
                {
                    "id": "ch6_m13_q04",
                    "question": "What is 'Rectified Spirit' produced during industrial ethanol distillation?",
                    "options": [
                        "A constant-boiling azeotropic mixture of $95.6\\%$ ethanol and $4.4\\%$ water",
                        "$100\\%$ pure water-free ethanol",
                        "A blend of $50\\%$ methanol and $50\\%$ ethanol",
                        "Ethanol mixed with vinegar"
                    ],
                    "answer": "A constant-boiling azeotropic mixture of $95.6\\%$ ethanol and $4.4\\%$ water",
                    "explanation": "Simple fractional distillation cannot exceed $95.6\\%$ ethanol because it forms a minimum-boiling azeotrope with water at $78.15^\\circ\text{C}$."
                },
                {
                    "id": "ch6_m13_q05",
                    "question": "What is 'Denatured Alcohol' (Methylated Spirit)?",
                    "options": [
                        "Industrial ethanol intentionally adulterated with poisonous methanol, foul-smelling pyridine, and colored dye to prevent human consumption",
                        "Ethanol mixed with pure drinking water",
                        "Ethanol aged in wooden barrels",
                        "Ethanol sweetened with sugarcane syrup"
                    ],
                    "answer": "Industrial ethanol intentionally adulterated with poisonous methanol, foul-smelling pyridine, and colored dye to prevent human consumption",
                    "explanation": "Denaturing renders industrial ethanol undrinkable to evade beverage excise taxes while remaining usable as an industrial solvent."
                },
                {
                    "id": "ch6_m13_q06",
                    "question": "What is 'Power Alcohol' used in automotive transportation?",
                    "options": [
                        "A fuel mixture consisting of approximately $20\\%$ absolute ethanol and $80\\%$ petrol (gasoline)",
                        "Pure $100\\%$ methanol used in rocket engines",
                        "A mixture of kerosene and diesel",
                        "A compressed mixture of hydrogen and butane"
                    ],
                    "answer": "A fuel mixture consisting of approximately $20\\%$ absolute ethanol and $80\\%$ petrol (gasoline)",
                    "explanation": "Power alcohol blends anhydrous ethanol with gasoline to boost octane rating, decrease petroleum imports, and cut emissions."
                },
                {
                    "id": "ch6_m13_q07",
                    "question": "What chemical color change occurs in the breathalyzer test used by traffic police to detect drunken drivers?",
                    "options": [
                        "Acidified potassium dichromate turns from orange to green as chromium(VI) is reduced to chromium(III) by ethanol",
                        "Colorless water turns bright blue",
                        "Pink phenolphthalein turns clear",
                        "Yellow sulfur turns black"
                    ],
                    "answer": "Acidified potassium dichromate turns from orange to green as chromium(VI) is reduced to chromium(III) by ethanol",
                    "explanation": "Ethanol in breath oxidizes to acetic acid, reducing orange $Cr^{6+}$ in dichromate to green $Cr^{3+}$ ions."
                },
                {
                    "id": "ch6_m13_q08",
                    "question": "Why was methanol historically given the commercial name 'Wood Spirit'?",
                    "options": [
                        "It was historically manufactured by the destructive distillation of wood in retorts",
                        "It smells like pine wood",
                        "It is extracted from the leaves of teak trees",
                        "It petrifies wood into stone"
                    ],
                    "answer": "It was historically manufactured by the destructive distillation of wood in retorts",
                    "explanation": "Before modern synthetic methods, methanol was obtained as a condensate from pyrolyzing wood in the absence of air."
                },
                {
                    "id": "ch6_m13_q09",
                    "question": "What is 'Absolute Alcohol'?",
                    "options": [
                        "$100\\%$ pure, anhydrous ethyl alcohol",
                        "$95.6\\%$ ethanol with water",
                        "$50\\%$ ethanol used in beer",
                        "Alcohol containing copper sulfate"
                    ],
                    "answer": "$100\\%$ pure, anhydrous ethyl alcohol",
                    "explanation": "Absolute alcohol is 100% pure ethanol free of water, prepared by azeotropic distillation with benzene or drying over calcium oxide."
                },
                {
                    "id": "ch6_m13_q10",
                    "question": "Why does natural fermentation of fruit juice or molasses by yeast naturally halt when alcohol reaches about $14\\%$ concentration?",
                    "options": [
                        "High alcohol concentrations denature and kill the living yeast cells, stopping enzyme activity",
                        "All water in the mixture evaporates",
                        "The sugar turns into solid diamond",
                        "Carbon dioxide suffocates the yeast within seconds"
                    ],
                    "answer": "High alcohol concentrations denature and kill the living yeast cells, stopping enzyme activity",
                    "explanation": "Yeast cannot survive in alcohol concentrations exceeding ~14–15%, halting fermentation unless fortified or distilled."
                }
            ]
        },
        {
            "id": "m14",
            "moduleNumber": 14,
            "title": "Polyhydric Alcohols: Ethylene Glycol & Glycerol",
            "tagline": "Dihydric and trihydric alcohols: Ethylene Glycol (automobile radiator antifreeze, Dacron polyester) and Glycerol (soap byproduct, humectant, nitroglycerine/dynamite).",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Ethylene Glycol (Ethane-1,2-diol, $HO-CH_2-CH_2-OH$)</h3><p>A dihydric alcohol (glycol) containing two hydroxyl groups on adjacent carbons:</p><ul><li><b>Automobile Radiator Antifreeze</b>:<p>Ethylene glycol forms extensive intermolecular hydrogen bonds with water. A <b>$60\\%\text{ glycol} : 40\\%\text{ water}$ solution depresses the freezing point of water to approximately $\\mathbf{-45^\\circ\text{C}}$</b> while simultaneously elevating its boiling point to ~$108^\\circ\text{C}$.</p><p>This prevents vehicle engine coolant from freezing in sub-zero polar/winter conditions (which would crack engine blocks as ice expands) and prevents boiling over in hot summers.</p></li><li><b>Polyester Synthesis (Terylene / Dacron)</b>:<p>Condensation polymerization of ethylene glycol with <b>Terephthalic acid</b> produces the ubiquitous polyester fiber <b>Terylene (Dacron / PET plastic)</b> used in clothing fabrics, soft drink bottles, and packaging film.</p></li><li><b>Toxicity Hazard</b>: Sweet-tasting but dangerously toxic; metabolized by the body into <b>oxalic acid</b> which precipitates as insoluble calcium oxalate crystals in renal tubules, causing acute fatal kidney failure.</li></ul><h3>2. Glycerol / Glycerine (Propane-1,2,3-triol, $C_3H_5(OH)_3$)</h3><p>A trihydric alcohol having three hydroxyl groups ($CH_2OH-CHOH-CH_2OH$):</p><ul><li><b>Origin</b>: Formed as a major valuable byproduct during the <b>saponification</b> (soap manufacturing) of animal fats and vegetable oils (triglycerides) with alkali ($NaOH$ or $KOH$).</li><li><b>Physical Nature</b>: Clear, viscous, non-toxic, sweet-tasting liquid with high boiling point ($290^\\circ\text{C}$) due to extensive three-dimensional hydrogen bonding network.</li><li><b>Commercial Applications</b>:<ol><li><b>Humectant & Cosmetics</b>: Highly hygroscopic (absorbs moisture from air), widely used in moisturizing skin creams, lotions, transparent soaps, and toothpastes to prevent drying out.</li><li><b>Pharmaceuticals</b>: Sweetening agent in cough syrups, solvent for ear drops, and gentle rectal suppositories for constipation.</li><li><b>Explosives Manufacture</b>: Reacts with a nitrating mixture of concentrated $HNO_3$ and $H_2SO_4$ to form <b>Nitroglycerine (Glyceryl trinitrate)</b>, the active explosive constituent of <b>Dynamite</b>.</li></ol></li></ul>",
            "pointsToRemember": [
                "Ethylene glycol ($HO-CH_2-CH_2-OH$) lowers water freezing point to $-45^\\circ\text{C}$ as automobile engine antifreeze.",
                "Ethylene glycol reacts with terephthalic acid to form Terylene (Dacron/PET polyester).",
                "Glycerol (glycerine, $C_3H_5(OH)_3$) is a trihydric alcohol obtained as a byproduct of soap saponification.",
                "Glycerol is used as a humectant in cosmetics, cough syrups, and nitrated to synthesize Nitroglycerine (Dynamite)."
            ],
            "keyNotes": [
                "Nitroglycerine serves a dual role: in defense engineering it is a high explosive, while in clinical cardiology tiny sublingual doses act as a rapid vasodilator to relieve acute angina pectoris chest pain."
            ],
            "questions": [
                {
                    "id": "ch6_m14_q01",
                    "question": "Why is ethylene glycol added to water in the cooling radiators of automobiles operated in cold climates?",
                    "options": [
                        "It drastically lowers the freezing point of water (antifreeze) to prevent radiator freezing while elevating boiling point",
                        "It makes water conduct electricity to recharge the car battery",
                        "It prevents engine exhaust smoke",
                        "It turns water into combustible fuel"
                    ],
                    "answer": "It drastically lowers the freezing point of water (antifreeze) to prevent radiator freezing while elevating boiling point",
                    "explanation": "A mixture of ethylene glycol and water depresses freezing point to ~$-45^\\circ\text{C}$ and elevates boiling point to ~$108^\\circ\text{C}$, protecting engines in all seasons."
                },
                {
                    "id": "ch6_m14_q02",
                    "question": "What valuable chemical substance is obtained as a major commercial byproduct during the saponification (soap-making) reaction?",
                    "options": [
                        "Glycerol (Glycerine)",
                        "Methanol",
                        "Ethylene glycol",
                        "Acetone"
                    ],
                    "answer": "Glycerol (Glycerine)",
                    "explanation": "Alkaline hydrolysis of fats (triglycerides) yields soap (fatty acid salts) and liberates glycerol (propane-1,2,3-triol) in the spent lye."
                },
                {
                    "id": "ch6_m14_q03",
                    "question": "Which polymer fiber is synthesized by the condensation polymerization of ethylene glycol with terephthalic acid?",
                    "options": [
                        "Terylene (Dacron / PET)",
                        "Nylon-6,6",
                        "Bakelite",
                        "Teflon"
                    ],
                    "answer": "Terylene (Dacron / PET)",
                    "explanation": "Condensation of ethylene glycol with terephthalic acid yields polyethylene terephthalate (PET / Terylene / Dacron)."
                },
                {
                    "id": "ch6_m14_q04",
                    "question": "Why is glycerol extensively included in the formulation of cosmetic moisturizing creams and toothpastes?",
                    "options": [
                        "It is a hygroscopic humectant that absorbs atmospheric moisture and prevents products from drying out",
                        "It acts as a bleaching agent",
                        "It is an abrasive mineral powder",
                        "It kills bacteria with radioactive waves"
                    ],
                    "answer": "It is a hygroscopic humectant that absorbs atmospheric moisture and prevents products from drying out",
                    "explanation": "With three hydrophilic $-OH$ groups, glycerol readily absorbs and retains moisture, keeping skin supple and cosmetics moist."
                },
                {
                    "id": "ch6_m14_q05",
                    "question": "What powerful explosive is synthesized by the nitration of glycerol with a mixture of concentrated nitric acid and sulfuric acid?",
                    "options": [
                        "Nitroglycerine (Glyceryl trinitrate)",
                        "TNT (Trinitrotoluene)",
                        "RDX (Cyclonite)",
                        "Picric acid"
                    ],
                    "answer": "Nitroglycerine (Glyceryl trinitrate)",
                    "explanation": "Nitration of glycerol yields nitroglycerine, an oily yellow shock-sensitive liquid explosive used in dynamite."
                },
                {
                    "id": "ch6_m14_q06",
                    "question": "What dual medical role does nitroglycerine play in clinical medicine outside of its use as an explosive?",
                    "options": [
                        "Sublingual vasodilator used to rapidly alleviate acute angina pectoris chest pain",
                        "General anesthetic for brain surgery",
                        "Antibiotic against tuberculosis",
                        "Vaccine against tetanus"
                    ],
                    "answer": "Sublingual vasodilator used to rapidly alleviate acute angina pectoris chest pain",
                    "explanation": "In low medical doses, nitroglycerine releases nitric oxide ($NO$), relaxing coronary blood vessels to treat cardiac angina."
                },
                {
                    "id": "ch6_m14_q07",
                    "question": "How many hydroxyl ($-OH$) groups are present in a molecule of glycerol (glycerine)?",
                    "options": [
                        "3 (Trihydric alcohol)",
                        "2 (Dihydric alcohol)",
                        "1 (Monohydric alcohol)",
                        "4 (Tetrahydric alcohol)"
                    ],
                    "answer": "3 (Trihydric alcohol)",
                    "explanation": "Glycerol is propane-1,2,3-triol, containing three distinct $-OH$ groups attached to a three-carbon backbone."
                },
                {
                    "id": "ch6_m14_q08",
                    "question": "Why is accidental ingestion of ethylene glycol antifreeze fatal if untreated?",
                    "options": [
                        "It is metabolized by the liver into oxalic acid, which precipitates as calcium oxalate crystals, causing acute renal failure",
                        "It causes instantaneous cardiac explosion",
                        "It decomposes into chlorine gas in the stomach",
                        "It freezes blood solid at room temperature"
                    ],
                    "answer": "It is metabolized by the liver into oxalic acid, which precipitates as calcium oxalate crystals, causing acute renal failure",
                    "explanation": "Enzymatic oxidation converts ethylene glycol into oxalic acid, forming needle-like calcium oxalate crystals that destroy kidney nephrons."
                },
                {
                    "id": "ch6_m14_q09",
                    "question": "What is the systematic IUPAC name of glycerol?",
                    "options": [
                        "Propane-1,2,3-triol",
                        "Ethane-1,2-diol",
                        "Propan-2-ol",
                        "Butane-1,4-diol"
                    ],
                    "answer": "Propane-1,2,3-triol",
                    "explanation": "Glycerol consists of a three-carbon propane chain with hydroxyl groups on each carbon: Propane-1,2,3-triol."
                },
                {
                    "id": "ch6_m14_q10",
                    "question": "Why does glycerol possess an unusually high viscosity (thick flow) compared to ethanol and water?",
                    "options": [
                        "Extensive three-dimensional intermolecular hydrogen bonding involving all three hydroxyl groups creates strong internal friction",
                        "It contains dissolved sand particles",
                        "It is a heavy metal compound",
                        "It contains metallic bonds"
                    ],
                    "answer": "Extensive three-dimensional intermolecular hydrogen bonding involving all three hydroxyl groups creates strong internal friction",
                    "explanation": "Each glycerol molecule can form multiple hydrogen bonds via its three $-OH$ groups, creating an interlocking viscous network."
                }
            ]
        },
        {
            "id": "m15",
            "moduleNumber": 15,
            "title": "Ethers, Aldehydes & Ketones: Diethyl Ether, Formaldehyde & Acetone",
            "tagline": "Diethyl ether (anesthesia history, peroxide hazard), Formaldehyde (Formalin 40% preservative, Bakelite resin), Acetaldehyde, and Acetone (nail polish remover, diabetic ketosis).",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Ethers: Diethyl Ether ($C_2H_5-O-C_2H_5$)</h3><ul><li><b>Historical Inhalation Anesthesia</b>: First demonstrated publicly in 1846 by American dentist <b>William T. G. Morton</b> at Massachusetts General Hospital ('Ether Day'). Revolutionized surgery by rendering patients completely pain-free, though replaced today by safer non-flammable fluorinated ethers (isoflurane, sevoflurane).</li><li><b>Explosion Hazard: Peroxide Formation</b>: When exposed to atmospheric oxygen and light over extended storage, ethers auto-oxidize into dangerous <b>diethyl ether peroxides</b>:</li>$$C_2H_5-O-C_2H_5 + O_2 \\xrightarrow{h\nu} \text{Explosive Ether Hydroperoxides}$$<p>Distilling old bottles to dryness can cause violent detonations; detected by adding acidified potassium iodide ($KI$) and starch (turns blue).</p></li></ul><h3>2. Aldehydes: Formaldehyde (Methanal, $HCHO$)</h3><ul><li><b>Physical State</b>: Pungent, irritating gas at room temperature ($b.p. -19^\\circ\text{C}$).</li><li><b>Formalin Solution</b>: A <b>$40\\%$ aqueous solution of formaldehyde</b> (containing ~$10\\%$ methanol stabilizer to prevent polymerization into paraformaldehyde).</li><li><b>Biological Preservative</b>: Universal preservative for biological, anatomical, and zoological specimens in biology laboratories. Formaldehyde irreversibly cross-links amine groups in cellular proteins, rendering them rigid and immune to bacterial putrefaction.</li><li><b>Polymer Chemistry</b>: Reacts with phenol in the presence of acid or base catalysts to form <b>Bakelite</b> (the first synthetic thermosetting plastic, Leo Baekeland, 1907) and melamine resins.</li></ul><h3>3. Ketones: Acetone (Propan-2-one, $CH_3COCH_3$)</h3><ul><li><b>Physical Nature</b>: Volatile, highly flammable, colorless liquid ($b.p. 56^\\circ\text{C}$) with a sweetish fruity odor; miscible with water in all proportions.</li><li><b>Commercial Uses</b>: Ubiquitous laboratory and industrial solvent, active ingredient in <b>nail polish removers</b>, paint thinners, and solvent for storing dissolved acetylene gas in cylinders.</li><li><b>Biomedical Relevance: Diabetic Ketoacidosis</b>: Acetone is a major <b>ketone body</b> produced in uncontrolled Diabetes Mellitus. When cells lack insulin to utilize glucose, the liver metabolizes fats into acetoacetate, $\beta$-hydroxybutyrate, and acetone. Acetone is exhaled through the lungs, giving the patient's breath a characteristic <b>fruity/nail-polish smell</b>.</li></ul>",
            "pointsToRemember": [
                "Diethyl ether was the first clinical general anesthetic (William Morton, 1846); forms explosive peroxides upon prolonged air exposure.",
                "Formalin is a $40\\%$ aqueous solution of formaldehyde ($HCHO$), used to preserve biological specimens and synthesize Bakelite.",
                "Acetone ($CH_3COCH_3$) is a volatile solvent used in nail polish removers and to safely store dissolved acetylene.",
                "Diabetic ketoacidosis produces excess acetone exhaled via breath with a characteristic fruity odor."
            ],
            "keyNotes": [
                "Urotropine (Hexamethylenetetramine), a urinary antiseptic and precursor to the military explosive RDX, is synthesized by reacting formaldehyde with ammonia: $6HCHO + 4NH_3 \rightarrow (CH_2)_6N_4 + 6H_2O$."
            ],
            "questions": [
                {
                    "id": "ch6_m15_q01",
                    "question": "What is the chemical composition of 'Formalin', widely used in biology laboratories for preserving anatomical and zoological specimens?",
                    "options": [
                        "A $40\\%$ aqueous solution of formaldehyde (methanal, $HCHO$)",
                        "Pure absolute ethanol",
                        "Dilute acetic acid solution",
                        "$10\\%$ copper sulfate solution"
                    ],
                    "answer": "A $40\\%$ aqueous solution of formaldehyde (methanal, $HCHO$)",
                    "explanation": "Formalin is a 37–40% aqueous solution of formaldehyde gas stabilized with ~10% methanol, preventing specimen decomposition by cross-linking proteins."
                },
                {
                    "id": "ch6_m15_q02",
                    "question": "Which medical pioneer publicly demonstrated the first successful use of diethyl ether as an inhalation general anesthetic in 1846?",
                    "options": [
                        "William T. G. Morton",
                        "Alexander Fleming",
                        "Joseph Lister",
                        "Louis Pasteur"
                    ],
                    "answer": "William T. G. Morton",
                    "explanation": "William Morton demonstrated ether anesthesia at Massachusetts General Hospital ('Ether Dome') on October 16, 1846, initiating painless surgery."
                },
                {
                    "id": "ch6_m15_q03",
                    "question": "Why is it dangerous to distill an old, long-stored bottle of diethyl ether to dryness in a chemistry laboratory?",
                    "options": [
                        "Exposure to air and light slowly oxidizes ether into highly explosive organic peroxides that detonate upon concentration and heating",
                        "The glass of the flask turns into lead",
                        "Ether decomposes into toxic mercury vapor",
                        "It forms solid ice that cracks the heater"
                    ],
                    "answer": "Exposure to air and light slowly oxidizes ether into highly explosive organic peroxides that detonate upon concentration and heating",
                    "explanation": "Atmospheric auto-oxidation forms shock-sensitive ether peroxides; distilling ether to dryness concentrates these peroxides, risking violent detonation."
                },
                {
                    "id": "ch6_m15_q04",
                    "question": "What ketone is widely employed in cosmetics as the primary solvent in commercial nail polish removers?",
                    "options": [
                        "Acetone (Propanone, $CH_3COCH_3$)",
                        "Formaldehyde",
                        "Glycerol",
                        "Methanol"
                    ],
                    "answer": "Acetone (Propanone, $CH_3COCH_3$)",
                    "explanation": "Acetone is a rapid-acting organic solvent that dissolves nitrocellulose and polymers found in nail polishes."
                },
                {
                    "id": "ch6_m15_q05",
                    "question": "Why does the breath of a patient experiencing severe diabetic ketoacidosis exhibit a characteristic sweet, fruity, or nail-polish-like odor?",
                    "options": [
                        "Excessive fat breakdown in insulin-deficient cells generates high levels of the ketone body acetone, which is expelled through exhaled breath",
                        "The patient has consumed excess fruit sugar",
                        "The lungs produce formaldehyde naturally",
                        "Diabetic patients inhale excess perfume"
                    ],
                    "answer": "Excessive fat breakdown in insulin-deficient cells generates high levels of the ketone body acetone, which is expelled through exhaled breath",
                    "explanation": "In diabetic ketoacidosis, excessive lipolysis generates acetoacetate that decarboxylates into volatile acetone, eliminated via exhaled air."
                },
                {
                    "id": "ch6_m15_q06",
                    "question": "Which synthetic thermosetting plastic is produced by the condensation reaction between phenol and formaldehyde?",
                    "options": [
                        "Bakelite",
                        "Nylon-6",
                        "Polystyrene",
                        "Polyvinyl chloride (PVC)"
                    ],
                    "answer": "Bakelite",
                    "explanation": "Leo Baekeland synthesized Bakelite (phenol-formaldehyde resin) in 1907, creating the world's first fully synthetic plastic."
                },
                {
                    "id": "ch6_m15_q07",
                    "question": "What is the systematic IUPAC name for acetone?",
                    "options": [
                        "Propan-2-one",
                        "Ethanal",
                        "Propan-1-ol",
                        "Butan-2-one"
                    ],
                    "answer": "Propan-2-one",
                    "explanation": "Acetone has a three-carbon chain with the carbonyl oxygen on the central carbon-2: Propan-2-one ($CH_3COCH_3$)."
                },
                {
                    "id": "ch6_m15_q08",
                    "question": "What urinary antiseptic and precursor to the military explosive RDX is formed by the reaction of formaldehyde with ammonia?",
                    "options": [
                        "Urotropine (Hexamethylenetetramine)",
                        "Aspirin",
                        "Paracetamol",
                        "Chloroform"
                    ],
                    "answer": "Urotropine (Hexamethylenetetramine)",
                    "explanation": "Formaldehyde reacts with ammonia ($6HCHO + 4NH_3 \rightarrow (CH_2)_6N_4$) to form urotropine, nitrated to produce the explosive RDX."
                },
                {
                    "id": "ch6_m15_q09",
                    "question": "What functional group isomer of propanal ($CH_3CH_2CHO$) belongs to the ketone class?",
                    "options": [
                        "Acetone (Propan-2-one, $CH_3COCH_3$)",
                        "Propanoic acid",
                        "Propan-1-ol",
                        "Methyl ethyl ether"
                    ],
                    "answer": "Acetone (Propan-2-one, $CH_3COCH_3$)",
                    "explanation": "Both propanal (aldehyde) and propanone (acetone, ketone) share the identical molecular formula $C_3H_6O$, making them functional group isomers."
                },
                {
                    "id": "ch6_m15_q10",
                    "question": "Which test reagent produces a characteristic silver mirror on the clean glass walls of a test tube when heated with an aldehyde?",
                    "options": [
                        "Tollens' Reagent (Ammoniacal silver nitrate solution)",
                        "Lucas Reagent",
                        "Benedict's solution alone",
                        "Biuret reagent"
                    ],
                    "answer": "Tollens' Reagent (Ammoniacal silver nitrate solution)",
                    "explanation": "Aldehydes reduce Tollens' reagent ($[Ag(NH_3)_2]^+$) to elemental silver, which deposits as a shiny reflective silver mirror on glass."
                }
            ]
        },
        {
            "id": "m16",
            "moduleNumber": 16,
            "title": "Carboxylic Acids: Formic Acid, Acetic Acid, Oxalic Acid & Benzoic Acid",
            "tagline": "Formic acid (ant/bee stings, $HCOOH$), Acetic acid (vinegar 5-8%, glacial acetic acid m.p. 16.6 deg C), Oxalic acid (ink stains, spinach, kidney stones), and Benzoic acid (sodium benzoate food preservative).",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Formic Acid (Methanoic Acid, $HCOOH$)</h3><ul><li><b>Natural Origin</b>: Derived from Latin <i>formica</i> ('ant'); present in the venomous stings of <b>red ants, bees, wasps, and stinging nettle hair spines</b>. Causes acute skin burning and inflammation; neutralized by applying a mild basic paste of baking soda ($NaHCO_3$) or calamine lotion ($ZnCO_3$).</li><li><b>Unique Reducing Property</b>: Formic acid possesses both a carboxylic group ($-COOH$) and a hidden formyl aldehyde group ($-CHO$). Hence, alone among carboxylic acids, <b>it reduces Tollens' reagent to a silver mirror and decolorizes acidified $KMnO_4$</b>.</li><li><b>Uses</b>: Coagulating natural rubber latex, leather tanning, and textile dyeing.</li></ul><h3>2. Acetic Acid (Ethanoic Acid, $CH_3COOH$)</h3><ul><li><b>Vinegar</b>: A <b>$5\\%\text{ to }8\\%$ dilute aqueous solution of acetic acid</b>, produced by aerobic fermentation of alcohol or sugarcane juice by <i>Acetobacter aceti</i> bacteria. Extensively used as a food seasoning and biological preservative for pickles.</li><li><b>Glacial Acetic Acid</b>: $100\\%$ pure anhydrous acetic acid freezes into transparent, glass-like ice crystals at <b>$16.6^\\circ\text{C}$ ($289.8\text{ K}$)</b> in temperate winters, giving it the title 'glacial'.</li></ul><h3>3. Oxalic Acid ($HOOC-COOH$)</h3><ul><li><b>Natural Occurrence</b>: Found in tomatoes, spinach, and wood sorrel (<i>Oxalis</i>).</li><li><b>Chemical Reactions & Medical Significance</b>:<ol><li><b>Ink and Rust Stain Removal</b>: Oxalic acid forms a water-soluble complex ion with insoluble ferric salts: $[Fe(C_2O_4)_3]^{3-}$, effectively bleaching out rust ($Fe_2O_3$) and iron gall ink spots from cotton fabrics without damaging cellulose fibers.</li><li><b>Kidney Stones (Renal Calculi)</b>: Binds with dietary calcium ions to precipitate insoluble <b>Calcium Oxalate ($CaC_2O_4$)</b> crystals, which constitute ~$70\text{--}80\\%$ of all human kidney stones.</li></ol></li></ul><h3>4. Benzoic Acid ($C_6H_5COOH$) & Sodium Benzoate</h3><p>The simplest aromatic carboxylic acid. Its water-soluble sodium salt, <b>Sodium Benzoate ($C_6H_5COONa$)</b>, is the most widely utilized chemical <b>food preservative</b> in jams, jellies, packaged fruit juices, and carbonated soft drinks, inhibiting growth of bacteria, molds, and yeasts in acidic media ($pH < 4.5$).</p>",
            "pointsToRemember": [
                "Formic acid ($HCOOH$) is present in red ant and bee stings; unique carboxylic acid that reduces Tollens' reagent.",
                "Vinegar is a $5\text{--}8\\%$ aqueous solution of acetic acid; pure anhydrous acetic acid freezes at $16.6^\\circ\text{C}$ (glacial).",
                "Oxalic acid removes rust and ink stains by complexing iron; precipitates as calcium oxalate in kidney stones.",
                "Sodium Benzoate ($C_6H_5COONa$) is the premier food preservative for acidic packaged juices, jams, and sodas."
            ],
            "keyNotes": [
                "Tartaric acid is found in tamarind and unripened grapes; mixed with sodium bicarbonate and starch, it constitutes modern commercial 'baking powder'."
            ],
            "questions": [
                {
                    "id": "ch6_m16_q01",
                    "question": "Which carboxylic acid is responsible for the intense burning sensation and inflammation caused by red ant bites and bee stings?",
                    "options": [
                        "Formic acid (Methanoic acid, $HCOOH$)",
                        "Acetic acid ($CH_3COOH$)",
                        "Lactic acid",
                        "Citric acid"
                    ],
                    "answer": "Formic acid (Methanoic acid, $HCOOH$)",
                    "explanation": "Red ants and bees inject formic acid (methanoic acid) upon stinging, causing localized pain that can be soothed with mild bases like baking soda."
                },
                {
                    "id": "ch6_m16_q02",
                    "question": "What is the chemical composition of ordinary household vinegar used in food seasoning and pickling?",
                    "options": [
                        "A $5\\%\text{ to }8\\%$ dilute aqueous solution of acetic acid (ethanoic acid)",
                        "$100\\%$ pure glacial acetic acid",
                        "$50\\%$ ethanol solution",
                        "Dilute hydrochloric acid"
                    ],
                    "answer": "A $5\\%\text{ to }8\\%$ dilute aqueous solution of acetic acid (ethanoic acid)",
                    "explanation": "Vinegar is a 5–8% solution of ethanoic acid in water, produced by bacterial fermentation of ethanol using <i>Acetobacter aceti</i>."
                },
                {
                    "id": "ch6_m16_q03",
                    "question": "Why is pure anhydrous acetic acid commonly termed 'Glacial Acetic Acid'?",
                    "options": [
                        "It freezes into ice-like transparent crystals at $16.6^\\circ\text{C}$ during cold winter weather",
                        "It is mined directly from glaciers in Greenland",
                        "It dissolves solid ice instantly upon contact",
                        "It remains a liquid down to absolute zero"
                    ],
                    "answer": "It freezes into ice-like transparent crystals at $16.6^\\circ\text{C}$ during cold winter weather",
                    "explanation": "Pure water-free acetic acid has a freezing point of $16.6^\\circ\text{C}$ ($290\text{ K}$), solidifying into crystal sheets resembling glacial ice."
                },
                {
                    "id": "ch6_m16_q04",
                    "question": "Which organic acid is widely employed to remove rust and ink stains from clothing fabrics?",
                    "options": [
                        "Oxalic acid",
                        "Formic acid",
                        "Acetic acid",
                        "Benzoic acid"
                    ],
                    "answer": "Oxalic acid",
                    "explanation": "Oxalic acid chelates insoluble iron(III) compounds into water-soluble iron-oxalate complexes, washing away rust and iron-based ink stains."
                },
                {
                    "id": "ch6_m16_q05",
                    "question": "What chemical substance forms the primary mineral constituent of approximately $70\text{ to }80\\%$ of human kidney stones (renal calculi)?",
                    "options": [
                        "Calcium oxalate ($CaC_2O_4$)",
                        "Sodium chloride",
                        "Magnesium sulfate",
                        "Potassium carbonate"
                    ],
                    "answer": "Calcium oxalate ($CaC_2O_4$)",
                    "explanation": "Excess dietary oxalate binds with calcium ions in urine, precipitating sharp, insoluble calcium oxalate crystals that aggregate into stones."
                },
                {
                    "id": "ch6_m16_q06",
                    "question": "Which chemical salt is universally used as a food preservative in packaged fruit squashes, tomato ketchups, and carbonated soft drinks?",
                    "options": [
                        "Sodium benzoate ($C_6H_5COONa$)",
                        "Sodium bicarbonate",
                        "Calcium sulfate",
                        "Potassium nitrate"
                    ],
                    "answer": "Sodium benzoate ($C_6H_5COONa$)",
                    "explanation": "Sodium benzoate inhibits the cellular growth of yeasts, molds, and bacteria in acidic foods and beverages ($pH < 4.5$)."
                },
                {
                    "id": "ch6_m16_q07",
                    "question": "Why does formic acid ($HCOOH$) reduce Tollens' reagent to a silver mirror, unlike all other carboxylic acids?",
                    "options": [
                        "Its structure contains an active formyl aldehyde group ($-CHO$) alongside its carboxyl group",
                        "It contains metallic silver particles",
                        "It is an inorganic mineral acid",
                        "It is a powerful base in water"
                    ],
                    "answer": "Its structure contains an active formyl aldehyde group ($-CHO$) alongside its carboxyl group",
                    "explanation": "In $H-COOH$, the hydrogen bonded to the carbonyl carbon functions like an aldehyde group, enabling it to act as a reducing agent."
                },
                {
                    "id": "ch6_m16_q08",
                    "question": "Which natural organic acid is abundantly present in citrus fruits such as lemons, limes, and oranges?",
                    "options": [
                        "Citric acid",
                        "Tartaric acid",
                        "Malic acid",
                        "Formic acid"
                    ],
                    "answer": "Citric acid",
                    "explanation": "Citric acid (a tricarboxylic acid) is the primary organic acid in lemons, limes, and oranges, giving them their characteristic sharp sour taste."
                },
                {
                    "id": "ch6_m16_q09",
                    "question": "Which organic acid is predominantly found in sour milk and yogurt?",
                    "options": [
                        "Lactic acid",
                        "Butyric acid",
                        "Formic acid",
                        "Acetic acid"
                    ],
                    "answer": "Lactic acid",
                    "explanation": "Lactic acid ($CH_3CH(OH)COOH$) is produced during the fermentation of milk lactose by <i>Lactobacillus</i> bacteria."
                },
                {
                    "id": "ch6_m16_q10",
                    "question": "What acid gives rancid butter its nauseating, pungent odor?",
                    "options": [
                        "Butyric acid (Butanoic acid)",
                        "Formic acid",
                        "Benzoic acid",
                        "Oxalic acid"
                    ],
                    "answer": "Butyric acid (Butanoic acid)",
                    "explanation": "Hydrolysis of butterfat triglycerides releases volatile free butyric acid ($C_3H_7COOH$), imparting the foul smell of rancidity."
                }
            ]
        },
        {
            "id": "m17",
            "moduleNumber": 17,
            "title": "Esters & Esterification: Fragrances, Flavors & Biodiesel",
            "tagline": "Fischer esterification mechanism (carboxylic acid + alcohol in conc. H2SO4), pleasant sweet fruity aromas (banana, pineapple, apple, orange), and transesterification in green Biodiesel.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Fischer Esterification Reaction (Emil Fischer, 1895)</h3><p>An <b>ester</b> is formed by the reversible condensation reaction between a <b>carboxylic acid</b> and an <b>alcohol</b> in the presence of a few drops of <b>concentrated sulfuric acid ($H_2SO_4$)</b> as a dehydrating catalyst:</p>$$R-COOH + R'-OH \\xrightleftharpoons{\text{conc. } H_2SO_4} R-COO-R' + H_2O$$<ul><li><b>Role of Concentrated $H_2SO_4$</b>: Acts as a Brønsted acid catalyst (protonating the carbonyl oxygen to enhance electrophilicity) and a powerful <b>dehydrating agent</b> that absorbs the product water, shifting the reversible equilibrium forward towards higher ester yield by Le Chatelier's Principle.</li><li><b>Isotopic Tracer Mechanism</b>: Using oxygen-18 labeled alcohol ($R'-^{18}OH$), isotopic studies proved that <b>the oxygen atom in the ester originates entirely from the alcohol molecule</b>, while the hydroxyl group ($-OH$) is cleaved from the carboxylic acid.</li></ul><h3>2. Characteristic Fruity Aromas and Flavorings</h3><p>Unlike the pungent, sharp odors of carboxylic acids, esters possess pleasant, sweet, diffusive <b>fruity aromas</b> and are widely used in perfumes, cosmetic scents, artificial confectionery essences, and beverage flavorings:</p><table border='1' cellpadding='4' style='border-collapse:collapse;'><tr><th>Ester Compound</th><th>Systematic Chemical Name</th><th>Characteristic Aroma / Flavor</th></tr><tr><td><b>Isoamyl acetate</b></td><td>3-Methylbutyl ethanoate</td><td><b>Banana / Pear</b></td></tr><tr><td><b>Ethyl butyrate</b></td><td>Ethyl butanoate</td><td><b>Pineapple</b></td></tr><tr><td><b>Octyl acetate</b></td><td>Octyl ethanoate</td><td><b>Orange</b></td></tr><tr><td><b>Methyl salicylate</b></td><td>Methyl 2-hydroxybenzoate</td><td><b>Oil of Wintergreen</b> (muscle pain balms, e.g., Iodex)</td></tr><tr><td><b>Methyl butyrate</b></td><td>Methyl butanoate</td><td><b>Apple</b></td></tr><tr><td><b>Benzyl acetate</b></td><td>Benzyl ethanoate</td><td><b>Jasmine flower</b></td></tr></table><h3>3. Green Energy Application: Biodiesel Manufacture</h3><p><b>Biodiesel</b> is a renewable diesel replacement produced by <b>Transesterification</b> of vegetable oils (jatropha oil, pongamia oil, recycled cooking oil) with methanol in the presence of a base catalyst ($NaOH$ or $KOH$):</p>$$\text{Triglyceride (Vegetable Oil)} + 3CH_3OH \\xrightarrow{KOH} 3\text{ Fatty Acid Methyl Esters (Biodiesel)} + \text{Glycerol (Byproduct)}$$<p>This reaction drastically reduces the viscosity of raw vegetable oils, allowing them to burn cleanly in standard diesel engines without engine modification.</p>",
            "pointsToRemember": [
                "Fischer esterification: Carboxylic acid + Alcohol $\rightarrow$ Ester + Water, catalyzed by concentrated $H_2SO_4$.",
                "Concentrated $H_2SO_4$ absorbs water to drive equilibrium forward by Le Chatelier's Principle.",
                "Oxygen-18 labeling proves the ester oxygen comes from the alcohol, not the carboxylic acid.",
                "Esters provide fruity fragrances: Isoamyl acetate (banana), Ethyl butyrate (pineapple), Octyl acetate (orange), Methyl salicylate (wintergreen/pain balms).",
                "Transesterification of vegetable oils with methanol yields Fatty Acid Methyl Esters (Biodiesel) + Glycerol."
            ],
            "keyNotes": [
                "Methyl salicylate ('Oil of Wintergreen') gives topical pain relief balms (like Iodex and Moov) their distinct medicinal fragrance; it acts as a mild transdermal analgesic and counter-irritant."
            ],
            "questions": [
                {
                    "id": "ch6_m17_q01",
                    "question": "What type of chemical reaction produces an ester from the combination of a carboxylic acid and an alcohol?",
                    "options": [
                        "Fischer Esterification (condensation reaction catalyzed by concentrated sulfuric acid)",
                        "Saponification",
                        "Friedel-Crafts alkylation",
                        "Decarboxylation"
                    ],
                    "answer": "Fischer Esterification (condensation reaction catalyzed by concentrated sulfuric acid)",
                    "explanation": "Carboxylic acids react with alcohols in the presence of concentrated sulfuric acid catalyst to form esters and water."
                },
                {
                    "id": "ch6_m17_q02",
                    "question": "What dual chemical role does concentrated sulfuric acid ($H_2SO_4$) perform during Fischer esterification?",
                    "options": [
                        "It acts as an acid catalyst and a dehydrating agent that removes product water to drive equilibrium toward ester formation",
                        "It oxidizes the alcohol into pure carbon",
                        "It neutralizes the ester product",
                        "It prevents the reaction from getting hot"
                    ],
                    "answer": "It acts as an acid catalyst and a dehydrating agent that removes product water to drive equilibrium toward ester formation",
                    "explanation": "$H_2SO_4$ protonates the carbonyl to accelerate nucleophilic attack and captures water, shifting reversible equilibrium forward by Le Chatelier's principle."
                },
                {
                    "id": "ch6_m17_q03",
                    "question": "Which ester is responsible for the characteristic sweet aroma of ripe bananas and pears?",
                    "options": [
                        "Isoamyl acetate (3-Methylbutyl ethanoate)",
                        "Methyl salicylate",
                        "Ethyl formate",
                        "Benzyl benzoate"
                    ],
                    "answer": "Isoamyl acetate (3-Methylbutyl ethanoate)",
                    "explanation": "Isoamyl acetate has a pronounced sweet banana/pear scent, widely used as an artificial fruit flavoring in candies and beverages."
                },
                {
                    "id": "ch6_m17_q04",
                    "question": "Which ester, commonly known as 'Oil of Wintergreen', is the active ingredient providing the distinct scent and soothing warmth in topical pain-relief balms?",
                    "options": [
                        "Methyl salicylate",
                        "Ethyl acetate",
                        "Octyl acetate",
                        "Isoamyl butyrate"
                    ],
                    "answer": "Methyl salicylate",
                    "explanation": "Methyl salicylate (synthesized from salicylic acid and methanol) is the active rubefacient and analgesic in wintergreen-scented pain ointments."
                },
                {
                    "id": "ch6_m17_q05",
                    "question": "What chemical process is used to manufacture green renewable Biodiesel from raw vegetable oils (e.g., Jatropha oil) and methanol?",
                    "options": [
                        "Transesterification (converting triglycerides into fatty acid methyl esters and byproduct glycerol)",
                        "Direct fractional distillation",
                        "Fermentation with yeast",
                        "Electrolytic reduction"
                    ],
                    "answer": "Transesterification (converting triglycerides into fatty acid methyl esters and byproduct glycerol)",
                    "explanation": "Reacting vegetable triglycerides with methanol over base catalysts breaks heavy oils into low-viscosity Fatty Acid Methyl Esters (Biodiesel) and glycerol."
                },
                {
                    "id": "ch6_m17_q06",
                    "question": "Which ester gives artificial pineapple flavor to food and confectioneries?",
                    "options": [
                        "Ethyl butyrate (Ethyl butanoate)",
                        "Octyl acetate",
                        "Isoamyl acetate",
                        "Methyl salicylate"
                    ],
                    "answer": "Ethyl butyrate (Ethyl butanoate)",
                    "explanation": "Ethyl butyrate ($C_3H_7COOC_2H_5$) has an unmistakable, sweet pineapple aroma used in flavorings and perfumes."
                },
                {
                    "id": "ch6_m17_q07",
                    "question": "What did isotopic labeling experiments using oxygen-18 ($^{18}O$) prove about the mechanism of Fischer esterification?",
                    "options": [
                        "The oxygen atom bridging the ester linkage originates entirely from the alcohol, while the $-OH$ group is lost from the carboxylic acid",
                        "Oxygen is destroyed during the reaction",
                        "Both oxygens in the ester come from atmospheric air",
                        "Water comes entirely from the alcohol"
                    ],
                    "answer": "The oxygen atom bridging the ester linkage originates entirely from the alcohol, while the $-OH$ group is lost from the carboxylic acid",
                    "explanation": "When methanol with $^{18}O$ is reacted with benzoic acid, the $^{18}O$ label remains attached to the methyl group in the ester, showing acyl-oxygen cleavage."
                },
                {
                    "id": "ch6_m17_q08",
                    "question": "Which ester imparts the pleasant fragrance of oranges?",
                    "options": [
                        "Octyl acetate",
                        "Ethyl butyrate",
                        "Isoamyl acetate",
                        "Methyl butyrate"
                    ],
                    "answer": "Octyl acetate",
                    "explanation": "Octyl acetate ($CH_3COOC_8H_{17}$) is responsible for the fruity aroma associated with oranges and citrus flavors."
                },
                {
                    "id": "ch6_m17_q09",
                    "question": "What general sensory property distinguishes esters from carboxylic acids?",
                    "options": [
                        "Esters have sweet, pleasant, and fruity fragrances, whereas carboxylic acids typically have sharp, sour, or pungent odors",
                        "Esters are odorless rocks",
                        "Carboxylic acids smell like sweet flowers",
                        "Esters smell like rotten eggs"
                    ],
                    "answer": "Esters have sweet, pleasant, and fruity fragrances, whereas carboxylic acids typically have sharp, sour, or pungent odors",
                    "explanation": "Short-chain carboxylic acids smell harsh (vinegar, sweaty socks, rancidity), while esters have sweet, volatile fruity notes."
                },
                {
                    "id": "ch6_m17_q10",
                    "question": "What valuable chemical byproduct is separated during the transesterification process of biodiesel production?",
                    "options": [
                        "Glycerol (Glycerine)",
                        "Methanol",
                        "Sulfuric acid",
                        "Benzene"
                    ],
                    "answer": "Glycerol (Glycerine)",
                    "explanation": "The transesterification of vegetable oil triglycerides yields crude glycerol as a dense bottom layer, separated and refined for pharmaceutical use."
                }
            ]
        },
        {
            "id": "m18",
            "moduleNumber": 18,
            "title": "Soaps: Saponification Reaction, Micelles & Cleansing Action",
            "tagline": "Alkaline hydrolysis of fats (saponification), hard soaps (sodium) vs soft soaps (potassium), salting out using NaCl, amphiphilic soap structure, and micelle cleansing mechanism.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Chemistry of Soaps & Saponification</h3><p>A <b>soap</b> is a water-soluble <b>sodium or potassium salt of higher long-chain fatty acids</b> containing 12 to 18 carbon atoms (e.g., Stearic acid $C_{17}H_{35}COOH$, Palmitic acid $C_{15}H_{31}COOH$, Oleic acid $C_{17}H_{33}COOH$).</p><ul><li><b>Saponification Reaction</b>: Alkaline hydrolysis of animal fats or vegetable oils (glyceryl esters of fatty acids / triglycerides) with concentrated caustic soda ($NaOH$) or caustic potash ($KOH$):</li>$$\text{Fat / Oil (Triglyceride)} + 3NaOH \\xrightarrow{\text{Heat}} 3\text{ Soap (e.g., } C_{17}H_{35}COONa) + \text{Glycerol}$$<li><b>Hard Soap vs Soft Soap</b>:<ol><li><b>Hard Soaps (Sodium Salts, $R-COO^- Na^+$)</b>: Prepared with $NaOH$. Harder, dissolve slowly, used in <b>laundry washing soaps and detergent bars</b>.</li><li><b>Soft Soaps (Potassium Salts, $R-COO^- K^+$)</b>: Prepared with $KOH$. Softer, produce richer lather, gentle on skin, used in <b>toilet bathing soaps, shaving creams, and liquid hand soaps</b>.</li></ol></li><li><b>'Salting Out' of Soap</b>: Once saponification is complete, <b>common salt (Sodium chloride, $NaCl$)</b> is added to the boiling spent mixture. By the <b>Common Ion Effect</b> ($[Na^+]$ increases drastically), the ionic product $[RCOO^-][Na^+]$ exceeds the solubility product ($K_{sp}$) of soap, causing the solid soap to precipitate out cleanly and float to the surface.</li></ul><h3>2. Dual Amphiphilic Structure & Micelle Mechanism</h3><p>A soap molecule (e.g., Sodium stearate, $C_{17}H_{35}COO^- Na^+$) consists of two chemically opposite parts:</p><ul><li><b>Hydrophobic Non-polar Hydrocarbon Tail ($C_{17}H_{35}-$, 'Water-fearing')</b>: Insoluble in water, but readily soluble in oily and greasy organic dirt.</li><li><b>Hydrophilic Polar Ionic Head ($-COO^- Na^+$, 'Water-loving')</b>: Highly soluble in water due to dipole-ion interactions.</li></ul><h3>3. Mechanism of Cleansing Action</h3><ol><li><b>Micelle Formation</b>: In water above the <b>Critical Micelle Concentration (CMC)</b>, soap molecules assemble into spherical aggregates called <b>Micelles</b> (containing 50 to 100 molecules). The hydrophobic hydrocarbon tails point inward toward the interior core to escape water, while the hydrophilic polar carboxylate heads point outward into surrounding water.</li><li><b>Emulsification of Grease</b>: Oily dirt from fabric or skin is trapped inside the hydrophobic core of the micelle.</li><li><b>Electrostatic Repulsion & Rinsing</b>: Because all micelle surfaces are decorated with negative charges ($-COO^-$), micelles electrostatically repel each other and cannot coalesce. They remain stably suspended as a colloidal emulsion in water and are effortlessly rinsed away with running water.</li></ol>",
            "pointsToRemember": [
                "Soap is a sodium or potassium salt of long-chain fatty acids (stearic, palmitic, oleic acid).",
                "Saponification: Fat/oil + $NaOH$ (hard laundry soap) or $KOH$ (soft toilet/shaving soap) $\rightarrow$ Soap + Glycerol.",
                "Common salt ($NaCl$) is added to 'salt out' soap by the common ion effect.",
                "Soap has a hydrophobic hydrocarbon tail and a hydrophilic ionic carboxylate head.",
                "Micelles trap oil/dirt inside the non-polar core while negative heads disperse in water for easy rinsing."
            ],
            "keyNotes": [
                "Transparent soaps (like Pears) are manufactured by dissolving regular soap in ethanol and gently distilling off excess solvent, leaving clear, un-crystallized soap bars."
            ],
            "questions": [
                {
                    "id": "ch6_m18_q01",
                    "question": "What is the chemical definition of a soap?",
                    "options": [
                        "A water-soluble sodium or potassium salt of a long-chain fatty acid ($C_{12} - C_{18}$)",
                        "A synthetic petroleum sulfonate",
                        "A calcium salt of sulfuric acid",
                        "A pure cellulose polymer"
                    ],
                    "answer": "A water-soluble sodium or potassium salt of a long-chain fatty acid ($C_{12} - C_{18}$)",
                    "explanation": "Soaps are sodium or potassium salts of higher fatty acids such as stearic ($C_{17}H_{35}COOH$), palmitic ($C_{15}H_{31}COOH$), or oleic acid."
                },
                {
                    "id": "ch6_m18_q02",
                    "question": "Why is common salt (sodium chloride, $NaCl$) added to the hot reaction mixture during the industrial manufacture of soap?",
                    "options": [
                        "To precipitate (salt out) the solid soap cleanly from solution via the common ion effect",
                        "To bleach the soap white",
                        "To make the soap smell pleasant",
                        "To neutralize excess glycerol"
                    ],
                    "answer": "To precipitate (salt out) the solid soap cleanly from solution via the common ion effect",
                    "explanation": "Adding $NaCl$ floods the solution with $Na^+$ ions, exceeding the solubility product ($K_{sp}$) of sodium stearate and causing soap to precipitate out."
                },
                {
                    "id": "ch6_m18_q03",
                    "question": "What distinguishes 'soft soaps' used in shaving creams and toilet bathing bars from 'hard soaps' used for laundry washing?",
                    "options": [
                        "Soft soaps are potassium salts of fatty acids (prepared with $KOH$), while hard soaps are sodium salts (prepared with $NaOH$)",
                        "Soft soaps contain crushed diamond powder",
                        "Hard soaps are made from pure water without oil",
                        "Soft soaps contain radioactive isotopes"
                    ],
                    "answer": "Soft soaps are potassium salts of fatty acids (prepared with $KOH$), while hard soaps are sodium salts (prepared with $NaOH$)",
                    "explanation": "Potassium salts ($RCOO^- K^+$) are softer, lather more luxuriously, and dissolve more easily in water than sodium salts ($RCOO^- Na^+$)."
                },
                {
                    "id": "ch6_m18_q04",
                    "question": "In the spherical micelle structure formed by soap molecules in water, how are the molecular components oriented?",
                    "options": [
                        "Hydrophobic hydrocarbon tails point inward toward the central oily core, while hydrophilic ionic heads point outward into surrounding water",
                        "Hydrophilic heads face inward and hydrophobic tails face outward",
                        "All molecules lie in flat parallel lines",
                        "All molecules dissolve into free atoms"
                    ],
                    "answer": "Hydrophobic hydrocarbon tails point inward toward the central oily core, while hydrophilic ionic heads point outward into surrounding water",
                    "explanation": "Non-polar hydrocarbon tails cluster internally to avoid polar water dipoles, trapping greasy dirt, while polar $-COO^-$ heads face the aqueous phase."
                },
                {
                    "id": "ch6_m18_q05",
                    "question": "Why do suspended soap micelles in dirty water NOT aggregate or coalesce back together into large clumps?",
                    "options": [
                        "Mutual electrostatic repulsion between the identically charged negative ($-COO^-$) ionic heads covering their outer surfaces",
                        "They are held together by magnetic forces",
                        "Soap micelles are solid steel spheres",
                        "Water evaporates between them"
                    ],
                    "answer": "Mutual electrostatic repulsion between the identically charged negative ($-COO^-$) ionic heads covering their outer surfaces",
                    "explanation": "Because all micelle surfaces carry negative charges ($-COO^-$), like-charge Coulombic repulsion keeps them stably suspended as an emulsion."
                },
                {
                    "id": "ch6_m18_q06",
                    "question": "What is the valuable chemical byproduct obtained during the saponification of triglycerides?",
                    "options": [
                        "Glycerol (Glycerine)",
                        "Ethanol",
                        "Methanol",
                        "Ethylene glycol"
                    ],
                    "answer": "Glycerol (Glycerine)",
                    "explanation": "Alkaline hydrolysis of triglyceride esters liberates propane-1,2,3-triol (glycerol) alongside the fatty acid salts."
                },
                {
                    "id": "ch6_m18_q07",
                    "question": "What is the threshold concentration of surfactant molecules in solution above which micelle formation begins called?",
                    "options": [
                        "Critical Micelle Concentration (CMC)",
                        "Lattice threshold",
                        "Saturation constant",
                        "Boiling index"
                    ],
                    "answer": "Critical Micelle Concentration (CMC)",
                    "explanation": "The Critical Micelle Concentration (CMC) is the minimum concentration at which surfactant unimers spontaneously aggregate into colloidal micelles."
                },
                {
                    "id": "ch6_m18_q08",
                    "question": "Which part of the sodium stearate ($C_{17}H_{35}COO^- Na^+$) soap molecule dissolves in oily and greasy dirt particles?",
                    "options": [
                        "The long non-polar hydrophobic hydrocarbon tail ($C_{17}H_{35}-$)",
                        "The polar carboxylate head ($-COO^-$)",
                        "The sodium ion ($Na^+$)",
                        "The oxygen atoms"
                    ],
                    "answer": "The long non-polar hydrophobic hydrocarbon tail ($C_{17}H_{35}-$)",
                    "explanation": "By the principle of 'like dissolves like', the non-polar hydrocarbon tail dissolves in non-polar grease and oil droplets."
                },
                {
                    "id": "ch6_m18_q09",
                    "question": "How are transparent cosmetic soaps manufactured commercially?",
                    "options": [
                        "By dissolving soap in ethanol and slowly evaporating excess alcohol",
                        "By adding glass powder to boiling oil",
                        "By irradiating soap with ultraviolet light",
                        "By freezing soap at $-50^\\circ\text{C}$"
                    ],
                    "answer": "By dissolving soap in ethanol and slowly evaporating excess alcohol",
                    "explanation": "Ethanol dissolves soap into a clear solution, and slow distillation leaves an amorphous, non-crystalline transparent solid."
                },
                {
                    "id": "ch6_m18_q10",
                    "question": "Which fatty acid is an example of an unsaturated fatty acid containing double bonds used in soap making?",
                    "options": [
                        "Oleic acid ($C_{17}H_{33}COOH$)",
                        "Stearic acid ($C_{17}H_{35}COOH$)",
                        "Palmitic acid ($C_{15}H_{31}COOH$)",
                        "Lauric acid ($C_{11}H_{23}COOH$)"
                    ],
                    "answer": "Oleic acid ($C_{17}H_{33}COOH$)",
                    "explanation": "Oleic acid contains one cis-double bond ($C_{17}H_{33}COOH$), whereas stearic and palmitic acids are fully saturated."
                }
            ]
        },
        {
            "id": "m19",
            "moduleNumber": 19,
            "title": "Synthetic Detergents: Anionic, Cationic & Non-ionic Detergents",
            "tagline": "Limitations of soaps in hard water (calcium/magnesium scum), synthetic detergents (soapless soaps), classification into anionic, cationic, and non-ionic, and biodegradability.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Why Soaps Fail in Hard Water</h3><p>Soaps cannot clean effectively in <b>hard water</b> (water containing dissolved bicarbonates, chlorides, or sulfates of <b>Calcium ($Ca^{2+}$) and Magnesium ($Mg^{2+}$)</b>). The calcium and magnesium ions displace sodium, forming an insoluble, sticky white curd or <b>Scum</b>:</p>$$2C_{17}H_{35}COONa\text{ (Soluble Soap)} + Ca^{2+} \rightarrow (C_{17}H_{35}COO)_2Ca\\downarrow\text{ (Insoluble Scum)} + 2Na^+$$<p>Scum wastes soap, stains textiles with gray grease, and coats wool/hair fibers, preventing lather formation.</p><h3>2. Synthetic Detergents ('Soapless Soaps')</h3><p><b>Synthetic Detergents</b> are sodium salts of long-chain <b>alkyl hydrogen sulfates</b> or <b>alkylbenzene sulfonates</b> derived from petroleum hydrocarbons. Unlike soaps, their calcium and magnesium salts are <b>completely water-soluble</b>. Therefore, <b>synthetic detergents clean with equal excellence in both soft water and hard water</b>, as well as in acidic solutions.</p><h3>3. Classification of Synthetic Detergents</h3><table border='1' cellpadding='4' style='border-collapse:collapse;'><tr><th>Class</th><th>Active Cleansing Ion</th><th>Chemical Examples</th><th>Major Practical Applications</th></tr><tr><td><b>Anionic Detergents</b></td><td>Anion ($-OSO_3^-$ or $-SO_3^-$)</td><td><b>Sodium Lauryl Sulfate (SLS)</b>, Sodium Dodecylbenzene Sulfonate (LAS)</td><td>Everyday <b>laundry powders, liquid dishwashing, toothpastes</b></td></tr><tr><td><b>Cationic Detergents</b></td><td>Cation ($ quaternary \\ ammonium \\ N^+$)</td><td><b>Cetyltrimethylammonium Bromide</b></td><td><b>Hair conditioners, hospital germicides / antiseptics</b> (expensive, bactericidal)</td></tr><tr><td><b>Non-ionic Detergents</b></td><td>Neutral molecule (no ions)</td><td>Polyethylene glycol stearate (ester of stearic acid + polyethylene glycol)</td><td><b>Automatic liquid dishwashers</b> (form low foam)</td></tr></table><h3>4. Environmental Biodegradability</h3><ul><li><b>Hard (Non-biodegradable) Detergents</b>: Detergents synthesized with highly branched hydrocarbon chains resist bacterial enzymatic decomposition. In the 1960s, they accumulated in rivers and lakes, creating massive non-collapsing foam barriers that blocked sunlight and depleted aquatic oxygen.</li><li><b>Soft (Biodegradable) Detergents</b>: Modern detergents (e.g., Linear Alkylbenzene Sulfonate, <b>LAS</b>) are strictly formulated with <b>unbranched straight carbon chains</b>, which soil and wastewater microorganisms degrade rapidly.</li></ul>",
            "pointsToRemember": [
                "Soaps react with $Ca^{2+}$ and $Mg^{2+}$ in hard water to precipitate sticky insoluble scum ($(RCOO)_2Ca$).",
                "Synthetic detergents (alkylbenzene sulfonates) do not precipitate with $Ca^{2+}/Mg^{2+}$ and clean effectively in hard water.",
                "Anionic detergents (SLS, LAS) dominate laundry and toothpastes; Cationic detergents are germicidal hair conditioners; Non-ionic detergents power liquid dishwashers.",
                "Straight-chain detergents (LAS) are fully biodegradable; branched-chain detergents caused river foam pollution and are banned."
            ],
            "keyNotes": [
                "Builders like Sodium tripolyphosphate (STPP) were historically added to laundry detergents to sequester $Ca^{2+}$, but caused catastrophic aquatic eutrophication (algal blooms); modern eco-detergents substitute zeolites."
            ],
            "questions": [
                {
                    "id": "ch6_m19_q01",
                    "question": "Why are synthetic detergents capable of cleaning effectively in hard water, whereas ordinary soaps fail by producing scum?",
                    "options": [
                        "The calcium and magnesium salts of synthetic detergents (sulfonates) are completely water-soluble, preventing scum formation",
                        "Detergents contain pure distilled water",
                        "Detergents convert hard water into radioactive gas",
                        "Detergents precipitate all calcium as metallic rock"
                    ],
                    "answer": "The calcium and magnesium salts of synthetic detergents (sulfonates) are completely water-soluble, preventing scum formation",
                    "explanation": "Calcium and magnesium alkylbenzene sulfonates remain soluble in water, forming no curd/scum and allowing full lathering and cleansing."
                },
                {
                    "id": "ch6_m19_q02",
                    "question": "What is the white, sticky, insoluble precipitate ('scum') formed when ordinary sodium soap is added to hard water?",
                    "options": [
                        "Insoluble calcium and magnesium salts of fatty acids (e.g., Calcium stearate)",
                        "Pure calcium carbonate sand",
                        "Solid sodium hydroxide crystals",
                        "Precipitated animal fat"
                    ],
                    "answer": "Insoluble calcium and magnesium salts of fatty acids (e.g., Calcium stearate)",
                    "explanation": "Sodium soap exchanges $Na^+$ for $Ca^{2+}$ and $Mg^{2+}$, forming greasy insoluble calcium stearate: $2C_{17}H_{35}COONa + Ca^{2+} \rightarrow (C_{17}H_{35}COO)_2Ca\\downarrow$."
                },
                {
                    "id": "ch6_m19_q03",
                    "question": "Which class of synthetic detergents possesses potent germicidal and bactericidal properties, making them valuable in hair conditioners and hospital disinfectants?",
                    "options": [
                        "Cationic detergents (quaternary ammonium salts)",
                        "Anionic detergents",
                        "Non-ionic detergents",
                        "Inorganic silicates"
                    ],
                    "answer": "Cationic detergents (quaternary ammonium salts)",
                    "explanation": "Cationic detergents (e.g., cetyltrimethylammonium bromide) carry positively charged ammonium heads that disrupt bacterial membranes, acting as germicides."
                },
                {
                    "id": "ch6_m19_q04",
                    "question": "What type of synthetic detergent is Sodium Lauryl Sulfate (SLS), widely used in everyday toothpastes and laundry washing powders?",
                    "options": [
                        "Anionic detergent",
                        "Cationic detergent",
                        "Non-ionic detergent",
                        "Amphoteric zwitterion"
                    ],
                    "answer": "Anionic detergent",
                    "explanation": "In SLS, the active surfactant component is the large lipophilic sulfate anion ($C_{12}H_{25}OSO_3^-$), classifying it as an anionic detergent."
                },
                {
                    "id": "ch6_m19_q05",
                    "question": "Which type of synthetic detergent is primarily used in automatic liquid dishwashers because it does not produce excessive foam?",
                    "options": [
                        "Non-ionic detergents (e.g., polyethylene glycol alkyl esters)",
                        "Anionic detergents",
                        "Cationic detergents",
                        "Metallic soaps"
                    ],
                    "answer": "Non-ionic detergents (e.g., polyethylene glycol alkyl esters)",
                    "explanation": "Non-ionic detergents possess polar hydroxyl/ether groups without net charges, cleansing thoroughly without generating disruptive foam in dishwashers."
                },
                {
                    "id": "ch6_m19_q06",
                    "question": "Why were early synthetic detergents with highly branched hydrocarbon chains banned and replaced with straight-chain alkylbenzene sulfonates (LAS)?",
                    "options": [
                        "Branched-chain detergents resisted microbial degradation, causing persistent foam pollution in rivers and sewage plants",
                        "Branched detergents were explosive in contact with water",
                        "They destroyed washing machine steel motors",
                        "They were toxic to cotton fabrics"
                    ],
                    "answer": "Branched-chain detergents resisted microbial degradation, causing persistent foam pollution in rivers and sewage plants",
                    "explanation": "Bacteria cannot enzymatically digest branched chains, leading to foaming river pollution. Straight-chain sulfonates (LAS) are readily biodegradable."
                },
                {
                    "id": "ch6_m19_q07",
                    "question": "What environmental hazard resulted from the excessive use of sodium tripolyphosphate (STPP) builders in commercial laundry detergents?",
                    "options": [
                        "Aquatic eutrophication, causing uncontrolled algal blooms that deplete dissolved oxygen and suffocate aquatic life",
                        "Depletion of the stratospheric ozone layer",
                        "Acid rain formation",
                        "Radioactive river contamination"
                    ],
                    "answer": "Aquatic eutrophication, causing uncontrolled algal blooms that deplete dissolved oxygen and suffocate aquatic life",
                    "explanation": "Phosphate discharge into waterways acts as a nutrient overload (eutrophication), triggering massive algal blooms that kill fish when decaying."
                },
                {
                    "id": "ch6_m19_q08",
                    "question": "What is the common term used for synthetic detergents in popular chemistry?",
                    "options": [
                        "Soapless soaps",
                        "Heavy waters",
                        "Liquid diamonds",
                        "Mineral spirits"
                    ],
                    "answer": "Soapless soaps",
                    "explanation": "Detergents are termed 'soapless soaps' because they possess all cleansing actions of soaps without containing any true saponified fatty acid salts."
                },
                {
                    "id": "ch6_m19_q09",
                    "question": "Can synthetic detergents clean fabrics effectively in mildly acidic water solutions?",
                    "options": [
                        "Yes, because their sulfonic acid groups remain soluble and do not precipitate in acidic media, unlike soaps",
                        "No, detergents decompose in all acids into chlorine gas",
                        "No, detergents only work at pH 14",
                        "Detergents freeze solid in acid"
                    ],
                    "answer": "Yes, because their sulfonic acid groups remain soluble and do not precipitate in acidic media, unlike soaps",
                    "explanation": "Alkyl sulfonates remain soluble in acidic conditions, whereas soaps precipitate out as insoluble free fatty acids ($R-COOH$), losing all cleaning power."
                },
                {
                    "id": "ch6_m19_q10",
                    "question": "Which modern zeolite material has widely replaced phosphates as an eco-friendly builder in laundry detergents?",
                    "options": [
                        "Sodium aluminosilicate (Zeolite A)",
                        "Potassium permanganate",
                        "Sodium chloride",
                        "Calcium sulfate"
                    ],
                    "answer": "Sodium aluminosilicate (Zeolite A)",
                    "explanation": "Synthetic Zeolite A softens wash water by capturing calcium and magnesium ions through ion-exchange without causing environmental eutrophication."
                }
            ]
        },
        {
            "id": "m20",
            "moduleNumber": 20,
            "title": "Organic Reactions & Reagents: Markovnikov's Rule & Tollens'/Fehling's Tests",
            "tagline": "Fundamental reaction mechanisms: Electrophilic addition (Markovnikov's rule vs Peroxide anti-Markovnikov effect), Saytzeff elimination rule, alcohol Lucas test (1, 2, 3 deg), and Tollens' and Fehling's tests.",
            "readingTimeMins": 5,
            "theoryHtml": "<h3>1. Electrophilic Addition: Markovnikov's Rule</h3><p>Formulated in 1869 by Russian chemist <b>Vladimir Markovnikov</b> for the addition of an unsymmetrical reagent ($HX$, e.g., $HBr$) to an unsymmetrical alkene (e.g., Propene):</p><blockquote><b>Markovnikov's Rule</b>: 'When an unsymmetrical reagent adds to an unsymmetrical alkene, the negative part of the addendum ($X^-$) attaches preferentially to that double-bonded carbon atom which carries the <b>lesser number of hydrogen atoms</b> (forming the more stable carbocation intermediate: $3^\\circ > 2^\\circ > 1^\\circ$).'</blockquote>$$CH_3-CH=CH_2 + HBr \rightarrow CH_3-CH(Br)-CH_3 \\quad (\\mathbf{2\text{-Bromopropane, Major Product}})$$</p><h3>2. The Peroxide Effect (Anti-Markovnikov Addition / Kharasch Effect)</h3><p>Discovered in 1933 by <b>Morris Kharasch and Frank Mayo</b> at the University of Chicago:</p><ul><li>When $HBr$ is added to an unsymmetrical alkene in the presence of <b>organic peroxides (Benzoyl peroxide)</b>, the addition proceeds via a free-radical mechanism, yielding the <b>Anti-Markovnikov product</b> (Bromine attaches to the carbon with <b>more hydrogens</b>):</li>$$CH_3-CH=CH_2 + HBr \\xrightarrow{\text{Peroxide}} CH_3-CH_2-CH_2-Br \\quad (\\mathbf{1\text{-Bromopropane, Major Product}})$$</p><li><b>Specificity</b>: The peroxide effect is <b>strictly valid only for $HBr$</b>! It does not operate for $HCl$ (bond dissociation enthalpy $430\text{ kJ/mol}$ is too strong for radical cleavage) nor $HI$ (iodine radicals dimerize spontaneously to $I_2$ instead of adding to alkenes).</li></ul><h3>3. Distinguishing Tests in Organic Chemistry</h3><ol><li><b>Lucas Test for Primary ($1^\\circ$), Secondary ($2^\\circ$) & Tertiary ($3^\\circ$) Alcohols</b>:<p>Reagent: <b>Equimolar concentrated $HCl + \text{anhydrous } ZnCl_2$</b> (Lucas Reagent). Reaction forms insoluble alkyl chlorides, visible as white turbidity (cloudiness):</p><ul><li><b>$3^\\circ$ Alcohol</b>: Turbidity appears <b>immediately</b> (seconds) due to stable $3^\\circ$ carbocation.</li><li><b>$2^\\circ$ Alcohol</b>: Turbidity appears within <b>$5\text{ minutes}$</b>.</li><li><b>$1^\\circ$ Alcohol</b>: Solution remains clear at room temperature; turbidity appears only upon <b>prolonged heating</b>.</li></ul></li><li><b>Tollens' Silver Mirror Test (Aldehydes vs Ketones)</b>:<p>Tollens' reagent is an alkaline solution of <b>ammoniacal silver nitrate $[Ag(NH_3)_2OH]$</b>. Aldehydes (aliphatic and aromatic) are easily oxidized to carboxylates, reducing $Ag^+$ to metallic silver which coats the inside of the test tube as a shiny <b>silver mirror</b>. Ketones do not react.</p></li><li><b>Fehling's Solution Test</b>:<p>Composed of Fehling A ($CuSO_4$) and Fehling B (alkaline Sodium Potassium Tartrate / Rochelle Salt). Aliphatic aldehydes reduce blue $Cu^{2+}$ to form a <b>red precipitate of Cuprous Oxide ($Cu_2O$)</b>. (Aromatic aldehydes like benzaldehyde do not reduce Fehling's solution).</p></li></ol>",
            "pointsToRemember": [
                "Markovnikov's Rule: Negative part of $HX$ attaches to the double-bonded carbon with fewer hydrogens (via more stable carbocation).",
                "Anti-Markovnikov (Kharasch Peroxide) effect: In the presence of organic peroxides, $HBr$ adds inversely; strictly valid only for $HBr$ (fails for $HCl$ and $HI$).",
                "Lucas Test ($conc.\\ HCl + ZnCl_2$): $3^\\circ$ alcohols turn turbid instantly, $2^\\circ$ in 5 minutes, $1^\\circ$ only upon heating.",
                "Tollens' test yields a silver mirror and Fehling's test yields a red $Cu_2O$ precipitate for aldehydes, distinguishing them from ketones."
            ],
            "keyNotes": [
                "Saytzeff's Rule (Zaitsev's Rule) governs elimination reactions (dehydrohalogenation): 'The major alkene formed is the one that has the greater number of alkyl substituents attached to the double-bonded carbons' (the most thermodynamically stable substituted alkene)."
            ],
            "questions": [
                {
                    "id": "ch6_m20_q01",
                    "question": "According to Markovnikov's Rule, what is the major product obtained when hydrogen bromide ($HBr$) adds to propene ($CH_3-CH=CH_2$)?",
                    "options": [
                        "2-Bromopropane ($CH_3-CH(Br)-CH_3$)",
                        "1-Bromopropane ($CH_3-CH_2-CH_2Br$)",
                        "1,2-Dibromopropane",
                        "Cyclopropane"
                    ],
                    "answer": "2-Bromopropane ($CH_3-CH(Br)-CH_3$)",
                    "explanation": "The negative bromide ion ($Br^-$) attacks the central carbon carrying fewer hydrogens, proceeding via the more stable secondary carbocation."
                },
                {
                    "id": "ch6_m20_q02",
                    "question": "Under what experimental condition does the addition of $HBr$ to propene reverse to yield 1-bromopropane as the major product (Anti-Markovnikov addition)?",
                    "options": [
                        "In the presence of organic peroxides (e.g., benzoyl peroxide)",
                        "In the presence of platinum catalyst",
                        "At absolute zero temperature",
                        "In concentrated sulfuric acid"
                    ],
                    "answer": "In the presence of organic peroxides (e.g., benzoyl peroxide)",
                    "explanation": "The Kharasch peroxide effect generates bromine free radicals, which attack the terminal carbon first to form the more stable secondary radical."
                },
                {
                    "id": "ch6_m20_q03",
                    "question": "Why is the Anti-Markovnikov peroxide effect (Kharasch effect) strictly observed only with $HBr$, and fails with both $HCl$ and $HI$?",
                    "options": [
                        "The $H-Cl$ bond is too strong ($430\text{ kJ/mol}$) to be homolytically cleaved by radicals, while iodine radicals from $HI$ dimerize into $I_2$ rather than adding to alkenes",
                        "Chlorine is an inert gas",
                        "Iodine destroys peroxides instantly",
                        "Hydrochloric acid is not an acid"
                    ],
                    "answer": "The $H-Cl$ bond is too strong ($430\text{ kJ/mol}$) to be homolytically cleaved by radicals, while iodine radicals from $HI$ dimerize into $I_2$ rather than adding to alkenes",
                    "explanation": "Both propagation steps are exothermic only for $HBr$. For $HCl$, step 1 is endothermic; for $HI$, step 2 is endothermic and iodine radicals prefer pairing into $I_2$."
                },
                {
                    "id": "ch6_m20_q04",
                    "question": "What constitutes the Lucas Reagent used to differentiate primary, secondary, and tertiary alcohols?",
                    "options": [
                        "An equimolar mixture of concentrated hydrochloric acid ($HCl$) and anhydrous zinc chloride ($ZnCl_2$)",
                        "Ammoniacal silver nitrate solution",
                        "Alkaline copper sulfate and sodium potassium tartrate",
                        "Bromine dissolved in carbon tetrachloride"
                    ],
                    "answer": "An equimolar mixture of concentrated hydrochloric acid ($HCl$) and anhydrous zinc chloride ($ZnCl_2$)",
                    "explanation": "Lucas reagent ($conc.\\ HCl + anh.\\ ZnCl_2$) converts alcohols into insoluble alkyl chlorides at rates determined by carbocation stability."
                },
                {
                    "id": "ch6_m20_q05",
                    "question": "How does a tertiary ($3^\\circ$) alcohol behave when mixed with Lucas reagent at room temperature?",
                    "options": [
                        "Dense white turbidity (cloudiness) appears almost instantaneously within seconds",
                        "Cloudiness appears after precisely 5 minutes",
                        "No turbidity appears even upon prolonged boiling",
                        "It explodes into flame"
                    ],
                    "answer": "Dense white turbidity (cloudiness) appears almost instantaneously within seconds",
                    "explanation": "Tertiary carbocations form instantly, leading to immediate precipitation of insoluble tertiary alkyl chloride droplets."
                },
                {
                    "id": "ch6_m20_q06",
                    "question": "What red-colored chemical precipitate is formed when an aliphatic aldehyde is heated with Fehling's solution?",
                    "options": [
                        "Cuprous oxide ($Cu_2O$)",
                        "Cupric oxide ($CuO$)",
                        "Elemental copper metal",
                        "Ferric hydroxide"
                    ],
                    "answer": "Cuprous oxide ($Cu_2O$)",
                    "explanation": "Aldehydes reduce alkaline $Cu^{2+}$ tartrate to cuprous oxide ($Cu_2O$), which precipitates as a brick-red solid."
                },
                {
                    "id": "ch6_m20_q07",
                    "question": "Which rule predicts that during elimination dehydrohalogenation reactions of alkyl halides, the most substituted alkene is the major product?",
                    "options": [
                        "Saytzeff's Rule (Zaitsev's Rule)",
                        "Markovnikov's Rule",
                        "Hund's Rule",
                        "Kekulé's Rule"
                    ],
                    "answer": "Saytzeff's Rule (Zaitsev's Rule)",
                    "explanation": "Saytzeff's rule states that the major product in $\beta$-elimination is the more highly substituted, thermodynamically stable alkene."
                },
                {
                    "id": "ch6_m20_q08",
                    "question": "What observation confirms a positive Tollens' test for an aldehyde?",
                    "options": [
                        "Formation of a bright reflective silver mirror on the clean interior wall of the test tube",
                        "Evolution of green chlorine gas",
                        "Formation of a blue precipitate",
                        "Disappearance of all liquid"
                    ],
                    "answer": "Formation of a bright reflective silver mirror on the clean interior wall of the test tube",
                    "explanation": "Aldehydes reduce ammoniacal silver ions ($[Ag(NH_3)_2]^+$) to metallic silver ($Ag^0$), coating the glass wall as a silver mirror."
                },
                {
                    "id": "ch6_m20_q09",
                    "question": "Why does benzaldehyde fail to give a positive red precipitate with Fehling's solution, despite being an aldehyde?",
                    "options": [
                        "Fehling's solution is a relatively weak oxidizing agent incapable of oxidizing aromatic aldehydes",
                        "Benzaldehyde contains no carbon",
                        "Benzaldehyde is an ether",
                        "Benzaldehyde is a strong mineral acid"
                    ],
                    "answer": "Fehling's solution is a relatively weak oxidizing agent incapable of oxidizing aromatic aldehydes",
                    "explanation": "Fehling's reagent is weaker than Tollens' reagent; resonance stabilization of aromatic aldehydes prevents oxidation by Fehling's solution."
                },
                {
                    "id": "ch6_m20_q10",
                    "question": "How long does it typically take for a secondary ($2^\\circ$) alcohol to develop visible turbidity when treated with Lucas reagent at room temperature?",
                    "options": [
                        "Approximately 5 minutes",
                        "Instantly within 2 seconds",
                        "Never, even after heating",
                        "Exactly 24 hours"
                    ],
                    "answer": "Approximately 5 minutes",
                    "explanation": "Secondary alcohols react at an intermediate rate via secondary carbocations, developing cloudiness within about 4 to 5 minutes."
                }
            ]
        }
    ]
};

if (typeof window !== 'undefined') {
    window.COURSE_CHAPTER_DATA = COURSE_CHAPTER_6_CHEMISTRY;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COURSE_CHAPTER_6_CHEMISTRY;
}
