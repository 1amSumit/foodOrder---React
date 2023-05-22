import React, { useEffect, useState } from "react";
import Meals from "./Meals";
import MealsCard from "./MealsCard";
import MealList from "./MealList";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const fetchMeals = async () => {
      const data = await fetch(
        "https://food-order-6c4b6-default-rtdb.firebaseio.com/meals.json"
      );
      const res = await data.json();

      if (res.ok) {
        throw new Error("Something went wrong");
      }

      const loadedMeals = [];

      for (const meal in res) {
        loadedMeals.push({
          id: meal,
          name: res[meal].name,
          price: res[meal].price,
          description: res[meal].description,
          path: res[meal].path,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setHttpError(error.message);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className={classes["loading"]}>
        <p className={classes.loadingText}>Loading...</p>
      </div>
    );
  }

  if (httpError) {
    return (
      <div className={classes["loading"]}>
        <p className={classes.loadingText}>{httpError}</p>
      </div>
    );
  }

  return meals.map((meal, i) => (
    <MealsCard key={i}>
      <MealList
        id={i}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        path={meal.path}
      />
    </MealsCard>
  ));
};

export default AvailableMeals;
