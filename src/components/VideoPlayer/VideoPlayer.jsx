import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { streamVideo } from '../../actions';

import './VideoPlayer.css';

function VideoPlayer({ streamVideo, streaming }) {
  const { id } = useParams();
  const { url: videoUrl } = streaming ? streaming.stream_infos[0] : {};
  useEffect(() => {
    streamVideo(id);
  }, []);

  return (
    <div className='videoPlayer'>
      <Link to={`/movie/${id}`}>
        <i className='fa fa-arrow-left' aria-hidden='true'></i>
      </Link>
      <video autoPlay src={videoUrl} controls></video>
    </div>
  );
}

const mapStateToProps = (state) => ({
  streaming: state.movies.streamVideo,
});

export default connect(mapStateToProps, { streamVideo })(VideoPlayer);
