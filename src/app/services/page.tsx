import React from "react";
import { TopNav } from "@/components/TopNav";
import { ContactBadge } from "@/components/ContactBadge";
import { services } from "#site/content";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      <TopNav />
      <ContactBadge />
      
      <div className="vignette fixed inset-0 pointer-events-none" />
      
      <div className="container relative mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Intelligent <span className="text-accent underline decoration-4 underline-offset-8">Offerings</span>
        </h1>
        <p className="text-xl text-zinc-500 mb-12">Enhancing your existing workflows with AI and automation.</p>

        <div className="relative border-s border-border pl-8 space-y-12">
          {services.map((service, index) => {
             const IconComponent = (LucideIcons as any)[service.icon || "Bot"] || LucideIcons.Bot;
             return (
              <div key={service.slug} className="relative">
                {/* Timeline Dot */}
                <span className="absolute -left-[41px] top-4 flex h-5 w-5 items-center justify-center rounded-full bg-background ring-4 ring-background">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
                </span>
                
                <div className="rounded-2xl border border-border bg-white/50 dark:bg-zinc-900/50 p-6 backdrop-blur-sm transition-all hover:border-accent/50 hover:bg-white dark:hover:bg-zinc-900 shadow-sm group">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                        <IconComponent className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{service.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 text-lg">
                    {service.description}
                  </p>

                  <Link href={service.permalink} className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors">
                    Explore This Service <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
