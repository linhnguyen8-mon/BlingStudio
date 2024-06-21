import { H1, H2, H3 } from "../components/Heading";
import React, { useState } from "react";
import twitter from "../assets/twitter.svg";
import behance from "../assets/behance.svg";
import gmail from "../assets/gmail.svg";
import notion from "../assets/notion.svg";

const Footer = () => {
    return (
        <div className="container mb-6">
            <div className=" bg-backgroundCard p-8 rounded-3xl z-40 ">
                <div className="flex justify-between">
                    <H2>Feel free to reach out</H2>
                    <div className="flex gap-4 ">
                        <Icon
                            href="https://www.behance.net/LungLinhHuyenAo"
                            img={behance}
                        />
                        <Icon href="mailto:linhyuji@gmail.com" img={gmail} />
                        <Icon
                            href="https://blingstudio.notion.site/Knowledge-card-e05983155fa8464eae105766eeed7f0d"
                            img={notion}
                        />
                        {/* <Icon
                            href="https://twitter.com/nguyen_linh_8"
                            img={twitter}
                        /> */}
                    </div>
                </div>
                <div className="w-full h-[1px] bg-border my-8"></div>
                <span className="text-primary ">
                    @ 2024 - Designed and Developed by Linh | Bling Studio
                </span>
            </div>
        </div>
    );
};

export default Footer;

const Icon = ({ img, href }) => {
    return (
        <a
            className="w-12 h-12 bg-primary rounded-3xl flex justify-center items-center"
            href={href}
            target="_blank"
        >
            <img className="w-8" src={img} alt="figma" />
        </a>
    );
};
