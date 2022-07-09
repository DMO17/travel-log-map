import { AiFillStar } from "react-icons/ai";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

export const ReviewCard = ({
  _id,
  title,
  description,
  rating,
  username,
  createdAt,
}) => {
  return (
    <div className="card">
      <label>Place</label>
      <h3>{title} </h3>
      <label>Review</label>
      <p className="desc">{description}</p>
      <label>Rating</label>
      <div className="stars">
        {Array(rating).fill(<AiFillStar className="star" key={uuidv4()} />)}
      </div>
      <label>Information</label>
      <div className="info-container">
        <span className="username">
          Created by <b>{username}</b>
        </span>
        <span className="date">{createdAt}</span>
      </div>
    </div>
  );
};
