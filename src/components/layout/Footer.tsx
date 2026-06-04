"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080808] pt-24 pb-12 px-6 sm:px-8 relative overflow-hidden">
      {/* Background Visual Glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto space-y-16">
        
        {/* SECTION 1: Top CTA Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12">
          {/* Left Side */}
          <div className="lg:col-span-7 space-y-3">
            <span className="text-[10px] text-gold font-extrabold uppercase tracking-widest block">
              READY TO BUILD YOUR AUTHORITY?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Let&apos;s Build Something<br className="hidden sm:inline" /> Worth Talking About.
            </h2>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
            <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed max-w-sm">
              Helping founders become recognized voices in their industry through positioning, thought leadership, and strategic personal branding.
            </p>

            {/* Circular CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="shrink-0"
            >
              <Link
                href="/contact"
                className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gold text-zinc-950 font-extrabold uppercase tracking-widest text-[9px] sm:text-[10px] text-center px-4 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:shadow-[0_0_40px_rgba(212,175,55,0.35)] hover:bg-white hover:text-black cursor-pointer leading-tight"
              >
                <span>APPLY NOW</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* First Divider */}
        <div className="h-[1px] bg-white/5" />

        {/* SECTION 2: Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-4">
          
          {/* COLUMN 1: Brand */}
          <div className="lg:col-span-3 space-y-4">
            <Link
              href="/"
              className="font-heading font-extrabold tracking-tight text-white hover:text-gold transition-colors duration-300 flex items-center gap-1.5 cursor-pointer text-base w-fit"
            >
              <span>{siteConfig.name}</span>
              <span className="h-1.5 w-1.5 bg-gold rounded-full" />
            </Link>
            <p className="text-xs text-zinc-500 font-medium leading-relaxed max-w-xs">
              Founder Brand Strategist helping founders build authority, visibility, and opportunities through thought leadership.
            </p>
          </div>

          {/* COLUMN 2: Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-extrabold text-gold uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {siteConfig.navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-xs text-zinc-400 hover:text-white transition-colors duration-300 font-semibold cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Expertise */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-extrabold text-gold uppercase tracking-widest">
              Expertise
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-semibold">
              <li>Founder Positioning</li>
              <li>LinkedIn Strategy</li>
              <li>Thought Leadership</li>
              <li>Personal Branding</li>
              <li>Ghostwriting</li>
              <li>Content Strategy</li>
            </ul>
          </div>

          {/* COLUMN 4: Connect */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-extrabold text-gold uppercase tracking-widest">
              Connect
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-400 hover:text-white transition-colors duration-300 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xs text-zinc-400 hover:text-white transition-colors duration-300 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>Email</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/910000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-400 hover:text-white transition-colors duration-300 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-600" />
                </a>
              </li>
              <li className="text-xs text-zinc-500 font-semibold">
                Kerala, India
              </li>
            </ul>
          </div>

          {/* Optional Visual column */}
          <div className="lg:col-span-3 flex flex-col justify-end">
            <div className="relative h-[130px] w-full overflow-hidden rounded-xl border border-white/5 group shadow-lg bg-zinc-900/50">
              <Image
                src="/luxury-workspace-footer.png"
                alt="Sarath Kumar Executive Workspace Setup"
                fill
                className="object-cover grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Second Divider */}
        <div className="h-[1px] bg-white/5" />

        {/* SECTION 3: Bottom Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left pt-2">
          {/* LOCATION */}
          <div className="space-y-1">
            <span className="text-[9px] font-extrabold text-zinc-600 uppercase tracking-widest block">
              LOCATION
            </span>
            <span className="text-xs text-zinc-400 font-semibold">
              Kerala, India
            </span>
          </div>

          {/* EMAIL */}
          <div className="space-y-1">
            <span className="text-[9px] font-extrabold text-zinc-600 uppercase tracking-widest block">
              EMAIL
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-xs text-zinc-400 hover:text-white transition-colors duration-300 font-semibold cursor-pointer"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* LINKEDIN */}
          <div className="space-y-1">
            <span className="text-[9px] font-extrabold text-zinc-600 uppercase tracking-widest block">
              LINKEDIN
            </span>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 hover:text-white transition-colors duration-300 font-semibold cursor-pointer truncate block max-w-xs"
            >
              linkedin.com/in/sarath-kumar
            </a>
          </div>

          {/* COPYRIGHT */}
          <div className="space-y-1 sm:text-left md:text-right">
            <span className="text-[9px] font-extrabold text-zinc-600 uppercase tracking-widest block">
              COPYRIGHT
            </span>
            <p className="text-xs text-zinc-500 font-medium">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
