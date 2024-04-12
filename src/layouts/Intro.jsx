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
            className=" w-full  bg-neutral-800 flex flex-col  py-16  gap-12 relative "
            id="whyus"
        >
            <div className="container text-white  ">
                <span className="font-bold">Why us</span>
                <H2>Our design service</H2>
            </div>
            <div className=" container grid grid-cols-3 gap-4 items-start">
                <Card
                    name="Expertise"
                    content="We bring years of industry experience and a deep understanding of user behavior to every project."
                />
                <Card
                    name="Tailored Solutions"
                    content="We collaborate closely with clients to tailor solutions to their unique needs, optimizing digital platforms."
                />
                <Card
                    name="User-Centric Approach"
                    content="We prioritize usability, accessibility, and inclusivity to ensure that your digital products not only look great but also provide meaningful value to your users."
                />
            </div>
            <div className="h-[80px] -rotate-2 bg-brand absolute bottom-[-40px] z-10">
                <div className="inline-flex mt-6 gap-16 text-white text-3xl font-bold font-main uppercase animate-slideLeftRight  items">
                    {services.map((service, index) => (
                        <div key={index} className="flex justify-evenly">
                            <div className="w-[200px]">{service}</div>
                            <img src={StarWhite} alt="" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-[80px] w-full -rotate-20 bg-slate-700 absolute bottom-[-52px]"></div>{" "}
        </div>
    );
};

const Card = ({ name, content }) => {
    return (
        <div className="move-hover">
            <div className="bg-white rounded-xl p-6  relative h-full  lg:h-[250px]">
                <H3 className=" font-semibold text-primary mb-3">{name}</H3>
                <span className="font-normal text-secondary font-main ">
                    {content}
                </span>
            </div>
        </div>
    );
};
export default Intro;
