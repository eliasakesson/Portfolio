import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function ExpandedProject() {
	const router = useRouter();
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const { expand } = router?.query;

		setVisible(!!expand);
	}, [router.query.expand]);

	function closeProject() {
		setVisible(false);
		router.push("/", undefined, { shallow: true });
	}

	return (
		<article
			style={!visible ? { display: "none" } : {}}
			className="fixed bottom-0 left-0 right-0 top-0 flex cursor-pointer items-center justify-center bg-black bg-opacity-25 backdrop-blur-[10px]"
			onClick={closeProject}
		>
			<div
				className="relative flex h-full w-full flex-col gap-8 bg-white p-8 lg:rounded-xl"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					className="absolute right-8 top-8 flex h-8 w-8 items-center justify-center rounded-full text-xl transition-colors duration-300 hover:bg-slate-200"
					onClick={closeProject}
				>
					<FaTimes />
				</button>
				<h1 className="text-3xl font-bold">Träsmak UF</h1>
				<video
					controls
					autoPlay
					className="rounded-xl bg-gray-400 lg:w-[75vw] xl:w-[60vw] 2xl:w-[50vw]"
				>
					<source src="/videos/trasmak-uf.mp4" type="video/mp4" />
				</video>
			</div>
		</article>
	);
}
