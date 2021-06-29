import { Box } from "@chakra-ui/layout";

const Layout = ({children, ...rest}) => {
    return (
        <Box {...rest}>
            {children}
        </Box>
    );
}

export default Layout;