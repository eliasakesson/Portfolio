import { HomeContext } from "@/pages";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { Topic } from "./Topic";
import Link from "next/link";
import useWindowSize from "@/utils/useWindowSize";
import { SiGithub } from "react-icons/si";
import { FaPause, FaPlay } from "react-icons/fa";
import { PointerCircleContext } from "./PointerCircle";
import { TbExternalLink } from "react-icons/tb";

export default function Projects() {
	const { repos } = useContext(HomeContext);

	return (
		<section
			id="projects"
			className="mx-auto flex max-w-[1440px] flex-col gap-16 px-4"
		>
			<div className="space-y-4">
				<h2 className="text-3xl font-bold lg:text-5xl">Projects</h2>
				<p className="italic text-gray-700 lg:text-lg">
					Live fetched from GitHub
				</p>
			</div>
			<div className="group grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{repos.slice(0, 4).map((repo, i) => (
					<Project
						key={repo.id}
						gridSpan={i % 5 === 0 || i % 5 === 3 || i % 5 === 4 ? 2 : 1}
						{...repo}
					/>
				))}
			</div>
		</section>
	);
}

function Project({
	html_url,
	homepage,
	name,
	description,
	topics,
	images,
	gridSpan = 1,
}: {
	html_url: string;
	homepage: string;
	name: string;
	description: string;
	topics: string[];
	images: string[];
	gridSpan: number;
}) {
	const { width } = useWindowSize();
	const ref = useRef<HTMLDivElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);

	const [isHovered, setIsHovered] = useState(false);

	function handleMouseEnter() {
		videoRef.current?.setAttribute("autoplay", "true");
		videoRef.current?.play();
		setIsHovered(true);
	}

	function handleMouseLeave() {
		console.log("leave");
		videoRef.current?.removeAttribute("autoplay");
		videoRef.current?.pause();
		setIsHovered(false);

		if (videoRef.current) videoRef.current.currentTime = 0;
	}

	useEffect(() => {
		if (ref.current) {
			ref.current.addEventListener("mouseenter", handleMouseEnter);
			ref.current.addEventListener("mouseleave", handleMouseLeave);

			return () => {
				ref.current?.removeEventListener("mouseenter", handleMouseLeave);
				ref.current?.removeEventListener("mouseleave", handleMouseLeave);
			};
		}
	}, [ref.current, videoRef.current]);

	return (
		<div
			ref={ref}
			className="group relative flex flex-col justify-end gap-2 p-8 transition-all duration-300 hover:!brightness-110 group-hover:brightness-50 lg:aspect-auto lg:p-12 lg:hover:p-16"
			style={{
				gridColumn: width > 768 ? `span ${gridSpan}` : "span 1",
				aspectRatio:
					width > 1024
						? gridSpan === 1
							? "1"
							: "auto"
						: width > 768
							? gridSpan === 1
								? "1"
								: "3/2"
							: "2/3",
			}}
		>
			<div className="absolute bottom-0 left-0 right-0 top-0 -z-10">
				<div className="relative h-full w-full">
					<Image
						src={images?.[1] || "https://via.placeholder.com/500"}
						alt="Trasmak-UF"
						fill
						className="-z-10 object-cover brightness-50 transition-opacity duration-500"
					/>
					<video
						ref={videoRef}
						style={{ opacity: isHovered ? 1 : 0 }}
						className="h-full w-full transition-opacity duration-500 md:object-cover"
						muted
						loop
					>
						<source src={`/videos/${name}.mp4`} type="video/mp4" />
					</video>
					<div className="absolute bottom-0 left-0 right-0 top-0 shadow-[inset_0_0_10vh_10vh_rgba(0,0,0,0.6)]"></div>
				</div>
			</div>

			<h3 className="text-3xl font-bold text-background">
				{name.replaceAll("-", " ")}
			</h3>
			<p className="mt-2 text-lg text-gray-200">{description}</p>
			<div className="flex justify-between">
				<div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
					{homepage && (
						<a
							target="_blank"
							rel="noreferrer"
							href={homepage}
							className="flex items-center gap-2 text-lg font-medium text-gray-300"
						>
							<TbExternalLink />
							View Live
						</a>
					)}
					<a
						target="_blank"
						rel="noreferrer"
						href={html_url}
						className="flex items-center gap-2 text-lg font-medium text-gray-300"
					>
						<SiGithub />
					</a>
				</div>
				<div className="flex items-end">
					{topics.map((topic) => Topic(topic))}
				</div>
			</div>
		</div>
	);
}
