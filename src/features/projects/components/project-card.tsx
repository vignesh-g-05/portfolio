import CompanyBadge from "@/components/ui/company-badge";
import { COMPANIES, type Company } from "@/constants/companies";
import { ChevronRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  company?: Company;
};

const ProjectCard = ({ description, title, company }: ProjectCardProps) => {
  const companyDetails = company ? COMPANIES[company] : null;
  return (
    <article className="group bg-card border-border/40 flex cursor-pointer items-center justify-between rounded-md border p-4 text-left shadow-sm">
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
        className="text-muted-foreground transition-transform duration-200 ease-out group-hover:translate-x-1"
      />
    </article>
  );
};

export default ProjectCard;
