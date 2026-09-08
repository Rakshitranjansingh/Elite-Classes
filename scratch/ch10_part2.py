# -*- coding: utf-8 -*-
"""
CH10 Part 2: Modules 11 to 20
The Human Eye and the Colourful World (Class 10 Science)
"""
import json

with open('scratch/ch10_bank_questions.json', 'r', encoding='utf-8') as f:
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
# Module 11: Recombination of Spectrum (Newton's Experiment)
# ==========================================
m11 = {
  "id": "m11", "moduleNumber": 11,
  "title": "Recombination of the Spectrum: Newton's Inverted Prism Experiment",
  "tagline": "Two identical prisms in reversed orientation, white light synthesis, and spectral reversibility.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Newton's Hypothesis: Is the Prism Creating Colours?</h4>
    <p>After discovering that a triangular glass prism splits white light into seven spectral colours, a prominent historical debate arose: <em>Did the glass material of the prism chemically or physically add colour to the light, or was white light inherently a mixture of these colours?</em></p>

    <h4>2. The Double Prism Recombination Experiment</h4>
    <p>To settle the question decisively, Isaac Newton placed a second, identical triangular glass prism in an <strong>inverted position</strong> relative to the first prism:</p>
    <ol>
      <li>The first upright prism dispersed the incoming narrow beam of white sunlight into its constituent spectral colours (VIBGYOR).</li>
      <li>All seven separated colours were then allowed to fall on the refracting face of the second inverted prism.</li>
      <li>The second prism bent the colours in the <strong>exact opposite direction</strong>, counteracting the angular dispersion of the first prism.</li>
      <li>Remarkably, all seven dispersed rays recombined within the second prism and emerged from the far side as a single, consolidated beam of <strong>pure white light</strong>!</li>
    </ol>

    <h4>3. Scientific Conclusion</h4>
    <p>This elegant experiment provided irrefutable proof that:</p>
    <ul>
      <li>The prism does not manufacture colours; it simply separates pre-existing wavelengths travelling at different speeds.</li>
      <li>Any source of light that produces a spectrum similar to sunlight is called <strong>white light</strong>.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Newton placed an identical second prism in an inverted position relative to the first.",
    "The first prism disperses white light; the second inverted prism recombines the spectrum back into white light.",
    "Conclusively proved that white sunlight is inherently composed of seven constituent spectral colours."
  ],
  "keyNotes": [
    "Recombination succeeds only if the second prism has identical optical material, identical refracting angle, and is placed in a precisely reversed (inverted) orientation."
  ],
  "questions": [
    get_bank_q(31, "m11_q01"),
    get_bank_q(32, "m11_q02"),
    get_bank_q(60, "m11_q03"),
    {
      "id": "m11_q04",
      "question": "What optical setup did Isaac Newton use to recombine the dispersed spectrum back into a single beam of white light?",
      "options": [
        "A high-power convex lens",
        "A second identical glass prism placed in an inverted orientation relative to the first prism",
        "A plane mirror tilted at 45°",
        "A beaker of transparent water"
      ],
      "answer": "A second identical glass prism placed in an inverted orientation relative to the first prism",
      "explanation": "Newton used a second identical prism placed in an inverted position to undo the dispersion of the first, recombining the colours into white light."
    },
    {
      "id": "m11_q05",
      "question": "What did Newton's inverted prism recombination experiment conclusively demonstrate about white sunlight?",
      "options": [
        "That sunlight is monochromatic",
        "That sunlight is inherently a composite polychromatic mixture of seven constituent spectral colours",
        "That glass creates colour through radioactive decay",
        "That red light cannot travel through inverted glass"
      ],
      "answer": "That sunlight is inherently a composite polychromatic mixture of seven constituent spectral colours",
      "explanation": "Recombination proved that the prism did not generate colours; it simply separated the pre-existing wavelengths comprising white light."
    },
    {
      "id": "m11_q06",
      "question": "Why did the second inverted prism successfully recombine the dispersed colours?",
      "options": [
        "Because it was made of magnetic glass",
        "Because its inverted orientation caused an equal and opposite angular deviation for each constituent wavelength",
        "Because it absorbed the violet rays",
        "Because it doubled the speed of red light"
      ],
      "answer": "Because its inverted orientation caused an equal and opposite angular deviation for each constituent wavelength",
      "explanation": "The inverted geometry exactly reverses the differential bending produced by the first prism, consolidating the divergent rays into a parallel white beam."
    },
    {
      "id": "m11_q07",
      "question": "What would happen if Newton attempted to pass a monochromatic beam of pure red laser light through a triangular prism?",
      "options": [
        "It would split into seven new colours",
        "It would deviate towards the base without splitting into any other colours",
        "It would turn into white light",
        "It would be absorbed 100%"
      ],
      "answer": "It would deviate towards the base without splitting into any other colours",
      "explanation": "Monochromatic light consists of a single wavelength; it suffers refraction and deviation, but cannot undergo dispersion."
    },
    {
      "id": "m11_q08",
      "question": "Any light source whose spectral emission resembles that of sunlight and produces a similar visible spectrum is termed:",
      "options": ["Coherent light", "White light", "Infrared light", "Polarized light"],
      "answer": "White light",
      "explanation": "By definition in optics, any light composed of a blend of wavelengths that yields a visible spectrum similar to sunlight is called white light."
    },
    {
      "id": "m11_q09",
      "question": "What happens if three identical prisms are arranged alternately (upright, inverted, upright) in the path of white light?",
      "options": [
        "The light emerges as white light",
        "The light emerges dispersed into a spectrum (since the first two cancel out, leaving the third to disperse)",
        "No light emerges",
        "It emerges as green light only"
      ],
      "answer": "The light emerges dispersed into a spectrum (since the first two cancel out, leaving the third to disperse)",
      "explanation": "The first two prisms cancel each other's dispersion, emerging as white light, which then gets dispersed by the third upright prism."
    },
    {
      "id": "m11_q10",
      "question": "In Newton's experiment, what was the necessary orientation of the two identical prisms?",
      "options": [
        "Both pointing upward side by side",
        "First prism upright, second prism inverted (base to apex)",
        "Both placed at 90° angles",
        "Facing back-to-back at 180°"
      ],
      "answer": "First prism upright, second prism inverted (base to apex)",
      "explanation": "The second prism had to be inverted with respect to the first so that its refracting surfaces acted in opposition."
    }
  ]
}
modules_11_to_20.append(m11)

