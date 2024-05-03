import React, { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import Close from "../assets/Close.svg";
import brand from "../assets/brand1.svg";
import sign from "../assets/sign.png";

const Modal = ({ onClose }) => {
    const [showSuccessCard, setShowSuccessCard] = useState(false);

    const handleSuccess = () => {
        setShowSuccessCard(true);
    };
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        const handleOverlayClick = (e) => {
            if (e.target.classList.contains("modal-overlay")) {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("click", handleOverlayClick);
        // Disable scrolling on the body when the modal is open
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("click", handleOverlayClick);
            // Re-enable scrolling on the body when the modal is closed
            document.body.style.overflow = "auto";
        };
    }, [onClose]);

    const handleClose = (e) => {
        e.preventDefault(); // Prevent default behavior of anchor tag
        onClose();
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center modal-overlay bg-black bg-opacity-50 z-[999]">
            <div className="relative bg-white rounded-lg smm:w-[90%] smm:h-[90%] lg:w-[1200px] lg:h-[800px] overflow-y-auto ">
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-50 focus:outline-none"
                >
                    <img src={Close} alt="Close" className="w-6 h-6" />
                </button>

                {/* Modal grid */}
                {showSuccessCard ? (
                    <div className="font-main">
                        <p className="text-main text-4xl font-bold mt-24 mx-8">
                            Thanks for submitting!
                        </p>
                        <div className="text-secondary  ml-8 bg-[#fff] p-8 rounded-xl text-xl mx-8 mt-8">
                            <span>
                                I will provide you with a comprehensive response
                                shortly. If you have any urgent concerns or
                                additional information, please do not hesitate
                                to reach out.
                            </span>
                            <div className="mt-12">
                                Thank you once again for your cooperation.
                            </div>
                            <img src={sign} className="h-24" alt="" />
                            <div className="block italic mt-4 text-main font-semibold">
                                Bling studio
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="grid smm:grid-cols-1 lg:grid-cols-3">
                        {/* Image */}
                        <div className="smm:hidden lg:block lg:h-full lg:col-span-1 flex bg-gradient-to-b from-brand to-white relative">
                            <img
                                className="w-36 absolute top-[360px] left-[126px]"
                                src={brand}
                                alt=""
                            />
                        </div>

                        <div className="lg:col-span-2">
                            <ContactForm onSuccess={handleSuccess} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
