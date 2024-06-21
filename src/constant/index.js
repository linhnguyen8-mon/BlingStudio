import starIcon from "../assets/star-06.svg";
import folderIcon from "../assets/folder.svg";
import infinityIcon from "../assets/infinity.svg";
import attachmentIcon from "../assets/attachment-01.svg";

export const navigation = [
    {
        id: "2",
        title: "About",
        url: "about",
        img: infinityIcon, // Directly assign the imported image variable
    },
    {
        id: "3",
        title: "Works",
        url: "works",
        img: folderIcon, // Directly assign the imported image variable
    },
    {
        id: "4",
        title: "Skills",
        url: "skills",
        img: starIcon, // Directly assign the imported image variable
    },
    {
        id: "5",
        title: "Notes",
        url: "note",
        img: attachmentIcon, // Directly assign the imported image variable
    },
];
