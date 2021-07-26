import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import { Box, Heading } from "@chakra-ui/react";
import MainHeading from "../components/headings/MainHeading";
import GoogleMap from "../components/GoogleMap";
import { Marker, Circle } from "@react-google-maps/api";
import kontakty from "../public/content/kontakty";
import brandLogo from "../components/svg/instalater-logo-house-path";
import AutoComplete from "../components/AutoComplete";

function KdePusobime({ locations, mapsApiKey }) {
    const options = locations.map(loc => loc.name);

    return (
        <PageLayout
            title="Kde působíme | Vodoinstalace, topení a plyn Blansko"
            description="Zajištujeme vodoinstalaci, topenářské a plynářské práce v Blansko, Boskovice, Brno, Kuřim, Adamov, Rájec-Jestřebí, Letovice, Tišnov a v jejich okolí."
        >
            <Header>
                <MainHeading>Kde působíme</MainHeading>
            </Header>
            {/* AutoComplete Search */}
            <Box px="5%" my={5} mx={"auto"} maxW="container.sm">
                <Heading as="h2" size="md" textAlign="center">Jste na seznamu?</Heading>
                <AutoComplete options={options}/>
            </Box>
            {/* Google Map */}
            <Box w="100%" h={{ base: "500px", lg: "600px" }}>
                <GoogleMap
                    center={kontakty.address.geo}
                    styles={{ width: "100%", height: "100%" }}
                    zoom={10}
                    options={{ disableDefaultUI: true }}
                    apiKey={mapsApiKey}
                >
                    <Marker
                        icon={{
                            path: brandLogo,
                            fillColor: "#fff",
                            fillOpacity: 0.9,
                            scale: 0.3,
                            strokeColor: "#1A182B",
                            strokeWeight: 2,
                        }}
                        position={kontakty.address.geo}
                    />
                    <Circle
                        center={kontakty.address.geo}
                        radius={30 * 1000}
                        options={{
                            strokeColor: "#1A182B",
                            strokeOpacity: 0.8,
                            strokeWeight: 2,
                            fillColor: "#1A182B",
                            fillOpacity: 0.35,
                            clickable: false,
                            draggable: false,
                            editable: false,
                            visible: true,
                            radius: 30 * 1000,
                            zIndex: 1,
                        }}
                    />
                </GoogleMap>
            </Box>

        </PageLayout>
    );
}

export async function getStaticProps(ctx) {
    let response = null,
        data = null;

    response = await fetch(process.env.HOST + "/api/locations");
    data = await response.json();

    return {
        props: {
            locations: data.locations,
            mapsApiKey: process.env.GOOGLE_API_KEY,
        },
    };
}

export default KdePusobime;
