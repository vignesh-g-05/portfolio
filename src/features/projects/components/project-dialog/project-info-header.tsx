import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/shadcn/tooltip";
import ProjectActions from "./project-actions";
import { COMPANIES, type Company } from "@/constants/companies";

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
          {companyDetails && (
            <Tooltip>
              <TooltipTrigger>
                <a
                  href={companyDetails.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-secondary-foreground inline-flex items-center gap-1.5 rounded-sm px-2 py-1 text-[10px] font-medium"
                >
                  <img
                    src={companyDetails.icon}
                    className="size-4 rounded-xs object-cover"
                    alt={companyDetails.label}
                  />
                  <span>{companyDetails.label}</span>
                </a>
              </TooltipTrigger>
              <TooltipContent>Built at {companyDetails.label}</TooltipContent>
            </Tooltip>
          )}{" "}
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
