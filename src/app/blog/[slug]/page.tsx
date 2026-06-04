import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, AlertCircle } from "lucide-react";
import Header from "@/components/layout/Header";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Verify slug format
  const validSlugs = ["why-founder-led-growth-outperforms-paid-media", "narrative-mapping-framework-for-enterprise-ceos"];
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <div className="absolute inset-0 premium-grid opacity-25 pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Header />

      <main className="pt-32 pb-24 px-6 sm:px-8 max-w-3xl mx-auto space-y-12">
        {/* Navigation back */}
        <div className="flex">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors duration-300 uppercase tracking-widest font-bold"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Article block placeholder */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
            <span>June 2026</span>
            <span className="text-gold">•</span>
            <span>4 min read</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading leading-tight tracking-tight mt-2 text-white">
            {slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
          </h1>
        </section>

        <section className="p-8 border border-dashed border-white/10 bg-surface rounded-2xl text-center space-y-4 glow-card-gold">
          <div className="h-12 w-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold text-xs font-bold mx-auto">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Thought Leadership Article Under Development</h4>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto mt-2 leading-relaxed">
              This dynamic path `{slug}` is fully wired. Full text is being formatted for digital distribution and indexing.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
