import { siteConfig } from "@/configs/site";

const Whoami = () => {
  return (
    <div className="space-y-3">
      <p className="text-primary font-bold">{siteConfig.name}</p>
      <p className="text-foreground">{siteConfig.role}</p>
      <p className="text-xs">{siteConfig.description}</p>
    </div>
  );
};

export default Whoami;
