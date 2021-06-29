import Image from "next/image";
import { Box, Center } from "@chakra-ui/react";

const LocationCard = ({ children, src, alt, ...props }) => {
    return (
        <Box
            className="locationCard"
            position="relative"
            w="100%"
            minW={{ base: "250px" }}
            minH={{ base: "100px", xl: "150px" }}
            flexGrow="1"
            clipPath="circle(65% at center center)"
            maxW={{ base: "100%", md: "75%", lg: "66%", xl: "33%" }}
            {...props}
        >
            <Image
                src={src}
                layout="fill"
                alt={alt}
                objectFit="cover"
                objectPosition="center"
            />
            <Center
                className="content"
                position="absolute"
                w="100%"
                h="100%"
                fontSize="2rem"
                fontWeight="bold"
            >
                {children}
            </Center>
        </Box>
    );
};

export default LocationCard;
