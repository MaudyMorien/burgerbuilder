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

export default BuildControl