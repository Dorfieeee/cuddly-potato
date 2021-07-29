import PageLayout from "../src/components/PageLayout";
import Header from "../src/components/Header";
import PageDivider from "../src/components/PageDivider";
import {
    Button,
    Heading,
    Text,
    VStack,
    Flex,
    useColorMode,
    Box,
} from "@chakra-ui/react";
import LocationSection from "../src/pages/index/LocationSection";
import ContactSection from "../src/pages/index/ContactSection";
import ServiceSection from "../src/pages/index/ServiceSection";

import content from "../src/content/homepage/header";

const headerImgLoader = (size, color) =>
    `linear-gradient(to right, ${
        color || "#fff0"
    } 45%, #fff0), url("/img/header-bg/plumber-${size}.jpg")`;

const scrollSmoothlyTo = (e, selector) => {
    e.preventDefault();
    window.scrollTo({
        left: 0,
        top: document.querySelector(selector).getBoundingClientRect().top,
        behavior: "smooth",
    });
};

export default function Home() {
    const { colorMode } = useColorMode();

    const themeColors = {
        bg: colorMode === "light" ? "primary" : "secondary",
        color: colorMode === "light" ? "secondary" : "primary",
        borderColor: colorMode === "light" ? "secondary" : "primary",
    };

    return (
        <>
            <PageLayout
                title="Instalatér v okolí Blanska | Voda•Topení•Plyn"
                description={`Hledáte spolehlivého instalatéra v okolí Blanska? Naše firma provádí kompletní práce v oboru instalatérství a topenářství. 30+ let zkušeností a 1000+ provedených projektů.`}
            >
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
                                md: () => headerImgLoader("md"),
                                lg: () =>
                                    headerImgLoader(
                                        "lg",
                                        `var(--chakra-colors-${themeColors.bg})`
                                    ),
                            },
                            bgColor: themeColors.bg,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPositionX: {
                                base: "right",
                                lg: "center",
                            },
                            backgroundPositionY: "top",
                        },
                    }}
                >
                    <Flex
                        mt={{ lg: "-1rem" }}
                        py={{ base: "5rem", md: "7rem" }}
                        ml={{ lg: "10%" }}
                        flexDirection="column"
                        minW={{ lg: "40rem" }}
                        minH={{ lg: "calc(100vh - 4rem)" }}
                        w={{ lg: "40%" }}
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
                                    href="#kontakty"
                                    onClick={(e) =>
                                        scrollSmoothlyTo(e, "#kontakty")
                                    }
                                    fontSize="large"
                                    h={["2.5rem", "3rem"]}
                                    w={"12rem"}
                                    variant="primary"
                                    mb={{ base: "3", md: "0" }}
                                >
                                    Poptat služby nyní
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
                                    Dozvědět se více
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
            </PageLayout>
        </>
    );
}
