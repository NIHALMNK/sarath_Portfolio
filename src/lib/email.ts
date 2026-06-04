import { resend } from "./resend";

export interface EmailOptions {
  to: string;
  from: string;
  subject: string;
  html: string;
  text: string;
}

export interface EmailProvider {
  sendEmail(options: EmailOptions): Promise<{ success: boolean; error?: string }>;
}

export interface ApplicationPayload {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  challenge: string;
  timestamp: string;
}

// 1. Resend Provider Implementation
export class ResendEmailProvider implements EmailProvider {
  async sendEmail(options: EmailOptions) {
    if (!resend) {
      console.error("Resend SDK client not initialized (RESEND_API_KEY may be missing).");
      return { success: false, error: "Resend SDK client not initialized." };
    }

    try {
      const { data, error } = await resend.emails.send({
        from: options.from,
        to: options.to,
        subject: options.subject,
        html: options.html,
        text: options.text,
      });

      if (error) {
        console.error("Resend SDK Send Error:", error);
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (err) {
      console.error("Resend Provider Exception:", err);
      return { success: false, error: err instanceof Error ? err.message : String(err) };
    }
  }
}

// 2. Brevo Provider Placeholder (Future Ready)
export class BrevoEmailProvider implements EmailProvider {
  async sendEmail(options: EmailOptions) {
    // In the future, this would make an HTTP call to Brevo's SMTP/Transactional email endpoint.
    console.log("[Brevo Email Provider Simulation] Sending email:", {
      from: options.from,
      to: options.to,
      subject: options.subject,
    });
    // For now, simulate success
    return { success: true };
  }
}

// 3. SMTP Provider Placeholder (Future Ready)
export class SmtpEmailProvider implements EmailProvider {
  async sendEmail(options: EmailOptions) {
    // In the future, this would use a library like nodemailer to dispatch emails via SMTP.
    console.log("[SMTP Email Provider Simulation] Sending email:", {
      from: options.from,
      to: options.to,
      subject: options.subject,
    });
    // For now, simulate success
    return { success: true };
  }
}

// Dynamic Provider Factory
class EmailService implements EmailProvider {
  private activeProvider: EmailProvider;

  constructor() {
    const providerType = (process.env.EMAIL_PROVIDER || "resend").toLowerCase();
    switch (providerType) {
      case "brevo":
        this.activeProvider = new BrevoEmailProvider();
        break;
      case "smtp":
        this.activeProvider = new SmtpEmailProvider();
        break;
      case "resend":
      default:
        this.activeProvider = new ResendEmailProvider();
        break;
    }
  }

  async sendEmail(options: EmailOptions) {
    return this.activeProvider.sendEmail(options);
  }
}

export const emailService = new EmailService();

// Email Templates
export function generateAdminEmail(payload: ApplicationPayload): { subject: string; html: string; text: string } {
  const subject = `New Strategy Application - ${payload.name}`;
  const html = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eaeaea; border-radius: 12px; background-color: #ffffff;">
      <h2 style="color: #111111; font-size: 20px; font-weight: bold; border-bottom: 2px solid #D4AF37; padding-bottom: 12px; margin-top: 0;">
        New Founder Application Submitted
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tbody>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; font-size: 14px; color: #666666; width: 140px; border-bottom: 1px solid #f4f4f4;">Full Name:</td>
            <td style="padding: 10px 0; font-size: 14px; color: #111111; border-bottom: 1px solid #f4f4f4;">${payload.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; font-size: 14px; color: #666666; border-bottom: 1px solid #f4f4f4;">Email:</td>
            <td style="padding: 10px 0; font-size: 14px; border-bottom: 1px solid #f4f4f4;">
              <a href="mailto:${payload.email}" style="color: #D4AF37; text-decoration: none; font-weight: 500;">${payload.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; font-size: 14px; color: #666666; border-bottom: 1px solid #f4f4f4;">Phone:</td>
            <td style="padding: 10px 0; font-size: 14px; color: #111111; border-bottom: 1px solid #f4f4f4;">${payload.phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; font-weight: bold; font-size: 14px; color: #666666; border-bottom: 1px solid #f4f4f4;">LinkedIn:</td>
            <td style="padding: 10px 0; font-size: 14px; border-bottom: 1px solid #f4f4f4;">
              <a href="${payload.linkedin}" target="_blank" rel="noopener noreferrer" style="color: #D4AF37; text-decoration: none; font-weight: 500;">${payload.linkedin}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 14px 0 6px 0; font-weight: bold; font-size: 14px; color: #666666; vertical-align: top;" colspan="2">Growth Challenge:</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; font-size: 14px; color: #333333; background-color: #f7f7f7; border-radius: 6px; border-left: 3px solid #D4AF37; white-space: pre-wrap;" colspan="2">${payload.challenge}</td>
          </tr>
          <tr>
            <td style="padding: 16px 0 0 0; font-weight: bold; font-size: 13px; color: #999999; border-top: 1px solid #f4f4f4;" colspan="2">
              Submitted At: ${payload.timestamp}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  const text = `
New Founder Application Submitted

Full Name:
${payload.name}

Email:
${payload.email}

Phone:
${payload.phone}

LinkedIn:
${payload.linkedin}

Growth Challenge:
${payload.challenge}

Submitted At:
${payload.timestamp}
  `.trim();

  return { subject, html, text };
}

export function generateApplicantEmail(payload: ApplicationPayload): { subject: string; html: string; text: string } {
  const subject = `Application Received | Sarath Kumar`;
  const html = `
    <div style="font-family: Arial, sans-serif; color: #333333; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eaeaea; border-radius: 12px; background-color: #ffffff;">
      <h2 style="color: #111111; font-size: 20px; font-weight: bold; border-bottom: 2px solid #D4AF37; padding-bottom: 12px; margin-top: 0;">
        Application Received
      </h2>
      <p style="font-size: 15px; margin-top: 20px;">Hi ${payload.name},</p>
      <p style="font-size: 14px;">Thank you for reaching out and submitting your intake details. This email confirms that your strategy application has been successfully received.</p>
      <p style="font-size: 14px;">I personally review each application within 48 business hours to ensure mutual alignment. If your growth goals and positioning challenges align with the type of consulting engagements I lead, I will reach out to you directly to coordinate a private 1-on-1 strategy conversation.</p>
      <p style="font-size: 14px;">In the meantime, feel free to connect with me and follow my daily operator insights on LinkedIn:</p>
      <p style="margin: 24px 0;">
        <a href="https://linkedin.com/in/sarath-kumar" target="_blank" rel="noopener noreferrer" style="display: inline-block; background-color: #111111; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 13px; border: 1px solid #D4AF37; text-transform: uppercase; letter-spacing: 0.5px;">
          Connect on LinkedIn
        </a>
      </p>
      <p style="font-size: 14px; margin-bottom: 24px;">Thank you again for your interest and for sharing your details.</p>
      <div style="border-top: 1px solid #f4f4f4; padding-top: 16px;">
        <p style="margin: 0; font-weight: bold; font-size: 14px; color: #111111;">Sarath Kumar</p>
        <p style="margin: 0; color: #888888; font-size: 12px;">Founder Brand Strategist & Thought Leadership Consultant</p>
      </div>
    </div>
  `;

  const text = `
Hi ${payload.name},

Thank you for reaching out and submitting your intake details. This email confirms that your strategy application has been successfully received.

I personally review each application within 48 business hours to ensure mutual alignment. If your growth goals and positioning challenges align with the type of consulting engagements I lead, I will reach out to you directly to coordinate a private 1-on-1 strategy conversation.

In the meantime, feel free to connect with me and follow my daily operator insights on LinkedIn:
https://linkedin.com/in/sarath-kumar

Thank you again for your interest and for sharing your details.

Best regards,

Sarath Kumar
Founder Brand Strategist & Thought Leadership Consultant
  `.trim();

  return { subject, html, text };
}

export interface SendApplicationResult {
  success: boolean;
  adminSent: boolean;
  applicantSent: boolean;
  error?: string;
}

// Core dispatcher function
export async function sendApplicationEmails(payload: ApplicationPayload): Promise<SendApplicationResult> {
  const contactEmail = process.env.CONTACT_EMAIL || "content.sarath@gmail.com";
  // The verified sender address in Resend (default Sandbox address is onboarding@resend.dev)
  const defaultSender = "onboarding@resend.dev";
  const customSender = process.env.SENDER_EMAIL;
  
  // Format the "from" header based on whether a custom sender is set
  const fromHeader = customSender 
    ? `Sarath Kumar <${customSender}>` 
    : `Sarath Kumar <${defaultSender}>`;

  let adminSent = false;
  let applicantSent = false;

  // 1. Dispatch Admin Notification Email
  try {
    const adminEmail = generateAdminEmail(payload);
    const adminRes = await emailService.sendEmail({
      to: contactEmail,
      from: fromHeader,
      subject: adminEmail.subject,
      html: adminEmail.html,
      text: adminEmail.text,
    });

    if (adminRes.success) {
      adminSent = true;
      console.log("Admin notification sent.");
    } else {
      console.error("Admin notification failed. Details:", adminRes.error);
      return { success: false, adminSent: false, applicantSent: false, error: adminRes.error };
    }
  } catch (error) {
    console.error("Admin notification failed. Exception:", error);
    return {
      success: false,
      adminSent: false,
      applicantSent: false,
      error: error instanceof Error ? error.message : String(error)
    };
  }

  // 2. Dispatch Applicant Confirmation Email (Optional)
  const isSandboxSender = fromHeader.includes("onboarding@resend.dev");

  if (isSandboxSender) {
    console.warn("Applicant confirmation skipped.");
    console.log("Skipping applicant confirmation email in Resend sandbox mode.");
  } else {
    try {
      const applicantEmail = generateApplicantEmail(payload);
      const applicantRes = await emailService.sendEmail({
        to: payload.email,
        from: fromHeader,
        subject: applicantEmail.subject,
        html: applicantEmail.html,
        text: applicantEmail.text,
      });

      if (applicantRes.success) {
        applicantSent = true;
        console.log("Applicant confirmation sent.");
      } else {
        console.warn("Applicant confirmation email failed:", applicantRes.error);
      }
    } catch (error) {
      console.warn("Applicant confirmation email failed:", error);
    }
  }

  return {
    success: true,
    adminSent,
    applicantSent
  };
}
