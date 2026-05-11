import { Tooltip, TooltipContent, TooltipTrigger } from "./shadcn/tooltip";

import Image from "next/image";

type CompanyBadgeProps = {
  url: string;
  icon: string;
  label: string;
  iconOnly?: boolean;
};

const CompanyBadge = ({
  icon,
  label,
  url,
  iconOnly = false,
}: CompanyBadgeProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary-foreground inline-flex items-center gap-1.5 rounded-sm text-[10px] font-medium"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Image
            src={icon}
            width={16}
            height={16}
            className="rounded-xs object-cover"
            alt={label}
          />
          {!iconOnly && <span>{label}</span>}
        </a>
      </TooltipTrigger>
      <TooltipContent>Built at {label}</TooltipContent>
    </Tooltip>
  );
};

export default CompanyBadge;
