import { HStack, VStack, Center, Heading, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";

const MotionCenter = motion(Center);

const ImageWrapper = ({ children, ...props }) => (
    <MotionCenter
        as="a"
        w="75px"
        h="75px"
        mb={3}
        animate={{}}
        whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 },
        }}
        whileTap={{
            scale: 0.8,
        }}
        {...props}
    >
        {children}
    </MotionCenter>
);

const pulse = {
    scale: [1, 1.1, 1.03, 1.12, 1, 1],
    transition: {
        duration: 5,
        ease: "easeInOut",
        times: [0.35, 0.45, 0.5, 0.55, 0.65, 1],
        repeat: Infinity,
        repeatDelay: 10,
    },
};

const CardTitle = ({ title, href, children, vertical, ...rest }) => {
    const Container = ({ children, ...props }) =>
        vertical ? (
            <VStack {...props}>{children}</VStack>
        ) : (
            <HStack {...props}>{children}</HStack>
        );

    return (
        <Container w="100%" {...rest}>
            {href ? (
                <NextLink href={href} passHref>
                    <ImageWrapper >{children}</ImageWrapper>
                </NextLink>
            ) : (
                <ImageWrapper as="button">{children}</ImageWrapper>
            )}

            <Heading>{title}</Heading>
        </Container>
    );
};

export default CardTitle;
