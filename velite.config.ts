import { defineConfig, s } from "velite";

const blogs = {
  name: "Blog",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.path(),
      description: s.string().max(500), // The "2-sentence summary" rule 
      category: s.string().default("Uncategorized"),
      date: s.isodate(),
      published: s.boolean().default(true),
      body: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      permalink: `/blog/${data.slug.split("/").pop()}`,
      filePath: `content/${data.slug}.mdx`,
    })),
};

const services = {
  name: "Service",
  pattern: "services/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.path(),
      description: s.string(),
      isFeatured: s.boolean().default(false),
      order: s.number(),
      icon: s.string().optional(),
      body: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      permalink: `/services/${data.slug.split("/").pop()}`,
      filePath: `content/${data.slug}.mdx`,
    })),
};

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { blogs, services },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
