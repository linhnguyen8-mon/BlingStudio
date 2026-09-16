import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./layouts/Header";
import Intro from "./layouts/Intro";
import Service from "./pages/Service";
import HowItWork from "./layouts/HowItWork";
import OurWork from "./layouts/OurWork";
import Footer from "./layouts/Footer";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navigation } from "./constant/index";
import { usePresets } from "./motion";
import logo from "./assets/blingicon.svg";
import Project1 from "./components/project_1";
import Project2 from "./components/project_2";
import Project3 from "./components/project_3";
import Project4 from "./components/project_4.jsx";
import Project5 from "./components/project_5.jsx";
import Project6 from "./components/project_6.jsx";
import Project7 from "./components/project_7.jsx";
import ProjectCatii from "./components/project_catii.jsx";
import ProjectDrawStepByStep from "./components/project_draw_step_by_step.jsx";
const App = () => {
    return (
        <div className="w-full max-w-[2560px] mx-auto bg-background overflow-x-hidden relative cursor-default">
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects/*" element={<ProjectPage />} />

            </Routes>
        </div>
    );
};
// Function to save scroll position
const saveScrollPosition = () => {
    const worksSection = document.querySelector('[name="works"]');
    if (worksSection) {
        sessionStorage.setItem("scrollPosition", worksSection.offsetTop);
    }
};

const NavBar = () => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const presets = usePresets();

    const scrollToTop = () => {
        scroll.scrollToTop();
        setMenuOpen(false);
    };

    const handleSetActive = (to) => {
        setActiveSection(to);
    };

    useEffect(() => {
        const closeOnResize = () => {
            if (window.innerWidth >= 1024) {
                setMenuOpen(false);
            }
        };
        window.addEventListener("resize", closeOnResize);
        return () => window.removeEventListener("resize", closeOnResize);
    }, []);

    // Hide NavBar when on /projects/* route
    if (location.pathname.startsWith("/projects")) {
        return null; // Render nothing
    }

    const navLinkClass = (url) =>
        `cursor-pointer p-2.5 px-4 flex gap-2 hover:bg-backgroundCardHover rounded-xl hover:text-primary relative pointer-events-auto transition duration-base ease-out-soft ${
            activeSection === url ? "active font-bold bg-backgroundCardHover" : ""
        }`;

    return (
        <div className="m-3 md:m-4 fixed z-[9999] left-0 right-0 top-0 flex items-center pointer-events-none">
            <div className="mx-auto w-full max-w-lg lg:w-auto lg:max-w-none pointer-events-auto">
                <nav className="relative py-3 mx-2 rounded-3xl flex gap-4 justify-between items-center bg-backgroundCard backdrop-blur-lg bg-opacity-80 border-[0.5px] border-backgroundCard border-opacity-50 hover:bg-opacity-90 shadow-[rgba(7,_65,_210,_0.01)_0px_9px_30px] transition duration-base ease-out-soft">
                    <Link
                        to="home"
                        activeClass="active"
                        smooth={true}
                        offset={50}
                        duration={1500}
                        onSetActive={scrollToTop}
                        className="cursor-pointer"
                        onClick={() => {
                            saveScrollPosition();
                            setMenuOpen(false);
                        }}
                    >
                        <img
                            src={logo}
                            className="block w-10 md:w-12 max-w-xs ml-4"
                            alt="Logo"
                        />
                    </Link>
                    <div className="parent-container hidden lg:block">
                        <div className="flex items-center justify-between h-12 gap-1 mr-4 font-main text-primary">
                            {navigation.map((item) => (
                                <Link
                                    activeClass="active"
                                    key={item.id}
                                    to={item.url}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    className={navLinkClass(item.url)}
                                    onSetActive={handleSetActive}
                                >
                                    {activeSection === item.url && (
                                        <div>
                                            <img src={item.img} alt="" />
                                        </div>
                                    )}
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <button
                        type="button"
                        className="lg:hidden mr-4 w-10 h-10 flex items-center justify-center rounded-xl text-primary hover:bg-backgroundCardHover transition duration-base ease-out-soft"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                                key={menuOpen ? "close" : "menu"}
                                className="flex"
                                variants={presets.fade}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            >
                                {menuOpen ? (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                )}
                            </motion.span>
                        </AnimatePresence>
                    </button>
                    <AnimatePresence>
                        {menuOpen && (
                            <motion.div
                                className="lg:hidden absolute top-[calc(100%+8px)] left-0 right-0 rounded-2xl bg-backgroundCard backdrop-blur-lg bg-opacity-95 border-[0.5px] border-backgroundCard shadow-[rgba(7,_65,_210,_0.04)_0px_9px_30px] p-2 font-main text-primary flex flex-col"
                                variants={presets.dropdown}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                style={{ originY: 0, originX: 0.5 }}
                            >
                                {navigation.map((item) => (
                                    <Link
                                        activeClass="active"
                                        key={item.id}
                                        to={item.url}
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                        duration={500}
                                        className={navLinkClass(item.url)}
                                        onSetActive={handleSetActive}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {activeSection === item.url && (
                                            <div>
                                                <img src={item.img} alt="" />
                                            </div>
                                        )}
                                        {item.title}
                                    </Link>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </div>
        </div>
    );
};
const HomePage = () => {
    useEffect(() => {
        const scrollPosition = sessionStorage.getItem("scrollPosition");
        if (scrollPosition) {
            window.scrollTo(0, parseInt(scrollPosition));
            sessionStorage.removeItem("scrollPosition");
        }
        // Removed automatic scrolling to "works"
    }, []);

    return (
        <>
            <Element name="header">
                <Header />
            </Element>
            <Element name="about">
                <Intro />
            </Element>
            <Element name="works">
                <Service />
            </Element>
            <Element name="skills">
                <HowItWork />
            </Element>
            <Element name="note">
                <OurWork />
            </Element>
            <Element name="footer">
                <Footer />
            </Element>
        </>
    );
};

const ProjectPage = () => {
    return (
        <Routes>
            <Route path="1" element={<Project1 />} />
            <Route path="2" element={<Project2 />} />
            <Route path="3" element={<Project3 />} />
            <Route path="4" element={<Project4 />} />
            <Route path="5" element={<Project5 />} />
            <Route path="6" element={<Project6 />} />
            <Route path="7" element={<Project7 />} />
            <Route path="8" element={<ProjectCatii />} />
            <Route path="9" element={<ProjectDrawStepByStep />} />
        </Routes>
    );
};

export default App;
