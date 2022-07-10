import { Fragment } from "react";

import classes from "./style.module.css";

export const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Travel Log Map</h1>
      </header>
    </Fragment>
  );
};
