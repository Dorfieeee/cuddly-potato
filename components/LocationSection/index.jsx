import { Flex, Heading, Box, useBreakpointValue } from "@chakra-ui/react";
import LocationCard from "./LocationCard";

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
                Kde všude působím
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
                        <LocationCard key={name} src={src} alt={alt}>
                            {title}
                        </LocationCard>
                    );
                })}
            </Flex>
        </Box>
    );
};

export default LocationSection;
