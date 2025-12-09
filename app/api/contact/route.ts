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
		const recipientEmail = process.env.RECIEVER_MAIL;

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

		// Create transporter
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: gmailUser,
				pass: gmailPass,
			},
		});

		// Prepare email content
		const emailSubject = `New Project Inquiry`;
		const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; ">
        <h2 style="margin-bottom: 20px;">New Project Inquiry</h2>
        <p><strong style="color: #0273bd;">Full Name:</strong> ${fullName}</p>
        <p><strong style="color: #0273bd;">Email:</strong> ${email}</p>
        <p><strong style="color: #0273bd;">Looking For:</strong> ${lookingFor || "Not specified"}</p>
        <p><strong style="color: #0273bd;">Services Needed:</strong> ${services || "Not specified"}</p>
        <p><strong style="color: #0273bd;">Preferable Software:</strong> ${software || "Not specified"}</p>
        <p><strong style="color: #0273bd;">Estimated Budget:</strong> ${budget || "Not specified"}</p>
        <p><strong style="color: #0273bd;">Requires NDA:</strong> ${requiresNDA ? "Yes" : "No"}</p>
        <p><strong style="color: #0273bd;">Message:</strong></p>
        <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">${message.replace(/\n/g, "<br>")}</p>
      </div>
    `;

		const mailOptions: any = {
			from: gmailUser,
			to: recipientEmail,
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

		// Send email to recipient
		await transporter.sendMail(mailOptions);

		// Send confirmation email to the form submitter
		const confirmationSubject = "Thank you for contacting Solvo Engineers";
		const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #0273bd; margin-bottom: 20px;">Thank You for Your Inquiry!</h2>
        <p>Dear ${fullName},</p>
        <p>We have successfully received your inquiry and will get back to you within 1 hour. Our team of CAE Engineers account managers will review your request and contact you soon.</p>
        
        <h3 style="color: #0273bd; margin-top: 30px; margin-bottom: 15px;">Your Submission Details:</h3>
        <p><strong style="color: #0273bd;">Full Name:</strong> ${fullName}</p>
        <p><strong style="color: #0273bd;">Email:</strong> ${email}</p>
        <p><strong style="color: #0273bd;">Looking For:</strong> ${lookingFor || "Not specified"}</p>
        <p><strong style="color: #0273bd;">Services Needed:</strong> ${services || "Not specified"}</p>
        <p><strong style="color: #0273bd;">Preferable Software:</strong> ${software || "Not specified"}</p>
        <p><strong style="color: #0273bd;">Estimated Budget:</strong> ${budget || "Not specified"}</p>
        <p><strong style="color: #0273bd;">Requires NDA:</strong> ${requiresNDA ? "Yes" : "No"}</p>
        <p><strong style="color: #0273bd;">Message:</strong></p>
        <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">${message.replace(/\n/g, "<br>")}</p>
        
        <p style="margin-top: 30px;">Best regards,<br><strong>Solvo Engineers Team</strong></p>
      </div>
    `;

		const confirmationMailOptions = {
			from: gmailUser,
			to: email,
			subject: confirmationSubject,
			html: confirmationHtml,
		};

		await transporter.sendMail(confirmationMailOptions);

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

