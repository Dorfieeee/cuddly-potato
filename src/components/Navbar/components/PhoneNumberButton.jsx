import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaPhoneVolume } from "react-icons/fa";

const MotionButton = motion(Button);

const ring = {
    rotateZ: [0, 8, -8, 8, -8, 0],
    transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 10,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        delay: 5,
    },
};

const PhoneNumberButton = ({ children, tel, ...props }) => {
    return (
        <MotionButton
            as={"a"}
            size="lg"
            leftIcon={<FaPhoneVolume size={20} />}
            href={`tel:${tel.replace(/\s/g, "")}`}
            variant={"primary"}
            animate={{}}
            {...props}
        >
            {tel}
        </MotionButton>
    );
};

export default PhoneNumberButton;
