import Image from "next/image";
import { useContext, useEffect, useRef } from "react";
import { FaStripe } from "react-icons/fa";
import {
	SiFirebase,
	SiJavascript,
	SiNextdotjs,
	SiNodedotjs,
	SiReact,
	SiTailwindcss,
} from "react-icons/si";
import { PointerCircleContext } from "./PointerCircle";
import Link from "next/link";
import { HomeContext } from "@/pages";

const hoverSize = 192;
const getTechString = (techName: string) =>
	`
		Intrested in what I&apos;ve done with <b>${techName}</b>?
		<br />
		<b>Click</b> to see more!
	`;
const myLogoString = `
	<b>Hi there!</b>
	<br />
	<b>Click</b> to see more about me!
`;

export default function Hero() {
	const { onHover, onLeave } = useContext(PointerCircleContext);
	const { focusedTopic, setFocusedTopic } = useContext(HomeContext);

	useEffect(() => {
		const unsub = setTimeout(() => {
			setFocusedTopic("");
		}, 3000);

		return () => clearTimeout(unsub);
	}, [focusedTopic]);

	return (
		<section
			id="hero"
			className="grid h-[100dvh] grid-rows-4 divide-y-2 divide-slate-300 pt-[10vh] md:h-[100dvh] lg:divide-none lg:py-[20vh]"
		>
			<div className={styles.heroRow}>
				<h1 className={styles.heroText}>Hi, I&apos;m</h1>
				<a
					href="#projects"
					onClick={() => setFocusedTopic("react")}
					onMouseEnter={(e) =>
						onHover(e as any, hoverSize, getTechString("React"))
					}
					onMouseLeave={onLeave}
					onTouchStart={(e) =>
						onHover(e as any, hoverSize, getTechString("React"))
					}
					onTouchEnd={onLeave}
					className={`${styles.heroImage} aspect-square text-blue-400`}
				>
					<div className="absolute left-1/2 top-1/2 z-10 hidden size-64 -translate-x-1/2 -translate-y-1/2 group-hover:block"></div>
					<SiReact size="100%" />
				</a>
				<div className={`${styles.heroImage} hidden aspect-video md:block`}>
					<Image
						src="https://raw.githubusercontent.com/eliasakesson/Volted/master/assets/mockup.png"
						alt=""
						fill
						className="object-cover"
					/>
				</div>
				<a
					href="#projects"
					onClick={() => setFocusedTopic("javascript")}
					onMouseEnter={(e) =>
						onHover(e as any, hoverSize, getTechString("Javascript"))
					}
					onMouseLeave={onLeave}
					onTouchStart={(e) =>
						onHover(e as any, hoverSize, getTechString("Javascript"))
					}
					onTouchEnd={onLeave}
					className={`${styles.heroImage} aspect-square bg-white text-yellow-400 md:hidden lg:block`}
				>
					<div className="absolute left-1/2 top-1/2 z-10 hidden size-64 -translate-x-1/2 -translate-y-1/2 group-hover:block"></div>
					<SiJavascript size="100%" />
				</a>
			</div>
			<div className={`${styles.heroRow}`}>
				<div className={`${styles.heroImage} hidden flex-grow md:block`}></div>
				<a
					href="#about"
					onMouseEnter={(e) => onHover(e as any, hoverSize, myLogoString)}
					onMouseLeave={onLeave}
					onTouchStart={(e) => onHover(e as any, hoverSize, myLogoString)}
					onTouchEnd={onLeave}
					className={`${styles.heroImage} hidden aspect-square md:block`}
				>
					<div className="absolute left-1/2 top-1/2 z-10 hidden size-64 -translate-x-1/2 -translate-y-1/2 group-hover:block"></div>
					<Image src="/images/logo.png" alt="" fill className="object-cover" />
				</a>
				<div className={`${styles.heroImage} hidden aspect-video lg:block`}>
					<Image
						src="https://raw.githubusercontent.com/eliasakesson/Trasmak-UF/main/public/images/home-page.png"
						alt=""
						fill
						className="object-cover"
					/>
				</div>
				<a
					href="#projects"
					onClick={() => setFocusedTopic("tailwindcss")}
					onMouseEnter={(e) =>
						onHover(e as any, hoverSize, getTechString("Tailwind CSS"))
					}
					onMouseLeave={onLeave}
					onTouchStart={(e) =>
						onHover(e as any, hoverSize, getTechString("Tailwind CSS"))
					}
					onTouchEnd={onLeave}
					className={`${styles.heroImage} aspect-square text-blue-400`}
				>
					<div className="absolute left-1/2 top-1/2 z-10 hidden size-64 -translate-x-1/2 -translate-y-1/2 group-hover:block"></div>
					<SiTailwindcss size="100%" />
				</a>
				<h2
					className={`${styles.heroText} ml-auto w-min bg-gradient-to-br  from-slate-800 to-black bg-clip-text text-right text-transparent lg:w-fit`}
				>
					Elias Åkesson
				</h2>
			</div>
			<div className={`${styles.heroRow} bg-slate-300 lg:bg-transparent`}>
				<h2 className={styles.heroText}>A full-stack</h2>
				<a
					href="#projects"
					onClick={() => setFocusedTopic("nextjs")}
					onMouseEnter={(e) =>
						onHover(e as any, hoverSize, getTechString("Next.js"))
					}
					onMouseLeave={onLeave}
					onTouchStart={(e) =>
						onHover(e as any, hoverSize, getTechString("Next.js"))
					}
					onTouchEnd={onLeave}
					className={`${styles.heroImage} aspect-square text-black`}
				>
					<div className="absolute left-1/2 top-1/2 z-10 hidden size-64 -translate-x-1/2 -translate-y-1/2 group-hover:block"></div>
					<SiNextdotjs size="100%" />
				</a>
				<a
					href="#projects"
					onClick={() => setFocusedTopic("stripe")}
					onMouseEnter={(e) =>
						onHover(e as any, hoverSize, getTechString("Stripe"))
					}
					onMouseLeave={onLeave}
					onTouchStart={(e) =>
						onHover(e as any, hoverSize, getTechString("Stripe"))
					}
					onTouchEnd={onLeave}
					className={`${styles.heroImage} hidden aspect-square text-purple-700 md:block`}
				>
					<div className="absolute left-1/2 top-1/2 z-10 hidden size-64 -translate-x-1/2 -translate-y-1/2 group-hover:block"></div>
					<FaStripe size="100%" />
				</a>
				<div className={`${styles.heroImage} hidden aspect-video lg:block`}>
					<Image
						src="https://raw.githubusercontent.com/eliasakesson/Unity-Chess/main/public/images/board.png"
						alt=""
						fill
						className="object-cover"
					/>
				</div>
				<div className={`${styles.heroImage} flex-grow`}></div>
			</div>
			<div className={`${styles.heroRow}`}>
				<div className={`${styles.heroImage} hidden flex-grow md:block`}></div>
				<a
					href="#projects"
					onClick={() => setFocusedTopic("firebase")}
					onMouseEnter={(e) =>
						onHover(e as any, hoverSize, getTechString("Firebase"))
					}
					onMouseLeave={onLeave}
					onTouchStart={(e) =>
						onHover(e as any, hoverSize, getTechString("Firebase"))
					}
					onTouchEnd={onLeave}
					className={`${styles.heroImage} hidden aspect-square text-yellow-500 md:block`}
				>
					<div className="absolute left-1/2 top-1/2 z-10 hidden size-64 -translate-x-1/2 -translate-y-1/2 group-hover:block"></div>
					<SiFirebase size="100%" />
				</a>
				<div className={`${styles.heroImage} hidden aspect-video lg:block`}>
					<Image
						src="https://raw.githubusercontent.com/eliasakesson/Trasmak-UF/main/public/images/designer.png"
						alt=""
						fill
						className="object-cover"
					/>
				</div>
				<a
					href="#projects"
					onClick={() => setFocusedTopic("node.js")}
					onMouseEnter={(e) =>
						onHover(e as any, hoverSize, getTechString("Node.js"))
					}
					onMouseLeave={onLeave}
					onTouchStart={(e) =>
						onHover(e as any, hoverSize, getTechString("Node.js"))
					}
					onTouchEnd={onLeave}
					className={`${styles.heroImage} aspect-square text-green-700`}
				>
					<div className="absolute left-1/2 top-1/2 z-10 hidden size-64 -translate-x-1/2 -translate-y-1/2 group-hover:block"></div>
					<SiNodedotjs size="100%" />
				</a>
				<h2 className={`${styles.heroText} text-right`}>Web developer</h2>
			</div>
		</section>
	);
}

const styles = {
	heroRow:
		"flex items-center gap-[calc(1vh+1vw)] px-[10vw] py-[1.5vh] lg:px-[20vw] lg:py-[2.5vh] lg:whitespace-nowrap",
	heroText: "text-[calc(4vh+2vw)] font-bold",
	heroImage: "group h-[60%] lg:h-[80%] relative",
};
