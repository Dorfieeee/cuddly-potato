import { chakra } from "@chakra-ui/react";

const ChakraSVG = chakra("svg");

const Drainage = ({ circle, fill, ...props }) => (
    <ChakraSVG
        xmlns="http://www.w3.org/2000/svg"
        width="83.52"
        height="83.52"
        viewBox="0 0 83.52 83.52"
        sx={{
            "& .svg-circle-border": {
                fill: circle || "primary",
            },
            "& .svg-white-part": {
                fill: fill || "primary",
            }
            
        }}
        {...props}
    >
        <g transform="translate(0 0)">
            <g fill="none">
                <path
                    d="M41.76,0A41.76,41.76,0,1,1,0,41.76,41.76,41.76,0,0,1,41.76,0Z"
                    stroke="none"
                />
                <path
                    d="M 41.759765625 2 C 36.39135360717773 2 31.18457794189453 3.05096435546875 26.28409194946289 5.123703002929688 C 21.54976654052734 7.126152038574219 17.29747772216797 9.993255615234375 13.64536285400391 13.64536285400391 C 9.993255615234375 17.29747772216797 7.126152038574219 21.54976654052734 5.123703002929688 26.28409194946289 C 3.05096435546875 31.18457794189453 2 36.39135360717773 2 41.759765625 C 2 47.12817764282227 3.05096435546875 52.33495330810547 5.123703002929688 57.23544311523438 C 7.126152038574219 61.96976470947266 9.993255615234375 66.22205352783203 13.64536285400391 69.87416839599609 C 17.29747772216797 73.52627563476563 21.54976654052734 76.39337921142578 26.28409194946289 78.39582824707031 C 31.18457794189453 80.46856689453125 36.39135360717773 81.51953125 41.759765625 81.51953125 C 46.25218963623047 81.51953125 50.66182708740234 80.7796630859375 54.86616516113281 79.32048034667969 C 58.90686798095703 77.91807556152344 62.63813018798828 75.89649963378906 65.95657348632813 73.31170654296875 C 75.84705352783203 65.61038208007813 81.51953125 54.11013793945313 81.51953125 41.759765625 C 81.51953125 36.39135360717773 80.46856689453125 31.18457794189453 78.39582824707031 26.28409194946289 C 76.39337921142578 21.54976654052734 73.52627563476563 17.29747772216797 69.87416839599609 13.64536285400391 C 66.22205352783203 9.993255615234375 61.96976470947266 7.126152038574219 57.23544311523438 5.123703002929688 C 52.33495330810547 3.05096435546875 47.12817764282227 2 41.759765625 2 M 41.759765625 0 C 64.82304382324219 0 83.51953125 18.69648742675781 83.51953125 41.759765625 C 83.51953125 55.15953063964844 77.20831298828125 67.08522796630859 67.18532562255859 74.88972473144531 C 60.32015228271484 80.23715209960938 51.42327880859375 83.51953125 41.759765625 83.51953125 C 18.69648742675781 83.51953125 0 64.82304382324219 0 41.759765625 C 0 18.69648742675781 18.69648742675781 0 41.759765625 0 Z"
                    stroke="none"
                    className="svg-circle-border"
                />
            </g>
        </g>
        <g transform="translate(18.52 19.509)">
            <path
                d="M1253.6,806.7a16.69,16.69,0,0,1,1.868,8.214,2.407,2.407,0,1,0,4.76-.461C1258.744,807.7,1253.6,806.7,1253.6,806.7Z"
                transform="translate(-1205.285 -783.976)"
                fill="#66d6d9"
            />
            <path
                d="M1105.335,744.8h-.23v-.9a.311.311,0,0,0-.307-.307h-5.2a.311.311,0,0,0-.307.307v.9h-1.279a10.615,10.615,0,0,0-10.594,10.594,6.526,6.526,0,0,1-13.051,0V738.941h1.075a.311.311,0,0,0,.307-.307v-5.195a.311.311,0,0,0-.307-.307h-1.075v-1.356h-.077l.921-3.276h-10.159l.921,3.276h-.026v1.356h-.844a.311.311,0,0,0-.307.307v5.195a.311.311,0,0,0,.307.307h.844V755.4a14.894,14.894,0,0,0,29.787,0,2.228,2.228,0,0,1,2.226-2.226h1.279v1.024a.311.311,0,0,0,.307.307h5.195a.311.311,0,0,0,.307-.307v-1.024h.23v-.026l3.2.921V743.905Zm-39.819-10.415v-.409a.284.284,0,0,1,.281-.281h9.264a.284.284,0,0,1,.281.281v.409h-9.827Zm38.974,19.449a.284.284,0,0,1-.281.282h-.41v-9.827h.41a.284.284,0,0,1,.281.281v9.264Z"
                transform="translate(-1064.8 -725.787)"
                className="svg-white-part"
            />
            <rect
                width="2.022"
                height="10.134"
                transform="translate(44.476 18.169)"
                fill="gray"
            />
            <rect
                width="10.134"
                height="2.022"
                transform="translate(0.333)"
                fill="gray"
            />
        </g>
    </ChakraSVG>
);
export default Drainage;
