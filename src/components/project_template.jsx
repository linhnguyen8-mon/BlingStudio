import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { H2 } from './Heading';
import bling from '../assets/bling.png';
import check from '../assets/check.svg';
import arrow from '../assets/arrow.svg';
import expandIcon from "../assets/expand-icon.svg";

const ProjectTemplate = ({
    thumbnail,
    nametag,
    themeColor,
    project,
    Month,
    Year,
    contentAbout,
    contentDesign,
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
    img8, children, children1
}) => {
    const [modalSrc, setModalSrc] = useState(null);
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

    return (
        <div className={`${themeColor} `}>
            <div className="container p-8 pt- w-4/6">

                {/* Navigation */}
                <div className="flex w-full justify-between items-center z-50 p-4 pb-0">
                    <button onClick={handleBackToHome} className="group flex gap-2 justify-center items-center">
                        <img src={bling} alt="Back to Home" className="h-6 filter brightness-75 hover:brightness-100 transition-all duration-100" />
                        <div className=" opacity-0 group-hover:opacity-50 flex justify-center items-center">
                            <img src={arrow} alt="" />
                            <div className="text-white font-main text-[13px]">Back to Home</div>
                        </div>
                    </button>
                </div>

                {/* Main Content */}
                <div className="text-white mx-auto flex gap-12">
                    {/* Picture + About project*/}
                    <div className="w-[30%] p-4 rounded-lg">
                        <div className="w-full aspect-square bg-white rounded-lg overflow-hidden">
                            <img
                                src={thumbnail}
                                alt="Event Thumbnail"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-8 mt-4">
                            <Subtitle name="About this project">
                                {contentAbout}
                            </Subtitle>

                            <Skill children={children1} />
                        </div>
                    </div>

                    {/* Name + Overview + Detail Section */}
                    <div className="w-[70%] mt-6">
                        <Tag name={nametag} />
                        <H2 className={"text-white mt-2 mb-4"}>{project}</H2>

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
                                <div className="grid grid-cols-4 gap-2 bg-white p-2 rounded-md">
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
    <div className="relative group">
        <img
            src={src}
            alt="Preview"
            className={`w-full object-cover rounded-xl ${height}`}
            loading="lazy"
        />
        <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={() => openModal(src)}
        >
            <div className="backdrop-blur-sm bg-black bg-opacity-40 shadow-md rounded-full p-4 cursor-pointer absolute top-4 right-4">
                <img src={expandIcon} alt="Expand" className="h-6 w-6" />
            </div>
        </div>
    </div>
);

const Tag = ({ name }) => (
    <div className="inline-flex items-center justify-center h-8 px-4 bg-white bg-opacity-20 text-white rounded-xl text-sm">
        {name}
    </div>
);

const Subtitle = ({ name, children }) => (
    <div>
        <p className="text-white font-main font-medium opacity-70 text-[13px]">{name}</p>
        <div className="h-[1px] w-full bg-white bg-opacity-10 mt-1 mb-1.5"></div>
        {children}
    </div>
);

const Check = ({ name }) => (
    <div className="flex gap-1 opacity-50">
        <img src={check} alt="Check Icon" className="opacity-90" />
        <p className="text-white">{name}</p>
    </div>
);

const Skill = ({ children }) => (
    <div className="bg-white bg-opacity-10 border-[0.5px] border-white border-opacity-10 rounded-lg p-0.5">
        <div className="bg-white bg-opacity-10 rounded-t-lg p-2 text-white font-main font-medium opacity-70 text-[13px]">
            Skills used
        </div>
        <div className="p-2">{children}</div>
    </div>
)