/**
 * Created by cole on 2017-04-03.
 */


let count = 0;

export function removeGrowl(id) {
  return {
    type: "GROWL_REMOVE",
    payload: id
  }
}

export function addGrowl(message, type = "default", duration = 4000) {
  return dispatch => {
    let id = ++count;
    setTimeout(() => {
      dispatch(removeGrowl(id))
    }, duration);


    dispatch({
      type: "GROWL_ADD",
      payload: {
        id: id,
        type: type,
        message: message
      }
    })
  }
}
