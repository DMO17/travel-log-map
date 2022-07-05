import React, { Fragment } from "react";
import { Markers } from "../Markers";
import { PopUp } from "../PopUp";

export const PopUpMarker = ({
  pins,
  handleMarkerOnClick,
  //   setCurrentPlace,
  currentPlace,
  polarity,
}) => {
  return (
    <Fragment>
      {pins?.map((pin) => (
        <div key={pin?._id}>
          <Markers handleMarkerOnClick={handleMarkerOnClick} pin={pin} />
          {polarity && <PopUp pin={pin} />}
        </div>
      ))}
    </Fragment>
  );
};