# ==========================================
# Module 12: Formation of the Rainbow
# ==========================================
m12 = {
  "id": "m12", "moduleNumber": 12,
  "title": "Formation of the Rainbow: Natural Dispersion by Atmospheric Water Droplets",
  "tagline": "Prismatic raindrops, triple optical sequence: refraction, dispersion, internal reflection, and emergence.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. What is a Rainbow?</h4>
    <p>A <strong>rainbow</strong> is a magnificent natural optical spectrum produced in the sky by the dispersion of sunlight by tiny microscopic water droplets suspended in the Earth's atmosphere following a rain shower. A rainbow is always observed in the direction <strong>opposite to that of the Sun</strong> (the observer's back must face the Sun).</p>

    <h4>2. The Three-Step Optical Sequence Inside Each Raindrop</h4>
    <p>Each spherical suspended water droplet acts as a tiny miniature liquid glass prism, executing three consecutive optical events:</p>
    <ol>
      <li><strong>Refraction and Dispersion at Entry:</strong> As oblique sunlight enters the spherical raindrop from air into water, it refracts and simultaneously <strong>disperses into its seven spectral colours</strong> (violet bends the most, red bends the least).</li>
      <li><strong>Total Internal Reflection:</strong> The dispersed rays strike the back curved surface inside the droplet at an angle greater than the critical angle of water ($i > \theta_c \approx 48.6^\circ$), undergoing <strong>internal reflection</strong> towards the front.</li>
      <li><strong>Refraction at Exit:</strong> The internally reflected rays strike the front surface of the droplet and emerge back into the air. As they pass from water (denser) into air (rarer), they refract again, further increasing the angular spread between colours.</li>
    </ol>

    <h4>3. Angular Geometry of the Primary Rainbow</h4>
    <p>Due to this three-step process, red light emerges at an angle of approximately <strong>$42^\circ$</strong> relative to the incoming sunlight, while violet light emerges at an angle of approximately <strong>$40^\circ$</strong>. To an observer on the ground, this differential angular cone manifests as a glowing multi-coloured circular arc with <strong>red at the outer (top) perimeter</strong> and <strong>violet at the inner (bottom) perimeter</strong>.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "A rainbow is a natural spectrum caused by dispersion of sunlight by airborne water droplets.",
    "Three-step optical mechanism inside droplets: 1. Refraction & dispersion $\\rightarrow$ 2. Internal reflection $\\rightarrow$ 3. Refraction on exit.",
    "A rainbow is always formed in the direction opposite to the Sun; red appears on the outer arc ($42^\\circ$), violet on the inner arc ($40^\\circ$)."
  ],
  "keyNotes": [
    "To observe a rainbow, the Sun must be behind the observer while water droplets are suspended in front of the observer."
  ],
  "questions": [
    get_bank_q(33, "m12_q01"),
    get_bank_q(34, "m12_q02"),
    get_bank_q(35, "m12_q03"),
    get_bank_q(61, "m12_q04"),
    get_bank_q(71, "m12_q05"),
    {
      "id": "m12_q06",
      "question": "What three consecutive optical phenomena occur in sequence when sunlight forms a primary rainbow in a suspended raindrop?",
      "options": [
        "Reflection, absorption, diffraction",
        "Refraction and dispersion, internal reflection, and refraction on exit",
        "Polarization, interference, scattering",
        "Total absorption, thermal emission, phosphorescence"
      ],
      "answer": "Refraction and dispersion, internal reflection, and refraction on exit",
      "explanation": "Light first refracts and disperses at the front surface, reflects internally at the rear surface, and refracts again upon emerging into air."
    },
    {
      "id": "m12_q07",
      "question": "In which direction relative to the Sun does a natural rainbow always appear in the sky?",
      "options": [
        "In the exact same direction as the Sun",
        "In the direction opposite to that of the Sun",
        "Directly overhead at 90°",
        "Towards the geographic North Pole always"
      ],
      "answer": "In the direction opposite to that of the Sun",
      "explanation": "An observer must stand with the Sun behind them; the rainbow forms in the opposite sky where raindrops reflect the light back."
    },
    {
      "id": "m12_q08",
      "question": "In a standard primary rainbow, which colour forms the outermost (top) curved arc?",
      "options": ["Violet", "Green", "Red", "Yellow"],
      "answer": "Red",
      "explanation": "Red light emerges at a higher angle (42°) relative to the solar ray, placing red on the outermost arc of a primary rainbow."
    },
    {
      "id": "m12_q09",
      "question": "Can a rainbow be seen at 12:00 noon on a flat open plain with the Sun directly overhead at the zenith?",
      "options": [
        "Yes, as a straight vertical line",
        "No, because the required anti-solar angle (40°-42°) projects the rainbow into the ground below the horizon",
        "Yes, in all four compass directions",
        "Only if you wear polarized glasses"
      ],
      "answer": "No, because the required anti-solar angle (40°-42°) projects the rainbow into the ground below the horizon",
      "explanation": "When the Sun is high in the sky, the rainbow's 42° arc is projected below the horizon and is blocked by the ground."
    },
    {
      "id": "m12_q10",
      "question": "What shape does a rainbow truly have when viewed from a high-altitude airplane without ground obstruction?",
      "options": ["A straight bar", "A semi-circle", "A complete 360° circle", "A triangle"],
      "answer": "A complete 360° circle",
      "explanation": "Unobstructed by the Earth's horizon, airborne observers view the full 360° circular cone of reflected rays around the anti-solar point."
    }
  ]
}
modules_11_to_20.append(m12)

# ==========================================
# Module 13: Atmospheric Refraction Basics
# ==========================================
m13 = {
  "id": "m13", "moduleNumber": 13,
  "title": "Atmospheric Refraction: Density Gradients & Continuously Curved Light Paths",
  "tagline": "Barometric pressure, temperature layering, continuous refractive index variation, and optical illusions.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. The Earth's Stratified Atmosphere</h4>
    <p>The Earth is surrounded by an envelope of air whose physical properties are not uniform. Gravitational compression makes air <strong>densest at sea level</strong> and progressively thinner (rarer) with increasing altitude. Furthermore, thermal convection creates localized layers of hot air (lower optical density) and cold air (higher optical density).</p>

    <h4>2. What is Atmospheric Refraction?</h4>
    <p>The refraction of light caused by the continuously varying optical density and refractive index of the Earth's atmosphere is called <strong>atmospheric refraction</strong>.</p>
    <p>As starlight or sunlight travels from outer vacuum ($n = 1.0$) towards the Earth's surface:</p>
    <ul>
      <li>It enters progressively denser layers of air with gradually increasing refractive index ($n \approx 1.00029$).</li>
      <li>At every infinitesimal atmospheric boundary, the ray passes from an optically rarer layer to an optically denser layer.</li>
      <li>Therefore, the ray continuously bends <strong>towards the normal</strong>, following a gently <strong>curved trajectory</strong> towards the Earth's surface.</li>
    </ul>

    <h4>3. Common Observable Consequences of Atmospheric Refraction</h4>
    <ul>
      <li>Apparent elevation of stars above their true geometric position.</li>
      <li>Twinkling of stars on clear nights.</li>
      <li>Advanced sunrise and delayed sunset (~$2\text{ minutes}$ each).</li>
      <li>Apparent vertical flattening of the solar disc at sunrise and sunset.</li>
      <li>Flickering of objects viewed through hot rising air above a campfire or radiator.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Atmospheric refraction is caused by continuous optical density and temperature gradients in Earth's air.",
    "Light entering from space passes from rarer to denser air layers, continuously bending towards the normal.",
    "Causes apparent upward displacement of celestial objects, twinkling, and extended daytime."
  ],
  "keyNotes": [
    "Hot air is less dense and has a lower refractive index than cold air; turbulence in temperature causes dynamic, shimmering refractive fluctuations."
  ],
  "questions": [
    get_bank_q(36, "m13_q01"),
    get_bank_q(37, "m13_q02"),
    get_bank_q(62, "m13_q03"),
    {
      "id": "m13_q04",
      "question": "What is the primary physical cause of atmospheric refraction?",
      "options": [
        "The presence of clouds in the troposphere",
        "The gradual, continuous increase in the optical density and refractive index of air layers as altitude decreases towards the Earth's surface",
        "The rotation of the Earth on its axis",
        "Magnetic fields in the upper ionosphere"
      ],
      "answer": "The gradual, continuous increase in the optical density and refractive index of air layers as altitude decreases towards the Earth's surface",
      "explanation": "Gravitational compression makes lower air layers denser with higher refractive index, continuously bending light towards the normal."
    },
    {
      "id": "m13_q05",
      "question": "How does hot air compare optically to cold air at the same atmospheric pressure?",
      "options": [
        "Hot air is optically denser than cold air",
        "Hot air is optically rarer (has lower refractive index) than cold air",
        "Both have identical refractive indices",
        "Hot air completely blocks light rays"
      ],
      "answer": "Hot air is optically rarer (has lower refractive index) than cold air",
      "explanation": "Thermal expansion lowers the density of hot air, reducing the number of air molecules per volume and thus lowering its refractive index."
    },
    {
      "id": "m13_q06",
      "question": "Why do objects viewed through the turbulent hot air rising above a campfire or radiator appear to waver and flicker randomly?",
      "options": [
        "The objects are physically vibrating",
        "The refractive index of turbulent rising hot air fluctuates rapidly and irregularly, causing the apparent path of refracted light rays to shift continuously",
        "The fire creates radioactive waves",
        "Our eyes blink faster near fire"
      ],
      "answer": "The refractive index of turbulent rising hot air fluctuates rapidly and irregularly, causing the apparent path of refracted light rays to shift continuously",
      "explanation": "Turbulent convection mixing hot and cold air causes continuous fluctuations in optical density, creating a shimmering visual waiver."
    },
    {
      "id": "m13_q07",
      "question": "Does atmospheric refraction occur on the surface of the Moon?",
      "options": [
        "Yes, twice as strongly as on Earth",
        "No, because the Moon has no atmosphere (vacuum surrounds its surface)",
        "Only during a lunar eclipse",
        "Only inside deep lunar craters"
      ],
      "answer": "No, because the Moon has no atmosphere (vacuum surrounds its surface)",
      "explanation": "Atmospheric refraction requires an optical gas medium; the Moon's lack of atmosphere means light travels in unbent straight lines."
    },
    {
      "id": "m13_q08",
      "question": "As starlight enters the Earth's atmosphere, along what geometric trajectory does it travel towards a ground observer?",
      "options": ["A zigzag line", "A continuously downward-curving path towards the normal", "A perfect circle", "A horizontal wave"],
      "answer": "A continuously downward-curving path towards the normal",
      "explanation": "Passing through continuously denser layers of air causes incremental bending towards the vertical normal, creating a smooth downward curve."
    },
    {
      "id": "m13_q09",
      "question": "Which of the following optical phenomena is NOT caused by atmospheric refraction?",
      "options": [
        "Advanced sunrise and delayed sunset",
        "Twinkling of stars",
        "Dispersion of white light by a glass prism",
        "Apparent higher position of stars"
      ],
      "answer": "Dispersion of white light by a glass prism",
      "explanation": "Dispersion in a glass prism is an artificial laboratory refraction through glass, not an atmospheric refraction phenomenon."
    },
    {
      "id": "m13_q10",
      "question": "Why does a swimming pool appear shallower than its actual geometric depth?",
      "options": [
        "Due to atmospheric pressure on water",
        "Due to refraction of light emerging from water (denser) into air (rarer), bending away from the normal",
        "Water absorbs 50% of the light",
        "The tiles expand when wet"
      ],
      "answer": "Due to refraction of light emerging from water (denser) into air (rarer), bending away from the normal",
      "explanation": "Light rays emerging into air bend away from the normal, making the pool bottom appear raised (Apparent depth = Real depth / n)."
    }
  ]
}
modules_11_to_20.append(m13)

