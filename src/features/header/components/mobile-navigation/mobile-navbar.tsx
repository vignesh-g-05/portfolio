import MobileNavItem from "./mobile-nav-item";
import { NAV_ITEMS } from "../../constant";
import { useEffect } from "react";

const MobileNavbar = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    document.addEventListener("click", onClose);
    return () => {
      document.removeEventListener("click", onClose);
    };
  }, [onClose]);

  if (!open) return null;

  return (
    <nav
      id="mobile-menu"
      role="navigation"
      className="bg-card/95 animate-in fade-in slide-in-from-top-3 border-border/60 fixed top-full right-6 z-40 mt-3 w-60 overflow-hidden rounded-xl border shadow-xl backdrop-blur-md md:hidden"
    >
      <ul className="p-2 text-sm font-medium">
        {NAV_ITEMS.map((item) => (
          <MobileNavItem key={item.label} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavbar;
