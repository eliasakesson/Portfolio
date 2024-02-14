import { motion } from "framer-motion";
import { FaGithub, FaHtml5 } from "react-icons/fa";
import { TbBrandMongodb, TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaNodeJs, FaJava, FaStripe } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import {
	SiTypescript,
	SiTailwindcss,
	SiCsharp,
	SiElectron,
	SiArduino,
	SiLua,
	SiExpress,
	SiDotnet,
	SiSqlite,
} from "react-icons/si";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { VscJson } from "react-icons/vsc";
import { useRef, useState } from "react";

export default function Technologies() {
	const technologies = [
		{
			Icon: TbBrandNextjs,
			title: "Next.js",
			description:
				"Next.js has been my go-to framework for web development for the past year. I love the simplicity of it, and the fact that it's built on React.",
		},
		{
			Icon: FaReact,
			title: "React",
			description:
				"I have used React for the past 3 years now, and I do not regret it. It started of with create-react-app, but has since then evolved to Vite and Next.js which are all built on React.",
		},
		{
			Icon: FaNodeJs,
			title: "Node.js",
			description:
				"Node.js is my go-to backend framework. I mostly combine it with Express and use REST API's to create a custom backend for my different web applications.",
		},
		{
			Icon: SiTypescript,
			title: "Typescript",
			description:
				"I switched to Typescript roughly 2 years ago now, and I do not look back. I love Javascript, but now with Typescript it makes my code cleaner, clearer and often easier to work with.",
		},
		{
			Icon: SiCsharp,
			title: "C#",
			description:
				"C# has been with me from the start. I started using it almost 6 years ago now to make games with the Unity Game Engine, and I still do. I have also built a few .NET applications using C#.",
		},
		{
			Icon: IoLogoFirebase,
			title: "Firebase",
			description:
				"Firebase is my go-to for authentication, database and storage. I have used it in most of my projects, and for a good reason.",
		},
		{
			Icon: TbBrandMongodb,
			title: "MongoDB",
			description:
				"MongoDB is another database I have used in some of my smaller projects. I do not have as much experience with it as I do with Firebase, but I still know my way around it.",
		},
		{
			Icon: FaStripe,
			title: "Stripe",
			description:
				"Stripe is my go-to for payments. I have only used it in one project so far, but I have learned a lot about it and I'm looking forward to using it more in the future.",
		},
		{
			Icon: FaHtml5,
			title: "HTML",
			description:
				"HTML is the foundation of the web. I have been using it for the past 4 years now, and have recently started looking more into the semantics side of it.",
		},
		{
			Icon: SiTailwindcss,
			title: "Tailwind CSS",
			description:
				"Tailwind CSS is what I use for all my styling. I love the simplicity of it, and it makes it much easier to create responsive websites in a shorter time.",
		},
		{
			Icon: BiLogoCPlusPlus,
			title: "C++",
			description:
				"C++ is what I use when programming microcontrollers. I'm currently using it to program an autonomous drone controlled by an ESP32 microcontroller.",
		},
		{
			Icon: SiElectron,
			title: "Electron",
			description:
				"Electron is what I use to create desktop applications. I have used it to create a few small applications, including a discord clone, and I'm looking forward to using it more in the future.",
		},
		{
			Icon: FaGithub,
			title: "Github",
			description:
				"Github is my go-to for version control. I have been using it for the past 3 years now, and I'm looking forward to using it more in the future.",
		},
		{
			Icon: IoLogoJavascript,
			title: "Javascript",
			description:
				"Javascript is what I started with when it comes to web development. I have switched to using Typescript for most of my projects now, but the simularity between the two makes it easy to switch between them.",
		},
		{
			Icon: FaJava,
			title: "Java",
			description:
				"Java is a new language for me, but thanks to my experience with C# it was easy to learn. I have recently combined it with OpenGL to create my own minecraft clone.",
		},
		{
			Icon: VscJson,
			title: "JSON",
			description: "JSON is what I use for data.",
		},
		{
			Icon: SiLua,
			title: "Lua",
			description: "Lua is what I use for scripting in Roblox.",
		},
		{
			Icon: SiArduino,
			title: "Arduino",
			description:
				"Arduino is what I use when programming microcontrollers. I'm currently using it to program an autonomous drone controlled by an ESP32 microcontroller.",
		},
		{
			Icon: SiExpress,
			title: "Express",
			description:
				"Express is what I use for backend development. I use it to create REST API's for my web applications.",
		},
		{
			Icon: SiDotnet,
			title: ".NET",
			description:
				".NET is what I use in school to create desktop applications. I have also used it to create a few small applications in my free time.",
		},
		{
			Icon: SiSqlite,
			title: "SQLite",
			description:
				"SQLite is what I used when creating my Novabase project. I have also used it in a few other projects.",
		},
	];

	const [selectedTechnology, setSelectedTechnology] = useState<any>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const parent = useRef<HTMLElement>(null);

	function handleSelectTechnology(e: any, technology: any) {
		e.stopPropagation();
		if (!parent.current) return;

		setSelectedTechnology(technology);

		const parentRect = parent.current.getBoundingClientRect();

		const rect = e.target.getBoundingClientRect();
		const x = rect.left;
		const y = rect.top - parentRect.top + rect.height + 16;
		setPosition({ x, y });
	}

	return (
		<section
			ref={parent}
			className="relative mb-64 px-8"
			onClick={() => setSelectedTechnology(null)}
		>
			<div className="absolute left-1/2 top-1/2 -z-10 size-[40vh] -translate-x-1/2 -translate-y-1/2 animate-[pulse_5s_infinite] rounded-full bg-purple-500 bg-opacity-40 blur-[200px]"></div>
			<div className="absolute left-1/2 top-1/2 -z-10 size-[50vh] -translate-x-1/4 -translate-y-1/2 rounded-full border border-purple-500 border-opacity-30"></div>
			<div className="absolute left-1/2 top-1/2 -z-10 size-[100vh] -translate-x-1/4 -translate-y-1/2 rounded-full border border-purple-500 border-opacity-30"></div>
			<h2 className="mb-16 text-center text-2xl font-bold lg:text-4xl">
				Here&apos;s what I&apos;m good at
			</h2>
			<div className="mx-auto grid w-fit grid-cols-7 gap-8 md:gap-12 lg:gap-16">
				{technologies.map((technology) => (
					<div
						key={technology.title}
						className="relative cursor-pointer"
						onPointerEnter={(e) => handleSelectTechnology(e, technology)}
						onClick={(e) => handleSelectTechnology(e, technology)}
					>
						<technology.Icon className="text-4xl text-white transition-colors duration-300 hover:text-purple-500 md:text-5xl lg:text-6xl"></technology.Icon>
					</div>
				))}
				{selectedTechnology && (
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						style={{ left: position.x, top: position.y }}
						className="absolute z-10 flex max-w-[60vw] origin-top-left flex-col gap-2 rounded-md border-2 border-slate-400 bg-slate-700 bg-opacity-20 p-4 backdrop-blur-[15px] transition-all hover:border-slate-600 md:p-6 lg:p-8"
					>
						<h3 className="text-xl font-bold">{selectedTechnology.title}</h3>
						<p className="w-max max-w-prose">
							{selectedTechnology.description}
						</p>
					</motion.div>
				)}
			</div>
		</section>
	);
}
