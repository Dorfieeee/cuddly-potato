import { hexToRGBA } from "./utils";

const primary = "#fdfbfb";
const secondary = "#1A182B";


export default {
    colors: {
        "primary": primary,
        "primaryAlpha.9": hexToRGBA(primary, 0.9),
        "secondary": secondary,
        "secondaryAlpha.9": hexToRGBA(secondary, 0.9),
    },
};
