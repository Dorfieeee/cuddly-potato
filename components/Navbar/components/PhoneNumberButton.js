import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaPhoneVolume } from "react-icons/fa"

const MotionButton = motion(Button);

const PhoneNumberButton = ({children, tel, ...props}) => {
    return (
        <MotionButton
            as={"a"}
            size="lg"
            leftIcon={<FaPhoneVolume />}
            href={`tel:${tel.replace(/\s/g, "")}`}
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
            {tel}
        </MotionButton>
    );
};

export default PhoneNumberButton;
