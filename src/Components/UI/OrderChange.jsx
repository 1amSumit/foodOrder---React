import React from "react";
import classes from "./OrderChange.module.css";

const OrderChange = () => {
  return (
    <div className={classes.orderChangeContainer}>
      <button className={classes.decBtn}>-</button>
      <p className={classes.amount}>1</p>
      <button className={classes.incBtn}>+</button>
    </div>
  );
};

export default OrderChange;
