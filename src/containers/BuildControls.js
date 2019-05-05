import React, {Component} from 'react'
import BuildControl from '../components/Burger/BuildControl'

class BuildControls extends Component {
  isControlDisabled(id){
    return this.props.cart.filter(item => item.id === id).length <= 0
  }

  render(){
    const { onChangeFn, price, purchasable, checkout } = this.props;

    return (
      <div className='BuildControls'>
        <p>Total Price: <strong>€{price}</strong> </p>
        {this.props.ingredients.map(ingredient => (
          <BuildControl
            key={ingredient.id}
            onChangeFn={onChangeFn}
            disabled={this.isControlDisabled(ingredient.id)}
            {...ingredient} // deconstruct ingredient so its props are immidietly available
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


// import React from 'react'
// import './BuildControls.css'
// import BuildControl from './BuildControl'

// const controls = [
//     { label: 'Salad', type: 'salad' },
//     { label: 'Bacon', type: 'bacon' },
//     { label: 'Cheese', type: 'cheese' },
//     { label: 'Meat', type: 'meat' }
// ]

// const buildControls = (props) => (
//     <div className='BuildControls'>
//     <p>Total Price: <strong>€{props.price.toFixed(2)}</strong> </p>
//         {controls.map(control => (
//             <BuildControl
//                 key={control.label}
//                 label={control.label}
//                 added={() => props.ingredientAdded(control.type)}
//                 removed={() => props.ingredientRemoved(control.type)}
//                 disabled={props.disabled[control.type]} />
//         ))}
//         <button 
//         className='OrderButton'
//         disabled={!props.purchasable}
//         onClick={props.ordered}>CHECK OUT</button>
//     </div>
// )

// export default buildControls