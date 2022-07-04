import { Fragment } from "react";
import { Marker } from "react-map-gl";

export const Markers = ({ pins, handleMarkerOnClick }) => {
  return (
    <Fragment>
      {pins?.data?.map((pin) => (
        <Marker
          longitude={pin.long}
          latitude={pin.lat}
          color="blue"
          key={pin._id}
          onClick={() => {
            handleMarkerOnClick(pin._id);
          }}
        />
      ))}
    </Fragment>
  );
};
