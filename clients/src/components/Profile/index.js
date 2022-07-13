import { AiFillStar } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { useAuth } from "../../context/AppProvider";

import "./style.css";

export const Profile = ({ setShowProfileModal }) => {
  const { user } = useAuth();

  const styling = { fontSize: 50, cursor: "pointer" };
  return (
    <div className="modalContainer">
      <div className="logo">
        <AiFillStar className="logoIcon" />
        <span>Travel Log Map</span>
      </div>
      <div className="logoContainer">
        <div>
          <AiOutlineUser style={styling} /> : {user?.username}
        </div>
        <div>
          <AiOutlineMail style={styling} /> : {user?.email}
        </div>
        <div>
          <GoLocation style={styling} /> : 10
        </div>
      </div>

      <button
        className="closeBtn"
        type="click"
        onClick={() => setShowProfileModal(false)}
      >
        Close
      </button>
    </div>
  );
};
