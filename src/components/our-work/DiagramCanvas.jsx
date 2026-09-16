/* eslint-disable react/prop-types */
import React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { duration, easeOutSoft } from "../../motion";
import {
    ArtifactNode,
    BackNavigation,
    DiagramConnector,
    DiagramNode,
    NodeList,
    TaskNavigator,
} from "./DiagramPrimitives";
import { pastelToneClass } from "./notePalette";

const Flow = ({ children, reducedMotion }) => (
    <div className="diagram-view__scroll">
        <motion.div
            className="diagram-flow"
            variants={{
                initial: {},
                animate: {
                    transition: {
                        staggerChildren: reducedMotion ? 0 : 0.075,
                        delayChildren: reducedMotion ? 0 : 0.04,
                    },
                },
            }}
            initial="initial"
            animate="animate"
        >
            {children}
        </motion.div>
    </div>
);

const ViewHeader = ({ eyebrow, title, description, backLabel, onBack }) => (
    <header className="diagram-view__header">
        {onBack && (
            <BackNavigation onClick={onBack}>{backLabel}</BackNavigation>
        )}
        <p className="diagram-view__eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="diagram-view__intro">{description}</p>
    </header>
);

const ProcessOverview = ({
    process,
    hoveredNodeId,
    onHoverNode,
    onSelectPhase,
    reducedMotion,
}) => (
    <>
        <ViewHeader
            eyebrow="Full process"
            title={process.name}
            description={process.description}
        />
        <Flow reducedMotion={reducedMotion}>
            {process.phases.map((phase, index) => {
                const connection = process.connections[index];

                return (
                    <React.Fragment key={phase.id}>
                        <DiagramNode
                            id={phase.id}
                            number={phase.number}
                            title={phase.name}
                            description={phase.description}
                            toneClass={pastelToneClass(phase.id, index)}
                            active={hoveredNodeId === phase.id}
                            onClick={() => onSelectPhase(phase.id)}
                            onHover={onHoverNode}
                        />
                        {connection && (
                            <DiagramConnector
                                {...connection}
                                hoveredNodeId={hoveredNodeId}
                            />
                        )}
                    </React.Fragment>
                );
            })}
        </Flow>
    </>
);

const PhaseOverview = ({
    phase,
    hoveredNodeId,
    onHoverNode,
    onSelectTask,
    onBack,
    reducedMotion,
}) => (
    <>
        <ViewHeader
            eyebrow={`Phase ${phase.number}`}
            title={phase.name}
            description={phase.description}
            backLabel="Back to full process"
            onBack={onBack}
        />
        <Flow reducedMotion={reducedMotion}>
            {phase.tasks.map((task, index) => {
                const connection = phase.connections[index];

                return (
                    <React.Fragment key={task.id}>
                        <DiagramNode
                            id={task.id}
                            number={String(index + 1).padStart(2, "0")}
                            title={task.name}
                            description={task.description}
                            toneClass={pastelToneClass(task.id, index)}
                            active={hoveredNodeId === task.id}
                            onClick={() => onSelectTask(phase.id, task.id)}
                            onHover={onHoverNode}
                        />
                        {connection && (
                            <DiagramConnector
                                {...connection}
                                hoveredNodeId={hoveredNodeId}
                            />
                        )}
                    </React.Fragment>
                );
            })}
        </Flow>
    </>
);

