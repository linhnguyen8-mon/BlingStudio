import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const COLUMN_COUNT = 8;
const MIN_OPACITY = 0.05;
const MAX_OPACITY = 0.25;

const rand = (min, max) => min + Math.random() * (max - min);

const visibleCount = () => {
    if (typeof window === "undefined") return COLUMN_COUNT;
    if (window.innerWidth >= 1024) return 8;
    if (window.innerWidth >= 768) return 4;
    return 2;
};

const columnVisibilityClass = (index) =>
    `${index >= 2 ? "hidden md:block" : ""} ${index >= 4 ? "md:hidden lg:block" : ""}`;

const nextSpark = (prevColumn) => {
    const count = visibleCount();
    let column = Math.floor(Math.random() * count);
    if (count > 1 && column === prevColumn) {
        column = (column + 1) % count;
    }
    return {
        id: Date.now() + Math.random(),
        column,
        side: Math.random() > 0.5 ? "left" : "right",
        down: Math.random() > 0.5,
        duration: rand(0.6, 0.95),
    };
};

const HeroColumn = ({ index, reduced, paused, spark, onSparkComplete }) => {
    const [opacity, setOpacity] = useState(() => rand(MIN_OPACITY, MAX_OPACITY));
    const [duration, setDuration] = useState(() => rand(3, 8));

    const cycle = () => {
        if (reduced || paused) return;
        setOpacity(rand(MIN_OPACITY, MAX_OPACITY));
        setDuration(rand(3, 8));
    };

    return (
        <div
            className={`relative h-full overflow-hidden ${columnVisibilityClass(index)}`}
        >
            <motion.div
                className="absolute inset-0 border-l border-r border-white/60 bg-gradient-to-b from-transparent via-white to-transparent"
                initial={{ opacity: reduced ? 0.15 : opacity }}
                animate={reduced ? { opacity: 0.15 } : { opacity }}
                transition={reduced ? { duration: 0 } : { duration, ease: "easeInOut" }}
                onAnimationComplete={cycle}
            />
            {spark?.column === index && !reduced && (
                <motion.div
                    key={spark.id}
                    className="pointer-events-none absolute w-px h-48"
                    style={{
                        [spark.side]: 0,
                        background:
                            "linear-gradient(to bottom, transparent, #fff 35%, #fff 65%, transparent)",
                    }}
                    initial={{ top: spark.down ? "-30%" : "102%" }}
                    animate={{ top: spark.down ? "102%" : "-30%" }}
                    transition={{ duration: spark.duration, ease: "linear" }}
                    onAnimationComplete={onSparkComplete}
                />
            )}
        </div>
    );
};

const HeroColumns = () => {
    const wrapRef = useRef(null);
    const restTimeout = useRef(0);
    const reduced = useReducedMotion();
    const [paused, setPaused] = useState(false);
    const [spark, setSpark] = useState(null);
    const inViewRef = useRef(true);
    const pageVisibleRef = useRef(true);
    const pausedRef = useRef(false);
    const reducedRef = useRef(reduced);
    reducedRef.current = reduced;

    useEffect(() => {
        const syncPause = () => {
            const next = !(inViewRef.current && pageVisibleRef.current);
            pausedRef.current = next;
            setPaused(next);
        };

        const wrap = wrapRef.current;
        const io = new IntersectionObserver(
            ([entry]) => {
                inViewRef.current = entry.isIntersecting;
                syncPause();
            },
            { threshold: 0.05 }
        );
        if (wrap) io.observe(wrap);

        const onVisibility = () => {
            pageVisibleRef.current = document.visibilityState !== "hidden";
            syncPause();
        };
        document.addEventListener("visibilitychange", onVisibility);

        return () => {
            io.disconnect();
            document.removeEventListener("visibilitychange", onVisibility);
        };
    }, []);

    useEffect(() => {
        if (reduced || paused) {
            setSpark(null);
            return;
        }

        restTimeout.current = window.setTimeout(() => {
            setSpark(nextSpark());
        }, rand(600, 1600));

        return () => clearTimeout(restTimeout.current);
    }, [reduced, paused]);

    const onSparkComplete = () => {
        if (reducedRef.current || pausedRef.current) return;
        clearTimeout(restTimeout.current);
        restTimeout.current = window.setTimeout(() => {
            if (reducedRef.current || pausedRef.current) return;
            setSpark((prev) => nextSpark(prev?.column));
        }, rand(700, 1800));
    };

    return (
        <div
            ref={wrapRef}
            className="pointer-events-none absolute inset-0 z-10 grid grid-cols-2 gap-4 p-6 md:grid-cols-4 md:gap-6 md:p-16 lg:grid-cols-8 lg:gap-8 lg:p-24"
            aria-hidden
        >
            {Array.from({ length: COLUMN_COUNT }, (_, index) => (
                <HeroColumn
                    key={index}
                    index={index}
                    reduced={reduced}
                    paused={paused}
                    spark={spark}
                    onSparkComplete={onSparkComplete}
                />
            ))}
        </div>
    );
};

export default HeroColumns;
