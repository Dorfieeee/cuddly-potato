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
import { Form, Formik, useField } from "formik";
import * as yup from "yup";

const contactSchema = yup.object().shape({
    name: yup.string().required("Uveďte Vaše jméno").label("Jméno"),
    tel: yup
        .string()
        .matches(/\d/g, "Tel. číslo musí obsahovat pouze číslice")
        .min(9, "Tel.číslo má alespoň 9 číslic")
        .label("Tel. číslo"),
    email: yup.string().when("tel", {
        is: (tel) => !tel,
        then: yup
            .string()
            .email("Neplatný formát emailu (john@email.com)")
            .required("Uveďte, prosím, alespoň email"),
        otherwise: yup.string().email("Neplatný formát emailu (john@email.com)"),
    }),
    subject: yup
        .string()
        .required("Uveďte předmět zprávy")
        .max(100, "Nemůže být delší jak 100 znaků")
        .label("Předmět"),
    body: yup
        .string()
        .required("Tělo zprávy nesmí být prázdné")
        .min(30, "Musí obsahovat alespoň 30 znaků")
        .max(2000, "Nemůže být delší jak 2000 znaků")
        .label("Tělo zprávy"),
    createdOn: yup.date().default(function () {
        return new Date();
    }),
});

const MyFormField = ({ placeholder, label, isTextarea, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <FormControl isInvalid={meta.error && meta.touched} mb={2}>
            <FormLabel htmlFor={field.name}>{label}</FormLabel>
            {isTextarea ? (
                <Textarea
                    id={field.name}
                    placeholder={placeholder || ""}
                    size="md"
                    resize="vertical"
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
            <Heading>Napište mi</Heading>
            <Formik
                initialValues={{
                    name: "",
                    tel: "",
                    email: "",
                    subject: "",
                    body: "",
                }}
                validationSchema={contactSchema}
                onSubmit={(values) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                    }, 500);
                }}
            >
                {(props) => (
                    <Form>
                        <MyFormField
                            name="name"
                            label="Jméno"
                            placeholder="Kateřina Veselá"
                        />
                        <MyFormField
                            name="email"
                            label="Email"
                            placeholder="k.vesela@email.com"
                        />
                        <MyFormField
                            name="tel"
                            label="Telefon"
                            placeholder="777 123 456"
                        />
                        <MyFormField
                            name="subject"
                            label="Předmět zprávy"
                            placeholder="Instalace kotle"
                        />
                        <MyFormField
                            name="body"
                            label="Zpráva"
                            placeholder="Dobrý den, potřebovala bych nově nainstalovat kotel, protože ten starý nám právě odešel a nejsem si úplně jistá..."
                            isTextarea
                        />
                        <Button
                            mt={4}
                            isLoading={props.isSubmitting}
                            type="submit"
                            variant="primary"
                        >
                            Odeslat
                        </Button>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default ContactForm;
