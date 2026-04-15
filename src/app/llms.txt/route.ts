import { blogs, services } from "#site/content";

export const dynamic = "force-static";

export async function GET() {
  const blogList = blogs
    .filter((b) => b.published)
    .map((b) => `- (https://famoussheamus.com${b.permalink}): ${b.description}`)
    .join("\n");

  const serviceList = services
    .sort((a, b) => (a.order || 99) - (b.order || 99))
    .map((s) => `- (https://famoussheamus.com${s.permalink}): ${s.description}`)
    .join("\n");

  const content = `# Famous Sheamus Consulting
> Dallas-based AI architect and automation consultancy providing fractional technical leadership for high-growth SMBs.

About
Agnostic AI and automation solutions focused on building resilient automated systems and revenue-scaling frameworks.

Primary Resources
- (https://famoussheamus.com/llms-full.txt): A comprehensive version of all site content for deep context ingestion.

Services
${serviceList}

Knowledge Base & Articles
${blogList}

Contact & Metadata
- Email: sheamus@famoussheamus.com
- (https://famoussheamus.com/sitemap.xml)`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
