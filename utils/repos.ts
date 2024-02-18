import { marked } from "marked";

export async function fetchRepositories() {
	try {
		const res = await fetch("https://api.github.com/users/eliasakesson/repos", {
			headers: {
				Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN}`,
			},
		});

		if (!res.ok) {
			throw new Error(`Error fetching repositories: ${res.statusText}`);
		}

		const data = await res.json();

		const filteredData = data.filter(
			(repo: any) => repo.fork === false && repo.name !== "eliasakesson",
		);
		const sortedData = filteredData.sort((a: any, b: any) => {
			const aDate = new Date(a.updated_at).getTime();
			const bDate = new Date(b.updated_at).getTime();
			return bDate - aDate;
		});

		return sortedData;
	} catch (error) {
		console.error(error);
		return [];
	}
}

export async function fetchReposWithImages() {
	const repos = await fetchRepositories();
	const reposWithImages = await Promise.all(
		repos.map(async (repo: any) => {
			const images = await fetchRepoImages(repo.name);
			return { ...repo, images };
		}),
	);

	return reposWithImages;
}

export async function fetchReadme(repo: string) {
	try {
		const response = await fetch(
			`https://api.github.com/repos/eliasakesson/${repo}/contents/README.md`,
			{
				headers: {
					Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN}`,
				},
			},
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		return null;
	}
}

export async function fetchRepoImages(repo: string) {
	try {
		const readme = await fetchReadme(repo);
		if (!readme || !readme.content) {
			return null;
		}

		const markdown = await marked.parse(atob(readme.content));
		const div = document.createElement("div");
		div.innerHTML = markdown;
		const images = div.querySelectorAll("img");
		const imageSrcs = Array.from(images).map((image) => image.src);
		const githubImages = imageSrcs.filter((src) =>
			src.includes("raw.githubusercontent.com"),
		);
		return githubImages;
	} catch (error) {
		console.error(error);
		return null;
	}
}
