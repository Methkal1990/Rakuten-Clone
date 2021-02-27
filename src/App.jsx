import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import MoviePage from './pages/MoviePage/MoviePage.jsx';
import TrailerPage from './pages/TrailerPage/TrailerPage.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/movie'>
          <MoviePage />
        </Route>
        <Route>
          <TrailerPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
