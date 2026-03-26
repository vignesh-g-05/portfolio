const Logo = () => {
  return (
    <a
      href="/"
      className="text-primary font-logo group group/logo flex items-center gap-2 text-2xl font-semibold"
    >
      <p className="relative">
        Vicky.dev
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30 blur-xs transition-all duration-300 group-hover/logo:opacity-70"
        >
          Vicky.dev
        </span>
      </p>
    </a>
  );
};

export default Logo;
