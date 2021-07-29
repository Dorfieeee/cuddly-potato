import { Box } from "@chakra-ui/react";

const PageDivider = ({ children, clipPath, ...props }) => {
    return (
        <Box
            pt={{ base: "2rem", lg: "5rem" }}
            pb={{ base: "2rem", lg: "3rem" }}
            w="100%"
            display="block"
            position="relative"
            clipPath={clipPath}
            {...props}
        />
    );
};

export default PageDivider;
