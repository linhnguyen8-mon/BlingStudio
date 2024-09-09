import React, { useState } from "react";
import grid from '../assets/grid.png'
const HowItWork = () => {
    return (
        <div className=" container my-24">
            <div className="gradient-bg overflow-hidden	  relative z-10 flex flex-col gap-0 p-8 pb-0 bg-white rounded-2xl shadow-[rgba(7,_65,_210,_0.02)_0px_9px_20px] ">
                <p className="text-white  font-secondary italic text-6xl font-bold">
                    My Expertise
                </p>
                <img src={grid} className="absolute bottom-0 scale-70 opacity-30 " alt="" />
                <div className="grid grid-cols-2 gap-4 mt-12 p-10 
                bg-white rounded-t-2xl  backdrop-blur-2xl bg-opacity-20
                ring-1 ring-white ring-opacity-40">
                    <AccordionItem
                        title="Website/Mobile/Webapp"
                        desc="Create cross-platform application"
                    />
                    <AccordionItem
                        title="UI Design"
                        desc="Plan visual moodboard, create design system,..."
                    />
                    <AccordionItem
                        title="UX strategy"
                        desc="Conduct user testing, AI, detect user's pain points..."
                    />
                    <AccordionItem
                        title="Landing Pages"
                        desc="Optimize the retention & conversion rate"
                    />
                    <AccordionItem
                        title="Branding"
                        desc="Create brand visually works for all platform"
                    />
                </div>
            </div>

        </div>
    );
};

const AccordionItem = ({ title, desc }) => {
    return (
        <div className="flex gap-3 items-center group z-50">
            <p className="font-medium text-textColor text-3xl font-secondary">{title}</p>
            <p className="text-white">{desc}</p>
        </div>
    );
};

export default HowItWork;
