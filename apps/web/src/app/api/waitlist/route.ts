import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const waitlistSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Enter a valid email address.")
    .max(254, "Enter a valid email address."),
  // Honeypot field: humans never see it, bots tend to fill it.
  company: z.string().optional(),
});

function confirmationHtml(): string {
  return `
    <div style="font-family: -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px 24px; color: #18181b;">
      <h1 style="font-size: 20px; margin: 0 0 16px;">You're on the PayShroud waitlist</h1>
      <p style="font-size: 15px; line-height: 1.6; margin: 0 0 12px;">
        Thanks for signing up. PayShroud is privacy-first payments for the modern web —
        and you'll be among the first to know when we launch.
      </p>
      <p style="font-size: 15px; line-height: 1.6; margin: 0 0 24px;">
        One email at launch. No spam, no sharing your address. That's rather the point.
      </p>
      <p style="font-size: 13px; color: #71717a; margin: 0;">
        PayShroud — a Divinital venture
      </p>
    </div>
  `;
}

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const parsed = waitlistSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const { email, company } = parsed.data;

  // A filled honeypot means a bot: report success, store nothing.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[waitlist] Resend not configured; would have subscribed: ${email}`);
      return NextResponse.json({ ok: true });
    }
    console.error("[waitlist] RESEND_API_KEY and/or RESEND_AUDIENCE_ID are not set.");
    return NextResponse.json(
      { error: "The waitlist is temporarily unavailable. Please try again soon." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  const contact = await resend.contacts.create({
    audienceId,
    email,
    unsubscribed: false,
  });

  if (contact.error) {
    // An existing contact is a success from the visitor's perspective.
    const isDuplicate = /already exists/i.test(contact.error.message);
    if (!isDuplicate) {
      console.error(`[waitlist] Failed to add contact: ${contact.error.message}`);
      return NextResponse.json(
        { error: "We couldn't add you right now. Please try again soon." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  }

  const from = process.env.RESEND_FROM_EMAIL;
  if (from) {
    const sent = await resend.emails.send({
      from,
      to: email,
      subject: "You're on the PayShroud waitlist",
      html: confirmationHtml(),
    });
    if (sent.error) {
      // The signup itself succeeded; a failed confirmation email shouldn't surface as an error.
      console.error(`[waitlist] Confirmation email failed: ${sent.error.message}`);
    }
  }

  return NextResponse.json({ ok: true });
}
