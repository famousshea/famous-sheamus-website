"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "#site/content";
import * as LucideIcons from "lucide-react";

export function ServiceFeed() {
  // 1. Updated Logic: Finding the specific service by a more flexible slug match
  // Ensure the string below matches your actual .md or .mdx filename/slug exactly
  const primaryService = services.find(s =>
    s.slug.toLowerCase() === "ai-implementation-consulting" ||
    s.title.includes("Implementation Consulting")
  ) || services[0];

  const scrollingServices = services.filter(s => s.slug !== primaryService.slug);

  const [startIndex, setStartIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isAutoPlaying || scrollingServices.length <= 3) return;
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % scrollingServices.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, scrollingServices.length]);

  const handleInteraction = useCallback(() => {
    setIsAutoPlaying(false);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setIsAutoPlaying(true), 5000);
  }, []);

  const visibleScrolling = [];
  const numToShow = Math.min(3, scrollingServices.length);
  for (let i = 0; i < numToShow; i++) {
    const index = (startIndex + i) % scrollingServices.length;
    visibleScrolling.push(scrollingServices[index]);
  }

  return (
    <div className="flex flex-col w-full max-w-sm relative h-[600px] overflow-hidden" onMouseEnter={handleInteraction}>
      <div className="absolute left-[-23px] top-4 bottom-4 w-px bg-border z-0 hidden lg:block border-l border-dashed opacity-50" />

      {/* --- STATIC FEATURED CARD --- */}
      <div className="group relative z-10 w-full h-[150px] pb-4">
        <Link href={primaryService.permalink} className="block w-full h-full">
          <div className="absolute left-[-29px] top-6 h-3 w-3 rounded-full border-2 border-background bg-blue-600 shadow-sm hidden lg:block" />
          <div className="h-full rounded-2xl border-2 border-blue-500 bg-blue-50/50 dark:bg-blue-900/20 p-5 shadow-lg backdrop-blur-sm transition-all hover:scale-[1.02]">
            <div className="mb-2 flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                <LucideIcons.ShieldCheck className="h-4 w-4" />
              </div>
              <span className="text-[10px] font-black text-blue-700 dark:text-blue-300 uppercase tracking-widest">
                Primary Strategy
              </span>
            </div>
            <h3 className="font-bold text-base text-zinc-900 dark:text-white leading-tight">
              {primaryService.title}
            </h3>
            <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">
              {primaryService.description}
            </p>
          </div>
        </Link>
      </div>

      {/* --- SCROLLING REMAINING CARDS --- */}
      <AnimatePresence mode="popLayout" initial={false}>
        {visibleScrolling.map((service) => {
          const IconComponent = (LucideIcons as any)[service.icon || "Bot"] || LucideIcons.Bot;
          return (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <div className="group relative z-10 w-full h-[150px] pb-4">
                <Link href={service.permalink} className="block w-full h-full">
                  <div className="absolute left-[-29px] top-6 h-3 w-3 rounded-full border-2 border-background bg-zinc-300 group-hover:bg-blue-500 hidden lg:block transition-all" />
                  <div className="h-full rounded-2xl border border-border bg-white/40 dark:bg-zinc-900/40 p-5 shadow-sm backdrop-blur-sm transition-all hover:bg-white dark:hover:bg-zinc-800 hover:border-blue-500/30">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 group-hover:bg-blue-500/10 transition-colors">
                        <IconComponent className="h-4 w-4 text-zinc-500 group-hover:text-blue-600" />
                      </div>
                      <h3 className="font-bold text-foreground group-hover:text-blue-600 transition-colors truncate text-sm">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}