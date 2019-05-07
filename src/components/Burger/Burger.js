import React from 'react'
import BurgerIngredient from './BurgerIngredient'
import './Burger.css'

const RenderBurgerIngredients = props =>
  props.cart.map((ingredient, key) => (
    <BurgerIngredient key={key} type={ingredient.type} />
  ));

const Burger = props => {
  console.log(props)
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
        {props.cart.length !== 0 && <RenderBurgerIngredients {...props} />}
        {props.cart.length === 0 && <p>Make your ideal burger with a maximum of 10 ingredients!</p>}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default Burger