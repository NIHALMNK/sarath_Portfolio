export interface ICPProfile {
  type: string;
  challenge: string;
  outcome: string;
  engagementType: string;
}

export const icpProfiles: ICPProfile[] = [
  {
    type: "ERP Founders",
    challenge: "Competing on modular price grids, features, and dry corporate brochures.",
    outcome: "Shift to enterprise operations positioning, securing high-ticket inbound trust.",
    engagementType: "Enterprise Authority Retainer"
  },
  {
    type: "SaaS Founders",
    challenge: "High churn rates and standard marketing copy failing to engage enterprise buyers.",
    outcome: "Establishing clear product worldview systems that pre-sell ARR buyers.",
    engagementType: "Narrative Strategy & Execution"
  },
  {
    type: "Startup Founders",
    challenge: "Building in stealth or lacking visibility to raise funding rounds.",
    outcome: "High-signal founder brand that attracts pre-seed and seed VCs.",
    engagementType: "Early-Stage Growth Blueprint"
  },
  {
    type: "Healthcare Founders",
    challenge: "Regulatory trust bottlenecks and dry, compliance-first networking.",
    outcome: "Patient-first clinical authority profile attracting joint ventures.",
    engagementType: "Healthcare Authority Advisory"
  },
  {
    type: "EdTech Founders",
    challenge: "High customer acquisition costs (CAC) and recruitment pipeline gaps.",
    outcome: "Organic reach of 100K+ targeting student talent and institutional heads.",
    engagementType: "Founder Brand Systems"
  },
  {
    type: "Agency Founders",
    challenge: "Operating on low margins, relying on passive referrals, and struggling to close 5-figure retainers.",
    outcome: "Positioned as the leading category specialist, justifying high-value retainers.",
    engagementType: "Agency Authority Program"
  },
  {
    type: "Investors",
    challenge: "Pre-seed and Seed deal flow stagnation in highly competitive capital markets.",
    outcome: "Default choice for technical founders looking for value-add capital.",
    engagementType: "VC Brand Positioning"
  },
  {
    type: "Business Leaders",
    challenge: "Lacking a digital footprint while leading major industry shifts.",
    outcome: "Polished executive authority reflecting company scale and narrative control.",
    engagementType: "Executive Presence Retainer"
  },
];

export function getICPProfiles(): ICPProfile[] {
  return icpProfiles;
}
