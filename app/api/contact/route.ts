import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
	try {
		const formData = await request.formData();

		// Extract form fields
		const lookingFor = formData.get("lookingFor") as string;
		const fullName = formData.get("fullName") as string;
		const services = formData.get("services") as string;
		const email = formData.get("email") as string;
		const software = formData.get("software") as string;
		const budget = formData.get("budget") as string;
		const message = formData.get("message") as string;
		const requiresNDA = formData.get("requiresNDA") === "true";
		const file = formData.get("file") as File | null;

		// Validate required fields
		if (!fullName || !email || !message) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 }
			);
		}

		// Get environment variables
		const gmailUser = process.env.GMAIL_USER;
		const gmailPass = process.env.GMAIL_PASS;
		const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || gmailUser;

		if (!gmailUser || !gmailPass) {
			console.error("Missing Gmail credentials in environment variables");
			return NextResponse.json(
				{ error: "Email service not configured" },
				{ status: 500 }
			);
		}

		// Create transporter
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: gmailUser,
				pass: gmailPass,
			},
		});

		// Prepare email content
		const emailSubject = `New Contact Form Submission from ${fullName}`;
		const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Looking For:</strong> ${lookingFor || "Not specified"}</p>
      <p><strong>Services Needed:</strong> ${services || "Not specified"}</p>
      <p><strong>Preferable Software:</strong> ${software || "Not specified"}</p>
      <p><strong>Estimated Budget:</strong> ${budget || "Not specified"}</p>
      <p><strong>Requires NDA:</strong> ${requiresNDA ? "Yes" : "No"}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `;

		const mailOptions: any = {
			from: gmailUser,
			to: "contactus.solvo@gmail.com",
			subject: emailSubject,
			html: emailHtml,
		};

		// Attach file if provided
		if (file && file.size > 0) {
			const buffer = Buffer.from(await file.arrayBuffer());
			mailOptions.attachments = [
				{
					filename: file.name,
					content: buffer,
				},
			];
		}

		// Send email
		await transporter.sendMail(mailOptions);

		return NextResponse.json(
			{ message: "Email sent successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 }
		);
	}
}

