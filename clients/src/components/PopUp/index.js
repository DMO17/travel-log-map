import { Fragment } from "react";
import { Popup } from "react-map-gl";
import { ReviewCard } from "../ReviewCard";

export const PopUp = ({ pin }) => {
  return (
    <Fragment>
      <Popup
        key={pin?._id}
        longitude={pin?.long}
        latitude={pin?.lat}
        anchor="left"
      >
        <ReviewCard {...pin} />
      </Popup>
    </Fragment>
  );
};
