import { Github, Mail, Phone } from "lucide-react";

import LinkedIn from "@/features/icons/linkedin";

export const siteConfig = {
  name: "Vignesh G",

  role: "Full-Stack Developer",

  description:
    "Full-stack developer specializing in React, with solid experience building backend APIs and real-time features using Express.",

  location: "Tamil Nadu, India",

  company: {
    name: "TechMaxima",
    url: "https://techmaxima.in",
  },

  contacts: [
    {
      label: "Email",
      value: "vignesh.g.2805@gmail.com",
      href: "mailto:vignesh.g.2805@gmail.com",
      Icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/-vignesh-g",
      href: "https://www.linkedin.com/in/-vignesh-g/",
      Icon: LinkedIn,
    },
    {
      label: "GitHub",
      value: "github.com/vignesh-g-05",
      href: "https://github.com/vignesh-g-05/",
      Icon: Github,
    },
  ],

  navLinks: [
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
};