# ==========================================
# Module 14: Apparent Position of Stars & Oval Sun
# ==========================================
m14 = {
  "id": "m14", "moduleNumber": 14,
  "title": "Apparent Position of Stars & Oval Flattening of the Sun",
  "tagline": "Why stars appear higher than their true position, and differential refraction flattening the solar disc.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Why Stars Appear Higher Than They Actually Are</h4>
    <p>When starlight from outer space enters the Earth's atmosphere, it travels from vacuum (optically rarest) into air layers of increasing optical density. At each layer, it bends progressively towards the normal, following a downward-curving path.</p>
    <p>Because the human eye and brain trace incoming light along the <strong>tangent to the ray path at the point of entry into the eye</strong>, the star appears to be situated higher in the night sky than its actual geometric position ($S' > S$). The apparent position of a star is always slightly elevated relative to its true position, with the displacement being greatest near the horizon ($\sim 0.5^\circ$).</p>

    <h4>2. Apparent Flattening (Oval Shape) of the Sun at Sunrise and Sunset</h4>
    <p>At sunrise and sunset, the Sun rests near the horizon, where atmospheric refraction is at its maximum. Consider the solar disc:</p>
    <ul>
      <li>Light rays originating from the <strong>lower edge (bottom limb)</strong> of the Sun travel through denser, lower atmospheric layers than rays from the <strong>upper edge (top limb)</strong>.</li>
      <li>Consequently, the lower edge suffers significantly greater upward refraction (~$35'$) than the upper edge (~$29'$).</li>
      <li>This differential upward shift compresses the vertical diameter of the solar disc by about $6'$, while the horizontal diameter remains unaffected.</li>
      <li>Hence, the Sun appears distinctly <strong>oval or flattened vertically</strong> rather than circular when viewed near the horizon.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Atmospheric refraction bends starlight downwards, making stars appear higher than their true position.",
    "The angular shift is greatest for celestial objects near the horizon (roughly $0.5^\\circ$ or $30'$).",
    "Differential refraction between top and bottom edges causes the Sun and Moon to appear oval/flattened near the horizon."
  ],
  "keyNotes": [
    "At the zenith (directly overhead at 90°), light strikes the atmosphere at normal incidence (i = 0°), resulting in zero atmospheric refraction and zero displacement."
  ],
  "questions": [
    get_bank_q(63, "m14_q01"),
    get_bank_q(64, "m14_q02"),
    get_bank_q(72, "m14_q03"),
    {
      "id": "m14_q04",
      "question": "Why does a star appear slightly higher in the sky than its actual true geometric position?",
      "options": [
        "Light travels faster near the ground",
        "Continuous atmospheric refraction bends starlight downwards towards the normal, and the eye traces back along the tangent",
        "Gravitational pull of the Moon lifts the light",
        "Stars rise during the night"
      ],
      "answer": "Continuous atmospheric refraction bends starlight downwards towards the normal, and the eye traces back along the tangent",
      "explanation": "Downward bending causes incoming rays to arrive at a steeper angle; tracing backward projects the apparent position higher in the sky."
    },
    {
      "id": "m14_q05",
      "question": "Why does the Sun appear oval and vertically flattened at sunrise and sunset?",
      "options": [
        "The Sun actually shrinks in the morning",
        "Differential atmospheric refraction causes the lower edge of the solar disc to be refracted upwards more than the upper edge",
        "Solar flares stretch the Sun sideways",
        "Cloud shadows cut off the top and bottom"
      ],
      "answer": "Differential atmospheric refraction causes the lower edge of the solar disc to be refracted upwards more than the upper edge",
      "explanation": "The lower limb passes through thicker air and is refracted upward more than the upper limb, vertically compressing the disc into an oval."
    },
    {
      "id": "m14_q06",
      "question": "Where in the sky is atmospheric refraction completely ZERO for a celestial body?",
      "options": [
        "At the horizon (0° elevation)",
        "Directly overhead at the zenith (90° elevation, normal incidence)",
        "At 45° elevation",
        "Only at the South Pole"
      ],
      "answer": "Directly overhead at the zenith (90° elevation, normal incidence)",
      "explanation": "At the zenith, incoming light strikes atmospheric layers perpendicularly (∠i = 0°), passing straight through without refraction."
    },
    {
      "id": "m14_q07",
      "question": "By approximately how many angular minutes (or degrees) is a star near the horizon displaced upwards by atmospheric refraction?",
      "options": ["0.5° (~30 to 35 arcminutes)", "5°", "45°", "0.001°"],
      "answer": "0.5° (~30 to 35 arcminutes)",
      "explanation": "Atmospheric refraction at the horizon lifts celestial objects by about 34-35 arcminutes (roughly half a degree, equal to the Sun's diameter)."
    },
    {
      "id": "m14_q08",
      "question": "Would stars appear elevated above their actual positions if viewed from an astronomical observatory on the Moon?",
      "options": [
        "Yes, by twice as much",
        "No, because the Moon lacks an atmosphere, so starlight travels in perfectly straight lines without refraction",
        "Only during solar eclipses",
        "Yes, due to lunar gravity"
      ],
      "answer": "No, because the Moon lacks an atmosphere, so starlight travels in perfectly straight lines without refraction",
      "explanation": "Without an atmosphere, there is no refractive index gradient, so apparent and true star positions are perfectly identical."
    },
    {
      "id": "m14_q09",
      "question": "Does the full Moon also appear vertically flattened when it rises just above the horizon? Why or why not?",
      "options": [
        "No, only the Sun flattens because it emits its own light",
        "Yes, because differential atmospheric refraction acts identically on all extended optical objects near the horizon",
        "The Moon flattens horizontally instead",
        "Only during a blood moon"
      ],
      "answer": "Yes, because differential atmospheric refraction acts identically on all extended optical objects near the horizon",
      "explanation": "Atmospheric refraction operates on all incoming light regardless of whether the source is the Sun or reflected moonlight."
    },
    {
      "id": "m14_q10",
      "question": "What happens to the apparent size of the Sun at noon when viewed directly overhead?",
      "options": [
        "It appears oval",
        "It appears perfectly circular because atmospheric refraction is symmetric and minimal at high angles",
        "It disappears",
        "It appears square"
      ],
      "answer": "It appears perfectly circular because atmospheric refraction is symmetric and minimal at high angles",
      "explanation": "Near the zenith, rays strike normally (i ≈ 0°), with zero differential refraction, presenting an undistorted circular disc."
    }
  ]
}
modules_11_to_20.append(m14)

