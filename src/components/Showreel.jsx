import { useEffect, useRef, useState } from "react";
import { useTransform, motion, useAnimation } from "framer-motion";
import img_1 from "../assets/screen/concept_01.png";
import img_2 from "../assets/screen/kindergarden.png";
import img_3 from "../assets/screen/concept_03.png";
import img_4 from "../assets/screen/concept_04.png";
import img_5 from "../assets/screen/Product.png";
import img_6 from "../assets/screen/concept_06.png";
import img_7 from "../assets/screen/concept_07.png";
import img_8 from "../assets/screen/concept_08.png";
import img_9 from "../assets/screen/_th.png";
import img_10 from "../assets/screen/Travel.png";
import img_11 from "../assets/screen/website.png";
import img_12 from "../assets/img/img_12.png";

const images = [
    img_1,
    img_2,
    img_3,
    img_4,
    img_5,
    img_6,
    img_7,
    img_8,
    img_9,
    img_10,
    img_11,
    img_12,
];

const Showreel = () => {
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

    const columnYs = [
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation(),
    ];

    useEffect(() => {
        columnYs.forEach((animation, i) => {
            animation.start({
                y: [0, -height * 1],
                transition: {
                    y: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20 + i * 5, // Each column scrolls at a different speed
                        ease: "linear",
                    },
                },
            });
        });
    }, [height, columnYs]);

    const topPositions = {
        0: "0%",
        1: "100%",
        2: "0%",
        3: "820%",
    };

    return (
        <div className="container rounded-2xl overflow-hidden relative ">
            <div
                className="grid grid-cols-4 h-[700px] relative gap-12 mask-showreel"
                ref={galleryRef}
            >
                {Array.from({ length: 4 }).map((_, i) => (
                    <div className="relative" key={i}>
                        <Column
                            images={images.slice(i * 3, i * 3 + 3)}
                            className={`top-${topPositions[i]}`}
                            animation={columnYs[i]}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const Column = ({ images, className, animation }) => {
    return (
        <motion.div
            className={`flex flex-col gap-8 absolute ${className}`}
            animate={animation}
        >
            {images.map((img, index) => (
                <div key={index} className="relative rounded-sm group ">
                    <img
                        className="object-cover rounded-md p-3 bg-background bg-opacity-40"
                        src={img}
                        alt={`Image ${index + 1}`}
                        width="500px"
                    />
                </div>
            ))}
        </motion.div>
    );
};

export default Showreel;
