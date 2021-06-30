import { Box, HStack, Center, IconButton, Icon } from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import MobileMenu from "./components/MobileMenu";
import DesktopMenu from "./components/DesktopMenu";
import PhoneNumberButton from "./components/PhoneNumberButton";
import Logo from "../svg/insatalter-logo-horizontal"

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

const ToggleButton = ({ toggle, isOpen, ...rest }) => {
    return (
        <IconButton
            aria-label="Open navigation menu"
            variant={"primary"}
            border={"none"}
            size="lg"
            icon={
                isOpen ? (
                    <FaTimes />
                ) : (
                    <FaBars />
                )
            }
            onClick={toggle}
            {...rest}
        />
    );
};

const NavLogo = ({ fill, ...rest }) => {
    return (
        <Center h="2.5rem" w="200px" {...rest}>
            <Logo fill={fill} maxW="100%" maxH="100%" />
        </Center>
    );
};

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
    toggleMobileMenu,
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
                {...rest}
            >
                {/* When user resize screen while mobile menu is opened, the menu button remains visible until closed */}
                <ToggleButton
                    display={{ base: "flex", lg: isOpen ? "flex" : "none" }}
                    isOpen={isOpen}
                    toggle={toggleMobileMenu}
                />
                <NavLogo
                    display={{ base: "none", md: "flex" }}
                    fill={colorMode === "light" ? "secondary" : "primary"}
                />

                {/* Navigation visible on large screens */}
                {!isOpen && <DesktopMenu />}

                {/* Right side of navbar */}
                <HStack spacing={"3"}>
                    <ThemeToggleButton
                        colorMode={colorMode}
                        toggleColorMode={toggleColorMode}
                    />
                    <PhoneNumberButton />
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
                <MobileMenu h={"calc(100vh - 5rem)"} />
            </NavBox>
        </>
    );
};

export default Navbar;
