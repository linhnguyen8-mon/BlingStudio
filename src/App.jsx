import React, { memo, useCallback } from "react";
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
import { navigation } from "./constant/index";
import logo from "./assets/blingicon.svg";
import Project1 from "./components/project_1";
import Project2 from "./components/project_2";
import Project3 from "./components/project_3";
import Project4 from "./components/project_4.jsx";
import Project5 from "./components/project_5.jsx";
import Project6 from "./components/project_6.jsx";
import Project7 from "./components/project_7.jsx";
const App = () => {
    return (
        <div className="w-full overflow">
            <NavBar />
            <main className="pt-16 sm:pt-0">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects/*" element={<ProjectPage />} />
                </Routes>
            </main>
        </div>
    );
};

const NavBar = memo(() => {
    const location = useLocation();
    const [activeSection, setActiveSection] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSetActive = useCallback((to) => {
        setActiveSection(to);
        setIsMenuOpen(false);
    }, []);

    const scrollToTop = useCallback(() => {
        scroll.scrollToTop();
    }, []);

    const saveScrollPosition = useCallback(() => {
        const worksSection = document.querySelector('[name="works"]');
        if (worksSection) {
            sessionStorage.setItem("scrollPosition", worksSection.offsetTop.toString());
        }
    }, []);

    const renderNavItems = useCallback(() => (
        navigation.map((item) => (
            <Link
                activeClass="active"
                key={item.id}
                to={item.url}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={`cursor-pointer p-2.5 px-4 flex items-center gap-2 hover:bg-backgroundCardHover rounded-xl hover:text-primary relative ${activeSection === item.url
                    ? "active font-bold bg-backgroundCardHover"
                    : ""
                    }`}
                onSetActive={handleSetActive}
            >
                {activeSection === item.url && (
                    <div className="flex items-center">
                        <img src={item.img} alt="" className="w-4 h-4" />
                    </div>
                )}
                <span className="text-sm md:text-base">{item.title}</span>
            </Link>
        ))
    ), [activeSection, handleSetActive]);

    if (location.pathname.startsWith("/projects")) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-[9999] px-2 sm:px-4 py-1 sm:py-2">
            <nav className="mx-auto max-w-7xl">
                <div className="py-2 sm:py-3 px-1 sm:px-2 rounded-3xl flex flex-col md:flex-row items-center justify-between bg-backgroundCard backdrop-blur-lg bg-opacity-80 border-[0.5px] border-backgroundCard border-opacity-50 hover:bg-opacity-90 shadow-[rgba(7,_65,_210,_0.01)_0px_9px_30px]">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <Link
                            to="home"
                            activeClass="active"
                            smooth={true}
                            offset={50}
                            duration={1500}
                            onSetActive={scrollToTop}
                            className="cursor-pointer"
                            onClick={saveScrollPosition}
                        >
                            <img
                                src={logo}
                                className="w-10 md:w-12"
                                alt="Logo"
                            />
                        </Link>
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto mt-4 md:mt-0`}>
                        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 font-main text-primary">
                            {renderNavItems()}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
});

const HomePage = () => {
    useEffect(() => {
        const scrollPosition = sessionStorage.getItem("scrollPosition");
        if (scrollPosition) {
            window.scrollTo(0, parseInt(scrollPosition));
            sessionStorage.removeItem("scrollPosition");
        }
    }, []);

    return (
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-0">
            <Element name="header">
                <Header />
            </Element>
            <Element name="about" className="hidden lg:block">
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
        </div>
    );
};

const ProjectPage = () => {
    return (
        <div className="w-full mx-auto overflow">
            <Routes>
                <Route path="1" element={<Project1 />} />
                <Route path="2" element={<Project2 />} />
                <Route path="3" element={<Project3 />} />
                <Route path="4" element={<Project4 />} />
                <Route path="5" element={<Project5 />} />
                <Route path="6" element={<Project6 />} />
                <Route path="7" element={<Project7 />} />
            </Routes>
        </div>
    );
};

export default App;
