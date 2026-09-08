# -*- coding: utf-8 -*-
"""
CH9 Part 2: Modules 11 to 20
Light – Reflection and Refraction (Class 10 Science)
"""
import json

with open('scratch/ch9_bank_questions.json', 'r', encoding='utf-8') as f:
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

# ==========================================
# Module 11: Refraction of Light & Cause
# ==========================================
m11 = {
  "id": "m11", "moduleNumber": 11,
  "title": "Refraction of Light: Causes, Change of Speed & Optical Density",
  "tagline": "Bending of light across optical media, rarer vs denser media, and speed variations.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. What is Refraction of Light?</h4>
    <p>When a beam of light travelling through one transparent medium enters obliquely into another transparent medium of differing optical density, it deviates from its original straight path at the interface between the two media. This phenomenon is called the <strong>refraction of light</strong>.</p>

    <h4>2. The Fundamental Cause of Refraction</h4>
    <p>Light refracts because its <strong>speed changes</strong> as it crosses from one medium into another. While light travels at $c \approx 3 \times 10^8\text{ m/s}$ in vacuum (and air), it slows down to approximately $2.25 \times 10^8\text{ m/s}$ in water and $2.0 \times 10^8\text{ m/s}$ in crown glass. The wavefronts change speed at different times across the oblique boundary, bending the ray.</p>

    <h4>3. Optically Rarer vs Optically Denser Media</h4>
    <ul>
      <li><strong>Rarer to Denser (e.g., Air to Glass):</strong> The speed of light decreases. The ray bends <strong>towards the normal</strong> ($\angle i > \angle r$).</li>
      <li><strong>Denser to Rarer (e.g., Glass to Air):</strong> The speed of light increases. The ray bends <strong>away from the normal</strong> ($\angle i < \angle r$).</li>
    </ul>

    <h4>4. Optical Density vs Mass Density</h4>
    <p>Optical density is the ability of a medium to refract light and is inversely proportional to the speed of light in that medium. It must <strong>not be confused with mass density</strong> (mass per unit volume). For instance, kerosene has a lower mass density than water (kerosene floats on water), yet kerosene is <em>optically denser</em> than water because the speed of light is lower in kerosene than in water.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Refraction is the bending of light when passing obliquely between media of differing optical densities.",
    "The fundamental cause of refraction is the difference in the speed of light in different media.",
    "Ray bending rule: Rarer $\\rightarrow$ Denser bends TOWARDS the normal; Denser $\\rightarrow$ Rarer bends AWAY from the normal."
  ],
  "keyNotes": [
    "Optical density is not the same as mass density: kerosene floats on water (lower mass density) but refracts light more strongly (higher optical density)."
  ],
  "questions": [
    get_bank_q(19, "m11_q01"),
    get_bank_q(20, "m11_q02"),
    get_bank_q(90, "m11_q03"),
    {
      "id": "m11_q04",
      "question": "When a ray of light enters obliquely from air into water, how does it bend relative to the normal?",
      "options": [
        "It bends away from the normal",
        "It bends towards the normal because water is optically denser than air",
        "It does not bend at all",
        "It reflects straight back into air"
      ],
      "answer": "It bends towards the normal because water is optically denser than air",
      "explanation": "Light travels slower in water than in air; passing from an optically rarer to a denser medium causes the ray to bend towards the normal (∠r < ∠i)."
    },
    {
      "id": "m11_q05",
      "question": "What happens to a ray of light that strikes the interface of two transparent media at normal incidence (perpendicular to the surface)?",
      "options": [
        "It bends by 90°",
        "It passes straight through into the second medium without any deviation",
        "It is totally absorbed",
        "It splits into seven colours"
      ],
      "answer": "It passes straight through into the second medium without any deviation",
      "explanation": "At normal incidence (∠i = 0°), all parts of the incident wavefront slow down simultaneously, so light travels straight without bending (∠r = 0°)."
    },
    {
      "id": "m11_q06",
      "question": "Which of the following optical media has the highest optical density (lowest speed of light)?",
      "options": ["Air", "Water", "Crown glass", "Diamond"],
      "answer": "Diamond",
      "explanation": "Diamond has an exceptionally high refractive index (n ≈ 2.42), meaning light slows down to ~1.24 × 10^8 m/s, giving it the highest optical density."
    },
    {
      "id": "m11_q07",
      "question": "Kerosene floats on top of water, yet it is described as optically denser than water. What does this prove?",
      "options": [
        "Kerosene is colder than water",
        "Optical density is completely independent of mass density",
        "Light travels faster in kerosene than in water",
        "Water cannot refract light"
      ],
      "answer": "Optical density is completely independent of mass density",
      "explanation": "Mass density is mass/volume, whereas optical density measures light speed retardation; kerosene has lower mass density but slows light more than water."
    },
    {
      "id": "m11_q08",
      "question": "When light passes from glass into air, what happens to its speed and direction of travel?",
      "options": [
        "Speed decreases and ray bends towards normal",
        "Speed increases and ray bends away from the normal",
        "Speed remains constant and ray stops",
        "Speed increases but ray bends towards normal"
      ],
      "answer": "Speed increases and ray bends away from the normal",
      "explanation": "Moving from denser (glass) to rarer (air), light speeds up, causing the ray to bend away from the normal (∠r > ∠i)."
    },
    {
      "id": "m11_q09",
      "question": "Which physical characteristic of a light wave remains completely UNCHANGED when it undergoes refraction?",
      "options": ["Wavelength", "Speed", "Frequency", "Amplitude"],
      "answer": "Frequency",
      "explanation": "Frequency is determined solely by the vibrating light source and remains strictly invariant as light traverses different media (v = fλ)."
    },
    {
      "id": "m11_q10",
      "question": "Why does a straight pencil partially immersed in water appear bent and broken at the water-air interface?",
      "options": [
        "Water chemically dissolves the wooden pencil",
        "Light rays originating from the immersed portion refract away from the normal as they emerge into air",
        "The pencil physically bends due to water pressure",
        "Total internal reflection inside the wood"
      ],
      "answer": "Light rays originating from the immersed portion refract away from the normal as they emerge into air",
      "explanation": "Light rays emerging from water into air bend away from the normal, making the submerged portion appear displaced upwards to an observer."
    }
  ]
}
modules_11_to_20.append(m11)

