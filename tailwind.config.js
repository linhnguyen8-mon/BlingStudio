/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            smm: "0px",
            sm: "300px",
            md: "500px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            "3xl": "1920px", // Define your custom 3xl breakpoint
            "4xl": "2560px", // Define your custom 4xl breakpoint
        },
        extend: {
            fontFamily: {
                main: ["Inter"],
                secondary:["DM Serif Display"]
            },
            colors: {
                white: "#fff",
                brand: "#261F1F",
                background: "#EFF8FF",
                primary: "#353945",
                secondary: "#9299A2",
                backgroundCard: "#DDF1FC",
                backgroundCardHover: "#fff",
                border: "#ACADB6",
                textColor:"#B2DBF1"
            },
            boxShadow: {
                "custom-light": "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px;",
            },
        },
        container: {
            center: true,
            padding: "2rem",
        },
    },
    plugins: [],
};
