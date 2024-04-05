import { useState, useEffect } from "react";
import { navigation } from "../constant/index";
import { IconButton } from "../components/Button";
import logo from "../assets/logo.svg";
import Arrow_1 from "../assets/Arrow_1.svg";
import {
    Link,
    Button,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
} from "react-scroll";
import Modal from "./Modal";

const NavBar = () => {
    const [navbarBackground, setNavbarBackground] = useState("transparent");
    const [activeSection, setActiveSection] = useState(""); // State to track active section

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 30) {
                setNavbarBackground("white"); // Change to your desired background color
            } else {
                setNavbarBackground("transparent"); // Change to your desired background color
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    const handleSetActive = (to) => {
        setActiveSection(to); // Update activeSection state with the section name
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <nav
            className={`mx-auto w-screen  p-6 lg:px-7.5 fixed z-50 bg-${
                navbarBackground === "white"
                    ? "white backdrop-blur-md bg-opacity-70"
                    : "transparent"
            }`}
        >
            <div className="flex items-center justify-between h-[48px] lg:px-2">
                <Link
                    to="home"
                    activeClass="active"
                    smooth={true}
                    offset={50}
                    duration={1500}
                    onSetActive={scrollToTop}
                    className="cursor-pointer"
                >
                    <img src={logo} className="block" alt="Logo" />
                </Link>

                <div
                    className={`hidden md:flex md:mx-auto items-center gap-20 font-main font-normal text-secondary`}
                    style={{ width: `${navigation.length * 140}px` }} // Adjust the width as needed
                >
                    {navigation.map((item) => (
                        <Link
                            activeClass="active"
                            key={item.id}
                            to={item.url}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className={` cursor-pointer hover:text-brand hover:font-normal
                ${
                    activeSection === item.url
                        ? "active font-bold text-brand border-b-4 border-brand"
                        : ""
                } 
                ${item.onlyMobile ? "lg:hidden" : ""}`}
                            onSetActive={handleSetActive}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
                {/* Replace IconButton with your actual IconButton component */}
                <IconButton
                    name="Contact me"
                    className="bg-brand"
                    svg={Arrow_1}
                    onClick={openModal}
                />
                {isModalOpen && <Modal onClose={closeModal} />}
            </div>
        </nav>
    );
};

export default NavBar;
