import { Box, Button, Heading } from "@chakra-ui/react";
import { EmailIcon, CheckIcon, WarningIcon } from "@chakra-ui/icons";
import { Form, Formik } from "formik";
import FormField from "../FormField"

import contactSchema from "./validationSchema";
import onSubmit from "./onSubmit";

const ContactForm = (props) => {
    return (
        <Box {...props}>
            <Heading mb={3}>Napište nám</Heading>
            <Formik
                initialValues={{
                    name: "",
                    tel: "",
                    email: "",
                    subject: "",
                    body: "",
                }}
                validationSchema={contactSchema}
                onSubmit={onSubmit}
                initialStatus="initial"
            >
                {(props) => (
                    <Form>
                        <FormField
                            name="name"
                            label="Jméno"
                            placeholder="Kateřina Veselá"
                            isRequired
                        />
                        <FormField
                            name="tel"
                            label="Telefon"
                            placeholder="777 123 456"
                        />
                        <FormField
                            name="email"
                            label="Email"
                            placeholder="k.vesela@email.com"
                        />
                        <FormField
                            name="subject"
                            label="Předmět zprávy"
                            placeholder="Instalace kotle"
                            isRequired
                        />
                        <FormField
                            name="body"
                            label="Zpráva"
                            placeholder="Dobrý den, potřebovala bych nově nainstalovat kotel, protože ten starý nám právě odešel a nejsem si úplně jistá..."
                            isTextarea
                            isRequired
                        />
                        <Button
                            mt={4}
                            isLoading={props.isSubmitting}
                            disabled={props.status !== "initial"}
                            loadingText="Odesílám..."
                            leftIcon={
                                props.status === "success" ? (
                                    <CheckIcon color="green.400" />
                                ) : props.status === "error" ? (
                                    <WarningIcon color="red.400" />
                                ) : (
                                    <EmailIcon />
                                )
                            }
                            type="submit"
                            _disabled={{}}
                        >
                            {props.status === "success"
                                ? "Odesláno"
                                : props.status === "error"
                                ? "Naskytla se chyba"
                                : "Odeslat email"}
                        </Button>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default ContactForm;
