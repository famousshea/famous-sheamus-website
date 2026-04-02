import { notFound } from "next/navigation";
import { blogs } from "#site/content";
import { MDXContent } from "@/components/mdx-content";
import { TopNav } from "@/components/TopNav";
import { ContactBadge } from "@/components/ContactBadge";
import { Footer } from "@/components/Footer";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug.split("/").pop(),
  }));
}

export default function BlogPage({ params }: BlogPageProps) {
  const blog = blogs.find((blog) => blog.slug.split("/").pop() === params.slug);

  if (!blog || !blog.published) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-48 px-4 overflow-hidden relative">
      <TopNav />
      <ContactBadge />
      <article className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
        <header className="mb-12 border-b border-black/10 dark:border-white/10 pb-8 relative">
          <div className="absolute -left-16 -top-16 w-32 h-32 bg-primary/20 rounded-full blur-[60px]" />
          <p className="text-primary font-semibold mb-2">{new Date(blog.date).toLocaleDateString()}</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 relative z-10">{blog.title}</h1>
          <div className="bg-canvas-dark text-white/90 p-4 rounded-xl border border-white/10 mb-8 shadow-lg relative">
            <span className="absolute -top-3 -right-3 rotate-12 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded">TL;DR</span>
            <p className="font-medium text-sm leading-relaxed">{blog.summary}</p>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-a:text-primary max-w-none">
          <MDXContent code={blog.body} />
        </div>
      </article>

      <Footer />
    </main>
  );
}
