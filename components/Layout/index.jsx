import Footer from "../Footer";
import { useState } from "react";
import { useColorMode } from "@chakra-ui/react";
import Navbar from "../Navbar";
import PageDivider from "../dividers/PageDivider";

const Layout = ({ children, ...rest }) => {
    const [navMenuOpen, setNavMenuOpen] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();

    const toggleNavMenu = () => {
        setNavMenuOpen((isOpen) => {
            document.querySelector("body").classList.toggle("mobile-menu-open");
            return !isOpen;
        });
    };

    return (
        <>
            <Navbar
                isOpen={navMenuOpen}
                toggle={toggleNavMenu}
                toggleColorMode={toggleColorMode}
                colorMode={colorMode}
            />
            {children}
            <PageDivider
                bg="secondary"
                clipPath="ellipse(100% 80% at 90% 80%)"
            />
            <Footer />
        </>
    );
};

export default Layout;
