const NEO_FETCH_ART = `
 ___      ___
|\\  \\    /  /|
\\ \\  \\  /  / /
 \\ \\  \\/  / /
  \\ \\    / /
   \\ \\__/ /
    \\|__|/
`;
const NEO_FETCH_TEXT = `

name:      Vignesh G
role:      Full-Stack Developer
stack:     React · Next.js · Node
focus:     Web apps & clean UI
status:    Open to interesting work
`;

const Terminal = () => {
  return (
    <div
      role="presentation"
      className="dark:bg-secondary/50 mx-auto w-full max-w-130 overflow-hidden rounded-lg bg-white text-sm shadow-lg"
    >
      <div className="border-border/50 relative flex items-center border-b px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>

        <p className="text-muted-foreground absolute left-1/2 -translate-x-1/2 text-xs">
          vignesh.dev - terminal{" "}
        </p>
      </div>
      <div className="scrollbar-minimal aspect-video space-y-4 overflow-auto p-4 font-mono text-sm">
        <div className="flex flex-wrap">
          <pre className="text-primary mr-10 text-xs leading-tight">
            {NEO_FETCH_ART}
          </pre>

          <pre className="text-xs leading-tight">{NEO_FETCH_TEXT}</pre>
        </div>

        <p className="text-muted-foreground mt-2 w-full text-xs">
          Type <span className="text-green-400">help</span> to see available
          commands.
        </p>
        <div className="space-y-1">
          <div className="flex gap-3">
            <p>
              <span className="text-primary/90">vicky@portfolio</span>:~$
            </p>
            <span className="bg-primary animate-caret-blink inline-block w-2"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
