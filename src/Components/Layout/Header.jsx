import React, { useContext } from "react";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.headerLogo}>
          <h1>Omifood</h1>
        </div>
        <div className={classes.buttonContainer}>
          <HeaderButton onClick={props.onShowCart} title="cart" />
          <HeaderButton title="sign in" />
        </div>

        <h1 className={classes.headingPrimary}>Order your favourite food!</h1>
      </header>
    </>
  );
};

export default Header;
