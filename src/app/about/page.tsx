"use client";

import React from "react";
import Link from "next/link";
import { 
  Linkedin, 
  Mail, 
  ArrowLeft, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  Award,
  Sparkles
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function About() {
  const skills = [
    { title: "Founder Branding", desc: "Constructing category-defining messaging loops for startup leaders." },
    { title: "LinkedIn Strategy", desc: "Decoupling organic reach from engagement pods and low-intent views." },
    { title: "Ghostwriting", desc: "Translating operator wisdom into insights-rich executive copy." },
    { title: "Content Strategy", desc: "Mapping thought leadership directly to hiring, pipeline, and VCs." },
    { title: "Thought Leadership", desc: "Creating proprietary worldviews that establish command authority." },
    { title: "Personal Branding", desc: "Fusing executive reputation parameters across digital ecosystems." },
    { title: "Marketing Strategy", desc: "Aligning branding efforts to bottom-line sales metrics." },
    { title: "Audience Growth", desc: "Attracting high-intent buyers, CTOs, and investors." },
    { title: "Content Systems", desc: "Deploying database frameworks for asset documentation." },
    { title: "Authority Building", desc: "Structuring podcast bookings and high-trust PR campaigns." }
  ];

  const experiences = [
    {
      role: "Personal Branding & LinkedIn Growth Strategist",
      company: "Blowlin",
      period: "Present",
      description: "Coordinating CEO thought leadership campaigns, securing 100K+ reach metrics and Hindustan Times features."
    },
    {
      role: "Digital Marketing Head",
      company: "Fast Scaling Streetwear Brand",
      period: "2024",
      description: "Directed growth metrics, organic copy hooks, and multi-channel acquisition pipelines."
    },
    {
      role: "Social Media Manager",
      company: "Dotin Academy",
      period: "2023 - 2024",
      description: "Scaled corporate reach parameters and structured content blueprints."
    },
    {
      role: "Social Media & Content Strategist",
      company: "EduSlive",
      period: "2022 - 2023",
      description: "Drafted organic acquisition copy and handled digital strategy channels."
    },
    {
      role: "Content Creator",
      company: "Rail Rolls",
      period: "2022",
      description: "Created story hooks for franchise outreach campaigns."
    },
    {
      role: "Content Creator",
      company: "South Side Hub",
      period: "2021 - 2022",
      description: "Crafted short-form video scripts and corporate content blueprints."
    },
    {
      role: "Copywriter & Social Media Marketer",
      company: "Dus Media",
      period: "2021",
      description: "Authored sales copy templates and managed client channels."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Schema Person Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sarath Kumar",
            "jobTitle": "Founder Brand Strategist & LinkedIn Thought Leadership Consultant",
            "url": "https://sarathkumar.com/about",
            "sameAs": [
              "https://linkedin.com/in/sarath-kumar"
            ],
            "knowsAbout": [
              "Personal Branding",
              "LinkedIn Strategy",
              "Ghostwriting",
              "Thought Leadership",
              "Executive Branding",
              "Founder Positioning"
            ],
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "M.E.S Kalladi College"
            }
          })
        }}
      />

      <div className="absolute inset-0 premium-grid opacity-20 pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Header />

      <main className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto space-y-24">
        

        {/* ================= SECTION 1: WHO AM I ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/15 to-transparent rounded-2xl pointer-events-none" />
            <div className="bg-surface border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center aspect-[4/5] relative overflow-hidden glow-card-gold">
              <div className="h-28 w-28 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-gold text-2xl font-bold font-heading mb-4">
                SK
              </div>
              <h1 className="text-xl font-bold text-white font-heading">Sarath Kumar</h1>
              <p className="text-xs text-gold uppercase tracking-wider font-bold mt-1">Founder Brand Strategist</p>
              
              <div className="absolute bottom-4 left-4 right-4 text-[9px] text-zinc-600 font-bold uppercase tracking-wider border-t border-white/5 pt-2">
                About Image Placeholder
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-[10px] text-gold uppercase tracking-widest font-extrabold">
                <Sparkles className="h-3.5 w-3.5" />
                <span>The Strategist Behind Founder Voices</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold font-heading">
                About Sarath Kumar
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed">
              <p>
                I specialise in helping high-value founders, startup CEOs, investors, and industry leaders build authority, trust, and commercial leverage.
              </p>
              <p>
                By turning raw operator expertise into strategic thought leadership, positioning systems, and founder-led content, I help clients attract inbound opportunities, strengthen industry authority, improve hiring outcomes, and build long-term brand equity.
              </p>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://linkedin.com/in/sarath-kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-gold font-bold uppercase tracking-widest hover:text-white transition-colors duration-300"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="mailto:contact@sarathkumar.com"
                className="flex items-center gap-1.5 text-xs text-zinc-400 font-bold uppercase tracking-widest hover:text-white transition-colors duration-300"
              >
                <Mail className="h-4 w-4" />
                <span>contact@sarathkumar.com</span>
              </a>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: SKILLS ================= */}
        <section className="space-y-10 border-t border-white/5 pt-20">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Skills Matrix</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading">Consulting Capabilities</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {skills.map((skill, idx) => (
              <div 
                key={idx} 
                className="bg-card border border-white/5 p-6 rounded-xl hover:border-gold/25 transition-all duration-300 flex flex-col justify-between glow-card"
              >
                <div className="space-y-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gold/10 text-gold border border-gold/15">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-heading">{skill.title}</h4>
                  <p className="text-[11px] text-zinc-400 leading-relaxed font-medium">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 3: WORK EXPERIENCE ================= */}
        <section className="space-y-10 border-t border-white/5 pt-20">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Timeline</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading">Work Experience</h3>
          </div>

          <div className="relative pl-6 border-l border-white/5 space-y-10 py-2">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative">
                {/* timeline dot */}
                <div className="absolute left-[-35px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#0A0A0A] border border-gold/40 text-gold text-xs font-bold" />
                
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-sm font-bold text-white font-heading">{exp.role}</h4>
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{exp.period}</span>
                  </div>
                  <div className="text-xs text-gold font-bold">{exp.company}</div>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed font-medium max-w-2xl">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 4: EDUCATION ================= */}
        <section className="space-y-8 border-t border-white/5 pt-20">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Academic Baseline</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading">Education</h3>
          </div>

          <div className="bg-card border border-white/5 p-6 rounded-xl max-w-md glow-card flex items-start gap-4">
            <div className="p-3 bg-gold/10 border border-gold/15 text-gold rounded-lg">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Bachelor of Business Administration (BBA)</span>
              <h4 className="text-sm font-bold text-white">M.E.S Kalladi College</h4>
              <p className="text-xs text-gold font-medium">Graduated Class of 2021 - 2024</p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: CERTIFICATIONS ================= */}
        <section className="space-y-8 border-t border-white/5 pt-20">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Endorsements</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading">Certifications</h3>
          </div>

          <div className="bg-card border border-white/5 p-6 rounded-xl max-w-md glow-card flex items-start gap-4">
            <div className="p-3 bg-gold/10 border border-gold/15 text-gold rounded-lg">
              <Award className="h-6 w-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Professional Endorsement</span>
              <h4 className="text-sm font-bold text-white">Digital Marketing Certification</h4>
              <p className="text-xs text-gold font-medium">Haris & Co Academy</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
