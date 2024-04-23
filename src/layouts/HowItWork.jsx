import { H1, H2, H3 } from "../components/Heading";
import Showcase_1 from "../assets/Showcase_1.png";
import Showcase_2 from "../assets/Showcase_2.png";
import Showcase_3 from "../assets/Showcase_3.png";
import React, { useState } from "react";
import MaskText from "../components/MaskText";

const HowItWork = () => {
    const phrases = ["Simple process", "to create impactful", "result"];
    return (
        <div className="smm:p-3 md:container md:p-8 relative my-[80px]">
            <div className=" grid sm:grid-cols-1 lg:grid-cols-3  p-8 min-h-[700px] gap-12 bg-white rounded-xl">
                <div className=" flex flex-col justify-start col-span-1 gap-4">
                    <div className="text-brand text-xl font-medium leading-loose">
                        How it works
                    </div>
                    <MaskText phrases={phrases} textSize="5xl" />
                </div>
                <div className=" flex flex-col col-span-2 ">
                    <AccordionItem
                        number="01"
                        title="Fill in the brief template"
                        description="Provide with essential details to understand your project."
                    />
                    <AccordionItem
                        number="02"
                        title="Understand & empathize"
                        description="Research and ensure our solutions align perfectly with your audience's expectation."
                    />
                    <AccordionItem
                        number="03"
                        title="Send Timelines & Invoices"
                        description="Provide a clear timeline ensuring clarity and accountability throughout the process"
                    />
                    <AccordionItem
                        number="04"
                        title="Update progress daily"
                        description="Regular updates allow for collaboration and feedback, ensuring the project stays on track."
                    />
                    <AccordionItem
                        number="05"
                        title="Project completed"
                        description="Upon completion, we deliver a polished, high-quality result that exceeds your expectations. Your satisfaction is our priority, and we're committed to delivering impactful outcomes for your project."
                    />
                </div>
            </div>
        </div>
    );
};

const AccordionItem = ({ number, title, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => setIsOpen(!isOpen);

    return (
        <>
            <div onClick={toggleAccordion}>
                <div className="flex gap-3 items-center justify-start pt-8 pb-3 cursor-pointer ">
                    <span className="font-bold">{number}</span>
                    <H3 className="font-bold hover:text-brand ">{title}</H3>
                </div>
            </div>
            {isOpen && (
                <div className="px-8  text-secondary font-normal font-main text-xl">
                    {description}
                </div>
            )}
        </>
    );
};
export default HowItWork;
