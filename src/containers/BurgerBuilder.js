import React, { Component } from 'react'
import Burger from '../components/Burger/Burger'
import BuildControls from '../components/Burger/BuildControls'
import Modal from '../components/UI/Modal'
import OrderSummary from '../components/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}
class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  }

  updatePurchaseState = () => {
    const ingredients = {
      ...this.state.ingredients
    }
    const sum = Object.values(ingredients)
      .reduce((sum, number) => sum + number, 0) > 0
    this.setState({ purchasable: sum })

  }

  addIngredientHandler = (type) => {
    this.setState((prevState) => {
      return {
        ingredients: {
          ...prevState.ingredients,
          [type]: prevState.ingredients[type] + 1
        },
        totalPrice: prevState.totalPrice + INGREDIENT_PRICES[type]
      }
    }, this.updatePurchaseState)
  }

  removeIngredientHandler = (type) => {
    this.setState((prevState) => {
      if (prevState.ingredients[type] > 0) {
        return {
          ingredients: {
            ...prevState.ingredients,
            [type]: prevState.ingredients[type] - 1
          },
          totalPrice: prevState.totalPrice - INGREDIENT_PRICES[type]
        }
      }
    }, this.updatePurchaseState);
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true })
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    alert('You continue!')
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (<>
      <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
        <OrderSummary ingredients={this.state.ingredients}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler} 
          price={this.state.totalPrice}/>
      </Modal>
      <Burger ingredients={this.state.ingredients} />
      <BuildControls
        ingredientAdded={this.addIngredientHandler}
        ingredientRemoved={this.removeIngredientHandler}
        disabled={disabledInfo}
        price={this.state.totalPrice}
        purchasable={this.state.purchasable}
        ordered={this.purchaseHandler} />
    </>)
  }
}

export default BurgerBuilder