# ==========================================
# Module 15: Twinkling of Stars vs Planets
# ==========================================
m15 = {
  "id": "m15", "moduleNumber": 15,
  "title": "Twinkling of Stars vs The Non-Twinkling of Planets",
  "tagline": "Point sources vs extended optical sources, and turbulent refractive fluctuations.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Why Do Stars Twinkle?</h4>
    <p>Stars are colossal thermonuclear fireballs located trillions of kilometres away from Earth. Because of this vast astronomical distance, stars act effectively as <strong>point sources of light</strong> to an observer on Earth:</p>
    <ul>
      <li>As the narrow beam of starlight traverses the Earth's atmosphere, it encounters constantly shifting convection currents of hot and cold air, causing continuous, random fluctuations in atmospheric optical density and refractive index.</li>
      <li>Consequently, the apparent path of the starlight fluctuates rapidly from moment to moment.</li>
      <li>The quantity of starlight entering the pupil increases and decreases continuously: when more light enters, the star appears bright; an instant later, when rays deviate away from the pupil, the star dims.</li>
      <li>This rapid, dynamic fluctuation in brightness and apparent position is what we perceive as <strong>twinkling</strong> (scintillation).</li>
    </ul>

    <h4>2. Why Do Planets NOT Twinkle?</h4>
    <p>Planets (such as Venus, Jupiter, and Mars) are much closer to Earth than distant stars:</p>
    <ul>
      <li>Consequently, a planet acts not as a single point source, but as an <strong>extended source</strong>—a dense collection of millions of adjacent point-sized light emitters.</li>
      <li>Although light from each individual point fluctuates randomly due to atmospheric turbulence, the fluctuations from different points <strong>cancel each other out</strong>: when some points dim, neighboring points brighten.</li>
      <li>The net total amount of light entering the human eye from all points combined remains virtually constant at every instant.</li>
      <li>Therefore, <strong>planets shine with a steady, non-twinkling luster</strong>.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Stars twinkle because they are point sources whose narrow rays are shifted by turbulent atmospheric refraction.",
    "Twinkling involves rapid fluctuations in both apparent brightness and apparent position.",
    "Planets do not twinkle because they are extended sources; fluctuations from individual points average out to zero."
  ],
  "keyNotes": [
    "In outer space (e.g., to astronauts on the International Space Station or the Hubble Space Telescope), stars DO NOT twinkle because there is zero atmosphere; they shine with steady, piercing brightness against a jet-black sky."
  ],
  "questions": [
    get_bank_q(38, "m15_q01"),
    get_bank_q(39, "m15_q02"),
    get_bank_q(65, "m15_q03"),
    {
      "id": "m15_q04",
      "question": "What is the primary reason why stars appear to twinkle on a clear night?",
      "options": [
        "The star's internal nuclear fuel pulses every second",
        "Fluctuating atmospheric refraction through dynamic, moving air layers of varying optical density shifts the narrow beam of starlight entering the eye",
        "The Earth rotates at supersonic speed",
        "Meteors constantly cross the star's beam"
      ],
      "answer": "Fluctuating atmospheric refraction through dynamic, moving air layers of varying optical density shifts the narrow beam of starlight entering the eye",
      "explanation": "Atmospheric turbulence continuously changes the local refractive index, causing rapid fluctuations in brightness entering the pupil."
    },
    {
      "id": "m15_q05",
      "question": "Why do planets in our solar system NOT twinkle like distant stars?",
      "options": [
        "Planets emit their own laser light",
        "Planets are much closer to Earth and act as extended sources whose individual point fluctuations average out to zero",
        "Planets are made of rock that absorbs atmospheric shaking",
        "Planetary light does not undergo refraction"
      ],
      "answer": "Planets are much closer to Earth and act as extended sources whose individual point fluctuations average out to zero",
      "explanation": "As extended sources consisting of millions of point emitters, random dimming and brightening across the disc average out to constant total light."
    },
    {
      "id": "m15_q06",
      "question": "If an astronaut looks at stars from the surface of the Moon or from the International Space Station, will the stars twinkle?",
      "options": [
        "Yes, they twinkle twice as violently",
        "No, they shine with a steady, unwavering brightness because there is no atmosphere to cause refractive fluctuations",
        "They turn green",
        "They become invisible"
      ],
      "answer": "No, they shine with a steady, unwavering brightness because there is no atmosphere to cause refractive fluctuations",
      "explanation": "Without an atmosphere, light reaches the eye undeviated, eliminating scintillation (twinkling)."
    },
    {
      "id": "m15_q07",
      "question": "Which of the following celestial bodies in the night sky shines with a steady, non-twinkling light?",
      "options": ["Sirius (the Dog Star)", "Venus (the Evening Star)", "Polaris (the North Star)", "Betelgeuse"],
      "answer": "Venus (the Evening Star)",
      "explanation": "Venus is a planet (an extended optical source), so its light does not twinkle like true distant stars."
    },
    {
      "id": "m15_q08",
      "question": "Why did NASA launch the Hubble Space Telescope into orbit above Earth's atmosphere instead of placing it on a mountaintop?",
      "options": [
        "To get closer to the Sun to stay warm",
        "To completely bypass atmospheric refraction, turbulence, and scattering, obtaining crystal-clear undistorted images",
        "To protect it from rain",
        "Because it was too large for a truck"
      ],
      "answer": "To completely bypass atmospheric refraction, turbulence, and scattering, obtaining crystal-clear undistorted images",
      "explanation": "Operating above the atmosphere eliminates astronomical seeing distortions, twinkling, and atmospheric light absorption."
    },
    {
      "id": "m15_q09",
      "question": "What two physical characteristics of starlight fluctuate rapidly to create the visual sensation of twinkling?",
      "options": [
        "Apparent brightness (intensity) and apparent position",
        "Colour temperature and mass",
        "Radio wavelength and sound",
        "Nuclear composition and volume"
      ],
      "answer": "Apparent brightness (intensity) and apparent position",
      "explanation": "Shifting atmospheric air packets cause both the apparent position and the photon flux entering the pupil to fluctuate rapidly."
    },
    {
      "id": "m15_q10",
      "question": "In astronomical terminology, what is the atmospheric turbulence that degrades telescope resolution called?",
      "options": ["Atmospheric seeing", "Luminescence", "Photoelectric effect", "Compton scattering"],
      "answer": "Atmospheric seeing",
      "explanation": "'Astronomical seeing' refers to the blurring and twinkling of astronomical objects caused by turbulent atmospheric refraction."
    }
  ]
}
modules_11_to_20.append(m15)

