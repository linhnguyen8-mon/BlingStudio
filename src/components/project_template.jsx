import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "./Modal";
import bling from '../assets/bling.png';
import check from '../assets/check.svg';
import arrow from '../assets/arrow.svg';
import expandIcon from "../assets/expand-icon.svg";
import LazyLoad from 'react-lazyload';
const ProjectTemplate = ({
    thumbnail,
    nametag,
    themeColor,
    project,
    Month,
    Year,
    contentOverview,
    timeline,
    check1,
    check2,
    check3,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    images,
    children,
    nextId,
    previousId, AboutThisProject, Skill
}) => {
    const [modalSrc, setModalSrc] = useState(null);
    const [showNavHint, setShowNavHint] = useState(false);
    const navHintRef = useRef(null);
    const { id: currentId } = useParams(); // Extracting 'id' from the URL
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, []);

    useEffect(() => {
        setShowNavHint(!localStorage.getItem("bling.projectNavHintSeen"));
    }, []);

    const dismissNavHint = () => {
        setShowNavHint(false);
        localStorage.setItem("bling.projectNavHintSeen", "1");
    };

    useEffect(() => {
        if (!showNavHint) return undefined;

        const onPointerDown = (event) => {
            if (!navHintRef.current?.contains(event.target)) {
                dismissNavHint();
            }
        };

        document.addEventListener("pointerdown", onPointerDown);
        return () => document.removeEventListener("pointerdown", onPointerDown);
    }, [showNavHint]);

    const handleBackToHome = () => {
        const worksElement = document.querySelector('[name="works"]');
        if (worksElement) {
            const worksPosition = worksElement.offsetTop;
            sessionStorage.setItem("scrollPosition", worksPosition);
        }
        navigate("/");
    };

    const openModal = (src) => setModalSrc(src);
    const closeModal = () => setModalSrc(null);

    const handleNextProject = () => {
        if (nextId) {
            dismissNavHint();
            navigate(nextId); // Navigate to next project
        }
    };

    const handlePreviousProject = () => {
        if (previousId) {
            dismissNavHint();
            navigate(previousId); // Navigate to previous project
        }
    };

    useEffect(() => {
        const onKeyDown = (event) => {
            const target = event.target;
            const tagName = target?.tagName?.toLowerCase();
            const isEditable =
                target?.isContentEditable ||
                ["input", "textarea", "select"].includes(tagName);

            if (modalSrc || isEditable) return;

            if (event.key === "ArrowLeft" && previousId) {
                event.preventDefault();
                handlePreviousProject();
            }

            if (event.key === "ArrowRight" && nextId) {
                event.preventDefault();
                handleNextProject();
            }
        };

        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [modalSrc, nextId, previousId]);

    const navButtonClass =
        "opacity-[0.72] p-2.5 lg:p-3 rounded-full border border-white border-opacity-70 bg-black bg-opacity-60 ring-1 ring-black ring-opacity-20 shadow-[0_4px_14px_rgba(0,0,0,0.28)] hover:opacity-100 hover:bg-opacity-75 hover:shadow-[0_6px_18px_rgba(0,0,0,0.34)] focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-80 transition duration-base ease-out-soft";

    const screenImages = Array.isArray(images) && images.length
        ? images.filter(Boolean)
        : [img1, img2, img3, img4, img5, img6, img7, img8, img9].filter(Boolean);

    return (
        <div className={`${themeColor} min-h-screen overflow-x-hidden`}>
            <div
                ref={navHintRef}
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3"
            >
                {showNavHint && (
                    <div className="relative w-64 rounded-xl border border-white border-opacity-20 bg-black bg-opacity-70 p-3 pr-9 text-white shadow-lg backdrop-blur-md">
                        <button
                            type="button"
                            onClick={dismissNavHint}
                            className="absolute right-2 top-1.5 rounded-full p-1 text-lg leading-none opacity-60 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            aria-label="Dismiss navigation tip"
                        >
                            ×
                        </button>
                        <p className="text-sm font-medium">Browse projects</p>
                        <p className="mt-1 text-xs opacity-75">
                            Tap the arrows or use ← → on your keyboard.
                        </p>
                        <div className="absolute -bottom-1.5 right-8 h-3 w-3 rotate-45 border-b border-r border-white border-opacity-20 bg-black bg-opacity-70" />
                    </div>
                )}
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={handlePreviousProject}
                        className={navButtonClass}
                        aria-label="Previous project"
                    >
                        <img src={arrow} alt="" className="scale-110 lg:scale-125" />
                    </button>
                    <button
                        type="button"
                        onClick={handleNextProject}
                        className={navButtonClass}
                        aria-label="Next project"
                    >
                        <img src={arrow} alt="" className="scale-110 rotate-180 lg:scale-125" />
                    </button>
                </div>
            </div>

            <div className="container w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 md:py-8 pb-24 lg:pb-8">
                <div className="flex w-full justify-between items-center z-50 py-2 md:p-4 md:pb-0">
                    <button
                        type="button"
                        onClick={handleBackToHome}
                        className="group flex gap-2 justify-center items-center"
                    >
                        <LazyLoad>
                            <img
                                src={bling}
                                alt="Back to Home"
                                className="h-7 md:h-8 filter brightness-75 hover:brightness-100 transition-all duration-100"
                            />
                        </LazyLoad>
                        <div className="opacity-70 lg:opacity-0 lg:group-hover:opacity-50 flex justify-center items-center transition duration-base ease-out-soft">
                            <img src={arrow} alt="" className="hidden sm:block" />
                            <div className="text-white font-main text-[13px]">Back to Home</div>
                        </div>
                    </button>
                </div>

                <div className="text-white mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
                    <div className="w-full lg:w-[32%] p-0 md:p-4 rounded-lg">
                        <div className="w-full max-w-sm mx-auto lg:max-w-none aspect-square bg-white rounded-lg overflow-hidden">
                            <img
                                src={thumbnail}
                                alt="Event Thumbnail"
                                className="w-full h-full object-cover object-bottom"
                            />
                        </div>
                        <div className="flex flex-col gap-6 md:gap-8 mt-4">
                            <Subtitle name="About this project">
                                {AboutThisProject}
                            </Subtitle>
                            {Skill}
                        </div>
                    </div>

                    <div className="w-full lg:w-[68%] lg:mt-6">
                        <Tag name={nametag} />
                        <p className="text-white mt-2 mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
                            {project}
                        </p>

                        <div className="flex gap-4 mb-8">
                            <div className="h-12 w-12 border border-white border-opacity-10 rounded-md overflow-hidden shrink-0">
                                <div className="text-[11px] bg-white bg-opacity-10 flex justify-center items-center w-full">
                                    {Month}
                                </div>
                                <div className="font-bold opacity-90 flex w-full justify-center items-center mt-1">
                                    {Year}
                                </div>
                            </div>
                            <div className="inline-block gap-2 min-w-0">
                                <p className="font-medium">Timeline</p>
                                <p className="opacity-90 break-words">{timeline}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <Subtitle name="What I do">
                                <Check name={check1} />
                                <Check name={check2} />
                                <Check name={check3} />
                            </Subtitle>

                            <Subtitle name="Overview">{contentOverview}</Subtitle>
                            {children}
                            {screenImages.length > 0 && (
                                <Subtitle name="Screen">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-2">
                                        {screenImages.map((src) => (
                                            <Img key={src} src={src} openModal={openModal} />
                                        ))}
                                    </div>
                                </Subtitle>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Modal open={Boolean(modalSrc)} src={modalSrc} onClose={closeModal} />
        </div>
    );
};

export default ProjectTemplate;

// Image Component with Modal Trigger
const Img = ({ src, height = "h-[200px] sm:h-[240px]", openModal }) => (
    <button
        type="button"
        className="relative group bg-white bg-opacity-10 border-[0.5px] border-white border-opacity-10 rounded-lg p-2 sm:p-3 text-left w-full"
        onClick={() => openModal(src)}
    >
        <LazyLoad>
            <img
                src={src}
                alt="Preview"
                className={`w-full object-cover rounded-md ${height}`}
                loading="lazy"
            />
        </LazyLoad>
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-base ease-out-soft">
            <div className="backdrop-blur-sm bg-black bg-opacity-40 shadow-md rounded-full p-2.5 sm:p-4 hover:bg-opacity-60">
                <img src={expandIcon} alt="Expand" className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
        </div>
    </button>
);
const Tag = ({ name, themeColor }) => (
    <div className=" w-fit">
        <div
            className={`relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-full ${themeColor} animated-border border-[0.5px] opacity-60`}
            style={{ borderColor: themeColor }} // Apply dynamic border color
        >
            <div className={`relative z-20 flex w-full  bg-${themeColor} p-0.5 px-3 text-[12px] `}>
                {name}
            </div>
        </div>
    </div>
);



const Subtitle = ({ name, children }) => (
    <div>
        <p className="text-white font-main font-medium opacity-70 text-[13px]">{name}</p>
        <div className="h-[1px] w-full bg-white bg-opacity-10 mt-1 mb-1.5"></div>
        {children}
    </div >
);

const Check = ({ name }) => (
    <div className="flex items-start gap-2 opacity-80">
        <img src={check} alt="Check Icon" className="opacity-50 mt-1 shrink-0" />
        <p className="text-white text-sm sm:text-base">{name}</p>
    </div>
);
