import React, { useContext, useState } from "react";
import classes from "./MealItemForm.module.css";
import OrderChange from "../UI/OrderChange";

const MealItemForm = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [amount, setAmount] = useState(1);

  //getting amount from order change Component
  const getAmount = (amount) => {
    setAmount(amount);
    props.addToCart(amount);
  };

  //  sending amount to MealList Component onSubmit handler
  const onClickHandler = (e) => {
    e.preventDefault();
    setIsClicked(true);
    props.addToCart(amount);
  };

  const getClick = (count) => {
    count <= 1 ? setIsClicked(false) : console.log("hello");
  };

  return (
    <form className={classes.form}>
      {isClicked ? (
        <OrderChange getAmount={getAmount} getClickedvalue={getClick} />
      ) : (
        <button onClick={onClickHandler} className={classes.addToCartBtn}>
          + Add
        </button>
      )}
    </form>
  );
};

export default MealItemForm;
