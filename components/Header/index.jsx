import {
    Box,
    Button,
    Heading,
    Text,
    VStack,
    Flex,
} from "@chakra-ui/react";
import Navbar from "../Navbar";
import content from "../../public/content/homepage/header"


const headerImgLoader = (size) => `url("/img/header-bg/${size}.jpg")`;

const Header = ({ isOpen, toggleMobileMenu, colorMode, toggleColorMode }) => {
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
        <Box
            as={"header"}
            id="header"
            w={"100%"}
            position="relative"
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
            <Navbar
                isOpen={isOpen}
                toggleMobileMenu={toggleMobileMenu}
                colorMode={colorMode}
                toggleColorMode={toggleColorMode}
                {...themeColors}
            />
            {/* Description starts here */}
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
                        {content.text.map((text, i) => <Text key={i}>{text}</Text>)}
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
                            onClick={(e) => scrollSmoothlyTo(e, "#sluzby")}
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
        </Box>
    );
};

export default Header;
