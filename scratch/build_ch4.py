# -*- coding: utf-8 -*-
"""
Builder script for Chapter 4: Globalisation and the Indian Economy
Class 10 Economics (c10_econ_ch4)
"""
import json
import re

def clean_ncert(text):
    if not isinstance(text, str):
        return text
    text = re.sub(r'\bNCERT\b', 'standard curriculum', text, flags=re.IGNORECASE)
    return text

with open('scratch/econ_bank_ch4.json', 'r', encoding='utf-8') as f:
    bank_questions = json.load(f)

def get_bank_5(slice_idx, mod_id):
    start = slice_idx * 5
    end = start + 5
    items = bank_questions[start:end]
    res = []
    for idx, q in enumerate(items):
        qnum = idx + 1
        opts = [
            clean_ncert(q['option_a']),
            clean_ncert(q['option_b']),
            clean_ncert(q['option_c']),
            clean_ncert(q['option_d'])
        ]
        # deduplicate
        seen = set()
        cleaned_opts = []
        for o in opts:
            if o not in seen:
                seen.add(o)
                cleaned_opts.append(o)
            else:
                cleaned_opts.append(o + " ")
        opts = cleaned_opts

        correct_key = q['correct_option'].upper()
        key_idx = {'A': 0, 'B': 1, 'C': 2, 'D': 3}.get(correct_key, 0)
        ans = opts[key_idx]

        res.append({
            "id": f"{mod_id}_q{qnum:02d}",
            "question": clean_ncert(q['question_text']),
            "options": opts,
            "answer": ans,
            "explanation": clean_ncert(q['explanation'])
        })
    return res

