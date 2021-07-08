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
        <NextLink passHref href="/">
            <Box {...rest}>
                <Link>
                        {isSmallLogo ? (
                            <SmallLogo
                                fill={fill}
                                maxW="100%"
                                maxH="100%"
                                w="2em"
                                h="2em"
                            />
                        ) : (
                            <LargeLogo
                                fill={fill}
                                maxW="100%"
                                maxH="100%"
                                h="2em"
                            />
                        )}
                </Link>
            </Box>
        </NextLink>
    );
};

export default NavLogo;
