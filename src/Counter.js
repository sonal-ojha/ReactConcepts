import React from 'react';
import CounterHOC from './CounterHOC';

class Counter extends React.Component {
  render() {
    const { countHOC, handleIncreaseHOC } = this.props;
    return (
      <div>
        <h2>Counter Example</h2>
        <button onClick={handleIncreaseHOC}>
          Click Me
        </button>
        Clicked {countHOC} number of Times!!
      </div>
    )
  }
}

export default CounterHOC(Counter);