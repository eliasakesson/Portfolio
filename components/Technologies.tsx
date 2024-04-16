import { motion } from "framer-motion";
import { FaJava, FaTimes } from "react-icons/fa";
import {
	SiTypescript,
	SiTailwindcss,
	SiCsharp,
	SiElectron,
	SiArduino,
	SiExpress,
	SiDotnet,
	SiSqlite,
	SiReact,
	SiNextdotjs,
	SiFirebase,
	SiStripe,
	SiVercel,
	SiNodedotjs,
	SiVite,
	SiSass,
	SiJavascript,
	SiExpo,
	SiUnity,
	SiGithub,
	SiOpengl,
	SiWebrtc,
	SiVisualstudio,
} from "react-icons/si";
import { useRef, useState } from "react";
import { IconType } from "react-icons";

export default function Technologies() {
	const [selectedTechnology, setSelectedTechnology] = useState<any>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const parent = useRef<HTMLElement>(null);

	function handleSelectTechnology(e: any, technology: any) {
		e.stopPropagation();
		if (!parent.current) return;

		setSelectedTechnology(technology);

		const parentRect = parent.current.getBoundingClientRect();

		const rect = e.target.getBoundingClientRect();
		const x = window.innerWidth < 1024 ? 32 : rect.left;
		const y = rect.top - parentRect.top + rect.height + 16;

		setPosition({ x, y });
	}

	function closeTechnology(e: any) {
		e.stopPropagation();
		setSelectedTechnology(null);
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
			<div className="mx-auto grid w-fit grid-cols-5 gap-2 md:gap-4 lg:gap-8">
				{Object.entries(topics).map(([key, value]) => (
					<div
						key={key}
						className="relative cursor-pointer rounded-full p-4"
						onPointerEnter={(e) => handleSelectTechnology(e, key)}
						onClick={(e) => handleSelectTechnology(e, key)}
						style={{ backgroundColor: value.color }}
					>
						<value.Icon
							style={{ color: value.iconColor }}
							className="text-3xl"
						></value.Icon>
					</div>
				))}
			</div>
			{selectedTechnology && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					style={{ left: position.x, top: position.y }}
					className="pointer-events-none absolute z-10 w-min rounded-lg bg-background p-4"
				>
					<div className="flex items-center justify-between">
						<h3 className="w-fit text-lg font-bold">
							{selectedTechnology.slice(0, 1).toUpperCase() +
								selectedTechnology.slice(1)}
						</h3>
						<button className="pointer-events-auto" onClick={closeTechnology}>
							<FaTimes />
						</button>
					</div>
					<p className="min-w-[min(65ch,calc(100vw-64px))]">
						{topics[selectedTechnology].description}
					</p>
				</motion.div>
			)}
		</section>
	);
}

