import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import { Heading } from "@chakra-ui/react";
import MainHeading from "../components/headings/MainHeading";

function UkazkyPrace() {
    return (
        <PageLayout title="Ukázky práce">
            <Header>
                <MainHeading>Ukázky práce</MainHeading>
            </Header>
        </PageLayout>
    );
}

export default UkazkyPrace;
