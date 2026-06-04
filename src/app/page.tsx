"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  BarChart3,
  Layers,
  Globe,
  Building2,
  Target,
  Briefcase,
  AlertCircle,
  Check,
  X,
  ArrowRight,
  Sparkles,
  Quote,
  CheckCircle,
  FileText,
  Linkedin,
  Mail,
  ArrowUpRight,
  Sparkle
} from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TrustBar from "@/components/shared/TrustBar";
import ApplyCTA from "@/components/shared/ApplyCTA";
import ResultMetrics from "@/components/shared/ResultMetrics";
import { getFeaturedTestimonial } from "@/data/testimonials";
import { getFeaturedCaseStudy } from "@/data/caseStudies";
import { engagementProcessSteps } from "@/data/framework";
import { getICPProfiles } from "@/data/icp";

export default function Home() {
  const featuredTestimonial = getFeaturedTestimonial();
  const featuredCaseStudy = getFeaturedCaseStudy();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Sarath Kumar Consulting",
            "image": "https://sarathkumar.com/profile/portrait-placeholder.jpg",
            "description": "Founder Brand Strategist & Thought Leadership Advisory for tech, SaaS, ERP, and healthcare CEOs.",
            "url": "https://sarathkumar.com",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "priceRange": "$$$$"
          })
        }}
      />

      {/* Navigation */}
      <Header />

      {/* Background visual effects */}
      <div className="absolute inset-0 premium-grid opacity-30 pointer-events-none -z-10" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* ================= SECTION 1: HERO ================= */}
      <section id="hero" className="relative pt-20 md:pt-28 pb-10 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-6 max-w-4xl mx-auto py-12 md:py-16">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 text-gold text-[10px] font-bold tracking-widest uppercase">
            <Sparkles className="h-3 w-3" />
            <span>Category-of-One Founder Positioning</span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
            I Help Founders Become The{" "}
            <span className="font-serif italic font-normal text-gold block sm:inline">Go-To Voice</span>{" "}
            In Their Industry.
          </h1>

          {/* Subheadline */}
          <p className="text-zinc-400 text-sm sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Through Founder Positioning, LinkedIn Thought Leadership, Strategic Ghostwriting, and Personal Branding.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-gold hover:text-black font-bold tracking-wide rounded-lg transition-all duration-300 shadow-xl hover:shadow-gold/25 cursor-pointer uppercase text-xs"
            >
              Apply To Work Together
            </Link>
            <Link
              href="/case-studies"
              className="w-full sm:w-auto px-8 py-4 bg-transparent text-white hover:bg-white/5 border border-white/10 font-bold tracking-wide rounded-lg transition-all duration-300 cursor-pointer uppercase text-xs"
            >
              View Case Studies
            </Link>
          </div>

          {/* Trust statement */}
          <div className="pt-6 border-t border-white/5 max-w-md mx-auto">
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
              Trusted by founders across India, GCC, UK, Germany, and USA.
            </p>
          </div>
        </div>
      </section>

      {/* ================= RESULTS SNAPSHOT (ABOVE THE FOLD) ================= */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto pb-12">
        <div className="bg-surface/50 border border-white/5 rounded-xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 text-gold/[0.02] pointer-events-none text-9xl font-bold font-heading">
            SNAPSHOT
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { metric: "1000K+", label: "Impressions" },
              { metric: "100K+", label: "Thought Leadership Reach" },
              { metric: "50K+", label: "Follower Growth" },
              { metric: "50+", label: "Inbound Leads" },
              { metric: "15+", label: "Talent Acquisitions" }
            ].map((snap, idx) => (
              <div key={idx} className="space-y-1 relative group">
                <div className="text-xl sm:text-3xl font-heading font-extrabold text-gold">{snap.metric}</div>
                <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">{snap.label}</div>
                {idx < 4 && (
                  <div className="hidden md:block absolute right-[-12px] top-1/4 h-1/2 w-[1px] bg-white/5" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SOCIAL PROOF STRIP ================= */}
      <section className="bg-white/[0.01] border-y border-white/5 py-4 px-6 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5 text-[10px] text-zinc-400 font-extrabold uppercase tracking-widest">
          <span>Trusted By Founders Across</span>
          <span className="text-gold mx-2">•</span>
          <span>India</span>
          <span className="text-gold mx-2">•</span>
          <span>GCC</span>
          <span className="text-gold mx-2">•</span>
          <span>UK</span>
          <span className="text-gold mx-2">•</span>
          <span>Germany</span>
          <span className="text-gold mx-2">•</span>
          <span>USA</span>
        </div>
      </section>

      {/* ================= TRUST BAR ================= */}
      <TrustBar />

      {/* ================= SECTION 2: SHORT ABOUT ================= */}
      <section id="short-about" className="py-20 px-6 sm:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-card border border-white/5 rounded-2xl p-8 sm:p-12 glow-card">
            {/* Visual Portrait Strategy Placeholder */}
            <div className="lg:col-span-4 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/15 to-transparent rounded-xl pointer-events-none" />
              <div className="bg-surface border border-white/5 rounded-xl aspect-[4/5] flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
                <div className="h-20 w-20 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-gold text-lg font-bold font-heading mb-4">
                  SK
                </div>
                <h4 className="text-sm font-bold text-white font-heading">Sarath Kumar</h4>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Profile Hero Image</p>
                <div className="absolute bottom-3 text-[8px] text-zinc-600 font-bold uppercase tracking-wider">
                  Strategic Portrait Placeholder
                </div>
              </div>
            </div>

            {/* Concise Bio */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-gold font-bold">The Identity</span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading">
                  Founder Brand Strategist. Thought Leadership Consultant.
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed">
                Sarath Kumar specialises in helping high-value founders, startup CEOs, investors, and industry leaders build authority, trust, and commercial leverage. By turning raw operator expertise into strategic thought leadership, positioning systems, and founder-led content, he helps clients attract inbound opportunities, strengthen industry authority, improve hiring outcomes, and build long-term brand equity.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Founder Branding",
                  "LinkedIn Authority",
                  "Personal Branding",
                  "Thought Leadership",
                  "Inbound Opportunities"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
                    <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-white transition-colors duration-300 uppercase tracking-wider font-bold"
                >
                  <span>Read Full Editorial Bio</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ================= SECTION 3: PROOF ================= */}
      <section id="proof" className="py-16 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
        <ScrollReveal>
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Proof Over Promises</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">Measurable Outcomes</h2>
            <div className="h-[1px] w-12 bg-gold/50 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { value: 7, suffix: "+", label: "Million-Dollar Founders", desc: "Consulted directly on positioning" },
              { value: 1000, suffix: "K+", label: "Impressions", desc: "High-signal organic views generated" },
              { value: 50, suffix: "+", label: "Inbound Leads", desc: "B2B pipeline & growth inquiries cued" },
              { value: 15, suffix: "+", label: "Talent Acquisitions", desc: "Top-tier hires attracted organically" },
              { value: 5, suffix: "+", label: "Countries Served", desc: "India, GCC, UK, Germany, USA" }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-card border border-white/5 p-6 rounded-xl flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300 glow-card"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={idx * 0.05} />
                  </div>
                  <div className="text-xs text-gold font-bold uppercase tracking-wider mt-2">{stat.label}</div>
                </div>
                <p className="text-[11px] text-zinc-500 font-medium mt-3 leading-relaxed border-t border-white/5 pt-3">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ================= SECTION 4: WHY FOUNDERS HIRE ME ================= */}
      <section className="py-20 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
        <ScrollReveal>
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">The Advantage</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              Why Founders Work With Me
            </h2>
            <p className="text-zinc-500 text-xs font-bold uppercase">
              Decoupling personal brands from commodity content writing
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Authority",
                desc: "We focus exclusively on establishing you as the default expert reference point in your specific niche, driving institutional credibility."
              },
              {
                title: "Positioning",
                desc: "We build a razor-sharp worldview and category-of-one narrative that eliminates standard vendor comparisons immediately."
              },
              {
                title: "Opportunities",
                desc: "We design organic channels to capture qualified commercial pipelines: inbound partnerships, sales leads, and franchise interest."
              },
              {
                title: "Consistency",
                desc: "We deploy complete end-to-end content workflow extraction so your leadership brand remains active without consuming your operator schedule."
              }
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="bg-surface border border-white/5 p-6 rounded-xl hover:border-gold/25 transition-all duration-300 flex flex-col justify-between glow-card"
              >
                <div className="space-y-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/10 text-gold text-xs font-bold border border-gold/15">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-white font-heading">{pillar.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ================= HOME FEATURED TESTIMONIAL ================= */}
      {featuredTestimonial && (
        <section className="py-20 bg-white/[0.01] border-y border-white/5 px-6 sm:px-8">
          <ScrollReveal className="max-w-4xl mx-auto space-y-8">
            <div className="flex justify-center text-gold/30">
              <Quote className="h-12 w-12" />
            </div>

            <p className="text-lg sm:text-2xl font-serif italic text-center text-zinc-200 leading-relaxed font-medium">
              &ldquo;{featuredTestimonial.testimonial}&rdquo;
            </p>

            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="h-12 w-12 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-gold text-sm font-bold font-heading">
                M
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{featuredTestimonial.name}</h4>
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{featuredTestimonial.designation}, {featuredTestimonial.company}</p>
              </div>
              {featuredTestimonial.linkedinUrl && (
                <a
                  href={featuredTestimonial.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] text-gold hover:text-white transition-colors duration-300 font-bold uppercase tracking-wider"
                >
                  <Linkedin className="h-3 w-3" />
                  <span>Verify Recommendation</span>
                </a>
              )}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* ================= SECTION 5: THE CORE TENSION ================= */}
      <section className="py-20 px-6 sm:px-8 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">The Core Tension</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight leading-tight">
              Most founders already have expertise. <br />
              <span className="font-serif italic font-normal text-gold">The challenge is turning that expertise into authority, trust, opportunities, and market leverage.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Frustrations */}
            <div className="bg-surface border border-white/5 p-8 rounded-xl glow-card space-y-6 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2 border-b border-white/5 pb-4">
                  <span className="h-2 w-2 rounded-full bg-red-500/80 shrink-0" />
                  <span>Hidden Operator Challenges</span>
                </h4>
                <ul className="space-y-4 mt-6">
                  {[
                    { t: "Hidden Expertise", d: "You are a master operator with deep insights, but those insights remain locked in internal docs and private Slack channels." },
                    { t: "Lack of Visibility", d: "Your target market, potential hires, and investors don't know you exist outside of active pitch decks." },
                    { t: "Weak Authority", d: "Your public profile is generic, forcing you to compete on modular price grids instead of value momentum." },
                    { t: "Missed Opportunities", d: "Industry podcasts, panels, and publications cite other leaders while you stay invisible." },
                    { t: "Inconsistent Positioning", d: "Publishing sporadically or changing messaging patterns, failing to build memory loops." },
                    { t: "Underutilized Experience", d: "Years of solving complex industry challenges are not leveraged to build an organic marketing Moat." }
                  ].map((item, idx) => (
                    <li key={idx} className="space-y-1">
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <X className="h-3.5 w-3.5 text-red-500/80 shrink-0" />
                        <span>{item.t}</span>
                      </div>
                      <p className="text-[11px] text-zinc-500 font-medium pl-5">{item.d}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Fixed Positioning */}
            <div className="bg-surface border border-white/5 p-8 rounded-xl glow-card space-y-6 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-gold uppercase tracking-wider flex items-center gap-2 border-b border-white/5 pb-4">
                  <span className="h-2 w-2 rounded-full bg-emerald-500/80 shrink-0 animate-pulse" />
                  <span>Authority Strategy Outcomes</span>
                </h4>
                <ul className="space-y-4 mt-6">
                  {[
                    { t: "Recognized Authority", d: "Positioned as the go-to reference voice in your category, commanding premium contracts." },
                    { t: "Thought Leadership", d: "Compounding brand loops built on structured, insights-rich opinion pieces." },
                    { t: "Inbound Opportunities", d: "High-ticket enterprise clients and partners contacting you directly, pre-sold on your worldview." },
                    { t: "Talent Attraction", d: "A-players and executive candidates applying organically, inspired by your shared vision." },
                    { t: "Industry Trust", d: "Your brand commands immediate credibility, accelerating deals and sales cycles." },
                    { t: "Long-Term Brand Equity", d: "Building a personal distribution channel that outlives your current startup or product cycle." }
                  ].map((item, idx) => (
                    <li key={idx} className="space-y-1">
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        <span>{item.t}</span>
                      </div>
                      <p className="text-[11px] text-zinc-500 font-medium pl-5">{item.d}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ================= HOME FOUNDER TYPE SECTION (WHO I HELP) ================= */}
      <section className="py-20 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
        <ScrollReveal>
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Ideal Client Profiles</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              Who I Help
            </h2>
            <p className="text-zinc-500 text-xs font-bold uppercase">
              Select founder profiles we consult and build brands for
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getICPProfiles().map((item, idx) => (
              <div
                key={idx}
                className="bg-card border border-white/5 p-6 rounded-xl hover:border-gold/20 transition-all duration-300 flex flex-col justify-between glow-card"
              >
                <div className="space-y-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] text-gold uppercase tracking-wider font-extrabold bg-gold/5 px-2 py-0.5 border border-gold/10 rounded w-fit inline-block">
                      {item.type}
                    </span>
                    <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">
                      {item.engagementType}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Typical Challenge:</div>
                    <p className="text-xs text-zinc-300 font-medium leading-relaxed">{item.challenge}</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 space-y-1">
                  <div className="text-[10px] text-gold font-bold uppercase tracking-wider">Desired Outcome:</div>
                  <p className="text-xs text-white font-semibold leading-relaxed">{item.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ================= SECTION 6: THE FOUNDER AUTHORITY OPERATING SYSTEM™ ================= */}
      <section id="framework" className="py-20 px-6 sm:px-8 max-w-4xl mx-auto border-t border-white/5">
        <ScrollReveal>
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">The OS</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              The Founder Authority Operating System™
            </h2>
            <p className="text-zinc-500 text-xs font-bold uppercase">
              A premium 10-stage operating system to extract expertise, establish authority, and capture commercial leverage.
            </p>
          </div>

          {/* Timeline Visuals */}
          <div className="relative pl-8 border-l border-white/5 space-y-12 py-2">
            {engagementProcessSteps.map((step) => (
              <div key={step.step} className="relative">
                {/* Timeline node */}
                <div className="absolute left-[-42px] top-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#0A0A0A] border border-gold/30 text-gold text-xs font-bold">
                  {step.step}
                </div>

                <div className="space-y-2">
                  <h4 className="text-base sm:text-lg font-bold text-white font-heading">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-medium">{step.description}</p>
                  <div className="text-[10px] text-zinc-500 font-medium">
                    <span className="text-gold font-bold uppercase tracking-wider">Milestone Outcome:</span> {step.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ================= SECTION 8: FLAGSHIP CASE STUDY ================= */}
      {featuredCaseStudy && (
        <section id="case-study" className="py-20 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
          <ScrollReveal>
            <div className="text-center space-y-3 mb-16">
              <span className="text-xs uppercase tracking-widest text-gold font-bold">Featured Case Study</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading">
                Operationalizing Authority: Muhsin
              </h2>
              <p className="text-zinc-500 text-xs font-bold uppercase">
                B2B ERP Repositioning & LinkedIn Campaign Results
              </p>
            </div>

            <div className="bg-surface border border-white/5 rounded-2xl overflow-hidden glow-card-gold grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-8 p-8 sm:p-12 space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-6 border-b border-white/5">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Client</span>
                    <h4 className="text-sm font-bold text-white mt-1">Muhsin</h4>
                    <p className="text-xs text-gold font-medium">CEO, MD@Enfono Technologies</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Industry</span>
                    <h4 className="text-sm font-bold text-white mt-1">Enterprise ERP</h4>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Engagement</span>
                    <h4 className="text-sm font-bold text-white mt-1">Positioning & Copy Strategy</h4>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-2">
                      <span className="h-1 w-1.5 bg-gold rounded-full" />
                      The Problem
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                      {featuredCaseStudy.problem}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-2">
                      <span className="h-1 w-1.5 bg-gold rounded-full" />
                      The Strategy
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                      {featuredCaseStudy.strategy}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-2">
                      <span className="h-1 w-1.5 bg-gold rounded-full" />
                      The Execution
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                      {featuredCaseStudy.execution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar result stats */}
              <div className="lg:col-span-4 bg-white/[0.01] border-t lg:border-t-0 lg:border-l border-white/5 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-6">Outcome Dashboard</h4>
                  <ResultMetrics results={featuredCaseStudy.results} className="grid-cols-1 gap-4" />
                </div>

                <div className="pt-8 mt-8 border-t border-white/5">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Executive Review</span>
                  <p className="text-xs text-white italic mt-1 font-serif">
                    &ldquo;Our inbound opportunity conversations completely shifted from transactional price comparison to strategic partner collaboration.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href={`/case-studies/${featuredCaseStudy.slug}`}
                className="inline-flex items-center gap-1 px-5 py-3 border border-white/10 hover:border-gold/30 bg-surface/50 text-xs font-semibold rounded-lg uppercase tracking-wider transition-all duration-300"
              >
                <span>Read Full Case Study Breakdown</span>
                <ArrowUpRight className="h-4.5 w-4.5 text-gold" />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* ================= "WORKING TOGETHER" EXPECTATIONS SECTION ================= */}
      <section className="py-20 px-6 sm:px-8 max-w-5xl mx-auto border-t border-white/5">
        <ScrollReveal>
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Alignment</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              What Working Together Looks Like
            </h2>
            <p className="text-zinc-500 text-xs font-bold uppercase">
              Pre-qualifying our collaboration values and execution responsibilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-card border border-white/5 rounded-2xl p-8 sm:p-12 glow-card">
            {/* Sarath handles */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/5 pb-3">
                <span className="h-1.5 w-1.5 bg-gold rounded-full" />
                <span>My Responsibilities</span>
              </h4>
              <ul className="space-y-3">
                {[
                  "Conducting deep-dive message strategy and category audit.",
                  "Coordinating monthly interview loops to extract developer/operator insights.",
                  "Co-authoring and ghostwriting all premium LinkedIn assets.",
                  "Creating clean custom graphics concept guides.",
                  "Managing PR opportunities (Hindustan Times, YourStory).",
                  "Build Content Call Prep before content call"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-medium leading-relaxed">
                    <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* You bring */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/5 pb-3">
                <span className="h-1.5 w-1.5 bg-gold rounded-full" />
                <span>Your Contributions</span>
              </h4>
              <ul className="space-y-3">
                {[
                  "Willingness to dedicate 65 minutes monthly to structured interviews.",
                  "Sharing actual business lessons, metrics, and operator worldview details.",
                  "Reviewing drafted copy assets for accuracy and technical tone.",
                  "Commitment to brand scaling as a long-term compounding asset.",
                  "Active cooperation on business targets (franchise, sales, hiring).",
                  "Please share images related to the content."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-medium leading-relaxed">
                    <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ================= SECTION 16: CONTACT CTA ================= */}
      <section className="py-12 pb-24 px-6 sm:px-8 max-w-7xl mx-auto">
        <ApplyCTA />
      </section>

      {/* ================= STICKY MOBILE CTA ================= */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 border-t border-white/5 p-4 backdrop-blur-md">
        <Link
          href="/contact"
          className="w-full flex items-center justify-center gap-1.5 py-3.5 bg-white text-black hover:bg-gold hover:text-black font-extrabold text-xs tracking-wider uppercase rounded-lg shadow-lg shadow-gold/5"
        >
          <span>Apply To Work Together</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
