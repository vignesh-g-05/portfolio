import { SKILL_ICONS } from "@/constants/icons";
import type { Project } from "../../types";

const ProjectSkills = ({ skills }: { skills: Project["skills"] }) => {
  return (
    <>
      <h5 className="text-muted-foreground text-xs font-medium tracking-widest">
        Technologies Used
      </h5>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-2.5">
        {skills.map((skill) => {
          const icon = SKILL_ICONS[skill];

          return (
            <div
              key={skill}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 flex min-w-max items-center gap-1.5 rounded-sm p-2 text-[10px] font-medium transition-colors md:text-xs"
            >
              <img
                src={icon.icon}
                alt=""
                aria-hidden
                className="size-4 opacity-90"
              />
              <span>{icon.label}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ProjectSkills;
