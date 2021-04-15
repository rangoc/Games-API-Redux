import { FETCH_POPULAR_GAMES } from 'actions/types';

const initState = {
  popular: [],
  upcoming: [],
  newGames: [],
  searched: [],
};

export const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_GAMES:
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    default:
      return { ...state };
  }
};
