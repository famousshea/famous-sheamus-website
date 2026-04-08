import { notFound } from "next/navigation";
import { services } from "#site/content";
import { MDXContent } from "@/components/mdx-content";
import { TopNav } from "@/components/TopNav";
import { ContactBadge } from "@/components/ContactBadge";
interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug.split("/").pop(),
  }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((service) => service.slug.split("/").pop() === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-48 px-4 overflow-hidden relative">
      <TopNav />
      <ContactBadge />
      <article className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
        <header className="mb-12 border-b border-black/10 dark:border-white/10 pb-8 relative">
          <div className="absolute -left-16 -top-16 w-32 h-32 bg-primary/20 rounded-full blur-[60px]" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 relative z-10">{service.title}</h1>
          <p className="text-xl text-foreground/70">{service.description}</p>
        </header>

        <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-primary max-w-none">
          <MDXContent code={service.body} />
        </div>
      </article>
    </main>
  );
}
