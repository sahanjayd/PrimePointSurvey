import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return /^[\d\s\+\-\(\)]{6,20}$/.test(phone.trim());
}

export async function POST(req: NextRequest) {
  let body: Record<string, string>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, email, phone, address, service, preference, date, message } = body;

  if (!name || name.trim().length < 2) {
    return NextResponse.json({ error: 'Please provide your full name.' }, { status: 422 });
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 422 });
  }
  if (!phone || !isValidPhone(phone)) {
    return NextResponse.json({ error: 'Please provide a valid phone number.' }, { status: 422 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.EMAIL_TO ?? 'bookings@primepointsurveying.com.au';
  const from = process.env.EMAIL_FROM ?? 'noreply@primepointsurveying.com.au';

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#1a1a2e;">
      <div style="background:#0d1f3c;padding:28px 32px;border-radius:12px 12px 0 0;">
        <h1 style="margin:0;font-size:1.3rem;color:#fff;">New Inspection Enquiry</h1>
        <p style="margin:6px 0 0;font-size:0.85rem;color:rgba(255,255,255,0.6);">Prime Point Surveying — Website Enquiry</p>
      </div>

      <div style="background:#f8fafc;padding:28px 32px;border:1px solid #e2e8f0;border-top:none;">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:10px 0;font-size:0.85rem;color:#64748b;width:160px;vertical-align:top;">Full Name</td>
            <td style="padding:10px 0;font-size:0.9rem;color:#1a1a2e;font-weight:600;">${name}</td>
          </tr>
          <tr style="border-top:1px solid #e2e8f0;">
            <td style="padding:10px 0;font-size:0.85rem;color:#64748b;vertical-align:top;">Email</td>
            <td style="padding:10px 0;font-size:0.9rem;color:#1a1a2e;">${email}</td>
          </tr>
          <tr style="border-top:1px solid #e2e8f0;">
            <td style="padding:10px 0;font-size:0.85rem;color:#64748b;vertical-align:top;">Phone</td>
            <td style="padding:10px 0;font-size:0.9rem;color:#1a1a2e;">${phone}</td>
          </tr>
          ${address ? `
          <tr style="border-top:1px solid #e2e8f0;">
            <td style="padding:10px 0;font-size:0.85rem;color:#64748b;vertical-align:top;">Property Address</td>
            <td style="padding:10px 0;font-size:0.9rem;color:#1a1a2e;">${address}</td>
          </tr>` : ''}
          ${service ? `
          <tr style="border-top:1px solid #e2e8f0;">
            <td style="padding:10px 0;font-size:0.85rem;color:#64748b;vertical-align:top;">Service Required</td>
            <td style="padding:10px 0;font-size:0.9rem;color:#1a1a2e;">${service}</td>
          </tr>` : ''}
          ${preference ? `
          <tr style="border-top:1px solid #e2e8f0;">
            <td style="padding:10px 0;font-size:0.85rem;color:#64748b;vertical-align:top;">Preferred Contact</td>
            <td style="padding:10px 0;font-size:0.9rem;color:#1a1a2e;">${preference}</td>
          </tr>` : ''}
          ${date ? `
          <tr style="border-top:1px solid #e2e8f0;">
            <td style="padding:10px 0;font-size:0.85rem;color:#64748b;vertical-align:top;">Preferred Date</td>
            <td style="padding:10px 0;font-size:0.9rem;color:#1a1a2e;">${date}</td>
          </tr>` : ''}
          ${message ? `
          <tr style="border-top:1px solid #e2e8f0;">
            <td style="padding:10px 0;font-size:0.85rem;color:#64748b;vertical-align:top;">Message</td>
            <td style="padding:10px 0;font-size:0.9rem;color:#1a1a2e;white-space:pre-wrap;">${message}</td>
          </tr>` : ''}
        </table>
      </div>

      <div style="padding:16px 32px;background:#e2e8f0;border-radius:0 0 12px 12px;font-size:0.78rem;color:#94a3b8;">
        Sent from the Prime Point Surveying website — reply directly to respond to this enquiry.
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New Enquiry from ${name} — Prime Point Surveying`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json(
      { error: 'Failed to send your enquiry. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
