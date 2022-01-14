import { useEffect } from "react"
import * as turf from '@turf/turf'
import kontakty from '../../content/kontakty'

let lon = kontakty.address.geo.lng, lat = kontakty.address.geo.lat
var radius = 25;
var center = [lon, lat];
var options = { steps: 100, units: "kilometers", properties: { foo: "bar" } };
var circle = turf.circle(center, radius, options);

const Circle = ({ map, ...props }) => {

    useEffect(() => {
        map.addSource('circle-area', {
            type: "geojson",
            data: circle,
        })
        map.addLayer({
            id: 'circle-area',
            type: 'fill',
            source: 'circle-area',
            layout: {},
            paint: {
                'fill-color': '#1a182b',
                'fill-opacity': 0.4,
                'fill-outline-color': 'black',
            }
        })
    }, [])

    return (
        <></>
    )
}

export default Circle