import { Flex, Box } from "@chakra-ui/react";
import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import MainHeading from "../components/headings/MainHeading";
import ContactCard from "../components/ContactSection/contactCard";
import ContactForm from "../components/ContactSection/contactForm";
import content from "../public/content/homepage/kontakty";
import GoogleMap from "../components/GoogleMap";
import kontakty from "../public/content/kontakty";
import { Marker } from "@react-google-maps/api";
import brandLogo from "../components/svg/instalater-logo-house-path";

function Kontakty({ apiKey }) {
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
                <GoogleMap
                    center={kontakty.address.geo}
                    styles={{ width: "100%", height: "100%" }}
                    zoom={13}
                    options={{ disableDefaultUI: true }}
                    apiKey={apiKey}
                >
                    <Marker
                        icon={{
                            path: brandLogo,
                            fillColor: "#fff",
                            fillOpacity: 0.9,
                            scale: 0.5,
                            strokeColor: "#1A182B",
                            strokeWeight: 2,
                        }}
                        position={kontakty.address.geo}
                    />
                </GoogleMap>
            </Box>
        </PageLayout>
    );
}

export async function getStaticProps() {
    return {
        props: {
            apiKey: process.env.GOOGLE_API_KEY,
        },
    };
}

export default Kontakty;
