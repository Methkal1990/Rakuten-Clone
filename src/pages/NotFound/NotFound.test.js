import { shallow } from 'enzyme';
import React from 'react';

import NotFound from './NotFound.jsx';

it('renders a P tag with 404 not found text', () => {
  const wrapped = shallow(<NotFound />);

  expect(wrapped.find('p').text()).toEqual('404 Page Not Found');
});
