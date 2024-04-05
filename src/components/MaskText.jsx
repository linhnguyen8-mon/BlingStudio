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
                <div key={index} className="overflow-hidden">
                    <motion.p
                        className={`text-${textSize} font-bold leading-snug `}
                        custom={index}
                        variants={textAnimation}
                        initial="initial"
                        animate={inView ? "enter" : ""}
                        style={{ overflow: "hidden" }}
                    >
                        {phrase}
                    </motion.p>
                </div>
            ))}
        </div>
    );
};
export default MaskText;
