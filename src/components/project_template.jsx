import React, { useState, useEffect } from "react";
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
    children,
    nextId,
    previousId, AboutThisProject, Skill
}) => {
    const [modalSrc, setModalSrc] = useState(null);
    const { id: currentId } = useParams(); // Extracting 'id' from the URL
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, []);

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
            navigate(nextId); // Navigate to next project
        }
    };

    const handlePreviousProject = () => {
        if (previousId) {
            navigate(previousId); // Navigate to previous project
        }
    };

    return (
        <div className={`${themeColor}`}>
            {/* Navigation for Next and Previous Project */}
            <div className="fixed inset-y-1/2 flex justify-between w-full px-8 transform -translate-y-1/2 z-50">
                <div className="group flex align-middle items-center gap-3">
                    <button
                        onClick={handlePreviousProject}
                        className="opacity-70 p-3 border-white bg-white bg-opacity-10 border-[0.5px] border-opacity-10 rounded-full group-hover:opacity-100"
                    >
                        <img src={arrow} alt="" className="scale-125" />
                    </button>
                    <p className="text-white text-[13px]  opacity-0 group-hover:opacity-50">

                        Previous Project
                    </p>
                </div>
                <div className="group flex align-middle items-center gap-3">
                    <p className="text-white text-[13px]  opacity-0 group-hover:opacity-50">

                        Next Project
                    </p>
                    <button
                        onClick={handleNextProject}
                        className="opacity-70 p-3 border-white bg-white bg-opacity-10 border-[0.5px] border-opacity-10 rounded-full group-hover:opacity-100"
                    >
                        <img src={arrow} alt="" className="scale-125 rotate-180" />
                    </button>
                </div>

            </div>
            <div className="container p-8 pt- w-4/6 ">
                {/* Navigation */}
                <div className="flex w-full justify-between items-center z-50 p-4 pb-0">
                    <button onClick={handleBackToHome} className="group flex gap-2 justify-center items-center">
                        <LazyLoad>
                            <img src={bling} alt="Back to Home" className="h-8  filter brightness-75 hover:brightness-100 transition-all duration-100" />
                        </LazyLoad>
                        <div className=" opacity-0 group-hover:opacity-50 flex justify-center items-center">
                            <img src={arrow} alt="" />
                            <div className="text-white font-main text-[13px]">Back to Home</div>
                        </div>
                    </button>
                </div>

                {/* Main Content */}
                <div className="text-white mx-auto flex gap-12">
                    {/* Picture + About project */}
                    <div className="w-[30%] p-4 rounded-lg">
                        <div className="w-full aspect-square bg-white rounded-lg overflow-hidden">
                            <img
                                src={thumbnail}
                                alt="Event Thumbnail"
                                className="w-full h-full object-cover object-bottom	 "
                            />
                        </div>
                        <div className="flex flex-col gap-8 mt-4">
                            <Subtitle name="About this project">
                                {AboutThisProject}
                            </Subtitle>

                            {Skill}
                        </div>
                    </div>

                    {/* Name + Overview + Detail Section */}
                    <div className="w-[70%] mt-6">
                        <Tag name={nametag} />
                        <p className={"text-white mt-2 mb-4 text-5xl font-bold"}>{project}</p>

                        <div className="flex gap-4 mb-8">
                            <div className="h-12 w-12 border border-white border-opacity-10 rounded-md overflow-hidden">
                                <div className="text-[11px] bg-white bg-opacity-10 flex justify-center items-center w-full">
                                    {Month}
                                </div>
                                <div className="font-bold opacity-90 flex w-full justify-center items-center mt-1">
                                    {Year}
                                </div>
                            </div>
                            <div className="inline-block gap-2">
                                <p className="font-medium">Timeline</p>
                                <p className="opacity-90">{timeline}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 ">
                            <Subtitle name="What I do">
                                <Check name={check1} />
                                <Check name={check2} />
                                <Check name={check3} />
                            </Subtitle>

                            <Subtitle name="Overview">{contentOverview}</Subtitle>
                            {children}
                            <Subtitle name="Screen">
                                <div className="grid 2xl:grid-cols-3  xl:grid-cols-2 gap-2 ">
                                    {img1 && <Img src={img1} openModal={openModal} />}
                                    {img2 && <Img src={img2} openModal={openModal} />}
                                    {img3 && <Img src={img3} openModal={openModal} />}
                                    {img4 && <Img src={img4} openModal={openModal} />}
                                    {img5 && <Img src={img5} openModal={openModal} />}
                                    {img6 && <Img src={img6} openModal={openModal} />}
                                    {img7 && <Img src={img7} openModal={openModal} />}
                                    {img8 && <Img src={img8} openModal={openModal} />}
                                </div>
                            </Subtitle>

                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for Image Expansion */}
            {modalSrc && <Modal src={modalSrc} onClose={closeModal} />}
        </div>
    );
};

export default ProjectTemplate;

// Image Component with Modal Trigger
const Img = ({ src, height = "h-[240px]", openModal }) => (
    <div className="relative group  bg-white bg-opacity-10 border-[0.5px] border-white border-opacity-10 rounded-lg p-3">
        <LazyLoad>
            <img
                src={src}
                alt="Preview"
                className={`w-full object-cover rounded-md ${height}`}
                loading="lazy"
            />
        </LazyLoad>
        <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={() => openModal(src)}
        >
            <div className="backdrop-blur-sm bg-black bg-opacity-40 shadow-md rounded-full p-4 cursor-pointer absolute top-4 right-4 hover:bg-opacity-60">
                <img src={expandIcon} alt="Expand" className="h-6 w-6" />
            </div>
        </div>
    </div>
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
        <div div className="h-[1px] w-full bg-white bg-opacity-10 mt-1 mb-1.5" ></div >
        {children}
    </div >
);

const Check = ({ name }) => (
    <div className="flex items-start gap-2 opacity-80">
        <img src={check} alt="Check Icon" className="opacity-50" />
        <p className="text-white">{name}</p>
    </div>
);
