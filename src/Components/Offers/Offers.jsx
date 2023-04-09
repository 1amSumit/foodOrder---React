import React, { useState } from "react";
import classes from "./Offers.module.css";
import ArrowButton from "../Buttons/ArrowButton";

import Images from "./Images";

const Offers = () => {
  const [count, setCount] = useState(1);
  const leftArrowHandler = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(5);
    }
  };
  const rightArrowHandler = () => {
    if (count >= 1 && count < 5) {
      setCount(count + 1);
    } else {
      setCount(1);
    }
  };

  return (
    <div className={classes.imageContainer}>
      <ArrowButton type="left" onClick={leftArrowHandler} />
      <Images count={count} />
      <ArrowButton type="right" onClick={rightArrowHandler} />
    </div>
  );
};

export default Offers;
