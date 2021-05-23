/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';
import './Characters/Character.css';

export default function GameDetail() {
  const { id } = useParams();
  const [datas, setDatas] = useState([]);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDisLikes] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      //.get(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${id}.json`)
      .get(
        `https://raw.githubusercontent.com/thomas37000/hooks/alliance/src/videoGames${id}.json`
      )
      .then((res) => {
        setDatas({
          allData: res.data,
          console: res.data.console,
          genre: res.data.genre,
        });
        setLoading(false);
      });
    {
      (error) => {
        console.error(error);
      };
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;

  const { console, genre, img, title, year } = datas;

  return (
    <>
      <div className='card-deck-container'>
        <Card style={{ width: '23rem' }}>
          <Card.Img variant='top' src={img} alt={title} />
          <Card.Body>
            <Card.Title>
              <h2>{title}</h2>
            </Card.Title>
            <Card.Text>
              <h3>year: {year}</h3>
            </Card.Text>
            <Card.Text>
              <h3>console: {console}</h3>
            </Card.Text>
            <Card.Text>genre: {genre}</Card.Text>
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
              <a href='/some/valid/uri' className='fa fa-facebook faNetworks'>
                {' '}
              </a>
              <a href='/some/valid/uri' className='fa fa-twitter faNetworks'>
                {' '}
              </a>
              <a href='/some/valid/uri' className='fa fa-instagram faNetworks'>
                {' '}
              </a>
              <a href='/some/valid/uri' className='fa fa-pinterest faNetworks'>
                {' '}
              </a>
              <a
                href='/some/valid/uri'
                className='fa fa-snapchat-ghost faNetworks'
              >
                {' '}
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
