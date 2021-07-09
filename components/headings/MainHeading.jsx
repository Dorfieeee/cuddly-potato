import {Heading} from "@chakra-ui/react"

function MainHeading({children, ...props}) {
    return (
        <Heading as="h1" mt={12} mb={3} textAlign="center" {...props}>
            {children}
        </Heading>
    );
}

export default MainHeading;