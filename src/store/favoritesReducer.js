import { FAV_NAME, UNDO_FAV_NAME } from './favoriteActions.constants';

export function favoritesReducer(
  state = {
    favorites: []
  },
  action
) {
  switch(action.type) {
    case FAV_NAME:
      return Object.assign({}, state, {
        favorites: [ ...state.favorites, action.payload ]
      });
    case UNDO_FAV_NAME:
      const filteredFavorites = state.favorites.filter(word => word != action.payload);
      return Object.assign({}, state, {
        favorites: [ ...filteredFavorites ]
      });
    default: 
      return state;
  }
}