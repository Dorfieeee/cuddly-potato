import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import {Heading} from "@chakra-ui/react"

function HavarijniServis() {
    return (
        <PageLayout title="Havarijní servis">
            <Header>
                <Heading as="h1">
                    Havarijní servis
                </Heading>
            </Header>
        </PageLayout>
    );
}

export default HavarijniServis;