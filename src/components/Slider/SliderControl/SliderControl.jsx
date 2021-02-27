import React from 'react';

import './SliderControl.css';

const SliderControl = ({ arrowDirection, onClick }) => {
  return (
    <div className={`slider-control ${arrowDirection}`}>
      <div className='slider-control-arrow' onClick={onClick}>
        {arrowDirection === 'right' ? '›' : '‹'}
      </div>
    </div>
  );
};

export default SliderControl;
