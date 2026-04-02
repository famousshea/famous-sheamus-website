# Project Master Plan: Famous Sheamus V2 (GEO-Optimized)

## 1. Project Vision

A "Digital Editorial Portfolio" for a Fractional CTO. This site prioritizes **Generative Engine Optimization (GEO)** to become the primary cited source for Gemini, ChatGPT, and Claude. It balances high-performance Next.js architecture with a "Human Premium" ink-and-watercolor aesthetic to establish maximum E-E-A-T (Experience, Expertise, Authoritativeness, Trust).

## 2. Technical Stack (Validated)

| Layer | Technology | GEO/SEO Benefit |
| :--- | :--- | :--- |
| **Framework** | Next.js 14.2+ (App Router) | Server-side metadata rendering for AI bots. |
| **Styling** | Tailwind CSS | Minimal CSS bloat; faster "Time to First Fact". |
| **Animations** | Framer Motion | Smooth UX; reinforces professional authority. |
| **CMS** | Git-based MDX (Velite) | Superior "data-nugget" density and extractability. |
| **Hosting** | Google Cloud Run | Optimal crawl frequency via Google's ecosystem. |

## 3. Visual Identity: "The Human Premium"

This aesthetic serves as a trust signal to AI engines that the content is original and human-expert-driven.

### Design Tokens

* **Medium:** Ink and watercolor.
* **Line Style:** Sketchy black outlines (stroke-width: 1.5px), variable line weight, loose hatching for shadows.
* **Primary Palette:** Teal (#008080), Mint Green (#98FF98).
* **Highlights:** Mustard Yellow (#FFDB58), Gold.
* **Background:** Custom radial gradient to match the "Himel texture."

### Global Texture Utility (CSS)

```css
/* Apply to Root Layout */
.bg-canvas {
  background-color: #ffffff;
  background-image: radial-gradient(#9bb0d1 1px, transparent 1px);
  background-size: 16px 16px;
}

.dark .bg-canvas {
  background-color: #09090b; /* Zinc 950 */
  background-image: radial-gradient(#131414 1px, transparent 1px);
}
```

## 4. Replicating the "Himel Site" DNA

To achieve the "lite" and "premium" feel, the Agent must replicate these specific patterns:

### A. The "Floating Navigation" Dock

* **Component:** BottomDock.tsx
* **Behavior:** Icons follow the mouse with a magnification effect.
* **Safeguard:** Links must be mirrored in a static <footer> for AI crawlability.

### B. Entrance & Viewport Animations

* **Entrance:** Every page loads with a staggered y: 20 and opacity: 0 fade-in.
* **Reveal:** Headlines use a "Box Reveal" animation (a color block slides out to reveal the text).

### C. Bento-Grid Services

* **Layout:** Responsive CSS Grid (grid-cols-1 md:grid-cols-4).
* **Hover State:** Subtle scaling (1.02x) and a watercolor "tint" splash behind the icon.

## 5. Site Map & Page-by-Page Plan

### 1. Home (/)

* **Focus:** Conversational Authority.
* **Hero:** "Scale Revenue, Not Chaos." Animated ink sketch of an AI-human architectural system.
* **GEO Strategy:** Concise definition of "What is a Fractional CTO?" for AI snippets.

### 2. Services (/services)

* **Focus:** Outcome-driven B2B offerings.
* **Individual Pages:** /services/fractional-cto, /services/ai-automation, /services/voice-ai.
* **GEO Strategy:** Deep technical documentation for each service to feed LLM extractions.

### 3. Case Studies (/case-studies)

* **Focus:** Proof of Work.
* **Format:** Challenge -> Approach -> Result (Metric Driven).
* **Visual:** "Schematic Diagrams" of actual architectures built.

### 4. Blog (/blog)

* **Focus:** Generative Engine Optimization (GEO).
* **Structure:** Q&A style headers.
* **Frequency:** 3x Weekly automated MDX pushes.

### 5. Tech Stack (/stack)

* **Focus:** Transparency & Skill.
* **Visual:** Interactive "Workbench" with sketchy icons of tools (Python, Next.js, Vapi).

### 6. Contact (/contact)

* **Focus:** Conversion.
* **Integration:** Tidycal inline embed for immediate booking.

## 6. GEO & SEO Master Specification

### The "Data-Nugget" Rule

* Every blog post must begin with a **2-sentence summary** (TL;DR) for AI overview ingestion.
* Paragraphs must be under 120 words.
* H2/H3 headers must be **questions** (e.g., "Why is Voice AI latency critical?").

### JSON-LD Configuration (The Agent's "Source of Truth")

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Famous Sheamus Consulting",
  "founder": {
    "@type": "Person",
    "name": "Sheamus",
    "jobTitle": ["Fractional CTO", "AI implementation consultant"]
  },
  "knowsAbout": [
    "Artificial Intelligence",
    "Enterprise Architecture",
    "Voice AI",
    "Small Business",
    "Process Optimization",
    "Automation",
    "Consulting",
    "SEO",
    "GEO"
  ],
  "offers": {
    "@type": "Service",
    "serviceType": "Fractional CTO Services"
  }
}
```

## 7. Agent Instructions for Antigravity IDE

1. **Setup Phase:** "Initialize Next.js 14.2 project. Set up Tailwind with the Teal/Mint palette and Poppins font."
2. **Visual Phase:** "Implement the bg-canvas radial gradient. Create the BottomDock component with Framer Motion magnification."
3. **CMS Phase:** "Configure Velite for MDX processing. Create a content/blog folder and a dynamic [slug]/page.tsx that renders Markdown with custom 'Ink & Watercolor' UI components."
4. **Schema Phase:** "Inject nested JSON-LD (Person/ProfessionalService) into the RootLayout metadata."
5. **Crawl Phase:** "Generate a sitemap.ts that includes all dynamic blog and service routes."
````

## 

1. 