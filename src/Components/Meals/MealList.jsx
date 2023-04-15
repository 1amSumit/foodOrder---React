import React from "react";
import classes from "./MealList.module.css";
import MealItemForm from "./MealItemForm";

const MealList = (props) => {
  return (
    <div className={classes.list}>
      <div className={classes.imageConatiner}>
        <img className={classes.image} src={props.path} />
      </div>
      <div className={classes.textConatier}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
      <div className={classes.btnContainers}>
        <p className={classes.price}>
          <span>$</span>
          {props.price}
        </p>
        <MealItemForm />
      </div>
    </div>
  );
};

export default MealList;
