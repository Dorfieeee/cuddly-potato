import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import { Heading } from "@chakra-ui/react";

function Sluzby() {
    return (
        <PageLayout title="Služby">
            <Header>
                <Heading as="h1">Služby</Heading>
            </Header>
        </PageLayout>
    );
}

export default Sluzby;