import { marked } from "marked";
import { load } from "cheerio";

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
			console.error(`No readme found for ${repo}`);
			return null;
		}
		console.log(readme);

		const markdown = await marked.parse(atob(readme.content));

		const $ = load(markdown); // Load the markdown content into cheerio

		const images = $("img"); // Select all <img> elements
		const imageSrcs: string[] = [];

		images.each((index, element) => {
			const src = $(element).attr("src"); // Get the src attribute of each <img>
			if (src) {
				imageSrcs.push(src); // Push the image src into the array
			}
		});

		const githubImages = imageSrcs.filter((src) =>
			src.includes("raw.githubusercontent.com"),
		);
		console.log(githubImages);
		return githubImages;
	} catch (error) {
		console.error(error);
		return null;
	}
}

const largeProjects = ["Trasmak-UF"];

const oldProjects = [
	"Portfolio",
	"eprojects",
	"glossary-website",
	"survival-game",
	"Task-manager",
	"Chatterly",
	"Code-editor",
	"opengl-minecraft",
];

const mainProjects = ["Trasmak-UF", "Novabase", "Unity-Chess", "Volted"];

export function sortRepos(repos: any[]) {
	// Sort the repos so that the main projects are first
	const main = repos.filter((repo) => mainProjects.includes(repo.name));
	const other = repos.filter((repo) => !mainProjects.includes(repo.name));

	// Sort repos by order in mainProjects
	const sortedMain = main.sort(
		(a, b) => mainProjects.indexOf(a.name) - mainProjects.indexOf(b.name),
	);

	return [...sortedMain, ...other];
}

export function sortRepos2(repos: any[]): {
	large: any[];
	relevant: any[];
	old: any[];
} {
	const large = repos.filter((repo) => largeProjects.includes(repo.name));
	const relevant = repos.filter(
		(repo) =>
			!largeProjects.includes(repo.name) && !oldProjects.includes(repo.name),
	);
	const old = repos.filter((repo) => oldProjects.includes(repo.name));

	// Sort so that its in the order: large relevant relevant large relevant relevant large ...
	const relevantWithLarge = relevant.reduce((acc, repo, i) => {
		if (i % 2 === 0) {
			if (large.length === 0) {
				acc.push(repo);
				return acc;
			}
			acc.push(large.shift());
		} else {
			acc.push(repo);
		}
		return acc;
	}, [] as any[]);

	return {
		large,
		relevant: relevantWithLarge,
		old,
	};
}
