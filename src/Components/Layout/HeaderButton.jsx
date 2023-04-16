import React, { useContext } from "react";
import classes from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";
import SignupIcon from "../Signup/SignupIcon";
import cartContext from "../../store/cart-context";

const HeaderButton = (props) => {
  const cartCtx = useContext(cartContext);
  const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
    // console.log(curNumber + item.amount, curNumber, item.amount);
    return curNumber + item.amount;
  }, 0);
  return (
    <button onClick={props.onClick} className={classes.btns}>
      {props.title === "cart" ? (
        <span className={classes.icon}>
          <CartIcon />
          <p className={classes.cartItems}>{numberOfItems}</p>
        </span>
      ) : (
        <span className={classes.icon}>
          <SignupIcon />
        </span>
      )}
    </button>
  );
};

export default HeaderButton;