# ==========================================
# Module 12: Refraction through a Glass Slab
# ==========================================
m12 = {
  "id": "m12", "moduleNumber": 12,
  "title": "Refraction through a Rectangular Glass Slab & Lateral Displacement",
  "tagline": "Two refracting surfaces, angle of emergence e = angle of incidence i, and lateral shift.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Double Refraction in a Rectangular Glass Slab</h4>
    <p>When a ray of light passes through a parallel-sided rectangular glass slab, it undergoes refraction at two parallel interfaces:</p>
    <ol>
      <li><strong>First Surface (Air $\rightarrow$ Glass):</strong> Ray enters from an optically rarer medium (air) to an optically denser medium (glass). It bends <strong>towards the normal</strong> ($\angle i > \angle r_1$).</li>
      <li><strong>Second Surface (Glass $\rightarrow$ Air):</strong> The refracted ray travels through glass and reaches the opposite parallel face. Here, it exits from denser glass into rarer air, bending <strong>away from the normal</strong> by an equal amount ($\angle r_2 < \angle e$).</li>
    </ol>

    <h4>2. Parallelism of Incident and Emergent Rays ($\angle i = \angle e$)</h4>
    <p>Because the two refracting surfaces are parallel, the extent of bending towards the normal at the first surface is exactly equal and opposite to the extent of bending away from the normal at the second surface. Consequently:</p>
    $$\text{Angle of Incidence } (\angle i) = \text{Angle of Emergence } (\angle e)$$
    <p>The <strong>emergent ray is strictly parallel</strong> to the original path of the incident ray.</p>

    <h4>3. Lateral Displacement ($d$)</h4>
    <p>Although the emergent ray does not change its direction, it is physically shifted sideways relative to the incident ray path. This perpendicular separation between the original incident path and the emergent ray is called <strong>lateral displacement</strong> (or lateral shift). Lateral displacement increases with:</p>
    <ul>
      <li>Increasing thickness ($t$) of the glass slab.</li>
      <li>Increasing angle of incidence ($\angle i$).</li>
      <li>Increasing refractive index ($n$) of the glass.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "In a parallel rectangular glass slab, the emergent ray is always parallel to the incident ray ($\\angle i = \\angle e$).",
    "Lateral displacement is the perpendicular sideways distance between the incident and emergent ray paths.",
    "Lateral displacement increases with slab thickness, higher angle of incidence, and higher refractive index."
  ],
  "keyNotes": [
    "The emergent ray does not suffer any net angular deviation (angular deviation $\\delta = 0^\\circ$); it suffers only a parallel lateral displacement."
  ],
  "questions": [
    get_bank_q(50, "m12_q01"),
    get_bank_q(43, "m12_q02"),
    get_bank_q(44, "m12_q03"),
    get_bank_q(45, "m12_q04"),
    {
      "id": "m12_q05",
      "question": "What is the mathematical relationship between the angle of incidence (i) and the angle of emergence (e) for a parallel-faced glass slab?",
      "options": ["∠i > ∠e", "∠i < ∠e", "∠i = ∠e", "∠i + ∠e = 90°"],
      "answer": "∠i = ∠e",
      "explanation": "Because the two refracting faces are strictly parallel, the second refraction undoes the angular deviation of the first, so ∠i = ∠e."
    },
    {
      "id": "m12_q06",
      "question": "What is the perpendicular distance between the original incident ray direction and the emergent ray after passing through a glass slab called?",
      "options": ["Angular deviation", "Lateral displacement (lateral shift)", "Focal length", "Critical shift"],
      "answer": "Lateral displacement (lateral shift)",
      "explanation": "Lateral displacement is the perpendicular sideways shift between the incident ray path and the parallel emergent ray."
    },
    {
      "id": "m12_q07",
      "question": "How does the magnitude of lateral displacement change if the thickness of the glass slab is doubled?",
      "options": ["It becomes zero", "It increases proportionally", "It is halved", "It remains completely unchanged"],
      "answer": "It increases proportionally",
      "explanation": "Lateral displacement is directly proportional to the thickness of the refracting slab (d ∝ t)."
    },
    {
      "id": "m12_q08",
      "question": "What is the net angular deviation produced by a parallel-sided rectangular glass slab on an incident ray of light?",
      "options": ["0°", "30°", "45°", "90°"],
      "answer": "0°",
      "explanation": "Since the emergent ray emerges parallel to the incident ray, the angular deviation is zero (δ = 0°)."
    },
    {
      "id": "m12_q09",
      "question": "If a printed page is viewed through a thick glass slab, why do the letters appear raised closer to the surface?",
      "options": [
        "Glass magnifies ink letters",
        "Refraction of light emerging from the glass into air makes the apparent depth less than the real depth",
        "Glass has reflective silver coating",
        "Atmospheric pressure pushes the ink upwards"
      ],
      "answer": "Refraction of light emerging from the glass into air makes the apparent depth less than the real depth",
      "explanation": "Apparent depth = Real depth / n. Because n > 1 for glass, apparent depth is smaller, making letters appear raised."
    },
    {
      "id": "m12_q10",
      "question": "In an experiment tracing light through a rectangular glass slab, if ∠i = 45°, what is the expected angle of emergence ∠e?",
      "options": ["30°", "45°", "60°", "0°"],
      "answer": "45°",
      "explanation": "Since ∠i = ∠e in a parallel slab, when ∠i = 45°, ∠e must also equal 45°."
    }
  ]
}
modules_11_to_20.append(m12)

