import { Fragment } from "react";
import { Marker } from "react-map-gl";

export const Markers = ({ pin, handleMarkerOnClick }) => {
  return (
    <Fragment>
      <Marker
        style={{ cursor: "pointer" }}
        longitude={pin?.long}
        latitude={pin?.lat}
        color="blue"
        onClick={() => {
          handleMarkerOnClick(pin);
        }}
      />
    </Fragment>
  );
};
