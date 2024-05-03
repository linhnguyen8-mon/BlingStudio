import { H1, H2, H3 } from "../components/Heading";
import { useState, useEffect } from "react";
import { StyledButton } from "../components/Button";
import StarWhite from "../assets/StarWhite.svg";
import pattern from "../assets/pattern.png";
import triangle from "../assets/triangle.svg";
import star01 from "../assets/star-01.svg";
import star04 from "../assets/star-04.svg";
import Iphone from "../assets/Iphone.png";
import MaskText from "../components/MaskText";

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
        "WEBSITE",
        "mOBILE",
        "wEB APP",
        "bRANDING",
        "WEBSITE",
        "mOBILE",
        "wEB APP",
        "bRANDING",
    ];
    const phrases = ["Make the w --- rld", "full of bling"];

    // Show div+img
    const [showDiv, setShowDiv] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowDiv(true);
        }, 400);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <div
            className=" w-full  bg-brand flex flex-col  py-[120PX]  gap-12 relative "
            id="whyus"
        >
            <img
                className="absolute top-[0px] right-[0px] w-[400px] opacity-[0.2]"
                src={pattern}
                alt=""
            />
            <div className="max-w-screen-2xl smm:px-3 md:px-6 container bg-white text-primary rounded-2xl p-12 z-10 ">
                <div className="text-center relative">
                    <MaskText
                        phrases={phrases}
                        className="animate-character smm:hidden xl:block sm:text-[56px] lg:text-6XL "
                    />
                    {showDiv && (
                        <div className="absolute smm:hidden xl:block bg-brand rounded-full h-[40px] w-[90px] ] xl:right-[580px] xl:top-[37px] animate-moveUp "></div>
                    )}
                    <H2 className="smm:block xl:hidden mb-8">
                        Make the world full of bling
                    </H2>
                    <div className=" smm:hidden xl:block xl:scale-50 ">
                        <img
                            className="absolute xl:right-[420px] xl:top-[-429px] animate-picture-moveUp"
                            src={Iphone}
                            width={160}
                            alt=""
                            style={{
                                clipPath:
                                    "polygon(0 0, 100% 0%, 100% 66%, 0 66%)",
                            }}
                        />
                    </div>
                </div>

                <div className=" sm:flex-col md:flex-row flex justify-between lg:container gap-2 ">
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
                        isLast
                    />
                </div>
            </div>

            <div className="absolute bg-[0050BA] w-3/4 h-full -top-24"></div>

            <div className="container p-0 ">
                <div className="h-[80px] -rotate-2 bg-brand absolute bottom-[140px] left-0 z-10 overflow-hidden">
                    <div className="inline-flex my-6 gap-16 text-white md:text-xl lg:text-3xl font-bold font-main uppercase animate-slideLeftRight">
                        {services.map((service, index) => (
                            <div key={index} className="flex justify-evenly">
                                <div className="smm:w-[160px] md:w-[200px]">
                                    {service}
                                </div>
                                <img src={StarWhite} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Card = ({ name, content, src, isLast }) => {
    return (
        <div
            className={`flex grow move-hover group${
                isLast ? "" : " border-r border-gray-100"
            }`}
        >
            <div className=" bg-white  shadow-blue-200 rounded-xl p-6   h-full lg:h-[380px]">
                <img
                    src={src}
                    alt=""
                    className="w-12 pb-8 group-hover:scale-105 filter:bg-white "
                />
                <div className="">
                    <H3 className=" font-semibold text-primary mb-3 opacity-70 group-hover:opacity-100">
                        {name}
                    </H3>
                    <span className="font-normal text-secondary opacity-70 group-hover:opacity-100 font-main leading-loose  ">
                        {content}
                    </span>
                </div>
            </div>
        </div>
    );
};
export default Intro;
