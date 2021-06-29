import { mode } from "@chakra-ui/theme-tools";
import theme from "../theme";

const getVariantStyles = ({ variant, ...props }) => {
    let light, dark, primary, secondary;

    light = theme.colors.secondary;
    dark = theme.colors.primary;

    if (variant === "primary") {
        primary = mode(light, dark)(props);
        secondary = mode(dark, light)(props);
    } else {
        primary = mode(dark, light)(props);
        secondary = mode(light, dark)(props);
    }

    return {
        border: "2px solid",
        borderColor: primary,
        color: primary,
        _hover: {
            color: secondary,
            bg: primary,
        },
        _focus: {
            color: secondary,
            bg: primary,
        },
    };
};

export default {
    baseStyle: {
        fontWeight: "bold",
        borderRadius: "base",
        border: "3px solid",
        transition: "all 350ms",
    },
    variants: {
        primary: getVariantStyles,
        secondary: getVariantStyles,
        light: {
            color: "primary",
            border: "2px",
            borderColor: "primary",
            _hover: {
                color: "secondary",
                bg: "primary"
            }
        },
    },
    defaultProps: {
        size: "md",
        variant: "outline",
    },
};
