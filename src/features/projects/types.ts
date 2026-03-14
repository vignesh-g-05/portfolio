import type { Skill } from "@/constants/icons";

export type Project = {
  title: string;
  description: string;
  image: string;
  skills: Skill[];
};
