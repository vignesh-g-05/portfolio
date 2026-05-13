import { ContactPayload } from "@/types/contact";
import { escapeTelegramMarkdown } from "./utils";

export async function sendMessage({ email, message, name }: ContactPayload) {
  try {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const safeName = escapeTelegramMarkdown(name);
    const safeEmail = escapeTelegramMarkdown(email);
    const safeMessage = escapeTelegramMarkdown(message);

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const text = `
*New Contact Form Submission*

*From:* ${safeName}

*Email:* ${safeEmail}

${safeMessage}
`;
    const body = JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: "MarkdownV2",
    });
    console.log(body, botToken);
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    if (response.ok) {
      return { success: true, message: "Message Sent Successfully" };
    } else {
      console.error(await response.json());
      return { success: false, message: "Failed to send message" };
    }
  } catch (error) {
    console.error("Error sending message to telegram: ", error);
    return { success: false, message: "Failed to send message" };
  }
}
