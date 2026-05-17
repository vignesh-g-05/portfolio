import Contact from "./contact";
import Experience from "./experience";
import Help from "./help";
import NeoFetch from "./neofetch";
import Open from "./open";
import Projects from "./projects";
import type { ReactNode } from "react";
import Skills from "./skills";
import Whoami from "./whoami";

type Command = {
  description: string;
  getOutput: (args?: string[]) => ReactNode;
};

export const TERMINAL_COMMANDS: Record<string, Command> = {
  help: {
    description: "show available commands",
    getOutput: () => <Help />,
  },

  neofetch: {
    description: "portfolio information",
    getOutput: () => <NeoFetch />,
  },

  whoami: {
    description: "about me",
    getOutput: () => <Whoami />,
  },

  projects: {
    description: "featured projects",
    getOutput: () => <Projects />,
  },

  skills: {
    description: "technical skills",
    getOutput: () => <Skills />,
  },

  experience: {
    description: "work history",
    getOutput: () => <Experience />,
  },

  contact: {
    description: "get in touch",
    getOutput: () => <Contact />,
  },

  open: {
    description: "open project resource",
    getOutput: (args) => <Open projectId={args?.join(" ")} />,
  },

  echo: {
    description: "print text",
    getOutput: (args) =>
      args
        ?.map((str) => str.trim())
        .filter(Boolean)
        .join(" "),
  },

  clear: {
    description: "clear the terminal",
    getOutput: () => "__CLEAR__",
  },
};
