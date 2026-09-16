import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { OutlineButton, Tag } from "../components/Button";
import { usePresets } from "../motion";
import dot from "../assets/dot.svg";
import { scroller } from "react-scroll";
import FluidBackground from "../components/FluidBackground";
import HeroColumns from "../components/HeroColumns";

const Header = () => {
    const skills = [
        "Design interfaces",
        "Plan strategic outcome",
        "Build user-centric products",
    ];
    const [currentSkill, handleSkill] = useState(0);
    const presets = usePresets();
    useEffect(() => {
        const interval = setInterval(() => {
            handleSkill((prevSkill) => (prevSkill + 1) % skills.length);
        }, 2200);

        return () => clearInterval(interval);
    }, [skills.length]);

    // Function to scroll to the "works" section
    const scrollToWorks = () => {
        scroller.scrollTo("works", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    return (
        <>
            {/* Content */}
            <div
                className="min-h-[100svh] flex flex-col justify-center items-center relative px-4 overflow-x-clip pb-12 md:pb-32 lg:pb-40"
                id="home"
            >
                <HeroColumns />

                <img
                    src={dot}
                    alt=""
                    className="pointer-events-none absolute top-0 left-0 scale-150"
                />
                {/* Heading */}
                <div className="pointer-events-none flex container relative z-20">
                    <div className=" flex grow flex-col items-center z-20 text-center max-w-5xl mx-auto">
                        <Tag name="Available for new projects"></Tag>
                        <div className="relative w-full font-secondary italic text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight px-2">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={skills[currentSkill]}
                                    variants={presets.crossfade}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                >
                                    {skills[currentSkill]}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                        <p className="text-white font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight px-2">
                            for your next startup
                        </p>
                        <div className="pointer-events-auto flex gap-4 mt-8 md:mt-12 ">
                            <OutlineButton
                                name="View my project"
                                onClick={scrollToWorks}
                            />
                        </div>
                    </div>
                </div>
                <FluidBackground />

            </div >
        </>
    );
};


export default Header;
