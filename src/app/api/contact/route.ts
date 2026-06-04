import { NextRequest, NextResponse } from "next/server";
import { saveContactSubmission } from "@/lib/contact";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, linkedin, role, companySize, challenge } = body;

    // Qualify inputs
    if (!name || !email || !linkedin || !role || !companySize || !challenge) {
      return NextResponse.json(
        { message: "Qualifying parameters missing. Please complete all fields." },
        { status: 400 }
      );
    }

    // Save to abstracted contact pipeline handler
    const success = await saveContactSubmission({
      name,
      email,
      linkedin,
      role,
      companySize,
      challenge
    });

    if (success) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Pipeline storage failure. Please try again." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("API contact handler error:", error);
    return NextResponse.json(
      { message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
