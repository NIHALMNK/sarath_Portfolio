export interface CaseStudy {
  slug: string;
  status: "featured" | "published" | "comingSoon" | "confidential";
  title: string;
  subtitle: string;
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
  problem?: string;
  strategy?: string;
  execution?: string;
  seoContentBlock?: {
    challenges: string;
    approach: string;
    results: string;
    lessons: string;
    insights: string;
  };
  seoTitle: string;
  seoDescription: string;
  contributions?: string[];
  responsibilities?: string[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "muhsin-enfono-erp",
    status: "featured",
    title: "How We Generated 1000K+ Impressions For An ERP Founder",
    subtitle: "Enterprise ERP Repositioning & LinkedIn Thought Leadership Strategy",
    industry: "ERP",
    country: "India",
    engagementType: "Founder Positioning",
    founderIds: ["muhsin"],
    results: {
      impressions: "35K+",
      followers: "1.5K+",
      leads: "$100k+ Lead",
      hires: "4 Key Hires"
    },
    problem: "Enfono Technologies offers complex enterprise ERP systems. The founder had massive industry expertise but was virtually invisible on digital channels. The firm was competing on price grids, and outbound sales cycles were sluggish. They lacked a structured mechanism to attract enterprise buyers and top-tier engineering talent organically.",
    strategy: "Repositioned Muhsin as the default contrarian voice in the ERP market. Instead of posting product features, the content focused on exposing ERP implementation failures, explaining the hidden business costs of bad architecture, and sharing actual builder insights. We designed a premium 'opinionated worldview' narrative.",
    execution: "Co-authored and distributed 4 key authority posts weekly. Handled absolute content operations including hooks research, script writing, graphics concepts, and narrative flows. Streamlined post structures to appeal directly to CFOs, CTOs, and Operations directors.",
    seoContentBlock: {
      challenges: "Enterprise software sales require trust. High-contract-value purchasers (CFOs and CEOs) do not make buying decisions based on advertisements. They buy when they trust the technical judgment of the firm's leadership. The primary challenge was extracting technical operator insight from a busy founder's calendar and translating it into readable executive syntax.",
      approach: "We set up a bi-weekly 30-minute interview loop. We extracted specific war stories—such as why a major ERP migration fails during database mapping—and turned those into visual carousels and text hooks. By emphasizing business metrics rather than system features, we qualified the incoming traffic.",
      results: "The organic campaign reached over 1,000,000 targeted industry impressions in 90 days. More importantly, fifty+ inbound leads were cued directly via inbound private messages. The organic branding also acted as recruitment leverage, attracting four engineering hires who specifically referenced the founder's LinkedIn posts.",
      lessons: "Founders don't need to post daily updates. Quality, insight-driven thought leadership distributed 3-4 times a week builds compounding brand equity. High-signal content must challenge standard practices to capture executive attention.",
      insights: "The B2B software purchasing dynamic has shifted from marketing funnels to founder authority. Buyers conduct extensive social search on LinkedIn before taking discovery meetings. Visible leadership has become a core commercial moat."
    },
    seoTitle: "How We Generated 1000K+ Impressions For An ERP Founder | Sarath Kumar",
    seoDescription: "See how strategic founder positioning and LinkedIn thought leadership helped generate 1000K+ impressions, follower growth, inbound leads, and talent acquisition.",
    contributions: [
      "Shared founder experiences",
      "Shared business updates",
      "Shared content assets and images",
      "Participated in content calls",
      "Provided market insights"
    ],
    responsibilities: [
      "Positioning strategy",
      "Content strategy",
      "Content call preparation",
      "Narrative development",
      "Content creation",
      "Distribution planning",
      "Authority building strategy"
    ]
  },
  {
    slug: "sehl-ayub-fb-conglomerate",
    status: "published",
    title: "Thought Leadership Branding for F&B Conglomerate CEO",
    subtitle: "Establishing Industry Category Authority in the GCC Retail Market",
    industry: "F&B",
    country: "GCC",
    engagementType: "Personal Branding",
    founderIds: ["sehl-ayub"],
    results: {
      impressions: "40K+",
      followers: "300+ Active",
      leads: "Retail Inbounds",
      hires: "Hiring Queries"
    },
    problem: "Leading multiple roastery, retail, and manufacturing brands, the founder needed to unify his digital reputation. The goal was to establish regional F&B authority to attract strategic franchise partners and franchise deals.",
    strategy: "Focus on operational scaling lessons, franchise expansion strategies, and regional consumer behavior insights, shifting away from personal status posts.",
    execution: "Created a structured publishing rhythm highlighting franchise blueprints and manufacturing war stories. Refined the founder's LinkedIn profile copy to appeal to enterprise investors.",
    seoTitle: "F&B Executive Thought Leadership Case Study | Sarath Kumar",
    seoDescription: "Explore how personal branding and LinkedIn strategy established authority for a major F&B conglomerate CEO in the GCC region."
  },
  {
    slug: "murshid-rahman-edtech",
    status: "published",
    title: "Scaling EdTech Authority & Sourcing Talented Hires",
    subtitle: "Organic Authority Campaign & Premium Media Feature Strategy",
    industry: "EdTech",
    country: "India",
    engagementType: "Thought Leadership",
    founderIds: ["murshid-rahman"],
    results: {
      impressions: "50K+",
      followers: "900+",
      hires: "5 Executive Hires",
      mediaFeatures: "YourStory Feature"
    },
    problem: "An EdTech startup needed high-quality educational leadership positioning. The founder was spending huge amounts on HR recruiting agencies with mixed success.",
    strategy: "Authored posts focusing on the future of healthcare education, scaling operational bottlenecks, and internal talent growth philosophies. Coordinated with press portals to secure credibility assets.",
    execution: "Mapped content topics to company milestones. Prepared dynamic PR story pitches, resulting in a featured profile publication on YourStory.",
    seoTitle: "EdTech Founder Authority Campaign Case Study | Sarath Kumar",
    seoDescription: "How we leveraged thought leadership to secure YourStory coverage and recruit 5 top-tier executives organically."
  },
  {
    slug: "shamil-muhammed-blowlin",
    status: "published",
    title: "100K+ Organic Reach & Inbound Sales for F&B Brand",
    subtitle: "Pre-seed Startup Traction & National Press Positioning",
    industry: "F&B",
    country: "India",
    engagementType: "Personal Branding & Growth",
    founderIds: ["shamil-muhammed"],
    results: {
      impressions: "100K+",
      followers: "1,000+",
      leads: "7+ Qualified Deals",
      mediaFeatures: "Hindustan Times"
    },
    problem: "A fast-growing food startup needed immediate pre-seed brand credibility to drive franchise sales and wholesale deals.",
    strategy: "Shared the pre-seed scaling journey, logistics challenges, and recipes for retail expansion. Partnered with national media for high-trust press backing.",
    execution: "Scripted storytelling posts outlining pre-seed benchmarks, accompanied by high-quality press distribution on Hindustan Times.",
    seoTitle: "Pre-seed Startup Organic Growth Case Study | Sarath Kumar",
    seoDescription: "Case study on how Shamil Muhammed generated 100K+ organic impressions and 7+ pre-qualified inbound business deals."
  },
  {
    slug: "yasin-bin-salim-healthcare",
    status: "comingSoon",
    title: "Regional Healthcare Founder Positioning",
    subtitle: "Thought Leadership Systems for Digital Health Executives",
    industry: "Healthcare",
    country: "GCC",
    engagementType: "Thought Leadership Strategy",
    founderIds: ["yasin-bin-salim"],
    results: {},
    seoTitle: "Healthcare Founder Positioning Case Study | Sarath Kumar",
    seoDescription: "Strategic thought leadership case study outline for regional digital health startup founders."
  },
  {
    slug: "rail-rolls-franchise-brand",
    status: "comingSoon",
    title: "Franchise Brand Credibility Launch",
    subtitle: "Sourcing Franchise Partners via Executive Digital Presence",
    industry: "F&B",
    country: "India",
    engagementType: "Brand Strategy",
    founderIds: ["rail-rolls"],
    results: {},
    seoTitle: "Franchise Authority Launch Case Study | Sarath Kumar",
    seoDescription: "Case study on leveraging founder branding to scale food-tech and franchise networks."
  },
  {
    slug: "minhaj-startup-branding",
    status: "comingSoon",
    title: "Early-Stage Startup Brand Foundations",
    subtitle: "Setting Up the Founder's First Authority Channel",
    industry: "Startup",
    country: "India",
    engagementType: "Personal Branding",
    founderIds: ["minhaj"],
    results: {},
    seoTitle: "Early-Stage Founder Branding Case Study | Sarath Kumar",
    seoDescription: "Case study roadmap for establishing digital brand baselines for early-stage startup leaders."
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
