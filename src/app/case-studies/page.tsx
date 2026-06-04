"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Filter, BookOpen, Linkedin, Mail } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ResultMetrics from "@/components/shared/ResultMetrics";
import { getCaseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  const allCaseStudies = getCaseStudies();
  const [filter, setFilter] = useState<string>("all");

  const industries = [
    { key: "all", label: "All Industries" },
    { key: "ERP", label: "Enterprise ERP" },
    { key: "Healthcare", label: "Digital Healthcare" },
    { key: "EdTech", label: "EdTech & Education" },
    { key: "F&B", label: "Food & Beverage (F&B)" },
    { key: "Startup", label: "Startup Ventures" }
  ];

  const filteredCaseStudies = filter === "all" 
    ? allCaseStudies 
    : allCaseStudies.filter(cs => cs.industry === filter);

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* ItemList Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Sarath Kumar Founder Case Studies",
            "description": "Evidence and outcomes achieved across ERP, SaaS, EdTech, and Healthcare.",
            "itemListElement": filteredCaseStudies.map((cs, idx) => ({
              "@type": "ListItem",
              "position": idx + 1,
              "url": `https://sarathkumar.com/case-studies/${cs.slug}`
            }))
          })
        }}
      />

      <div className="absolute inset-0 premium-grid opacity-20 pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Header />

      <main className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto space-y-16">
        

        {/* Header Title */}
        <ScrollReveal className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-gold font-bold">Proof Catalog</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight">
            Founder Case Studies
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
            Tangible business outcomes, hires, and impressions achieved through thought leadership.
          </p>
        </ScrollReveal>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center items-center gap-2 pb-4 border-b border-white/5">
          <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-bold mr-2 uppercase tracking-wide">
            <Filter className="h-4 w-4 text-gold" />
            <span>Filter:</span>
          </div>
          {industries.map((ind) => (
            <button
              key={ind.key}
              onClick={() => setFilter(ind.key)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                filter === ind.key
                  ? "bg-gold/15 border-gold/35 text-gold shadow-md shadow-gold/5"
                  : "bg-surface border-white/5 text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {ind.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {filteredCaseStudies.map((cs) => {
            const isComingSoon = cs.status === "comingSoon";
            const isFeatured = cs.status === "featured";
            
            return (
              <div
                key={cs.slug}
                className={`bg-surface border p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 relative glow-card ${
                  isFeatured ? "border-gold/30 ring-1 ring-gold/10" : "border-white/5"
                }`}
              >
                <div className="space-y-6">
                  {/* Top Badging row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider bg-white/[0.02] px-2.5 py-1 border border-white/5 rounded">
                        {cs.industry}
                      </span>
                      <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider bg-white/[0.02] px-2.5 py-1 border border-white/5 rounded">
                        {cs.country}
                      </span>
                    </div>
                    {isFeatured && (
                      <span className="text-[9px] text-gold font-bold uppercase tracking-widest bg-gold/10 px-2.5 py-0.5 rounded border border-gold/15">
                        Flagship
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading leading-snug">
                      {cs.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                      {cs.subtitle}
                    </p>
                  </div>

                  <div className="h-[1px] bg-white/5" />

                  {/* Results preview */}
                  {!isComingSoon ? (
                    <div className="space-y-3">
                      <h4 className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">Metrics Snapshot</h4>
                      <ResultMetrics results={cs.results} className="grid-cols-2" />
                    </div>
                  ) : (
                    <div className="p-6 border border-dashed border-white/5 bg-white/[0.01] rounded-xl text-center space-y-1">
                      <BookOpen className="h-5 w-5 text-zinc-600 mx-auto" />
                      <div className="text-xs font-bold text-zinc-400">Detailed Report in Queue</div>
                      <p className="text-[10px] text-zinc-500 max-w-xs mx-auto leading-relaxed">
                        Metrics validation and client authorization pending public listing.
                      </p>
                    </div>
                  )}
                </div>

                {/* Bottom Action Trigger */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] text-zinc-500 font-semibold uppercase tracking-wider">
                    {cs.engagementType}
                  </span>
                  
                  {!isComingSoon ? (
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="inline-flex items-center gap-1.5 px-4.5 py-2.5 bg-white text-black hover:bg-gold hover:text-black font-semibold text-xs rounded-lg transition-all duration-300 cursor-pointer uppercase tracking-wider shadow-sm hover:shadow-gold/20"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  ) : (
                    <span className="text-[10px] text-gold font-bold uppercase tracking-wider bg-gold/5 px-3 py-1.5 border border-gold/10 rounded-lg">
                      Full Case Study Coming Soon
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
