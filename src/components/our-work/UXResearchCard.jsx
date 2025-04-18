import React, { useState, useRef, useEffect } from 'react';
import Modal from '../Modal';

const UXResearchCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
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

    const researchContent = {
        title: "UX Research Methods",
        sections: [
            {
                title: "1. Exploring User Behavior",
                emoji: "👥",
                color: "bg-blue-100",
                textColor: "text-blue-700",
                borderColor: "border-blue-200",
                methods: [
                    {
                        name: "User Interviews & Focus Groups",
                        description: "Engage directly with users to uncover their needs, motivations, and pain points."
                    },
                    {
                        name: "Surveys & Questionnaires",
                        description: "Gather both quantitative and qualitative data from a broader user base."
                    },
                    {
                        name: "Field Studies",
                        description: "Observe users in their natural context to understand real-world interactions."
                    }
                ]
            },
            {
                title: "2. Usability Testing & Validation",
                emoji: "🧪",
                color: "bg-green-100",
                textColor: "text-green-700",
                borderColor: "border-green-200",
                methods: [
                    {
                        name: "Usability Testing",
                        description: "Measure the ease of use and efficiency of a product through task-based evaluation."
                    },
                    {
                        name: "A/B Testing",
                        description: "Compare two or more variants to determine which performs better with real users."
                    },
                    {
                        name: "Eye Tracking",
                        description: "Analyze visual attention to identify areas of focus and improve UI layout."
                    }
                ]
            },
            {
                title: "3. Structuring Information",
                emoji: "🗂️",
                color: "bg-yellow-100",
                textColor: "text-yellow-700",
                borderColor: "border-yellow-200",
                methods: [
                    {
                        name: "Card Sorting",
                        description: "Understand how users group and label content for intuitive navigation."
                    },
                    {
                        name: "Tree Testing",
                        description: "Validate the hierarchy and structure of your navigation without UI distractions."
                    }
                ]
            },
            {
                title: "4. Longitudinal Research",
                emoji: "📊",
                color: "bg-purple-100",
                textColor: "text-purple-700",
                borderColor: "border-purple-200",
                methods: [
                    {
                        name: "Diary Studies",
                        description: "Track user behaviors and experiences over an extended period to uncover patterns."
                    },
                    {
                        name: "Behavioral Analytics",
                        description: "Review product usage data to identify trends, drop-offs, and engagement levels."
                    }
                ]
            }
        ]

    };

    const ResearchModal = () => (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm">
            <div ref={modalRef} className="relative bg-white rounded-2xl p-8 max-w-6xl w-full max-h-[80vh] overflow-y-auto">
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

                <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-primary">{researchContent.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {researchContent.sections.map((section, idx) => (
                            <div key={idx} className={`${section.color} p-6 rounded-xl border-2 ${section.borderColor}`}>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="text-2xl">{section.emoji}</span>
                                    <h3 className={`text-2xl font-semibold ${section.textColor}`}>{section.title}</h3>
                                </div>
                                <div className="space-y-4">
                                    {section.methods.map((method, methodIdx) => (
                                        <div key={methodIdx} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                                            <h4 className={`font-medium text-xl ${section.textColor} mb-2`}>{method.name}</h4>
                                            <p className="text-gray-600 text-md">{method.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div
            className="group container relative mt-2 sm:mt-4 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-base sm:text-lg lg:text-xl bg-white 
            hover:shadow-[rgba(178,_219,_241,_0.3)_0px_9px_20px] hover:before:shadow-inner-card-hover
            hover:ring-offset-2 hover:ring-2 ring-blue-100 cursor-pointer transition-all duration-300"
            onClick={() => setIsModalOpen(true)}
        >
            <div className="h-full overflow-hidden">
                <div className="font-secondary text-3xl sm:text-4xl lg:text-5xl font-semibold italic text-textColor pt-2 sm:pt-4">
                    02
                </div>
                <div className="font-primary text-xl sm:text-2xl lg:text-3xl font-semibold text-primary mb-4 sm:mb-6 group-hover:text-primary">
                    UX Research Methods
                </div>
                <div className="text-primary text-base sm:text-lg bg-gradient-to-br from-purple-100 to-purple-50 rounded-md p-3 sm:p-4 flex flex-col h-full">
                    <div className="mb-2">Explore the comprehensive UX research methods I use to understand user needs and behaviors, from interviews to usability testing</div>
                </div>
            </div>
            {isModalOpen && <ResearchModal />}
        </div>
    );
};

export default UXResearchCard; 