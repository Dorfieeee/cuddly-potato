import { Box, Center, Heading, useColorMode } from "@chakra-ui/react";

import PageLayout from "../src/components/PageLayout";
import Header from "../src/components/Header";
import MainHeading from "../src/components/MainHeading";

import PlumberSinkRepair from "../src/svg/plumberSinkRepair"

function UkazkyPrace() {
    const {colorMode} = useColorMode()

    return (
        <PageLayout title="Ukázky práce">
            <Header>
                <MainHeading>Ukázky práce</MainHeading>
            </Header>
            <Box as="main" position="relative">
                <Heading size="lg" textAlign="center" position="absolute" w="100%" top="5%">Pracujeme na tom...</Heading>
                <Center width={{base: "75%", md: "50%"}} mx="auto" my="0">
                    <PlumberSinkRepair colorMode={colorMode} width="100%" height="100%" />                    
                </Center>
            </Box>
        </PageLayout>
    );
}

export default UkazkyPrace;
