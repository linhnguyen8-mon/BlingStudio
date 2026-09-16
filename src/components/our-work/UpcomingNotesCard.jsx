import PropTypes from "prop-types";

const UpcomingNotesCard = ({ number, title, preview, toneClass }) => (
    <article
        className="notes-card notes-card--upcoming"
        aria-disabled="true"
    >
        <div className="notes-card__meta">
            <span className="notes-card__number">{number}</span>
            <span className="notes-card__badge">Upcoming</span>
        </div>
        <h3 className="notes-card__title">{title}</h3>
        <p className={`notes-card__preview note-sticker ${toneClass}`}>
            {preview}
        </p>
    </article>
);

UpcomingNotesCard.propTypes = {
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    toneClass: PropTypes.string.isRequired,
};

export default UpcomingNotesCard;
