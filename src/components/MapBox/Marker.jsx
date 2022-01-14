import mapboxgl from "mapbox-gl";
import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const Marker = ({ map, style, coordinates, ...props }) => {
    let markerRef = useRef()

    useEffect(() => {
        if (!markerRef.current) return
        const markerElement = markerRef.current
        new mapboxgl.Marker(markerElement)
        .setLngLat(coordinates)
        .addTo(map)
    })

    return (
        <Box
            className="marker"
            ref={markerRef}
            w="20px"
            h="48px"
            bgImage="url(img/mapbox-marker-icon-primary.svg)"
            bgSize="100%"
            style={style}
        />
    )
}

export default Marker