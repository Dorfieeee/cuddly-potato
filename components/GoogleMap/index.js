import { memo } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import PropTypes from "prop-types";

function GoogleMapComponent({ apiKey, center, styles, children, ...rest }) {
    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
                mapContainerStyle={styles}
                center={center}
                zoom={8}
                {...rest}
            >
                {/* Child components, such as markers, info windows, etc. */}
                <>{children}</>
            </GoogleMap>
        </LoadScript>
    );
}

GoogleMapComponent.defaultProps = {
    center: {
        lat: 49.397133173294606,
        lng: 16.615978039220384,
    },
    styles: {
        width: "400px",
        height: "400px",
    },
};

GoogleMapComponent.propTypes = {
    center: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
    }).isRequired,
    styles: PropTypes.object,
};

export default memo(GoogleMapComponent);
