import React from "react";
import x from "../assets/x-close.svg";

const Modal = ({ src, onClose }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
            onClick={onClose}
        >
            <div className="relative container mx-auto">
                <img
                    src={src}
                    alt=""
                    className="w-full h-full object-contain rounded-2xl"
                />
                <button
                    className="absolute top-8 right-16 bg-[#fff] rounded-full p-2 shadow-xl"
                    onClick={onClose}
                >
                    <img src={x} alt="Close" className="h-12 " />
                </button>
            </div>
        </div>
    );
};

export default Modal;
