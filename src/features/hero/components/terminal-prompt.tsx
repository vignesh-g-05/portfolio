import { type Dispatch, type SetStateAction, useRef } from "react";

import { PROMPT_COMPONENT } from "../constants/ui";
import { type History } from "./terminal";
import { TERMINAL_COMMANDS } from "../constants/terminal-commands";

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
    <div className="group relative space-y-1" onClick={() => {}}>
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

            const output = command
              ? command(args)
              : `command not found: ${cmd}.`;

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
        {PROMPT_COMPONENT}
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
