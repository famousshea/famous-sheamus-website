import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/stack", label: "Tech Stack" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-black/10 dark:border-white/10 mt-20 bg-canvas/50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {links.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm text-foreground/60 hover:text-primary transition-colors">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-foreground/50">
            &copy; {new Date().getFullYear()} Famous Sheamus Consulting. All rights reserved. Fractional CTO & AI Automation.
          </p>
        </div>
      </div>
    </footer>
  );
}
