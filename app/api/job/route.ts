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
		const recipientEmail = process.env.JOB_RECIPIENT_EMAIL || gmailUser;

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
		const emailSubject = `Job Application from ${name}${jobId ? ` - Job ID: ${jobId}` : ""}`;
		const emailHtml = `
      <h2>New Job Application</h2>
      ${jobId ? `<p><strong>Job ID:</strong> ${jobId}</p>` : ""}
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Education:</strong> ${education || "Not specified"}</p>
      <p><strong>Current Salary:</strong> ${currentSalary || "Not specified"}</p>
      <p><strong>Experience:</strong> ${experience || "Not specified"}</p>
      <p><strong>LinkedIn Profile:</strong> <a href="${linkedin}">${linkedin || "Not provided"}</a></p>
      <p><strong>City & Country:</strong> ${cityCountry || "Not specified"}</p>
      <p><strong>Software Skills:</strong> ${software || "Not specified"}</p>
      <p><strong>Current Company:</strong> ${companyName || "Not specified"}</p>
      <p><strong>Reason for Switching:</strong> ${switchReason || "Not specified"}</p>
      <p><strong>CV/Resume:</strong> Attached below</p>
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

		// Send email
		await transporter.sendMail(mailOptions);

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

