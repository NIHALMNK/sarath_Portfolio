"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function TrustBar() {
  const clients = [
    { name: "Enfono Technologies", short: "ENFONO ERP" },
    { name: "Lanstitut", short: "LANSTITUT" },
    { name: "BetterGrow Holding", short: "BETTERGROW" },
    { name: "Blowlin", short: "BLOWLIN" },
    { name: "Rail Rolls", short: "RAIL ROLLS" }
  ];

  return (
    <div className="w-full border-y border-white/5 bg-[#090909]/60 backdrop-blur-sm py-8 px-6 sm:px-8">
      <ScrollReveal className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-extrabold text-center md:text-left">
          Trusted by founders from
        </span>
        
        <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-4">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="text-zinc-500 hover:text-white transition-colors duration-300 font-heading text-sm sm:text-base font-extrabold tracking-widest"
            >
              {client.short}
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
