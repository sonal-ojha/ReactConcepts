// Class Component
import React from 'react';

// State : can be Mutated
// Props:  Never Mutate them. cannot be changed

/* Text has to be displayed as Props */
/* this.props."Name passed as attribute from Parent component" */

class Header extends React.Component {
  constructor(props) {
    super(props);
    // initialize the state here
    this.state = {
      message: 'Welcome to the first class of react basics',
    }
  }
  // Component Life cycle Methods => available only in Class Components
  // Unsafe
  componentWillMount() {
    // You Dom is not yet Created
    console.log('Will Mount');
  }

  componentDidMount() {
    // DOM is ready - triggered only once
    // API calling
    console.log('Did Mount');
  }

  // Unsafe
  componentWillReceiveProps() {
    // Receive peops from its parent
  }

  // Unsafe
  componentWillUpdate() {
    // before updating the changes to DOM
  }

  componentDidUpdate() {
    // After updating the changes to DOM
    // API calls
    console.log('Did Update');
  }

  componentWillUnmount() {
    // Unmount your Component
  }

  updateText = () => {
    // this.state.message = "new text"; // Wrong way to update state
    this.setState({
      message: 'First Class Of React'
    })
  }

  render() {
    console.log('Render is Called...')
    return(
      <div>
        Example: {this.props.headertext}
        <div>
          {this.state.message}
        </div>
        <button onClick={this.updateText}>
          Change text
        </button>
      </div>
    )
  }
}

export default Header;