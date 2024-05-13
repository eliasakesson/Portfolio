import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function TrasmakUf() {
	return (
		<main className="relative overflow-hidden">
			<Header />
			<div className="flex w-full flex-col items-center px-4 py-32">
				<video
					controls
					autoPlay
					className="rounded-xl bg-gray-400 lg:w-[75vw] xl:w-[60vw] 2xl:w-[50vw]"
				>
					<source src="/videos/trasmak-uf.mp4" type="video/mp4" />
				</video>
				<h1 className="mt-16 text-5xl font-bold">Träsmak UF</h1>
			</div>
			<Footer />
		</main>
	);
}
