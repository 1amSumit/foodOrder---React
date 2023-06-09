import React from "react";
import classes from "./MealsCard.module.css";

const MealsCard = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default MealsCard;