# ==========================================
# Module 13: Laws of Refraction & Snell's Law
# ==========================================
m13 = {
  "id": "m13", "moduleNumber": 13,
  "title": "The Laws of Refraction & Snell's Law of Refraction",
  "tagline": "Coplanar rays, the constant ratio sin i / sin r, and physical meaning of the constant.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. The First Law of Refraction</h4>
    <p>The incident ray, the refracted ray, and the normal to the interface of two transparent media at the point of incidence, all lie in the <strong>same geometric plane</strong>.</p>

    <h4>2. The Second Law of Refraction (Snell's Law)</h4>
    <p>Formulated in 1621 by Dutch astronomer Willebrord Snell, the second law states:</p>
    <blockquote style="background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;">
      "The ratio of the sine of the angle of incidence to the sine of the angle of refraction is a constant for a given pair of media and for light of a given wavelength (colour)."
    </blockquote>
    <p>Mathematically expressed as:</p>
    $$\frac{\sin i}{\sin r} = \text{constant} = n_{21}$$
    <p>Where:</p>
    <ul>
      <li>$i$ is the angle of incidence in Medium 1.</li>
      <li>$r$ is the angle of refraction in Medium 2.</li>
      <li>$n_{21}$ is the <strong>relative refractive index</strong> of Medium 2 with respect to Medium 1.</li>
    </ul>

    <h4>3. Conditions for Snell's Law</h4>
    <p>Snell's law applies for all oblique angles of incidence ($0^\circ < i < 90^\circ$). For normal incidence ($i = 0^\circ$), $\sin 0^\circ = 0$, which implies $\sin r = 0 \implies r = 0^\circ$, meaning the ray passes undeviated.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "First Law: Incident ray, refracted ray, and normal at point of incidence all lie in the same plane.",
    "Snell's Law: $\\frac{\\sin i}{\\sin r} = \\text{constant} = n_{21}$ for a given pair of media.",
    "The constant represents the relative refractive index of the second medium with respect to the first."
  ],
  "keyNotes": [
    "Snell's law holds constant only for monochromatic light (light of a single specific colour/wavelength), as refractive index varies slightly with wavelength (dispersion)."
  ],
  "questions": [
    get_bank_q(46, "m13_q01"),
    get_bank_q(47, "m13_q02"),
    get_bank_q(48, "m13_q03"),
    {
      "id": "m13_q04",
      "question": "What is the mathematical formulation of Snell's Law of Refraction?",
      "options": [
        "sin i / sin r = constant",
        "sin i × sin r = constant",
        "tan i / tan r = constant",
        "cos i / cos r = constant"
      ],
      "answer": "sin i / sin r = constant",
      "explanation": "Snell's Law states that the ratio of sin i to sin r is a constant for a given pair of optical media."
    },
    {
      "id": "m13_q05",
      "question": "What physical quantity is represented by the constant in the equation sin i / sin r = constant?",
      "options": [
        "The speed of sound in air",
        "The relative refractive index of the second medium with respect to the first medium",
        "The focal length of the surface",
        "The mass density of the boundary"
      ],
      "answer": "The relative refractive index of the second medium with respect to the first medium",
      "explanation": "The constant represents n21, the refractive index of Medium 2 relative to Medium 1."
    },
    {
      "id": "m13_q06",
      "question": "If a ray of light enters from air into glass such that the angle of incidence is 60° and the angle of refraction is 30°, what is the refractive index of glass with respect to air?",
      "options": ["√3 ≈ 1.732", "1.50", "0.50", "2.00"],
      "answer": "√3 ≈ 1.732",
      "explanation": "n = sin i / sin r = sin 60° / sin 30° = (√3/2) / (1/2) = √3 ≈ 1.732."
    },
    {
      "id": "m13_q07",
      "question": "Does Snell's Law apply when a ray of light strikes an optical interface normally (angle of incidence i = 0°)?",
      "options": [
        "No, it breaks down completely",
        "Yes, with sin 0° = 0, sin r = 0, which correctly yields r = 0° (undeviated ray)",
        "Only for red light",
        "Only if both media are liquids"
      ],
      "answer": "Yes, with sin 0° = 0, sin r = 0, which correctly yields r = 0° (undeviated ray)",
      "explanation": "At i = 0°, sin i = 0, requiring sin r = 0, which gives r = 0°, meaning the ray travels straight without deviation."
    },
    {
      "id": "m13_q08",
      "question": "Why does Snell's Law specify 'for light of a given wavelength'?",
      "options": [
        "Because light changes frequency in glass",
        "Because different wavelengths (colours) of light travel at slightly different speeds in a material medium, giving different refractive indices",
        "Because white light cannot refract",
        "Because only green light obeys physics"
      ],
      "answer": "Because different wavelengths (colours) of light travel at slightly different speeds in a material medium, giving different refractive indices",
      "explanation": "Refractive index varies with wavelength (Cauchy's dispersion relation), causing violet light to bend more than red light."
    },
    {
      "id": "m13_q09",
      "question": "If the refractive index of a medium with respect to air is 2, what is the angle of refraction when the angle of incidence is 30°?",
      "options": ["sin^-1(0.25) ≈ 14.5°", "60°", "15°", "30°"],
      "answer": "sin^-1(0.25) ≈ 14.5°",
      "explanation": "n = sin i / sin r => 2 = sin 30° / sin r => sin r = (1/2) / 2 = 1/4 = 0.25 => r = sin^-1(0.25) ≈ 14.5°."
    },
    {
      "id": "m13_q10",
      "question": "Who independently formulated the sine law of refraction in 1621?",
      "options": ["Willebrord Snell", "Isaac Newton", "Galileo Galilei", "Christiaan Huygens"],
      "answer": "Willebrord Snell",
      "explanation": "Dutch astronomer and mathematician Willebrord Snell discovered the law in 1621, hence named Snell's Law."
    }
  ]
}
modules_11_to_20.append(m13)

