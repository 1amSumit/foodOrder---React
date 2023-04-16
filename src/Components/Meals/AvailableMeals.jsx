import React from "react";
import Meals from "./Meals";
import MealsCard from "./MealsCard";
import MealList from "./MealList";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    path: "../../../src/assets/img1.jpg",
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    path: "../../../src/assets/img2.jpg",
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    path: "../../../src/assets/img3.jpg",
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    path: "../../../src/assets/img4.jpg",
  },
  {
    id: "m5",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    path: "../../../src/assets/img4.jpg",
  },
  {
    id: "m6",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    path: "../../../src/assets/img4.jpg",
  },
  {
    id: "m7",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    path: "../../../src/assets/img4.jpg",
  },
];

const AvailableMeals = () => {
  return DUMMY_MEALS.map((meal) => (
    <MealsCard key={meal.id}>
      <MealList
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        path={meal.path}
      />
    </MealsCard>
  ));
};

export default AvailableMeals;
