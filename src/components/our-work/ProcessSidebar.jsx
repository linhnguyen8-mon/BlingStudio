/* eslint-disable react/prop-types */

const Chevron = ({ expanded }) => (
    <svg
        className={`h-4 w-4 shrink-0 transition-transform duration-fast ease-out-soft ${
            expanded ? "rotate-180" : ""
        }`}
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
    >
        <path
            d="m5 7.5 5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ProcessSidebar = ({
    process,
    selectedView,
    selectedPhaseId,
    selectedTaskId,
    expandedPhaseIds,
    mobileOpen,
    onToggleMobile,
    onSelectProcess,
    onSelectPhase,
    onSelectTask,
    onTogglePhase,
}) => (
    <aside className="process-sidebar" aria-label="Design process navigation">
        <button
            type="button"
            className="process-sidebar__mobile-trigger"
            onClick={onToggleMobile}
            aria-expanded={mobileOpen}
            aria-controls="process-navigation"
        >
            <span>
                <span className="block text-xs font-semibold text-secondary">
                    Process navigator
                </span>
                <span className="block text-sm font-semibold text-primary">
                    {selectedView === "process"
                        ? "Full process"
                        : process.phases.find(({ id }) => id === selectedPhaseId)
                              ?.name}
                </span>
            </span>
            <Chevron expanded={mobileOpen} />
        </button>

        <div
            id="process-navigation"
            className={`process-sidebar__content ${
                mobileOpen ? "process-sidebar__content--open" : ""
            }`}
        >
            <button
                type="button"
                className={`process-sidebar__overview ${
                    selectedView === "process"
                        ? "process-sidebar__overview--active"
                        : ""
                }`}
                onClick={onSelectProcess}
                aria-current={selectedView === "process" ? "page" : undefined}
            >
                <span className="process-sidebar__overview-icon" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                </span>
                Full process
            </button>

            <div className="mt-3 space-y-1">
                {process.phases.map((phase) => {
                    const expanded = expandedPhaseIds.includes(phase.id);
                    const phaseActive =
                        selectedView !== "process" &&
                        selectedPhaseId === phase.id;

                    return (
                        <div
                            key={phase.id}
                            className={`process-sidebar__phase ${
                                phaseActive
                                    ? "process-sidebar__phase--active"
                                    : ""
                            }`}
                        >
                            <div className="flex items-stretch">
                                <button
                                    type="button"
                                    className="process-sidebar__phase-button"
                                    onClick={() => onSelectPhase(phase.id)}
                                    aria-current={
                                        phaseActive && !selectedTaskId
                                            ? "step"
                                            : undefined
                                    }
                                >
                                    <span className="process-sidebar__number">
                                        {phase.number}
                                    </span>
                                    <span>{phase.name}</span>
                                </button>
                                <button
                                    type="button"
                                    className="process-sidebar__expand"
                                    onClick={() => onTogglePhase(phase.id)}
                                    aria-expanded={expanded}
                                    aria-controls={`phase-tasks-${phase.id}`}
                                    aria-label={`${
                                        expanded ? "Collapse" : "Expand"
                                    } ${phase.name} tasks`}
                                >
                                    <Chevron expanded={expanded} />
                                </button>
                            </div>

                            <div
                                id={`phase-tasks-${phase.id}`}
                                className={`process-sidebar__tasks ${
                                    expanded
                                        ? "process-sidebar__tasks--expanded"
                                        : ""
                                }`}
                            >
                                <div>
                                    {phase.tasks.map((task) => {
                                        const taskActive =
                                            selectedView === "task" &&
                                            selectedPhaseId === phase.id &&
                                            selectedTaskId === task.id;

                                        return (
                                            <button
                                                type="button"
                                                key={task.id}
                                                className={`process-sidebar__task ${
                                                    taskActive
                                                        ? "process-sidebar__task--active"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    onSelectTask(
                                                        phase.id,
                                                        task.id,
                                                    )
                                                }
                                                aria-current={
                                                    taskActive
                                                        ? "step"
                                                        : undefined
                                                }
                                            >
                                                {task.name}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </aside>
);

export default ProcessSidebar;
