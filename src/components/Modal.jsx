import React, { useEffect } from "react";

const Modal = ({ onClose }) => {
    const handleCloseModal = (e) => {
        if (e.target.classList.contains("modal-overlay")) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleCloseModal);
        return () => {
            document.removeEventListener("click", handleCloseModal);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 modal-overlay">
            <div className="bg-white p-4 rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  h-[450px] w-6/12">
                <p>Modal Content Here</p>
                <button
                    onClick={onClose}
                    className="mt-4 p-2 bg-gray-200 rounded"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
