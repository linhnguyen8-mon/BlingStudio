import React from "react";
import behance from "../assets/behance.svg";
import gmail from "../assets/gmail.svg";
import notion from "../assets/notion.svg";

const Footer = () => {
    return (
        <div className="container mb-6">
            <div className="p-8 rounded-3xl z-40">
                <div className="flex justify-between">
                    <p className="text-textColor font-secondary italic text-6xl font-bold">
                        Feel free to reach out
                    </p>
                    <div className="flex gap-4">
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
                <div className="w-full h-[1px] bg-textColor my-8"></div>
                <span className="text-textColor">
                    @ 2024 - Designed and Developed by Linh
                </span>
            </div>
        </div>
    );
};

export default Footer;

const Icon = ({ img, href }) => {
    return (
        <a
            className="w-16 h-16 border-textColor border rounded-full flex justify-center items-center opacity-50 hover:opacity-100 backdrop-blur-md"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img className="w-8" src={img} alt="icon" />
        </a>
    );
};
