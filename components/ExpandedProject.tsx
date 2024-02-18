import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { marked } from "marked";
import { fetchReadme } from "@/utils/repos";

export default function ExpandedProject() {
	const router = useRouter();
	const ref = useRef<HTMLElement>(null);

	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const { expand } = router?.query;
		if (!expand) {
			setVisible(false);
			return;
		}

		async function getReadme() {
			const readMe = await fetchReadme(expand as string);
			if (!readMe || !readMe.content) {
				console.error("No readme found");
				return;
			}
			const markdown = await marked(atob(readMe.content));
			if (ref.current) {
				setVisible(true);
				ref.current.innerHTML = markdown;
			} else {
				setVisible(false);
				console.error("Ref is null");
			}
		}

		getReadme();
	}, [router]);

	function closeProject() {
		setVisible(false);
		router.push("/", undefined, { shallow: true });
	}

	return (
		<div
			style={!visible ? { display: "none" } : {}}
			className="fixed bottom-0 left-0 right-0 top-0 flex cursor-pointer items-center justify-center bg-black bg-opacity-25 p-8 backdrop-blur-[10px]"
			onClick={closeProject}
		>
			<article
				ref={ref}
				className="prose prose-blue prose-invert z-30 h-full max-w-5xl cursor-default overflow-y-scroll rounded-lg border border-slate-700 bg-background p-16 backdrop-blur-[50px] prose-h2:border-b prose-h2:border-slate-700"
				onClick={(e) => e.stopPropagation()}
			></article>
		</div>
	);
}
