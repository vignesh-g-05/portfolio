import { siteConfig } from "@/configs/site";
import { cn } from "@/lib/utils";
import { ChevronRight, Clock } from "lucide-react";

function Details() {
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="space-y-1">
        <h5 className="font-heading text-foreground text-lg font-bold tracking-tight">
          Let’s connect
        </h5>
        <p className="text-muted-foreground text-[13px] leading-relaxed">
          Open to opportunities and interesting problems. Reach out anytime.
        </p>
      </div>

      {/* Divider */}
      <div className="from-border h-px bg-linear-to-r to-transparent" />

      {/* Contact links */}
      <div className="flex flex-col gap-2">
        {siteConfig.contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={
              contact.href.startsWith("mailto") ||
              contact.href.startsWith("tel")
                ? undefined
                : "_blank"
            }
            rel="noopener noreferrer"
            className={cn(
              "group relative flex items-center gap-3 overflow-hidden",
              "border-border bg-secondary rounded-xl border px-3.5 py-3",
              "hover:border-foreground/30 transition-all duration-150 hover:-translate-y-px",
            )}
          >
            {/* Subtle hover glow */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            {/* Icon */}
            <div className="border-border/60 bg-background/40 group-hover:border-foreground/20 flex size-8.5 shrink-0 items-center justify-center rounded-lg border transition-colors">
              <contact.Icon className="text-muted-foreground group-hover:text-foreground size-3.75 transition-colors" />
            </div>

            {/* Text */}
            <div className="min-w-0 flex-1">
              <p className="text-muted-foreground font-mono text-[10px] tracking-widest uppercase">
                {contact.label}
              </p>
              <p className="text-foreground truncate text-[13px] font-semibold">
                {contact.value}
              </p>
            </div>

            {/* Arrow */}
            <ChevronRight className="text-muted-foreground/40 group-hover:text-foreground size-3.5 shrink-0 transition-all group-hover:translate-x-0.5" />
          </a>
        ))}
        <div
          className={cn(
            "group relative flex items-center gap-3 overflow-hidden",
            "border-border bg-secondary rounded-xl border px-3.5 py-3",
          )}
        >
          {/* Icon */}
          <div className="flex size-8.5 shrink-0 items-center justify-center rounded-lg border border-green-400/20 bg-green-400/10 transition-colors">
            <Clock className="size-3.75 text-green-400" />
          </div>

          {/* Text */}
          <div className="min-w-0 flex-1">
            <p className="text-muted-foreground font-mono text-[10px] tracking-widest uppercase">
              Availability
            </p>
            <p className="text-foreground text-[13px] font-semibold">
              Evenings · 8 PM – 12 AM (IST)
            </p>
          </div>

          {/* Status dot */}
          <span className="relative ml-auto flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-green-400" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Details;
