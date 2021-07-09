import { Link, useBreakpointValue, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import SmallLogo from "../../svg/insatalter-logo-only";
import LargeLogo from "../../svg/insatalter-logo-horizontal";

const NavLogo = ({ fill, ...rest }) => {
    const isSmallLogo = useBreakpointValue({
        base: true,
        sm: false,
        lg: true,
        xl: false,
    });

    return (
        <NextLink href="/">
                <Link href="/" aria-label="Domu" display="block" {...rest}>
                    {isSmallLogo ? (
                        <SmallLogo
                            fill={fill}
                            maxW="100%"
                            maxH="100%"
                            w="2em"
                            h="2em"
                            aria-label="Logo - Rosendorf"
                        />
                    ) : (
                        <LargeLogo
                            fill={fill}
                            maxW="100%"
                            maxH="100%"
                            h="2em"
                            aria-label="Logo - Rosendorf"
                        />
                    )}
                </Link>
        </NextLink>
    );
};

export default NavLogo;
