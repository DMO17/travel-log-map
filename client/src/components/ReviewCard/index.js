import { AiFillStar } from "react-icons/ai";

import "./style.css";

export const ReviewCard = () => {
  return (
    <div className="card">
      <label>Place</label>
      <h3>Big ben </h3>
      <label>Review</label>
      <p className="desc">Beautiful place. I enjoyed the view</p>
      <label>Rating</label>
      <div className="stars">
        <AiFillStar className="star" />
        <AiFillStar className="star" />
        <AiFillStar className="star" />
      </div>
      <label>Information</label>
      <div className="info-container">
        <span className="username">
          Created by <b>DMO15</b>
        </span>
        <span className="date">1 hour ago</span>
      </div>
    </div>
  );
};
