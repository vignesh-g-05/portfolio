import { buttonVariants } from "@/components/ui/shadcn/button";
import { cn } from "@/lib/utils";
import {
  BriefcaseBusiness,
  FileText,
  Folder,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
const HeroDetails = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="font-heading text-primary text-5xl font-extrabold md:text-6xl lg:text-7xl">
          Vignesh G
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl">Full-Stack Developer</h2>
        <p className="text-muted-foreground max-w-125 text-xs md:text-sm lg:text-base">
          I build full-stack apps with Next.js, working across UI, APIs, and
          testing. I focus on performance and clean architecture.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-6 text-sm">
        <div className="flex items-center gap-3">
          <MapPin aria-hidden className="size-4" />
          <p>Tamil Nadu, India.</p>
        </div>
        <div className="flex items-center gap-3">
          <BriefcaseBusiness aria-hidden className="size-4" />
          <p>
            Software Developer at&nbsp;
            <a
              href="https://techmaxima.in"
              target="_blank"
              rel="noopener noreferrer"
              className="decoration-muted-foreground/60 hover:decoration-primary underline underline-offset-4"
            >
              TechMaxima
            </a>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <a href="#projects" className={cn(buttonVariants())}>
          <Folder aria-hidden />
          View Projects
        </a>
        <a
          href="/vignesh-g-fullstack-developer-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants())}
        >
          <FileText aria-hidden />
          View Resume
        </a>
      </div>

      <div className="flex items-center gap-3">
        <a
          aria-label="Email"
          href="mailto:gvignesh05@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "sm" }))}
        >
          <Mail />
        </a>

        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/-vignesh-g/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "sm" }))}
        >
          <Linkedin />
        </a>

        <a
          aria-label="GitHub"
          href="https://github.com/vignesh-g-05"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "sm" }))}
        >
          <Github />
        </a>

        <a
          aria-label="Phone"
          href="tel:+91 12345 12345"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "sm" }))}
        >
          <Phone />
        </a>
      </div>
    </div>
  );
};

export default HeroDetails;
