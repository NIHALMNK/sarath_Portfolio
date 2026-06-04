import { NextRequest, NextResponse } from "next/server";
import { sendApplicationEmails } from "@/lib/email";

// Helper function to escape HTML characters and prevent HTML injection
function sanitizeHtml(str: string): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, linkedin, challenge, honeypot } = body;

    // 1. SPAM PREVENTION: Honeypot Check
    // If the invisible honeypot field is filled, it's highly likely a bot submission.
    if (honeypot) {
      console.warn("Spam submission blocked via honeypot trap.");
      return NextResponse.json(
        { message: "Spam submission detected and blocked." },
        { status: 400 }
      );
    }

    // 2. SECURITY: Future reCAPTCHA Integration Hook
    // In the future, verify the reCAPTCHA token passed in headers/body:
    // const recaptchaToken = req.headers.get("x-recaptcha-token");
    // const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    // if (!isRecaptchaValid) { return NextResponse.json({ message: "Invalid reCAPTCHA." }, { status: 400 }); }

    // 3. SECURITY: Rate Limiting Preparation Hook
    // In the future, integrate Upstash Redis or memory-based token bucket check:
    // const ip = req.ip || "127.0.0.1";
    // const isRateLimited = await checkRateLimit(ip);
    // if (isRateLimited) { return NextResponse.json({ message: "Too many requests. Please try again later." }, { status: 429 }); }

    // 4. SERVER-SIDE VALIDATION
    // Verify field presence
    if (!name || !email || !phone || !linkedin || !challenge) {
      return NextResponse.json(
        { message: "Qualifying parameters missing. Please complete all fields." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Phone number validation: Minimum 8 digits, Maximum 15 digits
    const cleanedPhone = phone.replace(/\D/g, "");
    if (cleanedPhone.length < 8 || cleanedPhone.length > 15) {
      return NextResponse.json(
        { message: "Phone number must contain between 8 and 15 digits." },
        { status: 400 }
      );
    }

    const phoneRegex = /^\+?[0-9\s\-()]{8,20}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { message: "Phone number contains invalid characters." },
        { status: 400 }
      );
    }

    // Basic LinkedIn URL check
    if (!linkedin.toLowerCase().includes("linkedin.com/")) {
      return NextResponse.json(
        { message: "Please enter a valid LinkedIn profile URL (must contain linkedin.com)." },
        { status: 400 }
      );
    }

    // 5. DATA SANITIZATION
    const sanitizedName = sanitizeHtml(name.trim());
    const sanitizedEmail = email.trim(); // Emails don't need html escaping but need trim
    const sanitizedPhone = sanitizeHtml(phone.trim());
    const sanitizedLinkedin = linkedin.trim(); // URLs don't need html escaping but need trim
    const sanitizedChallenge = sanitizeHtml(challenge.trim());

    // 6. DUAL EMAIL DISPATCH (1 Notification to Admin, 1 Confirmation to Applicant)
    const timestamp = new Date().toISOString();
    const result = await sendApplicationEmails({
      name: sanitizedName,
      email: sanitizedEmail,
      phone: sanitizedPhone,
      linkedin: sanitizedLinkedin,
      challenge: sanitizedChallenge,
      timestamp,
    });

    if (result.success) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      console.error("Email delivery failed:", result.error);
      return NextResponse.json(
        { message: "We couldn't submit your application right now. Please try again or reach out directly via WhatsApp or LinkedIn." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("API contact handler error:", error);
    return NextResponse.json(
      { message: "We couldn't submit your application right now. Please try again or reach out directly via WhatsApp or LinkedIn." },
      { status: 500 }
    );
  }
}
