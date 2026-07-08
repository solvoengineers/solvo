import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Brand + site (change these to restyle both emails)
const BRAND_BLUE = "#0273bd";
const SITE_URL = "https://solvoengineers.com";
// Logo shown in the email header (add this file to public/images — see notes)
const LOGO_SRC = "https://solvoengineers.com/images/email-logo.png";

// Escapes anything the visitor typed so it can't inject HTML into the emails
function escapeHtml(input: string): string {
  return input
    .split("&")
    .join("&amp;")
    .split("<")
    .join("&lt;")
    .split(">")
    .join("&gt;")
    .split('"')
    .join("&quot;")
    .split("'")
    .join("&#39;");
}

// One label/value row in the details table
function detailRow(label: string, value: string): string {
  return `
    <tr>
      <td style="font-family:Arial,Helvetica,sans-serif; font-size:14px; color:${BRAND_BLUE}; font-weight:bold; padding:10px 12px 10px 0; border-bottom:1px solid #eef1f4; width:42%; vertical-align:top;">${label}</td>
      <td style="font-family:Arial,Helvetica,sans-serif; font-size:14px; color:#333333; padding:10px 0; border-bottom:1px solid #eef1f4; vertical-align:top;">${
        value || "&mdash;"
      }</td>
    </tr>`;
}

