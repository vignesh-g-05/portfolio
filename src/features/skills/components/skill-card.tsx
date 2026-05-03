import { SKILL_ICONS, type Skill } from "@/constants/icons";

type SkillCardProps = {
  icon: Skill;
  color: string;
  category: string;
};

const SkillCard = ({ icon, color, category }: SkillCardProps) => {
  const skill = SKILL_ICONS[icon];
  return (
    <div className="bg-secondary border-border flex items-center gap-2.5 rounded-md border-2 px-3 py-2.5 shadow-md transition-all duration-200 hover:-translate-y-0.5">
      <img
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
