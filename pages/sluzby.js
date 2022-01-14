import {
    Grid,
    GridItem,
    SimpleGrid,
    Text,
    Box,
    Heading,
    Button,
    Center,
    chakra,
} from "@chakra-ui/react";

import PageLayout from "../src/components/PageLayout";
import Header from "../src/components/Header";
import MainHeading from "../src/components/MainHeading";
import CardImageTitle from "../src/components/CardImageTitle";
import Card from "../src/components/Card";
import ImageCard from "../src/components/ImageCard";
import useThemeReversedColors from "../src/hooks/useThemeReversedColors";

import Water from "../src/svg/Water";
import Gas from "../src/svg/Gas";
import Heating from "../src/svg/Heating";
import Drainage from "../src/svg/Drainage";

import links from "../src/content/links";

const LineBreak = chakra("br");
const Span = chakra("span");

const StyledWord = ({ children }) => (
    <Span _before={{ content: '"•"', mr: 1 }}>{children}</Span>
);

const StyledHeading = ({ title, ...props }) => (
    <Heading as="h3" my={10} textAlign="center" p={5} {...props}>
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
    const [primaryOpposite] = useThemeReversedColors();

    return (
        <PageLayout
            title="Služby | Voda, topení, plyn a kanalizace"
            description="Výpis specializací nejvíce provaděných prací a doprovodných služeb instalatérsví - Blansko, Boskovice, Brno, Kuřim, Vyškov"
        >
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
                        <CardImageTitle title="Voda" vertical>
                            <Water circle={primaryOpposite} />
                        </CardImageTitle>
                    </Card>
                    <Card justifyContent="center" alignItems="center">
                        <CardImageTitle title="Topení" vertical>
                            <Heating
                                circle={primaryOpposite}
                                fill={primaryOpposite}
                            />
                        </CardImageTitle>
                    </Card>
                    <Card justifyContent="center" alignItems="center">
                        <CardImageTitle title="Plyn" vertical>
                            <Gas circle={primaryOpposite} />
                        </CardImageTitle>
                    </Card>
                    <Card justifyContent="center" alignItems="center">
                        <CardImageTitle title="Kanalizace" vertical>
                            <Drainage
                                circle={primaryOpposite}
                                fill={primaryOpposite}
                            />
                        </CardImageTitle>
                    </Card>
                </SimpleGrid>
                <Text
                    p={5}
                    mb={5}
                    maxW="container.sm"
                    margin="0 auto"
                    textAlign="center"
                >
                    Rozumíme, když si hned nedokážete představit, co vše se pod
                    pojmy Voda <StyledWord>Topení</StyledWord>{" "}
                    <StyledWord>Plyn</StyledWord>{" "}
                    <StyledWord>Kanalizace</StyledWord> skrývá, tudíž jsme si
                    pro vás připravili malou prezentaci námi nejčastěji
                    vykonávaných prací na okrese Blansko, v okolí Brna a Vyškova.
                    <LineBreak mb={3} />
                    Zároveň i zmiňujeme, které další práce, mimo náš obor a
                    dovednosti, pro vás dokážeme zařídit. Po tolika letech v
                    oboru známe spoustu místních řemeslníků a firem, se kterými
                    jsme v kontaktu a rádi je i doporučíme.
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
                        href={links.pages.kontakty.href}
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
