import { shallow } from 'enzyme';
import React from 'react';

import ErrorMessage from './ErrorMessage.jsx';

it('renders a P tag that shows an error text', () => {
  const wrapped = shallow(<ErrorMessage message='an error occured' />);

  expect(wrapped.find('p').length).toEqual(1);
  expect(wrapped.find('p').text()).toContain('an error occured');
});
