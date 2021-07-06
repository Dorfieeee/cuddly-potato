import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import { Heading, Box, Text } from "@chakra-ui/react";

function About({ children, ...rest }) {
    return (
        <PageLayout title="O nás">
            <Header>
                <Heading textAlign="center" my={3} px={"5%"}>
                    O nás
                </Heading>
            </Header>
            <Box as="main" px={"5%"}>
                <Text noOfLines={2}>
                    "The quick brown fox jumps over the lazy dog" is an
                    English-language pangram—a sentence that contains all of the
                    letters of the English alphabet. Owing to its existence,
                    Chakra was created.
                </Text>
                <Text noOfLines={[1, 2, 3]}>
                    "The quick brown fox jumps over the lazy dog" is an
                    English-language pangram—a sentence that contains all of the
                    letters of the English alphabet. Owing to its existence,
                    Chakra was created.
                </Text>
                <Text noOfLines={2}>
                    "The quick brown fox jumps over the lazy dog" is an
                    English-language pangram—a sentence that contains all of the
                    letters of the English alphabet. Owing to its existence,
                    Chakra was created.
                </Text>
                <Text noOfLines={[1, 2, 3]}>
                    "The quick brown fox jumps over the lazy dog" is an
                    English-language pangram—a sentence that contains all of the
                    letters of the English alphabet. Owing to its existence,
                    Chakra was created.
                </Text>
                <Text noOfLines={2}>
                    "The quick brown fox jumps over the lazy dog" is an
                    English-language pangram—a sentence that contains all of the
                    letters of the English alphabet. Owing to its existence,
                    Chakra was created.
                </Text>
                <Text noOfLines={[1, 2, 3]}>
                    "The quick brown fox jumps over the lazy dog" is an
                    English-language pangram—a sentence that contains all of the
                    letters of the English alphabet. Owing to its existence,
                    Chakra was created.
                </Text>
                <Text noOfLines={2}>
                    "The quick brown fox jumps over the lazy dog" is an
                    English-language pangram—a sentence that contains all of the
                    letters of the English alphabet. Owing to its existence,
                    Chakra was created.
                </Text>
                <Text noOfLines={[1, 2, 3]}>
                    "The quick brown fox jumps over the lazy dog" is an
                    English-language pangram—a sentence that contains all of the
                    letters of the English alphabet. Owing to its existence,
                    Chakra was created.
                </Text>
                <Text noOfLines={2}>
                    "The quick brown fox jumps over the lazy dog" is an
                    English-language pangram—a sentence that contains all of the
                    letters of the English alphabet. Owing to its existence,
                    Chakra was created.
                </Text>
                <Text noOfLines={[1, 2, 3]}>
                    "The quick brown fox jumps over the lazy dog" is an
                    English-language pangram—a sentence that contains all of the
                    letters of the English alphabet. Owing to its existence,
                    Chakra was created.
                </Text>
                <Text noOfLines={2}>
                    "The quick brown fox jumps over the lazy dog" is an
                    English-language pangram—a sentence that contains all of the
                    letters of the English alphabet. Owing to its existence,
                    Chakra was created.
                </Text>
                <Text noOfLines={[1, 2, 3]}>
                    "The quick brown fox jumps over the lazy dog" is an
                    English-language pangram—a sentence that contains all of the
                    letters of the English alphabet. Owing to its existence,
                    Chakra was created.
                </Text>
            </Box>
        </PageLayout>
    );
}

export default About;
