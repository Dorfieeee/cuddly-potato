import { IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeToggleButton = ({ colorMode, toggleColorMode, ...rest }) => {
    return (
        <IconButton
            aria-label="Toggle theme"
            border="none"
            variant={"primary"}
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        />
    );
};

export default ThemeToggleButton;