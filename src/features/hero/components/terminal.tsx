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
      className="bg-secondary/50 mx-auto w-full max-w-130 overflow-hidden rounded-lg text-sm shadow-sm"
    >
      <div className="relative flex items-center px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-red-400"></span>
          <span className="size-3 rounded-full bg-yellow-400"></span>
          <span className="size-3 rounded-full bg-emerald-400"></span>
        </div>

        <p className="text-muted-foreground absolute left-1/2 -translate-x-1/2 text-xs">
          vignesh — zsh
        </p>
      </div>
      <div className="scrollbar-minimal | bg-secondary aspect-video space-y-4 overflow-auto p-4 font-mono text-sm">
        <div className="flex flex-wrap items-center">
          <pre className="text-primary text-xs leading-tight">
            {NEO_FETCH_ART}
          </pre>

          <pre className="text-xs leading-tight">{NEO_FETCH_TEXT}</pre>
          <p className="mt-3 text-xs text-gray-400">
            Type <span className="text-green-400">help</span> to see available
            commands.
          </p>
        </div>
        <div className="space-y-1">
          <div className="flex gap-3">
            <p>
              <span className="text-primary/90">vicky@portfolio</span>:~$
            </p>
            <span className="bg-primary animate-caret-blink inline-block w-[1ch]"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
