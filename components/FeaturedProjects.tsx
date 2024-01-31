import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
	return (
		<section>
			<h2 className="mb-16 text-center text-2xl font-bold lg:text-4xl">
				Featured Projects
			</h2>
			<div className="mx-auto grid grid-cols-1 gap-8 px-8 lg:grid-cols-2 lg:grid-rows-2">
				<ProjectCard
					date={{ start: "October 2023", end: "Current" }}
					title="Träsmak UF"
					texts={[
						"Träsmak UF is a ecommerce website combined with a custom design tool built with Next.js, Firebase and Stripe, hosted on Vercel. It is built for the company Träsmak UF, a company that lets the user design and order custom wooden trays.",
						"The frontend features a custom design tool, where the user can customize and design a wooden tray with images and text. The website also features authentication, user saved designs, dynamic product ratings, design templates and custom design generation.",
						"The backend is using Stripe for payments, and Firebase for authentication, database and storage. The backend features a REST API for the frontend to communicate with. Google Analytics is used for tracking user data.",
					]}
					tags={[
						{ text: "Next.js", color: "bg-white" },
						{ text: "Stripe", color: "bg-purple-500" },
						{ text: "Firebase", color: "bg-yellow-500" },
						{ text: "Typescript", color: "bg-blue-500" },
						{ text: "OAuth", color: "bg-red-500" },
						{ text: "REST API", color: "bg-yellow-500" },
						{ text: "Tailwind CSS", color: "bg-blue-500" },
						{ text: "Vercel", color: "bg-black" },
						{ text: "Google Analytics", color: "bg-yellow-500" },
						{ text: "SEO", color: "bg-green-500" },
					]}
					link="https://www.trasmakuf.se/"
					github="https://github.com/eliasakesson/uf-ecom"
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
						{ text: "OAuth", color: "bg-red-500" },
						{ text: "REST API", color: "bg-yellow-500" },
						{ text: "Vercel", color: "bg-black" },
						{ text: "Typescript", color: "bg-blue-500" },
					]}
					link="#"
					className=""
				/>
				<ProjectCard
					date={{ start: "January 2023", end: "March 2023" }}
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
						{ text: "Javascript", color: "bg-yellow-500" },
						{ text: "OAuth", color: "bg-red-500" },
					]}
					link="#"
					className=""
				/>
			</div>
		</section>
	);
}
