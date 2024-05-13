import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import { createContext, useState } from "react";
import { fetchReposWithImages, sortRepos } from "@/utils/repos";
import { PointerCircleProvider } from "@/components/PointerCircle";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export const HomeContext = createContext({
	repos: [],
	focusedTopic: "",
	setFocusedTopic: (topic: string) => {},
} as {
	repos: any[];
	focusedTopic: string;
	setFocusedTopic: (topic: string) => void;
});

export default function Home({ repos }: { repos: any[] }) {
	const [focusedTopic, setFocusedTopic] = useState<string>("");

	return (
		<main className="relative overflow-hidden">
			<HomeContext.Provider value={{ repos, focusedTopic, setFocusedTopic }}>
				<PointerCircleProvider>
					<Header />
					<Hero />
					<About />
					<Technologies />
					<Projects />
					<Contact />
					<Footer />
				</PointerCircleProvider>
			</HomeContext.Provider>
		</main>
	);
}

export async function getStaticProps() {
	const repos = await fetchReposWithImages();
	const sortedRepos = sortRepos(repos);

	return {
		props: {
			repos: sortedRepos,
		},
	};
}
