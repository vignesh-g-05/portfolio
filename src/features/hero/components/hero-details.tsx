import { buttonVariants } from "@/components/ui/shadcn/button";
import { siteConfig } from "@/configs/site";
import { cn } from "@/lib/utils";
import { BriefcaseBusiness, FileText, Folder, MapPin } from "lucide-react";

const HeroDetails = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="font-heading text-primary text-5xl font-extrabold md:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl">Full-Stack Developer</h2>
        <p className="text-muted-foreground max-w-125 text-sm lg:text-base">
          {siteConfig.description}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-6 text-sm">
        <div className="flex items-center gap-3">
          <MapPin aria-hidden className="size-4" />
          <p>{siteConfig.location}</p>
        </div>
        <div className="flex items-center gap-3">
          <BriefcaseBusiness aria-hidden className="size-4" />
          <p>
            Software Developer at&nbsp;
            <a
              href={siteConfig.company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="decoration-muted-foreground/60 hover:decoration-primary underline underline-offset-4"
            >
              {siteConfig.company.name}
            </a>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <a href="#projects" className={cn(buttonVariants())}>
          <Folder aria-hidden />
          See My Work
        </a>
        <a
          href="/vignesh-g-fullstack-developer-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }), "bg-secondary")}
        >
          <FileText aria-hidden />
          View Resume
        </a>
      </div>

      <div className="border-muted flex items-center gap-3">
        <ContactIcons />
        <p className="text-muted-foreground hidden text-xs md:block">
          <span className="bg-primary mr-2 inline-block size-2 rounded-full"></span>
          Connect with me
        </p>
      </div>
    </div>
  );
};

export default HeroDetails;

const ContactIcons = () => {
  return (
    <div className="border-border flex items-center gap-3 pr-4 md:border-r-2">
      {siteConfig.contacts.map((item) => (
        <a
          key={item.label}
          aria-label={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "shadow-primary bg-secondary size-10 rounded-full hover:shadow-[0_0_10px]",
          )}
        >
          <item.Icon />
        </a>
      ))}
    </div>
  );
};
