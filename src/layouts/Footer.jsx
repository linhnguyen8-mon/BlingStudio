import { H1, H2, H3 } from "../components/Heading";
import { StyledButton, OutlineButton } from "../components/Button";
import Subtract from "../assets/Subtract.svg";
import Union from "../assets/Union.svg";
import React, { useState } from "react";
import Modal from "../components/Modal";
import bling from "../assets/bling.svg";

const Footer = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <>
            <div className="lg:container">
                {/* Desktop only */}
                <div className="hidden lg:block">
                    {/* Your desktop content here */}
                    <div className="relative lg:mt-[450px] mb-16">
                        <img
                            className="z-0 absolute 2xl:bottom-[-505px] xl:bottom-[-421px] lg:bottom-[-330px] w-full"
                            src={Union}
                            alt=""
                        />

                        <div
                            className={`z-10 h-[450px] absolute left-[50%] transform -translate-x-1/2 w-8/12 p-8 bg-white rounded-xl cursor-pointer flex flex-col ${
                                isHovered
                                    ? "bottom-[-90px] smooth-hover"
                                    : "bottom-[-220px]"
                            } `}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <img src={bling} className="w-12 mb-4" alt="" />{" "}
                            <H2 className="mt-2">Feel free to reach out</H2>
                            <H2 className="mt-2">
                                if you want to work with us
                            </H2>
                            <StyledButton
                                name="Let's start together"
                                className="mt-24 bg-slate-950 rounded-full text-white w-[220px]"
                                onClick={openModal} // Add onClick handler to open modal
                            />
                        </div>
                        <div className="z-20 w-full absolute h-[220px] bg-gradient-to-b from-transparent to-slate-500" />
                        <img
                            className="z-30 absolute w-full "
                            src={Subtract}
                            alt=""
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        />
                    </div>
                </div>

                {/* Mobile only */}
                <div className="lg:hidden">
                    <div className=" m-4 bg-white rounded-xl p-8">
                        <img src={bling} className="w-12 mb-4" alt="" />{" "}
                        <H2 className="mt-2">Feel free to reach out</H2>
                        <H2 className="mt-2">if you want to work with us</H2>
                        <StyledButton
                            name="Let's start together"
                            className="mt-24 bg-slate-950 rounded-full text-white w-[220px]"
                            onClick={openModal} // Add onClick handler to open modal
                        />
                        <div className="w-full h-[1px] bg-slate-200 my-4"></div>
                        <div className="z-50 grid grid-cols-2 w-full items-center  ">
                            <div className="gap-2 flex justify-between">
                                <OutlineButton name="Behance" color="brand" />
                                <OutlineButton name="Email" color="brand" />
                                <OutlineButton name="Notion" color="brand" />
                                <OutlineButton name="Dribbble" color="brand" />
                                <OutlineButton name="Twitter" color="brand" />
                            </div>
                            <span className="text-secondary  text-end">
                                @ Bling Studio 2024
                            </span>
                        </div>
                    </div>
                </div>
                <div className="z-50 fixed ">
                    {isModalOpen && <Modal onClose={closeModal} />}
                </div>
            </div>
        </>
    );
};

export default Footer;
