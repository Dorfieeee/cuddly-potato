import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Section = ({ children, id, ...rest }) => {
    return (
        <Box as="section" id={id} {...rest}>
            {children}
        </Box>
    );
};

Section.propTypes = {
    id: PropTypes.string.isRequired,
};

export default Section;
