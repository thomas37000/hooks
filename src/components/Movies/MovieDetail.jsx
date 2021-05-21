import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import '../Characters/Character.css';

export default function MovieDetail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [movieDetail, setMovieDetail] = useState({
    date: '',
    description: '',
    image: '',
    id: 0,
  });
  const [likes, setLikes] = useState(0);
  const [dislikes, setDisLikes] = useState(0);

  useEffect(() => {
    setData(data);
    setMovieDetail(data);
  }, [id]);

  const { date, description, image, name } = movieDetail;

  return (
    <>
      <div className='card-deck-container'>
        <Card style={{ width: '23rem' }}>
          <Card.Img variant='top' src={image} alt={name} />
          <Card.Body>
            <Card.Title>
              <h2>{name}</h2>
            </Card.Title>
            <Card.Text>
              <h3>{date}</h3>
            </Card.Text>
            <Card.Text>{description}</Card.Text>
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
