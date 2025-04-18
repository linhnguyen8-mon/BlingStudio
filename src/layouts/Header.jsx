import React, { useState, useEffect, useCallback, memo } from "react";
import { OutlineButton, Tag } from "../components/Button";
import dot from "../assets/dot.svg";
import { scroller } from "react-scroll";
import svg from '../assets/svg.png';
import LazyLoad from 'react-lazyload';

// Move skills outside component to prevent recreation on each render
const SKILLS = [
    "Design interfaces",
    "Plan strategic outcome",
    "Build user-centric products",
];

// Create smaller components for better render optimization
const BackgroundColumns = memo(() => (
    <div className="absolute p-24 inset-0 grid grid-cols-8 gap-8 opacity-15 z-10">
        {Array.from({ length: 8 }, (_, index) => (
            <div
                key={index}
                className="h-full border-l border-r border-white border-opacity-60 bg-gradient-to-b from-transparent via-white to-transparent"
            />
        ))}
    </div>
));

const SkillText = memo(({ currentSkill }) => (
    <p className="font-secondary italic text-white font-bold text-4xl sm:text-6xl md:text-8xl">
        {SKILLS[currentSkill]}
    </p>
));

const Header = () => {
    const [currentSkill, setCurrentSkill] = useState(0);

    // Optimize interval - remove unnecessary dependency
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSkill(prevSkill => (prevSkill + 1) % SKILLS.length);
        }, 1000);

        return () => clearInterval(interval);
    }, []); // No dependencies needed

    // Memoize function to prevent recreation on each render
    const scrollToWorks = useCallback(() => {
        scroller.scrollTo("works", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    }, []);

    return (
        <div className="h-[1000px] flex flex-col justify-center items-center relative -mx-4 sm:-mx-1 md:-mx-16 lg:-mx-24" id="home">
            {/* Background Columns */}
            <BackgroundColumns />

            <img
                src={dot}
                alt="Decorative dot pattern"
                className="absolute top-0 left-0 scale-150"
            />

            {/* Heading */}
            <div className="flex container relative">
                <div className="flex grow flex-col items-center z-50">
                    <Tag name="Available for new projects" />
                    <SkillText currentSkill={currentSkill} />
                    <p className="text-white font-medium text-3xl sm:text-4xl md:text-7xl">
                        for your next startup
                    </p>
                    <div className="flex gap-4 mt-8 sm:mt-12">
                        <OutlineButton
                            name="View my project"
                            onClick={scrollToWorks}
                        />
                    </div>
                </div>
            </div>

            <LazyLoad height={1000} once className="fixed bottom-0 left-0 w-screen h-screen flex justify-center items-center scale-150">
                <img src={svg} alt="Background decoration" className="w-screen h-screen object-cover" />
            </LazyLoad>
        </div>
    );
};

export default memo(Header);
