import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../components/Header"
import ServiceSection from "../components/ServiceSection";
import PageDivider from "../components/dividers/PageDivider";
import {
    Button,
    Heading,
    Text,
    VStack,
    Flex,
    useColorMode,
    Box
} from "@chakra-ui/react";
import LocationSection from "../components/LocationSection";
import ContactSection from "../components/ContactSection";

const headerImgLoader = (size) => `url("/img/header-bg/${size}.jpg")`;
import content from "../public/content/homepage/header";

export default function Home() {
    const {colorMode} = useColorMode();

    const themeColors = {
        bg: colorMode === "light" ? "primary" : "secondary",
        color: colorMode === "light" ? "secondary" : "primary",
        borderColor: colorMode === "light" ? "secondary" : "primary",
    };

    const scrollSmoothlyTo = (e, selector) => {
        e.preventDefault();
        window.scrollTo({
            left: 0,
            top: document.querySelector(selector).getBoundingClientRect().top,
            behavior: "smooth",
        });
    };

    return (
        <>
            <Head>
                <title>Voda•Topeni•Plyn | Instalater</title>
            </Head>
            <Layout>
                <Header
                    _before={{
                        base: {
                            content: "''",
                            zIndex: "-1",
                            pos: "absolute",
                            w: "100%",
                            h: {
                                base: "50%",
                                md: "50%",
                                lg: "100%",
                            },
                            bgImg: {
                                base: () => headerImgLoader("base"),
                                md: () => headerImgLoader("base"),
                                lg: () => headerImgLoader("lg"),
                            },
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPositionX: "center",
                            backgroundPositionY: "top",
                        },
                    }}
                >
                    <Flex
                        mt={{ lg: "-1rem" }}
                        py={{ base: "5rem", md: "7rem" }}
                        ml={{ lg: "5%" }}
                        flexDirection="column"
                        minW={{ lg: "40rem" }}
                        minH={{ lg: "calc(100vh - 4rem)" }}
                        w={{ lg: "40%" }}
                        bg={{
                            lg:
                                colorMode === "light"
                                    ? "primaryAlpha.9"
                                    : "secondaryAlpha.9",
                        }}
                        boxShadow={{ lg: "0 8px 32px 0 rgb(0, 0, 0)" }}
                        backdropFilter="blur(4px)"
                        borderColor={themeColors.borderColor}
                        color={themeColors.color}
                    >
                        <Heading
                            as={"h1"}
                            textAlign="center"
                            py="3rem"
                            pos="relative"
                            fontSize={["4xl", "5xl"]}
                            _before={{
                                base: {
                                    content: "''",
                                    pos: "absolute",
                                    w: "100%",
                                    h: "100%",
                                    zIndex: -1,
                                    left: 0,
                                    top: 0,
                                    bg:
                                        colorMode === "light"
                                            ? "linear-gradient(180deg, rgba(235, 248, 255, 0.6) 0%, rgb(235, 248, 255) 100%)"
                                            : "linear-gradient(180deg, rgba(26, 24, 43, 0.6) 0%, rgb(26, 24, 43) 100%)",
                                    clipPath: "ellipse(100% 95% at 25% 100%)",
                                },
                                lg: {
                                    content: "''",
                                    display: "none",
                                },
                            }}
                        >
                            {content.title}
                        </Heading>

                        <Box
                            bg={{ base: themeColors.bg, lg: "none" }}
                            fontWeight="600"
                            textAlign="center"
                            paddingX="15%"
                            flexGrow={1}
                            fontSize={["md", "lg", "xl"]}
                        >
                            <VStack mb="3rem" spacing={3}>
                                {content.text.map((text, i) => (
                                    <Text key={i}>{text}</Text>
                                ))}
                            </VStack>
                            <Flex
                                justify="space-evenly"
                                alignItems="center"
                                flexDir={{ base: "column", md: "row" }}
                            >
                                <Button
                                    as="a"
                                    href="#"
                                    fontSize="large"
                                    h={["2.5rem", "3rem"]}
                                    w={"12rem"}
                                    variant="primary"
                                    mb={{ base: "3", md: "0" }}
                                >
                                    Poptat sluzby nyni
                                </Button>
                                <Button
                                    as="a"
                                    href="#sluzby"
                                    onClick={(e) =>
                                        scrollSmoothlyTo(e, "#sluzby")
                                    }
                                    fontSize="large"
                                    h={["2.5rem", "3rem"]}
                                    w={"12rem"}
                                    variant="primary"
                                >
                                    Dozvedet se vice
                                </Button>
                            </Flex>
                        </Box>
                    </Flex>
                </Header>
                <PageDivider
                    bg="secondary"
                    clipPath="ellipse(100% 80% at 10% 80%)"
                    mt={{ base: 0, lg: "-5rem" }}
                />
                <ServiceSection bg="secondary" color="primary" />
                <PageDivider
                    bg="secondary"
                    clipPath="ellipse(60% 85% at 45% 10%)"
                />
                <LocationSection />
                <ContactSection />
            </Layout>
        </>
    );
}