import React from 'react';

// HOC: 

const CounterHOC = (ComponentWithDecoration) => {
  class ActualComponent extends React.Component {

    state = {
      count: 0,
    };

    handleIncrease = () => {
      // Increase the count value by 1
      this.setState({
        count: this.state.count + 1,
      });
    }

    render() {
      const { count } = this.state;
      return (
        <div>
          <ComponentWithDecoration countHOC={count} handleIncreaseHOC={this.handleIncrease} />
        </div>
      )
    }
  }
  return ActualComponent;
}

export default CounterHOC;