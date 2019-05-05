import React from "react";
import Button from "../UI/Button";

// Text transform is not needed anymore
// The ingredient name is from the db, but a very very good find! :D
const RenderIngredientSummary = (props) =>
  props.cart.map((ingredient, index) => (
    <li key={index}>
      <span style={{ textTransform: "capitalize" }}>{}</span>:{" "}
      {ingredient.name}
    </li>
  )
)

const orderSummary = props => (
  <>
    <h3>Your Order</h3>
    <p>A delicious burger with:</p>
    <ul>
      <RenderIngredientSummary cart={props.cart} />
    </ul>
    <p>
      <strong>Total Price: €{props.price}</strong>
    </p>
    <p>Continue to Checkout?</p>
    <Button btnType="Danger" clicked={props.purchaseCancelled}>
      CANCEL
    </Button>
    <Button btnType="Success" clicked={props.purchaseContinued}>
      CONTINUE
    </Button>
  </>
);

export default orderSummary