import Star from "../assets/Star.svg";
import { H1 } from "../components/Heading";
import { useState, useEffect } from "react";
import MaskText from "../components/MaskText";

const Header = () => {
    const phrases = ["Make the w --- rld", "full of bling"];
    // Show div+img
    const [showDiv, setShowDiv] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowDiv(true);
        }, 400);

        return () => clearTimeout(timeout);
    }, []);
    // Small Scroll down animation

    return (
        <div className="  text-primary flex justify-center relative " id="home">
            <div className="flex flex-col items-center mt-80">
                {/* Text */}
                <div className="text-center relative">
                    <MaskText phrases={phrases} textSize="8xl" />
                    {showDiv && (
                        <div className="absolute w-[140px] h-[54px] bg-brand rounded-full top-[50px] right-[140px] animate-moveUp "></div>
                    )}{" "}
                </div>
                <div className="w-[446px] pt-[8rem] text-center text-secondary text-xl font-normal font-main leading-loose">
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
