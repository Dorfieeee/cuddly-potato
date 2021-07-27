import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import {
    Box,
    Heading,
    List,
    ListItem,
    Text,
    VisuallyHidden,
} from "@chakra-ui/react";
import MainHeading from "../components/headings/MainHeading";
import GoogleMap from "../components/GoogleMap";
import { Marker, Circle } from "@react-google-maps/api";
import kontakty from "../public/content/kontakty";
import brandLogo from "../components/svg/instalater-logo-house-path";
import AutoComplete from "../components/AutoComplete";
import { useState } from "react";

function KdePusobime({ locations, mapsApiKey }) {
    const [cities, setCities] = useState([]);
    const options = locations.map((loc) => loc.name);

    const addMarker = (cityName) => {
        let filtered = locations.filter((loc) => loc.name === cityName);
        if (!filtered.length) return;
        const { geonameId: id, name, lat, lng } = filtered[0];
        if (cities.find((city) => city.id === id)) return;
        const city = {
            id: id,
            name: name,
            lat: Number(lat),
            lng: Number(lng),
        };
        setCities((curr) => curr.concat(city));
    };

    const showUserMarkers = () => {
        if (!cities.length) return <></>;
        console.log(cities);

        return cities.map((m) => (
            <Marker
                key={m.lat + m.lng}
                position={{
                    lat: m.lat,
                    lng: m.lng,
                }}
            />
        ));
    };

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
                <Heading as="h2" size="md" textAlign="center">
                    Jste na seznamu?
                </Heading>
                <AutoComplete options={options} addMarker={addMarker} />
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
                        radius={25 * 1000}
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
                            radius: 25 * 1000,
                            zIndex: 1,
                        }}
                    />
                    {showUserMarkers()}
                </GoogleMap>
            </Box>
            <VisuallyHidden>
                <Heading as="h3" size="md">
                    Podrobný výpis
                </Heading>
                <List>
                    {options &&
                        options.map((v, i) => <ListItem key={i}>{v}</ListItem>)}
                </List>
            </VisuallyHidden>
            <Text
                maxW="container.sm"
                my={5}
                mx="auto"
                px="5%"
                textAlign="center"
            >
                Pokud nejste na seznamu naší dostupnosti, tak nám i přesto o
                sobě dejte vědět. Tento seznam je pouze orientační a zvolili
                jsme jej na základě vzdálenosti od našeho centra podnikání.
                Pokud-li najdeme vaši poptávku zajímavou, za kterou má cenu
                vycestovat do vzdálenějších míst, určitě se domluvíme.
                <br />
                &#128522;
            </Text>
        </PageLayout>
    );
}

export async function getStaticProps(ctx) {
    let data = null;

    if (process.env.NODE_ENV === "development") {
        let response = null;
        response = await fetch(process.env.HOST + "/api/locations");
        data = await response.json();

        return {
            props: {
                locations: data.locations,
                mapsApiKey: process.env.GOOGLE_API_KEY,
            },
        };
    }
    const Geonames = (await import("geonames.js")).default;

    const geonames = Geonames({
        username: "Dorfieeee",
        lan: "cz",
        encoding: "JSON",
    });

    const spesovGCS = {
        lat: 49.397133173294606,
        lng: 16.615978039220384,
    };

    data = await geonames.findNearby({
        ...spesovGCS,
        radius: 25,
        featureClass: "P",
        maxRows: 999,
    });

    console.log(data);

    return {
        props: {
            locations: data.geonames,
            mapsApiKey: process.env.GOOGLE_API_KEY,
        },
    };
}

export default KdePusobime;
