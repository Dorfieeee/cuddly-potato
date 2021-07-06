import { Grid as ChakraGrid } from "@chakra-ui/react";

const Grid = ({ children, props }) => {
    return (
        <ChakraGrid
            templateColumns={{
                base: "auto minmax(200px, 75ch) auto",
                md: "1fr minmax(200px, 100ch) minmax(1rem, 0.5fr) minmax(200px, 100ch) 1fr",
            }}
            templateRows={{ base: "auto", md: "repeat(2, auto)" }}
            minH="75vh"
            alignItems="start"
            justifyItems="start"
            {...props}
        >
            {children}
        </ChakraGrid>
    );
};

export default Grid;