# ==========================================
# Module 16: Advanced Sunrise & Delayed Sunset
# ==========================================
m16 = {
  "id": "m16", "moduleNumber": 16,
  "title": "Advanced Sunrise & Delayed Sunset: The 4-Minute Daytime Extension",
  "tagline": "How atmospheric refraction lifts the Sun above the horizon, extending daily daylight by 4 minutes.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. What Constitutes Actual vs Apparent Sunrise?</h4>
    <p>In astronomy:</p>
    <ul>
      <li><strong>Actual Sunrise:</strong> The precise physical moment when the upper edge of the solar disc crosses the geometric horizontal plane of the observer.</li>
      <li><strong>Apparent Sunrise:</strong> The moment the Sun becomes visually visible to a ground observer.</li>
    </ul>

    <h4>2. The 2-Minute Phenomenon at Sunrise</h4>
    <p>When the Sun is still about <strong>$0.5^\circ$ below the horizon</strong>:</p>
    <ul>
      <li>Light rays emitted by the sub-horizon Sun travel through the vacuum of space and strike the upper layers of Earth's atmosphere obliquely.</li>
      <li>As the rays travel through increasingly dense atmospheric layers, they continuously bend <strong>downwards towards the normal</strong>.</li>
      <li>These curved rays bend over the curve of the Earth and enter the eye of a ground observer.</li>
      <li>The observer traces the rays along the tangent, seeing the virtual image of the Sun <strong>elevated above the horizon</strong>.</li>
      <li>The Sun therefore becomes visible approximately <strong>2 minutes before actual sunrise</strong>!</li>
    </ul>

    <h4>3. The 2-Minute Phenomenon at Sunset</h4>
    <p>Similarly, at dusk, when the Sun has already dipped $0.5^\circ$ below the geometric horizon, atmospheric refraction continues to bend its rays over the horizon. The Sun remains visually visible for approximately <strong>2 minutes after actual sunset</strong>.</p>

    <h4>4. Total Daytime Extension</h4>
    <p>Because of atmospheric refraction:</p>
    $$\text{Total Daily Daylight Extension} = 2\text{ mins (morning)} + 2\text{ mins (evening)} = \mathbf{4\text{ minutes}}$$
    <p>Every single day on Earth is approximately 4 minutes longer than it would be on an airless planet of identical size and rotation speed.</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "The Sun is visible ~2 minutes before actual sunrise and ~2 minutes after actual sunset.",
    "Caused by atmospheric refraction bending light rays over the curvature of the Earth.",
    "Total daylight duration on Earth is extended by approximately 4 minutes every day."
  ],
  "keyNotes": [
    "The angular shift caused by atmospheric refraction at the horizon is approximately $0.5^\\circ$, which matches the angular diameter of the solar disc (~32 arcminutes). Since Earth rotates $360^\\circ$ in 24 hours ($1^\\circ = 4\\text{ mins}$), a $0.5^\\circ$ shift corresponds to exactly $0.5 \\times 4 = 2\\text{ minutes}$!"
  ],
  "questions": [
    get_bank_q(66, "m16_q01"),
    get_bank_q(67, "m16_q02"),
    get_bank_q(73, "m16_q03"),
    {
      "id": "m16_q04",
      "question": "By how many minutes is sunrise advanced and sunset delayed due to atmospheric refraction?",
      "options": ["About 2 minutes each", "About 10 minutes each", "About 30 seconds each", "About 1 hour each"],
      "answer": "About 2 minutes each",
      "explanation": "Atmospheric refraction causes the Sun to appear about 2 minutes before true geometric sunrise and linger about 2 minutes after true sunset."
    },
    {
      "id": "m16_q05",
      "question": "What is the total net extension in the duration of daily daylight on Earth caused by atmospheric refraction?",
      "options": ["2 minutes", "4 minutes", "8 minutes", "Zero"],
      "answer": "4 minutes",
      "explanation": "With 2 minutes gained at sunrise plus 2 minutes gained at sunset, the total daytime extension is 4 minutes."
    },
    {
      "id": "m16_q06",
      "question": "What is the angular displacement of the Sun near the horizon produced by Earth's atmospheric refraction?",
      "options": ["About 0.5° (roughly equal to the angular diameter of the Sun)", "About 10°", "About 45°", "0.01°"],
      "answer": "About 0.5° (roughly equal to the angular diameter of the Sun)",
      "explanation": "Atmospheric refraction shifts rays near the horizon by approximately 0.5° (about 32 to 34 arcminutes), matching the Sun's angular diameter."
    },
    {
      "id": "m16_q07",
      "question": "Given that the Earth rotates 360° in 24 hours, how much time does the Earth take to rotate through an angle of 0.5°?",
      "options": ["2 minutes", "4 minutes", "1 minute", "30 seconds"],
      "answer": "2 minutes",
      "explanation": "360° in 1440 minutes => 1° takes 4 minutes. Therefore, 0.5° takes 0.5 × 4 = 2 minutes."
    },
    {
      "id": "m16_q08",
      "question": "If the Earth had no atmosphere whatsoever, how would the duration of a day (daylight) change?",
      "options": [
        "It would be shorter by about 4 minutes",
        "It would be longer by 4 minutes",
        "It would become 48 hours long",
        "There would be perpetual night"
      ],
      "answer": "It would be shorter by about 4 minutes",
      "explanation": "Without atmospheric refraction, the 2-minute advanced sunrise and 2-minute delayed sunset would disappear, shortening daylight by 4 minutes."
    },
    {
      "id": "m16_q09",
      "question": "When we visually observe the Sun setting at the horizon at dusk, where is the Sun's true physical position?",
      "options": [
        "Already about 0.5° below the geometric horizon",
        "Directly at 45° above the horizon",
        "At the zenith",
        "Inside the Earth's core"
      ],
      "answer": "Already about 0.5° below the geometric horizon",
      "explanation": "Due to upward atmospheric bending, the physical Sun has already set below the horizon while its virtual image remains visible."
    },
    {
      "id": "m16_q10",
      "question": "Why does actual sunrise differ from apparent sunrise?",
      "options": [
        "Because of clock errors",
        "Actual sunrise refers to geometric crossing of the horizon; apparent sunrise is when the Sun becomes visually visible due to refraction",
        "Because the Sun travels in reverse in the morning",
        "Because the Moon blocks sunrise"
      ],
      "answer": "Actual sunrise refers to geometric crossing of the horizon; apparent sunrise is when the Sun becomes visually visible due to refraction",
      "explanation": "Actual sunrise is defined geometrically; apparent sunrise is the optical perception made possible by atmospheric bending."
    }
  ]
}
modules_11_to_20.append(m16)

