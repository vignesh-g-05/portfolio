import type { ReactNode } from "react";
import NeoFetch from "./neofetch";
import Help from "./help";
import Whoami from "./whoami";
import Skills from "./skills";
import Projects from "./projects";
import Experience from "./experience";
import Contact from "./contact";

type Command = {
  description: string;
  getOutput: (args?: string[]) => ReactNode;
};

export const TERMINAL_COMMANDS: Record<string, Command> = {
  clear: {
    description: "clear the terminal",
    getOutput: () => "__CLEAR__",
  },

  contact: {
    description: "get in touch",
    getOutput: () => <Contact />,
  },

  echo: {
    description: "print text",
    getOutput: (args) =>
      args
        ?.map((str) => str.trim())
        .filter(Boolean)
        .join(" "),
  },

  experience: {
    description: "work history",
    getOutput: () => <Experience />,
  },

  help: {
    description: "show available commands",
    getOutput: () => <Help />,
  },

  neofetch: {
    description: "portfolio information",
    getOutput: () => <NeoFetch />,
  },

  projects: {
    description: "featured projects",
    getOutput: () => <Projects />,
  },

  skills: {
    description: "technical skills",
    getOutput: () => <Skills />,
  },

  whoami: {
    description: "about me",
    getOutput: () => <Whoami />,
  },
};
