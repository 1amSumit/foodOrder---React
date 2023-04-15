import React, { useState } from "react";
import classes from "./MealItemForm.module.css";
import OrderChange from "../UI/OrderChange";

const MealItemForm = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const onClickHandler = (e) => {
    e.preventDefault();
    setIsClicked(true);
  };

  const getAmount = (amount) => {
    if (amount <= 0) {
      setIsClicked(false);
    }
  };

  return (
    <form className={classes.form}>
      {isClicked ? (
        <OrderChange getAmount={getAmount} />
      ) : (
        <button onClick={onClickHandler} className={classes.addToCartBtn}>
          + Add
        </button>
      )}
    </form>
  );
};

export default MealItemForm;
