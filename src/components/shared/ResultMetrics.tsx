"use client";

import React from "react";
import { Eye, Users, PhoneCall, UserPlus, Award } from "lucide-react";

interface ResultMetricsProps {
  results: {
    impressions?: string;
    followers?: string;
    leads?: string;
    hires?: string;
    mediaFeatures?: string;
  };
  className?: string;
  variant?: "small" | "large";
}

export default function ResultMetrics({
  results,
  className = "",
  variant = "small"
}: ResultMetricsProps) {
  const hasMetrics = Object.values(results).some(Boolean);

  if (!hasMetrics) return null;

  const items = [
    { key: "impressions", value: results.impressions, label: "Impressions", icon: Eye },
    { key: "followers", value: results.followers, label: "Followers", icon: Users },
    { key: "leads", value: results.leads, label: "Inbound Leads", icon: PhoneCall },
    { key: "hires", value: results.hires, label: "Hires Sourced", icon: UserPlus },
    { key: "mediaFeatures", value: results.mediaFeatures, label: "Recognition", icon: Award }
  ].filter(item => item.value);

  return (
    <div className={`grid gap-4 ${variant === "large" ? "grid-cols-2 md:grid-cols-5" : "grid-cols-2"} ${className}`}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.key}
            className={`flex flex-col justify-between bg-white/[0.01] border border-white/5 rounded-lg transition-all duration-300 hover:border-gold/20 hover:bg-white/[0.02] ${
              variant === "large" ? "p-5" : "p-3.5"
            }`}
          >
            <div className="flex items-center gap-1.5 text-zinc-500">
              <Icon className="h-3.5 w-3.5 text-gold/70" />
              <span className="text-[9px] uppercase tracking-wider font-bold">{item.label}</span>
            </div>
            <div className={`font-heading font-extrabold text-white tracking-tight mt-1.5 ${
              variant === "large" ? "text-xl sm:text-2xl" : "text-sm sm:text-base"
            }`}>
              {item.value}
            </div>
          </div>
        );
      })}
    </div>
  );
}
