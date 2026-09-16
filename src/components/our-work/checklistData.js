export const checklists = {
    ux: {
        title: "UX – User Experience: clarity, usability, flow",
        sections: [
            {
                title: "1. Information Architecture & Content",
                items: [
                    { id: "ux-1-1", text: "Is [the content] structured logically?" },
                    { id: "ux-1-2", text: "Is the [main goal] of each page/screen clear?" },
                    { id: "ux-1-3", text: "Are [labels/titles] descriptive and helpful?" },
                    { id: "ux-1-4", text: "Is [hierarchy of content] easy to scan?" },
                ],
            },
            {
                title: "2. Navigation & User Flow",
                items: [
                    { id: "ux-2-1", text: "Is [navigation] intuitive (menu, tabs, back, etc.)?" },
                    { id: "ux-2-2", text: "Are [flows] linear and free of dead ends?" },
                    { id: "ux-2-3", text: "Are [breadcrumbs or location indicators] available (if needed)?" },
                    { id: "ux-2-4", text: "Are [steps in forms/processes] minimal and logical?" },
                ],
            },
            {
                title: "3. Findability & Searchability",
                items: [
                    { id: "ux-3-1", text: "Are [key actions] visible and discoverable?" },
                    { id: "ux-3-2", text: "Is [search] available and working well?" },
                    { id: "ux-3-3", text: "Are [filters/sort tools] available when needed?" },
                ],
            },
            {
                title: "4. Clarity & Communication",
                items: [
                    { id: "ux-4-1", text: "Does [the design] clearly explain what the user should do?" },
                    { id: "ux-4-2", text: "Are [CTAs (Call to Action)] prominent and actionable?" },
                    { id: "ux-4-3", text: "Is [technical jargon] avoided in favor of human language?" },
                    { id: "ux-4-4", text: "Are [confirmations, tooltips, and help prompts] used where needed?" },
                ],
            },
            {
                title: "5. Feedback & System Status",
                items: [
                    { id: "ux-5-1", text: "Do users get [visual feedback] for every action (e.g., loading, success, error)?" },
                    { id: "ux-5-2", text: "Are [empty states, loading states, and error states] designed?" },
                    { id: "ux-5-3", text: "Are users notified of [background progress] (uploads, sync, etc.)?" },
                ],
            },
            {
                title: "6. Error Handling & Prevention",
                items: [
                    { id: "ux-6-1", text: "Are [errors] prevented when possible (e.g., input validation)?" },
                    { id: "ux-6-2", text: "Are [error messages] human, helpful, and guide [users] to fix?" },
                    { id: "ux-6-3", text: "Do [forms] auto-format or provide examples (e.g., phone number formats)?" },
                ],
            },
            {
                title: "7. Accessibility & Inclusion",
                items: [
                    { id: "ux-7-1", text: "Can the [interface] be used with [screen readers]?" },
                    { id: "ux-7-2", text: "Is it [keyboard-navigable] (tab, focus order)?" },
                    { id: "ux-7-3", text: "Are [color contrast, font sizes, and target areas] accessible?" },
                    { id: "ux-7-4", text: "Are [animations and motion] optional for people with [motion sensitivity]?" },
                ],
            },
            {
                title: "8. Mobile & Responsive Behavior",
                items: [
                    { id: "ux-8-1", text: "Is the [design] fluid across [screen sizes]?" },
                    { id: "ux-8-2", text: "Are [components] reflowed properly for [mobile, tablet, and desktop]?" },
                    { id: "ux-8-3", text: "Are [mobile tap areas] large enough (min. 48x48px)?" },
                    { id: "ux-8-4", text: "Are [gestures (swipe, pinch)] intuitive and supported?" },
                ],
            },
        ],
    },
    ui: {
        title: "UI – User Interface: visual clarity, consistency, polish",
        sections: [
            {
                title: "1. Visual Hierarchy",
                items: [
                    { id: "ui-1-1", text: "Is there a clear [visual hierarchy] (typography, spacing, color)?" },
                    { id: "ui-1-2", text: "Are [primary actions] emphasized more than [secondary actions]?" },
                    { id: "ui-1-3", text: "Are [headings/subheadings] helping [users] scan content easily?" },
                ],
            },
            {
                title: "2. Typography",
                items: [
                    { id: "ui-2-1", text: "Are [font styles] consistent across the [app/website]?" },
                    { id: "ui-2-2", text: "Is the [font size] readable across all [devices] (min. 16px [body])?" },
                    { id: "ui-2-3", text: "Is [line height] and [letter spacing] appropriate?" },
                    { id: "ui-2-4", text: "Are all [headings] aligned with [design system]?" },
                ],
            },
            {
                title: "3. Spacing & Layout",
                items: [
                    { id: "ui-3-1", text: "Are [paddings] and [margins] consistent (e.g., 8pt/4pt grid)?" },
                    { id: "ui-3-2", text: "Is [spacing] between [components] visually balanced?" },
                    { id: "ui-3-3", text: "Does it feel \"open\" with good use of [whitespace]?" },
                    { id: "ui-3-4", text: "Is everything aligned to a [grid] or [visual rhythm]?" },
                ],
            },
            {
                title: "4. Color & Contrast",
                items: [
                    { id: "ui-4-1", text: "Are [brand colors] used appropriately?" },
                    { id: "ui-4-2", text: "Do [UI elements] (buttons, text) meet [contrast ratio guidelines] (WCAG)?" },
                    { id: "ui-4-3", text: "Is [color] not the only indicator (e.g., status, errors)?" },
                    { id: "ui-4-4", text: "Are [interactive states] (hover, active, disabled) visually distinct?" },
                ],
            },
            {
                title: "5. Component Consistency",
                items: [
                    { id: "ui-5-1", text: "Are [buttons, inputs, dropdowns, and other elements] visually consistent?" },
                    { id: "ui-5-2", text: "Are [spacing, corner radius, icon sizes] unified?" },
                    { id: "ui-5-3", text: "Are [text fields and buttons] sized appropriately for their use?" },
                    { id: "ui-5-4", text: "Are [icons] consistent in style and [line weight]?" },
                ],
            },
            {
                title: "6. Microinteractions",
                items: [
                    { id: "ui-6-1", text: "Are [hover, focus, and click/tap states] implemented?" },
                    { id: "ui-6-2", text: "Are [motion/animations] used meaningfully (not decorative)?" },
                    { id: "ui-6-3", text: "Are [transitions] smooth and aligned with platform guidelines?" },
                ],
            },
            {
                title: "7. Iconography & Imagery",
                items: [
                    { id: "ui-7-1", text: "Are [icons] used consistently and meaningfully?" },
                    { id: "ui-7-2", text: "Are [images] relevant, high resolution, and optimized?" },
                    { id: "ui-7-3", text: "Are [avatars/placeholders] used when [images] are missing?" },
                ],
            },
            {
                title: "8. Branding",
                items: [
                    { id: "ui-8-1", text: "Are [fonts, colors, logos] on-brand?" },
                    { id: "ui-8-2", text: "Is the [tone of the interface (copywriting, visuals)] aligned with [brand personality]?" },
                    { id: "ui-8-3", text: "Are [branded illustrations] used consistently and not overwhelming?" },
                ],
            },
        ],
    },
};

