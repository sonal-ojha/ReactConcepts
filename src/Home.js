import React from 'react';

import Counter from './Counter';
import TextHoverCounter from './TextHoverCount';

class Home extends React.Component {
  render() {
    return (
      <div>
        {/* <CounterWithHooks /> */}
        <h2>Counter using HOC</h2>
        <hr ></hr>
        <h3>Button Counter</h3>
        <Counter />
        <hr />
        <TextHoverCounter />
      </div>
    )
  }
}

export default Home;