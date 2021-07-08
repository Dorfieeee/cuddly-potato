import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import {Heading} from "@chakra-ui/react"

function Reference() {
    return (
        <PageLayout title="Reference">
            <Header>
                <Heading as="h1">
                    Reference
                </Heading>
            </Header>
        </PageLayout>
    );
}

export default Reference;