# ==========================================
# Module 17: Scattering of Light & Tyndall Effect
# ==========================================
m17 = {
  "id": "m17", "moduleNumber": 17,
  "title": "Scattering of Light & The Tyndall Effect",
  "tagline": "Colloidal suspensions, optical path illumination, and smoke/mist in a dense forest canopy.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. What is Scattering of Light?</h4>
    <p>When a beam of light travels through a medium containing suspended microscopic particles, the particles absorb the incident radiant energy and immediately re-radiate (scatter) it in all directions. This phenomenon is called the <strong>scattering of light</strong>.</p>

    <h4>2. True Solutions vs Colloidal Solutions</h4>
    <ul>
      <li><strong>True Solution (e.g., Salt or Sugar in Water):</strong> The solute molecules are extremely tiny ($< 1\text{ nm}$ in diameter). They are too small to scatter visible light; a light beam passing through a true solution is <strong>completely invisible from the side</strong>.</li>
      <li><strong>Colloidal Solution (e.g., Milk, Starch Solution, Smoke in Air):</strong> Colloidal particle sizes range between $1\text{ nm}$ and $1000\text{ nm}$, which is comparable to the wavelength of visible light ($400\text{--}700\text{ nm}$). These particles scatter light strongly, making the beam's optical path distinctly illuminated.</li>
    </ul>

    <h4>3. The Tyndall Effect</h4>
    <p>The phenomenon of the <strong>scattering of light by colloidal particles</strong>, rendering the path of the light beam visible, is called the <strong>Tyndall Effect</strong> (discovered by British physicist John Tyndall in 1859).</p>

    <h4>4. Real-World Examples of the Tyndall Effect</h4>
    <ol>
      <li><strong>Sunbeam through a Window:</strong> When sunlight enters a dark, dusty room through a small hole, the path of the beam becomes brilliantly visible due to scattering by suspended dust and smoke particles.</li>
      <li><strong>Dense Forest Canopy:</strong> When sunlight filters down through the mist and foliage of a dense rainforest canopy, distinct shafts of light are illuminated by tiny water droplets suspended in the mist.</li>
      <li><strong>Car Headlights in Fog:</strong> Headlight beams become brightly illuminated cones of light due to scattering by microscopic fog droplets.</li>
    </ol>
  </div>
</div>
""",
  "pointsToRemember": [
    "Scattering is the absorption and re-radiation of light in all directions by suspended particles.",
    "Tyndall Effect: The scattering of light by colloidal particles, making the trajectory of the light beam visible.",
    "True solutions do not show the Tyndall effect; colloids and suspensions exhibit prominent Tyndall scattering."
  ],
  "keyNotes": [
    "The color of scattered light depends critically on particle size: very fine sub-microscopic particles scatter short blue wavelengths; very large particles scatter all wavelengths equally, appearing white."
  ],
  "questions": [
    get_bank_q(68, "m17_q01"),
    get_bank_q(69, "m17_q02"),
    get_bank_q(74, "m17_q03"),
    {
      "id": "m17_q04",
      "question": "What is the phenomenon of scattering of light by colloidal particles that makes the path of a light beam visible called?",
      "options": ["Raman effect", "Tyndall effect", "Photoelectric effect", "Doppler effect"],
      "answer": "Tyndall effect",
      "explanation": "The Tyndall effect describes the scattering of light by colloidal particles that illuminates the path of a light beam."
    },
    {
      "id": "m17_q05",
      "question": "Why does a laser beam passing through a beaker of pure salt water remain invisible from the side, while it lights up brightly in a beaker containing a few drops of milk in water?",
      "options": [
        "Salt water absorbs all laser photons",
        "Salt solution is a true solution whose particles are too small (<1 nm) to scatter light, whereas milk is a colloidal suspension whose larger particles scatter light",
        "Milk emits laser radiation",
        "Salt conducts electricity"
      ],
      "answer": "Salt solution is a true solution whose particles are too small (<1 nm) to scatter light, whereas milk is a colloidal suspension whose larger particles scatter light",
      "explanation": "Colloidal particles in milk (fat globules and proteins) are large enough to scatter visible light (Tyndall effect), unlike tiny ions in a true solution."
    },
    {
      "id": "m17_q06",
      "question": "Which of the following is a classic natural demonstration of the Tyndall effect?",
      "options": [
        "Sunlight filtering through mist in the canopy of a dense forest",
        "Total internal reflection in an optical fibre",
        "Dispersion of white light by a glass prism",
        "A plane mirror reflection"
      ],
      "answer": "Sunlight filtering through mist in the canopy of a dense forest",
      "explanation": "Water droplets in the mist scatter sunlight, illuminating distinct rays filtering through tree branches (Tyndall effect)."
    },
    {
      "id": "m17_q07",
      "question": "Why does a car's headlight beam become a blinding white cone in thick fog?",
      "options": [
        "Fog absorbs the car battery power",
        "Suspended water droplets in fog strongly scatter headlight beams in all directions, illuminating the path and causing glare",
        "Fog speeds up light",
        "Headlights turn into laser beams in cold air"
      ],
      "answer": "Suspended water droplets in fog strongly scatter headlight beams in all directions, illuminating the path and causing glare",
      "explanation": "Microscopic water droplets in fog act as colloidal scatterers, spreading light into a bright cone that reflects back at the driver."
    },
    {
      "id": "m17_q08",
      "question": "When suspended particles in an optical medium are significantly LARGER than the wavelength of visible light, what colour does the scattered light appear?",
      "options": ["Deep violet", "Pure blue", "White", "Pitch black"],
      "answer": "White",
      "explanation": "Large particles (such as water droplets in clouds or thick dust) scatter all visible wavelengths roughly equally, appearing white."
    },
    {
      "id": "m17_q09",
      "question": "Who experimentally discovered the scattering of light by colloidal suspensions in 1859?",
      "options": ["John Tyndall", "C.V. Raman", "Lord Rayleigh", "Heinrich Hertz"],
      "answer": "John Tyndall",
      "explanation": "British physicist John Tyndall studied the phenomenon in 1859, giving it the name Tyndall effect."
    },
    {
      "id": "m17_q10",
      "question": "Why does smoke billowing from an incense stick in a sunlit room appear distinctly bluish when viewed against a dark background?",
      "options": [
        "Incense contains blue copper dye",
        "Extremely fine sub-microscopic smoke particles preferentially scatter shorter blue wavelengths of incident sunlight",
        "Smoke cools the sunlight",
        "The incense emits UV light"
      ],
      "answer": "Extremely fine sub-microscopic smoke particles preferentially scatter shorter blue wavelengths of incident sunlight",
      "explanation": "Very fine smoke particles scatter short blue wavelengths far more efficiently than longer red wavelengths, giving smoke a bluish tint."
    }
  ]
}
modules_11_to_20.append(m17)

# ==========================================
# Module 18: Rayleigh Scattering & Blue Sky
# ==========================================
m18 = {
  "id": "m18", "moduleNumber": 18,
  "title": "Rayleigh's Scattering Law & Why the Sky Appears Blue",
  "tagline": "The inverse fourth power law I ∝ 1/λ^4, molecular scattering, and deep-space blackness.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Rayleigh's Law of Scattering</h4>
    <p>In 1871, British physicist Lord Rayleigh proved that when the size of the scattering particles ($a$) is much smaller than the wavelength of incident light ($a \ll \lambda$):</p>
    <blockquote style="background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;">
      "The intensity of scattered light ($I$) is inversely proportional to the fourth power of its wavelength ($\lambda$)."
    </blockquote>
    $$I \propto \frac{1}{\lambda^4}$$

    <h4>2. Why the Clear Sky Appears Blue</h4>
    <p>The upper atmosphere consists predominantly of gas molecules—chiefly nitrogen ($N_2$) and oxygen ($O_2$)—whose physical dimensions (~$0.2\text{--}0.3\text{ nm}$) are far smaller than the wavelength of visible light ($400\text{--}700\text{ nm}$):</p>
    <ul>
      <li>Red light has a wavelength of roughly $\lambda_\text{red} \approx 700\text{ nm}$.</li>
      <li>Blue/violet light has a wavelength of roughly $\lambda_\text{blue} \approx 400\text{ nm}$.</li>
      <li>The ratio of wavelengths is roughly $\frac{\lambda_\text{red}}{\lambda_\text{blue}} \approx 1.75$.</li>
      <li>By Rayleigh's law:
        $$\frac{I_\text{blue}}{I_\text{red}} = \left(\frac{\lambda_\text{red}}{\lambda_\text{blue}}\right)^4 \approx (1.75)^4 \approx \mathbf{10\text{ to }16\text{ times!}}$$
      </li>
      <li>Because <strong>blue and violet light are scattered nearly 16 times more strongly</strong> than red light, this scattered blue light floods our eyes from every angle of the daytime sky. (Our eyes are far more biologically sensitive to blue than violet, which is why we perceive the sky as azure blue rather than violet).</li>
    </ul>

    <h4>3. What Would the Sky Look Like Without an Atmosphere?</h4>
    <p>If the Earth had no atmosphere, there would be no gas molecules to scatter sunlight. Sunlight would travel straight to the ground, and looking in any other direction would reveal an <strong>inky pitch-black sky with shining stars even at midday</strong>—exactly what astronauts experience on the Moon or in outer space!</p>
  </div>
</div>
""",
  "pointsToRemember": [
    "Rayleigh's Scattering Law ($a \\ll \\lambda$): Intensity of scattered light $I \\propto 1/\\lambda^4$.",
    "Blue light ($\sim 400\\text{ nm}$) is scattered $\sim 16$ times more effectively than red light ($\sim 700\\text{ nm}$) by air molecules ($N_2, O_2$).",
    "Without an atmosphere, there is no scattering, so the sky appears completely black (as seen by astronauts)."
  ],
  "keyNotes": [
    "Clouds appear white because the suspended water droplets are much larger than the wavelength of light ($a \\gg \\lambda$), scattering all visible wavelengths equally."
  ],
  "questions": [
    get_bank_q(70, "m18_q01"),
    get_bank_q(75, "m18_q02"),
    get_bank_q(100, "m18_q03"),
    {
      "id": "m18_q04",
      "question": "According to Rayleigh's Law of Scattering for particles much smaller than wavelength, how does scattered light intensity (I) depend on wavelength (λ)?",
      "options": ["I ∝ λ", "I ∝ 1 / λ^2", "I ∝ 1 / λ^4", "I ∝ λ^4"],
      "answer": "I ∝ 1 / λ^4",
      "explanation": "Rayleigh scattering states that the scattered intensity is inversely proportional to the fourth power of wavelength: I ∝ 1/λ^4."
    },
    {
      "id": "m18_q05",
      "question": "Why does a clear cloudless daytime sky appear blue to an observer on Earth?",
      "options": [
        "The ocean reflects blue light into the air",
        "Air molecules (nitrogen and oxygen) are smaller than light wavelengths and scatter shorter blue wavelengths far more intensely than longer red wavelengths",
        "Ozone emits blue fluorescence",
        "Space is painted blue"
      ],
      "answer": "Air molecules (nitrogen and oxygen) are smaller than light wavelengths and scatter shorter blue wavelengths far more intensely than longer red wavelengths",
      "explanation": "By Rayleigh scattering (I ∝ 1/λ^4), blue light is scattered roughly 16 times more than red light by sub-microscopic atmospheric gas molecules."
    },
    {
      "id": "m18_q06",
      "question": "Why does the sky appear completely dark and black to an astronaut standing on the Moon during the daytime?",
      "options": [
        "The Sun does not shine on the Moon",
        "The Moon has no atmosphere, so there are no air molecules to scatter sunlight into the observer's eyes",
        "Lunar soil absorbs all reflected blue photons",
        "Astronaut helmets have dark tinted glass only"
      ],
      "answer": "The Moon has no atmosphere, so there are no air molecules to scatter sunlight into the observer's eyes",
      "explanation": "Without an atmosphere, zero scattering occurs; sunlight travels directly, leaving the surrounding sky pitch black."
    },
    {
      "id": "m18_q07",
      "question": "Although violet light has an even shorter wavelength and is scattered more than blue, why does the daytime sky appear blue rather than violet?",
      "options": [
        "Sunlight contains significantly more blue light than violet, and human retinal cones are much more sensitive to blue light than violet",
        "Violet light is 100% absorbed by nitrogen",
        "Violet light cannot penetrate glass",
        "The eye has no violet receptors"
      ],
      "answer": "Sunlight contains significantly more blue light than violet, and human retinal cones are much more sensitive to blue light than violet",
      "explanation": "Solar spectrum output peaks around blue-green, and human cone photoreceptors have much higher neural sensitivity to blue than to violet."
    },
    {
      "id": "m18_q08",
      "question": "Why do rain clouds in the sky appear white instead of blue?",
      "options": [
        "Water droplets in clouds are much larger than the wavelength of visible light and scatter all wavelengths roughly equally",
        "Clouds are made of cotton",
        "Raindrops are painted with calcium",
        "Clouds reflect white light like a plane mirror"
      ],
      "answer": "Water droplets in clouds are much larger than the wavelength of visible light and scatter all wavelengths roughly equally",
      "explanation": "When particle size a >> λ, Rayleigh's law does not apply; all visible wavelengths are scattered equally, combining to produce white."
    },
    {
      "id": "m18_q09",
      "question": "Approximately how many times more intensely is blue light (λ ≈ 400 nm) scattered compared to red light (λ ≈ 700 nm) by atmospheric gas molecules?",
      "options": ["2 times", "4 times", "About 10 to 16 times", "100 times"],
      "answer": "About 10 to 16 times",
      "explanation": "I_blue / I_red = (λ_red / λ_blue)^4 ≈ (700/400)^4 ≈ (1.75)^4 ≈ 9.4 to 16 times."
    },
    {
      "id": "m18_q10",
      "question": "At very high cruising altitudes (>15,000 metres) in a commercial jetliner, why does the sky outside the window appear distinctly dark or deep violet?",
      "options": [
        "The atmosphere is much thinner with far fewer scattering gas molecules above the aeroplane",
        "The engines emit black soot",
        "The jet flies faster than light",
        "Windows are tinted dark blue"
      ],
      "answer": "The atmosphere is much thinner with far fewer scattering gas molecules above the aeroplane",
      "explanation": "At high altitudes, most atmospheric air mass lies below the aircraft, drastically reducing scattered light from the sky above."
    }
  ]
}
modules_11_to_20.append(m18)

