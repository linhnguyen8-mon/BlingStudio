import { useEffect, useRef, useState } from "react";
import { useTransform, motion, useAnimation } from "framer-motion";
import shadow from "../assets/shadow.svg";
import img_1 from "../assets/Audio book.png";
import img_2 from "../assets/EdTech.png";
import img_3 from "../assets/kindergarden.png";
import img_4 from "../assets/EdTech-2.png";
import img_5 from "../assets/Summer camp.png";
import img_6 from "../assets/Sudoku.png";
import img_7 from "../assets/Travel.png";
import img_8 from "../assets/Transportation.png";
import img_9 from "../assets/Workout.png";
import img_10 from "../assets/Workout-1.png";
import img_11 from "../assets/website.png";
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
                className="grid grid-cols-3 h-[600px] bg-[#fff]  relative gap-12 "
                ref={galleryRef}
            >
                {Array.from({ length: 3 }).map((_, i) => (
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
            className={`flex flex-col gap-12 absolute ${className}`}
            animate={animation}
        >
            {images.map((img, index) => (
                <div key={index} className="relative rounded-sm group ">
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

export default Showreel;
