import { Shield, BookOpen, FileText, Send, Award, DollarSign, LucideIcon } from "lucide-react";

export interface FrameworkStep {
  id: number;
  title: string;
  subtitle: string;
  iconName: "Shield" | "BookOpen" | "FileText" | "Send" | "Award" | "DollarSign";
  objective: string;
  deliverables: string[];
  outcomes: string[];
}

export interface EngagementStep {
  step: number;
  title: string;
  description: string;
  outcome: string;
}

export const frameworkSteps: FrameworkStep[] = [
  {
    id: 1,
    title: "Positioning",
    subtitle: "Find your category of one",
    iconName: "Shield",
    objective: "Define the unique angle that separates the founder from competitor agencies or generalists, clarifying their specific authority zone.",
    deliverables: [
      "Core Message Document",
      "Target Persona Mapping",
      "Content Tone-of-Voice Guideline",
      "Category Definition Framework"
    ],
    outcomes: [
      "A razor-sharp brand positioning statement",
      "Instant value communication to enterprise/mid-market buyers",
      "Elimination of comparison with commodity copywriters"
    ]
  },
  {
    id: 2,
    title: "Narrative",
    subtitle: "Craft your proprietary worldview",
    iconName: "BookOpen",
    objective: "Translate business objectives and founder wisdom into a compelling narrative arc that challenges status-quo thinking.",
    deliverables: [
      "Content Pillars Matrix",
      "Personal Story Bank",
      "Worldview Framework",
      "Core Executive Narrative Draft"
    ],
    outcomes: [
      "Strategic alignment on industry-defining topics",
      "Deep intellectual trust with your target audience",
      "A repeatable content voice that feels completely authentic"
    ]
  },
  {
    id: 3,
    title: "Content",
    subtitle: "Create high-signal thought leadership",
    iconName: "FileText",
    objective: "Ghostwrite premium, insights-rich LinkedIn posts, essays, and articles using the founder's authentic voice and real-world results.",
    deliverables: [
      "Ghostwritten LinkedIn Posts (4-5x weekly)",
      "Custom Graphic and Visual Concepts",
      "Long-form Industry Essays",
      "High-converting Slide Carousels"
    ],
    outcomes: [
      "Peer-to-peer level discussion in the comments",
      "Command-level insights established publicly",
      "Consistent, active, premium digital presence without founder time drain"
    ]
  },
  {
    id: 4,
    title: "Distribution",
    subtitle: "Reach the decision makers",
    iconName: "Send",
    objective: "Maximize reach among key decision makers, startup CEOs, VC partners, and industry leaders through strategic formats.",
    deliverables: [
      "Posting Time Schedule Optimization",
      "CEO/VC Network Engagement Strategy",
      "Inbound Filter Blueprint",
      "Multi-channel Content Repurposing SOPs"
    ],
    outcomes: [
      "High-signal impressions directly on target accounts",
      "Meaningful network expansion with top-tier executives",
      "Elevated organic reach within your specific market niche"
    ]
  },
  {
    id: 5,
    title: "Authority",
    subtitle: "Convert attention into brand equity",
    iconName: "Award",
    objective: "Position the founder as the default industry reference point, leading to media features, podcast invitations, and speaking panels.",
    deliverables: [
      "PR & Media Outreach Outline",
      "Podcast Pitch Kit & Target List",
      "Authority Asset Hub (Ebooks/Whitepapers)",
      "Thought Leadership Newsletter Blueprint"
    ],
    outcomes: [
      "Inbound inquiries from publications (e.g. Hindustan Times, YourStory)",
      "Unsolicited invitations to address key industry conferences",
      "Industry default positioning for your specific business category"
    ]
  },
  {
    id: 6,
    title: "Opportunities",
    subtitle: "Capture commercial pipeline",
    iconName: "DollarSign",
    objective: "Channel inbound interest, hiring enquiries, and partnership requests into a predictable commercial pipeline for the business.",
    deliverables: [
      "Inbound DM Response Scripts",
      "Strategy Call Qualifier Questionnaire",
      "Lead Capture Visual Assets",
      "CRM Integration & Pipeline Hand-off SOPs"
    ],
    outcomes: [
      "Consistent flow of qualified inbound sales leads",
      "High-level talent acquisition inbound inquiries",
      "Strategic partnerships and VC/Investor opportunities"
    ]
  }
];

export const engagementProcessSteps: EngagementStep[] = [
  {
    step: 1,
    title: "Discovery & Positioning Audit (Strategy Call)",
    description: "A recorded strategy session lasting up to 120 minutes to understand founder goals, clarify target ICP/audience, analyze the business model, identify authority gaps, and clarify desired outcomes.",
    outcome: "Comprehensive understanding of positioning bottlenecks and baseline target metrics."
  },
  {
    step: 2,
    title: "Strategy Preparation",
    description: "Following the audit, a detailed 3-month strategic roadmap is prepared. The document details unique positioning angles, content pillars, distribution frameworks, narrative arcs, and target growth milestones.",
    outcome: "Detailed 3-month strategic roadmap delivered within 7 days."
  },
  {
    step: 3,
    title: "Positioning Development",
    description: "Establish the founder's definitive market position. We clarify your unique worldview, industry authority angles, core personal brand narratives, and competitive differentiators.",
    outcome: "Razor-sharp, category-of-one brand positioning narrative."
  },
  {
    step: 4,
    title: "Content Call System",
    description: "Scheduled content extraction calls (weekly or monthly). We send calendar invites 2 days prior to extract specific operator war stories, opinions, lessons, and industry worldview perspectives.",
    outcome: "10+ insights-rich thought leadership opportunities captured per session."
  },
  {
    step: 5,
    title: "Narrative Development",
    description: "We transform raw operator expertise and technical lessons into a strategic thought leadership narrative with clear content tracks tailored to enterprise buyers.",
    outcome: "Executive story bank and strategic message pillars mapped to commercial goals."
  },
  {
    step: 6,
    title: "Content Production",
    description: "Authoring high-signal content aligned with your strategy and positioning, including custom text posts, visual carousels, executive stories, and industry commentary.",
    outcome: "Premium ghostwritten LinkedIn content matching your authentic voice."
  },
  {
    step: 7,
    title: "Review & Approval",
    description: "Client reviews draft posts. Specific feedback is collected, necessary refinements are implemented, and final publishing approval is obtained.",
    outcome: "Polished, brand-safe posts certified for public release."
  },
  {
    step: 8,
    title: "Custom Distribution",
    description: "Customized publishing distribution system based on client preference. We set up schedule optimization for client publishing or direct page management.",
    outcome: "Consistent daily visibility on target executive feeds."
  },
  {
    step: 9,
    title: "Authority Building",
    description: "Expanding visibility and audience scale through strategic comment threads, personalized network connections, and targeted ICP engagement.",
    outcome: "Structured network expansion and direct peer-to-peer discussions initiated."
  },
  {
    step: 10,
    title: "Optimization & System Updates",
    description: "After 30-60 days of active publishing: we review performance data, identify winning narrative patterns, adjust positioning, and refine growth systems iteratively.",
    outcome: "Data-driven strategy updates to maximize commercial pipeline."
  }
];

// Helper to map icon name to Lucide components
export function getIconComponent(name: string): LucideIcon {
  switch (name) {
    case "Shield": return Shield;
    case "BookOpen": return BookOpen;
    case "FileText": return FileText;
    case "Send": return Send;
    case "Award": return Award;
    case "DollarSign": return DollarSign;
    default: return Shield;
  }
}
