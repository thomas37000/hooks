import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';
import './Character.css';

export default function Character() {
  const { id } = useParams();
  //setData c'est comme this.state donc pour changer la data quand on utlise useState
  const [data, setData] = useState({});
  const [search, setSearch] = useState('');
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDisLikes] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    // axios.get('https://github.com/akabab/starwars-api')
    axios
      .get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${id}.json`)
      .then((response) => {
        setData(response.data);
        setCharacters(response.data);
        setFilteredCharacters(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    // le [] ce sont des valeurs que React va surveiller et si les valeurs changent ils va excecuter les paramètres
    // les hooks et cette fonction [] permet à ne pas avoir à faire componentDidMount, componentDidUpdate, componentWillUpDate
  }, [id]);

  if (loading) return <div>Loading...</div>;

  // useEffect(() => {
  //   setFilteredCharacters(
  //     characters.filter(character =>
  //       character.name.toLowerCase().includes(search.toLowerCase())
  //     )
  //   );
  // }, [search, characters]);

  const { affiliations, homeworld, image, masters, name } = data;

  return (
    <>
      {/* <Link to="/"><Button variant="success">Home</Button></Link> */}
      {/* character.filter(character =>!this.state.filter || character.affiliations.includes('Alliance'))} */}
      {/* 
      <input type="text" 
        placeholder="Search" 
        onChange={ e => setSearch(e.targert.value) 
      }/> */}

      <Button
        variant='primary'
        type='button'
        onClick={() => setFilter(!filter)}
      >
        {filter ? 'Jedi' : 'DarkSide'}
      </Button>
      {/* <Button 
        variant="primary"
        type="button" 
        onClick={
          () => setJedi(affiliations.includes("Jedi"))
          }
          >Jedi and Alliance ({affiliations})
      </Button>  */}

      {/* {characters
        .filter((characters) => (filter ? characters.affiliations.includes("Jedi") : true))} */}
      <div className='card-deck-container'>
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
            <Card.Link className='like'>
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
            <Card.Text className='networks'>
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
      </div>
    </>
  );
}
