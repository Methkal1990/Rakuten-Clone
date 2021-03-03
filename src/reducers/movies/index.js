import {
  FETCH_MOVIES_LISTS,
  FETCH_SINGLE_MOVIE,
  STREAM_VIDEO,
  HANDLE_ERROR,
  CLEAR_ERROR,
} from '../../actions/types.js';

const initialState = {
  moviesLists: [],
  currentMovie: null,
  streamVideo: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_LISTS:
      return {
        ...state,
        moviesLists: action.payload.map((res) => res.data.data),
      };
    case FETCH_SINGLE_MOVIE:
      return {
        ...state,
        currentMovie: action.payload.data.data,
      };
    case STREAM_VIDEO:
      return {
        ...state,
        streamVideo: action.payload.data.data,
      };
    case HANDLE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
