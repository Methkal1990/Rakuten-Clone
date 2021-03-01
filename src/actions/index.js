import rakuten from '../api/rakuten.js';
import {
  FETCH_MOVIES_LISTS,
  FETCH_SINGLE_MOVIE,
  STREAM_VIDEO,
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
  const response = await Promise.all(promises);

  dispatch({
    type: FETCH_MOVIES_LISTS,
    payload: response,
  });
};

export const fetchSingleMovie = (id) => async (dispatch, getState) => {
  const response = await rakuten.fetchSingleMovie(id);
  dispatch({
    type: FETCH_SINGLE_MOVIE,
    payload: response,
  });
};

export const streamVideo = (id) => async (dispatch, getState) => {
  const response = await rakuten.streamVideo(id);

  dispatch({
    type: STREAM_VIDEO,
    payload: response,
  });
};
