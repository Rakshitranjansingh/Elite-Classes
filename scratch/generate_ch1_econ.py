# -*- coding: utf-8 -*-
"""
Generator for Class 10 Economics Chapter 1 Course Data: Development (c10_econ_ch1)
20 Progressive Mini-Modules, 200 Questions Total (10 per module)
"""
import json
import re

# Load bank questions
with open('scratch/econ_bank_ch1.json', 'r', encoding='utf-8') as f:
    bank_questions = json.load(f)

def clean_ncert(text):
    text = re.sub(r'\bNCERT\b', 'standard curriculum', text, flags=re.IGNORECASE)
    return text

def convert_bank_q(q, new_id):
    opts = [
        clean_ncert(q['option_a']),
        clean_ncert(q['option_b']),
        clean_ncert(q['option_c']),
        clean_ncert(q['option_d'])
    ]
    correct_key = q['correct_option'].upper()
    key_idx = {'A': 0, 'B': 1, 'C': 2, 'D': 3}[correct_key]
    ans = opts[key_idx]
    return {
        "id": new_id,
        "question": clean_ncert(q['question_text']),
        "options": opts,
        "answer": ans,
        "explanation": clean_ncert(q['explanation'])
    }

# 20 Module Definitions for Chapter 1: Development
modules_spec = [
    {
        "num": 1,
        "title": "What Development Promises — Different People, Different Goals",
        "tagline": "Understanding how distinct life situations shape individual developmental aspirations.",
        "theoryHtml": """
            <p>The idea of development or progress has always been with us. We have aspirations about what we would like to do and how we would like to live. Similarly, we have ideas about what a country should be like, what essential things are required, and whether everyone can live together better.</p>
            <p>Different persons can have different developmental goals because their life situations and pressing necessities differ vastly:</p>
            <div class="activity-box" style="background:#f0f9ff; border-left:4px solid #0284c7; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>📊 Contrasting Developmental Goals in India:</strong>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li><strong>Landless rural labourer:</strong> Desires more days of daily wage work, better wages, quality local school education for children, and no social discrimination in the village.</li>
                    <li><strong>Prosperous farmer from Punjab:</strong> Seeks assured high family income through higher support prices for crops, cheap and hardworking migrant labourers, and the ability to settle children abroad.</li>
                    <li><strong>An urban unemployed youth:</strong> Prioritises a stable job opportunity, adequate starting pay, and social security.</li>
                    <li><strong>A rural woman from a land-owning family:</strong> Desires personal autonomy, right to inherit land, and dignity within household decision-making.</li>
                </ul>
            </div>
            <p>Because people live in diverse socio-economic realities, what is development for one person may not be development for another. People look at goals that are most important to them—things that can fulfill their immediate aspirations.</p>
        """,
        "pointsToRemember": [
            "Developmental aspirations are directly shaped by an individual's existing life circumstances and unmet needs.",
            "A landless labourer seeks daily wages and social equality, whereas a wealthy farmer prioritises crop prices and cheap labour.",
            "Because life realities differ, two individuals or groups will rarely have the identical developmental agenda."
        ],
        "keyNotes": [
            "Core principle: Different persons can have different developmental goals based on their distinct socioeconomic positions."
        ],
        "bank_slice": (0, 5),
        "custom_questions": [
            {
                "question": "Why do different categories of people possess fundamentally different developmental goals?",
                "options": [
                    "Because their life situations and unmet needs are diverse and unique",
                    "Because government rules force them to choose separate goals",
                    "Because people in villages are not allowed to have high aspirations",
                    "Because all individuals earn the exact same annual income"
                ],
                "answer": "Because their life situations and unmet needs are diverse and unique",
                "explanation": "Individuals seek things that are most critical to their immediate survival, wellbeing, and current socioeconomic context."
            },
            {
                "question": "Which of the following is most likely a primary developmental aspiration of a girl from an affluent urban family?",
                "options": [
                    "Getting as much freedom and autonomy as her brother enjoys",
                    "Working as a daily wage manual labourer in a field",
                    "Receiving subsidised rations from a fair price shop",
                    "Having a tubewell drilled in a rural farm"
                ],
                "answer": "Getting as much freedom and autonomy as her brother enjoys",
                "explanation": "In an affluent urban family, a girl often aspires to gender equality, autonomy in deciding her studies, and equal freedom as given to male siblings."
            },
            {
                "question": "A farmer who depends solely on rain for growing crops would consider which of the following as their highest developmental goal?",
                "options": [
                    "Construction of canals or dependable irrigation facilities",
                    "Establishment of a luxury shopping mall in the city",
                    "High import duties on foreign industrial computers",
                    "Construction of a six-lane expressway through their village"
                ],
                "answer": "Construction of canals or dependable irrigation facilities",
                "explanation": "Rain-dependent farmers are acutely vulnerable to monsoon failure; hence reliable irrigation is their paramount developmental need."
            },
            {
                "question": "Which developmental aspiration is shared by both a rural wage labourer and an urban factory worker?",
                "options": [
                    "Job security and regular, fair income",
                    "Selling crops at minimum support prices",
                    "Sending children to international universities abroad",
                    "Constructing commercial real estate towers"
                ],
                "answer": "Job security and regular, fair income",
                "explanation": "Both rural labourers and urban factory workers depend on wage labour and hence seek regular employment, fair pay, and job continuity."
            },
            {
                "question": "An adivasi from the Narmada river valley seeking to preserve their ancestral livelihood will view which project as anti-developmental?",
                "options": [
                    "Construction of a mega hydro-electric dam that submerges their land",
                    "Setting up a community primary healthcare centre",
                    "Providing forest rights and minor forest produce procurement",
                    "Improving natural drinking water wells"
                ],
                "answer": "Construction of a mega hydro-electric dam that submerges their land",
                "explanation": "Mega dams submerge tribal lands and disrupt traditional livelihoods, making such infrastructure destructive from the adivasis' perspective."
            }
        ]
    },
    {
        "num": 2,
        "title": "Conflicting Developmental Aspirations & Everyday Dilemmas",
        "tagline": "How development for one section of society can spell destruction for another.",
        "theoryHtml": """
            <p>It is not just that people have different developmental goals. At times, two persons or groups of persons may seek things which are <strong>conflicting</strong>. A goal that benefits one group may cause severe harm, displacement, or loss of livelihood to another.</p>
            <div class="activity-box" style="background:#fff7ed; border-left:4px solid #ea580c; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>⚡ The Classic Conflict: Industrialists vs Tribals (Dams)</strong>
                <p style="margin:6px 0 0 0; line-height:1.6;">
                    Industrialists and urban consumers require large quantities of electricity to run factories and cities. To generate hydroelectric power, they advocate for the construction of mega dams. However, building massive dams submerges agricultural lands, destroys local ecosystems, and disrupts the lives of thousands of displaced tribal communities (adivasis) who lose their ancestral homes and livelihood.
                </p>
            </div>
            <p>Similarly, a girl might expect as much freedom and opportunity as her brother, and that he should also share in the household work. Her brother may not like this arrangement. Hence, developmental goals can be in direct opposition.</p>
            <p>From this observation, two crucial conclusions emerge:</p>
            <ol style="line-height:1.6;">
                <li>Different persons can have different developmental goals.</li>
                <li>What may be development for one may <strong>not</strong> be development for the other; it may even be <strong>destructive</strong> for the other.</li>
            </ol>
        """,
        "pointsToRemember": [
            "Developmental goals can be conflicting: progress for one group may bring displacement or destruction to another.",
            "Industrialists need dams for electricity, while tribals lose their land and cultural roots when valleys are submerged.",
            "Development policy must balance conflicting interests rather than blindly favoring the economically powerful."
        ],
        "keyNotes": [
            "Dual Conclusion: (1) Different people have different goals. (2) What is development for one may be destructive for another."
        ],
        "bank_slice": (5, 10),
        "custom_questions": [
            {
                "question": "What is the primary reason why construction of large hydroelectric dams causes social conflict?",
                "options": [
                    "They displace indigenous communities and submerge vast tracts of farmland",
                    "They decrease the amount of electricity available to nearby towns",
                    "They cause severe reduction in rainfall across the entire continent",
                    "They are prohibited under international economic treaties"
                ],
                "answer": "They displace indigenous communities and submerge vast tracts of farmland",
                "explanation": "Mega dam reservoirs inundate fertile river valleys, forest habitats, and local villages, displacing thousands of local residents."
            },
            {
                "question": "Which of the following scenarios best exemplifies conflicting developmental goals within a household?",
                "options": [
                    "A sister expecting her brother to share household chores while the brother resists",
                    "Both siblings agreeing to study for upcoming board examinations",
                    "Parents buying school notebooks for all children equally",
                    "A family going together on an annual summer vacation"
                ],
                "answer": "A sister expecting her brother to share household chores while the brother resists",
                "explanation": "The sister's aspiration for gender equality in domestic labor conflicts directly with the brother's unwillingness to perform household chores."
            },
            {
                "question": "What alternative do tribal people and local farmers prefer over mega dams for irrigating their small fields?",
                "options": [
                    "Small check dams or check tanks and local rainwater harvesting systems",
                    "Nuclear power plants built on their homesteads",
                    "Complete abandonment of farming in favor of coal mining",
                    "Importing bottled water from foreign nations"
                ],
                "answer": "Small check dams or check tanks and local rainwater harvesting systems",
                "explanation": "Small check dams and local watershed management provide irrigation without displacing villages or submerging forests."
            },
            {
                "question": "Which statement correctly summarises the relationship between individual development and collective progress?",
                "options": [
                    "What constitutes development for one group can be destructive for another",
                    "Every developmental project inevitably benefits 100% of all citizens equally",
                    "Development only occurs when all citizens work in heavy manufacturing",
                    "No individual goals ever contradict national economic plans"
                ],
                "answer": "What constitutes development for one group can be destructive for another",
                "explanation": "Because resources and interests conflict, one group's developmental achievement can cause negative externalities and destruction for others."
            },
            {
                "question": "If an industrialist wants cheap electricity through a coal thermal plant and local residents oppose air pollution, what does this signify?",
                "options": [
                    "Conflicting developmental priorities between private profits and environmental health",
                    "Ignorance of economic principles by local residents",
                    "A failure of international monetary trade agreements",
                    "That thermal power produces zero smoke or emissions"
                ],
                "answer": "Conflicting developmental priorities between private profits and environmental health",
                "explanation": "Industrialists prioritize lower production costs and power, whereas local residents prioritize clean air, public health, and clean drinking water."
            }
        ]
    },
    {
        "num": 3,
        "title": "Income and Other Non-Material Goals (Freedom, Security, Respect)",
        "tagline": "Why human happiness and progress demand much more than just a fatter paycheck.",
        "theoryHtml": """
            <p>If you examine what people desire most, you will notice one common thread: people desire regular work, better wages, and decent prices for their crops or other products. In other words, they want <strong>more income</strong>.</p>
            <p>However, people do not live by income alone. Besides seeking more income, one-way or another, people also seek non-material things such as:</p>
            <ul style="line-height:1.6;">
                <li><strong>Equal treatment and freedom</strong>: Discrimination based on caste, religion, or gender damages human dignity.</li>
                <li><strong>Security</strong>: Safety in the workplace and peace of mind in society.</li>
                <li><strong>Respect of others</strong>: Resentment occurs when people are treated with indignity or contempt.</li>
            </ul>
            <div class="activity-box" style="background:#f1f5f9; border-left:4px solid #475569; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>💼 The Job Choice Dilemma:</strong>
                <p style="margin:6px 0 0 0; line-height:1.6;">
                    Consider a job offer far away with very high pay, but with no job security, dangerous conditions, and zero time for family. Contrast this with a job with moderate pay, permanent tenure, health benefits, respectful workplace culture, and time for loved ones. Most thoughtful individuals choose the latter because a mix of non-material security outweighs pure monetary reward.
                </p>
            </div>
            <p>Therefore, for development, people look at a <strong>mix of goals</strong>. It is true that if women are engaged in paid work, their dignity in the household and society increases. At the same time, a safe and secure environment may allow more women to take up a variety of jobs or run a business.</p>
        """,
        "pointsToRemember": [
            "Income is an essential goal, but non-material goals like freedom, respect, security, and equal treatment are equally vital.",
            "Material goods buy commodities, but quality of life depends decisively on non-material factors.",
            "When evaluating opportunities (like jobs), people weigh a mix of material income and non-material security."
        ],
        "keyNotes": [
            "Developmental goals are a mix of material gains (income) and non-material values (security, freedom, respect, dignity)."
        ],
        "bank_slice": (10, 15),
        "custom_questions": [
            {
                "question": "Which of the following is classified as a non-material developmental goal?",
                "options": [
                    "Freedom, equal treatment, and dignity",
                    "A higher monthly monetary salary",
                    "A brand-new automobile",
                    "A spacious multi-story house"
                ],
                "answer": "Freedom, equal treatment, and dignity",
                "explanation": "Non-material goals refer to intangible human values such as freedom, security, respect, and absence of discrimination."
            },
            {
                "question": "Why might an individual turn down a high-paying corporate job in a remote, hazardous conflict zone?",
                "options": [
                    "Because personal physical safety and family wellbeing outweigh monetary pay",
                    "Because high salaries are illegal under national labor codes",
                    "Because remote companies do not use official currency",
                    "Because money cannot be deposited in commercial banks"
                ],
                "answer": "Because personal physical safety and family wellbeing outweigh monetary pay",
                "explanation": "Human wellbeing depends heavily on non-material security; danger and lack of family time can render high income unappealing."
            },
            {
                "question": "When women engage in paid employment outside the home, what positive developmental shift occurs?",
                "options": [
                    "Their dignity and bargaining power in the household and society increase",
                    "The national birth rate immediately drops to absolute zero",
                    "Men are strictly forbidden from working in offices",
                    "The national currency loses its global exchange value"
                ],
                "answer": "Their dignity and bargaining power in the household and society increase",
                "explanation": "Economic independence enhances women's social standing, self-respect, and decision-making role within the family."
            },
            {
                "question": "Which of the following best describes the term 'a mix of goals' in development?",
                "options": [
                    "Seeking both adequate income and essential non-material attributes like respect and safety",
                    "Working two completely unrelated manual jobs simultaneously",
                    "Mixing public sector and private sector bank accounts",
                    "Demanding that all goods in the market be sold at uniform prices"
                ],
                "answer": "Seeking both adequate income and essential non-material attributes like respect and safety",
                "explanation": "A mix of goals means humans strive for material prosperity together with non-material assets such as freedom, respect, and health."
            },
            {
                "question": "Money can buy material goods, but which of the following cannot be bought directly with personal money?",
                "options": [
                    "A pollution-free natural environment and protection from infectious epidemics",
                    "A television set and smartphone",
                    "Branded clothing and packaged foods",
                    "A private luxury apartment in a city"
                ],
                "answer": "A pollution-free natural environment and protection from infectious epidemics",
                "explanation": "Clean air, ecological health, and community immunity require collective social action and public infrastructure, not just personal cash."
            }
        ]
    },
    {
        "num": 4,
        "title": "National Development & Diverse Perspectives",
        "tagline": "How nations debate priorities, public spending, and fair pathways for all citizens.",
        "theoryHtml": """
            <p>If individuals seek different and sometimes conflicting goals, then their notions of <strong>national development</strong> are also likely to be diverse and conflicting. When discussing how India or any nation should develop, different citizens hold contrasting opinions.</p>
            <p>National development involves answering critical policy questions:</p>
            <ul style="line-height:1.6;">
                <li>Can development be achieved in a way that benefits the largest number of people, or only a small elite?</li>
                <li>Should national funds be invested in expressways, metro trains, and airports, or in village schools, rural clinics, and drinking water pipelines?</li>
                <li>Is there a better way of doing things that minimizes ecological harm and avoids human displacement?</li>
            </ul>
            <div class="activity-box" style="background:#fef2f2; border-left:4px solid #ef4444; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>⚠️ Thought Experiment:</strong>
                <p style="margin:6px 0 0 0; line-height:1.6;">
                    If 20 students in a classroom are asked to write an essay on 'What India Should Do to Become Developed', they will propose 20 distinct ideas—ranging from free software labs and high-speed rail to organic farming and universal healthcare. It is very important to keep in mind that different persons could have <strong>different as well as conflicting notions of a country's development</strong>.
                </p>
            </div>
            <p>National development therefore requires democratic debate, fair legal processes, and prioritizing the interests of the vulnerable majority over narrow private lobbies.</p>
        """,
        "pointsToRemember": [
            "National development refers to a country's overall capacity to improve the living standards, freedom, and capabilities of its citizens.",
            "Different citizens have diverse and sometimes conflicting visions of how a country should allocate its resources.",
            "Democratic decision-making must judge whether an idea benefits a large section of citizens or only a privileged few."
        ],
        "keyNotes": [
            "Key takeaway: Different persons can have different as well as conflicting notions of a country's development."
        ],
        "bank_slice": (15, 20),
        "custom_questions": [
            {
                "question": "What is meant by the concept of 'National Development'?",
                "options": [
                    "Comprehensive progress that enhances the living conditions, health, education, and welfare of citizens",
                    "Solely increasing the military expenditure and defense budget of a country",
                    "Building skyscrapers exclusively in the capital city",
                    "Doubling the price of essential commodities every financial quarter"
                ],
                "answer": "Comprehensive progress that enhances the living conditions, health, education, and welfare of citizens",
                "explanation": "National development encompasses broad-based improvement in people's real living standards, capabilities, and social welfare."
            },
            {
                "question": "Why do different citizens hold conflicting views on what constitutes national development?",
                "options": [
                    "Because public policies affect different sections of society in contrasting ways",
                    "Because citizens are legally forbidden from holding similar opinions",
                    "Because only government officials are allowed to think about the nation",
                    "Because economic principles do not apply to developing nations"
                ],
                "answer": "Because public policies affect different sections of society in contrasting ways",
                "explanation": "A policy that favors urban industrial expansion may displace rural farmers, leading to conflicting views on national development."
            },
            {
                "question": "When evaluating two competing national projects, which criterion should a democratic government prioritize?",
                "options": [
                    "The project that benefits the largest number of people fairly and equitably",
                    "The project that maximizes profits exclusively for political donors",
                    "The project that requires no public disclosure or parliamentary debate",
                    "The project that demolishes the maximum number of heritage sites"
                ],
                "answer": "The project that benefits the largest number of people fairly and equitably",
                "explanation": "Democratic public policy must prioritize broad social welfare, justice, and the upliftment of the majority."
            },
            {
                "question": "Which of the following proposals reflects a strong national developmental priority for rural India?",
                "options": [
                    "Expanding primary healthcare centers and reliable rural electrification",
                    "Constructing private golf courses on fertile multi-crop farmland",
                    "Eliminating all subsidies on agricultural seeds and power",
                    "Closing rural government schools to reduce public deficit"
                ],
                "answer": "Expanding primary healthcare centers and reliable rural electrification",
                "explanation": "Strengthening basic healthcare, education, and rural power directly upgrades human development in rural communities."
            },
            {
                "question": "If a policy decision benefits a small corporate entity while polluting drinking water for 50 villages, can it be called true national development?",
                "options": [
                    "No, because it degrades the health and basic survival needs of the broader population",
                    "Yes, because corporate profits always outweigh public health",
                    "Yes, because rural villages do not contribute to national progress",
                    "No, because corporations are not recognized by national law"
                ],
                "answer": "No, because it degrades the health and basic survival needs of the broader population",
                "explanation": "True national development cannot be claimed when severe environmental destruction and health crises are imposed on communities."
            }
        ]
    },
    {
        "num": 5,
        "title": "Comparing Countries and States: Per Capita Income Concept",
        "tagline": "How total national income and population determine the average earnings of a country.",
        "theoryHtml": """
            <p>When we compare different things, they could have similarities as well as differences. Which aspects do we use to compare them? For comparing countries, their <strong>income</strong> is considered to be one of the most important attributes. Countries with higher income are considered more developed than others with less income.</p>
            <p>However, what is the income of a country? Intuitively, the income of the country is the income of all the residents of the country. This gives us the <strong>Total National Income</strong>.</p>
            <p>Yet, for comparison between countries, total income is not such an effective measure. Why?</p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🧮 Why Total Income Fails in Cross-Country Comparisons:</strong>
                <p style="margin:6px 0 0 0; line-height:1.6;">
                    Since countries have different population sizes, comparing total income will not tell us what an <em>average person</em> is likely to earn. A country with 1.4 billion people will naturally have a huge total national income even if individual citizens remain impoverished, compared to a small country with 5 million citizens who enjoy high personal prosperity.
                </p>
            </div>
            <p>Hence, we compare the <strong>Average Income</strong>, which is the total income of the country divided by its total population. The average income is universally known as <strong>Per Capita Income (PCI)</strong>:</p>
            <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:10px 14px; border-radius:6px; font-weight:600; text-align:center; margin:12px 0;">
                Per Capita Income = Total National Income / Total Population
            </div>
        """,
        "pointsToRemember": [
            "National income represents the aggregate monetary earnings of all citizens of a nation in a financial year.",
            "Total income cannot be used to compare countries of unequal population sizes.",
            "Per Capita Income (Average Income) equals Total National Income divided by Total Population."
        ],
        "keyNotes": [
            "Mathematical Formula: Per Capita Income = Total National Income / Total Population."
        ],
        "bank_slice": (20, 25),
        "custom_questions": [
            {
                "question": "What is the mathematical definition of Per Capita Income?",
                "options": [
                    "Total National Income divided by Total Population",
                    "Total Export Revenue minus Total Import Expenditure",
                    "Average monthly wage of agricultural workers",
                    "Gross domestic revenue divided by total geographic area in square kilometers"
                ],
                "answer": "Total National Income divided by Total Population",
                "explanation": "Per Capita Income represents the average income earned per person in a given country during a specific period."
            },
            {
                "question": "Why is Total National Income an unsatisfactory indicator for comparing the living standards of two countries?",
                "options": [
                    "Countries differ widely in population size, so total income obscures average individual earnings",
                    "Total income cannot be converted into international currencies",
                    "Total income includes only agricultural production",
                    "International agencies refuse to calculate total national figures"
                ],
                "answer": "Countries differ widely in population size, so total income obscures average individual earnings",
                "explanation": "A nation with a massive population may have high aggregate income while its average citizen remains severely underpaid."
            },
            {
                "question": "If Country A has a total income of $500 billion with 50 million people, and Country B has $300 billion with 15 million people, which has higher Per Capita Income?",
                "options": [
                    "Country B ($20,000 vs $10,000 in Country A)",
                    "Country A ($50,000 vs $15,000 in Country B)",
                    "Both have identical per capita income",
                    "Cannot be determined without knowing geographic area"
                ],
                "answer": "Country B ($20,000 vs $10,000 in Country A)",
                "explanation": "Country A PCI = 500B / 50M = $10,000. Country B PCI = 300B / 15M = $20,000. Thus, Country B's average income is twice that of Country A."
            },
            {
                "question": "What assumption underlies using Per Capita Income as a benchmark of economic development?",
                "options": [
                    "Higher income enables citizens to acquire more of the goods and services necessary for life",
                    "High income automatically eradicates all social diseases and crime",
                    "Every citizen in a high-income nation receives the exact identical salary",
                    "Currency value remains permanent over multiple decades"
                ],
                "answer": "Higher income enables citizens to acquire more of the goods and services necessary for life",
                "explanation": "Income reflects command over material resources, purchasing power, and essential goods needed for human comfort."
            },
            {
                "question": "Which term is synonymous with Per Capita Income?",
                "options": [
                    "Average Income",
                    "Net Disposable Wealth",
                    "Gross Industrial Margin",
                    "Median Wage Rate"
                ],
                "answer": "Average Income",
                "explanation": "Per capita income is literally the average annual earnings per individual across the entire population."
            }
        ]
    }
]

print("Modules 1-5 defined. Adding modules 6-20...")
"""
We will now write out all 20 module definitions into a comprehensive builder script and run it!
"""
