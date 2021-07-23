import {
    Box,
    Heading,
    List,
    ListItem,
    ListIcon,
    Link,
    Text,
    chakra,
    Tooltip,
    SimpleGrid,
    Center,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Logo from "../../svg/insatalter-logo-vertical";

const MyListIcon = ({ as, label }) => (
    <Tooltip aria-label={"A tooltip"} label={label}>
        <span>
            <ListIcon as={as} mr={8} />
        </span>
    </Tooltip>
);

const ContactCard = ({ content, ...rest }) => {
    let { title, options, ico, person } = content;
    let { telefon, adresa, email } = options;

    return (
        <Box
            {...rest}
        >
            <Heading as="h3" fontSize={"xl"} my={3}>
                {title}
            </Heading>
            <chakra.hr my={3} borderTop="1px solid" />
            <SimpleGrid spacing={10} columns={{ base: 1, md: 2 }} gridTemplateColumns={{base: "minmax(0, 1fr)", md: "minmax(0, 1fr) max-content"}}>
                <Center>
                    <Logo maxW="250px" />
                </Center>
                <List spacing={2}>
                    <ListItem>
                        <MyListIcon as={person.icon} label="Jednatel" />
                        {person.fname + " " + person.lname}
                    </ListItem>
                    <ListItem>
                        <MyListIcon as={ico.icon} label="IČO" />
                        <Link href={ico.link} isExternal>
                            {ico.value} <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <MyListIcon as={telefon.icon} label="Telefonní číslo" />
                        <Link href={"tel:" + telefon.value}>
                            {telefon.value}
                        </Link>
                    </ListItem>
                    <ListItem display="flex" flexWrap="nowrap">
                        <MyListIcon as={email.icon} label="Email" />
                        <Link href={"mailto:" + email.value} wordBreak="break-word">
                            {email.value}
                        </Link>
                    </ListItem>
                    <ListItem display="inline-flex" alignItems="center">
                        <MyListIcon as={adresa.icon} label="Adresa" />
                        <Text display="inline-block">
                            {adresa.value.street}
                            <br />
                            {adresa.value.city}
                            <br />
                            {adresa.value.code}
                        </Text>
                    </ListItem>
                </List>
            </SimpleGrid>
        </Box>
    );
};

export default ContactCard;
