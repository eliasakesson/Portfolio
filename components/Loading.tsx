import { TbBrandNextjs, TbBrandMongodb } from "react-icons/tb";
import { FaReact, FaNodeJs, FaJava, FaStripe } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import {
	SiTypescript,
	SiTailwindcss,
	SiCsharp,
	SiElectron,
} from "react-icons/si";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { VscJson } from "react-icons/vsc";
import useWindowSize from "@/utils/useWindowSize";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";

export default function Loading() {
	const { width, height } = useWindowSize();

	const [iconList, setIconList] = useState<IconType[]>([]);

	const icons = [
		TbBrandMongodb,
		FaReact,
		IoLogoFirebase,
		FaNodeJs,
		FaJava,
		SiTypescript,
		SiTailwindcss,
		SiCsharp,
		BiLogoCPlusPlus,
		SiElectron,
		VscJson,
		FaStripe,
		TbBrandNextjs,
		IoLogoJavascript,
	];

	useEffect(() => {
		if (width && height) {
			const numIcons = Math.floor(width / 100) * Math.floor(height / 100);
			setIconList(
				Array.from({ length: numIcons }).map(
					(_) => icons[Math.floor(Math.random() * icons.length)],
				),
			);
		}
	}, [width, height]);

	return (
		<motion.div
			initial={{ opacity: 1 }}
			animate={{ opacity: 0, pointerEvents: "none" }}
			transition={{ delay: 2, duration: 0.5 }}
			className="fixed left-0 top-0 flex h-screen flex-wrap justify-between gap-16 overflow-hidden bg-black p-16 lg:gap-32"
		>
			<motion.div
				initial={{ opacity: 1 }}
				animate={{ opacity: 0, pointerEvents: "none" }}
				transition={{ delay: 1.75, duration: 0.5 }}
				className="absolute left-1/2 top-1/2 aspect-square h-1/4 -translate-x-1/2 -translate-y-1/2 bg-purple-700 blur-[20vh]"
			></motion.div>
			{iconList.map((Icon) => {
				return (
					<motion.div
						initial={{ opacity: 1 }}
						animate={{ opacity: 0 }}
						transition={{
							duration: 0.5,
							delay: 0.5,
							ease: "easeOut",
						}}
					>
						<motion.div
							initial={{ filter: "blur(32px)" }}
							animate={{ filter: "blur(0)" }}
							transition={{ duration: 0.5, ease: "easeOut" }}
						>
							<motion.div
								initial={{ scale: 2 }}
								animate={{ scale: 0.5 }}
								transition={{ duration: 2, ease: "easeOut" }}
							>
								<Icon className="text-5xl text-purple-500 text-opacity-50"></Icon>
							</motion.div>
						</motion.div>
					</motion.div>
				);
			})}
		</motion.div>
	);
}
