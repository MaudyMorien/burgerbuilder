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
        {props.cart.length === 0 && <p>Make your ideal burger!</p>}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

// See the difference
const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredient => [...Array(props.ingredients[ingredient])]
            .map((_, index) => <BurgerIngredient key={ingredient + index} type={ingredient} />
            )
        )
        .reduce((array, element) => {
            return array.concat(element)
        }, [])
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Make your ideal burger!</p>
    }

    return (
        <div className='Burger'>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default Burger