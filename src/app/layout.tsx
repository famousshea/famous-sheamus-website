import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Footer } from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Famous Sheamus | AI Implementation Consultant & Fractional CTO",
  description: "Scale Revenue, Not Chaos. Dallas-based AI architect building resilient automated systems and providing fractional technical leadership for high-growth SMBs.",
  keywords: ["Fractional CTO Dallas", "AI Implementation Consultant", "n8n workflow architect", "Voice AI for Home Services", "automation business scaling"],
};

// Nested JSON-LD for superior AI indexing
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Famous Sheamus Consulting",
  "@id": "https://famoussheamus.com/#organization",
  "url": "https://famoussheamus.com",
  "image": "https://famoussheamus.com/logo.png", // Add your logo URL
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
    "jobTitle": ["Fractional CTO", "Automation Strategist"]
  },
  "areaServed": "Worldwide",
  "knowsAbout": [
    "Artificial Intelligence",
    "Enterprise Architecture",
    "n8n Automation",
    "Voice AI Receptionists",
    "Process Optimization",
    "SaaS Bloat Reduction",
    "AI Implementation Consultant",
    "Fractional CTO"
  ],
  "offers": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Fractional CTO & Automation Strategy"
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
        <GoogleAnalytics gaId="G-MDF6DDLEE0" />
      </body>
    </html>
  );
}