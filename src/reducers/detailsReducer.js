import { FETCH_GAME_DETAILS } from 'actions/types';

const initialState = {
  game: {},
  screenshots: {},
};
export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAME_DETAILS:
      return {
        ...state,
        game: action.payload.game,
        screenshots: action.payload.screenshots,
      };
    default:
      return { ...state };
  }
};
