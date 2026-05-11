import { CalendarDays, Check, ExternalLink } from "lucide-react";

import Image from "next/image";
import { cn } from "@/lib/utils";

const Experience = () => {
  return (
    <section
      className="scroll-mt-40 space-y-5"
      aria-labelledby="experience-heading"
      id="experience"
    >
      <h2
        id="experience-heading"
        className="font-heading text-2xl font-bold md:text-3xl"
      >
        Experience
      </h2>
      <article className="border-border bg-secondary overflow-hidden rounded-xl border">
        {/* Card header */}
        <div className="flex items-start justify-between gap-4 px-5 py-4">
          <div className="flex items-center gap-3.5">
            <a
              href="https://techmaxima.in"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              <Image
                width={44}
                height={44}
                src="/icons/companies/techmaxima.png"
                alt="TechMaxima logo"
                className="border-border rounded-lg border object-contain md:size-12"
              />
            </a>
            <div className="space-y-0.5">
              <a
                href="https://techmaxima.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group font-heading text-foreground hover:text-primary inline-flex items-center gap-1.5 text-base font-bold transition-colors"
              >
                TechMaxima
                <ExternalLink
                  className="size-3 opacity-40 transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
              </a>
              <p className="text-muted-foreground text-sm">
                Software Developer
              </p>
            </div>
          </div>

          {/* Live badge */}
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1",
              "border-green/30 bg-green/10 font-mono text-[11px] font-medium text-green-400",
              "shrink-0",
            )}
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-green-400" />
            </span>
            Present
          </span>
        </div>

        {/* Divider */}
        <div className="bg-border mx-5 h-px" />

        {/* Card body */}
        <div className="space-y-4 px-5 py-4">
          {/* Period */}
          <div className="text-foreground flex items-center gap-1.5 font-mono text-xs">
            <CalendarDays className="size-3" aria-hidden />
            Jul 2025 – Present
          </div>

          {/* Bullets */}
          <ul className="space-y-2.5">
            {[
              "Developed 2 SaaS applications and a real-time backend service using WebSockets",
              "Refactored complex application logic to improve performance and maintainability",
              "Built and integrated real-time features using Next.js and Socket.IO",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <span
                  className={cn(
                    "mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-md",
                    "bg-primary/10 text-primary",
                  )}
                >
                  <Check className="size-2.5" />
                </span>
                <span className="text-muted-foreground text-sm leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Experience;
