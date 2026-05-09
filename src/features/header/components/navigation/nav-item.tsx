import { cn } from "@/lib/utils";

const NavItem = ({ href, label }: { label: string; href: string }) => {
  return (
    <li key={href}>
      <a
        href={href}
        className={cn(
          "text-muted-foreground rounded-md px-3 py-1.5",
          "transition-all duration-200",
          "hover:text-foreground",
          "hover:[text-shadow:0_0_12px_rgba(255,255,255,0.35)]",
        )}
      >
        {label}
      </a>
    </li>
  );
};

export default NavItem;
