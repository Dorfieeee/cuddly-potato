import {
    Link,
    Text,
    Flex,
    Grid,
    VStack,
    Heading,
    List,
    ListItem,
    ListIcon,
    Box,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaPhoneAlt, FaAt } from "react-icons/fa";

const Wrapper = ({ children, ...props }) => (
    <Box {...props}>
        <Box px="5%">{children}</Box>
    </Box>
);

const Column = ({ children, title, ...props }) => (
    <VStack alignItems="" flexBasis="25ch" m={3} {...props}>
        <Heading as="h3" size="md" mb={3}>
            {title}
        </Heading>
        {children}
    </VStack>
);

const Footer = ({ children, ...props }) => {
    const year = new Date().getFullYear();

    return (
        <Box as="footer" {...props} className="themeDarkColors">
            <Wrapper>
                <Grid
                    gridTemplateColumns={{
                        base: "minmax(25ch, 1fr)",
                        md: "repeat(2, minmax(25ch, 1fr))",
                        lg: "repeat(4, minmax(25ch, 1fr))",
                    }}
                    py={8}
                >
                    <Column title="Kontakty">
                        <Text as="address">
                            Váš Instalatér
                            {/* <br />
                            Spešov 33
                            <br />
                            Rájec-Jestřebí
                            <br />
                            679 02
                            <br /> */}
                            <br />
                            Street
                            <br />
                            City
                            <br />
                            AB1 23
                            <br />
                            <List>
                                <ListItem>
                                    <ListIcon as={FaPhoneAlt} />
                                    <Link href="tel:+420777123456" pl={2}>
                                        777 123 456
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaAt} />
                                    <Link
                                        href="mailto:example@gmail.com"
                                        pl={2}
                                    >
                                        example@gmail.com
                                    </Link>
                                </ListItem>
                            </List>
                        </Text>
                    </Column>

                    <Column title="Mapa" maxW="350px">
                        <Image
                            src="/img/footer-map.png"
                            width="300px"
                            height="300px"
                        />
                    </Column>

                    <Column as="nav" title="Služby">
                        <Link href="#">Voda</Link>
                        <Link href="#">Topení</Link>
                        <Link href="#">Plyn</Link>
                        <Link href="#">Kanalizace</Link>
                        <Link href="#">Havarijní servis</Link>
                    </Column>

                    <Column as="nav" title="Odkazy">
                        <Link href="#">Služby</Link>
                        <Link href="#">O mně</Link>
                        <Link href="#">Kde působím</Link>
                        <Link href="#">Kontakty</Link>
                        <Link href="#">Havarijní servis</Link>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Cookie Policy</Link>
                        <Link href="#">GDPR</Link>
                    </Column>
                </Grid>
            </Wrapper>

            <Wrapper borderTop="2px solid">
                <Flex justifyContent="space-between" py={2} flexWrap={"wrap"}>
                    <Text as="span" flex="1 1 300px" textAlign="center">
                        Copyright © 2021-{year} Váš Instalatér
                    </Text>
                    <Text as="span" flex="1 1 300px" textAlign="center">
                        Web-design {"&"} SEO {"| "}
                        <Link href="#" isExternal>
                            Rosendorf.dev
                        </Link>
                        {" |"}
                    </Text>
                </Flex>
            </Wrapper>
        </Box>
    );
};

export default Footer;
