export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  outcome: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "founder-positioning",
    title: "Founder Positioning",
    desc: "Audit and construct your unique category angle. We structure your core message pillars, proprietary worldview, and public tone-of-voice guidelines.",
    outcome: "A documented positioning roadmap that sets you apart from competitor agencies."
  },
  {
    id: "linkedin-ghostwriting",
    title: "LinkedIn Ghostwriting",
    desc: "Continuous strategic writing. We extract your internal knowledge and translate it into high-impact digital posts and slide carousels.",
    outcome: "4-5 premium weekly posts distributed in your authentic executive voice."
  },
  {
    id: "personal-branding",
    title: "Personal Branding",
    desc: "Align your profile, bios, copy assets, and digital footprint to match the high caliber of your company ARR.",
    outcome: "An executive digital profile ready to receive and convert enterprise corporate traffic."
  },
  {
    id: "thought-leadership-systems",
    title: "Thought Leadership Systems",
    desc: "Establish internal database processes to document your operator lessons, frameworks, case studies, and insights.",
    outcome: "A compounding reservoir of proprietary brand IP owned by your firm."
  },
  {
    id: "content-strategy",
    title: "Content Strategy",
    desc: "Map content topics directly to your product launches, hiring waves, VC fundraising rounds, or outbound sales goals.",
    outcome: "Absolute alignment between organic views and bottom-line revenue goals."
  },
  {
    id: "executive-branding",
    title: "Executive Branding",
    desc: "Position your broader leadership team (VP/C-Suite) to scale trust, industry authority, and corporate visibility in parallel.",
    outcome: "A synchronized network of company voices driving massive organic reach."
  },
  {
    id: "authority-building",
    title: "Authority Building",
    desc: "Pitch and secure placements in top-tier industry podcasts, virtual roundtables, speaking panels, and editorial columns.",
    outcome: "Compounding off-platform trust that reinforces your digital dominance."
  },
  {
    id: "talent-attraction-strategy",
    title: "Talent Attraction Strategy",
    desc: "Author vision-focused narratives that highlight your company culture, engineering values, and growth opportunities.",
    outcome: "A steady inflow of inbound A-player engineering and executive talent."
  }
];

export function getServices(): ServiceItem[] {
  return servicesData;
}
