import { HStack, Center, Heading } from "@chakra-ui/react";
import { motion, useCycle } from "framer-motion";
import NextLink from "next/link";

const MotionCenter = motion(Center);

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

const CardTitle = ({ Image, title, href, children, ...rest }) => {
    return (
        <HStack spacing={8} w="100%" {...rest}>
            <NextLink href={href} passHref>
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
                >
                    <Image />
                </MotionCenter>
            </NextLink>
            <Heading>{title}</Heading>
        </HStack>
    );
};

export default CardTitle;
