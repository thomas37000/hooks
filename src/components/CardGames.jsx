/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

export default function CardGames({ data }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDisLikes] = useState(0);
  const [loading, setLoading] = useState(false);

  if (loading) return <div>Loading...</div>;

  const { img, id, title, year } = data;

  return (
    <>
      <Link to={`/video-game/${id}`}>
        <div className='card-deck-container'>
          <Card style={{ width: '23rem' }}>
            <Card.Img variant='top' src={data.img} alt={data.title} />
            <Card.Body>
              <Card.Title>
                <h2>{data.title}</h2>
              </Card.Title>
              <Card.Text>
                <h3>year: {data.year}</h3>
              </Card.Text>
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
                <a
                  href='/some/valid/uri'
                  className='fa fa-instagram faNetworks'
                >
                  {' '}
                </a>
                <a
                  href='/some/valid/uri'
                  className='fa fa-pinterest faNetworks'
                >
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
      </Link>
    </>
  );
}
