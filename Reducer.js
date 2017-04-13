/**
 * Created by cole on 2017-04-03.
 */

const initialState = {
  notifications: []
};

export default function GrowlReducer(state = initialState, action) {

  if (action.type === "GROWL_ADD") {
    return {
      ...state,
      notifications: state.notifications.concat(action.payload)
    }
  }

  if (action.type === "GROWL_REMOVE") {
    let index = state.notifications.findIndex(entry => {
      return entry.id === action.payload;
    });

    if (index > -1) {
      return {
        ...state,
        notifications: [
          ...state.notifications.slice(0, index),
          ...state.notifications.slice(index + 1)
        ]
      }
    }
  }

  return state;
}