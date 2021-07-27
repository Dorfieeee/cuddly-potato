import { Flex, Heading, Box, useBreakpointValue } from "@chakra-ui/react";
import ImageCard from "./ImageCard";

const locations = [
    { name: "Blansko", title: "Blanensko" },
    { name: "Boskovice", title: "Boskovicko" },
    { name: "Brno", title: "Brno" },
];
const imgLoader = (name) => `/img/locations/${name}/md.jpg`;
const addPrefix = (alt) => "Panoramatic view of " + alt;

const LocationSection = () => {
    const styles = useBreakpointValue({
        base: {
            "& > :not(:first-of-type)": {
                mt: "5",
            },
        },
        xl: {
            "& > :not(:first-of-type)": {
                ml: "5",
            },
        },
    });

    return (
        <Box as="section" id="lokality" minH="45vh" px="5%" mb={5}>
            <Heading textAlign="center" py="5">
                Zejména působíme v místech jako
            </Heading>
            <Flex
                flexDirection={{ base: "column", xl: "row" }}
                justifyContent="center"
                alignItems="center"
                mt={{ base: "2rem", xl: "3rem" }}
                sx={styles}
            >
                {locations.map(({ title, name }) => {
                    const alt = addPrefix(name),
                        src = imgLoader(name);
                    return (
                        <ImageCard
                            key={name}
                            text={title}
                            src={src}
                            alt={alt}
                            clipPath="circle(65% at center center)"
                            minW={{ base: "250px" }}
                            minH={{ base: "100px", md: "150px" }}
                            maxW={{
                                base: "100%",
                                md: "75%",
                                lg: "66%",
                                xl: "33%",
                            }}
                            flexGrow="1"
                        />
                    );
                })}
            </Flex>
        </Box>
    );
};

export default LocationSection;
