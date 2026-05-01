import { useEffect, useRef, useState, type ReactNode } from "react";

import TerminalHistory from "./terminal-history";
import TerminalPrompt from "./terminal-prompt";
import NeoFetch from "./commands/neofetch";
import Help from "./commands/help";

export type History = {
  prompt: string;
  output: ReactNode;
};
const Terminal = () => {
  const [cursor, setCursor] = useState(0);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<History[]>([
    {
      prompt: "__START__",
      output: <NeoFetch />,
    },
    {
      prompt: "__START__",
      output: <Help type="hint" />,
    },
  ]);

  const inputEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    inputEndRef.current?.scrollIntoView({
      block: "nearest",
    });
  }, [input, history]);

  return (
    <div
      role="presentation"
      className="bg-background border-border mx-auto w-full overflow-hidden rounded-lg border text-sm md:block"
      style={{
        boxShadow: `0 0 0 1px var(--border),
                    0 25px 80px rgba(0,0,0,.7),
                    0 0 60px #cb96f923`,
      }}
    >
      <div className="bg-accent border-border relative flex items-center border-b p-4">
        <div className="flex items-center gap-2">
          <span className="bg-destructive size-3 rounded-full" />
          <span className="bg-chart-4 size-3 rounded-full" />
          <span className="bg-chart-3 size-3 rounded-full" />
        </div>

        <p className="text-muted-foreground absolute left-1/2 -translate-x-1/2 text-sm">
          vignesh.dev - terminal
        </p>
      </div>
      <div className="scrollbar-minimal aspect-video space-y-4 overflow-auto p-4 font-mono text-sm">
        <TerminalHistory history={history} />
        <TerminalPrompt
          cursor={cursor}
          input={input}
          setCursor={setCursor}
          setInput={setInput}
          setHistory={setHistory}
        />
        <div ref={inputEndRef}></div>
      </div>
    </div>
  );
};

export default Terminal;
