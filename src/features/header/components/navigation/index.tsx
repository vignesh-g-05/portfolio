import { NAV_ITEMS } from "../../constant";
import NavItem from "./nav-item";

const Navigation = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-6 text-sm font-medium">
        {NAV_ITEMS.map((item) => {
          return <NavItem {...item} />;
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
