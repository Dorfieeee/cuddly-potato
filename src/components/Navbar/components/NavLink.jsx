import { motion } from "framer-motion";
import { Link, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link"

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

const NavLink = ({ children, href, toggle, ...rest }) => {
    const {colorMode} = useColorMode();

    return (
        <NextLink href={href} passHref {...rest}>
          <MotionLink
              variants={variants}
              fontWeight={600}
              py={4}
              px={5}     
              borderBottom={"1px solid"}
              w={"100%"}
              textAlign={"left"}
              onClick={toggle}
              _hover={{ textDecoration: "none", bg: colorMode === "light" ? "gray.400" : "gray.600" }}
          >
              {children}
          </MotionLink>
        </NextLink>
    );
};

export default NavLink;
