### Start The Project

This can be done easily by running:

`npm i`

However, you may face an issue with the dependency [`@wojtekmaj/enzyme-adapter-react-17`](https://www.npmjs.com/package/@wojtekmaj/enzyme-adapter-react-17) which is the enzyme adaptor for testing purposes. As their documentation says:

>>>enzyme's dependencies have not yet been updated to declare React 17 in peerDependencies. You need to add --legacy-peer-deps to the install command for it to work >>>correctly.

To resolve this just run `--legacy-peer-deps`

### Project Desription

The project composed of three pages: Home, Details and Trailer pages. Their name is self explanatory. Routing between these pages is done through `react-router-dom` and set in the App.jsx component. I had to use the `Router` component to customize the history object and extract it to `history.js` so I can make testing with jest later on easier and simpler and for maximum usability.

Redux is being used for state management and reducers can be found in folder `reducers` and actions within `actions` folder. I have also extracted the `Provider` component of Redux to `Root.jsx` for maximum usability and for testing purposes. This Root component wraps the whole app and provides state for the rest of it.

The rest of folders and files at the src/ of the project:

- api : holds fetching requests to different apis and here just `rakuten` api
- assets: logos, images ...etc
- components: all the app components code
- mock_data: hold some mocking data for testing purposes
- setupTests: testing configuration file for enzyme

At The root of the project you can find the webpack and babel config files.

### Testing

It's done with enzyme and you can find a testing file within every component directory. At the time being, they are all unit tests. There are also some tests for reducers and redux in general.

The package.json file includes jest configurations for handling issues related to mock out files like css,sass... as these are not test so far.

### Components description

Components lives in two folder at the src/:

#### Pages
container components that renders the rest of the components in every page.

#### Componenets
