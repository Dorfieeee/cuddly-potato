import { VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

import NavLink from "./NavLink";

import links from "../../../content/links";

const MenuWrapper = motion(VStack);


const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const MobileMenu = ({toggle, ...rest}) => {
    return (
        <MenuWrapper
            overflowY={"auto"}
            spacing={0}
            variants={variants}
            {...rest}
        >
            {Array.from(Object.entries(links.pages)).map((link, i) => {
                const { name, href } = link[1];
                return (
                    <NavLink key={i} href={href} toggle={toggle}>
                        {name}
                    </NavLink>
                );
            })}
        </MenuWrapper>
    );
};

export default MobileMenu;
