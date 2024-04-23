/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            smm: "0px",
            sm: "330px",
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
            },
            colors: {
                brand: "#156fe5",
                background: "#F5F6FF",
                primary: "#18191B",
                secondary: "#707A95",
                gradient: {
                    start: "#1e2f51",
                    middle: "#4C58B5",
                    end: "#a2bfe9",
                },
            },
        },
        container: {
            center: true,
            padding: "2rem",
        },
    },
    plugins: [],
};
