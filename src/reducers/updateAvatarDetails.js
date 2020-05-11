const InitialState = {}; //Empty Object as initial

function updateAvatarData(state, action) {
  const { payload } = action;
  return {
    ...state,
    avatarDetails: payload.items
  }
}


export function avatarDetails(state = InitialState, action) {
  switch(action.type) {
    case 'RECEIVED_AVATAR_DATA': return updateAvatarData(state, action);
    default: return state; 
  }
}