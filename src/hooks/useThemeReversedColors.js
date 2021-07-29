import { useColorMode } from "@chakra-ui/react";

function useThemeReversedColors() {
    let primary, secondary;

    const { colorMode } = useColorMode();

    primary = colorMode === "light" ? "secondary" : "primary";
    secondary = colorMode === "light" ? "primary" : "secondary";

    return [primary, secondary, colorMode];
}

export default useThemeReversedColors;
