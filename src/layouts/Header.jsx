import Star from "../assets/Star.svg";
import { H1 } from "../components/Heading";
import { useState, useEffect } from "react";
import MaskText from "../components/MaskText";
import Iphone from "../assets/Iphone.png";
import circle from "../assets/circle.svg";

const Header = () => {
    const phrases = ["Make the w --- rld", "full of bling"];
    const updatedWords = phrases.map((phrase) => {
        const words = phrase.split(" "); // Split the phrase into words
        return words.map((word, i) => {
            if (word.toLowerCase() === "bling") {
                return (
                    <span key={i} className="bg-clip-text">
                        {word}
                    </span>
                );
            } else {
                return (
                    <span key={i}>
                        {word}
                        {i < words.length - 1 && " "}{" "}
                        {/* Add space if not the last word */}
                    </span>
                );
            }
        });
    });

    // Show div+img
    const [showDiv, setShowDiv] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowDiv(true);
        }, 400);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="text-primary flex justify-center relative" id="home">
            <div className="flex flex-col items-center mt-80 ">
                {/* Text */}
                <div className="text-center relative  ">
                    <MaskText
                        phrases={updatedWords}
                        className="animate-character sm:text-[56px] lg:text-8xl "
                    />
                    {showDiv && (
                        <div className="absolute  bg-brand rounded-full sm:w-[90px] lg:w-[140px] sm:h-[32px] lg:h-[54px] sm:top-[26px] lg:top-[50px] sm:right-[80px] lg:right-[140px] animate-moveUp "></div>
                    )}
                    <img
                        className="absolute sm:scale-[0.6] sm:right-[38px] lg:right-[8rem] sm:top-[-66px] lg:-top-8 animate-picture-moveUp"
                        src={Iphone}
                        width={160}
                        alt=""
                        style={{
                            clipPath: "polygon(0 0, 100% 0%, 100% 66%, 0 66%)",
                        }}
                    />
                </div>
                <div className="w-[446px] pt-[3rem] text-center text-secondary text-xl font-normal font-main leading-loose">
                    Hi all, I'm Linh - a passionate designer making creative
                    solutions for visual
                </div>
                {/* Animation button */}
                <div className="flex flex-col gap-7 mt-36 mb-8">
                    <span className="text-brand font-bold">Scroll down</span>
                    <img
                        src={Star}
                        alt=""
                        className="h-3 animate-moveUpDown-fast"
                        id="starImg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
