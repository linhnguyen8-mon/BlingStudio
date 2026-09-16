export const pastelTones = [
    "lavender",
    "sky",
    "butter",
    "mint",
    "peach",
    "rose",
];

const stableHash = (value) =>
    String(value)
        .split("")
        .reduce((hash, character) => hash + character.charCodeAt(0), 0);

export const pastelToneClass = (key, offset = 0) =>
    `note-sticker--${
        pastelTones[(stableHash(key) + offset) % pastelTones.length]
    }`;
