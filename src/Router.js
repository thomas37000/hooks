import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

// import loader from './layout/body';
import NavBar from './layout/Nav';
import CharacterList from './components/RickMorty';
import Resultats from './components/results';
import location from './components/location';

import './App.css';

const Api = () => <h1>Welcome to Rick & Morty Api</h1>
     
export default function Routter() {
  return (
  <>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Api} />
        <Route path="/character/:id" component={CharacterList} />
        <Route path="/character/results/:id" component={Resultats} />
        <Route path="/character/location/:id" component={Location} />
          {/* <Resultats /> */}
      </Switch>
    </Router>
    </>
  );
}