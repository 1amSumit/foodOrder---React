import React from "react";
import classes from "./Checkout.module.css";
import useInput from "../../hooks/useInput";

const Checkout = (props) => {
  const enteredNameInput = useInput((value) => value.trim() !== "");
  const enteredStreetInput = useInput((value) => value.trim() !== "");
  const enteredCityInput = useInput((value) => value.trim() !== "");
  const enteredPostalInput = useInput((value) => value.length < 7);

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
    console.log(
      enteredNameInput.value,
      enteredStreetInput.value,
      enteredCityInput.value,
      enteredPostalInput.value
    );
    enteredNameInput.reset;
    enteredStreetInput.reset;
    enteredCityInput.reset;
    enteredPostalInput.reset;
  };

  const nameError = enteredNameInput.hasError ? "control invalid " : "control";
  const streetError = enteredStreetInput.hasError
    ? "control invalid "
    : "control";
  const postalError = enteredPostalInput.hasError
    ? "control invalid "
    : "control";
  const cityError = enteredCityInput.hasError ? "control invalid " : "control";

  return (
    <form action="" onSubmit={orderConfirmHandler}>
      <div className={classes[nameError]}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={enteredNameInput.inputChangeHandler}
          onBlur={enteredNameInput.inputBlurhandler}
          value={enteredNameInput.value}
        />
        {/* {enteredNameInput.hasError && <p>Please Provide your Name</p>} */}
      </div>
      <div className={classes[streetError]}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={enteredStreetInput.inputChangeHandler}
          onBlur={enteredStreetInput.inputBlurhandler}
          value={enteredStreetInput.value}
        />
      </div>
      <div className={classes[postalError]}>
        <label htmlFor="postal">Postal</label>
        <input
          type="text"
          id="postal"
          onChange={enteredPostalInput.inputChangeHandler}
          onBlur={enteredPostalInput.inputBlurhandler}
          value={enteredPostalInput.value}
        />
      </div>
      <div className={classes[cityError]}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={enteredCityInput.inputChangeHandler}
          onBlur={enteredCityInput.inputBlurhandler}
          value={enteredCityInput.value}
        />
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
