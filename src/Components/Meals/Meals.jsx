import React from "react";
import AvailableMeals from "./AvailableMeals";
import classes from "./Meals.module.css";

const Meals = () => {
  return (
    <section>
      <h1>Most ordered!</h1>
      <main className={classes.sectionContent}>
        <AvailableMeals />
      </main>
    </section>
  );
};

export default Meals;
