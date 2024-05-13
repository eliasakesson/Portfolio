import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer id="footer" className="mt-16 bg-gray-100">
			<div className="mx-auto max-w-7xl px-8 ">
				<div className="grid gap-8 py-16 sm:grid-cols-2 md:gap-16 lg:grid-cols-4">
					<div className="space-y-8 sm:col-span-2">
						<Image
							src="/images/logo.png"
							alt="TRÄSMAK"
							width={60}
							height={60}
						/>
						{/* <p>
							Träsmak UF är ett UF-företag som erbjuder personliga träbrickor.
							Våra brickor är tillverkade i Småland och är av hög kvalité. Vårat
							mål är att erbjuda en produkt som är både personlig och hållbar.
						</p> */}
					</div>
					<div className="space-y-8">
						<h3 className="text-2xl font-semibold">Navigation</h3>
						<nav>
							<ul className="space-y-2">
								<li>
									<Link href="#" className="underline">
										Home
									</Link>
								</li>
								<li>
									<Link href="#about" className="underline">
										About me
									</Link>
								</li>
								<li>
									<Link href="#skills" className="underline">
										Skills
									</Link>
								</li>
								<li>
									<Link href="#projects" className="underline">
										Projects
									</Link>
								</li>
								<li>
									<Link href="#contact" className="underline">
										Contact
									</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className="space-y-8">
						<h3 className="text-2xl font-semibold">Kontakt</h3>
						<div className="flex flex-col gap-2">
							<a href="mailto:akessonelias@gmail.com">
								<span className="text-primary hover:text-primary_light">
									akessonelias@gmail.com
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
