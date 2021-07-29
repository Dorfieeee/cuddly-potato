/* DOCS
* https://googlemaps.github.io/google-maps-services-js/index.html
*/
import { Client } from "@googlemaps/google-maps-services-js";

const PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

export default (req, res) => {
    if (req.method !== "GET") return;

    const client = new Client({});

    client.placeDetails({
        timeout: 1000,
        params: {
            key: PLACES_API_KEY,
            place_id: "ChIJV3cPKjeJEkcRHUw1kzRgL1Q",
        },
        responseType: "json",
    }).then(response => {
        
        return res.status(200).json(response.data.result)
    }).catch(err => {
        return res.status(400).json({error: err})
    });
};
