import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import {Heading} from "@chakra-ui/react"

function KdePusobime() {
    return (
        <PageLayout title="Kde působíme">
            <Header>
                <Heading as="h1">
                    Kde působíme
                </Heading>
            </Header>
        </PageLayout>
    );
}

export default KdePusobime;