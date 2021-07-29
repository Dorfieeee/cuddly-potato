import { Box, Center, useTheme, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import PropTypes from "prop-types";

import { hexToRGBA } from "../../theme/utils";

const ImageCard = ({ text, src, alt, ...props }) => {
    const theme = useTheme();
    const { colorMode } = useColorMode();

    return (
        <Box
            position="relative"
            w="100%"
            h="100%"
            fontSize="2rem"
            tabIndex={0}
            _focus={{
                outline: "5px groove",
            }}
            sx={{
                "& img": {
                    transition: "transform 3s ease",
                },
                "&:hover img, &:focus img": {
                    transform: "scale(1.2)",
                },
                "& .content": {
                    transition:
                        "background 1.5s ease, color .75s ease, text-shadow .75s ease",
                    bg: hexToRGBA(
                        colorMode === "light"
                            ? theme.colors.primary
                            : theme.colors.secondary,
                        0.7
                    ),
                    textShadow: "5px 0px 25px" + "primary",
                },
                "&:hover .content, &:focus .content": {
                    bg: "transparent",
                    color: "primary",
                    textShadow: "5px 0px 5px" + theme.colors.secondary,
                },
            }}
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
                fontWeight="bold"
            >
                {text}
            </Center>
        </Box>
    );
};

ImageCard.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default ImageCard;
