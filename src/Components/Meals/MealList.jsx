import React, { useContext } from "react";
import classes from "./MealList.module.css";
import MealItemForm from "./MealItemForm";
import cartContext from "../../store/cart-context";

const MealList = (props) => {
  const cartCtx = useContext(cartContext);
  const addToCart = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      amount: amount,
    });
  };

  const removeItem = () => {
    cartCtx.removeItem(props.id);
  };

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
        <MealItemForm addToCart={addToCart} removeItem={removeItem} />
      </div>
    </div>
  );
};

export default MealList;
