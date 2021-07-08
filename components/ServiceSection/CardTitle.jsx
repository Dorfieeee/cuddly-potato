import { HStack, Center, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link"

const MotionCenter = motion(Center);


const CardTitle = ({ Image, title, href, children, ...rest }) => {
    return (
        <HStack spacing={8} w="100%" {...rest}>
            <NextLink href={href} passHref >
                <MotionCenter
                    as="a"
                    w={"75px"}
                    mb={3}
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
