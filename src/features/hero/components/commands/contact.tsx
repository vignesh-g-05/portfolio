import { siteConfig } from "@/configs/site";

const Contact = () => {
  return (
    <div className="space-y-3">
      <p className="text-primary font-bold">Let&apos;s Work Together!</p>

      <div className="space-y-2 text-xs">
        {siteConfig.contacts.map((info) => (
          <div key={info.label} className="flex items-center gap-3">
            <info.Icon className="text-chart-3 size-4" />

            <span className="text-chart-4 w-20">{info.label}</span>

            <a
              href={info.href}
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
