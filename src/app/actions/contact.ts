"use server";

import { sendMessage } from "@/lib/telegram";
import { validateContactPayload } from "@/validatiors/contact";

export async function sendMessageAction(_: any, formData: FormData) {
  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const message = formData.get("message")?.toString().trim() || "";

  const error = validateContactPayload({ name, email, message });

  if (error)
    return {
      success: false,
      message: error,
    };

  return await sendMessage({ email, message, name });
}
