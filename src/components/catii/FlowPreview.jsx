/* eslint-disable react/prop-types */
import { useState } from "react";
import LazyLoad from "react-lazyload";
import Modal from "../Modal";
import expandIcon from "../../assets/expand-icon.svg";

const FlowPreview = ({
    flows,
    title = "User flow",
    description = "Vocab and grammar learning paths — tap to expand.",
    wide = false,
}) => {
    const [modalSrc, setModalSrc] = useState(null);

    if (!flows?.length) return null;

    return (
        <>
            <div>
                <p className="text-white font-main font-medium opacity-70 text-[13px]">
                    {title}
                </p>
                <div className="h-[1px] w-full bg-white bg-opacity-10 mt-1 mb-1.5" />
                {description ? (
                    <p className="text-white/70 text-sm mb-3">{description}</p>
                ) : null}
                <div className="grid grid-cols-1 gap-2">
                    {flows.map(({ src, label }) => (
                        <button
                            key={src}
                            type="button"
                            className="relative group bg-white bg-opacity-10 border-[0.5px] border-white border-opacity-10 rounded-lg p-2 sm:p-3 text-left w-full"
                            onClick={() => setModalSrc(src)}
                        >
                            <p className="text-white/80 text-xs sm:text-sm font-medium mb-2 capitalize">
                                {label}
                            </p>
                            <LazyLoad>
                                <img
                                    src={src}
                                    alt={label}
                                    className={`w-full object-contain rounded-md bg-white/5 ${
                                        wide
                                            ? "max-h-[420px] sm:max-h-[520px]"
                                            : "max-h-[280px] sm:max-h-[360px]"
                                    }`}
                                    loading="lazy"
                                />
                            </LazyLoad>
                            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-base ease-out-soft">
                                <div className="backdrop-blur-sm bg-black bg-opacity-40 shadow-md rounded-full p-2.5 sm:p-4 hover:bg-opacity-60">
                                    <img
                                        src={expandIcon}
                                        alt="Expand"
                                        className="h-5 w-5 sm:h-6 sm:w-6"
                                    />
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            <Modal
                open={Boolean(modalSrc)}
                src={modalSrc}
                onClose={() => setModalSrc(null)}
            />
        </>
    );
};

export default FlowPreview;
