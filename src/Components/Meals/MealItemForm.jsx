import React from "react";
import classes from "./MealItemForm.module.css";
import OrderChange from "../UI/OrderChange";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <OrderChange />
      <button className={classes.addToCartBtn}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
