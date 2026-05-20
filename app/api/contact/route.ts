import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, reason, message } = body;

    if (!name || !email || !reason || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // If RESEND_API_KEY is set, send via Resend. Otherwise log and acknowledge.
    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "justinstrange.com <contact@justinstrange.com>",
          to: process.env.CONTACT_EMAIL || "justin@justinstrange.com",
          reply_to: email,
          subject: `[justinstrange.com] ${reason} from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nReason: ${reason}\n\n${message}`,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        console.error("Resend error:", err);
        return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
      }
    } else {
      // Dev fallback: log to console
      console.log("📬 Contact form submission:", { name, email, reason, message });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
