"use server";

const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

export async function sendMessageAction(_: any, formData: FormData) {
  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const message = formData.get("message")?.toString().trim() || "";

  for (let [key, value] of Object.entries({ name, email, message })) {
    if (!value) {
      return {
        success: false,
        message: `${key} is required`,
      };
    }
  }

  if (name.length < 3) {
    return {
      success: false,
      message: "name must be atleast 3 characters long",
    };
  }

  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "please enter a valid email",
    };
  }

  return {
    success: true,
    message: "message sent successfully",
  };
}
