import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
	try {
		const formData = await request.formData();

		// Extract form fields
		const name = formData.get("name") as string;
		const phone = formData.get("phone") as string;
		const education = formData.get("education") as string;
		const currentSalary = formData.get("currentSalary") as string;
		const experience = formData.get("experience") as string;
		const linkedin = formData.get("linkedin") as string;
		const email = formData.get("email") as string;
		const cityCountry = formData.get("cityCountry") as string;
		const software = formData.get("software") as string;
		const companyName = formData.get("companyName") as string;
		const switchReason = formData.get("switchReason") as string;
		const cv = formData.get("cv") as File | null;
		const jobId = formData.get("jobId") as string | null;

		// Validate required fields
		if (!name || !email || !phone || !cv) {
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
		const emailSubject = `Job Application from ${name}${jobId ? ` - Job ID: ${jobId}` : ""}`;
		const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; ">
        <h2 style="color: #0273bd; margin-bottom: 20px;">New Job Application</h2>
        ${jobId ? `<p><strong style="color: #0273bd;">Job ID:</strong> ${jobId}</p>` : ""}
        <p><strong style="color: #0273bd;">Name:</strong> ${name}</p>
        <p><strong style="color: #0273bd;">Email:</strong> ${email}</p>
        <p><strong style="color: #0273bd;">Phone:</strong> ${phone}</p>
        <p><strong style="color: #0273bd;">Education:</strong> ${education || "Not specified"}</p>
        <p><strong style="color: #0273bd;">Current Salary:</strong> ${currentSalary || "Not specified"}</p>
        <p><strong style="color: #0273bd;">Experience:</strong> ${experience || "Not specified"}</p>
        <p><strong style="color: #0273bd;">LinkedIn Profile:</strong> <a href="${linkedin}" style="color: #0273bd;">${linkedin || "Not provided"}</a></p>
        <p><strong style="color: #0273bd;">City & Country:</strong> ${cityCountry || "Not specified"}</p>
        <p><strong style="color: #0273bd;">Software Skills:</strong> ${software || "Not specified"}</p>
        <p><strong style="color: #0273bd;">Current Company:</strong> ${companyName || "Not specified"}</p>
        <p><strong style="color: #0273bd;">Reason for Switching:</strong> ${switchReason || "Not specified"}</p>
        <p><strong style="color: #0273bd;">CV/Resume:</strong> Attached below</p>
      </div>
    `;

		// Convert CV file to buffer
		const cvBuffer = Buffer.from(await cv.arrayBuffer());
		const cvExtension = cv.name.split(".").pop() || "pdf";

		const mailOptions: any = {
			from: gmailUser,
			to: recipientEmail,
			subject: emailSubject,
			html: emailHtml,
			attachments: [
				{
					filename: `CV_${name.replace(/\s+/g, "_")}.${cvExtension}`,
					content: cvBuffer,
				},
			],
		};

		// Send email to recipient
		await transporter.sendMail(mailOptions);

		// Send confirmation email to the applicant
		const confirmationSubject = "Thank you for your job application - Solvo Engineers";
		const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #0273bd; margin-bottom: 20px;">Application Received!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for applying to Solvo Engineers. We have successfully received your job application and our HR team will review it shortly. We will contact you soon regarding the next steps in the hiring process.</p>
        
        <h3 style="color: #0273bd; margin-top: 30px; margin-bottom: 15px;">Your Application Details:</h3>
        ${jobId ? `<p><strong style="color: #0273bd;">Job ID:</strong> ${jobId}</p>` : ""}
        <p><strong style="color: #0273bd;">Name:</strong> ${name}</p>
        <p><strong style="color: #0273bd;">Email:</strong> ${email}</p>
        <p><strong style="color: #0273bd;">Phone:</strong> ${phone}</p>
        <p><strong style="color: #0273bd;">Education:</strong> ${education || "Not specified"}</p>
        <p><strong style="color: #0273bd;">Current Salary:</strong> ${currentSalary || "Not specified"}</p>
        <p><strong style="color: #0273bd;">Experience:</strong> ${experience || "Not specified"}</p>
        <p><strong style="color: #0273bd;">LinkedIn Profile:</strong> <a href="${linkedin}" style="color: #0273bd;">${linkedin || "Not provided"}</a></p>
        <p><strong style="color: #0273bd;">City & Country:</strong> ${cityCountry || "Not specified"}</p>
        <p><strong style="color: #0273bd;">Software Skills:</strong> ${software || "Not specified"}</p>
        <p><strong style="color: #0273bd;">Current Company:</strong> ${companyName || "Not specified"}</p>
        <p><strong style="color: #0273bd;">Reason for Switching:</strong> ${switchReason || "Not specified"}</p>
        <p><strong style="color: #0273bd;">CV/Resume:</strong> Received and attached to your application</p>
        
        <p style="margin-top: 30px;">We appreciate your interest in joining our team!</p>
        <p>Best regards,<br><strong>Solvo Engineers HR Team</strong></p>
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
			{ message: "Application submitted successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			{ error: "Failed to submit application" },
			{ status: 500 }
		);
	}
}

