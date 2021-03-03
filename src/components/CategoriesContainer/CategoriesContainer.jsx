import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 

import { fetchMoviesLists } from '../../actions';
import Slider from '../Slider/Slider.jsx';
import './CategoriesContainer.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';

function CategoriesContainer({ fetchMoviesLists, moviesLists, error }) {
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
      {error && (
        <ErrorMessage message='Failed to load movies, Please, try again...' />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  moviesLists: state.movies.moviesLists,
  error: state.movies.error,
});

export default connect(mapStateToProps, { fetchMoviesLists })(
  CategoriesContainer
);

CategoriesContainer.propTypes = {
  fetchMoviesLists: PropTypes.func,
  moviesLists : PropTypes.array,
  error: PropTypes.string
}