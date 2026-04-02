import React from "react";
import { TopNav } from "@/components/TopNav";
import { ContactBadge } from "@/components/ContactBadge";

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      <TopNav />
      <ContactBadge />
      
      <div className="vignette fixed inset-0 pointer-events-none" />
      
      <div className="container relative mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Case <span className="text-accent underline decoration-4 underline-offset-8">Studies</span>
        </h1>
        <p className="text-xl text-zinc-500 mb-12">Real-world results from scaling businesses.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="rounded-2xl border border-border bg-white/50 dark:bg-zinc-900/50 p-6 backdrop-blur-sm transition-all hover:border-accent/50 shadow-sm group">
              <span className="inline-block px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold rounded-full uppercase tracking-wider mb-4">+300% Lead Qualification</span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">Local Property Agency</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                Implemented a 24/7 Voice AI Receptionist and custom N8N automated lead processing pipeline. Reduced manual call triaging by 85% and increased after-hours bookings by 300%.
              </p>
           </div>
           
           <div className="rounded-2xl border border-border bg-white/50 dark:bg-zinc-900/50 p-6 backdrop-blur-sm transition-all hover:border-accent/50 shadow-sm group">
              <span className="inline-block px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold rounded-full uppercase tracking-wider mb-4">40hrs/wk Saved</span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">E-Commerce Retailer</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                Connected their Shopify backend through an N8N pipeline into a custom LLM classification dashboard. Completely automated their returns process and shipping dispute resolution.
              </p>
           </div>
        </div>
      </div>
    </main>
  );
}
