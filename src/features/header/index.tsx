import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-transparent px-6 py-3 backdrop-blur-3xl">
      <div className="mx-auto flex max-w-275 items-center justify-between px-5 md:px-8 lg:px-10">
        <p className="bg-primary text-background font-heading grid size-8 place-content-center rounded-sm font-bold">
          V
        </p>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Skills</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">Experience</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </nav>

        {/* Action + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(!open)}
            className="bg-primary text-primary-foreground grid size-8 place-content-center rounded-sm md:hidden [&>svg]:size-4"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="bg-card animate-in slide-in-from-top-4 border-border fixed top-full right-6 z-40 mt-2 w-56 overflow-hidden rounded-md border shadow-lg md:hidden">
          <ul className="text-sm font-medium">
            <li className="hover:bg-secondary cursor-pointer px-4 py-2.5 transition-colors duration-200">
              About
            </li>
            <li className="hover:bg-secondary cursor-pointer px-4 py-2.5 transition-colors duration-200">
              Skills
            </li>
            <li className="hover:bg-secondary cursor-pointer px-4 py-2.5 transition-colors duration-200">
              Projects
            </li>
            <li className="hover:bg-secondary cursor-pointer px-4 py-2.5 transition-colors duration-200">
              Experience
            </li>
            <li className="hover:bg-secondary cursor-pointer px-4 py-2.5 transition-colors duration-200">
              Contact
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
