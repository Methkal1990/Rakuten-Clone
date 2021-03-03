import { shallow } from 'enzyme';
import React from 'react';

import HomePage from './HomePage.jsx';
import CategoriesContainer from '../../components/CategoriesContainer/CategoriesContainer.jsx';

it('renders a CategoriesContainer component', () => {
  const wrapped = shallow(<HomePage />);

  expect(wrapped.find(CategoriesContainer).length).toEqual(1);
});
