import { H1, H2, H3 } from "../components/Heading";
import Showcase_1 from "../assets/Showcase_1.png";
import Showcase_2 from "../assets/Showcase_2.png";
import Showcase_3 from "../assets/Showcase_3.png";
import React, { useState } from "react";
import MaskText from "../components/MaskText";

const HowItWork = () => {
    const phrases = ["Simple process", "to create impactful", "result"];
    return (
        <div className="container grid grid-cols-2">
            <div className="py-16 flex flex-col items-start">
                <div className="text-brand text-xl font-medium leading-loose">
                    How it works
                </div>
                <MaskText phrases={phrases} textSize="5xl" />
            </div>
            <div className="gap-8 flex flex-col ">
                <AccordionItem
                    number="01"
                    title="Fill in the brief template"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar, quam at consequat congue, lorem urna congue nulla."
                />
                <AccordionItem number="02" title="Understand & empathize" />
                <AccordionItem number="03" title="Send Timelines & Invoices" />
                <AccordionItem number="04" title="Update progress daily" />
                <AccordionItem number="05" title="Project completed" />
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
                <div className="flex items-center justify-between border-b border-gray-200 py-6">
                    <span className="font-bold">{number}</span>
                    <h3 className="font-bold">{title}</h3>
                </div>
            </div>
            {isOpen && (
                <div className="p-4 bg-white border-t border-gray-200 text-gray-900 font-normal text-xl">
                    {description}
                </div>
            )}
        </>
    );
};
export default HowItWork;
