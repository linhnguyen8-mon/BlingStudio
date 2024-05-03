import "./App.css";
import "./Player.css";
import Header from "./layouts/Header";
import Intro from "./layouts/Intro";
import Service from "./layouts/Service";
import HowItWork from "./layouts/HowItWork";
import OurWork from "./layouts/OurWork";
import Footer from "./layouts/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import {
    Link,
    Element,
    animateScroll as scroll,
    scrollSpy,
} from "react-scroll";
import Modal from "./components/Modal";
import { useState, useEffect } from "react";
import { navigation } from "./constant/index";
import { IconButton } from "./components/Button";
import logo from "./assets/full_logo.svg";
import Arrow_1 from "./assets/arrow_white.svg";

const App = () => {
    return (
        <div className=" w-screen bg-background 4xl:container overflow-hidden relative  cursor-default">
            <Router>
                <NavBar />

                <Element name="header">
                    <Header />
                </Element>

                <Element name="whyus">
                    <Intro />
                </Element>
                <Element name="service">
                    <Service />
                </Element>
                <Element name="howitwork">
                    <HowItWork />
                </Element>
                <Element name="ourwork">
                    <OurWork />
                </Element>
                <Element name="footer">
                    <Footer />
                </Element>
            </Router>
        </div>
    );
};
const NavBar = () => {
    // State to manage the background color of the navbar and the active section
    const [navbarBackground, setNavbarBackground] = useState("transparent");
    const [activeSection, setActiveSection] = useState("");

    // Effect to change navbar background based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 1000) {
                setNavbarBackground("white");
            } else {
                setNavbarBackground("transparent");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Function to scroll to top when logo is clicked
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    // Function to set active section when scrolling
    const handleSetActive = (to) => {
        setActiveSection(to);
    };

    // State and functions for modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className=" m-2 fixed z-50 w-screen ">
            <nav
                className={`max-w-[1536px] container p-3 rounded-full flex justify-between items-center bg-${
                    navbarBackground === "white"
                        ? "brand backdrop-blur-md bg-opacity-40 flex justify-between items-center "
                        : "transparent flex justify-between items-center "
                }`}
            >
                {/* Logo section */}
                <Link
                    to="home"
                    activeClass="active"
                    smooth={true}
                    offset={50}
                    duration={1500}
                    onSetActive={scrollToTop}
                    className="cursor-pointer"
                >
                    <img
                        src={logo}
                        className="smm:block w-24 max-w-xs "
                        alt="Logo"
                    />
                </Link>

                {/* Items section */}
                <div className="parent-container">
                    <div
                        className={`md:block flex items-center justify-between h-12 sm:gap-6 font-main text-white ${
                            !isModalOpen ? "smm:hidden" : ""
                        }`}
                    >
                        {/* Render navigation items */}
                        {navigation.map((item) => (
                            <Link
                                activeClass="active"
                                key={item.id}
                                to={item.url}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                className={` m-3 cursor-pointer hover:text-white hover:font-semibold p-3 px-4 border border-transparent hover:border-white rounded-full text-nowrap relative
                            ${
                                activeSection === item.url
                                    ? "active font-bold text-white"
                                    : ""
                            } 
                        `}
                                onSetActive={handleSetActive}
                            >
                                {item.title}
                                {/* Indicator for active section */}
                                {activeSection === item.url && (
                                    <div className="w-[8px] h-[8px] rounded-full bg-white absolute top-[38px] left-1/2 transform -translate-x-1/2"></div>
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Button section */}
                </div>
                <IconButton
                    name="Contact me"
                    svg={Arrow_1}
                    onClick={openModal}
                />
            </nav>

            {/* Modal */}
            <div className="z-50 ">
                {isModalOpen && <Modal onClose={closeModal} />}
            </div>
        </div>
    );
};

export default App;
