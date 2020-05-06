import React, { createContext } from 'react';
import AvatarList from './AvatarList';
import Header from './Header';

import CounterWithHooks from './CounterWithHooks';

import ErrorBoundary from './ErrorBoundary';
import MyContext from './MyContext';

const AVATAR_URL = "https://api.github.com/search/users?q=ab";

class Home extends React.Component {
  constructor(props) {
    super(props);
    // craete a Ref for any element
    this.inputRef = React.createRef();
  }

  state = {
    totalCount: '',
    avatarData: [],
    isFetching: false,
  }

  componentDidMount() {
    // Focus my Input element here
    this.inputRef.current.focus();
    this.setState({ isFetching: true });
    fetch(AVATAR_URL).then(response => response.json())
      .then(avatars => {
        console.log('avatars = ', avatars);
        this.setState({
          isFetching: false,
          avatarData: avatars.items,
          totalCount: avatars.total_count,
        })
      })
      .catch(err => {
        this.setState({ isFetching: false });
        console.log('Error in Fetching data...', err);
      })
  }

  render() {
    const { isFetching, avatarData, totalCount } = this.state;
    return (
      <div>
        {/* <CounterWithHooks /> */}
        {/* Reference Concept in React */}
        <input
          type="text"
          style={{ width: "200px", height: '30px', margin: '20px' }}
          placeholder="Search..."
          ref={this.inputRef} // assign the reference to element
        />
        <ErrorBoundary>
          <Header>
            <h2>Day 3 Of React Concepts </h2>
            <h3>Children Elemnsts</h3>
          </Header>
        </ErrorBoundary>
        {isFetching && <div>Loading....</div>}
        {/* <AvatarList avatarDataList={avatarData} totalCount={totalCount} /> */}
        <ErrorBoundary>
          <MyContext.Provider value={totalCount}>
            <AvatarList avatarDataList={avatarData} />
          </MyContext.Provider>
        </ErrorBoundary>
      </div>
    )
  }
}

export default Home;