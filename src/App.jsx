import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./layouts/Header";
import Intro from "./layouts/Intro";
import Service from "./layouts/Service";
import HowItWork from "./layouts/HowItWork";
import OurWork from "./layouts/OurWork";
import Footer from "./layouts/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import {
    Link,
    Button,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
} from "react-scroll";

function App() {
    return (
        <div className=" w-screen bg-background 4xl:container  mx-auto">
            <Router>
                <Navbar />
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
}

export default App;
