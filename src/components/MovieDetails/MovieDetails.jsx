import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchSingleMovie } from '../../actions';
import './MovieDetails.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';

function MovieDetails({ fetchSingleMovie, currentMovie, error }) {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchSingleMovie(id);
  }, []);

  return (
    <>
      {currentMovie && currentMovie.id === id ? (
        <div className='movieDetails'>
          <div
            className='movieDetails__movieBackground'
            style={{
              backgroundImage: `url(${currentMovie.images.snapshot})`,
            }}
          >
            <div className='movieDetails__head'>
              <i
                className='fa fa-play-circle fa-3x'
                aria-hidden='true'
                onClick={() => history.push(`/trailer/${id}`)}
              ></i>
              <h1>{currentMovie.title}</h1>
            </div>
          </div>
          <div className='movieDetails__movieContent'>
            <ul className='movieDetails__metadata'>
              <li>
              <i className="fa fa-eye" aria-hidden="true"></i>



                {currentMovie.duration} minutes
              </li>
              <li>
                <i className='fa fa-calendar' aria-hidden='true'></i>

                {currentMovie.year}
              </li>
              <li>
              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
              {currentMovie.original_title}
              </li>
            </ul>
            <p className='movieDetails__movieDescription'>{currentMovie.plot}</p>
          </div>
        </div>
      ) : null}
      {error && <ErrorMessage message="Either the movie doesn't exist or you may need to try again"/>}
    </>
  );
}

const mapStateToProps = (state) => ({
  currentMovie: state.movies.currentMovie, error: state.movies.error,
});

export default connect(mapStateToProps, { fetchSingleMovie })(MovieDetails);
