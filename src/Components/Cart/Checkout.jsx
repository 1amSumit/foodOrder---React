import React from "react";
import classes from "./Checkout.module.css";

const Checkout = () => {
  return (
    <form action="">
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal</label>
        <input type="number" id="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <button>Checkout</button>
      <button>Cancel</button>
    </form>
  );
};

export default Checkout;