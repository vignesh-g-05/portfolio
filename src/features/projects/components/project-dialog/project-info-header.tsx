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
    <div className="flex justify-between gap-3">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <h4 className="font-bold md:text-lg">{title}</h4>
          {companyDetails && <CompanyBadge {...companyDetails} />}
        </div>
        <p className="text-muted-foreground text-xs md:text-sm">
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
