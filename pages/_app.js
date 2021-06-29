import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../theme"
import "@fontsource/fira-sans"
import "@fontsource/roboto"
import "@fontsource/exo-2"


function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={customTheme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
