"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/layout/Header";

export default function Blog() {
  const posts = [
    {
      slug: "why-founder-led-growth-outperforms-paid-media",
      title: "Why Founder-Led Growth Outperforms Paid Media in B2B SaaS",
      date: "June 2026",
      readTime: "4 min read",
      summary: "Analysis on customer trust cycles, the decay rate of digital advertisements, and the ROI of positioning the CEO as the default market authority."
    },
    {
      slug: "narrative-mapping-framework-for-enterprise-ceos",
      title: "The Narrative Mapping Framework for Enterprise CEOs",
      date: "May 2026",
      readTime: "6 min read",
      summary: "A step-by-step blueprint to extract operator knowledge, build story banks, and create a proprietary worldview that qualifies buyers."
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
          <span className="text-xs uppercase tracking-widest text-gold font-bold">Insights Hub</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-none">
            Thought Leadership Journal
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
            Methodologies, research analyses, and scaling essays on personal branding and positioning systems.
          </p>
        </ScrollReveal>

        {/* Blog grid list */}
        <div className="space-y-6 pt-6">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="bg-surface border border-white/5 p-6 sm:p-8 rounded-xl flex flex-col justify-between gap-4 glow-card"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                  <span>{post.date}</span>
                  <span className="text-gold">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                  {post.title}
                </h3>
                <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="flex pt-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 px-4.5 py-2 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs rounded-lg transition-all duration-300 border border-white/10 uppercase tracking-wider cursor-pointer"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="h-4 w-4 text-gold" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
