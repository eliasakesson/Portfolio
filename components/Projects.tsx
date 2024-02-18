import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { GoArrowDown } from "react-icons/go";
import {
	SiReact,
	SiCsharp,
	SiExpo,
	SiExpress,
	SiFirebase,
	SiGithub,
	SiJavascript,
	SiNextdotjs,
	SiNodedotjs,
	SiSass,
	SiSqlite,
	SiStripe,
	SiTailwindcss,
	SiTypescript,
	SiUnity,
	SiVercel,
	SiVite,
	SiOpengl,
	SiElectron,
	SiWebrtc,
	SiDotnet,
	SiVisualstudio,
} from "react-icons/si";
import { RiExternalLinkFill } from "react-icons/ri";
import { fetchReposWithImages } from "@/utils/repos";
import { FaJava } from "react-icons/fa";

export default function Projects() {
	const [repos, setRepos] = useState<{
		large: any[];
		relevant: any[];
		old: any[];
	}>({ large: [], relevant: [], old: [] });

	useEffect(() => {
		const fetchProjects = async () => {
			const data = await fetchReposWithImages();
			console.log(data);

			setRepos(sortRepos(data));
		};
		fetchProjects();
	}, []);

	return (
		<section className="space-y-24 p-8 lg:p-16">
			<div className="space-y-12">
				<div className="space-y-2">
					<h2 className="text-center text-3xl font-semibold">
						Relevant Projects
					</h2>
					<p className=" text-center italic">Live fetched from github</p>
				</div>
				<div className="grid gap-8 lg:grid-cols-2 2xl:grid-cols-3">
					{repos?.large?.map((repo) => (
						<BigProjectCard key={repo.id} {...repo} />
					))}
					{repos?.relevant?.map((repo) => (
						<ProjectCard key={repo.id} {...repo} />
					))}
				</div>
			</div>
			<div className="space-y-12">
				<h2 className="text-center text-3xl font-semibold">Old Projects</h2>
				<div className="grid gap-8 lg:grid-cols-2 2xl:grid-cols-3">
					{repos?.old?.map((repo) => <ProjectCard key={repo.id} {...repo} />)}
				</div>
			</div>
		</section>
	);
}

const largeProjects = ["Trasmak-UF"];

const oldProjects = [
	"eprojects",
	"glossary-website",
	"survival-game",
	"Task-manager",
	"Chatterly",
	"Code-editor",
	"opengl-minecraft",
];

function sortRepos(repos: any[]) {
	const large = repos.filter((repo) => largeProjects.includes(repo.name));
	const relevant = repos.filter(
		(repo) =>
			!largeProjects.includes(repo.name) && !oldProjects.includes(repo.name),
	);
	const old = repos.filter((repo) => oldProjects.includes(repo.name));

	return {
		large,
		relevant,
		old,
	};
}

function BigProjectCard({
	name,
	description,
	topics,
	html_url,
	homepage,
	images,
}: {
	name: string;
	description: string;
	topics: string[];
	html_url: string;
	homepage: string;
	images: string[];
}) {
	return (
		<div className="flex flex-col divide-y divide-slate-700 overflow-hidden rounded-lg border border-slate-700 backdrop-blur-[1000px] lg:col-span-2 lg:flex-row">
			<BigCardImage
				src={images?.length >= 2 ? images[1] : "/images/featured.png"}
				alt=""
			/>
			<div className="flex flex-col divide-y divide-slate-700">
				<div className="flex divide-x divide-slate-700">
					<div className="aspect-square">
						<div className="relative aspect-square h-full">
							<Image
								src={images?.length >= 1 ? images[0] : ""}
								alt=""
								fill
								className="object-contain"
							/>
						</div>
					</div>
					<div className="flex-grow px-8 py-4">
						<h3 className="font-semibold">Name</h3>
						<p>{name}</p>
					</div>
					<div className="flex-grow px-8 py-4">
						<h3 className="font-semibold">Phase</h3>
						<p className="flex items-center gap-2">
							Building<span className="size-2 rounded-full bg-white"></span>
						</p>
					</div>
				</div>
				<div className="px-8 py-4">
					<h3 className="mb-1 text-lg font-semibold">Stack</h3>
					<div className="flex flex-wrap gap-3">
						{topics.map((topic) => Topic(topic))}
					</div>
				</div>
				<div className="flex-grow px-8 py-4">
					<h3 className="text-lg font-semibold">Description</h3>
					<p className="text-lg">{description}</p>
				</div>
				<ButtonRow name={name} homepage={homepage} html_url={html_url} />
			</div>
		</div>
	);
}

