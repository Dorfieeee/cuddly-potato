import Head from "next/head";
import Layout from "../Layout";

function PageLayout({children, title, ...rest}) {

    return (
        <>
            <Head>
                <title>{title + " | Rosendorf"}</title>
            </Head>
            <Layout>
                {children}
            </Layout>
        </>
    );
}

export default PageLayout;