import { HStack, Center, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionCenter = motion(Center);

const CardTitle = ({ Image, title, children, ...rest }) => {
    return (
        <HStack spacing={8} w="100%" {...rest}>
            <MotionCenter
                as="a"
                href={title.toLowerCase()}
                w={"75px"}
                mb={3}
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                }}
                whileTap={{
                    scale: 0.8,
                }}
                onClick={(e) => {
                    e.preventDefault();
                }}
            >
                <Image />
            </MotionCenter>
            <Heading>{title}</Heading>
        </HStack>
    );
};

export default CardTitle;
