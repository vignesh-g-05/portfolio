import { projects } from "@/features/projects";
import type { ReactNode } from "react";
import NeoFetch from "../components/neofetch";
type Command = (args?: string[]) => ReactNode;

export const TERMINAL_COMMANDS: Record<string, Command> = {
  clear: () => "__CLEAR__",

  neofetch: () => <NeoFetch />,

  whoami: () => "Vignesh G",

  role: () => "Software Developer @ TechMaxima",

  company: () => (
    <span>
      TechMaxima India Pvt. Limited{" "}
      <a
        href="https://techmaxima.in"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary/80 hover:text-primary"
      >
        (techmaxima.in)
      </a>
    </span>
  ),

  skills: () => <div>ReactJS · NextJS · ExpressJS · TailwindCSS</div>,

  projects: () => (
    <div className="space-y-2 text-sm">
      <div className="space-y-1">
        {projects.map((p, i) => (
          <div key={p.title}>
            <span className="text-primary">
              {i + 1}. {p.title}
            </span>
          </div>
        ))}
      </div>

      <p className="text-muted-foreground pt-1 text-xs">
        Try <span className="text-primary">project &lt;number&gt;</span> to view
        details
      </p>
    </div>
  ),

  project: (args = []) => {
    const index = Number(args[0]);
    if (!index) {
      return `Oops, you didn't say which one! 📓`;
    }

    const project = projects[index - 1];

    if (!project) {
      return "Hmm… I can't find that project. Maybe try another?";
    }

    return (
      <div className="space-y-1 text-sm">
        <p className="text-primary">{project.title}</p>

        <p className="text-muted-foreground">{project.description}</p>

        <p>
          <span className="text-muted-foreground">stack:</span>{" "}
          <span className="text-primary/90">{project.skills.join(" · ")}</span>
        </p>
      </div>
    );
  },

  contact: () => (
    <div className="space-y-1 text-sm">
      <div>
        <span className="text-muted-foreground">email</span>{" "}
        <a
          href="mailto:vicky2805vky"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary/80 hover:text-primary"
        >
          vicky2805vky@gmail.com
        </a>
      </div>

      <div>
        <span className="text-muted-foreground">linkedin</span>{" "}
        <a
          href="https://linkedin.com/-vignesh-g"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary/80 hover:text-primary"
        >
          linkedin.com/-vignesh-g
        </a>
      </div>

      <div>
        <span className="text-muted-foreground">github</span>{" "}
        <a
          href="https://github.com/vignesh-g-05"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary/80 hover:text-primary"
        >
          github.com/vignesh-g-05
        </a>
      </div>
    </div>
  ),

  echo: (args = []) => {
    const text = args.join(" ").toLowerCase();

    if (!text) {
      const messages = [
        "no input.",
        "silence...",
        "nothing in, nothing out.",
        "still waiting...",
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    }

    if (text === "hello") return "hello.";
    if (text.startsWith("how are you")) return "doing well. you?";
    if (text.startsWith("who are you")) return "just a terminal... or am I?";
    if (text.includes("vignesh")) return "that's me.";

    return args.join(" ");
  },

  help: () => {
    const commands = Object.keys(TERMINAL_COMMANDS).filter(
      (cmd) => !["help", "clear"].includes(cmd),
    );

    return (
      <div className="space-y-1 text-sm">
        <p className="text-muted-foreground">Available commands:</p>

        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {commands.map((cmd) => (
            <span key={cmd} className="text-primary/90 flex items-center">
              <span className="text-muted-foreground mr-1">•</span> {cmd}
            </span>
          ))}
        </div>
      </div>
    );
  },
};
