// Action
function allAvatars(payload) {
  return {
    type: 'RECEIVED_AVATAR_DATA',
    payload
  }
}

// Action Creator
const AVATAR_URL = "https://api.github.com/search/users?q=ab";

export const getAllAvatarsData = () => {
  return (dispatch => {
    // Fetch API here
    fetch(AVATAR_URL).then(response => response.json())
      .then(avatars => dispatch(allAvatars(avatars)))
      .catch(err => {
        console.log('Error in Fetching data...', err);
      })
  })
}