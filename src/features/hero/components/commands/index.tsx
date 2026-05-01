import type { ReactNode } from "react";
import NeoFetch from "./neofetch";
import Help from "./help";

type Command = {
  description: string;
  getOutput: (args?: string[]) => ReactNode;
};

export const TERMINAL_COMMANDS: Record<string, Command> = {
  clear: {
    description: "clear the terminal",
    getOutput: () => "__CLEAR__",
  },

  echo: {
    description: "print text",
    getOutput: (args) =>
      args
        ?.map((str) => str.trim())
        .filter(Boolean)
        .join(" "),
  },

  help: {
    description: "show available commands",
    getOutput: () => <Help />,
  },

  neofetch: {
    description: "portfolio information",
    getOutput: () => <NeoFetch />,
  },
};
