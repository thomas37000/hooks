import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

// import loader from './layout/body';
import NavBar from './layout/Nav';
import CharacterList from './components/RickMorty';

import './App.css';

const Api = () => <h1>Choose a character from Star Wars</h1>
     
export default function Routter() {
  return (
  <>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Api} />
        <Route path="/character/results/:id" component={CharacterList} />
      </Switch>
    </Router>
    </>
  );
}