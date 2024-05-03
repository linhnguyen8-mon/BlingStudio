import { H1, H2, H3 } from "../components/Heading";
import React, { useState } from "react";
import MaskText from "../components/MaskText";
import brief from "../assets/brief.svg";
import conduct from "../assets/conduct.svg";
import timeline from "../assets/timeline.svg";
import design from "../assets/design.svg";
import deliver from "../assets/deliver.svg";

const HowItWork = () => {
    const phrases = ["Simple process", "to create impactful result"];
    return (
        <div className="smm:p-3 md:container md:p-8 relative my-[80px]">
            <div className=" flex flex-col  p-8 min-h-[540px] gap-4 bg-white rounded-xl">
                <div className=" flex flex-col justify-start col-span-1 gap-0">
                    <div className="text-brand font-bold leading-loose">
                        How it works
                    </div>
                    <MaskText phrases={phrases} textSize="5xl" />
                </div>
                <div className=" grid smm:grid-cols-1 lg:grid-cols-5 gap-4">
                    <AccordionItem
                        icon={brief}
                        title="Fill in the brief template"
                        description="Provide with essential details to understand your project."
                    />
                    <AccordionItem
                        icon={conduct}
                        title="Conduct research"
                        description="Research our solutions align perfectly with your audience's expectation."
                    />
                    <AccordionItem
                        icon={timeline}
                        title="Send Timelines & Invoices"
                        description="Provide a clear timeline throughout the process."
                    />
                    <AccordionItem
                        icon={design}
                        title="Design & Refine"
                        description="Wireframe, sketch, prototype, present, revise, handoff."
                    />
                    <AccordionItem
                        icon={deliver}
                        title="Deliver to Development"
                        description="Deliver a polished, high-quality result that exceeds your expectations."
                    />
                </div>
            </div>
        </div>
    );
};

const AccordionItem = ({ icon, title, description }) => {
    const toggleAccordion = () => setIsOpen(!isOpen);

    return (
        <>
            <div onClick={toggleAccordion}>
                <div className="flex flex-col gap-3 justify-start pt-8 pb-3 group ">
                    <img
                        src={icon}
                        alt=""
                        className="w-12 bg-[#f0f1fe] p-2 rounded-xl group-hover:bg-[#fff] group-hover:shadow-slate-400 group-hover:shadow-2xl group-hover:shadow-opacity-50"
                    />
                    <H3 className="font-bold group-hover:text-brand ">
                        {title}
                    </H3>
                </div>

                <div className=" text-secondary font-normal font-main text-md mt-2">
                    {description}
                </div>
            </div>
        </>
    );
};
export default HowItWork;
