import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
	return (
		<main className="mx-auto flex h-[90dvh] max-w-7xl flex-col items-center justify-center gap-6">
			<div className="absolute left-0 top-0 -z-10 size-[100vh] -translate-x-1/4 -translate-y-1/2 rounded-full border border-purple-500 border-opacity-30"></div>
			<div className="absolute left-0 top-0 -z-10 size-[60vh] -translate-x-1/4 -translate-y-1/2 animate-[pulse_5s_infinite] rounded-full bg-purple-500 bg-opacity-40 blur-[200px]"></div>
			<div className="absolute right-0 top-[50vh] -z-10 size-[100vh] -translate-y-1/2 translate-x-1/2 rounded-full border border-purple-500 border-opacity-30"></div>
			<div className="absolute right-0 top-[50vh] -z-10 size-[60vh] -translate-y-1/2 translate-x-1/2 animate-[pulse_5s_infinite] rounded-full bg-purple-500 bg-opacity-40 blur-[200px] delay-1000"></div>
			<motion.h1
				className="text-center text-4xl font-bold lg:text-6xl"
				initial={{ translateY: 100, opacity: 0 }}
				animate={{ translateY: 0, opacity: 1 }}
				transition={{
					delay: 0.5,
					type: "spring",
					stiffness: 100,
				}}
			>
				Hey, I'm{" "}
				<span className="animate-[text-pan_3s_linear_infinite_alternate] bg-gradient-to-r from-purple-700 via-purple-400 to-purple-700 bg-clip-text text-transparent [background-size:200%]">
					Elias
				</span>
			</motion.h1>
			<motion.h2
				className="max-w-[25ch] text-center text-4xl font-bold leading-tight lg:text-6xl"
				initial={{ translateY: 100, opacity: 0 }}
				animate={{ translateY: 0, opacity: 1 }}
				transition={{
					delay: 2,
					type: "spring",
					stiffness: 50,
				}}
			>
				I'm a <span className="text-center text-purple-300">full-stack</span>{" "}
				developer from Sweden
			</motion.h2>
			<ul className="flex gap-16">
				<motion.li
					initial={{ translateY: 100, opacity: 0 }}
					animate={{ translateY: 0, opacity: 1 }}
					transition={{
						delay: 3,
						type: "spring",
						stiffness: 50,
					}}
				>
					<a
						className="group relative flex h-full w-full items-center justify-center p-2"
						href="https://github.com/eliasakesson"
						aria-label="Github"
					>
						<FaGithub size={30} />
						<span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
						<span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
						<span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
						<span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
					</a>
				</motion.li>
				<motion.li
					initial={{ translateY: 100, opacity: 0 }}
					animate={{ translateY: 0, opacity: 1 }}
					transition={{
						delay: 3.2,
						type: "spring",
						stiffness: 50,
					}}
				>
					<a
						className="group relative flex h-full w-full items-center justify-center p-2"
						href="https://www.linkedin.com/in/eliasakesson/"
						aria-label="Linkedin"
					>
						<FaLinkedin size={30} />
						<span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
						<span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
						<span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
						<span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
					</a>
				</motion.li>
			</ul>
		</main>
	);
}
