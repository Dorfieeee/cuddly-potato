import { HStack, Link } from "@chakra-ui/react";

const StyledLink = ({ children, ...props }) => (
    <Link fontSize="large" fontWeight={"bold"}  _hover={{ textDecoration: "overline 2px" }} {...props}>
        {children}
    </Link>
);

const DesktopMenu = (props) => {
    return (
        <HStack display={{ base: "none", lg: "flex" }} spacing={6} flexShrink={0} {...props}>
            <StyledLink href={"#"}>Služby</StyledLink>
            <StyledLink href={"#"}>O mně</StyledLink>
            <StyledLink href={"#"}>Kde působím</StyledLink>
            <StyledLink href={"#"}>Kontakty</StyledLink>
            <StyledLink href={"#"}>Havarijní servis</StyledLink>
        </HStack>
    );
};

export default DesktopMenu;
