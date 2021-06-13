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
  const [gameDetail, setGameDetail] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGameDetail = async () => {
      try {
        const res = await axios.get(
          `https://raw.githubusercontent.com/thomas37000/hooks/alliance/src/videoGames.json`
        );
        // setDatas({
        //   allData: res.data,
        //   console: res.data.console,
        //   genre: res.data.genre,
        // });
        setGameDetail(
          res.data.filter((game) => {
            return game.id === parseInt(id);
          })[0]
        );
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getGameDetail();
  }, [id]);

  if (!gameDetail) return <div>err...</div>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const { console, genre, img, title, year } = datas;

  return (
    <>
      <div className='card-deck-container'>
        <Card style={{ width: '23rem' }}>
          <Card.Img variant='top' src={gameDetail.img} alt={gameDetail.title} />
          <Card.Body>
            <Card.Title>
              <h2>{gameDetail.title}</h2>
            </Card.Title>
            <Card.Text>
              <h3>year: {gameDetail.year}</h3>
            </Card.Text>
            {/* <Card.Text>
              <h3>console: {gameDetail.console}</h3>
            </Card.Text>
            <Card.Text>genre: {gameDetail.genre}</Card.Text> */}
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
