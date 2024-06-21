// project_1.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import chevronleft from "../assets/chevron-left.svg";
import x from "../assets/x-close.svg";
import expandIcon from "../assets/expand-icon.svg"; // Add your expand icon asset
import TemplateCard from "./project_card";
import Modal from "./Modal"; // Import the Modal component
const ProjectTemplate = ({
    Headline,
    desc,
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    background,
    className,
    height = "h-[700px]",
}) => {
    const [modalSrc, setModalSrc] = useState(null);

    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
    }, []); // Empty dependency array ensures this effect runs only once on mount

    const navigate = useNavigate();

    const handleBackToHome = () => {
        sessionStorage.setItem(
            "scrollPosition",
            document.querySelector('[name="works"]').offsetTop
        );
        navigate("/");
    };

    const openModal = (src) => {
        setModalSrc(src);
    };

    const closeModal = () => {
        setModalSrc(null);
    };

    return (
        <div className="relative">
            <div className="fixed flex w-full justify-between items-center z-50 mt-8">
                <div
                    className="inline-flex g-3  items-center cursor-pointer p-2.5 px-4 bg-[#fff] hover:bg-background rounded-xl mb-8 mt-4"
                    onClick={handleBackToHome}
                >
                    <img src={chevronleft} alt="" />
                    <Link to="/" className="font-semibold">
                        Back to Home
                    </Link>
                </div>
                <Link to="/">
                    <div
                        className=" h-12 w-12 bg-[#fff] rounded-full z-50 mr-16  flex justify-center items-center cursor-pointer"
                        onClick={handleBackToHome}
                    >
                        <img className="h-8 " src={x} alt="" />
                    </div>
                </Link>
            </div>

            <div className="relative">
                <Img src={pic1} />
                <div
                    className={`bg-gradient-to-t w-full h-full absolute top-0 ${background} `}
                ></div>
            </div>

            {/* CONTENT */}
            <div className="bg-main w-[80vw] font-secondary mx-auto relative pb-16">
                <div className="absolute top-[-260px]">
                    <p className={`${className} text-8xl font-bold`}>
                        {Headline}
                    </p>
                </div>
                {desc && <TemplateCard>{desc}</TemplateCard>}

                {pic2 && (
                    <TemplateCard>
                        <Img src={pic2} height={height} openModal={openModal} />
                    </TemplateCard>
                )}
                <div className="grid grid-cols-2 gap-4">
                    {pic3 && (
                        <TemplateCard>
                            <Img
                                src={pic3}
                                height={height}
                                openModal={openModal}
                            />
                        </TemplateCard>
                    )}
                    {pic4 && (
                        <TemplateCard>
                            <Img
                                src={pic4}
                                height={height}
                                openModal={openModal}
                            />
                        </TemplateCard>
                    )}
                </div>
                {pic5 && (
                    <TemplateCard>
                        <Img src={pic5} height={height} openModal={openModal} />
                    </TemplateCard>
                )}
                <div className="grid grid-cols-2 gap-4">
                    {pic6 && (
                        <TemplateCard>
                            <Img
                                src={pic6}
                                height={height}
                                openModal={openModal}
                            />
                        </TemplateCard>
                    )}
                    {pic7 && (
                        <TemplateCard>
                            <Img
                                src={pic7}
                                height={height}
                                openModal={openModal}
                            />
                        </TemplateCard>
                    )}
                </div>
                {pic8 && (
                    <TemplateCard>
                        <Img src={pic8} height={height} openModal={openModal} />
                    </TemplateCard>
                )}
                {pic9 && (
                    <TemplateCard>
                        <Img src={pic9} height={height} openModal={openModal} />
                    </TemplateCard>
                )}
            </div>

            {modalSrc && <Modal src={modalSrc} onClose={closeModal} />}
        </div>
    );
};

export default ProjectTemplate;

const Img = ({ src, height = "h-[700px]", openModal }) => (
    <div className="relative group">
        <img
            src={src}
            alt=""
            className={`w-full object-cover rounded-xl ${height}`}
            loading="lazy" // Lazy load images
        />
        <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={() => openModal(src)}
        >
            <div className="bg-[#fff] shadow-md rounded-full p-4 cursor-pointer absolute top-4 right-4">
                <img src={expandIcon} alt="Expand" className="h-12 w-12" />
            </div>
        </div>
    </div>
);
