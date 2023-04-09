import React from "react";
import classes from "./Images.module.css";

const Images = (props) => {
  return (
    <>
      <img
        className={classes.img}
        src={`../../../src/assets/img${props.count}.jpg`}
      />
    </>
  );
};

export default Images;
