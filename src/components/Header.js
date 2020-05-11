import React from 'react';

function Header(props) {
  return (
    <div>
      All Avatars
      {/* Access all your Child elements and Render them */}
      {props.children}
    </div>
  )
}

export default Header;