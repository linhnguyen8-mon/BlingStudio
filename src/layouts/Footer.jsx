import { H1, H2, H3 } from "../components/Heading";
import { StyledButton, OutlineButton } from "../components/Button";
import React, { useState } from "react";
import Modal from "../components/Modal";
import bling from "../assets/bling.svg";
import twitter from "../assets/twitter.svg";
import dribble from "../assets/dribble.svg";
import linkedin from "../assets/linkedin.svg";
import behance from "../assets/behance.svg";
import gmail from "../assets/gmail.svg";
import notion from "../assets/notion.svg";
import figma from "../assets/figma.svg";

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="bg-brand w-full h-full relative">
            {/* Mobile only */}
            <div className=" md:container relative h-[400px]">
                <div className="absolute bottom-20 left-0 right-0 bg-white p-8 rounded-xl">
                    <img src={bling} className="w-12 mb-4" alt="" />
                    <H3 className="mt-2">Feel free to reach out</H3>
                    <H3 className="mt-2">if you want to work with us</H3>
                    <StyledButton
                        name="Let's start together"
                        className="hover:-translate-y-2 mt-24 bg-gradient-to-r from-[#1e2f51] via-brand to-[#a2bfe9]  rounded-full text-white w-[220px]"
                        onClick={openModal} // Add onClick handler to open modal
                    />
                    <div className="w-full h-[1px] bg-slate-200 my-4"></div>
                    <div className="z-50 grid sm:grid-cols-1 sm:gap-4 lg:grid-cols-2 w-full items-center  ">
                        <div className="gap-4 flex flex-wrap ">
                            <a
                                href="https://www.behance.net/LungLinhHuyenAo"
                                target="_blank"
                            >
                                <img className="w-12" src={figma} alt="figma" />
                            </a>
                            <a
                                href="https://www.behance.net/LungLinhHuyenAo"
                                target="_blank"
                            >
                                <img className="w-12" src={behance} alt="" />
                            </a>
                            <a href="mailto:linhyuji@gmail.com" target="_blank">
                                <img className="w-12" src={gmail} alt="" />
                            </a>
                            <a
                                href="https://blingstudio.notion.site/Knowledge-card-e05983155fa8464eae105766eeed7f0d"
                                target="_blank"
                            >
                                <img className="w-12" src={notion} alt="" />
                            </a>
                            <a
                                href="https://twitter.com/nguyen_linh_8"
                                target="_blank"
                            >
                                <img className="w-12" src={twitter} alt="" />
                            </a>
                            {/* <a href="">
                                <img className="w-12" src={dribble} alt="" />
                            </a>{" "} */}
                            {/* <a href="" target="_blank">
                                <img className="w-12" src={linkedin} alt="" />
                            </a> */}
                        </div>
                    </div>
                </div>
                <span className="text-white absolute bottom-8 left-0">
                    @ Bling Studio 2024
                </span>
            </div>
            <div className="z-50 fixed ">
                {isModalOpen && <Modal onClose={closeModal} />}
            </div>
        </div>
    );
};

export default Footer;
