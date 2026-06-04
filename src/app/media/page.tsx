"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Award, FileText } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/layout/Header";

export default function Media() {
  const mediaFeatures = [
    {
      source: "Hindustan Times",
      title: "How Startup Founders Are Bypassing Traditional PR Agencies Through LinkedIn Positioning",
      date: "2024",
      link: "https://hindustantimes.com",
      summary: "An editorial analysis on founder-led growth networks. Features references to Sarath Kumar's strategic brand positioning systems and client metrics."
    },
    {
      source: "YourStory",
      title: "Thought Leadership & Organic Distribution: The New Moat for B2B Tech Startups",
      date: "2023",
      link: "https://yourstory.com",
      summary: "Highlighting how early-stage and pre-seed founders utilize authentic social reach to scale recruitments, investor pitches, and sales calls."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <div className="absolute inset-0 premium-grid opacity-25 pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Header />

      <main className="pt-32 pb-24 px-6 sm:px-8 max-w-4xl mx-auto space-y-12">

        {/* Title */}
        <ScrollReveal className="space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold font-bold">Press & Recognition</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-none">
            Media Features
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
            Press coverage, editorial analysis, and industry columns citing our thought leadership frameworks.
          </p>
        </ScrollReveal>

        {/* Media grid list */}
        <div className="space-y-6 pt-6">
          {mediaFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-surface border border-white/5 p-6 sm:p-8 rounded-xl flex flex-col sm:flex-row items-start justify-between gap-6 glow-card"
            >
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-gold uppercase tracking-widest font-extrabold bg-gold/5 px-2.5 py-0.5 border border-gold/10 rounded">
                    {feat.source}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-semibold">{feat.date}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                  {feat.title}
                </h3>
                <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                  {feat.summary}
                </p>
              </div>

              <a
                href={feat.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-4.5 py-2.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs rounded-lg transition-all duration-300 border border-white/10 uppercase tracking-wider cursor-pointer"
              >
                <span>Read Feature</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
