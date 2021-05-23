import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';

// import loader from './layout/body';
import FilterContextProvider from './components/Context/filterContext';
import Character from './components/Characters/Character';
import MovieDetail from './components/Movies/MovieDetail';
import GameDetail from './components/GameDetail';
import VideoGames from './components/VideoGames';
import Movies from './components/Movies/Movies';
import StarWars from './components/StarWars';
import HomePage from './layout/home';
import Footer from './layout/footer';
import Good from './components/Good';
import NavBar from './layout/NavBar';
import Bad from './components/Bad';
import './App.css';

//import "./node_modules/bootstrap/dist/css/bootstrap.css";

// const Api = () => <h1>Choose a character from Star Wars</h1>
const Api = () => <h1>Welcome Jedi</h1>;

const ShowDate = (props) => {
  // const { year, month, day } = props.match.params;
  // la même const mais en hooks
  const { year, month, day } = useParams();
  return (
    <div>
      <p>
        {year} / {month} / {day}
      </p>
      {/* history.push permet de rédiriger vers une certaine url 
          dans l'inspect / components, dans history:
          quand dans les props il y a un f c'est une méthode
      */}

      {/* location: c'est tout ce qui concerne l' url
        pathname: c'est le chemin relatif ex: /2020/05/22 
        search: ce sont tous les paramètres qu' on peut avoir
        ex si on veut les paramètres d' un utilisateur 
        /2020/05/22/?name=thomas?age=39 donc search: "?name=thomas?age=39"
    */}

      {/* match: permet de récupérer les valeurs de l' Api
        passées dans la Route ex: Route path="/:year/:month/:day"
    */}

      {/* permet de rediriger de la home vers l'url qui a le bouton back to home via la flèche à côté du loading */}
      <button type='button' onClick={() => props.history.push('/')}>
        Back to Home !
      </button>
    </div>
  );
};

export default function Routter() {
  return (
    <>
      <Router>
        <FilterContextProvider>
          <NavBar />
          <Switch>
            {/* <Route exact path="/" component={Api} /> */}
            <Route exact path='/' component={HomePage} />
            <Route path='/allCharacters/' component={StarWars} />
            <Route path='/character/:id' component={Character} />
            <Route path='/alliance/:id' component={Good} />
            <Route path='/theDarkSide/:id' component={Bad} />
            <Route path='/movies/' component={Movies} />
            <Route path='/movie/:id' component={MovieDetail} />
            <Route path='/video-games/' component={VideoGames} />
            <Route path='/video-game/:id' component={GameDetail} />
            <Route path='/:year/:month/:day' component={ShowDate} />
          </Switch>
          {/*<HomePage />*/}
          <Footer />
        </FilterContextProvider>
      </Router>
    </>
  );
}
