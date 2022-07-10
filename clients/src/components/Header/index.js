import { Fragment } from "react";
import { BiLogIn } from "react-icons/bi";
import { BsFillKeyFill } from "react-icons/bs";

import classes from "./style.module.css";

export const Header = ({ setLoginForm }) => {
  const styling = { fontSize: 50, marginRight: "25px", cursor: "pointer" };

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Travel Log Map</h1>
        <div>
          <BiLogIn style={styling} onClick={() => setLoginForm(true)} />
          <BsFillKeyFill style={styling} />
        </div>
      </header>
    </Fragment>
  );
};
