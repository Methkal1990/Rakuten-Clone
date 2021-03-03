import { shallow } from 'enzyme';
import React from 'react'

import MoviePage from './MoviePage.jsx'
import MovieDetails from '../../components/MovieDetails/MovieDetails.jsx'

it('renders a MovieDetails component', () => {
  const wrapped = shallow(<MoviePage />);

  expect(wrapped.find(MovieDetails).length).toEqual(1);
});
