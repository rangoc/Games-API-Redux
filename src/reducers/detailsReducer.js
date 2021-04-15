import { FETCH_GAME_DETAILS, LOADING_DETAILS } from 'actions/types';

const initialState = {
  game: { platforms: [] },
  screenshots: { results: [] },
  isLoading: true,
};
export const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAME_DETAILS:
      return {
        ...state,
        game: action.payload.game,
        screenshots: action.payload.screenshots,
        isLoading: false,
      };
    case LOADING_DETAILS:
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};
