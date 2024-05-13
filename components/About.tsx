export default function About() {
	return (
		<section
			id="about"
			className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-8 py-16"
		>
			<h2 className="whitespace-nowrap text-4xl font-bold lg:mt-16 lg:text-5xl">
				About me
			</h2>
			<p className="max-w-prose text-lg lg:text-xl lg:leading-normal xl:text-3xl xl:leading-normal">
				<b>18 year old</b> software developer from Sweden. Currently studying{" "}
				<b>information-technology</b> at high school, expecting to graduate in
				summer 2024.
			</p>
			<p className="max-w-prose text-lg lg:text-xl lg:leading-normal xl:text-3xl xl:leading-normal">
				<b>6 years</b> of experience in programming, <b>3 years</b> of
				experience in developing web applications. Mostly focusing on
				<b> full-stack development</b>, but also doing games, mobile- and
				desktop applications, electronics, and more.
			</p>
		</section>
	);
}
