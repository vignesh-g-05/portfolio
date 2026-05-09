import { siteConfig } from "@/configs/site";
import NavItem from "./nav-item";

const Navigation = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-6 text-sm font-medium">
        {siteConfig.navLinks.map(({ href, label }) => (
          <NavItem key={label} label={label} href={href} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
