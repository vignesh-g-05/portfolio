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
    label: "TailwindCSS",
  },
  typescript: {
    icon: `${ICON_PATH}/typescript.svg`,
    label: "TypeScript",
  },
  git: {
    icon: `${ICON_PATH}/git.svg`,
    label: "Git",
  },
  redux: {
    icon: `${ICON_PATH}/redux.svg`,
    label: "Redux",
  },
  firebase: {
    icon: `${ICON_PATH}/firebase.svg`,
    label: "Firebase",
  },
  framer: {
    icon: `${ICON_PATH}/framer.svg`,
    label: "Framer Motion",
  },
  socketio: {
    icon: `${ICON_PATH}/socketio.svg`,
    label: "Socket.io",
  },
  redis: {
    icon: `${ICON_PATH}/redis.svg`,
    label: "Redis",
  },
  gemini: {
    icon: `${ICON_PATH}/gemini.svg`,
    label: "Gemini API",
  },
  neon: {
    icon: `${ICON_PATH}/neon.svg`,
    label: "Neon DB",
  },
  linux: {
    icon: `${ICON_PATH}/linux.svg`,
    label: "Linux",
  },
  bash: {
    icon: `${ICON_PATH}/bash.svg`,
    label: "Bash",
  },
  css: {
    icon: `${ICON_PATH}/css.svg`,
    label: "CSS",
  },
  lua: {
    icon: `${ICON_PATH}/lua.svg`,
    label: "Lua",
  },
} as const;

export type Skill = keyof typeof SKILL_ICONS;