function ProjectCard({
	name,
	description,
	topics,
	html_url,
	homepage,
	images,
}: {
	name: string;
	description: string;
	topics: string[];
	html_url: string;
	homepage: string;
	images: string[];
}) {
	return (
		<div className="flex flex-col divide-y divide-slate-700 overflow-hidden rounded-lg border border-slate-700 backdrop-blur-[1000px]">
			{images?.length >= 2 && <CardImage src={images[1]} alt="" />}
			<div className="flex divide-x divide-slate-700">
				{images?.length >= 1 && (
					<div className="aspect-square p-4 lg:p-6">
						<div className="relative aspect-square h-full">
							<Image
								src={images[0]}
								alt=""
								fill
								className="rounded-lg object-contain"
							/>
						</div>
					</div>
				)}
				<div className="flex-grow px-8 py-4">
					<h3 className="font-semibold">Name</h3>
					<p>{name}</p>
				</div>
			</div>
			<div className="flex divide-x divide-slate-700">
				<div className="flex-grow px-8 py-4">
					<h3 className="font-semibold">Phase</h3>
					<p className="flex items-center gap-2">
						Building<span className="size-2 rounded-full bg-white"></span>
					</p>
				</div>
				<div className="px-8 py-4">
					<h3 className="mb-1 font-semibold">Stack</h3>
					<div className="flex">{topics.map((topic) => Topic(topic))}</div>
				</div>
			</div>
			<div className="flex-grow px-8 py-4">
				<h3 className="font-semibold">Description</h3>
				<p>{description}</p>
			</div>
			<ButtonRow name={name} homepage={homepage} html_url={html_url} />
		</div>
	);
}

function BigCardImage({ src, alt }: { src: string; alt: string }) {
	return (
		<div className="flex w-full items-center bg-slate-400 px-8 py-4">
			<div className="relative aspect-video w-full">
				<Image
					src={src}
					alt={alt}
					fill
					className="rounded-lg object-cover object-top"
				/>
			</div>
		</div>
	);
}

