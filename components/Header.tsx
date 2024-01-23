import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars, FaCrown, FaPencilRuler } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { motion, useAnimationControls } from "framer-motion";
import { GoLaw } from "react-icons/go";

const Header = () => {
	return (
		<div className="sticky top-0 z-50 bg-white border-b">
			<div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-8">
				<div className="flex gap-4 md:hidden flex-1">
					<HamburgerMenu />
				</div>
				<div className="md:flex-1 flex-[2]">
					<Link
						href="/"
						className="flex items-center gap-4 md:justify-start justify-center md:w-fit">
						<Image
							src="/images/logo.png"
							alt="TRÄSMAK"
							width={220}
							height={60}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

function HamburgerMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const controls = useAnimationControls();

	useEffect(() => {
		if (isMenuOpen) {
			controls.start({ translateX: 0, opacity: 1 });
		} else {
			controls.start({ translateX: "-100%", opacity: 0 });
		}
	}, [isMenuOpen]);

	return (
		<>
			<button
				aria-label="Open menu"
				onClick={() => setIsMenuOpen((open) => !open)}
				className="text-gray-700 hover:text-gray-900 focus:outline-none">
				{isMenuOpen ? (
					<FaX className="h-6 w-6" />
				) : (
					<FaBars className="h-6 w-6" />
				)}
			</button>
			<motion.div
				animate={controls}
				className="absolute z-50 top-[73px] h-[calc(100vh-73px)] left-0 bg-white w-80 px-4 py-4 border-r-2 border-gray-300">
				<ul className="flex flex-col gap-2 py-8 px-2">
					<li>
						<Link
							onClick={() => setIsMenuOpen(false)}
							href="/design"
							className="text-xl flex gap-4 items-center py-2">
							<FaPencilRuler className="text-xl" />
							Designa din bricka
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setIsMenuOpen(false)}
							href="/products"
							className="text-xl flex gap-4 items-center py-2">
							<FaCrown className="text-xl" />
							Våra produkter
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setIsMenuOpen(false)}
							href="/terms"
							className="text-xl flex gap-4 items-center py-2">
							<GoLaw className="text-xl" />
							Våra köpvillkor
						</Link>
					</li>
				</ul>
			</motion.div>
		</>
	);
}

export default Header;
