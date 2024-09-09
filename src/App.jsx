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
import { navigation } from "./constant/index";
import logo from "./assets/blingicon.svg";
import Project1 from "./components/project_1";
import Project2 from "./components/project_2";
import Project3 from "./components/project_3";
import Project4 from "./components/project_4.jsx";
import Project5 from "./components/project_5.jsx";
import Project6 from "./components/project_6.jsx";
const App = () => {
    return (
        <div className="w-screen bg-background 4xl:container overflow-hidden relative cursor-default">
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

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const handleSetActive = (to) => {
        setActiveSection(to);
    };

    // Hide NavBar when on /projects/* route
    if (location.pathname.startsWith("/projects")) {
        return null; // Render nothing
    }

    return (
        <div className="m-4 fixed z-[9999] w-screen flex items-center top-0 left-0">
            <div className="mx-auto">
                <nav className="py-3 mx-2 rounded-3xl flex gap-4 justify-between items-center bg-backgroundCard backdrop-blur-lg bg-opacity-80 border-[0.5px] border-backgroundCard border-opacity-50 hover:bg-opacity-90 z-100 shadow-[rgba(7,_65,_210,_0.01)_0px_9px_30px] ">
                    <Link
                        to="home"
                        activeClass="active"
                        smooth={true}
                        offset={50}
                        duration={1500}
                        onSetActive={scrollToTop}
                        className="cursor-pointer"
                        onClick={saveScrollPosition} // Save scroll position when navigating
                    >
                        <img
                            src={logo}
                            className="smm:block w-12 max-w-xs ml-4"
                            alt="Logo"
                        />
                    </Link>
                    <div className="parent-container w-[400px]">
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
                                    className={`cursor-pointer p-2.5 px-4 flex gap-2 hover:bg-backgroundCardHover rounded-xl hover:text-primary relative ${activeSection === item.url
                                        ? "active font-bold bg-backgroundCardHover"
                                        : ""
                                        }`}
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
        </Routes>
    );
};

export default App;
