import { useState } from "react";
import WorkflowDiagram from "./WorkflowDiagram";

const WorkflowCard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                className="notes-card hover:ring-4 hover:ring-blue-100 hover:ring-offset-2 transition duration-base ease-out-soft"
                onClick={() => setIsModalOpen(true)}
            >
                <span className="notes-card__number">01</span>
                <h3 className="notes-card__title">
                    My Design Process
                </h3>
                <p className="notes-card__preview note-sticker note-sticker--sky">
                    Explore my workflow from discovery and definition through
                    prototyping, testing and handoff.
                </p>
            </button>
            <WorkflowDiagram
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default WorkflowCard;
