import React from "react";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

import classes from "./ArrowButton.module.css";

const ArrowButton = (props) => {
  return (
    <button className={classes.btn} onClick={props.onClick}>
      <span>{props.type === "left" ? <LeftArrow /> : <RightArrow />}</span>
    </button>
  );
};

export default ArrowButton;
