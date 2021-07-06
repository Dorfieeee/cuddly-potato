import { mode } from "@chakra-ui/theme-tools";
import theme from "./theme";
import { hexToRGBA } from "./utils";

export default {
    global: (props) => {
        const primary = mode(
            theme.colors.primary,
            theme.colors.secondary
        )(props);
        const secondary = mode(
            theme.colors.secondary,
            theme.colors.primary
        )(props);

        return {
            // styles for the `body`
            "body": {
                bg: primary,
                color: secondary,
                borderColor: secondary,
            },
            "body.mobile-menu-open": {
                overflow: "hidden",
            },
            ".themeReversedColors": {
                background: secondary,
                color: primary,
                borderColor: primary,
            },
            ".themeDarkColors": {
                background: "secondary",
                color: "primary",
                borderColor: "primary",
            }
            // Service section is always dark
            // ".svg-circle-border": {
            //     fill: secondary,
            // },
            // ".svg-white-part": {
            //     fill: secondary
            // },
        };
    },
};
