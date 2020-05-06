import React, { useState, useEffect } from 'react';

function CounterWithHooks() {
// this.satate = {
//   count: 0
// }
  const [count, setCount] = useState(0); // Array destructure concept

  // implemented based on ComponentDidMount and DidUpdate life cycle methods
  // useEffect(() => {
  //   console.log('Effect Hook is triggered...')
  // }, [ count ]);

  const handleIncrease = () => {
    setCount(count + 1);
  }

  const handleDecrease = () => {
    setCount(count - 1);
  }
  return (
    <div>
      <h2>Counter Example using Hooks concept</h2>
      <div>
        <button onClick={handleIncrease} style={{ width: '100px', height: '30px', margin: '0px 20px' }}>
          Increase
        </button>
        {count}
        <button onClick={handleDecrease} style={{ width: '100px', height: '30px', margin: '0px 20px' }}>
          Decrease
        </button>
      </div>
    </div>
  )
}

export default CounterWithHooks;