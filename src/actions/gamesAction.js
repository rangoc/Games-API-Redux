import axios from 'axios';
import { popularGamesURL, upcomingGamesURL, newGamesURL } from '../api';
import { FETCH_POPULAR_GAMES } from './types';
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