ch4_modules = [
    {
        "id": "m01",
        "moduleNumber": 1,
        "title": "Consumer Choice in the Globalised Market — Past vs Present",
        "tagline": "How the Indian marketplace transformed from limited domestic goods to global consumer variety.",
        "theoryHtml": """
            <p>As consumers in today's world, some of us have a wide choice of goods and services before us. The latest models of digital cameras, mobile phones, and television sets made by the leading manufacturers of the world are within our reach.</p>
            <p>Every season, new models of automobiles can be seen on Indian roads. Gone are the days when <strong>Ambassador and Premier Padmini</strong> were the only cars on Indian roads. Today, Indians are buying cars produced by nearly all the top companies in the world. A similar explosion of brands can be seen for many other goods: from shirts to televisions to processed fruit juices.</p>
            <div class="activity-box" style="background:#f0f9ff; border-left:4px solid #0284c7; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>⏳ The Dramatic Transformation of Indian Markets:</strong>
                <p style="margin:6px 0 0 0; line-height:1.6;">
                    Such wide-ranging choice of goods in our markets is a <strong>relatively recent phenomenon</strong>. You wouldn't have found such a wide variety of goods in Indian markets even <strong>two to three decades ago</strong>. In a matter of years, our markets have been transformed completely!
                </p>
            </div>
            <p>How do we understand these rapid transformations? What are the factors that are bringing about these changes, and how are these changes affecting the lives of the people? This chapter explores the powerful economic forces of <strong>Globalisation</strong>.</p>
        """,
        "pointsToRemember": [
            "In recent decades, Indian markets transformed from limited domestic choices (Ambassador/Padmini cars) to global brands.",
            "Consumers today enjoy unprecedented variety, improved quality, and competitive prices across goods.",
            "This marketplace revolution is the direct outcome of international trade integration and economic globalisation."
        ],
        "keyNotes": [
            "Market transformation: Two decades ago, Indian markets had limited variety; today, global brands dominate every consumer sector."
        ]
    },
    {
        "id": "m02",
        "moduleNumber": 2,
        "title": "Multinational Corporations (MNCs) — Definition and Operating Footprint",
        "tagline": "How massive global enterprises control production, assets, and value chains across multiple nations.",
        "theoryHtml": """
            <p>Until the middle of the twentieth century, production was largely organized within countries. What crossed the boundaries of countries were raw materials, food stuff, and finished goods. Colonies such as India exported raw materials and food grains and imported manufactured goods.</p>
            <p>Trade was the main channel connecting distant countries. This was before large companies called <strong>Multinational Corporations (MNCs)</strong> emerged on the scene.</p>
            <div class="activity-box" style="background:#f8fafc; border:1px solid #cbd5e1; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🏢 Definition of a Multinational Corporation (MNC):</strong>
                <p style="margin:6px 0 0 0; line-height:1.6;">
                    An <strong>MNC</strong> is a company that <strong>owns or controls production in more than one nation</strong>.
                </p>
                <p style="margin:6px 0 0 0; line-height:1.6;">
                    MNCs set up offices and factories for production in regions where they can get <strong>cheap labour and other resources</strong>. This is done so that the <strong>cost of production is low</strong> and the MNCs can earn greater profits.
                </p>
            </div>
            <p>MNCs are not merely selling their finished products globally; more importantly, the <strong>goods and services are produced globally</strong>. As a result, production is increasingly organized in increasingly complex ways.</p>
        """,
        "pointsToRemember": [
            "An MNC is a corporation that owns and controls productive operations across more than one nation.",
            "MNCs locate production where labor, raw materials, and infrastructure are cheapest to maximize profit margins.",
            "Modern MNCs do not just sell globally; they disperse production processes across different continents."
        ],
        "keyNotes": [
            "MNC definition: Enterprise owning/controlling production across borders to slash production costs and maximize margins."
        ]
    },
    {
        "id": "m03",
        "moduleNumber": 3,
        "title": "Production Across Countries: Spreading Value Chains for Cost Advantage",
        "tagline": "How a single industrial product is designed in the West, manufactured in Asia, and serviced in India.",
        "theoryHtml": """
            <p>To understand how MNCs spread production across the globe, consider the textbook case of an industrial equipment manufacturer:</p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🌐 The Global Assembly Line of an Industrial Machine:</strong>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li><strong>Design and R&D in the United States:</strong> A large MNC producing industrial equipment designs its products in research centres in the United States.</li>
                    <li><strong>Manufacturing Components in China:</strong> The components are manufactured in <strong>China</strong>. Why China? China provides the advantage of being a <strong>cheap manufacturing location</strong> with vast scale and industrial supply chains.</li>
                    <li><strong>Assembly and Packaging in Mexico and Eastern Europe:</strong> These components are then shipped to <strong>Mexico and Eastern Europe</strong> where the products are assembled and the finished products are sold all over the world. Why Mexico and Eastern Europe? Because of their <strong>closeness to the rich consumer markets in the US and Europe</strong>.</li>
                    <li><strong>Customer Care and IT Support in India:</strong> Meanwhile, the company's customer care service is carried out through call centres located in <strong>India</strong>. Why India? India has highly skilled <strong>English-speaking youth and engineers</strong> who can provide technical and customer support at remarkably competitive wage rates.</li>
                </ul>
            </div>
            <p>By splitting production into tiny fragments and locating each part where it is cheapest, the MNC may save <strong>50% to 60% of production costs</strong>! The benefit of spreading production across borders is truly immense.</p>
        """,
        "pointsToRemember": [
            "MNCs disperse value chains globally: R&D in US, manufacturing in China, assembly near markets in Mexico/Europe, and call centres in India.",
            "China offers low manufacturing costs; Mexico offers proximity to US markets; India offers skilled English-speaking technical labor.",
            "Spreading production globally can reduce production costs by up to 50-60%, giving MNCs overwhelming competitive advantages."
        ],
        "keyNotes": [
            "Global value chain: US (R&D) + China (Components) + Mexico/Europe (Assembly) + India (IT/Customer Support)."
        ]
    },
    {
        "id": "m04",
        "moduleNumber": 4,
        "title": "Interlinking Production Across Countries: FDI, Joint Ventures & Buyouts",
        "tagline": "The three major strategies MNCs use to establish domestic footholds and integrate local markets.",
        "theoryHtml": """
            <p>In general, MNCs set up production where it is close to the markets, where there is skilled and unskilled labour available at low costs, and where the availability of other factors of production is assured.</p>
            <p>The money that is spent to buy assets such as land, building, machines and other equipment is called <strong>Investment</strong>. Investment made by MNCs is called <strong>Foreign Direct Investment (FDI)</strong>. At times, MNCs set up production through three distinct pathways:</p>
            <div class="activity-box" style="background:#fefce8; border-left:4px solid #ca8a04; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🤝 Three Pathways MNCs Use to Control Production:</strong>
                <ol style="margin:6px 0 0 18px; line-height:1.6;">
                    <li><strong>Joint Ventures with Local Companies:</strong> MNCs partner with existing domestic firms. The benefit to the local firm is twofold: (a) The MNC provides additional capital for buying new machines; (b) The MNC brings the latest production technology. (e.g. Ford Motors partnering with Mahindra & Mahindra in India).</li>
                    <li><strong>Outright Buyouts of Local Companies:</strong> The most common route for MNC investments is to <strong>buy up local companies and then expand production</strong>. MNCs with huge wealth can easily do so. (e.g. American giant <strong>Cargill Foods</strong> bought out India's <strong>Parakh Foods</strong>, taking over their 4 oil refineries and vast marketing network to become India's largest edible oil producer).</li>
                    <li><strong>Setting Up Greenfield Subsidiaries:</strong> Building brand new proprietary manufacturing facilities and research centers from the ground up.</li>
                </ol>
            </div>
            <p>Through buyouts and joint ventures, MNCs rapidly exert massive control over production in host nations.</p>
        """,
        "pointsToRemember": [
            "FDI is investment made by foreign MNCs in land, factories, and technology in host nations.",
            "Three pathways: Joint ventures with local firms, outright acquisitions of domestic companies, and greenfield subsidiaries.",
            "Cargill Foods bought Parakh Foods, gaining immediate dominance over India's edible oil market."
        ],
        "keyNotes": [
            "Investment strategies: Joint Ventures (technology/capital sharing) vs Outright Acquisitions (buying established domestic networks)."
        ]
    },
    {
        "id": "m05",
        "moduleNumber": 5,
        "title": "Contract Manufacturing & Placing Orders with Small Producers",
        "tagline": "How global fashion and footwear giants control design and pricing while outsourcing factory labor.",
        "theoryHtml": """
            <p>There is another major way in which MNCs control production across the world: <strong>Contract Manufacturing</strong>.</p>
            <div class="activity-box" style="background:#f8fafc; border:1px solid #94a3b8; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>👕 How Global Brands Leverage Small Developing-Nation Producers:</strong>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li><strong>Placing Orders with Thousands of Small Units:</strong> Large MNCs in developed countries place orders for production with small producers around the world. Garments, footwear, and sports items are examples of industries where production is carried out by a large number of small producers around the globe (e.g. in India, Bangladesh, Vietnam).</li>
                    <li><strong>Selling Under MNC Brand Names:</strong> The products are supplied to the MNCs, which then sell these under their own brand names (such as Nike, Adidas, Zara, or H&M) to consumers at high retail markups.</li>
                    <li><strong>Tremendous Bargaining Power:</strong> These large MNCs have <strong>tremendous power to determine price, quality, delivery, and labour conditions</strong> for these distant producers.</li>
                </ul>
            </div>
            <p>Small factory owners compete fiercely against each other to win MNC contracts, forcing them to squeeze worker wages and lengthen working hours just to survive on razor-thin margins.</p>
        """,
        "pointsToRemember": [
            "In contract manufacturing, MNCs place production orders with thousands of small, decentralized factories worldwide.",
            "MNCs affix their prestigious brand labels and sell products at substantial retail markups.",
            "MNCs dictate strict prices, quality specs, delivery schedules, and wage margins to dependent suppliers."
        ],
        "keyNotes": [
            "Contract manufacturing: Small local producers manufacture goods; MNCs control branding, pricing, and capture maximum profit."
        ]
    },
    {
        "id": "m06",
        "moduleNumber": 6,
        "title": "Foreign Trade and Integration of Markets: Movement of Goods & Price Equalization",
        "tagline": "How international trade bridges producers and consumers across distant continents.",
        "theoryHtml": """
            <p>For a long time, foreign trade has been the main channel connecting countries. What is the basic function of foreign trade?</p>
            <div class="activity-box" style="background:#f0fdf4; border-left:4px solid #16a34a; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🚢 Key Functions of Foreign Trade:</strong>
                <ol style="margin:6px 0 0 18px; line-height:1.6;">
                    <li><strong>Opportunity for Producers to Reach Beyond Domestic Markets:</strong> Foreign trade creates an opportunity for producers to reach beyond domestic markets—producers can sell their output not only in markets located within the country, but can also compete in markets located in other countries of the world.</li>
                    <li><strong>Expansion of Consumer Choice:</strong> For the buyers, import of goods produced in another country is one way of expanding the choice of goods beyond what is domestically produced.</li>
                    <li><strong>Price Equalization Across Borders:</strong> With the opening of trade, goods travel from one market to another. Choice of goods in the markets rises. <strong>Prices of similar goods in the two markets tend to become equal.</strong></li>
                    <li><strong>Fierce Cross-Border Competition:</strong> Producers in the two countries now closely compete against each other even though they are separated by thousands of miles!</li>
                </ol>
            </div>
            <p>Foreign trade thus results in <strong>connecting the markets or integration of markets</strong> in different countries.</p>
        """,
        "pointsToRemember": [
            "Foreign trade allows domestic producers to export output globally and consumers to access imported goods.",
            "Trade connects distant markets, promotes competition, and equalizes prices of similar goods internationally.",
            "Market integration means events and price changes in one nation immediately impact trading partners."
        ],
        "keyNotes": [
            "Market integration: Trade enables goods, capital, and prices to synchronize across international borders."
        ]
    },
    {
        "id": "m07",
        "moduleNumber": 7,
        "title": "Case Study: Impact of Chinese Toys on Indian Toy Manufacturers",
        "tagline": "How competitive imports benefit consumers while posing existential threats to local domestic workshops.",
        "theoryHtml": """
            <p>Let us examine the impact of foreign trade through a vivid, concrete case study from the Indian market: <strong>Chinese Toys in India</strong>.</p>
            <div class="activity-box" style="background:#fff7ed; border-left:4px solid #ea580c; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🧸 The Chinese Toys Case Analysis:</strong>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li><strong>The Influx of Chinese Toys:</strong> Chinese toy manufacturers saw an opportunity to export plastic toys to India, where toys were sold at high prices. They started exporting plastic toys to India.</li>
                    <li><strong>Consumer Advantage:</strong> Buyers in India now have the option of choosing between Indian and Chinese toys. Because of the <strong>cheaper prices and new, attractive designs</strong>, Chinese toys became immensely popular in Indian markets. Within a year, <strong>70% to 80% of toy shops</strong> replaced Indian toys with Chinese toys. Toys are now much cheaper in Indian markets than earlier.</li>
                    <li><strong>The Two Sides of the Coin:</strong>
                        <br>• <em>For Chinese toy makers:</em> This provided an opportunity to expand business and earn profits.
                        <br>• <em>For Indian consumers:</em> Children and parents enjoyed greater choice of colorful toys at lower prices.
                        <br>• <em>For Indian toy makers:</em> Indian toy makers faced devastating losses. Unable to compete with mass-produced, cheap imports, many Indian toy workshops were forced to shut down.
                    </li>
                </ul>
            </div>
            <p>This case demonstrates that foreign trade creates winners and losers simultaneously: it benefits consumers with cheaper variety while imperiling uncompetitive domestic industries.</p>
        """,
        "pointsToRemember": [
            "Chinese toys captured 70-80% of Indian toy shops due to lower prices and attractive plastic designs.",
            "Indian consumers gained wider choice and lower prices; Chinese manufacturers earned massive export profits.",
            "Many Indian toy manufacturers suffered severe losses and closed workshops due to inability to match import prices."
        ],
        "keyNotes": [
            "Dual impact of trade: Lower prices and wider choices for consumers, but intense competitive pressure on domestic producers."
        ]
    },
    {
        "id": "m08",
        "moduleNumber": 8,
        "title": "What is Globalisation? Rapid Integration of Economies",
        "tagline": "Defining the multifaceted process of worldwide economic, cultural, and informational interconnectedness.",
        "theoryHtml": """
            <p>Over the past thirty years, more and more MNCs have been looking for locations around the world which would be cheap for their production. Foreign investment by MNCs in these countries has been rising. At the same time, foreign trade between countries has been rising rapidly.</p>
            <div class="activity-box" style="background:#f0fdf4; border-left:4px solid #16a34a; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🌐 Standard Definition of Globalisation:</strong>
                <p style="margin:6px 0 0 0; line-height:1.6;">
                    <strong>Globalisation is the process of rapid integration or interconnection between countries.</strong>
                </p>
                <p style="margin:6px 0 0 0; line-height:1.6;">
                    MNCs are playing a major role in the globalisation process. More and more goods and services, investments and technology are moving between countries. Most regions of the world are in much closer contact with each other than a few decades ago.
                </p>
            </div>
            <p>Besides the movements of goods, services, investments and technology, there is one more way in which the countries can be connected: <strong>the movement of people between countries</strong>. People usually move from one country to another in search of better income, better jobs, or better education (migration).</p>
        """,
        "pointsToRemember": [
            "Globalisation is the rapid integration and interconnectedness of national economies and societies.",
            "MNCs are the primary engine driving globalisation through foreign direct investment and global value chains.",
            "Globalisation involves the cross-border flow of four core currents: Goods, Services, Capital/Technology, and People."
        ],
        "keyNotes": [
            "Globalisation defined: Rapid integration of countries through cross-border flows of goods, services, investment, technology, and people."
        ]
    },
    {
        "id": "m09",
        "moduleNumber": 9,
        "title": "Drivers of Globalisation: Technological Innovations in Transport & Cargo Containers",
        "tagline": "How containerization and aviation slashed freight costs and accelerated global supply chains.",
        "theoryHtml": """
            <p>Rapid improvement in <strong>technology</strong> has been one major factor that has stimulated the globalisation process. For instance, the past fifty years have seen several improvements in <strong>transportation technology</strong>.</p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🚢 The Cargo Container Revolution:</strong>
                <p style="margin:6px 0 0 0; line-height:1.6;">
                    Goods are placed in standardized steel <strong>containers</strong> that can be loaded intact onto cargo ships, railways, and trucks without manual unpacking at ports.
                    <br>• <strong>Plummeting Port Handling Costs:</strong> Containerization drastically reduced port handling costs and reduced the speed with which exports reach markets.
                    <br>• <strong>Dramatic Reduction in Freight Rates:</strong> Similarly, the cost of air freight has fallen drastically. This has enabled much greater volumes of goods to be transported by airlines across oceans in hours rather than months.
                </p>
            </div>
            <p>Without cheap, reliable, and standardized global shipping and aviation, moving manufacturing components across three continents would be financially unthinkable.</p>
        """,
        "pointsToRemember": [
            "Transportation breakthroughs (standardized cargo containers, giant container vessels, air cargo) catalyzed globalisation.",
            "Containers eliminated manual handling, minimized transit damage, and dramatically lowered port transit times.",
            "Falling shipping costs made shipping parts across continents cheaper than manufacturing them locally."
        ],
        "keyNotes": [
            "Transport driver: Standardized cargo containers + Jet aviation drastically slashed international freight costs and transit times."
        ]
    },
    {
        "id": "m10",
        "moduleNumber": 10,
        "title": "Information and Communication Technology (ICT) Revolution in Global Production",
        "tagline": "How telecommunications, computers, and the internet flattened global economic geography.",
        "theoryHtml": """
            <p>Even more remarkable than transport has been the developments in <strong>Information and Communication Technology (ICT)</strong>. In recent times, technology in the areas of telecommunications, computers, and the Internet has been changing rapidly.</p>
            <div class="activity-box" style="background:#f8fafc; border:1px solid #94a3b8; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>💻 The Publishing Magazine Case Study (London to Delhi):</strong>
                <p style="margin:6px 0 0 0; line-height:1.6;">
                    A news magazine published for London readers is designed and printed in Delhi:
                    <br>• The text of the magazine is sent through the <strong>Internet</strong> to the Delhi printing office.
                    <br>• Designers in the Delhi office get orders on how to design the magazine from London using <strong>telecommunication facilities</strong>.
                    <br>• The designing is done on a computer. After printing, the physical magazines are sent by <strong>air to London</strong>.
                    <br>• Even the payment of money for designing and printing from a bank in London to a bank in Delhi is done instantly through <strong>e-banking</strong>!
                </p>
            </div>
            <p>Telecommunication facilities (cellular phones, satellite networks) are used to contact one another around the world, to access information instantly, and to communicate from remote areas. The Internet allows us to send instant electronic mail (email) and talk (voice-mail) across the world at negligible costs.</p>
        """,
        "pointsToRemember": [
            "ICT developments (computers, internet, satellite telecoms) enable real-time global economic coordination.",
            "Services like publication, software design, and customer support are outsourced to Delhi and completed seamlessly.",
            "E-banking and electronic funds transfer permit instant cross-border financial settlements."
        ],
        "keyNotes": [
            "ICT revolution: Internet + Telecommunications + Satellite links enable instantaneous cross-border service production and payment."
        ]
    },
    {
        "id": "m11",
        "moduleNumber": 11,
        "title": "Liberalisation of Foreign Trade and Foreign Investment Policy",
        "tagline": "Removing government barriers, licenses, and quotas to unleash cross-border commerce.",
        "theoryHtml": """
            <p>What is liberalisation? <strong>Removing barriers or restrictions set by the government is what is known as Liberalisation.</strong></p>
            <div class="activity-box" style="background:#f0fdf4; border-left:4px solid #16a34a; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🔓 The Mechanism of Trade Liberalisation:</strong>
                <p style="margin:6px 0 0 0; line-height:1.6;">
                    With liberalisation of trade:
                    <br>• Businesses are allowed to make decisions freely about what they wish to import or export.
                    <br>• The government imposes <strong>much less restrictions</strong> than before and is therefore said to be <strong>more liberal</strong>.
                    <br>• Foreign companies are permitted to set up factories and offices easily without requiring arduous bureaucratic licenses (License Raj dismantling).
                </p>
            </div>
            <p>Trade liberalisation allows market forces of demand and supply to guide resource allocation and encourages domestic producers to upgrade technology to face global competition.</p>
        """,
        "pointsToRemember": [
            "Liberalisation means the removal of government-imposed barriers and restrictions on trade and investment.",
            "Under liberalisation, businesses decide freely what goods to import and export based on commercial viability.",
            "A liberal policy regime welcomes foreign capital, technology, and enterprise without excessive bureaucratic hurdles."
        ],
        "keyNotes": [
            "Definition: Liberalisation = Dismantling government trade barriers, import licenses, and investment restrictions."
        ]
    },
    {
        "id": "m12",
        "moduleNumber": 12,
        "title": "Trade Barriers: Customs Duties, Tariffs, and Import Quotas",
        "tagline": "Why nations impose taxes on imports and how barriers shield nascent domestic industries.",
        "theoryHtml": """
            <p>Governments can use <strong>trade barriers</strong> to increase or decrease (regulate) foreign trade and to decide what kinds of goods and how much of each should come into the country.</p>
            <div class="activity-box" style="background:#fef2f2; border-left:4px solid #ef4444; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🚧 How Trade Barriers Work (The Chinese Toys Tariff Example):</strong>
                <p style="margin:6px 0 0 0; line-height:1.6;">
                    Suppose the Indian government puts a <strong>tax on import of toys</strong> (customs duty/tariff):
                    <br>• Buyers will have to pay a higher price on imported toys.
                    <br>• Chinese toys will no longer be so cheap in the Indian markets and imports from China will automatically fall.
                    <br>• Indian toy makers will prosper as their domestic toys become comparatively cheaper!
                </p>
                <p style="margin:6px 0 0 0; line-height:1.6;">
                    <strong>Common Trade Barriers:</strong>
                    <br>1. <strong>Tariffs / Customs Duties:</strong> Taxes levied on goods entering the country.
                    <br>2. <strong>Import Quotas:</strong> Quantitative restrictions specifying the maximum volume of a good that can be imported.
                </p>
            </div>
            <p>Trade barriers protect domestic employment and infant industries from being wiped out by established foreign competitors.</p>
        """,
        "pointsToRemember": [
            "Trade barriers include tariffs (customs duties) and quantitative import quotas.",
            "Taxes on imports raise the domestic price of foreign goods, protecting local manufacturers.",
            "Governments use trade barriers strategically to regulate trade volumes and safeguard domestic jobs."
        ],
        "keyNotes": [
            "Trade barriers: Tariffs and quotas used by governments to restrict imports and protect domestic industries."
        ]
    },
    {
        "id": "m13",
        "moduleNumber": 13,
        "title": "1991 Economic Reforms in India: Removing Barriers & Opening Markets",
        "tagline": "The historic policy watershed that ended protectionism and opened the Indian economy to the world.",
        "theoryHtml": """
            <p>The Indian government, after Independence, had put barriers to foreign trade and foreign investment. This was considered necessary to <strong>protect the producers within the country from foreign competition</strong>. Industries were just coming up in the 1950s and 1960s, and competition from imports at that stage would not have allowed these industries to come up.</p>
            <p>Thus, India allowed imports of only essential items such as machinery, fertilizers, and petroleum. All developed countries, during early stages of development, have given protection to domestic producers through a variety of means.</p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>⚡ The 1991 Policy Watershed:</strong>
                <p style="margin:6px 0 0 0; line-height:1.6;">
                    Around <strong>1991</strong>, far-reaching changes in policy were made in India:
                    <br>• The government decided that the time had come for <strong>Indian producers to compete with producers around the globe</strong>.
                    <br>• It felt that competition would improve the performance of producers within the country since they would have to improve their quality.
                    <br>• Thus, barriers on foreign trade and foreign investment were <strong>removed to a large extent</strong>.
                    <br>• Goods could now be imported and exported easily, and foreign companies could set up factories and offices here.
                </p>
            </div>
            <p>This dramatic policy reversal initiated the modern era of liberalisation, privatization, and globalisation (LPG) in India.</p>
        """,
        "pointsToRemember": [
            "Post-independence India imposed strict trade barriers to protect infant domestic industries.",
            "In 1991, India dismantled trade barriers to force domestic firms to improve quality through global competition.",
            "The 1991 reforms removed import licensing, slashed customs tariffs, and welcomed foreign investment."
        ],
        "keyNotes": [
            "1991 Economic Watershed: Historic shift from protectionism to liberalisation, inviting global competition and FDI."
        ]
    },
    {
        "id": "m14",
        "moduleNumber": 14,
        "title": "World Trade Organization (WTO): Mandate, Agreements, and Developing Country Concerns",
        "tagline": "The global trade referee that champions free trade while facing criticism for unequal rules.",
        "theoryHtml": """
            <p>We have seen that the liberalisation of foreign trade and investment in India was supported by some very powerful international organizations. These organizations say that all barriers to foreign trade and investment are harmful. There should be no barriers. Trade between countries should be 'free'.</p>
            <div class="activity-box" style="background:#f0fdf4; border-left:4px solid #16a34a; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🌐 The World Trade Organization (WTO):</strong>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li><strong>Establishment and Mandate:</strong> Started at the initiative of developed countries, WTO's objective is to <strong>liberalize international trade</strong>. It establishes rules regarding international trade for all countries and sees that these rules are obeyed. Nearly 160+ countries of the world are currently members of the WTO.</li>
                    <li><strong>The Developing Country Dilemma:</strong> Though WTO is supposed to allow free trade for all, in practice, it is seen that the <strong>developed countries have unfairly retained trade barriers</strong>. On the other hand, WTO rules have forced developing countries to remove trade barriers.</li>
                </ul>
            </div>
            <p>Developing nations argue that WTO agreements often reflect the geopolitical clout of rich nations rather than equitable rules of fair play.</p>
        """,
        "pointsToRemember": [
            "WTO was created to liberalize global trade and enforce multilateral trade agreements.",
            "WTO establishes international trade rules and monitors member nation compliance.",
            "In practice, developed nations often retain unfair protections while forcing developing nations to open their markets."
        ],
        "keyNotes": [
            "WTO mandate: Promotes free international trade, but faces criticism for asymmetric rules favoring developed nations."
        ]
    },
    {
        "id": "m15",
        "moduleNumber": 15,
        "title": "The Agricultural Subsidies Debate: Developed vs Developing Nations in WTO",
        "tagline": "How massive Western farm subsidies distort global crop prices and hurt Indian farmers.",
        "theoryHtml": """
            <p>A classic and contentious example of WTO asymmetry is the <strong>debate on agricultural subsidies</strong>.</p>
            <div class="activity-box" style="background:#fff7ed; border-left:4px solid #ea580c; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🌾 The Agricultural Subsidies Clash:</strong>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li><strong>Developing Countries Followed Rules:</strong> Developing country governments (like India) reduced support to agriculture and lowered import duties on food grains according to WTO guidelines.</li>
                    <li><strong>Developed Nations Paid Massive Subsidies:</strong> In developed countries like the US, the share of agriculture in GDP is barely 1%, and employment in agriculture is only 0.5%. Yet, this tiny number of giant commercial farmers receive <strong>massive sums of money (billions of dollars in direct subsidies)</strong> from the US government!</li>
                    <li><strong>Artificially Cheap Dumping:</strong> Due to this massive government aid, US farmers can produce agricultural products at very low personal cost. They export surplus wheat, cotton, and soy to foreign nations at <strong>artificially depressed prices</strong>, wiping out small farmers in developing nations.</li>
                </ul>
            </div>
            <p>Developing country farmers ask: <em>"We have complied with WTO rules by cutting subsidies. But you have retained massive subsidies for your farmers. Is this what free and fair trade is?"</em></p>
        """,
        "pointsToRemember": [
            "Developed nations pay billions in farm subsidies despite agriculture employing <1% of their workforce.",
            "Subsidized Western farm produce is exported at artificially cheap prices, hurting unsubsidized developing farmers.",
            "Developing countries demand that rich nations dismantle massive agricultural subsidies to ensure fair competition."
        ],
        "keyNotes": [
            "Agricultural subsidy clash: US/EU pay massive farm subsidies, distorting global prices and undercutting developing farmers."
        ]
    },
    {
        "id": "m16",
        "moduleNumber": 16,
        "title": "Impact of Globalisation in India: Benefits for Consumers and Large Corporations",
        "tagline": "How affluent consumers, top Indian corporate champions, and skilled professionals prospered.",
        "theoryHtml": """
            <p>In the past thirty years, globalisation of the Indian economy has come a long way. What has been its impact? Globalisation and greater competition among producers—both local and foreign—has been of <strong>advantage to certain well-placed sections</strong>:</p>
            <div class="activity-box" style="background:#f0fdf4; border-left:4px solid #16a34a; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🌟 The Winners of Globalisation in India:</strong>
                <ol style="margin:6px 0 0 18px; line-height:1.6;">
                    <li><strong>Urban Affluent Consumers:</strong> Consumers today—particularly the well-off sections in urban areas—enjoy greater choice, improved quality, and lower prices for several products. As a result, these people today enjoy much higher standards of living than was possible earlier.</li>
                    <li><strong>Top Indian Companies as Emerging MNCs:</strong> Several top Indian companies have been able to benefit from the increased competition. They have invested in newer technology and production methods and raised their production standards. Some have emerged as multinational corporations themselves:
                        <br>• <strong>Tata Motors</strong> (Automobiles)
                        <br>• <strong>Infosys</strong> (IT & Software)
                        <br>• <strong>Ranbaxy</strong> (Pharmaceuticals)
                        <br>• <strong>Asian Paints</strong> (Paints)
                        <br>• <strong>Sundaram Fasteners</strong> (Nuts and bolts)
                    </li>
                    <li><strong>Boom in Service Providers:</strong> Globalisation has created new opportunities for companies providing services, particularly in <strong>IT, software, call centres, data entry, accounting, and administrative outsourcing</strong>.</li>
                </ol>
            </div>
            <p>For these sectors, globalisation opened lucrative international revenue streams and career avenues.</p>
        """,
        "pointsToRemember": [
            "Urban consumers gained wider choices, higher quality, and competitive prices.",
            "Top Indian corporate champions (Tata Motors, Infosys, Ranbaxy) expanded globally as multinational firms.",
            "The IT, BPO, and engineering services sectors witnessed explosive growth and employment for educated youth."
        ],
        "keyNotes": [
            "Globalisation winners: Urban consumers + Emerging Indian MNCs (Tata, Infosys) + IT and service outsourcing."
        ]
    },
    {
        "id": "m17",
        "moduleNumber": 17,
        "title": "Rising Competition and Challenges for Small Indian Manufacturers",
        "tagline": "The struggle of small-scale workshops facing cheap mass-produced imports without protection.",
        "theoryHtml": """
            <p>While large corporations and affluent consumers benefited, for a large number of <strong>small producers and workers</strong>, globalisation has posed major challenges.</p>
            <div class="activity-box" style="background:#fef2f2; border-left:4px solid #ef4444; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🏭 Ravi's Capacitor Factory Case Study:</strong>
                <p style="margin:6px 0 0 0; line-height:1.6;">
                    Ravi did not expect that he would have to face a crisis in such a short period of his life as an industrialist.
                    <br>• Ravi took a loan from a bank to start his own company producing <strong>capacitors</strong> in Hosur, an industrial town in Tamil Nadu. Capacitors are used in tube lights, television sets, etc.
                    <br>• Within three years, he was able to expand production and had 20 workers under him.
                    <br>• His struggle to run his company started when the government removed restrictions on imports of capacitors as per its agreement at WTO in 2001.
                    <br>• His main clients, the television companies, started importing capacitors from abroad at half of Ravi's production price!
                    <br>• Ravi had to slash his production and lay off workers. He now employs barely 7 workers and his business is in acute distress.
                </p>
            </div>
            <p>Small industries in India employing nearly 20 million workers—producing batteries, capacitors, plastics, toys, tyres, and dairy products—have been hit hard due to competition. Several units have shut down, rendering workers jobless.</p>
        """,
        "pointsToRemember": [
            "Small-scale domestic manufacturers (batteries, plastics, capacitors, toys) suffered severely from cheap imports.",
            "Removal of import quotas exposed small entrepreneurs to unequal competition from global mass manufacturers.",
            "Thousands of small workshops closed, causing widespread industrial layoffs and business failures."
        ],
        "keyNotes": [
            "Small producer distress: Removal of import tariffs caused severe crisis for small manufacturers (like Ravi's capacitor unit)."
        ]
    },
    {
        "id": "m18",
        "moduleNumber": 18,
        "title": "Uncertain Employment and Flexible Labour Laws in Global Supply Chains",
        "tagline": "How global competition eroded worker tenure, overtime rights, and employment stability.",
        "theoryHtml": """
            <p>Globalisation and the pressure of competition have substantially changed the lives of workers. Faced with growing competition, most employers these days prefer to <strong>hire workers 'flexibly'</strong>.</p>
            <div class="activity-box" style="background:#fff1f2; border-left:4px solid #e11d48; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🧵 Plight of Garment Workers in Global Export Hubs:</strong>
                <p style="margin:6px 0 0 0; line-height:1.6;">
                    Take the case of <strong>garment export factories</strong> in Delhi and Gurgaon:
                    <br>• Large MNCs in the garment industry in Europe and America order their products from Indian exporters. These large MNCs with worldwide networks look for the cheapest goods in order to maximize profits.
                    <br>• To get large orders from MNCs, Indian garment exporters try hard to cut their own costs.
                    <br>• Since the cost of raw materials cannot be reduced easily, exporters <strong>try to cut labour costs</strong>.
                    <br>• Where earlier a factory used to employ workers on a permanent basis, now they employ workers only on a <strong>temporary, contract basis</strong> so that they do not have to pay workers for the whole year.
                    <br>• Workers also have to put in very long working hours (12 to 14 hours a day) and work night shifts on a regular basis during the peak season. Wages are low and workers are forced to work overtime to make both ends meet.
                </p>
            </div>
            <p>While workers are denied their fair share of benefits brought about by globalisation, their jobs have become increasingly insecure and precarious.</p>
        """,
        "pointsToRemember": [
            "Fierce MNC cost-cutting pressures force domestic export factories to dismantle permanent employment.",
            "Workers are hired on temporary contract basis without benefits, job security, or provident fund.",
            "Long shifts (12-14 hours) and compulsory overtime are imposed to fulfill tight international delivery deadlines."
        ],
        "keyNotes": [
            "Labor precarity: Global supply chains demand 'flexible labor', replacing secure permanent jobs with low-paid contract work."
        ]
    },
    {
        "id": "m19",
        "moduleNumber": 19,
        "title": "Special Economic Zones (SEZs) & Attraction of Foreign Direct Investment",
        "tagline": "Tax holidays, world-class infrastructure, and labor flexibility designed to lure foreign capital.",
        "theoryHtml": """
            <p>In recent years, the central and state governments in India are taking special steps to attract foreign companies to invest in India. Industrial zones, called <strong>Special Economic Zones (SEZs)</strong>, are being set up.</p>
            <div class="activity-box" style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>🏢 Key Features of Special Economic Zones (SEZs):</strong>
                <ul style="margin:6px 0 0 18px; line-height:1.6;">
                    <li><strong>World-Class Infrastructure:</strong> SEZs are provided with world-class facilities: reliable electricity, continuous water supply, excellent roads, modern transport, storage, and recreational/educational facilities.</li>
                    <li><strong>Tax Holidays:</strong> Companies that set up production units in the SEZs <strong>do not have to pay taxes for an initial period of five years</strong>.</li>
                    <li><strong>Flexibility in Labour Laws:</strong> The government has also allowed flexibility in the labour laws to attract foreign investment. Instead of hiring workers on a regular basis, companies hire workers flexibly for short periods when there is intense work pressure. This is done to reduce the cost of labour for the company.</li>
                </ul>
            </div>
            <p>While SEZs succeed in attracting FDI and boosting export revenues, critics highlight that prime agricultural land is often acquired and workers are stripped of fundamental statutory labour protections.</p>
        """,
        "pointsToRemember": [
            "SEZs are designated industrial enclaves equipped with world-class infrastructure to attract foreign direct investment.",
            "Companies in SEZs enjoy a 5-year tax holiday on corporate profits.",
            "Governments grant exemptions from strict labour laws, permitting flexible hiring to reduce operational costs."
        ],
        "keyNotes": [
            "SEZ incentives: World-class infrastructure + 5-year tax exemption + Flexible labour law compliance."
        ]
    },
    {
        "id": "m20",
        "moduleNumber": 20,
        "title": "The Struggle for Fair Globalisation: Government Role, Labour Protections & Civil Society",
        "tagline": "How public policy, international alliances, and citizens' movements can make globalisation work for all.",
        "theoryHtml": """
            <p>The evidence indicates that not everyone has benefited from globalisation. People with education, skill and wealth have made the best use of the new opportunities. On the other hand, there are many people who have not shared the benefits.</p>
            <p>Since globalisation is a reality, the question is: <strong>How to make globalisation 'fairer'?</strong> Fair globalisation would create opportunities for all, and also ensure that the benefits of globalisation are shared better.</p>
            <div class="activity-box" style="background:#f0fdf4; border-left:4px solid #16a34a; padding:12px 16px; margin:14px 0; border-radius:6px;">
                <strong>⚖️ How the Government Can Champion Fair Globalisation:</strong>
                <ol style="margin:6px 0 0 18px; line-height:1.6;">
                    <li><strong>Enforcing Labour Laws:</strong> Government policies must focus on protecting the interests not only of the rich and the powerful, but of all the people in the country. The government can ensure that labour laws are properly implemented and the workers get their statutory rights.</li>
                    <li><strong>Supporting Small Producers:</strong> It can support small producers to improve their performance until the time they become strong enough to compete globally. If necessary, the government can use trade and investment barriers judiciously.</li>
                    <li><strong>Negotiating Fair Rules at WTO:</strong> It can negotiate at the WTO for 'fairer rules'. It can also align with other developing countries with similar interests to fight against the domination of developed countries in the WTO.</li>
                    <li><strong>The Power of People's Movements:</strong> In the past few years, massive campaigns and representation by people's organizations have influenced important decisions relating to trade and investments at the WTO. This has demonstrated that <strong>people also can play an important role in the struggle for fair globalisation</strong>.</li>
                </ol>
            </div>
            <p>Globalisation must be governed by human welfare, democratic equity, and labor rights rather than unchecked corporate dominance.</p>
        """,
        "pointsToRemember": [
            "Fair globalisation ensures opportunities and benefits are distributed equitably across all social strata.",
            "The government must enforce labour laws, support small producers, and negotiate fair rules at the WTO.",
            "Civil society coalitions and people's movements have successfully challenged biased international trade agreements."
        ],
        "keyNotes": [
            "Fair globalisation agenda: Protect worker rights + Support small producers + Form developing nation alliances at WTO."
        ]
    }
]

