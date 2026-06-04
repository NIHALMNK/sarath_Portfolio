"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface ApplyCTAProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function ApplyCTA({
  className = "",
  title = "Ready To Become The Recognized Voice In Your Industry?",
  subtitle = "Please submit your intake details. I will invite you to a private 1-on-1 strategy audit or DM me through WhatsApp or LinkedIn."
}: ApplyCTAProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent pointer-events-none -z-10" />

      <ScrollReveal className="max-w-4xl mx-auto text-center px-6 py-16 sm:py-20 border border-white/5 bg-surface/30 backdrop-blur-sm rounded-2xl glow-card-gold relative overflow-hidden">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 premium-grid opacity-10 pointer-events-none -z-10" />

        <div className="space-y-6 max-w-2xl mx-auto">
          <span className="text-[10px] text-gold uppercase tracking-widest font-extrabold bg-gold/10 px-3 py-1 rounded-full border border-gold/15 inline-block">
            Limited Partnerships Available
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-white leading-tight">
            {title}
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-8 py-4 bg-white text-black hover:bg-gold hover:text-black font-semibold text-xs rounded-lg transition-all duration-300 shadow-xl hover:shadow-gold/25 cursor-pointer uppercase tracking-wider"
            >
              <span>Apply To Work Together</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/case-studies"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-transparent text-white hover:bg-white/5 border border-white/10 font-semibold text-xs rounded-lg transition-all duration-300 cursor-pointer uppercase tracking-wider"
            >
              <span>View Case Studies</span>
            </Link>
          </div>

          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mt-4">
            Currently accepting 3 concurrent retainer clients.
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}
