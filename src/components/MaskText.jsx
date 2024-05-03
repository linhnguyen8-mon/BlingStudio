import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { H1, H2, H3 } from "../components/Heading";

const MaskText = ({ phrases, className }) => {
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
                    <H2>
                        <motion.p
                            className={`${className} font-white font-bold leading-loose`}
                            custom={index}
                            variants={textAnimation}
                            initial="initial"
                            animate={inView ? "enter" : ""}
                            style={{ overflow: "hidden" }}
                        >
                            {phrase}
                        </motion.p>
                    </H2>
                </div>
            ))}
        </div>
    );
};
export default MaskText;
