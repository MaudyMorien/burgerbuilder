import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import './Burger.css'

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

export default burger