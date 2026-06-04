import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle } from "lucide-react";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ApplyCTA from "@/components/shared/ApplyCTA";
import ResultMetrics from "@/components/shared/ResultMetrics";
import FounderAvatar from "@/components/shared/FounderAvatar";
import FounderCover from "@/components/shared/FounderCover";
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

  const profileName = cs.linkedinProfile.name;
  const profileTitle = cs.linkedinProfile.title;
  const profileCompany = cs.linkedinProfile.company;
  const profileLocation = cs.linkedinProfile.location;
  const profileFollowers = cs.linkedinProfile.followers;
  const profileBio = cs.linkedinProfile.bio;

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
              "url": "https://www.linkedin.com/in/sarathkumarp/"
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

        {/* 1. HERO HEADER */}
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
        </section>

        {/* 2. CLIENT PROFILE SNAPSHOT */}
        <section className="space-y-4">
          {/* <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Client Profile Snapshot</h3> */}
          <div className="bg-surface border border-white/5 rounded-2xl overflow-hidden shadow-2xl relative">
            {/* Banner Image */}
            <div className="relative h-32 sm:h-44 w-full bg-gradient-to-r from-zinc-900 via-gold/10 to-zinc-900 overflow-hidden">
              <FounderCover 
                src={cs.linkedinProfile.coverImage}
                name={cs.linkedinProfile.name}
              />
            </div>

            {/* Content Container */}
            <div className="px-6 pb-6 relative">
              {/* Profile Image Overlap */}
              <FounderAvatar 
                src={cs.linkedinProfile.profileImage}
                name={cs.linkedinProfile.name}
                className="relative -mt-16 sm:-mt-20 mb-4 h-24 w-24 sm:h-32 sm:w-32 border-4 border-[#0A0A0A] bg-[#1A1A1A] shrink-0 z-10"
              />

              {/* Details */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-1.5">
                    <h4 className="text-xl sm:text-2xl font-extrabold text-white font-heading tracking-tight flex items-center gap-2">
                      <span>{profileName}</span>
                      <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" title="Active Authority Node" />
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-300 font-semibold">
                      {profileTitle} at <span className="text-gold">{profileCompany}</span>
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-zinc-500 font-bold uppercase tracking-wider">
                      <span>{profileLocation}</span>
                      <span>•</span>
                      <span className="text-gold">{profileFollowers} Followers</span>
                    </div>
                  </div>

                  <div>
                    <a
                      href={cs.linkedinProfile.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 border border-gold/30 hover:border-gold bg-gold/5 hover:bg-gold/10 text-gold font-bold text-xs rounded-lg transition-all duration-300 uppercase tracking-wider cursor-pointer shadow-md"
                    >
                      <span>View LinkedIn Profile</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <div className="h-[1px] bg-white/5" />

                {/* About Section */}
                <div className="space-y-2">
                  <h5 className="text-[10px] text-zinc-500 font-extrabold uppercase tracking-wider">About / Bio Summary</h5>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium italic">
                    &ldquo;{profileBio}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. BUSINESS IMPACT */}
        <section className="bg-surface border border-white/5 rounded-2xl p-6 sm:p-8 glow-card-gold space-y-4">
          <h3 className="text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-gold shrink-0" />
            <span>Business Impact</span>
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cs.businessImpact.map((impact, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed">
                <span className="text-gold font-bold shrink-0 mt-0.5">✓</span>
                <span>{impact}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 4. METRICS SNAPSHOT */}
        <section className="space-y-4">
          <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Metrics Snapshot</h3>
          <ResultMetrics results={cs.results} variant="large" />
        </section>

        {/* 5. PROJECT OBJECTIVE */}
        <section className="bg-card border border-white/5 p-6 sm:p-8 rounded-2xl glow-card-gold space-y-3">
          <h4 className="text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-gold rounded-full" />
            <span>Project Objective</span>
          </h4>
          <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-medium leading-loose">
            {cs.objective}
          </p>
        </section>

        {/* 6. PROBLEM / 7. STRATEGY / 8. EXECUTION */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {/* Problem */}
          <div className="bg-card border border-white/5 p-6 sm:p-8 rounded-xl space-y-3 glow-card">
            <h4 className="text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-gold rounded-full" />
              <span>Problem</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
              {cs.problem}
            </p>
          </div>

          {/* Strategy */}
          <div className="bg-card border border-white/5 p-6 sm:p-8 rounded-xl space-y-3 glow-card">
            <h4 className="text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-gold rounded-full" />
              <span>Strategy</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
              {cs.strategy}
            </p>
          </div>

          {/* Execution */}
          <div className="bg-card border border-white/5 p-6 sm:p-8 rounded-xl space-y-3 glow-card">
            <h4 className="text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-gold rounded-full" />
              <span>Execution</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
              {cs.execution}
            </p>
          </div>
        </section>


        {/* 12. CTA */}
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
