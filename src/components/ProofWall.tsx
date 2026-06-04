"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, MessageSquare, TrendingUp, Users, Award, Image as ImageIcon } from "lucide-react";

interface ProofCard {
  id: number;
  category: "analytics" | "posts" | "dms" | "hiring" | "media";
  title: string;
  subtitle: string;
  // Allows easy swap to image paths later, e.g. imgSrc: "/proof/analytics1.png"
  imgSrc?: string;
  // Simulated high-fidelity UI rendering fallback
  simulatedComponent: React.ReactNode;
}

export default function ProofWall() {
  const [filter, setFilter] = useState<string>("all");

  const cards: ProofCard[] = [
    {
      id: 1,
      category: "analytics",
      title: "Executive LinkedIn Dashboard",
      subtitle: "325K+ impressions generated across founder campaigns",
      simulatedComponent: (
        <div className="p-6 h-full flex flex-col justify-between bg-card rounded-xl border border-white/5 glow-card">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-gold" />
              <span className="text-xs font-semibold text-zinc-300">Analytics Export</span>
            </div>
            <span className="text-[10px] text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
              +412% Growth
            </span>
          </div>

          <div className="my-5">
            <div className="text-3xl font-bold font-heading text-white">325,480</div>
            <p className="text-[11px] text-zinc-500 font-medium mt-0.5">LinkedIn Content Impressions (90 Days)</p>
          </div>

          {/* Simple simulated SVG line graph */}
          <div className="w-full h-20 flex items-end gap-1 mt-2">
            {[40, 25, 45, 60, 50, 75, 65, 80, 70, 95, 85, 110, 90, 120].map((height, i) => (
              <div key={i} className="flex-1 bg-zinc-800 rounded-t-sm hover:bg-gold transition-colors duration-200" style={{ height: `${height}%` }} />
            ))}
          </div>

          <div className="flex justify-between items-center text-[10px] text-zinc-600 font-bold uppercase tracking-wider mt-4">
            <span>Mar 1</span>
            <span>May 30</span>
          </div>
        </div>
      )
    },
    {
      id: 2,
      category: "dms",
      title: "Inbound VC Partner Enquiry",
      subtitle: "Capturing commercial conversations directly in founder DMs",
      simulatedComponent: (
        <div className="p-6 h-full flex flex-col justify-between bg-card rounded-xl border border-white/5 glow-card relative">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-gold" />
              <span className="text-xs font-semibold text-zinc-300">Direct Message</span>
            </div>
            <span className="h-2 w-2 bg-gold rounded-full animate-pulse" />
          </div>

          <div className="my-4 space-y-3">
            {/* Sender */}
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-zinc-700 blur-[2px]" />
              <div>
                <div className="text-xs font-bold text-white">Managing Partner</div>
                <div className="text-[9px] text-zinc-500 font-medium">B2B SaaS Venture Capital</div>
              </div>
            </div>
            {/* Message bubble */}
            <div className="bg-white/[0.03] border border-white/5 rounded-xl rounded-tl-none p-3.5 text-xs text-zinc-300 leading-relaxed font-medium">
              &ldquo;Hey Sarath, I&apos;ve been reading your content on founder positioning. We have 3 portfolio companies struggling with distribution and hiring. Are you open to taking on new retainers? Let&apos;s hop on a call next week.&rdquo;
            </div>
          </div>

          <div className="text-[10px] text-gold font-bold uppercase tracking-wider mt-2">
            Inbound Retainer Opportunity
          </div>
        </div>
      )
    },
    {
      id: 3,
      category: "posts",
      title: "Viral Executive Insight Breakdown",
      subtitle: "1000K+ views on ERP narrative repositioning",
      simulatedComponent: (
        <div className="p-6 h-full flex flex-col justify-between bg-card rounded-xl border border-white/5 glow-card">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-gold" />
              <span className="text-xs font-semibold text-zinc-300">Published Content</span>
            </div>
            <span className="text-[10px] text-zinc-500 font-bold">1M+ Views</span>
          </div>

          <div className="my-4 space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center font-heading text-[10px] text-gold">E</div>
              <div>
                <div className="text-xs font-bold text-white">Muhsin</div>
                <div className="text-[9px] text-zinc-500">CEO, MD@Enfono Technologies (ERP)</div>
              </div>
            </div>
            <p className="text-[11px] text-zinc-400 italic font-serif leading-relaxed">
              &ldquo;90% of ERP implementations fail not because of tech stacks, but because founders sell modules instead of operational business momentum...&rdquo;
            </p>
          </div>

          {/* Simulated reactions bar */}
          <div className="border-t border-white/5 pt-3 flex justify-between items-center text-[10px] text-zinc-500 font-bold">
            <span>👍 142 Reactions</span>
            <span>💬 38 Comments</span>
            <span>🔄 12 Reposts</span>
          </div>
        </div>
      )
    },
    {
      id: 4,
      category: "hiring",
      title: "Talent Acquisition Attraction",
      subtitle: "High-level executives recruited via thought leadership",
      simulatedComponent: (
        <div className="p-6 h-full flex flex-col justify-between bg-card rounded-xl border border-white/5 glow-card">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gold" />
              <span className="text-xs font-semibold text-zinc-300">Inbound Talent Application</span>
            </div>
            <span className="text-[10px] text-gold font-bold bg-gold/10 px-2 py-0.5 rounded">
              Hired
            </span>
          </div>

          <div className="my-5">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Candidate Motivation:</div>
            <p className="text-xs text-zinc-300 mt-2 italic bg-white/[0.01] border border-white/5 p-3 rounded-lg leading-relaxed">
              &ldquo;I saw the CEO&apos;s posts about our product vision on LinkedIn. The transparency and command of our industry challenges made me apply instantly...&rdquo;
            </p>
          </div>

          <div className="border-t border-white/5 pt-3 text-[10px] text-zinc-500 font-medium">
            Influenced: <span className="text-white font-bold">15+ Key Team Hires</span> across portfolio
          </div>
        </div>
      )
    },
    {
      id: 5,
      category: "media",
      title: "Hindustan Times Feature",
      subtitle: "Thought leadership methodologies referenced in leading media",
      simulatedComponent: (
        <div className="p-6 h-full flex flex-col justify-between bg-card rounded-xl border border-white/5 glow-card">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-gold" />
              <span className="text-xs font-semibold text-zinc-300">Media Mention</span>
            </div>
            <span className="text-[10px] text-zinc-500 font-bold">Press Release</span>
          </div>

          <div className="my-4">
            <h4 className="font-serif font-bold text-lg text-white leading-tight italic">
              HT Hindustan Times
            </h4>
            <div className="h-[1px] bg-white/10 my-2" />
            <h5 className="text-xs font-bold text-zinc-300 mt-1 leading-snug">
              How Startup Founders Are Bypassing Traditional PR Agencies Through LinkedIn positioning.
            </h5>
            <p className="text-[10px] text-zinc-500 mt-2 font-medium">
              &ldquo;...relying heavily on brand strategists like Sarath Kumar to build organic digital distribution channels that outperform paid media...&rdquo;
            </p>
          </div>

          <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mt-2 border-t border-white/5 pt-2">
            Read Editorial Feature
          </div>
        </div>
      )
    },
    {
      id: 6,
      category: "analytics",
      title: "Lead Generation Pipeline Growth",
      subtitle: "Tracking qualified consulting prospects generated for clients",
      simulatedComponent: (
        <div className="p-6 h-full flex flex-col justify-between bg-card rounded-xl border border-white/5 glow-card">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-gold" />
              <span className="text-xs font-semibold text-zinc-300">Commercial Pipeline</span>
            </div>
            <span className="text-[10px] text-gold font-bold">50+ Inbound Leads</span>
          </div>

          <div className="my-5">
            <div className="text-3xl font-bold font-heading text-white">50+ Lead Inquiries</div>
            <p className="text-[11px] text-zinc-500 font-medium mt-0.5">Qualified Sales Opportunities</p>
          </div>

          {/* Simplified bar chart */}
          <div className="flex justify-between items-end h-16 w-full px-2 gap-4 mt-2">
            {[20, 35, 55, 70, 95].map((val, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-zinc-800 rounded-t-sm hover:bg-gold transition-colors duration-200" style={{ height: `${val}%` }} />
                <span className="text-[9px] text-zinc-600 font-bold">Q{idx + 1}</span>
              </div>
            ))}
          </div>

          <div className="text-[10px] text-zinc-500 font-medium mt-4 pt-2 border-t border-white/5">
            Avg Conversion: <span className="text-emerald-500 font-bold">12.5% Strategy Booking Rate</span>
          </div>
        </div>
      )
    }
  ];

  const filteredCards = filter === "all" ? cards : cards.filter(c => c.category === filter);

  return (
    <div className="w-full space-y-8">
      {/* Category Filter Controls */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-white/5 pb-6">
        {[
          { key: "all", label: "All Evidence" },
          { key: "analytics", label: "Analytics Dashboard" },
          { key: "dms", label: "Client Inbounds" },
          { key: "posts", label: "Viral Post Stats" },
          { key: "hiring", label: "Talent Inbounds" },
          { key: "media", label: "Media Features" }
        ].map((btn) => (
          <button
            key={btn.key}
            onClick={() => setFilter(btn.key)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 uppercase cursor-pointer border ${filter === btn.key
              ? "bg-gold/15 text-gold border-gold/30 shadow-md shadow-gold/5"
              : "bg-surface hover:bg-white/[0.02] text-zinc-400 border-white/5 hover:text-zinc-200"
              }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Masonry Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {filteredCards.map((card) => (
          <motion.div
            key={card.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full rounded-xl overflow-hidden hover:translate-y-[-4px] transition-all duration-300"
          >
            {card.imgSrc ? (
              /* Image representation when uploaded */
              <div className="relative group overflow-hidden border border-white/5 rounded-xl bg-card aspect-video flex-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-[10px] text-gold uppercase tracking-wider font-bold">Screenshot</div>
                  <h4 className="text-sm font-bold text-white mt-1">{card.title}</h4>
                  <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{card.subtitle}</p>
                </div>
              </div>
            ) : (
              /* Simulated High Fidelity UI Markup */
              <div className="flex-1 h-full">
                {card.simulatedComponent}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Instructional helper to replace with images */}
      <div className="p-4 border border-dashed border-white/5 bg-white/[0.01] rounded-xl flex flex-col sm:flex-row items-center gap-3 justify-between text-xs text-zinc-500">
        <div className="flex items-center gap-2">
          <ImageIcon className="h-4 w-4 text-zinc-600" />
          <span>Note for developer: To replace these visual simulations with actual image screenshots, assign the `imgSrc` key in `ProofWall.tsx`.</span>
        </div>
        <span className="font-bold text-[10px] uppercase text-gold">Customizable Grid</span>
      </div>
    </div>
  );
}
