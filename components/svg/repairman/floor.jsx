import {chakra} from "@chakra-ui/react"

const ChakraSVG = chakra("svg");

function Floor(props) {
    return (
        <ChakraSVG
            xmlns="http://www.w3.org/2000/svg"
            width="2568.1"
            height="324.6"
            viewBox="0 0 2568.1 324.6"
            aria-label="Floor"
            {...props}
        >
            <path
                fill="#9BB8CC"
                d="M2813.8 1593.7c0-48.9-39.7-88.6-88.6-88.6H334.3c-48.9 0-88.6 39.7-88.6 88.6s39.7 88.6 88.6 88.6H642c-40.7 0-73.7 33-73.7 73.7s33 73.7 73.7 73.7h1990.1c40.7 0 73.7-33 73.7-73.7s-33-73.7-73.7-73.7h93c49 0 88.7-39.7 88.7-88.6z"
                transform="translate(-245.7 -1505.1)"
            ></path>
        </ChakraSVG>
    );
}

export default Floor;