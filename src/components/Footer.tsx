import Link from "next/link";
import { services } from "#site/content";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/stack", label: "Tech Stack" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  // Get all services to list them for bot crawlability
  const footerServices = [...services].sort((a, b) => (a.order || 99) - (b.order || 99));

  return (
    <footer className="w-full border-t border-border mt-20 bg-canvas/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1: Brand & Philosophy */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Famous Sheamus<span className="text-accent">.</span>
            </Link>
            <p className="text-sm text-zinc-500 max-w-xs">
              Fractional CTO services for high-growth SMBs. Decoupling revenue from headcount through agnostic automation.
            </p>
          </div>

          {/* Column 2: Direct Service Links (Critical for GEO) */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.permalink}
                    className="text-sm text-zinc-500 hover:text-accent transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              {mainLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Famous Sheamus Consulting. Scale Revenue, Not Chaos.
          </p>
          <div className="flex space-x-6">
            {/* Add Social Links here if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
}