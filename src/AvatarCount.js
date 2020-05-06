import React from 'react';
import MyContext from './MyContext';

class AvatarCount extends React.Component {
  render() {
    return (
      <div>
        {/* {this.props.totalCount} */}
        <MyContext.Consumer>
          {countOfAvatars => (countOfAvatars)}
        </MyContext.Consumer>
      </div>
    )
  }
}

AvatarCount.contextType = MyContext;

export default AvatarCount;