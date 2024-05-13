import { createContext, forwardRef, useEffect, useMemo, useRef } from "react";
import {
	useSpring,
	motion,
	MotionValue,
	useMotionValueEvent,
} from "framer-motion";

export const PointerCircleContext = createContext({
	onHover: (
		e: PointerEvent,
		size?: number,
		tooltip?: string,
		tooltipDelay?: number,
	) => {},
	onLeave: () => {},
});

const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

export const PointerCircleProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const hoveredEl = useRef<HTMLElement | null>(null);
	const tooltipRef = useRef<HTMLParagraphElement | null>(null);

	const smoothMouse = {
		x: useSpring(-100, smoothOptions),
		y: useSpring(-100, smoothOptions),
	};

	const smoothSize = useSpring(32, smoothOptions);
	const smoothOpacity = useSpring(0, smoothOptions);

	useEffect(() => {
		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("touchmove", onMouseMove);
		document.addEventListener("touchend", onLeave);

		return () => {
			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("touchmove", onMouseMove);
			document.removeEventListener("touchend", onLeave);
		};
	}, []);

	function onMouseMove(e: MouseEvent | TouchEvent) {
		// if (hoveredEl.current) return;
		const { clientX, clientY } = e instanceof MouseEvent ? e : e.touches[0];

		if (!hoveredEl.current) {
			smoothMouse.x.set(clientX);
			smoothMouse.y.set(clientY);
			return;
		}

		const { x, y, width, height } = (
			hoveredEl.current as HTMLElement
		).getBoundingClientRect();

		const centerX = x + width / 2;
		const centerY = y + height / 2;

		const midX = clientX * 0.35 + centerX * 0.65;
		const midY = clientY * 0.35 + centerY * 0.65;

		smoothMouse.x.set(midX);
		smoothMouse.y.set(midY);
	}

	function onHover(
		e: PointerEvent,
		size = 192,
		tooltip?: string,
		tooltipDelay: number = 0.5,
	) {
		if (!e.currentTarget) return;

		hoveredEl.current = e.currentTarget as HTMLElement;

		if (tooltipRef.current && tooltip) {
			tooltipRef.current.innerHTML = tooltip;

			setTimeout(() => {
				if (hoveredEl.current) smoothOpacity.set(1);
			}, tooltipDelay * 1000);
		}

		smoothSize.set(size);
	}

	function onLeave() {
		hoveredEl.current = null;
		smoothSize.set(32);
		smoothOpacity.set(0);
	}

	return (
		<PointerCircleContext.Provider value={{ onHover, onLeave }}>
			<PointerCircle
				ref={tooltipRef}
				smoothMouse={smoothMouse}
				smoothSize={smoothSize}
				smoothOpacity={smoothOpacity}
			/>
			{children}
		</PointerCircleContext.Provider>
	);
};

const PointerCircle = forwardRef(
	(
		{
			smoothMouse,
			smoothSize,
			smoothOpacity,
		}: {
			smoothMouse: { x: MotionValue<number>; y: MotionValue<number> };
			smoothSize: MotionValue<number>;
			smoothOpacity: MotionValue<number>;
		},
		tooltipRef: any,
	) => {
		const tooltipPos = {
			x: useSpring(0, smoothOptions),
			y: useSpring(0, smoothOptions),
		};

		useMotionValueEvent(smoothMouse.x, "change", (x) => {
			if (window && window.innerWidth < 1024) {
				tooltipPos.x.set(16);
				return;
			}

			tooltipPos.x.set(x + smoothSize.get() / 2);
		});

		useMotionValueEvent(smoothMouse.y, "change", (y) => {
			tooltipPos.y.set(y - smoothSize.get() / 2);
		});

		return (
			<>
				<motion.div
					className="pointer-events-none fixed z-20 mix-blend-difference"
					style={{ left: smoothMouse.x, top: smoothMouse.y }}
				>
					<div className="relative">
						<motion.div
							style={{
								width: smoothSize,
								height: smoothSize,
							}}
							className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
						></motion.div>
					</div>
				</motion.div>
				<motion.div
					style={{
						left: tooltipPos.x,
						top: tooltipPos.y,
						opacity: smoothOpacity,
					}}
					className="pointer-events-none fixed z-20 w-max max-w-[min(65ch,calc(100vw-32px))] rounded-xl bg-foreground p-4 text-background"
				>
					<p ref={tooltipRef}></p>
				</motion.div>
			</>
		);
	},
);
