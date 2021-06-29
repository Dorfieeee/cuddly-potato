import { motion } from "framer-motion";
import { Link, useColorMode } from "@chakra-ui/react";

const MotionLink = motion(Link);

const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

const NavLink = ({ children, ...rest }) => {
    const {colorMode} = useColorMode();

    return (
        <MotionLink
            variants={variants}
            fontWeight={600}
            py={4}
            px={5}     
            borderBottom={"1px solid"}
            w={"100%"}
            textAlign={"left"}
            _hover={{ textDecoration: "none", bg: colorMode === "light" ? "gray.400" : "gray.600" }}
            {...rest}
        >
            {children}
        </MotionLink>
    );
};

export default NavLink;
