import React, { Fragment } from 'react';

function Avatar({ avatarDetails }) {
  const { avatar_url, score } = avatarDetails;
  return (
    <Fragment>
      <div>
        <img src={avatar_url} alt="avatar Image" width="100" height="100" />
      </div>
      <div>
        Score : {score}
      </div>
    </Fragment>
  )
}

export default Avatar;