# ==========================================
# Module 19: Red Sunrise/Sunset & Danger Signals
# ==========================================
m19 = {
  "id": "m19", "moduleNumber": 19,
  "title": "Red Colour of the Sun at Sunrise and Sunset & Danger Signal Red Lights",
  "tagline": "Long atmospheric path length, depletion of blue rays, and red light penetration through fog.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Why the Sun Appears Red at Sunrise and Sunset</h4>
    <p>At sunrise and sunset, the Sun is situated near the horizon:</p>
    <ul>
      <li>Light rays emitted by the Sun must travel through a <strong>vastly thicker layer of the Earth's atmosphere</strong> (a much longer optical path) before reaching the observer's eyes, compared to when the Sun is overhead at noon.</li>
      <li>Along this prolonged trajectory through dense air, the shorter blue and violet wavelengths are <strong>heavily scattered away in all directions</strong> by air molecules and dust.</li>
      <li>Only the <strong>longest wavelength (red and orange light)</strong> can survive this long journey with minimal scattering and reach the observer's eyes directly.</li>
      <li>Hence, the rising and setting Sun appears a glowing, dramatic <strong>crimson red</strong>.</li>
    </ul>

    <h4>2. Why the Sun Appears White at Noon</h4>
    <p>At noon, the Sun is directly overhead at the zenith:</p>
    <ul>
      <li>Sunlight travels through the <strong>shortest possible vertical distance</strong> of the atmosphere.</li>
      <li>Only a tiny, negligible fraction of blue and violet light is scattered.</li>
      <li>Because all spectral colours reach our eyes almost intact in their original proportions, the Sun appears brilliant <strong>white</strong>.</li>
    </ul>

    <h4>3. Why Danger Signal Lights are Always RED</h4>
    <p>Danger signals on railway crossings, airport towers, high-voltage pylons, and traffic signals are universally coloured <strong>RED</strong>:</p>
    <ul>
      <li>Red light has the <strong>longest wavelength</strong> ($\lambda \approx 700\text{ nm}$) among all colours of the visible spectrum.</li>
      <li>By Rayleigh's scattering law ($I \propto 1/\lambda^4$), red light is <strong>scattered the least</strong> by smoke, fog, mist, and atmospheric aerosols.</li>
      <li>Consequently, a red signal can penetrate through thick fog and smoke over tremendous distances without losing its intensity, alerting drivers and pilots from far away.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "At sunrise/sunset, sunlight travels the maximum atmospheric path; blue is scattered away, leaving only red light.",
    "At noon, sunlight traverses the shortest atmospheric path with minimal scattering, appearing white.",
    "Danger signals are RED because red light has the longest wavelength and is scattered the least by fog and smoke."
  ],
  "keyNotes": [
    "Rayleigh scattering explains both phenomena: the sky is blue because blue light is scattered AWAY from direct sunlight into the sky, while the sunset is red because blue light was scattered OUT of the direct beam!"
  ],
  "questions": [
    get_bank_q(40, "m19_q01"),
    get_bank_q(77, "m19_q02"),
    get_bank_q(78, "m19_q03"),
    {
      "id": "m19_q04",
      "question": "Why does the Sun appear distinctly RED at sunrise and sunset?",
      "options": [
        "The Sun burns cooler in the morning",
        "Sunlight travels a much longer distance through the atmosphere near the horizon; shorter blue wavelengths are scattered away, leaving mostly red light to reach our eyes",
        "Atmospheric carbon dioxide glows red",
        "The Earth's magnetic field filters out yellow light"
      ],
      "answer": "Sunlight travels a much longer distance through the atmosphere near the horizon; shorter blue wavelengths are scattered away, leaving mostly red light to reach our eyes",
      "explanation": "Over the long horizon path, Rayleigh scattering depletes short wavelengths (blue/violet), allowing only long red wavelengths to reach the observer."
    },
    {
      "id": "m19_q05",
      "question": "Why does the Sun appear brilliant WHITE when viewed directly overhead at noon?",
      "options": [
        "The Sun turns off its red flares",
        "Sunlight travels the shortest path through the atmosphere, suffering minimal scattering of all colours",
        "Clouds absorb all infrared light",
        "The pupil turns white"
      ],
      "answer": "Sunlight travels the shortest path through the atmosphere, suffering minimal scattering of all colours",
      "explanation": "Overhead sunlight traverses minimal atmospheric thickness; very little blue is scattered, so all colours arrive balanced as white light."
    },
    {
      "id": "m19_q06",
      "question": "Why are danger signal lights on towers, tall buildings, and vehicles universally coloured RED?",
      "options": [
        "Red paint is cheapest",
        "Red light has the longest wavelength in the visible spectrum and is scattered least by fog and smoke, making it visible from the greatest distance",
        "Red light travels at double the speed of sound",
        "Red light cannot be seen by birds"
      ],
      "answer": "Red light has the longest wavelength in the visible spectrum and is scattered least by fog and smoke, making it visible from the greatest distance",
      "explanation": "Long wavelength means minimum scattering (I ∝ 1/λ^4), allowing red light to penetrate through fog and smoke over long distances."
    },
    {
      "id": "m19_q07",
      "question": "In an experiment passing white light through a sodium thiosulfate solution with dilute sulphuric acid, what colour does the transmitted light beam turn as colloidal sulphur particles precipitate?",
      "options": [
        "It turns blue, then green",
        "It turns orange-red, and finally crimson red as blue light is scattered out of the beam",
        "It becomes completely violet",
        "It turns invisible"
      ],
      "answer": "It turns orange-red, and finally crimson red as blue light is scattered out of the beam",
      "explanation": "As sulphur precipitates, fine particles scatter blue light sideways (blue tint from sides), while the directly transmitted beam turns red."
    },
    {
      "id": "m19_q08",
      "question": "During a total lunar eclipse, why does the Moon turn a dramatic coppery blood-red colour?",
      "options": [
        "The Moon catches on fire",
        "Sunlight refracted through Earth's atmosphere has its blue light scattered away, projecting only the red transmitted sunlight onto the lunar surface",
        "Martian dust settles on the Moon",
        "Iron rusts instantly on the lunar surface"
      ],
      "answer": "Sunlight refracted through Earth's atmosphere has its blue light scattered away, projecting only the red transmitted sunlight onto the lunar surface",
      "explanation": "Earth's ring of sunrises and sunsets refracts reddened light into the Earth's shadow cone, illuminating the eclipsed Moon in blood-red."
    },
    {
      "id": "m19_q09",
      "question": "Why are yellow or amber fog lights used on vehicles in heavy fog rather than violet or blue lights?",
      "options": [
        "Yellow and amber have longer wavelengths than blue, suffering far less back-scattering glare in dense fog",
        "Yellow lights use less electricity",
        "Blue light is illegal on all vehicles",
        "Yellow light dissolves water droplets"
      ],
      "answer": "Yellow and amber have longer wavelengths than blue, suffering far less back-scattering glare in dense fog",
      "explanation": "Longer wavelengths scatter less against water droplets, improving forward road visibility without blinding back-scatter glare."
    },
    {
      "id": "m19_q10",
      "question": "If a volcanic eruption injects massive quantities of very fine ash into the stratosphere, what optical sky phenomenon is famously observed at twilight?",
      "options": [
        "Intensely vibrant, prolonged crimson and violet sunsets worldwide",
        "The sky turns completely green",
        "The Sun turns blue at noon",
        "All stars stop twinkling"
      ],
      "answer": "Intensely vibrant, prolonged crimson and violet sunsets worldwide",
      "explanation": "Volcanic aerosols enhance aerosol scattering over high atmospheric path lengths, producing extraordinarily vibrant red and purple sunsets."
    }
  ]
}
modules_11_to_20.append(m19)

