"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Linkedin, Mail } from "lucide-react";
import confetti from "canvas-confetti";
import Header from "@/components/layout/Header";

export default function ThankYou() {
  useEffect(() => {
    // Fire a confetti celebration
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#D4AF37", "#FFFFFF", "#111111"],
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <div className="absolute inset-0 premium-grid opacity-20 pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <Header />

      <main className="pt-40 pb-24 px-6 sm:px-8 max-w-xl mx-auto flex flex-col items-center justify-center min-h-[70vh]">
        
        <div className="bg-surface border border-white/5 p-8 sm:p-12 rounded-2xl shadow-2xl text-center relative overflow-hidden glow-card-gold space-y-6 w-full">
          {/* Confetti bubble */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 border border-gold/25 text-gold animate-bounce">
            <CheckCircle2 className="h-8 w-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] text-gold uppercase tracking-widest font-extrabold">Application Received</span>
            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-white">Your Request Has Been Queued</h1>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-2 font-medium">
              Thank you for applying. Sarath reviews each intake personally. If there is mutual alignment, we will contact you via LinkedIn or email within 48 business hours.
            </p>
          </div>

          <div className="h-[1px] bg-white/5 my-6" />

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="https://linkedin.com/in/sarath-kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 bg-white text-black hover:bg-gold hover:text-black font-semibold text-xs rounded-lg transition-all duration-300 border border-transparent uppercase tracking-wider cursor-pointer"
            >
              <Linkedin className="h-4 w-4 shrink-0" />
              <span>Connect on LinkedIn</span>
            </a>
            <Link
              href="/case-studies"
              className="flex items-center justify-center gap-1.5 px-5 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs rounded-lg transition-all duration-300 border border-white/10 uppercase tracking-wider cursor-pointer"
            >
              <span>View Case Studies</span>
              <ChevronRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>

        </div>

      </main>
    </div>
  );
}
