import axios from 'axios';
import { popularGamesURL } from '../api';
import { FETCH_POPULAR_GAMES } from './types';
export const fetchGames = () => async (dispatch) => {
  // FETCH AXIOS
  const { data } = await axios.get(popularGamesURL());
  dispatch({ type: FETCH_POPULAR_GAMES, payload: data });
};
