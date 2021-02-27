import React from 'react';
import { useHistory } from 'react-router-dom';

import './SliderItem.css';

const SliderItem = ({ movie, width }) => {
  const history = useHistory();
  return (
    <div
      className='slider-item'
      style={{ width: `${width}%` }}
      onClick={() => history.push('/movie')}
    >
      <img className='slider-image' src={movie.image} alt={movie.title} />
    </div>
  );
};

export default SliderItem;
