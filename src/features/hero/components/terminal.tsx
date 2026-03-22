import { useEffect, useRef, useState, type ReactNode } from "react";

import { NEO_FETCH_ART, NEO_FETCH_TEXT } from "../constants/ui";
import TerminalHistory from "./terminal-history";
import TerminalPrompt from "./terminal-prompt";

export type History = {
  prompt: string;
  output: ReactNode;
};
const Terminal = () => {
  const [cursor, setCursor] = useState(0);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<History[]>([]);

  const inputEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    inputEndRef.current?.scrollIntoView({
      block: "nearest",
    });
  }, [input, history]);

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
          vignesh.dev - terminal
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
