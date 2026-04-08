import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Famous Sheamus | AI Implementation Consultant & Fractional CTO",
  description: "Global-Remote AI architect building resilient automated systems. Specialized in AI implementation, custom operational workflows, and fractional technical leadership for scaling businesses.",
  keywords: ["AI Implementation Consultant", "Fractional CTO", "Global-Remote Automation", "n8n workflow architect", "enterprise AI strategy", "automation business scaling"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Famous Sheamus",
  "description": "Global AI implementation consultant and Fractional CTO specializing in operational automation and resilient systems architecture.",
  "url": "https://famoussheamus.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Global-Remote",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "founder": {
    "@type": "Person",
    "name": "Sheamus",
    "jobTitle": ["Fractional CTO", "AI Implementation Consultant"]
  },
  "knowsAbout": [
    "Artificial Intelligence",
    "Enterprise Architecture",
    "n8n Automation",
    "Strategic Operations",
    "Scale Engineering",
    "AI Governance"
  ]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans min-h-screen bg-dot-grid text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </ThemeProvider>
        <GoogleAnalytics gaId="G-MDF6DDLEE0" />
      </body>
    </html>
  );
}
