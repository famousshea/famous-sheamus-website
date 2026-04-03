"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "#site/content";
import * as LucideIcons from "lucide-react";

export function ServiceFeed() {
  const [startIndex, setStartIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastWheelTimeRef = useRef<number>(0);

  // Auto-advance the list
  useEffect(() => {
    if (!isAutoPlaying || services.length <= 4) return;

    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % services.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  // Handle user interaction to pause & delay-resume
  const handleInteraction = useCallback(() => {
    setIsAutoPlaying(false);

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    // Resume auto-play after 5 seconds of idle time
    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 3000);
  }, []);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  // Handle manual scroll via mouse wheel or trackpad
  const handleWheel = (e: React.WheelEvent) => {
    handleInteraction();

    // Throttle wheel events so it doesn't spin wildly (500ms cooldown)
    const now = Date.now();
    if (now - lastWheelTimeRef.current < 500) return;
    lastWheelTimeRef.current = now;

    if (e.deltaY > 0) {
      // Scrolled down -> shift forward
      setStartIndex((prev) => (prev + 1) % services.length);
    } else if (e.deltaY < 0) {
      // Scrolled up -> shift backward
      setStartIndex((prev) => (prev - 1 + services.length) % services.length);
    }
  };

  // Extract exactly 4 items, wrapping around
  const visibleServices = [];
  const numToShow = Math.min(4, services.length);
  for (let i = 0; i < numToShow; i++) {
    const index = (startIndex + i) % services.length;
    visibleServices.push(services[index]);
  }

  return (
    <div className="flex flex-col w-full max-w-sm relative min-h-[600px]">
      <div className="absolute left-[-23px] top-4 bottom-4 w-px bg-border z-0 hidden lg:block border-l border-dashed" />

      <AnimatePresence initial={false}>
        {visibleServices.map((service) => {
          const IconComponent = (LucideIcons as any)[service.icon || "Bot"] || LucideIcons.Bot;

          return (
            <motion.div
              key={service.slug}
              // layout <--- REMOVE THIS
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 150 }} // Increased slightly to clear the pb-4
              exit={{ opacity: 0, height: 0 }}
              transition={{
                height: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="w-full overflow-hidden"
              onMouseEnter={handleInteraction}
              onWheel={handleWheel}
              onTouchStart={handleInteraction}
            >
              {/* Added padding bottom here instead of flex gap on parent to allow height to collapse seamlessly */}
              <div className="group relative z-10 w-full h-[134px] pb-4">
                <Link href={service.permalink} className="block w-full h-full">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-29px] top-6 h-3 w-3 rounded-full border-2 border-background bg-accent shadow-sm hidden lg:block transition-all group-hover:scale-125 group-hover:shadow-accent/50" />

                  {/* Added h-full to this div to ensure the card fills the reserved space */}
                  <div className="h-full rounded-2xl border border-border bg-white/50 dark:bg-zinc-900/50 p-5 shadow-sm backdrop-blur-sm transition-all hover:bg-white dark:hover:bg-zinc-800/80 hover:border-accent/40 hover:shadow-md cursor-pointer">
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                          <IconComponent className="h-4 w-4 text-accent" />
                        </div>
                        <h3 className="font-bold text-foreground group-hover:text-accent transition-colors truncate">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-2">
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
