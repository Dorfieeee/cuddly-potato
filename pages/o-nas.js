import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import {
    Heading,
    VStack,
    Text,
    Center,
    Button,
    Box,
    useColorMode,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import links from "../public/content/links";
import MainHeading from "../components/headings/MainHeading";
import RightSideSvg from "../components/svg/repairman/right";
import LeftSideSvg from "../components/svg/repairman/left";
import FloorSvg from "../components/svg/repairman/floor";

const Paragraph = ({ children }) => <Text maxW="450px">{children}</Text>;

function About({ children, ...rest }) {
    const { colorMode } = useColorMode();

    return (
        <PageLayout title="O nás" {...rest}>
            <Header px={"5%"} mb={10}>
                <MainHeading>O našem podnikání</MainHeading>
                <Heading
                    as="h2"
                    fontSize="lg"
                    fontStyle="italic"
                    textAlign="center"
                    mb={3}
                    ml={14}
                >
                    - na které se můžete spolehnout
                </Heading>
            </Header>

            <Box
                as="main"
                px={"5%"}
                mb={10}
                position="relative"
                maxWidth="1920px"
                margin="0 auto"
                overflowX="clip"
            >
                    {/* Card with main content */}
                    <Box
                        textAlign="center"
                        w="100%"
                        maxW="750px"
                        m="0 auto"
                        p={"45px"}
                        boxShadow={{
                            base: colorMode === "light" ? "md" : "dark-lg",
                            md: colorMode === "light" ? "2xl" : "dark-lg",
                        }}
                        borderRadius="lg"
                        pos="relative"
                        _before={{
                            content: "''",
                            bgImage: "/img/josef-rosendorf-logo.jpg",
                            pos: "relative",
                            top: { base: "-75px", md: "-75px" },
                            left: { base: "-50px", md: "-75px" },
                            w: { base: "85px", md: "125px" },
                            h: { base: "85px", md: "125px" },
                            mb: { base: "-75px", md: "-25px" },
                            display: "block",
                            bgPos: "center",
                            bgSize: "contain",
                            bgRepeat: "no-repeat",
                            borderRadius: "50%",
                            borderColor:
                                colorMode === "light" ? "secondary" : "primary",
                            borderWidth: "3px",
                            boxShadow: "dark-lg",
                        }}
                        sx={{
                            "& > :not(:first-of-type):before": {
                                content: "''",
                                pos: "relative",
                                h: "1px",
                                my: "75px",
                                w: "66%",
                                bg:
                                    colorMode === "light"
                                        ? "secondary"
                                        : "primary",
                                display: "block",
                                mx: "auto",
                            },
                        }}
                    >
                        <VStack spacing={5}>
                            <Heading as="h3">od roku 1992...</Heading>
                            <Paragraph>
                                Naše firma působí na trhu od roku 1992 a
                                specializuje se na montáže vody, kanalizace,
                                plynu, topení, podlahového topení, montáže a
                                rekonstrukce kotelen, montáže a dodání tepelných
                                čerpadel a solárních systémů.
                            </Paragraph>
                        </VStack>

                        <VStack spacing={5}>
                            <Heading as="h3">
                                stovky uskutečněných projektů...
                            </Heading>
                            <Paragraph>
                                Nabízíme kompletní poradenské, dodavatelské,
                                projektové, revizní a montážní služby na klíč.
                                Zakládáme si na seriozním jednání, výběru
                                kvalitních materiálů a regulačních prvků s
                                ohledem na jejich pozdější bezporuchový a
                                hospodárný provoz. Naším krédem je odborná a
                                bezchybná montáž s odpovídajícím technickým
                                vybavením.
                            </Paragraph>
                        </VStack>

                        <VStack spacing={5}>
                            <Heading as="h3">
                                nespočet spokojených zákazníků...
                            </Heading>
                            <Paragraph>
                                Naše firma vám poskytne mnoholetou zkušenost a
                                profesionální přístup.
                            </Paragraph>
                        </VStack>
                        <VStack>
                            <NextLink
                                href={links.navbar.kontakty.href}
                                passHref
                            >
                                <Button
                                    as="a"
                                    variant="primary"
                                    rightIcon={<ArrowForwardIcon />}
                                    zIndex="docked"
                                    size="lg"
                                >
                                    Kontaktujte nás
                                </Button>
                            </NextLink>
                        </VStack>
                    </Box>
                    {/* SVG background composition */}
                    <Box
                        position={{ base: "relative" }}
                        w="100%"
                        h="100%"
                        mt={{ base: "-100px", md: "-150px", xl: "-300px" }}
                        mb={{ base: "75px" }}
                        filter={colorMode === "light" ? "unset" : "brightness(85%)"}
                    >
                        <Box
                            position="relative"
                            w="100%"
                            h={{ base: "325px", md: "500px", xl: "650px" }}
                            top="0"
                        >
                            <FloorSvg
                                w={{ base: "auto" }}
                                h={{ base: "60px", md: "100px", xl: "150px" }}
                                position="absolute"
                                bottom="0"
                                left="50%"
                                transform="translateX(-50%)"
                                ml={{ base: "0px", md: "-20px", xl: "-40px" }}
                            />
                            <LeftSideSvg
                                w={{ base: "264px", md: "396px", xl: "528px" }}
                                h={{ base: "300px", md: "450px", xl: "600px" }}
                                position="absolute"
                                bottom="0"
                                left="50%"
                                transform="translateX(-50%)"
                                mb={{ base: "25px", md: "35px", xl: "50px" }}
                                ml={{
                                    base: "-100px",
                                    md: "-200px",
                                    xl: "-375px",
                                }}
                            />
                            <RightSideSvg
                                w={{ base: "155px", md: "232px", xl: "310px" }}
                                h={{ base: "225px", md: "337px", xl: "450px" }}
                                position="absolute"
                                bottom="0"
                                left="50%"
                                transform="translateX(-50%)"
                                mb={{ base: "25px", md: "35px", xl: "50px" }}
                                ml={{ base: "115px", md: "225px", xl: "300px" }}
                            />
                        </Box>
                    </Box>
                </Box>
        </PageLayout>
    );
}

export default About;
