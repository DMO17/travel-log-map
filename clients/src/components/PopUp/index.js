import { Fragment } from "react";
import { Popup } from "react-map-gl";
import { ReviewCard } from "../ReviewCard";

export const PopUp = ({ pins }) => {
  return (
    <Fragment>
      {pins?.data?.map((pin) => (
        <Popup
          key={pin?._id}
          longitude={pin?.long}
          latitude={pin?.lat}
          anchor="left"
          // onClose={() => setShowPopup(false)}
        >
          <ReviewCard {...pin} />
        </Popup>
      ))}
    </Fragment>
  );
};
