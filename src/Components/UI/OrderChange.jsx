import React, { useState } from "react";
import classes from "./OrderChange.module.css";

const OrderChange = (props) => {
  const [amount, setAmount] = useState(1);

  const decClickHandler = (e) => {
    e.preventDefault();
    setAmount(amount - 1);
    props.getAmount(amount - 1);
  };

  const incClickHandler = (e) => {
    e.preventDefault();
    setAmount(amount + 1);
    props.getAmount(amount + 1);
  };

  return (
    <div className={classes.orderChangeContaine}>
      <button onClick={decClickHandler} className={classes.decBtn}>
        -
      </button>
      <p className={classes.amount}>{amount}</p>
      <button onClick={incClickHandler} className={classes.incBtn}>
        +
      </button>
    </div>
  );
};

export default OrderChange;
