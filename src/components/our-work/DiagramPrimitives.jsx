/* eslint-disable react/prop-types */
import { useId } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { duration, easeOutSoft } from "../../motion";

export const BackNavigation = ({ children, onClick }) => (
    <button type="button" className="diagram-back" onClick={onClick}>
        <svg
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M15.5 10H4.5m0 0 4-4m-4 4 4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
        {children}
    </button>
);

export const DiagramNode = ({
    id,
    number,
    kicker,
    title,
    description,
    children,
    active = false,
    compact = false,
    toneClass = "",
    onClick,
    onHover,
}) => {
    const Component = onClick ? motion.button : motion.div;
    const interactiveProps = onClick
        ? {
              type: "button",
              onClick,
          }
        : {};

    return (
        <Component
            {...interactiveProps}
            className={`diagram-node note-sticker ${toneClass} ${onClick ? "diagram-node--button" : ""} ${
                active ? "diagram-node--active" : ""
            } ${compact ? "diagram-node--compact" : ""}`}
            variants={{
                initial: { opacity: 0, y: 8 },
                animate: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: duration.base, ease: easeOutSoft },
                },
            }}
            onMouseEnter={() => onHover?.(id)}
            onMouseLeave={() => onHover?.(null)}
            onFocus={() => onHover?.(id)}
            onBlur={() => onHover?.(null)}
        >
            {(number || kicker) && (
                <div className="diagram-node__meta">
                    {number && <span>{number}</span>}
                    {kicker && <span>{kicker}</span>}
                </div>
            )}
            <h3 className="diagram-node__title">{title}</h3>
            {description && (
                <p className="diagram-node__description">{description}</p>
            )}
            {children}
            {onClick && (
                <span className="diagram-node__action" aria-hidden="true">
                    Explore
                    <span>→</span>
                </span>
            )}
        </Component>
    );
};

export const DiagramConnector = ({ from, to, hoveredNodeId }) => {
    const reducedMotion = useReducedMotion();
    const markerId = `arrow-${useId().replace(/:/g, "")}`;
    const related = hoveredNodeId === from || hoveredNodeId === to;

    return (
        <motion.svg
            className={`diagram-connector ${
                related ? "diagram-connector--related" : ""
            }`}
            viewBox="0 0 72 24"
            fill="none"
            aria-hidden="true"
            variants={{
                initial: { opacity: reducedMotion ? 1 : 0 },
                animate: {
                    opacity: 1,
                    transition: {
                        duration: reducedMotion
                            ? 0
                            : duration.fast,
                        ease: easeOutSoft,
                    },
                },
            }}
        >
            <defs>
                <marker
                    id={markerId}
                    viewBox="0 0 8 8"
                    refX="7"
                    refY="4"
                    markerWidth="7"
                    markerHeight="7"
                    orient="auto"
                >
                    <path d="M0 0 8 4 0 8Z" fill="currentColor" />
                </marker>
            </defs>
            <motion.path
                d="M4 12H64"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                markerEnd={`url(#${markerId})`}
                initial={{ pathLength: reducedMotion ? 1 : 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                    duration: reducedMotion ? 0 : duration.slow,
                    ease: easeOutSoft,
                    delay: reducedMotion ? 0 : 0.1,
                }}
            />
        </motion.svg>
    );
};

export const ArtifactNode = ({ artifacts }) => (
    <div className="artifact-list" aria-label="Artifacts">
        {artifacts.map((artifact) =>
            artifact.target?.href ? (
                <a
                    key={artifact.id}
                    href={artifact.target.href}
                    className="artifact-chip artifact-chip--link"
                    target={
                        artifact.target.type === "external"
                            ? "_blank"
                            : undefined
                    }
                    rel={
                        artifact.target.type === "external"
                            ? "noreferrer"
                            : undefined
                    }
                >
                    {artifact.name}
                </a>
            ) : (
                <span key={artifact.id} className="artifact-chip">
                    {artifact.name}
                </span>
            ),
        )}
    </div>
);

export const NodeList = ({ items }) => (
    <ul className="diagram-node__list">
        {items.map((item) => (
            <li key={item}>{item}</li>
        ))}
    </ul>
);

export const TaskNavigator = ({
    currentIndex,
    total,
    hasPrevious,
    hasNext,
    guideVisible,
    onPrevious,
    onNext,
}) => {
    const reducedMotion = useReducedMotion();

    return (
        <nav className="task-navigator" aria-label="Task navigation">
            <AnimatePresence>
                {guideVisible && (
                    <motion.div
                        className="task-navigator__guide"
                        role="status"
                        aria-live="polite"
                        initial={
                            reducedMotion
                                ? { opacity: 1 }
                                : { opacity: 0, y: 6 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: reducedMotion ? 0 : 4 }}
                        transition={{
                            duration: reducedMotion ? 0 : duration.fast,
                            ease: easeOutSoft,
                        }}
                    >
                        <span>Use</span>
                        <kbd>←</kbd>
                        <kbd>→</kbd>
                        <span>to move between tasks</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="task-navigator__bar">
                <span className="task-navigator__counter" aria-live="polite">
                    {currentIndex + 1} / {total}
                </span>
                <div className="task-navigator__keys">
                    <button
                        type="button"
                        className="task-navigator__key"
                        onClick={onPrevious}
                        disabled={!hasPrevious}
                        aria-label="Previous task"
                        title="Previous task (Arrow Left)"
                    >
                        <span aria-hidden="true">←</span>
                    </button>
                    <button
                        type="button"
                        className="task-navigator__key"
                        onClick={onNext}
                        disabled={!hasNext}
                        aria-label="Next task"
                        title="Next task (Arrow Right)"
                    >
                        <span aria-hidden="true">→</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};
