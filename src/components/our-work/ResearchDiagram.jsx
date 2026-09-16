import { useId } from "react";
import PropTypes from "prop-types";

const NODE_X = [32, 224, 416, 608];
const NODE_Y = 116;
const NODE_W = 160;
const NODE_H = 128;
const NODE_CY = NODE_Y + NODE_H / 2;

const ResearchNode = ({ section, index, selected, onSelect }) => {
    const select = () => onSelect(section.id);
    const onKeyDown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            select();
        }
    };

    return (
        <g
            className={`research-diagram__node${
                selected ? " research-diagram__node--selected" : ""
            }`}
            role="button"
            tabIndex={0}
            aria-label={`${index + 1}. ${section.title}. ${section.methods.length} methods`}
            onClick={select}
            onKeyDown={onKeyDown}
        >
            <rect
                x={NODE_X[index]}
                y={NODE_Y}
                width={NODE_W}
                height={NODE_H}
                rx="6"
                className="research-diagram__node-box"
            />
            <text
                x={NODE_X[index] + 16}
                y={NODE_Y + 24}
                className="research-diagram__tag"
            >
                {String(index + 1).padStart(2, "0")}
            </text>
            <text
                x={NODE_X[index] + NODE_W / 2}
                y={NODE_Y + 62}
                className="research-diagram__title"
            >
                {section.title}
            </text>
            <text
                x={NODE_X[index] + NODE_W / 2}
                y={NODE_Y + 86}
                className="research-diagram__meta"
            >
                {section.methods.length} methods
            </text>
            <text
                x={NODE_X[index] + NODE_W / 2}
                y={NODE_Y + 106}
                className="research-diagram__action"
            >
                Explore →
            </text>
        </g>
    );
};

ResearchNode.propTypes = {
    section: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        methods: PropTypes.array.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
};

const ResearchDiagram = ({ sections, selectedId, onSelect }) => {
    const markerId = `research-arrow-${useId().replace(/:/g, "")}`;

    return (
        <div className="research-diagram">
            <svg
                viewBox="0 0 800 360"
                role="img"
                aria-labelledby="research-diagram-title research-diagram-desc"
            >
                <title id="research-diagram-title">UX research methods</title>
                <desc id="research-diagram-desc">
                    Four research stages move from exploring behavior through
                    validation and information structure to longitudinal learning.
                </desc>
                <defs>
                    <marker
                        id={markerId}
                        markerWidth="8"
                        markerHeight="6"
                        refX="7"
                        refY="3"
                        orient="auto"
                    >
                        <polygon points="0 0, 8 3, 0 6" fill="#636a73" />
                    </marker>
                </defs>
                <line
                    x1="32"
                    y1={NODE_Y - 36}
                    x2="768"
                    y2={NODE_Y - 36}
                    className="research-diagram__baseline"
                />
                <text x="32" y={NODE_Y - 48} className="research-diagram__eyebrow">
                    RESEARCH PATH
                </text>
                {sections.slice(0, 4).map((section, index) => {
                    const nextX = NODE_X[index] + NODE_W;
                    return index < sections.length - 1 ? (
                        <line
                            key={`research-connector-${section.id}`}
                            x1={nextX + 8}
                            y1={NODE_CY}
                            x2={NODE_X[index + 1] - 8}
                            y2={NODE_CY}
                            className="research-diagram__connector"
                            markerEnd={`url(#${markerId})`}
                        />
                    ) : null;
                })}
                {sections.slice(0, 4).map((section, index) => (
                    <ResearchNode
                        key={section.id}
                        section={section}
                        index={index}
                        selected={selectedId === section.id}
                        onSelect={onSelect}
                    />
                ))}
            </svg>
        </div>
    );
};

ResearchDiagram.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            methods: PropTypes.array.isRequired,
        }),
    ).isRequired,
    selectedId: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
};

export default ResearchDiagram;
