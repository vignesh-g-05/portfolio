import { SKILL_ICONS, type Skill } from "@/constants/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "motion/react";

type SkillCardProps = {
  icon: Skill;
  color: string;
  category: string;
};

const SkillCard = ({ icon, color, category }: SkillCardProps) => {
  const skill = SKILL_ICONS[icon];
  return (
    <motion.div
      initial={{ y: 15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "group relative flex items-center gap-3 overflow-hidden",
          "border-border bg-secondary rounded-md border px-3.5 py-3",
        )}
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <Image
          width={32}
          height={32}
          src={skill.icon}
          alt={skill.label}
          className={`rounded-sm p-2 md:size-10 ${color}`}
        />
        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium md:text-base">{skill.label}</p>
          <span className="text-muted-foreground text-xs">{category}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
