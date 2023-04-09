import React from "react";
import classes from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";
import SignupIcon from "../Signup/SignupIcon";

const HeaderButton = (props) => {
  return (
    <button className={classes.btns}>
      {props.title === "cart" ? (
        <span className={classes.icon}>
          <CartIcon />
          <p className={classes.cartItems}>1</p>
        </span>
      ) : (
        <span className={classes.icon}>
          <SignupIcon />
        </span>
      )}
      {/* <span>{props.title}</span> */}
    </button>
  );
};

export default HeaderButton;
