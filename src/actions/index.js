import rakuten from '../api/rakuten.js';
import {
  FETCH_MOVIES_LISTS,
  FETCH_SINGLE_MOVIE,
  STREAM_VIDEO,
  HANDLE_ERROR,
  CLEAR_ERROR,
} from './types.js';

export const fetchMoviesLists = () => async (dispatch, getState) => {
  const categories = [
    'populares-en-taquilla',
    'estrenos-para-toda-la-familia',
    'estrenos-imprescindibles-en-taquilla',
    'estrenos-espanoles',
    'si-te-perdiste',
    'especial-x-men',
    'nuestras-preferidas-de-la-semana',
  ];
  const promises = [];
  for (const cat of categories) {
    promises.push(rakuten.fetchMoviesLists(cat));
  }
  try {
    const response = await Promise.all(promises);
    dispatch({
      type: FETCH_MOVIES_LISTS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: HANDLE_ERROR,
      payload: error.message,
    });
  }
};

export const fetchSingleMovie = (id) => async (dispatch, getState) => {
  try {
    const response = await rakuten.fetchSingleMovie(id);
    dispatch({
      type: FETCH_SINGLE_MOVIE,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: HANDLE_ERROR,
      payload: error.message,
    });
  }
};

export const streamVideo = (id) => async (dispatch, getState) => {
  try {
    const response = await rakuten.streamVideo(id);

    dispatch({
      type: STREAM_VIDEO,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: HANDLE_ERROR,
      payload: error.message,
    });
  }
};

export const clearError = () => ({ type: CLEAR_ERROR });
