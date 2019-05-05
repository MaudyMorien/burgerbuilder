import React, { Component } from 'react'
import Burger from '../components/Burger/Burger'
import BuildControls from './BuildControls'

import Modal from '../components/UI/Modal'
import OrderSummary from '../components/OrderSummary/OrderSummary'

import ingredients from '../ingredients' // this is our database result
import { unstyle } from 'ansi-colors';
class BurgerBuilder extends Component {
  state = {
    startPrice: 4,
    ingredients,
    cart: [],
    purchasing: false
  }

  getTotal = () => 
    (
      this.state.cart.reduce((sum, ingredient) =>
        sum + ingredient.price
      , 0) + this.state.startPrice
    ).toFixed(2)
  

  isPurchaseable = () =>
    this.state.cart.length > 0


  onCheckout = accepted => {
    if(accepted){
      return alert('accepted')
    }

    alert('declined')
  }

  onIngredientChange = (id, amount) => {
    let cart = [...this.state.cart] // firt copy the state!

    if(amount > 0){
      // Add item to cart
      // A todo.. add multiple items   ...      ... ->    =)
      // I am curious to your solution
      cart.push(
        this.state.ingredients.find(
          ingredient => ingredient.id === id
        )
      )
    }

    if(amount < 0){
      // Remove last item from cart matching the ingredient id
      for(const key in cart.reverse()){ // reverse the shopping list and loop over it
        if(cart[key].id === id){ // if matching id
          delete cart[key] // delete value from array
          if(++amount === 0){ // amount is negative, so we need to add BUT AFTER comparison. Flipping the ++ operator before or after position determins that
            cart = cart.filter(item => item).reverse() // remove unused indexes from array, and reverse it again
            break; // break the for loop (this is 1 reason why for loops are faster and more flexible)
          }
        }
      }
    }

    this.setState({
      ...this.state,
      cart
    })
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true })
  }

  render() {
    console.log(this.state)
    return (
      <>
        <Modal show={this.state.purchasing} onCheckoutFn={this.onCheckout}>
          <OrderSummary 
            ingredients={this.ingredient}
            onCheckoutFn={this.state.onCheckout}
            price={this.getTotal()}
            cart={this.state.cart}
          />
        </Modal>
        {<Burger cart={this.state.cart} />}
        <BuildControls
          ingredients={this.state.ingredients}
          onChangeFn={this.onIngredientChange}
          price={this.getTotal()}
          purchasable={this.isPurchaseable()}
          checkout={this.onCheckout}
          cart={this.state.cart}
        />
      </>
    )
  }
}

export default BurgerBuilder