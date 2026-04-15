import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://famoussheamus.com'),
  title: {
    default: "Famous Sheamus | AI Implementation Consultant & Fractional CTO",
    template: "%s | Famous Sheamus Consulting"
  },
  description: "Scale Revenue, Not Chaos. Dallas-based AI architect building resilient automated systems and providing fractional technical leadership for high-growth SMBs.",
  keywords: ["Fractional CTO Dallas", "AI Implementation Consultant", "n8n workflow architect", "Voice AI for Home Services", "automation business scaling"],
  // Favicon configuration
  icons: {
    icon: "/images/logo-blue-wash.png",
    shortcut: "/images/logo-blue-wash.png",
    apple: "/images/logo-blue-wash.png",
  },
  // Open Graph (Thumbnail) configuration
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://famoussheamus.com',
    siteName: 'Famous Sheamus Consulting',
    title: 'Famous Sheamus | Fractional CTO & AI Strategy',
    description: 'Scale Revenue, Not Chaos. Agnostic AI and automation solutions for high-growth SMBs.',
    images: [
      {
        url: '/images/og-main.png', // Thumnail image
        width: 1200,
        height: 630,
        alt: 'Famous Sheamus Consulting - Scale Revenue, Not Chaos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Famous Sheamus | Fractional CTO',
    description: 'Decoupling revenue from headcount with agnostic AI infrastructure.',
    images: ['/images/og-main.png'],
  },
};

// Nested JSON-LD for superior AI indexing
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Famous Sheamus Consulting",
  "alternateName": "Famous Sheamus",
  "@id": "https://famoussheamus.com/#organization",
  "url": "https://famoussheamus.com",
  "logo": "https://famoussheamus.com/images/logo-blue-wash.png",
  "image": "https://famoussheamus.com/images/og-main.png",
  "sameAs": [
    "https://www.linkedin.com/in/sheamus-byrne/",
    "https://x.com/famousshea",
    "https://github.com/famousshea",
    "https://www.reddit.com/user/FamousSheamusAI/"
  ],
  "description": "Dallas-based AI architect and Fractional CTO building resilient automated systems and providing technical leadership for high-growth SMBs.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dallas",
    "addressRegion": "TX",
    "postalCode": "75201",
    "addressCountry": "US"
  },
  "founder": {
    "@type": "Person",
    "@id": "https://famoussheamus.com/#sheamus",
    "name": "Sheamus",
    "jobTitle": ["Fractional CTO", "Automation Strategist"],
    "url": "https://famoussheamus.com/about"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Worldwide"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://famoussheamus.com/contact"
  },
  "knowsAbout": [
    "Artificial Intelligence",
    "Enterprise Architecture",
    "n8n Automation",
    "Voice AI Receptionists",
    "Process Optimization",
    "SaaS Bloat Reduction",
    "AI Implementation Consultant",
    "Fractional CTO",
    "Business Process Automation",
    "Predictive Analytics",
    "Legacy System Migration"
  ],
  "offers": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Fractional CTO & Automation Strategy",
      "description": "High-level technology leadership and AI implementation strategy to decouple revenue growth from headcount."
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans min-h-screen bg-canvas text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-MDF6DDLEE0`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MDF6DDLEE0');
          `}
        </Script>
      </body>
    </html>
  );
}