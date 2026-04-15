export const TrustStack = () => {
  const partners = [
    { name: "n8n", category: "Automation" },
    { name: "Google Deep Think", category: "Intelligence" },
    { name: "Google Cloud & Microsoft Azure", category: "Infrastructure" },
    { name: "VAPI & ElevenLabs", category: "Voice AI" },
    { name: "Gemini, Claude & OpenAI", category: "LLM" },
  ];

  return (
    <div className="py-12 border-y border-black/5 dark:border-white/5 bg-white/5 backdrop-blur-sm rounded-3xl mb-24">
      <div className="text-center mb-8">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-primary/60">
          Strategic Technical Stack
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {partners.map((partner) => (
          <div key={partner.name} className="flex flex-col items-center">
            <span className="text-xl md:text-2xl font-bold tracking-tighter text-foreground">
              {partner.name}
            </span>
            <span className="text-[10px] uppercase tracking-tighter text-foreground/40 font-mono">
              {partner.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
