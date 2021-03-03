import moviesReducer from '../index.js';
import {
  FETCH_MOVIES_LISTS,
  FETCH_SINGLE_MOVIE,
} from '../../../actions/types.js';

it('handles actions of type FETCH_MOVIES_LISTS', () => {
  const action = {
    type: FETCH_MOVIES_LISTS,
    payload: [{ data: { data: 'Category1' } }, { data: { data: 'Category2' } }],
  };

  const newState = moviesReducer({ moviesLists: [] }, action);

  expect(newState).toEqual({ moviesLists: ['Category1', 'Category2'] });
});

it('handles actions of type FETCH_SINGLE_MOVIE', () => {
  const action = {
    type: FETCH_SINGLE_MOVIE,
    payload: { data: { data: 'movie1' } },
  };

  const newState = moviesReducer({ currentMovie: null }, action);

  expect(newState).toEqual({ currentMovie: 'movie1' });
});

it('handles action with unknown type', () => {
  const newState = moviesReducer({}, { type: 'LKAFDSJLKAFD' });

  expect(newState).toEqual({});
});
