export interface Founder {
  id: string;
  name: string;
  company: string;
  industry: string;
  country: string;
  engagementType: string;
  image?: string;
  linkedinUrl?: string;
  results: {
    impressions?: string;
    followers?: string;
    leads?: string;
    hires?: string;
    mediaFeatures?: string;
  };
}

export const foundersData: Founder[] = [
  {
    id: "muhsin",
    name: "Muhsin",
    company: "Enfono Technologies",
    industry: "ERP",
    country: "India",
    engagementType: "Founder Positioning",
    image: "/founders/muhsin.jpg",
    linkedinUrl: "https://linkedin.com/in/muhsin-enfono",
    results: {
      impressions: "30K+",
      followers: "1.5K+",
      leads: "100k+",
      hires: "4"
    }
  },
  {
    id: "sehl-ayub",
    name: "Sehl Ayub",
    company: "BetterGrow Holding, Tayn Roastery, Tyajriba, Kallada Foods",
    industry: "F&B",
    country: "GCC",
    engagementType: "Personal Branding",
    image: "/founders/sehl-ayub.jpg",
    linkedinUrl: "https://linkedin.com/in/sehl-ayub",
    results: {
      impressions: "40K+",
      followers: "300+",
      leads: "Inbound Enquiries",
      hires: "Hiring Leads"
    }
  },
  {
    id: "murshid-rahman",
    name: "Murshid Rahman",
    company: "Lanstitut",
    industry: "EdTech",
    country: "India",
    engagementType: "Thought Leadership",
    image: "/founders/murshid-rahman.jpg",
    linkedinUrl: "https://linkedin.com/in/murshid-lanstitut",
    results: {
      impressions: "50K+",
      followers: "900",
      hires: "5",
      mediaFeatures: "YourStory"
    }
  },
  {
    id: "yasin-bin-salim",
    name: "Yasin Bin Salim",
    company: "Lanstitut",
    industry: "Healthcare",
    country: "GCC",
    engagementType: "Thought Leadership Strategy",
    image: "/founders/yasin-bin-salim.jpg",
    linkedinUrl: "https://linkedin.com/in/yasin-lanstitut",
    results: {
      impressions: "50K+",
      followers: "900",
      hires: "5",
      mediaFeatures: "Authority Positioning"
    }
  },
  {
    id: "shamil-muhammed",
    name: "Shamil Muhammed",
    company: "Blowlin",
    industry: "F&B",
    country: "India",
    engagementType: "Personal Branding & Growth",
    image: "/founders/shamil-muhammed.jpg",
    linkedinUrl: "https://linkedin.com/in/shamil-blowlin",
    results: {
      impressions: "100K+",
      followers: "1000+",
      leads: "7+",
      mediaFeatures: "Hindustan Times"
    }
  },
  {
    id: "rail-rolls",
    name: "Rail Rolls",
    company: "Rail Rolls Brand Campaign",
    industry: "F&B",
    country: "India",
    engagementType: "Brand Strategy",
    image: "/founders/rail-rolls.jpg",
    results: {
      impressions: "25K+",
      followers: "300",
      leads: "6+ Franchise Inquiries",
      mediaFeatures: "Credibility Growth"
    }
  },
  {
    id: "minhaj",
    name: "Minhaj",
    company: "Minhaj Brand Strategy",
    industry: "Startup",
    country: "India",
    engagementType: "Personal Branding",
    image: "/founders/minhaj.jpg",
    results: {
      impressions: "10K+",
      followers: "100"
    }
  }
];

export function getFounders(): Founder[] {
  return foundersData;
}

export function getFounderById(id: string): Founder | undefined {
  return foundersData.find((f) => f.id === id);
}
