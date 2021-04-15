import { combineReducers } from 'redux';
import { gamesReducer } from 'reducers/gamesReducer';
import { detailsReducer } from 'reducers/detailsReducer';
export default combineReducers({
  games: gamesReducer,
  details: detailsReducer,
});
