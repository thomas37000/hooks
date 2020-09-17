import React, {Component} from 'react';
import { Button, Card, CardDeck} from  'react-bootstrap';

  class Movies extends Component {
    render() {
      return (
        <>
        <h2>Movies</h2>
        <h3>Toute la Filmographie de Star Wars</h3>
        
        <CardDeck>
        <Card>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title></Card.Title>
          </Card.Body> 
        </Card>  
        </CardDeck>
        </>
      );
    }
  }

  export default Movies;