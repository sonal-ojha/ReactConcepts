import React from 'react';

function Input(props) {
  const { myName, handleInputChange } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="First Name of the user..."
        value={myName}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default Input;