import PropTypes from "prop-types";
import Modal from "../Modal";

const NoteExplorerShell = ({
    open,
    title,
    size = "xl",
    onClose,
    sidebar,
    canvas,
}) => (
    <Modal
        open={open}
        title={title}
        size={size}
        flush
        onClose={onClose}
    >
        <div className="design-process-explorer note-explorer-shell">
            {sidebar}
            <main className="note-explorer-shell__canvas">{canvas}</main>
        </div>
    </Modal>
);

NoteExplorerShell.propTypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["md", "lg", "xl"]),
    onClose: PropTypes.func.isRequired,
    sidebar: PropTypes.node.isRequired,
    canvas: PropTypes.node.isRequired,
};

export default NoteExplorerShell;
