export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  company: string;
  image?: string;
  testimonial: string;
  linkedinUrl?: string;
  category: "recommendations" | "written" | "video";
  isFeatured?: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "muhsin-featured",
    name: "Muhsin",
    designation: "CEO & Founder",
    company: "Enfono Technologies",
    image: "/founders/muhsin.jpg",
    testimonial: "Sarath completely transformed how I think about corporate communication. His positioning framework helped Enfono shift from competing on tight product price grids to establishing pure category authority. The content generated actual enterprise pipeline leads and attracted top engineering talent organically.",
    linkedinUrl: "https://linkedin.com/in/muhsin-enfono",
    category: "recommendations",
    isFeatured: true
  },
  {
    id: "sehl-ayub-rec",
    name: "Sehl Ayub",
    designation: "F&B Conglomerate Founder",
    company: "BetterGrow Holding",
    image: "/founders/sehl-ayub.jpg",
    testimonial: "An incredibly sharp founder positioning strategist. Understood our complex multi-brand retail and roastery dynamics immediately. The narrative systems he installed allowed me to build industry trust that translated directly into executive talent applications.",
    linkedinUrl: "https://linkedin.com/in/sehl-ayub",
    category: "recommendations"
  },
  {
    id: "murshid-written",
    name: "Murshid Rahman",
    designation: "Founder",
    company: "Lanstitut",
    testimonial: "Our recruitment inbound enquiries spiked immediately. High-caliber executive candidates cite our LinkedIn thought leadership posts during our interviews, saving us massive agency recruiting costs.",
    linkedinUrl: "https://linkedin.com/in/murshid-lanstitut",
    category: "written"
  },
  {
    id: "yasin-written",
    name: "Yasin Bin Salim",
    designation: "Director",
    company: "Lanstitut",
    testimonial: "He doesn't just write posts. He installs a knowledge-extraction infrastructure that makes our team's strategic messaging alignment a breeze. Absolute professional strategic partner.",
    linkedinUrl: "https://linkedin.com/in/yasin-lanstitut",
    category: "written"
  },
  {
    id: "shamil-written",
    name: "Shamil Muhammed",
    designation: "CEO & Founder",
    company: "Blowlin",
    testimonial: "Our national press feature in Hindustan Times was a massive credibility win. The PR mapping and content execution were flawless throughout our pre-seed fundraising campaign.",
    linkedinUrl: "https://linkedin.com/in/shamil-blowlin",
    category: "written"
  }
];

export function getTestimonials(category?: "recommendations" | "written" | "video"): Testimonial[] {
  if (category) {
    return testimonialsData.filter((t) => t.category === category);
  }
  return testimonialsData;
}

export function getFeaturedTestimonial(): Testimonial | undefined {
  return testimonialsData.find((t) => t.isFeatured === true);
}
