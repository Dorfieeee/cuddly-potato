import { HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import links from "../../../content/links";

const StyledLink = ({ children, href, ...props }) => (
    <NextLink href={href} passHref {...props}>
        <Link
            fontSize="large"
            fontWeight={"bold"}
            _hover={{ textDecoration: "overline 2px" }}
        >
            {children}
        </Link>
    </NextLink>
);

const DesktopMenu = (props) => {
    return (
        <HStack
            display={{ base: "none", lg: "flex" }}
            justifyContent="center"
            spacing={{ base: 3, xl: 6 }}
            flexShrink={0}
            {...props}
        >
            {Array.from(Object.entries(links.pages)).map((link, i) => {
                const { name, href } = link[1];
                return (
                    <StyledLink key={i} href={href}>
                        {name}
                    </StyledLink>
                );
            })}
        </HStack>
    );
};

export default DesktopMenu;
