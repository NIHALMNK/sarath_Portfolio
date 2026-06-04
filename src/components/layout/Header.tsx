"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-8 pt-4 sm:pt-6 pointer-events-none">
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1200px] mx-auto w-full pointer-events-auto"
        >
          {/* Capsule Container */}
          <div
            className={`w-full rounded-full border transition-all duration-400 ease-out flex items-center justify-between px-6 py-3.5 sm:py-3 ${
              scrolled
                ? "bg-[#111111]/75 border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-[24px] scale-[0.985]"
                : "bg-[#111111]/55 border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.15)] backdrop-blur-[16px]"
            }`}
          >
            {/* Left Side: Logo */}
            <Link
              href="/"
              className="font-heading font-extrabold tracking-tight text-white hover:text-gold transition-colors duration-300 flex items-center gap-1.5 cursor-pointer shrink-0"
              aria-label="Home"
            >
              {/* Show full name on large screens, initials on mobile */}
              <span className="hidden sm:inline text-sm">{siteConfig.name}</span>
              <span className="inline sm:hidden text-sm">SK.</span>
              <span className="h-1.5 w-1.5 bg-gold rounded-full shrink-0" />
            </Link>

            {/* Center: Desktop Navigation links */}
            <nav className="hidden md:flex items-center gap-1 sm:gap-2 relative">
              {siteConfig.navigation.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`relative px-4 py-2 text-[11px] font-semibold uppercase tracking-widest transition-colors duration-300 cursor-pointer rounded-full ${
                      isActive ? "text-gold" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeCapsulePill"
                        className="absolute inset-0 bg-white/[0.03] border border-white/5 rounded-full -z-0"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side: CTA Button & Mobile Trigger */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                className="hidden sm:flex items-center gap-1 px-5 py-2.5 bg-gold text-zinc-950 hover:bg-white hover:text-black font-bold text-[10px] rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-gold/10 hover:shadow-white/5 cursor-pointer uppercase tracking-wider"
              >
                <span>Apply To Work Together</span>
                <ArrowUpRight className="h-3 w-3" />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-zinc-400 hover:text-white rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all duration-300 cursor-pointer"
                aria-label="Toggle navigation drawer"
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </motion.header>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Drawer Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-[#0A0A0A]/60 backdrop-blur-sm md:hidden"
            />
            
            {/* Drawer Panel */}
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-4 top-[90px] z-45 bg-[#111111]/85 backdrop-blur-[24px] border border-white/[0.08] rounded-3xl p-6 flex flex-col gap-6 md:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-2">
                {siteConfig.navigation.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={`w-full text-left py-2.5 px-4 font-heading text-base font-semibold rounded-xl transition-all duration-200 ${
                        isActive 
                          ? "text-gold bg-white/[0.03] border-l-2 border-gold" 
                          : "text-zinc-400 hover:text-white hover:bg-white/[0.01]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-gold text-zinc-950 hover:bg-white hover:text-black font-bold text-xs rounded-full transition-all duration-300 cursor-pointer uppercase tracking-wider"
              >
                <span>Apply To Work Together</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
