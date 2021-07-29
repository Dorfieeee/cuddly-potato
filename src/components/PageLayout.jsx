import Head from "next/head";
import Layout from "./Layout";
import {useColorMode} from "@chakra-ui/react"
import PropTypes from "prop-types"

function PageLayout({children, title, description,  ...rest}) {
    const {colorMode} = useColorMode()

    return (
        <>
            <Head>
                <title>{title + " | Rosendorf"}</title>
                <meta name="description" content={description} />
                <meta name="robots" content="all" />
                <meta name="theme-color" content={colorMode === "light" ? "#fdfbfb" : "#1a182b"} />
            </Head>
            <Layout>
                {children}
            </Layout>
        </>
    );
}

PageLayout.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default PageLayout;