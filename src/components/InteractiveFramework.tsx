"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, BookOpen, FileText, Send, Award, DollarSign, ChevronRight, CheckCircle2 } from "lucide-react";

interface FrameworkStep {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ComponentType<any>;
  objective: string;
  deliverables: string[];
  outcomes: string[];
}

const steps: FrameworkStep[] = [
  {
    id: 1,
    title: "Positioning",
    subtitle: "Find your category of one",
    icon: Shield,
    objective: "Define the unique angle that separates the founder from competitor agencies or generalists, clarifying their specific authority zone.",
    deliverables: [
      "Core Message Document",
      "Target Persona Mapping",
      "Content Tone-of-Voice Guideline",
      "Category Definition Framework"
    ],
    outcomes: [
      "A razor-sharp brand positioning statement",
      "Instant value communication to enterprise/mid-market buyers",
      "Elimination of comparison with commodity copywriters"
    ]
  },
  {
    id: 2,
    title: "Narrative",
    subtitle: "Craft your proprietary worldview",
    icon: BookOpen,
    objective: "Translate business objectives and founder wisdom into a compelling narrative arc that challenges status-quo thinking.",
    deliverables: [
      "Content Pillars Matrix",
      "Personal Story Bank",
      "Worldview Framework",
      "Core Executive Narrative Draft"
    ],
    outcomes: [
      "Strategic alignment on industry-defining topics",
      "Deep intellectual trust with your target audience",
      "A repeatable content voice that feels completely authentic"
    ]
  },
  {
    id: 3,
    title: "Content",
    subtitle: "Create high-signal thought leadership",
    icon: FileText,
    objective: "Ghostwrite premium, insights-rich LinkedIn posts, essays, and articles using the founder's authentic voice and real-world results.",
    deliverables: [
      "Ghostwritten LinkedIn Posts (4-5x weekly)",
      "Custom Graphic and Visual Concepts",
      "Long-form Industry Essays",
      "High-converting Slide Carousels"
    ],
    outcomes: [
      "Peer-to-peer level discussion in the comments",
      "Command-level insights established publicly",
      "Consistent, active, premium digital presence without founder time drain"
    ]
  },
  {
    id: 4,
    title: "Distribution",
    subtitle: "Reach the decision makers",
    icon: Send,
    objective: "Maximize reach among key decision makers, startup CEOs, VC partners, and industry leaders through strategic formats.",
    deliverables: [
      "Posting Time Schedule Optimization",
      "CEO/VC Network Engagement Strategy",
      "Inbound Filter Blueprint",
      "Multi-channel Content Repurposing SOPs"
    ],
    outcomes: [
      "High-signal impressions directly on target accounts",
      "Meaningful network expansion with top-tier executives",
      "Elevated organic reach within your specific market niche"
    ]
  },
  {
    id: 5,
    title: "Authority",
    subtitle: "Convert attention into brand equity",
    icon: Award,
    objective: "Position the founder as the default industry reference point, leading to media features, podcast invitations, and speaking panels.",
    deliverables: [
      "PR & Media Outreach Outline",
      "Podcast Pitch Kit & Target List",
      "Authority Asset Hub (Ebooks/Whitepapers)",
      "Thought Leadership Newsletter Blueprint"
    ],
    outcomes: [
      "Inbound inquiries from publications (e.g. Hindustan Times, YourStory)",
      "Unsolicited invitations to address key industry conferences",
      "Industry default positioning for your specific business category"
    ]
  },
  {
    id: 6,
    title: "Opportunities",
    subtitle: "Capture commercial pipeline",
    icon: DollarSign,
    objective: "Channel inbound interest, hiring enquiries, and partnership requests into a predictable commercial pipeline for the business.",
    deliverables: [
      "Inbound DM Response Scripts",
      "Strategy Call Qualifier Questionnaire",
      "Lead Capture Visual Assets",
      "CRM Integration & Pipeline Hand-off SOPs"
    ],
    outcomes: [
      "Consistent flow of qualified inbound sales leads",
      "High-level talent acquisition inbound inquiries",
      "Strategic partnerships and VC/Investor opportunities"
    ]
  }
];

