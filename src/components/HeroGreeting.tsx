import React from "react";
import { Linkedin, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Custom SVG for X logo (Lucide's Twitter icon is the old bird)
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.95H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.965H5.078z" />
  </svg>
);

export function HeroGreeting() {
  return (
    <div className="flex flex-col gap-6 max-w-lg">
      <div className="space-y-2">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground relative py-2">
          Hello, I'm <br />
          <span className="relative">
            Sheamus.
            <div className="absolute -bottom-2 left-0 h-2 w-full bg-accent/20 rounded-full -rotate-1" />
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-medium text-zinc-500 dark:text-zinc-400">
          Fractional CTO and <span className="text-accent underline decoration-4 underline-offset-8">AI Implementation Consultant</span>
        </p>
      </div>

      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
        Helping businesses scale revenue by implementing AI
        and building resilient automated systems.
        No new software to learn—just pure efficiency.
      </p>

      {/* Social Links Badge Feed */}
      <div className="flex flex-wrap gap-2">
        {[
          { icon: Linkedin, href: "https://www.linkedin.com/in/sheamus-byrne/", color: "hover:text-blue-600" },
          { icon: XIcon, href: "https://x.com/famousshea", color: "hover:text-zinc-900 dark:hover:text-white" },
          { icon: Github, href: "https://github.com/famousshea", color: "hover:text-zinc-900 dark:hover:text-white" },
        ].map((social, i) => (
          <a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-xl bg-white/50 dark:bg-zinc-900/50 border border-border shadow-sm transition-all hover:-translate-y-1",
              social.color
            )}
          >
            <social.icon className="h-5 w-5" strokeWidth={1.5} />
          </a>
        ))}
      </div>

      {/* Primary Rainbow CTA */}
      <div className="pt-4">
        <Link href="/contact" className="group relative w-fit flex items-center justify-center p-0.5 overflow-hidden rounded-2xl transition-transform hover:scale-105 active:scale-95">
          {/* Animated Rainbow Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 animate-rainbow bg-[length:200%_auto]" />

          <div className="relative flex items-center gap-3 px-8 py-4 bg-white dark:bg-zinc-950 rounded-2xl transition-colors group-hover:bg-zinc-50 dark:group-hover:bg-zinc-900 border border-transparent">
            <span className="text-lg font-bold tracking-tight text-foreground">Book a Strategy Call</span>
            <ArrowRight className="h-5 w-5 text-foreground group-hover:translate-x-1 transition-transform" />
          </div>

          {/* Outer Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
        </Link>
      </div>
    </div>
  );
}
