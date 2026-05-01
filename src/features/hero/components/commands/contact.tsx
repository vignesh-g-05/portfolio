import { Github, Linkedin, Mail } from "lucide-react";

const contactInformations = [
  {
    label: "Email",
    value: "vignesh.g.2805@gmail.com",
    link: `mailto:vignesh.g.2805@gmail.com`,
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/-vignesh-g",
    link: "https://www.linkedin.com/in/-vignesh-g/",
    Icon: Linkedin,
  },
  {
    label: "Github",
    value: "github.com/vignesh-g-05",
    link: "https://github.com/vignesh-g-05/",
    Icon: Github,
  },
];

const Contact = () => {
  return (
    <div className="space-y-3">
      <p className="text-primary font-bold">Let's Work Together!</p>

      <div className="space-y-2">
        {contactInformations.map((info) => (
          <div key={info.label} className="flex items-center gap-3 text-sm">
            <info.Icon className="text-chart-3 size-4" />

            <span className="text-chart-4 w-20">{info.label}</span>

            <a
              href={info.link}
              className="text-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {info.value}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
