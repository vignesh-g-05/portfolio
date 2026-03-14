const ICON_PATH = "/icons/skills";

export const SKILL_ICONS = {
  react: {
    icon: `${ICON_PATH}/react.svg`,
    label: "React",
  },
  nextjs: {
    icon: `${ICON_PATH}/nextjs.svg`,
    label: "Next.js",
  },
  nodejs: {
    icon: `${ICON_PATH}/nodejs.svg`,
    label: "Node.js",
  },
  express: {
    icon: `${ICON_PATH}/express.svg`,
    label: "Express",
  },
  mongodb: {
    icon: `${ICON_PATH}/mongodb.svg`,
    label: "MongoDB",
  },
  tailwindcss: {
    icon: `${ICON_PATH}/tailwindcss.svg`,
    label: "Tailwind CSS",
  },
  typescript: {
    icon: `${ICON_PATH}/typescript.svg`,
    label: "TypeScript",
  },
  git: {
    icon: `${ICON_PATH}/git.svg`,
    label: "Git",
  },
} as const;

export type Skill = keyof typeof SKILL_ICONS;
