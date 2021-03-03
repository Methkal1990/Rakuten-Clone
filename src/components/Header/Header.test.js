import { mount } from 'enzyme';
import React from 'react';
import { Router, Link } from 'react-router-dom';

import Header from './Header.jsx';
import Root from '../../Root.jsx';
import history from '../../history';

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Root>
      <Router history={history}>
        <Header />
      </Router>
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('renders a NAV element, 3 ULs, 1 Link/Logo', () => {
  expect(wrapped.find('nav').length).toEqual(1);
  expect(wrapped.find('ul').length).toEqual(3);
  expect(wrapped.find(Link).length).toEqual(1)
});
