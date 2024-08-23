import Star from "../assets/Star.svg";
import { H1 } from "../components/Heading";
import React, { useState, useRef, useEffect } from "react";
import { FilledButton, OutlineButton, Tag } from "../components/Button";
import close from "../assets/Close.svg";
import dot from "../assets/dot.svg";
import { scroller } from "react-scroll";
import svg from '../assets/svg.png'
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
                        <p className="text-primary font-medium opacity-80 text-7xl  ">
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
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <img src={svg} alt="" className="w-full" />
                </div>

            </div>
        </>
    );
};

const ExpandableCard = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            className={`w-[400px] absolute  left-8 bottom-[0px] ${isExpanded ? "translate-y-[8px]" : ""
                }`}
        >
            <div
                className={` duration-500 ease-in-out ${isExpanded ? "h-[auto]" : "h-[64px]"
                    }`}
            >
                <div
                    className="cursor-pointer relative"
                    onClick={toggleExpansion}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {isExpanded ? (
                        <ExpandedTags />
                    ) : (
                        <CollapsedTags isHovered={isHovered} />
                    )}
                </div>
            </div>
        </div>
    );
};
const CollapsedTags = ({ isHovered }) => (
    <div
        className={`transition-transform ${isHovered ? "translate-y-[8px]" : ""
            }`}
    >
        <Button
            name="Get to know us"
            className="rounded-md bg-brand pt-8 h-16"
            classNameChild="text-white"
        />
    </div>
);
const ExpandedTags = () => (
    <div className="z-50 pt-4 flex flex-col overflow-hidden gap-2 transform -rotate-90 bg-white rounded-xl border border-slate-100 absolute top-[-48px] right-[2px]  font-main text-md text-secondary leading-loose shadow-2xl shadow-[#156fe51e]">
        <div className="px-4 ">
            <img src={close} alt="" className="fixed right-4" />
            <div className="font-bold text-2xl">Hi, all 🙌</div>
            <div className="font-bold text-2xl">
                I'm Linh | creator of Bling studio
            </div>
            <div className="italic">
                <div className=" uppercase text-brand font-semibold mt-4 ">
                    Few words about me
                </div>
                <div>
                    <span className="font-bold">Full-time:</span> A passionate
                    designer dedicated to enhancing the world of product.
                </div>
                <div>
                    <span className="font-bold">Part-time:</span> A self-taught
                    nerd enthusiast with tech and design.
                </div>
                <div>
                    <span className="font-bold">All-the-time:</span> A life-long
                    learner, passionate about humanity things.
                </div>
            </div>
        </div>
        <div className="bg-brand p-4 text-white">
            <span className="font-bold">Fun fact:</span> This website is
            designed and coded by me.
            <div>All in ReactJS + Tailwind + AI mentor</div>
        </div>
    </div>
);
export default Header;
