import { H1, H2, H3 } from "../components/Heading";
import React, { useState } from "react";
import dot from "../assets/dot.svg";
import hashtag from "../assets/check-circle.svg";

const HowItWork = () => {
    return (
        <div className="container relative my-24">
            <div className="relative z-10 flex flex-col gap-0">
                <div className="group text-secondary opacity-20 hover:opacity-40 ">
                    <H1>My</H1>
                    <H1>Expertise</H1>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-16">
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
            <img
                src={dot}
                alt=""
                className="absolute bottom-0 left-0 scale-120 z-0"
            />
        </div>
    );
};

const AccordionItem = ({ title, desc }) => {
    return (
        <div className="flex gap-3 items-center group z-50">
            <img src={hashtag} alt="" className="h-5" />
            <H3 className="font-bold group-hover:text-brand">{title}</H3>
            <p className="text-secondary">{desc}</p>
        </div>
    );
};

export default HowItWork;
