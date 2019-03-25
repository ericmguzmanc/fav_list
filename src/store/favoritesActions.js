import { FAV_NAME, UNDO_FAV_NAME } from './favoriteActions.constants';

export function dispatchFavName(payload) {
  return dispatch => 
    dispatch({
      type: FAV_NAME,
      payload: payload
    });
  
}

export function dispatchUndoFavName(payload) {
  return dispatch => 
    dispatch({
      type: UNDO_FAV_NAME,
      payload: payload
    });
}
