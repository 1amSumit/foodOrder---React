import React, { useState, useRef, useContext } from "react";
import classes from "./OrderChange.module.css";
import CartContext from "../../store/cart-context";

const OrderChange = (props) => {
  const cartCtx = useContext(CartContext);
  const amountRef = useRef();
  const [count, setCount] = useState(1);

  const decClickHandler = (e) => {
    const enteredAmount = amountRef.current.value;
    const amountNumber = +enteredAmount;
    e.preventDefault();
    setCount(count - 1);
    props.getClickedvalue(count);
    props.getAmount(amountNumber);
  };

  const incClickHandler = (e) => {
    const enteredAmount = amountRef.current.value;
    const amountNumber = +enteredAmount;
    e.preventDefault();
    props.getAmount(amountNumber + 1);
    setCount(count + 1);
  };

  return (
    <div className={classes.orderChangeContaine}>
      <button onClick={decClickHandler} className={classes.decBtn}>
        -
      </button>
      <input ref={amountRef} className={classes.amount} type="number" />
      <p className={classes.amountShow}>{count}</p>
      <button onClick={incClickHandler} className={classes.incBtn}>
        +
      </button>
    </div>
  );
};

export default OrderChange;
