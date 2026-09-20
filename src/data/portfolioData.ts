import { ServiceItem, PortfolioProject, ToolItem, MetricStat, AnalyticsDataPoint } from '../types';

export const MARKETER_INFO = {
  name: "Nabiul Islam",
  title: "Senior Digital Marketing & Growth Strategist",
  tagline: "Turning Digital Strategies Into Measurable Growth.",
  subheadline: "A creative digital marketer specializing in SEO, social media marketing, paid advertising, and brand growth.",
  bio: "I am a passionate digital marketer focused on helping businesses improve their online visibility, connect with their target audience, and achieve sustainable growth through data-driven marketing strategies.",
  extendedBio: "Over the past 6+ years, I have engineered multi-channel marketing engines for high-growth e-commerce brands, B2B SaaS companies, and local service leaders. My approach blends rigorous analytical experimentation with compelling creative storytelling to capture high-intent audiences and maximize return on ad spend.",
  experienceYears: "6+ Years",
  campaignsCount: "50+ Campaigns",
  adSpendManaged: "$1.8M+",
  avgRoas: "4.4x",
  clientRetention: "96%",
  email: "aicourse.nabin@gmail.com",
  phone: "+1 (555) 382-9014",
  location: "San Francisco, CA / Remote Worldwide",
  availability: "Available for Select Client Engagements & Audits",
  linkedin: "https://linkedin.com/in/nabiulislam",
  twitter: "https://twitter.com/nabiulislam_mktg",
  instagram: "https://instagram.com/nabiulislam.growth",
  behance: "https://behance.net/nabiulislam",
  careerGoals: [
    "Scale high-potential challenger brands to $10M+ ARR through unified organic and paid funnels.",
    "Advance ethical, transparent, privacy-first conversion attribution and high-integrity data analytics.",
    "Build long-term partnerships with visionary founders who prioritize durable customer lifetime value over vanity metrics."
  ],
  experienceTimeline: [
    {
      year: "2023 - Present",
      role: "Lead Growth & Performance Marketing Consultant",
      company: "Aura Digital Advisory",
      description: "Directing multi-channel acquisition for mid-market clients, managing $1.8M+ annual media spend, and architecting full-funnel organic SEO strategies."
    },
    {
      year: "2021 - 2023",
      role: "Senior Digital Marketing Specialist",
      company: "Vanguard Media Agency",
      description: "Led Meta Ads and Google Search campaigns for 18 concurrent accounts, achieving average ROAS of 4.2x and +280% organic keyword growth."
    },
    {
      year: "2018 - 2021",
      role: "Digital Marketing & Social Media Strategist",
      company: "Pulse Brand Labs",
      description: "Spearheaded organic community building, viral content creation, on-page SEO optimization, and local search dominance for retail clients."
    }
  ]
};

