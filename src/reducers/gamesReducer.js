import { FETCH_POPULAR_GAMES } from 'actions/types';

const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

export const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_GAMES:
      return { ...state, popular: action.payload };
    default:
      return { ...state };
  }
};
