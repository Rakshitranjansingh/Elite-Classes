// Elite Classes — Civil Services Physics Revision Course
// Chapter 03: General Properties of Matter (Elasticity & Fluids)

const COURSE_CHAPTER_DATA = {
  "chapterId": "cs_phy_ch3",
  "chapterNumber": 3,
  "chapterTitle": "General Properties of Matter (Elasticity & Fluids)",
  "totalModules": 20,
  "totalQuestions": 200,
  "modules": [
    {
      "id": "mod_1",
      "number": 1,
      "title": "Elasticity, Stress, Strain & Hooke's Law",
      "description": "Deforming force, restoring force, stress types, strain types, Hooke's law, and elastic limit.",
      "theoryHtml": "<h4>1. Elasticity and Plasticity</h4>\n<p><strong>Elasticity</strong> is the intrinsic property of a material body by virtue of which it tends to regain its original shape and size after the removal of external deforming forces.</p>\n<ul>\n  <li><strong>Perfectly Elastic Body:</strong> Completely recovers original shape instantaneously upon removal of deforming forces (e.g., Quartz fiber, Phosphor bronze).</li>\n  <li><strong>Plasticity:</strong> Inability to recover original shape, retaining permanent deformation (e.g., Putty, wet clay, paraffin wax).</li>\n  <li><strong>Elastic Fatigue:</strong> Temporary loss of elastic properties due to continuous, prolonged alternating deforming stresses.</li>\n</ul>\n<h4>2. Stress and Strain</h4>\n<p><strong>Stress (σ)</strong> is the internal restoring force developed per unit area of a deformed body:</p>\n<p><strong>Stress = Restoring Force / Area = F / A</strong></p>\n<ul>\n  <li>SI Unit: <strong>N/m²</strong> or <strong>Pascal (Pa)</strong>. Dimensional Formula: <strong>[M¹ L⁻¹ T⁻²]</strong> (same as pressure).</li>\n  <li><strong>Tensile/Compressive (Longitudinal) Stress:</strong> Acts normal to surface, changing length.</li>\n  <li><strong>Shearing (Tangential) Stress:</strong> Acts parallel to surface, changing shape without volume change.</li>\n  <li><strong>Hydraulic (Volume) Stress:</strong> Acts uniformly normal to all faces, changing volume.</li>\n</ul>\n<p><strong>Strain (ε)</strong> is the fractional change in dimension produced by deformation:</p>\n<p><strong>Strain = Change in Dimension / Original Dimension</strong></p>\n<ul>\n  <li>Strain is a pure ratio of two identical physical quantities; it is <strong>dimensionless and unitless</strong>.</li>\n  <li>Longitudinal Strain = ΔL / L; Volume Strain = ΔV / V; Shear Strain = tan θ ≈ θ.</li>\n</ul>\n<h4>3. Hooke's Law (Robert Hooke, 1676)</h4>\n<div class=\"notes-callout\"><strong>Hooke's Law:</strong> Within the elastic limit, stress is directly proportional to strain:\n<br><strong>Stress ∝ Strain  ==>  Stress / Strain = E (Modulus of Elasticity)</strong></div>",
      "pointsToRemember": [
        "Stress has SI unit N/m² (Pascal) and dimensions [M¹ L⁻¹ T⁻²], identical to pressure.",
        "Strain is a dimensionless and unitless quantity representing fractional deformation.",
        "Hooke's Law states that within the elastic limit, Stress / Strain = constant (Modulus of Elasticity)."
      ],
      "keyNotes": [
        "Steel is more elastic than rubber because a much greater restoring stress is developed in steel than in rubber for the same amount of fractional strain."
      ],
      "questions": [
        {
          "id": "q1_1",
          "question": "Which material is physically more elastic according to the scientific definition of elasticity?",
          "options": [
            "Rubber",
            "Steel",
            "Glass",
            "Copper"
          ],
          "answer": "Steel",
          "explanation": "In physics, elasticity is measured by the Modulus of Elasticity (Stress / Strain). Steel requires far greater stress to produce the same strain than rubber, meaning Young's modulus for steel is much higher."
        },
        {
          "id": "q1_2",
          "question": "What is the SI unit and dimensional formula of mechanical stress?",
          "options": [
            "N/m² (Pascal) and [M¹ L⁻¹ T⁻²]",
            "N·m and [M¹ L² T⁻²]",
            "N/m and [M¹ L⁰ T⁻²]",
            "Dimensionless and unitless"
          ],
          "answer": "N/m² (Pascal) and [M¹ L⁻¹ T⁻²]",
          "explanation": "Stress = Force / Area = N/m² = Pascal. Dimensions = [M¹ L¹ T⁻²] / [L²] = [M¹ L⁻¹ T⁻²]."
        },
        {
          "id": "q1_3",
          "question": "What are the SI units and dimensions of mechanical strain?",
          "options": [
            "Pascal and [M¹ L⁻¹ T⁻²]",
            "N/m and [M¹ L⁰ T⁻²]",
            "It is unitless and dimensionless",
            "m/s and [M⁰ L¹ T⁻¹]"
          ],
          "answer": "It is unitless and dimensionless",
          "explanation": "Strain is the ratio of change in dimension to original dimension (e.g. ΔL / L), making it a pure dimensionless and unitless number."
        },
        {
          "id": "q1_4",
          "question": "Hooke's law strictly holds valid:",
          "options": [
            "Up to the breaking point",
            "Within the elastic limit (proportionality limit)",
            "For all magnitudes of stress",
            "Only at absolute zero temperature"
          ],
          "answer": "Within the elastic limit (proportionality limit)",
          "explanation": "Hooke's law (Stress ∝ Strain) is strictly valid only within the elastic limit (proportional limit) of the material."
        },
        {
          "id": "q1_5",
          "question": "Which of the following materials is considered closest to an ideally perfectly elastic body?",
          "options": [
            "Quartz fiber",
            "Paraffin wax",
            "Wet clay",
            "Vulcanized rubber"
          ],
          "answer": "Quartz fiber",
          "explanation": "Quartz fiber and phosphor bronze recover their original shape and dimensions almost instantaneously with negligible elastic after-effect."
        },
        {
          "id": "q1_6",
          "question": "The temporary loss of elastic strength observed in a metal wire subjected to repeated alternating stresses over prolonged periods is termed:",
          "options": [
            "Elastic fatigue",
            "Elastic limit",
            "Plastic flow",
            "Thermal creeping"
          ],
          "answer": "Elastic fatigue",
          "explanation": "Elastic fatigue is the loss in strength caused by continuous cycles of alternating stress; resting the material allows recovery."
        },
        {
          "id": "q1_7",
          "question": "Why are railway tracks manufactured in the shape of an 'I'-beam cross section?",
          "options": [
            "To save manufacturing steel while minimizing sagging bending depression",
            "To reduce frictional rolling resistance",
            "To enhance thermal expansion in summer",
            "To lower track center of gravity"
          ],
          "answer": "To save manufacturing steel while minimizing sagging bending depression",
          "explanation": "The bending depression δ = W l³ / (4 Y b d³) depends inversely on the cube of vertical depth d³. An I-shaped cross section concentrates material at top and bottom to resist bending with minimal steel weight."
        },
        {
          "id": "q1_8",
          "question": "What type of stress is produced when two equal and opposite forces act tangentially across the opposite faces of a rectangular block?",
          "options": [
            "Longitudinal tensile stress",
            "Shearing (tangential) stress",
            "Hydraulic volume stress",
            "Compressive bulk stress"
          ],
          "answer": "Shearing (tangential) stress",
          "explanation": "Tangential forces acting parallel to opposite faces produce a lateral distortion (change in shape without change in volume), which is shearing stress."
        },
        {
          "id": "q1_9",
          "question": "If a wire of length L and cross-sectional area A is stretched by length ΔL under tension F, the elastic potential energy stored per unit volume is:",
          "options": [
            "½ × Stress × Strain",
            "Stress × Strain",
            "½ × (Stress)² × Strain",
            "Force × Displacement"
          ],
          "answer": "½ × Stress × Strain",
          "explanation": "Energy density (energy per unit volume) in a stretched wire = ½ × Stress × Strain = ½ Y (Strain)²."
        },
        {
          "id": "q1_10",
          "question": "A spring balance after being used continuously for years shows inaccurate readings because of:",
          "options": [
            "Wear and tear of the pointer",
            "Elastic fatigue developed in the spring",
            "Evaporation of spring metal",
            "Variation in Earth's gravitational acceleration"
          ],
          "answer": "Elastic fatigue developed in the spring",
          "explanation": "Repeated loading and unloading causes elastic fatigue in the steel spring, altering its effective spring constant and yielding incorrect measurements."
        }
      ]
    },
    {
      "id": "mod_2",
      "number": 2,
      "title": "Modulus of Elasticity: Young's, Bulk & Rigidity",
      "description": "Young's modulus (Y), Bulk modulus (K) and compressibility, Shear modulus (η), and Poisson's ratio (σ).",
      "theoryHtml": "<h4>1. The Three Moduli of Elasticity</h4>\n<p>Depending on the nature of deforming stress and resulting strain, there are three distinct elastic moduli:</p>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Modulus</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Definition & Formula</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Applicability to States of Matter</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Young's Modulus (Y)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Y = Longitudinal Stress / Longitudinal Strain = (F / A) / (ΔL / L) = (F L) / (A ΔL)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Solids ONLY</strong> (liquids and gases have no fixed length).</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Bulk Modulus (K or B)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>K = - Volume Stress / Volume Strain = - ΔP / (ΔV / V)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>All states</strong> (Solids, Liquids, and Gases). Solids have largest K, gases have smallest K.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Shear / Rigidity Modulus (η)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>η = Tangential Stress / Shear Strain = (F / A) / θ</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Solids ONLY</strong> (fluids cannot sustain static shearing stress; η = 0 for ideal liquids).</td>\n  </tr>\n</table>\n<h4>2. Compressibility (β)</h4>\n<p>The reciprocal of the Bulk Modulus is termed <strong>Compressibility (β)</strong>:</p>\n<p><strong>Compressibility (β) = 1 / Bulk Modulus = 1 / K</strong></p>\n<ul>\n  <li>SI Unit: <strong>m²/N</strong> or <strong>Pa⁻¹</strong>.</li>\n  <li>Gases have high compressibility; liquids are practically incompressible (water β ≈ 5 × 10⁻¹⁰ Pa⁻¹).</li>\n</ul>\n<h4>3. Poisson's Ratio (σ)</h4>\n<p>When a wire is stretched longitudinally, its diameter contracts laterally. <strong>Poisson's Ratio (σ)</strong> is the ratio of lateral strain to longitudinal strain:</p>\n<p><strong>σ = Lateral Strain / Longitudinal Strain = - (Δd / d) / (ΔL / L)</strong></p>\n<ul>\n  <li>It is a pure number without units or dimensions.</li>\n  <li>Theoretical limits: <strong>-1 ≤ σ ≤ +0.5</strong>. Practical values for engineering metals: <strong>0.2 to 0.4</strong> (cork σ ≈ 0; rubber σ ≈ 0.5).</li>\n</ul>",
      "pointsToRemember": [
        "Young's modulus and Rigidity modulus exist only for solids; Bulk modulus exists for all three states (solids, liquids, gases).",
        "Compressibility is the reciprocal of Bulk modulus (β = 1/K).",
        "Poisson's ratio is the ratio of lateral strain to longitudinal strain, with practical values between 0.2 and 0.4."
      ],
      "keyNotes": [
        "For an ideal incompressible liquid, the Bulk Modulus is infinite (K = ∞) and compressibility is exactly zero (β = 0)."
      ],
      "questions": [
        {
          "id": "q2_1",
          "question": "Which modulus of elasticity is exhibited by all three physical states of matter (solids, liquids, and gases)?",
          "options": [
            "Young's Modulus",
            "Bulk Modulus",
            "Modulus of Rigidity",
            "Poisson's Ratio"
          ],
          "answer": "Bulk Modulus",
          "explanation": "Bulk modulus involves volume deformation, which applies to solids, liquids, and gases. Young's modulus and Rigidity modulus apply only to solids with fixed shapes."
        },
        {
          "id": "q2_2",
          "question": "What is the Modulus of Rigidity (Shear Modulus) for an ideal liquid?",
          "options": [
            "Infinite",
            "Zero",
            "Unity (1)",
            "Equal to its Bulk Modulus"
          ],
          "answer": "Zero",
          "explanation": "Liquids cannot sustain static shearing stress and deform continuously (flow) under any tangential force. Hence the shear modulus η is zero for liquids."
        },
        {
          "id": "q2_3",
          "question": "Compressibility is mathematically defined as the reciprocal of:",
          "options": [
            "Young's Modulus",
            "Bulk Modulus",
            "Shear Modulus",
            "Thermal expansion coefficient"
          ],
          "answer": "Bulk Modulus",
          "explanation": "Compressibility β = 1 / K, representing fractional volume decrease per unit increase in pressure."
        },
        {
          "id": "q2_4",
          "question": "What is the theoretical range of values for Poisson's ratio (σ)?",
          "options": [
            "0 to 1",
            "-1 to +0.5",
            "0 to 0.5",
            "-0.5 to +0.5"
          ],
          "answer": "-1 to +0.5",
          "explanation": "Thermodynamic and elasticity stability conditions establish theoretical bounds of -1 ≤ σ ≤ +0.5 (practically, most metals lie between 0.2 and 0.4)."
        },
        {
          "id": "q2_5",
          "question": "If a wire of length L and cross-section A is cut into two equal halves, what will be the Young's modulus of each half?",
          "options": [
            "Doubled (2Y)",
            "Halved (Y / 2)",
            "Remains unchanged (Y)",
            "Quadrupled (4Y)"
          ],
          "answer": "Remains unchanged (Y)",
          "explanation": "Young's modulus is an intrinsic intensive property of the material itself, completely independent of the length or cross-sectional area of the wire."
        },
        {
          "id": "q2_6",
          "question": "For a perfectly incompressible substance, what are the values of Bulk Modulus (K) and Poisson's ratio (σ)?",
          "options": [
            "K = 0 and σ = 0",
            "K = ∞ and σ = 0.5",
            "K = ∞ and σ = 0",
            "K = 1 and σ = 1"
          ],
          "answer": "K = ∞ and σ = 0.5",
          "explanation": "Incompressible means volume cannot change (ΔV = 0), so K = -ΔP/(ΔV/V) = ∞. From elasticity relations, when volume strain is zero, Poisson's ratio reaches its upper limit σ = 0.5 (as in rubber)."
        },
        {
          "id": "q2_7",
          "question": "A force F stretches a steel wire of length L and radius r by an amount ΔL. If the same force stretches a steel wire of length 2L and radius 2r, the extension will be:",
          "options": [
            "ΔL",
            "2 ΔL",
            "ΔL / 2",
            "4 ΔL"
          ],
          "answer": "ΔL / 2",
          "explanation": "Extension ΔL = (F L) / (π r² Y). For the new wire: ΔL' = [F (2L)] / [π (2r)² Y] = (2 / 4) × (F L / π r² Y) = ΔL / 2."
        },
        {
          "id": "q2_8",
          "question": "What happens to the Young's modulus of a metallic wire when its temperature is increased?",
          "options": [
            "It increases",
            "It decreases",
            "It remains unaffected",
            "It first increases then drops to zero"
          ],
          "answer": "It decreases",
          "explanation": "Thermal expansion increases interatomic equilibrium spacing, weakening interatomic bonding forces and making the metal softer and less resistant to deformation (Y decreases)."
        },
        {
          "id": "q2_9",
          "question": "Which of the following substances has a Poisson's ratio close to zero?",
          "options": [
            "Rubber",
            "Cork",
            "Steel",
            "Copper"
          ],
          "answer": "Cork",
          "explanation": "When cork is compressed longitudinally, its lateral dimension hardly expands (lateral strain ≈ 0, σ ≈ 0), which makes cork ideal for wine bottle stoppers."
        },
        {
          "id": "q2_10",
          "question": "The dimensional formula of the Modulus of Rigidity is:",
          "options": [
            "[M¹ L⁻¹ T⁻²]",
            "[M¹ L¹ T⁻²]",
            "[M¹ L² T⁻²]",
            "[M⁰ L⁰ T⁰]"
          ],
          "answer": "[M¹ L⁻¹ T⁻²]",
          "explanation": "Like all moduli of elasticity (Stress / Strain), Rigidity modulus has dimensions of Stress = [M¹ L⁻¹ T⁻²] (since strain is dimensionless)."
        }
      ]
    },
    {
      "id": "mod_3",
      "number": 3,
      "title": "Fluid Pressure, Hydrostatic Paradox & Atmospheric Pressure",
      "description": "Fluid thrust and pressure, hydrostatic formula P = hρg, hydrostatic paradox, Torricellian barometer, and weather altimetry.",
      "theoryHtml": "<h4>1. Fluid Pressure</h4>\n<p><strong>Pressure (P)</strong> is the normal force (thrust) exerted by a fluid per unit surface area:</p>\n<p><strong>P = Thrust / Area = F / A</strong></p>\n<ul>\n  <li>Pressure is a <strong>scalar quantity</strong> (acts equally in all directions at a point in a static fluid).</li>\n  <li><strong>SI Unit:</strong> Pascal (Pa). <strong>1 Pa = 1 N/m²</strong>.</li>\n  <li>Other units: 1 bar = 10⁵ Pa; 1 millibar = 100 Pa; 1 torr = 1 mm of Hg ≈ 133.32 Pa.</li>\n  <li><strong>Dimensional Formula:</strong> [M¹ L⁻¹ T⁻²].</li>\n</ul>\n<h4>2. Hydrostatic Pressure Formula</h4>\n<p>The pressure exerted by a static liquid column of height <strong>h</strong> and uniform density <strong>ρ</strong> is:</p>\n<p><strong>P = h × ρ × g</strong></p>\n<p>Total (Absolute) Pressure at depth h open to atmosphere:</p>\n<p><strong>P_total = P_atm + h ρ g</strong></p>\n<p>where (P_total - P_atm) = <strong>h ρ g</strong> is called the <strong>Gauge Pressure</strong>.</p>\n<h4>3. The Hydrostatic Paradox</h4>\n<p>The hydrostatic pressure at the base of a liquid container depends solely on vertical liquid height (h), density (ρ), and g. It is <strong>independent of the shape, cross-section, or total volume of the container</strong>.</p>\n<h4>4. Atmospheric Pressure & Torricelli's Barometer (1643)</h4>\n<p><strong>Evangelista Torricelli</strong> measured atmospheric pressure using a mercury column:</p>\n<p><strong>Standard Atmospheric Pressure (1 atm) = 76 cm of Hg = 760 mm of Hg = 1.013 × 10⁵ Pa (≈ 1.013 bar)</strong></p>\n<ul>\n  <li>The empty space above the mercury column in a sealed barometer tube is the <strong>Torricellian Vacuum</strong> (contains only trace mercury vapor).</li>\n  <li><strong>Why Mercury is Used:</strong> High density (13.6 × 10³ kg/m³ allows a compact 76 cm tube; water would require a ~10.3 meter column), very low vapor pressure, does not wet glass, and is shiny and opaque.</li>\n</ul>\n<h4>5. Barometric Weather Forecasting</h4>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Barometer Reading Trend</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Meteorological Indication</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Sudden sharp drop</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Approaching <strong>storm / cyclone</strong> (rapid low pressure center).</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Gradual steady fall</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Possibility of <strong>rain</strong> (rising humidity decreases air density).</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Gradual steady rise</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Clear, fair, dry, and <strong>sunny weather</strong>.</td>\n  </tr>\n</table>",
      "pointsToRemember": [
        "Liquid hydrostatic pressure P = hρg depends only on depth h, fluid density ρ, and g, not on vessel shape (Hydrostatic Paradox).",
        "1 standard atmosphere (1 atm) = 760 mm of Hg = 1.013 × 10⁵ Pa ≈ 1.013 bar.",
        "A sudden sharp drop in barometric pressure signals an impending storm or cyclone; a steady rise indicates fair weather."
      ],
      "keyNotes": [
        "Atmospheric pressure decreases with altitude, which is why fountain pens leak in airplanes and mountaineers suffer nosebleeds due to blood pressure exceeding ambient air pressure."
      ],
      "questions": [
        {
          "id": "q3_1",
          "question": "What does a sudden, rapid drop in barometric reading indicate?",
          "options": [
            "Impending storm or cyclone",
            "Prolonged dry fair weather",
            "Heavy snowfall",
            "Zero humidity"
          ],
          "answer": "Impending storm or cyclone",
          "explanation": "A sudden sharp decline in barometric pressure indicates the rapid formation of an intense low-pressure system, signaling an incoming storm or cyclone."
        },
        {
          "id": "q3_2",
          "question": "What is the standard atmospheric pressure at sea level in Pascals?",
          "options": [
            "1.013 × 10⁵ Pa",
            "1.013 × 10³ Pa",
            "760 Pa",
            "10⁵ dynes/cm²"
          ],
          "answer": "1.013 × 10⁵ Pa",
          "explanation": "1 atm = h ρ g = 0.76 m × 13600 kg/m³ × 9.8 m/s² ≈ 1.013 × 10⁵ N/m² (Pa) = 101.3 kPa."
        },
        {
          "id": "q3_3",
          "question": "Why does a fountain pen leak ink when carried aboard a high-altitude commercial passenger airplane?",
          "options": [
            "Ink expands due to airplane vibrations.",
            "Air inside the ink reservoir is at higher pressure than the reduced cabin atmospheric pressure.",
            "Gravity is zero at cruising altitude.",
            "Ink viscosity increases drastically."
          ],
          "answer": "Air inside the ink reservoir is at higher pressure than the reduced cabin atmospheric pressure.",
          "explanation": "At high altitudes, external atmospheric pressure is lower. The air bubble trapped inside the pen expands and forces ink out through the nib."
        },
        {
          "id": "q3_4",
          "question": "Why is mercury preferred over water as the barometric liquid?",
          "options": [
            "Mercury is a good conductor of heat.",
            "Its high density (13.6 g/cm³) allows a convenient column height of ~76 cm, and it does not wet glass.",
            "Mercury has very high vapor pressure.",
            "Mercury is transparent and easy to see."
          ],
          "answer": "Its high density (13.6 g/cm³) allows a convenient column height of ~76 cm, and it does not wet glass.",
          "explanation": "Due to high density, mercury requires only a 76 cm tube (water would require 10.3 m). Furthermore, mercury does not adhere to glass and has near-zero vapor pressure."
        },
        {
          "id": "q3_5",
          "question": "The phenomenon where liquid pressure at the base of a container is independent of the container's geometry and volume is known as:",
          "options": [
            "Archimedes' Principle",
            "Hydrostatic Paradox",
            "Bernoulli's Theorem",
            "Torricelli's Efflux"
          ],
          "answer": "Hydrostatic Paradox",
          "explanation": "The Hydrostatic Paradox demonstrates that pressure at a given depth depends solely on vertical depth h and fluid density ρ (P = hρg), regardless of the container's shape."
        },
        {
          "id": "q3_6",
          "question": "Why do deep-sea divers wear reinforced rigid diving suits?",
          "options": [
            "To stay warm in cold water",
            "To withstand the immense hydrostatic pressure (hρg) exerted by water at deep ocean depths",
            "To prevent shark bites",
            "To reduce their buoyancy"
          ],
          "answer": "To withstand the immense hydrostatic pressure (hρg) exerted by water at deep ocean depths",
          "explanation": "Hydrostatic pressure increases by approximately 1 atm for every 10 meters of depth. At hundreds of meters, crushing pressures require rigid atmospheric suits."
        },
        {
          "id": "q3_7",
          "question": "What is the approximate height of a water column required to exert the same pressure as 76 cm of mercury? (Density of mercury = 13.6 g/cm³)",
          "options": [
            "76 cm",
            "10.33 meters",
            "1.36 meters",
            "5.5 meters"
          ],
          "answer": "10.33 meters",
          "explanation": "h_w ρ_w g = h_m ρ_m g ==> h_w = (0.76 m × 13600) / 1000 ≈ 10.33 meters."
        },
        {
          "id": "q3_8",
          "question": "Why do some people experience nosebleeds at high mountain peaks?",
          "options": [
            "Blood pressure decreases with height",
            "External atmospheric pressure drops below human internal blood pressure, rupturing nasal capillaries",
            "Gravitational pull increases on blood",
            "Cold air freezes nasal tissue"
          ],
          "answer": "External atmospheric pressure drops below human internal blood pressure, rupturing nasal capillaries",
          "explanation": "At high altitudes, low atmospheric pressure creates a pressure imbalance with internal blood pressure, causing delicate capillaries in the nasal lining to rupture."
        },
        {
          "id": "q3_9",
          "question": "A unit of pressure equal to 1 mm of mercury column height is termed:",
          "options": [
            "1 Pascal",
            "1 Torr",
            "1 Bar",
            "1 Atmosphere"
          ],
          "answer": "1 Torr",
          "explanation": "1 Torr is named after Torricelli and is defined as the pressure exerted by exactly 1 mm of mercury column (1 Torr ≈ 133.32 Pa)."
        },
        {
          "id": "q3_10",
          "question": "Cooking takes longer at high altitudes on mountains because:",
          "options": [
            "Atmospheric pressure is lower, causing water to boil at a lower temperature below 100°C",
            "Oxygen concentration is higher",
            "Heat capacity of water decreases",
            "Solar radiation cools the vessel"
          ],
          "answer": "Atmospheric pressure is lower, causing water to boil at a lower temperature below 100°C",
          "explanation": "Boiling point depends directly on external atmospheric pressure. At lower mountain pressure, water boils at 90°C or less, transferring less heat and delaying cooking (resolved using a pressure cooker)."
        }
      ]
    },
    {
      "id": "mod_4",
      "number": 4,
      "title": "Pascal's Law & Hydraulic Machinery",
      "description": "Statement of Pascal's principle, pressure transmission in enclosed fluids, hydraulic lift, hydraulic brakes, and hydraulic press.",
      "theoryHtml": "<h4>1. Pascal's Law (Blaise Pascal, 1653)</h4>\n<div class=\"notes-callout\"><strong>Pascal's Principle:</strong> Pressure applied to an enclosed, incompressible fluid at rest is transmitted undiminished and equally in all directions throughout the fluid and to the walls of the containing vessel.</div>\n<h4>2. Mathematical Formulation & Hydraulic Lift</h4>\n<p>Consider a closed vessel with two pistons of cross-sectional areas <strong>A₁</strong> (input, small) and <strong>A₂</strong> (output, large):</p>\n<p>Pressure applied at input: <strong>P₁ = F₁ / A₁</strong></p>\n<p>By Pascal's Law, this identical pressure appears at the output piston: <strong>P₂ = P₁</strong></p>\n<p><strong>F₂ / A₂ = F₁ / A₁  ==>  F₂ = F₁ × (A₂ / A₁)</strong></p>\n<ul>\n  <li>Since A₂ >> A₁, the output force <strong>F₂ is much greater than input force F₁</strong>.</li>\n  <li><strong>Mechanical Advantage:</strong> <strong>MA = F₂ / F₁ = A₂ / A₁</strong>.</li>\n  <li>The hydraulic lift acts as a <strong>force multiplier</strong>.</li>\n  <li><strong>Conservation of Energy:</strong> Work done is conserved. The input piston moves through a large distance d₁ while the heavy output load moves through a small distance d₂:\n    <br>F₁ × d₁ = F₂ × d₂ (assuming zero friction).\n  </li>\n</ul>\n<h4>3. Engineering Applications of Pascal's Law</h4>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Device</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Working Mechanism</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Practical Significance</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Hydraulic Car Lift</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Small pump pressure lifts massive vehicles on a wide ram.</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Used in automobile service stations.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Hydraulic Automobile Brakes</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Depressing brake pedal transmits hydraulic fluid pressure equally to all four wheel slave cylinders.</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Ensures equal, synchronized braking on all wheels, preventing car skidding.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Hydraulic Press (Bramah Press)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Used for baling cotton, extracting vegetable oil from seeds, and stamping coins.</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Delivers thousands of tons of compressive force.</td>\n  </tr>\n</table>",
      "pointsToRemember": [
        "Pascal's Law states that pressure applied to an enclosed fluid is transmitted undiminished in all directions.",
        "Hydraulic machines act as force multipliers (F₂ = F₁ × A₂/A₁) based on Pascal's Law.",
        "Hydraulic brakes deliver equal, synchronized braking force to all wheels simultaneously."
      ],
      "keyNotes": [
        "Hydraulic machines multiply force, but they NEVER multiply work or energy (Work Input = Work Output in an ideal frictionless system)."
      ],
      "questions": [
        {
          "id": "q4_1",
          "question": "On which fundamental physical principle do automobile hydraulic brakes operate?",
          "options": [
            "Archimedes' Principle",
            "Pascal's Law",
            "Bernoulli's Principle",
            "Hooke's Law"
          ],
          "answer": "Pascal's Law",
          "explanation": "Automobile hydraulic brakes utilize Pascal's Law to transmit master cylinder pressure undiminished through brake fluid to slave cylinders on all four wheels."
        },
        {
          "id": "q4_2",
          "question": "In a hydraulic press, the area of the large piston is 100 times the area of the small piston. If a force of 50 N is applied to the small piston, what force is exerted by the large piston?",
          "options": [
            "50 N",
            "500 N",
            "5000 N",
            "0.5 N"
          ],
          "answer": "5000 N",
          "explanation": "From Pascal's principle, F₂ = F₁ × (A₂ / A₁) = 50 N × 100 = 5000 N."
        },
        {
          "id": "q4_3",
          "question": "Does a hydraulic lift multiply mechanical work or energy?",
          "options": [
            "Yes, output energy is proportional to the area ratio (A₂/A₁).",
            "No, it multiplies force while work done remains conserved (Work In = Work Out).",
            "Yes, by utilizing fluid internal energy.",
            "No, but it multiplies speed."
          ],
          "answer": "No, it multiplies force while work done remains conserved (Work In = Work Out).",
          "explanation": "A machine can multiply force, but never work or energy (Conservation of Energy). The smaller force moves through a proportionately larger distance."
        },
        {
          "id": "q4_4",
          "question": "Why must air bubbles be completely bled out of an automobile hydraulic brake line?",
          "options": [
            "Air corrodes the brake pads.",
            "Air is highly compressible; pressing the brake pedal compresses the air bubble instead of transmitting pressure to the brakes (spongy brakes).",
            "Air decreases the boiling point of brake oil.",
            "Air makes the brake fluid heavier."
          ],
          "answer": "Air is highly compressible; pressing the brake pedal compresses the air bubble instead of transmitting pressure to the brakes (spongy brakes).",
          "explanation": "Pascal's Law requires an incompressible fluid. Air is highly compressible; when present in lines, applied force compresses the air pocket, failing to transmit pressure to wheel calipers."
        },
        {
          "id": "q4_5",
          "question": "Which of the following devices is NOT based on Pascal's law?",
          "options": [
            "Hydraulic lift",
            "Hydraulic brakes",
            "Hydraulic press",
            "Hydrometer"
          ],
          "answer": "Hydrometer",
          "explanation": "A hydrometer operates on Archimedes' Principle and the Law of Floatation to measure liquid density, whereas the other three rely on Pascal's Law."
        },
        {
          "id": "q4_6",
          "question": "If a small piston of diameter 2 cm moves down by 20 cm in a hydraulic press, how much will a large piston of diameter 20 cm rise?",
          "options": [
            "20 cm",
            "2 cm",
            "0.2 cm",
            "0.02 cm"
          ],
          "answer": "0.2 cm",
          "explanation": "Volume displaced is conserved: A₁ d₁ = A₂ d₂. Area ratio A₂/A₁ = (d₂/d₁)² = (20/2)² = 100. Hence d₂ = d₁ / 100 = 20 cm / 100 = 0.2 cm."
        },
        {
          "id": "q4_7",
          "question": "Pascal's law is strictly applicable to:",
          "options": [
            "Fluids in accelerated motion",
            "Incompressible fluids in static equilibrium",
            "Ideal gases flowing at supersonic speeds",
            "Plasma in magnetic fields"
          ],
          "answer": "Incompressible fluids in static equilibrium",
          "explanation": "Pascal's Law is formulated for an enclosed, incompressible fluid at rest (in hydrostatic equilibrium)."
        },
        {
          "id": "q4_8",
          "question": "A dentist's patient chair is raised using a foot-operated pedal based on:",
          "options": [
            "Pascal's Principle",
            "Archimedes' Principle",
            "Bernoulli's Theorem",
            "Stokes' Law"
          ],
          "answer": "Pascal's Principle",
          "explanation": "The dentist chair is supported by a hydraulic cylinder driven by fluid pressure generated by a foot pump via Pascal's Principle."
        },
        {
          "id": "q4_9",
          "question": "What is the mechanical advantage (MA) of an ideal hydraulic lift with piston radii r₁ = 5 cm and r₂ = 25 cm?",
          "options": [
            "5",
            "25",
            "125",
            "50"
          ],
          "answer": "25",
          "explanation": "MA = A₂ / A₁ = (π r₂²) / (π r₁²) = (r₂ / r₁)² = (25 / 5)² = 5² = 25."
        },
        {
          "id": "q4_10",
          "question": "The pressure in a water pipe at ground level is 2 × 10⁵ Pa. What is the pressure in the pipe on the second floor at a height of 6 meters? (g = 10 m/s², density = 1000 kg/m³)",
          "options": [
            "2.6 × 10⁵ Pa",
            "1.4 × 10⁵ Pa",
            "2.0 × 10⁵ Pa",
            "0.8 × 10⁵ Pa"
          ],
          "answer": "1.4 × 10⁵ Pa",
          "explanation": "P₂ = P₁ - h ρ g = 2 × 10⁵ - (6 × 1000 × 10) = 200,000 - 60,000 = 140,000 Pa = 1.4 × 10⁵ Pa."
        }
      ]
    },
    {
      "id": "mod_5",
      "number": 5,
      "title": "Archimedes' Principle, Buoyancy & Apparent Weight",
      "description": "Buoyant force (upthrust), statement of Archimedes' principle, apparent weight in liquids, and crown purity testing.",
      "theoryHtml": "<h4>1. Buoyant Force (Upthrust)</h4>\n<p>When a body is partially or wholly immersed in a fluid, it experiences an upward force exerted by the fluid, called the <strong>Buoyant Force (F_b)</strong> or <strong>Upthrust (U)</strong>.</p>\n<ul>\n  <li><strong>Origin of Buoyancy:</strong> Hydrostatic pressure increases with depth (P = hρg). The pressure on the bottom face of the submerged object is greater than that on the top face, resulting in a net upward fluid force.</li>\n  <li><strong>Line of Action:</strong> Buoyant force acts vertically upward through the <strong>Center of Buoyancy</strong> (the center of gravity of the displaced fluid).</li>\n</ul>\n<h4>2. Archimedes' Principle (c. 250 BC)</h4>\n<div class=\"notes-callout\"><strong>Archimedes' Principle:</strong> When a body is wholly or partially immersed in a fluid at rest, it experiences an upward buoyant force equal to the weight of the fluid displaced by it:\n<br><strong>Buoyant Force (F_b) = Weight of Displaced Fluid = V_sub × ρ_liquid × g</strong></div>\n<p>where V_sub is the volume of the submerged portion of the object, and ρ_liquid is the density of the liquid.</p>\n<h4>3. Apparent Weight of an Immersed Body</h4>\n<p>When weighed while immersed in a liquid, a body appears lighter because the upward buoyant force counteracts its true weight:</p>\n<p><strong>Apparent Weight = True Weight (in air) - Buoyant Force (F_b)</strong></p>\n<p><strong>W_apparent = m g - V ρ_liquid g</strong></p>\n<p>Loss in weight = True Weight - Apparent Weight = Weight of displaced liquid.</p>\n<h4>4. Factors Affecting Buoyant Force</h4>\n<ol>\n  <li><strong>Volume of Submerged Body (V):</strong> Larger displaced volume creates larger upthrust.</li>\n  <li><strong>Density of the Liquid (ρ_liquid):</strong> Upthrust is directly proportional to liquid density. (A person floats much more easily in dense saline seawater like the Dead Sea than in freshwater).</li>\n  <li><strong>Local Acceleration Due to Gravity (g):</strong> In weightlessness (free fall or orbiting satellite where g_eff = 0), buoyant force is zero.</li>\n  <li>Buoyancy is <strong>independent of the density and material of the immersed body itself</strong> (only depends on displaced fluid volume and fluid density).</li>\n</ol>",
      "pointsToRemember": [
        "Archimedes' Principle: Buoyant force = Weight of fluid displaced = V_displaced × ρ_fluid × g.",
        "Apparent Weight = True Weight in air - Buoyant Force.",
        "Buoyant force depends on the volume of the immersed body and the density of the liquid, not on the material density of the object."
      ],
      "keyNotes": [
        "It is significantly easier to swim in sea water than in river freshwater because the high salinity of sea water increases its density, producing a greater upward buoyant force."
      ],
      "questions": [
        {
          "id": "q5_1",
          "question": "Archimedes' principle states that the upward buoyant force exerted on a submerged body is strictly equal to:",
          "options": [
            "The weight of the submerged body itself",
            "The weight of the fluid displaced by the body",
            "The volume of the fluid displaced",
            "The atmospheric pressure on the surface"
          ],
          "answer": "The weight of the fluid displaced by the body",
          "explanation": "Archimedes' Principle dictates that the buoyant upthrust equals the weight of the displaced fluid (F_b = V_sub × ρ_fluid × g)."
        },
        {
          "id": "q5_2",
          "question": "Why is it easier to swim or float in sea water than in river freshwater?",
          "options": [
            "Sea water has higher temperature.",
            "Sea water contains dissolved salts, giving it higher density and generating greater buoyant upthrust.",
            "Sea water has lower surface tension.",
            "River water exerts downward centrifugal force."
          ],
          "answer": "Sea water contains dissolved salts, giving it higher density and generating greater buoyant upthrust.",
          "explanation": "Salinity increases seawater density (~1025 kg/m³ vs 1000 kg/m³ for freshwater). Higher liquid density increases the buoyant force (F_b = Vρg), aiding floatation."
        },
        {
          "id": "q5_3",
          "question": "A piece of metal weighs 50 N in air and 40 N when completely submerged in water. What is the buoyant force exerted by the water?",
          "options": [
            "10 N",
            "50 N",
            "40 N",
            "90 N"
          ],
          "answer": "10 N",
          "explanation": "Buoyant force = True weight in air - Apparent weight in water = 50 N - 40 N = 10 N."
        },
        {
          "id": "q5_4",
          "question": "A heavy stone immersed in water appears to weigh less. Why?",
          "options": [
            "Its mass decreases in water.",
            "Water exerts an upward buoyant force that opposes gravity.",
            "Gravity is shielded by liquid molecules.",
            "The stone dissolves partially."
          ],
          "answer": "Water exerts an upward buoyant force that opposes gravity.",
          "explanation": "The net downward force is reduced by the upward buoyant force (F_net = mg - F_b), making the stone feel lighter."
        },
        {
          "id": "q5_5",
          "question": "What is the buoyant force acting on an object submerged in water inside an artificial satellite orbiting the Earth?",
          "options": [
            "Equal to its weight on Earth",
            "Zero",
            "Infinite",
            "Half its weight"
          ],
          "answer": "Zero",
          "explanation": "In an orbiting satellite, effective gravity is zero (g_eff = 0). Since buoyant force F_b = V ρ g_eff, it is zero in weightlessness."
        },
        {
          "id": "q5_6",
          "question": "Two solid spheres of identical volume, one made of lead and the other of wood, are completely submerged in water. The buoyant force experienced is:",
          "options": [
            "Greater on the lead sphere because it is denser",
            "Greater on the wooden sphere",
            "Identical on both spheres",
            "Zero on the lead sphere"
          ],
          "answer": "Identical on both spheres",
          "explanation": "Buoyant force depends solely on the volume of displaced liquid (F_b = V ρ_water g). Since both have identical volumes and are fully submerged, the upthrust is identical."
        },
        {
          "id": "q5_7",
          "question": "A body of volume 200 cm³ is completely submerged in water. What is the buoyant force acting on it? (Take g = 10 m/s², density of water = 1000 kg/m³)",
          "options": [
            "2 N",
            "20 N",
            "0.2 N",
            "200 N"
          ],
          "answer": "2 N",
          "explanation": "V = 200 × 10⁻⁶ m³. F_b = V ρ g = 200 × 10⁻⁶ × 1000 × 10 = 2 N."
        },
        {
          "id": "q5_8",
          "question": "What is the physical point through which the buoyant force acts on an immersed body?",
          "options": [
            "Center of gravity of the immersed body",
            "Center of buoyancy (center of gravity of the displaced fluid)",
            "Metacenter",
            "Geometrical apex of the body"
          ],
          "answer": "Center of buoyancy (center of gravity of the displaced fluid)",
          "explanation": "The buoyant upthrust acts through the center of gravity of the displaced liquid, known as the Center of Buoyancy."
        },
        {
          "id": "q5_9",
          "question": "A vessel containing water is placed on a spring balance. A finger is dipped into the water without touching the vessel walls or bottom. The reading on the balance will:",
          "options": [
            "Increase",
            "Decrease",
            "Remain unchanged",
            "Drop to zero"
          ],
          "answer": "Increase",
          "explanation": "The water exerts an upward buoyant force on the finger. By Newton's Third Law, the finger exerts an equal and opposite downward force on the water, increasing the balance reading."
        },
        {
          "id": "q5_10",
          "question": "An iron nail sinks in water while a massive ship made of iron floats. Why?",
          "options": [
            "The ship is hollow and encloses a large volume of air, making its average density less than water.",
            "Iron in the nail is denser than iron in the ship.",
            "Surface tension keeps the ship afloat.",
            "The nail is magnetic while the ship is not."
          ],
          "answer": "The ship is hollow and encloses a large volume of air, making its average density less than water.",
          "explanation": "A hollow ship displaces a huge volume of water equal to its vast weight before sinking, because its overall average density (iron + hollow air) is less than that of water."
        }
      ]
    },
    {
      "id": "mod_6",
      "number": 6,
      "title": "Law of Floatation, Relative Density & Hydrometers",
      "description": "Conditions of floatation, relative density (specific gravity), fraction submerged, hydrometers, and lactometers.",
      "theoryHtml": "<h4>1. The Law of Floatation</h4>\n<p>A body will float in a liquid if the upward buoyant force exerted on it when fully submerged is greater than or equal to its total weight. In equilibrium:</p>\n<div class=\"notes-callout\"><strong>Law of Floatation:</strong> A floating body displaces an amount of liquid whose weight is exactly equal to the total weight of the floating body:\n<br><strong>Weight of Floating Body = Weight of Liquid Displaced by its Submerged Portion</strong></div>\n<h4>Three Density Conditions:</h4>\n<ul>\n  <li><strong>Case 1: ρ_body > ρ_liquid:</strong> Weight > Maximum Buoyant Force ==> The body <strong>sinks</strong> to the bottom.</li>\n  <li><strong>Case 2: ρ_body = ρ_liquid:</strong> Weight = Maximum Buoyant Force ==> The body floats <strong>fully submerged</strong> just beneath the surface in neutral equilibrium.</li>\n  <li><strong>Case 3: ρ_body < ρ_liquid:</strong> The body floats <strong>partially submerged</strong>:\n    <br>Fraction of volume submerged: <strong>f_sub = V_sub / V_total = ρ_body / ρ_liquid</strong>\n  </li>\n</ul>\n<h4>2. Relative Density (Specific Gravity)</h4>\n<p><strong>Relative Density (RD)</strong> is the ratio of the density of a substance to the density of pure water at 4°C (1000 kg/m³ or 1 g/cm³):</p>\n<p><strong>Relative Density = Density of Substance / Density of Water at 4°C = Weight of Substance in Air / Loss of Weight in Water</strong></p>\n<ul>\n  <li>Relative density is a pure ratio; it has <strong>no units and no dimensions</strong>.</li>\n  <li>If RD < 1, the body floats in water (e.g., Ice RD ≈ 0.92, Wood RD ≈ 0.6 to 0.8).</li>\n  <li>If RD > 1, the body sinks in water (e.g., Iron RD ≈ 7.8, Gold RD ≈ 19.3).</li>\n</ul>\n<h4>3. Hydrometers & Lactometers</h4>\n<ul>\n  <li><strong>Hydrometer:</strong> Instrument based on the Law of Floatation used to measure liquid density or specific gravity. It has a weighted bulb at the bottom (to float vertically) and a narrow graduated stem at the top.\n    <br>• It sinks deeper in lighter liquids and floats higher in denser liquids (depth of immersion ∝ 1 / ρ_liquid).\n  </li>\n  <li><strong>Lactometer:</strong> Specialized hydrometer used to test the purity and water adulteration of milk (pure milk density ≈ 1.026 to 1.032 g/cm³; adding water lowers density).</li>\n</ul>",
      "pointsToRemember": [
        "A floating body displaces a weight of liquid exactly equal to its own total weight.",
        "Submerged volume fraction is given by V_sub / V_total = ρ_body / ρ_liquid.",
        "A hydrometer sinks deeper in less dense liquids and floats higher in denser liquids.",
        "Relative density is a dimensionless quantity equal to density relative to water at 4°C."
      ],
      "keyNotes": [
        "When ice floating in a glass of water melts completely, the water level in the glass remains strictly unchanged because the water formed by the melted ice has the exact same volume as the submerged portion previously displaced."
      ],
      "questions": [
        {
          "id": "q6_1",
          "question": "A block of ice is floating in a beaker filled to the brim with water. What happens to the water level when the ice melts completely?",
          "options": [
            "Water overflows",
            "Water level goes down",
            "Water level remains strictly unchanged",
            "First rises then falls"
          ],
          "answer": "Water level remains strictly unchanged",
          "explanation": "A floating ice block displaces a volume of water equal to its weight. When it melts, it becomes water of that exact same weight and volume, filling the cavity with zero change in liquid level."
        },
        {
          "id": "q6_2",
          "question": "An iceberg floats in seawater with density 1025 kg/m³. If the density of ice is 917 kg/m³, what fraction of the iceberg's volume is submerged beneath the water?",
          "options": [
            "About 90% (~9/10)",
            "About 50% (1/2)",
            "About 10% (1/10)",
            "100%"
          ],
          "answer": "About 90% (~9/10)",
          "explanation": "V_sub / V_total = ρ_ice / ρ_seawater = 917 / 1025 ≈ 0.895 ≈ 90% (or ~9/10th). Only ~10% (the 'tip of the iceberg') is visible above the surface."
        },
        {
          "id": "q6_3",
          "question": "Which instrument is used to determine the purity of milk by measuring its relative density?",
          "options": [
            "Hydrometer",
            "Lactometer",
            "Barometer",
            "Hygrometer"
          ],
          "answer": "Lactometer",
          "explanation": "A lactometer is a specialized hydrometer calibrated to detect milk adulteration by measuring the relative density of milk."
        },
        {
          "id": "q6_4",
          "question": "In which of the following liquids will a hydrometer sink the deepest?",
          "options": [
            "Pure water (1.00 g/cm³)",
            "Sea water (1.025 g/cm³)",
            "Alcohol / Petrol (0.75 g/cm³)",
            "Glycerin (1.26 g/cm³)"
          ],
          "answer": "Alcohol / Petrol (0.75 g/cm³)",
          "explanation": "Depth of immersion is inversely proportional to liquid density. The hydrometer sinks deepest in the liquid with the lowest density (alcohol/petrol)."
        },
        {
          "id": "q6_5",
          "question": "An iron needle sinks in water, but when placed carefully on mercury (density 13.6 g/cm³), the needle:",
          "options": [
            "Sinks to the bottom of mercury",
            "Floats on the surface of mercury",
            "Dissolves immediately",
            "Suspends at the center"
          ],
          "answer": "Floats on the surface of mercury",
          "explanation": "Density of iron is ~7.8 g/cm³, which is less than the density of mercury (13.6 g/cm³). Since ρ_iron < ρ_mercury, the needle floats effortlessly on mercury."
        },
        {
          "id": "q6_6",
          "question": "What is the relative density of a substance that weighs 80 N in air and 60 N when completely submerged in water?",
          "options": [
            "4",
            "0.75",
            "1.33",
            "2"
          ],
          "answer": "4",
          "explanation": "Loss of weight in water = 80 - 60 = 20 N. Relative Density = Weight in air / Loss in water = 80 / 20 = 4."
        },
        {
          "id": "q6_7",
          "question": "When a loaded merchant ship enters a freshwater river port from the open ocean, the ship:",
          "options": [
            "Rises higher out of the water",
            "Sinks a little deeper into the water",
            "Remains at the exact same waterline",
            "Capsizes"
          ],
          "answer": "Sinks a little deeper into the water",
          "explanation": "Freshwater is less dense than saline ocean water. To displace the same weight of water to support its weight, the ship must submerge a larger volume, sinking deeper (Plimsoll line mark)."
        },
        {
          "id": "q6_8",
          "question": "A piece of wood of density 0.6 g/cm³ floats in water (1.0 g/cm³). What percentage of the wooden block remains visible ABOVE the water surface?",
          "options": [
            "60%",
            "40%",
            "30%",
            "50%"
          ],
          "answer": "40%",
          "explanation": "Submerged fraction f_sub = ρ_wood / ρ_water = 0.6 / 1.0 = 0.6 (60%). Therefore, the fraction exposed above water is 100% - 60% = 40%."
        },
        {
          "id": "q6_9",
          "question": "What are the SI units of Relative Density?",
          "options": [
            "kg/m³",
            "g/cm³",
            "N/m²",
            "No units (dimensionless)"
          ],
          "answer": "No units (dimensionless)",
          "explanation": "Relative density is the ratio of two densities (kg/m³ divided by kg/m³), making it a pure dimensionless number without physical units."
        },
        {
          "id": "q6_10",
          "question": "A balloon filled with hydrogen gas rises in the air because:",
          "options": [
            "Hydrogen is an explosive gas",
            "The buoyant upthrust of air on the balloon exceeds the total weight of the balloon and hydrogen",
            "Atmospheric pressure pushes it upward",
            "Gravity repels hydrogen"
          ],
          "answer": "The buoyant upthrust of air on the balloon exceeds the total weight of the balloon and hydrogen",
          "explanation": "Hydrogen has a much lower density than air. The weight of ambient air displaced exceeds the total weight of the balloon, creating a net upward force."
        }
      ]
    },
    {
      "id": "mod_7",
      "number": 7,
      "title": "Stability of Floating Bodies & Physics of Icebergs",
      "description": "Metacenter (M), Metacentric height, conditions for stable ship equilibrium, and iceberg dynamics.",
      "theoryHtml": "<h4>1. Equilibrium Conditions for a Floating Body</h4>\n<p>For a floating body (such as a ship or boat) to remain in equilibrium:</p>\n<ol>\n  <li>The total weight of the body must equal the buoyant upthrust (Weight = Weight of displaced liquid).</li>\n  <li>The <strong>Center of Gravity (G)</strong> of the body and the <strong>Center of Buoyancy (B)</strong> must lie on the same vertical line.</li>\n</ol>\n<h4>2. The Metacenter (M) and Metacentric Height (GM)</h4>\n<p>When a floating ship tilts through a small angle of heel θ:</p>\n<ul>\n  <li>The submerged geometry changes, shifting the Center of Buoyancy from B to a new position B'.</li>\n  <li>The point of intersection of the vertical line through the new Center of Buoyancy (B') with the original vertical center line is called the <strong>Metacenter (M)</strong>.</li>\n  <li>The distance between the Center of Gravity (G) and Metacenter (M) is the <strong>Metacentric Height (GM)</strong>.</li>\n</ul>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Condition</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Relative Position</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Type of Equilibrium</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>M lies strictly ABOVE G (GM > 0)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Metacenter is higher than Center of Gravity</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Stable Equilibrium</strong>: Restoring couple rights the ship back upright.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>M coincides with G (GM = 0)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Metacenter is at Center of Gravity</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Neutral Equilibrium</strong>: Body remains in the tilted position.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>M lies BELOW G (GM < 0)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Metacenter is lower than Center of Gravity</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Unstable Equilibrium</strong>: Overturning couple capsizes the vessel.</td>\n  </tr>\n</table>\n<h4>3. Why Ballast is Added to Cargo Ships</h4>\n<p>When a merchant ship unloads its cargo, its center of gravity rises dangerously, lowering metacentric height. To prevent capsizing, heavy seawater <strong>ballast</strong> is pumped into hull tanks at the bottom, lowering G and ensuring M remains well above G for positive stability.</p>\n<h4>4. Anomalous Expansion of Water & Aquatic Life Preservation</h4>\n<p>Water has the unique property of <strong>anomalous thermal expansion</strong>:</p>\n<ul>\n  <li>Between 0°C and 4°C, water contracts on heating and expands on cooling.</li>\n  <li><strong>Maximum density of water occurs at exactly 4°C (1.000 g/cm³ = 1000 kg/m³).</strong></li>\n  <li>In freezing winter, cold surface water cools to 4°C and sinks to the lake bottom because it is densest.</li>\n  <li>Surface water below 4°C is lighter and remains at top until it freezes into an insulating ice layer at 0°C.</li>\n  <li>Consequently, deep water remains at <strong>4°C</strong> throughout harsh winters, preserving aquatic fish and plant ecosystems.</li>\n</ul>",
      "pointsToRemember": [
        "For stable equilibrium of a floating vessel, the Metacenter (M) must lie strictly ABOVE the Center of Gravity (G).",
        "Water achieves its maximum density at 4°C (1000 kg/m³).",
        "The anomalous expansion of water ensures lake bottoms remain at 4°C during winter, preserving marine life beneath surface ice."
      ],
      "keyNotes": [
        "Ballast tanks in modern ships maintain stability by keeping the center of gravity low and ensuring the metacenter remains above G."
      ],
      "questions": [
        {
          "id": "q7_1",
          "question": "For a floating ship to be in stable equilibrium, the Metacenter (M) must lie:",
          "options": [
            "Strictly below the Center of Gravity (G)",
            "Strictly above the Center of Gravity (G)",
            "Coinciding with the Center of Buoyancy (B)",
            "At the water surface"
          ],
          "answer": "Strictly above the Center of Gravity (G)",
          "explanation": "Stable equilibrium requires that when the vessel heels over, the resulting couple restores it to upright. This occurs only if the metacenter M is positioned above the center of gravity G (GM > 0)."
        },
        {
          "id": "q7_2",
          "question": "At what temperature does pure water attain its MAXIMUM density?",
          "options": [
            "0°C",
            "4°C",
            "100°C",
            "-4°C"
          ],
          "answer": "4°C",
          "explanation": "Due to anomalous expansion, water contracts upon heating from 0°C to 4°C, achieving its maximum density of 1000 kg/m³ at exactly 4°C."
        },
        {
          "id": "q7_3",
          "question": "Why do freshwater fish and aquatic life survive during severe freezing winters in deep lakes?",
          "options": [
            "Fish enter suspended animation in solid ice.",
            "Anomalous expansion ensures water at 4°C is densest and settles at the lake bottom under an insulating surface layer of ice.",
            "Chemical salts prevent all freezing.",
            "Geothermal vents heat the entire lake."
          ],
          "answer": "Anomalous expansion ensures water at 4°C is densest and settles at the lake bottom under an insulating surface layer of ice.",
          "explanation": "Water at 4°C is the densest and sinks to the bottom. Ice floats on top and insulates the deep 4°C water, keeping aquatic organisms alive."
        },
        {
          "id": "q7_4",
          "question": "What happens to the volume of a given sample of water when it is heated from 0°C to 10°C?",
          "options": [
            "It continuously increases",
            "It continuously decreases",
            "It first decreases (from 0°C to 4°C) and then increases (above 4°C)",
            "It first increases and then decreases"
          ],
          "answer": "It first decreases (from 0°C to 4°C) and then increases (above 4°C)",
          "explanation": "Water contracts anomalously between 0°C and 4°C (volume reaches minimum at 4°C), and then expands normally above 4°C (volume increases)."
        },
        {
          "id": "q7_5",
          "question": "Why is water ballast loaded into empty cargo ships before embarking on ocean voyages?",
          "options": [
            "To clean the hull tanks",
            "To lower the ship's center of gravity and ensure the Metacenter remains well above G for stability",
            "To increase ship speed",
            "To reduce fuel consumption"
          ],
          "answer": "To lower the ship's center of gravity and ensure the Metacenter remains well above G for stability",
          "explanation": "Without cargo, a ship rides dangerously high, raising its center of gravity. Ballast water lowers G, maintaining a safe metacentric height to prevent capsizing."
        },
        {
          "id": "q7_6",
          "question": "If water expands on freezing into ice, what happens to the density of ice relative to liquid water?",
          "options": [
            "Ice is denser than water",
            "Ice is less dense than water (by ~9%)",
            "Both have identical density",
            "Density depends on container shape"
          ],
          "answer": "Ice is less dense than water (by ~9%)",
          "explanation": "Ice has an open hexagonal cage-like crystalline structure with empty voids, giving it ~9% larger volume and lower density (~0.92 g/cm³) than liquid water, allowing it to float."
        },
        {
          "id": "q7_7",
          "question": "Why do household water supply pipes sometimes burst during freezing winter nights in cold regions?",
          "options": [
            "Pipe metal expands drastically in cold",
            "Water expands anomalously upon freezing into ice, exerting immense bursting pressure on pipe walls",
            "Atmospheric pressure crushes the pipes",
            "Dissolved oxygen causes sudden chemical explosion"
          ],
          "answer": "Water expands anomalously upon freezing into ice, exerting immense bursting pressure on pipe walls",
          "explanation": "Freezing causes a ~9% volume expansion. In rigid closed pipes, this trapped freezing water generates thousands of atmospheres of pressure, rupturing the pipes."
        },
        {
          "id": "q7_8",
          "question": "The center of buoyancy of a floating body is defined as:",
          "options": [
            "The geometric center of the floating body",
            "The center of gravity of the displaced liquid",
            "The point where weight acts",
            "The metacenter"
          ],
          "answer": "The center of gravity of the displaced liquid",
          "explanation": "The center of buoyancy B is the centroid (center of gravity) of the volume of fluid displaced by the submerged portion."
        },
        {
          "id": "q7_9",
          "question": "What is the condition of equilibrium when the Metacenter (M) lies BELOW the Center of Gravity (G) of a floating vessel?",
          "options": [
            "Stable equilibrium",
            "Unstable equilibrium (tends to capsize)",
            "Neutral equilibrium",
            "Dynamic equilibrium"
          ],
          "answer": "Unstable equilibrium (tends to capsize)",
          "explanation": "If M is below G (negative metacentric height), any small angular tilt produces a couple in the direction of the tilt, flipping the vessel upside down."
        },
        {
          "id": "q7_10",
          "question": "When ice at 0°C is heated to 4°C, its density:",
          "options": [
            "Decreases",
            "Increases",
            "Remains unchanged",
            "Drops to zero"
          ],
          "answer": "Increases",
          "explanation": "As ice melts and water warms from 0°C to 4°C, open crystal structures collapse, packing molecules more densely until maximum density is reached at 4°C."
        }
      ]
    },
    {
      "id": "mod_8",
      "number": 8,
      "title": "Surface Tension: Molecular Origin & Surface Energy",
      "description": "Cohesive vs adhesive intermolecular forces, sphere of molecular influence, surface tension definition, and surface energy.",
      "theoryHtml": "<h4>1. Intermolecular Forces: Cohesion vs Adhesion</h4>\n<ul>\n  <li><strong>Cohesive Force:</strong> Force of mutual attraction between molecules of the <strong>same substance</strong> (e.g., water-water, mercury-mercury). Mercury has very strong cohesion, pulling itself into spherical droplets.</li>\n  <li><strong>Adhesive Force:</strong> Force of attraction between molecules of <strong>different substances</strong> (e.g., water-glass, ink-paper, glue-wood). Water wets clean glass because water-glass adhesion exceeds water-water cohesion.</li>\n</ul>\n<h4>2. Molecular Theory of Surface Tension (Laplace)</h4>\n<p>A molecule deep in the bulk of a liquid experiences balanced attractive forces in all directions (net force = 0). However, a molecule at the <strong>liquid surface film</strong> experiences inward cohesive pulls from molecules below, with no compensating upward liquid pull:</p>\n<ul>\n  <li>Every surface molecule experiences a <strong>net inward downward force</strong>.</li>\n  <li>To bring a molecule from the interior to the surface requires doing work against this inward pull.</li>\n  <li>Consequently, surface molecules possess excess potential energy called <strong>Surface Energy</strong>.</li>\n  <li>Systems spontaneously seek the lowest potential energy state. Therefore, the liquid surface contracts to acquire the <strong>minimum possible surface area</strong>, behaving like a stretched elastic membrane.</li>\n</ul>\n<h4>3. Definition of Surface Tension (T or S)</h4>\n<p><strong>Surface Tension</strong> is defined as the force acting per unit length of an imaginary line drawn on the liquid surface, perpendicular to the line and tangential to the surface:</p>\n<p><strong>T = Force / Length = F / L</strong></p>\n<ul>\n  <li><strong>SI Unit:</strong> <strong>N/m</strong> (or J/m²). CGS Unit: dyne/cm (1 N/m = 10³ dyne/cm).</li>\n  <li><strong>Dimensional Formula:</strong> <strong>[M¹ L⁰ T⁻²]</strong>.</li>\n  <li><strong>Surface Energy (E):</strong> Work done in increasing surface area by ΔA:\n    <br><strong>W = T × ΔA</strong> (Surface Energy per unit area = Surface Tension).\n  </li>\n</ul>\n<h4>4. Prime Real-Life Consequences of Surface Tension</h4>\n<ol>\n  <li><strong>Spherical Shape of Raindrops & Dew:</strong> For a given volume, a <strong>sphere has the minimum surface area</strong>. Surface tension contracts falling liquid drops into perfect spheres.</li>\n  <li><strong>Greased Needle Floating on Water:</strong> A steel needle placed gently on water rests in a shallow surface depression supported by upward surface tension components, despite steel being 8 times denser than water.</li>\n  <li><strong>Hairs of a Paintbrush Clumping:</strong> When dipped in water, brush hairs spread apart. When lifted out, surface tension of the water film pulls hairs together.</li>\n  <li><strong>Lead Shots Manufacture:</strong> Molten lead dropped from a high tower forms spherical droplets due to surface tension before solidifying in a water bath.</li>\n</ol>",
      "pointsToRemember": [
        "Surface tension T = F / L has SI unit N/m (or J/m²) and dimensional formula [M¹ L⁰ T⁻²].",
        "Raindrops and small liquid droplets are spherical because a sphere has the minimum surface area for a given volume.",
        "Cohesion is attraction between identical molecules; adhesion is attraction between dissimilar molecules."
      ],
      "keyNotes": [
        "Surface energy per unit area is numerically and dimensionally identical to surface tension (1 J/m² = 1 N/m)."
      ],
      "questions": [
        {
          "id": "q8_1",
          "question": "Why do falling raindrops and small liquid droplets assume a spherical shape?",
          "options": [
            "Viscosity of the surrounding air",
            "Surface tension contracts the liquid to the minimum surface area, which is a sphere",
            "Gravitational pull of the Earth",
            "Centrifugal rotation"
          ],
          "answer": "Surface tension contracts the liquid to the minimum surface area, which is a sphere",
          "explanation": "Surface tension minimizes surface energy by minimizing surface area. For any fixed volume, a geometric sphere possesses the smallest possible surface area."
        },
        {
          "id": "q8_2",
          "question": "What is the dimensional formula of surface tension?",
          "options": [
            "[M¹ L¹ T⁻²]",
            "[M¹ L⁰ T⁻²]",
            "[M¹ L⁻¹ T⁻²]",
            "[M¹ L² T⁻²]"
          ],
          "answer": "[M¹ L⁰ T⁻²]",
          "explanation": "Surface tension = Force / Length = [M¹ L¹ T⁻²] / [L] = [M¹ L⁰ T⁻²]."
        },
        {
          "id": "q8_3",
          "question": "A steel sewing needle placed gently on the surface of calm water floats without sinking. This phenomenon is explained by:",
          "options": [
            "Archimedes' Principle of buoyancy",
            "Surface tension acting like a stretched elastic membrane",
            "Pascal's Law",
            "Viscous drag force"
          ],
          "answer": "Surface tension acting like a stretched elastic membrane",
          "explanation": "The needle rests in a surface depression where the upward vertical components of surface tension balance the needle's weight without puncturing the surface film."
        },
        {
          "id": "q8_4",
          "question": "When a painter's shaving brush or watercolor brush is removed from water, its bristles cling together tightly. Why?",
          "options": [
            "Atmospheric pressure squeezes the bristles.",
            "Surface tension of the thin water film contracts to minimize surface area, drawing bristles together.",
            "Static electricity attracts the hairs.",
            "Capillarity repels water."
          ],
          "answer": "Surface tension of the thin water film contracts to minimize surface area, drawing bristles together.",
          "explanation": "While immersed, water is everywhere and bristles stay separated. When withdrawn, the enclosing water film contracts due to surface tension, binding the bristles together."
        },
        {
          "id": "q8_5",
          "question": "Water wets clean glass surfaces whereas liquid mercury forms spherical beads without wetting glass. Why?",
          "options": [
            "Mercury is denser than water.",
            "For water, adhesive force with glass exceeds cohesive force; for mercury, cohesive force exceeds adhesive force.",
            "Water has higher surface tension than mercury.",
            "Mercury reacts chemically with glass."
          ],
          "answer": "For water, adhesive force with glass exceeds cohesive force; for mercury, cohesive force exceeds adhesive force.",
          "explanation": "Water-glass adhesion > water cohesion (liquid wets glass). Mercury cohesion > mercury-glass adhesion (cohesion pulls mercury into beads, not wetting glass)."
        },
        {
          "id": "q8_6",
          "question": "How much work is required to stretch a soap film of surface tension T from area A to area A + ΔA, keeping both surfaces in mind?",
          "options": [
            "T × ΔA",
            "2 × T × ΔA",
            "½ × T × ΔA",
            "Zero"
          ],
          "answer": "2 × T × ΔA",
          "explanation": "A free soap film has two independent air-liquid interfaces (front and back). Work done W = 2 × (T × ΔA)."
        },
        {
          "id": "q8_7",
          "question": "In the historical manufacture of lead shots, molten lead is dropped from a high shot tower into water. The spherical shape of lead pellets is due to:",
          "options": [
            "Gravity",
            "Surface tension",
            "Centrifugal force",
            "Thermal expansion"
          ],
          "answer": "Surface tension",
          "explanation": "Falling droplets of molten lead assume a spherical shape due to surface tension before cooling and solidifying into round pellets upon hitting water."
        },
        {
          "id": "q8_8",
          "question": "What is the relation between 1 N/m and dyne/cm in CGS units?",
          "options": [
            "1 N/m = 10³ dyne/cm",
            "1 N/m = 10⁵ dyne/cm",
            "1 N/m = 10⁷ dyne/cm",
            "1 N/m = 1 dyne/cm"
          ],
          "answer": "1 N/m = 10³ dyne/cm",
          "explanation": "1 N/m = (10⁵ dynes) / (10² cm) = 10³ dyne/cm."
        },
        {
          "id": "q8_9",
          "question": "Small insects (water striders) walk smoothly across the surface of pond water without sinking because of:",
          "options": [
            "Light bodily weight only",
            "Surface tension of the water supporting their feet",
            "Buoyant force of air bubbles",
            "High water viscosity"
          ],
          "answer": "Surface tension of the water supporting their feet",
          "explanation": "Water striders have hydrophobic legs that rest on the elastic surface film of water, supported by surface tension forces."
        },
        {
          "id": "q8_10",
          "question": "Why does hot soup taste more flavorful and delicious than cold soup?",
          "options": [
            "Hot soup contains more nutrients.",
            "Higher temperature lowers surface tension, allowing the soup to spread widely across all taste buds on the tongue.",
            "Cold soup has lower density.",
            "Hot soup increases salivary viscosity."
          ],
          "answer": "Higher temperature lowers surface tension, allowing the soup to spread widely across all taste buds on the tongue.",
          "explanation": "Surface tension decreases with temperature. Low surface tension enables hot soup to spread smoothly over a larger area of the tongue, stimulating more taste receptors."
        }
      ]
    },
    {
      "id": "mod_9",
      "number": 9,
      "title": "Excess Pressure in Liquid Drops & Soap Bubbles",
      "description": "Curvature and pressure imbalance, Laplace formulas for liquid drop, air bubble in liquid, and soap bubble.",
      "theoryHtml": "<h4>1. Origin of Excess Pressure (ΔP)</h4>\n<p>Due to surface tension, a curved liquid surface exerts an inward normal force toward the center of curvature:</p>\n<ul>\n  <li>Plane surface: Pressure on both sides is equal (P_liquid = P_air).</li>\n  <li>Curved surface: Pressure on the <strong>concave side</strong> is always <strong>greater</strong> than pressure on the <strong>convex side</strong>.</li>\n  <li>To maintain mechanical equilibrium and prevent collapse, the fluid inside a droplet or bubble must be at a higher pressure, termed <strong>Excess Pressure (ΔP)</strong>.</li>\n</ul>\n<h4>2. Mathematical Formulas for Excess Pressure</h4>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">System</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Number of Free Surfaces</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Excess Pressure Formula (ΔP)</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Liquid Droplet in Air</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>1 surface</strong> (outer liquid-air interface)</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>ΔP = 2 T / r</strong></td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Air Bubble inside Liquid</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>1 surface</strong> (inner air-liquid interface)</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>ΔP = 2 T / r</strong></td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Soap Bubble in Air</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>2 surfaces</strong> (inner air-liquid & outer liquid-air)</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>ΔP = 4 T / r</strong></td>\n  </tr>\n</table>\n<h4>3. The Smaller Bubble Paradox</h4>\n<p>From ΔP = 4T / r, excess pressure is <strong>inversely proportional to radius r</strong> (ΔP ∝ 1 / r):</p>\n<div class=\"notes-callout\"><strong>Crucial Examination Scenario:</strong> If two soap bubbles of different radii (a small bubble of radius r₁ and a large bubble of radius r₂) are connected together by a narrow tube:\n<br>• The pressure inside the smaller bubble is <strong>higher</strong> (P₁ > P₂).\n<br>• Air flows from the <strong>smaller bubble to the larger bubble</strong>.\n<br>• The smaller bubble becomes even smaller (eventually collapsing), while the larger bubble grows even larger!</div>",
      "pointsToRemember": [
        "Excess pressure in a liquid drop or cavity bubble is ΔP = 2T / r (one surface).",
        "Excess pressure inside a soap bubble in air is ΔP = 4T / r (two surfaces).",
        "Excess pressure is inversely proportional to radius: smaller bubbles have higher internal pressure."
      ],
      "keyNotes": [
        "When two unequal soap bubbles are connected by a tube, air flows from the smaller bubble into the larger bubble because smaller radius implies higher internal pressure."
      ],
      "questions": [
        {
          "id": "q9_1",
          "question": "What is the formula for the excess pressure inside a spherical soap bubble of radius r and surface tension T in air?",
          "options": [
            "2T / r",
            "4T / r",
            "T / r",
            "8T / r"
          ],
          "answer": "4T / r",
          "explanation": "A soap bubble in air has two free surfaces (inner and outer), each contributing 2T/r. Total excess pressure ΔP = 4T / r."
        },
        {
          "id": "q9_2",
          "question": "What is the excess pressure inside a spherical water droplet of radius r and surface tension T?",
          "options": [
            "4T / r",
            "2T / r",
            "T / 2r",
            "T / r"
          ],
          "answer": "2T / r",
          "explanation": "A liquid droplet has only one free surface (the outer liquid-air interface), so excess pressure ΔP = 2T / r."
        },
        {
          "id": "q9_3",
          "question": "Two soap bubbles of unequal radii r₁ and r₂ (with r₁ < r₂) are connected by a hollow glass tube with an open stopcock. What will happen?",
          "options": [
            "Both bubbles will equalize to the same radius.",
            "Air will flow from the smaller bubble into the larger bubble, making the small one smaller and large one larger.",
            "Air will flow from the larger bubble into the smaller bubble.",
            "No air will flow between them."
          ],
          "answer": "Air will flow from the smaller bubble into the larger bubble, making the small one smaller and large one larger.",
          "explanation": "Pressure inside a bubble is ΔP = 4T/r. Since r₁ < r₂, internal pressure P₁ > P₂. Air moves from high pressure to low pressure, so the smaller bubble empties into the larger."
        },
        {
          "id": "q9_4",
          "question": "What is the excess pressure inside an air bubble of radius 1 mm (10⁻³ m) formed deep inside a pond where water surface tension T = 0.07 N/m?",
          "options": [
            "70 N/m²",
            "140 N/m²",
            "280 N/m²",
            "35 N/m²"
          ],
          "answer": "140 N/m²",
          "explanation": "An air bubble submerged inside a liquid has only one liquid-air boundary: ΔP = 2T / r = (2 × 0.07) / 10⁻³ = 0.14 × 10³ = 140 N/m²."
        },
        {
          "id": "q9_5",
          "question": "If the radius of a soap bubble is doubled, the excess pressure inside it will:",
          "options": [
            "Double (2x)",
            "Be halved (1/2)",
            "Quadruple (4x)",
            "Remain unchanged"
          ],
          "answer": "Be halved (1/2)",
          "explanation": "Since ΔP = 4T / r, excess pressure is inversely proportional to radius (ΔP ∝ 1/r). Doubling radius halves the excess pressure."
        },
        {
          "id": "q9_6",
          "question": "Why is excess pressure inside a soap bubble double that of a liquid drop of the same radius?",
          "options": [
            "Soap solution has double the density of pure water.",
            "A soap bubble has two free liquid-gas surfaces (inner and outer), whereas a drop has only one.",
            "Air inside the bubble is pressurized by temperature.",
            "Viscosity of soap is higher."
          ],
          "answer": "A soap bubble has two free liquid-gas surfaces (inner and outer), whereas a drop has only one.",
          "explanation": "The hollow soap bubble film possesses both an inner surface in contact with interior air and an outer surface in contact with exterior air, doubling the net inward surface tension force."
        },
        {
          "id": "q9_7",
          "question": "When an air bubble rises from the bottom of a deep lake to the surface, its size:",
          "options": [
            "Decreases",
            "Increases",
            "Remains constant",
            "First decreases then increases"
          ],
          "answer": "Increases",
          "explanation": "As the bubble ascends, hydrostatic pressure (hρg) drops. By Boyle's law (P V = constant), reduced external pressure causes the bubble volume to expand."
        },
        {
          "id": "q9_8",
          "question": "What is the ratio of excess pressure inside a droplet of radius 1 mm to that inside a droplet of radius 2 mm of the same liquid?",
          "options": [
            "1 : 2",
            "2 : 1",
            "4 : 1",
            "1 : 4"
          ],
          "answer": "2 : 1",
          "explanation": "ΔP ∝ 1 / r. Ratio ΔP₁ / ΔP₂ = r₂ / r₁ = 2 mm / 1 mm = 2 : 1."
        },
        {
          "id": "q9_9",
          "question": "On which side of a curved liquid surface is the pressure always higher?",
          "options": [
            "On the convex side",
            "On the concave side",
            "Pressure is identical on both sides",
            "Depends on the liquid's boiling point"
          ],
          "answer": "On the concave side",
          "explanation": "Surface tension pulls along the tangent, directing a net inward resultant force towards the center of curvature (concave side), requiring higher pressure on the concave side for balance."
        },
        {
          "id": "q9_10",
          "question": "Two soap bubbles have volumes in the ratio 1 : 8. What is the ratio of excess pressures inside them?",
          "options": [
            "1 : 2",
            "2 : 1",
            "1 : 4",
            "4 : 1"
          ],
          "answer": "2 : 1",
          "explanation": "Volume V ∝ r³, so r₁/r₂ = (1/8)^(1/3) = 1/2. Since ΔP ∝ 1/r, the pressure ratio is ΔP₁ / ΔP₂ = r₂ / r₁ = 2 / 1 = 2 : 1."
        }
      ]
    },
    {
      "id": "mod_10",
      "number": 10,
      "title": "Angle of Contact & Wetting vs Non-Wetting Liquids",
      "description": "Definition of angle of contact (θ), adhesive vs cohesive balance, acute vs obtuse contact angles, and meniscus profiles.",
      "theoryHtml": "<h4>1. Angle of Contact (θ) Defined</h4>\n<p>The <strong>Angle of Contact (θ)</strong> is defined as the angle enclosed between the tangent to the liquid surface at the point of contact and the solid surface inside the liquid.</p>\n<h4>2. Physical Classification of Liquids Based on θ</h4>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Parameter</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Wetting Liquids (e.g. Water on Glass)</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Non-Wetting Liquids (e.g. Mercury on Glass)</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Relative Intermolecular Forces</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Adhesive Force > Cohesive Force</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Cohesive Force > Adhesive Force</strong></td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Angle of Contact (θ)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Acute Angle (θ < 90°)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Obtuse Angle (θ > 90°)</strong></td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Meniscus Shape</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Concave Meniscus</strong> (curves upward at edges)</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Convex Meniscus</strong> (curves downward at edges)</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Capillary Tube Behavior</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Liquid <strong>rises (h > 0)</strong> (since cos θ > 0)</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Liquid <strong>depresses / falls (h < 0)</strong> (since cos θ < 0)</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Wetting Characteristic</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Wets and spreads on the solid surface</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Does not wet, beads up into spheres</td>\n  </tr>\n</table>\n<h4>Standard Benchmark Values:</h4>\n<ul>\n  <li>Pure water and clean glass: <strong>θ ≈ 0°</strong> (ideal wetting).</li>\n  <li>Ordinary tap water and glass: <strong>θ ≈ 8° to 14°</strong> (acute).</li>\n  <li>Mercury and clean glass: <strong>θ ≈ 138° to 140°</strong> (obtuse).</li>\n  <li>Water and lotus leaf / waxed surface: <strong>θ > 90° (superhydrophobic)</strong>.</li>\n</ul>\n<div class=\"notes-callout\"><strong>Waterproof Coatings:</strong> Waterproofing sprays increase the contact angle of fabric fibers to θ > 90°, transforming wetting surfaces into non-wetting surfaces so water beads and rolls off.</div>",
      "pointsToRemember": [
        "Angle of contact is acute (θ < 90°) when adhesive force > cohesive force, producing a concave meniscus (e.g. water-glass).",
        "Angle of contact is obtuse (θ > 90°) when cohesive force > adhesive force, producing a convex meniscus (e.g. mercury-glass).",
        "Liquids with acute contact angles wet surfaces and rise in capillary tubes; liquids with obtuse contact angles do not wet and suffer capillary depression."
      ],
      "keyNotes": [
        "Pure water and clean glass have an angle of contact of approximately 0°, while mercury and glass exhibit an obtuse angle of approximately 138°."
      ],
      "questions": [
        {
          "id": "q10_1",
          "question": "What is the shape of the liquid meniscus for a liquid that wets the walls of its glass container (such as water in glass)?",
          "options": [
            "Convex",
            "Concave",
            "Completely flat plane",
            "Cylindrical"
          ],
          "answer": "Concave",
          "explanation": "Because adhesive force between water and glass exceeds cohesive force within water, the liquid creeps upward at the walls, forming a concave meniscus."
        },
        {
          "id": "q10_2",
          "question": "What is the approximate value of the angle of contact between clean glass and mercury?",
          "options": [
            "0°",
            "8°",
            "90°",
            "138°"
          ],
          "answer": "138°",
          "explanation": "Mercury has high cohesive forces that dominate adhesion with glass, producing an obtuse angle of contact of approximately 138° (to 140°)."
        },
        {
          "id": "q10_3",
          "question": "What is the angle of contact between pure water and clean glass?",
          "options": [
            "Approximately 0°",
            "90°",
            "180°",
            "45°"
          ],
          "answer": "Approximately 0°",
          "explanation": "Pure water wets clean glass completely, producing an angle of contact of almost exactly 0°."
        },
        {
          "id": "q10_4",
          "question": "A liquid will NOT wet the surface of a solid if its angle of contact θ is:",
          "options": [
            "Acute (θ < 90°)",
            "Zero (θ = 0°)",
            "Obtuse (θ > 90°)",
            "θ = 45°"
          ],
          "answer": "Obtuse (θ > 90°)",
          "explanation": "When cohesive forces within the liquid exceed adhesive forces with the solid, the contact angle is obtuse (θ > 90°), and the liquid does not wet the solid."
        },
        {
          "id": "q10_5",
          "question": "How do waterproofing chemical agents work on umbrella and raincoat fabrics?",
          "options": [
            "By increasing water density",
            "By increasing the angle of contact between water and cloth fibers to greater than 90°",
            "By dissolving fabric pores",
            "By heating the raindrops"
          ],
          "answer": "By increasing the angle of contact between water and cloth fibers to greater than 90°",
          "explanation": "Waterproofing coats fibers with hydrophobic compounds, raising the contact angle to an obtuse angle (θ > 90°) so water beads up and cannot penetrate the weave."
        },
        {
          "id": "q10_6",
          "question": "What happens when a narrow capillary glass tube is dipped vertically into a dish of mercury?",
          "options": [
            "Mercury rises inside the tube with a concave meniscus.",
            "Mercury level is depressed inside the tube with a convex meniscus.",
            "Mercury overflows the top of the tube.",
            "Mercury level remains identical to the dish."
          ],
          "answer": "Mercury level is depressed inside the tube with a convex meniscus.",
          "explanation": "Since θ ≈ 138° (cos θ < 0), mercury experiences capillary depression (the level inside the tube drops below the outside level) with a convex meniscus."
        },
        {
          "id": "q10_7",
          "question": "When temperature increases, the angle of contact of a liquid generally:",
          "options": [
            "Increases",
            "Decreases",
            "Remains constant",
            "Fluctuates randomly"
          ],
          "answer": "Increases",
          "explanation": "Heating decreases surface tension and cohesive strength, which generally causes the angle of contact to increase slightly."
        },
        {
          "id": "q10_8",
          "question": "Lotus leaves do not get wet even during heavy rainfall because:",
          "options": [
            "The leaf surface absorbs water instantly.",
            "Microscopic wax structures produce an extremely large obtuse contact angle (θ > 150°), causing water to roll off as beads (Lotus Effect).",
            "Lotus leaves generate thermal heat.",
            "Gravity repels water from the leaf."
          ],
          "answer": "Microscopic wax structures produce an extremely large obtuse contact angle (θ > 150°), causing water to roll off as beads (Lotus Effect).",
          "explanation": "Superhydrophobicity (the Lotus Effect) arises from micro-nanostructured wax crystals on the leaf surface, creating a contact angle > 150° that prevents wetting."
        },
        {
          "id": "q10_9",
          "question": "What is the meniscus shape of liquid mercury inside a narrow glass test tube?",
          "options": [
            "Concave upwards",
            "Convex upwards",
            "Completely flat",
            "Parabolic downwards"
          ],
          "answer": "Convex upwards",
          "explanation": "Strong mercury cohesion pulls the liquid away from the glass walls, forming a convex meniscus curving upward at the center."
        },
        {
          "id": "q10_10",
          "question": "If a liquid has an angle of contact of exactly 90°, what will be the shape of its meniscus and its capillary rise?",
          "options": [
            "Meniscus is flat plane, and capillary rise is zero (h = 0)",
            "Meniscus is concave, and capillary rise is infinite",
            "Meniscus is convex, and capillary depression occurs",
            "Liquid overflows"
          ],
          "answer": "Meniscus is flat plane, and capillary rise is zero (h = 0)",
          "explanation": "When θ = 90°, cos θ = 0. In Jurin's law h = (2T cos θ) / (r ρ g), h = 0. The meniscus is perfectly flat and there is zero capillary rise or depression."
        }
      ]
    },
    {
      "id": "mod_11",
      "number": 11,
      "title": "Capillarity: Principles, Formulas & Natural Phenomena",
      "description": "Capillary action, Jurin's law (h = 2T cos θ / rρg), capillary rise/depression, and everyday phenomena like wicks, roots, and plowing.",
      "theoryHtml": "<h4>1. Capillarity (Capillary Action)</h4>\n<p>A tube with an extremely fine, uniform bore is called a <strong>capillary tube</strong> (from Latin <em>capillus</em>, meaning 'hair'). The phenomenon of the spontaneous rise or depression of a liquid in a narrow tube dipped vertically into it is known as <strong>Capillarity</strong>.</p>\n<h4>2. Mathematical Formula: Jurin's Law (James Jurin, 1718)</h4>\n<p>The equilibrium height (h) to which a liquid rises or falls in a capillary tube of internal radius <strong>r</strong> is given by:</p>\n<p><strong>h = (2 × T × cos θ) / (r × ρ × g)</strong></p>\n<p>where T = Surface Tension, θ = Angle of Contact, ρ = Liquid Density, and g = Acceleration due to gravity.</p>\n<div class=\"notes-callout\"><strong>Jurin's Law:</strong> For a given liquid and tube, capillary rise is inversely proportional to the tube's radius:\n<br><strong>h ∝ 1 / r  ==>  h × r = constant</strong>\n<br>A narrower capillary tube produces a much higher liquid rise than a wider tube.</div>\n<h4>3. Tube of Insufficient Length</h4>\n<p>What happens if a capillary tube of length L is shorter than the expected rise height h (L < h)?</p>\n<ul>\n  <li><strong>The liquid NEVER overflows out of the top!</strong></li>\n  <li>Instead, upon reaching the upper rim, the liquid adjusts the curvature of its meniscus (increases radius of curvature R such that h × R = L × R' = constant). The meniscus flattens out to maintain equilibrium without overflowing.</li>\n</ul>\n<h4>4. Everyday Practical Applications of Capillarity</h4>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Application</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Capillary Mechanism</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Kerosene Lamp / Candle Wick</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Oil rises continuously through narrow micro-pores between cotton threads to feed the flame.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Blotting Paper & Towels</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Porosity of cellulose fibers creates countless micro-capillaries that soak up spilled ink or water instantly.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Water Ascent in Plants (Xylem)</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Water and soil nutrients rise from roots to tree leaves through fine xylem vessels via capillarity and transpiration pull.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Agricultural Plowing of Fields</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Farmers plow the soil after rains to break the underground micro-capillary channels, preventing deep soil moisture from rising to the surface and evaporating.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Fountain Pen Nib Split</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">The fine slit in a fountain pen nib acts as a capillary channel, feeding ink steadily to the paper tip.</td>\n  </tr>\n</table>",
      "pointsToRemember": [
        "Jurin's Law: Capillary rise is inversely proportional to tube radius (h = 2T cos θ / (rρg); h ∝ 1/r).",
        "In a tube of insufficient length, the liquid never overflows; it merely flattens its meniscus curvature.",
        "Farmers plow agricultural fields to break soil capillaries, preserving underground moisture from evaporative loss."
      ],
      "keyNotes": [
        "If a capillary tube is taken inside an artificial satellite in orbit (weightless state, g = 0), water will rise to the very top rim of the tube, regardless of its length, but will not overflow."
      ],
      "questions": [
        {
          "id": "q11_1",
          "question": "According to Jurin's Law, the height to which a liquid rises in a capillary tube is:",
          "options": [
            "Directly proportional to the radius of the tube",
            "Inversely proportional to the radius of the tube (h ∝ 1/r)",
            "Directly proportional to the square of the radius",
            "Independent of the radius"
          ],
          "answer": "Inversely proportional to the radius of the tube (h ∝ 1/r)",
          "explanation": "From h = (2T cos θ) / (r ρ g), height h is inversely proportional to radius r. A narrower bore produces greater capillary rise."
        },
        {
          "id": "q11_2",
          "question": "What happens if a capillary tube of insufficient length (shorter than the equilibrium rise height) is dipped in water?",
          "options": [
            "Water overflows continuously like a miniature fountain.",
            "Water rises to the top end, and the meniscus adjusts its curvature without any overflowing.",
            "Water does not enter the tube at all.",
            "Water rises halfway and stops."
          ],
          "answer": "Water rises to the top end, and the meniscus adjusts its curvature without any overflowing.",
          "explanation": "The liquid rises to the top edge and its meniscus flattens (radius of curvature increases) so that h × R remains constant, preventing overflow."
        },
        {
          "id": "q11_3",
          "question": "Why do farmers break the soil surface by plowing their agricultural fields after winter rains?",
          "options": [
            "To aerate soil with nitrogen",
            "To break capillary channels in the soil, preventing subsoil moisture from rising and evaporating",
            "To kill subterranean insects",
            "To increase soil density"
          ],
          "answer": "To break capillary channels in the soil, preventing subsoil moisture from rising and evaporating",
          "explanation": "Unplowed dry soil develops narrow continuous capillary pores that draw deep moisture to the surface where it evaporates. Plowing disrupts these micro-channels, conserving moisture."
        },
        {
          "id": "q11_4",
          "question": "In an oil lamp, kerosene rises up through the cotton wick due to the phenomenon of:",
          "options": [
            "Capillary action",
            "Gravitational diffusion",
            "Osmotic pressure",
            "Bernoulli's effect"
          ],
          "answer": "Capillary action",
          "explanation": "The interconnected micro-pores between cotton fibers act as fine capillary tubes, drawing kerosene oil upward against gravity to sustain the flame."
        },
        {
          "id": "q11_5",
          "question": "If a capillary tube is dipped in water inside an orbiting space station where effective gravity is zero (g = 0), what will happen?",
          "options": [
            "Water will not rise at all.",
            "Water will rise to the very top of the tube, no matter how long the tube is.",
            "Water will boil immediately.",
            "Water will form an iceberg."
          ],
          "answer": "Water will rise to the very top of the tube, no matter how long the tube is.",
          "explanation": "Since g = 0, the theoretical rise h = (2T cos θ) / (r ρ g) is infinite. Surface tension pulls water to the full length of the tube to the top rim."
        },
        {
          "id": "q11_6",
          "question": "Why does blotting paper absorb spilled ink so rapidly?",
          "options": [
            "Because ink dissolves blotting paper",
            "Because fine porous spaces between cellulose fibers act as capillary tubes that draw ink in",
            "Because of chemical neutralization",
            "Because of high gravitational attraction"
          ],
          "answer": "Because fine porous spaces between cellulose fibers act as capillary tubes that draw ink in",
          "explanation": "Blotting paper consists of loosely felted cellulose fibers with numerous microscopic pores that function as capillaries, soaking up ink by capillary action."
        },
        {
          "id": "q11_7",
          "question": "If the diameter of a capillary tube is halved, the height to which water rises in it will:",
          "options": [
            "Be halved (1/2)",
            "Double (2x)",
            "Quadruple (4x)",
            "Remain unchanged"
          ],
          "answer": "Double (2x)",
          "explanation": "Since h ∝ 1 / r, halving the diameter (and radius) doubles the capillary rise height (2h)."
        },
        {
          "id": "q11_8",
          "question": "Water rises to a height of 10 cm in a capillary tube. If the tube is tilted at an angle of 60° to the vertical, the length of the water column along the tilted tube will be:",
          "options": [
            "10 cm",
            "20 cm",
            "5 cm",
            "8.66 cm"
          ],
          "answer": "20 cm",
          "explanation": "The vertical height h remains constant (10 cm). Length along tilted tube L = h / cos θ = 10 / cos 60° = 10 / 0.5 = 20 cm."
        },
        {
          "id": "q11_9",
          "question": "The split in the nib of a fountain pen is made specifically to:",
          "options": [
            "Make the nib flexible",
            "Provide a capillary path for ink to flow smoothly to the paper",
            "Decorate the pen",
            "Prevent ink from drying"
          ],
          "answer": "Provide a capillary path for ink to flow smoothly to the paper",
          "explanation": "The narrow slit between the tines acts as a capillary tube that draws ink from the feed down to the writing tip by capillary action."
        },
        {
          "id": "q11_10",
          "question": "Which of the following does NOT involve capillary action?",
          "options": [
            "Rising of sap in trees through xylem",
            "Soaking of water by a sponge",
            "Drawing soda through a drinking straw",
            "Bleeding of dye in fabric chromatography"
          ],
          "answer": "Drawing soda through a drinking straw",
          "explanation": "Drinking through a straw relies on lowering mouth pressure so atmospheric pressure pushes the liquid up; it is not capillary action."
        }
      ]
    },
    {
      "id": "mod_12",
      "number": 12,
      "title": "Thermal & Impurity Effects on Surface Tension",
      "description": "Temperature dependence of surface tension, critical temperature, highly soluble vs sparingly soluble impurities, detergents, and oil spreading.",
      "theoryHtml": "<h4>1. Effect of Temperature on Surface Tension</h4>\n<p>As the temperature of a liquid increases, the kinetic energy of its molecules increases, expanding the average intermolecular separation. Consequently, <strong>intermolecular cohesive forces decrease</strong>:</p>\n<div class=\"notes-callout\"><strong>Temperature Rule:</strong> The surface tension of liquids <strong>decreases with an increase in temperature</strong>. At the <strong>Critical Temperature</strong>, surface tension drops to <strong>exactly zero</strong> (the boundary between liquid and vapor disappears).</div>\n<h4>Practical Applications of Thermal Effects:</h4>\n<ul>\n  <li><strong>Hot Water Laundering:</strong> Hot water has significantly lower surface tension than cold water, allowing it to penetrate small fabric pores easily to wash out dirt.</li>\n  <li><strong>Delicious Hot Soup:</strong> Hot soup spreads smoothly across the tongue's taste buds due to reduced surface tension, tasting more flavorful than cold soup.</li>\n  <li><strong>Molten Wax Soldering:</strong> Heated soldering flux has low surface tension, spreading uniformly across metal joints.</li>\n</ul>\n<h4>2. Effect of Impurities on Surface Tension</h4>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Impurity Category</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Effect on Surface Tension</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Examples & Applications</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Highly Soluble Solutes</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Increases</strong> Surface Tension</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Adding common salt (NaCl) or sugar to water increases surface tension because solute-solvent attraction exceeds solvent-solvent cohesion.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Sparingly Soluble Solutes</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Decreases</strong> Surface Tension</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Dissolving soap, detergent, phenol, or alcohol in water sharply reduces surface tension.</td>\n  </tr>\n</table>\n<h4>3. Action of Detergents and Surfactants</h4>\n<p>Detergent molecules consist of a hydrophilic (water-attracting) head and a hydrophobic (oil-attracting) hydrocarbon tail. Adding detergent to water:</p>\n<ol>\n  <li>Dramatically <strong>lowers the surface tension of water</strong>, allowing it to thoroughly wet greasy fabrics.</li>\n  <li>Surfactant tails embed in grease/oil particles while hydrophilic heads face outward, forming micelles that detach dirt into suspension.</li>\n</ol>\n<h4>4. Pouring Oil on Mosquito-Breeding Ponds</h4>\n<p>Spraying a thin layer of kerosene or oil on stagnant pond water:</p>\n<ul>\n  <li>Oil lowers the surface tension of the water surface.</li>\n  <li>Mosquito larvae breathe atmospheric air by suspending from the water's surface film using specialized breathing siphons supported by surface tension.</li>\n  <li>Lowered surface tension makes the surface film collapse; larvae cannot suspend themselves and <strong>sink to the bottom and drown</strong>.</li>\n</ul>",
      "pointsToRemember": [
        "Surface tension decreases with increasing temperature, becoming zero at the critical temperature.",
        "Highly soluble salts (like NaCl) increase surface tension; detergents and soaps decrease surface tension.",
        "Detergents lower surface tension to facilitate deep fabric wetting and emulsify oily stains.",
        "Pouring kerosene on stagnant water lowers surface tension, causing mosquito larvae to sink and drown."
      ],
      "keyNotes": [
        "At the critical temperature of a liquid, the distinction between the liquid phase and saturated vapor phase vanishes, causing surface tension to drop to zero."
      ],
      "questions": [
        {
          "id": "q12_1",
          "question": "What happens to the surface tension of a liquid as its temperature is increased?",
          "options": [
            "It increases linearly",
            "It decreases and becomes zero at the critical temperature",
            "It remains unaffected",
            "It drops to zero at the freezing point"
          ],
          "answer": "It decreases and becomes zero at the critical temperature",
          "explanation": "Increased thermal agitation weakens intermolecular cohesive bonds, decreasing surface tension until it drops to zero at the critical temperature."
        },
        {
          "id": "q12_2",
          "question": "Why does washing clothes in hot water with detergent clean oily stains much more effectively than washing in cold water alone?",
          "options": [
            "Hot water dissolves the fabric fibers.",
            "Both heat and detergent drastically lower the surface tension of water, allowing deep penetration into fabric pores and emulsifying grease.",
            "Hot water increases water density.",
            "Detergent increases the viscosity of water."
          ],
          "answer": "Both heat and detergent drastically lower the surface tension of water, allowing deep penetration into fabric pores and emulsifying grease.",
          "explanation": "Elevated temperature and surfactant molecules reduce surface tension, allowing water to wet the fabric thoroughly and lift grease into micellar suspension."
        },
        {
          "id": "q12_3",
          "question": "Why is kerosene oil sprayed on stagnant pools and ditches to control malaria and dengue mosquitoes?",
          "options": [
            "Kerosene acts as a chemical nerve poison on adult mosquitoes.",
            "Kerosene lowers surface tension of water, preventing mosquito larvae from anchoring their breathing siphons so they sink and drown.",
            "Kerosene freezes the water surface.",
            "Kerosene absorbs all dissolved carbon dioxide."
          ],
          "answer": "Kerosene lowers surface tension of water, preventing mosquito larvae from anchoring their breathing siphons so they sink and drown.",
          "explanation": "Mosquito larvae rely on surface tension to support their weight at the surface to breathe air. Lowering surface tension breaks this support, causing larvae to sink and suffocate."
        },
        {
          "id": "q12_4",
          "question": "What happens to the surface tension of water when common salt (NaCl) is dissolved in it?",
          "options": [
            "It decreases",
            "It increases",
            "It remains unchanged",
            "It becomes zero"
          ],
          "answer": "It increases",
          "explanation": "Common salt is a highly soluble ionic solute. Strong electrostatic attraction between ions and water dipoles increases cohesive force, raising surface tension."
        },
        {
          "id": "q12_5",
          "question": "At what specific temperature does the surface tension of a liquid become completely zero?",
          "options": [
            "At 0°C",
            "At its boiling point",
            "At its Critical Temperature",
            "At absolute zero (-273.15°C)"
          ],
          "answer": "At its Critical Temperature",
          "explanation": "At the critical temperature, the meniscus between liquid and vapor disappears, and the surface tension becomes strictly zero."
        },
        {
          "id": "q12_6",
          "question": "When a drop of oil is placed on the surface of clean cold water, it spreads into a thin colorful film because:",
          "options": [
            "Surface tension of water is greater than that of oil",
            "Surface tension of oil is greater than that of water",
            "Oil density is greater than water density",
            "Oil dissolves rapidly in water"
          ],
          "answer": "Surface tension of water is greater than that of oil",
          "explanation": "Clean water has a much higher surface tension (~0.072 N/m) than oil (~0.030 N/m). The stronger outward pull of water drags the oil drop into a thin sheen."
        },
        {
          "id": "q12_7",
          "question": "Why does hot soup taste better than cold soup?",
          "options": [
            "Hot soup has higher surface tension.",
            "High temperature lowers surface tension, allowing soup to spread widely across all taste buds on the tongue.",
            "Cold soup has lower density.",
            "Hot soup contains fewer volatile aromatics."
          ],
          "answer": "High temperature lowers surface tension, allowing soup to spread widely across all taste buds on the tongue.",
          "explanation": "Hot soup has low surface tension, enabling it to coat the tongue uniformly and stimulate a greater number of taste receptors simultaneously."
        },
        {
          "id": "q12_8",
          "question": "Antiseptic solutions (like Dettol) applied to cuts and wounds have low surface tension so that:",
          "options": [
            "They evaporate instantly",
            "They spread easily over small crevices and microscopic cracks of the wound",
            "They coagulate blood",
            "They reduce body temperature"
          ],
          "answer": "They spread easily over small crevices and microscopic cracks of the wound",
          "explanation": "Low surface tension allows antiseptic liquids to spread quickly and penetrate deep into narrow wound crevices to neutralize bacteria."
        },
        {
          "id": "q12_9",
          "question": "A camphor crystal placed on clean water moves rapidly and erratically in all directions because:",
          "options": [
            "Camphor dissolves asymmetrically, creating local surface tension imbalances that pull the crystal erratically",
            "Camphor reacts chemically to release hydrogen gas jets",
            "Camphor floats by magnetic repulsion",
            "Camphor undergoes nuclear decay"
          ],
          "answer": "Camphor dissolves asymmetrically, creating local surface tension imbalances that pull the crystal erratically",
          "explanation": "As camphor dissolves unevenly, local surface tension decreases more on one side. The stronger surface tension on the opposite side pulls the flake, causing erratic motion."
        },
        {
          "id": "q12_10",
          "question": "Which of the following will DECREASE the surface tension of water?",
          "options": [
            "Dissolving common salt (NaCl)",
            "Dissolving sucrose (sugar)",
            "Adding liquid detergent or soap",
            "Cooling the water from 50°C to 10°C"
          ],
          "answer": "Adding liquid detergent or soap",
          "explanation": "Detergents and soaps are surfactants that disrupt hydrogen bonding at the liquid surface, significantly lowering surface tension."
        }
      ]
    },
    {
      "id": "mod_13",
      "number": 13,
      "title": "Viscosity: Internal Fluid Friction & Viscosity Coefficient",
      "description": "Definition of viscosity, Newton's law of viscous flow, velocity gradient, coefficient of viscosity η, and units Poise and Decapoise.",
      "theoryHtml": "<h4>1. Viscosity Defined</h4>\n<p><strong>Viscosity</strong> is the internal property of a fluid by virtue of which an internal friction force comes into play between adjacent liquid layers moving with different velocities, tending to oppose their relative motion.</p>\n<ul>\n  <li>Liquids like water and alcohol flow easily and have <strong>low viscosity</strong>.</li>\n  <li>Liquids like honey, glycerin, motor oil, and tar flow sluggishly and have <strong>high viscosity</strong>.</li>\n</ul>\n<h4>2. Newton's Law of Viscous Flow</h4>\n<p>Consider a liquid flowing in steady parallel layers over a fixed horizontal surface. A layer at distance x moves with velocity v, and an adjacent layer at distance (x + dx) moves with velocity (v + dv):</p>\n<ul>\n  <li><strong>Velocity Gradient:</strong> Rate of change of velocity with perpendicular distance: <strong>dv / dx</strong> (SI unit: s⁻¹).</li>\n  <li>The viscous drag force F between two adjacent layers of contact area A is directly proportional to area and velocity gradient:</li>\n</ul>\n<p><strong>F = - η × A × (dv / dx)</strong></p>\n<p>where <strong>η (eta)</strong> is the <strong>Coefficient of Viscosity</strong> of the fluid. The negative sign indicates that viscous force opposes the direction of relative motion.</p>\n<h4>3. Units & Dimensions of Viscosity (η)</h4>\n<ul>\n  <li><strong>SI Unit:</strong> <strong>Pascal-second (Pa·s)</strong> or <strong>kg/(m·s)</strong> or <strong>Decapoise (Poiseuille, Pl)</strong>.</li>\n  <li><strong>CGS Unit:</strong> <strong>Poise (P)</strong> (named after Jean Poiseuille).</li>\n  <li><strong>Conversion:</strong> <strong>1 Pa·s = 1 Decapoise = 10 Poise</strong> (1 Poise = 0.1 Pa·s).</li>\n  <li><strong>Dimensional Formula:</strong> <strong>[M¹ L⁻¹ T⁻¹]</strong>.</li>\n</ul>\n<h4>4. Effect of Temperature on Viscosity</h4>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Fluid State</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Effect of Temperature Increase</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Physical Mechanism</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Liquids</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Viscosity <strong>decreases rapidly</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Heating increases molecular spacing, weakening intermolecular cohesive forces (e.g., cold engine oil thins when the engine warms).</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Gases</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Viscosity <strong>increases</strong> (η ∝ √T)</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Heating increases thermal molecular velocity and rate of momentum diffusion between gas layers.</td>\n  </tr>\n</table>",
      "pointsToRemember": [
        "Newton's formula for viscous force: F = -η A (dv/dx).",
        "SI unit of viscosity is Pa·s (Decapoise); CGS unit is Poise (1 Pa·s = 10 Poise).",
        "Dimensional formula of coefficient of viscosity is [M¹ L⁻¹ T⁻¹].",
        "Viscosity of liquids decreases with temperature, while viscosity of gases increases with temperature (η ∝ √T)."
      ],
      "keyNotes": [
        "Gases exhibit the opposite thermal viscosity behavior compared to liquids: heating liquids makes them less viscous, whereas heating gases increases their viscosity."
      ],
      "questions": [
        {
          "id": "q13_1",
          "question": "What is the dimensional formula of the coefficient of viscosity (η)?",
          "options": [
            "[M¹ L⁻¹ T⁻¹]",
            "[M¹ L¹ T⁻²]",
            "[M¹ L⁻¹ T⁻²]",
            "[M¹ L⁰ T⁻¹]"
          ],
          "answer": "[M¹ L⁻¹ T⁻¹]",
          "explanation": "From F = η A (dv/dx), η = F / [A (dv/dx)] = [M L T⁻²] / ([L²] × [T⁻¹]) = [M¹ L⁻¹ T⁻¹]."
        },
        {
          "id": "q13_2",
          "question": "How many CGS Poise are equal to 1 SI unit of viscosity (1 Pascal-second or Decapoise)?",
          "options": [
            "10 Poise",
            "100 Poise",
            "10⁵ Poise",
            "1 Poise"
          ],
          "answer": "10 Poise",
          "explanation": "1 Pa·s = 1 N·s/m² = (10⁵ dyne × s) / (10⁴ cm²) = 10 dyne·s/cm² = 10 Poise."
        },
        {
          "id": "q13_3",
          "question": "What happens to the viscosity of liquids and gases respectively when their temperature is increased?",
          "options": [
            "Viscosity of liquids decreases, while viscosity of gases increases",
            "Viscosity of both liquids and gases decreases",
            "Viscosity of both liquids and gases increases",
            "Viscosity of liquids increases, while viscosity of gases decreases"
          ],
          "answer": "Viscosity of liquids decreases, while viscosity of gases increases",
          "explanation": "In liquids, heat weakens cohesive bonds (viscosity drops). In gases, heat increases molecular speed and momentum exchange across layers (viscosity rises)."
        },
        {
          "id": "q13_4",
          "question": "Which of the following liquids possesses the HIGHEST viscosity at room temperature?",
          "options": [
            "Water",
            "Alcohol",
            "Glycerin",
            "Ether"
          ],
          "answer": "Glycerin",
          "explanation": "Glycerin has dense intermolecular hydrogen bonding networks that generate high internal friction, giving it the highest viscosity among common laboratory liquids."
        },
        {
          "id": "q13_5",
          "question": "Why is multi-grade motor oil (e.g., 10W-40) used in modern automobile engines?",
          "options": [
            "To increase combustion temperature",
            "To maintain adequate lubrication viscosity across cold winter starts and high summer engine operating temperatures",
            "To increase engine weight",
            "To conduct electrical currents"
          ],
          "answer": "To maintain adequate lubrication viscosity across cold winter starts and high summer engine operating temperatures",
          "explanation": "Multi-grade oils contain polymer viscosity modifiers so the oil remains fluid during cold start-ups while resisting excessive thinning at high engine temperatures."
        },
        {
          "id": "q13_6",
          "question": "What is the SI unit of velocity gradient in fluid dynamics?",
          "options": [
            "m/s",
            "s⁻¹ (1/s)",
            "m/s²",
            "Pa·s"
          ],
          "answer": "s⁻¹ (1/s)",
          "explanation": "Velocity gradient = dv / dx = (m/s) / m = s⁻¹ (per second)."
        },
        {
          "id": "q13_7",
          "question": "When honey is stirred with a spoon, it offers much more resistance than water because:",
          "options": [
            "Honey has higher surface tension",
            "Honey has much higher coefficient of viscosity",
            "Honey has higher vapor pressure",
            "Honey is chemically acidic"
          ],
          "answer": "Honey has much higher coefficient of viscosity",
          "explanation": "Viscosity measures resistance to shearing flow. Honey has a high coefficient of viscosity, generating large viscous forces against the moving spoon."
        },
        {
          "id": "q13_8",
          "question": "An ideal (inviscid) fluid has a coefficient of viscosity equal to:",
          "options": [
            "1",
            "Zero",
            "Infinite",
            "0.5"
          ],
          "answer": "Zero",
          "explanation": "By definition, an ideal fluid is non-viscous (viscosity η = 0) and incompressible."
        },
        {
          "id": "q13_9",
          "question": "What is the physical cause of viscosity in gases?",
          "options": [
            "Strong intermolecular cohesion",
            "Diffusion and transport of molecular momentum between adjacent gas layers",
            "Static electrostatic repulsion",
            "Gravitational stratification"
          ],
          "answer": "Diffusion and transport of molecular momentum between adjacent gas layers",
          "explanation": "In gases, molecules continuously move randomly across layers, transferring forward momentum between faster and slower layers, creating viscous resistance."
        },
        {
          "id": "q13_10",
          "question": "Why does a layer of oil floating on water reduce wave motion on the ocean surface during storms?",
          "options": [
            "Oil absorbs seawater chemically",
            "Viscous damping in the oil film dissipates mechanical wave energy into heat",
            "Oil makes water heavier",
            "Oil decreases atmospheric air pressure"
          ],
          "answer": "Viscous damping in the oil film dissipates mechanical wave energy into heat",
          "explanation": "Spreading oil forms a viscous surface layer that damps surface ripples and dissipates wind energy, calming choppy breaking waves."
        }
      ]
    },
    {
      "id": "mod_14",
      "number": 14,
      "title": "Stokes' Law & Viscous Drag Force",
      "description": "Stokes' law formula (F = 6πηrv), conditions of validity, viscous resistance on falling spherical bodies, and Millikan oil drop.",
      "theoryHtml": "<h4>1. Stokes' Law (Sir George Gabriel Stokes, 1851)</h4>\n<p>When a small spherical body moves through an infinite, viscous fluid medium, the fluid in contact with the sphere moves with the sphere's velocity, while fluid layers far away remain at rest. This relative velocity between fluid layers produces a backward retarding viscous force.</p>\n<div class=\"notes-callout\"><strong>Stokes' Law:</strong> The backward viscous drag force (F) acting on a small spherical body of radius <strong>r</strong> moving with velocity <strong>v</strong> through a fluid of viscosity <strong>η</strong> is:\n<br><strong>F_viscous = 6 × π × η × r × v</strong></div>\n<h4>2. Conditions for the Validity of Stokes' Law</h4>\n<ol>\n  <li>The moving body must be <strong>perfectly spherical, rigid, and smooth</strong>.</li>\n  <li>The fluid medium must be <strong>infinite in extent</strong> (walls of the container must be far away compared to sphere radius).</li>\n  <li>The fluid medium must be <strong>continuous, homogeneous, and isotropic</strong>.</li>\n  <li>The velocity v of the sphere must be <strong>small</strong> so that the fluid flow around it is purely <strong>streamline (laminar)</strong> without generating turbulent eddies or wakes.</li>\n</ol>\n<h4>3. Significant Historical & Practical Applications</h4>\n<ul>\n  <li><strong>Millikan's Oil Drop Experiment (1909):</strong> Used Stokes' law to calculate the radius and terminal velocity of microscopic charged oil droplets falling in air, successfully measuring the fundamental elementary charge of an electron (e = 1.6 × 10⁻¹⁹ C).</li>\n  <li><strong>Falling Raindrops & Hailstones:</strong> Stokes' viscous drag prevents raindrops from accelerating infinitely under gravity, capping their speed at a safe terminal velocity.</li>\n  <li><strong>Sedimentation in Geology & Blood Testing:</strong> The settling velocity of silt particles in rivers and red blood cells in medical ESR (Erythrocyte Sedimentation Rate) tests follows Stokes' law.</li>\n</ul>",
      "pointsToRemember": [
        "Stokes' Law: Viscous drag force on a sphere is F = 6πηrv.",
        "Stokes' law is strictly valid only for smooth spherical bodies moving at low speeds in laminar streamline flow.",
        "Millikan's Oil Drop Experiment used Stokes' Law to discover the elementary charge of the electron."
      ],
      "keyNotes": [
        "Viscous drag force is directly proportional to the radius of the sphere (F ∝ r) and directly proportional to its velocity (F ∝ v)."
      ],
      "questions": [
        {
          "id": "q14_1",
          "question": "What is the mathematical expression for Stokes' law representing the viscous drag on a sphere of radius r moving at velocity v?",
          "options": [
            "F = 6πηrv",
            "F = ½πηrv²",
            "F = 4πηr²v",
            "F = 2πηrv"
          ],
          "answer": "F = 6πηrv",
          "explanation": "Stokes' law states that the retarding force on a spherical particle in laminar flow is F = 6 × π × η × r × v."
        },
        {
          "id": "q14_2",
          "question": "Which historic Nobel Prize-winning physics experiment relied on Stokes' law to measure the charge of an electron?",
          "options": [
            "Rutherford's Alpha Scattering Experiment",
            "Millikan's Oil Drop Experiment",
            "Davisson-Germer Experiment",
            "J.J. Thomson's Cathode Ray Experiment"
          ],
          "answer": "Millikan's Oil Drop Experiment",
          "explanation": "Robert Millikan applied Stokes' law to determine the mass and radius of charged oil droplets falling at terminal velocity, calculating e = 1.6 × 10⁻¹⁹ C."
        },
        {
          "id": "q14_3",
          "question": "According to Stokes' law, how does the viscous retarding force depend on the radius (r) of the sphere?",
          "options": [
            "F is directly proportional to r (F ∝ r)",
            "F is proportional to r²",
            "F is inversely proportional to r",
            "F is independent of r"
          ],
          "answer": "F is directly proportional to r (F ∝ r)",
          "explanation": "In F = 6πηrv, the viscous force is directly proportional to the first power of radius (F ∝ r)."
        },
        {
          "id": "q14_4",
          "question": "Stokes' law is strictly valid only when the fluid flow around the moving sphere is:",
          "options": [
            "Turbulent",
            "Streamline (laminar) at low speed",
            "Supersonic",
            "Rotational vortex"
          ],
          "answer": "Streamline (laminar) at low speed",
          "explanation": "At high speeds, turbulence and vortex shedding occur, rendering Stokes' law invalid. It requires low Reynolds number laminar flow."
        },
        {
          "id": "q14_5",
          "question": "If two identical spherical raindrops moving at 2 m/s coalesce into a single drop, how does the new radius relate to the original radius r?",
          "options": [
            "r' = 2r",
            "r' = 2^(1/3) r",
            "r' = 4r",
            "r' = r / 2"
          ],
          "answer": "r' = 2^(1/3) r",
          "explanation": "Volume is conserved: (4/3)π(r')³ = 2 × (4/3)πr³ ==> (r')³ = 2r³ ==> r' = 2^(1/3) r ≈ 1.26 r."
        },
        {
          "id": "q14_6",
          "question": "What is the direction of the viscous force described by Stokes' law?",
          "options": [
            "In the direction of motion",
            "Opposite to the direction of motion of the body",
            "Perpendicular to the direction of motion",
            "Towards the center of gravity of the Earth"
          ],
          "answer": "Opposite to the direction of motion of the body",
          "explanation": "Viscous drag opposes relative motion, acting as a braking force directly opposite to the velocity vector."
        },
        {
          "id": "q14_7",
          "question": "The Erythrocyte Sedimentation Rate (ESR) medical blood test is physically governed by:",
          "options": [
            "Stokes' Law of viscous settling",
            "Pascal's Law",
            "Bernoulli's Principle",
            "Boyle's Law"
          ],
          "answer": "Stokes' Law of viscous settling",
          "explanation": "ESR measures the settling velocity of red blood cells through blood plasma in a test tube, which obeys Stokes' law of sedimentation."
        },
        {
          "id": "q14_8",
          "question": "A steel ball of radius r falls through a viscous oil column with speed v. If another steel ball of radius 2r falls through the same oil with speed v, the ratio of viscous forces experienced is:",
          "options": [
            "1 : 2",
            "1 : 4",
            "2 : 1",
            "1 : 1"
          ],
          "answer": "1 : 2",
          "explanation": "F = 6πηrv. Since F ∝ r for constant v and η, F₁ / F₂ = r / (2r) = 1 / 2."
        },
        {
          "id": "q14_9",
          "question": "Which of the following shapes experiences the lowest fluid drag force when moving through a fluid at moderate speeds?",
          "options": [
            "A flat circular disc",
            "A streamlined teardrop shape",
            "A cube",
            "A hollow cylinder"
          ],
          "answer": "A streamlined teardrop shape",
          "explanation": "A streamlined teardrop shape delays boundary layer separation and minimizes turbulent wake formation, drastically lowering total drag."
        },
        {
          "id": "q14_10",
          "question": "Stokes' law does NOT apply to:",
          "options": [
            "A microscopic pollen grain settling in air",
            "A cannonball fired at supersonic speed through the atmosphere",
            "A small steel ball bearing falling in glycerin",
            "A tiny oil mist droplet in air"
          ],
          "answer": "A cannonball fired at supersonic speed through the atmosphere",
          "explanation": "A supersonic cannonball generates shockwaves and massive turbulent drag proportional to v², violating the laminar low-speed requirement of Stokes' law."
        }
      ]
    },
    {
      "id": "mod_15",
      "number": 15,
      "title": "Terminal Velocity & Falling Droplet Dynamics",
      "description": "Equilibrium of forces on falling spheres, derivation of terminal velocity formula (v_t ∝ r²), clouds floating, and parachutes.",
      "theoryHtml": "<h4>1. Concept of Terminal Velocity (v_t)</h4>\n<p>When an object is released from rest in a viscous fluid under gravity, it initially accelerates downward under its weight. As its velocity increases, the opposing <strong>viscous drag force (6πηrv)</strong> increases proportionally.</p>\n<p>Eventually, the upward forces (Buoyant force + Viscous drag) exactly balance the downward gravitational weight. At this point, the net force on the object becomes <strong>zero</strong>, acceleration drops to zero, and the body descends with a <strong>maximum constant velocity</strong> termed the <strong>Terminal Velocity (v_t)</strong>.</p>\n<h4>2. Mathematical Derivation of Terminal Velocity</h4>\n<p>At terminal velocity equilibrium:</p>\n<p><strong>Downward Weight (W) = Upward Buoyant Force (F_b) + Upward Viscous Drag (F_v)</strong></p>\n<p>W = (4/3) π r³ × ρ × g (where ρ is density of falling sphere)</p>\n<p>F_b = (4/3) π r³ × σ × g (where σ is density of fluid)</p>\n<p>F_v = 6 π η r v_t</p>\n<p>(4/3) π r³ ρ g = (4/3) π r³ σ g + 6 π η r v_t</p>\n<p>6 π η r v_t = (4/3) π r³ (ρ - σ) g</p>\n<div class=\"notes-callout\"><strong>Terminal Velocity Formula:</strong>\n<br><strong>v_t = (2 / 9) × [ r² × (ρ - σ) × g ] / η</strong></div>\n<h4>Critical Mathematical Deductions:</h4>\n<ul>\n  <li><strong>r² Dependence:</strong> <strong>v_t ∝ r²</strong> (Terminal velocity is directly proportional to the square of the radius!). A droplet with twice the radius falls 4 times faster.</li>\n  <li><strong>Density Difference (ρ - σ):</strong>\n    <br>• If ρ > σ: Body falls downward (v_t > 0).\n    <br>• If ρ < σ: Body rises upward (e.g., air bubbles rising in water, smoke rising in air).\n  </li>\n  <li><strong>Inversely Proportional to Viscosity:</strong> v_t ∝ 1 / η.</li>\n</ul>\n<h4>3. Real-World Applications</h4>\n<ol>\n  <li><strong>Why Clouds Float in the Sky:</strong> Cloud droplets are microscopic water specks with tiny radii (r ≈ 10 to 20 microns). Since v_t ∝ r², their terminal velocity is negligible (a few mm/s), causing clouds to float buoyantly on gentle upward thermal air currents.</li>\n  <li><strong>Raindrops Do Not Kill:</strong> Without air viscosity, a raindrop falling from a 2 km cloud would strike the ground at √(2gh) ≈ 200 m/s (~720 km/h), causing lethal damage. Viscous air drag limits terminal velocity to a gentle 5 to 9 m/s.</li>\n  <li><strong>Parachutist Landing Safely:</strong> Opening a parachute massively increases the effective surface area and air resistance, reducing terminal velocity from ~55 m/s (free fall) to a safe ~5 m/s for soft touchdown.</li>\n</ol>",
      "pointsToRemember": [
        "Terminal velocity is the constant maximum velocity attained by a body falling through a viscous fluid when net force is zero.",
        "Terminal velocity is directly proportional to the square of the radius: v_t ∝ r².",
        "Microscopic cloud droplets float because their minuscule radius yields an imperceptibly tiny terminal velocity.",
        "Parachutes reduce terminal velocity by maximizing drag area."
      ],
      "keyNotes": [
        "If density of body is less than density of fluid (ρ < σ), terminal velocity is negative, meaning the object accelerates upward (like air bubbles in water or helium balloons in air)."
      ],
      "questions": [
        {
          "id": "q15_1",
          "question": "How does the terminal velocity (v_t) of a spherical raindrop falling through air depend on its radius (r)?",
          "options": [
            "v_t is directly proportional to r (v_t ∝ r)",
            "v_t is proportional to the square of radius (v_t ∝ r²)",
            "v_t is inversely proportional to r",
            "v_t is independent of radius"
          ],
          "answer": "v_t is proportional to the square of radius (v_t ∝ r²)",
          "explanation": "From the terminal velocity formula v_t = (2/9) r² (ρ - σ) g / η, terminal velocity is directly proportional to the square of the radius (v_t ∝ r²)."
        },
        {
          "id": "q15_2",
          "question": "Why do rain clouds appear to float effortlessly in the sky without rapidly falling to Earth?",
          "options": [
            "Clouds have zero mass.",
            "Cloud water droplets have extremely tiny radii, making their terminal velocity (v_t ∝ r²) negligible and easily suspended by upward air drafts.",
            "Earth's magnetic field repels clouds.",
            "Atmospheric air is denser than water droplets."
          ],
          "answer": "Cloud water droplets have extremely tiny radii, making their terminal velocity (v_t ∝ r²) negligible and easily suspended by upward air drafts.",
          "explanation": "Because v_t ∝ r², tiny cloud droplets (r ~ 10 microns) have terminal settling velocities of fractions of a cm/s, easily held aloft by gentle thermal convective updrafts."
        },
        {
          "id": "q15_3",
          "question": "Two spherical raindrops have radii in the ratio 1 : 3. What is the ratio of their terminal velocities in air?",
          "options": [
            "1 : 3",
            "1 : 9",
            "1 : √3",
            "3 : 1"
          ],
          "answer": "1 : 9",
          "explanation": "Since v_t ∝ r², v_t1 / v_t2 = (r₁ / r₂)² = (1 / 3)² = 1 / 9."
        },
        {
          "id": "q15_4",
          "question": "When a parachutist jumps from an airplane and deploys a parachute, their descent velocity:",
          "options": [
            "Continuously increases until hitting the ground",
            "Rapidly decreases to a much lower, safe terminal velocity and then remains constant",
            "Drops to zero and floats upwards",
            "Becomes supersonic"
          ],
          "answer": "Rapidly decreases to a much lower, safe terminal velocity and then remains constant",
          "explanation": "The canopy provides huge drag area, quickly slowing descent until upward drag balances weight at a low terminal velocity (~5 m/s) for safe landing."
        },
        {
          "id": "q15_5",
          "question": "What is the net acceleration of an object falling through a fluid once it has attained its terminal velocity?",
          "options": [
            "9.8 m/s²",
            "Zero",
            "4.9 m/s²",
            "Infinite"
          ],
          "answer": "Zero",
          "explanation": "Terminal velocity is constant velocity. By Newton's First Law, when velocity is constant, acceleration a = dv/dt is exactly zero."
        },
        {
          "id": "q15_6",
          "question": "An air bubble formed deep in a pond rises toward the surface. Its terminal velocity is directed:",
          "options": [
            "Downwards toward Earth center",
            "Upwards toward the surface",
            "Horizontally",
            "It cannot attain terminal velocity"
          ],
          "answer": "Upwards toward the surface",
          "explanation": "Because the density of air is less than water (ρ < σ), the term (ρ - σ) is negative in the terminal velocity formula, indicating upward terminal velocity."
        },
        {
          "id": "q15_7",
          "question": "Eight identical small liquid droplets, each falling with terminal velocity v, coalesce to form a single large drop. What is the terminal velocity of the new large drop?",
          "options": [
            "2v",
            "4v",
            "8v",
            "v / 2"
          ],
          "answer": "4v",
          "explanation": "Volume is conserved: (4/3)π R³ = 8 × (4/3)π r³ ==> R³ = 8 r³ ==> R = 2r. Since v_t ∝ r², the new terminal velocity is (2r)² / r² × v = 4v."
        },
        {
          "id": "q15_8",
          "question": "Why do raindrops not strike human beings with lethal bullet-like speeds?",
          "options": [
            "Clouds are only a few meters high.",
            "Viscous air drag caps the maximum falling speed at a gentle terminal velocity (~7 to 9 m/s).",
            "Gravity turns off near the surface.",
            "Raindrops evaporate completely before landing."
          ],
          "answer": "Viscous air drag caps the maximum falling speed at a gentle terminal velocity (~7 to 9 m/s).",
          "explanation": "Air viscosity generates opposing Stokes' drag that balances the drop's weight early in its descent, keeping terminal speed safe and gentle."
        },
        {
          "id": "q15_9",
          "question": "Which of the following velocity-time graphs correctly depicts the motion of a ball dropped from rest in a viscous liquid?",
          "options": [
            "A straight line sloping upwards with constant slope",
            "A curve starting from zero velocity that flattens out horizontally asymptotically to terminal velocity v_t",
            "A downward sloping line",
            "A sinusoidal wave"
          ],
          "answer": "A curve starting from zero velocity that flattens out horizontally asymptotically to terminal velocity v_t",
          "explanation": "The ball accelerates initially, but acceleration decreases exponentially as drag rises, asymptotically approaching a constant horizontal plateau at v_t."
        },
        {
          "id": "q15_10",
          "question": "Terminal velocity is inversely proportional to which fluid parameter?",
          "options": [
            "Fluid density",
            "Coefficient of viscosity (η)",
            "Acceleration due to gravity",
            "Drop radius"
          ],
          "answer": "Coefficient of viscosity (η)",
          "explanation": "From v_t = 2r²(ρ - σ)g / (9η), terminal velocity is inversely proportional to the coefficient of viscosity (v_t ∝ 1 / η)."
        }
      ]
    },
    {
      "id": "mod_16",
      "number": 16,
      "title": "Streamline Flow, Turbulent Flow & Reynolds Number",
      "description": "Laminar streamline flow, critical velocity, turbulent flow with eddies, and the dimensionless Reynolds number (N_R).",
      "theoryHtml": "<h4>1. Streamline (Steady / Laminar) Flow</h4>\n<p>Flow of a fluid is said to be <strong>streamline (or laminar)</strong> if every particle of the fluid passing through a given point moves along the exact same path and with the exact same velocity as the preceding particles passing through that point.</p>\n<ul>\n  <li><strong>Streamline:</strong> The curve whose tangent at any point indicates the direction of fluid velocity at that point.</li>\n  <li><strong>Two streamlines can NEVER intersect each other!</strong> (If they intersected, a fluid particle at the crossing point would have two different velocities simultaneously, which is physically impossible).</li>\n  <li>Fluid flows in smooth, parallel lamina (sheets) without mixing.</li>\n</ul>\n<h4>2. Critical Velocity (v_c)</h4>\n<p>The <strong>critical velocity</strong> is the limiting velocity of fluid flow up to which the flow remains steady and streamline. If the flow speed exceeds the critical velocity, the flow transitions into irregular, swirling <strong>turbulent flow</strong>.</p>\n<h4>3. Turbulent Flow</h4>\n<p>When fluid velocity exceeds critical velocity, particles move haphazardly in zigzag, swirling paths, generating chaotic eddies, vortices, and whirlpools (e.g., foaming rapids in a mountain river, smoke billowing from a chimney, or exhaust from a jet engine).</p>\n<h4>4. Reynolds Number (N_R or Re)</h4>\n<p><strong>Osborne Reynolds</strong> formulated a pure dimensionless parameter that predicts the regime of fluid flow through a pipe of diameter D:</p>\n<p><strong>N_R = (ρ × v × D) / η = (Inertial Force) / (Viscous Force)</strong></p>\n<p>where ρ = fluid density, v = flow speed, D = pipe diameter, and η = fluid viscosity.</p>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Reynolds Number (N_R) Range</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Flow Character & Stability</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>N_R < 2000</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Laminar / Streamline Flow</strong> (viscous forces dominate).</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>2000 ≤ N_R ≤ 3000</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Transitional Flow</strong> (unstable, alternating between laminar and turbulent).</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>N_R > 3000</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Fully Turbulent Flow</strong> (inertial forces dominate, chaotic vortices).</td>\n  </tr>\n</table>",
      "pointsToRemember": [
        "Two streamlines can never cross each other because fluid velocity cannot have two directions at the same point.",
        "Critical velocity is the maximum velocity for laminar flow before turbulent chaos sets in.",
        "Reynolds number is dimensionless: N_R < 2000 implies laminar flow; N_R > 3000 implies turbulent flow."
      ],
      "keyNotes": [
        "Reynolds number represents the physical ratio of inertial forces to viscous forces in fluid mechanics."
      ],
      "questions": [
        {
          "id": "q16_1",
          "question": "Why can two streamlines in a steady fluid flow NEVER cross each other?",
          "options": [
            "Because fluid pressure would become infinite",
            "Because a fluid particle at the intersection would have two different velocity directions simultaneously, which is impossible",
            "Because surface tension repels them",
            "Because energy is not conserved"
          ],
          "answer": "Because a fluid particle at the intersection would have two different velocity directions simultaneously, which is impossible",
          "explanation": "Streamlines represent the trajectory of velocity vectors. An intersection would imply two simultaneous velocity vectors at a single point, violating single-valued flow."
        },
        {
          "id": "q16_2",
          "question": "What is the physical significance of the Reynolds number (N_R) in fluid mechanics?",
          "options": [
            "It measures the ratio of gravitational force to electric force",
            "It represents the ratio of inertial force to viscous force, predicting whether flow is laminar or turbulent",
            "It measures fluid compressibility",
            "It quantifies surface tension"
          ],
          "answer": "It represents the ratio of inertial force to viscous force, predicting whether flow is laminar or turbulent",
          "explanation": "Reynolds number N_R = ρvD/η represents the ratio of inertial forces to viscous damping forces, acting as the fundamental criterion for flow turbulence."
        },
        {
          "id": "q16_3",
          "question": "For fluid flow through a cylindrical pipe, the flow is strictly laminar and streamline if the Reynolds number is:",
          "options": [
            "Less than 2000",
            "Greater than 4000",
            "Between 2000 and 3000",
            "Equal to 10,000"
          ],
          "answer": "Less than 2000",
          "explanation": "When N_R < 2000, viscous forces dominate over inertial perturbations, maintaining smooth parallel streamline flow."
        },
        {
          "id": "q16_4",
          "question": "What happens when the flow velocity of a liquid in a tube exceeds its critical velocity?",
          "options": [
            "The flow becomes completely stationary.",
            "The flow transitions from smooth streamline to chaotic turbulent flow with vortices.",
            "The viscosity becomes infinite.",
            "The liquid starts boiling."
          ],
          "answer": "The flow transitions from smooth streamline to chaotic turbulent flow with vortices.",
          "explanation": "Critical velocity is the upper speed threshold for steady flow. Exceeding it triggers swirling eddies and turbulent mixing."
        },
        {
          "id": "q16_5",
          "question": "What are the SI units of Reynolds number?",
          "options": [
            "m/s",
            "Pa·s",
            "N/m",
            "It is dimensionless and unitless"
          ],
          "answer": "It is dimensionless and unitless",
          "explanation": "Reynolds number N_R = ρvD/η is a pure ratio of forces (Inertial/Viscous), making it completely dimensionless."
        },
        {
          "id": "q16_6",
          "question": "Laminar flow of blood in healthy human arteries produces no sound. Under what condition is turbulent blood flow heard through a stethoscope (Bruits)?",
          "options": [
            "When blood pressure drops to zero",
            "When arterial narrowing (stenosis) increases blood velocity, causing Reynolds number to exceed critical value",
            "When body temperature is 37°C",
            "During sleep"
          ],
          "answer": "When arterial narrowing (stenosis) increases blood velocity, causing Reynolds number to exceed critical value",
          "explanation": "Arterial constriction forces blood through a narrow lumen at high speed, driving N_R > 2000 into turbulence, which produces audible murmurs/bruits."
        },
        {
          "id": "q16_7",
          "question": "In which fluid regime are viscous forces overwhelmingly dominant over inertial forces?",
          "options": [
            "High Reynolds number (N_R > 10⁶)",
            "Low Reynolds number (N_R << 1)",
            "Supersonic flow",
            "Turbulent vortex"
          ],
          "answer": "Low Reynolds number (N_R << 1)",
          "explanation": "At very low Reynolds numbers (creeping or Stokes flow, N_R << 1), viscous resistance completely dominates inertial acceleration."
        },
        {
          "id": "q16_8",
          "question": "Why does smoke rising from an incense stick or cigarette ascend as a smooth vertical column for a few centimeters before breaking into turbulent swirls?",
          "options": [
            "Smoke cools down and becomes denser.",
            "As the rising smoke accelerates due to buoyancy, its velocity exceeds the critical velocity, transitioning from laminar to turbulent flow.",
            "Atmospheric oxygen is consumed.",
            "Gravity reverses direction."
          ],
          "answer": "As the rising smoke accelerates due to buoyancy, its velocity exceeds the critical velocity, transitioning from laminar to turbulent flow.",
          "explanation": "The hot plume accelerates upward under buoyancy. Once speed exceeds critical velocity (N_R > critical), the smooth streamline breaks into turbulent chaotic swirls."
        },
        {
          "id": "q16_9",
          "question": "Which variable is in the denominator of the Reynolds number formula N_R = ρvD / η?",
          "options": [
            "Fluid density (ρ)",
            "Flow velocity (v)",
            "Pipe diameter (D)",
            "Coefficient of viscosity (η)"
          ],
          "answer": "Coefficient of viscosity (η)",
          "explanation": "Viscosity η is in the denominator (N_R = ρvD / η), indicating that higher viscosity suppresses turbulence."
        },
        {
          "id": "q16_10",
          "question": "A streamlined body shape (like that of fish, birds, and aircraft) is designed primarily to:",
          "options": [
            "Increase friction drag",
            "Maintain laminar streamline flow and delay the onset of turbulent drag",
            "Increase vehicle weight",
            "Maximize gravitational attraction"
          ],
          "answer": "Maintain laminar streamline flow and delay the onset of turbulent drag",
          "explanation": "Streamlined shapes guide fluid smoothly around the body, minimizing boundary layer separation and avoiding turbulent energy-sapping wakes."
        }
      ]
    },
    {
      "id": "mod_17",
      "number": 17,
      "title": "Equation of Continuity & Incompressible Fluid Flow",
      "description": "Conservation of mass in fluids, equation of continuity A₁v₁ = A₂v₂, constriction speedup, and gardening hose nozzle.",
      "theoryHtml": "<h4>1. Principle of Conservation of Mass in Fluid Flow</h4>\n<p>For the steady, streamline flow of an ideal fluid (incompressible and non-viscous) through a pipe of varying cross-section, the total mass of fluid entering the pipe per unit time must equal the mass leaving the pipe per unit time:</p>\n<p><strong>Mass Flow Rate = dm / dt = ρ × A × v = constant</strong></p>\n<h4>2. The Equation of Continuity</h4>\n<p>For an <strong>incompressible fluid</strong> (density ρ = constant):</p>\n<div class=\"notes-callout\"><strong>Equation of Continuity:</strong>\n<br><strong>A₁ × v₁ = A₂ × v₂ = constant  ==>  A × v = constant</strong>\n<br>where A is the cross-sectional area and v is the fluid flow velocity.</div>\n<h4>Critical Kinematic Deduction:</h4>\n<p><strong>v ∝ 1 / A</strong></p>\n<ul>\n  <li>At narrower sections of a pipe (smaller area A), the fluid flows with <strong>greater velocity (v is large)</strong>.</li>\n  <li>At wider sections of a pipe (larger area A), the fluid flows with <strong>slower velocity (v is small)</strong>.</li>\n  <li><strong>Volume Flow Rate (Discharge Q):</strong> <strong>Q = A × v</strong> (SI unit: m³/s or liters/s).</li>\n</ul>\n<h4>3. Everyday Natural & Engineering Examples</h4>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Practical Case</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Continuity Mechanism</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Observed Result</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Partially Covering a Garden Hose with Thumb</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Reduces exit cross-sectional area A.</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Water exits with much higher velocity, projecting the jet far across the lawn.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Deep Rivers Run Slow</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">A deep or wide riverbed has large cross-sectional area A.</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Flow velocity v is small (still, calm waters), whereas narrow river gorges have rapid raging currents.</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Tapering Stream of Tap Water</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">Water accelerates downward under gravity (v increases with depth).</td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\">By A ∝ 1/v, the cross-sectional area A of the water column narrows progressively as it falls.</td>\n  </tr>\n</table>",
      "pointsToRemember": [
        "The Equation of Continuity (A₁v₁ = A₂v₂) is based on the Law of Conservation of Mass.",
        "Flow velocity is inversely proportional to cross-sectional area (v ∝ 1/A).",
        "A falling stream of water from a tap tapers (narrows) because its speed increases under gravity."
      ],
      "keyNotes": [
        "Volume flow rate Q = A × v represents the volume of fluid passing through any cross section per second and remains strictly constant along an unbroken stream."
      ],
      "questions": [
        {
          "id": "q17_1",
          "question": "The Equation of Continuity (A₁ v₁ = A₂ v₂) for steady fluid flow is a direct expression of the conservation of:",
          "options": [
            "Energy",
            "Linear momentum",
            "Mass",
            "Angular momentum"
          ],
          "answer": "Mass",
          "explanation": "The Equation of Continuity represents mass conservation in fluid mechanics: what mass enters an enclosed pipe must exit if the fluid is incompressible."
        },
        {
          "id": "q17_2",
          "question": "Why does a stream of water flowing smoothly from a household water tap narrow down (taper) as it falls downward?",
          "options": [
            "Surface tension compresses the stream",
            "As water accelerates downward under gravity, velocity increases; by the equation of continuity (A ∝ 1/v), area must decrease",
            "Atmospheric pressure increases near the floor",
            "Water evaporates during the fall"
          ],
          "answer": "As water accelerates downward under gravity, velocity increases; by the equation of continuity (A ∝ 1/v), area must decrease",
          "explanation": "As the water falls, gravity accelerates it (v increases). Since volume discharge A × v = constant, the stream's cross-sectional area A must contract."
        },
        {
          "id": "q17_3",
          "question": "A liquid flows through a horizontal pipe whose diameter narrows from 10 cm to 5 cm. If the velocity in the wider section is 2 m/s, what is the velocity in the narrow section?",
          "options": [
            "4 m/s",
            "8 m/s",
            "1 m/s",
            "16 m/s"
          ],
          "answer": "8 m/s",
          "explanation": "From A₁ v₁ = A₂ v₂ ==> (d₁)² v₁ = (d₂)² v₂ ==> (10)² × 2 = (5)² × v₂ ==> 100 × 2 = 25 × v₂ ==> v₂ = 200 / 25 = 8 m/s."
        },
        {
          "id": "q17_4",
          "question": "Why does pressing your thumb over the nozzle of a garden hose make the water spray much farther?",
          "options": [
            "It increases water density",
            "Reducing the exit cross-sectional area increases the exit velocity according to the equation of continuity",
            "It increases atmospheric pressure",
            "It cools the water"
          ],
          "answer": "Reducing the exit cross-sectional area increases the exit velocity according to the equation of continuity",
          "explanation": "Restricting the outlet area forces the water to exit at higher velocity (v ∝ 1/A), providing greater kinetic energy and projectile range."
        },
        {
          "id": "q17_5",
          "question": "The proverb 'Still waters run deep' finds its physical justification in:",
          "options": [
            "Archimedes' Principle",
            "Equation of Continuity (large area A corresponds to small flow velocity v)",
            "Pascal's Law",
            "Stokes' Law"
          ],
          "answer": "Equation of Continuity (large area A corresponds to small flow velocity v)",
          "explanation": "Where a river is deep and wide, its cross-sectional area A is vast, so flow velocity v = Q / A is minimal, giving the appearance of still, calm water."
        },
        {
          "id": "q17_6",
          "question": "What are the SI units of volume discharge rate (Q = Av) in fluid dynamics?",
          "options": [
            "m²/s",
            "m³/s",
            "kg/s",
            "m/s"
          ],
          "answer": "m³/s",
          "explanation": "Q = Area × Velocity = [m²] × [m/s] = m³/s (cubic meters per second)."
        },
        {
          "id": "q17_7",
          "question": "An artery of cross-sectional area 1 cm² branches into 50 identical capillaries, each of area 0.1 cm². If blood speed in the artery is 10 cm/s, what is the blood speed in the capillaries?",
          "options": [
            "2 cm/s",
            "5 cm/s",
            "1 cm/s",
            "0.5 cm/s"
          ],
          "answer": "2 cm/s",
          "explanation": "A_artery × v_artery = n × (A_capillary × v_capillary) ==> 1 × 10 = 50 × (0.1 × v) ==> 10 = 5 v ==> v = 2 cm/s."
        },
        {
          "id": "q17_8",
          "question": "If the radius of a pipeline increases by a factor of 2, by what factor does the flow speed change for a constant flow rate?",
          "options": [
            "Doubles (2x)",
            "Halved (1/2)",
            "Decreases to one-fourth (1/4)",
            "Quadruples (4x)"
          ],
          "answer": "Decreases to one-fourth (1/4)",
          "explanation": "Since A = π r², doubling the radius quadruples the area (4A). By continuity v ∝ 1/A, so velocity drops to one-fourth (1/4)."
        },
        {
          "id": "q17_9",
          "question": "The equation of continuity is valid for:",
          "options": [
            "Only compressible turbulent gases",
            "Steady streamline flow of incompressible fluids",
            "Supersonic shock waves",
            "Fluids at absolute rest only"
          ],
          "answer": "Steady streamline flow of incompressible fluids",
          "explanation": "A₁v₁ = A₂v₂ assumes constant density (incompressible fluid) and steady, non-divergent streamline flow."
        },
        {
          "id": "q17_10",
          "question": "In a converging pipe where diameter continuously narrows, the streamlines of fluid flow:",
          "options": [
            "Diverge further apart",
            "Crowd closer together",
            "Intersect each other",
            "Form closed circular loops"
          ],
          "answer": "Crowd closer together",
          "explanation": "Crowding of streamlines visually indicates a region of high velocity, while widely spaced streamlines indicate slow fluid motion."
        }
      ]
    },
    {
      "id": "mod_18",
      "number": 18,
      "title": "Bernoulli's Principle & Conservation of Energy in Fluids",
      "description": "Daniel Bernoulli's theorem (1738), energy per unit volume, pressure head, velocity head, datum head, and Venturimeter.",
      "theoryHtml": "<h4>1. Bernoulli's Principle (Daniel Bernoulli, 1738)</h4>\n<p>Bernoulli's Principle is a statement of the <strong>Law of Conservation of Energy</strong> applied to steady, streamline flow of an ideal fluid (incompressible and non-viscous).</p>\n<div class=\"notes-callout\"><strong>Bernoulli's Theorem:</strong> For the steady, streamline flow of an ideal, incompressible, and non-viscous fluid, the total mechanical energy per unit volume (sum of Pressure Energy, Kinetic Energy, and Gravitational Potential Energy) remains strictly constant along any streamline:\n<br><strong>P + ½ ρ v² + ρ g h = constant</strong></div>\n<h4>2. The Three Forms of Energy in Fluid Flow</h4>\n<table style=\"width:100%; border-collapse:collapse; margin:12px 0;\">\n  <tr style=\"background:#f1f5f9; text-align:left;\">\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Energy Form</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Energy Per Unit Volume</th>\n    <th style=\"padding:8px; border:1px solid #cbd5e1;\">Head Form (Energy per unit weight, meters)</th>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Pressure Energy</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>P</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>P / (ρ g)</strong> (Pressure Head)</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Kinetic Energy</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>½ ρ v²</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>v² / (2 g)</strong> (Velocity Head)</td>\n  </tr>\n  <tr>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>Potential Energy</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>ρ g h</strong></td>\n    <td style=\"padding:8px; border:1px solid #cbd5e1;\"><strong>h</strong> (Gravitational / Datum Head)</td>\n  </tr>\n</table>\n<p>Dividing by ρg yields the standard hydraulic head equation:</p>\n<p><strong>P / (ρ g) + v² / (2 g) + h = constant</strong></p>\n<h4>3. Horizontal Flow Simplification (h = constant)</h4>\n<p>For horizontal flow where potential energy is constant:</p>\n<div class=\"notes-callout\"><strong>P + ½ ρ v² = constant</strong>\n<br>• Where fluid velocity is <strong>high</strong>, static pressure is <strong>low</strong>.\n<br>• Where fluid velocity is <strong>low</strong>, static pressure is <strong>high</strong>.</div>\n<h4>4. The Venturimeter</h4>\n<p>A <strong>Venturimeter</strong> is a device based on Bernoulli's theorem used to measure the rate of flow (discharge) of a liquid through a pipe. It consists of a converging cone, a narrow <strong>throat</strong>, and a diverging cone:</p>\n<ul>\n  <li>At the throat, cross-sectional area A is smallest, so velocity v is highest.</li>\n  <li>By Bernoulli's principle, fluid pressure at the throat is <strong>lowest</strong>.</li>\n  <li>The measured pressure difference (ΔP = h ρ_m g) between the wide inlet and narrow throat determines the flow rate Q.</li>\n</ul>",
      "pointsToRemember": [
        "Bernoulli's Theorem is based on the Law of Conservation of Energy applied to flowing fluids.",
        "Total energy per unit volume: P + ½ρv² + ρgh = constant.",
        "For horizontal flow: Higher velocity corresponds to lower static fluid pressure (and vice versa).",
        "A Venturimeter measures the rate of flow of a liquid using Bernoulli's principle."
      ],
      "keyNotes": [
        "Bernoulli's equation applies strictly to non-viscous (frictionless), incompressible, and irrotational streamline flow."
      ],
      "questions": [
        {
          "id": "q18_1",
          "question": "Bernoulli's theorem is a direct consequence of which fundamental conservation law of physics?",
          "options": [
            "Conservation of Linear Momentum",
            "Conservation of Energy",
            "Conservation of Mass",
            "Conservation of Angular Momentum"
          ],
          "answer": "Conservation of Energy",
          "explanation": "Bernoulli's equation equates the work done by pressure forces and gravity to the change in kinetic energy, embodying the Law of Conservation of Energy."
        },
        {
          "id": "q18_2",
          "question": "In a horizontal pipeline carrying water, at a constricted narrow section where water velocity is high, the static pressure:",
          "options": [
            "Increases significantly",
            "Decreases",
            "Remains exactly the same",
            "Becomes zero"
          ],
          "answer": "Decreases",
          "explanation": "From P + ½ρv² = constant for horizontal flow, when velocity v increases, static pressure P must decrease to maintain a constant sum."
        },
        {
          "id": "q18_3",
          "question": "Which measuring instrument operates on Bernoulli's theorem to determine the rate of liquid flow through a pipe?",
          "options": [
            "Hydrometer",
            "Venturimeter",
            "Lactometer",
            "Barometer"
          ],
          "answer": "Venturimeter",
          "explanation": "A Venturimeter uses the pressure drop at a constriction (throat) to measure the discharge rate of a fluid via Bernoulli's principle."
        },
        {
          "id": "q18_4",
          "question": "What are the dimensions of the quantity (v² / 2g) in Bernoulli's head equation?",
          "options": [
            "[M⁰ L¹ T⁰] (Length in meters)",
            "[M⁰ L² T⁻²]",
            "[M¹ L⁻¹ T⁻²]",
            "[M⁰ L⁰ T⁰]"
          ],
          "answer": "[M⁰ L¹ T⁰] (Length in meters)",
          "explanation": "v² / 2g is the velocity head: (m/s)² / (m/s²) = (m²/s²) / (m/s²) = meters [L], having dimensions of length."
        },
        {
          "id": "q18_5",
          "question": "Which of the following is NOT an assumption of Bernoulli's theorem?",
          "options": [
            "Fluid must be incompressible (constant density)",
            "Fluid flow must be steady and streamline",
            "Fluid must be non-viscous (zero internal friction)",
            "Fluid must be highly compressible and turbulent"
          ],
          "answer": "Fluid must be highly compressible and turbulent",
          "explanation": "Bernoulli's theorem strictly assumes an ideal, incompressible, non-viscous fluid flowing in steady streamlines without turbulence."
        },
        {
          "id": "q18_6",
          "question": "In a horizontal pipe, water flows with speed 2 m/s where pressure is 2.5 × 10⁵ Pa. If the pipe narrows such that speed becomes 4 m/s, what is the new pressure? (Density = 1000 kg/m³)",
          "options": [
            "2.44 × 10⁵ Pa",
            "2.56 × 10⁵ Pa",
            "2.0 × 10⁵ Pa",
            "1.5 × 10⁵ Pa"
          ],
          "answer": "2.44 × 10⁵ Pa",
          "explanation": "P₂ = P₁ + ½ρ(v₁² - v₂²) = 250,000 + ½(1000)(4 - 16) = 250,000 - 6,000 = 244,000 Pa = 2.44 × 10⁵ Pa."
        },
        {
          "id": "q18_7",
          "question": "What is represented by the term P / (ρg) in hydraulics?",
          "options": [
            "Velocity head",
            "Pressure head",
            "Datum head",
            "Total mechanical power"
          ],
          "answer": "Pressure head",
          "explanation": "P / (ρg) represents the Pressure Head (the height of a fluid column that produces static pressure P)."
        },
        {
          "id": "q18_8",
          "question": "Why does an ideal fluid not lose any mechanical energy as it flows through a smooth pipe?",
          "options": [
            "Because gravitational potential energy is zero",
            "Because it has zero viscosity (η = 0), so no mechanical energy is dissipated as frictional heat",
            "Because it has zero density",
            "Because velocity is supersonic"
          ],
          "answer": "Because it has zero viscosity (η = 0), so no mechanical energy is dissipated as frictional heat",
          "explanation": "An ideal fluid is inviscid (zero viscosity); with no internal viscous shear, mechanical energy is conserved without heat generation."
        },
        {
          "id": "q18_9",
          "question": "When two high-speed trains pass each other closely in opposite directions on parallel tracks, they tend to be drawn laterally towards each other. Why?",
          "options": [
            "Gravitational attraction between train masses",
            "Fast-moving air between the trains creates a low-pressure zone; higher pressure outside pushes them together (Bernoulli's principle)",
            "Magnetic attraction of railway steel",
            "Electrostatic induction"
          ],
          "answer": "Fast-moving air between the trains creates a low-pressure zone; higher pressure outside pushes them together (Bernoulli's principle)",
          "explanation": "Air compressed in the narrow channel between the speeding trains moves at high velocity, lowering static pressure. Higher ambient pressure outside pushes the carriages together."
        },
        {
          "id": "q18_10",
          "question": "The total energy possessed by a unit volume of a flowing ideal liquid is given by:",
          "options": [
            "P + ½ρv² + ρgh",
            "P + ρv² + mgh",
            "P / ρ + v² + gh",
            "½mv² + mgh"
          ],
          "answer": "P + ½ρv² + ρgh",
          "explanation": "Bernoulli's equation states that total mechanical energy per unit volume is the sum of Pressure energy (P), Kinetic energy (½ρv²), and Potential energy (ρgh)."
        }
      ]
    },
    {
      "id": "mod_19",
      "number": 19,
      "title": "Real-Life Applications of Bernoulli: Lift & Atomizers",
      "description": "Aerodynamic lift of airfoil wings, Bunsen burner, perfume atomizer spray, paint gun, and carburetor.",
      "theoryHtml": "<h4>1. Aerodynamic Lift of an Airplane Wing (Airfoil)</h4>\n<p>An aircraft wing (<strong>airfoil</strong>) is specially contoured with a <strong>curved upper surface</strong> and a relatively <strong>flat lower surface</strong>:</p>\n<ol>\n  <li>As the aircraft moves forward, air separates at the leading edge. The air flowing over the curved top surface has a longer path and must travel with <strong>higher velocity (v_top > v_bottom)</strong>.</li>\n  <li>Streamlines are crowded together above the wing.</li>\n  <li>By Bernoulli's principle, high velocity creates a <strong>region of low pressure on the top surface</strong> (P_top < P_bottom).</li>\n  <li>The higher pressure beneath the wing exerts a net upward force called <strong>Dynamic Aerodynamic Lift</strong>:\n    <br><strong>Lift Force = (P_bottom - P_top) × Wing Area</strong>\n  </li>\n  <li>When this dynamic lift equals or exceeds the gravitational weight of the airplane, the aircraft ascends smoothly into flight.</li>\n</ol>\n<h4>2. Atomizer / Scent Spray / Paint Spray Gun</h4>\n<p>An <strong>atomizer</strong> consists of a vertical suction tube dipped into liquid perfume or paint, with a rubber bulb at the top:</p>\n<ul>\n  <li>Squeezing the rubber bulb forces a high-speed jet of air horizontally across the narrow top opening of the tube.</li>\n  <li>By Bernoulli's principle, the rapid air stream creates a <strong>localized low-pressure zone</strong> at the tube mouth.</li>\n  <li>Atmospheric pressure acting on the liquid in the bottle forces the perfume up the vertical tube.</li>\n  <li>At the top, the high-speed air blast shears the rising liquid stream into a fine, uniform mist of tiny droplets.</li>\n</ul>\n<h4>3. Bunsen Burner & Carburetor</h4>\n<ul>\n  <li><strong>Bunsen Burner:</strong> Gas issuing at high speed from a narrow nozzle creates a low-pressure zone inside the barrel, drawing in ambient air through side air holes for complete, non-sooty blue combustion.</li>\n  <li><strong>Automobile Carburetor:</strong> Air drawn into the engine at high speed through a Venturi constriction creates low pressure that vaporizes petrol from a fuel jet, forming an ideal combustible air-fuel mixture.</li>\n</ul>",
      "pointsToRemember": [
        "Aerodynamic lift on an airfoil wing arises because air moves faster over the curved upper surface, creating a low-pressure zone above the wing.",
        "Atomizers and paint sprayers use high-velocity air jets to generate low pressure, drawing liquid up and atomizing it into mist.",
        "Carburetors and Bunsen burners utilize Bernoulli's effect to entrain air and fuel into gas streams."
      ],
      "keyNotes": [
        "Aerodynamic lift is not caused by air pushing up from below, but primarily by the low-pressure suction zone created above the curved upper wing surface (Bernoulli's lift)."
      ],
      "questions": [
        {
          "id": "q19_1",
          "question": "The dynamic lift that enables an airplane to take off and stay airborne is physically explained by:",
          "options": [
            "Archimedes' Principle of buoyancy",
            "Bernoulli's Principle",
            "Pascal's Law",
            "Coulomb's Law"
          ],
          "answer": "Bernoulli's Principle",
          "explanation": "Air moves faster over the curved top of the airfoil wing, generating lower pressure above than below. The pressure difference produces upward aerodynamic lift."
        },
        {
          "id": "q19_2",
          "question": "In an aircraft wing (airfoil), how does air velocity and pressure compare between the upper and lower surfaces?",
          "options": [
            "Velocity is higher and pressure is lower on the upper surface",
            "Velocity is lower and pressure is higher on the upper surface",
            "Velocity and pressure are identical on both surfaces",
            "Velocity is higher and pressure is higher on the upper surface"
          ],
          "answer": "Velocity is higher and pressure is lower on the upper surface",
          "explanation": "The cambered upper surface accelerates airflow (v_top > v_bottom). By Bernoulli's equation, this lowers static pressure above (P_top < P_bottom), creating lift."
        },
        {
          "id": "q19_3",
          "question": "On which physical principle does a perfume scent atomizer or paint spray gun operate?",
          "options": [
            "Stokes' Law",
            "Bernoulli's Principle",
            "Pascal's Law",
            "Hooke's Law"
          ],
          "answer": "Bernoulli's Principle",
          "explanation": "Squeezing the bulb sends high-speed air across the tube top, lowering pressure above the liquid column and drawing liquid up into the air jet to form a mist."
        },
        {
          "id": "q19_4",
          "question": "In an automobile engine carburetor, petrol is atomized into the incoming air stream due to low pressure created at a constriction based on:",
          "options": [
            "Bernoulli's Theorem",
            "Archimedes' Principle",
            "Coulomb's Law",
            "Newton's Third Law"
          ],
          "answer": "Bernoulli's Theorem",
          "explanation": "A Venturi tube in the carburetor constricts incoming airflow, increasing air speed and lowering pressure to draw fuel from the jet nozzle."
        },
        {
          "id": "q19_5",
          "question": "Why does a person standing near the edge of a railway platform feel pulled toward a fast-moving express train rushing past?",
          "options": [
            "Gravitational attraction of the train",
            "The speeding train creates a high-speed airflow and low-pressure zone between the person and the train; higher atmospheric pressure behind pushes them toward the train",
            "Centrifugal force from train wheels",
            "Electrostatic charge on train coaches"
          ],
          "answer": "The speeding train creates a high-speed airflow and low-pressure zone between the person and the train; higher atmospheric pressure behind pushes them toward the train",
          "explanation": "High air velocity in the gap between the person and the passing train creates low pressure. Higher static atmospheric pressure behind the person pushes them inward."
        },
        {
          "id": "q19_6",
          "question": "Why does a Bunsen burner produce a clean blue flame when its side air-holes are opened?",
          "options": [
            "Gas velocity drops to zero",
            "High-speed gas jet exiting the nozzle creates low pressure that draws in ambient atmospheric oxygen for complete combustion (Bernoulli's principle)",
            "Air cools the burner",
            "Nitrogen in air burns blue"
          ],
          "answer": "High-speed gas jet exiting the nozzle creates low pressure that draws in ambient atmospheric oxygen for complete combustion (Bernoulli's principle)",
          "explanation": "The gas jet's high velocity creates a low-pressure area inside the barrel, aspirating ambient air through the holes for thorough, non-sooty combustion."
        },
        {
          "id": "q19_7",
          "question": "If an airplane flies upside down in inverted flight, how must the pilot adjust the wing angle of attack to maintain altitude?",
          "options": [
            "Tilt the nose down",
            "Pitch the nose up significantly to create positive geometric angle of attack against incoming air",
            "Shut down the engines",
            "Inverted flight is aerodynamically impossible"
          ],
          "answer": "Pitch the nose up significantly to create positive geometric angle of attack against incoming air",
          "explanation": "When inverted, the camber pushes downward. To compensate, the pilot increases the angle of attack, deflecting air downward to generate upward reaction lift."
        },
        {
          "id": "q19_8",
          "question": "What happens when you blow air forcefully between two ping-pong balls suspended side by side on light strings?",
          "options": [
            "The balls fly far apart",
            "The balls are drawn together and collide",
            "The balls remain completely stationary",
            "The balls spin without moving laterally"
          ],
          "answer": "The balls are drawn together and collide",
          "explanation": "Blowing air between the balls creates a high-velocity, low-pressure air corridor. Higher ambient pressure on the outer sides pushes the balls inward into a collision."
        },
        {
          "id": "q19_9",
          "question": "Why does a shower curtain blow inward toward your legs when you turn on a high-pressure hot shower?",
          "options": [
            "Water spray attracts the plastic electrostatically",
            "Fast-moving water droplets and air entrainment lower pressure inside the shower stall; higher room pressure outside pushes the curtain in",
            "Water vapor makes the curtain heavier",
            "Thermal convection pushes the curtain"
          ],
          "answer": "Fast-moving water droplets and air entrainment lower pressure inside the shower stall; higher room pressure outside pushes the curtain in",
          "explanation": "The fast stream of water droplets accelerates air inside the stall, lowering pressure by Bernoulli's principle so external room air pushes the curtain inward."
        },
        {
          "id": "q19_10",
          "question": "Which component of an aircraft controls the dynamic aerodynamic lift during takeoff and landing?",
          "options": [
            "Rudder",
            "Flaps and slats on the wings",
            "Landing gear",
            "Propeller spinner"
          ],
          "answer": "Flaps and slats on the wings",
          "explanation": "Extending wing flaps and slats increases wing surface area and camber, amplifying low pressure on top to produce higher lift at low takeoff and landing speeds."
        }
      ]
    },
    {
      "id": "mod_20",
      "number": 20,
      "title": "Magnus Effect, Storm Roofs & Torricelli's Law",
      "description": "Magnus effect in spinning sports balls, blowing off of tin roofs during cyclones, and Torricelli's law of efflux (v = √2gh).",
      "theoryHtml": "<h4>1. The Magnus Effect (Heinrich Gustav Magnus, 1852)</h4>\n<p>When a spinning ball (cricket ball, tennis ball, baseball, or soccer ball) moves through the air, it experiences a lateral sideways force that curves its trajectory:</p>\n<ol>\n  <li><strong>Airflow Dynamics:</strong>\n    <br>• On one side, the surface of the spinning ball rotates in the <strong>same direction</strong> as the incoming airflow, dragging air along and resulting in <strong>higher velocity (v_high)</strong>.\n    <br>• On the opposite side, the surface rotates in the <strong>opposite direction</strong> to the airflow, opposing the air and resulting in <strong>lower velocity (v_low)</strong>.\n  </li>\n  <li><strong>Pressure Difference (Bernoulli's Effect):</strong>\n    <br>• High velocity side ==> <strong>Low pressure</strong>.\n    <br>• Low velocity side ==> <strong>High pressure</strong>.\n  </li>\n  <li><strong>Resultant Lateral Force:</strong> A net force acts on the ball from the high-pressure side toward the low-pressure side, causing the ball to <strong>swerve/curve in mid-air</strong> (known as the <strong>Magnus Effect</strong>).\n    <br>• Utilized in cricket (spin/swing bowling), baseball (curveball), tennis (topspin/backspin), and football (curving free kicks like 'bend it like Beckham').\n  </li>\n</ol>\n<h4>2. Blowing Off of Tin Roofs During Storms / Cyclones</h4>\n<p>During severe gale storms and cyclones, lightweight corrugated tin or thatch roofs are frequently blown upward and carried away:</p>\n<ul>\n  <li>High-speed stormy winds blow violently across the <strong>top surface</strong> of the roof (v_top is very large).</li>\n  <li>By Bernoulli's principle, this rapid airflow creates a <strong>strong drop in pressure above the roof</strong> (P_top becomes very low).</li>\n  <li>Inside the closed house, air is nearly stagnant (v_inside ≈ 0), maintaining <strong>normal high atmospheric pressure</strong> (P_inside = P_atm).</li>\n  <li>The immense upward pressure difference (P_inside - P_top) exerts a huge upward thrust that rips the roof off from below, blowing it into the storm.</li>\n</ul>\n<h4>3. Torricelli's Law of Efflux (1643)</h4>\n<p>Consider a large open water tank with a small orifice (hole) pierced in its side wall at depth <strong>h</strong> below the free liquid surface:</p>\n<div class=\"notes-callout\"><strong>Torricelli's Law of Efflux:</strong> The velocity of efflux (v) with which a liquid spurts out from an orifice at depth h is equal to the velocity acquired by a freely falling body falling through the same vertical height h:\n<br><strong>v_efflux = √(2 × g × h)</strong></div>\n<ul>\n  <li><strong>Range of Liquid Jet:</strong> If the tank has total height H and the orifice is at depth h (height above ground = H - h), the horizontal range R of the spurting liquid jet on the ground is:\n    <br><strong>R = 2 √(h × (H - h))</strong>\n  </li>\n  <li><strong>Maximum Range Condition:</strong> The range R is maximum when the hole is drilled at the exact <strong>midpoint of the tank (h = H / 2)</strong>, where:\n    <br><strong>R_max = H</strong> (equal to the total height of the tank).\n  </li>\n</ul>",
      "pointsToRemember": [
        "The Magnus Effect explains the curving trajectory of spinning balls in air due to asymmetrical air speeds and pressure differences.",
        "Roofs are blown off in cyclones because high wind speed above creates low pressure, and higher internal house pressure lifts the roof.",
        "Torricelli's Law of Efflux: Velocity of liquid issuing from an orifice at depth h is v = √(2gh).",
        "The horizontal range of an efflux jet is maximum when the hole is at the tank midpoint (h = H/2), where R_max = H."
      ],
      "keyNotes": [
        "Opening doors and windows during a fierce tornado or cyclone equalizes internal and external air pressure, preventing roofs from being lifted off by Bernoulli suction."
      ],
      "questions": [
        {
          "id": "q20_1",
          "question": "The curving trajectory of a spinning cricket ball or curving soccer ball in flight is explained by:",
          "options": [
            "Magnus Effect",
            "Pascal's Law",
            "Archimedes' Principle",
            "Kepler's Second Law"
          ],
          "answer": "Magnus Effect",
          "explanation": "Spinning drags air faster on one side than the other, creating a pressure difference (Bernoulli's principle) that deflects the ball sideways via the Magnus Effect."
        },
        {
          "id": "q20_2",
          "question": "Why are corrugated tin or thatch roofs blown off during severe windstorms and cyclones?",
          "options": [
            "Strong winds push down on the roof",
            "High wind speed across the roof creates low pressure above; higher stagnant atmospheric pressure inside the house lifts the roof upward",
            "Rainwater makes the roof too heavy",
            "Lightning vaporizes roof nails"
          ],
          "answer": "High wind speed across the roof creates low pressure above; higher stagnant atmospheric pressure inside the house lifts the roof upward",
          "explanation": "High velocity above lowers static pressure (P + ½ρv² = const). Normal atmospheric pressure inside pushes upward, ripping the roof off."
        },
        {
          "id": "q20_3",
          "question": "According to Torricelli's Law of Efflux, the velocity of liquid emerging from a small hole at depth h below the free surface of an open tank is:",
          "options": [
            "v = 2gh",
            "v = √(2gh)",
            "v = gh",
            "v = √(gh)"
          ],
          "answer": "v = √(2gh)",
          "explanation": "Applying Bernoulli's equation between the tank surface and the exit orifice yields Torricelli's law of efflux: v = √(2gh)."
        },
        {
          "id": "q20_4",
          "question": "At what depth h below the water surface should an orifice be drilled in a tank of total height H to obtain the MAXIMUM horizontal range on the ground?",
          "options": [
            "h = H / 4",
            "h = H / 2 (at the exact midpoint)",
            "h = 3H / 4",
            "At the very bottom (h = H)"
          ],
          "answer": "h = H / 2 (at the exact midpoint)",
          "explanation": "Horizontal range R = 2 √[h(H - h)]. Maximizing the product h(H - h) occurs at the midpoint h = H / 2, where maximum range R_max = H."
        },
        {
          "id": "q20_5",
          "question": "What is the maximum horizontal range of a liquid jet issuing from an orifice in an open water tank of height H standing on a flat floor?",
          "options": [
            "H / 2",
            "H",
            "2H",
            "4H"
          ],
          "answer": "H",
          "explanation": "When the orifice is at h = H/2, maximum horizontal range R_max = 2 √[(H/2)(H/2)] = 2 × (H/2) = H."
        },
        {
          "id": "q20_6",
          "question": "Why is it advised to leave windows and doors slightly open during severe cyclones or tornadoes?",
          "options": [
            "To allow wind to blow through without friction",
            "To equalize air pressure between the inside and outside of the building, preventing the roof and windows from blowing out",
            "To cool the building",
            "To allow rain water to drain"
          ],
          "answer": "To equalize air pressure between the inside and outside of the building, preventing the roof and windows from blowing out",
          "explanation": "Open windows allow indoor air pressure to drop to match the low outdoor vortex pressure, eliminating the violent upward pressure differential on the roof."
        },
        {
          "id": "q20_7",
          "question": "If the depth of an orifice below the water surface in a tank is quadrupled (4h), the velocity of efflux will:",
          "options": [
            "Double (2x)",
            "Quadruple (4x)",
            "Increase sixteenfold (16x)",
            "Remain unchanged"
          ],
          "answer": "Double (2x)",
          "explanation": "v = √(2gh). Since v ∝ √h, quadrupling depth (4h) doubles the exit velocity (√4 = 2)."
        },
        {
          "id": "q20_8",
          "question": "In tennis, applying topspin to the ball causes it to:",
          "options": [
            "Float higher and fly out of the court",
            "Dip downward sharply and bounce higher",
            "Stop in mid-air",
            "Accelerate horizontally without gravity"
          ],
          "answer": "Dip downward sharply and bounce higher",
          "explanation": "Topspin creates high air velocity and lower pressure beneath the ball, generating a downward Magnus force that causes the ball to dip quickly into the court."
        },
        {
          "id": "q20_9",
          "question": "A liquid is filled to height H in a tank. Two small holes are drilled at depths h and (H - h). The horizontal ranges of the two emerging liquid jets on the ground are:",
          "options": [
            "Equal to each other",
            "Greater for depth h",
            "Greater for depth (H - h)",
            "Zero for depth h"
          ],
          "answer": "Equal to each other",
          "explanation": "Range R = 2 √[depth × height above ground]. For hole 1: 2 √[h(H - h)]. For hole 2: 2 √[(H - h)h]. Both expressions are identical, yielding equal ranges."
        },
        {
          "id": "q20_10",
          "question": "What happens to the velocity of efflux from an orifice in an open tank if the liquid is replaced by one with three times the density (3ρ)?",
          "options": [
            "Velocity increases by √3",
            "Velocity decreases by 1/√3",
            "Velocity remains strictly unchanged",
            "Velocity triples"
          ],
          "answer": "Velocity remains strictly unchanged",
          "explanation": "Torricelli's formula v = √(2gh) contains no density term. The efflux velocity depends only on depth h and gravity g, independent of fluid density."
        }
      ]
    }
  ]
};

if (typeof window !== 'undefined') {
    window.COURSE_CHAPTER_DATA = COURSE_CHAPTER_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COURSE_CHAPTER_DATA;
}
