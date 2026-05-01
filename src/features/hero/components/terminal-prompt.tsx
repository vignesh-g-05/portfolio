import { type Dispatch, type SetStateAction, useRef } from "react";

import { type History } from "./terminal";
import { TERMINAL_COMMANDS } from "./commands";
import PromptComponent from "./prompt-component";

const TerminalPrompt = ({
  input,
  cursor,
  setInput,
  setCursor,
  setHistory,
}: {
  input: string;
  cursor: number;
  setInput: Dispatch<SetStateAction<string>>;
  setCursor: Dispatch<SetStateAction<number>>;
  setHistory: Dispatch<SetStateAction<History[]>>;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="group relative" onClick={() => {}}>
      <input
        ref={inputRef}
        aria-hidden
        className="pointer-events-none absolute -z-10 opacity-0"
        autoFocus
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onSelect={(e) => {
          setCursor(e.currentTarget.selectionStart || 0);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();

            if (!input.trim()) return;

            const [cmd, ...args] = input.trim().split(" ");
            const command = TERMINAL_COMMANDS[cmd];

            const output = command ? (
              command.getOutput(args)
            ) : (
              <p className="text-destructive">
                command not found: {cmd}&nbsp;
                <span className="text-muted-foreground">
                  (type <span className="text-chart-2">help</span> for commands)
                </span>
              </p>
            );

            if (output === "__CLEAR__") {
              setHistory([]);
              setInput("");
              setCursor(0);
              return;
            }

            setHistory((prev) => [...prev, { prompt: input, output }]);

            setInput("");
            setCursor(0);
          }

          if (e.shiftKey) {
            e.preventDefault();
          }
        }}
      />
      <div
        className="leading-relaxed wrap-break-word whitespace-pre-wrap"
        onMouseDown={(e) => {
          e.preventDefault();
          inputRef.current?.focus();
        }}
      >
        <PromptComponent prompt="" />
        {input.split("").map((char, i) => {
          if (i === cursor) {
            return (
              <span key={i} className="group-focus-within:animate-caret w-2">
                {char || " "}
              </span>
            );
          }
          return <span key={i}>{char}</span>;
        })}

        {cursor === input.length && (
          <span className="group-focus-within:animate-caret w-2">&nbsp;</span>
        )}
      </div>
    </div>
  );
};

export default TerminalPrompt;
