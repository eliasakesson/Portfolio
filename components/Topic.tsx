import { useContext } from "react";
import { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
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
import { PointerCircleContext } from "./PointerCircle";
import { HomeContext } from "@/pages";

export function Topic(topicString: string) {
	const { onHover, onLeave } = useContext(PointerCircleContext);
	const { focusedTopic } = useContext(HomeContext);

	function onHoverHandler(e: MouseEvent) {
		const words = topicString.split("-");
		const wordsCapitalized = words.map(
			(word) => word.charAt(0).toUpperCase() + word.slice(1),
		);
		const wordsJoined = wordsCapitalized.join(" ");

		onHover(e as any, 48, `<b>${wordsJoined}</b>`, 0.05);
	}

	if (topicString in topics) {
		const { Icon, color, iconColor } = (topics as any)[topicString];
		return (
			<div
				onClick={(e) => e.preventDefault()}
				onMouseEnter={(e) => onHoverHandler(e as any)}
				onMouseLeave={onLeave}
				onTouchStart={(e) => onHoverHandler(e as any)}
				onTouchEnd={onLeave}
				key={topicString}
				className={`${topicString == focusedTopic ? "text-3xl" : "h-8 w-8"} ${focusedTopic && topicString != focusedTopic ? "brightness-50" : ""} relative -mr-2 h-fit w-fit rounded-full p-2 transition-all hover:z-10 hover:scale-110 hover:bg-white hover:bg-opacity-10 hover:shadow-lg hover:backdrop-blur-[10px]`}
				style={{
					backgroundColor: color,
				}}
			>
				<Icon style={{ color: iconColor }} />
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
