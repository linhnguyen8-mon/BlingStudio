import { H1, H2 } from "../components/Heading";
import { StyledButton } from "../components/Button";
import StarWhite from "../assets/StarWhite.svg";
import React, { useEffect } from "react";

const Intro = () => {
    useEffect(() => {
        duplicateContent();
    }, []);

    const duplicateContent = () => {
        const container = document.querySelector(".items");
        if (container) {
            const contentToDuplicate = container.children;
            const originalContentCount = contentToDuplicate.length;

            for (let i = 0; i < 4; i++) {
                // Reduce the loop count to prevent infinite duplication
                for (let j = 0; j < originalContentCount; j++) {
                    const clone = contentToDuplicate[j].cloneNode(true);
                    container.appendChild(clone);
                }
            }
        }
    };
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
                <Card name="Communication" content="Whay I can do further" />
                <Card name="Communication" content="Whay I can do further" />
                <Card name="Communication" content="Whay I can do further" />
            </div>
            <div className="h-[78px] -rotate-1 bg-indigo-700 ">
                <div className="inline-flex mt-6 gap-16  text-white text-3xl font-bold font-main uppercase animate-slideLeftRight overflow-hidden items  ">
                    <div>WEBSITE</div>
                    <img src={StarWhite} alt="" />
                    <div>mOBILE</div>
                    <img src={StarWhite} alt="" />
                    <div className="w-[260px]">wEB APP</div>
                    <img src={StarWhite} alt="" />
                    <div>bRANDING</div>
                    <img src={StarWhite} alt="" />
                </div>
            </div>
        </div>
    );
};

const Card = ({ name, content }) => {
    return (
        <div className="bg-white rounded-xl p-4 pb-9 ">
            <h3 className="text-4xl font-semibold text-primary">{name}</h3>
            <span className="font-normal text-secondary font-main pt-2">
                {content}
            </span>
        </div>
    );
};
export default Intro;
