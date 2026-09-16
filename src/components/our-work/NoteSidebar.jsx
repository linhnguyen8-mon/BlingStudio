import PropTypes from "prop-types";

const NoteSidebar = ({
    title,
    items,
    activeId,
    mobileOpen,
    onToggleMobile,
    onSelect,
}) => (
    <aside className="process-sidebar note-sidebar" aria-label={`${title} navigation`}>
        <button
            type="button"
            className="process-sidebar__mobile-trigger"
            onClick={onToggleMobile}
            aria-expanded={mobileOpen}
        >
            <span>
                <span className="block text-xs font-semibold text-secondary">
                    Note navigator
                </span>
                <span className="block text-sm font-semibold text-primary">
                    {items.find(({ id }) => id === activeId)?.label || title}
                </span>
            </span>
            <span aria-hidden="true">{mobileOpen ? "⌃" : "⌄"}</span>
        </button>
        <div
            className={`process-sidebar__content ${
                mobileOpen ? "process-sidebar__content--open" : ""
            }`}
        >
            <button
                type="button"
                className={`process-sidebar__overview ${
                    activeId === "overview"
                        ? "process-sidebar__overview--active"
                        : ""
                }`}
                onClick={() => onSelect("overview")}
                aria-current={activeId === "overview" ? "page" : undefined}
            >
                <span className="process-sidebar__overview-icon" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                </span>
                Full overview
            </button>
            {items
                .filter(({ id }) => id !== "overview")
                .map((item) => (
                    <button
                        type="button"
                        key={item.id}
                        className={`note-sidebar__item ${
                            activeId === item.id
                                ? "note-sidebar__item--active"
                                : ""
                        }`}
                        onClick={() => onSelect(item.id)}
                        aria-current={activeId === item.id ? "page" : undefined}
                    >
                        {item.emoji && (
                            <span aria-hidden="true">{item.emoji}</span>
                        )}
                        <span>{item.label}</span>
                    </button>
                ))}
        </div>
    </aside>
);

NoteSidebar.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            emoji: PropTypes.string,
        }),
    ).isRequired,
    activeId: PropTypes.string.isRequired,
    mobileOpen: PropTypes.bool.isRequired,
    onToggleMobile: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default NoteSidebar;
