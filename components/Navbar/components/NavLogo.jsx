import { Center, Link } from "@chakra-ui/react";
import NextLink from "next/link"
import Logo from "../../svg/insatalter-logo-horizontal";

const NavLogo = ({ fill, ...rest }) => {
    return (
        <NextLink passHref href="/">
            <Link>
                <Center h="2.5rem" w="200px" {...rest}>
                    <Logo fill={fill} maxW="100%" maxH="100%" />
                </Center>
            </Link>
        </NextLink>
    );
};

export default NavLogo;