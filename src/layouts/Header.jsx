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
                {/* Background Columns */}
                <div className="absolute p-24  inset-0 grid grid-cols-8 gap-8 opacity-15 z-10">
                    {Array(8)
                        .fill(0)
                        .map((_, index) => (
                            <div
                                key={index}
                                className="h-full border-l border-r border-white border-opacity-60 bg-gradient-to-b from-transparent via-white to-transparent"

                            ></div>
                        ))}
                </div>

                <img
                    src={dot}
                    alt=""
                    className="absolute top-0 left-0 scale-150"
                />
                {/* Heading */}
                <div className="flex container relative">
                    <div className=" flex grow flex-col items-center z-50 ">
                        <Tag name="Available for new projects"></Tag>
                        <p className="font-secondary italic text-white font-bold text-8xl ">
                            {skills[currentSkill]}
                        </p>
                        <p className="text-white font-medium text-7xl">
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

            </div >
        </>
    );
};


export default Header;
