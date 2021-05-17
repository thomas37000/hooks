import React, { Component } from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';
import MovieCard from './MovieCard';
import styles from './Movies.css';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [
        {
          id: '0',
          name: 'Star Wars épisode IV: Un Nouvel Espoir',
          image:
            'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRjqiljH7-NHwYJo0IEB3l-kxQPBrhUMox3Yx1DRF7Vc6lweYQP',
          date: '1977',
          description:
            'Il y a bien longtemps, dans une galaxie très lointaine... La guerre civile fait rage entre Il y a bien longtemps, dans une galaxie très lointaine... La guerre civile fait rage entre l&apos;Empire galactique et l&apos;Alliance rebelle. Capturée par les troupes de choc de l&apos;Empereur menées par le sombre et impitoyable Dark Vador, la princesse Leia Organa dissimule les plans de l&apos;Etoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi. Accompagné de son fidèle compagnon, le droïde de protocole C-3PO, R2-D2 s&apos;échoue sur la planète Tatooine et termine sa quête chez le jeune Luke Skywalker. Rêvant de devenir pilote mais confiné aux travaux de la ferme, ce dernier se lance à la recherche de ce mystérieux Obi-Wan Kenobi, devenu ermite au coeur des montagnes désertiques de Tatooine... Empire galactique et l&paosAlliance rebelle. Capturée par les troupes de choc de lIl y a bien longtemps, dans une galaxie très lointaine... La guerre civile fait rage entre l&pos;Empire galactique et l&apos;Alliance rebelle. Capturée par les troupes de choc de l&aposEmpereur menées par le sombre et impitoyable Dark Vador, la princesse Leia Organa dissimule les plans de lIl y a bien longtemps, dans une galaxie très lointaine... La guerre civile fait rage entre l&apos;Empire galactique et l&apos;Alliance rebelle. Capturée par les troupes de choc de lEmpereur menées par le sombre et impitoyable Dark Vador, la princesse Leia Organa dissimule les plans de l&apos;Etoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi. Accompagné de son fidèle compagnon, le droïde de protocole C-3PO, R2-D2 séchoue sur la planète Tatooine et termine sa quête chez le jeune Luke Skywalker. Rêvant de devenir pilote mais confiné aux travaux de la ferme, ce dernier se lance à la recherche de ce mystérieux Obi-Wan Kenobi, devenu ermite au coeur des montagnes désertiques de Tatooine... Etoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi. Accompagné de son fidèle compagnon, le droïde de protocole C-3PO, R2-D2 séchoue sur la planète Tatooine et termine sa quête chez le jeune Luke Skywalker. Rêvant de devenir pilote mais confiné aux travaux de la ferme, ce dernier se lance à la recherche de ce mystérieux Obi-Wan Kenobi, devenu ermite au coeur des montagnes désertiques de Tatooine... Empereur menées par le sombre et impitoyable Dark Vador, la princesse Leia Organa dissimule les plans de l&apos;Etoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi. Accompagnééchoue sur la planète Tatooine et termine sa quête chez le jeune Luke Skywalker. Rêvant de devenir pilote mais confiné aux travaux de la ferme, ce dernier se lance à la recherche de ce mystérieux Obi-Wan Kenobi, devenu ermite au coeur des montagnes désertiques de Tatooine... ',
        },
        {
          id: '1',
          name: 'Star Wars épisode V: L Empire contre Attaque',
          image:
            'https://fr.web.image4.acsta.net/medias/nmedia/00/02/44/28/empire.jpg',
          date: '1980',
          description: '',
        },
        {
          id: '2',
          name: 'Star Wars épisode VI: Le Retour du Jedi',
          image:
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRnsI3_bk2IYIBxTeLxOgO_3fMTHtJYT9FGMC3gWviOdNsCFDyJ',
          date: '1983',
          description: '',
        },
        {
          id: '3',
          name: 'Star Wars épisode I: La Menace Fantôme',
          image:
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQVhtc_1ElZIcGoLomAgoj4SEaPwWlBl6k61reslAzWoHzjMi5I',
          date: '1999',
          description: '',
        },
        {
          id: '4',
          name: 'Star Wars épisode II: L Attaque des Clônes',
          image:
            'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZOVb0V1rN0Rhnu7AqJNj9h6KTXS6zMbi2zS-sxVGePl1oLabH',
          date: '2002',
          description: '',
        },
        {
          id: '5',
          name: 'Star Wars épisode III: La Revanche des Siths',
          image:
            'http://fr.web.image3.acsta.net/r_1920_1080/medias/nmedia/18/35/53/23/18423997.jpg',
          date: '2005',
          description: '',
        },
        {
          id: '6',
          name: 'Star Wars: Le Réveil de la Force',
          image:
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRXPdUy3zXmu15Z6FhV2xM3DsxYo9AxGGZJN1wDFvftNH_NeUvs',
          date: '2015',
          description: '',
        },
        {
          id: '7',
          name: 'Star Wars épisode VIII: Les Derniers Jedi',
          image:
            'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSG7tPPr7kIOsts0xcRQj3aCsaZ-4aFUe2Iwvi1-KVGUPd-pn-_',
          date: '2017',
          description: '',
        },
        {
          id: '8',
          name: 'Star Wars épisode IX: L Ascenscion de Skywalker',
          image:
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS6nZAQOeN_ZKjvU6GRBeuwXT4xMMaHwKdil08HN-cvUzuok-U6',
          date: '2019',
          description: '',
        },
      ],
    };
  }

  render() {
    return (
      <>
        <h2>Movies</h2>
        <h3>Toute la Filmographie de Star Wars</h3>
        <div className='filmographie'>
          {this.state.movieList.map((data) => (
            <MovieCard key={data.id} data={data} />
          ))}
        </div>
      </>
    );
  }
}

export default Movies;