# ==========================================
# Module 20: Comprehensive Review & Mastery
# ==========================================
m20 = {
  "id": "m20", "moduleNumber": 20,
  "title": "Comprehensive Chapter Review: Vision Defects, Prism Dispersion & Scattering Mastery",
  "tagline": "Mastery problem-solving, defect correction formulas, and optical phenomena synthesis.",
  "readingTimeMins": 5,
  "theoryHtml": r"""
<div class="module-content">
  <div class="theory-section">
    <h4>1. Synthesis of Vision Defects & Correction</h4>
    <table class="table-bordered" style="width:100%; border-collapse:collapse; margin:10px 0;">
      <thead><tr style="background:#f1f5f9;"><th>Defect</th><th>Symptoms</th><th>Anatomical Cause</th><th>Image Location</th><th>Corrective Lens</th></tr></thead>
      <tbody>
        <tr><td><strong>Myopia</strong></td><td>Near clear, distant blurred; Far point $< \infty$</td><td>Elongated eyeball / excess curvature</td><td>In front of retina</td><td><strong>Concave lens</strong> ($P < 0$, $f = -d$)</td></tr>
        <tr><td><strong>Hypermetropia</strong></td><td>Distant clear, near blurred; Near point $> 25\text{ cm}$</td><td>Short eyeball / lens too flat</td><td>Behind retina</td><td><strong>Convex lens</strong> ($P > 0$)</td></tr>
        <tr><td><strong>Presbyopia</strong></td><td>Near point recedes past age 40</td><td>Weak ciliary muscles / hardened lens</td><td>Behind retina</td><td><strong>Bifocal lens</strong> (top concave, bottom convex)</td></tr>
        <tr><td><strong>Cataract</strong></td><td>Milky, cloudy vision</td><td>Denatured crystalline lens proteins</td><td>Scattered light</td><td><strong>Cataract surgery</strong> (IOL implant)</td></tr>
      </tbody>
    </table>

    <h4>2. Synthesis of Natural Optical Phenomena</h4>
    <ul>
      <li><strong>Rainbow:</strong> Dispersion + Internal Reflection + Refraction by water droplets.</li>
      <li><strong>Twinkling of Stars:</strong> Dynamic atmospheric refraction through turbulent density layers.</li>
      <li><strong>Advanced Sunrise & Delayed Sunset:</strong> Atmospheric refraction lifts the Sun by $0.5^\circ$ ($4\text{ mins total day extension}$).</li>
      <li><strong>Blue Sky & Red Sunset:</strong> Rayleigh scattering ($I \propto 1/\lambda^4$) by air molecules ($N_2, O_2$).</li>
      <li><strong>Danger Signal Red:</strong> Minimum scattering of long wavelength ($\lambda \approx 700\text{ nm}$) through smoke and fog.</li>
    </ul>
  </div>
</div>
""",
  "pointsToRemember": [
    "Myopia: corrected with concave lens ($f = -d$); Hypermetropia: corrected with convex lens.",
    "Atmospheric refraction explains twinkling, apparent star elevation, and 4-minute daylight extension.",
    "Rayleigh scattering ($I \\propto 1/\\lambda^4$) explains blue sky, white noon sun, red sunsets, and red danger lights."
  ],
  "keyNotes": [
    "Mastering the distinction between refraction (bending at a boundary due to speed change) and scattering (absorption and re-emission in all directions by particles) is the key to conquering Class 10 optics!"
  ],
  "questions": [
    get_bank_q(79, "m20_q01"),
    get_bank_q(81, "m20_q02"),
    get_bank_q(82, "m20_q03"),
    get_bank_q(83, "m20_q04"),
    get_bank_q(84, "m20_q05"),
    get_bank_q(85, "m20_q06"),
    get_bank_q(86, "m20_q07"),
    get_bank_q(87, "m20_q08"),
    get_bank_q(88, "m20_q09"),
    {
      "id": "m20_q10",
      "question": "A person needs a lens of power -4.5 D for correcting distant vision and a lens of power +1.5 D for correcting near vision. What are the focal lengths of the corrective lenses?",
      "options": [
        "Distant: -22.2 cm; Near: +66.7 cm",
        "Distant: -45 cm; Near: +15 cm",
        "Distant: -10 cm; Near: +20 cm",
        "Distant: -4.5 m; Near: +1.5 m"
      ],
      "answer": "Distant: -22.2 cm; Near: +66.7 cm",
      "explanation": "f_distant = 1/P = 1/(-4.5) = -0.222 m = -22.2 cm. f_near = 1/P = 1/(+1.5) = +0.667 m = +66.7 cm."
    }
  ]
}
modules_11_to_20.append(m20)

with open('scratch/ch10_part2.json', 'w', encoding='utf-8') as f:
    json.dump(modules_11_to_20, f, indent=2, ensure_ascii=False)

print(f"Successfully generated Chapter 10 Part 2 (Modules 11 to 20): {len(modules_11_to_20)} modules.")
