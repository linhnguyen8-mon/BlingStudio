import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import img_1 from "../assets/screen/concept_01.png";
import img_2 from "../assets/screen/kindergarden.png";
import img_3 from "../assets/screen/img_08.png";
import img_4 from "../assets/screen/concept_04.png";
import img_5 from "../assets/screen/Product.png";
import img_6 from "../assets/screen/concept_06.png";
import img_7 from "../assets/screen/concept_07.png";
import img_8 from "../assets/screen/concept_08.png";
import img_9 from "../assets/screen/_th.png";
import img_10 from "../assets/screen/Travel.png";
import img_11 from "../assets/screen/website.png";
import img_12 from "../assets/screen/TC_01.png";

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

const COLUMN_OFFSETS = ["0%", "-8%", "-16%", "-12%"];

const Showreel = () => {
    const [columnCount, setColumnCount] = useState(4);

    useEffect(() => {
        const update = () => {
            const width = window.innerWidth;
            setColumnCount(width < 768 ? 2 : width < 1024 ? 3 : 4);
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const columns = Array.from({ length: columnCount }, (_, columnIndex) =>
        images.filter((_, imageIndex) => imageIndex % columnCount === columnIndex)
    );

    return (
        <div className="relative w-full h-full overflow-hidden">
            <div
                className="grid relative mask-showreel h-full gap-4 md:gap-8 lg:gap-12"
                style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
            >
                {columns.map((columnImages, i) => (
                    <Column
                        key={`${columnCount}-${i}`}
                        images={columnImages}
                        offset={COLUMN_OFFSETS[i] ?? "0%"}
                        duration={20 + i * 5}
                    />
                ))}
            </div>
        </div>
    );
};

const Column = ({ images, offset, duration }) => {
    const columnRef = useRef(null);
    const animation = useAnimation();
    const loopedImages = [...images, ...images];

    useEffect(() => {
        const el = columnRef.current;
        if (!el) return;

        const startAnim = () => {
            const halfHeight = el.scrollHeight / 2;
            if (halfHeight < 1) return;
            if (Math.abs(halfHeight - lastHalf) < 1) return;
            lastHalf = halfHeight;

            animation.start({
                y: [0, -halfHeight],
                transition: {
                    duration,
                    ease: "linear",
                    repeat: Infinity,
                },
            });
        };

        let lastHalf = 0;

        startAnim();
        const observer = new ResizeObserver(startAnim);
        observer.observe(el);

        return () => {
            observer.disconnect();
            animation.stop();
        };
    }, [animation, duration, images]);

    return (
        <div className="relative h-full overflow-hidden">
            <motion.div
                ref={columnRef}
                className="flex flex-col gap-4 md:gap-8 absolute left-0 w-full"
                style={{ top: offset }}
                animate={animation}
            >
                {loopedImages.map((img, index) => (
                    <div key={`${img}-${index}`} className="relative rounded-sm">
                        <img
                            className="object-cover rounded-md p-2 md:p-3 bg-background bg-opacity-40 w-full"
                            src={img}
                            alt=""
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Showreel;
