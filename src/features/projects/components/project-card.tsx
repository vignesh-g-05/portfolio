import CompanyBadge from "@/components/ui/company-badge";
import { COMPANIES, type Company } from "@/constants/companies";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

type ProjectCardProps = {
  title: string;
  description: string;
  company?: Company;
};

const ProjectCard = ({ description, title, company }: ProjectCardProps) => {
  const companyDetails = company ? COMPANIES[company] : null;
  return (
    <motion.article
      initial={{ y: 15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "group relative flex items-center justify-between gap-3 overflow-hidden",
          "border-border bg-secondary rounded-md border p-4 text-left",
        )}
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-3 gap-y-1">
            <h3 className="font-heading font-semibold md:text-lg">{title}</h3>
            {companyDetails && <CompanyBadge {...companyDetails} />}
          </div>
          <p className="text-muted-foreground text-xs md:text-sm">
            {description}
          </p>
        </div>
        <ChevronRight
          aria-hidden
          className="text-muted-foreground/40 group-hover:text-foreground size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </motion.div>
    </motion.article>
  );
};

export default ProjectCard;
