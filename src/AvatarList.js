import React from 'react';
// import AvatarCount from './AvatarCount';
import Avatar from './Avatar';
import AvatarCount from './AvatarCount';

function AvatarList(props) {
  const { avatarDataList } = props;
  return (
    <div>
      {/* <AvatarCount totalCount={totalCount} /> */}
      <AvatarCount />
      {/* Display All Avatars in the Array */}
      {avatarDataList && avatarDataList.length > 0 && avatarDataList.map((avatar, index) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Avatar avatarDetails={avatar} key={index} />
        </div>
      ))}
    </div>
  )
}

export default AvatarList;