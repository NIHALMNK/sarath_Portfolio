import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey && process.env.NODE_ENV === "production") {
  console.warn("Warning: RESEND_API_KEY environment variable is not defined.");
}

export const resend = apiKey ? new Resend(apiKey) : null;
