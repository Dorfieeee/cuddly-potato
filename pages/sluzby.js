import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import {
    Grid,
    Image,
    GridItem,
    SimpleGrid,
    Text,
    Box,
    useColorMode,
    Heading,
    Button,
    Center,
} from "@chakra-ui/react";
import MainHeading from "../components/headings/MainHeading";
import CardTitle from "../components/ServiceSection/CardTitle";
import Card from "../components/ServiceSection/Card";
import Water from "../public/content/homepage/sluzby/svg/Water";
import Gas from "../public/content/homepage/sluzby/svg/Gas";
import Heating from "../public/content/homepage/sluzby/svg/Heating";
import Drainage from "../public/content/homepage/sluzby/svg/Drainage";
import ImageCard from "../components/LocationSection/ImageCard";
import links from "../public/content/links";

const StyledHeading = ({ title, ...props }) => (
    <Heading
        as="h3"
        my={10}
        textAlign="center"
        p={5}
        
        {...props}
    >
        {title}
    </Heading>
);

const StyledGridItem = ({ src, alt, text, ...rest }) => (
    <GridItem h={{ base: "125px", md: "250px" }} textAlign="center" {...rest}>
        <ImageCard
            src={src}
            alt={alt}
            text={text}
            clipPath="ellipse(60% 75% at center center)"
            fontSize={{ base: "24px", md: "32px" }}
        />
    </GridItem>
);

const ImageGrid = ({ title, children }) => {
    return (
        <>
            <StyledHeading title={title} />
            <Grid
                gridTemplateColumns={{
                    base: "1fr 1fr",
                    lg: "1fr 1fr 1fr",
                }}
                gap={3}
            >
                {children}
            </Grid>
        </>
    );
};

function Sluzby() {
    const { colorMode } = useColorMode();
    const themeReversed = colorMode === "light" ? "secondary" : "primary";

    return (
        <PageLayout title="Služby">
            <Header>
                <MainHeading>Specializace</MainHeading>
            </Header>
            <Box as="main" px="5%" maxW="container.xl" m="0 auto">
                <SimpleGrid
                    columns={{ base: 2, lg: 4 }}
                    my={5}
                    py={5}
                    borderRadius="5px 75px"
        border="6px double"
                >
                    <Card justifyContent="center" alignItems="center">
                        <CardTitle title="Voda" vertical>
                            <Water circle={themeReversed} />
                        </CardTitle>
                    </Card>
                    <Card justifyContent="center" alignItems="center">
                        <CardTitle title="Topení" vertical>
                            <Heating
                                circle={themeReversed}
                                fill={themeReversed}
                            />
                        </CardTitle>
                    </Card>
                    <Card justifyContent="center" alignItems="center">
                        <CardTitle title="Plyn" vertical>
                            <Gas circle={themeReversed} />
                        </CardTitle>
                    </Card>
                    <Card justifyContent="center" alignItems="center">
                        <CardTitle title="Kanalizace" vertical>
                            <Drainage
                                circle={themeReversed}
                                fill={themeReversed}
                            />
                        </CardTitle>
                    </Card>
                </SimpleGrid>
                <Text
                    p={5}
                    mb={5}
                    maxW="container.sm"
                    margin="0 auto"
                    textAlign="center"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam lacinia nisl libero, et interdum sapien placerat ut.
                    Suspendisse cursus dolor ut velit pretium facilisis. Donec
                    ut maximus nunc. In in eros magna.
                </Text>
                <ImageGrid title="Provedeme...">
                    <StyledGridItem
                        text="Podlahové topení"
                        src="/img/services/floor-heating.jpg"
                        alt="Podlahové topení"
                    />
                    <StyledGridItem
                        text="Vany"
                        src="/img/services/bathtub.jpg"
                        alt="Vany"
                    />
                    <StyledGridItem
                        text="Bytová jádra"
                        src="/img/services/bytove-jadro.jpg"
                        alt="Bytová jádra"
                    />
                    <StyledGridItem
                        text="Plynoinstalace"
                        src="/img/services/gasmeter.jpg"
                        alt="Plynoinstalace"
                    />
                    <StyledGridItem
                        text="Radiátory"
                        src="/img/services/radiator.jpg"
                        alt="Radiátory"
                    />
                    <StyledGridItem
                        text="Sprchové kouty"
                        src="/img/services/shower.jpg"
                        alt="Sprchové kouty"
                    />
                    <StyledGridItem
                        text="Umyvadla"
                        src="/img/services/sink.jpg"
                        alt="Umyvadla"
                    />
                    <StyledGridItem
                        text="Venkovní kanalizace"
                        src="/img/services/kanal.jpg"
                        alt="Venkovní kanalizace"
                    />
                    <StyledGridItem
                        text="Kotle"
                        src="/img/services/kotel.jpg"
                        alt="Kotle"
                    />
                    <StyledGridItem
                        text="Odpady"
                        src="/img/services/odpad.jpg"
                        alt="Odpady"
                    />
                    <StyledGridItem
                        text="Oběhová čerpadla"
                        src="/img/services/obehove-cerpadlo.jpeg"
                        alt="Oběhová čerpadla"
                    />

                    <StyledGridItem
                        text="Ohřívače vody"
                        src="/img/services/ohrivac.jpg"
                        alt="Ohřívače vody"
                    />
                    <StyledGridItem
                        text="Komerční prostory"
                        src="/img/services/pisoar.jpg"
                        alt="Komerční prostory"
                    />

                    <StyledGridItem
                        text="Bojlery"
                        src="/img/services/bojler.webp"
                        alt="Bojlery"
                    />
                    <StyledGridItem
                        text="Plynové spotřebiče"
                        src="/img/services/sporak.jpg"
                        alt="Plynové spotřebiče"
                    />
                    <StyledGridItem
                        text="Záchody"
                        src="/img/services/toilet.jpg"
                        alt="Záchody"
                    />
                    <StyledGridItem
                        text="Měřící zařízení"
                        src="/img/services/watermeter.jpg"
                        alt="Měřící zařízení"
                    />
                </ImageGrid>
                <ImageGrid title="Dokážeme zařídit...">
                    <StyledGridItem
                        text="Kominické práce"
                        src="/img/services/chimney.jpg"
                        alt="Kominické práce"
                    />
                    <StyledGridItem
                        text="Zednické práce"
                        src="/img/services/zednicke-prace.jpg"
                        alt="Zednické práce"
                    />
                    <StyledGridItem
                        text="Výkopové práce"
                        src="/img/services/digger.jpg"
                        alt="Výkopové práce"
                    />
                    <StyledGridItem
                        text="Malířské práce"
                        src="/img/services/painter.jpg"
                        alt="Malířské práce"
                    />
                </ImageGrid>
                <Center w="100%" my={5} p={5} borderTop="6px double">
                    <Button
                        as="a"
                        href={links.navbar.kontakty.href}
                        fontSize="large"
                        h={["2.5rem", "3rem"]}
                        w={"12rem"}
                        variant="primary"
                        m="0 auto"
                        
                    >
                        Poptat služby
                    </Button>
                </Center>
            </Box>
        </PageLayout>
    );
}

export default Sluzby;
