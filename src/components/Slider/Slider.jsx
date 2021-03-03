import React, { useRef, useState, useEffect } from 'react';

import './Slider.css';
import SliderItem from './SliderItem/SliderItem.jsx';

function Slider({ movies, sliderTitle }) {
  const [windowWidth, setwindowWidth] = useState(0);
  const [sliderWidth, setsliderWidth] = useState(0);
  const [translateX, settranslateX] = useState(0);
  const [toSlide, setToSlide] = useState(0);
  const [prevNextCounter, setPrevNextCounter] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setwindowWidth(window.innerWidth);
    setsliderWidth(movies.length * 200);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    setToSlide(Math.floor((sliderWidth - windowWidth) / 200) - toSlide);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth]);

  // handle window resize
  const handleWindowResize = (e) => {
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    ref.current.style.transform = `translateX(${translateX}px)`;
  }, [translateX]);

  const handleNext = () => {
    settranslateX(translateX - 230);
    setPrevNextCounter(prevNextCounter + 1);
  };

  const handlePrev = () => {
    settranslateX(translateX + 230);
    setPrevNextCounter(prevNextCounter - 1);
  };
  return (
    <div className='slider'>
      <h2 className='slider__title'>{sliderTitle}</h2>
      {prevNextCounter ? (
        <div className='slider__prev' onClick={handlePrev}>
          <i className='fa fa-chevron-left' aria-hidden='true'></i>
        </div>
      ) : null}

      <div className='slider__items' ref={ref}>
        {movies.map((mv) => (
          <SliderItem movie={mv} width={200} key={mv.id} />
        ))}
      </div>
      {prevNextCounter >= 0 && prevNextCounter < toSlide ? (
        <div className='slider__next' onClick={handleNext}>
          <i className='fa fa-chevron-right' aria-hidden='true'></i>
        </div>
      ) : null}
    </div>
  );
}

export default Slider;
