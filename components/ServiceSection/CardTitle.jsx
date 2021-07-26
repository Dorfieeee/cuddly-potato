import { HStack, VStack, Center, Heading, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";

const MotionCenter = motion(Center);

const ImageWrapper = ({ children, asButton }) => (
    <MotionCenter
        as={asButton ? "button" : "div"}
        w="75px"
        h="75px"
        mb={3}
        whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 },
        }}
        whileTap={{
            scale: 0.8,
        }}
    >
        {children}
    </MotionCenter>
);

const Container = ({ children, vertical, ...props }) =>
    vertical ? (
        <VStack {...props}>{children}</VStack>
    ) : (
        <HStack {...props}>{children}</HStack>
    );

const CardTitle = ({ title, href, children, vertical, ...rest }) => {
    return (
        <Container w="100%" vertical={vertical} {...rest}>
            {href ? (
                <ImageWrapper>
                    <NextLink href={href} passHref>
                        <Link>{children}</Link>
                    </NextLink>
                </ImageWrapper>
            ) : (
                <ImageWrapper asButton>{children}</ImageWrapper>
            )}

            <Heading>{title}</Heading>
        </Container>
    );
};

export default CardTitle;
