import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import { Heading, List, ListItem } from "@chakra-ui/react";

function KdePusobime({ locations }) {
    return (
        <PageLayout
            title="Kde působíme | Vodoinstalace, topení a plyn Blansko"
            description="Zajištujeme vodoinstalaci, topenářské a plynářské práce v Blansko, Boskovice, Brno, Kuřim, Adamov, Rájec-Jestřebí, Letovice, Tišnov a jejich okolí."
        >
            <Header>
                <Heading as="h1">Kde působíme</Heading>
            </Header>
            <List>
                {locations ? (
                    locations.map((loc, i) => (
                        <ListItem key={i}>{loc.name}</ListItem>
                    ))
                ) : (
                    <ListItem>Nothing</ListItem>
                )}
            </List>
        </PageLayout>
    );
}

// export async function getStaticProps(ctx) {
//     const Geonames = (await import("geonames.js")).default;

//     const geonames = Geonames({
//         username: "Dorfieeee",
//         lan: "cz",
//         encoding: "JSON",
//     });

//     const spesovGCS = {
//         lat: 49.397133173294606,
//         lng: 16.615978039220384,
//     };

//     const response = await geonames.findNearby({
//         ...spesovGCS,
//         radius: 25,
//         featureClass: "P",
//         maxRows: 10,
//     });

//     return {
//         props: {
//             locations: response.geonames,
//         },
//     };
// }

export default KdePusobime;
