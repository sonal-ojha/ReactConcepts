import React from 'react';

// Stateful/ Container component
class Counter extends React.Component {

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
    // this.setState({
    //   count: this.state.count + 1,
    // });
    // setState using callback functional format
    this.setState((prevState) => {
      // 0 
      // 0 + 1 // return new value
      const newCountVal = prevState.count + 1;
      return { count: newCountVal }; //**NOTE: return always like an object
    });
  }

  handleDecrease = () => {
    // Decrease the count value by 1
    this.setState({
      count: this.state.count - 1,
    });
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    const { count, personDetails, name } = this.state;
    return (
      <div>
        <h2>Counter Example</h2>
        <button onClick={this.handleIncrease}>
          Increase
        </button>
        {/* {this.state.count} */}
        {/* using destructure concept */}
        {count}
        <button onClick={this.handleDecrease}>
          Decrease
        </button>
        <hr/>
        {/* Display Array of Elements */}
        <div>
          <h2>Display items from Array of Objects</h2>
          {personDetails.map((person, index) => (
            <div key={person.id} style={{ display: 'flex', justifyContent: 'space-around' }}>
              {person.name}
              <div style={{ marginLeft: '20px' }}>
                {person.age}
              </div>
            </div>
          ))}
        </div>
        <hr ></hr>
        {/* Controlled vs Uncontrolled Elements */}
        <h2>Controlled Input Component</h2>
        <input
          type="text"
          placeholder="Your name..."
          onChange={this.handleName}
          value={name}
        />
        <hr />
      </div>
    )
  }
}

export default Counter;