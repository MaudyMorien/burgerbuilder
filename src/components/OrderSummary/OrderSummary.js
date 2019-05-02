import React from 'react'
import Button from '../UI/Button/Button'
 
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => {
            return <li key={key}>
                <span style={{ textTransform: 'capitalize' }}>
                    {key}
                </span>: {props.ingredients[key]}
            </li>
        })
    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: €{props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button clicked={props.purchaseContinued}>CONTINUE</Button>
        </>
    )
}

export default orderSummary