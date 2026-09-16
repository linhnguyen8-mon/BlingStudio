import { useId } from "react";
import PropTypes from "prop-types";
import { checklistLanes } from "./checklistData";

const NODE_X = { ux: 180, ui: 780 };
const NODE_CX = { ux: 340, ui: 940 };
const NODE_Y = [116, 252, 388, 524];
const NODE_W = 320;
const NODE_H = 96;
const ARROW_TOP = [252, 388, 524];
const ARROW_BOTTOM = [212, 348, 484];

const SwimlaneNode = ({
    cluster,
    x,
    y,
    cx,
    selected,
    onSelect,
}) => {
    const onKeyDown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onSelect(cluster.id);
        }
    };

    return (
        <g
            className={`checklist-node${selected ? " checklist-node--selected" : ""}`}
            role="button"
            tabIndex={0}
            aria-label={`${cluster.number} ${cluster.name}. ${cluster.sublabel}`}
            onClick={() => onSelect(cluster.id)}
            onKeyDown={onKeyDown}
        >
            <rect x={x} y={y} width={NODE_W} height={NODE_H} rx="6" fill="#f1f3f4" />
            <rect
                className="checklist-node__box"
                x={x}
                y={y}
                width={NODE_W}
                height={NODE_H}
                rx="6"
            />
            <rect
                x={x + 8}
                y={y + 8}
                width="28"
                height="12"
                rx="2"
                fill="transparent"
                stroke="rgba(37,39,45,0.40)"
                strokeWidth="0.8"
            />
            <text
                x={x + 22}
                y={y + 17}
                fill="rgba(37,39,45,0.8)"
                fontSize="7"
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                textAnchor="middle"
                letterSpacing="0.08em"
            >
                {cluster.number}
            </text>
            <text
                x={cx}
                y={y + 50}
                fill="#25272d"
                fontSize="12"
                fontWeight="600"
                fontFamily="Inter, sans-serif"
                textAnchor="middle"
            >
                {cluster.name}
            </text>
            <text
                x={cx}
                y={y + 66}
                fill="#636a73"
                fontSize="9"
                fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                textAnchor="middle"
            >
                {cluster.sublabel}
            </text>
        </g>
    );
};

SwimlaneNode.propTypes = {
    cluster: PropTypes.shape({
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        sublabel: PropTypes.string.isRequired,
    }).isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    cx: PropTypes.number.isRequired,
    selected: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
};

const ChecklistSwimlane = ({ selectedClusterId, onSelectCluster }) => {
    const markerId = `checklist-arrow-${useId().replace(/:/g, "")}`;

    return (
        <div className="checklist-swimlane">
            <svg
                viewBox="0 0 1280 720"
                xmlns="http://www.w3.org/2000/svg"
                role="group"
                aria-labelledby="checklist-diagram-title checklist-diagram-desc"
                aria-label="UX and UI checklist swimlane. Review experience first, then the interface."
            >
                <title id="checklist-diagram-title">UX/UI checklist</title>
                <desc id="checklist-diagram-desc">
                    Two parallel checklist lanes review user experience and
                    user interface quality from structure through brand.
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

                <rect x="80" y="36" width="520" height="600" rx="8" fill="rgba(37,39,45,0.03)" stroke="rgba(37,39,45,0.12)" strokeWidth="1" />
                <rect x="680" y="36" width="520" height="600" rx="8" fill="rgba(37,39,45,0.03)" stroke="rgba(37,39,45,0.12)" strokeWidth="1" />

                {checklistLanes.map((lane) => (
                    <g key={`${lane.id}-arrows`}>
                        {ARROW_BOTTOM.map((y1, index) => (
                            <line
                                key={`${lane.id}-arrow-${index}`}
                                x1={NODE_CX[lane.id]}
                                y1={y1}
                                x2={NODE_CX[lane.id]}
                                y2={ARROW_TOP[index]}
                                stroke="#636a73"
                                strokeWidth="1"
                                markerEnd={`url(#${markerId})`}
                            />
                        ))}
                    </g>
                ))}

                <text x="340" y="60" fill="#636a73" fontSize="8" fontWeight="500" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" textAnchor="middle" letterSpacing="0.18em">UX</text>
                <text x="340" y="76" fill="#25272d" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">Clarity & flow</text>
                <text x="940" y="60" fill="#636a73" fontSize="8" fontWeight="500" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" textAnchor="middle" letterSpacing="0.18em">UI</text>
                <text x="940" y="76" fill="#25272d" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif" textAnchor="middle">Visual & polish</text>

                <rect x="560" y="52" width="160" height="32" rx="6" fill="#f1f3f4" />
                <rect x="560" y="52" width="160" height="32" rx="6" fill="rgba(166,72,19,0.08)" stroke="#a64813" strokeWidth="1" />
                <text x="640" y="72" fill="#a64813" fontSize="8" fontWeight="500" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" textAnchor="middle" letterSpacing="0.12em">THEN UI</text>

                {checklistLanes.map((lane) =>
                    lane.clusters.map((cluster, index) => (
                        <SwimlaneNode
                            key={cluster.id}
                            cluster={cluster}
                            x={NODE_X[lane.id]}
                            y={NODE_Y[index]}
                            cx={NODE_CX[lane.id]}
                            selected={selectedClusterId === cluster.id}
                            onSelect={onSelectCluster}
                        />
                    )),
                )}

                <line x1="80" y1="656" x2="1200" y2="656" stroke="rgba(37,39,45,0.10)" strokeWidth="0.8" />
                <text x="80" y="672" fill="#636a73" fontSize="8" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" letterSpacing="0.14em">LEGEND</text>
                <rect x="80" y="684" width="14" height="10" rx="2" fill="#ffffff" stroke="#25272d" strokeWidth="1" />
                <text x="100" y="693" fill="#636a73" fontSize="8.5" fontFamily="Inter, sans-serif">Review group</text>
                <line x1="248" y1="689" x2="276" y2="689" stroke="#636a73" strokeWidth="1" markerEnd={`url(#${markerId})`} />
                <text x="284" y="693" fill="#636a73" fontSize="8.5" fontFamily="Inter, sans-serif">Within-lane order</text>
                <rect x="456" y="684" width="14" height="10" rx="2" fill="rgba(166,72,19,0.08)" stroke="#a64813" strokeWidth="1" />
                <text x="476" y="693" fill="#636a73" fontSize="8.5" fontFamily="Inter, sans-serif">Then interface</text>
            </svg>
        </div>
    );
};

ChecklistSwimlane.propTypes = {
    selectedClusterId: PropTypes.string,
    onSelectCluster: PropTypes.func.isRequired,
};

export default ChecklistSwimlane;
