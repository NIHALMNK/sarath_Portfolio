"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <div className="absolute inset-0 premium-grid opacity-20 pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <Header />

      <main className="pt-40 pb-24 px-6 sm:px-8 max-w-xl mx-auto flex flex-col items-center justify-center min-h-[70vh]">
        
        <div className="bg-surface border border-white/5 p-8 sm:p-12 rounded-2xl shadow-2xl text-center relative overflow-hidden glow-card-gold space-y-6 w-full">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 border border-red-500/25 text-red-400 animate-pulse">
            <ShieldAlert className="h-8 w-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] text-red-400 uppercase tracking-widest font-extrabold">Error 404</span>
            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-white">Route Resolution Failure</h1>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-2 font-medium">
              The consulting asset or routing page you are trying to access does not exist or has been archived.
            </p>
          </div>

          <div className="h-[1px] bg-white/5 my-6" />

          <div className="flex justify-center gap-3">
            <Link
              href="/case-studies"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black hover:bg-gold hover:text-black font-semibold text-xs rounded-lg transition-all duration-300 border border-transparent uppercase tracking-wider cursor-pointer"
            >
              <span>View Case Studies</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              className="text-xs text-gold hover:text-white transition-colors duration-300 font-bold uppercase tracking-wider"
            >
              Apply To Work Together &rarr;
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}
