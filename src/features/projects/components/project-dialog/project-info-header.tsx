import ProjectActions from "./project-actions";
import { COMPANIES, type Company } from "@/constants/companies";
import CompanyBadge from "@/components/ui/company-badge";

const ProjectInfoHeader = ({
  title,
  description,
  githubLink,
  liveLink,
  company,
}: {
  title: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
  company?: Company;
}) => {
  const companyDetails = company ? COMPANIES[company] : null;

  return (
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0 space-y-1.5">
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="font-heading text-foreground text-[17px] font-bold tracking-tight">
            {title}
          </h4>
          {companyDetails && <CompanyBadge {...companyDetails} />}
        </div>
        <p className="text-muted-foreground max-w-[42ch] text-[13px] leading-relaxed">
          {description}
        </p>
      </div>
      <ProjectActions
        title={title}
        githubLink={githubLink}
        liveLink={liveLink}
      />
    </div>
  );
};

export default ProjectInfoHeader;
