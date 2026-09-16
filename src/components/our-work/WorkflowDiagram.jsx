import { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import DiagramCanvas from "./DiagramCanvas";
import ProcessSidebar from "./ProcessSidebar";
import NoteExplorerShell from "./NoteExplorerShell";
import {
    designProcess,
    getPhase,
    getTask,
    getTaskNavigation,
} from "./designProcessData";
import "../../styles/workflow.css";

const DEFAULT_PHASE_ID = "discover";

const WorkflowDiagram = ({ open, onClose }) => {
    const [selection, setSelection] = useState({
        selectedView: "phase",
        selectedPhaseId: DEFAULT_PHASE_ID,
        selectedTaskId: null,
    });
    const [expandedPhaseIds, setExpandedPhaseIds] = useState([
        DEFAULT_PHASE_ID,
    ]);
    const [hoveredNodeId, setHoveredNodeId] = useState(null);
    const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);
    const [navigationDirection, setNavigationDirection] = useState(0);
    const [guideVisible, setGuideVisible] = useState(false);
    const guideShown = useRef(false);

    const phase = getPhase(selection.selectedPhaseId);
    const task =
        selection.selectedView === "task"
            ? getTask(phase, selection.selectedTaskId)
            : null;
    const taskNavigation = getTaskNavigation(
        selection.selectedPhaseId,
        selection.selectedTaskId,
    );

    const expandPhase = useCallback((phaseId) => {
        setExpandedPhaseIds((current) =>
            current.includes(phaseId) ? current : [...current, phaseId],
        );
    }, []);

    const selectProcess = () => {
        setSelection({
            selectedView: "process",
            selectedPhaseId: null,
            selectedTaskId: null,
        });
        setHoveredNodeId(null);
        setMobileNavigationOpen(false);
    };

    const selectPhase = (phaseId) => {
        expandPhase(phaseId);
        setSelection({
            selectedView: "phase",
            selectedPhaseId: phaseId,
            selectedTaskId: null,
        });
        setHoveredNodeId(null);
        setMobileNavigationOpen(false);
    };

    const selectTask = useCallback((phaseId, taskId, direction = 0) => {
        expandPhase(phaseId);
        setNavigationDirection(direction);
        setSelection({
            selectedView: "task",
            selectedPhaseId: phaseId,
            selectedTaskId: taskId,
        });
        setHoveredNodeId(null);
        setMobileNavigationOpen(false);
    }, [expandPhase]);

    const navigateTask = useCallback(
        (target, direction) => {
            if (!target) return;
            selectTask(target.phaseId, target.taskId, direction);
        },
        [selectTask],
    );

    useEffect(() => {
        if (selection.selectedView !== "task") {
            setGuideVisible(false);
            return undefined;
        }

        if (guideShown.current) return undefined;

        guideShown.current = true;
        setGuideVisible(true);
        const timer = window.setTimeout(() => setGuideVisible(false), 3000);

        return () => window.clearTimeout(timer);
    }, [selection.selectedView]);

    useEffect(() => {
        if (selection.selectedView !== "task") return undefined;

        const onKeyDown = (event) => {
            const target = event.target;
            const tagName = target?.tagName?.toLowerCase();
            const isEditable =
                target?.isContentEditable ||
                ["input", "textarea", "select"].includes(tagName);

            if (isEditable) return;

            if (event.key === "ArrowLeft" && taskNavigation.previous) {
                event.preventDefault();
                navigateTask(taskNavigation.previous, -1);
            }

            if (event.key === "ArrowRight" && taskNavigation.next) {
                event.preventDefault();
                navigateTask(taskNavigation.next, 1);
            }
        };

        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [
        navigateTask,
        selection.selectedView,
        taskNavigation.next,
        taskNavigation.previous,
    ]);

    const togglePhase = (phaseId) => {
        setExpandedPhaseIds((current) =>
            current.includes(phaseId)
                ? current.filter((id) => id !== phaseId)
                : [...current, phaseId],
        );
    };

    const goBack = () => {
        if (selection.selectedView === "task") {
            setSelection((current) => ({
                selectedView: "phase",
                selectedPhaseId: current.selectedPhaseId,
                selectedTaskId: null,
            }));
            setHoveredNodeId(null);
            return;
        }

        selectProcess();
    };

    return (
        <NoteExplorerShell
            open={open}
            title="My Design Process"
            size="xl"
            onClose={onClose}
            sidebar={
            <ProcessSidebar
                process={designProcess}
                selectedView={selection.selectedView}
                selectedPhaseId={selection.selectedPhaseId}
                selectedTaskId={selection.selectedTaskId}
                expandedPhaseIds={expandedPhaseIds}
                mobileOpen={mobileNavigationOpen}
                onToggleMobile={() =>
                    setMobileNavigationOpen((current) => !current)
                }
                onSelectProcess={selectProcess}
                onSelectPhase={selectPhase}
                onSelectTask={selectTask}
                onTogglePhase={togglePhase}
            />
            }
            canvas={
            <DiagramCanvas
                process={designProcess}
                selectedView={selection.selectedView}
                phase={phase}
                task={task}
                hoveredNodeId={hoveredNodeId}
                onHoverNode={setHoveredNodeId}
                onSelectPhase={selectPhase}
                onSelectTask={selectTask}
                onBack={goBack}
                taskNavigation={taskNavigation}
                navigationDirection={navigationDirection}
                guideVisible={guideVisible}
                onPreviousTask={() =>
                    navigateTask(taskNavigation.previous, -1)
                }
                onNextTask={() => navigateTask(taskNavigation.next, 1)}
            />
            }
        />
    );
};

WorkflowDiagram.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default WorkflowDiagram;
