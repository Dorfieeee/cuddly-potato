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
    Image,
} from "@chakra-ui/react";
import { FaPhoneAlt, FaAt } from "react-icons/fa";
import kontakty from "../../public/content/kontakty";
import links from "../../public/content/links";
import GoogleLogo from "../svg/google-logo-long";
import SOSLogo from "../svg/starOfService-logo-long";

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

    const linkTemplate = (link, i) => {
        const { name, href } = link[1];
        return (
            <Link key={i} href={href}>
                {name}
            </Link>
        );
    };

    const getOdkazyLinks = () =>
        Array.from(Object.entries(links.navbar))
            .concat(Array.from(Object.entries(links.policies)))
            .map(linkTemplate);

    const getSluzbyLinks = () =>
        Array.from(Object.entries(links.sluzby)).map(linkTemplate);

    return (
        <Box as="footer" {...props} className="themeDarkColors">
            <Wrapper maxW="1240px" m="0 auto">
                <Grid
                    gridTemplateColumns={{
                        base: "repeat(2, minmax(125px, 1fr))",
                        lg: "minmax(35ch, 350px) repeat(3, minmax(25ch, 350px))",
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
                                    <Link
                                        href={`tel:${kontakty.tel.replace(
                                            /\s+/g,
                                            ""
                                        )}`}
                                        pl={2}
                                    >
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

                    <Column title="Síť portálů" maxW="350px" spacing={5}>
                        <Box>
                            <Link
                                href="https://www.firmy.cz/detail/13323681-rosendorf-voda-topeni-plyn-spesov.html#hodnoceni"
                                target="_blank"
                                rel="noopener"
                                isExternal
                            >
                                <Image
                                    src="https://www.firmy.cz/img-stars/dark-13323681.svg"
                                    alt="Rosendorf Voda - Topení - Plyn na Firmy.cz"
                                />
                            </Link>
                        </Box>
                        <Link
                            href="https://g.page/r/CR1MNZM0YC9UEBA"
                            target="_blank"
                            rel="noopener"
                            isExternal
                        >
                            <GoogleLogo />
                        </Link>
                        <Link
                            href="https://www.starofservice.cz/profesional/instalaterstvi/spesov/440109853"
                            target="_blank"
                            rel="noopener"
                            isExternal
                        >
                            <SOSLogo />
                        </Link>
                    </Column>

                    <Column as="nav" title="Služby">
                        {getSluzbyLinks()}
                    </Column>

                    <Column as="nav" title="Odkazy">
                        {getOdkazyLinks()}
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
