const NavItem = ({ href, label }: { label: string; href: string }) => {
  return (
    <li
      key={label}
      className="group relative cursor-pointer transition-all duration-300 ease-out"
    >
      <a
        href={href}
        className="group-hover:text-primary relative z-10 px-2 py-1 transition-colors duration-300"
      >
        {label}
      </a>

      <span className="bg-primary/5 absolute inset-0 rounded-md opacity-0 blur-sm transition-all duration-300 group-hover:opacity-100" />
    </li>
  );
};

export default NavItem;
