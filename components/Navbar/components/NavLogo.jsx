import { Center, Link, useBreakpointValue } from "@chakra-ui/react";
import NextLink from "next/link";
import MiniLogo from "../../svg/insatalter-logo-only";
import LargeLogo from "../../svg/insatalter-logo-horizontal";

const NavLogo = ({ fill, ...rest }) => {
    const isSmallerThanXLarge = useBreakpointValue({ base: true, xl: false });

    return (
        <NextLink passHref href="/">
            <Link {...rest}>
                <Center h="2.5rem" w="100%">
                    {isSmallerThanXLarge ? (
                        <MiniLogo fill={fill} maxW="100%" maxH="100%" />
                    ) : (
                        <LargeLogo fill={fill} maxW="100%" maxH="100%" />
                    )}
                </Center>
            </Link>
        </NextLink>
    );
};

export default NavLogo;
