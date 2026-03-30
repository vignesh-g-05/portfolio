import { Button } from "@/components/ui/shadcn/button";
import { Mail, MessageSquare, User } from "lucide-react";

export default function ContactForm() {
  return (
    <section
      className="scroll-mt-40 space-y-6"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <h2
        id="contact-heading"
        className="font-heading text-2xl font-bold md:text-3xl"
      >
        Contact
      </h2>

      <article className="grid gap-8 md:grid-cols-2">
        <form className="bg-secondary w-full space-y-6 rounded-xl p-8 shadow-lg">
          {/* Name */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="name"
              className="text-muted-foreground flex items-center gap-2 text-xs font-medium transition-colors"
            >
              <User className="size-4 transition-colors" />
              Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="bg-card -focus-within:shadow-[inset_1px_1px_4px_rgba(0,0,0,0.3),inset_-1px_-1px_4px_rgba(255,255,255,0.08)] w-full rounded-md p-3 text-sm shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2),inset_-2px_-2px_6px_rgba(255,255,255,0.05)] transition-all outline-none"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="email"
              className="text-muted-foreground flex items-center gap-2 text-xs font-medium transition-colors"
            >
              <Mail className="size-4 transition-colors" />
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="bg-card -focus-within:shadow-[inset_1px_1px_4px_rgba(0,0,0,0.3),inset_-1px_-1px_4px_rgba(255,255,255,0.08)] w-full rounded-md p-3 text-sm shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2),inset_-2px_-2px_6px_rgba(255,255,255,0.05)] transition-all outline-none"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="message"
              className="text-muted-foreground flex items-center gap-2 text-xs font-medium transition-colors"
            >
              <MessageSquare className="size-4 transition-colors" />
              Message
            </label>

            <textarea
              id="message"
              rows={5}
              placeholder="Write your message..."
              className="bg-card -focus-within:shadow-[inset_1px_1px_4px_rgba(0,0,0,0.3),inset_-1px_-1px_4px_rgba(255,255,255,0.08)] w-full resize-none rounded-md p-3 text-sm shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2),inset_-2px_-2px_6px_rgba(255,255,255,0.05)] transition-all outline-none"
            />
          </div>

          <Button size="sm" className="ml-auto flex">
            Send Message
          </Button>
        </form>
      </article>
    </section>
  );
}