// Wraps body content in the branded shell (header + footer)
function emailShell(bodyHtml: string): string {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin:0; padding:0; background-color:#f4f6f8;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#ffffff; border:1px solid #e6e9ec; border-radius:8px; overflow:hidden;">
            <!-- Header -->
            <tr>
              <td style="background-color:${BRAND_BLUE}; padding:24px 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="background-color:#ffffff; border-radius:10px; padding:8px 12px; vertical-align:middle; line-height:0;">
                      <img src="${LOGO_SRC}" width="70" height="45" alt="" style="display:block; width:70px; height:45px; border:0;" />
                    </td>
                    <td style="padding-left:16px; vertical-align:middle; font-family:Arial,Helvetica,sans-serif; font-size:24px; font-weight:bold; color:#ffffff; letter-spacing:0.3px;">
                      Solvo Engineers
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Body -->
            <tr>
              <td style="padding:32px;">
                ${bodyHtml}
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="background-color:#12232e; padding:28px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="vertical-align:top; padding-bottom:16px;">
                      <p style="margin:0 0 4px; font-family:Arial,Helvetica,sans-serif; font-size:16px; font-weight:bold; color:#ffffff;">Solvo Engineers</p>
                      <p style="margin:0; font-family:Arial,Helvetica,sans-serif; font-size:12px; color:#8fa6b4; letter-spacing:0.3px;">CFD consultation firm</p>
                    </td>
                    <td align="right" style="vertical-align:top; padding-bottom:16px;">
                      <a href="${SITE_URL}" style="font-family:Arial,Helvetica,sans-serif; font-size:13px; color:#4aa3dd; text-decoration:none; font-weight:bold;">solvoengineers.com</a>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" style="border-top:1px solid #24404f; padding-top:14px;">
                      <p style="margin:0; font-family:Arial,Helvetica,sans-serif; font-size:11px; color:#5f7688;">&copy; 2026 Solvo Engineers. All rights reserved.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const lookingFor = (formData.get("lookingFor") as string) || "";
    const fullName = (formData.get("fullName") as string) || "";
    const services = (formData.get("services") as string) || "";
    const email = (formData.get("email") as string) || "";
    const software = (formData.get("software") as string) || "";
    const budget = (formData.get("budget") as string) || "";
    const message = (formData.get("message") as string) || "";
    const requiresNDA = formData.get("requiresNDA") === "true";
    const file = formData.get("file") as File | null;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS;
    const recipientEmail = "contact@solvoengineers.com";

    if (!gmailUser || !gmailPass) {
      console.error("Missing Gmail credentials in environment variables");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    if (!recipientEmail) {
      console.error("Missing RECIEVER_MAIL in environment variables");
      return NextResponse.json(
        { error: "Recipient email not configured" },
        { status: 500 }
      );
    }

    // Build the attachment (with a 10 MB limit, matching the form)
    const attachments: { filename: string; content: Buffer }[] = [];
    if (file && file.size > 0) {
      const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: "File must be under 10 MB." },
          { status: 400 }
        );
      }
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({ filename: file.name, content: buffer });
    }

    // Create the transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    // Escape everything the visitor typed before putting it into HTML
    const safeName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safeLookingFor = escapeHtml(lookingFor);
    const safeServices = escapeHtml(services);
    const safeSoftware = escapeHtml(software);
    const safeBudget = escapeHtml(budget);
    const safeMessage = escapeHtml(message).split("\n").join("<br />");
    const firstName = escapeHtml(fullName.trim().split(" ")[0] || fullName);

    // Shared pieces used by both emails
    const detailsTable = `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:4px;">
        ${detailRow("Full Name", safeName)}
        ${detailRow("Email", safeEmail)}
        ${detailRow("Looking For", safeLookingFor)}
        ${detailRow("Services Needed", safeServices)}
        ${detailRow("Preferable Software", safeSoftware)}
        ${detailRow("Estimated Budget", safeBudget)}
        ${detailRow("Requires NDA", requiresNDA ? "Yes" : "No")}
      </table>`;

    const messageBlock = `
      <p style="font-family:Arial,Helvetica,sans-serif; font-size:14px; color:${BRAND_BLUE}; font-weight:bold; margin:24px 0 8px;">Message</p>
      <div style="font-family:Arial,Helvetica,sans-serif; font-size:14px; color:#333333; line-height:1.7; background-color:#f7f9fb; border-left:4px solid ${BRAND_BLUE}; padding:14px 16px;">${safeMessage}</div>`;

    // ===== Email 1: notification to you (the business) =====
    const fileNote =
      attachments.length > 0
        ? `<p style="font-family:Arial,Helvetica,sans-serif; font-size:13px; color:#8a949e; margin:20px 0 0;">An attachment was included with this inquiry: <strong style="color:#333333;">${escapeHtml(
            file ? file.name : ""
          )}</strong></p>`
        : "";

    const ownerBody = `
      <p style="font-family:Arial,Helvetica,sans-serif; font-size:17px; color:#1a1a1a; font-weight:bold; margin:0 0 4px;">New project inquiry</p>
      <p style="font-family:Arial,Helvetica,sans-serif; font-size:13px; color:#8a949e; margin:0 0 22px;">Submitted through the website contact form</p>
      ${detailsTable}
      ${messageBlock}
      ${fileNote}`;

    await transporter.sendMail({
      from: `Solvo Engineers <${gmailUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New project inquiry from ${fullName}`,
      html: emailShell(ownerBody),
      attachments,
    });

    // ===== Email 2: confirmation to the visitor =====
    const confirmationBody = `
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 16px;">
        <tr>
          <td style="width:30px; height:30px; background-color:#eaf4fb; border:2px solid ${BRAND_BLUE}; border-radius:50%; text-align:center; vertical-align:middle; font-family:Arial,Helvetica,sans-serif; font-size:16px; font-weight:bold; color:${BRAND_BLUE}; line-height:26px;">&#10003;</td>
          <td style="padding-left:12px; vertical-align:middle; font-family:Arial,Helvetica,sans-serif; font-size:19px; color:#1a1a1a; font-weight:bold;">Thank you for reaching out, ${firstName}!</td>
        </tr>
      </table>
      <p style="font-family:Arial,Helvetica,sans-serif; font-size:15px; color:#444444; line-height:1.7; margin:0 0 16px;">
        We&#39;ve received your inquiry and a member of our engineering team will review it and get back to you <strong style="color:${BRAND_BLUE};">within 24 hours</strong>. You&#39;ll be speaking directly with our CAE engineers &mdash; never an account manager.
      </p>
      <p style="font-family:Arial,Helvetica,sans-serif; font-size:15px; color:#444444; line-height:1.7; margin:0 0 22px;">
        For your records, here is a summary of what you sent us:
      </p>
      ${detailsTable}
      ${messageBlock}
      <p style="font-family:Arial,Helvetica,sans-serif; font-size:15px; color:#444444; line-height:1.7; margin:26px 0 2px;">Warm regards,</p>
      <p style="font-family:Arial,Helvetica,sans-serif; font-size:15px; color:#1a1a1a; font-weight:bold; margin:0;">Solvo Engineers</p>`;

    await transporter.sendMail({
      from: `Solvo Engineers <${gmailUser}>`,
      to: email,
      subject: "We have received your inquiry - Solvo Engineers",
      html: emailShell(confirmationBody),
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