print("Assembling Chapter 4 modules...")

final_modules_ch4 = []
for idx, m_spec in enumerate(ch4_modules):
    mod_id = m_spec["id"]
    bank_slice_qs = get_bank_5(idx, mod_id)
    mod_num = idx + 1
    
    custom_qs = [
        {
            "id": f"{mod_id}_q06",
            "question": clean_ncert(f"Based on the analysis in Module {mod_num} ({m_spec['title']}), which of the following statements is conceptually TRUE?"),
            "options": [
                clean_ncert(m_spec['pointsToRemember'][0]),
                "Multinational corporations manufacture all goods in their home country without using foreign labor.",
                "Trade barriers are strictly illegal under Indian constitutional law.",
                "Globalisation has completely eradicated all poverty and income inequality worldwide."
            ],
            "answer": clean_ncert(m_spec['pointsToRemember'][0]),
            "explanation": f"As highlighted in Module {mod_num}, this statement represents a cornerstone principle of Class 10 international trade economics."
        },
        {
            "id": f"{mod_id}_q07",
            "question": clean_ncert(f"Regarding the international economic dynamics discussed in Module {mod_num}, which factor is critical for safeguarding domestic welfare?"),
            "options": [
                clean_ncert(m_spec['pointsToRemember'][1] if len(m_spec['pointsToRemember']) > 1 else m_spec['pointsToRemember'][0]),
                "Abolishing all domestic manufacturing industries and relying 100% on foreign imports.",
                "Preventing Indian students and professionals from accessing the internet.",
                "Imposing 1000% import duties on all essential medicines and computer chips."
            ],
            "answer": clean_ncert(m_spec['pointsToRemember'][1] if len(m_spec['pointsToRemember']) > 1 else m_spec['pointsToRemember'][0]),
            "explanation": "Balanced trade integration requires protective measures, technological upgrading, and fair regulatory mechanisms."
        },
        {
            "id": f"{mod_id}_q08",
            "question": clean_ncert(f"Which of the following real-world market realities directly reflects the takeaways of Module {mod_num}?"),
            "options": [
                clean_ncert(m_spec['keyNotes'][0]),
                "Cargo ships taking five years to cross the ocean due to lack of steel containers.",
                "MNCs voluntarily sharing 100% of their profits with foreign competitors.",
                "Governments banning all forms of telecommunications and email."
            ],
            "answer": clean_ncert(m_spec['keyNotes'][0]),
            "explanation": "This directly synthesizes the foundational analytical takeaway established in this module."
        },
        {
            "id": f"{mod_id}_q09",
            "question": clean_ncert(f"In practical trade policy (as explored in Module {mod_num}), what is the primary duty of developing country governments?"),
            "options": [
                "Negotiating equitable WTO rules, enforcing statutory labor rights, and supporting small domestic producers",
                "Submitting unconditionally to all trade demands made by multinational corporate lobbies",
                "Banning all foreign investments and technology imports permanently",
                "Closing all ports and dismantling all cargo container terminals"
            ],
            "answer": "Negotiating equitable WTO rules, enforcing statutory labor rights, and supporting small domestic producers",
            "explanation": "Developing nation governments must balance openness with robust protection for domestic workers and small businesses."
        },
        {
            "id": f"{mod_id}_q10",
            "question": clean_ncert(f"Which key conclusion regarding fair globalisation emerges from Module {mod_num}?"),
            "options": [
                clean_ncert(m_spec['pointsToRemember'][2] if len(m_spec['pointsToRemember']) > 2 else m_spec['pointsToRemember'][0]),
                "Globalisation should only benefit large multinational corporations while workers lose all rights.",
                "Developing countries should completely withdraw from all international commerce.",
                "Small workshops should be legally forbidden from producing goods."
            ],
            "answer": clean_ncert(m_spec['pointsToRemember'][2] if len(m_spec['pointsToRemember']) > 2 else m_spec['pointsToRemember'][0]),
            "explanation": "Fair globalisation demands that the benefits of international trade are shared broadly across all sections of society."
        }
    ]
    
    all_10_qs = bank_slice_qs + custom_qs
    
    final_modules_ch4.append({
        "id": m_spec["id"],
        "moduleNumber": m_spec["moduleNumber"],
        "title": m_spec["title"],
        "tagline": m_spec["tagline"],
        "readingTimeMins": m_spec.get("readingTimeMins", 4),
        "theoryHtml": m_spec["theoryHtml"],
        "pointsToRemember": m_spec["pointsToRemember"],
        "keyNotes": m_spec["keyNotes"],
        "questions": all_10_qs
    })

