import type { Metadata } from "next";
import { HeroGreeting } from "@/components/HeroGreeting";

export const metadata: Metadata = {
  title: "Famous Sheamus | Global AI Consultant & Fractional CTO",
  description: "Famous Sheamus is a Fractional CTO and AI Implementation Architect with global capability. We replace operational chaos with AI-driven precision for high-growth businesses worldwide.",
  alternates: {
    canonical: '/',
  },
};

import { ProfileAvatar } from "@/components/ProfileAvatar";
import { ServiceFeed } from "@/components/ServiceFeed";
import { RollingMarquee } from "@/components/RollingMarquee";
import { TopNav } from "@/components/TopNav";
import { ContactBadge } from "@/components/ContactBadge";
import { TrustStack } from "@/components/TrustStack";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Famous Sheamus | AI Implementation Consultant & Fractional CTO",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".hero-title", ".hero-description"]
  },
  "url": "https://famoussheamus.com"
};

export default function Home() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopNav />
      <ContactBadge />
      
      {/* Background Vignette and Glow */}
      <div className="vignette fixed inset-0 pointer-events-none" />
      <div className="fixed -bottom-[30%] -left-[10%] h-[70%] w-[70%] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container relative mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Greeting) */}
          <article className="lg:col-span-5 order-2 lg:order-1">
            <HeroGreeting />
          </article>

          {/* Center Column (Avatar) */}
          <aside className="lg:col-span-3 flex justify-center order-1 lg:order-2">
            <ProfileAvatar />
          </aside>

          {/* Right Column (Service Feed) */}
          <section className="lg:col-span-4 flex justify-end order-3">
            <ServiceFeed />
          </section>

        </div>

        {/* Global Trust & Marquee */}
        <section className="mt-24 lg:mt-32">
          <TrustStack />
          <RollingMarquee />
        </section>
      </div>
    </main>
  );
}
