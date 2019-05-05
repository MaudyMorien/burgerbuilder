import React from 'react'
import './BuildControl.css'


const BuildControl = props => {
  const { id, name, disabled, onChangeFn } = props;

  return (
    <div className="BuildControl">
      <div className="Label">{name}</div>
      <button
        className="Less"
        onClick={() => onChangeFn(id, -1)}
        disabled={disabled}
      >
        Less
      </button>
      <button className="More" onClick={() => onChangeFn(id, 1)}>
        More
      </button>
    </div>
  );
};

// const buildControl = (props) => (
//     <div className='BuildControl'>
//         <div className='Label'>
//             {props.label}
//         </div>
//         <button
//             className='Less'
//             onClick={props.removed}
//             disabled={props.disabled}>Less</button>
//         <button
//             className='More'
//             onClick={props.added}>More</button>
//     </div>
// )

export default BuildControl