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
            },
            colors: {
                white: "#F7F0EC",
                brand: "#261F1F",
                background: "#F6ECE0",
                primary: "#573308",
                secondary: "#C89B71",
                backgroundCard: "#F0D1B4",
                backgroundCardHover: "#EBC8A8",
                border: "#DFBC93",
            },
            boxShadow: {
                "custom-light": "0 2px 4px rgba(200, 155, 113, 0.1)",
            },
        },
        container: {
            center: true,
            padding: "2rem",
        },
    },
    plugins: [],
};
