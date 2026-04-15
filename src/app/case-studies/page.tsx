import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Case Studies | Famous Sheamus | Implementation Results",
  description: "Explore real-world results from Famous Sheamus. See how our global AI consultant strategies and n8n automations have saved hours and driven growth for international clients.",
  alternates: {
    canonical: '/case-studies',
  },
};

import { TopNav } from "@/components/TopNav";
import { ContactBadge } from "@/components/ContactBadge";

export default function CaseStudiesPage() {
  // Simplified text to keep the focus purely on the construction status
  const marqueeText = "Under Construction • Coming Soon! • ";

  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      <TopNav />
      <ContactBadge />

      {/* Animated Construction Tape Banner */}
      <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="bg-[#FFDB58] text-black font-black text-xl md:text-3xl py-4 border-y-4 border-black shadow-2xl transform rotate-[-12deg] flex whitespace-nowrap overflow-hidden w-[120vw]">

          {/* Container for the sliding effect */}
          <div className="flex animate-marquee">
            <span className="flex items-center gap-8 uppercase tracking-[0.2em] px-4">
              UNDER CONSTRUCTION • COMING SOON! • UNDER CONSTRUCTION • COMING SOON! •
            </span>
            {/* Exact duplicate to create the "infinite" illusion */}
            <span className="flex items-center gap-8 uppercase tracking-[0.2em] px-4" aria-hidden="true">
              UNDER CONSTRUCTION • COMING SOON! • UNDER CONSTRUCTION • COMING SOON! •
            </span>
          </div>

          {/* Second identical container for the loop */}
          <div className="flex animate-marquee" aria-hidden="true">
            <span className="flex items-center gap-8 uppercase tracking-[0.2em] px-4">
              UNDER CONSTRUCTION • COMING SOON! • UNDER CONSTRUCTION • COMING SOON! •
            </span>
            <span className="flex items-center gap-8 uppercase tracking-[0.2em] px-4">
              UNDER CONSTRUCTION • COMING SOON! • UNDER CONSTRUCTION • COMING SOON! •
            </span>
          </div>
        </div>
      </div>

      <div className="vignette fixed inset-0 pointer-events-none" />

      {/* Content Container - Visual background signaling work in progress */}
      <div className="container relative mx-auto px-6 max-w-4xl opacity-40 grayscale pointer-events-none">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Case <span className="text-accent underline decoration-4 underline-offset-8">Studies</span>
        </h1>
        <p className="text-xl text-zinc-500 mb-12">Real-world results from scaling businesses.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-border bg-white/50 dark:bg-zinc-900/50 p-6 backdrop-blur-sm">
            <span className="inline-block px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold rounded-full uppercase tracking-wider mb-4">+300% Lead Qualification</span>
            <h3 className="text-2xl font-bold mb-3">Local Property Agency</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              Implemented a 24/7 Voice AI Receptionist and custom N8N automated lead processing pipeline.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-white/50 dark:bg-zinc-900/50 p-6 backdrop-blur-sm">
            <span className="inline-block px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold rounded-full uppercase tracking-wider mb-4">40hrs/wk Saved</span>
            <h3 className="text-2xl font-bold mb-3">E-Commerce Retailer</h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              Connected their Shopify backend through an N8N pipeline into a custom LLM classification dashboard.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}