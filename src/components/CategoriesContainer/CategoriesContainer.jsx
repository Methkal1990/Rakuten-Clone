import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchMoviesLists } from '../../actions';
import Slider from '../Slider/Slider.jsx';
import './CategoriesContainer.css';

function CategoriesContainer({ fetchMoviesLists, moviesLists }) {
  useEffect(() => {
    fetchMoviesLists();
  }, []);

  return (
    <div className='categoriesContainer'>
      {moviesLists.length &&
        moviesLists.map((list) => {
          const { data: movies } = list.contents;
          const renderContent = movies.length ? (
            <Slider
              movies={movies}
              key={list.id}
              sliderTitle={list.short_name}
            />
          ) : null;
          return renderContent;
        })}
    </div>
  );
}

const mapStateToProps = (state) => ({ moviesLists: state.movies.moviesLists });

export default connect(mapStateToProps, { fetchMoviesLists })(CategoriesContainer);
