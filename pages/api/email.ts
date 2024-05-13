import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	if (req.method !== "POST") {
		res.status(405).json({ message: "Method Not Allowed" });
		return;
	}

	const { name, email, subject, message } = req.body;

	if (!name || !email || !subject || !message) {
		res.status(400).json({ message: "Missing fields" });
		return;
	}

	try {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: process.env.NEXT_PUBLIC_EMAIL_USER,
				pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
			},
		});

		await transporter.sendMail({
			from: process.env.NEXT_PUBLIC_EMAIL_USER,
			to: "akessonelias@gmail.com",
			subject,
			html: `
				From: ${name} (${email})<br>
				<br>
				${message}
			`,
		});

		res.status(200).json({ message: "Email sent" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: (error as any).message });
	}
}
