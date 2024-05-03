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
import bg from "../assets/bg.svg";

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="bg-brand w-full h-full relative">
            {/* Mobile only */}
            <div className=" md:container relative h-[400px]">
                <div className="absolute bottom-20 left-0 right-0 bg-white p-8 rounded-xl z-40">
                    <img
                        src={bg}
                        className="absolute top-[-140px] left-0 z-10 opacity-30"
                        alt=""
                    />
                    <img src={bling} className="w-12 mb-4" alt="" />
                    <H2 className="mt-2">Feel free to reach out</H2>
                    <H2 className="mt-2">if you want to work with us</H2>
                    <StyledButton
                        name="Let's start together"
                        className="hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-slate-300 mt-24 bg-gradient-to-r from-brand to-[#72c1f5]  rounded-full text-white w-[220px] border-8 border-opacity-5 z-50"
                        onClick={openModal} // Add onClick handler to open modal
                    />
                    <div className="w-full h-[1px] bg-slate-200 my-4"></div>
                    <div className="grid sm:grid-cols-1 sm:gap-4 lg:grid-cols-2 w-full items-center  z-50 ">
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
                <span className="text-white absolute bottom-8 smm:left-8 md:left-0">
                    @ 2024 - Designed and Developed by Linh | Bling Studio
                </span>
            </div>
            <div className="z-50 fixed ">
                {isModalOpen && <Modal onClose={closeModal} />}
            </div>
        </div>
    );
};

export default Footer;
