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
      message: 'Welcome to the react classes',
    }
  }

  updateText = () => {
    this.setState({
      message: 'React class'
    })
  }

  render() {
    return(
      <div>
        {this.props.headertext}
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