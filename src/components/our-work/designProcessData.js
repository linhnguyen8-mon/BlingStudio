const connect = (ids) =>
    ids.slice(0, -1).map((id, index) => ({
        from: id,
        to: ids[index + 1],
    }));

const task = (
    id,
    name,
    description,
    inputs,
    activities,
    outputs,
    artifacts,
) => ({
    id,
    name,
    description,
    inputs,
    activities,
    outputs,
    artifacts: artifacts.map((artifact, index) => ({
        id: `${id}-artifact-${index + 1}`,
        name: artifact,
    })),
});

const phases = [
    {
        id: "discover",
        number: "01",
        name: "Discover",
        description:
            "Build shared context, understand the market and learn what people actually need.",
        tasks: [
            task(
                "kick-off",
                "Kick-off Meeting",
                "Align the team before research begins.",
                ["Project brief", "Business goals", "Known constraints"],
                ["Align scope and outcomes", "Map stakeholders", "Plan the first research steps"],
                ["Shared direction", "Open questions", "Initial timeline"],
                ["Kick-off summary", "Design brief", "Stakeholder map"],
            ),
            task(
                "market-research",
                "Market Research",
                "Understand the landscape before choosing a direction.",
                ["Product idea", "Initial assumptions", "Target audience"],
                ["Scan competitors", "Research market trends", "Compare product patterns"],
                ["Market landscape", "Opportunity areas", "Competitive gaps"],
                ["Research notes", "Competitor matrix", "Market summary"],
            ),
            task(
                "user-research",
                "User Research",
                "Learn about users in their real context.",
                ["Research questions", "Target participants", "Existing feedback"],
                ["Run interviews or surveys", "Observe behavior", "Cluster evidence"],
                ["User needs", "Pain points", "Behavior patterns"],
                ["Interview notes", "Research data", "Insight map"],
            ),
            task(
                "synthesize",
                "Synthesize & Analyze",
                "Turn raw evidence into clear, actionable themes.",
                ["Research findings", "Market evidence", "Team assumptions"],
                ["Group observations", "Identify patterns", "Validate assumptions"],
                ["Key insights", "Priority problems", "Opportunity themes"],
                ["Affinity map", "Personas", "Journey map"],
            ),
        ],
    },
    {
        id: "define",
        number: "02",
        name: "Define",
        description:
            "Frame the right problem and create a clear structure for the solution.",
        tasks: [
            task(
                "core-problem",
                "Core Problem",
                "Translate evidence into a focused problem statement.",
                ["Research insights", "Pain points", "Business context"],
                ["Review recurring issues", "Frame problem statements", "Assess impact"],
                ["Core problem", "Priority user need", "Design challenge"],
                ["Problem statement", "How-might-we questions"],
            ),
            task(
                "define-goals",
                "Define Goals",
                "Align user outcomes with business goals and constraints.",
                ["Core problem", "Product vision", "Technical constraints"],
                ["Set user outcomes", "Align business goals", "Define success measures"],
                ["Design goals", "Success criteria", "Shared priorities"],
                ["Goal framework", "Success metrics"],
            ),
            task(
                "user-flow",
                "User Flow / IA",
                "Shape the paths and information people need to complete their goals.",
                ["Use cases", "Design goals", "Content requirements"],
                ["Map happy and alternate paths", "Group content", "Validate structure"],
                ["Clear task flows", "Navigation model", "Screen structure"],
                ["User flow", "Sitemap", "Information architecture"],
            ),
            task(
                "ui-ux-checklist",
                "UI/UX Checklist",
                "Set the quality bar before detailed design begins.",
                ["User flows", "Brand system", "Accessibility needs"],
                ["Review UX clarity", "Check UI consistency", "Document constraints"],
                ["Quality criteria", "Known risks", "Review baseline"],
                ["UX checklist", "UI checklist", "Decision notes"],
            ),
        ],
    },
    {
        id: "ideate",
        number: "03",
        name: "Ideate & Prototype",
        description:
            "Explore possible solutions, make them tangible and refine the strongest direction.",
        tasks: [
            task(
                "brainstorm",
                "Brainstorm",
                "Generate and prioritize multiple ways to solve the problem.",
                ["Problem statement", "User insights", "Design goals"],
                ["Write HMW prompts", "Generate ideas", "Prioritize by impact and effort"],
                ["Solution themes", "Shortlisted concepts", "Design hypotheses"],
                ["Idea board", "Impact-effort map"],
            ),
            task(
                "wireframe",
                "Wireframe",
                "Test structure and interaction logic at low fidelity.",
                ["Selected concepts", "User flows", "Content hierarchy"],
                ["Sketch key screens", "Connect task paths", "Review with the team"],
                ["Validated layout", "Interaction structure", "Feedback"],
                ["Low-fi wireframes", "Clickable flow"],
            ),
            task(
                "hi-fi-prototype",
                "Hi-fi Prototype",
                "Create a realistic experience for evaluation.",
                ["Wireframes", "Brand system", "Component patterns"],
                ["Design detailed screens", "Connect key interactions", "Check responsive states"],
                ["Test-ready experience", "Visual direction", "Interaction details"],
                ["Hi-fi screens", "Interactive prototype"],
            ),
            task(
                "finetune",
                "Finetune",
                "Resolve inconsistencies and prepare the design for validation.",
                ["Prototype", "Peer feedback", "UI standards"],
                ["Review consistency", "Refine visual details", "Document key behavior"],
                ["Polished prototype", "Resolved issues", "Review-ready design"],
                ["Final prototype", "Design notes"],
            ),
        ],
    },
    {
        id: "test-handoff",
        number: "04",
        name: "Test & Handoff",
        description:
            "Validate the experience, respond to evidence and support accurate implementation.",
        tasks: [
            task(
                "usability-testing",
                "Usability Testing",
                "Observe whether representative users can complete key tasks.",
                ["Prototype", "Test goals", "Participant profile"],
                ["Prepare scenarios", "Run sessions", "Analyze behavior and feedback"],
                ["Usability findings", "Severity levels", "Recommended changes"],
                ["Test plan", "Session notes", "Findings report"],
            ),
            task(
                "quick-iteration",
                "Quick Iteration",
                "Fix high-impact issues and validate the improvement.",
                ["Test findings", "Priority issues", "Team feedback"],
                ["Update flows and UI", "Review changes", "Re-test when needed"],
                ["Improved experience", "Resolved blockers", "Updated decisions"],
                ["Revised prototype", "Change log"],
            ),
            task(
                "handoff",
                "Handoff",
                "Give engineering clear specifications and stay involved through delivery.",
                ["Approved design", "Component system", "Technical context"],
                ["Organize files", "Document states", "Walk through behavior with developers"],
                ["Shared understanding", "Implementation clarity", "Delivery support"],
                ["Design specs", "Asset package", "Handoff notes"],
            ),
        ],
    },
];

phases.forEach((phase) => {
    phase.connections = connect(phase.tasks.map(({ id }) => id));
});

export const designProcess = {
    id: "product-design-process",
    name: "My Design Process",
    description:
        "A practical path from an uncertain product idea to a validated, implementation-ready experience.",
    phases,
    connections: connect(phases.map(({ id }) => id)),
};

export const getPhase = (phaseId) =>
    designProcess.phases.find(({ id }) => id === phaseId) ??
    designProcess.phases[0];

export const getTask = (phase, taskId) =>
    phase.tasks.find(({ id }) => id === taskId) ?? null;

export const taskSequence = designProcess.phases.flatMap((phase) =>
    phase.tasks.map((task) => ({
        phaseId: phase.id,
        taskId: task.id,
    })),
);

export const getTaskNavigation = (phaseId, taskId) => {
    const index = taskSequence.findIndex(
        (item) => item.phaseId === phaseId && item.taskId === taskId,
    );

    if (index < 0) {
        return {
            index: -1,
            total: taskSequence.length,
            previous: null,
            next: null,
        };
    }

    return {
        index,
        total: taskSequence.length,
        previous: taskSequence[index - 1] ?? null,
        next: taskSequence[index + 1] ?? null,
    };
};
