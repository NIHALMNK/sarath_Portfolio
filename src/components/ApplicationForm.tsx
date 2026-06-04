"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Send, CheckCircle2, ChevronRight, Lock, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";

interface FormValues {
  name: string;
  company: string;
  website: string;
  linkedin: string;
  revenue: string;
  challenge: string;
}

export default function ApplicationForm() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    company: "",
    website: "",
    linkedin: "",
    revenue: "",
    challenge: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectRevenue = (val: string) => {
    setValues((prev) => ({ ...prev, revenue: val }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate inputs
    if (!values.name || !values.company || !values.linkedin || !values.revenue || !values.challenge) {
      setError("Please fill out all required fields to submit your application.");
      return;
    }

    setLoading(true);

    try {
      // Simulate premium API pipeline request
      await new Promise((resolve) => setTimeout(resolve, 1800));
      
      // Save locally to localStorage to keep user state or simulated list
      const submissions = JSON.parse(localStorage.getItem("sarath_applications") || "[]");
      submissions.push({ ...values, timestamp: new Date().toISOString() });
      localStorage.setItem("sarath_applications", JSON.stringify(submissions));

      setLoading(false);
      setSuccess(true);

      // Trigger high-fidelity canvas confetti celebration
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#FFFFFF", "#111111"],
      });
    } catch (err) {
      setLoading(false);
      setError("An unexpected error occurred. Please try submitting again.");
    }
  };

  const revenueBrackets = [
    { label: "Under $20K / month", value: "under-20k" },
    { label: "$20K - $50K / month", value: "20k-50k" },
    { label: "$50K - $100K / month", value: "50k-100k" },
    { label: "$100K - $250K / month", value: "100k-250k" },
    { label: "$250K+ / month", value: "250k-plus" }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {!success ? (
          <motion.form
            key="application-form"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-surface border border-white/5 p-6 sm:p-10 rounded-2xl shadow-2xl relative glow-card space-y-6"
          >
            {/* Header info inside form */}
            <div className="flex items-center gap-2 text-[10px] font-bold text-gold uppercase tracking-widest bg-gold/5 border border-gold/10 px-3 py-1 rounded-full w-fit">
              <Lock className="h-3 w-3" />
              <span>Strictly Confidential Engagement Intake</span>
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold rounded-lg">
                {error}
              </div>
            )}

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                  Full Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={values.name}
                  onChange={handleChange}
                  placeholder="e.g. Alexander Mercer"
                  className="bg-card border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300 font-medium"
                />
              </div>

              {/* Company */}
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                  Company Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={values.company}
                  onChange={handleChange}
                  placeholder="e.g. Enfono Technologies"
                  className="bg-card border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300 font-medium"
                />
              </div>

              {/* Website */}
              <div className="flex flex-col gap-2">
                <label htmlFor="website" className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                  Company Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={values.website}
                  onChange={handleChange}
                  placeholder="e.g. https://enfono.com"
                  className="bg-card border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300 font-medium"
                />
              </div>

              {/* LinkedIn */}
              <div className="flex flex-col gap-2">
                <label htmlFor="linkedin" className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                  Your LinkedIn Profile <span className="text-gold">*</span>
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  required
                  value={values.linkedin}
                  onChange={handleChange}
                  placeholder="e.g. linkedin.com/in/alex-mercer"
                  className="bg-card border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300 font-medium"
                />
              </div>
            </div>

            {/* Monthly Revenue Selection */}
            <div className="flex flex-col gap-3">
              <label className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                Monthly Revenue Range <span className="text-gold">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {revenueBrackets.map((bracket) => {
                  const isSelected = values.revenue === bracket.value;
                  return (
                    <button
                      key={bracket.value}
                      type="button"
                      onClick={() => handleSelectRevenue(bracket.value)}
                      className={`px-3 py-2.5 rounded-lg text-[10px] sm:text-xs font-semibold tracking-wide border transition-all duration-300 text-center uppercase cursor-pointer ${
                        isSelected
                          ? "bg-gold/15 border-gold text-gold shadow-md"
                          : "bg-card border-white/5 hover:bg-white/[0.02] text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      {bracket.label.replace(" / month", "")}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Growth Challenge */}
            <div className="flex flex-col gap-2">
              <label htmlFor="challenge" className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
                What is your biggest positioning or growth challenge? <span className="text-gold">*</span>
              </label>
              <textarea
                id="challenge"
                name="challenge"
                required
                rows={4}
                value={values.challenge}
                onChange={handleChange}
                placeholder="e.g. We have industry-leading tech, but our market thinks we are a standard commodity vendor. Our CEO is invisible online..."
                className="bg-card border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-all duration-300 resize-none font-medium leading-relaxed"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-black hover:bg-gold hover:text-black border border-transparent font-semibold tracking-wide rounded-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-gold/25"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Processing Confidential Application...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Application for Review</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>

            <p className="text-[10px] text-zinc-600 text-center font-medium leading-relaxed">
              Applying does not guarantee acceptance. Sarath Kumar accepts a maximum of 3 founder clients concurrently to ensure institutional quality output. All conversations remain strictly private.
            </p>
          </motion.form>
        ) : (
          <motion.div
            key="application-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="bg-surface border border-white/5 p-8 sm:p-12 rounded-2xl shadow-2xl text-center relative glow-card-gold space-y-6"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 border border-gold/20 text-gold animate-bounce">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] text-gold uppercase tracking-widest font-bold">Application Received</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">Your Request Has Been Queued</h3>
              <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed mt-2 font-medium">
                Thank you for applying, <span className="text-white font-semibold">{values.name}</span>. Sarath reviews each company intake personally. If there is alignment, we will contact you via LinkedIn or email within 48 business hours.
              </p>
            </div>

            <div className="h-[1px] bg-white/5 my-6" />

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="https://linkedin.com/in/sarath-kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs rounded-lg transition-all duration-300 border border-white/10"
              >
                <span>Connect on LinkedIn</span>
                <ChevronRight className="h-4 w-4" />
              </a>
              <button
                onClick={() => setSuccess(false)}
                className="px-5 py-3 bg-transparent text-zinc-500 hover:text-zinc-300 font-semibold text-xs rounded-lg transition-all duration-300 border border-transparent"
              >
                Submit another application
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
