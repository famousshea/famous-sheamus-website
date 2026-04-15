import { notFound } from "next/navigation";
import { blogs } from "#site/content";
import { MDXContent } from "@/components/mdx-content";
import { TopNav } from "@/components/TopNav";
import { ContactBadge } from "@/components/ContactBadge";

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

export async function generateMetadata({ params }: BlogPageProps) {
  const blog = blogs.find((blog) => blog.slug.split("/").pop() === params.slug);
  if (!blog) return {};

  return {
    alternates: {
      canonical: blog.permalink,
    },
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      url: `https://famoussheamus.com${blog.permalink}`,
      publishedTime: blog.date,
      authors: ["Sheamus"],
      images: [
        {
          url: `https://famoussheamus.com/images/og-main.png`, // Fallback or dynamic image if available
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
    },
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  // Find the blog using the slug
  const blog = blogs.find((blog) => blog.slug.split("/").pop() === params.slug);

  if (!blog || !blog.published) {
    notFound();
  }

  // Generate Article and FAQ Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.description,
    "datePublished": blog.date,
    "author": {
      "@type": "Person",
      "name": "Sheamus",
      "url": "https://famoussheamus.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Famous Sheamus Consulting",
      "logo": {
        "@type": "ImageObject",
        "url": "https://famoussheamus.com/images/logo-blue-wash.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://famoussheamus.com${blog.permalink}`
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-48 px-4 overflow-hidden relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <TopNav />
      <ContactBadge />
      <article className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
        <header className="mb-12 border-b border-black/10 dark:border-white/10 pb-8 relative">
          <div className="absolute -left-16 -top-16 w-32 h-32 bg-primary/20 rounded-full blur-[60px]" />

          <p className="text-primary font-semibold mb-2">
            {new Date(blog.date).toLocaleDateString()}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 relative z-10">
            {blog.title}
          </h1>

          {/* Updated TL;DR Box using 'description' */}
          <div className="relative border-2 border-dashed border-teal-600 p-6 rounded-xl bg-white/50 dark:bg-zinc-900/50 mb-8 shadow-sm">
            <span className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded rotate-12 font-bold shadow-md uppercase tracking-wider">
              TL;DR
            </span>
            <p className="text-gray-700 dark:text-gray-300 italic font-medium leading-relaxed">
              {blog.description} {/* Changed from blog.summary to match your new config */}
            </p>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-a:text-primary max-w-none">
          <MDXContent code={blog.body} />
        </div>
      </article>
    </main>
  );
}