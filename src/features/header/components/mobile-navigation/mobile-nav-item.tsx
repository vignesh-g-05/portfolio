const MobileNavItem = ({ href, label }: { label: string; href: string }) => {
  return (
    <li key={label} className="group relative">
      <a
        href={href}
        className="group-hover:text-primary relative z-10 block px-4 py-2.5 transition-colors duration-300"
      >
        {label}
      </a>

      <span className="bg-primary/5 absolute inset-0 rounded-md opacity-0 transition-all duration-300 group-hover:opacity-100" />

      <span className="bg-primary/60 absolute bottom-1 left-4 h-0.5 w-0 transition-all duration-300 group-hover:w-[calc(100%-2rem)]" />
    </li>
  );
};

export default MobileNavItem;
