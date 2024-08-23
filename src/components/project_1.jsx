import React from "react";
import ProjectTemplate from "./project_template";
import thumbnail from '../assets/screen/CW_1.png';
import img1 from '../assets/screen/CW_1.png';
import img2 from '../assets/screen/CW_2.png';
import img3 from '../assets/screen/CW_3.png';
import img4 from '../assets/screen/CW_4.png';
import img5 from '../assets/screen/CW_5.png';
import img6 from '../assets/screen/CW_6.png';
import img7 from '../assets/screen/CW_7.png';
import img8 from '../assets/screen/CW_8.png';
import second from '../assets/lottiefiles/booking.json'; // Lottie JSON animation file
import Lottie from 'lottie-react'; // Default import for Lottie

const Project1 = () => {
    return (
        <>
            <ProjectTemplate
                thumbnail={thumbnail}
                Month="Sep"
                Year="2022"
                nametag="mobile"
                themeColor="bg-gradient-to-r from-indigo-900 to-cyan-950"
                buttonColor="bg-blue-500"
                project="CoWorking Space"
                contentAbout="Personal Project | Designed to help users find the ideal co-working space by categorizing options to meet diverse needs. "
                timeline="Sep 2022 - Oct 2022"
                check1="Designed a user flow tailored for beginners."
                check2="Optimized the overall experience to ensure ease of use."
                check3="Enhanced visual quality to create a more appealing interface."
                contentOverview="Focused on tailoring the search experience to match individual preferences, with each category addressing specific user demands for a more personalized selection process.   "
                img1={img1}
                img2={img2}
                img3={img3}
                img4={img4}
                img5={img5}
                img6={img6}
                img7={img7}
                img8={img8}
                children1="Visual design"
            >
                <div className="rounded-xl overflow-hidden">
                    <Lottie animationData={second} loop={true} autoplay={true} />
                </div>
            </ProjectTemplate >
        </>
    );
};

export default Project1;
