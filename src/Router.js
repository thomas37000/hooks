import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
import styles from './App.css';

// import loader from './layout/body';
import NavBar from './layout/Nav';
import HomePage from './layout/home';
import Footer from './layout/footer';
import All from './components/AllCharacters';
import Movies from './components/Movies';
import Good from './components/Good';
import Bad from './components/Bad';
import './App.css';
//import "./node_modules/bootstrap/dist/css/bootstrap.css";

// const Api = () => <h1>Choose a character from Star Wars</h1>
const Api = () => <h1>Welcome Jedi</h1>
  
const ShowDate = (props) => {
  // const { year, month, day } = props.match.params;
  // la même const mais en hooks 
  const { year, month, day } = useParams();
  return <div>
    <p>{year} / {month} / {day}</p>
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
    <button type="button" onClick={() => props.history.push('/')}>Back to Home !</button>
  </div>
}

export default function Routter() {
  return (
  <>
    <Router>
      <NavBar />
      <Switch>
        {/* <Route exact path="/" component={Api} /> */}
        <Route exact path="/" component={HomePage} />
        <Route path="/character/:id" component={All} />
        <Route path="/alliance/:id" component={Good} />
        <Route path="/theDarkSide/:id" component={Bad} />
        <Route path="/movies/:id" component={Movies} />
        <Route path="/:year/:month/:day" component={ShowDate} />
      </Switch>
      {/*<HomePage />*/}
      <Footer />
    </Router>
    </>
  );
}