import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../theme";
import Head from "next/head";
import "@fontsource/fira-sans";
import "@fontsource/roboto";
import "@fontsource/exo-2";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={customTheme}>
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="favicon/site.webmanifest" />
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;