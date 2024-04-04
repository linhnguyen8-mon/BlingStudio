import { useEffect, useRef, useState } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import StarBlack from "../assets/StarBlack.svg";
import Lenis from "@studio-freight/lenis";

const images = [];

for (let i = 1; i <= 12; i++) {
    images.push(`../assets/img/img_${i}.png`);
}

const OurWork = () => {
    const galleryRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const resize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", resize);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    const { width, height } = dimensions;

    const { scrollYProgress } = useScroll({
        target: galleryRef,
        offset: ["start end", "end start"],
    });

    const columnYs = [
        useTransform(scrollYProgress, [0, 1], [0, -height * 2.5]),
        useTransform(scrollYProgress, [0, 1], [0, height * 1.5]),
        useTransform(scrollYProgress, [0, 1], [0, -height * 2.2]),
        useTransform(scrollYProgress, [0, 1], [0, height * 1]),
    ];

    return (
        <div>
            <div className="h-[78px] py-3 bg-white">
                <div className="inline-flex gap-16 text-black text-3xl font-bold font-main uppercase leading-[54px]">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <>
                            <div className="w-[180px]">Our work</div>
                            <img src={StarBlack} alt="" />
                        </>
                    ))}
                </div>
            </div>
            <div
                className="grid grid-cols-4 h-[900px] relative gap-3 overflow-hidden"
                ref={galleryRef}
            >
                {Array.from({ length: 4 }).map((_, i) => (
                    <div className="relative" key={i}>
                        <Column
                            images={images.slice(i * 3, i * 3 + 3)}
                            className={`top-${
                                i === 0
                                    ? "-220%"
                                    : i === 2
                                    ? "-230%"
                                    : i === 3
                                    ? "80%"
                                    : "120%"
                            }`}
                            y={columnYs[i]}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const Column = ({ images, className, y }) => {
    return (
        <motion.div
            className={`flex flex-col gap-3 absolute ${className}`}
            style={{ y }}
        >
            {images.map((img, index) => (
                <div key={index} className="relative rounded-sm ">
                    <img
                        className="object-cover"
                        src={img}
                        alt={`Image ${index + 1}`}
                        width="620px"
                    />
                </div>
            ))}
        </motion.div>
    );
};

export default OurWork;
