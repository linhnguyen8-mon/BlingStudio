import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

const DISPLAY_SCALE = 1.5;

const layout = new Layout({
    fit: Fit.Contain,
    alignment: Alignment.Center,
    layoutScaleFactor: DISPLAY_SCALE,
});

const RivePlayer = ({ src, active, replayRef }) => {
    const [useStateMachine, setUseStateMachine] = useState(true);
    const { rive, RiveComponent, setContainerRef } = useRive(
        {
            src,
            autoplay: false,
            layout,
            shouldDisableRiveListeners: true,
            ...(useStateMachine ? { stateMachines: "State Machine 1" } : {}),
            onLoadError: () => setUseStateMachine(false),
            onRiveReady: (instance) => {
                instance.resizeDrawingSurfaceToCanvas();
            },
        },
        {
            shouldResizeCanvasToContainer: true,
            shouldUseIntersectionObserver: false,
            useDevicePixelRatio: true,
        }
    );

    useEffect(() => {
        if (!rive) return;
        if (active) {
            rive.play();
        } else {
            rive.pause();
        }
    }, [active, rive]);

    useEffect(() => {
        if (!replayRef) return;
        replayRef.current = () => {
            if (!rive) return;
            rive.reset({ autoplay: true });
        };
        return () => {
            replayRef.current = null;
        };
    }, [rive, replayRef]);

    return (
        <div ref={setContainerRef} className="h-full w-full">
            <RiveComponent className="block h-full w-full pointer-events-none" />
        </div>
    );
};

const RiveClip = ({ src, label, className = "" }) => {
    const { ref, inView } = useInView({
        rootMargin: "160px 0px",
        threshold: 0.15,
        triggerOnce: false,
    });
    const [hovered, setHovered] = useState(false);
    const [mounted, setMounted] = useState(false);
    const replayRef = useRef(null);

    useEffect(() => {
        if (inView) setMounted(true);
    }, [inView]);

    const active = inView || hovered;

    const handleReplay = () => {
        replayRef.current?.();
    };

    return (
        <div
            ref={ref}
            className={`relative group bg-white bg-opacity-10 border-[0.5px] border-white border-opacity-10 rounded-lg p-2 sm:p-3 text-left w-full ${className}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <button
                type="button"
                className="relative w-full aspect-square overflow-hidden rounded-md bg-black/20"
                onClick={handleReplay}
                aria-label={label ? `Replay ${label}` : "Replay animation"}
            >
                {mounted ? (
                    <RivePlayer src={src} active={active} replayRef={replayRef} />
                ) : (
                    <div className="absolute inset-0 animate-pulse bg-white/5" />
                )}
            </button>
            {label ? (
                <p className="mt-2 text-sm text-white/80 capitalize">{label}</p>
            ) : null}
        </div>
    );
};

export default RiveClip;
