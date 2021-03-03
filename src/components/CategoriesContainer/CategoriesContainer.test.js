import React from 'react';
import { mount } from 'enzyme';

import CategoriesContainer from './CategoriesContainer.jsx';
import Slider from '../Slider/Slider.jsx';
import Root from '../../Root.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import { initialState } from '../../mock_data';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root initialState={initialState}>
      <CategoriesContainer />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('renders number of sliders equal to categories/MoviesLists', () => {
  expect(wrapped.find(Slider).length).toEqual(2);
});

it('shows an ErrorMessage component in case of error', () => {
  expect(wrapped.find(ErrorMessage).length).toEqual(1);
});
