import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import MoviePage from './pages/MoviePage/MoviePage.jsx';
import TrailerPage from './pages/TrailerPage/TrailerPage.jsx';
import history from './history.js';
import NotFound from './pages/NotFound/NotFound.jsx';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/'>
          <Header />
          <HomePage />
        </Route>
        <Route exact path='/movie/:id'>
          <Header />
          <MoviePage />
        </Route>
        <Route exact path='/trailer/:id'>
          <TrailerPage />
        </Route>
        <Route>
        <Header />
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
