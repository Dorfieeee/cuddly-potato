import {
    Box,
    FormControl,
    Input,
    FormErrorMessage,
    FormLabel,
    Button,
    Textarea,
    Heading,
} from "@chakra-ui/react";
import { EmailIcon, CheckIcon, WarningIcon } from "@chakra-ui/icons";
import { Form, Formik, useField } from "formik";


import contactSchema from "./validationSchema";
import onSubmit from "./onSubmit";

const MyFormField = ({ placeholder, label, isTextarea, isRequired, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <FormControl isInvalid={meta.error && meta.touched} mb={2} isRequired={isRequired}>
            <FormLabel htmlFor={field.name}>{label}</FormLabel>
            {isTextarea ? (
                <Textarea
                    id={field.name}
                    placeholder={placeholder || ""}
                    resize="vertical"
                    rows={3}
                    {...field}
                    {...props}
                />
            ) : (
                <Input
                    id={field.name}
                    placeholder={placeholder || ""}
                    {...field}
                    {...props}
                />
            )}
            <FormErrorMessage>{meta.error}</FormErrorMessage>
        </FormControl>
    );
};

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
                        <MyFormField
                            name="name"
                            label="Jméno"
                            placeholder="Kateřina Veselá"
                            isRequired
                        />
                        <MyFormField
                            name="tel"
                            label="Telefon"
                            placeholder="777 123 456"
                        />
                        <MyFormField
                            name="email"
                            label="Email"
                            placeholder="k.vesela@email.com"
                        />
                        <MyFormField
                            name="subject"
                            label="Předmět zprávy"
                            placeholder="Instalace kotle"
                            isRequired
                        />
                        <MyFormField
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
                            leftIcon={props.status === "success" ? <CheckIcon color="green.400" /> : props.status === "error" ? <WarningIcon color="red.400" /> : <EmailIcon />}
                            type="submit"
                            _disabled={{}}
                        >
                            {props.status === "success" ? "Odesláno" : props.status === "error" ? "Naskytla se chyba" : "Odeslat email"}
                        </Button>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default ContactForm;
