const screenModules = import.meta.glob(
    "../../assets/draw-step-by-step/screen/*.{png,jpg,jpeg,webp,gif}",
    {
        eager: true,
        query: "?url",
        import: "default",
    }
);

const flowModules = import.meta.glob(
    "../../assets/draw-step-by-step/flow/*.{png,jpg,jpeg,webp}",
    {
        eager: true,
        query: "?url",
        import: "default",
    }
);

const thumbModules = import.meta.glob(
    "../../assets/draw-step-by-step/thumb.{png,jpg,jpeg,webp,svg}",
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

export const drawStepScreens = sortByPath(Object.entries(screenModules)).map(
    ([, src]) => src
);

export const drawStepFlows = sortByPath(Object.entries(flowModules)).map(
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

export const drawStepThumb = preferredThumb ? preferredThumb[1] : null;
