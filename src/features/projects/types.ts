import type { Company } from "@/constants/companies";
import type { Skill } from "@/constants/icons";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  skills: Skill[];
  actions?: {
    liveLink?: string;
    githubLink?: string;
  };
  company?: Company;
};
