import React from "react";
import { TopNav } from "@/components/TopNav";
import { ContactBadge } from "@/components/ContactBadge";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      <TopNav />
      <ContactBadge />

      <div className="vignette fixed inset-0 pointer-events-none" />

      <div className="container relative mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
          About <span className="text-accent underline decoration-4 underline-offset-8">Sheamus</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-white/50 dark:bg-zinc-900/50 p-6 backdrop-blur-sm">
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full uppercase tracking-wider mb-4">Background</span>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                With over a decade of experience in the technology sector, my journey has evolved from foundational roles in IT support and systems engineering to leading strategic software initiatives and implementation of automated systems. I&apos;ve spent years building robust infrastructures and managing complex operations for companies like prototype:IT and Makeready, eventually specializing in AI-driven automation to bridge the gap between technical complexity and scalable business growth.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white/50 dark:bg-zinc-900/50 p-6 backdrop-blur-sm">
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full uppercase tracking-wider mb-4">Philosophy</span>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                My approach is simple: No new software to learn, just pure efficiency. I specialize in building unseen, resilient architectures that work invisibly in the background.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-white/50 dark:bg-zinc-900/50 p-6 backdrop-blur-sm">
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full uppercase tracking-wider mb-4">Core Skills</span>
              <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent"></span> System Architecture Design</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent"></span> N8N Automation</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent"></span> LLM & AI integrations</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent"></span> Voice AI</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent"></span> Process Analysis & Optimization</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent"></span> Fractional Technical Leadership</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
