import Head from "next/head";
import Layout from "../components/layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceSection from "../components/ServiceSection";
import PageDivider from "../components/dividers/PageDivider";
import { useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import LocationSection from "../components/LocationSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();

    const toggleMobileMenu = () => {
        setMenuIsOpen((isOpen) => {
            document.querySelector("body").classList.toggle("mobile-menu-open");
            return !isOpen;
        });
    };

    return (
        <Layout>
            <Head>
                <title>Voda•Topeni•Plyn | Instalater</title>
            </Head>
            <Header
                isOpen={menuIsOpen}
                toggleMobileMenu={toggleMobileMenu}
                colorMode={colorMode}
                toggleColorMode={toggleColorMode}
            />
            <main>
                <PageDivider
                    bg="secondary"
                    clipPath="ellipse(100% 80% at 10% 80%)"
                    mt={{ base: 0, lg: "-5rem" }}
                />
                <ServiceSection bg="secondary" color="primary" />
                <PageDivider
                    bg="secondary"
                    clipPath="ellipse(60% 85% at 45% 10%)"
                />
                <LocationSection />
                <ContactSection />
            </main>
            
            <PageDivider
                bg="secondary"
                clipPath="ellipse(100% 80% at 90% 80%)"
            />

            <Footer />
        </Layout>
    );
}
