import { Box, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import MobileMenu from "./components/MobileMenu";
import DesktopMenu from "./components/DesktopMenu";
import PhoneNumberButton from "./components/PhoneNumberButton";
import kontakty from "../../public/content/kontakty";
import NavLogo from "./components/NavLogo";
import NavToggleButton from "./components/NavToggleButton";
import ThemeToggleButton from "./components/ThemeToggleButton";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(calc(250vh) at 0 0)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(0px at 0px 0px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
        transitionEnd: {
            display: "none",
        },
    },
};

const NavBox = motion(Box);

const Navbar = ({
    isOpen,
    toggle,
    colorMode,
    toggleColorMode,
    ...rest
}) => {
    return (
        <>
            {/* Top bar */}
            <HStack
                height={"5rem"}
                px={"5%"}
                justifyContent={"space-between"}
                boxShadow="dark-lg"
                zIndex={2}
                position="relative"
                bg={colorMode === "light" ? "primary" : "secondary"}
                {...rest}
            >
                {/* When user resize screen while mobile menu is opened, the menu button remains visible until closed */}
                <NavToggleButton
                    display={{ base: "flex", lg: isOpen ? "flex" : "none" }}
                    isOpen={isOpen}
                    toggle={toggle}
                />
                <NavLogo
                    display="flex"
                    justifyContent={{ base: "center", lg: "start" }}
                    flexShrink="2"
                    flexGrow="1"
                    minW="2em"
                    margin="0 2em"
                    fill={colorMode === "light" ? "secondary" : "primary"}
                />

                {/* Navigation visible on large screens */}
                {!isOpen && <DesktopMenu flexGrow="1"/>}

                {/* Right side of navbar */}
                <HStack spacing={"3"}>
                    <ThemeToggleButton
                        colorMode={colorMode}
                        toggleColorMode={toggleColorMode}
                    />
                    <PhoneNumberButton tel={kontakty.tel}/>
                </HStack>
            </HStack>

            {/* Navigation visible on small screens, user needs to open this to make it visible */}
            <NavBox
                as="nav"
                position="absolute"
                width="100%"
                bg={colorMode === "light" ? "primary" : "secondary"}
                color={colorMode === "light" ? "secondary" : "primary"}
                style={{ display: isOpen ? "block" : "none", zIndex: "1200" }}
                animate={isOpen ? "open" : "closed"}
                initial={false}
                variants={sidebar}
            >
                <MobileMenu h={"calc(100vh - 5rem)"} toggle={toggle} />
            </NavBox>
        </>
    );
};

export default Navbar;
