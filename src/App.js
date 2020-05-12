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
    const { avatarItems, totalCount, isFetchingData } = this.props;
    return (
      <div className="App">
        <Home isFetching={isFetchingData} avatarData={avatarItems} totalCount={totalCount} />
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  avatarItems: store.avatarData.avatarDetails,
  totalCount: store.avatarData.avatarCount,
  isFetchingData: store.avatarData.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchAvatarData: () => dispatch(getAllAvatarsData()), // dispatching an Action
})

export default connect(mapStoreToProps, mapDispatchToProps)(App);