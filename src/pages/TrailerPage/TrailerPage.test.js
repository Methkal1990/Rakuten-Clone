import { shallow } from 'enzyme';
import React from 'react'

import TrailerPage from './TrailerPage.jsx'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.jsx';

it('renders a VideoPlayer component', () => {
  const wrapped = shallow(<TrailerPage />);

  expect(wrapped.find(VideoPlayer).length).toEqual(1);
});
