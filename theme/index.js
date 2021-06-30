// theme.js
import { extendTheme } from "@chakra-ui/react";
// Global style overrides
import styles from "./styles";
import theme from "./theme";

import Button from "./components/button";

const overrides = {
    styles,
    colors: theme.colors,
    components: {
        Button,
    },
    fonts: {
        body: "Fira Sans, Roboto",
        heading: "Exo 2, Roboto",
    }
};

const extendedTheme = extendTheme(overrides);

export default extendedTheme;