import { useReducedMotion } from "framer-motion";
import { duration, easeOutSoft } from "./tokens";

const enter = duration.base;
const exit = duration.base * 0.8;

const enterTransition = { duration: enter, ease: easeOutSoft };
const exitTransition = { duration: exit, ease: easeOutSoft };
const fastTransition = { duration: duration.fast, ease: easeOutSoft };

const fade = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: enterTransition },
    exit: { opacity: 0, transition: exitTransition },
};

const fadeFast = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: fastTransition },
    exit: { opacity: 0, transition: fastTransition },
};

export const presets = {
    overlay: {
        root: {
            initial: { opacity: 0 },
            animate: {
                opacity: 1,
                transition: {
                    duration: enter,
                    ease: easeOutSoft,
                    when: "beforeChildren",
                    staggerChildren: 0.04,
                },
            },
            exit: {
                opacity: 0,
                transition: {
                    duration: exit,
                    ease: easeOutSoft,
                    when: "afterChildren",
                },
            },
        },
        backdrop: fade,
        dialog: {
            initial: { opacity: 0, scale: 0.96, y: 12 },
            animate: { opacity: 1, scale: 1, y: 0, transition: enterTransition },
            exit: { opacity: 0, scale: 0.98, y: 8, transition: exitTransition },
        },
    },
    lightbox: {
        root: {
            initial: { opacity: 0 },
            animate: {
                opacity: 1,
                transition: {
                    duration: enter,
                    ease: easeOutSoft,
                    when: "beforeChildren",
                    staggerChildren: 0.03,
                },
            },
            exit: {
                opacity: 0,
                transition: {
                    duration: exit,
                    ease: easeOutSoft,
                    when: "afterChildren",
                },
            },
        },
        backdrop: fade,
        dialog: {
            initial: { opacity: 0, scale: 0.92 },
            animate: { opacity: 1, scale: 1, transition: enterTransition },
            exit: { opacity: 0, scale: 0.98, transition: exitTransition },
        },
    },
    dropdown: {
        initial: { opacity: 0, y: -8, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1, transition: enterTransition },
        exit: { opacity: 0, y: -6, scale: 0.98, transition: exitTransition },
    },
    crossfade: {
        initial: { opacity: 0, y: 8 },
        animate: { opacity: 1, y: 0, transition: enterTransition },
        exit: { opacity: 0, y: -8, transition: fastTransition },
    },
    fade: fadeFast,
};

export const reducedPresets = {
    overlay: {
        root: fadeFast,
        backdrop: fadeFast,
        dialog: fadeFast,
    },
    lightbox: {
        root: fadeFast,
        backdrop: fadeFast,
        dialog: fadeFast,
    },
    dropdown: fadeFast,
    crossfade: fadeFast,
    fade: fadeFast,
};

export function usePresets() {
    const reduced = useReducedMotion();
    return reduced ? reducedPresets : presets;
}
