/* =============================================================================
   ELITE CLASSES — INTERACTIVE COURSE DATA
   Class 10 Science — Chapter 9: Light – Reflection and Refraction
   Comprehensive Curriculum: 20 Mini-Modules, 200 Questions Total
   High Educational Depth | Class 10 Student Standard | Zero Template Boilerplate
   ============================================================================= */

const COURSE_CHAPTER_9_SCIENCE = {
    "chapterId": "c10_sci_ch9",
    "chapterNumber": 9,
    "chapterTitle": "Light – Reflection and Refraction",
    "subject": "Science",
    "className": "Class 10",
    "totalModules": 20,
    "modules": [
        {
            "id": "m01",
            "moduleNumber": 1,
            "title": "Nature of Light & The Fundamental Laws of Reflection",
            "tagline": "Wave-particle duality overview, rectilinear propagation, and universal laws of reflection.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. What is Light?</h4>\n    <p><strong>Light</strong> is a form of electromagnetic radiation that induces the sensation of vision in our eyes. It travels in straight lines through a homogeneous transparent medium—a property termed the <strong>rectilinear propagation of light</strong>. In a vacuum, light propagates at its maximum universal velocity of $c \\approx 3 \\times 10^8\\text{ m/s}$.</p>\n\n    <h4>2. The Phenomenon of Reflection</h4>\n    <p>When a beam of light travelling through a medium strikes the boundary of another polished surface (such as a mirror) and is sent back into the original medium, the phenomenon is called <strong>reflection of light</strong>.</p>\n\n    <h4>3. The Two Universal Laws of Reflection</h4>\n    <p>Reflection at all surfaces—flat, curved, or irregular—obeys two fundamental laws:</p>\n    <ol>\n      <li><strong>First Law:</strong> The angle of incidence ($\\angle i$) is strictly equal to the angle of reflection ($\\angle r$):\n        $$\\angle i = \\angle r$$\n      </li>\n      <li><strong>Second Law:</strong> The incident ray, the reflected ray, and the normal to the reflecting surface at the point of incidence, all lie in the <strong>same geometric plane</strong>.</li>\n    </ol>\n\n    <h4>4. Normal Incidence ($\\angle i = 0^\\circ$)</h4>\n    <p>If a ray of light strikes a reflecting surface normally (perpendicularly, along the normal line), the angle of incidence is $\\angle i = 0^\\circ$. By the first law, the angle of reflection is also $\\angle r = 0^\\circ$. Hence, the ray retraces its exact path in the opposite direction.</p>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Light travels in straight lines (rectilinear propagation) at $3 \times 10^8\\text{ m/s}$ in vacuum.",
                "First Law of Reflection: Angle of incidence equals angle of reflection ($\\angle i = \\angle r$).",
                "Second Law of Reflection: Incident ray, reflected ray, and normal at point of incidence all lie in the same plane."
            ],
            "keyNotes": [
                "The laws of reflection apply universally to all reflecting surfaces, including plane, spherical, cylindrical, and parabolic surfaces."
            ],
            "questions": [
                {
                    "id": "m01_q01",
                    "question": "According to the first law of reflection of light, the angle of incidence (∠i) is always equal to:",
                    "options": [
                        "Angle of refraction (∠r)",
                        "Angle of reflection (∠r)",
                        "90°",
                        "Zero"
                    ],
                    "answer": "Angle of reflection (∠r)",
                    "explanation": "The first law of reflection states that the angle of incidence is always equal to the angle of reflection (∠i = ∠r) for all reflecting surfaces."
                },
                {
                    "id": "m01_q02",
                    "question": "What are the characteristic properties of an image formed by a plane mirror?",
                    "options": [
                        "Real, inverted, and enlarged",
                        "Virtual, erect, same size as the object, and laterally inverted",
                        "Real, erect, and diminished",
                        "Virtual, inverted, and diminished"
                    ],
                    "answer": "Virtual, erect, same size as the object, and laterally inverted",
                    "explanation": "A plane mirror forms a virtual, upright (erect) image of magnification m = +1, situated as far behind the mirror as the object is in front of it, and laterally inverted."
                },
                {
                    "id": "m01_q03",
                    "question": "When a ray of light travels obliquely from an optically rarer medium (air) to an optically denser medium (glass), the ray:",
                    "options": [
                        "Bends away from the normal",
                        "Bends towards the normal and slows down",
                        "Reflects back 180°",
                        "Passes without any change"
                    ],
                    "answer": "Bends towards the normal and slows down",
                    "explanation": "Entering an optically denser medium decreases light speed, causing the refracted ray to bend towards the normal."
                },
                {
                    "id": "m01_q04",
                    "question": "Why do headlights and searchlights place the incandescent filament bulb EXACTLY at the principal focus of a concave parabolic mirror?",
                    "options": [
                        "To make the bulb burn brighter",
                        "Light rays emerging from the principal focus (F) after reflection from the concave surface emerge as a powerful, non-diverging parallel beam of light traveling long distances",
                        "To focus heat inside the car",
                        "To give a colorful rainbow beam"
                    ],
                    "answer": "Light rays emerging from the principal focus (F) after reflection from the concave surface emerge as a powerful, non-diverging parallel beam of light traveling long distances",
                    "explanation": "By reversibility of light paths, rays emanating from the focus F reflect parallel to the principal axis, projecting an intense parallel search beam."
                },
                {
                    "id": "m01_q05",
                    "question": "What is the angle of reflection if a ray of light is incident perpendicular to a plane mirror?",
                    "options": [
                        "90°",
                        "45°",
                        "0°",
                        "180°"
                    ],
                    "answer": "0°",
                    "explanation": "When light strikes normally, the ray is collinear with the normal, so the angle of incidence is 0°. Hence, angle of reflection is also 0°."
                },
                {
                    "id": "m01_q06",
                    "question": "If the angle between the incident ray and the reflected ray is 80°, what is the angle of incidence?",
                    "options": [
                        "80°",
                        "40°",
                        "50°",
                        "20°"
                    ],
                    "answer": "40°",
                    "explanation": "The angle between incident and reflected rays is ∠i + ∠r. Since ∠i = ∠r, 2∠i = 80°, which gives ∠i = 40°."
                },
                {
                    "id": "m01_q07",
                    "question": "A ray of light strikes a plane mirror making a glancing angle of 35° with the mirror surface. What is the angle of reflection?",
                    "options": [
                        "35°",
                        "55°",
                        "70°",
                        "90°"
                    ],
                    "answer": "55°",
                    "explanation": "The normal is at 90° to the surface. Angle of incidence ∠i = 90° - 35° = 55°. By the law of reflection, ∠r = ∠i = 55°."
                },
                {
                    "id": "m01_q08",
                    "question": "Do the laws of reflection apply to curved (spherical) reflecting surfaces?",
                    "options": [
                        "No, they apply only to perfectly flat plane mirrors",
                        "Yes, they apply universally to all reflecting surfaces, including spherical mirrors",
                        "Only when light has a single wavelength",
                        "Only in total vacuum"
                    ],
                    "answer": "Yes, they apply universally to all reflecting surfaces, including spherical mirrors",
                    "explanation": "The laws of reflection are fundamental optical principles that hold true for all reflecting surfaces regardless of geometry."
                },
                {
                    "id": "m01_q09",
                    "question": "What is the speed of light in vacuum or dry air?",
                    "options": [
                        "3 × 10^5 m/s",
                        "3 × 10^8 m/s",
                        "3 × 10^8 km/s",
                        "332 m/s"
                    ],
                    "answer": "3 × 10^8 m/s",
                    "explanation": "The speed of light in vacuum (c) is precisely 299,792,458 m/s, approximately 3 × 10^8 m/s."
                },
                {
                    "id": "m01_q10",
                    "question": "The sharp shadow cast by an opaque object placed in front of a point light source provides direct evidence of:",
                    "options": [
                        "Diffraction of light",
                        "Rectilinear propagation of light (light travelling in straight lines)",
                        "Total internal reflection",
                        "Dispersion of white light"
                    ],
                    "answer": "Rectilinear propagation of light (light travelling in straight lines)",
                    "explanation": "The formation of sharp shadows (umbra) demonstrates that light travels along straight-line paths."
                }
            ]
        },
        {
            "id": "m02",
            "moduleNumber": 2,
            "title": "Image Formation by Plane Mirrors & Lateral Inversion",
            "tagline": "Virtual, erect, equal-sized images, object-image distance symmetry, and lateral reversal.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Image Formation by a Plane Mirror</h4>\n    <p>A <strong>plane mirror</strong> is a flat, highly polished reflecting surface (typically a glass plate coated on the rear side with a thin film of silver or aluminium protected by red lead oxide paint). When an object is placed in front of a plane mirror, rays diverge from each point of the object, reflect according to the laws of reflection, and appear to diverge from a point behind the mirror.</p>\n\n    <h4>2. Characteristics of Images Formed by Plane Mirrors</h4>\n    <ul>\n      <li><strong>Virtual and Erect:</strong> The image cannot be caught on a physical screen because reflected rays do not actually intersect; they merely appear to originate from behind the mirror.</li>\n      <li><strong>Size Equality ($h' = h$):</strong> The height of the image is strictly equal to the height of the object (magnification $m = +1$).</li>\n      <li><strong>Equidistant Property ($v = -u$):</strong> The distance of the image behind the mirror is exactly equal to the distance of the object in front of the mirror.</li>\n      <li><strong>Lateral Inversion:</strong> The left side of the object appears as the right side of the image, and vice-versa.</li>\n    </ul>\n\n    <h4>3. Practical Consequence: The AMBULANCE Sign</h4>\n    <p>Because of lateral inversion, the word <strong>\"AMBULANCE\"</strong> is painted backwards ($\\text{ƎƆИA⅃UBMA}$) on emergency vehicles. A driver looking in the rear-view mirror reads the laterally inverted word as normally oriented, allowing immediate right-of-way.</p>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Images formed by a plane mirror are always virtual, erect, and equal in size to the object ($m = +1$).",
                "Image distance behind the plane mirror equals object distance in front of the mirror ($v = u$).",
                "Lateral inversion causes the left and right sides of the image to appear reversed."
            ],
            "keyNotes": [
                "To view one's full vertical height in a plane mirror, the mirror must have a minimum vertical length equal to at least half of the person's height ($H/2$)."
            ],
            "questions": [
                {
                    "id": "m02_q01",
                    "question": "A spherical mirror whose reflecting surface is curved inwards (towards the centre of the sphere) is called a:",
                    "options": [
                        "Convex mirror",
                        "Concave mirror",
                        "Plane mirror",
                        "Cylindrical mirror"
                    ],
                    "answer": "Concave mirror",
                    "explanation": "A concave mirror has its reflecting surface curved inwards towards the centre of curvature."
                },
                {
                    "id": "m02_q02",
                    "question": "When a ray of light travels obliquely from an optically denser medium (glass) to an optically rarer medium (air), the ray:",
                    "options": [
                        "Bends towards the normal",
                        "Bends away from the normal and speeds up",
                        "Stops completely",
                        "Turns into sound"
                    ],
                    "answer": "Bends away from the normal and speeds up",
                    "explanation": "Entering a rarer medium accelerates light speed, bending the refracted ray away from the normal."
                },
                {
                    "id": "m02_q03",
                    "question": "An object is placed at a distance of 10 cm in front of a concave mirror of focal length 15 cm. What is the position (v), nature, and magnification of the image?",
                    "options": [
                        "v = -30 cm; Real and inverted; m = -3",
                        "v = +30 cm (behind mirror); Virtual and erect; m = +3",
                        "v = +15 cm; Virtual and erect; m = +1",
                        "v = -6 cm; Real and inverted; m = -0.6"
                    ],
                    "answer": "v = +30 cm (behind mirror); Virtual and erect; m = +3",
                    "explanation": "1/v = 1/f - 1/u = 1/(-15) - 1/(-10) = -1/15 + 1/10 = 1/30 ⇒ v = +30 cm. Magnification m = -v/u = -(+30)/(-10) = +3 (Virtual, erect, 3x magnified)."
                },
                {
                    "id": "m02_q04",
                    "question": "What is the linear magnification produced by a plane mirror?",
                    "options": [
                        "-1",
                        "+1",
                        "Greater than +1",
                        "Less than 1"
                    ],
                    "answer": "+1",
                    "explanation": "A plane mirror forms an erect image (positive sign) of the exact same size as the object (h' = h), so magnification m = +h/h = +1."
                },
                {
                    "id": "m02_q05",
                    "question": "If an object is placed 30 cm in front of a plane mirror, what is the distance between the object and its virtual image?",
                    "options": [
                        "30 cm",
                        "60 cm",
                        "15 cm",
                        "0 cm"
                    ],
                    "answer": "60 cm",
                    "explanation": "The image is formed 30 cm behind the mirror. The total distance between object and image is 30 cm + 30 cm = 60 cm."
                },
                {
                    "id": "m02_q06",
                    "question": "An object moves towards a stationary plane mirror at a speed of 2 m/s. At what speed does the image approach the object?",
                    "options": [
                        "2 m/s",
                        "4 m/s",
                        "1 m/s",
                        "0 m/s"
                    ],
                    "answer": "4 m/s",
                    "explanation": "As the object moves at speed v towards the mirror, the image also moves at speed v towards the mirror from the other side, so relative closing speed is 2v = 4 m/s."
                },
                {
                    "id": "m02_q07",
                    "question": "Why is the word 'AMBULANCE' written in reverse lettering on the front of emergency hospital vehicles?",
                    "options": [
                        "It is a foreign language tradition",
                        "So drivers viewing it in their rear-view mirrors read it upright due to lateral inversion",
                        "To prevent glare from oncoming headlights",
                        "It was a printing mistake that became standard"
                    ],
                    "answer": "So drivers viewing it in their rear-view mirrors read it upright due to lateral inversion",
                    "explanation": "Lateral inversion in the rear-view mirror flips the reverse lettering back to its readable format, alerting drivers immediately."
                },
                {
                    "id": "m02_q08",
                    "question": "What is the minimum vertical height of a plane mirror required for a person of height 180 cm to view their complete reflection?",
                    "options": [
                        "180 cm",
                        "90 cm",
                        "60 cm",
                        "45 cm"
                    ],
                    "answer": "90 cm",
                    "explanation": "By geometric ray tracing, a person needs a plane mirror of at least half their height (H/2 = 180/2 = 90 cm) to see their full reflection."
                },
                {
                    "id": "m02_q09",
                    "question": "What is the focal length of a flat plane mirror?",
                    "options": [
                        "Zero",
                        "Infinity",
                        "1 metre",
                        "Negative 25 cm"
                    ],
                    "answer": "Infinity",
                    "explanation": "A plane mirror can be considered a spherical mirror with an infinitely large radius of curvature (R = ∞). Hence f = R/2 = ∞."
                },
                {
                    "id": "m02_q10",
                    "question": "Which of the following optical devices utilizes multiple reflections between two parallel plane mirrors inclined at 45° to see over obstacles?",
                    "options": [
                        "Kaleidoscope",
                        "Periscope",
                        "Compound microscope",
                        "Astronomical telescope"
                    ],
                    "answer": "Periscope",
                    "explanation": "A periscope uses two plane mirrors oriented parallel to each other at 45° angles to reflect light around obstructions or submarine periscopes."
                }
            ]
        },
        {
            "id": "m03",
            "moduleNumber": 3,
            "title": "Spherical Mirrors: Concave & Convex Geometry & Key Parameters",
            "tagline": "Curved reflecting surfaces, pole, centre of curvature, radius of curvature, and principal axis.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. What is a Spherical Mirror?</h4>\n    <p>A <strong>spherical mirror</strong> is a reflecting mirror whose polished surface forms a portion of a hollow sphere of glass:</p>\n    <ul>\n      <li><strong>Concave Mirror (Converging Mirror):</strong> The reflecting surface is curved <em>inwards</em> (towards the centre of the sphere). The outer bulging surface is silvered and painted.</li>\n      <li><strong>Convex Mirror (Diverging Mirror):</strong> The reflecting surface is curved <em>outwards</em> (bulges away from the centre of the sphere). The inner hollow surface is silvered.</li>\n    </ul>\n\n    <h4>2. Essential Geometric Terminology</h4>\n    <ul>\n      <li><strong>Pole ($P$):</strong> The geometric centre of the spherical reflecting surface.</li>\n      <li><strong>Centre of Curvature ($C$):</strong> The centre of the hollow glass sphere of which the mirror forms a part. (Note: $C$ lies in front of a concave mirror, but lies <em>behind</em> a convex mirror).</li>\n      <li><strong>Radius of Curvature ($R$):</strong> The linear distance from the pole to the centre of curvature ($PC = R$).</li>\n      <li><strong>Principal Axis:</strong> The imaginary straight line passing perpendicularly through both the pole ($P$) and the centre of curvature ($C$) of the spherical mirror.</li>\n      <li><strong>Aperture:</strong> The effective diameter of the circular outline of the spherical reflecting surface.</li>\n    </ul>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "A concave mirror curves inwards; a convex mirror curves outwards.",
                "The pole ($P$) is the geometric centre of the mirror's reflecting surface.",
                "The centre of curvature ($C$) is the centre of the sphere from which the mirror was cut."
            ],
            "keyNotes": [
                "The normal to a spherical mirror at any point of incidence is the straight line joining that point to the centre of curvature ($C$), because the radius is always perpendicular to the tangent of a sphere."
            ],
            "questions": [
                {
                    "id": "m03_q01",
                    "question": "A spherical mirror whose reflecting surface is curved outwards (bulging outwards) is called a:",
                    "options": [
                        "Concave mirror",
                        "Convex mirror",
                        "Plane mirror",
                        "Parabolic mirror"
                    ],
                    "answer": "Convex mirror",
                    "explanation": "A convex mirror has its reflecting surface curved outwards away from the centre of the sphere."
                },
                {
                    "id": "m03_q02",
                    "question": "What is the mathematical relationship between the radius of curvature (R) and focal length (f) of a spherical mirror of small aperture?",
                    "options": [
                        "R = f / 2",
                        "R = 2f (or f = R / 2)",
                        "R = f²",
                        "R = 1 / f"
                    ],
                    "answer": "R = 2f (or f = R / 2)",
                    "explanation": "For spherical mirrors of small aperture, the principal focus lies midway between the pole and centre of curvature, so R = 2f."
                },
                {
                    "id": "m03_q03",
                    "question": "What is Snell's Law of refraction for a given pair of media and a given colour of light?",
                    "options": [
                        "sin i + sin r = constant",
                        "(sin i) / (sin r) = constant (Refractive index n₂₁)",
                        "sin i × sin r = 1",
                        "tan i / tan r = constant"
                    ],
                    "answer": "(sin i) / (sin r) = constant (Refractive index n₂₁)",
                    "explanation": "Snell's Law: The ratio of the sine of the angle of incidence to the sine of the angle of refraction is constant (sin i / sin r = n₂₁)."
                },
                {
                    "id": "m03_q04",
                    "question": "A concave mirror produces a THREE TIMES MAGNIFIED REAL image of an object placed at 10 cm in front of it. Where is the image located?",
                    "options": [
                        "v = +30 cm (behind mirror)",
                        "v = -30 cm (at 30 cm in front of the mirror)",
                        "v = -10 cm",
                        "v = -20 cm"
                    ],
                    "answer": "v = -30 cm (at 30 cm in front of the mirror)",
                    "explanation": "Real image means m = -3. m = -v/u ⇒ -3 = -v / (-10) ⇒ v = -30 cm (30 cm in front of mirror on the same side as object)."
                },
                {
                    "id": "m03_q05",
                    "question": "What is the straight line passing through the pole and the centre of curvature of a spherical mirror called?",
                    "options": [
                        "Aperture",
                        "Principal Axis",
                        "Focal plane",
                        "Chord of curvature"
                    ],
                    "answer": "Principal Axis",
                    "explanation": "The principal axis is the straight line extending through both the pole (P) and centre of curvature (C)."
                },
                {
                    "id": "m03_q06",
                    "question": "Where does the centre of curvature of a CONVEX mirror lie relative to its reflecting surface?",
                    "options": [
                        "In front of the reflecting surface",
                        "Behind the reflecting surface",
                        "Exactly on the reflecting surface",
                        "At infinite distance"
                    ],
                    "answer": "Behind the reflecting surface",
                    "explanation": "Because a convex mirror bulges outwards towards the light, the sphere's centre of curvature C lies behind the reflecting surface."
                },
                {
                    "id": "m03_q07",
                    "question": "What is the circular diameter of the reflecting surface of a spherical mirror termed?",
                    "options": [
                        "Focal length",
                        "Aperture",
                        "Radius of curvature",
                        "Dispersion limit"
                    ],
                    "answer": "Aperture",
                    "explanation": "The effective diameter of the circular reflecting boundary of a spherical mirror is called its aperture."
                },
                {
                    "id": "m03_q08",
                    "question": "At any arbitrary point on the reflecting surface of a spherical mirror, the geometric normal line must pass through:",
                    "options": [
                        "The pole (P)",
                        "The centre of curvature (C)",
                        "The focus (F)",
                        "Infinity"
                    ],
                    "answer": "The centre of curvature (C)",
                    "explanation": "Any line segment connecting the centre of curvature C to a point on a sphere is a radius, which is perpendicular to the tangent at that point."
                },
                {
                    "id": "m03_q09",
                    "question": "Which type of spherical mirror has its reflecting surface curved inwards?",
                    "options": [
                        "Concave mirror",
                        "Convex mirror",
                        "Plane mirror",
                        "Cylindrical convex mirror"
                    ],
                    "answer": "Concave mirror",
                    "explanation": "A concave mirror has its reflecting surface curved inwards towards the centre of the sphere."
                },
                {
                    "id": "m03_q10",
                    "question": "A spherical mirror with small aperture means that:",
                    "options": [
                        "Its radius of curvature is infinite",
                        "Its diameter is much smaller than its radius of curvature, minimizing spherical aberration",
                        "It cannot reflect light",
                        "It forms only inverted images"
                    ],
                    "answer": "Its diameter is much smaller than its radius of curvature, minimizing spherical aberration",
                    "explanation": "Small aperture mirrors satisfy paraxial ray conditions where aperture is significantly smaller than radius of curvature."
                }
            ]
        },
        {
            "id": "m04",
            "moduleNumber": 4,
            "title": "Principal Focus & Focal Length: Relationship f = R/2",
            "tagline": "Real focus of concave mirrors, virtual focus of convex mirrors, and the mathematical formula f = R/2.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Principal Focus of a Concave Mirror</h4>\n    <p>When a beam of light rays parallel and close to the principal axis strikes a concave mirror, all the reflected rays converge and physically intersect at a single point on the principal axis. This point is called the <strong>principal focus ($F$)</strong> of the concave mirror. Because reflected rays genuinely pass through it, a concave mirror has a <strong>real focus</strong> situated in front of the mirror.</p>\n\n    <h4>2. Principal Focus of a Convex Mirror</h4>\n    <p>When parallel rays strike a convex mirror, they diverge upon reflection. When these reflected divergent rays are extended backwards, they appear to originate from a single point located behind the mirror on the principal axis. Hence, a convex mirror has a <strong>virtual focus ($F$)</strong> situated behind the mirror.</p>\n\n    <h4>3. Focal Length ($f$)</h4>\n    <p>The linear distance between the pole ($P$) and the principal focus ($F$) of a spherical mirror is called its <strong>focal length</strong> ($f = PF$).</p>\n\n    <h4>4. The Mathematical Relationship: $f = R/2$</h4>\n    <p>For spherical mirrors of small aperture, the principal focus lies exactly halfway between the pole ($P$) and the centre of curvature ($C$):</p>\n    $$R = 2f \\quad \\implies \\quad f = \\frac{R}{2}$$\n    <p>Where $R$ is the radius of curvature and $f$ is the focal length.</p>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "A concave mirror has a real principal focus; a convex mirror has a virtual principal focus.",
                "The focal length is the distance from pole to principal focus ($f = PF$).",
                "For mirrors with small aperture, focal length is exactly half the radius of curvature: $f = R/2$."
            ],
            "keyNotes": [
                "If the radius of curvature of a concave mirror is $30\text{ cm}$, its focal length is exactly $f = 30/2 = 15\text{ cm}$."
            ],
            "questions": [
                {
                    "id": "m04_q01",
                    "question": "If the radius of curvature of a spherical mirror is 32 cm, what is its focal length?",
                    "options": [
                        "64 cm",
                        "16 cm",
                        "8 cm",
                        "32 cm"
                    ],
                    "answer": "16 cm",
                    "explanation": "f = R / 2 = 32 cm / 2 = 16 cm."
                },
                {
                    "id": "m04_q02",
                    "question": "The geometric centre of the reflecting surface of a spherical mirror is called its:",
                    "options": [
                        "Centre of curvature",
                        "Pole (P)",
                        "Principal focus",
                        "Optical centre"
                    ],
                    "answer": "Pole (P)",
                    "explanation": "The pole (P) is the central point lying directly on the reflecting surface of a spherical mirror."
                },
                {
                    "id": "m04_q03",
                    "question": "What is the speed of light in vacuum (c)?",
                    "options": [
                        "3 × 10⁵ m/s",
                        "3 × 10⁸ m/s (300,000 km/s)",
                        "3 × 10¹⁰ m/s",
                        "330 m/s"
                    ],
                    "answer": "3 × 10⁸ m/s (300,000 km/s)",
                    "explanation": "The universal speed of electromagnetic waves in vacuum is c = 3 × 10⁸ m/s."
                },
                {
                    "id": "m04_q04",
                    "question": "An automobile convex rear-view mirror has a radius of curvature of 3.0 m. If a bus is located at 5.0 m from the mirror, what is the image distance (v) and magnification (m)?",
                    "options": [
                        "v = -1.15 m; m = -0.23",
                        "v = +1.15 m (behind mirror); m = +0.23 (virtual, erect, diminished)",
                        "v = +3.0 m; m = +1.0",
                        "v = -5.0 m; m = -1.0"
                    ],
                    "answer": "v = +1.15 m (behind mirror); m = +0.23 (virtual, erect, diminished)",
                    "explanation": "f = +R/2 = +1.5 m; u = -5.0 m. 1/v = 1/1.5 - 1/(-5.0) = 1/1.5 + 1/5.0 = 6.5/7.5 ⇒ v = +1.15 m. m = -v/u = -(+1.15)/(-5.0) = +0.23."
                },
                {
                    "id": "m04_q05",
                    "question": "What is the focal length of a spherical mirror whose radius of curvature is 32 cm?",
                    "options": [
                        "64 cm",
                        "32 cm",
                        "16 cm",
                        "8 cm"
                    ],
                    "answer": "16 cm",
                    "explanation": "Focal length f = R/2. With R = 32 cm, f = 32/2 = 16 cm."
                },
                {
                    "id": "m04_q06",
                    "question": "If the focal length of a convex mirror is 25 cm, what is its radius of curvature?",
                    "options": [
                        "12.5 cm",
                        "25 cm",
                        "50 cm",
                        "100 cm"
                    ],
                    "answer": "50 cm",
                    "explanation": "Radius of curvature R = 2f = 2 × 25 cm = 50 cm."
                },
                {
                    "id": "m04_q07",
                    "question": "Why is the principal focus of a concave mirror classified as a REAL focus?",
                    "options": [
                        "Because it is painted with real silver",
                        "Because incident parallel rays physically converge and intersect at that point after reflection",
                        "Because it lies behind the glass",
                        "Because it produces inverted sound waves"
                    ],
                    "answer": "Because incident parallel rays physically converge and intersect at that point after reflection",
                    "explanation": "A real focus is formed by the actual physical intersection of reflected light rays on the principal axis in front of the mirror."
                },
                {
                    "id": "m04_q08",
                    "question": "Where does the virtual focus of a convex mirror lie?",
                    "options": [
                        "In front of the mirror at the centre of curvature",
                        "Behind the reflecting surface on the principal axis",
                        "At the pole of the mirror",
                        "At infinity"
                    ],
                    "answer": "Behind the reflecting surface on the principal axis",
                    "explanation": "In a convex mirror, reflected divergent rays appear to diverge from a point behind the mirror, forming a virtual focus."
                },
                {
                    "id": "m04_q09",
                    "question": "In a simple solar cooker, why is a concave mirror used to focus sunlight?",
                    "options": [
                        "It scatters light in all directions",
                        "It converges all parallel incoming solar rays to its principal focus, generating high thermal energy",
                        "It changes the colour of sunlight to green",
                        "It cools the food rapidly"
                    ],
                    "answer": "It converges all parallel incoming solar rays to its principal focus, generating high thermal energy",
                    "explanation": "Parallel solar rays reflect from the concave surface and concentrate at the focus, generating intense heat to cook food."
                },
                {
                    "id": "m04_q10",
                    "question": "If a concave mirror is submerged in a beaker of water, does its focal length change?",
                    "options": [
                        "Yes, it decreases by 1.33 times",
                        "Yes, it increases by 4 times",
                        "No, the focal length of a mirror depends only on its geometry (f = R/2), independent of the surrounding medium",
                        "It becomes zero"
                    ],
                    "answer": "No, the focal length of a mirror depends only on its geometry (f = R/2), independent of the surrounding medium",
                    "explanation": "Reflection obeys ∠i = ∠r regardless of the medium. The focal length of a mirror is purely geometric (f = R/2) and remains unchanged in water."
                }
            ]
        },
        {
            "id": "m05",
            "moduleNumber": 5,
            "title": "Ray Diagrams: The Four Fundamental Ray Tracing Rules",
            "tagline": "Rules governing parallel rays, focal rays, radial rays through C, and oblique rays at pole P.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Principles of Ray Tracing</h4>\n    <p>To locate the position, nature, and size of the image formed by a spherical mirror, we trace at least <strong>two characteristic rays</strong> emanating from a point on the object. Any two of the following four standard rays can be chosen:</p>\n\n    <h4>2. The Four Standard Ray Rules</h4>\n    <ol>\n      <li><strong>Ray 1 (Parallel to Principal Axis):</strong>\n        <ul>\n          <li><em>Concave Mirror:</em> A ray travelling parallel to the principal axis passes directly through the <strong>principal focus ($F$)</strong> after reflection.</li>\n          <li><em>Convex Mirror:</em> A ray parallel to the principal axis appears to diverge from the principal focus ($F$) behind the mirror.</li>\n        </ul>\n      </li>\n      <li><strong>Ray 2 (Passing Through or Directed Towards Focus):</strong>\n        <ul>\n          <li><em>Concave Mirror:</em> A ray passing through the focus ($F$) emerges <strong>parallel to the principal axis</strong> after reflection.</li>\n          <li><em>Convex Mirror:</em> A ray directed towards the focus ($F$) emerges parallel to the principal axis.</li>\n        </ul>\n      </li>\n      <li><strong>Ray 3 (Passing Through Centre of Curvature $C$):</strong>\n        <ul>\n          <li>A ray passing through (or directed towards) the centre of curvature ($C$) strikes the surface normally ($\\angle i = 0^\\circ$) and <strong>retraces its path back along the same line</strong>.</li>\n        </ul>\n      </li>\n      <li><strong>Ray 4 (Incident Obliquely at the Pole $P$):</strong>\n        <ul>\n          <li>A ray incident obliquely at the pole ($P$) reflects symmetrically such that the angle of reflection equals the angle of incidence with the principal axis ($\\angle i = \\angle r$).</li>\n        </ul>\n      </li>\n    </ol>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Tracing any two of the four standard rays is sufficient to determine image location and size.",
                "Parallel rays reflect through the focus; focal rays reflect parallel to the axis.",
                "Rays passing through $C$ strike normally ($\u0007ngle i = 0^\\circ$) and reflect back along the same path."
            ],
            "keyNotes": [
                "A ray directed through the centre of curvature ($C$) retraces its path because it strikes the mirror surface at $90^\\circ$ (normal incidence), meaning $\u0007ngle i = \u0007ngle r = 0^\\circ$."
            ],
            "questions": [
                {
                    "id": "m05_q01",
                    "question": "The diameter of the circular outline of the reflecting surface of a spherical mirror is called its:",
                    "options": [
                        "Focal length",
                        "Aperture",
                        "Radius of curvature",
                        "Principal axis"
                    ],
                    "answer": "Aperture",
                    "explanation": "Aperture refers to the effective diameter of the light-gathering circular reflecting boundary of a spherical mirror or lens."
                },
                {
                    "id": "m05_q02",
                    "question": "How is the absolute refractive index (n) of a medium related to the speed of light in vacuum (c) and the speed of light in the medium (v)?",
                    "options": [
                        "n = v / c",
                        "n = c / v",
                        "n = c × v",
                        "n = c + v"
                    ],
                    "answer": "n = c / v",
                    "explanation": "The absolute refractive index n = c / v (ratio of speed in vacuum to speed in medium)."
                },
                {
                    "id": "m05_q03",
                    "question": "A convex lens of focal length 10 cm forms a real, inverted image of a needle at a distance of 50 cm on the other side of the lens. If the image is EQUAL in size to the needle, where is the needle placed, and what is the power of the lens?",
                    "options": [
                        "Needle at u = -25 cm; Power = +2.0 D",
                        "Needle at u = -50 cm; Power = +4.0 D (focal length f = 25 cm)",
                        "Needle at u = -10 cm; Power = +10.0 D",
                        "Needle at u = -100 cm; Power = +1.0 D"
                    ],
                    "answer": "Needle at u = -50 cm; Power = +4.0 D (focal length f = 25 cm)",
                    "explanation": "Image is real and same size (m = -1), so v = +50 cm = 2f ⇒ f = 25 cm = 0.25 m. Object distance u = -2f = -50 cm. Power P = 1 / f = 1 / 0.25 m = +4.0 D."
                },
                {
                    "id": "m05_q04",
                    "question": "Why does a light ray passing through the centre of curvature (C) of a concave mirror retrace its path after reflection?",
                    "options": [
                        "It gets absorbed by the mirror",
                        "It strikes the spherical mirror along the normal line (angle of incidence = 0°)",
                        "The mirror is transparent at point C",
                        "It bends due to high air pressure"
                    ],
                    "answer": "It strikes the spherical mirror along the normal line (angle of incidence = 0°)",
                    "explanation": "The line from C to the mirror surface is a radius, which is normal to the surface. Since ∠i = 0°, ∠r = 0°, so the ray retraces its exact path."
                },
                {
                    "id": "m05_q05",
                    "question": "A ray of light incident parallel to the principal axis of a concave mirror passes through which point after reflection?",
                    "options": [
                        "Centre of curvature (C)",
                        "Principal focus (F)",
                        "Pole (P)",
                        "Infinity"
                    ],
                    "answer": "Principal focus (F)",
                    "explanation": "By definition, all paraxial rays parallel to the principal axis reflect through the principal focus of a concave mirror."
                },
                {
                    "id": "m05_q06",
                    "question": "A ray of light passing through the principal focus (F) of a concave mirror emerges in what direction after reflection?",
                    "options": [
                        "Back through the focus",
                        "Parallel to the principal axis",
                        "Through the centre of curvature",
                        "Perpendicular to the surface"
                    ],
                    "answer": "Parallel to the principal axis",
                    "explanation": "By the principle of reversibility of light paths, a ray passing through the focus reflects parallel to the principal axis."
                },
                {
                    "id": "m05_q07",
                    "question": "How many characteristic ray paths are strictly needed to geometrically construct an image point in a ray diagram?",
                    "options": [
                        "At least two rays",
                        "Exactly four rays",
                        "Ten rays",
                        "Only one ray"
                    ],
                    "answer": "At least two rays",
                    "explanation": "The intersection of at least two reflected rays (or their backward extensions) uniquely defines the image point."
                },
                {
                    "id": "m05_q08",
                    "question": "For a ray incident obliquely at the pole (P) making an angle of 30° with the principal axis, what is the angle of reflection?",
                    "options": [
                        "60°",
                        "30°",
                        "0°",
                        "45°"
                    ],
                    "answer": "30°",
                    "explanation": "The principal axis acts as the normal at the pole. Since ∠i = 30°, the angle of reflection ∠r must also be 30°."
                },
                {
                    "id": "m05_q09",
                    "question": "In a convex mirror, a ray directed towards the centre of curvature (C) behind the mirror will:",
                    "options": [
                        "Reflect parallel to the principal axis",
                        "Reflect back along its own path",
                        "Pass straight through into the glass",
                        "Reflect through the pole"
                    ],
                    "answer": "Reflect back along its own path",
                    "explanation": "A ray directed towards C strikes the convex surface normally, reflecting straight back along its path of incidence."
                },
                {
                    "id": "m05_q10",
                    "question": "The optical principle stating that the path of a ray of light is completely reversible if its direction is reversed is called:",
                    "options": [
                        "Principle of Reversibility of Light",
                        "Snell's Law",
                        "Fermat's Theorem",
                        "Newton's First Law"
                    ],
                    "answer": "Principle of Reversibility of Light",
                    "explanation": "The principle of reversibility states that if the direction of a ray of light is reversed, it retraces its entire original optical path."
                }
            ]
        },
        {
            "id": "m06",
            "moduleNumber": 6,
            "title": "Image Formation by Concave Mirror: The Six Object Positions",
            "tagline": "Real vs virtual images, magnification changes, and dental mirror applications.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Image Formation Summary for Concave Mirror</h4>\n    <p>A concave mirror produces varied images—real or virtual, magnified, diminished, or same size—depending on object placement along the principal axis:</p>\n    <table class=\"table-bordered\" style=\"width:100%; border-collapse:collapse; font-size:0.85rem; margin:10px 0;\">\n      <thead><tr style=\"background:#f1f5f9;\"><th>Object Position</th><th>Image Position</th><th>Image Size</th><th>Nature</th></tr></thead>\n      <tbody>\n        <tr><td><strong>At Infinity</strong></td><td>At Focus ($F$)</td><td>Highly diminished (point-sized)</td><td>Real and inverted</td></tr>\n        <tr><td><strong>Beyond $C$</strong></td><td>Between $F$ and $C$</td><td>Diminished</td><td>Real and inverted</td></tr>\n        <tr><td><strong>At $C$</strong></td><td>At $C$</td><td>Same size as object ($m = -1$)</td><td>Real and inverted</td></tr>\n        <tr><td><strong>Between $C$ and $F$</strong></td><td>Beyond $C$</td><td>Enlarged (magnified)</td><td>Real and inverted</td></tr>\n        <tr><td><strong>At Focus ($F$)</strong></td><td>At Infinity</td><td>Infinitely large (highly enlarged)</td><td>Real and inverted</td></tr>\n        <tr><td><strong>Between $P$ and $F$</strong></td><td>Behind the mirror</td><td>Enlarged (magnified)</td><td><strong>Virtual and erect</strong></td></tr>\n      </tbody>\n    </table>\n\n    <h4>2. The Special Case: Object Between Pole ($P$) and Focus ($F$)</h4>\n    <p>This is the <strong>only position</strong> where a concave mirror forms a <strong>virtual, erect, and magnified image</strong>. The reflected rays diverge in front of the mirror; their backward extensions intersect behind the mirror. This unique optical property is exploited in:</p>\n    <ul>\n      <li><strong>Dentist's Mirrors:</strong> Held close to teeth ($< f$) to see large, upright virtual views of cavities.</li>\n      <li><strong>Shaving and Makeup Mirrors:</strong> Placed close to the face to reveal an enlarged, erect reflection for precise grooming.</li>\n    </ul>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Object at $C$ produces an image at $C$, real, inverted, and of the exact same size ($m = -1$).",
                "Object at $F$ produces a highly enlarged real image at infinity.",
                "Object between $P$ and $F$ produces a virtual, erect, and magnified image behind the mirror (dentist mirror)."
            ],
            "keyNotes": [
                "A concave mirror can form both real and virtual images, whereas a convex mirror can ONLY form virtual, erect, and diminished images."
            ],
            "questions": [
                {
                    "id": "m06_q01",
                    "question": "When parallel rays of light coming from the Sun fall on a concave mirror, they converge at a sharp bright spot on a paper screen placed at the:",
                    "options": [
                        "Centre of curvature (C)",
                        "Principal focus (F)",
                        "Pole (P)",
                        "Behind the mirror"
                    ],
                    "answer": "Principal focus (F)",
                    "explanation": "Rays parallel to the principal axis from infinity converge at the principal focus (F), forming a real, point-sized, highly concentrated image."
                },
                {
                    "id": "m06_q02",
                    "question": "Where should an object be placed in front of a concave mirror so that its image is formed at the same position, is real, inverted, and of the SAME size as the object?",
                    "options": [
                        "At the principal focus (F)",
                        "At the centre of curvature (C)",
                        "Between P and F",
                        "Beyond C"
                    ],
                    "answer": "At the centre of curvature (C)",
                    "explanation": "When an object is placed at C in front of a concave mirror, the image is formed at C, is real, inverted, and has magnification m = -1."
                },
                {
                    "id": "m06_q03",
                    "question": "The refractive index of crown glass is 1.50. What is the speed of light inside crown glass? (Speed of light in vacuum c = 3 × 10⁸ m/s)",
                    "options": [
                        "4.5 × 10⁸ m/s",
                        "2.0 × 10⁸ m/s",
                        "1.5 × 10⁸ m/s",
                        "3.0 × 10⁸ m/s"
                    ],
                    "answer": "2.0 × 10⁸ m/s",
                    "explanation": "v = c / n = (3 × 10⁸ m/s) / 1.50 = 2.0 × 10⁸ m/s."
                },
                {
                    "id": "m06_q04",
                    "question": "A concave lens has a focal length of 15 cm. At what distance should an object be placed from the lens so that its image is formed at 10 cm from the lens?",
                    "options": [
                        "u = -30 cm (30 cm in front of lens)",
                        "u = -6 cm",
                        "u = -15 cm",
                        "u = -60 cm"
                    ],
                    "answer": "u = -30 cm (30 cm in front of lens)",
                    "explanation": "Concave lens: f = -15 cm, v = -10 cm. 1/u = 1/v - 1/f = 1/(-10) - 1/(-15) = -1/10 + 1/15 = -1/30 ⇒ u = -30 cm."
                },
                {
                    "id": "m06_q05",
                    "question": "Where should an object be placed in front of a concave mirror to obtain an image of the EXACT SAME SIZE as the object?",
                    "options": [
                        "At the focus (F)",
                        "At the centre of curvature (C)",
                        "Beyond C",
                        "Between P and F"
                    ],
                    "answer": "At the centre of curvature (C)",
                    "explanation": "When an object is placed at C, the image is formed at C, real, inverted, and of the exact same size (m = -1)."
                },
                {
                    "id": "m06_q06",
                    "question": "Where must an object be placed relative to a concave mirror to obtain a VIRTUAL, ERECT, and MAGNIFIED image?",
                    "options": [
                        "Between the pole (P) and the principal focus (F)",
                        "At the centre of curvature (C)",
                        "At infinity",
                        "Beyond C"
                    ],
                    "answer": "Between the pole (P) and the principal focus (F)",
                    "explanation": "Placing the object between P and F produces divergent reflected rays that appear to meet behind the mirror, forming an enlarged virtual erect image."
                },
                {
                    "id": "m06_q07",
                    "question": "Why do dentists use a concave mirror rather than a plane or convex mirror?",
                    "options": [
                        "It forms an erect, magnified virtual image of the tooth when held close within its focal length",
                        "It illuminates the mouth with X-rays",
                        "It makes teeth appear smaller to fit on the screen",
                        "It produces inverted images that are easier to drill"
                    ],
                    "answer": "It forms an erect, magnified virtual image of the tooth when held close within its focal length",
                    "explanation": "Holding the tooth between P and F produces an upright, magnified virtual image, allowing detailed examination of cavities."
                },
                {
                    "id": "m06_q08",
                    "question": "Where is the image formed when an object is placed at the principal focus (F) of a concave mirror?",
                    "options": [
                        "At the pole",
                        "At the centre of curvature",
                        "At infinity",
                        "Between P and F"
                    ],
                    "answer": "At infinity",
                    "explanation": "Rays reflecting from an object placed at F emerge parallel to each other, intersecting only at infinity to form an infinitely large image."
                },
                {
                    "id": "m06_q09",
                    "question": "If an object is placed 25 cm in front of a concave mirror of focal length 20 cm, what is the nature of the image?",
                    "options": [
                        "Virtual, erect, and magnified",
                        "Real, inverted, and magnified (since object is between C and F)",
                        "Real, inverted, and diminished",
                        "Same size as the object"
                    ],
                    "answer": "Real, inverted, and magnified (since object is between C and F)",
                    "explanation": "With f = 20 cm, C is at 40 cm. An object at 25 cm lies between C and F, producing an enlarged, real, inverted image beyond C."
                },
                {
                    "id": "m06_q10",
                    "question": "In torches, searchlights, and automobile headlights, where is the light bulb filament placed relative to the concave reflector?",
                    "options": [
                        "At the centre of curvature",
                        "Very close to the focus of the reflector",
                        "Between pole and focus",
                        "At infinity"
                    ],
                    "answer": "Very close to the focus of the reflector",
                    "explanation": "Placing the lamp filament at the focus of the concave reflector causes all reflected rays to emerge as a powerful, parallel beam of light."
                }
            ]
        },
        {
            "id": "m07",
            "moduleNumber": 7,
            "title": "Image Formation by Convex Mirrors & Rear-View Applications",
            "tagline": "Always virtual, erect, and diminished images; wide field of view in automotive side mirrors.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Image Formation by a Convex Mirror</h4>\n    <p>A convex mirror diverges incident light rays outward. Regardless of where an object is placed in front of a convex mirror (except at infinity where the image is a point at $F$), the image formed has invariable characteristics:</p>\n    <ul>\n      <li><strong>Location:</strong> Always formed <strong>behind the mirror</strong>, between the pole ($P$) and the focus ($F$).</li>\n      <li><strong>Nature:</strong> Always <strong>virtual and erect</strong> ($m > 0$).</li>\n      <li><strong>Size:</strong> Always <strong>diminished</strong> (smaller than the object, $m < 1$).</li>\n    </ul>\n\n    <h4>2. Why Convex Mirrors are Used as Rear-View Mirrors in Vehicles</h4>\n    <p>Convex mirrors are preferred as side/rear-view mirrors in automobiles for two paramount optical advantages:</p>\n    <ol>\n      <li><strong>Always Erect Image:</strong> They always produce an erect (upright) image, enabling the driver to track traffic safely without confusion.</li>\n      <li><strong>Wider Field of View:</strong> Because a convex mirror curves outward towards the viewer, it captures light from a much broader angular field than a flat plane mirror of the same size. This enables the driver to monitor a significantly wider swath of highway behind the vehicle.</li>\n    </ol>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Convex mirrors ALWAYS form virtual, erect, and diminished images behind the mirror between $P$ and $F$.",
                "They provide a vastly wider field of view because they curve outward.",
                "Used universally as rear-view mirrors in cars, trucks, and security mirrors in retail stores."
            ],
            "keyNotes": [
                "A convex mirror can never form a real or inverted image of a real object under any circumstances."
            ],
            "questions": [
                {
                    "id": "m07_q01",
                    "question": "Where should an object be placed in front of a concave mirror to obtain a VIRTUAL, ERECT, and MAGNIFIED image?",
                    "options": [
                        "At infinity",
                        "Between the pole (P) and the principal focus (F)",
                        "At the centre of curvature (C)",
                        "Beyond C"
                    ],
                    "answer": "Between the pole (P) and the principal focus (F)",
                    "explanation": "Placing an object between P and F of a concave mirror produces an enlarged, erect, virtual image behind the mirror (used in shaving/dentist mirrors)."
                },
                {
                    "id": "m07_q02",
                    "question": "Which material medium listed in standard curriculum has the HIGHEST optical density and absolute refractive index of 2.42?",
                    "options": [
                        "Crown glass",
                        "Water",
                        "Diamond",
                        "Ruby"
                    ],
                    "answer": "Diamond",
                    "explanation": "Diamond has the highest absolute refractive index (n = 2.42), meaning light slows down to c / 2.42 ≈ 1.24 × 10⁸ m/s in diamond."
                },
                {
                    "id": "m07_q03",
                    "question": "Table 9.3 gives refractive indices: Water (1.33), Kerosene (1.44), Turpentine oil (1.47), and Diamond (2.42). In which of these media does light travel the FASTEST?",
                    "options": [
                        "Diamond",
                        "Turpentine oil",
                        "Kerosene",
                        "Water (lowest refractive index = highest speed v = c / 1.33 ≈ 2.25 × 10⁸ m/s)"
                    ],
                    "answer": "Water (lowest refractive index = highest speed v = c / 1.33 ≈ 2.25 × 10⁸ m/s)",
                    "explanation": "Speed of light is inversely proportional to refractive index (v = c / n). Water has the lowest refractive index (1.33), so light travels fastest in water."
                },
                {
                    "id": "m07_q04",
                    "question": "What is the nature and relative size of the image formed by a convex mirror for any finite position of an object in front of it?",
                    "options": [
                        "Real, inverted, and magnified",
                        "Virtual, erect, and diminished",
                        "Virtual, erect, and magnified",
                        "Real, inverted, and same size"
                    ],
                    "answer": "Virtual, erect, and diminished",
                    "explanation": "A convex mirror always forms a virtual, erect, and diminished image located between its pole and principal focus behind the mirror."
                },
                {
                    "id": "m07_q05",
                    "question": "Why are convex mirrors preferred over plane mirrors as vehicle rear-view mirrors?",
                    "options": [
                        "They are cheaper to manufacture",
                        "They give an upright image and provide a much wider field of view due to outward curvature",
                        "They eliminate all shadows completely",
                        "They zoom in on distant objects to make them look larger"
                    ],
                    "answer": "They give an upright image and provide a much wider field of view due to outward curvature",
                    "explanation": "Outward curvature captures a broader visual angle, showing a wide panoramic view of traffic in an upright orientation."
                },
                {
                    "id": "m07_q06",
                    "question": "Where is the image formed when an object is at infinity in front of a convex mirror?",
                    "options": [
                        "At the focus (F) behind the mirror, point-sized and virtual",
                        "At the centre of curvature in front of the mirror",
                        "At the pole, magnified",
                        "At infinity behind the mirror"
                    ],
                    "answer": "At the focus (F) behind the mirror, point-sized and virtual",
                    "explanation": "Parallel rays from infinity diverge upon reflection; their extensions meet at the virtual principal focus F behind the mirror as a point."
                },
                {
                    "id": "m07_q07",
                    "question": "Can a driver see their own reflection inverted in a standard car side-view convex mirror?",
                    "options": [
                        "Yes, if they lean back",
                        "No, convex mirrors cannot form inverted images of real objects",
                        "Yes, on sunny days",
                        "Only when the car is moving at high speed"
                    ],
                    "answer": "No, convex mirrors cannot form inverted images of real objects",
                    "explanation": "Because all reflected rays diverge from points behind the mirror, convex mirrors form exclusively erect virtual images of real objects."
                },
                {
                    "id": "m07_q08",
                    "question": "Which of the following optical mirrors is commonly installed at sharp blind corners in parking garages and mountainous roads?",
                    "options": [
                        "Large convex mirror",
                        "Concave mirror",
                        "Cylindrical concave mirror",
                        "Tinted plane mirror"
                    ],
                    "answer": "Large convex mirror",
                    "explanation": "Large convex mirrors afford a wide-angle field of view around blind corners, helping drivers view approaching traffic."
                },
                {
                    "id": "m07_q09",
                    "question": "Why is the warning 'Objects in mirror are closer than they appear' inscribed on passenger-side automotive convex mirrors?",
                    "options": [
                        "Because the mirror is tinted blue",
                        "Because convex mirrors diminish image size, making objects look further away than they actually are",
                        "Because light travels slower through curved glass",
                        "To warn about speeding tickets"
                    ],
                    "answer": "Because convex mirrors diminish image size, making objects look further away than they actually are",
                    "explanation": "Diminished images fool human depth perception into assuming an object is farther away than its true physical distance."
                },
                {
                    "id": "m07_q10",
                    "question": "What is the range of linear magnification (m) for a real object in front of a convex mirror?",
                    "options": [
                        "m > 1",
                        "0 < m < 1",
                        "m < -1",
                        "m = 0"
                    ],
                    "answer": "0 < m < 1",
                    "explanation": "The image is always erect (positive m) and diminished (magnitude less than 1), so 0 < m < 1."
                }
            ]
        },
        {
            "id": "m08",
            "moduleNumber": 8,
            "title": "New Cartesian Sign Convention for Spherical Mirrors",
            "tagline": "Sign rules for object distance u, image distance v, focal length f, and heights.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. The New Cartesian Sign Convention</h4>\n    <p>To perform accurate mathematical calculations for spherical mirrors, we adhere strictly to the <strong>New Cartesian Sign Convention</strong>, where the mirror's pole ($P$) is taken as the origin $(0,0)$ and the principal axis is the $x$-axis:</p>\n    <ol>\n      <li><strong>Object Placement:</strong> The object is always placed to the <strong>left</strong> of the mirror. Light travels from left to right.</li>\n      <li><strong>Distances along Principal Axis:</strong>\n        <ul>\n          <li>All distances measured in the direction of incident light (to the right of the pole, $+x$) are taken as <strong>positive ($+$)</strong>.</li>\n          <li>All distances measured against the direction of incident light (to the left of the pole, $-x$) are taken as <strong>negative ($-$)</strong>.</li>\n        </ul>\n      </li>\n      <li><strong>Heights Perpendicular to Principal Axis:</strong>\n        <ul>\n          <li>Heights measured upwards and perpendicular to the principal axis ($+y$) are taken as <strong>positive ($+$)</strong> (erect objects/images).</li>\n          <li>Heights measured downwards below the principal axis ($-y$) are taken as <strong>negative ($-$)</strong> (inverted images).</li>\n        </ul>\n      </li>\n    </ol>\n\n    <h4>2. Summary of Signs for Mirrors</h4>\n    <ul>\n      <li><strong>Object Distance ($u$):</strong> Always <strong>negative ($-$)</strong> for real objects placed in front of the mirror.</li>\n      <li><strong>Concave Mirror Focal Length ($f$):</strong> Always <strong>negative ($-$)</strong> (focus lies to the left of the pole).</li>\n      <li><strong>Convex Mirror Focal Length ($f$):</strong> Always <strong>positive ($+$)</strong> (focus lies to the right of the pole).</li>\n      <li><strong>Real Image Distance ($v$):</strong> <strong>Negative ($-$)</strong> (formed in front of the mirror).</li>\n      <li><strong>Virtual Image Distance ($v$):</strong> <strong>Positive ($+$)</strong> (formed behind the mirror).</li>\n    </ul>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Pole ($P$) is the origin; incident light travels from left to right.",
                "Object distance ($u$) is always negative ($-$).",
                "Concave mirror: focal length $f$ is negative ($-$). Convex mirror: focal length $f$ is positive ($+$)."
            ],
            "keyNotes": [
                "Remember the golden rule: Concave mirror $f < 0$; Convex mirror $f > 0$."
            ],
            "questions": [
                {
                    "id": "m08_q01",
                    "question": "Why do dentists use concave mirrors while examining the teeth of patients?",
                    "options": [
                        "To give a diminished image",
                        "To produce an erect and magnified virtual image of the teeth when held close within the focal length",
                        "To invert the teeth",
                        "To absorb all light"
                    ],
                    "answer": "To produce an erect and magnified virtual image of the teeth when held close within the focal length",
                    "explanation": "Holding the concave mirror within focal length (u < f) forms an upright, enlarged virtual view of tooth cavities."
                },
                {
                    "id": "m08_q02",
                    "question": "What does the statement 'The refractive index of water is 1.33' mean physically?",
                    "options": [
                        "Water is 1.33 times heavier than air",
                        "The ratio of the speed of light in vacuum/air to the speed of light in water is equal to 1.33",
                        "Light cannot enter water",
                        "Water reflects 133% of light"
                    ],
                    "answer": "The ratio of the speed of light in vacuum/air to the speed of light in water is equal to 1.33",
                    "explanation": "n = c / v_water = 1.33, meaning light travels 1.33 times faster in vacuum than in water."
                },
                {
                    "id": "m08_q03",
                    "question": "Why is kerosene (refractive index n = 1.44) considered optically denser than water (n = 1.33), even though kerosene floats on water (lower physical mass density)?",
                    "options": [
                        "Optical density is measured by weight",
                        "Optical density is determined by the speed of light in the medium (refractive index), not by mass per unit volume",
                        "Kerosene dissolves water",
                        "Water has zero refractive index"
                    ],
                    "answer": "Optical density is determined by the speed of light in the medium (refractive index), not by mass per unit volume",
                    "explanation": "Optical density correlates directly with refractive index (light retardation), whereas mass density is mass/volume. Kerosene slows light more than water despite having lower mass density."
                },
                {
                    "id": "m08_q04",
                    "question": "According to the New Cartesian Sign Convention, what is the sign of the focal length of a CONCAVE mirror?",
                    "options": [
                        "Always positive (+)",
                        "Always negative (-)",
                        "Zero",
                        "Positive only in water"
                    ],
                    "answer": "Always negative (-)",
                    "explanation": "The principal focus of a concave mirror lies in front of the mirror (to the left of the pole), so its focal length f is always negative."
                },
                {
                    "id": "m08_q05",
                    "question": "According to the New Cartesian Sign Convention, what is the sign of the focal length of a CONVEX mirror?",
                    "options": [
                        "Always positive (+)",
                        "Always negative (-)",
                        "Variable",
                        "Undefined"
                    ],
                    "answer": "Always positive (+)",
                    "explanation": "The principal focus of a convex mirror lies behind the reflecting surface (to the right of the pole), so its focal length f is always positive."
                },
                {
                    "id": "m08_q06",
                    "question": "Under the Cartesian sign convention, why is the object distance (u) almost universally taken with a negative sign?",
                    "options": [
                        "Because objects have negative mass",
                        "Because by convention the object is placed to the left of the mirror, against the direction of incident light",
                        "Because virtual light goes backwards",
                        "To make algebra harder"
                    ],
                    "answer": "Because by convention the object is placed to the left of the mirror, against the direction of incident light",
                    "explanation": "Measuring from the pole origin to the left (against incident rays) gives a negative sign for object distance u."
                },
                {
                    "id": "m08_q07",
                    "question": "If an image has a negative height (h' < 0), what does this indicate about the nature of the image?",
                    "options": [
                        "It is virtual and erect",
                        "It is real and inverted",
                        "It is point-sized at infinity",
                        "It is enlarged by 100%"
                    ],
                    "answer": "It is real and inverted",
                    "explanation": "Heights measured downwards below the principal axis (-y direction) are negative, representing inverted (real) images."
                },
                {
                    "id": "m08_q08",
                    "question": "In a calculation for a concave mirror, if the image distance is found to be v = +15 cm, where is the image located?",
                    "options": [
                        "15 cm in front of the mirror (real image)",
                        "15 cm behind the mirror (virtual image)",
                        "At the centre of curvature",
                        "At infinity"
                    ],
                    "answer": "15 cm behind the mirror (virtual image)",
                    "explanation": "A positive value of v means the image lies to the right of the pole (behind the mirror), which characterizes a virtual image."
                },
                {
                    "id": "m08_q09",
                    "question": "Which point on a spherical mirror serves as the geometric origin (0,0) in Cartesian sign convention?",
                    "options": [
                        "Centre of curvature (C)",
                        "Principal focus (F)",
                        "Pole (P)",
                        "Top of aperture"
                    ],
                    "answer": "Pole (P)",
                    "explanation": "The pole (P) of the reflecting surface is defined as the coordinate origin (0,0) for all optical distance measurements."
                },
                {
                    "id": "m08_q10",
                    "question": "What is the sign of the radius of curvature (R) for a convex mirror?",
                    "options": [
                        "Negative (-)",
                        "Positive (+)",
                        "Zero",
                        "Fluctuating"
                    ],
                    "answer": "Positive (+)",
                    "explanation": "The centre of curvature of a convex mirror lies to the right of the pole (behind the mirror), so R is positive."
                }
            ]
        },
        {
            "id": "m09",
            "moduleNumber": 9,
            "title": "The Mirror Formula & Linear Magnification",
            "tagline": "Derivation and application of 1/v + 1/u = 1/f, and magnification m = h'/h = -v/u.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. The Mirror Formula</h4>\n    <p>The mathematical equation relating the object distance ($u$), image distance ($v$), and focal length ($f$) of a spherical mirror is called the <strong>Mirror Formula</strong>:</p>\n    $$\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$$\n    <p>This fundamental relation holds universally for both concave and convex spherical mirrors for all object positions, provided proper Cartesian sign conventions are inserted for every variable.</p>\n\n    <h4>2. Linear Magnification ($m$)</h4>\n    <p><strong>Magnification</strong> produced by a spherical mirror expresses the relative ratio of the height of the image ($h'$) to the height of the object ($h$):</p>\n    $$m = \\frac{\\text{Height of image }(h')}{\\text{Height of object }(h)}$$\n    <p>Magnification is also directly related to object distance ($u$) and image distance ($v$) by:</p>\n    $$m = -\\frac{v}{u}$$\n    <p>Combining both definitions yields the master magnification formula:</p>\n    $$m = \\frac{h'}{h} = -\\frac{v}{u}$$\n\n    <h4>3. Physical Significance of the Sign of Magnification</h4>\n    <ul>\n      <li><strong>Negative Magnification ($m < 0$):</strong> Image is <strong>real and inverted</strong>.</li>\n      <li><strong>Positive Magnification ($m > 0$):</strong> Image is <strong>virtual and erect</strong>.</li>\n      <li><strong>$|m| > 1$:</strong> Image is enlarged (magnified).</li>\n      <li><strong>$|m| < 1$:</strong> Image is diminished (smaller).</li>\n      <li><strong>$|m| = 1$:</strong> Image is of the exact same size as the object.</li>\n    </ul>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "The Mirror Formula: $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$.",
                "Magnification formula: $m = \\frac{h'}{h} = -\\frac{v}{u}$.",
                "Negative $m$ indicates a real, inverted image; positive $m$ indicates a virtual, erect image."
            ],
            "keyNotes": [
                "Always remember the negative sign in the mirror magnification formula: $m = -v/u$. (This contrasts with lenses where $m = +v/u$)."
            ],
            "questions": [
                {
                    "id": "m09_q01",
                    "question": "Why are convex mirrors universally preferred as rear-view (wing) mirrors in automobiles?",
                    "options": [
                        "They produce an inverted enlarged image",
                        "They always produce an erect, though diminished, image and provide a much wider field of view because they are curved outwards",
                        "They focus heat on other cars",
                        "They are flat"
                    ],
                    "answer": "They always produce an erect, though diminished, image and provide a much wider field of view because they are curved outwards",
                    "explanation": "Convex mirrors always form upright diminished images and have a broad outward field of view, allowing drivers to view wide traffic behind them."
                },
                {
                    "id": "m09_q02",
                    "question": "A lens which is thicker in the middle and thinner at the edges, and converges a parallel beam of light rays, is called a:",
                    "options": [
                        "Concave lens (Diverging lens)",
                        "Convex lens (Converging lens)",
                        "Plano-concave lens",
                        "Cylindrical lens"
                    ],
                    "answer": "Convex lens (Converging lens)",
                    "explanation": "A double convex lens bulges outwards at the centre and refracts parallel light rays inward to converge at the principal focus."
                },
                {
                    "id": "m09_q03",
                    "question": "A doctor prescribes a corrective spectacle lens with power P = +1.5 D. What is its focal length, and is the lens converging or diverging?",
                    "options": [
                        "f = -0.67 m; Diverging",
                        "f = +0.67 m (+66.7 cm); Converging (Convex lens for hypermetropia)",
                        "f = +1.5 m; Diverging",
                        "f = +15 cm; Converging"
                    ],
                    "answer": "f = +0.67 m (+66.7 cm); Converging (Convex lens for hypermetropia)",
                    "explanation": "f = 1 / P = 1 / (+1.5 D) = +0.667 m = +66.7 cm. Positive sign indicates a converging convex lens."
                },
                {
                    "id": "m09_q04",
                    "question": "Which of the following equations correctly represents the spherical mirror formula?",
                    "options": [
                        "1/v - 1/u = 1/f",
                        "1/v + 1/u = 1/f",
                        "v + u = f",
                        "1/f + 1/v = 1/u"
                    ],
                    "answer": "1/v + 1/u = 1/f",
                    "explanation": "The mirror formula is 1/v + 1/u = 1/f relating image distance v, object distance u, and focal length f."
                },
                {
                    "id": "m09_q05",
                    "question": "What is the linear magnification formula for a spherical mirror in terms of image distance (v) and object distance (u)?",
                    "options": [
                        "m = +v/u",
                        "m = -v/u",
                        "m = -u/v",
                        "m = v × u"
                    ],
                    "answer": "m = -v/u",
                    "explanation": "For spherical mirrors, magnification is given by m = h'/h = -v/u."
                },
                {
                    "id": "m09_q06",
                    "question": "If a spherical mirror produces a magnification of m = -2, what does this tell you about the image?",
                    "options": [
                        "It is virtual, erect, and half the object size",
                        "It is real, inverted, and magnified to twice the object size",
                        "It is virtual and twice the object size",
                        "The mirror is convex"
                    ],
                    "answer": "It is real, inverted, and magnified to twice the object size",
                    "explanation": "The negative sign signifies a real and inverted image, while |m| = 2 means the image height is twice the object height."
                },
                {
                    "id": "m09_q07",
                    "question": "If a concave mirror produces a magnification of m = +3, what is the nature of the image?",
                    "options": [
                        "Real and inverted",
                        "Virtual, erect, and magnified 3 times",
                        "Diminished by a factor of 3",
                        "Formed at the centre of curvature"
                    ],
                    "answer": "Virtual, erect, and magnified 3 times",
                    "explanation": "A positive magnification means an upright (virtual and erect) image; |m| = 3 means it is magnified three times."
                },
                {
                    "id": "m09_q08",
                    "question": "A magnification of m = +1 is produced by which optical device?",
                    "options": [
                        "Concave mirror with object at C",
                        "Plane mirror",
                        "Convex mirror",
                        "Concave lens"
                    ],
                    "answer": "Plane mirror",
                    "explanation": "A plane mirror always produces an erect image (positive) of the exact same size as the object (h' = h), so m = +1."
                },
                {
                    "id": "m09_q09",
                    "question": "Can a convex mirror ever produce a magnification greater than +1 for a real object?",
                    "options": [
                        "Yes, when the object is very close to the pole",
                        "No, a convex mirror always forms diminished images (0 < m < 1)",
                        "Yes, in water",
                        "Only when the radius of curvature is large"
                    ],
                    "answer": "No, a convex mirror always forms diminished images (0 < m < 1)",
                    "explanation": "For any real object, a convex mirror produces an image that is strictly smaller than the object, so m is always less than 1."
                },
                {
                    "id": "m09_q10",
                    "question": "If m = -1 for a concave mirror, where is the object located?",
                    "options": [
                        "At infinity",
                        "At the principal focus (F)",
                        "At the centre of curvature (C)",
                        "Between P and F"
                    ],
                    "answer": "At the centre of curvature (C)",
                    "explanation": "When an object is placed at C, the image is formed at C, real and inverted (negative sign), with the exact same height as the object (|m| = 1)."
                }
            ]
        },
        {
            "id": "m10",
            "moduleNumber": 10,
            "title": "Numerical Problem Solving: Spherical Mirrors",
            "tagline": "Step-by-step calculations for focal length, object/image positions, and image height.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Systematic Problem-Solving Protocol for Mirrors</h4>\n    <ol>\n      <li><strong>Identify Mirror Type:</strong>\n        <ul>\n          <li>Concave Mirror $\\rightarrow f$ is <strong>negative</strong>.</li>\n          <li>Convex Mirror $\\rightarrow f$ is <strong>positive</strong>.</li>\n        </ul>\n      </li>\n      <li><strong>Assign Signs to Known Quantities:</strong>\n        <ul>\n          <li>Object distance $u$ is always <strong>negative</strong> (e.g., $u = -20\\text{ cm}$).</li>\n          <li>Object height $h$ is positive ($h > 0$).</li>\n        </ul>\n      </li>\n      <li><strong>Apply the Mirror Formula:</strong>\n        $$\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f} \\implies \\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u}$$\n      </li>\n      <li><strong>Solve for $v$ and Interpret:</strong>\n        <ul>\n          <li>If $v$ is negative $\\rightarrow$ image is real and formed in front of the mirror.</li>\n          <li>If $v$ is positive $\\rightarrow$ image is virtual and formed behind the mirror.</li>\n        </ul>\n      </li>\n      <li><strong>Calculate Magnification & Image Height:</strong>\n        $$m = -\\frac{v}{u} = \\frac{h'}{h} \\implies h' = m \\cdot h$$\n      </li>\n    </ol>\n\n    <h4>2. Worked Example</h4>\n    <p>A convex mirror used for rear-view on an automobile has a radius of curvature of $3.00\\text{ m}$. If a bus is located at $5.00\\text{ m}$ from this mirror, find the position, nature, and size of the image:</p>\n    <ul>\n      <li>$R = +3.00\\text{ m} \\implies f = +1.50\\text{ m}$</li>\n      <li>$u = -5.00\\text{ m}$</li>\n      <li>$\\frac{1}{v} = \\frac{1}{f} - \\frac{1}{u} = \\frac{1}{1.50} - \\frac{1}{-5.00} = \\frac{1}{1.50} + \\frac{1}{5.00} = \\frac{5 + 1.5}{7.5} = \\frac{6.5}{7.5} = \\frac{13}{15}$</li>\n      <li>$v = +\\frac{15}{13} = +1.15\\text{ m}$ (formed $1.15\\text{ m}$ behind the mirror, virtual).</li>\n      <li>$m = -\\frac{v}{u} = -\\frac{+1.15}{-5.00} = +0.23$ (erect and diminished to $23\\%$ of original size).</li>\n    </ul>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Always write given variables with proper algebraic signs before plugging into formulas.",
                "Substitute $f = R/2$ with positive sign for convex and negative sign for concave mirrors.",
                "Verify results physically: a concave mirror with object beyond $C$ must yield $v$ between $F$ and $C$."
            ],
            "keyNotes": [
                "A positive $v$ always means a virtual image formed behind the mirror; a negative $v$ always means a real image in front of the mirror."
            ],
            "questions": [
                {
                    "id": "m10_q01",
                    "question": "What is the correct Mirror Formula relating object distance (u), image distance (v), and focal length (f)?",
                    "options": [
                        "1/v - 1/u = 1/f",
                        "1/v + 1/u = 1/f",
                        "v + u = f",
                        "1/f + 1/v = 1/u"
                    ],
                    "answer": "1/v + 1/u = 1/f",
                    "explanation": "The mirror formula is 1/v + 1/u = 1/f, valid for all spherical mirrors under Cartesian sign conventions."
                },
                {
                    "id": "m10_q02",
                    "question": "What is the formula for linear magnification (m) produced by a spherical mirror in terms of image height (h'), object height (h), image distance (v), and object distance (u)?",
                    "options": [
                        "m = h'/h = +v/u",
                        "m = h'/h = -v/u",
                        "m = h/h' = -u/v",
                        "m = u + v"
                    ],
                    "answer": "m = h'/h = -v/u",
                    "explanation": "For spherical mirrors, linear magnification m = h'/h = -v/u."
                },
                {
                    "id": "m10_q03",
                    "question": "A lens which is thinner in the middle and thicker at the edges, and diverges a parallel beam of light rays, is called a:",
                    "options": [
                        "Convex lens",
                        "Concave lens (Diverging lens)",
                        "Biconvex lens",
                        "Prism"
                    ],
                    "answer": "Concave lens (Diverging lens)",
                    "explanation": "A double concave lens is thinner at the centre and diverges incident parallel rays so they appear to emanate from a virtual focus."
                },
                {
                    "id": "m10_q04",
                    "question": "What happens to the path of a ray of light that strikes the interface of two transparent media at a NORMAL angle (angle of incidence ∠i = 0°)?",
                    "options": [
                        "It bends at 90°",
                        "It passes straight through into the second medium without suffering any deviation (angle of refraction ∠r = 0°)",
                        "It is 100% absorbed",
                        "It splits into seven colours"
                    ],
                    "answer": "It passes straight through into the second medium without suffering any deviation (angle of refraction ∠r = 0°)",
                    "explanation": "By Snell's Law: sin r = (n₁/n₂) sin 0° = 0 ⇒ ∠r = 0°. Normal incident rays pass undeviated without directional bending."
                },
                {
                    "id": "m10_q05",
                    "question": "An object is placed at a distance of 15 cm in front of a concave mirror of focal length 10 cm. What is the image distance v?",
                    "options": [
                        "-30 cm",
                        "+30 cm",
                        "-6 cm",
                        "+6 cm"
                    ],
                    "answer": "-30 cm",
                    "explanation": "1/v = 1/f - 1/u. Here f = -10 cm, u = -15 cm. 1/v = 1/(-10) - 1/(-15) = -1/10 + 1/15 = -1/30. So v = -30 cm (real image in front of mirror)."
                },
                {
                    "id": "m10_q06",
                    "question": "In the question above (u = -15 cm, v = -30 cm), what is the magnification produced?",
                    "options": [
                        "-2",
                        "+2",
                        "-0.5",
                        "+0.5"
                    ],
                    "answer": "-2",
                    "explanation": "m = -v/u = -(-30) / (-15) = -(+2) = -2. The image is real, inverted, and magnified twice."
                },
                {
                    "id": "m10_q07",
                    "question": "An object 4 cm in size is placed at 25 cm in front of a concave mirror of focal length 15 cm. At what distance from the mirror should a screen be placed to obtain a sharp image?",
                    "options": [
                        "-37.5 cm",
                        "+37.5 cm",
                        "-15 cm",
                        "-50 cm"
                    ],
                    "answer": "-37.5 cm",
                    "explanation": "f = -15 cm, u = -25 cm. 1/v = 1/(-15) - 1/(-25) = -1/15 + 1/25 = (-5 + 3)/75 = -2/75. v = -75/2 = -37.5 cm. Screen should be placed 37.5 cm in front of the mirror."
                },
                {
                    "id": "m10_q08",
                    "question": "What is the height of the image formed in the problem above (h = 4 cm, u = -25 cm, v = -37.5 cm)?",
                    "options": [
                        "-6 cm",
                        "+6 cm",
                        "-4 cm",
                        "+2.5 cm"
                    ],
                    "answer": "-6 cm",
                    "explanation": "m = -v/u = -(-37.5)/(-25) = -1.5. Image height h' = m × h = -1.5 × 4 cm = -6 cm (inverted image of height 6 cm)."
                },
                {
                    "id": "m10_q09",
                    "question": "An object is placed at 10 cm in front of a convex mirror of focal length 15 cm. Find the image distance v:",
                    "options": [
                        "+6 cm",
                        "-6 cm",
                        "+25 cm",
                        "-30 cm"
                    ],
                    "answer": "+6 cm",
                    "explanation": "For convex mirror, f = +15 cm, u = -10 cm. 1/v = 1/f - 1/u = 1/15 - 1/(-10) = 1/15 + 1/10 = (2 + 3)/30 = 5/30 = 1/6. v = +6 cm (behind mirror)."
                },
                {
                    "id": "m10_q10",
                    "question": "What is the magnification in the convex mirror problem above (u = -10 cm, v = +6 cm)?",
                    "options": [
                        "+0.6",
                        "-0.6",
                        "+1.5",
                        "-1.5"
                    ],
                    "answer": "+0.6",
                    "explanation": "m = -v/u = -(+6) / (-10) = +0.6. The image is virtual, erect, and diminished to 0.6 of object height."
                }
            ]
        },
        {
            "id": "m11",
            "moduleNumber": 11,
            "title": "Refraction of Light: Causes, Change of Speed & Optical Density",
            "tagline": "Bending of light across optical media, rarer vs denser media, and speed variations.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. What is Refraction of Light?</h4>\n    <p>When a beam of light travelling through one transparent medium enters obliquely into another transparent medium of differing optical density, it deviates from its original straight path at the interface between the two media. This phenomenon is called the <strong>refraction of light</strong>.</p>\n\n    <h4>2. The Fundamental Cause of Refraction</h4>\n    <p>Light refracts because its <strong>speed changes</strong> as it crosses from one medium into another. While light travels at $c \\approx 3 \\times 10^8\\text{ m/s}$ in vacuum (and air), it slows down to approximately $2.25 \\times 10^8\\text{ m/s}$ in water and $2.0 \\times 10^8\\text{ m/s}$ in crown glass. The wavefronts change speed at different times across the oblique boundary, bending the ray.</p>\n\n    <h4>3. Optically Rarer vs Optically Denser Media</h4>\n    <ul>\n      <li><strong>Rarer to Denser (e.g., Air to Glass):</strong> The speed of light decreases. The ray bends <strong>towards the normal</strong> ($\\angle i > \\angle r$).</li>\n      <li><strong>Denser to Rarer (e.g., Glass to Air):</strong> The speed of light increases. The ray bends <strong>away from the normal</strong> ($\\angle i < \\angle r$).</li>\n    </ul>\n\n    <h4>4. Optical Density vs Mass Density</h4>\n    <p>Optical density is the ability of a medium to refract light and is inversely proportional to the speed of light in that medium. It must <strong>not be confused with mass density</strong> (mass per unit volume). For instance, kerosene has a lower mass density than water (kerosene floats on water), yet kerosene is <em>optically denser</em> than water because the speed of light is lower in kerosene than in water.</p>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Refraction is the bending of light when passing obliquely between media of differing optical densities.",
                "The fundamental cause of refraction is the difference in the speed of light in different media.",
                "Ray bending rule: Rarer $\\rightarrow$ Denser bends TOWARDS the normal; Denser $\\rightarrow$ Rarer bends AWAY from the normal."
            ],
            "keyNotes": [
                "Optical density is not the same as mass density: kerosene floats on water (lower mass density) but refracts light more strongly (higher optical density)."
            ],
            "questions": [
                {
                    "id": "m11_q01",
                    "question": "The bending of a ray of light when it passes obliquely from one transparent medium to another of different optical density is called:",
                    "options": [
                        "Reflection",
                        "Refraction",
                        "Diffraction",
                        "Dispersion"
                    ],
                    "answer": "Refraction",
                    "explanation": "Refraction is the change in direction of light propagation caused by a change in wave propagation speed across different media interfaces."
                },
                {
                    "id": "m11_q02",
                    "question": "What is the fundamental physical cause behind the phenomenon of refraction of light?",
                    "options": [
                        "Change in the frequency of light",
                        "Change in the speed of light as it enters from one medium into another",
                        "Absorption of light by atoms",
                        "Electromagnetic radiation loss"
                    ],
                    "answer": "Change in the speed of light as it enters from one medium into another",
                    "explanation": "Light travels at different velocities in different media; this difference in phase speed causes wave front refraction at oblique boundaries."
                },
                {
                    "id": "m11_q03",
                    "question": "Why does light bend when entering obliquely from air into water?",
                    "options": [
                        "Gravity pulls light down",
                        "One side of the incident light wave front enters the optically denser water first and slows down before the other side, pivoting the wave direction towards the normal",
                        "Water is electrically charged",
                        "Air has no molecules"
                    ],
                    "answer": "One side of the incident light wave front enters the optically denser water first and slows down before the other side, pivoting the wave direction towards the normal",
                    "explanation": "Huygens' wave principle: oblique incidence causes leading wave front edges to decelerate first, steering the propagation vector towards the normal."
                },
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
                    "options": [
                        "Air",
                        "Water",
                        "Crown glass",
                        "Diamond"
                    ],
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
                    "options": [
                        "Wavelength",
                        "Speed",
                        "Frequency",
                        "Amplitude"
                    ],
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
        },
        {
            "id": "m12",
            "moduleNumber": 12,
            "title": "Refraction through a Rectangular Glass Slab & Lateral Displacement",
            "tagline": "Two refracting surfaces, angle of emergence e = angle of incidence i, and lateral shift.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Double Refraction in a Rectangular Glass Slab</h4>\n    <p>When a ray of light passes through a parallel-sided rectangular glass slab, it undergoes refraction at two parallel interfaces:</p>\n    <ol>\n      <li><strong>First Surface (Air $\\rightarrow$ Glass):</strong> Ray enters from an optically rarer medium (air) to an optically denser medium (glass). It bends <strong>towards the normal</strong> ($\\angle i > \\angle r_1$).</li>\n      <li><strong>Second Surface (Glass $\\rightarrow$ Air):</strong> The refracted ray travels through glass and reaches the opposite parallel face. Here, it exits from denser glass into rarer air, bending <strong>away from the normal</strong> by an equal amount ($\\angle r_2 < \\angle e$).</li>\n    </ol>\n\n    <h4>2. Parallelism of Incident and Emergent Rays ($\\angle i = \\angle e$)</h4>\n    <p>Because the two refracting surfaces are parallel, the extent of bending towards the normal at the first surface is exactly equal and opposite to the extent of bending away from the normal at the second surface. Consequently:</p>\n    $$\\text{Angle of Incidence } (\\angle i) = \\text{Angle of Emergence } (\\angle e)$$\n    <p>The <strong>emergent ray is strictly parallel</strong> to the original path of the incident ray.</p>\n\n    <h4>3. Lateral Displacement ($d$)</h4>\n    <p>Although the emergent ray does not change its direction, it is physically shifted sideways relative to the incident ray path. This perpendicular separation between the original incident path and the emergent ray is called <strong>lateral displacement</strong> (or lateral shift). Lateral displacement increases with:</p>\n    <ul>\n      <li>Increasing thickness ($t$) of the glass slab.</li>\n      <li>Increasing angle of incidence ($\\angle i$).</li>\n      <li>Increasing refractive index ($n$) of the glass.</li>\n    </ul>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "In a parallel rectangular glass slab, the emergent ray is always parallel to the incident ray ($\\angle i = \\angle e$).",
                "Lateral displacement is the perpendicular sideways distance between the incident and emergent ray paths.",
                "Lateral displacement increases with slab thickness, higher angle of incidence, and higher refractive index."
            ],
            "keyNotes": [
                "The emergent ray does not suffer any net angular deviation (angular deviation $\\delta = 0^\\circ$); it suffers only a parallel lateral displacement."
            ],
            "questions": [
                {
                    "id": "m12_q01",
                    "question": "In the refraction of light through a rectangular glass slab with parallel faces, why is the emergent ray PARALLEL to the incident ray?",
                    "options": [
                        "Glass has no optical density",
                        "The extent of bending (refraction angle) at the first air-glass interface is exactly equal and opposite to the bending at the second glass-air interface",
                        "Light rays cannot bend in glass",
                        "The slab acts like a mirror"
                    ],
                    "answer": "The extent of bending (refraction angle) at the first air-glass interface is exactly equal and opposite to the bending at the second glass-air interface",
                    "explanation": "Because opposite faces AB and CD are parallel, the angle of refraction at the first face equals the angle of incidence at the second face, causing the emergent ray to exit parallel to the incident path with a slight lateral displacement."
                },
                {
                    "id": "m12_q02",
                    "question": "When two thin lenses of powers P₁ = +2.0 D and P₂ = +0.25 D are placed in contact, what is the net power (P) of the combination?",
                    "options": [
                        "+1.75 D",
                        "+2.25 D",
                        "+0.50 D",
                        "+8.0 D"
                    ],
                    "answer": "+2.25 D",
                    "explanation": "Net power of thin lenses in contact is the algebraic sum: P = P₁ + P₂ = +2.0 D + 0.25 D = +2.25 D."
                },
                {
                    "id": "m12_q03",
                    "question": "Which of the following materials CANNOT be used to make an optical lens?",
                    "options": [
                        "Water",
                        "Glass",
                        "Transparent Plastic",
                        "Clay (Opaque soil)"
                    ],
                    "answer": "Clay (Opaque soil)",
                    "explanation": "Clay is an opaque material that does not transmit or refract light, and thus cannot be fabricated into a lens."
                },
                {
                    "id": "m12_q04",
                    "question": "A spherical mirror and a thin spherical lens each have a focal length of -15 cm. What are the mirror and lens likely to be?",
                    "options": [
                        "Both convex",
                        "Both concave",
                        "Mirror concave, lens convex",
                        "Mirror convex, lens concave"
                    ],
                    "answer": "Both concave",
                    "explanation": "Under Cartesian sign conventions, a negative focal length (f = -15 cm) corresponds to both a concave mirror and a concave lens."
                },
                {
                    "id": "m12_q05",
                    "question": "What is the mathematical relationship between the angle of incidence (i) and the angle of emergence (e) for a parallel-faced glass slab?",
                    "options": [
                        "∠i > ∠e",
                        "∠i < ∠e",
                        "∠i = ∠e",
                        "∠i + ∠e = 90°"
                    ],
                    "answer": "∠i = ∠e",
                    "explanation": "Because the two refracting faces are strictly parallel, the second refraction undoes the angular deviation of the first, so ∠i = ∠e."
                },
                {
                    "id": "m12_q06",
                    "question": "What is the perpendicular distance between the original incident ray direction and the emergent ray after passing through a glass slab called?",
                    "options": [
                        "Angular deviation",
                        "Lateral displacement (lateral shift)",
                        "Focal length",
                        "Critical shift"
                    ],
                    "answer": "Lateral displacement (lateral shift)",
                    "explanation": "Lateral displacement is the perpendicular sideways shift between the incident ray path and the parallel emergent ray."
                },
                {
                    "id": "m12_q07",
                    "question": "How does the magnitude of lateral displacement change if the thickness of the glass slab is doubled?",
                    "options": [
                        "It becomes zero",
                        "It increases proportionally",
                        "It is halved",
                        "It remains completely unchanged"
                    ],
                    "answer": "It increases proportionally",
                    "explanation": "Lateral displacement is directly proportional to the thickness of the refracting slab (d ∝ t)."
                },
                {
                    "id": "m12_q08",
                    "question": "What is the net angular deviation produced by a parallel-sided rectangular glass slab on an incident ray of light?",
                    "options": [
                        "0°",
                        "30°",
                        "45°",
                        "90°"
                    ],
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
                    "options": [
                        "30°",
                        "45°",
                        "60°",
                        "0°"
                    ],
                    "answer": "45°",
                    "explanation": "Since ∠i = ∠e in a parallel slab, when ∠i = 45°, ∠e must also equal 45°."
                }
            ]
        },
        {
            "id": "m13",
            "moduleNumber": 13,
            "title": "The Laws of Refraction & Snell's Law of Refraction",
            "tagline": "Coplanar rays, the constant ratio sin i / sin r, and physical meaning of the constant.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. The First Law of Refraction</h4>\n    <p>The incident ray, the refracted ray, and the normal to the interface of two transparent media at the point of incidence, all lie in the <strong>same geometric plane</strong>.</p>\n\n    <h4>2. The Second Law of Refraction (Snell's Law)</h4>\n    <p>Formulated in 1621 by Dutch astronomer Willebrord Snell, the second law states:</p>\n    <blockquote style=\"background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;\">\n      \"The ratio of the sine of the angle of incidence to the sine of the angle of refraction is a constant for a given pair of media and for light of a given wavelength (colour).\"\n    </blockquote>\n    <p>Mathematically expressed as:</p>\n    $$\\frac{\\sin i}{\\sin r} = \\text{constant} = n_{21}$$\n    <p>Where:</p>\n    <ul>\n      <li>$i$ is the angle of incidence in Medium 1.</li>\n      <li>$r$ is the angle of refraction in Medium 2.</li>\n      <li>$n_{21}$ is the <strong>relative refractive index</strong> of Medium 2 with respect to Medium 1.</li>\n    </ul>\n\n    <h4>3. Conditions for Snell's Law</h4>\n    <p>Snell's law applies for all oblique angles of incidence ($0^\\circ < i < 90^\\circ$). For normal incidence ($i = 0^\\circ$), $\\sin 0^\\circ = 0$, which implies $\\sin r = 0 \\implies r = 0^\\circ$, meaning the ray passes undeviated.</p>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "First Law: Incident ray, refracted ray, and normal at point of incidence all lie in the same plane.",
                "Snell's Law: $\\frac{\\sin i}{\\sin r} = \\text{constant} = n_{21}$ for a given pair of media.",
                "The constant represents the relative refractive index of the second medium with respect to the first."
            ],
            "keyNotes": [
                "Snell's law holds constant only for monochromatic light (light of a single specific colour/wavelength), as refractive index varies slightly with wavelength (dispersion)."
            ],
            "questions": [
                {
                    "id": "m13_q01",
                    "question": "No matter how far you stand from a mirror, your image always appears erect. The mirror is likely to be:",
                    "options": [
                        "Only concave",
                        "Either plane or convex",
                        "Only plane",
                        "Only cylindrical"
                    ],
                    "answer": "Either plane or convex",
                    "explanation": "Both plane mirrors (m = +1) and convex mirrors (0 < m < 1) always produce upright, virtual images regardless of object distance."
                },
                {
                    "id": "m13_q02",
                    "question": "Which lens would you prefer to use as a magnifying glass while reading very small letters in a dictionary?",
                    "options": [
                        "A concave lens of focal length 5 cm",
                        "A convex lens of short focal length 5 cm",
                        "A convex lens of focal length 50 cm",
                        "A concave lens of focal length 50 cm"
                    ],
                    "answer": "A convex lens of short focal length 5 cm",
                    "explanation": "A convex lens of shorter focal length (f = 5 cm) has higher optical power (P = 100/5 = +20 D) and produces greater angular magnification (M = 1 + D/f)."
                },
                {
                    "id": "m13_q03",
                    "question": "Why does a pencil partly immersed in water in a glass tumbler appear bent and displaced at the air-water interface?",
                    "options": [
                        "Water chemically dissolves the pencil wood",
                        "Light rays coming from the immersed portion of the pencil refract and bend away from the normal upon exiting water into air",
                        "The glass expands",
                        "Water reflects all rays into the ceiling"
                    ],
                    "answer": "Light rays coming from the immersed portion of the pencil refract and bend away from the normal upon exiting water into air",
                    "explanation": "Rays from the submerged pencil bend away from the normal at the water-air interface, making the submerged part appear shifted upwards."
                },
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
                    "options": [
                        "√3 ≈ 1.732",
                        "1.50",
                        "0.50",
                        "2.00"
                    ],
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
                    "options": [
                        "sin^-1(0.25) ≈ 14.5°",
                        "60°",
                        "15°",
                        "30°"
                    ],
                    "answer": "sin^-1(0.25) ≈ 14.5°",
                    "explanation": "n = sin i / sin r => 2 = sin 30° / sin r => sin r = (1/2) / 2 = 1/4 = 0.25 => r = sin^-1(0.25) ≈ 14.5°."
                },
                {
                    "id": "m13_q10",
                    "question": "Who independently formulated the sine law of refraction in 1621?",
                    "options": [
                        "Willebrord Snell",
                        "Isaac Newton",
                        "Galileo Galilei",
                        "Christiaan Huygens"
                    ],
                    "answer": "Willebrord Snell",
                    "explanation": "Dutch astronomer and mathematician Willebrord Snell discovered the law in 1621, hence named Snell's Law."
                }
            ]
        },
        {
            "id": "m14",
            "moduleNumber": 14,
            "title": "Refractive Index: Absolute ($n = c/v$) & Relative Index ($n_{21} = v_1/v_2$)",
            "tagline": "Speed of light in media, unitless ratio, and optical density relationships.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Absolute Refractive Index ($n$)</h4>\n    <p>When light travels from vacuum (or air) into a given material medium, the ratio of the speed of light in vacuum ($c$) to the speed of light in that medium ($v$) is defined as the <strong>absolute refractive index</strong> ($n$) of the medium:</p>\n    $$n = \\frac{c}{v} = \\frac{\\text{Speed of light in vacuum}}{\\text{Speed of light in medium}}$$\n    <p>Because it is a pure ratio of two identical physical quantities (speeds), the refractive index has <strong>no units and no dimensions</strong>. Since the speed of light in any material medium is always strictly less than $c$, $n \\ge 1.0$ for all physical media:</p>\n    <ul>\n      <li>Air: $n \\approx 1.0003$</li>\n      <li>Water: $n = 1.33 = \\frac{4}{3}$</li>\n      <li>Crown Glass: $n = 1.52 \\approx \\frac{3}{2}$</li>\n      <li>Diamond: $n = 2.42$</li>\n    </ul>\n\n    <h4>2. Relative Refractive Index ($n_{21}$)</h4>\n    <p>When light travels from Medium 1 into Medium 2, the <strong>relative refractive index</strong> of Medium 2 with respect to Medium 1 ($n_{21}$) is given by:</p>\n    $$n_{21} = \\frac{v_1}{v_2} = \\frac{c/v_2}{c/v_1} = \\frac{n_2}{n_1}$$\n    <p>Conversely, the refractive index of Medium 1 with respect to Medium 2 is the reciprocal:</p>\n    $$n_{12} = \\frac{1}{n_{21}}$$\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Absolute refractive index: $n = c/v$; it is unitless and always $\\ge 1$.",
                "Relative refractive index: $n_{21} = v_1 / v_2 = n_2 / n_1$.",
                "Reciprocity relation: $n_{12} = 1 / n_{21}$."
            ],
            "keyNotes": [
                "Higher refractive index means light travels slower in that medium; diamond ($n = 2.42$) slows light down to just $1.24 \times 10^8\\text{ m/s}$."
            ],
            "questions": [
                {
                    "id": "m14_q01",
                    "question": "When a thick rectangular glass slab is placed over printed text, why do the letters appear raised when viewed from above?",
                    "options": [
                        "Due to internal reflection",
                        "Due to refraction of light bending away from the normal as it emerges from denser glass into rarer air, creating an apparent virtual depth",
                        "Glass magnifies weight",
                        "Text ink expands"
                    ],
                    "answer": "Due to refraction of light bending away from the normal as it emerges from denser glass into rarer air, creating an apparent virtual depth",
                    "explanation": "Refraction creates an apparent depth (d' = d / n), raising the apparent position of the text towards the observer."
                },
                {
                    "id": "m14_q02",
                    "question": "When an object placed in front of a spherical mirror is moved from 40 cm to 20 cm from the pole, the magnification remains POSITIVE but INCREASES from +0.2 to +0.5. What type of mirror is it?",
                    "options": [
                        "Concave mirror",
                        "Convex mirror",
                        "Plane mirror",
                        "Parabolic mirror"
                    ],
                    "answer": "Convex mirror",
                    "explanation": "Convex mirrors always produce positive magnification less than 1 (0 < m < 1). As the object approaches the pole (from 40 cm to 20 cm), the diminished image grows larger towards m = 1."
                },
                {
                    "id": "m14_q03",
                    "question": "In which of the following optical media will the critical angle for total internal reflection with air be the SMALLEST?",
                    "options": [
                        "Water (n = 1.33)",
                        "Crown glass (n = 1.52)",
                        "Dense flint glass (n = 1.65)",
                        "Diamond (n = 2.42, critical angle C = sin⁻¹(1/2.42) ≈ 24.4°)"
                    ],
                    "answer": "Diamond (n = 2.42, critical angle C = sin⁻¹(1/2.42) ≈ 24.4°)",
                    "explanation": "Critical angle sin C = 1 / n. Diamond has the largest n (2.42), giving the smallest critical angle (C ≈ 24.4°), which traps light inside for brilliant sparkling."
                },
                {
                    "id": "m14_q04",
                    "question": "What is the formula for the absolute refractive index (n) of a medium?",
                    "options": [
                        "n = v / c",
                        "n = c / v",
                        "n = c × v",
                        "n = v1 / v2"
                    ],
                    "answer": "n = c / v",
                    "explanation": "Absolute refractive index is the ratio of speed of light in vacuum (c) to speed in the medium (v): n = c/v."
                },
                {
                    "id": "m14_q05",
                    "question": "What is the speed of light in crown glass having an absolute refractive index of n = 1.50? (Given c = 3 × 10^8 m/s)",
                    "options": [
                        "2.0 × 10^8 m/s",
                        "1.5 × 10^8 m/s",
                        "4.5 × 10^8 m/s",
                        "3.0 × 10^8 m/s"
                    ],
                    "answer": "2.0 × 10^8 m/s",
                    "explanation": "v = c / n = (3 × 10^8 m/s) / 1.50 = 2.0 × 10^8 m/s."
                },
                {
                    "id": "m14_q06",
                    "question": "What are the SI units of refractive index?",
                    "options": [
                        "m/s",
                        "Dioptres (D)",
                        "It has no units (dimensionless ratio)",
                        "Radians"
                    ],
                    "answer": "It has no units (dimensionless ratio)",
                    "explanation": "Being a ratio of two velocities (m/s divided by m/s), refractive index is a pure dimensionless number."
                },
                {
                    "id": "m14_q07",
                    "question": "If the refractive index of water is 4/3 and glass is 3/2, what is the refractive index of glass with respect to water?",
                    "options": [
                        "9/8 = 1.125",
                        "8/9 = 0.889",
                        "2",
                        "1/2"
                    ],
                    "answer": "9/8 = 1.125",
                    "explanation": "n_gw = n_glass / n_water = (3/2) / (4/3) = (3/2) × (3/4) = 9/8 = 1.125."
                },
                {
                    "id": "m14_q08",
                    "question": "If the refractive index of glass with respect to air is 1.5, what is the refractive index of air with respect to glass?",
                    "options": [
                        "1.5",
                        "1 / 1.5 = 2/3 ≈ 0.67",
                        "0.5",
                        "3.0"
                    ],
                    "answer": "1 / 1.5 = 2/3 ≈ 0.67",
                    "explanation": "By the reciprocity principle, n_ag = 1 / n_ga = 1 / 1.5 = 2/3 ≈ 0.67."
                },
                {
                    "id": "m14_q09",
                    "question": "Diamond has a refractive index of 2.42. What is the speed of light inside diamond? (c = 3 × 10^8 m/s)",
                    "options": [
                        "1.24 × 10^8 m/s",
                        "2.42 × 10^8 m/s",
                        "3.0 × 10^8 m/s",
                        "0.81 × 10^8 m/s"
                    ],
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
        },
        {
            "id": "m15",
            "moduleNumber": 15,
            "title": "Spherical Lenses: Convex vs Concave Anatomy & Optical Centre",
            "tagline": "Converging vs diverging lenses, optical centre O, principal foci F1 and F2.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. What is a Spherical Lens?</h4>\n    <p>A <strong>spherical lens</strong> is a piece of transparent optical material (such as glass or plastic) bounded by two spherical surfaces, or by one spherical surface and one plane surface:</p>\n    <ul>\n      <li><strong>Convex Lens (Double Convex / Converging Lens):</strong> Thicker at the middle and thinner at the edges. When a parallel beam of light strikes a convex lens, it refracts and <strong>converges</strong> to a real focus on the opposite side.</li>\n      <li><strong>Concave Lens (Double Concave / Diverging Lens):</strong> Thicker at the edges and thinner at the middle. It refracts parallel rays outward, causing them to <strong>diverge</strong> as if originating from a virtual focus on the incident side.</li>\n    </ul>\n\n    <h4>2. Essential Lens Terminology</h4>\n    <ul>\n      <li><strong>Optical Centre ($O$):</strong> The central point of the lens on its principal axis. A ray of light passing through the optical centre suffers <strong>zero net deviation</strong> and passes straight through.</li>\n      <li><strong>Centres of Curvature ($C_1, C_2$ or $2F_1, 2F_2$):</strong> The centres of the two spheres forming the two curved surfaces.</li>\n      <li><strong>Principal Axis:</strong> The imaginary line connecting both centres of curvature and passing through $O$.</li>\n      <li><strong>Principal Foci ($F_1, F_2$):</strong> A lens has two principal foci on either side of the optical centre. For a thin lens, both focal lengths are equal ($OF_1 = OF_2 = f$).</li>\n    </ul>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "A convex lens is thicker in the middle and converges light; a concave lens is thinner in the middle and diverges light.",
                "A ray passing through the optical centre ($O$) passes straight through without deviation.",
                "A lens has two symmetrical principal foci ($F_1$ and $F_2$) equidistant from $O$ ($f = OF$)."
            ],
            "keyNotes": [
                "A convex lens behaves as a converging lens when placed in a medium with a lower refractive index (like air), but would diverge light if submerged in a medium with a higher refractive index than the lens material!"
            ],
            "questions": [
                {
                    "id": "m15_q01",
                    "question": "A lens which is thinner in the middle and thicker at the edges, and diverges a parallel beam of light rays, is called a:",
                    "options": [
                        "Convex lens",
                        "Concave lens (Diverging lens)",
                        "Biconvex lens",
                        "Prism"
                    ],
                    "answer": "Concave lens (Diverging lens)",
                    "explanation": "A double concave lens is thinner at the centre and diverges incident parallel rays so they appear to emanate from a virtual focus."
                },
                {
                    "id": "m15_q02",
                    "question": "The central point of a spherical lens through which a ray of light passes without suffering any angular deviation is called its:",
                    "options": [
                        "Centre of curvature",
                        "Optical centre (O)",
                        "Principal focus",
                        "Aperture"
                    ],
                    "answer": "Optical centre (O)",
                    "explanation": "The optical centre (O) is the central nodal point of a lens; rays passing through O proceed undeviated."
                },
                {
                    "id": "m15_q03",
                    "question": "An object is placed at a distance equal to focal length (u = -f) in front of a convex lens. Where is the image formed, and what is its nature?",
                    "options": [
                        "At 2F₂; Real and same size",
                        "At infinity; Highly enlarged, real and inverted",
                        "Between O and F₂; Virtual and erect",
                        "At the optical centre"
                    ],
                    "answer": "At infinity; Highly enlarged, real and inverted",
                    "explanation": "1/v = 1/f + 1/(-f) = 0 ⇒ v = ∞. Refracted rays emerge parallel and meet at infinity, forming an infinitely magnified real inverted image."
                },
                {
                    "id": "m15_q04",
                    "question": "What is the central point of a spherical lens through which a ray of light passes without suffering any deviation called?",
                    "options": [
                        "Principal focus",
                        "Optical centre (O)",
                        "Centre of curvature",
                        "Aperture boundary"
                    ],
                    "answer": "Optical centre (O)",
                    "explanation": "A ray passing through the optical centre (O) traverses the lens undeviated along a straight line."
                },
                {
                    "id": "m15_q05",
                    "question": "Which type of lens is thicker in the middle and thinner at the perimeter edges?",
                    "options": [
                        "Double concave lens",
                        "Double convex lens",
                        "Plano-concave lens",
                        "Cylindrical concave lens"
                    ],
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
                    "options": [
                        "One",
                        "Two (one on each side: F1 and F2)",
                        "Four",
                        "Infinite"
                    ],
                    "answer": "Two (one on each side: F1 and F2)",
                    "explanation": "Because light can enter from either the left or right face, a lens possesses two principal foci (F1 and F2)."
                },
                {
                    "id": "m15_q09",
                    "question": "What is the linear distance from the optical centre (O) to either principal focus of a thin lens called?",
                    "options": [
                        "Radius of curvature",
                        "Focal length (f)",
                        "Aperture diameter",
                        "Displacement width"
                    ],
                    "answer": "Focal length (f)",
                    "explanation": "The distance OF from the optical centre to the principal focus is the focal length f."
                },
                {
                    "id": "m15_q10",
                    "question": "A student burns a small hole in a dry leaf using a lens under bright sunlight. What type of lens did the student use?",
                    "options": [
                        "Concave lens",
                        "Convex lens",
                        "Plane glass plate",
                        "Diverging cylindrical lens"
                    ],
                    "answer": "Convex lens",
                    "explanation": "A convex lens converges the parallel rays of the sun onto a tiny real focal spot, concentrating heat to ignite the leaf."
                }
            ]
        },
        {
            "id": "m16",
            "moduleNumber": 16,
            "title": "Image Formation by Convex Lens: The Six Object Positions",
            "tagline": "Real vs virtual images, magnification changes, and the magnifying glass condition.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Image Formation Summary for Convex Lens</h4>\n    <p>A convex lens forms real, inverted images for most object positions, but forms an erect, virtual image when the object is placed close to the lens:</p>\n    <table class=\"table-bordered\" style=\"width:100%; border-collapse:collapse; font-size:0.85rem; margin:10px 0;\">\n      <thead><tr style=\"background:#f1f5f9;\"><th>Object Position</th><th>Image Position</th><th>Image Size</th><th>Nature</th></tr></thead>\n      <tbody>\n        <tr><td><strong>At Infinity</strong></td><td>At Focus ($F_2$)</td><td>Highly diminished (point-sized)</td><td>Real and inverted</td></tr>\n        <tr><td><strong>Beyond $2F_1$</strong></td><td>Between $F_2$ and $2F_2$</td><td>Diminished</td><td>Real and inverted</td></tr>\n        <tr><td><strong>At $2F_1$</strong></td><td>At $2F_2$</td><td>Same size as object ($m = -1$)</td><td>Real and inverted</td></tr>\n        <tr><td><strong>Between $F_1$ and $2F_1$</strong></td><td>Beyond $2F_2$</td><td>Enlarged (magnified)</td><td>Real and inverted</td></tr>\n        <tr><td><strong>At Focus ($F_1$)</strong></td><td>At Infinity</td><td>Infinitely large (highly enlarged)</td><td>Real and inverted</td></tr>\n        <tr><td><strong>Between $O$ and $F_1$</strong></td><td>On same side as object</td><td>Enlarged (magnified)</td><td><strong>Virtual and erect</strong></td></tr>\n      </tbody>\n    </table>\n\n    <h4>2. The Simple Magnifying Glass</h4>\n    <p>When an object (such as small text or a watch gear) is placed within the focal length of a convex lens (between $O$ and $F_1$), the refracted rays diverge on the opposite side. When projected backwards, they form an <strong>erect, highly magnified, virtual image</strong> on the same side. This is the operating principle of a <strong>simple microscope (magnifying glass)</strong>.</p>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Object at $2F_1$ forms an image at $2F_2$, real, inverted, and of the exact same size ($m = -1$).",
                "Object at $F_1$ forms an image at infinity (parallel refracted rays).",
                "Object between $O$ and $F_1$ produces a virtual, erect, and magnified image on the same side (magnifying glass)."
            ],
            "keyNotes": [
                "Covering one half of a convex lens with black paper does NOT produce half an image; it forms the complete full image, but with reduced brightness (intensity) because fewer rays contribute."
            ],
            "questions": [
                {
                    "id": "m16_q01",
                    "question": "Where should an object be placed in front of a convex lens to obtain a real image of the EXACT SAME size as the object on a screen?",
                    "options": [
                        "At focus F₁",
                        "At twice the focal length (2F₁)",
                        "Between optical centre O and focus F₁",
                        "At infinity"
                    ],
                    "answer": "At twice the focal length (2F₁)",
                    "explanation": "Placing an object at 2F₁ of a convex lens forms an inverted, real image of identical size at 2F₂ on the other side (m = -1)."
                },
                {
                    "id": "m16_q02",
                    "question": "Where should an object be placed in front of a convex lens so that it functions as a simple magnifying glass (producing a virtual, erect, and magnified image)?",
                    "options": [
                        "Beyond 2F₁",
                        "Between the principal focus (F₁) and the optical centre (O)",
                        "At 2F₁",
                        "At infinity"
                    ],
                    "answer": "Between the principal focus (F₁) and the optical centre (O)",
                    "explanation": "When an object is placed within the focal length (between F₁ and O), a convex lens forms an enlarged, upright, virtual image on the same side as the object."
                },
                {
                    "id": "m16_q03",
                    "question": "If one-half of a convex lens is covered with black opaque paper, will the lens still form a complete image of an object?",
                    "options": [
                        "No, only half of the image will be formed",
                        "Yes, a complete image of the entire object will still be formed, but its brightness (intensity) will be reduced to half because fewer light rays contribute to image formation",
                        "The image will disappear completely",
                        "The image will turn upside down"
                    ],
                    "answer": "Yes, a complete image of the entire object will still be formed, but its brightness (intensity) will be reduced to half because fewer light rays contribute to image formation",
                    "explanation": "Every uncovered portion of the lens refracts rays from every point of the object to form the full geometric image; covering half the aperture simply halves the transmitted light flux, dimming image brightness."
                },
                {
                    "id": "m16_q04",
                    "question": "A luminous object O and a screen S are placed 100 cm apart. A converging lens placed between them forms an image on the screen that is 4 times enlarged. What is the focal length (f) of the lens, and what is the object distance (u)?",
                    "options": [
                        "u = -20 cm; f = +16 cm",
                        "u = -25 cm; f = +20 cm",
                        "u = -10 cm; f = +9 cm",
                        "u = -50 cm; f = +25 cm"
                    ],
                    "answer": "u = -20 cm; f = +16 cm",
                    "explanation": "For a real image on screen: |u| + v = 100 cm and m = -v/u = -4 ⇒ v = 4|u|. Thus |u| + 4|u| = 100 ⇒ 5|u| = 100 ⇒ |u| = 20 cm (u = -20 cm), v = +80 cm. 1/f = 1/v - 1/u = 1/80 - 1/(-20) = 1/80 + 1/20 = 5/80 = 1/16 ⇒ f = +16 cm."
                },
                {
                    "id": "m16_q05",
                    "question": "Where should an object be placed in front of a convex lens to obtain a real image of the EXACT SAME SIZE as the object?",
                    "options": [
                        "At the focus (F1)",
                        "At twice the focal length (at 2F1)",
                        "Between O and F1",
                        "At infinity"
                    ],
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
                    "options": [
                        "At 2F2",
                        "Beyond 2F2, real, inverted and enlarged",
                        "Between F2 and 2F2",
                        "At infinity"
                    ],
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
                    "options": [
                        "Camera",
                        "Vehicle side-view mirror",
                        "Periscope",
                        "Plane mirror"
                    ],
                    "answer": "Camera",
                    "explanation": "A camera utilizes a convex lens system to project real, inverted, and focused images onto a sensor or film."
                }
            ]
        },
        {
            "id": "m17",
            "moduleNumber": 17,
            "title": "Image Formation by Concave Lenses & Cartesian Sign Convention for Lenses",
            "tagline": "Always virtual, erect, and diminished images; New Cartesian sign rules for lenses.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Image Formation by a Concave Lens</h4>\n    <p>A concave lens diverges all incident light rays outward. For any real object positioned at any finite distance in front of a concave lens:</p>\n    <ul>\n      <li><strong>Location:</strong> The image is always formed on the <strong>same side as the object</strong>, between the optical centre ($O$) and the focus ($F_1$).</li>\n      <li><strong>Nature:</strong> The image is always <strong>virtual and erect</strong>.</li>\n      <li><strong>Size:</strong> The image is always <strong>diminished</strong> (smaller than the object, $m < 1$).</li>\n    </ul>\n\n    <h4>2. New Cartesian Sign Convention for Lenses</h4>\n    <p>Taking the optical centre ($O$) as the coordinate origin $(0,0)$:</p>\n    <ul>\n      <li><strong>Object Distance ($u$):</strong> Object is always placed to the left of the lens $\\rightarrow u$ is always <strong>negative ($-$)</strong>.</li>\n      <li><strong>Focal Length of Convex Lens ($f$):</strong> The principal focus lies to the right ($+x$) $\\rightarrow f$ is always <strong>positive ($+$)</strong>.</li>\n      <li><strong>Focal Length of Concave Lens ($f$):</strong> The principal focus lies to the left ($-x$) $\\rightarrow f$ is always <strong>negative ($-$)</strong>.</li>\n      <li><strong>Real Image Distance ($v$):</strong> Formed on the opposite side (right, $+x$) $\\rightarrow v$ is <strong>positive ($+$)</strong>.</li>\n      <li><strong>Virtual Image Distance ($v$):</strong> Formed on the same side as object (left, $-x$) $\\rightarrow v$ is <strong>negative ($-$)</strong>.</li>\n    </ul>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "A concave lens ALWAYS forms virtual, erect, and diminished images on the same side as the object.",
                "Focal length rules for lenses: Convex lens $f > 0$ (positive); Concave lens $f < 0$ (negative).",
                "Real images in lenses have positive $v$; virtual images have negative $v$."
            ],
            "keyNotes": [
                "Note the crucial sign contrast with mirrors: for a lens, a real image formed on the opposite side has a POSITIVE image distance ($v > 0$)."
            ],
            "questions": [
                {
                    "id": "m17_q01",
                    "question": "A concave lens ALWAYS produces an image that is:",
                    "options": [
                        "Real, inverted, and enlarged",
                        "Virtual, erect, and diminished, irrespective of object position",
                        "Real and same size",
                        "Virtual and enlarged"
                    ],
                    "answer": "Virtual, erect, and diminished, irrespective of object position",
                    "explanation": "A diverging concave lens always forms a virtual, upright, diminished image located between the optical centre O and focus F₁."
                },
                {
                    "id": "m17_q02",
                    "question": "Under the New Cartesian Sign Convention, the focal length of a convex lens is always __________ and that of a concave lens is always __________.",
                    "options": [
                        "Negative; Positive",
                        "Positive; Negative",
                        "Positive; Positive",
                        "Negative; Negative"
                    ],
                    "answer": "Positive; Negative",
                    "explanation": "A convex lens has a positive focal length (+f), while a concave lens has a negative focal length (-f)."
                },
                {
                    "id": "m17_q03",
                    "question": "A converging lens is submerged in a transparent liquid whose refractive index is EXACTLY EQUAL to the refractive index of the lens glass (n_liquid = n_lens). How will incident light rays behave inside the liquid?",
                    "options": [
                        "They converge with double power",
                        "They pass straight through without any refraction/deviation, and the lens becomes completely invisible in the liquid (focal length becomes infinite, Power = 0)",
                        "The lens acts as a mirror",
                        "The lens explodes"
                    ],
                    "answer": "They pass straight through without any refraction/deviation, and the lens becomes completely invisible in the liquid (focal length becomes infinite, Power = 0)",
                    "explanation": "When optical indices match, there is no change in light speed across the lens boundary (no refraction). The lens behaves like a continuous uniform medium (f = ∞, P = 0)."
                },
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
                    "options": [
                        "Always positive (+)",
                        "Always negative (-)",
                        "Zero",
                        "Positive only in water"
                    ],
                    "answer": "Always negative (-)",
                    "explanation": "The principal focus of a concave lens lies on the incident (left) side, so its focal length f is always negative."
                },
                {
                    "id": "m17_q06",
                    "question": "According to the New Cartesian Sign Convention, what is the sign of the focal length of a CONVEX lens?",
                    "options": [
                        "Always positive (+)",
                        "Always negative (-)",
                        "Variable",
                        "Undefined"
                    ],
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
                    "options": [
                        "Myopia (Near-sightedness)",
                        "Hypermetropia (Far-sightedness)",
                        "Presbyopia",
                        "Astigmatism"
                    ],
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
        },
        {
            "id": "m18",
            "moduleNumber": 18,
            "title": "The Lens Formula & Linear Magnification",
            "tagline": "Mastery of 1/v - 1/u = 1/f, and magnification m = h'/h = +v/u.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. The Lens Formula</h4>\n    <p>The mathematical equation relating the object distance ($u$), image distance ($v$), and focal length ($f$) of a spherical lens is known as the <strong>Lens Formula</strong>:</p>\n    $$\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$$\n    <p>Notice the crucial <strong>minus sign</strong> before $\\frac{1}{u}$, which distinguishes the lens formula from the mirror formula ($\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$).</p>\n\n    <h4>2. Linear Magnification ($m$) for Lenses</h4>\n    <p>The magnification produced by a spherical lens is the ratio of the image height ($h'$) to the object height ($h$):</p>\n    $$m = \\frac{h'}{h} = +\\frac{v}{u}$$\n    <p>Notice that for lenses, $m = +\\frac{v}{u}$ (has a <strong>positive sign</strong>), whereas for mirrors $m = -\\frac{v}{u}$.</p>\n\n    <h4>3. Interpreting Magnification for Lenses</h4>\n    <ul>\n      <li><strong>Negative Magnification ($m < 0$):</strong> Image is <strong>real and inverted</strong>. (Because $v > 0$ and $u < 0$, $v/u$ is negative).</li>\n      <li><strong>Positive Magnification ($m > 0$):</strong> Image is <strong>virtual and erect</strong>. (Because both $v < 0$ and $u < 0$, $v/u$ is positive).</li>\n      <li><strong>$|m| > 1$:</strong> Image is magnified.</li>\n      <li><strong>$|m| < 1$:</strong> Image is diminished.</li>\n      <li><strong>$|m| = 1$:</strong> Image is same size as object.</li>\n    </ul>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "The Lens Formula: $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$.",
                "Lens Magnification: $m = \\frac{h'}{h} = +\\frac{v}{u}$.",
                "Negative $m$ signifies a real, inverted image; positive $m$ signifies a virtual, erect image."
            ],
            "keyNotes": [
                "Do not confuse mirror and lens formulas: Mirrors have $+1/u$ in formula and $-v/u$ in magnification; Lenses have $-1/u$ in formula and $+v/u$ in magnification."
            ],
            "questions": [
                {
                    "id": "m18_q01",
                    "question": "What is the correct Lens Formula relating object distance (u), image distance (v), and focal length (f)?",
                    "options": [
                        "1/v + 1/u = 1/f",
                        "1/v - 1/u = 1/f",
                        "1/u - 1/v = 1/f",
                        "v - u = f"
                    ],
                    "answer": "1/v - 1/u = 1/f",
                    "explanation": "The thin lens formula is 1/v - 1/u = 1/f."
                },
                {
                    "id": "m18_q02",
                    "question": "What is the formula for linear magnification (m) produced by a spherical lens?",
                    "options": [
                        "m = h'/h = -v/u",
                        "m = h'/h = +v/u",
                        "m = h/h' = u/v",
                        "m = 1 / (uv)"
                    ],
                    "answer": "m = h'/h = +v/u",
                    "explanation": "For spherical lenses, linear magnification m = h'/h = +v/u."
                },
                {
                    "id": "m18_q03",
                    "question": "An object 5.0 cm tall is placed at a distance of 20 cm in front of a convex mirror of radius of curvature R = 30 cm. What is the position (v), height (h'), and nature of the image?",
                    "options": [
                        "v = -60 cm; h' = -15 cm; Real and inverted",
                        "v = +8.57 cm (behind mirror); h' = +2.14 cm; Virtual and erect",
                        "v = +15 cm; h' = +5.0 cm; Virtual and erect",
                        "v = -8.57 cm; h' = -2.14 cm; Real and inverted"
                    ],
                    "answer": "v = +8.57 cm (behind mirror); h' = +2.14 cm; Virtual and erect",
                    "explanation": "Convex mirror: f = +R/2 = +15 cm; u = -20 cm. 1/v = 1/15 - 1/(-20) = 1/15 + 1/20 = 7/60 ⇒ v = +60/7 = +8.57 cm. m = -v/u = -(8.57)/(-20) = +0.428. h' = m × h = 0.428 × 5.0 cm = +2.14 cm."
                },
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
                    "options": [
                        "m = -v/u",
                        "m = +v/u",
                        "m = u/v",
                        "m = -u/v"
                    ],
                    "answer": "m = +v/u",
                    "explanation": "For spherical lenses, magnification is given by m = h'/h = +v/u."
                },
                {
                    "id": "m18_q06",
                    "question": "If a convex lens produces a real and inverted image of twice the height of the object, what is the magnification m?",
                    "options": [
                        "+2",
                        "-2",
                        "+0.5",
                        "-0.5"
                    ],
                    "answer": "-2",
                    "explanation": "Because the image is real and inverted, m is negative; with height doubled, m = -2."
                },
                {
                    "id": "m18_q07",
                    "question": "A concave lens produces an image of height 2 cm from an object of height 6 cm. What is the magnification?",
                    "options": [
                        "+3",
                        "-3",
                        "+1/3 (+0.33)",
                        "-1/3"
                    ],
                    "answer": "+1/3 (+0.33)",
                    "explanation": "A concave lens always produces an erect (positive) virtual image: m = h'/h = +2/6 = +1/3."
                },
                {
                    "id": "m18_q08",
                    "question": "An object is placed 30 cm in front of a convex lens of focal length 20 cm. What is the image distance v?",
                    "options": [
                        "+60 cm",
                        "-60 cm",
                        "+12 cm",
                        "-12 cm"
                    ],
                    "answer": "+60 cm",
                    "explanation": "1/v = 1/f + 1/u = 1/20 + 1/(-30) = 1/20 - 1/30 = (3 - 2)/60 = 1/60. Hence v = +60 cm (real image on opposite side)."
                },
                {
                    "id": "m18_q09",
                    "question": "What is the magnification in the question above (u = -30 cm, v = +60 cm)?",
                    "options": [
                        "-2",
                        "+2",
                        "-0.5",
                        "+0.5"
                    ],
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
        },
        {
            "id": "m19",
            "moduleNumber": 19,
            "title": "Power of a Lens ($P = 1/f$), The Dioptre & Thin Lens Combinations",
            "tagline": "Degree of convergence/divergence, SI unit Dioptre (D), and additive power in combination lenses.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Definition of Power of a Lens ($P$)</h4>\n    <p>The <strong>power of a lens</strong> is a measure of its ability to converge or diverge incident light rays. A lens with a shorter focal length bends light rays through larger angles, focusing them closer to the optical centre, and therefore possesses greater optical power.</p>\n    <p>Mathematically, the power of a lens ($P$) is defined as the <strong>reciprocal of its focal length expressed in metres</strong>:</p>\n    $$P = \\frac{1}{f\\text{ (in metres)}} = \\frac{100}{f\\text{ (in centimetres)}}$$\n\n    <h4>2. The SI Unit of Power: The Dioptre ($D$)</h4>\n    <p>The SI unit of power of a lens is the <strong>dioptre</strong>, denoted by the symbol $\\mathbf{D}$ ($1\\text{ D} = 1\\text{ m}^{-1}$):</p>\n    <blockquote style=\"background:#f8fafc; border-left:4px solid #0284c7; padding:10px 14px; margin:10px 0; font-style:italic;\">\n      \"1 dioptre is the power of a lens whose focal length is exactly 1 metre.\"\n    </blockquote>\n\n    <h4>3. Signs of Lens Power</h4>\n    <ul>\n      <li><strong>Convex Lens:</strong> Focal length is positive ($f > 0$) $\\implies$ Power is <strong>positive ($P > 0$)</strong>. (e.g., $+2.0\\text{ D}$).</li>\n      <li><strong>Concave Lens:</strong> Focal length is negative ($f < 0$) $\\implies$ Power is <strong>negative ($P < 0$)</strong>. (e.g., $-1.5\\text{ D}$).</li>\n    </ul>\n\n    <h4>4. Power of a Combination of Thin Lenses</h4>\n    <p>When multiple thin lenses of powers $P_1, P_2, P_3, \\dots$ are placed in direct contact, the net equivalent power ($P$) of the combination is simply the <strong>algebraic sum</strong> of the individual powers:</p>\n    $$P = P_1 + P_2 + P_3 + \\dots$$\n    <p>This additive property is routinely used by opticians and camera lens designers to minimize optical aberrations.</p>\n  </div>\n</div>\n",
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
                {
                    "id": "m19_q01",
                    "question": "The degree of convergence or divergence of light rays achieved by a lens is defined as its power (P). What is the formula for power P in terms of focal length f?",
                    "options": [
                        "P = f",
                        "P = 1 / f (where f is in metres)",
                        "P = f²",
                        "P = 100 / f (where f is in metres)"
                    ],
                    "answer": "P = 1 / f (where f is in metres)",
                    "explanation": "Optical power is the reciprocal of focal length expressed in metres: P = 1 / f (in metres)."
                },
                {
                    "id": "m19_q02",
                    "question": "What is the SI unit of power of a lens?",
                    "options": [
                        "Metre (m)",
                        "Dioptre (D, m⁻¹)",
                        "Candela (cd)",
                        "Watt (W)"
                    ],
                    "answer": "Dioptre (D, m⁻¹)",
                    "explanation": "The SI unit of lens power is dioptre (D), where 1 D = 1 m⁻¹."
                },
                {
                    "id": "m19_q03",
                    "question": "Define 1 dioptre (1 D) of power of a lens:",
                    "options": [
                        "Power of a lens of focal length 1 cm",
                        "Power of a lens whose focal length is exactly 1 metre (1 D = 1 m⁻¹)",
                        "Power of a lens that absorbs all light",
                        "Power of a plane glass slab"
                    ],
                    "answer": "Power of a lens whose focal length is exactly 1 metre (1 D = 1 m⁻¹)",
                    "explanation": "One dioptre is the optical power of a lens having a focal length of 1 metre."
                },
                {
                    "id": "m19_q04",
                    "question": "An optician prescribes a corrective lens of power P = +2.0 D. What is the nature and focal length of this lens?",
                    "options": [
                        "Concave lens with focal length -0.50 m",
                        "Convex lens with focal length +0.50 m (+50 cm)",
                        "Convex lens with focal length +2.0 m",
                        "Plane lens with zero focal length"
                    ],
                    "answer": "Convex lens with focal length +0.50 m (+50 cm)",
                    "explanation": "f = 1 / P = 1 / (+2.0 D) = +0.50 m = +50 cm. Positive power denotes a converging convex lens."
                },
                {
                    "id": "m19_q05",
                    "question": "What is the power of a concave lens having a focal length of 2 metres?",
                    "options": [
                        "+2.0 D",
                        "-0.5 D",
                        "+0.5 D",
                        "-2.0 D"
                    ],
                    "answer": "-0.5 D",
                    "explanation": "For a concave lens, f = -2 m. Power P = 1 / f = 1 / (-2 m) = -0.5 D."
                },
                {
                    "id": "m19_q06",
                    "question": "What is the power of a convex lens having a focal length of 50 cm?",
                    "options": [
                        "+2.0 D",
                        "-2.0 D",
                        "+0.5 D",
                        "+50 D"
                    ],
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
                    "options": [
                        "+2.0 D",
                        "+5.0 D",
                        "-2.0 D",
                        "-5.25 D"
                    ],
                    "answer": "+2.0 D",
                    "explanation": "Net power P = P1 + P2 = +3.5 D + (-1.5 D) = +2.0 D."
                },
                {
                    "id": "m19_q09",
                    "question": "What is the equivalent focal length of the combined lens system in the question above (P = +2.0 D)?",
                    "options": [
                        "+50 cm (convex lens)",
                        "-50 cm",
                        "+20 cm",
                        "+100 cm"
                    ],
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
        },
        {
            "id": "m20",
            "moduleNumber": 20,
            "title": "Comprehensive Optics Problem Solving: Mirrors, Lenses & Systems",
            "tagline": "Mastery problem-solving covering mirror formula, lens formula, magnification, and power calculations.",
            "readingTimeMins": 5,
            "theoryHtml": "\n<div class=\"module-content\">\n  <div class=\"theory-section\">\n    <h4>1. Summary of Master Equations in Optics</h4>\n    <table class=\"table-bordered\" style=\"width:100%; border-collapse:collapse; margin:10px 0;\">\n      <thead><tr style=\"background:#f1f5f9;\"><th>Quantity</th><th>Spherical Mirror</th><th>Spherical Lens</th></tr></thead>\n      <tbody>\n        <tr><td><strong>Fundamental Formula</strong></td><td>$\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$</td><td>$\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$</td></tr>\n        <tr><td><strong>Focal Length ($f$)</strong></td><td>$f = \\frac{R}{2}$</td><td>$f = \\frac{1}{P\\text{ (m)}}$</td></tr>\n        <tr><td><strong>Linear Magnification ($m$)</strong></td><td>$m = \\frac{h'}{h} = -\\frac{v}{u}$</td><td>$m = \\frac{h'}{h} = +\\frac{v}{u}$</td></tr>\n        <tr><td><strong>Convex Element Sign</strong></td><td>$f > 0$</td><td>$f > 0$, $P > 0$</td></tr>\n        <tr><td><strong>Concave Element Sign</strong></td><td>$f < 0$</td><td>$f < 0$, $P < 0$</td></tr>\n        <tr><td><strong>Object Distance ($u$)</strong></td><td>Always negative ($-$)</td><td>Always negative ($-$)</td></tr>\n      </tbody>\n    </table>\n\n    <h4>2. Systematic Checklist for Solving Board Exam Numericals</h4>\n    <ol>\n      <li>Identify whether the optical element is a <strong>Mirror</strong> or a <strong>Lens</strong>.</li>\n      <li>Identify whether it is <strong>Convex</strong> or <strong>Concave</strong>.</li>\n      <li>Write down all given values ($u, v, f, h, P$) with their explicit Cartesian signs.</li>\n      <li>Select the appropriate equation and solve algebraically before inserting numbers.</li>\n      <li>Verify the physical realism: check if magnification signs match the real/virtual nature of the image!</li>\n    </ol>\n  </div>\n</div>\n",
            "pointsToRemember": [
                "Mirrors: $\\frac{1}{v} + \\frac{1}{u} = \\frac{1}{f}$ and $m = -\\frac{v}{u}$.",
                "Lenses: $\\frac{1}{v} - \\frac{1}{u} = \\frac{1}{f}$ and $m = +\\frac{v}{u}$.",
                "Power: $P = 1/f\\text{ (m)}$; combined lenses: $P = P_1 + P_2$."
            ],
            "keyNotes": [
                "Always double-check units: convert cm to m when calculating Power in Dioptres, and convert m to cm when comparing with object/image distances."
            ],
            "questions": [
                {
                    "id": "m20_q01",
                    "question": "An object 7.0 cm high is placed at a distance of 27 cm in front of a concave mirror of focal length 18 cm. At what distance should a screen be placed to obtain a sharp image, and what is the height and nature of the image?",
                    "options": [
                        "v = -54 cm (54 cm in front of mirror); h' = -14.0 cm; Real and inverted",
                        "v = +54 cm; h' = +14.0 cm; Virtual and erect",
                        "v = -18 cm; h' = -7.0 cm; Real and inverted",
                        "v = -36 cm; h' = -10.5 cm; Real and inverted"
                    ],
                    "answer": "v = -54 cm (54 cm in front of mirror); h' = -14.0 cm; Real and inverted",
                    "explanation": "Concave mirror: f = -18 cm, u = -27 cm. 1/v = 1/(-18) - 1/(-27) = -1/18 + 1/27 = -1/54 ⇒ v = -54 cm. Screen at 54 cm in front. m = -v/u = -(-54)/(-27) = -2. h' = m × h = -2 × 7.0 cm = -14.0 cm (Real, inverted, 2x enlarged)."
                },
                {
                    "id": "m20_q02",
                    "question": "An illuminated object 2.0 cm high is placed perpendicular to the principal axis of a converging convex lens of focal length 10 cm at an object distance of 15 cm. What is the image position (v), magnification (m), and image height (h')?",
                    "options": [
                        "v = -30 cm; m = +2; h' = +4.0 cm",
                        "v = +30 cm (on other side); m = -2; h' = -4.0 cm (Real, inverted, enlarged)",
                        "v = +15 cm; m = -1; h' = -2.0 cm",
                        "v = +60 cm; m = -4; h' = -8.0 cm"
                    ],
                    "answer": "v = +30 cm (on other side); m = -2; h' = -4.0 cm (Real, inverted, enlarged)",
                    "explanation": "Convex lens: f = +10 cm, u = -15 cm. 1/v = 1/f + 1/u = 1/10 + 1/(-15) = 1/10 - 1/15 = 1/30 ⇒ v = +30 cm. m = v/u = (+30)/(-15) = -2. h' = m × h = -2 × 2.0 cm = -4.0 cm."
                },
                {
                    "id": "m20_q03",
                    "question": "A composite lens system consists of three thin lenses in contact: Lens 1 (convex, f₁ = +20 cm), Lens 2 (concave, f₂ = -50 cm), and Lens 3 (convex, f₃ = +25 cm). What is the net power (P) and equivalent focal length (F) of the combination?",
                    "options": [
                        "P = +3.0 D; F = +33.3 cm",
                        "P = +7.0 D; F = +14.28 cm (+14.3 cm)",
                        "P = +11.0 D; F = +9.09 cm",
                        "P = -2.0 D; F = -50.0 cm"
                    ],
                    "answer": "P = +7.0 D; F = +14.28 cm (+14.3 cm)",
                    "explanation": "P₁ = 100/20 = +5 D; P₂ = 100/(-50) = -2 D; P₃ = 100/25 = +4 D. Net P = +5 - 2 + 4 = +7.0 D. Equivalent focal length F = 100 / P = 100 / 7 = +14.28 cm."
                },
                {
                    "id": "m20_q04",
                    "question": "Light travels from medium A into medium B. The angle of incidence is 45° and the angle of refraction is 30°. What is the refractive index of medium B with respect to medium A (nBA)?",
                    "options": [
                        "1.0",
                        "√2 ≈ 1.414",
                        "1 / √2 ≈ 0.707",
                        "2.0"
                    ],
                    "answer": "√2 ≈ 1.414",
                    "explanation": "nBA = (sin i) / (sin r) = sin 45° / sin 30° = (1 / √2) / (1 / 2) = 2 / √2 = √2 ≈ 1.414."
                },
                {
                    "id": "m20_q05",
                    "question": "Why does the sun appear slightly oval/flattened at sunrise and sunset?",
                    "options": [
                        "Sun expands under solar heat",
                        "Atmospheric refraction bends light rays from the lower edge of the solar disc more strongly than rays from the upper edge due to vertical density gradients in atmospheric air",
                        "Clouds physically block the top and bottom",
                        "Diffraction through dust particles"
                    ],
                    "answer": "Atmospheric refraction bends light rays from the lower edge of the solar disc more strongly than rays from the upper edge due to vertical density gradients in atmospheric air",
                    "explanation": "The atmospheric density gradient causes differential upward refraction: rays from the lower limb travel through denser air and bend more than rays from the upper limb, causing apparent vertical compression."
                },
                {
                    "id": "m20_q06",
                    "question": "In an optical bench experiment, a student obtains a sharp image of a candle flame on a screen using a concave mirror. If the lower half of the mirror is completely covered with black cardboard, what changes will occur on the screen?",
                    "options": [
                        "The upper half of the flame image disappears",
                        "The full image of the flame remains visible on the screen, but its illumination brightness is halved",
                        "The image shifts by 10 cm",
                        "The image becomes virtual"
                    ],
                    "answer": "The full image of the flame remains visible on the screen, but its illumination brightness is halved",
                    "explanation": "Every point of the reflecting surface reflects rays originating from all points of the object; covering the lower half reduces the total light energy collected by 50% without altering image geometry."
                },
                {
                    "id": "m20_q07",
                    "question": "What is the physical condition under which a ray of light passing from an optically denser medium into an optically rarer medium undergoes Total Internal Reflection?",
                    "options": [
                        "Angle of incidence is exactly 0°",
                        "Angle of incidence (i) in the denser medium exceeds the critical angle (C) for that pair of media (sin C = 1 / n)",
                        "Both media have equal refractive index",
                        "Light must be monochromatic red only"
                    ],
                    "answer": "Angle of incidence (i) in the denser medium exceeds the critical angle (C) for that pair of media (sin C = 1 / n)",
                    "explanation": "When light travels from a denser to a rarer medium at an angle of incidence greater than the critical angle (i > C), it cannot refract (r > 90°) and is 100% reflected back into the denser medium."
                },
                {
                    "id": "m20_q08",
                    "question": "A ray of light traveling in water (nw = 4/3) is incident on a glass plate (ng = 3/2). What is the refractive index of glass with respect to water (ngw)?",
                    "options": [
                        "8/9",
                        "9/8 = 1.125",
                        "2/1",
                        "1/2"
                    ],
                    "answer": "9/8 = 1.125",
                    "explanation": "ngw = ng / nw = (3/2) / (4/3) = (3/2) × (3/4) = 9/8 = 1.125."
                },
                {
                    "id": "m20_q09",
                    "question": "A virtual image formed by a concave mirror is ALWAYS __________ the object, while a virtual image formed by a convex mirror is ALWAYS __________ the object.",
                    "options": [
                        "Diminished; Enlarged",
                        "Enlarged (magnified); Diminished",
                        "Same size; Diminished",
                        "Same size; Same size"
                    ],
                    "answer": "Enlarged (magnified); Diminished",
                    "explanation": "A concave mirror's virtual image (object between P and F) is always magnified (m > 1). A convex mirror's virtual image is always diminished (0 < m < 1)."
                },
                {
                    "id": "m20_q10",
                    "question": "A concave lens has focal length of 15 cm. At what distance should the object from the lens be placed so that it forms an image at 10 cm from the lens?",
                    "options": [
                        "-30 cm",
                        "+30 cm",
                        "-25 cm",
                        "-15 cm"
                    ],
                    "answer": "-30 cm",
                    "explanation": "For a concave lens, f = -15 cm, and image is virtual so v = -10 cm. 1/f = 1/v - 1/u => 1/u = 1/v - 1/f = 1/(-10) - 1/(-15) = -1/10 + 1/15 = -1/30 => u = -30 cm."
                }
            ]
        }
    ]
};

if (typeof window !== 'undefined') {
    window.COURSE_CHAPTER_DATA = COURSE_CHAPTER_9_SCIENCE;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COURSE_CHAPTER_9_SCIENCE;
}
