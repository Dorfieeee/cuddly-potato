import { Flex, Heading, Box, useBreakpointValue, VisuallyHidden, List, ListItem, Text } from "@chakra-ui/react";
import ImageCard from "../../components/ImageCard";
import content from "../../content/homepage/locations"

const imgLoader = (name) => `/img/locations/${name}/md.jpg`;
const addPrefix = (alt) => "Instalatérství, topenářství a plynařství" + alt;

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
        <Box as="section" id={content.id} minH="45vh" px="5%" mb={5}>
            <Heading textAlign="center" py="5">
                {content.title}
            </Heading>
            <VisuallyHidden as={"p"}>
                <List>
                {content.locations.map(({ name }) => {
                    return (
                        <ListItem key={name+"ListItem"}>
                            <Text>{"Instalatér, Vodař, Topenář, Plynař " + name}</Text>
                            <Text>{"Voda, Topení, Plyn " + name}</Text>
                            <Text>{"Instalatérství, Topenářství, Plynařství " + name}</Text>
                        </ListItem>
                    )
                })}
                </List>
            </VisuallyHidden>
            <Flex
                flexDirection={{ base: "column", xl: "row" }}
                justifyContent="center"
                alignItems="center"
                mt={{ base: "2rem", xl: "3rem" }}
                sx={styles}
            >
                {content.locations.map(({ title, name }) => {
                    const alt = addPrefix(name),
                        src = imgLoader(name);
                    return (
                        <ImageCard
                            key={name + "Card"}
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
