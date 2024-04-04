import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const MaskText = ({ phrases, textSize }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const textAnimation = {
        initial: { y: "100%" },
        enter: { y: "0%", transition: { duration: 1, ease: "easeOut" } },
    };

    return (
        <div ref={ref}>
            {phrases.map((phrase, index) => (
                <motion.p
                    key={index}
                    className={`text-${textSize} font-bold leading-snug overflow-hidden`}
                    custom={index}
                    variants={textAnimation}
                    initial="initial"
                    animate={inView ? "enter" : ""}
                >
                    {phrase}
                </motion.p>
            ))}
        </div>
    );
};
export default MaskText;
