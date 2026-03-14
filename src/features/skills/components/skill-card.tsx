type SkillCardProps = {
  src: string;
  label: string;
  color: string;
  category: string;
};

const SkillCard = ({ label, src, color, category }: SkillCardProps) => {
  return (
    <div className="bg-card border-border/40 flex items-center gap-2.5 rounded-md border px-3 py-2.5 shadow-md transition-all duration-200 hover:-translate-y-0.5">
      <img
        src={src}
        alt={label}
        className={`size-10 rounded-sm p-2 ${color}`}
      />
      <div className="flex flex-col justify-center">
        <p className="font-medium">{label}</p>
        <span className="text-muted-foreground text-xs">{category}</span>
      </div>
    </div>
  );
};

export default SkillCard;
