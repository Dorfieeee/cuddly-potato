import { Flex, VStack } from "@chakra-ui/react";

const Card = ({ children, ...props }) => {
    return (
        <Flex
            p={3}
            maxW="90ch"
            direction={{ base: "column", lg: "row" }}
            {...props}
        >
            <VStack px={5}>
                {children}
            </VStack>
        </Flex>
    );
};

export default Card;