const topics: {
	[key: string]: {
		Icon: IconType;
		color: string;
		iconColor: string;
		description?: string;
	};
} = {
	react: {
		Icon: SiReact,
		color: "#61DAFB",
		iconColor: "white",
		description:
			"I have used React for the past 3 years now, and I do not regret it. It started of with create-react-app, but has since then evolved to Vite and Next.js which are all built on React.",
	},
	nextjs: {
		Icon: SiNextdotjs,
		color: "white",
		iconColor: "black",
		description:
			"Next.js has been my go-to framework for web development for the past year. I love the simplicity of it, and the fact that it's built on React.",
	},
	firebase: {
		Icon: SiFirebase,
		color: "yellow",
		iconColor: "black",
		description:
			"Firebase is my go-to for authentication, database and storage. I have used it in most of my projects, and for a good reason.",
	},
	stripe: {
		Icon: SiStripe,
		color: "purple",
		iconColor: "white",
		description:
			"Stripe is my go-to for payments. I have only used it in one project so far, but I have learned a lot about it and I'm looking forward to using it more in the future.",
	},
	typescript: {
		Icon: SiTypescript,
		color: "white",
		iconColor: "#3178C6",
		description:
			"I switched to Typescript roughly 2 years ago now, and I do not look back. I love Javascript, but now with Typescript it makes my code cleaner, clearer and often easier to work with.",
	},
	tailwindcss: {
		Icon: SiTailwindcss,
		color: "#06B6D4",
		iconColor: "white",
		description:
			"Tailwind CSS is what I use for all my styling. I love the simplicity of it, and it makes it much easier to create responsive websites in a shorter time.",
	},
	vercel: {
		Icon: SiVercel,
		color: "black",
		iconColor: "white",
		description:
			"Vercel is what I use to deploy my web applications. I have used it for the past year now, and I love the simplicity of it.",
	},
	express: {
		Icon: SiExpress,
		color: "white",
		iconColor: "black",
		description:
			"Express is what I use for backend development. I use it to create REST API's for my web applications.",
	},
	node: {
		Icon: SiNodedotjs,
		color: "white",
		iconColor: "green",
		description:
			"Node.js is my go-to backend framework. I mostly combine it with Express and use REST API's to create a custom backend for my different web applications.",
	},
	sqlite: {
		Icon: SiSqlite,
		color: "black",
		iconColor: "white",
		description:
			"SQLite is what I used when creating my Novabase project. I have also used it in a few other projects.",
	},
	vite: {
		Icon: SiVite,
		color: "white",
		iconColor: "black",
		description:
			"Vite is what I use for lightweight web development. I have used it for a few small projects, and I love the simplicity of it.",
	},
	sass: {
		Icon: SiSass,
		color: "pink",
		iconColor: "white",
		description:
			"Sass is a great way to make my CSS more maintainable. I have used it in a few projects, but I have recently migrated to Tailwind CSS.",
	},
	javascript: {
		Icon: SiJavascript,
		color: "black",
		iconColor: "yellow",
		description:
			"Javascript is what I started with when it comes to web development. I have switched to using Typescript for most of my projects now, but the simularity between the two makes it easy to switch between them.",
	},
	"react-native": {
		Icon: SiReact,
		color: "#61DAFB",
		iconColor: "white",
		description:
			"I have used React Native for a few small projects. I have used it to create a few small mobile applications, and I'm looking forward to using it more in the future.",
	},
	expo: {
		Icon: SiExpo,
		color: "black",
		iconColor: "white",
		description:
			"Expo is what I use to create mobile applications. I have used it to create a few small mobile applications, and I'm looking forward to using it more in the future.",
	},
	csharp: {
		Icon: SiCsharp,
		color: "purple",
		iconColor: "white",
		description:
			"C# has been with me from the start. I started using it almost 6 years ago now to make games with the Unity Game Engine, and I still do. I have also built a few .NET applications using C#.",
	},
	unity: {
		Icon: SiUnity,
		color: "black",
		iconColor: "white",
		description:
			"Unity is what I use to create games. I have used it for the past 6 years now, and I'm looking forward to using it more in the future.",
	},
	github: {
		Icon: SiGithub,
		color: "#181717",
		iconColor: "white",
		description:
			"Github is my go-to for version control. I have been using it for the past 3 years now, and I'm looking forward to using it more in the future.",
	},
	java: {
		Icon: FaJava,
		color: "#007396",
		iconColor: "white",
		description:
			"Java is a new language for me, but thanks to my experience with C# it was easy to learn. I have recently combined it with OpenGL to create my own minecraft clone.",
	},
	opengl: {
		Icon: SiOpengl,
		color: "white",
		iconColor: "black",
		description:
			"OpenGL is what I use to create 3D graphics. I have used it for the past year now, and I'm looking forward to using it more in the future.",
	},
	electron: {
		Icon: SiElectron,
		color: "#47848F",
		iconColor: "white",
		description:
			"Electron is what I use to create desktop applications. I have used it to create a few small applications, including a discord clone, and I'm looking forward to using it more in the future.",
	},
	webrtc: {
		Icon: SiWebrtc,
		color: "black",
		iconColor: "white",
		description:
			"WebRTC is what I use to create real-time communication. I used it in my discord clone to create the voice chat feature.",
	},
	dotnet: {
		Icon: SiDotnet,
		color: "#512BD4",
		iconColor: "white",
		description:
			".NET is what I use in school to create desktop applications. I have also used it to create a few small applications in my free time.",
	},
	"visual-studio": {
		Icon: SiVisualstudio,
		color: "#5C2D91",
		iconColor: "white",
		description:
			"Visual Studio is what I use to create desktop applications. I have used it to create a few small applications in my free time.",
	},
	arduino: {
		Icon: SiArduino,
		color: "#00979D",
		iconColor: "white",
		description:
			"Arduino is what I use when programming microcontrollers. I'm currently using it to program an autonomous drone controlled by an ESP32 microcontroller.",
	},
};
