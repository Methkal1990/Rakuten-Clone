import { shallow } from 'enzyme';
import React from 'react';

import Slider from './Slider.jsx';
import SliderItem from './SliderItem/SliderItem.jsx';

let wrapped;

beforeEach(() => {
  const movies = [
    { title: 'movie1', id: 1 },
    { title: 'movie2', id: 2 },
  ];
  wrapped = shallow(<Slider movies={movies} sliderTitle='for family' />);
});

it('renders SliderItem components equal to the movies in the state', () => {
  expect(wrapped.find(SliderItem).length).toEqual(2);
});

it('renders a title of a slider', () => {
  expect(wrapped.find('h2').text()).toContain('for family');
});
