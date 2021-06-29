import { VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NavLink from "./NavLink";

const MenuWrapper = motion(VStack);

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const MobileMenu = (props) => {
    return (
        <MenuWrapper
            overflowY={"auto"}
            spacing={0}
            variants={variants}
            {...props}
        >
            <NavLink href={"#"}>Sluzby</NavLink>
            <NavLink href={"#"}>O mne</NavLink>
            <NavLink href={"#"}>Kde pusobim</NavLink>
            <NavLink href={"#"}>Kontakty</NavLink>
            <NavLink href={"#"}>Havarijni sluzba</NavLink>
        </MenuWrapper>
    );
};

export default MobileMenu;