export default function InteractiveFramework() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const activeStepData = steps.find((s) => s.id === activeStep) || steps[0];
  const IconComponent = activeStepData.icon;

  return (
    <div className="w-full">
      {/* Desktop Split Layout */}
      <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch">
        {/* Left Side: Steps Selector */}
        <div className="col-span-5 flex flex-col justify-between relative pl-6 border-l border-white/5 py-2">
          {/* Progress fill bar */}
          <div 
            className="absolute left-0 top-0 w-[1px] bg-gold/50 transition-all duration-500 ease-out" 
            style={{
              height: `${(activeStep / steps.length) * 100}%`,
            }}
          />
          
          {steps.map((step) => {
            const StepIcon = step.icon;
            const isActive = step.id === activeStep;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`w-full text-left flex items-start gap-4 p-4 rounded-lg transition-all duration-300 relative group cursor-pointer ${
                  isActive 
                    ? "bg-white/[0.03] border border-white/5 shadow-2xl" 
                    : "hover:bg-white/[0.01] border border-transparent"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFrameworkBg"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-gold/5 to-transparent -z-10 pointer-events-none"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md border text-sm font-semibold transition-all duration-300 ${
                  isActive 
                    ? "border-gold bg-gold/10 text-gold" 
                    : "border-white/10 bg-white/[0.02] text-zinc-500 group-hover:border-zinc-500 group-hover:text-zinc-300"
                }`}>
                  0{step.id}
                </span>

                <div className="flex-1 min-w-0">
                  <h4 className={`text-base font-semibold tracking-tight transition-colors duration-300 ${
                    isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                  }`}>
                    {step.title}
                  </h4>
                  <p className={`text-xs mt-0.5 font-medium transition-colors duration-300 ${
                    isActive ? "text-gold/80" : "text-zinc-500 group-hover:text-zinc-400"
                  }`}>
                    {step.subtitle}
                  </p>
                </div>

                <ChevronRight className={`h-4 w-4 shrink-0 self-center transition-all duration-300 ${
                  isActive ? "text-gold translate-x-1" : "text-zinc-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                }`} />
              </button>
            );
          })}
        </div>

        {/* Right Side: Detailed Dashboard */}
        <div className="col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-full bg-surface border border-white/5 rounded-2xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden glow-card"
            >
              {/* Subtle background icon watermark */}
              <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 text-white/[0.01] pointer-events-none -z-10">
                <IconComponent className="h-64 w-64" />
              </div>

              <div>
                <div className="flex items-center gap-3 border-b border-white/5 pb-5">
                  <div className="p-3 bg-gold/10 border border-gold/20 rounded-xl text-gold">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gold font-bold">Stage 0{activeStepData.id}</span>
                    <h3 className="text-2xl font-bold font-heading mt-0.5">{activeStepData.title}</h3>
                  </div>
                </div>

                {/* Objective */}
                <div className="mt-6">
                  <h5 className="text-xs uppercase tracking-wider text-zinc-500 font-bold">Core Objective</h5>
                  <p className="text-zinc-300 mt-2 text-sm leading-relaxed font-medium">
                    {activeStepData.objective}
                  </p>
                </div>

                {/* Split Deliverables vs Outcomes */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  {/* Deliverables */}
                  <div className="space-y-3">
                    <h5 className="text-xs uppercase tracking-wider text-zinc-500 font-bold">Key Assets & Deliverables</h5>
                    <ul className="space-y-2">
                      {activeStepData.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-zinc-400 font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-zinc-600 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div className="space-y-3">
                    <h5 className="text-xs uppercase tracking-wider text-gold/80 font-bold">Measurable Business Outcomes</h5>
                    <ul className="space-y-2">
                      {activeStepData.outcomes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300 font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-gold/60 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-8 border-t border-white/5 pt-4 flex items-center justify-between text-[11px] text-zinc-500 font-bold uppercase tracking-wider">
                <span>Founder Authority Framework™</span>
                <span className="text-gold">Sarath Kumar Consulting</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Accordion Layout */}
      <div className="lg:hidden space-y-4">
        {steps.map((step) => {
          const StepIcon = step.icon;
          const isOpen = step.id === activeStep;
          return (
            <div
              key={step.id}
              className={`bg-surface border rounded-xl overflow-hidden transition-all duration-300 ${
                isOpen ? "border-gold/30 shadow-xl" : "border-white/5"
              }`}
            >
              <button
                onClick={() => setActiveStep(isOpen ? 0 : step.id)}
                className="w-full flex items-center justify-between p-4 text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-md border text-xs font-semibold ${
                    isOpen ? "border-gold bg-gold/10 text-gold" : "border-white/10 text-zinc-500"
                  }`}>
                    0{step.id}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{step.title}</h4>
                    <p className="text-[10px] text-zinc-500">{step.subtitle}</p>
                  </div>
                </div>
                <ChevronRight className={`h-4 w-4 text-zinc-500 transition-transform duration-300 ${
                  isOpen ? "rotate-90 text-gold" : ""
                }`} />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 border-t border-white/5 bg-white/[0.01] space-y-4">
                      {/* Objective */}
                      <div>
                        <h5 className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Objective</h5>
                        <p className="text-zinc-300 mt-1 text-xs leading-relaxed">{step.objective}</p>
                      </div>

                      {/* Deliverables */}
                      <div>
                        <h5 className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Deliverables</h5>
                        <ul className="mt-1 space-y-1">
                          {step.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-xs text-zinc-400">
                              <CheckCircle2 className="h-3 w-3 text-zinc-600 mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Outcomes */}
                      <div>
                        <h5 className="text-[10px] uppercase tracking-wider text-gold/80 font-bold">Outcomes</h5>
                        <ul className="mt-1 space-y-1">
                          {step.outcomes.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-xs text-zinc-200">
                              <CheckCircle2 className="h-3 w-3 text-gold/60 mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