const TaskFocus = ({
    phase,
    task,
    hoveredNodeId,
    onHoverNode,
    onBack,
    reducedMotion,
    taskNavigation,
    guideVisible,
    onPreviousTask,
    onNextTask,
}) => {
    const stages = [
        {
            id: `${task.id}-input`,
            kicker: "Input",
            title: "What we start with",
            content: <NodeList items={task.inputs} />,
        },
        {
            id: `${task.id}-activity`,
            kicker: "Activity",
            title: "What we do",
            content: <NodeList items={task.activities} />,
        },
        {
            id: `${task.id}-output`,
            kicker: "Output",
            title: "What we learn",
            content: <NodeList items={task.outputs} />,
        },
        {
            id: `${task.id}-artifact`,
            kicker: "Artifact",
            title: "What remains",
            content: <ArtifactNode artifacts={task.artifacts} />,
        },
    ];

    return (
        <>
            <ViewHeader
                eyebrow={`${phase.number} ${phase.name}`}
                title={task.name}
                description={task.description}
                backLabel={`Back to ${phase.name}`}
                onBack={onBack}
            />
            <Flow reducedMotion={reducedMotion}>
                {stages.map((stage, index) => {
                    const connection =
                        index < stages.length - 1
                            ? {
                                  from: stage.id,
                                  to: stages[index + 1].id,
                              }
                            : null;

                    return (
                        <React.Fragment key={stage.id}>
                            <DiagramNode
                                id={stage.id}
                                kicker={stage.kicker}
                                title={stage.title}
                                toneClass={pastelToneClass(stage.id, index)}
                                active={hoveredNodeId === stage.id}
                                compact
                                onHover={onHoverNode}
                            >
                                {stage.content}
                            </DiagramNode>
                            {connection && (
                                <DiagramConnector
                                    {...connection}
                                    hoveredNodeId={hoveredNodeId}
                                />
                            )}
                        </React.Fragment>
                    );
                })}
            </Flow>
            <TaskNavigator
                currentIndex={taskNavigation.index}
                total={taskNavigation.total}
                hasPrevious={Boolean(taskNavigation.previous)}
                hasNext={Boolean(taskNavigation.next)}
                guideVisible={guideVisible}
                onPrevious={onPreviousTask}
                onNext={onNextTask}
            />
        </>
    );
};

const DiagramCanvas = ({
    process,
    selectedView,
    phase,
    task,
    hoveredNodeId,
    onHoverNode,
    onSelectPhase,
    onSelectTask,
    onBack,
    taskNavigation,
    navigationDirection,
    guideVisible,
    onPreviousTask,
    onNextTask,
}) => {
    const reducedMotion = useReducedMotion();
    const viewKey =
        selectedView === "process"
            ? "process"
            : `${selectedView}-${phase.id}${task ? `-${task.id}` : ""}`;

    return (
        <main className="diagram-canvas" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
                <motion.section
                    key={viewKey}
                    className="diagram-view"
                    initial={
                        reducedMotion
                            ? { opacity: 1 }
                            : {
                                  opacity: 0,
                                  x:
                                      selectedView === "task"
                                          ? navigationDirection * 18
                                          : 0,
                                  y:
                                      selectedView === "task" &&
                                      navigationDirection
                                          ? 0
                                          : 8,
                              }
                    }
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={
                        reducedMotion
                            ? { opacity: 0 }
                            : {
                                  opacity: 0,
                                  x:
                                      selectedView === "task"
                                          ? navigationDirection * -14
                                          : 0,
                                  y:
                                      selectedView === "task" &&
                                      navigationDirection
                                          ? 0
                                          : -6,
                              }
                    }
                    transition={{
                        duration: reducedMotion ? 0 : duration.base,
                        ease: easeOutSoft,
                    }}
                >
                    {selectedView === "process" && (
                        <ProcessOverview
                            process={process}
                            hoveredNodeId={hoveredNodeId}
                            onHoverNode={onHoverNode}
                            onSelectPhase={onSelectPhase}
                            reducedMotion={reducedMotion}
                        />
                    )}
                    {selectedView === "phase" && (
                        <PhaseOverview
                            phase={phase}
                            hoveredNodeId={hoveredNodeId}
                            onHoverNode={onHoverNode}
                            onSelectTask={onSelectTask}
                            onBack={onBack}
                            reducedMotion={reducedMotion}
                        />
                    )}
                    {selectedView === "task" && task && (
                        <TaskFocus
                            phase={phase}
                            task={task}
                            hoveredNodeId={hoveredNodeId}
                            onHoverNode={onHoverNode}
                            onBack={onBack}
                            reducedMotion={reducedMotion}
                            taskNavigation={taskNavigation}
                            guideVisible={guideVisible}
                            onPreviousTask={onPreviousTask}
                            onNextTask={onNextTask}
                        />
                    )}
                </motion.section>
            </AnimatePresence>
        </main>
    );
};

export default DiagramCanvas;
