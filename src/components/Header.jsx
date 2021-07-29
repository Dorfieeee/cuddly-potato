import { Box } from "@chakra-ui/react";

const Header = ({ children, ...rest }) => {
    return (
        <Box as={"header"} id="header" w={"100%"} position="relative" {...rest}>
            {children}
        </Box>
    );
};

export default Header;
