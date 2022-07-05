import { Fragment } from "react";
import { Popup } from "react-map-gl";
import { ReviewCard } from "../ReviewCard";

export const PopUp = ({ pin }) => {
  return (
    <Fragment>
      <Popup
        longitude={pin?.long}
        latitude={pin?.lat}
        anchor="left"
        closeOnClick={false}
        closeButton={true}
      >
        <ReviewCard {...pin} />
      </Popup>
    </Fragment>
  );
};
