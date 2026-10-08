import Link from "next/link";
import { navItems } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-lg font-semibold">{siteConfig.name}</p>
            <p className="mt-2 text-sm text-muted">{siteConfig.tagline}</p>
            <p className="mt-4 max-w-xs text-sm text-subtle">{siteConfig.description}</p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-sm font-semibold text-foreground">Explore</p>
            <ul className="mt-3 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-muted hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold text-foreground">About this site</p>
            <p className="mt-3 text-sm text-subtle">
              Practical information is marked as verified or pending. Always check
              official sources before travelling, as prices, hours and policies can
              change.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm text-subtle">
          <p>
            © 2026 {siteConfig.name}. Independent Shanxi travel guide and data.
          </p>
        </div>
      </div>
    </footer>
  );
}