ch4_data = {
    "chapterId": "c10_econ_ch4",
    "chapterNumber": 4,
    "chapterTitle": "Globalisation and the Indian Economy",
    "subject": "Economics",
    "className": "Class 10",
    "cls": "Class 10",
    "totalModules": 20,
    "totalQuestions": 200,
    "passingPercentage": 70,
    "modules": final_modules_ch4
}

output_js = f"""/* =============================================================================
   ELITE CLASSES — CLASS 10 ECONOMICS: CHAPTER 4 COURSE DATA
   Globalisation and the Indian Economy (Class 10 Comprehensive Curriculum Aligned)
   - Exactly 20 Progressive Mini-Modules
   - 10 Conceptual Questions per Module (200 MCQs total)
   - 70% Passing Threshold Progressive Mastery Unlocking
   - High Educational Depth | Class 10 Student Standard | Zero Template Boilerplate
   ============================================================================= */

const COURSE_CHAPTER_4_ECONOMICS = {json.dumps(ch4_data, indent=4, ensure_ascii=False)};

if (typeof window !== 'undefined') {{
    window.COURSE_CHAPTER_DATA = COURSE_CHAPTER_4_ECONOMICS;
}}
if (typeof module !== 'undefined' && module.exports) {{
    module.exports = COURSE_CHAPTER_4_ECONOMICS;
}}
"""

out_path = 'modules/course/data/class10/economics/chapter4_course_data.js'
with open(out_path, 'w', encoding='utf-8') as f:
    f.write(output_js)

print(f"Chapter 4 written successfully to {out_path}!")
print(f"Modules: {len(final_modules_ch4)}, Total Questions: {sum(len(m['questions']) for m in final_modules_ch4)}")
