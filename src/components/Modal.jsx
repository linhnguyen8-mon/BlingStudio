import React from "react";
import x from "../assets/x-close.svg";

const Modal = ({ src, onClose }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
            onClick={onClose}
        >
            <div className="relative flex items-center justify-center">
                <img
                    src={src}
                    alt=""
                    className="max-w-[80vw] max-h-[80vh] object-contain rounded-2xl"
                />
                <button
                    className="backdrop-blur-sm bg-black border-[0.5px] border-white border-opacity-30 bg-opacity-40 shadow-md rounded-full p-4 cursor-pointer absolute top-4 right-4"
                    onClick={onClose}
                >
                    <img src={x} alt="Close" className="h-6 " />
                </button>
            </div>
        </div>
    );
};

export default Modal;