export const HERO_STATS: MetricStat[] = [
  { label: "Ad Spend Managed", value: "$1.8M+", subtext: "Across Meta & Google Ads", change: "+4.4x ROAS Avg", positive: true },
  { label: "Organic Growth", value: "+340%", subtext: "Average client traffic lift", change: "Top 3 Rankings", positive: true },
  { label: "Client Retention", value: "96%", subtext: "Long-term partnership rate", change: "5-Star Rating", positive: true },
  { label: "Lead Gen Scale", value: "45,000+", subtext: "Qualified MQLs captured", change: "-42% Cost Per Lead", positive: true }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "seo",
    name: "SEO",
    focus: "Search visibility & organic growth",
    category: "seo",
    description: "Comprehensive technical audits, high-intent keyword clustering, on-page optimization, and authoritative backlink building to secure evergreen rankings.",
    deliverables: [
      "Technical Core Web Vitals audit & remediation",
      "Competitor keyword gap analysis & search intent mapping",
      "On-page optimization (titles, schemas, internal links)",
      "High-authority editorial link acquisition strategy"
    ],
    iconName: "Search",
    metricHighlight: "Avg +310% organic search traffic in 6 months"
  },
  {
    id: "local-seo",
    name: "Local SEO",
    focus: "Google Business Profile & local rankings",
    category: "local",
    description: "Dominating Google Maps 3-Pack and high-intent local queries to turn nearby searches into direct phone calls, appointments, and foot traffic.",
    deliverables: [
      "Complete Google Business Profile (GBP) audit & optimization",
      "Local citation syndication & NAP consistency across 60+ directories",
      "Automated customer review generation funnels",
      "Hyper-local landing page creation with geo-schemas"
    ],
    iconName: "MapPin",
    metricHighlight: "#1 ranking for target local keywords within 90 days"
  },
  {
    id: "google-ads",
    name: "Google Ads",
    focus: "Paid search campaigns",
    category: "ads",
    description: "Precision-targeted Search and Performance Max campaigns crafted to capture buyers at peak purchase intent while eliminating wasted ad spend.",
    deliverables: [
      "High-intent Search, Shopping & Performance Max setup",
      "Daily negative keyword scrubbing & budget efficiency pruning",
      "Quality Score optimization to drive down Cost-Per-Click",
      "Server-side conversion tracking & GA4 attribution"
    ],
    iconName: "Target",
    metricHighlight: "3.8x to 5.2x sustained return on ad spend (ROAS)"
  },
  {
    id: "meta-ads",
    name: "Meta Ads",
    focus: "Facebook & Instagram advertising",
    category: "ads",
    description: "Full-funnel paid social architectures pairing high-converting direct response video/carousel ads with lookalike and retargeting audiences.",
    deliverables: [
      "Top, middle, and bottom-of-funnel campaign architecture",
      "UGC (User Generated Content) creative scripting & brief development",
      "Advantage+ audience segmentation & Custom Audience exclusions",
      "A/B creative testing matrix (hooks, visuals, copy, CTA)"
    ],
    iconName: "Share2",
    metricHighlight: "-48% Customer Acquisition Cost (CAC) reduction"
  },
  {
    id: "social-media",
    name: "Social Media Management",
    focus: "Content planning & engagement",
    category: "social",
    description: "Strategic content calendars, engaging storytelling, and active community management that transforms passive scrollers into passionate brand advocates.",
    deliverables: [
      "Monthly multi-platform content roadmap & storytelling strategy",
      "Short-form video concepts (Reels, TikToks) & carousel design",
      "Active community moderation & DM conversion funnels",
      "Hashtag research & algorithmic reach optimization"
    ],
    iconName: "Users",
    metricHighlight: "+260% engagement rate & 4.5x follower growth"
  },
  {
    id: "facebook-page",
    name: "Facebook Page Optimization",
    focus: "Profile setup & growth",
    category: "social",
    description: "Transforming stagnant Facebook business pages into high-converting conversion hubs with optimized branding, automated messengers, and organic reach.",
    deliverables: [
      "Conversion-optimized cover banner & mobile avatar branding",
      "Action button configuration & integrated service booking",
      "Automated Facebook Messenger lead qualification bot",
      "Pinned lead-magnet posts & customer review showcases"
    ],
    iconName: "ThumbsUp",
    metricHighlight: "+420% page interaction & 3x organic lead volume"
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    focus: "Marketing creatives & branding",
    category: "creative",
    description: "Stop-the-scroll visual assets engineered specifically for marketing conversions, including ad creatives, social graphics, and brand identity kits.",
    deliverables: [
      "Performance marketing ad creatives (Static, Carousel, Motion)",
      "Branded social media templates in Canva & Figma",
      "Display ad banners & retargeting graphics in all IAB sizes",
      "Visual style guides (typography, color palettes, tone)"
    ],
    iconName: "Palette",
    metricHighlight: "+74% click-through rate (CTR) on paid creatives"
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "fb-page-optimization",
    title: "Facebook Page Optimization & Growth",
    client: "LuxeLiving Furnishings",
    industry: "Home Decor & E-Commerce",
    category: "social",
    objective: "Revitalize an inactive Facebook brand presence of 18,000 dormant followers, convert organic followers into website buyers, and institute responsive customer care.",
    servicesProvided: ["Facebook Page Optimization", "Social Media Management", "Graphic Design"],
    strategy: [
      "Audited and redesigned mobile/desktop cover artwork featuring seasonal promotions and an immediate 'Shop Collection' direct CTA.",
      "Implemented a 24/7 automated Messenger welcome flow that guided shoppers through a 3-question style quiz to recommend matched furniture.",
      "Launched a weekly 'Design Tip Tuesday' carousel series with swipeable styling guides created in Canva, generating 5x regular comment engagement.",
      "Conducted weekly community giveaways co-promoted with design influencers to spark viral tag-a-friend interactions."
    ],
    metrics: [
      { label: "Page Engagement", value: "+460%", trend: "up", description: "Increase in comments, shares, and post saves within 60 days" },
      { label: "Monthly Organic Reach", value: "284,000", trend: "up", description: "Unique monthly reach without additional paid boosting" },
      { label: "Messenger Inquiries", value: "1,420+", trend: "up", description: "Qualified product consultations routed to sales team" },
      { label: "Direct Attributed Sales", value: "$68,400", trend: "up", description: "Tracked revenue through UTM campaign tagging" }
    ],
    duration: "4 Months",
    testimonial: {
      quote: "Nabiul turned our sleepy Facebook page into one of our top three customer acquisition channels. The automated styling quiz alone generated dozens of sales every weekend.",
      author: "Marcus Chen",
      role: "VP of E-Commerce, LuxeLiving"
    },
    mockupType: "social",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "16:9",
    isSample: false
  },
  {
    id: "google-ads-management",
    title: "Google Ads Campaign Management",
    client: "CloudShield CyberSec",
    industry: "B2B Enterprise SaaS",
    category: "ads",
    objective: "Eliminate bloated Cost-Per-Lead (CPL) exceeding $210 on Google Search, identify enterprise buyer intent, and scale booked software demos.",
    servicesProvided: ["Google Ads", "Google Analytics (GA4)", "Conversion Optimization"],
    strategy: [
      "Restructured single keyword ad groups (SKAGs) into tight intent clusters: Competitor Alternatives, Compliance Solutions, and Threat Audits.",
      "Added 450+ negative keywords to eliminate irrelevant consumer queries ('free antivirus', 'student tutorial', 'phone apps').",
      "Created tailored landing page variations matching precise ad headlines, raising Google Ads Quality Scores from 4/10 to 9/10.",
      "Implemented offline conversion import via GA4 to optimize bids on actual qualified demos rather than initial form clicks."
    ],
    metrics: [
      { label: "ROAS (Pipeline Value)", value: "5.4x", trend: "up", description: "Pipeline opportunity value generated against ad spend" },
      { label: "Cost Per Lead (CPL)", value: "$64.20", trend: "down", description: "Reduced from $214 baseline (-70% savings per MQL)" },
      { label: "Qualified Demos Booked", value: "318", trend: "up", description: "High-value B2B enterprise leads in 90 days" },
      { label: "Conversion Rate", value: "8.9%", trend: "up", description: "Landing page conversion increased from 2.8%" }
    ],
    duration: "6 Months",
    testimonial: {
      quote: "Our sales team was blown away by the quality of enterprise leads coming in. Nabiul cut our customer acquisition cost in half while tripling booked demos.",
      author: "Sarah Jenkins",
      role: "Chief Revenue Officer, CloudShield"
    },
    mockupType: "ads",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "16:9",
    isSample: false
  },
  {
    id: "seo-organic-growth",
    title: "SEO & Organic Traffic Growth",
    client: "Verdant Pure Botanicals",
    industry: "Health & Organic Wellness E-Commerce",
    category: "seo",
    objective: "Overcome stagnant search traffic, resolve technical crawl errors from a recent site migration, and rank for high-volume commercial keywords.",
    servicesProvided: ["SEO", "Google Search Console", "Semrush / Ahrefs", "Content Strategy"],
    strategy: [
      "Audited and resolved 140+ broken redirects, duplicate meta tags, and slow mobile LCP scores flagged in Google Search Console.",
      "Built 6 comprehensive 'Hub & Spoke' educational content clusters targeting high-intent wellness queries like 'clean adaptogens for sleep'.",
      "Optimized product structured data (Product Schema, Review stars, InStock badges) to enhance SERP rich snippets.",
      "Secured 38 high-authority backlinks from reputable health blogs and lifestyle publications through data-driven digital PR."
    ],
    metrics: [
      { label: "Organic Monthly Traffic", value: "+385%", trend: "up", description: "Rose from 18,200 to 88,400 monthly unique search visitors" },
      { label: "Top 3 Keyword Rankings", value: "142", trend: "up", description: "High-intent transactional keywords in Google Top 3" },
      { label: "Organic Revenue", value: "$194,500", trend: "up", description: "Direct organic search e-commerce sales in Q3" },
      { label: "Domain Authority", value: "48 (from 27)", trend: "up", description: "Significant boost in overall search engine authority" }
    ],
    duration: "8 Months",
    testimonial: {
      quote: "Nabiul's technical SEO roadmap was the catalyst our brand needed. Organic traffic is now our highest-ROI sales channel by far.",
      author: "David Thorne",
      role: "Founder & CEO, Verdant Botanicals"
    },
    mockupType: "seo",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "16:9",
    isSample: false
  },
  {
    id: "social-media-management",
    title: "Social Media Management & Omnichannel Community",
    client: "Roast & Bloom Specialty Roastery",
    industry: "Specialty Coffee & Hospitality",
    category: "social",
    objective: "Establish a cohesive, vibrant multi-platform social presence across Instagram and TikTok to launch a direct-to-consumer coffee subscription.",
    servicesProvided: ["Social Media Management", "Canva", "Meta Ads", "Content Planning"],
    strategy: [
      "Crafted an aesthetically rich, warm visual moodboard emphasizing the artisanal roasting process, ethical sourcing, and home brewing tutorials.",
      "Produced 4 short-form video reels per week showcasing barista techniques, latte art challenges, and coffee flavor profiles.",
      "Instituted a micro-influencer gifting campaign with 35 specialty coffee creators that produced authentic user-generated content.",
      "Deployed automated story reply funnels offering a free 'Home Barista Guidebook' in exchange for email newsletter signups."
    ],
    metrics: [
      { label: "Instagram Follower Lift", value: "+32,000", trend: "up", description: "Grew from 4,200 to 36,200 engaged organic followers" },
      { label: "Average Reel Views", value: "48,500", trend: "up", description: "3 reels exceeded 250k organic viral impressions" },
      { label: "Subscribers Acquired", value: "1,840", trend: "up", description: "Monthly recurring coffee club subscribers from social" },
      { label: "Engagement Rate", value: "6.8%", trend: "up", description: "More than 3.5x industry average of 1.9%" }
    ],
    duration: "5 Months",
    testimonial: {
      quote: "Our cafe foot traffic doubled and our subscription club sold out in week two! Nabiul's understanding of our community was unmatched.",
      author: "Camilla Ramos",
      role: "Co-Owner & Head Roaster, Roast & Bloom"
    },
    mockupType: "social",
    imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "16:9",
    isSample: false
  },
  {
    id: "google-business-profile",
    title: "Google Business Profile Optimization",
    client: "Metro Dental & Aesthetics Clinic",
    industry: "Healthcare & Local Medical Services",
    category: "local",
    objective: "Capture top 3 ranking in the local Google Map Pack for competitive high-value search queries ('cosmetic dentist near me', 'invisalign downtown').",
    servicesProvided: ["Local SEO", "Google Business Profile", "WordPress", "Reputation Management"],
    strategy: [
      "Fully overhauled the clinic's Google Business Profile with secondary categories, updated photo galleries of clinic technology, and verified services.",
      "Corrected NAP (Name, Address, Phone) inconsistencies across 75+ healthcare and local business directories.",
      "Instituted a friendly post-appointment SMS review request workflow that collected 180+ authentic 5-star Google reviews in 4 months.",
      "Published weekly Google Business Updates showcasing patient smile makeovers and local dental health advice."
    ],
    metrics: [
      { label: "Local 3-Pack Ranking", value: "#1 Position", trend: "up", description: "Ranked #1 for 14 core target cosmetic dental keywords" },
      { label: "Phone Calls Generated", value: "+215%", trend: "up", description: "Direct click-to-call inquiries through Google Maps" },
      { label: "Website Visits", value: "8,950", trend: "up", description: "High-intent visitors arriving directly from GBP profile" },
      { label: "New Patient Consults", value: "164", trend: "up", description: "Booked treatments yielding over $240,000 in clinic value" }
    ],
    duration: "4 Months",
    testimonial: {
      quote: "Our phones haven't stopped ringing. Ranking #1 on Google Maps completely transformed our practice's booking schedule.",
      author: "Dr. Julian Sterling",
      role: "Lead Cosmetic Surgeon, Metro Dental"
    },
    mockupType: "local",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "16:9",
    isSample: false
  },
  {
    id: "marketing-graphic-design",
    title: "Marketing Graphic Design & High-Converting Ad Creative",
    client: "Nordic Glow Cosmeceuticals",
    industry: "Beauty, Wellness & Paid Media",
    category: "design",
    objective: "Combat creative ad fatigue on Meta Ads, test refreshed static and motion visual angles, and improve Click-Through Rate (CTR) and conversion velocity.",
    servicesProvided: ["Graphic Design", "Canva", "Meta Ads Manager", "Creative Strategy"],
    strategy: [
      "Designed a modular library of 40+ ad creatives spanning Us-vs-Them comparisons, customer review callouts, and clean product benefit grids.",
      "Developed high-contrast, thumb-stopping color palettes adhering to Scandinavian minimalist aesthetics while maintaining strong visual hierarchy.",
      "Designed 6 cohesive Instagram carousel stories with sequential progressive value unboxing.",
      "Optimized typography and layout for mobile thumb zones, ensuring legibility on 5.5-inch smartphone screens without zooming."
    ],
    metrics: [
      { label: "Click-Through Rate (CTR)", value: "3.42%", trend: "up", description: "Increased from 1.15% (+197% performance improvement)" },
      { label: "Cost Per Click (CPC)", value: "$0.48", trend: "down", description: "Substantial drop from $1.12 baseline due to high relevance" },
      { label: "Blended Meta ROAS", value: "4.85x", trend: "up", description: "Sustained return across $80,000 monthly ad spend" },
      { label: "Creative Variants Tested", value: "48 Assets", trend: "up", description: "Systematic matrix of hooks, headlines, and visuals" }
    ],
    duration: "3 Months",
    testimonial: {
      quote: "Nabiul's design instincts for what actually converts on Instagram are phenomenal. Every creative pack he delivered was an immediate top performer.",
      author: "Freja Lindstrom",
      role: "Head of Marketing, Nordic Glow"
    },
    mockupType: "brand",
    imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    aspectRatio: "16:9",
    isSample: true
  }
];

