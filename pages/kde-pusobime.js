import { useState } from "react";
import {
    Box,
    Heading,
    List,
    ListItem,
    Text,
    VisuallyHidden,
} from "@chakra-ui/react";

import PageLayout from "../src/components/PageLayout";
import Header from "../src/components/Header";
import MainHeading from "../src/components/MainHeading";
import AutoComplete from "../src/components/AutoComplete";
import Map from "../src/components/MapBox/Map";
import Marker from "../src/components/MapBox/Marker";
import Circle from "../src/components/MapBox/Circle";
import kontakty from "../src/content/kontakty";


function KdePusobime({ locations, MAPS_API_KEY }) {
    const [cities, setCities] = useState([]);
    const options = locations.map((loc) => loc.name);
    const homeLngLat = [kontakty.address.geo.lng, kontakty.address.geo.lat]


    const addMarker = (cityName) => {
        // this function adds another marker
        // it returns if duplicate was found
        let filtered = locations.filter((loc) => loc.name === cityName);
        if (!filtered.length) return;
        const { geonameId: id, name, lat, lng } = filtered[0];
        if (cities.find((city) => city.id === id)) return;
        const city = {
            id: id,
            name: name,
            coordinates: [Number(lng), Number(lat)],
        };
        setCities((curr) => curr.concat(city));
    };

    const showUserMarkers = () => {
        if (!cities.length) return <></>;
        
        return cities.map((city) => (
            <Marker
                key={city.id}
                coordinates={city.coordinates}
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
                <Heading as="h2" my={1} size="md" textAlign="center">
                    Zjistěte, zda-li jsme Vám dostupní
                </Heading>
                <AutoComplete options={options} placeholder="Název obce" addMarker={addMarker} />
            </Box>
            {/* Map */}
            <Box w="100%" h={{ base: "500px", lg: "600px" }} >
                <Map
                    API_KEY={MAPS_API_KEY}
                    id="MapBox_Kde_pusobime"
                    styles={{
                        width: '100%',
                        height: '100%'
                    }}
                    center={homeLngLat}
                    zoom={9}
                >
                    <Circle />
                    {/* Home marker */}
                    <Marker
                        coordinates={homeLngLat}
                        style={{
                            backgroundImage: "url(/img/logo.svg)",
                            width: "48px",
                            height: "48px",
                        }}
                    />
                    {showUserMarkers()}
                </Map>
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
                Tahle mapa slouží pouze jako vizuální vzdálenost od 
                centra našeho podnikání.
                <br />
                Je založena na rozumné vzdálenosti, která dbá na 
                časové i finanční dostupnosti jak pro klienta, tak i pro nás.
            </Text>
            <Text
                maxW="container.sm"
                my={5}
                mx="auto"
                px="5%"
                textAlign="center"
            >
                Pokud-li si ovšem myslíte, že náklady na cestu za Vaším 
                projektem nehrají zásádní roli v rozpočtu,
                tak se ozvěte a určitě se domluvíme.
                <br />
                &#128522;
            </Text>
        </PageLayout>
    );
}

export async function getStaticProps(ctx) {
    let data = null;
    let response = null;
    response = await fetch(process.env.HOST + "/api/locations");
    data = await response.json();

    return {
        props: {
            locations: data.locations,
            MAPS_API_KEY: process.env.MAPBOX_API_KEY,
        },
    };
}

export default KdePusobime;

// Locations data obtained from http://www.geonames.org/