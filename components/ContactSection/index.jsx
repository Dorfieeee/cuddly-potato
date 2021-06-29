import { Heading, Flex } from "@chakra-ui/react";
import Section from "../Section";
import ContactForm from "./contactForm";
import ContactCard from "./contactCard";
import content from "../../public/content/homepage/kontakty";

const ContactSection = ({ children, ...props }) => {
    return (
        <Section id={content.id} px="5%" {...props}>
            <Heading textAlign="center" mb={10}>
                {content.title}
            </Heading>
            <Flex
                justify="center"
                alignItems={{ base: "center", xl: "start" }}
                flexDirection={{ base: "column", xl: "row" }}
            >
                <ContactCard
                    shadow="xl"
                    borderColor="gray.200"
                    borderWidth="1px"
                    bgGradient="linear(to-r, primary 0%, gray.100 100%)"
                    rounded="md"
                    p={10}
                    w={{ base: "100%", md: "75%", xl: "45%" }}
                    mt={{ base: "0", xl: "10" }}
                    color="secondary"
                    content={content.kontakty}
                />
                <ContactForm
                    w={{ base: "100%", md: "75%", xl: "45%" }}
                    p={10}
                />
            </Flex>
        </Section>
    );
};

export default ContactSection;
