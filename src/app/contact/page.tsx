"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Send, 
  Lock, 
  Loader2, 
  Plus, 
  Minus,
  Sparkles,
  HelpCircle,
  Linkedin,
  MessageSquare
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Do you work with founders outside India?",
    answer: "Yes. I actively consult and design content systems for founders across India, the GCC region, the United Kingdom, Germany, and the United States. All strategy audits and interview loops are coordinated remotely."
  },
  {
    question: "Do you provide ghostwriting?",
    answer: "Yes. Ghostwriting is a key execution pillar. However, this is not commodity writing. We co-author insights-rich LinkedIn content based on technical operator knowledge extracted during our monthly strategic interviews."
  },
  {
    question: "How long before results appear?",
    answer: "Typically, authority alignment and initial profile optimization take 2 weeks. Measurable inbound loops, qualified executive talent queries, and pipeline leads begin compounding between weeks 6 and 12."
  },
  {
    question: "How do engagements work?",
    answer: "We run on monthly retainers with a minimum commitment of 3 months. Engagements begin with a Discovery positioning audit, establishing your proprietary worldview, followed by continuous ghostwriting, distribution, and pipeline capture."
  }
];

export default function Contact() {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    challenge: "",
    honeypot: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate
    // Validate
    if (!values.name || !values.email || !values.phone || !values.linkedin || !values.challenge) {
      setError("Please complete all required fields.");
      return;
    }

    // Phone digits count verification (min 8, max 15)
    const cleanedPhone = values.phone.replace(/\D/g, "");
    if (cleanedPhone.length < 8 || cleanedPhone.length > 15) {
      setError("Phone number must contain between 8 and 15 digits.");
      return;
    }

    // Accept standard international symbols and digits
    const phoneRegex = /^\+?[0-9\s\-()]{8,20}$/;
    if (!phoneRegex.test(values.phone)) {
      setError("Please enter a valid phone number format.");
      return;
    }

    // Email address formatting verification
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // LinkedIn Profile URL format check
    if (!values.linkedin.toLowerCase().includes("linkedin.com/")) {
      setError("Please enter a valid LinkedIn profile URL (must contain linkedin.com).");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      if (response.ok) {
        // Redirect to success thank you page
        router.push("/thank-you");
      } else {
        const data = await response.json();
        setError(data.message || "Failed to process application. Please try again.");
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setError("A networking error occurred. Please verify your connection and try again.");
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      <div className="absolute inset-0 premium-grid opacity-20 pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Header />

      <main className="pt-32 pb-24 px-6 sm:px-8 max-w-6xl mx-auto space-y-16">
        

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 text-gold text-[10px] font-bold tracking-widest uppercase">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Intake Questionnaire</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight leading-none">
                Let&apos;s Build Your Authority.
              </h1>
              <p className="text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed">
                Please submit your intake details. I will personally review your application and invite qualified founders to a private 1-on-1 strategy audit. <br className="hidden sm:inline" />
                Alternatively, you may reach out directly via WhatsApp or LinkedIn.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-surface border border-white/5 p-6 sm:p-10 rounded-2xl glow-card space-y-6">
              <div className="flex items-center gap-2 text-[9px] font-bold text-gold uppercase tracking-widest bg-gold/5 border border-gold/10 px-3 py-1 rounded-full w-fit">
                <Lock className="h-3 w-3" />
                <span>Confidential Application Intake</span>
              </div>

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold rounded-lg">
                  {error}
                </div>
              )}

              {/* Grid Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                    Full Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={values.name}
                    onChange={handleChange}
                    placeholder="e.g. Muhsin Rahman"
                    className="bg-card border border-white/5 rounded-lg px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300 font-medium"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                    Email Address <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={values.email}
                    onChange={handleChange}
                    placeholder="e.g. ceo@enfono.com"
                    className="bg-card border border-white/5 rounded-lg px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300 font-medium"
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                    Phone Number <span className="text-gold">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={values.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 9744936762"
                    className="bg-card border border-white/5 rounded-lg px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300 font-medium"
                  />
                </div>

                {/* LinkedIn Profile URL */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="linkedin" className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                    Your LinkedIn Profile URL <span className="text-gold">*</span>
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    required
                    value={values.linkedin}
                    onChange={handleChange}
                    placeholder="e.g. linkedin.com/in/muhsin"
                    className="bg-card border border-white/5 rounded-lg px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300 font-medium"
                  />
                </div>
              </div>

              {/* Invisible Honeypot Spam Prevention Trap */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="honeypot"
                  value={values.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Positioning Challenge */}
              <div className="flex flex-col gap-2">
                <label htmlFor="challenge" className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                  What is your biggest positioning or growth challenge? <span className="text-gold">*</span>
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  required
                  rows={4}
                  value={values.challenge}
                  onChange={handleChange}
                  placeholder="e.g. We raise Series A but competitors copy our messaging. Our technical founder needs visible category authority..."
                  className="bg-card border border-white/5 rounded-lg px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300 resize-none font-medium leading-relaxed"
                />
              </div>

              {/* Submit trigger */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-black hover:bg-gold hover:text-black font-semibold tracking-wide rounded-lg transition-all duration-300 cursor-pointer shadow-lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Verifying Qualification...</span>
                    </>
                  ) : (
                    <>
                      <span>Apply To Work Together</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Secondary Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs rounded-lg transition-all duration-300 border border-white/10 uppercase tracking-wider cursor-pointer shadow-md"
              >
                <MessageSquare className="h-4 w-4 text-gold shrink-0" />
                <span>Message on WhatsApp</span>
              </a>
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs rounded-lg transition-all duration-300 border border-white/10 uppercase tracking-wider cursor-pointer shadow-md"
              >
                <Linkedin className="h-4 w-4 text-gold shrink-0" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: FAQs */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-1.5">
                <HelpCircle className="h-4 w-4 text-gold shrink-0" />
                <span>Onboarding FAQ</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading">Frequently Asked Questions</h3>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = expandedFaq === idx;
                return (
                  <div
                    key={idx}
                    className={`bg-surface border rounded-xl overflow-hidden transition-all duration-300 ${
                      isOpen ? "border-gold/25" : "border-white/5"
                    }`}
                  >
                    <button
                      onClick={() => setExpandedFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left cursor-pointer"
                    >
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">{faq.question}</h4>
                      {isOpen ? (
                        <Minus className="h-4 w-4 text-gold shrink-0" />
                      ) : (
                        <Plus className="h-4 w-4 text-zinc-500 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-4 border-t border-white/5 bg-white/[0.01] text-xs text-zinc-400 leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
