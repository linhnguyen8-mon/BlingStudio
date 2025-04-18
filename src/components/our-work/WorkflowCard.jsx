import React, { useState, useRef, useEffect } from 'react';
import Modal from '../Modal';
import WorkflowDiagram from './WorkflowDiagram';
import '../../styles/workflow.css';

const WorkflowCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedContent, setSelectedContent] = useState(null);
    const modalRef = useRef(null);

    // Handle click outside to close modal
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

    const WorkflowModal = () => (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
            <div ref={modalRef} className="relative bg-white rounded-2xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                <button
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsModalOpen(false);
                    }}
                    aria-label="Close modal"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                {selectedContent === 'research' ? (
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold mb-6 text-primary">UX Research Methods</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="text-center text-gray-500">
                                <p>Research content has been moved to the UX Research card.</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold mb-6 text-primary">My Design Process</h2>
                        <WorkflowDiagram />
                    </>
                )}
            </div>
        </div>
    );

    return (
        <div
            className="group container relative mt-2 sm:mt-4 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-base sm:text-lg lg:text-xl bg-white 
            hover:shadow-[rgba(178,_219,_241,_0.3)_0px_9px_20px] hover:before:shadow-inner-card-hover
            hover:ring-offset-2 hover:ring-2 ring-blue-100 cursor-pointer transition-all duration-300"
            onClick={() => {
                setSelectedContent('process');
                setIsModalOpen(true);
            }}
        >
            <div className="h-full overflow-hidden">
                <div className="font-secondary text-3xl sm:text-4xl lg:text-5xl font-semibold italic text-textColor pt-2 sm:pt-4">
                    01
                </div>
                <div className="font-primary text-xl sm:text-2xl lg:text-3xl font-semibold text-primary mb-4 sm:mb-6 group-hover:text-primary">
                    My Design Process
                </div>
                <div className="text-primary text-base sm:text-lg bg-gradient-to-br from-blue-100 to-blue-50 rounded-md p-3 sm:p-4 flex flex-col h-full">
                    <div className="mb-2">Click to explore my comprehensive design workflow. From discovery to iteration, see how I approach each project</div>
                </div>
            </div>
            {isModalOpen && <WorkflowModal />}
        </div>
    );
};

export default WorkflowCard; 