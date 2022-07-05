import { Fragment } from "react";
import { Popup } from "react-map-gl";

export const NewPinForm = ({ newPlace, setNewPlace }) => {
  return (
    <Fragment>
      <Popup
        longitude={newPlace?.long}
        latitude={newPlace?.lat}
        anchor="left"
        closeOnClick={false}
        closeButton={true}
        onClose={() => setNewPlace(null)}
      >
        <div>NEW PIN</div>
      </Popup>
    </Fragment>
  );
};
