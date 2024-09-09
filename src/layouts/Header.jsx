import React, { useState, useRef, useEffect } from "react";
import { FilledButton, OutlineButton, Tag } from "../components/Button";
import dot from "../assets/dot.svg";
import { scroller } from "react-scroll";
import svg from '../assets/svg.png'
import LazyLoad from 'react-lazyload';

const Header = () => {
    const skills = [
        "Design interfaces",
        "Plan strategic outcome",
        "Build user-centric products",
    ];
    const [currentSkill, handleSkill] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            handleSkill((prevSkill) => (prevSkill + 1) % skills.length);
        }, 1000);

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
                className=" h-[1000px] flex flex-col justify-center items-center relative"
                id="home"
            >
                <img
                    src={dot}
                    alt=""
                    className="absolute top-0 left-0 scale-150"
                />
                {/* Heading */}
                <div className="flex container relative">
                    <div className=" flex grow flex-col items-center z-50 ">
                        <Tag name="Available for new project"></Tag>
                        <p className="font-secondary italic text-white font-bold text-8xl ">
                            {skills[currentSkill]}
                        </p>
                        <p className="text-primary font-medium opacity-80 text-7xl backdrop-blur-lg">
                            for your next startup
                        </p>
                        <div className="flex gap-4 lg:flex mt-12 ">
                            <OutlineButton
                                name="View my project"
                                onClick={scrollToWorks}
                            />
                        </div>
                    </div>
                </div>
                <LazyLoad className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <img src={svg} alt="" className="w-full" />
                </LazyLoad>

            </div>
        </>
    );
};


export default Header;
