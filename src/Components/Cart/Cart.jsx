import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Model from "../UI/Model";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmitted, setDidSubmittied] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const hashItem = cartCtx.items.length > 0;

  const orderButtonClicked = (e) => {
    setIsCheckout(true);
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const postUserData = async (userData) => {
    setIsSubmitting(true);
    const res = await fetch(
      "https://food-order-6c4b6-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setIsSubmitting(false);
    setDidSubmittied(true);
    cartCtx.clearCart();

    if (!res.ok) {
      throw new Error("Something went wrong!");
    }
  };

  const onSubmitUserDataHandler = (userData) => {
    try {
      postUserData(userData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const checkOutModel = (
    <div className={classes.actions}>
      <button onClick={props.onHideCart} className={classes["button--alt"]}>
        Close
      </button>
      {hashItem && (
        <button onClick={orderButtonClicked} className={classes.button}>
          Order
        </button>
      )}
    </div>
  );

  const cartModelContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout
          onSubmit={onSubmitUserDataHandler}
          onCancel={props.onHideCart}
        />
      )}
      {!isCheckout && checkOutModel}
    </>
  );

  const isSubmittingModel = <p>Sending Ordered Data...</p>;
  const didSubmittingModel = (
    <>
      <p>Succefully Submitted Order!</p>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes.button}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Model onHideCart={props.onHideCart}>
      {!isSubmitting && !didSubmitted && cartModelContent}
      {isSubmitting && isSubmittingModel}
      {!isSubmitting && didSubmitted && didSubmittingModel}
    </Model>
  );
};

export default Cart;
