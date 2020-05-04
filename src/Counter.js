import React from 'react';

class Counter extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 0,
  //   };
  //   this.handleIncrease = this.handleIncrease.bind(this);
  // }

  state = {
    count: 0,
    personDetails: [
      {
        name: 'John',
        age: 24,
        hasPan: true,
        id: 'dfghjk566',
      },
      {
        name: 'Peter',
        age: 26,
        hasPan: true,
        id: '89jk566',
      },
      {
        name: 'Dolly',
        age: 29,
        hasPan: false,
        id: '67890ikmn',
      }
    ],
    name: '',
  };

  handleIncrease = () => {
    // Increase the count value by 1
    this.setState({
      count: this.state.count + 1,
    });
  }

  handleIncrease() {
    console.log('This in Function Increase = ', this);
    this.setState({
      count: this.state.count + 1,
    });
  }

  handleDecrease = () => {
    // Decrease the count value by 1
    this.setState({
      count: this.state.count - 1,
    });
  }

  handleName = (event) => {
    // event.target.value
    console.log('Value = ', event.target.value);
    this.setState({
      name: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleIncrease}>
          Increase
        </button>
        {this.state.count}
        <button onClick={this.handleDecrease}>
          Decrease
        </button>
        <hr/>
        {/* Display Array of Elements */}
        <div>
          {this.state.personDetails.map((person, index) => (
            <div key={person.id}>
              {person.name}
              <div>
                {person.age}
              </div>
            </div>
          ))}
        </div>
        <hr ></hr>
        {/* Controlled vs Uncontrolled Elements */}
        <input
          type="text"
          placeholder="Your name..."
          onChange={this.handleName}
          value={this.state.name}
        />
      </div>
    )
  }
}

export default Counter;