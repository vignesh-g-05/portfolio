import { SKILL_ICONS, type Skill } from "@/constants/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";

type SkillCardProps = {
  icon: Skill;
  color: string;
  category: string;
};

const SkillCard = ({ icon, color, category }: SkillCardProps) => {
  const skill = SKILL_ICONS[icon];
  return (
    <div
      className={cn(
        "group relative flex items-center gap-3 overflow-hidden",
        "border-border bg-secondary rounded-md border px-3.5 py-3",
        "hover:border-foreground/30 transition-all duration-150 hover:-translate-y-px",
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <Image
        src={skill.icon}
        alt={skill.label}
        className={`size-8 rounded-sm p-2 md:size-10 ${color}`}
      />
      <div className="flex flex-col justify-center">
        <p className="text-sm font-medium md:text-base">{skill.label}</p>
        <span className="text-muted-foreground text-xs">{category}</span>
      </div>
    </div>
  );
};

export default SkillCard;