export const checklistLanes = [
    {
        id: "ux",
        eyebrow: "UX",
        title: "Clarity & flow",
        clusters: [
            { id: "ux-structure", number: "01", name: "Structure", sublabel: "ia · content · findability", sectionIndexes: [0, 2] },
            { id: "ux-flow", number: "02", name: "Flow", sublabel: "nav · user flow", sectionIndexes: [1] },
            { id: "ux-communication", number: "03", name: "Communication", sublabel: "clarity · feedback · errors", sectionIndexes: [3, 4, 5] },
            { id: "ux-inclusion", number: "04", name: "Inclusion", sublabel: "a11y · responsive", sectionIndexes: [6, 7] },
        ],
    },
    {
        id: "ui",
        eyebrow: "UI",
        title: "Visual & polish",
        clusters: [
            { id: "ui-hierarchy", number: "01", name: "Hierarchy", sublabel: "hierarchy · type", sectionIndexes: [0, 1] },
            { id: "ui-layout", number: "02", name: "Layout", sublabel: "space · contrast", sectionIndexes: [2, 3] },
            { id: "ui-components", number: "03", name: "Components", sublabel: "components · motion", sectionIndexes: [4, 5] },
            { id: "ui-brand", number: "04", name: "Brand", sublabel: "icons · branding", sectionIndexes: [6, 7] },
        ],
    },
];

export const getCluster = (clusterId) => {
    if (!clusterId) return null;

    for (const lane of checklistLanes) {
        const cluster = lane.clusters.find(({ id }) => id === clusterId);
        if (!cluster) continue;

        return {
            ...cluster,
            laneId: lane.id,
            laneEyebrow: lane.eyebrow,
            laneTitle: lane.title,
            sections: cluster.sectionIndexes.map(
                (index) => checklists[lane.id].sections[index],
            ),
        };
    }

    return null;
};
