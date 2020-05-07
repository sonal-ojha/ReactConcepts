import React from 'react';
import CounterHOC from './CounterHOC';

class TextHoverCounter extends React.Component {

  // state= {
  //   hoverCount : 0
  // };

  // handleHoverCount = () => {
  //   const { hoverCount } = this.state;
  //   this.setState({
  //     hoverCount: hoverCount + 1,
  //   });
  // }

  render() {
    // const { hoverCount } = this.state;
    const { countHOC, handleIncreaseHOC } = this.props;
    return(
      <div>
        <div onMouseOver={handleIncreaseHOC}>
          Please Hover over me!!
        </div>
        Hovered for {countHOC} times...
        {/* Hovered for {hoverCount} times... */}
      </div>
    )
  }
}

export default CounterHOC(TextHoverCounter);