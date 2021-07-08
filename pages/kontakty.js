import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import {Heading} from "@chakra-ui/react"

function Kontakty() {
    return (
        <PageLayout title="Kontakty">
            <Header>
                <Heading as="h1">
                    Kontakty
                </Heading>
            </Header>
        </PageLayout>
    );
}

export default Kontakty;