import { HeroGreeting } from "@/components/HeroGreeting";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { ServiceFeed } from "@/components/ServiceFeed";
import { RollingMarquee } from "@/components/RollingMarquee";
import { TopNav } from "@/components/TopNav";
import { ContactBadge } from "@/components/ContactBadge";

export default function Home() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      <TopNav />
      <ContactBadge />
      
      {/* Background Vignette and Glow */}
      <div className="vignette fixed inset-0 pointer-events-none" />
      <div className="fixed -bottom-[30%] -left-[10%] h-[70%] w-[70%] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container relative mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Greeting) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <HeroGreeting />
          </div>

          {/* Center Column (Avatar) */}
          <div className="lg:col-span-3 flex justify-center order-1 lg:order-2">
            <ProfileAvatar />
          </div>

          {/* Right Column (Service Feed) */}
          <div className="lg:col-span-4 flex justify-end order-3">
            <ServiceFeed />
          </div>

        </div>

        {/* Rolling Marquee (Bottom) */}
        <div className="mt-24 lg:mt-32">
          <RollingMarquee />
        </div>
      </div>
    </main>
  );
}
