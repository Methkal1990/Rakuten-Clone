import React from 'react';
import { useHistory } from 'react-router-dom';

import './SliderItem.css';

const SliderItem = ({ movie, width }) => {
  const image = movie.images.artwork
  const history = useHistory();
  return (
    <div
      className='slider-item'
      style={{ width: `${width}px` }}
      onClick={() => history.push(`/movie/${movie.id}`)}
    >
      <img className='slider-image' src={image} alt={movie.title} />
    </div>
  );
};

export default SliderItem;
