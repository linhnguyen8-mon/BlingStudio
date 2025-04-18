import React, { useRef, useState, useEffect, useMemo, memo, useCallback } from "react";
import { motion } from "framer-motion";

// Import only the images that actually exist in the assets/screen folder
import img_1 from "../assets/screen/concept_01.png";
import img_2 from "../assets/screen/Cloud.png";
import img_3 from "../assets/screen/Concept.png";
import img_4 from "../assets/screen/VPS_thumbnail.png";
import img_5 from "../assets/screen/website.png";
import img_6 from "../assets/screen/_th.png";
import img_7 from "../assets/screen/124.png";
import img_8 from "../assets/screen/Begginer intro.png";

// Fallback image for missing files
const FALLBACK_IMAGE = "https://via.placeholder.com/300x200";

import LazyLoad from "react-lazyload";

// Custom debounce function (instead of importing from lodash)
function debounce(func, wait) {
    let timeout;
    function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    }

    // Add a cancel method to make it compatible with lodash debounce
    executedFunction.cancel = function () {
        clearTimeout(timeout);
    };

    return executedFunction;
}

// Create copies to ensure we have 12 images
const IMAGES = [
    img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8,
    // Repeat some images to fill out the grid
    img_1, img_2, img_3, img_4
].map(img => img || FALLBACK_IMAGE);

// Precomputed column images for stability
const COLUMN_IMAGES = [
    IMAGES.slice(0, 3),
    IMAGES.slice(3, 6),
    IMAGES.slice(6, 9),
    IMAGES.slice(9, 12)
];

// Top positions for each column
const TOP_POSITIONS = ["0%", "20%", "0%", "40%"];

// Animation durations for each column (in seconds)
const ANIMATION_DURATIONS = [15, 18, 22, 25];

// Create the Column component with CSS animation instead of Framer Motion control
const Column = memo(({ images, topPosition, columnIndex }) => {
    const animationDuration = ANIMATION_DURATIONS[columnIndex];

    return (
        <div
            className="flex flex-col gap-8 absolute animate-column"
            style={{
                top: topPosition,
                animation: `columnMove ${animationDuration}s linear infinite`,
            }}
        >
            {images.map((img, index) => (
                <div key={index} className="relative rounded-sm group">
                    <LazyLoad
                        height={300}
                        once
                        offset={500} // Increased offset to start loading earlier
                        placeholder={<div className="h-[300px] w-full bg-gray-200 animate-pulse rounded-md" />}
                        scrollContainer={window} // Ensure it uses the window as scroll container
                        unmountIfInvisible={false} // Keep components mounted
                    >
                        <img
                            className="object-cover rounded-md p-3 bg-background bg-opacity-40"
                            src={img}
                            alt={`Gallery image ${index + 1}`}
                            width="100%"
                            height="auto"
                            loading="eager" // Changed from lazy to eager
                            onError={(e) => {
                                console.log(`Failed to load image: ${img}`);
                                e.target.src = FALLBACK_IMAGE;
                            }}
                        />
                    </LazyLoad>
                </div>
            ))}
        </div>
    );
});

Column.displayName = "GalleryColumn";

const Showreel = () => {
    // All hooks must be called at the top level in the same order each time
    const galleryRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: window.innerWidth || 1024, height: 700 });
    const [isLoaded, setIsLoaded] = useState(false);
    const [animationKey, setAnimationKey] = useState(0); // Force re-render with key change

    // Add CSS keyframes for column animation to the page
    useEffect(() => {
        // Create a style element with our keyframe animation
        const styleEl = document.createElement('style');
        styleEl.innerHTML = `
            @keyframes columnMove {
                0% {
                    transform: translateY(0);
                }
                100% {
                    transform: translateY(-100%);
                }
            }
        `;
        document.head.appendChild(styleEl);

        return () => {
            document.head.removeChild(styleEl);
        };
    }, []);

    // Memoize column images - note: moved constant outside component
    const columnImages = useMemo(() => COLUMN_IMAGES, []);

    // Memoize top positions - note: moved constant outside component
    const topPositions = useMemo(() => TOP_POSITIONS, []);

    // Define resize handler callback
    const handleResize = useCallback(() => {
        if (!galleryRef.current) {
            // Even if we don't have a ref, still mark as loaded after a short delay
            setTimeout(() => setIsLoaded(true), 500);
            return;
        }

        try {
            // Set fixed height to avoid calculation issues
            const height = galleryRef.current.clientHeight || 700;

            setDimensions({
                width: window.innerWidth,
                height: height,
            });

            // Mark component as loaded immediately
            setIsLoaded(true);

            // Force re-render of animation columns
            setAnimationKey(prev => prev + 1);
        } catch (error) {
            console.error("Error in handleResize:", error);
            // Set default dimensions even if there's an error
            setDimensions({
                width: window.innerWidth,
                height: 700,
            });
            setIsLoaded(true);
        }
    }, [galleryRef]);

    // Create debounced resize handler
    const debouncedHandleResize = useMemo(() => debounce(handleResize, 250), [handleResize]);

    // Setup resize listener
    useEffect(() => {
        try {
            window.addEventListener("resize", debouncedHandleResize);
            // Initial measurement
            debouncedHandleResize();

            return () => {
                window.removeEventListener("resize", debouncedHandleResize);
                if (debouncedHandleResize.cancel) {
                    debouncedHandleResize.cancel();
                }
            };
        } catch (error) {
            console.error("Error in resize effect:", error);
            // Ensure isLoaded is set to true even if there's an error
            setIsLoaded(true);
        }
    }, [debouncedHandleResize]);

    // Add this effect after your other effects
    useEffect(() => {
        // Preload all images
        IMAGES.forEach((src) => {
            if (src) {
                const img = new Image();
                img.src = src;
            }
        });
    }, []);

    // Force loading to complete after a timeout
    useEffect(() => {
        // Force the gallery to show after a shorter time (1.5 seconds)
        const forceLoadTimeout = setTimeout(() => {
            if (!isLoaded) {
                console.log("Forcing gallery to load after timeout");
                setIsLoaded(true);
            }
        }, 1500); // Reduced from 3000ms to 1500ms

        return () => clearTimeout(forceLoadTimeout);
    }, [isLoaded]);

    // Add a simple loading indicator while images are loading
    if (!isLoaded) {
        return (
            <div className="container rounded-2xl overflow-hidden relative h-[700px] flex items-center justify-center">
                <div className="animate-pulse text-xl">Loading gallery...</div>
            </div>
        );
    }

    return (
        <div className="container rounded-2xl overflow-hidden relative">
            <div
                className="grid grid-cols-4 h-[700px] relative gap-12 mask-showreel"
                ref={galleryRef}
            >
                {columnImages.map((columnImgs, i) => (
                    <div className="relative" key={`column-${i}-${animationKey}`}>
                        <Column
                            images={columnImgs}
                            topPosition={topPositions[i]}
                            columnIndex={i}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(Showreel);
