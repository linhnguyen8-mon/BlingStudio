import Star from "../assets/Star.svg";
import { H1 } from "../components/Heading";
import sky from "../assets/sky.mp4";
import React, { useState, useRef } from "react";
import ReactCurvedText from "react-curved-text";
import happy from "../assets/happy.mp3";
import play from "../assets/Play.svg";
import pause from "../assets/Pause.svg";
import { Button } from "../components/Button";
import cd from "../assets/cd.svg";
import close from "../assets/Close.svg";

const Header = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlayback = () => {
        if (!isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsPlaying(!isPlaying);
    };

    const handleAudioEnded = () => {
        setIsPlaying(false);
    };

    return (
        <>
            <video
                className="videoTag"
                style={{
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    left: 0,
                    top: 0,
                    scale: 2,
                }}
                autoPlay
                loop
                muted
            >
                <source src={sky} type="video/mp4" />
            </video>

            {/* Content */}
            <div
                className="text-white h-screen flex flex-col justify-center items-center relative"
                id="home"
            >
                {/* Heading */}
                <div className="flex">
                    <div className=" flex grow flex-col items-center">
                        <H1
                            children="Bling studio"
                            className=" bg-clip-text text-transparent typewriter smm:text-5xl md:text-8xl lg:text-[120px] "
                        />
                        <div>
                            <div className="flex gap-4 mt-6 smm:hidden lg:flex ">
                                <Button
                                    name="Mobile app"
                                    className="cursor-default"
                                />
                                <Button
                                    name="Web app "
                                    className="cursor-default"
                                />
                                <Button
                                    name="Website"
                                    className="cursor-default"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll down span */}
                <div className="absolute bottom-12 flex flex-col items-center justify-center gap-6">
                    <span className="text-brand font-bold ">Scroll down</span>
                    <img
                        src={Star}
                        alt=""
                        className="h-3 animate-moveUpDown-fast"
                        id="starImg"
                    />
                </div>

                {/* Play sound */}
                <div className="fixed bottom-8 right-8 z-50 smm:hidden 2xl:block">
                    <div className="relative bg-[rgb(247,249,255)] rounded-full p-4 h-[140px] w-[140px] ">
                        <img
                            className={`absolute top-[52px] left-[58px] z-10 w-8 cursor-pointer ${
                                isPlaying ? "hidden" : ""
                            }`}
                            src={play}
                            alt=""
                            onClick={togglePlayback} // Call togglePlayback function when the play button is clicked
                        />
                        <img
                            className={`absolute top-[50px] left-[50px] z-10 w-10 cursor-pointer ${
                                isPlaying ? "" : "hidden"
                            }`}
                            src={pause}
                            alt=""
                            onClick={togglePlayback} // Call togglePlayback function when the pause button is clicked
                        />
                        <div className="bg-brand  h-[80px] w-[80px] rounded-full absolute top-[30px] left-[30px] "></div>
                        <img src={cd} alt="" />

                        <div className="absolute top-[0px] left-[0px] text-brand">
                            <ReactCurvedText
                                width={140}
                                height={140}
                                cx={70}
                                cy={70}
                                rx={60}
                                ry={60}
                                startOffset={30}
                                reversed={false}
                                text="Turn on BG sound"
                                textProps={{
                                    style: { fontSize: 16, fontWeight: "600" },
                                }}
                                textPathProps={{ fill: "#156fe5" }}
                            />
                        </div>
                    </div>
                    <audio
                        volume={20}
                        ref={audioRef}
                        src={happy}
                        loop
                        className="audio-player w-[420px]"
                        onEnded={handleAudioEnded}
                    />
                </div>
                <div className="fixed  bottom-[151px] right-[42px] z-50 flex items-center justify-center h-full">
                    <div className="transform rotate-90 origin-bottom-left relative smm:hidden md:block">
                        <ExpandableCard />
                    </div>
                </div>
            </div>
        </>
    );
};

const ExpandableCard = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            className={`w-[400px] absolute  left-8 bottom-[0px] ${
                isExpanded ? "translate-y-[8px]" : ""
            }`}
        >
            <div
                className={` duration-500 ease-in-out ${
                    isExpanded ? "h-[auto]" : "h-[64px]"
                }`}
            >
                <div
                    className="cursor-pointer relative"
                    onClick={toggleExpansion}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {isExpanded ? (
                        <ExpandedTags />
                    ) : (
                        <CollapsedTags isHovered={isHovered} />
                    )}
                </div>
            </div>
        </div>
    );
};
const CollapsedTags = ({ isHovered }) => (
    <div
        className={`transition-transform ${
            isHovered ? "translate-y-[8px]" : ""
        }`}
    >
        <Button
            name="Get to know us"
            className="rounded-md bg-brand pt-8 h-16"
            classNameChild="text-white"
        />
    </div>
);
const ExpandedTags = () => (
    <div className="z-50 pt-4 flex flex-col overflow-hidden gap-2 transform -rotate-90 bg-white rounded-xl border border-slate-100 absolute top-[-48px] right-[2px]  font-main text-md text-secondary leading-loose shadow-2xl shadow-[#156fe51e]">
        <div className="px-4 ">
            <img src={close} alt="" className="fixed right-4" />
            <div className="font-bold text-2xl">Hi, all 🙌</div>
            <div className="font-bold text-2xl">
                I'm Linh | creator of Bling studio
            </div>
            <div className="italic">
                <div className=" uppercase text-brand font-semibold mt-4 ">
                    Few words about me
                </div>
                <div>
                    <span className="font-bold">Full-time:</span> A passionate
                    designer dedicated to enhancing the world of product.
                </div>
                <div>
                    <span className="font-bold">Part-time:</span> A self-taught
                    nerd enthusiast with tech and design.
                </div>
                <div>
                    <span className="font-bold">All-the-time:</span> A life-long
                    learner, passionate about humanity things.
                </div>
            </div>
        </div>
        <div className="bg-brand p-4 text-white">
            <span className="font-bold">Fun fact:</span> This website is
            designed and coded by me.
            <div>All in ReactJS + Tailwind + AI mentor</div>
        </div>
    </div>
);
export default Header;
