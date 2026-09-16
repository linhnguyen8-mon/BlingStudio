import ProjectTemplate from "./project_template";
import AboutThisProject from "./project_content/about_this_project";
import {
    Visual,
    Research,
    Branding,
    Skill,
} from "./project_content/skill";
import Overview from "./project_content/overview";
import FlowPreview from "./catii/FlowPreview";
import { drawStepScreens, drawStepThumb, drawStepFlows } from "./draw-step-by-step/assets";

const ProjectDrawStepByStep = () => {
    return (
        <ProjectTemplate
            project="Drawing app"
            thumbnail={drawStepThumb}
            Month="Jun-Dec"
            Year="2025"
            nametag="mobile | tablet"
            themeColor="bg-gradient-to-r from-amber-900 to-orange-800"
            AboutThisProject={
                <AboutThisProject
                    Type_of_project="Drawing learning app"
                    Service="Mobile & tablet app "
                    Client="Learners who want to practice drawing with structured tutorials on phone or tablet."
                />
            }
            Skill={
                <Skill>
                    <Visual />
                    <Research />
                    <Branding />
                </Skill>
            }
            contentOverview={
                <Overview
                    r1="Beginners feel lost when starting a drawing from a blank canvas."
                    s1="Structured lessons break each artwork into clear steps — sketch, block tones, add details — so progress feels achievable."
                    r2="Motivation drops when practice feels repetitive or isolated."
                    s2="Streaks, collections, and a community entry point keep learners coming back and exploring new topics."
                    r3="Tablet drawing needs a focused workspace without overwhelming toolbars."
                    s3="A landscape canvas with playback controls, reference card, and a compact tool palette keeps attention on the artwork."
                />
            }
            timeline="Sep 2026"
            check1="Mapped Study vs Practice flows and category browsing for Traditional, Digital, and Creative paths."
            check2="Designed lesson detail, step carousel, and in-lesson tracing canvas with timeline playback."
            check3="Built home, streak, and collection screens with a warm, approachable visual language for tablet use."
            images={drawStepScreens}
            nextId="/projects/1"
            previousId="/projects/8"
        >
            <FlowPreview flows={drawStepFlows} title="Flow" description="" wide />
        </ProjectTemplate>
    );
};

export default ProjectDrawStepByStep;
