import React, { useState, useRef, useEffect } from 'react';
import Modal from '../Modal';

const ChecklistSection = ({ title, sections }) => (
    <div className="space-y-6">
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className={`${section.color} rounded-lg border-2 ${section.borderColor}`}>
                <h4 className={`font-medium text-2xl p-4 ${section.textColor}`}>{section.title}</h4>
                <div className="space-y-0">
                    {section.items.map((item, itemIndex) => {
                        // Extract and bold important words (words after "Is" or "Are" and before "\" or ".")
                        const text = item.text;


                        return (
                            <div
                                key={item.id}
                                className={`py-3 px-4 ${itemIndex !== section.items.length - 1 ? `border-b ${section.borderColor}` : ''}`}
                            >
                                <span className="text-md">
                                    {item.text.split(/(\[.*?\])/).map((part, i) => {
                                        if (part.startsWith('[') && part.endsWith(']')) {
                                            return (
                                                <strong key={i} className={`text-medium text-gray-900`}>
                                                    {part.slice(1, -1)}
                                                </strong>
                                            );
                                        }
                                        return (
                                            <span key={i} className="text-gray-700">
                                                {part}
                                            </span>
                                        );
                                    })}
                                </span>

                            </div>
                        );
                    })}
                </div>
            </div>
        ))}
    </div>
);

const UXUIChecklistCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);
    const [checklists, setChecklists] = useState({
        ux: {
            title: "🧠 UX – User Experience: clarity, usability, flow",
            sections: [
                {
                    title: "1. Information Architecture & Content",
                    color: "bg-indigo-100",
                    textColor: "text-indigo-700",
                    borderColor: "border-indigo-200",
                    items: [
                        { id: "ux-1-1", text: "Is [the content] structured logically?", checked: false },
                        { id: "ux-1-2", text: "Is the [main goal] of each page/screen clear?", checked: false },
                        { id: "ux-1-3", text: "Are [labels/titles] descriptive and helpful?", checked: false },
                        { id: "ux-1-4", text: "Is [hierarchy of content] easy to scan?", checked: false }
                    ]
                },
                {
                    title: "2. Navigation & User Flow",
                    color: "bg-blue-100",
                    textColor: "text-blue-700",
                    borderColor: "border-blue-200",
                    items: [
                        { id: "ux-2-1", text: "Is [navigation] intuitive (menu, tabs, back, etc.)?", checked: false },
                        { id: "ux-2-2", text: "Are [flows] linear and free of dead ends?", checked: false },
                        { id: "ux-2-3", text: "Are [breadcrumbs or location indicators] available (if needed)?", checked: false },
                        { id: "ux-2-4", text: "Are [steps in forms/processes] minimal and logical?", checked: false }
                    ]
                },
                {
                    title: "3. Findability & Searchability",
                    color: "bg-cyan-100",
                    textColor: "text-cyan-700",
                    borderColor: "border-cyan-200",
                    items: [
                        { id: "ux-3-1", text: "Are [key actions] visible and discoverable?", checked: false },
                        { id: "ux-3-2", text: "Is [search] available and working well?", checked: false },
                        { id: "ux-3-3", text: "Are [filters/sort tools] available when needed?", checked: false }
                    ]
                },
                {
                    title: "4. Clarity & Communication",
                    color: "bg-teal-100",
                    textColor: "text-teal-700",
                    borderColor: "border-teal-200",
                    items: [
                        { id: "ux-4-1", text: "Does [the design] clearly explain what the user should do?", checked: false },
                        { id: "ux-4-2", text: "Are [CTAs (Call to Action)] prominent and actionable?", checked: false },
                        { id: "ux-4-3", text: "Is [technical jargon] avoided in favor of human language?", checked: false },
                        { id: "ux-4-4", text: "Are [confirmations, tooltips, and help prompts] used where needed?", checked: false }
                    ]
                },
                {
                    title: "5. Feedback & System Status",
                    color: "bg-green-100",
                    textColor: "text-green-700",
                    borderColor: "border-green-200",
                    items: [
                        { id: "ux-5-1", text: "Do users get [visual feedback] for every action (e.g., loading, success, error)?", checked: false },
                        { id: "ux-5-2", text: "Are [empty states, loading states, and error states] designed?", checked: false },
                        { id: "ux-5-3", text: "Are users notified of [background progress] (uploads, sync, etc.)?", checked: false }
                    ]
                },
                {
                    title: "6. Error Handling & Prevention",
                    color: "bg-lime-100",
                    textColor: "text-lime-700",
                    borderColor: "border-lime-200",
                    items: [
                        { id: "ux-6-1", text: "Are [errors] prevented when possible (e.g., input validation)?", checked: false },
                        { id: "ux-6-2", text: "Are [error messages] human, helpful, and guide [users] to fix?", checked: false },
                        { id: "ux-6-3", text: "Do [forms] auto-format or provide examples (e.g., phone number formats)?", checked: false }
                    ]
                },
                {
                    title: "7. Accessibility & Inclusion",
                    color: "bg-yellow-100",
                    textColor: "text-yellow-700",
                    borderColor: "border-yellow-200",
                    items: [
                        { id: "ux-7-1", text: "Can the [interface] be used with [screen readers]?", checked: false },
                        { id: "ux-7-2", text: "Is it [keyboard-navigable] (tab, focus order)?", checked: false },
                        { id: "ux-7-3", text: "Are [color contrast, font sizes, and target areas] accessible?", checked: false },
                        { id: "ux-7-4", text: "Are [animations and motion] optional for people with [motion sensitivity]?", checked: false }
                    ]
                },
                {
                    title: "8. Mobile & Responsive Behavior",
                    color: "bg-amber-100",
                    textColor: "text-amber-700",
                    borderColor: "border-amber-200",
                    items: [
                        { id: "ux-8-1", text: "Is the [design] fluid across [screen sizes]?", checked: false },
                        { id: "ux-8-2", text: "Are [components] reflowed properly for [mobile, tablet, and desktop]?", checked: false },
                        { id: "ux-8-3", text: "Are [mobile tap areas] large enough (min. 48x48px)?", checked: false },
                        { id: "ux-8-4", text: "Are [gestures (swipe, pinch)] intuitive and supported?", checked: false }
                    ]
                }
            ]
        },
        ui: {
            title: "🎨 UI – User Interface: visual clarity, consistency, polish",
            sections: [
                {
                    title: "1. Visual Hierarchy",
                    color: "bg-orange-100",
                    textColor: "text-orange-700",
                    borderColor: "border-orange-200",
                    items: [
                        { id: "ui-1-1", text: "Is there a clear [visual hierarchy] (typography, spacing, color)?", checked: false },
                        { id: "ui-1-2", text: "Are [primary actions] emphasized more than [secondary actions]?", checked: false },
                        { id: "ui-1-3", text: "Are [headings/subheadings] helping [users] scan content easily?", checked: false }
                    ]
                },
                {
                    title: "2. Typography",
                    color: "bg-red-100",
                    textColor: "text-red-700",
                    borderColor: "border-red-200",
                    items: [
                        { id: "ui-2-1", text: "Are [font styles] consistent across the [app/website]?", checked: false },
                        { id: "ui-2-2", text: "Is the [font size] readable across all [devices] (min. 16px [body])?", checked: false },
                        { id: "ui-2-3", text: "Is [line height] and [letter spacing] appropriate?", checked: false },
                        { id: "ui-2-4", text: "Are all [headings] aligned with [design system]?", checked: false }
                    ]
                },
                {
                    title: "3. Spacing & Layout",
                    color: "bg-rose-100",
                    textColor: "text-rose-700",
                    borderColor: "border-rose-200",
                    items: [
                        { id: "ui-3-1", text: "Are [paddings] and [margins] consistent (e.g., 8pt/4pt grid)?", checked: false },
                        { id: "ui-3-2", text: "Is [spacing] between [components] visually balanced?", checked: false },
                        { id: "ui-3-3", text: "Does it feel \"open\" with good use of [whitespace]?", checked: false },
                        { id: "ui-3-4", text: "Is everything aligned to a [grid] or [visual rhythm]?", checked: false }
                    ]
                },
                {
                    title: "4. Color & Contrast",
                    color: "bg-pink-100",
                    textColor: "text-pink-700",
                    borderColor: "border-pink-200",
                    items: [
                        { id: "ui-4-1", text: "Are [brand colors] used appropriately?", checked: false },
                        { id: "ui-4-2", text: "Do [UI elements] (buttons, text) meet [contrast ratio guidelines] (WCAG)?", checked: false },
                        { id: "ui-4-3", text: "Is [color] not the only indicator (e.g., status, errors)?", checked: false },
                        { id: "ui-4-4", text: "Are [interactive states] (hover, active, disabled) visually distinct?", checked: false }
                    ]
                },
                {
                    title: "5. Component Consistency",
                    color: "bg-fuchsia-100",
                    textColor: "text-fuchsia-700",
                    borderColor: "border-fuchsia-200",
                    items: [
                        { id: "ui-5-1", text: "Are [buttons, inputs, dropdowns, and other elements] visually consistent?", checked: false },
                        { id: "ui-5-2", text: "Are [spacing, corner radius, icon sizes] unified?", checked: false },
                        { id: "ui-5-3", text: "Are [text fields and buttons] sized appropriately for their use?", checked: false },
                        { id: "ui-5-4", text: "Are [icons] consistent in style and [line weight]?", checked: false }
                    ]
                },
                {
                    title: "6. Microinteractions",
                    color: "bg-purple-100",
                    textColor: "text-purple-700",
                    borderColor: "border-purple-200",
                    items: [
                        { id: "ui-6-1", text: "Are [hover, focus, and click/tap states] implemented?", checked: false },
                        { id: "ui-6-2", text: "Are [motion/animations] used meaningfully (not decorative)?", checked: false },
                        { id: "ui-6-3", text: "Are [transitions] smooth and aligned with platform guidelines?", checked: false }
                    ]
                },
                {
                    title: "7. Iconography & Imagery",
                    color: "bg-violet-100",
                    textColor: "text-violet-700",
                    borderColor: "border-violet-200",
                    items: [
                        { id: "ui-7-1", text: "Are [icons] used consistently and meaningfully?", checked: false },
                        { id: "ui-7-2", text: "Are [images] relevant, high resolution, and optimized?", checked: false },
                        { id: "ui-7-3", text: "Are [avatars/placeholders] used when [images] are missing?", checked: false }
                    ]
                },
                {
                    title: "8. Branding",
                    color: "bg-indigo-100",
                    textColor: "text-indigo-700",
                    borderColor: "border-indigo-200",
                    items: [
                        { id: "ui-8-1", text: "Are [fonts, colors, logos] on-brand?", checked: false },
                        { id: "ui-8-2", text: "Is the [tone of the interface (copywriting, visuals)] aligned with [brand personality]?", checked: false },
                        { id: "ui-8-3", text: "Are [branded illustrations] used consistently and not overwhelming?", checked: false }
                    ]
                }
            ]
        }
    });

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

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const ChecklistModal = () => (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
        >
            <div
                ref={modalRef}
                className="relative bg-white rounded-2xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-primary">UX/UI Checklist</h2>
                    <button
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setIsModalOpen(false)}
                        aria-label="Close modal"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ChecklistSection title={checklists.ux.title} sections={checklists.ux.sections} />
                        <ChecklistSection title={checklists.ui.title} sections={checklists.ui.sections} />
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
                    03
                </div>
                <div className="font-primary text-xl sm:text-2xl lg:text-3xl font-semibold text-primary mb-4 sm:mb-6 group-hover:text-primary">
                    UX/UI Checklist
                </div>
                <div className="text-primary text-base sm:text-lg bg-gradient-to-br from-purple-100 to-purple-50 rounded-md p-3 sm:p-4 flex flex-col h-full">
                    <div className="mb-2">A checklist for evaluating UX and UI aspects of your design.</div>
                </div>
            </div>
            {isModalOpen && <ChecklistModal />}
        </div>
    );
};

export default UXUIChecklistCard; 