import { IconButton } from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";


const NavToggleButton = ({ toggle, isOpen, ...rest }) => {
    return (
        <IconButton
            aria-label="Open navigation menu"
            variant={"primary"}
            border={"none"}
            size="lg"
            icon={
                isOpen ? (
                    <FaTimes />
                ) : (
                    <FaBars />
                )
            }
            onClick={toggle}
            {...rest}
        />
    );
};

export default NavToggleButton;