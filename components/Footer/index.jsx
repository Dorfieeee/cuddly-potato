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
    Image
} from "@chakra-ui/react";
import { FaPhoneAlt, FaAt } from "react-icons/fa";
import kontakty from "../../public/content/kontakty";
import links from "../../public/content/links";

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
                            {kontakty.brandName}
                            <br />
                            {kontakty.address.street}
                            <br />
                            {kontakty.address.city}
                            <br />
                            {kontakty.address.code}
                            <br />
                            <List>
                                <ListItem>
                                    <ListIcon as={FaPhoneAlt} />
                                    <Link href={`tel:${kontakty.tel.replace(/\s+/g, "")}`} pl={2}>
                                        {kontakty.tel}
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaAt} />
                                    <Link
                                        href={`mailto:${kontakty.email}`}
                                        pl={2}
                                    >
                                        {kontakty.email}
                                    </Link>
                                </ListItem>
                            </List>
                        </Text>
                    </Column>

                    <Column title="Recenze" maxW="350px">
                        <Box>
                            <Link
                                href="https://www.firmy.cz/detail/13323681-rosendorf-voda-topeni-plyn-spesov.html#hodnoceni"
                                target="_blank"
                                rel="noopener"
                            >
                                <Image
                                    src="https://www.firmy.cz/img-stars/dark-13323681.svg"
                                    alt="Rosendorf Voda - Topení - Plyn na Firmy.cz"
                                />
                            </Link>
                        </Box>
                    </Column>

                    <Column as="nav" title="Služby">
                        <Link href={links.sluzby.voda.href}>{links.sluzby.voda.name}</Link>
                        <Link href={links.sluzby.topeni.href}>{links.sluzby.topeni.name}</Link>
                        <Link href={links.sluzby.plyn.href}>{links.sluzby.plyn.name}</Link>
                        <Link href={links.sluzby.kanalizace.href}>{links.sluzby.kanalizace.name}</Link>
                        <Link href={links.sluzby.havarie.href}>{links.sluzby.havarie.name}</Link>
                    </Column>

                    <Column as="nav" title="Odkazy">
                        <Link href={links.navbar.onas.href}>{links.navbar.onas.name}</Link>
                        <Link href={links.navbar.sluzby.href}>{links.navbar.sluzby.name}</Link>
                        <Link href={links.navbar.mista.href}>{links.navbar.mista.name}</Link>
                        <Link href={links.navbar.reference.href}>{links.navbar.reference.name}</Link>
                        <Link href={links.navbar.kontakty.href}>{links.navbar.kontakty.name}</Link>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Cookie Policy</Link>
                        <Link href="#">GDPR</Link>
                    </Column>
                </Grid>
            </Wrapper>

            <Wrapper borderTop="2px solid">
                <Flex justifyContent="space-between" py={2} flexWrap={"wrap"}>
                    <Text as="span" flex="1 1 300px" textAlign="center">
                        Copyright © 2021-{year} {kontakty.brandName}
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
