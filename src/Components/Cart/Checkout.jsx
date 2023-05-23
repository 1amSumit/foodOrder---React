import React from "react";
import classes from "./Checkout.module.css";
import useInput from "../../hooks/useInput";

const Checkout = (props) => {
  const enteredNameInput = useInput((value) => value.trim() !== "");
  const enteredStreetInput = useInput((value) => value.trim() !== "");
  const enteredCityInput = useInput((value) => value.trim() !== "");
  const enteredPostalInput = useInput(
    (value) => value.trim().length < 7 && value.trim() !== ""
  );

  let formIsValid = false;

  if (
    enteredNameInput.value &&
    enteredStreetInput.value &&
    enteredCityInput.value &&
    enteredPostalInput
  ) {
    formIsValid = true;
  }

  const orderConfirmHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onSubmit({
      name: enteredNameInput.value,
      street: enteredStreetInput.value,
      city: enteredCityInput.value,
      postal: enteredPostalInput.value,
    });

    enteredNameInput.reset();
    enteredStreetInput.reset();
    enteredCityInput.reset();
    enteredPostalInput.reset();
  };

  return (
    <form className={classes.form} action="#" onSubmit={orderConfirmHandler}>
      <div
        className={`${classes.control} ${
          enteredNameInput.hasError ? classes.invalid : ""
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={enteredNameInput.inputChangeHandler}
          onBlur={enteredNameInput.inputBlurhandler}
          value={enteredNameInput.value}
        />
        {enteredNameInput.hasError && <p>Please Provide your Name</p>}
      </div>
      <div
        className={`${classes.control} ${
          enteredStreetInput.hasError ? classes.invalid : ""
        }`}
      >
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={enteredStreetInput.inputChangeHandler}
          onBlur={enteredStreetInput.inputBlurhandler}
          value={enteredStreetInput.value}
        />
        {enteredStreetInput.hasError && (
          <p>Please Provide your Street Address</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          enteredPostalInput.hasError ? classes.invalid : ""
        }`}
      >
        <label htmlFor="postal">Postal</label>
        <input
          type="text"
          id="postal"
          onChange={enteredPostalInput.inputChangeHandler}
          onBlur={enteredPostalInput.inputBlurhandler}
          value={enteredPostalInput.value}
        />
        {enteredPostalInput.hasError && (
          <p>Please Provide Correct Postal Code</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          enteredCityInput.hasError ? classes.invalid : ""
        }`}
      >
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={enteredCityInput.inputChangeHandler}
          onBlur={enteredCityInput.inputBlurhandler}
          value={enteredCityInput.value}
        />
        {enteredCityInput.hasError && <p>Please Provide your City Name</p>}
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCancel} type="button">
          Cancel
        </button>
        <button disabled={!formIsValid} className={classes.submit}>
          Checkout
        </button>
      </div>
    </form>
  );
};

export default Checkout;
