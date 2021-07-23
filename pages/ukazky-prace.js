import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import {Heading} from "@chakra-ui/react"

function UkazkyPrace() {
    return (
        <PageLayout title="Ukázky práce">
            <Header>
                <Heading as="h1">
                    Ukázky práce
                </Heading>
            </Header>
        </PageLayout>
    );
}

export default UkazkyPrace;