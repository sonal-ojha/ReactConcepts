import React from 'react';

class AvatarCount extends React.Component {
  render() {
    return (
      <div>
        {this.props.totalCount}
      </div>
    )
  }
}

export default AvatarCount;