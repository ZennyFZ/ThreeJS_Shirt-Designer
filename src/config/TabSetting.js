import { swatch, dimension, fileIcon, ai, logoShirt, stylishShirt } from "../assets";

const EditorTabs = [
    {
        name: "colorpicker",
        icon: swatch
    },
    {
        name: "filepicker",
        icon: fileIcon
    },
    {
        name: "dimensionreset",
        icon: dimension
    },
    {
        name: "aipicker",
        icon: ai
    }
]

const FilterTabs = [
    {
        name: "logoShirt",
        icon: logoShirt,
    },
    {
        name: "stylishShirt",
        icon: stylishShirt,
    },
];

const DecalTypes = {
    logo: {
        stateProperty: "logoDecal",
        filterTab: "logoShirt",
    },
    full: {
        stateProperty: "fullDecal",
        filterTab: "stylishShirt",
    },
};

export { EditorTabs, FilterTabs, DecalTypes  }