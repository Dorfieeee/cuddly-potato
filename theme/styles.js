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
            },
            ".locationCard img": {
                transition: "transform 3s ease",
            },
            ".locationCard:hover img": {
                transform: "scale(1.2)",
            },
            ".locationCard .content": {
                transition: "background 1.5s ease, color .75s ease, text-shadow .75s ease",
                bg: hexToRGBA(primary, 0.7),
                textShadow: "5px 0px 25px" + primary,
            },
            ".locationCard:hover .content": {
                bg: "transparent",
                color: theme.colors.primary,
                textShadow: "5px 0px 5px" + theme.colors.secondary,
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
