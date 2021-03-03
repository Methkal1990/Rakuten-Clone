import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { streamVideo, clearError } from '../../actions';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';

import './VideoPlayer.css';

function VideoPlayer({ streamVideo, streaming, error, clearError }) {
  const { id } = useParams();
  const { url: videoUrl } = streaming ? streaming.stream_infos[0] : {};
  useEffect(() => {
    streamVideo(id);
  }, []);

  return (
    <div className='videoPlayer'>
      {error && <ErrorMessage message='Failed to load the trailer' />}
      <Link to={`/movie/${id}`} onClick={clearError}>
        <i className='fa fa-arrow-left' aria-hidden='true'></i>
      </Link>
      <video autoPlay src={videoUrl} controls></video>
    </div>
  );
}

const mapStateToProps = (state) => ({
  streaming: state.movies.streamVideo,
  error: state.movies.error,
});

export default connect(mapStateToProps, { streamVideo, clearError })(
  VideoPlayer
);

VideoPlayer.propTypes = {
  streamVideo: PropTypes.func,
  streaming: PropTypes.object,
  error: PropTypes.string,
  clearError: PropTypes.func,
};
