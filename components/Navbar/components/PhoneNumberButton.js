import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaPhoneVolume } from "react-icons/fa"

const MotionButton = motion(Button);

const PhoneNumberButton = ({children, ...props}) => {
    return (
        <MotionButton
            as={"a"}
            size="lg"
            leftIcon={<FaPhoneVolume />}
            href={"tel:+420777123456"}
            variant={"primary"}
            // animate={{ boxShadow: "0px 0px 10px 0px #1a182b" }}
            // initial={{ boxShadow: "0px 0px 5px 0px #1a182b" }}
            transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            {...props}
        >
            {"777 123 456"}
        </MotionButton>
    );
};

export default PhoneNumberButton;
