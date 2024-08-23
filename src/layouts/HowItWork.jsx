import React, { useState } from "react";
const HowItWork = () => {
    return (
        <div className="container relative my-24">
            <div className="absolute top-6 left-9 bg-backgroundCard z-20"></div>
            <div className="relative z-10 flex flex-col gap-0 p-8 bg-white rounded-2xl">
                <p className="text-textColor  font-secondary italic text-6xl font-bold">
                    My Expertise
                </p>

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

        </div>
    );
};

const AccordionItem = ({ title, desc }) => {
    return (
        <div className="flex gap-3 items-center group z-50">
            <p className="font-medium text-textColor text-3xl font-secondary">{title}</p>
            <p className="text-secondary">{desc}</p>
        </div>
    );
};

export default HowItWork;
