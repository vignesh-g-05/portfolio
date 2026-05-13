import { ContactPayload } from "@/types/contact";

const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

export function validateContactPayload({
  name,
  email,
  message,
}: ContactPayload) {
  for (let [key, value] of Object.entries({ name, email, message })) {
    if (!value) return `${key} is required`;
  }

  if (name.length < 3) return "name must be atleast 3 characters long";

  if (!emailRegex.test(email)) return "please enter a valid email";

  return null;
}
