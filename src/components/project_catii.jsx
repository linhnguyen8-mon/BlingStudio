import ProjectTemplate from "./project_template";
import AboutThisProject from "./project_content/about_this_project";
import {
    Visual,
    System,
    Research,
    Branding,
    Skill,
} from "./project_content/skill";
import Overview from "./project_content/overview";
import RiveClip from "./RiveClip";
import FlowPreview from "./catii/FlowPreview";
import {
    catiiRive,
    catiiScreens,
    catiiThumb,
    catiiFlows,
    catiiShowcases,
} from "./catii/assets";

const ProjectCatii = () => {
    return (
        <ProjectTemplate
            project="Catii"
            thumbnail={catiiThumb}
            Month="Sep"
            Year="2026"
            nametag="animation | mobile"
            themeColor="bg-gradient-to-r from-catii-deeper to-catii"
            AboutThisProject={
                <AboutThisProject
                    Type_of_project="English learning app"
                    Service="Character animation and interactive screens"
                    Client=""
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
                    r1="Needs a memorable character, not just static UI."
                    s1="A cat mascot with a library of Rive states for common moments."
                />
            }
            timeline="Placeholder timeline"
            check1="Placeholder: defined the cat character and a set of emotional / task-based poses."
            check2="Placeholder: built looping Rive state machines for inline product animation."
            check3="Placeholder: composed screens around those motions so UI and character share the same language."
            images={catiiScreens}
            nextId="/projects/9"
            previousId="/projects/7"
        >
            <FlowPreview
                flows={catiiShowcases}
                title="Customization"
                wide
            />
            <FlowPreview flows={catiiFlows} />
            {catiiRive.length > 0 && (
                <div>
                    <p className="text-white font-main font-medium opacity-70 text-[13px]">
                        Animation
                    </p>
                    <div className="h-[1px] w-full bg-white bg-opacity-10 mt-1 mb-1.5" />
                    <p className="text-white/70 text-sm mb-3">
                        Hover to play, tap to replay. Clips pause when they leave the viewport.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {catiiRive.map((clip) => (
                            <RiveClip
                                key={clip.src}
                                src={clip.src}
                                label={clip.label}
                            />
                        ))}
                    </div>
                </div>
            )}
        </ProjectTemplate>
    );
};

export default ProjectCatii;
