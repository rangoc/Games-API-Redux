import axios from 'axios';
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from '../api';
import {
  CLEAR_SEARCHED,
  FETCH_POPULAR_GAMES,
  FETCH_SEARCHED_GAMES,
} from './types';
export const fetchGames = () => async (dispatch) => {
  // FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newData = await axios.get(newGamesURL());
  dispatch({
    type: FETCH_POPULAR_GAMES,
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchedData = await axios.get(searchGameURL(game_name));
  dispatch({
    type: FETCH_SEARCHED_GAMES,
    payload: { searched: searchedData.data.result },
  });
};

export const clearSearch = () => {
  return { type: CLEAR_SEARCHED };
};