export const TOOLS_EXPERTISE: ToolItem[] = [
  {
    id: "google-ads",
    name: "Google Ads",
    category: "Paid Advertising",
    proficiency: 95,
    yearsOfExperience: "6 Years",
    description: "Search, Shopping, Display, and Performance Max campaign architecture, bidding automation, and search intent targeting.",
    certification: "Google Ads Search & Measurement Certified",
    keyUseCases: [
      "Performance Max campaigns",
      "High-intent keyword discovery & SKAG setup",
      "Negative keyword pruning & script automation",
      "Smart Bidding & Target ROAS optimization"
    ],
    iconType: "target"
  },
  {
    id: "google-analytics",
    name: "Google Analytics (GA4)",
    category: "Data & Attribution",
    proficiency: 94,
    yearsOfExperience: "6 Years",
    description: "Multi-channel funnel analysis, custom event tracking, exploration reports, user cohort analysis, and conversion path modeling.",
    certification: "Google Analytics Individual Qualification (GAIQ)",
    keyUseCases: [
      "Custom conversion funnels & event tracking",
      "Cross-domain user journey mapping",
      "Attribution modeling (Data-Driven vs Last Click)",
      "Looker Studio dashboard synchronization"
    ],
    iconType: "bar-chart-2"
  },
  {
    id: "meta-ads-manager",
    name: "Meta Ads Manager",
    category: "Paid Advertising",
    proficiency: 96,
    yearsOfExperience: "5+ Years",
    description: "Full-funnel Facebook and Instagram ad management, Advantage+ catalog ads, custom audiences, CBO scaling, and pixel API tracking.",
    certification: "Meta Certified Media Buying Professional",
    keyUseCases: [
      "Top/Middle/Bottom of funnel account structure",
      "CBO budget allocation & dynamic creative testing",
      "Conversions API (CAPI) server-side integration",
      "Lookalike and 1st-party customer list retargeting"
    ],
    iconType: "share-2"
  },
  {
    id: "google-search-console",
    name: "Google Search Console",
    category: "Search & Technical SEO",
    proficiency: 92,
    yearsOfExperience: "6 Years",
    description: "Search performance diagnostics, indexing troubleshooting, Core Web Vitals monitoring, XML sitemap maintenance, and SERP click analysis.",
    certification: "Technical SEO Specialist",
    keyUseCases: [
      "Index coverage & crawl error resolution",
      "Search query CTR optimization & page position tracking",
      "Core Web Vitals & mobile usability audits",
      "Schema validation & rich snippet verification"
    ],
    iconType: "search"
  },
  {
    id: "canva",
    name: "Canva",
    category: "Creative & Design",
    proficiency: 90,
    yearsOfExperience: "5 Years",
    description: "Rapid high-converting social media creative creation, brand kit development, animated Instagram carousels, and client presentation decks.",
    certification: "Canva Design & Brand Certified",
    keyUseCases: [
      "Paid social ad creative generation & variants",
      "Brand kit consistency (palette, typography, elements)",
      "Multi-slide educational carousels & infographics",
      "Presentation slide decks & client growth reports"
    ],
    iconType: "palette"
  },
  {
    id: "semrush-ahrefs",
    name: "Semrush / Ahrefs",
    category: "SEO & Competitive Intelligence",
    proficiency: 93,
    yearsOfExperience: "6 Years",
    description: "In-depth competitive gap analysis, keyword difficulty estimation, backlink profile audits, and content topic clustering.",
    certification: "Semrush SEO Toolkit Certified",
    keyUseCases: [
      "Competitor organic traffic & keyword gap analysis",
      "Backlink toxic link audits & anchor text distribution",
      "SERP volatility tracking & position rank alerts",
      "Content marketing topic cluster recommendations"
    ],
    iconType: "trending-up"
  },
  {
    id: "wordpress",
    name: "WordPress",
    category: "CMS & Web Optimization",
    proficiency: 88,
    yearsOfExperience: "6 Years",
    description: "On-page SEO implementation, schema markup injection, landing page design with Elementor/Gutenberg, and page speed caching optimization.",
    certification: "WordPress CMS & Technical Site Lead",
    keyUseCases: [
      "SEO plugin setup (Yoast / Rank Math / Schema Pro)",
      "Conversion-focused landing page builds",
      "Speed optimization (WP Rocket, image WebP compression)",
      "Blog structure, tags, and internal link architecture"
    ],
    iconType: "globe"
  }
];

