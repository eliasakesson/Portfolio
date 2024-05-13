import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { PointerCircleContext } from "./PointerCircle";

export default function Header() {
	const { onHover, onLeave } = useContext(PointerCircleContext);

	function onHoverHandler(e: MouseEvent) {
		onHover(e as any, 96, "<b>Home</b>", 0.05);
	}

	return (
		<div
			className="absolute left-1/2 top-8 z-10 aspect-square h-16 -translate-x-1/2"
			onMouseEnter={(e) => onHoverHandler(e as any)}
			onMouseLeave={onLeave}
			onTouchStart={(e) => onHoverHandler(e as any)}
			onTouchEnd={onLeave}
		>
			<Link
				href="/"
				className="flex items-center justify-center gap-4 md:w-fit md:justify-start"
			>
				<Image src="/images/logo.png" alt="TRÄSMAK" width={64} height={64} />
			</Link>
		</div>
	);
}
