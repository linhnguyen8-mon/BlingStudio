import { H1, H2, H3 } from "../components/Heading";
import { StyledButton } from "../components/Button";
import StarWhite from "../assets/StarWhite.svg";
import React, { useEffect } from "react";
import pattern from "../assets/pattern.png";
import triangle from "../assets/triangle.svg";
import star01 from "../assets/star-01.svg";
import star04 from "../assets/star-04.svg";

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
            className=" w-full  bg-neutral-800 flex flex-col  py-[80PX]  gap-12 relative "
            id="whyus"
        >
            <div className=" sm:px-3 lg:px-6 text-white  ">
                <span className="font-bold">Why us</span>
                <H2>Our design service</H2>
            </div>
            <img
                className="absolute top-0 right-0 w-[400px] opacity-[0.02]"
                src={pattern}
                alt=""
            />
            <div className=" grid sm:px-3 lg:px-6 sm:grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                <Card
                    src={triangle}
                    name="Expertise"
                    content="We bring years of industry experience and a deep understanding of user behavior to every project."
                />
                <Card
                    src={star04}
                    name="Tailored Solutions"
                    content="We collaborate closely with clients to tailor solutions to their unique needs, optimizing digital platforms."
                />
                <Card
                    src={star01}
                    name="User-Centric Approach"
                    content="We prioritize usability, accessibility, and inclusivity to ensure that your digital products not only look great but also provide meaningful value to your users."
                />
            </div>
            <div className="container p-0">
                <div className="h-[80px] -rotate-2 bg-brand absolute bottom-[-40px] right-0 z-10 overflow-hidden">
                    <div className="inline-flex mt-6 gap-16 text-white text-3xl font-bold font-main uppercase animate-slideLeftRight">
                        {services.map((service, index) => (
                            <div key={index} className="flex justify-evenly">
                                <div className="w-[200px]">{service}</div>
                                <img src={StarWhite} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="h-[80px] w-full -rotate-20 bg-slate-700 absolute bottom-[-52px]"></div>{" "}
        </div>
    );
};

const Card = ({ name, content, src }) => {
    return (
        <div className="move-hover group">
            <div className=" bg-[#363636] group-hover:shadow-xl rounded-xl p-6 relativen  h-full lg:h-[380px]">
                <img
                    src={src}
                    alt=""
                    className="w-12 pb-8 group-hover:scale-105 "
                />
                <H3 className=" font-semibold text-white mb-3 opacity-70 group-hover:opacity-100">
                    {name}
                </H3>
                <span className="font-normal text-white opacity-70 group-hover:opacity-100 font-main leading-loose  ">
                    {content}
                </span>
            </div>
        </div>
    );
};
export default Intro;
