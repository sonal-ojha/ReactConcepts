import React from 'react';
import AvatarList from './AvatarList';
import Header from './Header';

import ErrorBoundary from './ErrorBoundary';

function Home(props) {
  const { isFetching, avatarData, totalCount } = props;
  return (
    <div>
      <ErrorBoundary>
        <Header>
          <h2>Using Redux concept to display Avatars</h2>
        </Header>
      </ErrorBoundary>
      {isFetching && <div>Loading....</div>}
      <AvatarList avatarDataList={avatarData} totalCount={totalCount} />
    </div>
  )
}

export default Home;