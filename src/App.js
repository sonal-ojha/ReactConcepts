import React from 'react';
import Home from './components/Home';
import './App.css';

import { connect } from 'react-redux';

// Import action creators
import { getAllAvatarsData } from './actions/getAvatars';

class App extends React.Component {

  componentDidMount() {
    // fetch data using Redux
    const { fetchAvatarData } = this.props;
    fetchAvatarData();
  }

  render() {
    const { avatarItems } = this.props;
    return (
      <div className="App">
        <Home isFetching={false} avatarData={avatarItems} totalCount="0" />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  avatarItems: store.avatarData.avatarDetails,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAvatarData: () => dispatch(getAllAvatarsData()), // dispatching an Action
})

export default connect(mapStoreToProps, mapDispatchToProps)(App);