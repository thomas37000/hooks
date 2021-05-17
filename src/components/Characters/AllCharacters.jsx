import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, CardDeck } from 'react-bootstrap';
import axios from 'axios';
import Character from './Character';
import styles from './Character.css';

export default function All() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  // const [ filteredCharacters, setFilteredCharacters ] = useState([]);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDisLikes] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const res = await axios.get(
          `https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${id}.json`
        );
        setData(res.data);
        setCharacters(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getCharacters();
  }, [id]);

  //   const deleteCharacter = (id) => {
  //   const filteredCharacters = characters.filter((character) => character.id !== id);

  //   setCharacters(filteredCharacters);
  // };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const { affiliations, homeworld, image, masters, name } = data;
  return (
    <>
      <Card style={{ width: '23rem' }}>
        <Card.Img variant='top' src={image} alt={name} />
        <Card.Body>
          <Card.Title>
            <h2>{name}</h2>
          </Card.Title>
          <Card.Text>
            <h3>homeworld: {homeworld}</h3>
          </Card.Text>
          <Card.Text>
            {filter ? characters.affiliations.includes('jedi') : true}
            {affiliations}
          </Card.Text>
          <Card.Text>{masters}</Card.Text>
          <Card.Link>
            <Button
              variant='primary'
              type='button'
              onClick={() => setLikes(likes + 1)}
            >
              Like ({likes})
            </Button>
            <Button
              variant='danger'
              type='button'
              onClick={() => setDisLikes(dislikes - 1)}
            >
              Dislike ({dislikes})
            </Button>
          </Card.Link>
          <Card.Text>
            <a href='/some/valid/uri' class='fa fa-facebook'>
              {' '}
            </a>
            <a href='/some/valid/uri' class='fa fa-twitter'>
              {' '}
            </a>
            <a href='/some/valid/uri' class='fa fa-instagram'>
              {' '}
            </a>
            <a href='/some/valid/uri' class='fa fa-pinterest'>
              {' '}
            </a>
            <a href='/some/valid/uri' class='fa fa-snapchat-ghost'>
              {' '}
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
