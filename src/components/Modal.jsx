/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePresets } from "../motion";
import x from "../assets/x-close.svg";

const Modal = ({
    open,
    src,
    title,
    children,
    onClose,
    size = "md",
    flush = false,
}) => {
    const presets = usePresets();
    const cache = useRef({ src, title, children });

    if (open) {
        cache.current = { src, title, children };
    }

    const shown = cache.current;
    const isLightbox = Boolean(shown.src);
    const shell = isLightbox ? presets.lightbox : presets.overlay;
    const sizeClass =
        size === "xl"
            ? "max-w-[min(1600px,96vw)]"
            : size === "lg"
              ? "max-w-6xl"
              : "max-w-2xl";

    useEffect(() => {
        if (!open) return undefined;

        const onKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [open, onClose]);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-5"
                    variants={shell.root}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    role="presentation"
                    onClick={(e) => e.stopPropagation()}
                >
                    <motion.div
                        className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
                        variants={shell.backdrop}
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                        }}
                    />
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label={shown.title || "Preview"}
                        className={
                            isLightbox
                                ? "relative flex items-center justify-center max-w-full max-h-full"
                                : `relative w-full ${sizeClass} ${
                                      size === "xl"
                                          ? "max-h-[94vh]"
                                          : "max-h-[85vh]"
                                  } rounded-2xl bg-white ${
                                      flush
                                          ? "overflow-hidden p-0"
                                          : "overflow-y-auto p-6 md:p-8"
                                  }`
                        }
                        variants={shell.dialog}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {shown.src ? (
                            <img
                                src={shown.src}
                                alt=""
                                className="max-w-[calc(100vw-1.5rem)] sm:max-w-[calc(100vw-2.5rem)] max-h-[calc(100vh-3rem)] sm:max-h-[calc(100vh-3.5rem)] object-contain rounded-xl md:rounded-2xl"
                            />
                        ) : (
                            shown.children
                        )}
                        <button
                            type="button"
                            className={`backdrop-blur-sm bg-black border-[0.5px] border-white border-opacity-30 bg-opacity-40 shadow-md rounded-full p-3 md:p-4 cursor-pointer absolute hover:bg-opacity-60 hover:scale-105 transition duration-base ease-out-soft ${
                                flush
                                    ? "top-3 right-3 md:top-4 md:right-4"
                                    : "-top-2 -right-2 md:top-4 md:right-4"
                            }`}
                            onClick={onClose}
                        >
                            <img src={x} alt="Close" className="h-5 md:h-6" />
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
