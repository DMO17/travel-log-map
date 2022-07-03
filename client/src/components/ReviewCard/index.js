import { AiFillStar } from "react-icons/ai";

import "./style.css";

export const ReviewCard = () => {
  return (
    <div className="card">
      <label>Place</label>
      <h4>Big ben </h4>
      <label>Review</label>
      <p>Beautiful place. I enjoyed the view</p>
      <label>Rating</label>
      <div className="stars">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <label>Information</label>
      <span className="username">
        Created by <b>DMO15</b>
      </span>
      <span className="date">1 hour ago</span>
    </div>
  );
};
