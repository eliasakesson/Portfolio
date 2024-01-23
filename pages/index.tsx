import Image from "next/image";
import Loading from "@/components/Loading";
import { motion } from "framer-motion";
import Blur from "@/components/Blur";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
	return (
		<div className="relative overflow-hidden py-8">
			<div className="absolute left-0 right-0 top-0 -z-50 h-[90dvh] bg-slate-950"></div>
			<Blur />
			<main className="mx-auto flex h-[90dvh] max-w-7xl flex-col items-center justify-center gap-6">
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
			<section>
				<h2 className="mb-16 text-center text-2xl font-bold lg:text-4xl">
					Featured Projects
				</h2>
				<div className="mx-auto grid grid-cols-1 gap-8 px-8 lg:grid-cols-2 lg:grid-rows-2">
					<ProjectCard
						date={{ start: "October 2023", end: "Current" }}
						title="Träsmak UF"
						texts={[
							"Träsmak UF is a ecommerce website combined with a custom design tool built with Next.js, Firebase and Stripe, hosted on Vercel.",
							"The website allowes the user to customize a wooden tray with images and text and then order it through the website. The website also features authentication, saving designs, product ratings and for admins to upload templates and manage orders.",
						]}
						tags={[
							{ text: "Next.js", color: "bg-white" },
							{ text: "Stripe", color: "bg-purple-500" },
							{ text: "Firebase", color: "bg-yellow-500" },
							{ text: "Vercel", color: "bg-black" },
						]}
						link="/projects/trasmak-uf"
						className="row-span-2"
					/>
					<ProjectCard
						date={{ start: "May 2023", end: "August 2023" }}
						title="Novabase"
						texts={[
							"Novabase is a SQL database management tool built with Next.js, Express and SQLite.",
							"The website allowes the user to create, edit and delete databases and tables. The website also features authentication, saving databases and tables.",
							"The backend is built with Express and SQLite, and features a REST API for the frontend to communicate with. The backend features custom authentication, database and table creation, editing and deletion.",
						]}
						tags={[
							{ text: "Next.js", color: "bg-white" },
							{ text: "Express", color: "bg-black" },
							{ text: "SQLite", color: "bg-green-500" },
							{ text: "REST API", color: "bg-yellow-500" },
							{ text: "Vercel", color: "bg-black" },
						]}
						link="/projects/trasmak-uf"
						className=""
					/>
					<ProjectCard
						date={{ start: "May 2023", end: "August 2023" }}
						title="Volted"
						texts={[
							"Volted is a mobile app built with React Native and Firebase, that uses the Expo framework.",
							"The app is a learning platform for children and young adults, where they can build electric circuits and learn about electricity.",
							"The app features authentication, an electric circuit simulator, quizzes, guides and a leaderboard.",
						]}
						tags={[
							{ text: "React Native", color: "bg-blue-500" },
							{ text: "Firebase", color: "bg-yellow-500" },
							{ text: "Expo", color: "bg-black" },
						]}
						link="/projects/trasmak-uf"
						className=""
					/>
				</div>
			</section>
		</div>
	);
}