function CardImage({ src, alt }: { src: string; alt: string }) {
	return (
		<div className="group flex justify-center bg-slate-400 pt-4">
			<div className="relative aspect-[32/9] w-[85%]">
				<Image
					src={src}
					alt={alt}
					fill
					className="rounded-t-lg object-cover object-top"
				/>
				<div className="pointer-events-none absolute left-0 right-0 top-0 z-10 -mt-4 aspect-video rounded-lg pt-4 opacity-0 transition-all delay-100 group-hover:opacity-100">
					<div className="h-1/2 w-full transition-all delay-100 duration-300 group-hover:h-full">
						<div className="relative h-full w-full transition-transform delay-300 duration-300 group-hover:translate-y-[5%] group-hover:scale-110">
							<Image
								src={src}
								alt={alt}
								fill
								className="rounded-lg object-cover object-top"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function ButtonRow({
	name,
	homepage,
	html_url,
}: {
	name: string;
	homepage: string;
	html_url: string;
}) {
	return (
		<div className="flex divide-x divide-slate-700">
			<Link
				href={`?expand=${name}`}
				shallow
				className="flex w-full items-center justify-center gap-2 px-8 py-4 transition-colors hover:bg-white hover:bg-opacity-5"
			>
				<GoArrowDown />
				View more
			</Link>
			{homepage && (
				<a
					href={homepage}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center whitespace-nowrap px-8 py-4 transition-colors hover:bg-white hover:bg-opacity-5"
				>
					<RiExternalLinkFill />
				</a>
			)}
			{html_url && (
				<a
					href={html_url}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center justify-center whitespace-nowrap px-8 py-4 transition-colors hover:bg-white hover:bg-opacity-5"
				>
					<SiGithub />
				</a>
			)}
		</div>
	);
}

function Topic(topicString: string) {
	if (topicString in topics) {
		const { Icon, color, iconColor } = (topics as any)[topicString];
		return (
			<div
				key={topicString}
				className="group relative -mr-2 rounded-full p-2 transition-all hover:z-10 hover:scale-110 hover:bg-white hover:bg-opacity-10 hover:shadow-lg hover:backdrop-blur-[10px]"
				style={{ backgroundColor: color }}
			>
				<div className="absolute left-[-25%] top-[-100%] z-10 hidden rounded-full bg-black px-4 py-2 group-hover:flex">
					<p className="text-white">{topicString}</p>
				</div>
				<Icon className="text-lg" style={{ color: iconColor }} />
			</div>
		);
	}

	return null;
}

const topics: {
	[key: string]: {
		Icon: IconType;
		color: string;
		iconColor: string;
	};
} = {
	react: {
		Icon: SiReact,
		color: "#61DAFB",
		iconColor: "white",
	},
	nextjs: {
		Icon: SiNextdotjs,
		color: "white",
		iconColor: "black",
	},
	firebase: {
		Icon: SiFirebase,
		color: "yellow",
		iconColor: "black",
	},
	stripe: {
		Icon: SiStripe,
		color: "purple",
		iconColor: "white",
	},
	typescript: {
		Icon: SiTypescript,
		color: "white",
		iconColor: "#3178C6",
	},
	tailwindcss: {
		Icon: SiTailwindcss,
		color: "#06B6D4",
		iconColor: "white",
	},
	vercel: {
		Icon: SiVercel,
		color: "black",
		iconColor: "white",
	},
	express: {
		Icon: SiExpress,
		color: "white",
		iconColor: "black",
	},
	node: {
		Icon: SiNodedotjs,
		color: "white",
		iconColor: "green",
	},
	sqlite: {
		Icon: SiSqlite,
		color: "black",
		iconColor: "white",
	},
	vite: {
		Icon: SiVite,
		color: "white",
		iconColor: "black",
	},
	sass: {
		Icon: SiSass,
		color: "pink",
		iconColor: "white",
	},
	javascript: {
		Icon: SiJavascript,
		color: "black",
		iconColor: "yellow",
	},
	"react-native": {
		Icon: SiReact,
		color: "#61DAFB",
		iconColor: "white",
	},
	expo: {
		Icon: SiExpo,
		color: "black",
		iconColor: "white",
	},
	csharp: {
		Icon: SiCsharp,
		color: "purple",
		iconColor: "white",
	},
	unity: {
		Icon: SiUnity,
		color: "black",
		iconColor: "white",
	},
	github: {
		Icon: SiGithub,
		color: "#181717",
		iconColor: "white",
	},
	java: {
		Icon: FaJava,
		color: "#007396",
		iconColor: "white",
	},
	opengl: {
		Icon: SiOpengl,
		color: "white",
		iconColor: "black",
	},
	electron: {
		Icon: SiElectron,
		color: "#47848F",
		iconColor: "white",
	},
	webrtc: {
		Icon: SiWebrtc,
		color: "black",
		iconColor: "white",
	},
	dotnet: {
		Icon: SiDotnet,
		color: "#512BD4",
		iconColor: "white",
	},
	"visual-studio": {
		Icon: SiVisualstudio,
		color: "#5C2D91",
		iconColor: "white",
	},
};
