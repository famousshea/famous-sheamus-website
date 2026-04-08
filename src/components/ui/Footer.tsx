import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-sketch py-12 px-6 bg-white/50 backdrop-blur-sm relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-bold text-[#008080] mb-4">Famous Sheamus</h3>
                    <p className="text-sm opacity-70">Scale Revenue, Not Chaos. Fractional CTO & Automation Strategist.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Services</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/services/fractional-cto" className="hover:text-[#008080] transition-colors">Fractional CTO</Link></li>
                        <li><Link href="/services/voice-ai" className="hover:text-[#008080] transition-colors">Voice AI Integration</Link></li>
                        <li><Link href="/services/ai-automation" className="hover:text-[#008080] transition-colors">Workflow Automation</Link></li>
                    </ul>
                </div>
                <div className="text-sm opacity-50">
                    © {new Date().getFullYear()} Famous Sheamus Consulting. Dallas, TX.
                </div>
            </div>
        </footer>
    );
}