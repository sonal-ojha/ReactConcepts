import React from 'react';
import Home from './components/Home';
import './App.css';

const AVATAR_URL = "https://api.github.com/search/users?q=ab";

class App extends React.Component {
  state = {
    totalCount: '',
    avatarData: [],
    isFetching: false,
  }

  componentDidMount() {
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
      <div className="App">
        <Home isFetching={isFetching} avatarData={avatarData} totalCount={totalCount} />
      </div>
    );
  }
}
export default App;