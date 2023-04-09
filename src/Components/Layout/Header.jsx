import React from "react";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Swiggy</h1>
        <div className={classes.buttonContainer}>
          <HeaderButton title="cart" />
          <HeaderButton title="sign in" />
        </div>
      </header>
    </>
  );
};

export default Header;
