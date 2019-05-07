import React, {Component} from 'react'
import BuildControl from '../components/Burger/BuildControl'
import './BuildControls.css'
class BuildControls extends Component {
  isControlDisabled(id){
    return this.props.cart.filter(item => item.id === id).length <= 0
  }

  render(){
    const { onChangeFn, price, purchasable, checkout, ingredients } = this.props;

    return (
      <div className='BuildControls'>
        <p>Total Price: <strong>€{price}</strong> </p>
        {ingredients.map(ingredient => (
          <BuildControl
            key={ingredient.id}
            onChangeFn={onChangeFn}
            disabled={this.isControlDisabled(ingredient.id)}
            {...ingredient} // deconstruct ingredient so its props are immediately available
          />
        ))}
        <button 
          className='OrderButton'
          disabled={!purchasable}
          onClick={checkout}
        >
          CHECK OUT
        </button>
      </div>
    )
  }
}

export default BuildControls
