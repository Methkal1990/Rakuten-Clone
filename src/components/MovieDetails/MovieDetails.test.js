import { mount } from 'enzyme';
import React from 'react';
import { Router } from 'react-router-dom';

import MovieDetails from './MovieDetails.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import Root from '../../Root.jsx';
import history from '../../history.js';
import { initialState } from '../../mock_data';

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root initialState={initialState}>
      <Router history={history}>
        <MovieDetails />
      </Router>
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('renders H1 as a movie title', () => {
  expect(wrapped.find('h1').length).toEqual(1);
  expect(wrapped.find('h1').text()).toContain('matrix')
});

it('renders 4 fontawesome icons tag I', () => {
  expect(wrapped.find('i').length).toEqual(4);
});

it('renders an ErrorMessage in case of error', () => {
  expect(wrapped.find(ErrorMessage).length).toEqual(1);
});
