import React, { useEffect } from "react";
import ContactForm from "./ContactForm";
import { H1, H2, H3 } from "../components/Heading";
import Close from "../assets/Close.svg";
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

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("click", handleOverlayClick);
        };
    }, [onClose]);

    return (
        <div className="relative">
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 modal-overlay"></div>
            <div className="fixed h-3/5 w-3/5 z-50 bg-white p-4 rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <a href="" onClick={onClose} className="absolute top-4 right-4">
                    <img src={Close} alt="" />
                </a>
                <H3>Contact me</H3>
                <ContactForm />
            </div>
        </div>
    );
};

export default Modal;
