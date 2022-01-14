import { Flex, Box } from "@chakra-ui/react";

import PageLayout from "../src/components/PageLayout";
import Header from "../src/components/Header";
import MainHeading from "../src/components/MainHeading";
import ContactCard from "../src/components/ContactCard";
import ContactForm from "../src/components/ContactForm";
import Map from "../src/components/MapBox/Map";
import Marker from "../src/components/MapBox/Marker";

import kontakty from "../src/content/kontakty";
import content from "../src/content/homepage/kontakty";

function Kontakty({ MAPS_API_KEY }) {
    const homeLngLat = [kontakty.address.geo.lng, kontakty.address.geo.lat]

    return (
        <PageLayout
            title="Kontakty | Vodoinstalace, topení a plyn Blansko"
            description="Hledáte kontakt na spolehlivé instalatérství v Blansku či okolí? Přesně to najdete na této stránce."
        >
            <Header>
                <MainHeading>Kontakty</MainHeading>
            </Header>
            <Flex
                justify="center"
                alignItems={{ base: "center", xl: "start" }}
                flexDirection={{ base: "column", xl: "row" }}
                px="5%"
            >
                <ContactCard
                    shadow="xl"
                    borderColor="gray.200"
                    borderWidth="1px"
                    bgGradient="linear(to-r, primary 0%, gray.100 100%)"
                    rounded="md"
                    p={10}
                    w={{ base: "100%", md: "75%", xl: "45%" }}
                    mt={{ base: "0", xl: "10" }}
                    color="secondary"
                    content={content.kontakty}
                />
                <ContactForm
                    w={{ base: "100%", md: "75%", xl: "45%" }}
                    p={10}
                />
            </Flex>
            <Box
                w="100%"
                h={{ base: "300px", lg: "400px" }}
                mb={{ base: "-2rem", lg: "-4rem" }}
            >
                <Map
                    API_KEY={MAPS_API_KEY}
                    id="MapBox_Kontakty"
                    styles={{
                        width: '100%',
                        height: '100%'
                    }}
                    center={homeLngLat}
                    zoom={10}
                >
                    {/* Home marker */}
                    <Marker
                        coordinates={homeLngLat}
                        style={{
                            backgroundImage: "url(/img/logo.svg)",
                            width: "48px",
                            height: "48px",
                        }}
                    />
                </Map>
            </Box>
        </PageLayout>
    );
}

export async function getStaticProps() {
    return {
        props: {
            MAPS_API_KEY: process.env.MAPBOX_API_KEY,
        },
    };
}

export default Kontakty;
