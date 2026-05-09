import { buttonVariants } from "@/components/ui/shadcn/button";
import { siteConfig } from "@/configs/site";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="border-border/40 mt-24 border-t py-12">
      <div className="mx-auto max-w-5xl px-4">
        {/* CTA (this is what was missing) */}
        <div className="mb-12 space-y-3 text-center">
          <h3 className="font-heading text-xl font-semibold">
            Let’s build something great.
          </h3>
          <p className="text-muted-foreground text-sm">Open to opportunities</p>
        </div>

        {/* Main Footer */}
        <div className="flex flex-col items-center gap-8">
          {/* Name */}
          <h4 className="font-heading text-lg font-semibold">Vignesh G</h4>

          {/* Navigation */}
          <ul className="text-muted-foreground flex flex-wrap justify-center gap-6 text-sm">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "text-muted-foreground rounded-md px-3 py-1.5",
                    "transition-all duration-200",
                    "hover:text-foreground",
                    "hover:[text-shadow:0_0_12px_rgba(255,255,255,0.35)]",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Socials */}
          <div className="flex items-center gap-4">
            {siteConfig.contacts.map((contact) => (
              <a
                key={contact.label}
                aria-label={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "group bg-secondary relative size-10 overflow-hidden rounded-full",
                  "hover:border-foreground/30 transition-all duration-150 hover:-translate-y-px",
                )}
              >
                <span className="pointer-events-none absolute inset-0 bg-linear-to-r from-white/5 to-transparent opacity-0 transition-opacity duration-150 group-hover:opacity-100" />

                <contact.Icon className="group-hover:text-foreground relative z-10 size-4.5 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="text-muted-foreground mt-12 text-center text-xs">
          © {new Date().getFullYear()} Vignesh G. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
