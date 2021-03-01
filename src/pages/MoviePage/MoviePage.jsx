import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchSingleMovie } from '../../actions';
import './MoviePage.css';

function MoviePage({ fetchSingleMovie, currentMovie }) {
  const { id } = useParams();
  const history = useHistory();

  console.log(currentMovie);

  useEffect(() => {
    fetchSingleMovie(id);
  }, []);

  return (
    <>
      {currentMovie && currentMovie.id === id ? (
        <div className='moviePage'>
          <div
            className='moviePage__movieBackground'
            style={{
              backgroundImage: `url(${currentMovie.images.snapshot})`,
            }}
          >
            <div className='moviePage__head'>
              <i
                className='fa fa-play-circle fa-3x'
                aria-hidden='true'
                onClick={() => history.push(`/trailer/${id}`)}
              ></i>
              <h1>{currentMovie.title}</h1>
            </div>
          </div>
          <div className='moviePage__movieContent'>
            <ul className='moviePage__metadata'>
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
            <p className='moviePage__movieDescription'>{currentMovie.plot}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

const mapStateToProps = (state) => ({
  currentMovie: state.movies.currentMovie,
});

export default connect(mapStateToProps, { fetchSingleMovie })(MoviePage);