export const ANALYTICS_TIMELINE: AnalyticsDataPoint[] = [
  { month: "Jan", organicTraffic: 18200, paidImpressions: 110000, roas: 2.8, conversions: 240, cpa: 48 },
  { month: "Feb", organicTraffic: 22400, paidImpressions: 145000, roas: 3.1, conversions: 310, cpa: 42 },
  { month: "Mar", organicTraffic: 29800, paidImpressions: 190000, roas: 3.6, conversions: 420, cpa: 36 },
  { month: "Apr", organicTraffic: 39500, paidImpressions: 240000, roas: 4.1, conversions: 560, cpa: 31 },
  { month: "May", organicTraffic: 51200, paidImpressions: 295000, roas: 4.4, conversions: 710, cpa: 27 },
  { month: "Jun", organicTraffic: 68400, paidImpressions: 340000, roas: 4.8, conversions: 890, cpa: 23 },
  { month: "Jul", organicTraffic: 84100, paidImpressions: 390000, roas: 5.1, conversions: 1040, cpa: 20 },
  { month: "Aug", organicTraffic: 98600, paidImpressions: 430000, roas: 5.4, conversions: 1220, cpa: 17 }
];

export const KEYWORD_RANKINGS_PROGRESS = [
  { rankGroup: "Top 3 Positions (High Intent)", before: 12, current: 84, gain: "+600%" },
  { rankGroup: "Top 10 Positions (First Page)", before: 48, current: 246, gain: "+412%" },
  { rankGroup: "Top 20 Positions (Close Contenders)", before: 110, current: 490, gain: "+345%" },
  { rankGroup: "Total Tracked Organic Keywords", before: 420, current: 1850, gain: "+340%" }
];
