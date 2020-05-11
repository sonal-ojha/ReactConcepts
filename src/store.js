// create a Store
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Reducer
import { avatarDetails } from './reducers/updateAvatarDetails';

const AllReducers = combineReducers({
  avatarData: avatarDetails,
})

const store = createStore(AllReducers, composeWithDevTools(applyMiddleware(thunk)) );

export default store;