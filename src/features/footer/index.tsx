import { Github, Linkedin, Mail, Phone } from "lucide-react";

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
            <a
              aria-label="GitHub"
              href="https://github.com/vignesh-g-05"
              target="_blank"
              rel="noopener noreferrer"
              className="border-border/50 hover:border-primary/40 grid size-10 place-content-center rounded-full border transition-all hover:shadow-[0_0_10px_rgba(79,243,243,0.25)]"
            >
              <Github className="w-5" />
            </a>

            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/-vignesh-g/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-border/50 hover:border-primary/40 grid size-10 place-content-center rounded-full border transition-all hover:shadow-[0_0_10px_rgba(79,243,243,0.25)]"
            >
              <Linkedin className="w-5" />
            </a>

            <a
              aria-label="Email"
              href="mailto:gvignesh05@gmail.com"
              className="border-border/50 hover:border-primary/40 grid size-10 place-content-center rounded-full border transition-all hover:shadow-[0_0_10px_rgba(79,243,243,0.25)]"
            >
              <Mail className="w-5" />
            </a>

            <a
              aria-label="Phone"
              href="tel:+91 12345 12345"
              className="border-border/50 hover:border-primary/40 grid size-10 place-content-center rounded-full border transition-all hover:shadow-[0_0_10px_rgba(79,243,243,0.25)]"
            >
              <Phone className="w-5" />
            </a>
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
