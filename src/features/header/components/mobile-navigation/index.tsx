import { Menu, X } from "lucide-react";
import { useState } from "react";
import MobileNavbar from "./mobile-navbar";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="text-primary md:hidden [&>svg]:size-5"
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {open ? <X /> : <Menu />}
      </button>
      <MobileNavbar open={open} />
    </>
  );
};

export default MobileNavigation;
