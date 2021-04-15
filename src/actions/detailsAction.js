import axios from 'axios';
import { gameDetailsURL, gameScreenshotURL } from '../api';
import { FETCH_GAME_DETAILS, LOADING_DETAILS } from './types';
export const fetchGameDetails = (id) => async (dispatch) => {
  dispatch({ type: LOADING_DETAILS });

  const detailsData = await axios.get(gameDetailsURL(id));
  const screenshotData = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: FETCH_GAME_DETAILS,
    payload: {
      game: detailsData.data,
      screenshots: screenshotData.data,
    },
  });
};
