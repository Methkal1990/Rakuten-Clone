import axios from 'axios';

const rootRequest = axios.create({
  baseURL: 'https://gizmo.rakuten.tv/v3',
});

export default {
  fetchMoviesLists(category) {
    const response = rootRequest.get(
      `/lists/${category}?classification_id=5&device_identifier=web&locale=es&market_code=es`
    );
    return response;
  },

  fetchSingleMovie(id) {
    const response = rootRequest.get(
      `/movies/${id}?classification_id=5&device_identifier=web&locale=es&market_code=es`
    );
    return response;
  },

  streamVideo(id) {
    const response = rootRequest.post(
      '/me/streamings?classification_id=5&device_identifier=web&locale=es&market_code=es',
      {
        audio_language: 'SPA',
        audio_quality: '2.0',
        content_id: `${id}`,
        content_type: 'movies',
        device_serial: 'device_serial_1',
        device_stream_video_quality: 'FHD',
        player: 'web:PD-NONE',
        subtitle_language: 'MIS',
        video_type: 'trailer',
      }
    );

    return response;
  },
};
