import { HStack, Link } from "@chakra-ui/react";
import links from "../../../public/content/links";
import NextLink from "next/link";

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
            spacing={6}
            flexShrink={0}
            {...props}
        >
            {Array.from(Object.entries(links.navbar)).map((link, i) => {
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
