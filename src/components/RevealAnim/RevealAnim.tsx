import { useEffect, useRef, useState, RefObject } from "react";

type StyleTypes = "opacity" | "scale" | "translateX" | "translateY";

const RevealAnim = ({ children, type, amount, transition, delay } : { children : any, type: StyleTypes, amount?: string, transition? : string, delay? : string }) => {

    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        });

        if (domRef.current) {
            observer.observe(domRef.current);
        }

        return () => observer.disconnect();
    }, []);


    const styles = {
        opacity: {
            opacity: isVisible ? 1 : 0
        },
        scale: {
            transform: isVisible ? "scale(1)" : `scale(${amount || "0"}%)`
        },
        translateX: {
            transform: isVisible ? "translateX(0)" : `translateX(${amount || "20%"})`,
            opacity: isVisible ? 1 : 0
        },
        translateY: {
            transform: isVisible ? "translateY(0)" : `translateY(${amount || "20%"})`,
            opacity: isVisible ? 1 : 0
        }
    }

    const common = {
        transition: transition || "0.5s ease-out",
        transitionDelay: delay || "0",
    }
    
    return (
        <div ref={domRef} style={{...styles[type], ...common}}>
            {children}
        </div>
    );
};

export default RevealAnim;