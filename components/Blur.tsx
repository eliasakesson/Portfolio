import { useEffect, useRef } from "react";

export default function Blur() {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.addEventListener("mousemove", (e) => {
			const { clientX, clientY } = e;

			if (ref.current) {
				const x = clientX - ref.current.clientWidth / 2;
				const y = clientY - ref.current.clientHeight / 2 + window.scrollY;

				ref.current.animate(
					{
						left: `${x}px`,
						top: `${y}px`,
					},
					{
						duration: 15000,
						fill: "forwards",
						easing: "ease-out",
					},
				);
			}
		});
	}, []);

	return (
		<>
			<div
				ref={ref}
				className="pointer-events-none absolute -z-40 size-[50vh] origin-center animate-[spinmorpth_10s_infinite] rounded-full bg-gradient-to-r from-green-300 to-purple-400 opacity-50"
			></div>
			<div className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 -z-30 backdrop-blur-[200px]"></div>
		</>
	);
}