# ==========================================
# Module 14: Refractive Index (Absolute & Relative)
# ==========================================
m14 = {
  "id": "m14", "moduleNumber": 14,
  "title": "Refractive Index: Absolute ($n = c/v$) & Relative Index ($n_{21} = v_1/v_2$)",
  "tagline": "Speed of light in media, unitless ratio, and optical density relationships.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Absolute Refractive Index ($n$)</h4>
    <p>When light travels from vacuum (or air) into a given material medium, the ratio of the speed of light in vacuum ($c$) to the speed of light in that medium ($v$) is defined as the <strong>absolute refractive index</strong> ($n$) of the medium:</p>
    $$n = \frac{c}{v} = \frac{\text{Speed of light in vacuum}}{\text{Speed of light in medium}}$$
    <p>Because it is a pure ratio of two identical physical quantities (speeds), the refractive index has <strong>no units and no dimensions</strong>. Since the speed of light in any material medium is always strictly less than $c$, $n \ge 1.0$ for all physical media:</p>
    <ul>
      <li>Air: $n \approx 1.0003$</li>
      <li>Water: $n = 1.33 = \frac{4}{3}$</li>
      <li>Crown Glass: $n = 1.52 \approx \frac{3}{2}$</li>
      <li>Diamond: $n = 2.42$</li>
    </ul>

    <h4>2. Relative Refractive Index ($n_{21}$)</h4>
    <p>When light travels from Medium 1 into Medium 2, the <strong>relative refractive index</strong> of Medium 2 with respect to Medium 1 ($n_{21}$) is given by:</p>
    $$n_{21} = \frac{v_1}{v_2} = \frac{c/v_2}{c/v_1} = \frac{n_2}{n_1}$$
    <p>Conversely, the refractive index of Medium 1 with respect to Medium 2 is the reciprocal:</p>
    $$n_{12} = \frac{1}{n_{21}}$$
  </div>
</div>
""",
  "pointsToRemember": [
    "Absolute refractive index: $n = c/v$; it is unitless and always $\ge 1$.",
    "Relative refractive index: $n_{21} = v_1 / v_2 = n_2 / n_1$.",
    "Reciprocity relation: $n_{12} = 1 / n_{21}$."
  ],
  "keyNotes": [
    "Higher refractive index means light travels slower in that medium; diamond ($n = 2.42$) slows light down to just $1.24 \times 10^8\\text{ m/s}$."
  ],
  "questions": [
    get_bank_q(49, "m14_q01"),
    get_bank_q(79, "m14_q02"),
    get_bank_q(80, "m14_q03"),
    {
      "id": "m14_q04",
      "question": "What is the formula for the absolute refractive index (n) of a medium?",
      "options": ["n = v / c", "n = c / v", "n = c × v", "n = v1 / v2"],
      "answer": "n = c / v",
      "explanation": "Absolute refractive index is the ratio of speed of light in vacuum (c) to speed in the medium (v): n = c/v."
    },
    {
      "id": "m14_q05",
      "question": "What is the speed of light in crown glass having an absolute refractive index of n = 1.50? (Given c = 3 × 10^8 m/s)",
      "options": ["2.0 × 10^8 m/s", "1.5 × 10^8 m/s", "4.5 × 10^8 m/s", "3.0 × 10^8 m/s"],
      "answer": "2.0 × 10^8 m/s",
      "explanation": "v = c / n = (3 × 10^8 m/s) / 1.50 = 2.0 × 10^8 m/s."
    },
    {
      "id": "m14_q06",
      "question": "What are the SI units of refractive index?",
      "options": ["m/s", "Dioptres (D)", "It has no units (dimensionless ratio)", "Radians"],
      "answer": "It has no units (dimensionless ratio)",
      "explanation": "Being a ratio of two velocities (m/s divided by m/s), refractive index is a pure dimensionless number."
    },
    {
      "id": "m14_q07",
      "question": "If the refractive index of water is 4/3 and glass is 3/2, what is the refractive index of glass with respect to water?",
      "options": ["9/8 = 1.125", "8/9 = 0.889", "2", "1/2"],
      "answer": "9/8 = 1.125",
      "explanation": "n_gw = n_glass / n_water = (3/2) / (4/3) = (3/2) × (3/4) = 9/8 = 1.125."
    },
    {
      "id": "m14_q08",
      "question": "If the refractive index of glass with respect to air is 1.5, what is the refractive index of air with respect to glass?",
      "options": ["1.5", "1 / 1.5 = 2/3 ≈ 0.67", "0.5", "3.0"],
      "answer": "1 / 1.5 = 2/3 ≈ 0.67",
      "explanation": "By the reciprocity principle, n_ag = 1 / n_ga = 1 / 1.5 = 2/3 ≈ 0.67."
    },
    {
      "id": "m14_q09",
      "question": "Diamond has a refractive index of 2.42. What is the speed of light inside diamond? (c = 3 × 10^8 m/s)",
      "options": ["1.24 × 10^8 m/s", "2.42 × 10^8 m/s", "3.0 × 10^8 m/s", "0.81 × 10^8 m/s"],
      "answer": "1.24 × 10^8 m/s",
      "explanation": "v = c / n = (3 × 10^8) / 2.42 ≈ 1.24 × 10^8 m/s."
    },
    {
      "id": "m14_q10",
      "question": "Can the absolute refractive index of any physical medium ever be less than 1.0?",
      "options": [
        "Yes, in very cold water",
        "No, because nothing can travel faster than the speed of light in vacuum (c)",
        "Yes, in diamond",
        "Yes, in dry desert air"
      ],
      "answer": "No, because nothing can travel faster than the speed of light in vacuum (c)",
      "explanation": "Since c is the universal maximum speed of light, v <= c, meaning n = c/v is always >= 1.0."
    }
  ]
}
modules_11_to_20.append(m14)

# ==========================================
# Module 15: Spherical Lenses Anatomy & Types
# ==========================================
m15 = {
  "id": "m15", "moduleNumber": 15,
  "title": "Spherical Lenses: Convex vs Concave Anatomy & Optical Centre",
  "tagline": "Converging vs diverging lenses, optical centre O, principal foci F1 and F2.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. What is a Spherical Lens?</h4>
    <p>A <strong>spherical lens</strong> is a piece of transparent optical material (such as glass or plastic) bounded by two spherical surfaces, or by one spherical surface and one plane surface:</p>
    <ul>
      <li><strong>Convex Lens (Double Convex / Converging Lens):</strong> Thicker at the middle and thinner at the edges. When a parallel beam of light strikes a convex lens, it refracts and <strong>converges</strong> to a real focus on the opposite side.</li>
      <li><strong>Concave Lens (Double Concave / Diverging Lens):</strong> Thicker at the edges and thinner at the middle. It refracts parallel rays outward, causing them to <strong>diverge</strong> as if originating from a virtual focus on the incident side.</li>
    </ul>

    <h4>2. Essential Lens Terminology</h4>
    <ul>
      <li><strong>Optical Centre ($O$):</strong> The central point of the lens on its principal axis. A ray of light passing through the optical centre suffers <strong>zero net deviation</strong> and passes straight through.</li>
      <li><strong>Centres of Curvature ($C_1, C_2$ or $2F_1, 2F_2$):</strong> The centres of the two spheres forming the two curved surfaces.</li>
      <li><strong>Principal Axis:</strong> The imaginary line connecting both centres of curvature and passing through $O$.</li>
      <li><strong>Principal Foci ($F_1, F_2$):</strong> A lens has two principal foci on either side of the optical centre. For a thin lens, both focal lengths are equal ($OF_1 = OF_2 = f$).</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "A convex lens is thicker in the middle and converges light; a concave lens is thinner in the middle and diverges light.",
    "A ray passing through the optical centre ($O$) passes straight through without deviation.",
    "A lens has two symmetrical principal foci ($F_1$ and $F_2$) equidistant from $O$ ($f = OF$)."
  ],
  "keyNotes": [
    "A convex lens behaves as a converging lens when placed in a medium with a lower refractive index (like air), but would diverge light if submerged in a medium with a higher refractive index than the lens material!"
  ],
  "questions": [
    get_bank_q(30, "m15_q01"),
    get_bank_q(31, "m15_q02"),
    get_bank_q(74, "m15_q03"),
    {
      "id": "m15_q04",
      "question": "What is the central point of a spherical lens through which a ray of light passes without suffering any deviation called?",
      "options": ["Principal focus", "Optical centre (O)", "Centre of curvature", "Aperture boundary"],
      "answer": "Optical centre (O)",
      "explanation": "A ray passing through the optical centre (O) traverses the lens undeviated along a straight line."
    },
    {
      "id": "m15_q05",
      "question": "Which type of lens is thicker in the middle and thinner at the perimeter edges?",
      "options": ["Double concave lens", "Double convex lens", "Plano-concave lens", "Cylindrical concave lens"],
      "answer": "Double convex lens",
      "explanation": "A double convex lens bulges outwards at the centre and tapers towards the outer edges."
    },
    {
      "id": "m15_q06",
      "question": "Why is a double convex lens referred to as a 'converging lens'?",
      "options": [
        "It scatters light in all directions",
        "It bends parallel incident light rays inward to intersect at a common real focal point",
        "It blocks ultraviolet light",
        "It turns light into electricity"
      ],
      "answer": "It bends parallel incident light rays inward to intersect at a common real focal point",
      "explanation": "Parallel rays entering a convex lens refract inward towards the principal axis, converging at the focal point."
    },
    {
      "id": "m15_q07",
      "question": "Why is a double concave lens referred to as a 'diverging lens'?",
      "options": [
        "It focuses parallel rays into a bright spot",
        "It refracts parallel incident rays outward, causing them to spread apart as if radiating from a virtual focus",
        "It absorbs 100% of incident light",
        "It converts light into heat"
      ],
      "answer": "It refracts parallel incident rays outward, causing them to spread apart as if radiating from a virtual focus",
      "explanation": "A concave lens bends rays away from the principal axis, causing them to diverge outward."
    },
    {
      "id": "m15_q08",
      "question": "How many principal foci does a standard thin spherical lens possess?",
      "options": ["One", "Two (one on each side: F1 and F2)", "Four", "Infinite"],
      "answer": "Two (one on each side: F1 and F2)",
      "explanation": "Because light can enter from either the left or right face, a lens possesses two principal foci (F1 and F2)."
    },
    {
      "id": "m15_q09",
      "question": "What is the linear distance from the optical centre (O) to either principal focus of a thin lens called?",
      "options": ["Radius of curvature", "Focal length (f)", "Aperture diameter", "Displacement width"],
      "answer": "Focal length (f)",
      "explanation": "The distance OF from the optical centre to the principal focus is the focal length f."
    },
    {
      "id": "m15_q10",
      "question": "A student burns a small hole in a dry leaf using a lens under bright sunlight. What type of lens did the student use?",
      "options": ["Concave lens", "Convex lens", "Plane glass plate", "Diverging cylindrical lens"],
      "answer": "Convex lens",
      "explanation": "A convex lens converges the parallel rays of the sun onto a tiny real focal spot, concentrating heat to ignite the leaf."
    }
  ]
}
modules_11_to_20.append(m15)

# ==========================================
# Module 16: Image Formation by Convex Lens
# ==========================================
m16 = {
  "id": "m16", "moduleNumber": 16,
  "title": "Image Formation by Convex Lens: The Six Object Positions",
  "tagline": "Real vs virtual images, magnification changes, and the magnifying glass condition.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Image Formation Summary for Convex Lens</h4>
    <p>A convex lens forms real, inverted images for most object positions, but forms an erect, virtual image when the object is placed close to the lens:</p>
    <table class="table-bordered" style="width:100%; border-collapse:collapse; font-size:0.85rem; margin:10px 0;">
      <thead><tr style="background:#f1f5f9;"><th>Object Position</th><th>Image Position</th><th>Image Size</th><th>Nature</th></tr></thead>
      <tbody>
        <tr><td><strong>At Infinity</strong></td><td>At Focus ($F_2$)</td><td>Highly diminished (point-sized)</td><td>Real and inverted</td></tr>
        <tr><td><strong>Beyond $2F_1$</strong></td><td>Between $F_2$ and $2F_2$</td><td>Diminished</td><td>Real and inverted</td></tr>
        <tr><td><strong>At $2F_1$</strong></td><td>At $2F_2$</td><td>Same size as object ($m = -1$)</td><td>Real and inverted</td></tr>
        <tr><td><strong>Between $F_1$ and $2F_1$</strong></td><td>Beyond $2F_2$</td><td>Enlarged (magnified)</td><td>Real and inverted</td></tr>
        <tr><td><strong>At Focus ($F_1$)</strong></td><td>At Infinity</td><td>Infinitely large (highly enlarged)</td><td>Real and inverted</td></tr>
        <tr><td><strong>Between $O$ and $F_1$</strong></td><td>On same side as object</td><td>Enlarged (magnified)</td><td><strong>Virtual and erect</strong></td></tr>
      </tbody>
    </table>

    <h4>2. The Simple Magnifying Glass</h4>
    <p>When an object (such as small text or a watch gear) is placed within the focal length of a convex lens (between $O$ and $F_1$), the refracted rays diverge on the opposite side. When projected backwards, they form an <strong>erect, highly magnified, virtual image</strong> on the same side. This is the operating principle of a <strong>simple microscope (magnifying glass)</strong>.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Object at $2F_1$ forms an image at $2F_2$, real, inverted, and of the exact same size ($m = -1$).",
    "Object at $F_1$ forms an image at infinity (parallel refracted rays).",
    "Object between $O$ and $F_1$ produces a virtual, erect, and magnified image on the same side (magnifying glass)."
  ],
  "keyNotes": [
    "Covering one half of a convex lens with black paper does NOT produce half an image; it forms the complete full image, but with reduced brightness (intensity) because fewer rays contribute."
  ],
  "questions": [
    get_bank_q(32, "m16_q01"),
    get_bank_q(33, "m16_q02"),
    get_bank_q(60, "m16_q03"),
    get_bank_q(100, "m16_q04"),
    {
      "id": "m16_q05",
      "question": "Where should an object be placed in front of a convex lens to obtain a real image of the EXACT SAME SIZE as the object?",
      "options": ["At the focus (F1)", "At twice the focal length (at 2F1)", "Between O and F1", "At infinity"],
      "answer": "At twice the focal length (at 2F1)",
      "explanation": "When an object is placed at 2F1, the image forms at 2F2 on the other side, real, inverted, and of identical size (m = -1)."
    },
    {
      "id": "m16_q06",
      "question": "Where must an object be placed to use a convex lens as a simple magnifying glass?",
      "options": [
        "Between the optical centre (O) and the principal focus (F1)",
        "Beyond 2F1",
        "At 2F1",
        "At infinity"
      ],
      "answer": "Between the optical centre (O) and the principal focus (F1)",
      "explanation": "When an object is placed between O and F1, the lens produces an upright, magnified virtual image on the same side."
    },
    {
      "id": "m16_q07",
      "question": "If the lower half of a convex lens is covered with opaque black paper, what will happen to the image of an object formed on a screen?",
      "options": [
        "Only the upper half of the image is visible",
        "The full image is formed, but its brightness (intensity) is reduced",
        "The image disappears completely",
        "The image is magnified twice as much"
      ],
      "answer": "The full image is formed, but its brightness (intensity) is reduced",
      "explanation": "Rays from every point of the object still pass through the uncovered half to form a complete image, but with half the light intensity."
    },
    {
      "id": "m16_q08",
      "question": "Where is the image formed when an object is placed between F1 and 2F1 in front of a convex lens?",
      "options": ["At 2F2", "Beyond 2F2, real, inverted and enlarged", "Between F2 and 2F2", "At infinity"],
      "answer": "Beyond 2F2, real, inverted and enlarged",
      "explanation": "Placing an object between F1 and 2F1 produces a real, inverted, and magnified image beyond 2F2 (as in a movie projector)."
    },
    {
      "id": "m16_q09",
      "question": "What type of image is produced by a convex lens when an object is at infinity?",
      "options": [
        "Virtual and erect at the optical centre",
        "Real, inverted, and highly diminished (point-sized) at focus F2",
        "Magnified image at 2F2",
        "No image is formed"
      ],
      "answer": "Real, inverted, and highly diminished (point-sized) at focus F2",
      "explanation": "Parallel rays from infinity converge to the principal focus F2, forming a real, point-sized inverted image."
    },
    {
      "id": "m16_q10",
      "question": "Which of the following optical instruments uses a convex lens to cast an enlarged real image onto a photographic film or digital sensor?",
      "options": ["Camera", "Vehicle side-view mirror", "Periscope", "Plane mirror"],
      "answer": "Camera",
      "explanation": "A camera utilizes a convex lens system to project real, inverted, and focused images onto a sensor or film."
    }
  ]
}
modules_11_to_20.append(m16)

# ==========================================
# Module 17: Concave Lens & Lens Sign Convention
# ==========================================
m17 = {
  "id": "m17", "moduleNumber": 17,
  "title": "Image Formation by Concave Lenses & Cartesian Sign Convention for Lenses",
  "tagline": "Always virtual, erect, and diminished images; New Cartesian sign rules for lenses.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Image Formation by a Concave Lens</h4>
    <p>A concave lens diverges all incident light rays outward. For any real object positioned at any finite distance in front of a concave lens:</p>
    <ul>
      <li><strong>Location:</strong> The image is always formed on the <strong>same side as the object</strong>, between the optical centre ($O$) and the focus ($F_1$).</li>
      <li><strong>Nature:</strong> The image is always <strong>virtual and erect</strong>.</li>
      <li><strong>Size:</strong> The image is always <strong>diminished</strong> (smaller than the object, $m < 1$).</li>
    </ul>

    <h4>2. New Cartesian Sign Convention for Lenses</h4>
    <p>Taking the optical centre ($O$) as the coordinate origin $(0,0)$:</p>
    <ul>
      <li><strong>Object Distance ($u$):</strong> Object is always placed to the left of the lens $\rightarrow u$ is always <strong>negative ($-$)</strong>.</li>
      <li><strong>Focal Length of Convex Lens ($f$):</strong> The principal focus lies to the right ($+x$) $\rightarrow f$ is always <strong>positive ($+$)</strong>.</li>
      <li><strong>Focal Length of Concave Lens ($f$):</strong> The principal focus lies to the left ($-x$) $\rightarrow f$ is always <strong>negative ($-$)</strong>.</li>
      <li><strong>Real Image Distance ($v$):</strong> Formed on the opposite side (right, $+x$) $\rightarrow v$ is <strong>positive ($+$)</strong>.</li>
      <li><strong>Virtual Image Distance ($v$):</strong> Formed on the same side as object (left, $-x$) $\rightarrow v$ is <strong>negative ($-$)</strong>.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "A concave lens ALWAYS forms virtual, erect, and diminished images on the same side as the object.",
    "Focal length rules for lenses: Convex lens $f > 0$ (positive); Concave lens $f < 0$ (negative).",
    "Real images in lenses have positive $v$; virtual images have negative $v$."
  ],
  "keyNotes": [
    "Note the crucial sign contrast with mirrors: for a lens, a real image formed on the opposite side has a POSITIVE image distance ($v > 0$)."
  ],
  "questions": [
    get_bank_q(34, "m17_q01"),
    get_bank_q(37, "m17_q02"),
    get_bank_q(76, "m17_q03"),
    {
      "id": "m17_q04",
      "question": "What is the nature and size of the image formed by a concave lens for any finite object distance?",
      "options": [
        "Real, inverted, and magnified",
        "Virtual, erect, and diminished",
        "Virtual, erect, and magnified",
        "Real, inverted, and same size"
      ],
      "answer": "Virtual, erect, and diminished",
      "explanation": "A concave lens diverges rays, so backward ray projections always intersect between O and F1 to form a virtual, erect, diminished image."
    },
    {
      "id": "m17_q05",
      "question": "According to the New Cartesian Sign Convention, what is the sign of the focal length of a CONCAVE lens?",
      "options": ["Always positive (+)", "Always negative (-)", "Zero", "Positive only in water"],
      "answer": "Always negative (-)",
      "explanation": "The principal focus of a concave lens lies on the incident (left) side, so its focal length f is always negative."
    },
    {
      "id": "m17_q06",
      "question": "According to the New Cartesian Sign Convention, what is the sign of the focal length of a CONVEX lens?",
      "options": ["Always positive (+)", "Always negative (-)", "Variable", "Undefined"],
      "answer": "Always positive (+)",
      "explanation": "The primary focus of a convex lens where parallel rays converge lies to the right (+x direction), so f is positive."
    },
    {
      "id": "m17_q07",
      "question": "In a lens problem, if the calculated image distance is v = +24 cm, what does the positive sign indicate?",
      "options": [
        "The image is virtual and on the left side",
        "The image is real and formed on the opposite side (right side) of the lens",
        "The lens has melted",
        "The object was at infinity"
      ],
      "answer": "The image is real and formed on the opposite side (right side) of the lens",
      "explanation": "In lenses, real rays pass through to the opposite (+x) side, giving a positive image distance (v > 0) for real images."
    },
    {
      "id": "m17_q08",
      "question": "Which of the following vision defects is corrected using a suitable CONCAVE (diverging) spectacle lens?",
      "options": ["Myopia (Near-sightedness)", "Hypermetropia (Far-sightedness)", "Presbyopia", "Astigmatism"],
      "answer": "Myopia (Near-sightedness)",
      "explanation": "A concave lens diverges incoming rays slightly before entering the eye, pushing the focused image back onto the myopic retina."
    },
    {
      "id": "m17_q09",
      "question": "Where is the image formed when an object is placed at infinity in front of a concave lens?",
      "options": [
        "At the focus F1, point-sized and virtual",
        "At 2F2, real and inverted",
        "At the optical centre, magnified",
        "At infinity on the opposite side"
      ],
      "answer": "At the focus F1, point-sized and virtual",
      "explanation": "Parallel rays diverge upon entering the concave lens; their extensions meet at focus F1 as an upright, virtual, point-sized image."
    },
    {
      "id": "m17_q10",
      "question": "Can a concave lens ever produce an image larger than the object for a real object?",
      "options": [
        "Yes, when held within 1 cm",
        "No, a concave lens always produces diminished images (|m| < 1)",
        "Yes, if made of diamond",
        "Yes, when submerged in kerosene"
      ],
      "answer": "No, a concave lens always produces diminished images (|m| < 1)",
      "explanation": "A concave lens in air always produces a virtual, erect image that is strictly smaller than the object (0 < m < 1)."
    }
  ]
}
modules_11_to_20.append(m17)

# ==========================================
# Module 18: The Lens Formula & Magnification
# ==========================================
m18 = {
  "id": "m18", "moduleNumber": 18,
  "title": "The Lens Formula & Linear Magnification",
  "tagline": "Mastery of 1/v - 1/u = 1/f, and magnification m = h'/h = +v/u.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. The Lens Formula</h4>
    <p>The mathematical equation relating the object distance ($u$), image distance ($v$), and focal length ($f$) of a spherical lens is known as the <strong>Lens Formula</strong>:</p>
    $$\frac{1}{v} - \frac{1}{u} = \frac{1}{f}$$
    <p>Notice the crucial <strong>minus sign</strong> before $\frac{1}{u}$, which distinguishes the lens formula from the mirror formula ($\frac{1}{v} + \frac{1}{u} = \frac{1}{f}$).</p>

    <h4>2. Linear Magnification ($m$) for Lenses</h4>
    <p>The magnification produced by a spherical lens is the ratio of the image height ($h'$) to the object height ($h$):</p>
    $$m = \frac{h'}{h} = +\frac{v}{u}$$
    <p>Notice that for lenses, $m = +\frac{v}{u}$ (has a <strong>positive sign</strong>), whereas for mirrors $m = -\frac{v}{u}$.</p>

    <h4>3. Interpreting Magnification for Lenses</h4>
    <ul>
      <li><strong>Negative Magnification ($m < 0$):</strong> Image is <strong>real and inverted</strong>. (Because $v > 0$ and $u < 0$, $v/u$ is negative).</li>
      <li><strong>Positive Magnification ($m > 0$):</strong> Image is <strong>virtual and erect</strong>. (Because both $v < 0$ and $u < 0$, $v/u$ is positive).</li>
      <li><strong>$|m| > 1$:</strong> Image is magnified.</li>
      <li><strong>$|m| < 1$:</strong> Image is diminished.</li>
      <li><strong>$|m| = 1$:</strong> Image is same size as object.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "The Lens Formula: $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$.",
    "Lens Magnification: $m = \\frac{h'}{h} = +\\frac{v}{u}$.",
    "Negative $m$ signifies a real, inverted image; positive $m$ signifies a virtual, erect image."
  ],
  "keyNotes": [
    "Do not confuse mirror and lens formulas: Mirrors have $+1/u$ in formula and $-v/u$ in magnification; Lenses have $-1/u$ in formula and $+v/u$ in magnification."
  ],
  "questions": [
    get_bank_q(35, "m18_q01"),
    get_bank_q(36, "m18_q02"),
    get_bank_q(61, "m18_q03"),
    {
      "id": "m18_q04",
      "question": "Which of the following equations correctly represents the Lens Formula?",
      "options": [
        "1/v + 1/u = 1/f",
        "1/v - 1/u = 1/f",
        "1/u - 1/v = 1/f",
        "v - u = f"
      ],
      "answer": "1/v - 1/u = 1/f",
      "explanation": "The lens formula relates image distance v, object distance u, and focal length f through 1/v - 1/u = 1/f."
    },
    {
      "id": "m18_q05",
      "question": "What is the linear magnification formula for a spherical lens in terms of image distance (v) and object distance (u)?",
      "options": ["m = -v/u", "m = +v/u", "m = u/v", "m = -u/v"],
      "answer": "m = +v/u",
      "explanation": "For spherical lenses, magnification is given by m = h'/h = +v/u."
    },
    {
      "id": "m18_q06",
      "question": "If a convex lens produces a real and inverted image of twice the height of the object, what is the magnification m?",
      "options": ["+2", "-2", "+0.5", "-0.5"],
      "answer": "-2",
      "explanation": "Because the image is real and inverted, m is negative; with height doubled, m = -2."
    },
    {
      "id": "m18_q07",
      "question": "A concave lens produces an image of height 2 cm from an object of height 6 cm. What is the magnification?",
      "options": ["+3", "-3", "+1/3 (+0.33)", "-1/3"],
      "answer": "+1/3 (+0.33)",
      "explanation": "A concave lens always produces an erect (positive) virtual image: m = h'/h = +2/6 = +1/3."
    },
    {
      "id": "m18_q08",
      "question": "An object is placed 30 cm in front of a convex lens of focal length 20 cm. What is the image distance v?",
      "options": ["+60 cm", "-60 cm", "+12 cm", "-12 cm"],
      "answer": "+60 cm",
      "explanation": "1/v = 1/f + 1/u = 1/20 + 1/(-30) = 1/20 - 1/30 = (3 - 2)/60 = 1/60. Hence v = +60 cm (real image on opposite side)."
    },
    {
      "id": "m18_q09",
      "question": "What is the magnification in the question above (u = -30 cm, v = +60 cm)?",
      "options": ["-2", "+2", "-0.5", "+0.5"],
      "answer": "-2",
      "explanation": "For a lens, m = +v/u = (+60) / (-30) = -2 (real, inverted, magnified twice)."
    },
    {
      "id": "m18_q10",
      "question": "If a lens produces a magnification of m = +1.5, what kind of lens is it and what is the nature of the image?",
      "options": [
        "Concave lens, virtual image",
        "Convex lens acting as a magnifying glass, virtual and erect image",
        "Convex lens, real image",
        "Plane glass plate"
      ],
      "answer": "Convex lens acting as a magnifying glass, virtual and erect image",
      "explanation": "Only a convex lens can produce a magnified (m > 1) virtual and erect (positive m) image when the object is within its focal length."
    }
  ]
}
modules_11_to_20.append(m18)

# ==========================================
# Module 19: Power of a Lens & Combinations
# ==========================================
m19 = {
  "id": "m19", "moduleNumber": 19,
  "title": "Power of a Lens ($P = 1/f$), The Dioptre & Thin Lens Combinations",
  "tagline": "Degree of convergence/divergence, SI unit Dioptre (D), and additive power in combination lenses.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Definition of Power of a Lens ($P$)</h4>
    <p>The <strong>power of a lens</strong> is a measure of its ability to converge or diverge incident light rays. A lens with a shorter focal length bends light rays through larger angles, focusing them closer to the optical centre, and therefore possesses greater optical power.</p>
    <p>Mathematically, the power of a lens ($P$) is defined as the <strong>reciprocal of its focal length expressed in metres</strong>:</p>
    $$P = \frac{1}{f\text{ (in metres)}} = \frac{100}{f\text{ (in centimetres)}}$$

    <h4>2. The SI Unit of Power: The Dioptre ($D$)</h4>
    <p>The SI unit of power of a lens is the <strong>dioptre</strong>, denoted by the symbol $\mathbf{D}$ ($1\text{ D} = 1\text{ m}^{-1}$):</p>
    <blockquote style="background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;">
      "1 dioptre is the power of a lens whose focal length is exactly 1 metre."
    </blockquote>

    <h4>3. Signs of Lens Power</h4>
    <ul>
      <li><strong>Convex Lens:</strong> Focal length is positive ($f > 0$) $\implies$ Power is <strong>positive ($P > 0$)</strong>. (e.g., $+2.0\text{ D}$).</li>
      <li><strong>Concave Lens:</strong> Focal length is negative ($f < 0$) $\implies$ Power is <strong>negative ($P < 0$)</strong>. (e.g., $-1.5\text{ D}$).</li>
    </ul>

    <h4>4. Power of a Combination of Thin Lenses</h4>
    <p>When multiple thin lenses of powers $P_1, P_2, P_3, \dots$ are placed in direct contact, the net equivalent power ($P$) of the combination is simply the <strong>algebraic sum</strong> of the individual powers:</p>
    $$P = P_1 + P_2 + P_3 + \dots$$
    <p>This additive property is routinely used by opticians and camera lens designers to minimize optical aberrations.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Power of a lens is the reciprocal of focal length in metres: $P = 1/f\\text{ (m)}$.",
    "The SI unit of power is the Dioptre ($\\text{D}$), where $1\\text{ D} = 1\\text{ m}^{-1}$.",
    "Convex lenses have positive power ($P > 0$); concave lenses have negative power ($P < 0$).",
    "Combined power in contact: $P = P_1 + P_2 + \\dots$."
  ],
  "keyNotes": [
    "Always convert focal length into metres before calculating power: a focal length of $+20\\text{ cm} = +0.2\\text{ m}$ gives $P = 1/0.2 = +5\\text{ D}$."
  ],
  "questions": [
    get_bank_q(38, "m19_q01"),
    get_bank_q(39, "m19_q02"),
    get_bank_q(40, "m19_q03"),
    get_bank_q(41, "m19_q04"),
    get_bank_q(42, "m19_q05"),
    {
      "id": "m19_q06",
      "question": "What is the power of a convex lens having a focal length of 50 cm?",
      "options": ["+2.0 D", "-2.0 D", "+0.5 D", "+50 D"],
      "answer": "+2.0 D",
      "explanation": "f = +50 cm = +0.5 m. Power P = 1 / f = 1 / 0.5 = +2.0 D."
    },
    {
      "id": "m19_q07",
      "question": "What is the focal length and nature of a lens having a power of -2.5 D?",
      "options": [
        "-40 cm, concave lens",
        "+40 cm, convex lens",
        "-25 cm, concave lens",
        "+25 cm, convex lens"
      ],
      "answer": "-40 cm, concave lens",
      "explanation": "f = 1/P = 1/(-2.5) = -0.4 m = -40 cm. The negative sign signifies a concave (diverging) lens."
    },
    {
      "id": "m19_q08",
      "question": "Two thin lenses of powers +3.5 D and -1.5 D are placed in direct contact. What is the net power of the combination?",
      "options": ["+2.0 D", "+5.0 D", "-2.0 D", "-5.25 D"],
      "answer": "+2.0 D",
      "explanation": "Net power P = P1 + P2 = +3.5 D + (-1.5 D) = +2.0 D."
    },
    {
      "id": "m19_q09",
      "question": "What is the equivalent focal length of the combined lens system in the question above (P = +2.0 D)?",
      "options": ["+50 cm (convex lens)", "-50 cm", "+20 cm", "+100 cm"],
      "answer": "+50 cm (convex lens)",
      "explanation": "f = 1/P = 1/(+2.0 D) = +0.5 m = +50 cm (converging behaviour)."
    },
    {
      "id": "m19_q10",
      "question": "Why do optometrists prescribe lens combinations in compound optical systems like microscopes?",
      "options": [
        "To make the instrument heavier",
        "To increase magnification and correct chromatic and spherical aberrations",
        "To filter out all incoming red light",
        "To lower manufacturing cost"
      ],
      "answer": "To increase magnification and correct chromatic and spherical aberrations",
      "explanation": "Combining lenses of opposite sign allows designers to achieve sharp focus while eliminating chromatic and spherical distortions."
    }
  ]
}
modules_11_to_20.append(m19)

# ==========================================
# Module 20: Comprehensive Optics Numerical Problem Solving
# ==========================================
m20 = {
  "id": "m20", "moduleNumber": 20,
  "title": "Comprehensive Optics Problem Solving: Mirrors, Lenses & Systems",
  "tagline": "Mastery problem-solving covering mirror formula, lens formula, magnification, and power calculations.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Summary of Master Equations in Optics</h4>
    <table class="table-bordered" style="width:100%; border-collapse:collapse; margin:10px 0;">
      <thead><tr style="background:#f1f5f9;"><th>Quantity</th><th>Spherical Mirror</th><th>Spherical Lens</th></tr></thead>
      <tbody>
        <tr><td><strong>Fundamental Formula</strong></td><td>$\frac{1}{v} + \frac{1}{u} = \frac{1}{f}$</td><td>$\frac{1}{v} - \frac{1}{u} = \frac{1}{f}$</td></tr>
        <tr><td><strong>Focal Length ($f$)</strong></td><td>$f = \frac{R}{2}$</td><td>$f = \frac{1}{P\text{ (m)}}$</td></tr>
        <tr><td><strong>Linear Magnification ($m$)</strong></td><td>$m = \frac{h'}{h} = -\frac{v}{u}$</td><td>$m = \frac{h'}{h} = +\frac{v}{u}$</td></tr>
        <tr><td><strong>Convex Element Sign</strong></td><td>$f > 0$</td><td>$f > 0$, $P > 0$</td></tr>
        <tr><td><strong>Concave Element Sign</strong></td><td>$f < 0$</td><td>$f < 0$, $P < 0$</td></tr>
        <tr><td><strong>Object Distance ($u$)</strong></td><td>Always negative ($-$)</td><td>Always negative ($-$)</td></tr>
      </tbody>
    </table>

    <h4>2. Systematic Checklist for Solving Board Exam Numericals</h4>
    <ol>
      <li>Identify whether the optical element is a <strong>Mirror</strong> or a <strong>Lens</strong>.</li>
      <li>Identify whether it is <strong>Convex</strong> or <strong>Concave</strong>.</li>
      <li>Write down all given values ($u, v, f, h, P$) with their explicit Cartesian signs.</li>
      <li>Select the appropriate equation and solve algebraically before inserting numbers.</li>
      <li>Verify the physical realism: check if magnification signs match the real/virtual nature of the image!</li>
    </ol>
  </div>
</div>
""",
  "pointsToRemember": [
    "Mirrors: $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$ and $m = -\\frac{v}{u}$.",
    "Lenses: $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$ and $m = +\\frac{v}{u}$.",
    "Power: $P = 1/f\\text{ (m)}$; combined lenses: $P = P_1 + P_2$."
  ],
  "keyNotes": [
    "Always double-check units: convert cm to m when calculating Power in Dioptres, and convert m to cm when comparing with object/image distances."
  ],
  "questions": [
    get_bank_q(62, "m20_q01"),
    get_bank_q(63, "m20_q02"),
    get_bank_q(64, "m20_q03"),
    get_bank_q(65, "m20_q04"),
    get_bank_q(66, "m20_q05"),
    get_bank_q(67, "m20_q06"),
    get_bank_q(68, "m20_q07"),
    get_bank_q(69, "m20_q08"),
    get_bank_q(71, "m20_q09"),
    {
      "id": "m20_q10",
      "question": "A concave lens has focal length of 15 cm. At what distance should the object from the lens be placed so that it forms an image at 10 cm from the lens?",
      "options": ["-30 cm", "+30 cm", "-25 cm", "-15 cm"],
      "answer": "-30 cm",
      "explanation": "For a concave lens, f = -15 cm, and image is virtual so v = -10 cm. 1/f = 1/v - 1/u => 1/u = 1/v - 1/f = 1/(-10) - 1/(-15) = -1/10 + 1/15 = -1/30 => u = -30 cm."
    }
  ]
}
modules_11_to_20.append(m20)

with open('scratch/ch9_part2.json', 'w', encoding='utf-8') as f:
    json.dump(modules_11_to_20, f, indent=2, ensure_ascii=False)

print(f"Successfully generated Chapter 9 Part 2 (Modules 11 to 20): {len(modules_11_to_20)} modules.")
