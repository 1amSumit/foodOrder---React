import React, { useState, useRef, useContext } from "react";
import classes from "./OrderChange.module.css";

const OrderChange = (props) => {
  const amountRef = useRef();
  const [count, setCount] = useState(1);

  // const decClickHandler = (e) => {
  //   const enteredAmount = amountRef.current.value;
  //   const amountNumber = +enteredAmount;
  //   e.preventDefault();
  //   setCount(count - 1);
  //   props.getClickedvalue(count);
  //   props.getAmount(amountNumber);
  // };

  // const incClickHandler = (e) => {
  //   const enteredAmount = amountRef.current.value;
  //   const amountNumber = +enteredAmount;
  //   e.preventDefault();
  //   props.getAmount(amountNumber + 1);
  //   setCount(count + 1);
  // };

  return (
    <div className={classes.orderChangeContaine}>
      {/* <button onClick={props.onRemove} className={classes.decBtn}>
        -
      </button>
      <input ref={amountRef} className={classes.amount} type="number" />
      <p className={classes.amountShow}>{count}</p>
      <button onClick={props.onAdd} className={classes.incBtn}>
        +
      </button> */}
      <button onClick={props.onRemove}>−</button>
      <button onClick={props.onAdd}>+</button>
    </div>
  );
};

export default OrderChange;
