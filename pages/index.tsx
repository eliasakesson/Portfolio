import Blur from "@/components/Blur";
import ProjectCard from "@/components/ProjectCard";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import FeaturedProjects from "@/components/FeaturedProjects";
import Projects from "@/components/Projects";
import ExpandedProject from "@/components/ExpandedProject";

export default function Home() {
	return (
		<div className="relative overflow-hidden py-8">
			<div className="absolute left-0 right-0 top-0 -z-50 h-[90dvh] bg-slate-950"></div>
			<Blur />
			<Hero />
			<About />
			<Technologies />
			<Projects />
			<ExpandedProject />
		</div>
	);
}
