const InitialState = {}; //Empty Object as initial

function updateAvatarData(state, action) {
  const { payload } = action;
  return {
    ...state,
    avatarDetails: payload.items,
    avatarCount: payload.total_count,
    isFetching: false,
  }
}

function requestAvatarData(state, action) {
  return {
    ...state,
    isFetching: true,
    avatarDetails: [],
    avatarCount: 0,
  }
}


export function avatarDetails(state = InitialState, action) {
  switch(action.type) {
    case 'RECEIVED_AVATAR_DATA': return updateAvatarData(state, action);
    case 'REQUEST_ALL_AVATARS': return requestAvatarData(state, action);
    default: return state; 
  }
}