import PropTypes from "prop-types";
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from "mapbox-gl";
import { Box } from "@chakra-ui/react";
import { useEffect, memo } from "react";
import { useState } from "react";

const MapBox = ({ children, API_KEY, ...props }) => {
    let {styles, id, center, zoom} = props

    let [map, setMap] = useState(null)
    let [loaded, setLoaded] = useState(false)
    
    let [mapOptions,] = useState({
        container: id,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: zoom
    })

    useEffect(() => {
        if (map) {
            map.on('load', () => {
                setLoaded(true)
            })
        }
    }, [map])

    useEffect(() => {
        mapboxgl.accessToken = API_KEY
        setMap(new mapboxgl.Map(mapOptions))
    }, [mapOptions])


    if (!Array.isArray(children)) {
        children = [children]
    }

    return (
        <Box
            id={id}
            style={styles}
        >
            {loaded && children && children.flat().map(el => {
                let {props} = el
                return {
                    ...el,
                    props: {
                        ...props,
                        map: map,
                    }
                }
            })}
        </Box>
    )
}

// memoized so it does not call API each render ?
// what I know how it works :D
const Map = memo(MapBox)
export default Map