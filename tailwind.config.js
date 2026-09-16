/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "3xl": "1920px",
            "4xl": "2560px",
        },
        extend: {
            fontFamily: {
                main: ["Inter"],
                secondary: ["DM Serif Display"]
            },
            colors: {
                catii: {
                    DEFAULT: "#4F7A56",
                    dark: "#3a5a40",
                    deeper: "#2f4a35",
                },
                white: "#fff",
                brand: "#261F1F",
                background: "#EFF8FF",
                primary: "#353945",
                secondary: "#9299A2",
                backgroundCard: "#DDF1FC",
                backgroundCardHover: "#fff",
                border: "#ACADB6",
                textColor: "#B2DBF1"
            },
            boxShadow: {
                "custom-light": "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px;",
            },
            transitionDuration: {
                fast: "180ms",
                base: "280ms",
                slow: "400ms",
            },
            transitionTimingFunction: {
                "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
            },
            animation: {
                rotate: "rotate 10s linear infinite",
            },
            keyframes: {
                rotate: {
                    "0%": { transform: "rotate(0deg) scale(10)" },
                    "100%": { transform: "rotate(-360deg) scale(10)" },
                },
        
            },
        },
    
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "1.25rem",
                lg: "2rem",
            },
        },
    },
    plugins: [],
};
