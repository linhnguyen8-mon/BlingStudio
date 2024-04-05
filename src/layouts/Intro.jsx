import { H1, H2, H3 } from "../components/Heading";
import { StyledButton } from "../components/Button";
import StarWhite from "../assets/StarWhite.svg";
import React, { useEffect } from "react";

const Intro = () => {
    const services = [
        "WEBSITE",
        "mOBILE",
        "wEB APP",
        "bRANDING",
        "WEBSITE",
        "mOBILE",
        "wEB APP",
        "bRANDING",
        "WEBSITE",
        "mOBILE",
        "wEB APP",
        "bRANDING",
    ];
    return (
        <div
            className=" bg-neutral-800 flex flex-col justify-center py-16 gap-12 pb-[-12px]"
            id="whyus"
        >
            <div className="container text-white  ">
                <span className="font-bold">Why us</span>
                <H2>Our design service</H2>
            </div>

            <div className=" container grid grid-cols-3 gap-4 items-center">
                <Card
                    name="Communication"
                    content="Explore our comprehensive design services tailored to meet your unique needs. From user interface design to user experience research, we provide end-to-end solutions to enhance your digital presence."
                />
                <Card
                    name="Communication"
                    content="Discover our iterative UI/UX design process that focuses on user-centric solutions. From initial concept sketches to prototyping and testing, we ensure seamless experiences for your users."
                />
                <Card
                    name="Communication"
                    content="Learn about the advantages of collaborating with our experienced design team. From industry expertise to personalized attention, we prioritize your project's success and satisfaction."
                />
            </div>
            <div className="h-[78px] -rotate-1 bg-brand ">
                <div className="inline-flex mt-6 gap-16 text-white text-3xl font-bold font-main uppercase animate-slideLeftRight  items">
                    {services.map((service, index) => (
                        <div key={index} className="flex justify-evenly">
                            <div className="w-[200px]">{service}</div>
                            <img src={StarWhite} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Card = ({ name, content }) => {
    return (
        <div className="bg-white rounded-xl p-6 pb-9 ">
            <H3 className="text-4xl font-semibold text-primary mb-3">{name}</H3>
            <span className="font-normal text-secondary font-main ">
                {content}
            </span>
        </div>
    );
};
export default Intro;
