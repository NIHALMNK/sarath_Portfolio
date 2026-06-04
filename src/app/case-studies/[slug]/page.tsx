import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle, ShieldAlert, AlertCircle } from "lucide-react";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ResultMetrics from "@/components/shared/ResultMetrics";
import ApplyCTA from "@/components/shared/ApplyCTA";
import { getCaseStudyBySlug } from "@/data/caseStudies";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const cs = getCaseStudyBySlug(resolvedParams.slug);
  
  if (!cs) {
    return {
      title: "Case Study Not Found | Sarath Kumar",
      description: "The requested case study could not be resolved."
    };
  }

  return {
    title: cs.seoTitle,
    description: cs.seoDescription,
    openGraph: {
      title: cs.seoTitle,
      description: cs.seoDescription,
      type: "article",
    },
    twitter: {
      title: cs.seoTitle,
      description: cs.seoDescription,
      card: "summary_large_image"
    }
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const resolvedParams = await params;
  const cs = getCaseStudyBySlug(resolvedParams.slug);

  if (!cs || cs.status === "comingSoon") {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Schema Article Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": cs.title,
            "description": cs.seoDescription,
            "image": "https://sarathkumar.com/profile/portrait-placeholder.jpg",
            "author": {
              "@type": "Person",
              "name": "Sarath Kumar",
              "url": "https://sarathkumar.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Sarath Kumar Consulting",
              "logo": {
                "@type": "ImageObject",
                "url": "https://sarathkumar.com/profile/logo.jpg"
              }
            },
            "datePublished": new Date().toISOString()
          })
        }}
      />

      <div className="absolute inset-0 premium-grid opacity-20 pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[130px] pointer-events-none -z-10" />

      <Header />

      <main className="pt-32 pb-24 px-6 sm:px-8 max-w-5xl mx-auto space-y-12">
        {/* Back navigation */}
        <div className="flex">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors duration-300 uppercase tracking-widest font-bold"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Case Studies</span>
          </Link>
        </div>

        {/* Title Block */}
        <section className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="text-[10px] text-gold uppercase tracking-wider font-bold bg-gold/5 px-3 py-1 border border-gold/10 rounded-full">
              {cs.industry} Industry
            </span>
            <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold bg-white/[0.02] px-3 py-1 border border-white/5 rounded-full">
              {cs.country} Market
            </span>
            <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold bg-white/[0.02] px-3 py-1 border border-white/5 rounded-full">
              {cs.engagementType}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading leading-tight tracking-tight mt-2 text-white">
            {cs.title}
          </h1>
          <p className="text-sm sm:text-lg text-zinc-400 font-medium max-w-3xl leading-relaxed">
            {cs.subtitle}
          </p>
        </section>

        {/* Outcome Metrics Dashboard */}
        <section className="bg-surface border border-white/5 rounded-2xl p-6 sm:p-8 glow-card-gold space-y-4">
          <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Campaign Performance Outcomes</h3>
          <ResultMetrics results={cs.results} variant="large" />
        </section>

        {/* Editorial Body: Problem, Strategy, Execution */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          <div className="bg-card border border-white/5 p-6 sm:p-8 rounded-xl space-y-3 glow-card">
            <h4 className="text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-gold rounded-full" />
              <span>The Problem</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
              {cs.problem}
            </p>
          </div>

          <div className="bg-card border border-white/5 p-6 sm:p-8 rounded-xl space-y-3 glow-card">
            <h4 className="text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-gold rounded-full" />
              <span>The Strategy</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
              {cs.strategy}
            </p>
          </div>

          <div className="bg-card border border-white/5 p-6 sm:p-8 rounded-xl space-y-3 glow-card">
            <h4 className="text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-gold rounded-full" />
              <span>The Execution</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
              {cs.execution}
            </p>
          </div>
        </section>

        {/* Campaign Ownership Split: Contributions & Responsibilities */}
        {(cs.contributions || cs.responsibilities) && (
          <section className="bg-surface border border-white/5 rounded-2xl p-6 sm:p-8 glow-card-gold space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] text-gold uppercase tracking-widest font-extrabold">Campaign Ownership Split</span>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-white">Roles & Contributions</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/5 pt-6">
              {/* Contributions */}
              {cs.contributions && (
                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-zinc-400 rounded-full" />
                    <span>Your Contributions</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {cs.contributions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300 font-medium">
                        <span className="text-zinc-500 font-bold shrink-0 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Responsibilities */}
              {cs.responsibilities && (
                <div className="space-y-4">
                  <h4 className="text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-gold rounded-full" />
                    <span>My Responsibilities</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {cs.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300 font-medium">
                        <span className="text-gold font-bold shrink-0 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* SEO CONTENT BLOCK */}
        {cs.seoContentBlock && (
          <section className="border-t border-white/5 pt-12 space-y-8 max-w-4xl mx-auto">
            <div className="space-y-1">
              <span className="text-[10px] text-gold uppercase tracking-widest font-extrabold">Deep Dive Breakdown</span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading">Operational Insights & Analysis</h3>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-zinc-400 font-medium leading-relaxed">
              <div className="space-y-2">
                <h4 className="font-bold text-white uppercase tracking-wider text-xs">Category Challenges</h4>
                <p>{cs.seoContentBlock.challenges}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-white uppercase tracking-wider text-xs">Methodological Approach</h4>
                <p>{cs.seoContentBlock.approach}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-white uppercase tracking-wider text-xs">Measurable Campaign Results</h4>
                <p>{cs.seoContentBlock.results}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-white uppercase tracking-wider text-xs">Strategic Lessons Learned</h4>
                <p>{cs.seoContentBlock.lessons}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-white uppercase tracking-wider text-xs">B2B Industry Insights</h4>
                <p>{cs.seoContentBlock.insights}</p>
              </div>
            </div>
          </section>
        )}

        {/* Apply CTA Section */}
        <section className="pt-12">
          <ApplyCTA 
            title="Want Similar Authority Outcomes For Your Brand?" 
            subtitle="Let's align your positioning narrative to drive B2B pipeline, hires, and industry respect."
          />
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
