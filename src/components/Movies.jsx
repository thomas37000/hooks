import React, {Component} from 'react';
import { Button, Card, CardDeck} from  'react-bootstrap';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList : [
        {
            name: 'Star Wars épisode IV: Un Nouvel Espoir',
            img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRjqiljH7-NHwYJo0IEB3l-kxQPBrhUMox3Yx1DRF7Vc6lweYQP',
            date: '1977'
        },
        {
            name: 'Star Wars épisode V: L Empire contre Attaque',
            img: 'https://fr.web.img4.acsta.net/medias/nmedia/00/02/44/28/empire.jpg',
            date: '1980'
        },
        {
            name: 'Star Wars épisode VI: Le Retour du Jedi',
            img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRnsI3_bk2IYIBxTeLxOgO_3fMTHtJYT9FGMC3gWviOdNsCFDyJ',
            date: '1983'
        },
        {
            name: 'Star Wars épisode I: La Menace Fantôme',
            img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQVhtc_1ElZIcGoLomAgoj4SEaPwWlBl6k61reslAzWoHzjMi5I',
            date: '1999'
        },
        {
            name: 'Star Wars épisode II: L Attaque des Clônes',
            img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZOVb0V1rN0Rhnu7AqJNj9h6KTXS6zMbi2zS-sxVGePl1oLabH',
            date: '2002'
        },
        {
            name: 'Star Wars épisode III: La Revanche des Siths',
            img: 'http://fr.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/35/53/23/18423997.jpg',
            date: '2005'
        },
        {
            name: 'Star Wars: Le Réveil de la Force',
            img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRXPdUy3zXmu15Z6FhV2xM3DsxYo9AxGGZJN1wDFvftNH_NeUvs',
            date: '2015'
        },
        {
            name: 'Star Wars épisode VIII: Les Derniers Jedi',
            img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSG7tPPr7kIOsts0xcRQj3aCsaZ-4aFUe2Iwvi1-KVGUPd-pn-_',
            date: '2017'
        },
        {
            name: 'Star Wars épisode IX: L Ascenscion de Skywalker',
            img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS6nZAQOeN_ZKjvU6GRBeuwXT4xMMaHwKdil08HN-cvUzuok-U6',
            date: '2019'
        }
      ]
    };
  }

    render() {
      return (
        <>
          <h2>Movies</h2>
          <h3>Toute la Filmographie de Star Wars</h3>

          {this.state.movieList
          .map(({name, img, date}) => ( 
            <CardDeck>
            <Card>
            <Card.Img variant="top" src={img} alt={name} />
            <Card.Body>
            <Card.Title><h2>{name}</h2></Card.Title>
            <Card.Text><h3>date:{date}</h3></Card.Text>
            </Card.Body> 
            </Card>  
            </CardDeck> 
          ))}
        </>
      );
    }
  }

  export default Movies;