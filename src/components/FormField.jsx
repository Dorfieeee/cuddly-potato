import {
    FormControl,
    Input,
    FormErrorMessage,
    FormLabel,
    Textarea,
} from "@chakra-ui/react";
import { useField } from "formik";

const FormField = ({ placeholder, label, isTextarea, isRequired, ...props }) => {
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

export default FormField;