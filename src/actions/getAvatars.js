// Action
function allAvatars(payload) {
  return {
    type: 'RECEIVED_AVATAR_DATA',
    payload
  }
}

function requestAllAvatars() {
  return {
    type: 'REQUEST_ALL_AVATARS',
  }
}

// Action Creator
const AVATAR_URL = "https://api.github.com/search/users?q=ab";

export const getAllAvatarsData = () => {
  return (dispatch => {
    // Dispatch an Action to let the loading concept trigger
    dispatch(requestAllAvatars());
    // Fetch API here
    fetch(AVATAR_URL).then(response => response.json())
      .then(avatars => dispatch(allAvatars(avatars)))
      .catch(err => {
        console.log('Error in Fetching data...', err);
      })
  })
}