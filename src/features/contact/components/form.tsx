"use client";

import { Mail, MessageSquare, User } from "lucide-react";
import { useActionState, useEffect } from "react";

import { Button } from "@/components/ui/shadcn/button";
import { sendMessageAction } from "@/app/actions/contact";
import toast from "react-hot-toast";

function Form() {
  const [state, action] = useActionState(sendMessageAction, null);
  useEffect(() => {
    if (!state) return;
    const { message, success } = state;
    if (success) {
      toast.success(message);
    } else {
      toast.error(message);
    }
  }, [state]);

  return (
    <form
      action={action}
      method="POST"
      className="bg-secondary w-full space-y-6 rounded-xl p-8 shadow-lg"
    >
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
          name="name"
          required
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
          name="email"
          type="email"
          required
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
          required
          rows={5}
          name="message"
          placeholder="Write your message..."
          className="bg-card -focus-within:shadow-[inset_1px_1px_4px_rgba(0,0,0,0.3),inset_-1px_-1px_4px_rgba(255,255,255,0.08)] w-full resize-none rounded-md p-3 text-sm shadow-[inset_2px_2px_6px_rgba(0,0,0,0.2),inset_-2px_-2px_6px_rgba(255,255,255,0.05)] transition-all outline-none"
        />
      </div>
      <Button size="sm" className="ml-auto flex">
        Send Message
      </Button>
    </form>
  );
}

export default Form;
