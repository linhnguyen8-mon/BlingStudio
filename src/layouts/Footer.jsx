import React from "react";
import behance from "../assets/behance.svg";
import gmail from "../assets/gmail.svg";

const Footer = () => {
    return (
        <div className="container mb-6">
            <div className="p-4 sm:p-8 rounded-3xl z-40">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:items-center">
                    <p className="text-textColor font-secondary italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        Feel free to reach out
                    </p>
                    <div className="flex gap-4 shrink-0">
                        <Icon
                            href="https://www.behance.net/LungLinhHuyenAo"
                            img={behance}
                        />
                        <Icon href="mailto:linhyuji@gmail.com" img={gmail} />
                        {/* <Icon
                            href="https://twitter.com/nguyen_linh_8"
                            img={twitter}
                        /> */}
                    </div>
                </div>
                <div className="w-full h-[1px] bg-textColor my-8"></div>
                <span className="text-textColor font-main font-medium">
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
            className="w-12 h-12 md:w-16 md:h-16 border-backgroundCard border rounded-full flex justify-center items-center hover:border-textColor backdrop-blur-md transition duration-base ease-out-soft"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img className="w-8" src={img} alt="icon" />
        </a>
    );
};
