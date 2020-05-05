import React from 'react';
import Input from './Input';

class Form extends React.Component {
  state = {
    firstName: '',
  };

  handleInputValues = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  }

  render() {
    const { firstName } = this.state;
    return (
      <div>
        <h2>State Uplift In Form Component</h2>
        <Input myName={firstName} handleInputChange={this.handleInputValues} />
      </div>
    )
  }
}

export default Form;