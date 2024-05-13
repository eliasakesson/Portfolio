import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function Contact() {
	const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (status !== "idle") return;
		setStatus("sending");

		const formData = new FormData(e.target as HTMLFormElement);
		const data = Object.fromEntries(formData.entries());
		(e.target as HTMLFormElement).reset();

		const response = await fetch("/api/email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			setStatus("sent");
		} else {
			setStatus("idle");
			console.error(response.statusText);
			alert("Failed to send email");
		}
	}

	return (
		<section
			id="contact"
			className="flex flex-col justify-center gap-8 px-4 py-32 md:my-48 lg:flex-row lg:gap-32"
		>
			<div className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold lg:text-4xl">Contact me</h2>
				<p className="max-w-[40ch] text-lg lg:text-xl lg:leading-normal xl:text-2xl xl:leading-normal">
					I'm always open to new opportunities and collaborations. Feel free to
					reach out to me for any inquiries.
				</p>
			</div>
			<form className="max-w-xl flex-grow" onSubmit={handleSubmit}>
				<div className="grid grid-cols-1 gap-4">
					<input
						name="name"
						type="text"
						placeholder="Name"
						className="rounded-lg border-2 border-gray-400 bg-transparent p-4"
						required
					/>
					<input
						name="email"
						type="email"
						placeholder="Email"
						className="rounded-lg border-2 border-gray-400 bg-transparent p-4"
						required
					/>
					<input
						name="subject"
						type="text"
						placeholder="Subject"
						className="rounded-lg border-2 border-gray-400 bg-transparent p-4"
						required
					/>
					<textarea
						name="message"
						placeholder="Message"
						className="rounded-lg border-2 border-gray-400 bg-transparent p-4"
						required
					/>
					<button
						disabled={status !== "idle"}
						type="submit"
						className="flex items-center justify-center gap-2 rounded-lg bg-slate-800 p-4 text-white disabled:bg-slate-900"
					>
						{status === "sending" ? (
							<>
								<AiOutlineLoading3Quarters className="animate-spin" />
								<span>Sending...</span>
							</>
						) : status === "sent" ? (
							<>
								<IoCheckmarkCircle size={24} />
								<span>Sent</span>
							</>
						) : (
							"Send"
						)}
					</button>
					{status === "sent" && (
						<div className="flex gap-2">
							<p className="text-sm text-green-800">Email sent successfully.</p>
							<button className="text-sm" onClick={() => setStatus("idle")}>
								Send another
							</button>
						</div>
					)}
				</div>
			</form>
		</section>
	);
}
