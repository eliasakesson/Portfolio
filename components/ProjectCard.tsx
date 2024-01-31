import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
	date,
	title,
	texts,
	tags,
	link,
	github,
	className,
}: {
	date: { start: string; end: string };
	title: string;
	texts: string[];
	tags: { text: string; color: string }[];
	link: string;
	github?: string;
	className?: string;
}) {
	return (
		<a
			href={link}
			className={className}
			target="_blank"
			aria-label={`Link to ${title}`}
		>
			<article className="group flex h-full flex-col justify-center gap-2 rounded-md border-2 border-slate-400 bg-slate-700 bg-opacity-20 p-6 backdrop-blur-[200px] transition-colors hover:border-slate-600 md:p-10 lg:p-12">
				<span className="font-semibold">
					{date.start} -{" "}
					{date.end === "Current" ? (
						<span className="text-purple-300">{date.end}</span>
					) : (
						date.end
					)}
				</span>
				<h3 className="mb-4 text-3xl font-bold text-slate-50 lg:text-4xl">
					{title}
				</h3>
				{texts.map((text, i) => (
					<p
						key={i}
						className="text-slate-400 transition-colors group-hover:text-slate-300 lg:text-lg"
					>
						{text}
					</p>
				))}
				<ul className="mt-2 flex flex-wrap gap-2">
					{tags.map((tag, i) => (
						<li
							key={i}
							className="flex w-fit items-center gap-1 rounded-full border border-slate-500 bg-slate-700 py-1 pl-[10px] pr-3 text-slate-200"
						>
							<span className={`size-2 ${tag.color} rounded-full`}></span>
							{tag.text}
						</li>
					))}
				</ul>
				{/* {github && (
					<a
						href={github}
						target="_blank"
						aria-label={`Link to ${title} on Github`}
						className="mt-4 text-4xl text-slate-400 transition-colors hover:text-slate-300"
					>
						<FaGithub />
					</a>
				)} */}
			</article>
		</a>
	);
}
