import { siteConfig } from "@/configs/site";

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
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {siteConfig.contacts.map((contact) => (
              <a
                aria-label={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-border bg-secondary hover:bg-background/60 flex size-10 items-center justify-center rounded-full border transition-colors"
              >
                <contact.Icon className="text-muted-foreground group-hover:text-foreground size-4.5 transition-colors" />
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
