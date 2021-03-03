// initial state for testing purposes
export const initialState = {
  movies: {
    moviesLists: [
      {
        short_name: 'populares-en-taquilla',
        contents: {
          data: [
            {
              images: {
                artwork:
                  'https://images-1.wuaki.tv/system/artworks/7010/original/matrix-1611319499.jpeg',
              },
              title: 'movie 1',
              id: 1,
            },
          ],
        },
        id: 1,
      },
      {
        short_name: 'estrenos-para-toda-la-familia',
        contents: {
          data: [
            {
              images: {
                artwork:
                  'https://images-1.wuaki.tv/system/artworks/7010/original/matrix-1611319499.jpeg',
              },
              title: 'movie2',
              id: 2,
            },
          ],
        },
        id: 2,
      },
    ],
    error: 'an error occured',
    currentMovie: {title: "matrix", images: {snapshot: "image.jpg"}, duration: 100, year: 2000, original_title: "matrix"}
  },
};

