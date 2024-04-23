import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import { H1, H2, H3 } from "../components/Heading";
import Close from "../assets/Close.svg";
import brand from "../assets/brand1.svg";
const Modal = ({ onClose }) => {
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
        <div className="relative">
            {/* Overlay */}
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 modal-overlay"></div>

            {/* Modal */}
            <div className=" m-a fixed smm:w-11/12 smm:h-11/12  smm:mt-4 smm:mb-4 lg:h-5/6 lg:w-4/5 z-50 bg-white rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  overflow-y-scroll">
                {/* Close button */}
                <a
                    href=""
                    onClick={handleClose}
                    className="absolute  top-4 right-4 z-50"
                >
                    <div className="w-12 h-12 rounded-full bg-white bg-opacity-50 flex items-center justify-center">
                        <img src={Close} alt="" />
                    </div>
                </a>

                {/* Modal grid */}
                <div className="grid smm:grid-cols-1 lg:grid-cols-3 ">
                    <div className="smm:h-[140px] lg:h-auto lg:col-span-1 flex bg-gradient-to-b from-brand to-white relative ">
                        {/* Image */}
                        <img
                            className="w-36 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            src={brand}
                            alt=""
                        />
                    </div>
                    <div className="lg:col-span-2">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
