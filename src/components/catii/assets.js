// Drop new files into src/assets/catii/rive or src/assets/catii/screen — this glob picks them up.
const riveModules = import.meta.glob("../../assets/catii/rive/*.riv", {
    eager: true,
    query: "?url",
    import: "default",
});

const screenModules = import.meta.glob(
    "../../assets/catii/screen/*.{png,jpg,jpeg,webp,gif}",
    {
        eager: true,
        query: "?url",
        import: "default",
    }
);

const flowModules = import.meta.glob("../../assets/catii/flow/*.{png,jpg,jpeg,webp}", {
    eager: true,
    query: "?url",
    import: "default",
});

const showcaseModules = import.meta.glob(
    "../../assets/catii/showcase/*.{png,jpg,jpeg,webp}",
    {
        eager: true,
        query: "?url",
        import: "default",
    },
);

const thumbModules = import.meta.glob(
    "../../assets/catii/thumb.{png,jpg,jpeg,webp,svg}",
    {
        eager: true,
        query: "?url",
        import: "default",
    }
);

const labelFromPath = (path) => {
    const file = path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? "";
    const withoutIndex = file.replace(/^\d+-/, "");
    return withoutIndex.replace(/-/g, " ");
};

const sortByPath = (entries) =>
    [...entries].sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }));

export const catiiRive = sortByPath(Object.entries(riveModules)).map(
    ([path, src]) => ({
        src,
        label: labelFromPath(path),
    })
);

export const catiiScreens = sortByPath(Object.entries(screenModules)).map(
    ([, src]) => src
);

export const catiiFlows = sortByPath(Object.entries(flowModules)).map(
    ([path, src]) => ({
        src,
        label: labelFromPath(path),
    })
);

export const catiiShowcases = sortByPath(Object.entries(showcaseModules)).map(
    ([path, src]) => ({
        src,
        label: labelFromPath(path),
    })
);

const thumbEntries = Object.entries(thumbModules);
const preferredThumb =
    thumbEntries.find(([path]) => /\.png$/i.test(path)) ||
    thumbEntries.find(([path]) => /\.(jpe?g|webp)$/i.test(path)) ||
    thumbEntries[0];

export const catiiThumb = preferredThumb ? preferredThumb[1] : null;
