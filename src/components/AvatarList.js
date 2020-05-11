import React from 'react';
import Avatar from './Avatar';
import AvatarCount from './AvatarCount';

function AvatarList(props) {
  const { avatarDataList, totalCount } = props;
  return (
    <div>
      <AvatarCount totalCount={totalCount} />
      {/* Display All Avatars in the Array */}
      {avatarDataList && avatarDataList.length > 0 && avatarDataList.map((avatar, index) => (
        <div style={{ display: 'flex', justifyContent: 'space-around' }} key={index}>
          <Avatar avatarDetails={avatar} />
        </div>
      ))}
    </div>
  )
}

export default AvatarList;