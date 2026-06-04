export interface CaseStudy {
  slug: string;
  status: "featured" | "published" | "comingSoon";
  title: string;       // Founder Name (e.g. "Muhsin MT")
  subtitle: string;    // Designation & Company (e.g. "CEO & MD, Enfono Technologies")
  industry: string;
  country: string;
  engagementType: string;
  founderIds: string[];
  results: {
    impressions?: string;
    followers?: string;
    leads?: string;
    hires?: string;
    mediaFeatures?: string;
  };
  problem: string;
  strategy: string;
  execution: string;
  objective: string;
  businessImpact: string[];
  linkedinProfile: {
    profileImage: string;
    coverImage: string;
    name: string;
    title: string;
    company: string;
    location: string;
    followers: string;
    bio: string;
    linkedinUrl: string;
  };
  profileDisplayType?: "mockup" | "screenshot";

  seoTitle: string;
  seoDescription: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "muhsin-enfono-erp",
    status: "featured",
    title: "Muhsin MT",
    subtitle: "CEO & MD, Enfono Technologies",
    industry: "ERP",
    country: "GCC",
    engagementType: "Founder Positioning",
    founderIds: ["muhsin"],
    results: {
      impressions: "35K+",
      followers: "1.5K+",
      leads: "$100K+ Pipeline",
      hires: "4 Key Hires"
    },
    problem: "Enfono Technologies offers complex enterprise ERP systems. The founder had massive industry expertise but was virtually invisible on digital channels. The firm was competing on price grids, and outbound sales cycles were sluggish. They lacked a structured mechanism to attract enterprise buyers and top-tier engineering talent organically.",
    strategy: "Repositioned Muhsin as the default contrarian voice in the ERP market. Instead of posting product features, the content focused on exposing ERP implementation failures, explaining the hidden business costs of bad architecture, and sharing actual builder insights. We designed a premium 'opinionated worldview' narrative.",
    execution: "Co-authored and distributed 4 key authority posts weekly. Handled absolute content operations including hooks research, script writing, graphics concepts, and narrative flows. Streamlined post structures to appeal directly to CFOs, CTOs, and Operations directors.",
    objective: "Establish category authority in the ERP space, attract enterprise buyers, improve founder visibility, and create inbound opportunities for both business growth and talent acquisition.",
    businessImpact: [
      "Positioned Enfono's CEO as a visible ERP authority",
      "Generated 2+ inbound Leads from target buyers; 1 is worth above 100K dollars",
      "Improved recruitment visibility for engineering talent",
      "Increased founder credibility among enterprise decision-makers"
    ],
    linkedinProfile: {
      profileImage: "/founders/Muhsin.jpeg",
      coverImage: "/founders/cover-Muhsin.jpeg",
      name: "Muhsin MT",
      title: "CEO & MD",
      company: "Enfono Technologies",
      location: "Dubai",
      followers: "1500+",
      bio: "CEO & MD at Enfono Technologies. Transforming enterprise operations with custom ERP software and digital solutions.",
      linkedinUrl: " https://www.linkedin.com/in/muhsinmt/"
    },
    profileDisplayType: "mockup",
    seoTitle: "Muhsin MT | CEO & MD, Enfono Technologies | Case Study",
    seoDescription: "See how strategic founder positioning and LinkedIn thought leadership helped position Muhsin MT as an ERP authority, driving leads and key hires."
  },
  //--------sehl-ayub--------
  {
    slug: "sehl-ayub-fb-conglomerate",
    status: "published",
    title: "Sehl Ayub",
    subtitle: "CEO@BetterGrow Holding, Cofounder@SOULSTEPS",
    industry: "F&B",
    country: "GCC",
    engagementType: "Personal Branding",
    founderIds: ["sehl-ayub"],
    results: {
      impressions: "70K+",
      followers: "500+ Active",
      // leads: "Retail Inbounds",
      hires: "5+"
    },
    problem: "Leading multiple roastery, retail, and manufacturing brands, the founder needed to unify his digital reputation. The goal was to establish regional F&B authority to attract franchise partners and franchise deals.",
    strategy: "Focus on operational scaling lessons, franchise expansion strategies, and regional consumer behavior insights, shifting away from personal status posts.",
    execution: "Created a structured publishing rhythm highlighting franchise blueprints and manufacturing war stories. Refined the founder's LinkedIn profile copy to appeal to enterprise investors.",
    objective: "Establish category authority in regional GCC retail, attract roastery franchise inquiries, and coordinate multi-brand executive digital reputation.",
    businessImpact: [
      "Established F&B roastery category leadership",
      "Unified digital reputation for BetterGrow's multi-brand operations"
    ],
    linkedinProfile: {
      profileImage: "/founders/sehl.jpeg",
      coverImage: "/founders/cover-sehl.jpeg",
      name: "Sehl Ayub",
      title: "CEO",
      company: "BetterGrow Holding",
      location: "Dubai, UAE",
      followers: "5,000+",
      bio: "CEO of BetterGrow Holding. Strategic investor and business operator scaling regional F&B and retail brands across the GCC.",
      linkedinUrl: " https://www.linkedin.com/in/sehlayub/"
    },
    profileDisplayType: "mockup",
    seoTitle: "Sehl Ayub | Chairman, BetterGrow Holding | Case Study",
    seoDescription: "Explore how personal branding and LinkedIn strategy established authority for Sehl Ayub in the GCC retail and roastery market."
  },
  //--------murshid-rahman--------
  {
    slug: "murshid-rahman-edtech",
    status: "published",
    title: "Murshid Rahman",
    subtitle: "Founder, Lanstitut",
    industry: "EdTech",
    country: "India",
    engagementType: "Thought Leadership",
    founderIds: ["murshid-rahman"],
    results: {
      impressions: "50K+",
      followers: "2k+",
      hires: "5 Executive Hires",
      mediaFeatures: "YourStory Feature"
    },
    problem: "An EdTech startup needed high-quality educational leadership positioning. The founder was spending huge amounts on HR recruiting agencies with mixed success.",
    strategy: "Authored posts focusing on the future of healthcare education, scaling operational bottlenecks, and internal talent growth philosophies.",
    execution: "Mapped content topics to company milestones.",
    objective: "Position Lanstitut as a trusted relocation pipeline for healthcare specialists, attract top-tier executive talent organically, and secure press validations.",
    businessImpact: [
      "Attracted 5 senior executive hires organically",
      "Secured credibility with YourStory editorial feature",
      "Strengthened trust among relocating nursing and medical candidates"
    ],
    linkedinProfile: {
      profileImage: "/founders/murshid.jpeg",
      coverImage: "/founders/cover-murshid.jpeg",
      name: "Murshid Rahman",
      title: "Founder",
      company: "Lanstitut",
      location: "Cochin, Kerala, India",
      followers: "12,000+",
      bio: "Founder of Lanstitut. Helping students and healthcare professionals build international careers through relocation and language systems.",
      linkedinUrl: "https://www.linkedin.com/in/murshidrahman/"
    },
    profileDisplayType: "mockup",
    seoTitle: "Murshid Rahman | Founder, Lanstitut | Case Study",
    seoDescription: "How we leveraged thought leadership to secure YourStory coverage and recruit 5 top-tier executives organically for Murshid Rahman."
  },
  //--------shamil-muhammed--------
  {
    slug: "shamil-muhammed-blowlin",
    status: "published",
    title: "Shamil Muhammed",
    subtitle: "Founder & CEO @ Blowlin",
    industry: "F&B",
    country: "India",
    engagementType: "Personal Branding & Growth",
    founderIds: ["shamil-muhammed"],
    results: {
      impressions: "200K+",
      followers: "5k+",
      leads: "7+ Qualified Deals",
      mediaFeatures: "Hindustan Times"
    },
    problem: "A B2B founder, he was visible on LinkedIn but had no time and no distribution system, relying on cold outreach, ads, and referrals instead of inbound demand.",
    strategy: "Productized his thinking into a systematized Content Engine rather than one- off posts, building an authority - driven personal brand to replace cold outreach with predictable inbound.",
    execution: "Scaled BlowLin from a failed ₹5,000/month chatbot experiment into a ₹5,00,000+ MRR agency serving 25+ founders and VCs across the US, UK, and GCC with a 6-person LinkedIn team.",
    objective: "His objective was to be expert in his industry and generate inbound leads through LinkedIn",
    businessImpact: [
      "Generated 7+ pre-qualified inbound leads & inquiries",
      "Acquired high-trust national credibility with Hindustan Times feature",
      "Expanded network reach by 10,000 new followers and impressions above 600K"
    ],
    linkedinProfile: {
      profileImage: "/founders/Shamil.jpeg",
      coverImage: "/founders/cover-Shamil.jpeg",
      name: "Shamil Muhammed",
      title: "Founder",
      company: "Blowlin",
      location: "Calicut, Kerala, India",
      followers: "10,000+",
      bio: "BlowLin a LinkedIn personal branding agency that turns credible-but-quiet founders and executives into authoritative voices through ghostwriting, content strategy, and personal brand building.",
      linkedinUrl: "https://www.linkedin.com/in/muhammed-shamil-t/"
    },
    profileDisplayType: "mockup",
    seoTitle: "Shamil Muhammed | Founder, Blowlin | Case Study",
    seoDescription: "Case study on how Shamil Muhammed generated 100K+ organic impressions and 7+ pre-qualified inbound business deals."
  },
  //--------dr-afsal-mohammed--------
  {
    slug: "dr-afsal-mohammed-blowlin",
    status: "published",
    title: "Dr. Afsal Mohammed",
    subtitle: "Founding Partner & MD @ Bluedot Air Ambulance",
    industry: "Healthcare / Aeromedical",
    country: "India",
    engagementType: "Personal Branding & Growth",
    founderIds: ["dr-afsal-mohammed"],
    results: {
      impressions: "30K+",
      followers: "1.5K+"
    },
    problem: "A doctor and aeromedical leader, he wanted to build an impactful and trustworthy brand on LinkedIn but had no system to translate his clinical and operational expertise into a credible public presence.",
    strategy: "Strategized his content to position him as an industry expert, identified his unique angle, and aligned it tightly with his personal brand to build authority in the aeromedical space.",
    execution: "Built and ran his LinkedIn presence to generate consistent impressions and strong engagement, establishing him as a recognizable expert voice and a trustable partner in the aeromedical field.",
    objective: "His objective was to build a trustable thought-leader brand on LinkedIn.",
    businessImpact: [
      "Built a credible personal brand for a practicing doctor and aeromedical leader",
      "Positioned him as an industry expert in the aeromedical field",
      "Established him as a trustable partner and authoritative voice in aeromedics"
    ],
    linkedinProfile: {
      profileImage: "/founders/Afsal.jpeg",
      coverImage: "/founders/cover-Afsal.jpeg",
      name: "Dr. Afsal Mohammed",
      title: "Founding Partner & MD",
      company: "Bluedot Air Ambulance",
      location: "India",
      followers: "1,500+",
      bio: "Founding Partner & MD at Bluedot Air Ambulance. Building trusted, expert-led aeromedical care and sharing the realities of air ambulance operations.",
      linkedinUrl: "https://www.linkedin.com/in/dr-afsal-flyingdoc/"
    },
    profileDisplayType: "mockup",
    seoTitle: "Dr. Afsal Mohammed | Founding Partner & MD, Bluedot Air Ambulance | Case Study",
    seoDescription: "Case study on how Dr. Afsal Mohammed built a credible thought-leader brand on LinkedIn, generating 30K+ impressions as an aeromedical industry expert."
  },
  //---------Jabir M Liyakath Ali-----------
  {
    slug: "jabir-m-liyakath-ali-blowlin",
    status: "published",
    title: "Jabir M Liyakath Ali",
    subtitle: "Founder & CEO @ WebCastle",
    industry: "IT / Web & Software Services",
    country: "India",
    engagementType: "Personal Branding & Growth",
    founderIds: ["jabir-m-liyakath-ali"],
    results: {
      impressions: "50K+",
      followers: "200+"
    },
    problem: "A founder and CEO who needed lead generation, talent acquisition, and trustworthy brand credibility, while building thought leadership and positioning himself as an expert in his niche.",
    strategy: "Strategized content around four factors: trust, lead generation, thought leadership, and expertise drawn from his personal and professional experience.",
    execution: "Built an authority-driven LinkedIn presence that consistently demonstrated his expertise, generating reach and credibility that supported both inbound interest and talent attraction.",
    objective: "His objective was to build a thought-leader brand, position himself as an industry expert, and generate leads.",
    businessImpact: [
      "Built a credible personal brand on LinkedIn",
      "Positioned him as a thought leader in his industry",
      "Established him as a recognized industry expert"
    ],
    linkedinProfile: {
      profileImage: "/founders/Jabir.jpeg",
      coverImage: "/founders/cover-Jabir.jpeg",
      name: "Jabir M Liyakath Ali",
      title: "Founder & CEO",
      company: "WebCastle",
      location: "India",
      followers: "200+",
      bio: "Founder & CEO at WebCastle. Building software and web products, and sharing lessons from years of running a services business.",
      linkedinUrl: "https://www.linkedin.com/in/jabirml/"
    },
    profileDisplayType: "mockup",
    seoTitle: "Jabir M Liyakath Ali | Founder & CEO, WebCastle | Case Study",
    seoDescription: "Case study on how Jabir M Liyakath Ali built a credible thought-leader brand on LinkedIn, generating 50K+ impressions as an industry expert."
  },
  //------yasin-bin-saleem------
  {
    slug: "yasin-bin-saleem-blowlin",
    status: "published",
    title: "Yasin Bin Saleem",
    subtitle: "Founder @ Lanstitut",
    industry: "Ed-Tech / Healthcare",
    country: "India",
    engagementType: "Personal Branding & Growth",
    founderIds: ["yasin-bin-saleem"],
    results: {
      impressions: "50K+",
      followers: "2.5K+"
    },
    problem: "A founder who needed talent acquisition and trustworthy brand credibility, wanting to build thought leadership, position himself as an expert in his niche, and share his expertise in minimal, simple language.",
    strategy: "Strategized content around three factors: trust, thought leadership, and expertise drawn from his personal and professional experience, paired with industry-relevant topics.",
    execution: "Built a consistent, simply-written LinkedIn presence that surfaced his expertise on relevant industry topics, driving reach and credibility that supported talent attraction.",
    objective: "His objective was to build credibility and establish industry thought leadership.",
    businessImpact: [
      "Built a credible personal brand on LinkedIn",
      "Positioned him as a thought leader in his space",
      "Established him as a recognized industry expert"
    ],
    linkedinProfile: {
      profileImage: "/founders/Yasin.jpeg",
      coverImage: "/founders/cover-Yasin.jpeg",
      name: "Yasin Bin Saleem",
      title: "Founder",
      company: "Lanstitut",
      location: "India",
      followers: "2,500+",
      bio: "Founder at Lanstitut. Sharing expertise on building and operating in ed-tech and healthcare, in plain and simple words.",
      linkedinUrl: "https://www.linkedin.com/in/yasin-bin-saleem/"
    },
    profileDisplayType: "mockup",
    seoTitle: "Yasin Bin Saleem | Founder, Lanstitut | Case Study",
    seoDescription: "Case study on how Yasin Bin Saleem built credibility and industry thought leadership on LinkedIn, generating 50K+ impressions and 2.5K+ followers."
  },
  //--------railrolls--------
  {
    slug: "railrolls-blowlin",
    status: "published",
    title: "RailRolls",
    subtitle: "Company Page Visibility & Brand Building",
    industry: "F&B",
    country: "India",
    engagementType: "Personal Branding & Growth",
    founderIds: ["railrolls"],
    results: {
      impressions: "25K+ in 2 weeks",
      followers: "500+"
    },
    problem: "A consumer brand that needed talent acquisition and trustworthy brand credibility, and wanted to position itself as a problem-solving public brand in India.",
    strategy: "Strategized company-page content around three factors: trust, a credible brand base, and problem-solving — anchored in the brand's USP and supported by audience insights from their database.",
    execution: "Built and ran the RailRolls company page to rapidly grow reach and engagement, educating people about Indian food and the real problems travelers face, while positioning the brand around solving them.",
    objective: "Its objective was to build credibility and position RailRolls as a problem-solving, value-driven brand in India.",
    businessImpact: [
      "Built a credible brand presence on LinkedIn",
      "Positioned RailRolls as a relevant, real-problem-solving brand in India",
      "Educated audiences about Indian food and the problems travelers face"
    ],
    linkedinProfile: {
      profileImage: "/founders/RailRolls.jpeg",
      coverImage: "/founders/cover-RailRolls.jpeg",
      name: "RailRolls",
      title: "Company Page",
      company: "RailRolls",
      location: "India",
      followers: "500+",
      bio: "RailRolls — solving real problems around Indian food and travel, and building a credible, value-driven consumer brand.",
      linkedinUrl: "https://www.linkedin.com/company/railrolls/"
    },
    profileDisplayType: "mockup",
    seoTitle: "RailRolls | Brand Visibility Case Study | Case Study",
    seoDescription: "Case study on how RailRolls built brand credibility on LinkedIn, generating 25K+ impressions in just two weeks as a problem-solving consumer brand in India."
  }

];

export function getCaseStudies(): CaseStudy[] {
  return caseStudiesData;
}

export function getFeaturedCaseStudy(): CaseStudy | undefined {
  return caseStudiesData.find((cs) => cs.status === "featured");
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudiesData.find((cs) => cs.slug === slug);
}
