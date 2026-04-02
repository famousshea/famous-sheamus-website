"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "#site/content";
import * as LucideIcons from "lucide-react";

export function ServiceFeed() {
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      {services.map((service, index) => {
        // Dynamic icon resolution
        const IconComponent = (LucideIcons as any)[service.icon || "Bot"] || LucideIcons.Bot;

        return (
          <Link href={service.permalink} key={service.slug}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex gap-6 pb-8 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-29px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-accent shadow-sm" />

              <div className="flex-1 rounded-2xl border border-border bg-white/50 dark:bg-zinc-900/50 p-5 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md cursor-pointer">
                <div className="mb-2 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <IconComponent className="h-4 w-4 text-accent" />
                    </div>
                    <h3 className="font-bold text-foreground group-hover:text-accent transition-colors truncate">
                      {service.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-medium text-zinc-400 whitespace-nowrap mt-1">
                    {index === 0 ? "Just now" : index === 1 ? "2 hrs ago" : "1 day ago"}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-2">
                  {service.description}
                </p>
              </div>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
}
